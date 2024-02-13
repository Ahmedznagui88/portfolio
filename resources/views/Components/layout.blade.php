<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    <link rel="icon" href="/img/arrow.png " type="image/x-icon">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <title>Ahmed Znagui</title>
</head>

<body data-barba="wrapper">

    
    
        <div class="min-vh-100">
            {{ $slot }}

        </div>
        <x-footer />   
    


    
    
    
        <script src="https://unpkg.com/@barba/core"></script>
        <script src="https://cdn.jsdelivr.net/npm/@barba/core"></script>
</body>

</html>
