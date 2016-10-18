//Register an event
jviz.modules.tab.prototype.on = function(name, callback)
{
  //Add the event
  this._events.add(id, callback);

  //Return this
  return this;
};

//Event when user clicks on the head
jviz.modules.tab.prototype.onClickHead = function(index)
{
  //Show in console
  console.log('Clicked on head. Column ' + index);

  //Send the event
  this._events.emit('click:head', this._columns.src[index], index);
};

//Event when user clicks on a row
jviz.modules.tab.prototype.onClickRow = function(index)
{
  //Show in console
  console.log('Clicked on row ' + index);

  //Call the event listener
  this._events.emit('click:row', this._data.src[index], index);
};

//Event when the user clicks on a cell
jviz.modules.tab.prototype.onClickCell = function(index_row, index_cell)
{
  //Call the event
  this._events.emit('click:cell');
};

//Event when user checks a row
jviz.modules.tab.prototype.onCheckedRow = function(index)
{
  //Show in console
  console.log('Checked row ' + index);

  //Call the event listener
  this._events.emit('checked:row', this._data.src[index], index);
};

//Event when user un-check a row
jviz.modules.tab.prototype.onUnCheckedRow = function(index)
{
  //Show in console
  console.log('Unchecked row ' + index);

  //Call the event listener
  this._events.emit('unchecked:row', this._data.src[index], index);
};
