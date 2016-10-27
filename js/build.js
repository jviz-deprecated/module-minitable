//Build the table
jviz.modules.tab.prototype.build = function()
{
  //Append the table container
  jviz.dom.append(this._parent, { id: this._id, class: this._class });

  //Append the table
  jviz.dom.append(this._id, { id: this._table.id, class: this._table.class });

  //Append the table head
  jviz.dom.append(this._table.id, { id: this._head.id, class: this._head.class });

  //Append the table body
  jviz.dom.append(this._table.id, { id: this._body.id, class: this._body.class });

  //Set the table height
  this.height(this._height);

  //Parse and build the columns
  this.columns(this._columns.src);

  //Get the data
  if(typeof this._data.ajax.url === 'string'){ return this.ajax(); }

  //Parse the data
  this.data(this._data.src);

  //Draw the data
  //return this.draw();

  //Continue
  return this;
};
