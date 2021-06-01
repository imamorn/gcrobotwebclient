# gcrobotwebclient
The code can be opened in web browser or modified for the target website. 
It uses javascript for getting data from GCrobot side. 

Edit IP and port of Url in getThickness.js in case of changing server 
</br>const Url = 'http://localhost:xxxx/positions';

GCrobot server side
- Create randomly fake values of thickness and update values every 5 seconds
- limit 1000 rows (0-999) then reset to 0
