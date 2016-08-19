//Parse the columns
jviz.modules.tab.prototype.columns = function(list)
{
  //Check the columns list
  if(typeof list === 'undefined'){ var list = this._columns.src; }

  //Append the head row
  jviz.dom.html({ type: 'div', id: this._head.row.id, class: this._head.row.class }, this._head.id);

  //Save the list
  this._columns.src = this.parseColumns(list);

  //Read all the columns
  for(var i = 0; i < this._columns.src.length; i++)
  {
    //Get the cell
    var cell = this._columns.src[i];

    //Check for display
    if(cell.display === false){ continue; }

    //Build the cell id
    var id = this._head.cell.id + i;

    //Add the cell
    jviz.dom.append({ type: 'div', id: id, class: this._head.cell.class, html: cell.title }, this._head.row.id);
  }

  //Save this
  var self = this;

  //Add all the events
  for(let i = 0; i < this._columns.src.length; i++)
  {
    //Check for orderable
    if(this._columns.src[i].orderable === false){ continue; }

    //Add the event for this column
    $('#' + self._head.cell.id + i).click(function(e){ return self.onClickHead(i); });
  }

  //Return this
  return this;
};

//Parse a columns list
jviz.modules.tab.prototype.parseColumns = function(list)
{
  //Read all the columns
  for(var i = 0; i < list.length; i++)
  {
    //Check the key
    if(typeof list[i].key === 'undefined'){ console.error('jviz-tab: undefined key on column ' + i); return []; }

    //Check the title
    if(typeof list[i].title === 'undefined'){ list[i].title = list[i].key; }

    //Check the display
    if(typeof list[i].display === 'undefined'){ list[i].display = true; }

    //Check the orderable attribute
    if(typeof list[i].orderable === 'undefined'){ list[i].orderable = true; }

    //Check the column parse function
    if(typeof list[i].parse === 'undefined'){  }
  }

  //Return the parssed list
  return list;
};

//Get columns
jviz.modules.tab.prototype.getColumns = function(list)
{
  //Check the index
  if(typeof list === 'undefined'){ retur this._columns.src; }

  //Check for array
  if(jviz.array.is(list) === false){ list = [ list ]; }

  //Output columns
  var out = [];

  //Get all columns
  for(var i = 0; i < list.length; i++)
  {
    //Save the column
    out.push(this._columns.src[list[i]]);
  }

  //Return the columns
  return out;
};
