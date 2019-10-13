const listMethod = require('./list-object-methods.js')
const express = require('express');
const app = express();

const PORT_NUMBER = 3000

app.get('/api/methods/:moduleName',function(req,res)
{
    let moduleName = req.param('moduleName')
    let val = require(`${moduleName}`)
    let methods = listMethod.getMethods(val)
    res.send({
        moduleName: moduleName,
        methods: methods    
    })
})

const server = app.listen(PORT_NUMBER, () => {})
