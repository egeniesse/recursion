// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){

	var passingElements = [];

	function walkTheDom(selectedNode, className){


			var children = selectedNode.childNodes; 
			var classArr = selectedNode.classList;

			if(classArr){ // Determines if the selected element has any class attributes

				_.each(classArr, function(element){ 
					if (element === className){  
						passingElements.push(selectedNode);  // If any of the classes match the desired class name, the element is pushed to the passingElements array
					}  
				});
			}

			if (children){ // Determines if the selected element has any classArr.

				_.each(children, function(element){ //recursively calls walkTheDom on each child
					walkTheDom(element, className)
				});
				
			}	
	};

	walkTheDom(document.body, className); 
	
	return passingElements;
  
};
