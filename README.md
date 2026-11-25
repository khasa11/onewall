# OneWall

**OneWall** is a wallpaper creation app that lets users design unique wallpapers using geometric compositions, photos, and colors.

The app combines ready-made layouts with customizable geometric elements, giving users an easy way to create personalized wallpapers without using complex graphic design tools.

## Features

- Browse and choose from ready-made geometric compositions.
- Fill individual areas with photos or colors.
- Customize shapes, spacing, margins, and corner rounding.
- Rearrange and replace elements.
- Use personal photos.
- Preview and export wallpapers in high resolution.
- Save wallpapers to the device.

## Tech Stack

- **React Native** — cross-platform mobile framework.
- **Expo** — development and build infrastructure.
- **TypeScript** — type safety.
- **Expo Router** — navigation.
- **HeroUI Native** — user interface components.
- **React Native Skia** — graphics rendering.
- **React Native Reanimated** — animations.
- **React Native Gesture Handler** — touch and gesture handling.

## Requirements

- Node.js
- npm
- Android Studio and Android SDK (for Android development)
- Expo Development Build

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd onewall
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npx expo start --dev-client
```

To restart with a cleared cache:

```bash
npx expo start --dev-client --clear
```

**Note:** OneWall uses native modules and requires an Expo Development Build. It cannot run in the standard Expo Go app.

## Android Build

Create a development build:

```bash
npx eas-cli@latest build --platform android --profile development
```

Create a production build:

```bash
npx eas-cli@latest build --platform android --profile production
```

EAS Build generates standalone Android packages:

- **APK** — direct installation and distribution.
- **AAB** — Google Play distribution.

## Project Structure

```text
onewall/
├── assets/
├── src/
│   ├── app/
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   └── explore.tsx
│   ├── components/
│   ├── constants/
│   ├── hooks/
│   ├── types/
│   │   └── WallpaperBlock.ts
│   └── global.css
├── app.json
├── eas.json
├── package.json
└── README.md
```

## License

Not specified yet.