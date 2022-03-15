function Test(){
    this.items=[];
    function num(str,yxj){
        this.str=str;
        this.yxj=yxj; 
    }
}
Test.prototype.fn=function(str,yxj){
    var num1=new Test(str,yxj);
    if(this.items.length==0){
        this.items.push(num1);
    }else{
        var add=false;
        for(i=0;i<this.items.length;i++){
        if(num1.yxj<this.items[i].yxj){
            this.items.splice(i,0,num1);
            add=true;
        }
    }
    if(!add){
        this.items.push(num1);
    }
}
}