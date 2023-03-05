# Proyecto 4 - Backend para una clínica dental

<details>
  <summary>Contenido 📝</summary>
  <ol>
    <li><a href="#objetivo">Objetivo</a></li>
    <li><a href="#sobre-el-proyecto">Sobre el proyecto</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#diagrama-bd">Diagrama</a></li>
    <li><a href="#instalación-en-local">Instalación</a></li>
    <li><a href="#work-flow">Work-flow</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#futuras-funcionalidades">Futuras funcionalidades</a></li>
    <li><a href="#contribuciones">Contribuciones</a></li>
    <li><a href="#licencia">Licencia</a></li>
    <li><a href="#webgrafia">Webgrafia</a></li>
    <li><a href="#desarrollo">Desarrollo</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>

## Objetivo
Este proyecto requería una API funcional conectada a una base de datos con al menos una relación de uno a muchos y una relación de muchos a muchos.

## Sobre el proyecto
Para este proyecto en el bootcamp de GeeksHubs se nos entrega el siguiente enunciado:
"Desde el departamento de producto nos piden crear el backend correspondiente al sistema de gestión de citas para una Clínica Dental.

Para ello el cliente deberá ser capaz de registrarse en la aplicación, hacer login y acceder a su área de cliente. En su área de cliente deberá poder ver una lista de las citas que tiene a futuro, crear citas, modificarlas y anularlas. También existirá una zona de usuario con sus datos personales, que solo podrá ver él mismo. Además, los dentistas deberán poder registrarse como profesionales, hacer
login y ver todas las citas y clientes registrados." 

Se valorará la ejecución técnica, así como el trabajo en equipo. Siendo un equipo de dos miembros ha sido importante la comunicación, el apoyo mutuo, la toma de decisiones consensuadas y por supuesto, el manejo de Git y el repositorio de Github: creación de ramas de trabajo, resolución de conflictos, trabajo individual en local ... 

## Stack
Tecnologías utilizadas:

<div align="center">

<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
<a href="https://www.sequelize.org/">
    <img src= "https://img.shields.io/badge/sequelize-3C76C3?style=for-the-badge&logo=sequelize&logoColor=white"/>
</a>
<a href="https://www.mysql.com/">
    <img src= "https://img.shields.io/badge/mysql-3E6E93?style=for-the-badge&logo=mysql&logoColor=white"/>
</a>
<a href="https://git-scm.com/">
    <img src= "https://img.shields.io/badge/git-F54D27?style=for-the-badge&logo=git&logoColor=white"/>
</a>
<a href=" https://www.postman.com/">
    <img src= "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"/>
</a>
<a href=" https://jwt.io/">
    <img src= "https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"/>
</a>

<a href="https://www.docker.com/">
    <img src= "https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
</a>
 </div>


## Diagrama BD
!['imagen-db'](./img/db.JPG)

## Instalación en local

1. Clonar el repositorio
2. ` $ npm install `
3. Conectamos nuestro repositorio con la base de datos 
4. ``` $ Ejecutamos las migraciones ``` 
5. ``` $ Ejecutamos los seeders ``` 
6. ``` $ npm run dev ``` 
7. ...

## Workflow
<details>
<summary>Workflow</summary>

1. Crear package.json con npm init -y.
2. Crear archivo index.js en la ruta principal. Crear .env y .env.example. Crear .gitignore con /node_modules y .env dentro. Ejecutar comando git init. 
3. Instalar express, nodemon, sequelize, sequelize-cli, mysql2, dotenv, jsonwebtoken y bcrypt. 
4. Sequelize init. Ejecutar sequelize.
5. Crear script "dev": "nodemon index.js", para mantener el servidor ejecutándose.
6. ``` $ npm run dev ``` comando para ejecutar el servidor. ctrl + c para pararlo.
7. Required express en index.js, y la variable instance app. También asignar PORT a nuestro servidor y usar un método listen para ejecutarlo:
```
const express = require('express');
const app = express();
const PORT = 3000;
app.listen(PORT, () => console.log("Server running on port: " + PORT));
```
8. Crear models Role, Doctor, User, Service and Appointment en ese orden:
```
npx sequelize-cli model:generate --name Users --attributes name:string,...
``` 
9. Añadir las foreign keys de services, doctors y users en appointments migration js file con sus respectivas relaciones. Hacer lo mismo con las que correspondan en todos los modelos.
```
references: {
          model: "Services",
          key:"id"
        }
```
10. Crear carpetas controllers y view.
En carpeta view crear las Routes.

