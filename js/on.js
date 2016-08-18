//Register an event
jviz.modules.tab.prototype.on = function(id, callback, scope)
{
  //Check the id
  if(id.replace(/\s/g, '') === ''){ return this; }

  //Add the event
  jviz.events.add(this._events + id, callback, scope);

  //Return this
  return this;
};

//Event when the table is drawn
jviz.modules.tab.prototype.onDraw = function(start, end)
{
  //Show in console
  console.log('Draw table [' + start + ' , ' + end + ']');

  //Call the event
  jviz.events.send(this._events + 'draw', start, end);
}

//Event when user clicks on the head
jviz.modules.tab.prototype.onClickHead = function(index)
{
  //Show in console
  console.log('Clicked on head. Column ' + index);

  //Send the event
  jviz.events.send(this._events + 'click:head', this._columns.src[index], index);
};

//Event when user clicks on a row
jviz.modules.tab.prototype.onClickRow = function(index)
{
  //Show in console
  console.log('Clicked on row ' + index);

  //Call the event listener
  jviz.events.send(this._events + 'click:row', this._data.src[index], index);
};

//Event when user select a row
jviz.modules.tab.prototype.onSelectRow = function(index)
{
  //Show in console
  console.log('Selected row ' + index);

  //Call the event listener
  jviz.events.send(this._events + 'select:row', this._data.src[index], index);
};

//Event when user un-select a row
jviz.modules.tab.prototype.onUnSelectRow = function(index)
{
  //Show in console
  console.log('Unselected row ' + index);

  //Call the event listener
  jviz.events.send(this._events + 'unselect:row', this._data.src[index], index);
};
