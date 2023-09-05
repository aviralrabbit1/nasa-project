## Frontend

### Created from sci-fi UI framework [Arwes](https://github.com/arwes/arwes),

 ```
 npm install arwes
 ```

### To move our optimized production build directly to our server, in the client package.json,
```
"build": "BUILD_PATH='../server/public' react-scripts build",
```

### For javscript testing, add as a devDependency,
```
npm install jest --save-dev
```
#### Tests should be written in separate `__tests__` folder, alternatively alongside any modules that are to be tested. Eg. router, etc like - 
In **`routes/launches`** folder, `launches.test.js` or ` launches.spec.js`
