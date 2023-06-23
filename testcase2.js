let testCase2 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 100,
    chemistry: 80,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 80,
    chemistry: 100,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 30,
    chemistry: 40,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 40,
    chemistry: 30,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

let length = testCase2.length;

for (var i = 0; i < length - 1; i++) {
  for (var j = i + 1; j < length; j++) {
    if (
      testCase2[i].biology + testCase2[i].chemistry <
      testCase2[j].biology + testCase2[j].chemistry
    ) {
      var temp = testCase2[i];
      testCase2[i] = testCase2[j];
      testCase2[j] = temp;
    }
  }
}

for (var i = 0; i < length - 1; i++) {
  for (var j = i + 1; j < length; j++) {
    if (
      testCase2[i].biology + testCase2[i].chemistry ==
      testCase2[j].biology + testCase2[j].chemistry
    ) {
      if (testCase2[i].biology < testCase2[j].biology) {
        var temp = testCase2[i];
        testCase2[i] = testCase2[j];
        testCase2[j] = temp;
      }
    }
  }
}

console.log(testCase2);
