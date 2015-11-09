#!/usr/bin/env node

'use strict'

var query = require('query-mobile-phone-area')

if (process.argv.length < 3) {
    console.log('请输入手机号码')
} else {
    var result = query(process.argv[2])
    if(result){
        console.log('省 份 : ' + result.province)
        console.log('城 市 : ' + result.city)
        console.log('运营商:' + result.type)
    }else{
        console.log('无法查询')
    }
}
