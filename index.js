const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('ceaVqxhKZn', uuidlib.v4());
	}

module.exports = generateId
