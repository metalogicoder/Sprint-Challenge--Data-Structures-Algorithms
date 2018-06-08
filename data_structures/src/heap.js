const heapsort = (arr) => {
  /* 
    - DISCLAIMER -
    I pulled this solution from the web due to lack of
    time and knowledge. I will do my best to understand
    and refactor it in the future but I take no credit
    for the code itself. All I did was update the JS and
    tweak to make tests pass.
  */
  
  const returnArr = arr.slice();
  let array_length;
  function heap_root(input, i) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let max = i;

    if (left < array_length && input[left] > input[max]) {
        max = left;
    }
    if (right < array_length && input[right] > input[max]) {
        max = right;
    }
    if (max != i) {
        swap(input, i, max);
        heap_root(input, max);
    }
  }

  function swap(input, index_A, index_B) {
    let temp = input[index_A];
    input[index_A] = input[index_B];
    input[index_B] = temp;
  }

  function heapSort(input) {
    array_length = input.length;

    for (let i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
      heap_root(input, i);
    }

    for (i = input.length - 1; i > 0; i--) {
      swap(input, 0, i);
      array_length--;
      
      heap_root(input, 0);
    }
  }

  heapSort(returnArr);
  return returnArr;
};


class Heap {
  constructor() {
    this.storage = [];
  }

  insert(val) {
    const index = this.storage.push(val) - 1;
    this.bubbleUp(index);
  }

  delete() {
    if (!this.storage.length) return null;
    if (this.storage.length === 1) {
      return this.storage.pop();
    }

    const max = this.storage[0];
    this.storage[0] = this.storage.pop();
    this.siftDown(0);
    return max;
  }

  getMax() {
    return this.storage[0];
  }

  getSize() {
    return this.storage.length;
  }

  bubbleUp(index) {
    const parent = Math.floor((index - 1) / 2);
    if (this.storage[parent] < this.storage[index]) {
      [this.storage[parent], this.storage[index]] = [this.storage[index], this.storage[parent]];
      this.bubbleUp(parent);
    }
  }

  siftDown(index) {
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;
    let maxChild;
    
    if (this.storage[leftChildIndex] && this.storage[rightChildIndex]) {
      maxChild = this.storage[leftChildIndex] > this.storage[rightChildIndex] ? leftChildIndex : rightChildIndex;
    } else if (this.storage[leftChildIndex]) {
      maxChild = leftChildIndex;
    } else if (this.storage[rightChildIndex]) {
      maxChild = rightChildIndex;
    } 

    if (this.storage[index] < this.storage[maxChild]) {
      [this.storage[maxChild], this.storage[index]] = [this.storage[index], this.storage[maxChild]];
      this.siftDown(maxChild);
    }
  }
}

module.exports = {
  Heap,
  heapsort,
};
