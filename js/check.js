//Check a row
jviz.modules.tab.prototype.check = function(index)
{
  //
};

//Check all rows
jviz.modules.tab.prototype.checkAll = function()
{
  //
};

//Uncheck a row
jviz.modules.tab.prototype.uncheck = function(index)
{
  //
};

//Uncheck all rows
jviz.modules.tab.prototype.uncheckAll = function()
{
  //
};

//Get the checked rows
jviz.modules.tab.prototype.checked = function()
{
  //Initialize the checked list
  var list = [];

  //Read all the data
  for(var i = 0; i < this._data.length; i++)
  {
    //Check if is checked
    if(this._data.checked[i] === false){ continue; }

    //Get the row
    var row = this._data.src[i];

    //Save the row
    list.push(row);
  }

  //Return the list
  return list;
};

//Clear all checks
jviz.modules.tab.prototype.clearCheck = function()
{
  //Remove all checks
  this._data.check = jviz.math.array.create(this._data.length, false);
};
