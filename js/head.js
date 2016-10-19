//Head checkbox check
jviz.modules.tab.prototype.headCheck = function()
{
  //Check for null checkbox head element
  if(this._check.head === null){ return; }

  //Check the head checkbox
  this._check.head.checked(true);
};

//Head checkbox uncheck
jviz.modules.tab.prototype.headUncheck = function()
{
  //Check for null checkbox head element
  if(this._check.head === null){ return; }

  //Uncheck the head checkbox
  this._check.head.checked(false);
};

//Head checkbox event
jviz.modules.tab.prototype.headCheckEvent = function()
{
  //Save this
  var self = this;

  //Add the head checkbox event
  this._check.head.on('change', function()
  {
    //Get the actual status
    var status = self._check.head.checked();

    //Check or uncheck all
    (status === true) ? self.checkAll(true) : self.uncheckAll(true);
  });
};
