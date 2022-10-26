# MongoDB

MongoDB es una **base de datos No relaciona, NoSQL**, orientada a documentos que ofrece una gran escalabilidad y flexibilidad, y un modelo de consultas e indexación avanzado.

### Opciones de implementación

MongoDB disponde de dos variantes de despliegue

- **Local:** Con Mongo Server a través de sus opciones Community y Enterprise
- **Remota:** mediante una plataforma configurada en la nube, lista para usar, llamada Mongo Atlas.

### Introducción a MongoDB

- El concepto de bases de datos NoSQL va creciendo y se utiliza con más frecuencia. **MongoDB es la base de datos NoSQL** más conocida.
- El concepto **NoSQL** define sistemas que difieren del modelo clásico SQL: Sistema de bases de datos relacionales. Lo más destacado de NoSQL es que **no usan SQL como lenguaje principal** de consultas.
- **MongoDB** es una base de datos **orientada a documentos**. No se basa en el concepto de Tabla Fila y Registro sino que se apoya en el concepto de **Colección, Documento y Propiedad**

### Documentos embebidos -

Un **documento embebido** es un documento que está **insertado dentro de otro** y que ambos están ligados a la **misma colección.**

De esta manera, las bases de datos orientadas a documentos aportan una gran flexbilidad a la hora de estructurar la información.

# MongoDB: comandos en consola CLI

Algunos comandos para iniciar la operación con la base de datos:

- **`mongo:`** nos conectará de forma automática con el servidor. Actualmente el demonio se ejecuta con el comando mongod
- **`show dbs:`** muestra la lista de bases de datos existentes.
- **`use:`** selecciona la base de datos activa (si no existe, la crea)
- **`show collections:`** muestra la lista de colecciones de esta base
- **`db.personas.insertOne({clave:valor, ...}):`** crea una colección en forma implicita llamada _personas_ y le inserta un documento.
- **`db.personas.find():`** busca todos los documentos que están dentro de la colección _personas_

# MongoDB: ventajas

- La **escalabilidad** y su **carácter descentralizado** hacen que soporte estructuras distribuidas.
- Permiten realizar **sistemas más abiertos y flexibles** debido a su fácil adaptación de nuevas evoluciones de nuestras aplicaciones web.
- **No se requieren potentes recursos** para poder trabajar con bases de datos NoSQL.
- **Optimización** de las **consultas** en base de datos para grandes cantidades de datos almacenados.

# MongoDB: Listado de Comandos

- **show dbs:** listado de bases no vacías
- **use:** crea y selecciona base de trabajo
- **db:** muestra la base actual
- **show collections:** listado de colecciones
- **load:** carga un script de comandos

```javascript
show dbs
use <database_name>
db // prints the current database
show collection
load(myScript.js)

db.coll.drop() // borra una colección y sus índices respectivos
db.dropDatabase() // elimina la base de datos actual


// Create collection
db.createCollection("contacts") // crea una colección en forma explícita

db.coll.stats() // refleja estadísticas del uso de la base
db.coll.storageSize() // tamaño de almacenamiento de la colección
db.coll.totalIndexSize() // tamaño total de todos los índices de la colección
db.coll.totalSize() // tamaño total en bytes de los datos de la colección más el tamaño de cada índice de la colección
db.coll.validate({full: true}) // comprueba la integridad de una colección
db.coll.renameCollection("new_coll", true) // renombra una colección, el 2do parámetro para borrar la colección destino si existe.
```

# Comandos CRUD

# CREATE & READ

### Comando Create (_insert_)

```
db.coll.insertOne({name: "Max"})
db.coll.insert([{name: "Max"}, {name: "Alex"}])
db.coll.insert([{name: "Max"}, {name: "Alex"}], {ordered: false})
db.coll.insert({date: ISODate()})
db.coll.insert({name: "Max"}, {"writeConcern":{"w":"majority", "wtimeout": 5000}}))
```

### Comando Read (_find_)

```
db.coll.findOne(); // returns a single document
db.coll.find(); // returns a cursor - show 20 results - "it" to display more
db.coll.find().pretty();
db.coll.find({ name: "Max", age: 32 });
db.coll.find({ date: "ISODate("2020-09-25ST13:57:17.1802")});
```
