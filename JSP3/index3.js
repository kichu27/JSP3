
function ogin()
{
var usern = document.getElementById('USERNAME').value ;
var passw = document.getElementById('PASSWORD').value ;

if (usern== "patekar@gmail.com" && passw =="SAMU" ) {

  location.assign("homepage.html,D:\STUDY MATERIAL\Web_Developement\JAVASCRIPT\JSP3\homepage.html") ;

}
else
{
  window.alert("LOGIN FAILED") ;
}
}
