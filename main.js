function insertionSort(arr) {
  // Traverse from the second element to the end of the array
  for (let i = 1; i < arr.length; i++) {
    // Store the current element to be compared
    let key = arr[i];
    // Start comparing with the previous elements
    let j = i - 1;

    // Move elements of arr[0..i-1] that are greater than key to one position ahead
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Place the key element at its correct position
    arr[j + 1] = key;
  }
}

// Example usage
let array = [5, 2, 9, 1, 5, 6];
insertionSort(array);
console.log("Sorted array:", array);
