//Check a row
jviz.modules.tab.prototype.check = function(index)
{
  //Update the check list
  this._data.check[index] = true;

  //Emit the check event
  this._events.emit('check:row', this._data.src[index], index);

  //Check if this checkbox exists
  if(typeof this._check.el[index] === 'undefined'){ return; }

  //Check this element
  this._check.el[index].checked(true);
};

//Check all rows
jviz.modules.tab.prototype.checkAll = function()
{
  //
};

//Uncheck a row
jviz.modules.tab.prototype.uncheck = function(index)
{
  //Update the check list
  this._data.check[index] = false;

  //Emit the uncheck event
  this._events.emit('uncheck:row', this._data.src[index], index);

  //Check if this checkbox exists
  if(typeof this._check.el[index] === 'undefined'){ return; }

  //Check this element
  this._check.el[index].checked(false);
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

//Check event
jviz.modules.tab.prototype.checkEvent = function(index)
{
  //Check if checkboes are enabled
  if(this._check.enabled === false){ return; }
  
  //Save this
  var self = this;

  //Get the checkbox element
  var el = this._check.el[index];

  //Add the change event
  el.on('change', function()
  {
    //Get the actual status
    var status = el.checked();

    //Check or uncheck the checkbox
    (status === true) ? self.check(index) : self.uncheck(index);
  });
};
