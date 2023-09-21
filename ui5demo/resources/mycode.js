function myFirstFunction(){
    // below is the commented code
    // multip
    // lines 
    // commented commented
    /* blcokof 
    commented code */
    setTimeout(function(){
        alert('i am line 12 now, called after 10');
    },10000);
    myNewFunction()            
    alert("i am line 14");
    

}
function myNewFunction(){
        alert("i am function 2")
    }
    function outputFunction(){
        // document.write("<h4>how are you<h4>");
            var x = 10;
            var y = 20;
            var z = x + y ;
        console.log(z)
    }
function onLogin(){
    // step 1 get the object of input field
    // var oInp1 = document.getElementById("idUser")
    // var oPass = document.getElementById("idPass")
    // step 2 get the value
    
    //chaining
    var val1 = document.getElementById("idUser").value
    var val2 =  document.getElementById("idPass").value
    // step 3 validate using if
    if (val1 === "Anubhav" && val2 === "Anubhav" ) {
        document.write("login success")
    }else{
      document.getElementById("msg").innerText
      = "Credential are invalid,please try again"
    } 
    
    // step 4 change ui accordingly
}

function onMagic(){
    var array = document.getElementsByClassName("box-title")
    // for (var index = 0; index < array.length; index++) {
       

    //       array[index].style.background = "black"
    //       array[index].style.color = "aqua"
        
    // 
    for(item in array){
        array[item].style.background = "black"
    }
     array.forEach(element => {
        
     });
}
function dynamicCode(){
       // create new html element
       var oNewObject = document.createElement("h3")
       try {
        var oTextNode = document.createTextNode(document.getElementById("idPass").value)
       } catch (error) {
        alert("an internal error occcured please contact support team")
       }
       var oTextNode = document.createTextNode(document.getElementById("idPass").value)
    //    oTextNode.innerText = "Welcome"

       oNewObject.appendChild(oTextNode);

       var color = document.getElementById("idUser").value

       switch (color) {
        case "green":
            oNewObject.style.color = "red"

            break;
         case "red":   
         oNewObject.style.color = "green"
         break;
        default:
            oNewObject.style.color = "pink"
            break;
       }

       var oDomdiv = document.getElementById("canvas")

       oDomdiv.appendChild(oNewObject);



}
function call(){
    window.open("https://www.anubhavtrainings.com")
}