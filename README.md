#Ajax
Simple Javascript Ajax


##Usage
```
  AJAX = new lib.ajax();
  AJAX.set.url('user/checkUser');
  AJAX.set.data({key:'value'});
  AJAX.set.complete(function(data){
    var e = JSON.parse(data); //if data is Json
  });
```

