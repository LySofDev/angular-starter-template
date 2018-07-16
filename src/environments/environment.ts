// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mockApi: true,
  mockPrefix: "Bearer",
  mockJwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjEsImVtYWlsIjoibWFjLmhkekBnbWFpbC5jb20iLCJyb2xlIjoiY2xpZW50In0sIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMn0.6xvFEv4HTQFY_uXzxA_wk336BS4gLRHb0DPkdfPXDig",
  apiUrl: "http://localhost:3000" // Rails
  // apiUrl: "http://localhost:6000" // Node
  // apiUrl: "http://localhost:8080" // Spring
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
