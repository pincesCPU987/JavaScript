var url='https://classroom.google.com'
if (window == top) {
var url='window.location.replace("../../prod_info/webcrawler.htm?var1='+window.location.href+'")';
eval(url);
}
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'url,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

// Start file download.
download("hello.txt","This is the content of my file :)");