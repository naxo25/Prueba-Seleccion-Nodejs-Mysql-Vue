# Vue-NodeJs-MySql

Comunicando front y back con api-rest en nodejs-express.

## Configurar entorno para linux

### VueJS

Agrega a tu archivo.html

	<script src="https://unpkg.com/vue@next"></script>
	<script>
		const Vue.createApp({}).mount('#app')
	</script>

Documentación: [https://v3.vuejs.org/guide/installation.html#cdn](https://v3.vuejs.org/guide/installation.html#cdn)

### MySql

Instalar:
		
	sudo apt install mysql-server
	Verificar mysql: mysql --version

Iniciar, habilitar, verificar servicio:

	sudo systemctl start mysql
	sudo systemctl enable mysql
	sudo systemctl status mysql

Script para seguridad de root:

	sudo mysql_secure_installation

Elige una contraeña robusta sino da errores de seguridad en los protocolos entre apis.

##### Accede al MySQL Shell para las siguientes instrucciones:

	sudo mysql -u root -p

Crear usuario:

	CREATE USER 'naxweb'@'localhost' IDENTIFIED BY '1234AAa.';

Crear base de datos:

En este caso legaltec = [database_name]

	CREATE DATABASE legaltec;
	USE legaltec;

Dar permisos a un usuario sobre una base de datos:

	GRANT ALL PRIVILEGES ON legaltec.* TO 'naxweb'@'localhost';

[Crear tabla e insertar registros](./crear%20bd.sql)

Verificar si se crearon:

	Select * from multas;

Desinstalar:

	sudo apt remove mysql

Basado en: https://likegeeks.com/es/mysql-en-linux/

### NodeJs

[Descargar para linux](https://nodejs.org/es/)

Descomprime el archivo .tar.xz y renombra la carpeta a nodejs 

	tar -xzvf ruta descarga

Copia los archivos a la carpeta usuario para que los programas accedan a ellos
	
	sudo cp -r nodejs/{bin,include,lib,share} /usr/

Dependencias (npm i)

* express
* mysql
* nodemon

## Dev

	cd backend; npm i; npm run dev
	cd frontend; google-chrome index.html [*Tu navegador]


### Xampp (Opcional, si quieres trabajar mysql con interfaz grafica)

Descargar apache [https://www.apachefriends.org/download.html](https://www.apachefriends.org/download.html)
		
	cd ~/Descargas
	chmod 755 xampp-linux-***-installer.run
	sudo ./xampp-linux-***-installer.run
	sudo /opt/lampp/lampp start

Desinstalar

	sudo ~/opt/lampp/uninstall
	sudo rm -rf /opt/lampp


# Github 📌

Uso [GIT](https://git-scm.com/) para control de versiones.
Puedes ver los comandos que uso [aqui](https://nacholabraweb.000webhostapp.com/Tutoriales)

Agradecimientos a github por tener este proyecto en la nube.

### Licencia 📄

Este proyecto está bajo la Licencia (MIT)
App desarrollada por Ignacio Labra