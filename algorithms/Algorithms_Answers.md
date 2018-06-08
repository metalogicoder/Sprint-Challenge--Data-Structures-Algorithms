Add your answers to the Algorithms exercises here.

##Excersize I
a) O(n)
b) O(log n)
c) O(log n)?
d) O(n^2)
e) O(n^3)
f) O(n)
g) O(n)

##Exercise II
a) function maxDiff(arr) {
    let largest, smallest;

    for(let i = 0; i < arr.length - 1; i++) {
      if(!largest || arr[i] > largest) {
        largest = arr[i];
      }
      if(!smallest || arr[i] < smallest) {
        smallest = arr[i];
      }
    }
    return largest - smallest;
  }