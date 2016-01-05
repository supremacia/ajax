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
    console.log(e);
  });
  
  AJAX.send();
```

##Sending Files

HTML Form
```
<input type="file" id="files" multiple="true">
```

Javascript
```
var files = document.getElementById('files');

AJAX = new lib.ajax('http://site.com/upload/files');

AJAX.file(files);

AJAX.set.complete(function(data){
    var e = JSON.parse(data); //if data is Json
    if(e.return === 'ok') alert('Success!');
    else alert('error ...');
  });
  
AJAX.send();
```

