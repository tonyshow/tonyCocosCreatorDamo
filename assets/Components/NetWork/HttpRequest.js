var HttpRequest = function(url,cb){
    this.url = url;
    this.cb = cb;
    this.xhr = cc.loader.getXMLHttpRequest();
    
    var self = this;
    this.xhr.onreadystatechange = function () {
       self.callBack();
    };
    self.xhr.open("GET", url, true);
    self.xhr.send();
};

HttpRequest.prototype.callBack = function()
{
     if (this.xhr.readyState == 4 && (this.xhr.status >= 200 && this.xhr.status < 400)) { 
            var res = JSON.parse(this.xhr.responseText);
            if( null != this.cb)
            {
                this.cb(res);
            }
     }
};