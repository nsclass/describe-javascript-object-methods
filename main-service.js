const listMethods = require('./list-object-methods')
const express = require('express');
const app = express();

const PORT_NUMBER = 3000

app.get('/api/methods/:moduleName',function(req,res)
{
    let moduleName = req.param('moduleName')
    let val = require(`${moduleName}`)
    let methods = listMethods.getMethods(val)
    res.send({
        moduleName: moduleName,
        methods: methods    
    })
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = PORT_NUMBER;
}
const server = app.listen(port, () => {})
