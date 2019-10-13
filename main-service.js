/*
 * Copyright 2019-present, Nam Seob Seo
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const listMethods = require('./list-object-methods')
const express = require('express');
const app = express();

const PORT_NUMBER = 3000

app.get('/api/methods/:moduleName', (req,res) => {
    let moduleName = req.params.moduleName
    let val = require(`${moduleName}`)
    let methods = listMethods.getMethods(val)
    res.send({
        moduleName: moduleName,
        methods: methods    
    })
})

app.get('/api/properties/:moduleName', (req,res) => {
    let moduleName = req.params.moduleName
    let val = require(`${moduleName}`)
    let methods = listMethods.getProperties(val)
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
