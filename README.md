# -F-Github_RPI3_Lessons (Raspbian Strecth)

https://www.raspberrypi.org/app/uploads/2017/05/Raspberry-Pi-3-Ports-1-150x150.jpg

## Auto Launch node app at startup

### Install Forever

     $ sudo npm install forever -g
     
Docs : https://www.npmjs.com/package/forever
     
### Create Service

     $ sudo nano /etc/systemd/system/node-server.service

Copy-paste this :

     [Unit]
     Description=Node Server Service
     After=network.target

    [Service]
    WorkingDirectory=/home/pi/Desktop/B_A_A_HCSR04
    ExecStart=/usr/local/bin/forever /home/pi/Desktop/B_A_A_HCSR04/app.js
    User=root
    RestartSec=30s

    [Install]
    WantedBy=multi-user.target

Press CTRL+x

Press O

Press Enter

     $ sudo systemctl enable node-server.service
     $ sudo systemctl start node-server.service

### For stopping service

     $ sudo systemctl stop node-server.service
     
### Log

     $ journalctl -u node-server
     
     

## Auto Launch Chromium Fullscreen mode (no mouse cursor) (<a href="https://obrienlabs.net/setup-raspberry-pi-kiosk-chromium/">source</a>)
     $ sudo apt-get install unclutter
     $ cd /home/pi/.config
     $ sudo mkdir autostart
     $ cd autostart
     $ sudo nano kiosk.desktop
     
Copy Paste this :

     [Desktop Entry]
     Type=Application
     Name=Kiosk
     Exec=/home/pi/kiosk.sh
     X-GNOME-Autostart-enabled=true

Press CTRL+x

Press O

Press Enter

     $ sudo nano /home/pi/kiosk.sh

Copy Paste this :

    # Hide the mouse from the display
    unclutter &
 
    # If Chrome crashes (usually due to rebooting), clear the crash flag so we don't have the annoying warning bar
    sed -i 's/"exited_cleanly":false/"exited_cleanly":true/' /home/pi/.config/chromium/Default/Preferences
    sed -i 's/"exit_type":"Crashed"/"exit_type":"Normal"/' /home/pi/.config/chromium/Default/Preferences
 
    # Run Chromium and open tabs
    /usr/bin/chromium-browser --kiosk https://google.com &
    
Press CTRL+x

Press O

Press Enter

     $ sudo chmod +x /home/pi/kiosk.sh
     $ sudo reboot
     
For stopping it :

    $ sudo killall kiosk.sh
    $ sudo reboot
     