11. Crear router.js en la ruta principal:
```
const router = require('express').Router();
module.exports = router;
```
12. Route.js conectado al index principal: 
```
const router = require('./router'); 
app.use(router);
```
13. Refactorizar a route:
```
const router = require('express').Router();

router.use('/services', servicesRouter);
router.use('/users', usersRouter)

module.exports = router;
```
14. Refactorizar controllers:
```
const serviceController = {};

serviceController.getServices = (req, res) => {return res.send('Get Services')}
serviceController.createServices = (req, res) => {return res.send('Create Services')}

module.exports = serviceController;
```
15. Crear seeders para Role, User, Doctor, Service, Appointment y  commit a la database
```
npx sequelize-cli seed:generate --name demo-user
npx sequelize-cli db:seed:all
```
16. Crear middlewares para controlar el nivel de acceso a la información o a las funcionalidades de la base de datos según roles.
16. Crear endpoints, los cuales describimos a continuación:
</details>

## Endpoints
<details>
<summary>Endpoints</summary>

- AUTH
    - REGISTRO DE USUARIOS

            POST http://localhost:3000/auth/register/
        body:
        ``` js
            
          {
            "name":"Ramón",
            "first_surname":"Folguera",
            "second_surname":"Carbonell",
            "phone": "666666666",
            "address":"Abbey Road 1",
            "email": "ramon@ramon.com",
            "password": "mipassword123"
          }
        ```

    - LOGIN DE USUARIOS

            POST http://localhost:3000/auth/login/  
        body:
        ``` js
            {
                "email": "ramon@ramon.com",
                "password": "mipassword123"
            }
        ```
- USER
    - PERFIL DE USUARIO 

        Copia el TOKEN generado por el AUTH del LOGIN:


        ```
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoiYW1wYXJvQGFtcGFyby5jb20iLCJyb2xlSWQiOjMsImlhdCI6MTY3ODAwNzMzNSwiZXhwIjoxNjc4MDE0NTM1fQ.4K6BNC2bhhrW_vyCQh7hiWI2-i-c4C-KOOgo0nHeQOg"
        ```

        En AUTHORIZATION. Type BEARER TOKEN. Pega el TOKEN generado.

            GET http://localhost:3000/users/me

        

    - MODIFICACIÓN DE DATOS DE PERFIL

        Copia el TOKEN generado por el AUTH del LOGIN:

        ```
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoiYW1wYXJvQGFtcGFyby5jb20iLCJyb2xlSWQiOjMsImlhdCI6MTY3ODAwNzMzNSwiZXhwIjoxNjc4MDE0NTM1fQ.4K6BNC2bhhrW_vyCQh7hiWI2-i-c4C-KOOgo0nHeQOg"
        ```

        En AUTHORIZATION. Type BEARER TOKEN. Pega el TOKEN generado.

            PUT http://localhost:3000/users/me
        body:
        ``` js
            {
                "attribute":"name",
                "value":"Rodrigo",
                "changes":{
                    "name": "Francisco",
                    "first_surname": "Martínez"
                    }
            }
        ```

    - VER TODAS LOS CLIENTES REGISTRADOS (COMO DENTISTA)

        LOGIN con USER con role de DOCTOR:

        body:
        ``` js
            {
              "email":"amparo@amparo.com",
              "password": "456789"
            }
        ```

        Copia el TOKEN generado por el AUTH del LOGIN:

        ```
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoiYW1wYXJvQGFtcGFyby5jb20iLCJyb2xlSWQiOjMsImlhdCI6MTY3ODAwNzMzNSwiZXhwIjoxNjc4MDE0NTM1fQ.4K6BNC2bhhrW_vyCQh7hiWI2-i-c4C-KOOgo0nHeQOg"
        ```

        En AUTHORIZATION. Type BEARER TOKEN. Pega el TOKEN generado.

        GET  http://localhost:3000/users
