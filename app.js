const boxes = document.querySelectorAll(".element");
const box1 = document.querySelector(".block-1");
const box2 = document.querySelector(".block-2");
const box3 = document.querySelector(".block-3");
const box4 = document.querySelector(".block-4");
const box5 = document.querySelector(".block-5");
const box6 = document.querySelector(".block-6");
const box7 = document.querySelector(".block-7");
const box8 = document.querySelector(".block-8");
const box9 = document.querySelector(".block-9");
const box10 = document.querySelector(".block-10");
const box11 = document.querySelector(".block-11");
const box12 = document.querySelector(".block-12");
const box13 = document.querySelector(".block-13");
const box14 = document.querySelector(".block-14");
const box15 = document.querySelector(".block-15");
const box16 = document.querySelector(".block-16");
//Makes all boxes purple
// boxes.forEach((q) => {
//   q.addEventListener('click', () =>{
//     q.classList.toggle('purple')
//   })
// })
const randomNumber = Math.floor(Math.random() * 10 + 1);
const randomNumber2 = Math.floor(Math.random() * 10 + 1);
const randomNumber3 = Math.floor(Math.random() * 10 + 1);
const randomNumber4 = Math.floor(Math.random() * 10 + 1);


let boxGenerator = Math.floor(Math.random() * 5 + 1);
console.log(boxGenerator, 'This is box gen')
console.log(randomNumber2, 'This is randomnumber')
//BOX1 BOX5 BOX7 BOX12
let boxString1 = ''
let boxString2 = ''
let boxString3 = ''
let boxString4 = ''
if (boxGenerator === 1) {
boxString1 = box1
boxString2 = box7
} else if (boxGenerator === 2){
  boxString1 = box12
  boxString2 = box5
} else if (boxGenerator === 3){
  boxString1 = box5
  boxString2 = box7
} else if (boxGenerator === 4){
  boxString1 = box12
  boxString2 = box1
} else if(boxGenerator === 5){
  boxString1 = box7
  boxString2 = box12
} else {

}

if (boxGenerator === 1) {
  boxString3 = box12
  boxString4 = box5
  } else if (boxGenerator === 2) {
    boxString3 = box7
    boxString4 = box1
  } else if (boxGenerator === 3) {
    boxString3 = box12
    boxString4 = box1
  } else if (boxGenerator === 4) {
    boxString3 = box5
    boxString4 = box7
  } else if (boxGenerator === 5) {
    boxString3 = box1
    boxString4 = box5
  }else {

  }

if (randomNumber >= 5) {
  boxString1.addEventListener("click", () => {
    boxString1.classList.toggle("red");
  });
} else if (randomNumber <= 4) {
  boxString1.addEventListener("click", () => {
    boxString1.classList.toggle("blue");
  });
} else {

}

if (randomNumber >= 5) {
  boxString2.addEventListener("click", () => {
    boxString2.classList.toggle("red");
  });
} else if (randomNumber <= 4) {
  boxString2.addEventListener("click", () => {
    boxString2.classList.toggle("blue");
  });
} else {
  
}
if (randomNumber2 >= 5) {
  boxString3.addEventListener("click", () => {
    boxString3.classList.toggle("purple");
  });
} else if (randomNumber2 <= 4) {
  boxString3.addEventListener("click", () => {
    boxString3.classList.toggle("pink");
  });
} else {
  
}
if (randomNumber2 >= 5) {
  boxString4.addEventListener("click", () => {
    boxString4.classList.toggle("purple");
  });
} else if (randomNumber2 <= 4) {
  boxString4.addEventListener("click", () => {
    boxString4.classList.toggle("pink");
  });
} else {
  
}
//BOX1 BOX5 BOX7 BOX10
//BOX11 BOX13 BOX3 BOX16
let boxGenerator2 = Math.floor(Math.random() * 5 + 1);
let boxString5 = ''
let boxString6 = ''
let boxString7 = ''
let boxString8 = ''
if (boxGenerator2 === 1) {
boxString5 = box11
boxString6 = box13
} else if (boxGenerator2 === 2){
  boxString5 = box3
  boxString6 = box13
} else if (boxGenerator2 === 3){
  boxString5 = box11
  boxString6 = box3
} else if (boxGenerator2 === 4){
  boxString5 = box16
  boxString6 = box11
} else if(boxGenerator2 === 5){
  boxString5 = box16
  boxString6 = box13
} else {
}

