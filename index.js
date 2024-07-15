function button(x){
    let text=document.getElementById("text").innerText;
    text=text +x
    document.getElementById("text").innerText=text

}
function equals(){
    let text=document.getElementById("text").innerText;
    let val = eval(text)
    document.getElementById("text").innerText=val

}
function clears(){
    document.getElementById("text").innerText="0"
}
function del(){
    let text = document.getElementById("text").innerText;
    let val = text.substring(0,text.length-1);
    document.getElementById("text").innerText=val
}
