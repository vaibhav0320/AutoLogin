
/*var checkboxValues;
$( document ).ready(function(){
   checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {},
  $checkboxes = $("#checkbox-container :checkbox");
  
  $checkboxes.on("change", function(){
   $checkboxes.each(function(){
    checkboxValues[this.id] = this.checked;
   });
   
   localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
   });
 // On page load
 $.each(checkboxValues, function(key, value) {
 $("#" + key).prop('checked', value);
 });
 
if(checkboxValues['option1'] == true){*/
chrome.idle.setDetectionInterval(3600);
chrome.idle.onStateChanged.addListener(
  function (state) {
      if (state === "locked"){
          chrome.tabs.query({currentWindow:true}, function(tabs){
          for(i=0;i<tabs.length;i++){
            if(tabs[i].url=="https://cyberoam.daiict.ac.in:8090/httpclient.html"){
            chrome.tabs.remove(tabs[i].id,function(){});
            }
          }
        });        
      }
      else if(state == "active"){        
        chrome.tabs.query({currentWindow:true}, function(tabs){
          for(i=0;i<tabs.length;i++){
            if(tabs[i].url=="https://cyberoam.daiict.ac.in:8090/httpclient.html"){
              chrome.tabs.reload(tabs[i].id);
              chrome.tabs.move(tabs[i].id,{index:1});
                return;
            }
          }
        chrome.tabs.create({url : "https://cyberoam.daiict.ac.in:8090/httpclient.html"},function(tab){
        chrome.tabs.move(tab.id,{index:1});
      });
          return;
        });       
      }      
  }
);

chrome.windows.onCreated.addListener(
  function(window){
    chrome.tabs.query({},function(tabs){
      var found = false;
      for(i=0;i<tabs.length;i++){
        if(tabs[i].url=="https://cyberoam.daiict.ac.in:8090/httpclient.html"){
        chrome.tabs.reload(tabs[i].id);
        chrome.tabs.move(tabs[i].id,{index:1});
        found = true;
        return;
        }
      }
      if(!found){
      chrome.tabs.create({url : "https://cyberoam.daiict.ac.in:8090/httpclient.html"},function(tab){
        chrome.tabs.move(tab.id,{index:1});
      });}

    });
    return;
  }
);
/*}

});*/

/*chrome.tabs.query({currentWindow:true}, function(tabs){
  for(i=0;i<tabs.length;i++){
    if(tabs[i].url=="https://cyberoam.daiict.ac.in:8090/httpclient.html"){
    chrome.tabs.remove(tabs[i].id,function(){});
    }
  }
});
chrome.tabs.create({url : "https://cyberoam.daiict.ac.in:8090/httpclient.html"});*/