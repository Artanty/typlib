== update version in npm:
1
cd to project:
cd projects/typlib
2
npm version patch
3
ng build <lib>:
ng build typlib
4
cd to dist/<lib>:
cd ../../dist/typlib
5
npm publish
6
go to app using this lib and 
npm update <lib>
 


# Typlib

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

## Code scaffolding

Run `ng generate component component-name --project typlib` to generate a new component. 
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project typlib`.
> Note: Don't forget to add `--project typlib` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build typlib` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build typlib`, go to the dist folder `cd dist/typlib` and run `npm publish`.

## Running unit tests

Run `ng test typlib` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
