LegoSpaceRovers
===============

This project aims to provide a simple web based application that can be used to control a Lego rover from any computer or a mobile device.

Steps to install the application
--------------------------------

This application requires the following softwares:

- NXT_Python (version 2.2.2)
$ sudo apt-get install python-nxt

- WebSocket-for-Python (ws4py)
$ sudo pip install ws4py

- Meteor (version 0.6.2)
$ curl https://install.meteor.com | /bin/sh

- Application software
$ git clone https://github.com/Space-Bangalore/LegoSpaceRovers.git
- open a terminal
$ cd LegoSpaceRovers
$ cd meteor
$ meteor

Add a bluetooth connection with your Lego NXT Brick on your computer

- open another terminal
$ python ddp-lego-driver.py localhost:3000

- Open a browser
Goto http://localhost:3000/

PS: Windows and MAC versions coming soon..!

Now you can control your LEGO NXT Brick remotely from any computer or mobile devide. 
Enjoy!
