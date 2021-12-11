<template>
      <div class="order_statistic">

        <router-link :to="{ name: 'order' }" class="statistic_item " >
          <h2>  {{ order_count.total }} </h2>
          <p> All Order </p>
        </router-link>

        <router-link :to="{ name: 'NewOrder' }" class="statistic_item " >
              <h2> {{ order_count.new_order }} </h2>
               <p> New/Processing </p>
        </router-link >

        <router-link :to="{ name: 'PendingOrder' }" class="statistic_item " >
            <h2> {{ order_count.pending_order }} </h2>
            <p>Payment Pending</p>
        </router-link>


        <router-link :to="{ name: 'stock_out_order' }" class="statistic_item " >
            <h2> {{ order_count.stock_out }} </h2>
            <p>Stock Out</p>
        </router-link>

        <router-link  :to="{ name: 'invoice_pending' }" class="statistic_item" >
         <h2>  {{ order_count.pending_memo }} </h2>
         <p> Invoice Pending </p>
        </router-link>

        <router-link :to="{ name: 'ApprovedOrder' }" class="statistic_item " >
         <h2>  {{ order_count.approved_order }} </h2>
         <p> Ready To Ship </p>
        </router-link>

        <router-link :to="{ name: 'ShipmentOrder' }" class="statistic_item " >
         <h2>  {{ order_count.shipment_order }} </h2>
         <p> In Courier/Shipment  </p>
        </router-link>


        <router-link :to="{ name: 'DeliveredOrder' }" class="statistic_item " >
         <h2>  {{ order_count.delivered_order }} </h2>
         <p> Delivered  </p>
        </router-link>


        <router-link :to="{ name: 'ReturnOrder' }" class="statistic_item " >
         <h2>  {{ order_count.return_order }} </h2>
         <p> Return  </p>
        </router-link>


        <router-link :to="{ name: 'ReturnOrder' }" class="statistic_item " >
         <h2>  {{ order_count.return_order }} </h2>
         <p> Demage  </p>
        </router-link>

        <router-link :to="{ name: 'CancelOrder' }" class="statistic_item " >
         <h2>  {{ order_count.cancel_order }} </h2>
         <p> Cancel  </p>
        </router-link>

  
        <router-link :to="{ name: 'customer_confirmation_pending' }" class="statistic_item " >
         <h2>  {{ order_count.customer_confirmation }} </h2>
         <p> Customer Confirmation  </p>
        </router-link>



        </div>

</template>

<script>
export default {
  props:{
      order_count:{

      }
  },


}
</script>