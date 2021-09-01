<template>
  <div class="wrapper-wide">
    <loading
      :active.sync="isLoading"
      :can-cancel="true"
      :is-full-page="fullPage"
    ></loading>

    <frontend-header></frontend-header>
    <div id="container">
      <div class="container">
        <div class="row">
          <!--Middle Part Start-->
          <div id="content" class="col-sm-12 bg-white">
            <div class="row">
              <div class="col-sm-12">
                   <div class="welcome_container">

                   </div>

                    <div style="    text-align: center;
    margin-top: 20px;">
                        <a href="#" class="btn btn-primary">Home</a>
                <a href="#" class="btn btn-primary">Dashboard</a>
                    </div>

              </div>
            </div>
          </div>
          <!--Middle Part End -->
        </div>
      </div>
    </div>

    <frontend-footer></frontend-footer>
  </div>
</template>

<style scoped>

#content {
    height: 350px;
    padding: 50px 50px;
    box-shadow: 0 1pt 12pt rgb(150 165 237);
    width: 65%;
    margin: 0% 15%;
}

.welcome_container {
    width: 50%;
    height: 225px;
    background: #ddd;
    margin: 1% 22%;
    background-image: url(https://i.pinimg.com/236x/15/8b/d9/158bd9664022de1bb002d3ab205911cc--thanks.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

@media only screen and (max-width: 600px) {
 .welcome_container {
        width: 260px;
    margin: 0% -12%;

}

#content[data-v-0b17173f] {

    width: 80%;
    margin-left: 10%;
}
}


</style>