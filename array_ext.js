module.exports = function () {

    /**
     * 比较2个数组是否相同（浅比较）
     * @param {要比较的数组} arr2 
     */
    Array.prototype.equals = function (arr2) {
        let arr1 = this;
        if (arr1.length != arr2.length) return false;
        for (let i in arr1) {
            if (arr1[i] != arr2[i]) return false;
        }
        return true;
    }

    /**
     * 模仿python的索引形式从数组中移除某个元素
     * 注意这个操作是修改数组本身，返回的也是数组本身的引用，方便连续操作
     * @param {要移除的元素} x
     * @param {如果>0，是移除第pos个元素（不包含其他元素），如果是<0，是移除从后面数第pos个元素，如果=0，移除所有相等元素} pos 
     */
    Array.prototype.remove = function (x, pos = 0) {
        if (pos == 0) {
            for (let i in this) {
                if (this[i] == x) {
                    this.splice(i, 1);
                }
            }
        }
        else if (pos > 0) {
            let count = 0;
            for (i in this) {
                if (this[i] == x) {
                    ++count;
                    if (count == pos) {
                        this.splice(i, 1);
                    }
                }
            }
        } else {
            let count = 0;
            for (let i = this.length - 1; i >= 0; --i) {
                if (this[i] == x) {
                    ++count;
                    if (count == -pos) {
                        this.splice(i, 1);
                    }
                }
            }
        }
        return this;
    };

    //===================linq操作起点==================
    Array.prototype.select = function (proc) {

    };
    Array.prototype.where = function (proc) {

    };
    Array.prototype.first = function (proc) {

    };
    Array.prototype.firstOrDefault = function (proc) {

    };
    Array.prototype.last = function (proc) {

    };
    Array.prototype.lastOrDefault = function (proc) {

    };
    //===================linq操作终点==================
}