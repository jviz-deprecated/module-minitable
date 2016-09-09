//Build the table
jviz.modules.tab.prototype.build = function()
{
  //Append the table
  jviz.dom.append({ _tag: 'div', id: this._id, class: this._class }, this._parent);

  //Append the table head
  jviz.dom.append({ _tag: 'div', id: this._head.id, class: this._head.class }, this._id);

  //Append the table body
  jviz.dom.append({ _tag: 'div', id: this._body.id, class: this._body.class }, this._id);

  //Parse the columns
  this.columns();

  //Get the data
  if(typeof this._data.ajax.url === 'string'){ return this.ajax(); }

  //Parse the data
  this.data();

  //Draw the data
  return this.draw();
};
