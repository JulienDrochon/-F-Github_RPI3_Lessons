# -F-Github_RPI3_Lessons (Raspbian Strecth)

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

     $ sudo chmod +x kiosk.sh
     $ sudo reboot
     
For stopping it :

    $ sudo killall kiosk.sh
    $ sudo reboot
     
