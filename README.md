# Neocoast Challenge

This app is created in React and the purpose is do a simple sing in example, simulating an api and redirect to a home page.

### First Time Setup

- Summary of set up
- Run `npm install`

### Credentials to sign in

- username: neocoast
- pass: 123NeoCoast

## π How to use?

β
In the `package.json` you will see these scripts:
β

```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  }
}
```

1.  **`start`**: Runs the app in the development mode.
    β
2.  **`build`**: Create a production build.

## Dependencies

- @mui/icons-material: Styles.
- @mui/material: Styles.
- react: Front End library.
- react-dom: Rendering the components in the DOM.
- react-router-dom: Implement dynamic routing in a web app.
- react-scripts: Read scripts.

## Repo structure

```
ββ public/                      #Project render browser
|
ββ src/
|  |- assets/                   # logo.png
β  ββ components/               # Components
β  β  ββ Home.js                # β¦that appear with a success login
β  β  ββ SignIn.js/             # β¦that appear when starts the app
|  |
β  ββ App.js/                   # Render the components
|  |
β  |β index.css/                # Global file to styles
|  |
β  |β index.js/                 # Entry point of the app
β
ββ .gitignore                   # List of files and folders not tracked by Git
ββ package.json                 # Project manifest
ββ README.md                    # This file
```