if (boxGenerator2 === 1) {
  boxString7 = box16
  boxString8 = box3
  } else if (boxGenerator2 === 2) {
    boxString7 = box11
    boxString8 = box16
  } else if (boxGenerator2 === 3) {
    boxString7 = box16
    boxString8 = box13
  } else if (boxGenerator2 === 4) {
    boxString7 = box3
    boxString8 = box13
  } else if (boxGenerator2 === 5) {
    boxString7 = box11
    boxString8 = box3
  }else {

  }

if (randomNumber2 >= 5) {
  boxString5.addEventListener("click", () => {
    boxString5.classList.toggle("green");
  });
} else if (randomNumber2 <= 4) {
  boxString5.addEventListener("click", () => {
    boxString5.classList.toggle("cyan");
  });
} else {

}

if (randomNumber2 >= 5) {
  boxString6.addEventListener("click", () => {
    boxString6.classList.toggle("green");
  });
} else if (randomNumber2 <= 4) {
  boxString6.addEventListener("click", () => {
    boxString6.classList.toggle("cyan");
  });
} else {
  
}
if (randomNumber2 >= 5) {
  boxString7.addEventListener("click", () => {
    boxString7.classList.toggle("yellow");
  });
} else if (randomNumber2 <= 4) {
  boxString7.addEventListener("click", () => {
    boxString7.classList.toggle("lime");
  });
} else {
  
}
if (randomNumber2 >= 5) {
  boxString8.addEventListener("click", () => {
    boxString8.classList.toggle("yellow");
  });
} else if (randomNumber2 <= 4) {
  boxString8.addEventListener("click", () => {
    boxString8.classList.toggle("lime");
  });
} else {

}
//BOX11 BOX13 BOX3 BOX16
//BOX14 BOX6 BOX4 BOX9
let boxGenerator3 = Math.floor(Math.random() * 5 + 1);
let boxString9 = ''
let boxString10 = ''
let boxString11 = ''
let boxString12 = ''
if (boxGenerator3 === 1) {
boxString9 = box6
boxString10 = box9
} else if (boxGenerator3 === 2){
  boxString9 = box9
  boxString10 = box14
} else if (boxGenerator3 === 3){
  boxString9 = box14
  boxString10 = box6
} else if (boxGenerator3 === 4){
  boxString9 = box4
  boxString10 = box14
} else if(boxGenerator3 === 5){
  boxString9 = box6
  boxString10 = box4
} else {
}

if (boxGenerator3 === 1) {
  boxString11 = box4
  boxString12 = box14
  } else if (boxGenerator3 === 2) {
    boxString11 = box6
    boxString12 = box4
  } else if (boxGenerator3 === 3) {
    boxString11 = box9
    boxString12 = box4
  } else if (boxGenerator3 === 4) {
    boxString11 = box6
    boxString12 = box9
  } else if (boxGenerator3 === 5) {
    boxString11 = box14
    boxString12 = box9
  }else {

  }

if (randomNumber3 >= 5) {
  boxString9.addEventListener("click", () => {
    boxString9.classList.toggle("orange");
  });
} else if (randomNumber3 <= 4) {
  boxString9.addEventListener("click", () => {
    boxString9.classList.toggle("black");
  });
} else {

}

