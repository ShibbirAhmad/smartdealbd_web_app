<template>
  <div class="wrapper-wide">

    <frontend-header :categories="categories"></frontend-header>

    <div id="container">
      <div class="container">
        <!-- Breadcrumb End-->

        <div class="row">
          <div class="empty-cart">
            <h4 class="text-uppercase">Thank you for your order</h4>
            <img style="    margin-bottom: 50px;
    margin-top: 50px;max-width:80%;" src="https://static-cms.hotjar.com/images/blog-17-Featured-1.width-750.png">
            <br/>
            <a href="/" style="    background: rgb(11 19 244);
    color: #fff;
    padding: 12px 15px;
    border-radius:5px;">Home</a>
            <a href="/user/dashboard" style="    background: rgb(11 19 244);
    color: #fff;
    padding: 12px 15px;
    border-radius: 5px;">Dashboard</a>
          </div>
        </div>
      </div>
    </div>
    <frontend-footer></frontend-footer>
  </div>
</template>




<style>
.empty-cart {
  width: 50%;
  background: #fff;
  text-align: center;
  margin-left: 25%;
  padding: 50px 50px;
  box-shadow: 3px 3px 3px #ddd;
}
.payment_option {
  background: #e6eaf2;
  padding: 15px 15px;
  text-align: center;
  font-size: 13px;
  border-radius: 5px;
  cursor: pointer;
  height: 70px;
  margin-top: 8px;
}
.payment_option h4 {
  font-size: 16px;
  font-weight: 600;
}
.payment_option_active {
  border: 1px solid #ff4d03;
}
</style>