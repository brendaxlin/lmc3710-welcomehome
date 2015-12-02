var userInput = "";


function submit() {
    userInput = document.getElementById("userInput").value;

    var obj = {
    	uinput: userInput,
	};

	localStorage.setItem('storage', JSON.stringify(obj));

}




