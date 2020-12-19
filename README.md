# NodeJS-MySQL

FrameWork

express

Complementos:

express-handlebars intergracion del motor de plantillas

express-session administra las sessiones en nuestra app

mysql modulo de npm para conectarse a la ND

Fake injeccion este modulo almacena las sesiones

morgan modulo que permite mostrar por consola las peticiones que se realizan al servidor

bcryptjs modulo para cifrar las contrasenyas

bcryptjs modulo para la autentificacion

bcryptjs un complento de password para autentificar a los usuarios en la BD

timeago.js convierte los timestamps en formato 2 minutes ago, 2 hours ago

connect-flash para mostrar mensajes de error o exito cuando el usuario realice una operacion

# express-validator para validar los datos que el usuario envia desde la app cliente

npm i express express-handlebars express-session mysql express-mysql-session morgan bcryptjs passport passport-local timeago.js connect-flash express-validator

npm i nodemon -D

14:00 Creacion Servidor y estructura projecto

31:51 Conexion Mysql

crear docker mysql

https://platzi.com/tutoriales/1432-docker/3268-como-crear-un-contenedor-con-docker-mysql-y-persistir-la-informacion/

docker run -d -p 33060:3306 --name mysql-db -e MYSQL_ROOT_PASSWORD=klingon --mount src=mysql-db-data,dst=/var/lib/mysql mysql

para entrar

docker exec -it mysql-db mysql -p
53:30 DESIGNING FORM

1:10:25 POST A LINK
Guardar datos en MYSLQ

1:17:36 QUERY FROM MYSQL
Opteniendo datos desde MySQL