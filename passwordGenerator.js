//  * password length must be equal to 10
// * there should be 3 numbers

//  * and there should 2 symbols from below:

// * !@#$%^&*()\_+~|}{[]:;?><,./-=

//  ? there should be minimum 1 lower and 1 upper case letters,

let obj = {
  numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  symbol: ["!@#$%^&*()_+~|}{[]:;?><,./-="],
  letters: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
};

let password = [];

let lettersCombine = obj["letters"]
  .map((item) => item + "," + item.toUpperCase())
  .join()
  .split(",");
console.log(lettersCombine);

const passwordGenerator = () => {
  let password = [];
  for (let i = 0; i < 10; i++) {
    if (i < 3) {
      password.push(
        obj["numbers"][Math.floor(Math.random() * obj["numbers"].length)]
      );
    } else if ((i > 2) & (i < 5)) {
      password.push(
        obj["symbol"].join()[
          Math.floor(Math.random() * obj["symbol"].join().length)
        ]
      );
    } else if (i == 5) {
      password.push(
        obj["letters"][
          Math.floor(Math.random() * obj["letters"].length)
        ].toUpperCase()
      );
    } else if (i == 6) {
      password.push(
        obj["letters"][Math.floor(Math.random() * obj["letters"].length)]
      );
    } else {
      password.push(
        lettersCombine[Math.floor(Math.random() * lettersCombine.length)]
      );
    }
  }

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  password = shuffle(password);

  return password.join("");
};
console.log(passwordGenerator());

let inputArea = document.querySelector(".input-area");
document.querySelector(".btn").addEventListener("click", () => {
  inputArea.value = passwordGenerator();
});

document.querySelector(".copy").addEventListener("click", () => {
  inputArea.select();
  inputArea.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(inputArea.value);
 
});
