// edit server ip to localhost
// edit server port tp xxxx
const Url = 'http://localhost:xxxx';

var curLen=0;

function thickness() {
			
	// GET Method 
	axios.get(Url+'/positions')
  	.then(response => {
    		console.log("response: ", response)
    		// do something about response
		// json to update table
					
		// Add name to row
		var x = document.getElementById("myTable").rows[1].cells;
  		x[2].innerHTML = JSON.stringify(response.data[0].positions[0].name);
		x[3].innerHTML = JSON.stringify(response.data[0].positions[1].name);
		x[4].innerHTML = JSON.stringify(response.data[0].positions[2].name);
		x[5].innerHTML = JSON.stringify(response.data[0].positions[3].name);
		x[6].innerHTML = JSON.stringify(response.data[0].positions[4].name);
		x[7].innerHTML = JSON.stringify(response.data[0].positions[5].name);
		x[8].innerHTML = JSON.stringify(response.data[0].positions[6].name);
		x[9].innerHTML = JSON.stringify(response.data[0].positions[7].name);

		let newLen = response.data.length;
		var table = document.getElementById("myTable");
					
		if (curLen<newLen){
			var start = curLen;

			for (i=start;i<newLen;i++){
				var row = table.insertRow(i+2);
				var cell0 = row.insertCell(0);
  				var cell1 = row.insertCell(1);
  				var cell2 = row.insertCell(2);
  				var cell3 = row.insertCell(3);
  				var cell4 = row.insertCell(4);
  				var cell5 = row.insertCell(5);
  				var cell6 = row.insertCell(6);
  				var cell7 = row.insertCell(7);
  				var cell8 = row.insertCell(8);
				var cell9 = row.insertCell(9);
				// Add thickness to row
				cell0.innerHTML = i;
				cell1.innerHTML = JSON.stringify(response.data[i].timestamp);;
  				cell2.innerHTML = JSON.stringify(response.data[i].positions[0].thickness);
  				cell3.innerHTML = JSON.stringify(response.data[i].positions[1].thickness);
				cell4.innerHTML = JSON.stringify(response.data[i].positions[2].thickness);
				cell5.innerHTML = JSON.stringify(response.data[i].positions[3].thickness);
				cell6.innerHTML = JSON.stringify(response.data[i].positions[4].thickness);
				cell7.innerHTML = JSON.stringify(response.data[i].positions[5].thickness);
				cell8.innerHTML = JSON.stringify(response.data[i].positions[6].thickness);
				cell9.innerHTML = JSON.stringify(response.data[i].positions[7].thickness);
			}
		}

		if(curLen>newLen)window.location.reload(true); //refresh page

		// Update json data len
		curLen = newLen;


  	})
  	.catch(err => {
    		console.error(err)
		alert("No connection to GCrobot or Data Not Available");
		window.location.reload(true); //refresh page

  	})

}

function deleteALL(){
	// GET Method 
	axios.get(Url+'/delete')
  	.then(response => { 
    	console.log("response: ", response);
		window.location.reload(true); //refresh page
		curLen=0; // reset

  	})
  	.catch(err => {
    		console.error(err)
		 alert("Error delete");				
  	})
}
