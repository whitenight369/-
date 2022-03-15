function PriorityQueue(){
    this.items=[];
    function QueueElement(element,Priority){
        this.element=element;
        this.Priority=Priority;
    }
    PriorityQueue.prototype.enqueue=function(element,Priority){
        var queueElement=new QueueElement(element,Priority);
        if(this.items.length==0){
            this.items.push(queueElement);
        }else{
            var add=false;
            for(var i=0;i<this.items.length;i++){
                if(queueElement.Priority<this.items[i].Priority){
                    this.items.splice(i,0,queueElement)
                    add=true;
                    break;
                }
            }
            if(!add){
                this.items.push(queueElement);
            }
        }
    }
     //2.队列前端删除元素
     PriorityQueue.prototype.dequeue=function(element){
        return this.items.shift(element)
      }
  
      //3.返回/查看前端的第一个元素
      PriorityQueue.prototype.front=function(){
        return this.items[0];  
      }
  
      //4.查看队列是否为空
      PriorityQueue.prototype.isEmpty=function(){
         return this.items.length==0;  
      }
  
      //5.查看队列中元素的个数
      PriorityQueue.prototype.size=function(){
         return this.items.length; 
      }
  
      //6.队列内容转换成字符串形式
      PriorityQueue.prototype.toString=function(){
      // tom jarry susan 赵四 
      var resultstring=" ";
      for(var i=0;i<this.items.length;i++){
      resultstring+=this.items[i].element+''+this.items[i].Priority+' '
      }
      return resultstring;
      }
}