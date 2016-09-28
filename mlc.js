#!/usr/bin/env node

'use strict';

process.title = 'mlc';

var fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));
var fields = {
    date: new Date().toString(),
    key: Math.random().toString(36),
    db_prefix: '',
    db_host: '127.0.0.1',
    db_user: 'magentouser',
    db_pass: 'password',
    db_name: 'magentodb',
    db_init_statemants: 'SET NAMES utf8',
    db_model: 'mysql4',
    db_type: 'pdo_mysql',
    db_pdo_type: '',
    session_save: 'files',
    admin_frontname: 'admin'
};

fs.readFile('app/etc/local.xml.template', (err, data) => {
    if (err) throw err;

    let localxml = data.toString();

    Object.keys(fields).forEach(function (key) {
        let replacement = argv.hasOwnProperty(key) ? argv[key] : fields[key];
        localxml = localxml.replace('{{' + key + '}}', '<![CDATA[' + replacement + ']]>');
    });

    fs.writeFile('app/etc/local.xml', localxml, (err) => {
      if (err) throw err;

      console.log('MLC: local.xml has been generated');
    });
});