- APPOINTMENT
    - CREACIÓN DE CITAS

            POST http://localhost:3000/appointments/
        body:
        ``` js
            {
                "date": "2023-03-01 00:00:00",
                "service_id": 1,
                "doctor_id":1
            }
        ```

        El cliente crea una cita en estado Pendiente de Verificar por el doctor.

    - MODIFICACIÓN DE CITAS

        Copia el TOKEN generado por el AUTH del LOGIN:

        ```
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoiYW1wYXJvQGFtcGFyby5jb20iLCJyb2xlSWQiOjMsImlhdCI6MTY3ODAwNzMzNSwiZXhwIjoxNjc4MDE0NTM1fQ.4K6BNC2bhhrW_vyCQh7hiWI2-i-c4C-KOOgo0nHeQOg"
        ```

        En AUTHORIZATION. Type BEARER TOKEN. Pega el TOKEN generado.

            PUT http://localhost:3000/appointments
        body:
        ``` js
            {
                "id":"7",
                "changes":{
                    "service_id":2
                }
            }
        ```

    - ANULACIÓN DE CITAS 

        Copia el TOKEN generado por el AUTH del LOGIN:

        ```
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoiYW1wYXJvQGFtcGFyby5jb20iLCJyb2xlSWQiOjMsImlhdCI6MTY3ODAwNzMzNSwiZXhwIjoxNjc4MDE0NTM1fQ.4K6BNC2bhhrW_vyCQh7hiWI2-i-c4C-KOOgo0nHeQOg"
        ```

        En AUTHORIZATION. Type BEARER TOKEN. Pega el TOKEN generado.

            DELETE http://localhost:3000/appointments
        body:
        ``` js
            {
                "id":"7"
            }
        ```

    - VER TODAS LAS CITAS QUE TENGO COMO CLIENTE (SOLO LAS PROPIAS) 

        Copia el TOKEN generado por el AUTH del LOGIN:

        ```
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoiYW1wYXJvQGFtcGFyby5jb20iLCJyb2xlSWQiOjMsImlhdCI6MTY3ODAwNzMzNSwiZXhwIjoxNjc4MDE0NTM1fQ.4K6BNC2bhhrW_vyCQh7hiWI2-i-c4C-KOOgo0nHeQOg"
        ```

        En AUTHORIZATION. Type BEARER TOKEN. Pega el TOKEN generado.

            GET http://localhost:3000/appointments/user
    
    - VER TODAS LAS CITAS EXISTENTES (COMO DENTISTA) 

        LOGIN con USER con role de DOCTOR:

        body:
        ``` js
            {
              "email":"amparo@amparo.com",
              "password": "456789"
            }
        ```

        Copia el TOKEN generado por el AUTH del LOGIN:

        ```
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoiYW1wYXJvQGFtcGFyby5jb20iLCJyb2xlSWQiOjMsImlhdCI6MTY3ODAwNzMzNSwiZXhwIjoxNjc4MDE0NTM1fQ.4K6BNC2bhhrW_vyCQh7hiWI2-i-c4C-KOOgo0nHeQOg"
        ```

        En AUTHORIZATION. Type BEARER TOKEN. Pega el TOKEN generado.

            GET  http://localhost:3000/appointments/doctor


    - COMO MÉDICO, PODER VER SOLO MIS CITAS

        LOGIN con USER con role de DOCTOR:

        body:
        ``` js
            {
              "email":"amparo@amparo.com",
              "password": "456789"
            }
        ```

        Copia el TOKEN generado por el AUTH del LOGIN:

        ```
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoiYW1wYXJvQGFtcGFyby5jb20iLCJyb2xlSWQiOjMsImlhdCI6MTY3ODAwNzMzNSwiZXhwIjoxNjc4MDE0NTM1fQ.4K6BNC2bhhrW_vyCQh7hiWI2-i-c4C-KOOgo0nHeQOg"
        ```

        En AUTHORIZATION. Type BEARER TOKEN. Pega el TOKEN generado.

            GET  http://localhost:3000/appointments/doctor/my

    - CONSULTAR CITAS DE UN DOCTOR SIN VERIFICAR

        LOGIN con USER con role de DOCTOR:

        body:
        ``` js
            {
              "email":"amparo@amparo.com",
              "password": "456789"
            }
        ```

        Copia el TOKEN generado por el AUTH del LOGIN:

        ```
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoiYW1wYXJvQGFtcGFyby5jb20iLCJyb2xlSWQiOjMsImlhdCI6MTY3ODAwNzMzNSwiZXhwIjoxNjc4MDE0NTM1fQ.4K6BNC2bhhrW_vyCQh7hiWI2-i-c4C-KOOgo0nHeQOg"
        ```

        En AUTHORIZATION. Type BEARER TOKEN. Pega el TOKEN generado.

            GET  http://localhost:3000/appointments/doctor/my-verified

    - VERIFICAR CITA COMO DOCTOR

        LOGIN con USER con role de DOCTOR:

        body:
        ``` js
            {
              "email":"amparo@amparo.com",
              "password": "456789"
            }
        ```

        Copia el TOKEN generado por el AUTH del LOGIN:

        ```
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoiYW1wYXJvQGFtcGFyby5jb20iLCJyb2xlSWQiOjMsImlhdCI6MTY3ODAwNzMzNSwiZXhwIjoxNjc4MDE0NTM1fQ.4K6BNC2bhhrW_vyCQh7hiWI2-i-c4C-KOOgo0nHeQOg"
        ```

        En AUTHORIZATION. Type BEARER TOKEN. Pega el TOKEN generado.

            PUT  http://localhost:3000/appointments/verify

          body:
        ``` js
            {
              "email":"amparo@amparo.com",
              "password": "456789"
            }
        ```
        
