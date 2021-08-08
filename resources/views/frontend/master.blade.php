<!DOCTYPE html>
<html>
<head>


    <?php
    $setting=App\Models\GeneralSetting::first();
    ?>

    <meta charset="UTF-8" />
    <meta name="format-detection" content="telephone=no" />
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>{{ $setting->title }}</title>
    <link href="{{ asset('storage/'.$setting->icon) }}" rel="icon" />
    <meta name="description" id="meta-description" content="one of the best e-commerce platform in Bangladesh. shirt, gadget, accessories home decoration, panjabi, toys, elecetronics items are our asset">
    @include('frontend.partials.css')

</head>

<body>
    {{-- <!-- Load Facebook SDK for JavaScript -->
      <div id="fb-root"></div>
      <script>
        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v9.0'
          });
        };

        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));</script>

      <!-- Your Chat Plugin code -->
      <div class="fb-customerchat"
        attribution="setup_tool"
        page_id="537262193427665"
        theme_color="#ff4d03">
      </div> --}}
<div id="app">


<router-view :key="$route.fullPath"></router-view>
<vue-progress-bar></vue-progress-bar>

</div>


<script src="{{asset('js/app.js')}}" type="text/javascript"></script>
<script> console.log("contributed fahim muntasir") </script>
<script> console.log("contributed shibbir ahmad") </script>


</body>
</html>
