//Build the head
jviz.modules.tab.prototype.head = function()
{
  //Append the head row
  jviz.dom.html({ type: 'div', id: this._head.row.id, class: this._head.row.class }, this._head.id);

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
};
