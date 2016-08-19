//Ajax method
jviz.modules.tab.prototype.ajax = function(opt)
{
  //Check the options
  if(typeof opt === 'undefined'){ return this; }

  //Check the method
  if(typeof opt.method === 'undefined'){ opt.method = 'get'; }

  //Save the ajax
  this._data.ajax = opt;

  //Save this
  var self = this;

  //Do the ajax request
  var ajax = $.ajax({ method: opt.method.toUpperCase(); url: opt.url, dataType: 'json' });

  //Done function
  ajax.done(function(data){ self.ajaxDone(data); });

  //Fail function
  ajax.fail(function(){ self.ajaxError(); });
};

//Ajax done
jviz.modules.tab.prototype.ajaxDone = function(data)
{
  //Check the parse function
  if(typeof this._data.ajax.parse === 'function')
  {
    //Parse the data
    data = this._data.ajax.parse(data);
  }

  //Check for array
  if(jviz.array.is(data) === false){ data = [ data ]; }

  //Save the data
  this.data(data);

  //Draw the data
  return this.draw();
};

//Ajax error
jviz.modules.tab.prototype.ajaxError = function()
{
  //Display the error
  console.error('Error getting data from ' + this._data.ajax.url);
};
