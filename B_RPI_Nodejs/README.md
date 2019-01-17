# Install on RaspBerry PI 3 (Raspbian Stretch) with Terminal
    
## Install Nodejs

    $ sudo apt install -y nodejs
  
&rarr; <a href="https://thisdavej.com/beginners-guide-to-installing-node-js-on-a-raspberry-pi/">Beginner's Guide</a>

Checking node version

    $ node -v
    
Checking npm version

    $ npm -v 

    
# How to use Code Examples
## Download one of directory of this one
- Example 'B_Sensors/B_A_A_HCSR04'
1. Copy-Paste this in your browser's address bar :
https://minhaskamal.github.io/DownGit/#/home
2. In the webpage's text field : copy paste 'https://github.com/JulienDrochon/-F-Github_RPI3_Lessons/tree/master/B_RPI_Nodejs/B_A_Sensors/B_A_A_HCSR04'
3. Save it to your RPI's Desktop

## Unzip the file
In Terminal :

     $ cd Desktop
     $ unzip B_A_A_HCSR04.zip
     
## Wiring Electronic components on GPIO's RPI
See the .png file in 'B_A_A_HCSR04' folder

## Initializing
In Terminal :

    $ cd B_A_A_HCSR04
    $ npm init
    $ sudo npm install express
    $ sudo npm install johnny-five
    $ sudo npm install pi-io
     
## Launch the Nodejs App

     $ node app.js
     
## Open Chromium Browser
Type 'localhost:3000' in the address bar

Enjoy !

