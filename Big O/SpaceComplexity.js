function boo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log('booo')
  }
}

boo([1, 2, 3, 4, 5, 6]) // O(1)

function arrayOfHiNTimes(n) {
  const hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi'
  }
  return hiArray
}

arrayOfHiNTimes(6) // O(n)
