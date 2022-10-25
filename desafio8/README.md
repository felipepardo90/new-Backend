# MongoDB

MongoDB es una **base de datos No relaciona, NoSQL**, orientada a documentos que ofrece una gran escalabilidad y flexibilidad, y un modelo de consultas e indexación avanzado.

### Opciones de implementación

MongoDB disponde de dos variantes de despliegue

- **Local:** Con Mongo Server a través de sus opciones Community y Enterprise
- **Remota:** mediante una plataforma configurada en la nube, lista para usar, llamada Mongo Atlas.

### Introducción a MongoDB

* El concepto de bases de datos NoSQL va creciendo y se utiliza con más frecuencia. **MongoDB es la base de datos NoSQL** más conocida.
* El concepto **NoSQL** define sistemas que difieren del modelo clásico SQL: Sistema de bases de datos relacionales. Lo más destacado de NoSQL es que **no usan SQL como lenguaje principal** de consultas.
* **MongoDB** es una base de datos **orientada a documentos**. No se basa en el concepto de Tabla Fila y Registro sino que se apoya en el concepto de **Colección, Documento y Propiedad**

### Documentos embebidos - 

Un **documento embebido** es un documento que está **insertado dentro de otro** y que ambos están ligados a la **misma colección.**

De esta manera, las bases de datos orientadas a documentos aportan una gran flexbilidad a la hora de estructurar la información.

# MongoDB: comandos en consola CLI

Algunos comandos para iniciar la operación con la base de datos:

- **```mongo:```** nos conectará de forma automática con el servidor. Actualmente el demonio se ejecuta con el comando mongod 
- **```show dbs:```** muestra la lista de bases de datos existentes.
- **```use:```** selecciona la base de datos activa (si no existe, la crea)
- **```show collections:```** muestra la lista de colecciones de esta base
- **```db.personas.insertOne({clave:valor, ...}):```** crea una colección en forma implicita llamada *personas* y le inserta un documento.
- **```db.personas.insertOne({clave:valor, ...}):```** busca todos los documentos que están dentro de la colección *personas*

# MongoDB: ventajas

- La **escalabilidad** y su **carácter descentralizado** hacen que soporte estructuras distribuidas.
- Permiten realizar **sistemas más abiertos y flexibles** debido a su fácil adaptación de nuevas evoluciones de nuestras aplicaciones web.
- **No se requieren potentes recursos** para poder trabajar con bases de datos NoSQL.
- **Optimización** de las **consultas** en base de datos para grandes cantidades de datos almacenados.


