<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&family=Playfair+Display&display=swap"
        rel="stylesheet">

    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <title>Ahmed Znagui</title>
</head>

<body>

    <div class="outline"></div>
    <div class="cursor"></div>
    
    <div id="swup" class="transition-fade">
        <div class="min-vh-100">
            {{ $slot }}
        </div>
    </div>



    <script type="module">
        import Swup from 'https://unpkg.com/swup@4?module';
        const swup = new Swup();


        
    </script>

</body>

</html>
