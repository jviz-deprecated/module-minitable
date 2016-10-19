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
  this._draw.start = (typeof subset.start === 'undefined') ? 0 : Math.max(0, parseInt(subset.start));

  //Parse the subset end point
  this._draw.end = (typeof subset.end === 'undefined') ? max_size : Math.min(max_size, parseInt(subset.end));

  //Reset the checked element
  this._check.el = [];

  //Reset the active rows
  this._draw.rows = [];

  //Display the data
  for(var i = this._draw.start; i <= this._draw.end; i++)
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

      //Create the cell
      jviz.dom.append(row_id, { _tag: 'div', id: cell_id, class: this._body.cell.class });

      //Check the cell type
      if(cell.type === 'checkbox')
      {
        //Add the check cell class
        jviz.dom.class.add(cell_id, this._body.cell.check.class);

        //Get the box id
        var box_id = this._body.cell.check.id + index;

        //Save the default value
        var box_checked = this._data.check[index];

        //Save the checkbox class
        var box_class = this._check.class;

        //Build the checkbox
        this._check.el[index] = new jviz.components.checkbox({ parent: cell_id, id: box_id, class: box_class, checked: box_checked });

        //Continue
        continue;
      }

      //Get the content
      var content = (typeof cell.parse === 'function') ? cell.parse(cell.key, data, index, cell) : data[cell.key];

      //Add the content
      jviz.dom.html(cell_id, content);
    }

    //Check the row class
    if(typeof this._data.class[index] !== 'undefined')
    {
      //Add the class to this row
      for(var j = 0; j < this._data.class[index].length; i++)
      {
        //Add the row class
        jviz.dom.class.add(row_id, this._data.class[index][j]);
      }
    }

    //Save the row index
    this._draw.rows.push(index);
    //rows.push({ id: row_id, index: index });
  }

  //Add the events
  for(var i = 0; i < this._draw.rows.length; i++)
  {
    //Add the row event
    this.rowsEvent(this._draw.rows[i].index);

    //Check if checkboxes are enabled
    if(this._check.enabled === false){ continue; }

    //Add the checkbox event
    this.checkEvent(this._draw.rows[i].index);
  }

  //Show in console
  jviz.console.log('Draw table [' + this._draw.start + ' , ' + this._draw.end + ']');

  //Emit the event
  this._events.emit('draw', this._draw.start, this._draw.end);

  //Return this
  return this;
};
