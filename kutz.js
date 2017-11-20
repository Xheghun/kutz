var kutz = {};
kutz.createXHR = function (url, options) {
    var xhr = false;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }
    if (xhr) {
        options = options || {};
        options.method = options.method || "GET";
        options.data = options.data || null;
        
            if (options.data) {
                var qstring = [];
                for (var key in options.data) {
                    qstring.push( encodeURIComponent(key)+"="+encodeURIComponent(options.data[key]));
                }
                
                options.data = qstring.join("&");
            }
        
        xhr.onreadystatechange = function () {
            if ((xhr.readyState == 4) && (xhr.status == 200 || xhr.status == 304)) {
                var contentType = xhr.getResponseHeader('Content-Type');
                if (options.complete) {
                    if (contentType == "application/json") {
                        options.complete.call(xhr, JSON.parse(xhr.responseText));
                    } else if (contentType == "text/xml" || contentType == "application/xml") 
                        options.complete.call(xhr, xhr.responseXML); 
                     else {
                    options.complete.call(xhr, xhr.responseText);
                }
      
                }
        }
            };
    
        xhr.open(options.method, url, true);
        return xhr;
}  else {
        return false;
    }
};
 
kutz.ajax = function (url, options) {
    var xhr = kutz.createXHR(url, options);
    if (xhr) {
        xhr.setRequestHeader('X-Requested-with', 'XMLHttpRequest');
        if (options.method.toUpperCase() == "POST") {
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencodded');
        }
        xhr.send(options.data);
    }
};