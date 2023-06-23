var testCase1 = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 91,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 90,
    chemistry: 81,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 96,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 85,
    chemistry: 86,
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biology: 99,
    chemistry: 10,
  },
];



let length=testCase1.length;

    for(var i=0;i<length-1;i++)
  {
    for(var j=i+1;j<length;j++)
    {
        if( ( testCase1[i].biology+ testCase1[i].chemistry ) < ( testCase1[j].biology+ testCase1[j].chemistry ))
        {
            var temp =testCase1[i];
             testCase1[i]= testCase1[j];
              testCase1[j]= temp;
        }
        
    }
  }


  for(var i=0;i<length-1;i++)
  {
    for(var j=i+1;j<length;j++)
    {
         if( ( testCase1[i].biology+ testCase1[i].chemistry ) == ( testCase1[j].biology+ testCase1[j].chemistry ))
        {
            if( testCase1[i].biology < testCase1[j].biology )
            {
                var temp =testCase1[i];
             testCase1[i]= testCase1[j];
              testCase1[j]= temp;
            }
        }
        
    }
  }





 console.log(testCase1);



 














