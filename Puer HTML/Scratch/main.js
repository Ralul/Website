let  inputBox = document.getElementById("myInput")

inputBox.addEventListener("input", function(){

    document.getElementById("output").innerHTML = inputBox.value
    
    console.log(document.getElementById(inputBox))

})
