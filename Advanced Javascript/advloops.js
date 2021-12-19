// for of
//Iterating - arrays, strings

const basket = ['apples', 'grapes', 'banana', 'oranges'];
for (item of basket) {
    console.log(item);
}
// for (item of 'basket') {
//     console.log(item);
// };

//for in
//enumerating - objects
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 100
}
for (item in detailedBasket) {
    console.log(item);
};
// for (item of detailedBasket) {
//     console.log(item);
// }
// TypeError: detailedBasket is not iterable


for (item in basket) {
    console.log(item);
};


//practice
const array = [-1,0,3,100, 99, 2, 99];
const array2 = ['a', 3, 4, 2];
const array3 = [];

function biggestNumberInArray(arr) {
    let highest = 0;
    for (let i = 0; i < arr.length; i++) {
      if (highest < arr[i]) {
        highest = arr[i];
      }
    }
    return highest;
  }
  console.log(biggestNumberInArray(array));


  function biggestNumberInArray2(arr) {
    let highest = 0;
    arr.forEach(item => {
      if (highest < item) {
        highest = item;
      }
    })
    return highest;
  }
  console.log(biggestNumberInArray2(array2));


  function biggestNumberInArray3(arr) {
    let highest = 0;
    for (item of arr) {
      if (highest < item) {
        highest = item;
      }
    }
    return highest;
  }
  console.log(biggestNumberInArray3(array3));


  const basket1 = {
    glasses: 1,
    books: 2,
    floss: 100
  };
  function checkBasket(basket, lookingFor) {
      for (item in basket) {
          if (item === lookingFor) {
              return '$(lookingFor) is in your basket';
          }
      }
      return 'that does not exist in your basket'
  };
  console.log(checkBasket(basket1, "floss"));