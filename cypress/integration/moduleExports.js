let exportEntireFunction = function() {
  return 'This is an exported function';
}

let attachPropertyToExportsObject ='This is property attached to export object';



/*
This exports the anonymous function stored in "exportEntireFunction" variable.
*/
module.exports = exportEntireFunction;
/***************************************************************************/




/*
This attaches a property "variableProperty" to the "exports" object nested inside "module" object.
The value of "variableProperty" is the value in "attachPropertyToExportsObject"

The below JSON is exported. i.e. this is the "exports" object
{
  variableProperty: 'This is property attached to export object'
}
*/
module.exports.variableProperty = attachPropertyToExportsObject;
module.exports.anotherVariableProperty = "Another property using module.exports.property";


//Standalone "module.exports" statement overrides all "exports.property" code

let justUseExportsKeyWord = 'Used only exports Keyword';

exports.justUseExportsKeyWord = justUseExportsKeyWord;