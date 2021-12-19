//Advanced Arrays

const array = [1, 5, 9, 22];
const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2);
});
console.log('forEach', double);
// double;
// (4) [2, 10, 18, 44];

// map, filter, reduce

const mapArray = array.map((num) => {
    return num * 2;
})
// we can also write it like this for sinle variable
const mapArray1 = array.map(num => num * 2);

console.log('map', mapArray);
console.log('map1', mapArray1);

//filter

const filterArray = array.filter(num =>  num > 5);
console.log('filter', filterArray);

const filterArray1 = array.filter(num =>  num === 5);
console.log('filter1', filterArray1);

//reduce; accumulator is like a storage which may or may not have value, which store result for further usage

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
});
console.log('reduce', reduceArray);

const reduceArray1 = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 5);
console.log('reduce1', reduceArray1);

const reduceArray2 = array.reduce((accumulator, num) => {
    return accumulator * num;
});
console.log('reduce2', reduceArray2);
const reduceArray3 = array.reduce((accumulator, num) => {
    return accumulator * num;
}, 2);
console.log('reduce3', reduceArray3);

// practice

const array1 = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];

  const newarray1 = [];
  const array2 = array1.forEach(user => { 
      let {username} = user; 
      username = username + "!";
      newarray1.push(username);
  });
  console.log(newarray1);

  const maparray1 = array1.map(user => {
    let {username} = user; 
      return username + "?";
  });   
      
  console.log(maparray1);


  const filterarray1 = array1.filter(user => {
    let {username} = user; 
      return user.team === "red";
  });   
      
  console.log(filterarray1);


  const reducearray1 = array1.reduce((accumulator, user) => {
    let {username} = user; 
      return accumulator + user.score;
  }, 0);   
      
  console.log(reducearray1);

  const answer = array1.map(user => {
    let {username} = user;
	user.items = user.items.map(items => {
		return items + "!";
	});
	return user;
})
console.log(answer);


