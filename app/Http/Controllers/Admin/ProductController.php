<?php

namespace App\Http\Controllers\Admin;

use Picqer;
use Carbon\Carbon;
use App\Models\Product;
use App\Models\Variant;
use Illuminate\Support\Str;
use App\Models\ProductImage;
use App\Models\Purchaseitem;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;
use App\Models\ProductBarcode;
use App\Models\ProductVariant;
use App\Models\ProductAttribute;
use Barryvdh\DomPDF\Facade as PDF;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;


class ProductController extends Controller
{

    public function index(Request $request)
    {

      //  return $request->all();
        $paginate = $request->item ?? 30;

        if($request->status=="all"){
            $products = Product::orderBy('id', 'DESC')->with(['productBarcode'])->paginate($paginate);

        }else{
            $products = Product::orderBy('id', 'DESC')->with(['productBarcode'])->where('status',$request->status)->paginate($paginate);

        }
        return response()->json([
           // 'status' => 'SUCCESS',
            'products' => $products
        ]);
    }


    public function slugCreator($string, $delimiter = '-') {
        // Remove special characters
          $string = preg_replace("/[~`{}.'\"\!\@\#\$\%\^\&\*\(\)\_\=\+\/\?\>\<\,\[\]\:\;\|\\\]/", "", $string);
        // Replace blank space with delimeter
        $string = preg_replace("/[\/_|+ -]+/", $delimiter, $string);
        return $string;
    }



    public function store(Request $request)
    {
        //validation data
        // return $request->all();
        $validatedData = $request->validate([
            'name' => 'required ',
            // 'merchant' => 'required',
            'category' => 'required',
            //   'quantity' => 'required',
            //  'alert_quantity' => 'required',
            // 'purchase_price' => 'required',
            'sale_price' => 'required',
            'price' => 'required',
            'details' => 'required',
            'image' => 'required',
        ]);
        DB::transaction(function() use($request){
            //get products tables max id
                $id = Product::max('id') ?? 0;
                $product_code = 1001 + $id;
                //save product data
                $product = new Product();
                $product->name = $request->name;
                $product->merchant_id=null;
                $product->category_id = $request->category;
                $product->sub_category_id = $request->sub_category ?? null;
                $product->sub_sub_category_id = $request->sub_sub_category ?? null;
                $product->product_code = $product_code;
                $product->slug = $this->slugCreator(strtolower($request->name)).'-'.$product_code;
                $product->stock = 0;
                $product->sale_price = $request->sale_price;
                $product->price = $request->price;
                $product->discount = $request->discount ?? null;
                $product->status = 1;
                $product->details = $request->details;
                $product->product_placement = $request->product_placement ?? 0;
                $product->product_position = $request->product_position ?? 0;
                $product->save();

                //if product save then generate product barcode
                $generator = new Picqer\Barcode\BarcodeGeneratorHTML();
                $barcode = $generator->getBarcode($product->product_code, $generator::TYPE_CODE_128);
                $product_barcode = new ProductBarcode();
                $product_barcode->product_id = $product->id;
                $product_barcode->barcode = $barcode;
                $product_barcode->barcode_number = $product->product_code;
                $product_barcode->save();

                //save product multiple image in store directory
                if ($request->hasFile('image')) {
                 $files = $request->file('image');

                //make thumnail image
                $filename = time() .$files[0]->getClientOriginalName();
                $image_resize = Image::make($files[0]->getRealPath());
                $image_resize->resize(200, 200, function ($constraint) {
                    $constraint->aspectRatio();
                });
                $image_resize->save(public_path('storage/images/product_thumbnail_img/'.$filename));
                $product->thumbnail_img = $filename;
                $product->save();
                 foreach ($files as $file) {
                        $product_image = new ProductImage();
                        $product_image->product_id = $product->id;
                        $path = $file->store('images/products', 'public');
                        $product_image->product_image = $path;
                        $product_image->save();
                    }
                }

                //save the product properties
                if (isset($request->attribute) && !empty($request->attribute)) {
                        $product_attribute = new ProductAttribute();
                        $product_attribute->product_id = $product->id;
                        $product_attribute->attribute_id = $request->attribute;
                        $product_attribute->save();
                }
               //save the product variants
               if (isset($request->variant) && !empty($request->variant)) {
                foreach ($request->variant as $item) {
                    $product_variant = new ProductVariant();
                    $product_variant->product_id = $product->id;
                    $product_variant->variant_id = $item;
                    $product_variant->save();
                }
              }
         });

           return response()->json([
                'status' => 'SUCCESS',
                'message' => 'added successfully'
            ]);


    }



