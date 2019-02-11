let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

let countOnline = (obj) => {
  // change code below this line
      let num = 0
      for (let user in obj) {
        obj[user]['online'] ? num += 1 : null
  }
  return num
  // change code above this line
}

console.log(countOnline(users));
