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


<div id="app">


<router-view :key="$route.fullPath"></router-view>
<vue-progress-bar></vue-progress-bar>

</div>


<script src="{{asset('js/app.js')}}" type="text/javascript"></script>
<script> console.log("contributed fahim muntasir") </script>
<script> console.log("contributed shibbir ahmad") </script>


</body>
</html>
