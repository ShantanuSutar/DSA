// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  const a = 5 // O(1)
  const b = 10 // O(1)
  const c = 50 // O(1)
  for (let i = 0; i < input; i++) { // O(n)
    const x = i + 1 // O(n)
    const y = i + 2 // O(n)
    const z = i + 3 // O(n)
  }
  for (let j = 0; j < input; j++) { // O(n)
    const p = j * 2 // O(n)
    const q = j * 2 // O(n)
  }
  const whoAmI = "I don't know" // O(1)
}

anotherFunChallenge(5);
//  BIG O(4 + 7n) = BIG O(n)
