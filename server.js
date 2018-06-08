var express = require('express');
    express().use('/', express.static(__dirname)).listen(3322)
    console.log(3322);
