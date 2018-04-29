function fun1(){
    document.getElementById('demo').innerHTML = 'javascript';
}
function fun2() {
    document.getElementById('demo').style.fontSize = '30px';
}
function fun3() {
    var x = document.getElementsByClassName('ex').length;
    document.write((x+1)+"words");
}
function fun4() {
    var x = 3;
    var y = 6;
    document.write(x+y);
    window.alert("value:"+(x+y));
}
function fun5(a,b) {
    return a * b;
    
}
function fun6() {
    var x = "puja";
    var y = new String("rani");
    document.getElementById('demo').innerHTML = typeof x + " " + typeof y;
}
function fun7() {
    var str = "a,b,c,d,e,f";
     var str1=str.replace('f','e');
     var array=str1.split(",");
     document.getElementById('demo').innerHTML = array[5];
}