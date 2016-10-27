//Order the data
jviz.modules.tab.prototype.order = function(columns)
{
  //Check the columns argument
  if(typeof columns !== 'object'){ return this._columns.order; }

  //Check for array
  if(Array.isArray(columns) === false){ columns = [ columns ]; }

  //Check the columns keys
  if(columns.length === 0){ return this.clearOrder(); }

  //Check the order array
  if(this._data.order.length === 0)
  {
    //Clear the order
    //this.clearOrder();

    //Reset the order array
    this.resetOrder();
  }

  //Get the data
  var data = this._data.src;

  //Get this
  var self = this;

  //Sort the order array
  this._data.order.sort(function(a, b)
  {
    //Return
    return self.orderCompare(a, b, columns, data);
  });

  //Send the event
  this._events.emit('order', columns);

  //Save the columns ordered
  this._columns.order = columns;

  //Return this
  return this;
};

//Clear the order
jviz.modules.tab.prototype.clearOrder = function()
{
  //Clear the order array
  //this._data.order = Array.apply(null, Array(this._data.src.length)).map(function(v, i){ return i; });
  this.resetOrder();

  //Reset the columns order
  this._columns.order = [];

  //Return this
  return this;
};

//Reset the order
jviz.modules.tab.prototype.resetOrder = function()
{
  //Reset the order
  this._data.order = this._data.filter.concat([]);

  //Continue
  return this;
};

//Function for compare two elements
jviz.modules.tab.prototype.orderCompare = function(left, right, columns, data)
{
  //Compare all
  //for(var key in columns)
  for(var i = 0; i < columns.length; i++)
  {
    //Get the key
    var key = columns[i].key;

    //Get the order
    //var order = columns[key].toLowerCase();
    var order = columns[i].order;

    //Check if que difference is numeric
    var numeric = !isNaN(+data[left][key] - +data[right][key]);

    //Get the values
    var a = (numeric === true) ? +data[left][key] : data[left][key].toLowerCase();
    var b = (numeric === true) ? +data[right][key] : data[right][key].toLowerCase();

    //Check the values
    if(a < b)
    {
      //Check the order
      return (order === 'desc') ? 1 : -1;
    }
    else if(a > b)
    {
      //Check the order
      return (order === 'desc') ? -1 : 1;
    }
  }

  //Default, return 0
  return 0;
};
