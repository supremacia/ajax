#Ajax
Simple Javascript Ajax


##Usage
```
  AJAX = new lib.ajax();
  AJAX.set.url('http://site.com');
  AJAX.set.data({key:'value'});
  
  //OR
  AJAX = new lib.ajax('http://site.com', 'GET', {key:'value'});
  
  AJAX.set.complete(function(data){
    var e = JSON.parse(data); //if data is Json
  });
  AJAX.send();
```

