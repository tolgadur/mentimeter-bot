count = 1
while(count < 100){
  document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
  document.getElementById('mcq-2').click();

  var node_list = document.getElementsByTagName('button');
  for (var i = 0; i < node_list.length; i++) {
    var node = node_list[i];

    if (node.getAttribute('type') == 'submit') {
      // do something here with a <input type="text" .../>
      // we alert its value here
      node.click();
    }
  }
  location.reload();

  async function demo() {
    console.log('Taking a break...');
    await sleep(2000);
    console.log('Two seconds later');
  }
  console.log("printed" + String(count));
  count++;
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
