//Initialize the package
var pkg = {};

//Source js files
var src_js = [ './js/tab.js', './js/**.js' ];

//Source scss files
var src_scss = [ './scss/**.scss' ];

//Package name
pkg.name = 'tab';

//Description
pkg.description = 'The base table module for jviz';

//Author
pkg.author = { id: 'jmjuanes', name: 'Josemi Juanes', email: 'josemijuanes@gmail.com' };

//Build directory
pkg.directory = './build';

//Repository
pkg.repository = 'https://github.com/jviz/module-tab';

//Dependencies
pkg.dependencies = { jviz: 'dev' };

//Build tasks
pkg.build = [ 'build:js', 'build:scss' ];

//Install tasks
pkg.install = [];

//Tasks
pkg.tasks =
{
  //Build js files
  'build:js': [  {name: 'src', args: src_js }, { name: 'concat', args: 'tab.js' }, { name: 'dest', args: './' } ],

  //Build scss files
  'build:scss': [ { name: 'src', args: src_scss }, { name: 'sass' }, { name: 'dest', args: './' } ]
};

//Exports
module.exports = pkg;