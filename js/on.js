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
