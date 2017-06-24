// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBZWL5oPWUz6QfxaZg6XPy02ZcY_e2klw4",
    authDomain: "wintr-hackathon.firebaseapp.com",
    databaseURL: "https://wintr-hackathon.firebaseio.com",
    projectId: "wintr-hackathon",
    storageBucket: "wintr-hackathon.appspot.com",
    messagingSenderId: "431177442795"
  }
};
