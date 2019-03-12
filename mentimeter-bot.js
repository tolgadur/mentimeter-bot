whichOne = 'mcq-1'   
howMany = 10
count = 1
while(count <= howMany){
  document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
  document.getElementById(whichOne).click();

  var node_list = document.getElementsByTagName('button');
  for (var i = 0; i < node_list.length; i++) {
    var node = node_list[i];

    if (node.getAttribute('type') == 'submit') {
      node.click();
    }
  }
  count++;
}
