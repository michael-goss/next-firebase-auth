# Next.js App using Firebase Authentication with React Context API

#### TechStack: Next.js, React, Firebase Authentication, Styled Components

## Step 1: Create Next.js App from starter template

```zsh
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"
```

## Step 2: Configure project to use TypeScript

```zsh
touch tsconfig.json
```

```js
# tsconfig.json
{
  "compilerOptions": {
    "lib": [
      "es2020"
    ],
    "module": "commonjs",
    "target": "es2020",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "allowJs": true,
    "noEmit": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve"
  },
  "include": [
    "pages/**/*"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

Install TypeScript

```zsh
npm install --save-dev typescript @types/react @types/node
```

## Step 3: Create Firebase project

1. Create new project @ firebase.google.com
1. Add Firebse to your web app (Add Firebase SDK)
1. Setup Firebase authentication (e.g. Google, Email, Facebook, ..)

## Step 4: Initialize Firebase project in App and export Firebase context

```zsh
npm install firebase
```

in file `src/firebase.ts`

```js
import firebase from "firebase/app"
import "firebase/auth"

var firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
}
// Initialize Firebase
let app: firebase.app.App
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
}

export { firebase, app }
```

in file `.env.local`

```
NEXT_PUBLIC_API_KEY=<your api key>
NEXT_PUBLIC_AUTH_DOMAIN=<your auth domain>
NEXT_PUBLIC_PROJECT_ID=<your project id>
NEXT_PUBLIC_STORAGE_BUCKET=<your storage bucket>
NEXT_PUBLIC_MESSAGING_SENDER_ID=<your messaging sender id>
NEXT_PUBLIC_APP_ID=<your app id>
```

## Step 5: Create React AuthProvider and AuthContext

in file `src/authContext.tsx`

```js
import React, { useEffect, useState, createContext, ReactNode } from "react"
import { firebase, app } from "./firebase"

// undefined: onAuthStateChanged hasn't been called
// null: user is not signed in
// User: user signed in
interface ContextProps {
  user: firebase.User | null | undefined;
}

export const AuthContext = createContext < ContextProps > { user: undefined }

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] =
    (useState < firebase.User) | null | (undefined > undefined)

  useEffect(() => {
    app.auth().onAuthStateChanged(setUser)
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}
```

## Step 6: Use AuthProvider and AuthContext

provide auth context in file `pages/_app.tsx`

```js
import { AuthProvider } from "../src/authContext"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
```

use auth context e.g. in NavBar `src/components/NavBar.tsx`

```js
import React, { useContext } from "react"
import { AuthContext } from "../authContext"
...

export default function NavBar() {
  const { user } = useContext(AuthContext)

  return (
    <NavBarStyles>
      <h1 className="title">Next Firebase Authentication</h1>
      <div className="auth-button">
        {!!user ? <LogoutButton /> : <LoginButton />}
      </div>
    </NavBarStyles>
  )
}
```

## Step 7: Sign in with Google

```js
const handleLogin = async () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  await firebase
    .auth()
    .signInWithPopup(provider)
    .then(() => {
      console.log(`successfully signed in`)
      /* do whatever is necessary after sign in, e.g. redirect */
    })
    .catch((error) => {
      console.log(`${error.code}: ${error.message}`)
    })
}
...
return (
  <button onClick={handleLogin}>Sign in with Google</button>
)

```

## Step 8: Sign out from Google Auth

```js
const handleLogout = async () => {
  await firebase.auth().signOut()
}
...
return (
  <button onClick={handleLogout}>Sign out</button>
)
```

<hr>

## Notes

In `/src/authContext.tsx` user state is initialized with value `undefined` in order to distinguish three different states:

1. `undefined`: user state initialized _and_ `app.auth().onAuthStateChanged(setUser)` hasn't finished after component's first render. `undefined` in this situation signals that we don't know whether the user is signed in or not. This case needs to be covered where user context is used, because otherwise weird state changes will be visible, when user is already signed in upon first render
1. `null`: `app.auth().onAuthStateChanged(setUser)` has finished and found that user hasn't signed in yet
1. `!null && !undefined`: `app.auth().onAuthStateChanged(setUser)` has finished and found that user has signed in successfully
