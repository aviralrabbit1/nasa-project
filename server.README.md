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

