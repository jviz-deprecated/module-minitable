//Function to filter the table
jviz.modules.tab.prototype.filter = function(condition)
{
  //Check the condition
  if(typeof condition !== 'function'){ return this.filterClear(); }

  //Reset the filter array
  this._data.filter = [];

  //Read all the data
  for(var i = 0; i < this._data.src.length; i++)
  {
    //Call the condition function
    var valid = condition(this._data.src[i], i);

    //Check for undefined
    if(typeof valid === 'undefined'){ var valid = true; }

    //Check for no valid
    if(valid === false){ continue; }

    //Else, save the index
    this._data.filter.push(i);
  }

  //Save the counter
  this._data.length = this._data.filter.length;

  //Reset the order
  this.orderClear();

  //Send the event
  this._events.emit('data:filtered', this._data.filter, this._data.length);

  //Return this
  return this;
};

//Initialize the filter array
jviz.modules.tab.prototype.filterClear = function()
{
  //Clear the filter array
  this._data.filter = Array.apply(null, Array(this._data.src.length)).map(function(v,i){ return i; });

  //Update the data length
  this._data.length = this._data.src.length;

  //Reset the order
  this.orderClear();

  //Return this
  return this;
};
