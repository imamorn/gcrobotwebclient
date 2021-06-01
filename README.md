# gcrobotwebclient
The code can be opened in web browser or modified for the target website. 
It uses javascript for getting data from GCrobot side. 

Edit IP and port of Url in getThickness.js in case of changing server 
</br>const Url = 'http://localhost:xxxx/positions';

GCrobot side
- It creates randomly fake values of thickness and updates values every 5 seconds.
- Data is limited to 1000 rows (0-999) then stop holding value at 999. You may have to click "delete all" button to start again.

