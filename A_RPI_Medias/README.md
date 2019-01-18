## Play VIdeo at startup with VLC

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

    # Launch video from web with vlc in fullscreen mode
    vlc --fullscreen http://clips.vorwaerts-gmbh.de/VfE_html5.mp4 --loop

Press CTRL+x

Press O

Press Enter

     $ sudo chmod +x /home/pi/kiosk.sh
     $ sudo reboot

For stopping it :

    $ sudo killall kiosk.sh
    $ sudo reboot


Docs : https://wiki.videolan.org/Documentation:Command_line/
