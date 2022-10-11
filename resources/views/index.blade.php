<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="robots" content="noindex, nofollow">

        <title>{{ config('app.name', 'Laravel Vue Starter') }}</title>

        <!-- Scripts -->
        @stack('scripts')
    </head>

    <body>
        <div id="app"></div>

        @vite(['resources/js/client.js'])
    </body>
</html>
