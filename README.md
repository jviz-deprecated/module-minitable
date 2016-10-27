# tab

The base table module for jviz.

## Install

You can install the `tab` module using the jviz CLI:

```
jviz install tab
```

## Reference

### Options

#### ajax

Do an ajax request to get the data of the table from the server. The `ajax` options gets the following keys:

- `url`: (**mandatory**) sets the url to retrieve the data from the server.
- `type`: sets the method to retrieve the data. Examples: `GET`, `POST`...
- `parse`: a `function` to parse the retrieved data.

```javascript
jviz.modules.tab({
  "ajax":
  {
    "url": "data.json",
    "type": "get",
    "parse": function(d)
    {
      //Do something with the data and return the parsed data
      //....
      return d;
    }
  }
});
```

#### columns

An array with the columns information.

#### data

An array with the data to display on the table.

```javascript
jviz.modules.tab({
  "data":
  [
    { "name": "John", "age": 25 },
    { "name": "Susan", "age": 26 },
    { "name": "Bob", "age": 24 }
  ]
});
```

#### parent

(**Mandatory**) Sets the parent element where the table must be builded.


### API

#### tab.check(index)

Check a row.

#### tab.checkAll()

Checks all rows of the table.

#### tab.uncheck(index)

Uncheck a row.

#### tab.uncheckAll()

Un-checks all rows of the table.


### Events

You can register a new event using the `on` method. For example, with the following code

```javascript
tab.on('click:head', function(){ /* ... */ });
```

the function provided will he called when the user clicks on some cell of the header.

#### tab.on('click:head', listener)

This event will be executed when the user clicks on a cell of the header.

#### tab.on('filter:apply', listener)

Emit the `listener` function when the data is filtered. The function will be called with the following arguments:

- `length`: number of rows that have passed the filter.

#### tab.on('filter:reset', listener)

Emit the `listener` function when the filter is reset. The function will be called with the following arguments:

- `length`: number of rows of the original data.


## License

[MIT LICENSE](./LICENSE) &copy; The Jviz Team.
