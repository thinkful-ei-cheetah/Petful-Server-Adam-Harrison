'use strict';
class _node {
  constructor(data, next){
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
  }

  enqueue(data){
    const node = new _node(data, null);
    
    if(this.first === null){
      this.first = node;
    }
    
    if(this.last){
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue(){
    if(this.first === null) {
      return;
    }

    const node = this.first;
    this.first = this.first.next;

    if(node === this.last){
      this.last = null;
    }
    return node.data;
  }

  peek() {
    const node = this.first;
    if(this.first === null){
      return 'Nothing found';
    }
    return node.data;
  }
  peekNext(){
    const node = this.first.next;
    if(node === null){
      return 'Nothing found';
    }
    return node.data;
  }
}

module.exports = Queue;