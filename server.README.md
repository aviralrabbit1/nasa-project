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
Some features/functions of pm2 -
- `pm2 start server.js` -> running master process 
- `pm2 ls/list` -> list of all processess
- `pm2 stop {id}` -> stops the server
- `pm2 delete server` -> deletes the server
- `pm2 start server.js -i {number_of_process/max}` -> -i = instance, how may processes
- `pm2 logs`
- `pm2 logs --lines 200` -> for last 200 lines
- `pm2 restart server`
- `pm2 start server.js -l logs logs.txt -i` -> output logs in a file
- `pm2 show {id}`
- `pm2 monit` -> terminal monitoring  