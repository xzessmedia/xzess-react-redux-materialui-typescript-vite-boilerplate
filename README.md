# xzess react-redux-material-typescript-vite Boilerplate (xRRMTVB)
by Tim Koepsel / xzessmedia

A boilerplate for rapid Frontend development
Powered by Typescript, React, Redux, MaterialUI and Vite


## How to bootstrap new Project
- Bare Clone repository like this `git clone https://github.com/xzessmedia/xzess-react-redux-materialui-typescript-vite-boilerplate.git --bare <projectname>`
- Create a new git repository and then push it like this `git push --mirror <your_new_repo_url_here>`
- Delete the local repository
- Clone your new copy `git clone <your_new_repo_url_here>`
- Add Upstream with `git remote add upstream https://github.com/xzessmedia/xzess-react-redux-materialui-typescript-vite-boilerplate.git` and `git remote set-url --push upstream DISABLE`

## Update the latest xRMMTVB
When you develop your Frontend it can happen that xRMMTB has been updated
Then you want to get the latest update to your project by

```shell
git fetch upstream
git pull upstream master
```
---

## Update Submodule
Update the Submodule by ``

```shell
git submodule update --init --recursive --force –remote
```
---

## Quick Start

### 1. Installation
First install the project locally

```shell
# install deps
npm install
```

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
