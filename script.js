const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	 for (let property in sampleObject) {
        if (property === key) {
            return true; // Key found in sampleObject
        }
    }
    return false;
	
	}
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
