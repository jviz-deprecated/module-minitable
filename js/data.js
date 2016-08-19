//Display the data
jviz.modules.tab.prototype.data = function(data)
{
  //Check for undefined data
  if(typeof data === 'undefined'){ var data = this._data.src; }

  //Check for array
  if(jviz.array.is(data) === false){ data = [ data ]; }

  //Update the data
  this._data.src = data;

  //Save the data count
  this._data.length = data.length;

  //Reset the filter
  this.filterClear();

  //Reset the order
  this.orderClear();

  //Return this
  return this;
};
