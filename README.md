# HaruAngularWebApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

Folder Structure contains files and Folders that are present in directory. There are multiple files and folders, for example, components, services, directives, shared, etc.

Components Folder
In Angular, all the components are made inside src\app directory by default. Components are the basic building blocks of an Angular Project, containing templates, styles and behaviour of a part of the user Interface. It contains an individual component folder each with their own HTML, CSS, TypeScript and unit test cases.

Services Folder
This Folder is responsible for handling all the services and API calls. Each service has a spec.ts file for testing purpose and a ts file in which our main functionality for service will be written. Services refers to a reusable variable/data that can be shared and used outside component in which it is defined. These are basically typescript classes with @injectable decorator, which means this class is a service and can be injected in the component that needs that service.

Directives Folder
This Folder is responsible for handling all the directives. Directives are simply and instruction to DOM. We can have custom as well as build-in Directives in Angular.

Model Folder
This folder stores all the typescript model classes used to define data structure and business logic of an application. It encapsulates properties or methods of a concept.

Core Folder
This folder serves as central storage hub of an angular application where you keep all important services, guards, interceptors for smooth functioning of the application. It helps in organizing your application as well as making it cleaner and efficient for usage.

Shared Folder
This folder is responsible for storing all the components, services, directives, etc. This folder is necessary for organizing shared files and folders.

Pages Folder
This folder serves as a directory to manage views and pages. It helps in organizing related components, template, styles ,etc. by keeping them under one folder. It helps you by giving clarification and easiness in making an angular Project.
