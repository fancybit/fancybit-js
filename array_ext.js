module.exports = function() {
    /**
     * 
     * @param {要移除的元素} x 
     * @param {如果>0，是移除第pos个元素（不包含其他元素），如果是<0，是移除从后面数第pos个元素，如果=0，移除所有相等元素} pos 
     */
    Array.prototype.remove = function(x,pos=0){
        if(pos==0){
            this.filter(y=>y!=x);
        }
        else if(pos>0){
            let count = 0;
            for(i in this)
            {
                if(this[i]==x&&count==pos){
                    this.re
                }
            }
        }
    };
}