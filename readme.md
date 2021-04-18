# Vue-NodeJs-MySql

Comunicando front y back con api-rest en nodejs-express.

## Configurar entorno para linux

### Xampp

Descargar apache [https://www.apachefriends.org/download.html](https://www.apachefriends.org/download.html)
		
	cd ~/Downloads
	chmod 755 xampp-linux-***-installer.run
	sudo ./xampp-linux-***-installer.run
	sudo /opt/lampp/lampp start

### VueJs

Agrega esto a tu archivo.html

	<script src="https://unpkg.com/vue@next"></script>
	<script>
		const Vue.createApp({}).mount('#app')
	</script>

Documentación: [https://v3.vuejs.org/guide/installation.html#cdn](https://v3.vuejs.org/guide/installation.html#cdn)

### NodeJs

[Descargar para linux](https://nodejs.org/es/)

Descomprime el archivo .tar.xz y renombra la carpeta a nodejs 

	tar -xzvf ruta descarga

Copia los archivos a la carpeta usuario para que los programas accedan a ellos
	
	sudo cp -r nodejs/{bin,include,lib,share} /usr/

### MySql

[Base de datos](./crear%20bd.sql)


## Dev
	cd backend; npm i; npm run dev
	cd frontend; [google-chrome,other] index.html


### Uninstall xampp

	cd /opt/lampp
	sudo ./uninstall
	sudo rm –r /opt/lampp



# Github 📌

Uso [GIT](https://git-scm.com/) para control de versiones.
Puedes ver los comandos que uso [aqui](https://nacholabraweb.000webhostapp.com/Tutoriales)

Agradecimientos a github por tener este proyecto en la nube.

## Licencia 📄

Este proyecto está bajo la Licencia (MIT)
App desarrollada por Ignacio Labra