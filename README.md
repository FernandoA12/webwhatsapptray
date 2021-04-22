# Webwhatsapptray
Web Whatsapp in tray linux

***
## Getting Start

install the linux dependencies needed to run the application
```shell
$ sudo apt-get install libgconf-2-4 -y
```
***
install application dependencies
```javascript
$ yarn || npm install
```
build aplication
```javascript
$ yarn make || npm run make
```
go to the folder where the application was built
```shell
$ cd out/make/deb/x64/
```
install the application on your linux
```shell
$ sudo dpkg -i <generated package name>
```
