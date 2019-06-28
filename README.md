# Multi Screen Starter with Expo and Typescript

This project was originally written by [Caleb Nance](https://github.com/calebnance/expo-multi-screen-starter) and as such he should be praised! I have taken what he has done and refactored to Typescript. I hope it is useful.

**Expo | React Navigation v3 | Jest | ESLint/Prettier | Typescript**

### Out of the Box

- Expo SDK 33
- React Navigation v3
- Preloading/caching local assets
- SVG icon usage
- Checker for the iOS notch: iPhoneX, iPhoneXs, iPhoneXr, iPhoneXs Max

## install

`yarn` or `yarn install`

**_note:_** _make sure you at least have node ^v10.8.0_

## development on a physical device

- first, your machine and physical device should be on the same wifi connection
- make sure you have Expo CLI installed globally, if not run:
  - `npm install -g expo-cli`
- then navigate to this project's directory on your machine and run:
  - `yarn dev` or `expo start`
- now download the Expo Client app on your preferred physical device:
  - **Android:** [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)
  - **Apple:** [App Store](https://itunes.apple.com/us/app/expo-client/id982107779)
- scan the QR code generated when this project build started (expo start)
  - **android users:** the QR scanner is built within the Expo Client app! 🤗
  - **ios 11 and later:** you can open your camera app to scan the QR code, apple made the Expo peeps remove the QR scanner from the app for some reason... 🤔
  - **ios 10 and below:** i wrote about a work around to [get expo running on older iOS devices](https://blog.calebnance.com/expo/getting-expo-to-work-on-older-iphones-with-no-qr-support.html)
- having issues? check the [installation page](https://docs.expo.io/versions/latest/introduction/installation) for any pitfalls you may have.

## linting

- make sure you have [prettier package](https://atom.io/packages/prettier-atom) installed on your atom/vscode editor
- then make sure to enable these options (packages → prettier):
  - eslint integration
  - automatic format on save (toggle format on save)
- be aware of the `.prettierignore` file

## Todo

## helpful links

- [using nvm](https://davidwalsh.name/nvm)
- [setup prettier/eslint within project](https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a)

## adding linter config to another react project

- yarn:
  - `yarn add eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-import-helpers eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react prettier --dev`
- npm:
  - `npm install eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-import-helpers eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react prettier --save-dev`
- then copy over:
  - `.eslintrc`
  - `.prettierignore`
  - `.prettierrc`

## assets

- [black rabbit icon](https://thenounproject.com/search/?q=rabbit&i=1211060) was bought (royalty-free license)
- SVG Icons from [icomoon](https://icomoon.io)

## device learnings

- **ios:** The notch on iPhoneX, iPhoneXs, iPhoneXr, iPhoneXs Max is **30pt** from top
