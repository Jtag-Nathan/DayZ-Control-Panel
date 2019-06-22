# DayZControlPanel

Welcome to DayZ-Control-Panel, previously DayZ Control Center was available however it only supported DayZ Vanilla and was quickly becoming outdated and depreciated with not only the release of DayZ Epoch but the release of PHP 7.

DayZ Control Center was a desktop application desinged with ease of use in mind, users could setup a DayZ Server with minimal effort and use the handy web control panel however as stated above it only supported DayZ Vanilla and is now depreciated so in this project I am aiming to re build my own version of the web admin panel using [Angular 8](https://github.com/angular) for a more modern web panel and support for various DayZ mods.

There will be two main components to this porject as outlined below.

## Control Panel

Previously DayZ Control Center only ran locally, you could allow the web panel access to WAN networks and manage your server from anywhere on the web however each instance of
DayZ Control Center only supported up to 6 servers and you could not install the software multiple times on the same host to gain more servers as this would conflict heavily with the already running apache server, even if you changed the port on the second instance of the software there were still plenty of problems present and the solutions just did not seem at all worthy.

The new modern control panel will be hosted globaly meaning anyone anywhere in the world can register an account and use this service !
With the control panel now being hosted in the web and not locally this will provide much greater flexibility over the ammount of servers you can manage with this and also what DayZ mods are supported. 
Initially the control panel will have support for DayZ Vanilla and DayZ Epoch however unlike DayZ Control Center wich was hard coded to work with Vanilla only and required many code breaking changes to get working with Epoch this will be built with flexibility in mind and should work with many mods !

## Local Monitor

The local monitor will serve a very basic purpose and that is simply to monitor the running DayZ Server and relay neccesary information back to the control panel.
I have decided to use this aproach as this allows you to download and run a "Local Monitor" on any of your hosts that run a DayZ Server, the monitor will contain a simple GUI where you can log in using your registerd Control Panel credentials and add the server it is monitoring to your available servers for management this however is still in developement and may change to using randomly generated keys instead of requiring you to log in. Feedback on this is welcome !

# Angular Specific

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
