
const api_url =
	"url_here";

async function getapi(url) {
	
	const response = await fetch(url);
	
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}

getapi(api_url);


function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
function show(data) {
    //show data 
}
document.getElementById("content").innerHTML = tab;

