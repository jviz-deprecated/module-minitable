//Draw the table
jviz.modules.tab.prototype.draw = function(subset)
{
  //Check the subset
  if(typeof subset === 'undefined'){ var subset = {}; }

  //Reset the body
  jviz.dom.html(this._body.id, '');

  //Check the data length
  if(this._data.length === 0){ return this; }

  //Max size
  var max_size = this._data.length - 1;

  //Parse the subset start point
  subset.start = (typeof subset.start === 'undefined') ? 0 : Math.max(0, parseInt(subset.start));

  //Parse the subset end point
  subset.end = (typeof subset.end === 'undefined') ? max_size : Math.min(max_size, parseInt(subset.end));

  //Array with the added rows
  var rows = [];

  //Display the data
  for(var i = subset.start; i <= subset.end; i++)
  {
    //Get the index
    var index = this._data.order[i];

    //Get the data row
    var data = this._data.src[index];

    //Get the row id
    var row_id = this._body.row.id + index;

    //Create the new row
    jviz.dom.append(this._body.id, { _tag: 'div', id: row_id, class: this._body.row.class });

    //Read all the cells
    for(var j = 0; j < this._columns.src.length; j++)
    {
      //Get the cell
      var cell = this._columns.src[j];

      //Check the display
      if(cell.display === false){ continue; }

      //Get the cell id
      var cell_id = this._body.cell.id + index + '_' + j;

      //Get the content
      var content = (typeof cell.parse === 'function') ? cell.parse(cell.key, data, index, cell) : data[cell.key];

      //Create the cell
      jviz.dom.append(row_id, { _tag: 'div', id: cell_id, class: this._body.cell.class, _html: content });
    }

    //Add the row index
    rows.push({ id: row_id, index: index });
  }

  //Save this
  var self = this;

  //Add the events
  for(let i = 0; i < rows.length; i++)
  {
    //Add the event
    $('#' + rows[i].id).on('click', function(e){ return self.onClickRow(rows[i].index); });
  }

  //Show in console
  jviz.console.log('Draw table [' + subset.start + ' , ' + subset.end + ']');

  //Emit the event
  this._events.emit('draw', subset.start, subset.end);

  //Return this
  return this;
};