if (randomNumber3 >= 5) {
  boxString10.addEventListener("click", () => {
    boxString10.classList.toggle("orange");
  });
} else if (randomNumber3 <= 4) {
  boxString10.addEventListener("click", () => {
    boxString10.classList.toggle("black");
  });
} else {
  
}
if (randomNumber3 >= 5) {
  boxString11.addEventListener("click", () => {
    boxString11.classList.toggle("brown");
  });
} else if (randomNumber3 <= 4) {
  boxString11.addEventListener("click", () => {
    boxString11.classList.toggle("aqua");
  });
} else {
  
}
if (randomNumber3 >= 5) {
  boxString12.addEventListener("click", () => {
    boxString12.classList.toggle("brown");
  });
} else if (randomNumber3 <= 4) {
  boxString12.addEventListener("click", () => {
    boxString12.classList.toggle("aqua");
  });
} else {

}
//BOX14 BOX6 BOX4 BOX9
//BOX2 BOX8 BOX10 BOX15
let boxGenerator4 = Math.floor(Math.random() * 5 + 1);
let boxString13 = ''
let boxString14 = ''
let boxString15 = ''
let boxString16 = ''
if (boxGenerator4 === 1) {
boxString13 = box10
boxString14 = box2
} else if (boxGenerator4 === 2){
  boxString13 = box15
  boxString14 = box8
} else if (boxGenerator4 === 3){
  boxString13 = box8
  boxString14 = box2
} else if (boxGenerator4 === 4){
  boxString13 = box10
  boxString14 = box15
} else if(boxGenerator4 === 5){
  boxString13 = box2
  boxString14 = box10
} else {
}

if (boxGenerator4 === 1) {
  boxString15 = box8
  boxString16 = box15
  } else if (boxGenerator4 === 2) {
    boxString15 = box2
    boxString16 = box10
  } else if (boxGenerator4 === 3) {
    boxString15 = box15
    boxString16 = box10
  } else if (boxGenerator4 === 4) {
    boxString15 = box8
    boxString16 = box2
  } else if (boxGenerator4 === 5) {
    boxString15 = box15
    boxString16 = box8
  }else {

  }

if (randomNumber4 >= 5) {
  boxString13.addEventListener("click", () => {
    boxString13.classList.toggle("bloodorange");
  });
} else if (randomNumber4 <= 4) {
  boxString13.addEventListener("click", () => {
    boxString13.classList.toggle("beige");
  });
} else {

}

if (randomNumber4 >= 5) {
  boxString14.addEventListener("click", () => {
    boxString14.classList.toggle("bloodorange");
  });
} else if (randomNumber4 <= 4) {
  boxString14.addEventListener("click", () => {
    boxString14.classList.toggle("beige");
  });
} else {
  
}
if (randomNumber4 >= 5) {
  boxString15.addEventListener("click", () => {
    boxString15.classList.toggle("coral");
  });
} else if (randomNumber4 <= 4) {
  boxString15.addEventListener("click", () => {
    boxString15.classList.toggle("grey");
  });
} else {
  
}
if (randomNumber4 >= 5) {
  boxString16.addEventListener("click", () => {
    boxString16.classList.toggle("coral");
  });
} else if (randomNumber4 <= 4) {
  boxString16.addEventListener("click", () => {
    boxString16.classList.toggle("grey");
  });
} else {

}
//BOX2 BOX8 BOX10 BOX15

































// //Box1 and box 5
// if (randomNumber2 >= 8) {
//   box4.addEventListener("click", () => {
//     box4.classList.toggle("orange");
//   });
// } else if (randomNumber2 <= 4) {
//   box4.addEventListener("click", () => {
//     box4.classList.toggle("green");
//   });
// } else {
//   box4.addEventListener("click", () => {
//     box4.classList.toggle("purple");
//   });
// }
// if (randomNumber2 >= 8) {
//   box10.addEventListener("click", () => {
//     box10.classList.toggle("orange");
//   });
// } else if (randomNumber2 <= 4) {
//   box10.addEventListener("click", () => {
//     box10.classList.toggle("green");
//   });
// } else {
//   box10.addEventListener("click", () => {
//     box10.classList.toggle("purple");
//   });
// }
// //Box4 and Box10
// if (randomNumber3 >= 8) {
//   box8.addEventListener("click", () => {
//     box8.classList.toggle("pink");
//   });
// } else if (randomNumber3 <= 4) {
//   box8.addEventListener("click", () => {
//     box8.classList.toggle("blue");
//   });
// } else {
//   box8.addEventListener("click", () => {
//     box8.classList.toggle("yellow");
//   });
// }
// if (randomNumber3 >= 8) {
//   box14.addEventListener("click", () => {
//     box14.classList.toggle("pink");
//   });
// } else if (randomNumber3 <= 4) {
//   box14.addEventListener("click", () => {
//     box14.classList.toggle("blue");
//   });
// } else {
//   box14.addEventListener("click", () => {
//     box14.classList.toggle("yellow");
//   });
// }
// //Box 8 and Box14
// if (randomNumber4 >= 8) {
//   box9.addEventListener("click", () => {
//     box9.classList.toggle("lime");
//   });
// } else if (randomNumber4 <= 4) {
//   box9.addEventListener("click", () => {
//     box9.classList.toggle("aqua");
//   });
// } else {
//   box9.addEventListener("click", () => {
//     box9.classList.toggle("yellow");
//   });
// }
// if (randomNumber4 >= 8) {
//   box16.addEventListener("click", () => {
//     box16.classList.toggle("lime");
//   });
// } else if (randomNumber4 <= 4) {
//   box16.addEventListener("click", () => {
//     box16.classList.toggle("aqua");
//   });
// } else {
//   box16.addEventListener("click", () => {
//     box16.classList.toggle("yellow");
//   });
// }
// //Box 9 and Box 16

