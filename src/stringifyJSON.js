// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  	if (!obj || typeof obj === "number"){ 			 // determines if the object is falsy or a number
  		return  String(obj);
  	}
		
	else if (Array.isArray(obj)){ 

		return "[" + _.map(obj, function(element){
			return stringifyJSON(element); 			 //recursively calls stringifyJSON on every element of an array 
		}) + "]";
		
	}

	else if (typeof obj === "object"){
		var objArr = [];
		for(var key in obj){
			var keyValArr = []

			if (typeof obj[key] === 'function'){ 	 // if the value of an object is a function, this will return empty {}.
  				return '{}';
  			}

			keyValArr.push(stringifyJSON(key)); 	 // To get the format right, this will push the key and values into a 
			keyValArr.push(stringifyJSON(obj[key])); // temporary array and then it will join using a :. This produces
			objArr.push(keyValArr.join(":")); 		 // an array that has elements with key/values seperated by :
		};
		
		return "{" + objArr.join(",") + "}";
		
	}

	else if (typeof obj === "string"){
		return '"' + obj + '"'; 					 // If the object is a string, it needs double quotations
	}

	else { 
		return String(obj)
	}
};
