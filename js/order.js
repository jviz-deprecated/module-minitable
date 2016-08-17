//Order the data
jviz.modules.tab.prototype.order = function(columns)
{
  //Reset the order array
  this.orderClear();

  //Check the columns argument
  if(typeof columns === 'undefined'){ return this; }

  //Check the columns keys
  if(Object.keys(columns).length === 0){ return this; }

  //Get the data
  var data = this._data.src;

  //Sort the order array
  this._data.order.sort(function(a, b){ return jvizModulesTabOrderCompare(a, b, columns, data); });

  //Return this
  return this;
};

//Clear the order
jviz.modules.tab.prototype.orderClear = function()
{
  //Clear the order array
  this._data.order = Array.apply(null, Array(this._data.src.length)).map(function(v, i){ return i; });

  //Return this
  return this;
};

//Function for compare two elements
function jvizModulesTabOrderCompare(left, right, columns, data)
{
  //Compare all
  for(var key in columns)
  {
    //Get the order
    var order = columns[key].toLowerCase();

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
}
