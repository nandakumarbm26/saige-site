## Saigeware Website nextjs webapp.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.`<br />`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.`<br />`
You will also see any lint errors in the console

### `npm run build`

    Builds the app for production to the `out `folder.`<br />`
    It correctly bundles next in production mode and optimizes the build for the best performance.

    The build is minified and the filenames include the hashes.`<br />`
    Your app is ready to be deployed!

### Deployment on firebase hosting.

##### npm install -g firebase-tools

      install the firebase sdk for javascript using the above command.

##### firebase login

      login to your firebase and authenticate.

##### firebase init

      ? Are you ready to proceed? Yes
      ? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. **Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys**

      ? Please select an option: **Use an existing project / create new project**
      ? Select a default Firebase project for this directory:
      **select your project.**

      ? What do you want to use as your public directory? **out**
      ? Configure as a single-page app (rewrite all urls to /index.html)? **No**
      ? Set up automatic builds and deploys with GitHub? **No**

      - Wrote out/404.html
      - Wrote out/index.html

      i Writing configuration info to firebase.json...i Writing project information to .firebaserc...

      - Firebase initialization complete!

##### npm run build

      run this command to generate production build of the next app.

##### firebase deploy

      final step and let the firebase do its job.
"# saige-site" 
