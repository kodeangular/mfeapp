# MFEAPP

- ng new mfeapp

- ng generate application shell
- ng generate application mfe1
- ng generate application mfe2

# S2

- ng add @angular-architects/module-federation --project shell --type host --port 4200
- ng add @angular-architects/module-federation --project mfe1 --type host --port 4201
- ng add @angular-architects/module-federation --project mfe2 --type host --port 4202

# S3 : MFE1 : FlightsModule

- ng g m --project=mfe1 --flat --routing=true flights/flights
- ng g c --project=mfe1 --module=flights flights/flights-search

- update flights-route-module

  ```
  const routes: Routes = [
  { path: 'flights-search', component: FlightsSearchComponent },
  ];
  ```

- update app.module.ts
  - Add Flight Module in Imports
- Update app-component.html
  - Add router-outlet
- ng serve mfe1

  - http://localhost:4201
  - http://localhost:4201/flights-search

- Expose MFE1 Modules

  - Update webpack.config.js
  - http://localhost:4201/remoteEntry.js

  ```
      const {
          shareAll,
          withModuleFederationPlugin,
          } = require("@angular-architects/module-federation/webpack");

      module.exports = withModuleFederationPlugin({
          name: "mfe1",
          exposes: {
              "./Module": "./projects/mfe1/src/app/flights/flights.module.ts",
          },

          shared: {
              ...shareAll({
              singleton: true,
              strictVersion: true,
              requiredVersion: "auto",
              }),
          },
      });
  ```

# S4 Switch to Shell Application :: HOST APPLICATION

- Update webpack.config.js
  - Check for remote entry
- Update app-routing-module.ts
  - Check, how the remoteEntry loaded as route
- update app.component.html
  - provide nagigation link
- ng serve shell

# S5 this is repeat of S3 :: MFE2 TrainsModule

- ng g m --project=mfe2 --flat --routing=true trains/trains
- ng g c --project=mfe2 --module=trains trains/trains-search

- update trains-route-module
- update app.module.ts
  - Add Trains Module in Imports
- Update app-component.html
  - Add router-outlet
- ng serve mfe2

  - http://localhost:4202
  - http://localhost:4202/trains-search

- Expose MFE2 Modules

  - Update webpack.config.js
  - http://localhost:4202/remoteEntry.js
