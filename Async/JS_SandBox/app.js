document.getElementById('button').addEventListener('click', loadData);

function loadData(){
      // Create an XHR Object

      const xhr = new XMLHttpRequest();

      // Open method associated with the XML Object(class): Use to specify the type of request to be made and where it is to be made
 
      xhr.open('GET', 'data.txt', true)
      xhr.onload = function(){
            if(this.status === 200){
                  console.log(this.responseText)
            }
      }

      xhr.onprogress = function(){
            console.log('READY STATE:', xhr.readyState)
      }
      // In place of onload, we can check the ready state of the request
      // by using onreadyststechange

      // xhr.open('GET', 'data.txt', true)
      // xhr.onreadystatechange = function(){
      //       if(this.status === 200 && this.readyState === 4){
      //             console.log(this.responseText)
      //       }
      // }

      xhr.send()

}

  /*    
  READY STATE  
  0 : Request not initiaized
  1: server connection established 
  2: request received
  3: processing request
  4: request finished and response is ready
  */
      // HTTP Statuses: 
      // 200 : OK
      // 403: Forbidden
      //404: Not Found
