# Proyecto 4 - Backend para una clínica dental

<details>
  <summary>Contenido 📝</summary>
  <ol>
    <li><a href="#objetivo">Objetivo</a></li>
    <li><a href="#sobre-el-proyecto">Sobre el proyecto</a></li>
    <li><a href="#deploy-🚀">Deploy</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#diagrama-bd">Diagrama</a></li>
    <li><a href="#instalación-en-local">Instalación</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#futuras-funcionalidades">Futuras funcionalidades</a></li>
    <li><a href="#contribuciones">Contribuciones</a></li>
    <li><a href="#licencia">Licencia</a></li>
    <li><a href="#webgrafia">Webgrafia</a></li>
    <li><a href="#desarrollo">Desarrollo</a></li>
    <li><a href="#agradecimientos">Agradecimientos</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>

## Objetivo
Este proyecto requería una API funcional conectada a una base de datos con al menos una relación de uno a muchos y una relación de muchos a muchos.

## Sobre el proyecto
Para este proyecto en el bootcamp de GeeksHubs se nos entrega el siguiente enunciado:
"Desde el departamento de producto nos piden crear el backend
correspondiente al sistema de gestión de citas para una Clínica Dental.

Para ello el cliente deberá ser capaz de registrarse en la aplicación, hacer login y acceder a su área de cliente. En su área de cliente deberá poder ver una lista de las citas que
tiene a futuro, crear citas, modificarlas y anularlas.
También existirá una zona de usuario con sus datos personales, que solo podrá
ver él mismo.
Además, los dentistas deberán poder registrarse como profesionales, hacer
login y ver todas las citas y clientes registrados." 

## Deploy 🚀
<div align="center">
    <a href="https://www.google.com"><strong>Url a producción </strong></a>🚀🚀🚀
</div>

## Stack
Tecnologías utilizadas:
<div align="center">
<a href="https://www.mongodb.com/">
    <img src= "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/>
</a>
<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
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

## Endpoints
<details>
<summary>Endpoints</summary>

- AUTH
    - USERS REGISTER

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

    - USERS LOGIN

            POST http://localhost:3000/auth/login/  
        body:
        ``` js
            {
                "email": "ramon@ramon.com",
                "password": "mipassword123"
            }
        ```
    - PERFIL DE USUARIO 

            GET http://localhost:3000/api/rutina

    - MODIFICACIÓN DE DATOS DE PERFIL
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

    - MODIFICACIÓN DE CITAS 

    - ANULACIÓN DE CITAS 

    - VER TODAS LAS CITAS QUE TENGO COMO CLIENTE (SOLO LAS PROPIAS) 

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

        GET  http://localhost:3000/appointments/doctor

        En AUTHORIZATION. Type BEARER TOKEN. Pega el TOKEN generado.

        ``` js
           {
                "success": true,
                "message": "All Appointments succesfully retrieved as user doctor",
                "data": [
                    {
                      ... 
                    },
                ]
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

        GET  http://localhost:3000/users

        En AUTHORIZATION. Type BEARER TOKEN. Pega el TOKEN generado.

        ``` js
           {
                "success": true,
                "message": "All Registered Users succesfully retrieved as user doctor",
                "data": [
                    {
                        "id": 2,
                        "name": "Jose Andrés",
                        "first_surname": "Oliver",
                        "second_surname": "Abel",
                        "phone": "665544332",
                        "email": "jose@jose.com",
                        "address": "10 Whiston Road"
                    },
                    {
                        "id": 5,
                        "name": "Álvaro",
                        "first_surname": "Bernabé",
                        "second_surname": "Alonso",
                        "phone": "656565656",
                        "email": "alvaro@alvaro.com",
                        "address": "5 Abbey Road"
                    }
                ]
            }
        ```
        - VER UNA CITA EN DETALLE
        - ELEGIR MÉDICO EN LA CITA
        - COMO MÉDICO, PODER VER SOLO MIS CITAS
        
</details>

## Futuras funcionalidades
[ ] 
[ ] 
[ ]  
[ ] ...

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
Para conseguir mi objetivo he recopilado información de:
- link a repositorios 
- link a documentacion de librerias externas
- ...

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









#Project 4 - Backend for a dental clinic

Step 1 - Creation of package.json with npm init -y.
Step 2 - Creation of index.js on the main root. Creation of .gitignore with /node_modules in it. git init.
Step 3 - Installed express, nodemon, sequelize, sequelize-cli, mysql2
Step 4 - Sequelize init. We start sequelize.
Step 5 - Creation of script "dev": "nodemon index.js", to keep our server running.
Step 6 - npm run dev to start the server. ctrl + c to stop it. 


Step 7 -Required express in index.js, and instance app variable. Also assign a PORT to our server and use a listen method to start it:

```
const express = require('express');
const app = express();
const PORT = 3000;
app.listen(PORT, () => console.log("Server running on port: " + PORT));
```
Step 8 - Created models Users, Services and Appointments in that order:
npx sequelize-cli model:generate --name Users --attributes name:string,...
Step 9 - Added the foreign keys of services and users in appointments migration js file:
```
references: {
          model: "Services",
          key:"id"
        }
```

Step 10 - Created controllers and view folder.
In view folder created UsersRouter, servicesRouter

Step 11 - Created router.js file in main root:
```
const router = require('express').Router();
module.exports = router;
```

Step 12 - Route.js Connected to main index 
```
const router = require('./router'); 
app.use(router);
```

Step 13 - Refactor to route. 
```
const router = require('express').Router();

router.use('/services', servicesRouter);
router.use('/users', usersRouter)

module.exports = router;
```
Step 14 - Refactor users and services to controllers.
```
const serviceController = {};

serviceController.getServices = (req, res) => {return res.send('Get Services')}
serviceController.createServices = (req, res) => {return res.send('Create Services')}

module.exports = serviceController;
```
Step 15 - Created seeders for Role, User, Doctor, Service, Appointment and committed to the database

npx sequelize-cli seed:generate --name demo-user
npx sequelize-cli db:seed:all




