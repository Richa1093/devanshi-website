function validation(){
  var a= document.getElementById("pass").value
  var b= document.getElementById("confirm").value
  var c=a.length
  var d=b.length
  var n=document.getElementById("name").value
  if(n=="")
  {
    document.write("first name needs to be filled out <br>")
  }
  if(c==d && a==b && c>=8){
    document.write("password is having correct length & matched")
  }
  else{
    document.write("password should be of 8 digit or did not matched")
  }
}