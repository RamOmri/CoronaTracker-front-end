# CoronaTracker
Tracker for potential Coronavirus infections

You can run this app on an emulator or app by calling ``react-native run-android```

Download all th necessary modules by calling ```yarn install``` in the root directory.

For user tracking at the moment it is necessary to manually grant the app to the device's location

the cases on the main page are specific to utrecht and are derived using api. 

To use this app you need to run the server on your computer. To input the api on the app, go to the APIEndpoint.js file in src
and paste your computer's ip address after the double slash. Make sure that your firewall isn't blocking port 8000. Now you can run the backend server
which will connect to your api. 

Please note: this app requires the back-end for use. Also, to use the map you must input a google api-key.