// if (randomNumber5 >= 8) {
//   box2.addEventListener("click", () => {
//     box2.classList.toggle("pink");
//   });
// } else if (randomNumber5 <= 4) {
//   box2.addEventListener("click", () => {
//     box2.classList.toggle("black");
//   });
// } else {
//   box2.addEventListener("click", () => {
//     box2.classList.toggle("lime");
//   });
// }
// if (randomNumber5 >= 8) {
//   box7.addEventListener("click", () => {
//     box7.classList.toggle("pink");
//   });
// } else if (randomNumber5 <= 4) {
//   box7.addEventListener("click", () => {
//     box7.classList.toggle("black");
//   });
// } else {
//   box7.addEventListener("click", () => {
//     box7.classList.toggle("lime");
//   });
// }
// //Box 2 and Box 7
// if (randomNumber6 >= 8) {
//   box3.addEventListener("click", () => {
//     box3.classList.toggle("blue");
//   });
// } else if (randomNumber6 <= 4) {
//   box3.addEventListener("click", () => {
//     box3.classList.toggle("brown");
//   });
// } else {
//   box3.addEventListener("click", () => {
//     box3.classList.toggle("orange");
//   });
// }
// if (randomNumber6 >= 8) {
//   box11.addEventListener("click", () => {
//     box11.classList.toggle("blue");
//   });
// } else if (randomNumber6 <= 4) {
//   box11.addEventListener("click", () => {
//     box11.classList.toggle("brown");
//   });
// } else {
//   box11.addEventListener("click", () => {
//     box11.classList.toggle("orange");
//   });
// }
// //Box3 and Box11
// if (randomNumber7 >= 8) {
//   box6.addEventListener("click", () => {
//     box6.classList.toggle("red");
//   });
// } else if (randomNumber7 <= 4) {
//   box6.addEventListener("click", () => {
//     box6.classList.toggle("purple");
//   });
// } else {
//   box6.addEventListener("click", () => {
//     box6.classList.toggle("green");
//   });
// }
// if (randomNumber7 >= 8) {
//   box12.addEventListener("click", () => {
//     box12.classList.toggle("red");
//   });
// } else if (randomNumber7 <= 4) {
//   box12.addEventListener("click", () => {
//     box12.classList.toggle("purple");
//   });
// } else {
//   box12.addEventListener("click", () => {
//     box12.classList.toggle("green");
//   });
// }
// //Box6 and Box12
// if (randomNumber8 >= 8) {
//   box13.addEventListener("click", () => {
//     box13.classList.toggle("lime");
//   });
// } else if (randomNumber8 <= 4) {
//   box13.addEventListener("click", () => {
//     box13.classList.toggle("pink");
//   });
// } else {
//   box13.addEventListener("click", () => {
//     box13.classList.toggle("green");
//   });
// }
// if (randomNumber8 >= 8) {
//   box15.addEventListener("click", () => {
//     box15.classList.toggle("lime");
//   });
// } else if (randomNumber8 <= 4) {
//   box15.addEventListener("click", () => {
//     box15.classList.toggle("pink");
//   });
// } else {
//   box15.addEventListener("click", () => {
//     box15.classList.toggle("green");
//   });
// }
// //Box13 and Box15
