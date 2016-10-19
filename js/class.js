//Add a class to the row
jviz.modules.tab.prototype.addClass = function(index, name)
{
  //Check for undefined class name
  if(typeof name === 'undefined'){ return this; }

  //Check the index
  if(typeof index !== 'number'){ return this; }

  //Check the index value
  if(index < 0 || this._data.length <= index){ return this; }

  //Check the row class
  if(typeof this._data.class[index] === 'undefined'){ this._data.class[index] = []; }

  //Check if the row has this class
  if(jviz.math.array.has(this._data.class[index], name) === true){ return this; }

  //Add the class
  this._data.class[index].push(name);

  //Check for update now the class
  if(jviz.math.array.has(this._draw.active, index) === false){ return this; }

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
  if(typeof this._data.class[index] === 'undefined'){ return this; }

  //Delete the class
  jviz.math.array.remove(this._data.class[index], name);

  //Check for update now the class
  if(jviz.math.array.has(this._draw.active, index) === false){ return this; }

  //Add the class to the row
  jviz.dom.class.remove(this._body.row.id + index, name);

  //Return this
  return this;
};

//Clear the row class
jviz.modules.tab.prototype.clearClass = function()
{
  //Read all the rows
  for(var i = 0; i < this._data.length; i++)
  {
    //Check for undefined
    if(typeof this._data.class[i] === 'undefined'){ continue; }

    //Check for empty array
    if(this._data.class[i].length === 0){ continue; }

    //Check the index
    if(jviz.math.array.has(this._draw.active, index) === true)
    {
      //Get the row ID
      var row = this._body.row.id + i;

      //Remove the classes
      for(var j = 0; j < this._data.class[i].length; j++)
      {
        //Get the class value
        var c = this._data.class[i][j];

        //Remove the class
        jviz.dom.class.remove(row, c);
      }
    }

    //Delete the array
    delete this._data.class[i];
  }

  //Return this
  return this;
};
