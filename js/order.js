//Order the data
jviz.modules.tab.prototype.order = function(columns)
{
  //Check the columns argument
  if(typeof columns !== 'object'){ return this._columns.order; }

  //Check for array
  if(Array.isArray(columns) === false){ columns = [ columns ]; }

  //Parse the columns order
  columns = this.parseOrder(columns);

  //Clear the order
  this.clearOrder();

  //Check the columns length
  if(columns.length === 0){ return this; }

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

//Change the order of a column
jviz.modules.tab.prototype.orderChange = function(index)
{
  //
};

//Add the order class to a column
jviz.modules.tab.prototype.orderClass = function(index)
{
  //Check if column is visible
  if(this._columns.src[index].display === false){ return this; }

  //Get the column head index
  var col_id = this._head.cell.id + index;

  //Remove the none class
  jviz.dom.class.remove(col_id, this._head.cell.orderable.none);

  //Remove the asc class
  jviz.dom.class.remove(col_id, this._head.cell.orderable.asc);

  //Remove the desc order
  jviz.dom.class.remove(col_id, this._head.cell.orderable.desc);

  //Initialize the none order class
  var col_class = this._head.cell.orderable.none;

  //Find the column
  for(var i = 0; i < this._columns.order.length; i++)
  {
    //Get the column
    var col = this._columns.order[i];

    //Check the column index
    if(col.index !== index){ continue; }

    //Get the class
    col_class = (col.order === 'desc') ? this._head.cell.orderable.desc : this._head.cell.orderable.asc;

    //Exit
    break;
  }

  //Add the none order
  jviz.dom.class.add(col_id, col_class);

  //Continue
  return this;
};

//Parse the order list
jviz.modules.tab.prototype.parseOrder = function(list)
{
  //Save this
  var self = this;

  //Parse the list
  list = list.filter(function(el, index)
  {
    //Check the key
    if(typeof el.key !== 'string'){ console.error('Undefined key on element ' + index); return false; }

    //Check the order
    if(typeof el.order !== 'string'){ console.error('Undefined order on element ' + index); return false; }

    //Check the column index
    if(typeof el.index === 'undefined'){ el.index = self.columnIndex(el.key); }

    //Parse the order value
    el.order = el.order.toLowerCase();

    //Check the order value
    if(['asc', 'desc'].indexOf(el.order) === -1){ el.order = 'asc'; }

    //Return true
    return true;
  });

  //Return the list
  return list;
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
