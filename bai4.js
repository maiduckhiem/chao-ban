var images = [];
for(var i=0;i<5;i++){
    images[i]=new Image();
    images[i].src='img/0' +i+'.jpg';
}
var index=0;
function prev(){
    index++;
    if(index>=images.length){
        index=0;
    }
    var anh = document.getElementById('image')
    anh.src=images[index].src;
    document.getElementById('num').innerHTML=index+1;
}
function next(){
    index--;
    if (index<0){
        index=images.length-1;
    }
    var anh =document.getElementById('image')
    anh.src=images[index].src;
    document.getElementById('num').innerHTML=index+1;
}