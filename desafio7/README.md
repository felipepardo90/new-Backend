# SQL - SQL & NodeJs

- La base de datos es un repositorio persistente que nos permite almacenar un gran número de información
- Un servidor de base de datos es un contenedor que puede alojar un gran número de bases de datos
- Mediante los clientes podemos interactuar con las bases de datos

## Clientes de bases de datos

La arquitectura cliente-servidor es un modelo de diseño de software. Un **cliente** realiza _peticiones_ a un **servidor**, quien le da respuesta.

## Tipos de clientes de bases de datos

- **Cliente CLI (Command Line Interface)**: Es un cliente que interactúa con la base de datos **_mediante_** el uso de una **_consola_**.
- **Cliente GUI (Graphical User Interface)**: Es un cliente que interactúa con la base de datos **_mediante_** el uso de una **_aplicación gráfica_**.
- **Cliente WEB**: Es un cliente que interactúa con la base de datos **_mediante_** el uso de una **_navegador_**.
- **Cliente de aplicación**: Es un cliente que está implementando **dentro** de nuestra **aplicación** de **backend** y sirve para que nuestro programa se conecte e interactúe con nuestra base de datos.

## MySQL y MariaDB

- **MySQL** es un sistema de gestión de base de datos relacional desarrollado bajo licencia dual: Licencia pública general / Licencia comercial por Oracle Corporation y está considerada como la base de datos de código abierto _más popular del mundo_.
- **MariaDB** es un **sistema de gestión de base de datos** derivado de MySQL con licencia GPL (General Public License)
- **MySQL y MariaDB** son compatibles entre sí a nivel funcional.

# Knex JS

- Knex.js es un **generador de consultas SQL** con _baterías incluídas_ para Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle y Amazon Redshift, diseñado para ser flexible, portátil y fácil de usar.
- Cuenta con una **interfaz basada en callbacks** y en **promesas**
- Knex se puede utilizar como un generador de consultas SQL en Node.JS
- Se puede instalar desde npm con el comando:
  ```
  npm i knex
  ```
- Además se deben instalar las dependencias de las base de datos con la cual vamos a trabajar:

```
npm i **pg** (PostgreSQL y Amazon redshift); **mysql** (MySQl y MariaDB); **sqlite3** (SQLite3); y **mssql** (MSSQL)
```

## KNEX:JS Cheatsheet

***http://devhints.io/knex***

## COMANDOS

- Connect

  ```javascript
  require("knex")({
    client: "pg",
    connection: "postgres://user.pass@l...",
  });
  ```

- Update

  ```javascript
  knex("users").where({ id: 135 }).update({ email: "hi@example.com" });
  ```

- Create table

  ```javascript
  knex.schema.createTable("user", table=>{
    table.increments("id")
    table.string("name")
    table.integer("age")
  })
  .schema(()=>{...})
  ```

- Select

  ```javascript
  knex('users')
  .where({email: 'hi@example.com'})
  .then(rows => {...})
  ```

- Insert

  ```javascript
  knex('users')
  .insert({email: 'hi@example.com'})
  ```

## Dependencias MYSQL & KNEX

```
npm i knex mysql
(mysql es el plugin necesario para trabajar con MariaDB)
```