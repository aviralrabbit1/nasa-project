## To use express server,
```
npm install express
```

## To use nodemon,
```
npm install --save-dev nodemon
```

## To parse csv data,
```
npm install csv-parse
```

## HTTP request logger middleware for node.js:
```
npm install morgan
```

It can be
- combined 
- common
- dev
- short
- tiny

### To log only error responses, 

```javascript
var morgan = require('morgan')

morgan('combined', {
  skip: function (req, res) { return res.statusCode < 400 }
})
```
### To write logs to a file, add:
```javascript
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
 
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
```
### For javscript testing, add as a devDependency,
```
npm install jest --save-dev
```
#### Tests should be written in separate `__tests__` folder, alternatively alongside any modules that are to be tested. Eg. router, etc like - 
In **`routes/launches`** folder, `launches.test.js` or ` launches.spec.js`

#### To re-run launches test everytime launches route updated, in server/package.json add command
```json
"test-watch": "jest --watch",
```


###  To provide a high-level abstraction for testing HTTP
```
npm install supertest --save-dev
```

### To improve performance, install pm2
```sh
npm install pm2
```

In server/package.json, add the folliwng command in scripts-
```json
"cluster":"pm2 start src/server.js -i max"
```

and in package.json, add-
```json
"deploy-cluster": "npm run cluster --prefix server",
```

for deployment, add
```json
"deploy-cluster": "npm run build --prefix client && npm run cluster --prefix server",
```