    public function edit($id)
    {
        $product = Product::find($id);
        if ($product) {
            $productImage = ProductImage::where('product_id', $product->id)->get();
            $productAttribute = ProductAttribute::where('product_id', $product->id)->get();
            $productVariant = ProductVariant::where('product_id', $product->id)->get();
            return response()->json([
                'status' => 'SUCCESS',
                'product' => $product,
                'productImage' => $productImage,
                'productAttribute' => $productAttribute,
                'productVariant' => $productVariant,

            ]);
        }

    }



    public function search($search)
    {

      //  $products = Product::where('name', 'like', '%' . $search . '%')->orWhere('product_code', 'like', '%' . $search . '%')->orderBy('id', 'DESC')->with(['productImage', 'productBarcode'])->paginate(110);

        $products = Product::where('product_code',$search)->with(['productImage', 'productBarcode'])->paginate(110);
        return response()->json([
            'status' => 'SUCCESS',
            'products' => $products
        ]);
    }

    public function approved($id)
    {
        $product = Product::find($id);
        if ($product) {
            $product->status = 1;
            if ($product->save()) {
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => 'product approved successfully'
                ]);
            }
        }
    }

    public function pending($id)
    {
        $product = Product::find($id);
        if ($product) {
            $product->status = 2;
            if ($product->save()) {
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => 'product pending successfully'
                ]);
            }
        }
    }

    public function deny($id)
    {
        $product = Product::find($id);
        if ($product) {
            $product->status = 3;
            if ($product->save()) {
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => 'product deny successfully'
                ]);
            }
        }
    }

    public function stockUpdate(Request $request, $id)
    {

        $product = Product::find($id);
        if ($product) {
            $product->stock = $request->stock;
            if ($product->save()) {
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => 'product - ' . $product->product_code . ' - stock updated'
                ]);
            }
        }
    }

    public function updateBasicInformation(Request $request, $id)
    {

        //data validation
    //  return $request->all();
        $validatedData = $request->validate([
            'name' => 'required ',
            'category' => 'required',
            'sale_price' => 'required',
            'price' => 'required',
            'details' => 'required',
        ]);

        //find product
        $product = Product::find($id);
        if ($product) {
            //update product basic information
            $product->update([
                'name' => $request->name,
                'slug' => $this->slugCreator(strtolower($request->name)).'-'. $product->product_code,
                'category_id' => $request->category,
                'sub_category_id' => $request->sub_category ?? null,
                'sub_sub_category_id' => $request->sub_sub_category ?? null,
                'sale_price' => $request->sale_price,
                'price' => $request->price,
                'discount' => $request->discount ?? null,
                'details' => $request->details,
                'campaign_id'=>$request->campaign_id ,
                'expired_date'=>$request->expired_date ,
                'product_placement'=>$request->product_placement ?? 0,
                'product_position'=>$request->product_position ?? 0,
                'updated_at' => Carbon::now(),
                'created' => Carbon::now(),
            ]);

            return response()->json([
                'status' => 'SUCCESS',
                'message' => 'Product information was updated'
            ]);

        }


    }

    public function updateProperties(Request $request, $id)
    {

        //return $request->all();
        $validatedData = $request->validate([
            'attribute' => 'required ',
            'variant' => 'required',
        ]);

        if (Product::find($id)) {
            //find product old attribute
            if (isset($request->attribute) && !empty($request->attribute)) {
                    $product_attribute =ProductAttribute::where('product_id',$id)->first();
                    if($product_attribute){
                         $product_attribute->attribute_id = $request->attribute;
                         $product_attribute->save();
                    }else{
                         $product_attribute =new ProductAttribute();
                         $product_attribute->attribute_id = $request->attribute;
                         $product_attribute->product_id = $id;
                        $product_attribute->save();
                     }

              }

              //find product old variant
            $product_old_variants = ProductVariant::whereIn('product_id', [$id])->get();

            //delete product old variant
            foreach ($product_old_variants as $product_old_variant) {
                $product_old_variant->delete();
            }

            //save the new variant
            foreach ($request->variant as $variant) {
                $p_variant = new ProductVariant();
                $p_variant->product_id = $id;
                $p_variant->variant_id = $variant;
                $p_variant->save();
            }
            return response()->json([
                'status' => 'SUCCESS',
                'message' => 'product properties update successfully'
            ]);
        }


    }

    public function UpdateProductImage(Request $request, $id)
    {

        //save product multiple image in store directory
        if ($request->hasFile('image')) {
            $files = $request->file('image');
                $product= Product::findOrFail($id);
                //make thumnail image
                $filename = time() .$files[0]->getClientOriginalName();
                $image_resize = Image::make($files[0]->getRealPath());
                $image_resize->resize(200, 200, function ($constraint) {
                    $constraint->aspectRatio();
                });
                $image_resize->save(public_path('storage/images/product_thumbnail_img/'.$filename));
                $product->thumbnail_img = $filename;
                $product->save();

            foreach ($files as $file) {
                $product_image = new ProductImage();
                $product_image->product_id = $id;
                $path = $file->store('images/products', 'public');
                $product_image->product_image = $path;
                $product_image->save();
            }
            return response()->json([
                'status' => 'SUCCESS',
                'message' => 'product image was update successfully'
            ]);
        }

    }

    public function deleteImage(Request $request, $id)
    {

       $product_image=ProductImage::where('product_id',$id)->get();
       if ($product_image[$request->index]->delete()){
           return response()->json([
                'status'=>'SUCCESS',
               'message'=>'product image was deleted'
           ]);
       }

    }

    public function searchWithCode($code){
        $product=Product::where('product_code',$code)->where('status',1)->first();
         if($product){
            $product->{'purchase_price'}= intval(Purchaseitem::where('product_id',$product->id)->avg('price')) ;
            $product_attributes=ProductAttribute::where('product_id',$product->id)->with('attribute')->get();
            $product_variants=ProductVariant::where('product_id',$product->id)->with('variant')->get();
            $data[] = array_merge($product->toArray(),['attributes' => $product_attributes, 'variants' =>$product_variants]);
            return \response()->json([
                'status'=>'SUCCESS',
                'product'=>$data
               ]);
        }


    }



      public function copyProduct($id,$copy_items)
    {
            $c_product=Product::findOrFail($id);
            DB::transaction(function() use($c_product,$copy_items){
                for ($p=1; $p <= $copy_items ; $p++) {
                     //get products tables max id
                    $max_id = Product::max('id') ;
                    $product_code = 1001 + $max_id ;
                    $product = new Product() ;
                    $product->name = $c_product->name;
                    $product->category_id = $c_product->category_id;
                    $product->sub_category_id = $c_product->sub_category_id ?? null;
                    $product->sub_sub_category_id = $c_product->sub_sub_category_id ?? null;
                    $product->product_code = $product_code;
                    $product->slug =  $c_product->slug.'-' . $product_code;
                    $product->sale_price = $c_product->sale_price;
                    $product->price = $c_product->price;
                    $product->discount = $c_product->discount ?? null;
                    $product->thumbnail_img = $c_product->thumbnail_img;
                    $product->status = 1;
                    $product->stock = 0;
                    $product->details = $c_product->details;
                    $product->product_placement = $c_product->product_placement ?? 0;
                    $product->product_position = $c_product->product_position ?? 0;
                    $product->save();


                    //save product Image
                    $c_product_variants_img=ProductImage::where('product_id',$c_product->id)->first();
                    if (!empty($c_product_variants_img)) {
                        $product_image = new ProductImage();
                        $product_image->product_id = $product->id;
                        $product_image->product_image = $c_product_variants_img->product_image;
                        $product_image->save();
                    }

                    //if product save then generate product barcode
                        $generator = new Picqer\Barcode\BarcodeGeneratorHTML();
                        $barcode = $generator->getBarcode($product->product_code, $generator::TYPE_CODE_128);
                        $product_barcode = new ProductBarcode();
                        $product_barcode->product_id = $product->id;
                        $product_barcode->barcode = $barcode;
                        $product_barcode->barcode_number = $product->product_code;
                        $product_barcode->save();

                        //save the product
                         $c_product_attribute=ProductAttribute::where('product_id',$c_product->id)->first();
                         if (!empty($c_product_attribute)) {
                            $product_attribute = new ProductAttribute();
                            $product_attribute->product_id = $product->id;
                            $product_attribute->attribute_id = $c_product_attribute->attribute_id;
                            $product_attribute->save();
                         }

                         $c_product_variants=ProductVariant::where('product_id',$c_product->id)->get();
                         if (!empty($c_product_variants)) {
                             foreach ($c_product_variants as  $item) {
                                $product_variant = new ProductVariant();
                                $product_variant->product_id = $product->id;
                                $product_variant->variant_id = $item->variant_id;
                                $product_variant->save();
                            }
                         }


                  }


              });

              return response()->json([
                  'status' => 'success',
                  'message' => 'product duplicated -'.$copy_items. ' times' ,
              ]);


    }




    public function productStock(Request $request){

          $item=$request->item??20;
          $products=Product::where('status',1)->where('stock','>',0)->with('purchaseItem')->paginate($item);
          return response()->json($products);


}

    public function printBarcode($id,$howmany){

        $product_barcode=ProductBarcode::where('product_id',$id)->first();
        $pdf=PDF::loadView('admin.pdf.barcode',compact('product_barcode','howmany'));
  //      return $pdf->stream();
        return view('admin.pdf.barcode',\compact('product_barcode','howmany'));
    }


    public function get_suggested_product(Request $request){

        $paginate_item= $request->item ?? 10 ;
        $products=Product::orderBy('id','DESC')->where('status', 1)->where('stock', '>=', 1 )->with(['productImage'])->paginate($paginate_item);
        return response()->json([
               'status' => "OK",
               'products' => $products ,
        ]);
 }


 public function search_suggested_product($product_code){

    $products=Product::where('product_code', 'like', '%'.$product_code.'%')->with(['productImage'])->paginate(20);
    return response()->json([
           'status' => "OK",
           'products' => $products ,
    ]);
}

 public function search_suggested_product_code_name($data){


    $products=Product::where('product_code', 'like', '%'.$data.'%')
                        ->orWhere('name', 'like', '%'.$data.'%')
                        ->with(['productImage','purchaseItem','productBarcode'])
                        ->paginate(20);
    return response()->json($products);
}



    public function searchSingleProduct($code){
        $product=Product::where('product_code',$code)->first();
            return response()->json([
                'status' => "OK",
                'product' => $product ,
            ]);
    }



    public function stock_report_pdf(){

            $stock_items = Purchaseitem::orderBy('id','DESC')->with('product')->get();
                   $pdf = PDF::loadView('admin.pdf.product_stock_report',compact('stock_items'));
           return  $pdf->stream();

    }













}
