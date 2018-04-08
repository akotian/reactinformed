# reactinformed

## Dependencies
```
node --versions >= v9.11.1
npm --version >= 5.6.0
```

## To Run
1. In the repo directory run `npm install` to get the required packages installed
2. Bundle file needs build, so run helper script `./build_bundle.sh`
3. `ls -l car_picker/assets/bundles/` should have `car_picker.bundle.js`
2. `cd car_picker && python -m SimpleHTTPServer` to get the index.html serving using Python SimpleHTTPServer.
3. React should now kick in and load the app
