let  inputBox = document.getElementById("fullscreenInput")
const cachelist = []
const clipboardHistory = []
let index = 0


inputBox.addEventListener("keyup",function(event){

    //Press Enter Key
    if (event.key === "Enter" && inputBox.value != ""){

        inputBox = document.getElementById("fullscreenInput");
        
        //Debug Stuff
        console.log("PRESS ENTERs")
            
        //Add Procesed input to Cachlist
        cachelist.push(processInput(inputBox.value).join("<br>"))
        console.log(cachelist[cachelist.length-1])

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

    //Debug Stuff
    console.log(inputBox.value)
    //Send input to InputField for Visualisation
    document.getElementById("inputField").innerHTML = inputBox.value

})


//CTRL + L to clear console
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.keyCode === 76) {
        event.preventDefault();  // This prevents the default behavior
        cachelist.length = 0

        let terminalOutput = cachelist.join("<br>")
        document.getElementById("output").innerHTML = terminalOutput

    }
});

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



    

//Input -> Output Function
function processInput(input){
    let output =[]

    console.log(input)

    //todo list for commands

    //cv

    //e-mail

    //rm -rf

    //cd
    //
    //
    //
    //
    //
    if (input == "spotify"){
        output = ["https://open.spotify.com/user/crbabhffxdha7bdjgdwqhyjsv"]
    }
    //github
    else if (input == "github"){
        output = ["https://github.com/Ralul"]
    }
    //reddit
    else if (input =="reddit"){
        output = ["https://www.reddit.com/user/Ralul_888"]
    }
    //SPAM
    else if (input =="spam"){
        output = ["Spam, Spam, Spam, lovely Spam","Wonderful Spam, Lovely Spam","Spam, Spam, Spam, magnificent Spam,","Superlative Spam.","Spam, Spam, Spam, wonderous Spam,","Surgical Spam, splendiferous Spam.","Spam, Spam, Spam, Spaaam!"]
    }
    //help
    else if (input == "help"){
        output = ["list of commands"]
    }
    else{
        let outputLine1 = "command '"+ input + "' not found, if you need help type 'help'"
        output[0] = outputLine1
    }

    return output

}
