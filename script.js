// 1. Elementlar orasida qatnashgan sonlar yigindisini toping.

let arr = [1, 2, "salom", true, "xayr"];

function sonlarYigindisi(arr) {
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'number'){
        sum += arr[i];
    }
}

return sum;
}

console.log(sonlarYigindisi(arr));

// 2. 
function boshHarflargaAlmashtir(yozuv) {
    let sozlar = yozuv.split(' ');
    let natija = [];

    for (let i = 0; i < sozlar.length; i++) {
        let soz = sozlar[i];
        let boshHarf = soz.charAt(0).toUpperCase();
        let qolganQism = soz.slice(1);
        let yangiSoz = boshHarf + qolganQism;
        natija.push(yangiSoz);
    }

    return natija.join(' ');
}

let yozuv = "lorem ipsum dolor sit amet";
let natija = boshHarflargaAlmashtir(yozuv);
console.log("Natija:", natija);

// 3. Palindromlikka tekshiradigan funksiya yozing.

function palindrome(str) {
    return str.split('').reverse('').join('') == str;
}

console.log(palindrome('365563'));
console.log(palindrome('5668'));
console.log(palindrome('121'));
console.log(palindrome("kiyik"));

// 4

const users = [
    { id: 1, name: "John", age: 40 },
    { id: 2, name: "Bill", age: 45 },
    { id: 3, name: "Adam", age: 30 }
  ];
  
  function findOldestUser(users) {
    let oldestUser = null;
    let maxAge = 0;
  
    for (const user of users) {
      if (user.age > maxAge) {
        maxAge = user.age;
        oldestUser = user;
      }
    }
  
    return oldestUser;
  }
  
  const oldestUser = findOldestUser(users);
  console.log(oldestUser);
  
