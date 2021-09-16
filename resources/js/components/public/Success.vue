<template>
  <div class="wrapper-wide">

    <frontend-header></frontend-header>

    <div id="container">
      <div class="container">


      </div>
    </div>
    <frontend-footer></frontend-footer>
  </div>
</template>


<script>
export default {
  created(){
    setTimeout(()=>{
      this.showAlert();
    },1000);
  },
  methods: {
    showAlert(){
              Swal.fire({
              position: 'top-center',
              type: "success",
              title: '<strong><h2>আপনার অর্ডারটি কনফার্ম হয়েছে, ধন্যবাদ</h2></strong>',
              html:'<h4>বিস্তারিত জানাতে আমরা আপনাকে ফোন করবো (সকাল ৯ টা থেকে রাত ৯ টার মধ্যে )</h4>',
              confirmButtonText: `<h6><a style="color:#fff" href="/">View More</a></h6>`,
              showCancelButton: true,
              cancelButtonText: `<h6><a style="color:#fff" href="/">Close</a></h6>`,
              cancelButtonColor: 'red',
              duration: 5000,
            });
    }
  },
}
</script>

<style>



.swal2-popup {
    display: none;
    position: relative;
    box-sizing: border-box;
    grid-template-columns: minmax(0,100%);
    width: 50em !important;
    max-width: 100%;
    padding: 0 0 1.25em;
    border: none;
    border-radius: 5px;
    color: #545454;
    font-family: inherit;
    font-size: 1rem;
}



</style>