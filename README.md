# Neocoast Challenge

This app is created in React and the purpose is do a simple sing in example, simulating an api and redirect to a home page.

### First Time Setup

- Summary of set up
- Run `npm install`

### Credentials to sign in

- username: neocoast
- pass: 123NeoCoast

## 🎓 How to use?

​
In the `package.json` you will see these scripts:
​

```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  }
}
```

1.  **`start`**: Runs the app in the development mode.
    ​
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
├─ public/                      #Project render browser
|
├─ src/
|  |- assets/                   # logo.png
│  ├─ components/               # Components
│  │  ├─ Home.js                # …that appear with a success login
│  │  ├─ SignIn.js/             # …that appear when starts the app
|  |
│  ├─ App.js/                   # Render the components
|  |
│  |─ index.css/                # Global file to styles
|  |
│  |─ index.js/                 # Entry point of the app
│
├─ .gitignore                   # List of files and folders not tracked by Git
├─ package.json                 # Project manifest
└─ README.md                    # This file
```