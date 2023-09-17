let  inputBox = document.getElementById("myInput")
const cachelist = []

inputBox.addEventListener("keypress",function(event){

    //Press Enter Key
    if (event.key === "Enter"){
        //Debug Stuff
        console.log("PRESS ENTERs")
            
        //Add input string to Cachlist
        cachelist.push(inputBox.value)

        //Process to Line by Line Output
        let terminalOutput = cachelist.join("<br>")

        //Give the TerminalOutput to HTML output
        document.getElementById("output").innerHTML = terminalOutput

        //Debug Stuff
        console.log(cachelist.join("\n"))

        //Clear Input Field after Procesing
        inputBox.value = ""

    }
    else if (event.key === "ArrowUp" || event.key === "ArrowDown"){
        console.log("key up / down")
    }    
})

// console up and donw key
switch (event.key){

}


