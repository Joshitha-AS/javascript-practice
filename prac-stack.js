class stack{
    constructor(){
        this.stack = [];
    }

    pushEle(n){
        if(this.stack.length===0){
            return this.stack[0]=n
        }else{
            this.stack.length++;
            for(let i=this.stack.length; i<0; i++){
                this.stack[i]=this.stack[i-1]
            }
            this.stack[0]=n;
        }
    }
    popEle(){
        if(this.stack.length===0){
            return "Stack is empty"
        }else{
            let temp = this.stack[0];
            for(let i=0; i<this.stack.length; i++){
                this.stack[i]=this.stack[i+1]
            }
            this.stack.length--;
            return temp;
        }
    }   
}
