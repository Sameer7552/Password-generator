function updateTextInput(val) {
    document.getElementById('textInput').value = val;
}
function updateTextBar(val) {
    document.getElementById('rangeInput').value = val;
}

const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lower = 'abcdefghijklmnopqrstuvwxyz'
const special = '!@#$%^&*()_-+=<>?'
const number = '0123456789'


function generate(){
    var length = document.getElementById('textInput').value;
    var pass = [length];
    var k = 0

    
    
    var check1 = document.getElementById('uppercase');
    var bool1 = check1.checked;
    
    var check2 = document.getElementById('lowercase');
    var bool2 = check2.checked;
    
    var check3 = document.getElementById('special');
    var bool3 = check3.checked;
    
    var check4 = document.getElementById('number');
    var bool4 = check4.checked;

    if(bool1 == false && bool2 == false && bool3 == false && bool4 == false){
        alert("Please select any option")
    }
    else{
        while(k<length){
            const num = Math.floor(Math.random() * 4) + 1;
            if (num == 1 && bool1 == true){
                pass[k] = get1()
                k++
            }
            else if (num == 2 && bool2 == true){
                pass[k] = get2()
                k++
            }
            else if (num == 3 && bool3 == true){
                pass[k] = get3()
                k++
            }
            else if (num == 4 && bool4 == true){
                pass[k] = get4()
                k++
            }
        }
        
    const final = pass.join('');
    const inputBox = document.getElementById('pass');
    inputBox.value = final;
    }
}

function copyText() {
    const inputBox = document.getElementById('pass');
    inputBox.select();
    document.execCommand('copy');
    alert('Text has been copied to the clipboard!');
}

function get1(){
    var index = Math.floor(Math.random() * 26);
    return upper[index]
}
function get2(){
    var index = Math.floor(Math.random() * 26);
    return lower[index]
}
function get3(){
    var index = Math.floor(Math.random() * 17);
    return special[index]
}
function get4(){
    var index = Math.floor(Math.random() * 10);
    return number[index]
}


