function makeList() {
  let listArray = [];
  
  return function(listItem) {
    if (!listItem) {
      if (listArray.length === 0) {
        console.log('The list is empty.');
      } else listArray.forEach(item => {
        console.log(item);
      });
    } else if (listArray.includes(listItem)) {
      let index = listArray.indexOf(listItem);
      let removedItem = listArray.splice(index, 1)[0];
      console.log(`${removedItem} removed!`);
    } else {
      listArray.push(listItem);
      console.log(`${listItem} added!`);
    }
  };
}

let list = makeList();
list();

list("make breakfast");

list("read book");

list();

list("make breakfast");

list();


