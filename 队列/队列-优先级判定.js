function Test(){
    this.items=[];
    function Test1(num,yxj){
        this.num=num;
        this.yxj=yxj;
    }
//    此处方法添加到原型上 用的时候直接 对象名.（）就可以调用
    Test.prototype.enqueue=function(num,yxj){
        var num1=new Test1(num,yxj);
        if(this.items.length==0){
            this.items.push(num1);
        }else{
            var add=false;
            for(i=0;i<this.items.length;i++){
                if(num1.yxj<this.items[i].yxj){
                    this.items.splice(i,0,num1);
                    add=true;
                    break;
                }
            }
            if(!add){
                this.items.push(num1);
            }
        }
    }
    Test.prototype.toString=function(){
          var resultstring=" ";
        for(var i=0;i<this.items.length;i++){
        resultstring+=this.items[i].num+''+this.items[i].yxj
        return resultstring;
        }
    } 
        var pq=new Test();
    pq.enqueue("赵四",10)
    pq.enqueue("刘能",20)
    pq.enqueue("广坤",100)
    pq.enqueue("老七",11)
    document.write(pq)