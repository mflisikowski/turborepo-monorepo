# Turborepo monorepo

## About

It uses [Turborepo](https://turbo.build/repo) and contains:

```text
.vscode
  └─ Recommended extensions and settings for VSCode users
apps
  ├─ expo
  |   ├─ Expo SDK
  |   ├─ React Native using React 18
  |   ├─ Navigation using Expo Router
  |   └─ Tailwind using NativeWind
  └─ next.js
      ├─ Next.js 14
      ├─ React 18
      └─ Tailwind CSS
packages
  ├─ api
  |   └─ OpenAPI with TypeScript
  └─ ui
      └─ Start of a UI package for the webapp using shadcn-ui
tooling
  ├─ eslint
  |   └─ shared, fine-grained, eslint presets
  ├─ prettier
  |   └─ shared prettier configuration
  ├─ tailwind
  |   └─ shared tailwind configuration
  └─ typescript
      └─ shared tsconfig you can extend from
```

### 1. Setup dependencies

```bash
# Install dependencies
pnpm i

# Configure environment variables
cp .env.example .env
```

### 2. Configure Expo `dev`-script

1. Make sure you have XCode and XCommand Line Tools installed [as shown on expo docs](https://docs.expo.dev/workflow/ios-simulator).

2. Install Android Studio tools [as shown on expo docs](https://docs.expo.dev/workflow/android-studio-emulator).

3. Run `pnpm dev` at the project root folder.

#### 3. Use iOS Simulator

1. Run `pnpm dev:expo:ios` at the project root folder.

#### 4. Use Android Emulator

1. Run `dev:expo:android` at the project root folder.

### 5. Open API wit Typescript

### 6. Next.js

Framework that enables functionality such as server-side rendering and generating static websites for React based web applications. It is a great choice for building web applications, and it is also a great choice for building web applications that need to be optimized for search engines.

### 7. Expo

Set of tools, libraries, and services that help you build native iOS and Android apps. It makes it easy to build and deploy mobile apps using React Native.
