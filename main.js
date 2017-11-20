  /*  var d = document.createElement("div");
              body.appendChild(d);
              
              var div = document.getElementsByTagName("div")[0];
              div.innerHTML = xhr.responseText;
            
              
              document.createTextNode(xhr.responseText);
              p.appendChild(pText);
              body.appendChild(p); 
              
              
            Handle the "onreadystatechange" event
        xhr.readyState property values
        0 = unintialized
        1 = loading
        2 = loaded
        3 = interractive
        4 = Complete
        
        //xhr.responseXML.getElementsByTagName("heading")[0].firstChild.nodeValue;
        // xhr.responseXML.getElementsByTagName("items")[0];
        //getElementsByTagName("item");
        //[i].firstChild.nodeValue;
      */
            

(function () {
    
    var link = document.getElementsByTagName("a")[0];
    
    link.onclick = function () {
        kutz.ajax('files/Ajax.txt', {
            method: "GET",
            complete: function (response) {
                alert(response);
            }
        });
        
        return false;
    };
    
    var form = document.getElementsByTagName('form')[0];
    
    form.onsubmit = function() {
        var emailval = document.getElementById("email").value;
        var url = form.getAttribute("action");
        
        kutz.ajax(url,{
            method: "POST", 
            data: {
                email: emailval
            }, complete: function(response) {
                var body = document.getElementsByTagName("body")[0];
                var d = document.createElement("div");
                body.appendChild(d);
                
                var div = document.getElementsByTagName("div")[0];
                div.innerHTML = response;
            }
        });
        return false;
    }
})();