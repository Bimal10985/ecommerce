<!doctype html>
<html lang="en">
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">


<!--     <link rel="icon" type="image/png" sizes="32x32" href="{{ URL('public/images/favicon.png') }}">
 -->
    <title>Ecommerce</title>
    <link rel="stylesheet" type="text/css" href="{{ URL::asset('css/style.css') }} ">
    <link rel="stylesheet" type="text/css" href="{{ URL::asset('css/bootstrap.min.css') }} ">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
    
    
    <body>
        <div>
            @include('frontend.blogdaddy.blogdaddy')
        </div>
        <div>
            @include('frontend.aboutus.aboutus')
        </div>
        <div>
            @include('frontend.contactus.contactus')
        </div>
        <div>
            @include('frontend.header.topnav')
        </div>


       <div>
           @yield('content')
       </div>

            
        

        <div>
            @include('frontend.footer.footer')
        </div>









        <script type="text/javascript" src="{{ URL::asset('js/jquery.min.js') }}"></script>
        
        <script type="text/javascript" src="{{ URL::asset('js/bootstrap.min.js') }}"></script>
    
        <script type="text/javascript" src="{{ URL::asset('js/main.js') }}"></script>
    </body>        

</html>