function run(){
    for(i=99;i>2; i=i-1){
                document.getElementById("change").innerHTML+=i +" bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, " + (i-1) + " bottles of beer on the wall.<br>";
            };
    document.getElementById("change").innerHTML+="2 bottles of beer on the wall,  2 bottles of beer. Take one down and pass it around, 1 bottle of beer on the wall.<br>";
    document.getElementById("change").innerHTML+="1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no bottles of beer on the wall.<br>";
}