# CBatmo
*A **Netatmo Weather Station** Web-APP for Raspberry Pi &amp; official Raspberry touchscreen.*

![screenshot](https://raw.githubusercontent.com/Gulivertx/cbatmo/master/screenshots/screenshot_005.png)

![screenshot](https://raw.githubusercontent.com/Gulivertx/cbatmo/master/screenshots/screenshot_004.png)

For my Netatmo Weather Station I was looking for a display information to have a quick look 
of the measures done by the station. I looked at the WEB to find something but finally did not 
find what I was really looking for. Then, I decided to use one of my Pi to develop a small touch 
application and finally share a part of my work.

This is a rewrite of my current APP which include **Netatmo API, Google Calendar API, 
Swiss Weather forecast API and WebcamTravel API**. For this public 
release I have removed Google Cal API, WebcamTraval API and change Swiss Weather 
API by Dark Sky API.

## About 2.0.0-dev git branch
This is the development branch for the next CBatmo version which will rework and include more features.

### What's new in 2.0.0 ?
* New Redux reducer / actions for a better store and more comprehensive code
* New Data Transfert Object (DTO) to manage data received from Netatmo and Darksky API
* Recognizing dynamically which Netatmo modules are connected to the station
* Give an UI feedback if a module is unavailable (for instance no battery anymore...)
* Bind Netatmo user configuration for unit and lang to Darksky API and UI
* General performance improvements to have better control of React component mount when data did not change
* Few crashes fix to keep the app alive without the message "Something went wrong" and obligation to reload the all app!!!

~~This is a work in progress and could not work ! I will tell you when this branch will be ready for test.~~
There is still some work to do but this version should now work without major issues.

## Development
This project is a Web APP write in Javascript with **ReactJS, Redux** for the frontend and **ExpressJS** 
for the backend.

The main focus of this app is :
* Must works well with a Raspberry Pi 3
* Optimized for a official Raspberry Pi touch monitor 7" (800x480)
* Design to use 5 Netatmo modules (main, external, second internal, rain and wind)

The design of the frontend is not responsive, if you want to use another screen resolution you will 
certainly get mess and have to adapt the CSS code to match with your screen.

If you don't have the same modules as mine you will also get mess because currently there is not 
any intelligence to manage modules, means they are hard coded in the frontend (this part could be 
adapted in the future...).

Currently the app support English and French languages and the configuration of the locale is taken by Netatmo settings. If you're station is in French you will have this app in French, for all other languages the fallback locale is English.

### Next development focus by priorities
* Dynamically recognize available Netatmo modules
* Bind Dark sky units from Netatmo settings (latitude / longitude and language now taken from Netatmo)

## How to try this APP
First you will need to have [NodeJS](https://nodejs.org/en/) installed and as an option [yarn](https://yarnpkg.com/en/) but this is not mandatory as NodeJS provide npm package manager.

From your computer, clone the repo, install node_modules dependencies, edit the api.json and 
start the dev-server. Do not install and build from a Raspberry, you will get an error, 
node-sass dependence is not compatible ARM architecture then it is not possible to build 
the app from this.

```bash
git clone https://github.com/Gulivertx/cbatmo.git
cd cbatmo
yarn # or npm install
```

Now edit the file located in `config/api.json` and fill your **Netatmo client ID**, **Netatmo 
client secret** and finally your **Dark Sky secret key**. If you do not have these, you have to
create login to [Netatmo developer](https://dev.netatmo.com) and [Dark Sky dev](https://darksky.net/dev) 
(All are free).

Finally build and start the application `yarn run dev:start # or npm run dev:start`

Now you should be able to reach the application from your favorite browser http://localhost:3000. 
If you want the correct size of display, from Chrome for instance, open the chrome-dev-tools, 
set the display to **responsive** and choose a resolution of **800x480**.

## What about deploy to my Pi ?
I will explain in a wiki page how to deploy this app on your Pi and how to install your 
Raspberry to start as Kiosk mod. Will come soon...
