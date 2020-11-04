/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */
var Queue = function() {
  this._storage ={}
  this.sum = 0
  this.first = 0
  
};

Queue.prototype.add = function(el) {
  this.sum++
  this._storage[this.sum] = el
  return el
};

Queue.prototype.remove = function() {
  if(this.sum<1){
    return
  }
  this.first++
  let result = this._storage[this.first]
  delete this._storage[this.first]
  return result
};

module.exports = Queue;