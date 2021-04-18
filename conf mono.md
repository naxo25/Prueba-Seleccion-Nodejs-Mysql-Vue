### Agregue el repositorio Mono a su sistema

En mi caso use la configuración para Ubuntu18.04 [Ve otras configuraciones](https://www.mono-project.com/download/stable/)

Ubuntu 18.04 (i386, amd64, armhf, arm64, ppc64el)

sudo apt install gnupg ca-certificates

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 3FA7E0328081BFF6A14DA29AA6A19B38D3D831EF

echo "deb https://download.mono-project.com/repo/ubuntu stable-bionic main" | sudo tee /etc/apt/sources.list.d/mono-official-stable.list
sudo apt update

#### Instalar mono
	sudo apt install mono-devel

#### Sinronizar certificados
	mozroots --import --sync