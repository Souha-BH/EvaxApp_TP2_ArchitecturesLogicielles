# Binome

Souha Ben Hassine & Cyrine Zaouali
GL4

## Explaining the choice of the architecture

MVVM guides us through distributing responsibilities between classes in a GUI application (or between layers), with the goal of having a small number of classes, while keeping the number of responsibilities per class small and well defined.

## Explaining the choice of Angular Framework

Angular framework is embedded with original MVC but it’s more of an MVVM software architectural setup. Angular does not ask developers to split an application into different MVC components and build a code that could unite them.
Its framework uses the MVVM(Model-View-ViewModel) architecture better than an MVC (Model-View-Controller) one. The MVVM model supports two-way data binding between View and ViewModel. This allows the automatic propagation to change within ViewModel’s state to the view. Typically, ViewModel uses the observer model to inform changes to the ViewModel model to model.

# EvaxApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