</details>

## Futuras funcionalidades
[ ] Añadir un rol SuperAdmin que sea el rol del programador con acceso a todo el sistema menos a los datos privados de los pacientes y doctores.
[ ] Añadir funcionalidades para crear, modificar y eliminar servicios por los doctores.  
[ ] Añadir funcionalidades para crear, modificar o eliminar roles por el SuperAdmin
[ ] Especificar que el rol admin será para administración desde recepción con los privilegios necesarios para llevar a cabo su trabajo, como por ejemplo (añadido en el siguiente punto):
[ ] Añadir funcionalidad para crear, modificar y eliminar doctores.

## Contribuciones
Las sugerencias y aportaciones son siempre bienvenidas.  

Puedes hacerlo de dos maneras:

1. Abriendo una issue
2. Crea un fork del repositorio
    - Crea una nueva rama  
        ```
        $ git checkout -b feature/nombreUsuario-mejora
        ```
    - Haz un commit con tus cambios 
        ```
        $ git commit -m 'feat: mejora X cosa'
        ```
    - Haz push a la rama 
        ```
        $ git push origin feature/nombreUsuario-mejora
        ```
    - Abre una solicitud de Pull Request

## Licencia
Este proyecto se encuentra bajo licencia de [MIT License](https://github.com/RamonFolguera/rfc-jaoa-geekshubs-fsd-val-project4-05032023/blob/master/LICENSE).

## Webgrafia:
Para conseguir mi objetivo hemos recopilado información de:
- [Sequelize documentation](https://sequelize.org/docs/v6/)


## Desarrollo:

``` js
 const developers = "Ramón" + "Jose";
```  

Proyecto realizado por:

- **Ramón**
<a href="https://github.com/RamonFolguera" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a>

- **Jose**  
<a href="https://github.com/JoseOliver" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=red" target="_blank"></a>

##Contacto
- **Ramón**
<a href = "mailto:folguera.ramon@gmail.com"><img src="https://img.shields.io/badge/Gmail-C6362C?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/ram%C3%B3n-folguera-0ab32776/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
</p>

- **Jose**
<a href = "mailto:micorreoelectronico@gmail.com"><img src="https://img.shields.io/badge/Gmail-C6362C?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/linkedinUser/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
</p>













