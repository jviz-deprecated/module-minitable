//Add a class to the row
jviz.modules.tab.prototype.addClass = function(index, name)
{
  //Check for undefined class name
  if(typeof name === 'undefined'){ return this; }

  //Check the index
  if(typeof index !== 'number'){ return this; }

  //Check the index value
  if(index < 0 || this._data.length <= index){ return this; }

  //Check if the row has this class
  if(jviz.math.array.has(this._data.class[index], name) === true){ return this; }

  //Add the class
  this._data.class[index].push(name);

  //Check for update now the class
  if(jviz.math.array.has(this._draw.rows, index) === false){ return this; }

  //Add the class to the row
  jviz.dom.class.add(this._body.row.id + index, name);

  //Return this
  return this;
};

//Remove a class from the specified row
jviz.modules.tab.prototype.removeClass = function(index, name)
{
  //Check for undefined class name
  if(typeof name === 'undefined'){ return this; }

  //Check the index
  if(typeof index !== 'number'){ return this; }

  //Check the index value
  if(index < 0 || this._data.length <= index){ return this; }

  //Check the row class
  if(this._data.class[index].length === 0){ return this; }

  //Delete the class
  jviz.math.array.remove(this._data.class[index], name);

  //Check for update now the class
  if(jviz.math.array.has(this._draw.rows, index) === false){ return this; }

  //Add the class to the row
  jviz.dom.class.remove(this._body.row.id + index, name);

  //Return this
  return this;
};

//Clear the row class
jviz.modules.tab.prototype.clearClass = function()
{
  //Initialize the class array
  this._data.class = [];

  //Read all the data values
  for(var i = 0; i < this._data.length; i++)
  {
    //Add an empty array
    this._data.class.push([]);
  }

  //Return this
  return this;
};
