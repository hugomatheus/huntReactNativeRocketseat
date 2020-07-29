Instalar react native 
sudo npm install -g react-native-cli

Seguir os passos do blog da rocketseat para instalar o android studio
https://react-native.rocketseat.dev/android/linux

Criar projeto 
react-native init nomeprojeto

Abrir o Android studio e executar o emulador do android
Pode fechar a IDE e somente deixar o emulador 
Em File > settings > Appearence e Bahavior > Android SDK >  SDK Tools 
Foi instalado NDK (Não sei se realmente é necessario, tentativa de corrigir um erro)

Terminal 3
react-native start 

Terminal 2
react-native run-android

Terminal 1
emulator -avd NomeDoEmulador


Instalando react-navigation para rotas
yarn add react-navigation


#################################################################################################
Emulador:
Verificar lista de devices: 
emulator -list-avds

Rodar emulador
emulator -avd NomeDoEmulador

Caso ao rodar o emulador e apresente erro, foi corrigido removendo os seguintes arquivos
.android/avd/NomeDoEmulador.avd
sudo rm snapshot.lock.lock 
sudo rm multiinstance.lock 
sudo rm hardware-qemu.ini.loc


Debug JS - ver os console.log da vida
http://localhost:8081/debugger-ui/
