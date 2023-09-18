let  inputBox = document.getElementById("myInput")
const cachelist = []
const clipboardHistory = []
let index = 0

inputBox.addEventListener("keypress",function(event){

    //Press Enter Key
    if (event.key === "Enter" && inputBox.value != ""){
        //Debug Stuff
        console.log("PRESS ENTERs")
            
        //Add input string to Cachlist
        cachelist.push(inputBox.value)

        //Add input to begin to clipboardHistory 
        clipboardHistory.unshift(inputBox.value)

        //Process to Line by Line Output
        let terminalOutput = cachelist.join("<br>")

        //Give the TerminalOutput to HTML output
        document.getElementById("output").innerHTML = terminalOutput

        //Debug Stuff
        console.log(cachelist.join("\n"))

        //Clear Input Field after Procesing
        inputBox.value = ""

        //Index Clipboardhystory restet to zero
        index = 0

    }
    else if (event.key === "ArrowUp" || event.key === "ArrowDown"){
        console.log("key up / down")
    }    
})

// console up and donw key
document.onkeydown = function(event) {

    if(clipboardHistory.length >= 0)

        if(event.keyCode == 38 && index < clipboardHistory.length){
            console.log("up")
            inputBox.value = clipboardHistory[index]
            console.log(index)
            if(index < clipboardHistory.length-1){
                index++
            }
        }

        if(event.keyCode == 40 && index > 0){
            if(index >= 0){
                index--
            }
            console.log("down")
            inputBox.value = clipboardHistory[index]

            console.log(index)

        }

};

   


