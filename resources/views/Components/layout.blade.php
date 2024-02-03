<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,400;1,100;1,300;1,400&display=swap" rel="stylesheet">

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
