/* AJAX class
 * author http://google.com/+BillRocha
 * date:  2015/06/18
 *
 * namespace AJAX
 */

var lib = (function(){
    var a = function(Url, Method, Data){
        var url =       Url     || window.location.href,
            method =    Method  || 'POST',
            data =      Data    || {},
            response =  '',
            formdata =  new FormData(),
            node,

            onprogress = function(e){console.log(e)},
            oncomplete = function(e){console.log(e)},
            status = function(e){console.log(e)};

        //Progresss
        function progressHandler (event) {
            onprogress(Math.round((event.loaded / event.total) * 100) + "%");
        }

        //Complete
        function completeHandler (event) {
            try{
                response = JSON.parse(event.target.responseText)
            }catch(e){
                response = event.target.responseText;
            };
            formdata = new FormData();
            oncomplete(response);
        }

        //Error
        function errorHandler (event) {
            status('Failed');
        }

        //Abort
        function abortHandler (event) {
            status("Aborted");
        }

        //Public methods
        return {
            //Add File(s)
            file: function (files){
                for(var i =0; i < files.length; i++){
                    formdata.append(i, files[i]);
                }
            },

            set: {
                url: function(u){url = u},
                data: function(d){
                        data = d;
                        formdata.append('data', JSON.stringify(data));
                    },
                method: function(m){method = m},
                progress: function(f){
                    if("function" === typeof f){
                        onprogress = f;
                        return this;
                    }
                    else return false;
                },

                complete: function(f){
                    if("function" === typeof f){
                        oncomplete = f;
                        return this;
                    }
                    else return false;
                },

                status: function(f){
                    if("function" === typeof f){
                        status = f;
                        return this;
                    }
                    else return false;
                }
            },

            get: {
                url: function(){return url},
                data: function(){return data},
                method: function(){return method},
                response: function(){return response}
            },

            //Send
            send: function () {
                node = new XMLHttpRequest();
                node.upload.addEventListener("progress", progressHandler, false);
                node.addEventListener("load", completeHandler, false);
                node.addEventListener("error", errorHandler, false);
                node.addEventListener("abort", abortHandler, false);
                node.open(method, url);
                node.send(formdata);
            }
        }
    }


    //Public method
    return {
        ajax: a
    }
})();
