# mlc - [![npm version](https://badge.fury.io/js/mlc.svg)](https://badge.fury.io/js/mlc)
Magento local.xml generator script

## Install
```sh
npm install --global mlc
```

## Usage
```sh
mlc [--key <encription key>] [--db_prefix <db_prefix>] [--db_host <db host> ]
```

## Example
```sh
cd /your/magento/project
mlc --db_user magentouser --db_password password --db_name magentodb
```

## Default options
```js
{
    date: <current time>,
    key: <random key>,
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
}
```

## Licence
Licensed under the MIT license.
