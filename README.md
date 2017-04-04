![Ghost from Scratch with Nanobox](https://guides.nanobox.io/assets/quickstart-icons/ghost.png)

# Ghost from Scratch with Nanobox

Run a Ghost app locally. Install nothing besides Nanobox.

<a href="https://nanobox.io/download"><img src="https://guides.nanobox.io/assets/quickstart-icons/download.png" /></a>


## Clone the Repo

```bash
# clone the code
git clone https://github.com/nanobox-quickstarts/nanobox-ghost.git

# cd into the ghost app
cd nanobox-ghost
```

## Run the App

```bash
# Add a convenient way to access your app from the browser
nanobox dns add local ghost.dev

# Run Ghost with Nanobox
nanobox run yarn start
```

## Check it Out

Visit your app at <a href="http://ghost.dev:2368" target="\_blank">ghost.dev:2368</a>

## Explore

With Nanobox, you don't have to have anything installed on your machine to run your app:

```bash
# drop into a Nanobox console
nanobox run

# where node is installed,
node -v

# your packages are available,
yarn ls

# and your code is mounted
ls
```

## Running in Production
This repo is pre-configured to run in production, however you will need to update the production url defined in the `config.js` to match the url you intend to use in production. Nanobox provides app-urls for all apps using the pattern `appname.nanoapp.io`. You're welcome to use that or your own [custom domain](https://docs.nanobox.io/domains-networking/custom-domains/).
