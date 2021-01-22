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
const app = firebase.initializeApp(firebaseConfig)

export default app
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
