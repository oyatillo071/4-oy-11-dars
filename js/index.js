//  random string qiymat  yaratish
function randStr(length = 8) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

function innerHtml(ansId, resValue) {
  document.getElementById(ansId).innerHTML = resValue;
}

// X span bosilganda javobni yashirish funksiyasi

function close(closeBtn, hiddenAns) {
  document.getElementById(closeBtn).onclick = function () {
    document.getElementById(hiddenAns).innerHTML = " ";
  };
}

// html input tegidan qiymat olish
function getValue(valueId) {
  return document.getElementById(valueId).value;
}

// random massiv qiymat toldirish
function randNum(arrLenght = 15, maxValue = 1000) {
  let arr = [];
  Lenght = Math.trunc(Math.random() * arrLenght) + 1;
  for (let i = 0; i < Lenght; i++) {
    arr[i] = Math.trunc(Math.random() * maxValue);
  }
  return arr;
}
//

// random string massiv 
function randStrArr(arrLenght = 5, maxValue = 10) {
  let arr = [];

  Lenght = Math.trunc(Math.random() * arrLenght) + 1;
  for (let i = 0; i < Lenght; i++) {
    arr[i] = randStr(maxValue);
  }
  return arr;
}

//

// random manfiy sonlik massiv qiymat toldirish
function randNgtNum(arrLenght = 15, maxValue = 1000) {
  let arr = [];

  Lenght = Math.trunc(Math.random() * arrLenght) + 1;

  for (let i = 0; i < Lenght; i++) {
    if (Math.random() > 0.6) {
      arr[i] = Math.trunc(Math.random() * maxValue) * -1;
    } else {
      arr[i] = Math.trunc(Math.random() * maxValue);
    }
  }

  return arr;
}

//
//
//
//

//                                   Uyga Vazifalar
// 1-mashq
//  1. Funksiya yozing, bu funksiya berilgan
//  sonning kvadratini qaytarsin.
//

function numDgr(num, degree = 2) {
  return num ** degree;
}

//

document.getElementById("first--btn").addEventListener("click", function () {
  let firstValue = document.getElementById("first--value").value;
  let degreeValue = parseInt(document.getElementById("degree--value").value);

  let res = !isNaN(degreeValue)
    ? numDgr(firstValue, degreeValue)
    : numDgr(firstValue);

  innerHtml("first--answer", res);

  close("first--close", "first--answer");
});

//
//
// 2. Funksiya yozing, bu funksiya berilgan ikkita sonning
//  yig'indisini qaytarsin.
//

function sum(num1, num2) {
  let res = 0;
  return (res += num1 + num2);
}

//

document.getElementById("second--btn").addEventListener("click", function () {
  let secondValue1 = parseInt(getValue("second--value--first"));
  let secondValue2 = parseInt(getValue("second--value--second"));

  innerHtml("second--answer", sum(secondValue1, secondValue2));
  close("second--close", "second--answer");
});

//
//
//
// 3. Funksiya yozing, bu funksiya foydalanuvchi
//  nomini qabul qilib, unga "Salom, [ism]" degan matnni qaytarsin.
//

function hello(name) {
  return `Salom ${name}`;
}

//

document.getElementById("third--btn").addEventListener("click", function () {
  let thirdValue = getValue("third--value");

  innerHtml("third--answer", hello(thirdValue));
  close("third--close", "third--answer");
});

//
//
//
// 4. Funksiya yozing, bu funksiya ikki sondan kattasini topib qaytarsin.
//

function maxVal(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

//

document.getElementById("four--btn").addEventListener("click", function () {
  let firstValue = getValue("four--value--first");
  let secondValue = getValue("four--value--second");

  innerHtml("four--answer", maxVal(firstValue, secondValue));
  close("four--close", "four--answer");
});

//
//
//
// 5. Funksiya yozing, bu funksiya massiv ichidagi barcha sonlarni qo'shib,
// umumiy yig'indini qaytarsin.
//

function arrSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

//

document.getElementById("five--btn").addEventListener("click", function () {
  let arr = randNum();

  let res = " Massiv:<br>" + arr + "<br>Yig'indisi: " + arrSum(arr);

  innerHtml("five--answer", res);

  close("five--close", "five--answer");
});

//
//
//
// 6. Funksiya yozing, bu funksiya berilgan son musbat yoki
//  manfiy ekanligini aniqlasin va natijani qaytarsin.
//

function isPstOrNgt(num) {
  return num > 0 ? "Musbat" : "Manfiy";
}

//

document.getElementById("six--btn").addEventListener("click", function () {
  let sixValue = getValue("six--value");

  let parsedValue = parseInt(sixValue);

  if (!isNaN(parsedValue)) {
    document.getElementById("six--answer").innerHTML = isPstOrNgt(parsedValue);
  } else {
    document.getElementById("six--answer").innerHTML = "Son kiriting!";
  }

  close("six--close", "six--answer");
});

//
//
//
// 7. Funksiya yozing, bu funksiya berilgan so'zning uzunligini qaytarsin.
//

//

function strLenght(string) {
  return string.length;
}

//

document.getElementById("seven--btn").addEventListener("click", function () {
  let sevenValue = getValue("seven--value");

  innerHtml("seven--answer", strLenght(sevenValue));
  close("seven--close", "seven--answer");
});

//
//
//
// 8. Funksiya yozing, bu funksiya berilgan ikki stringni birlashtirib, bitta string ko'rinishida qaytarsin.
//

function mergeStr(str1, str2) {
  return (str1 = str1 + str2);
}

//

document.getElementById("eight--btn").addEventListener("click", function () {
  let strFirst = getValue("eight--value--first");
  let strSecond = getValue("eight--value--second");

  let res = mergeStr(strFirst, strSecond);
  innerHtml("eight--answer", res);
  close("eight--close", "eight--answer");
});

//
//
//
//  9. Funksiya yozing, bu funksiya berilgan massivdan
//  eng kichik elementni qaytarsin.
//

function minValue(arr) {
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  return min;
}

//

document.getElementById("nine--btn").addEventListener("click", function () {
  let nineArr = [];
  nineArr = randNum();
  let minValueAns =
    "Massiv: <br>" +
    nineArr +
    "<br>" +
    "Eng kichik element: <br>" +
    minValue(nineArr);

  innerHtml("nine--answer", minValueAns);
  close("nine--close", "nine--answer");
});

//
//
//
// 10. Funksiya yozing, bu funksiya
// berilgan stringni teskari holatga keltirib, natijani qaytarsin.
//

function reverseStr(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  return reverse;
}

//

document.getElementById("ten--btn").addEventListener("click", function () {
  let strValue = getValue("ten--value");

  innerHtml("ten--answer", reverseStr(strValue));
  close("ten--close", "ten--asnwer");
});

//                                                 Massiv va funksiyalar
//
//
//  1. Funksiya yozing, bu funksiya berilgan massivdagi
//  barcha sonlarni ekranga chiqarib bersin.
//

function logArr(arr) {
  let returnAns = "";
  for (let i = 0; i < arr.length; i++) {
    returnAns += " " + arr[i] + " ";
    console.log(arr[i]);
  }
  return returnAns;
}

//

document.getElementById("eleven--btn").addEventListener("click", function () {
  let elevenArr = [];
  elevenArr = randNum();

  let answerLog = logArr(elevenArr);

  innerHtml("eleven--answer", answerLog);
  close("eleven--close", "eleven--answer");
});

//
//
// 2. Funksiya yozing, bu funksiya massivdagi eng katta sonni topib qaytarsin.
//

function maxValue(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  return max;
}

//

document.getElementById("twelve--btn").addEventListener("click", function () {
  let maxArr = [];
  maxArr = randNum();
  let maxAnswer =
    "Boshlang'ich Massiv: <br>" +
    maxArr +
    "<br>Eng katta element: <br>" +
    maxValue(maxArr);

  innerHtml("twelve--answer", maxAnswer);

  close("twelve--close", "twelve--answer");
});

//
//
// 3. Funksiya yozing, bu funksiya berilgan massivning uzunligini qaytarsin.
//

function arrLenght(arr) {
  return arr.length;
}

//

document
  .getElementById("thirdteen--btn")
  .addEventListener("click", function () {
    let lenghtArr = [];
    lenghtArr = randNum();
    let thirdteenAnswer =
      "Boshlang'ich Massiv: <br>" +
      lenghtArr +
      "<br>Uzunligi: <br>" +
      arrLenght(lenghtArr);

    innerHtml("thirdteen--answer", thirdteenAnswer);
    close("thirdteen--close", "thirdteen--answer");
  });

//
//
// 4. Funksiya yozing, bu funksiya berilgan massivdagi barcha elementlarning yig'indisini hisoblasin va qaytarsin.
//

function arrSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

//

// fourteen  teen tn deb ketilyapti
document.getElementById("fourtn--btn").addEventListener("click", function () {
  let sumArray = [];
  sumArray = randNum();
  let fourtnAnswer =
    "Massiv elementlari: <br>" +
    sumArray +
    "<br>Yig'indisi: <br>" +
    arrSum(sumArray);

  innerHtml("fourtn--answer", fourtnAnswer);
  close("fourtn--close", "fourtn--answer");
});

//
//

// 5. Funksiya yozing, bu funksiya massiv ichida berilgan element necha marta uchrashganini qaytarsin.

function countElm(array, inputValue) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == inputValue) {
      counter++;
    }
  }
  return counter;
}

//

document.getElementById("fivetn--btn").addEventListener("click", function () {
  let fivetnValue = getValue("fivetn--value");
  fivetnValue = parseInt(fivetnValue);

  let fivetnArr = [];
  fivetnArr = randNum();
  let fivetnAnswer = countElm(fivetnArr, fivetnValue);

  fivetnAnswer =
    fivetnAnswer != 0
      ? "Massiv: <br>" +
        fivetnArr +
        "<br>Qidirilgan element " +
        fivetnAnswer +
        "-marta uchraydi"
      : "Massiv: <br>" +
        fivetnArr +
        "<br>Qidirilgan element massivda mavjud emas.";

  innerHtml("fivetn--answer", fivetnAnswer);

  close("fivetn--close", "fivetn--answer");
});

//
//
//
//  6. Funksiya yozing, bu funksiya massivdagi
//  toq sonlarni yangi massivga ajratib qaytarsin.
//

function arrOddNum(array) {
  let oddArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 1) {
      oddArr.push(array[i]);
    }
  }
  return oddArr;
}

//

document.getElementById("sixtn--btn").addEventListener("click", function () {
  let numArray = [];
  numArray = randNum();

  let oddArray = arrOddNum(numArray);

  let sixtnAnswer =
    "Massiv: <br>" +
    numArray +
    "<br>Yangilangan toq sonlardan iborat massiv:<br>" +
    oddArray;

  innerHtml("sixtn--answer", sixtnAnswer);
  close("sixtn--close", "sixtn--answer");
});

//
//
// 7. Funksiya yozing, bu funksiya massiv
//  ichidagi elementlarni teskari tartibda qaytarsin.
//

function reversingArr(array) {
  return array.reverse();
}

//

document.getElementById("seventn--btn").addEventListener("click", function () {
  let reverseArray = [];
  reverseArray = randNum();

  let seventnAnswer = "Boshlang'ich massiv: <br>" + reverseArray;

  reverseArray = reversingArr(reverseArray);

  seventnAnswer += "<br>Yangilangan massiv: <br>" + reverseArray;

  innerHtml("seventn--answer", seventnAnswer);
  close("seventn--answer", "seventn--answer");
});

//
//
// 8. Funksiya yozing, bu funksiya berilgan massiv
//  ichidan faqat manfiy sonlarni ajratib olsin va
//  yangi massivda qaytarsin.

//

function sliceNgtNum(array) {
  let ngtArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      ngtArray.push(array[i]);
    }
  }
  return ngtArray;
}

//

document.getElementById("eighttn--btn").addEventListener("click", function () {
  let unsortedArr = [];
  let sortedNgtArr = [];

  unsortedArr = randNgtNum();

  let eightAnswer = "Masssiv: <br>" + unsortedArr;

  sortedNgtArr = sliceNgtNum(unsortedArr);

  eightAnswer += "<br>Yangilangan massiv: <br>" + sortedNgtArr;

  innerHtml("eighttn--answer", eightAnswer);
  close("eight--close", "eighttn--answer");
});

//
//
// 9. Funksiya yozing, bu funksiya berilgan massivning oxirgi
// elementini olib tashlasin va yangilangan massivni qaytarsin.

//

function popArr(array) {
  array.pop();
  return array;
}

//

document.getElementById("ninetn--btn").addEventListener("click", function () {
  let popArray = [];

  popArray = randNum();
  let ninetnAnswer = "Massiv: <br>" + popArray;
  popArray = popArr(popArray);
  ninetnAnswer += "<br>Yangilangan Massiv: <br>" + popArray;

  innerHtml("ninetn--answer", ninetnAnswer);
  close("ninetn--close", "ninetn--asnwer");
});

//
//
//  10. Funksiya yozing, bu funksiya berilgan massivga yangi
//  element qo'shish funksiyasini amalga oshirsin.
//

function pushArr(array, newElement = "Yangi element") {
  array.push(newElement);
  return array;
}

//

document.getElementById("twenty--btn").addEventListener("click", function () {
  let pushArray = [];
  pushArray = randNum();

  let twentyAnswer = "Massiv:<br> " + pushArray;
  let newValue = prompt("Yang elementni kiriting:");

  pushArray = pushArr(pushArray, newValue);
  twentyAnswer += "<br>Yangilangan massiv: <br>" + pushArray;

  innerHtml("twenty--answer", twentyAnswer);
  close("twenty--close", "twenty--answer");
});

//
//
//   11. Funksiya yozing, bu funksiya berilgan ikki massivni
//   birlashtirib, yangi massiv qaytarsin.

//

function concatArr(arr1, arr2) {
  let arr3 = arr1.concat(arr2);
  return arr3;
}

//

document.getElementById("twOne--btn").addEventListener("click", function () {
  let mergeFirstArr = [];
  let mergeSecondArr = [];

  mergeFirstArr = randNum();
  mergeSecondArr = randNum();
  let mergeNewArr = concatArr(mergeFirstArr, mergeSecondArr);

  let twOneAnswer =
    "1-massiv: <br>" +
    mergeFirstArr +
    "<br>2-Massiv: <br>" +
    mergeSecondArr +
    "<br>Birlashtirilgan massiv: <br>" +
    mergeNewArr;

  innerHtml("twOne--answer", twOneAnswer);
  close("twOne--close", "twOne--answer");
});

//
//
//  12. Funksiya yozing, bu funksiya massiv ichidagi sonlarning
//   kvadratlarini hisoblab, yangi massivda qaytarsin.

//

function degreeArr(array) {
  let degreeElement = [];
  for (let i = 0; i < array.length; i++) {
    degreeElement[i] = array[i] ** 2;
  }
  return degreeElement;
}

//

document.getElementById("twTwo--btn").addEventListener("click", function () {
  let dgArray = [];

  dgArray = randNum(10, 50);

  let twTwoAnswer = "Massiv: <br>" + dgArray;

  let dgNewArray = [];
  dgNewArray = degreeArr(dgArray);

  twTwoAnswer +=
    "<br>Elemenlarni kvadratlari o'zlashtirilgan massiv:<br>" + dgNewArray;

  innerHtml("twTwo--answer", twTwoAnswer);
  close("twTwo--close", "twTwo--answer");
});

//
//
//
//  13. Funksiya yozing, bu funksiya berilgan massiv
//  ichidagi juft sonlarni o'chirib, yangi massiv qaytarsin.

//

function deleteEven(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
}

//

document.getElementById("twThree--btn").addEventListener("click", function () {
  let unsortedArray = [];
  unsortedArray = randNum();

  let twThreeAnswer =
    "Massiv:<br>" + unsortedArray + "<br>Yangilangan massiv: <br>";

  let sortedArray = deleteEven(unsortedArray);

  twThreeAnswer += sortedArray;

  innerHtml("twThree--answer", twThreeAnswer);
  close("twThree--close", "twThree--answer");
});

//
//
//   14. Funksiya yozing, bu funksiya berilgan massiv ichidagi
//   stringlarni katta harfga o'zgartirib qaytarsin.

//
function upperCase(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toUpperCase();
  }
  return array;
}

//

document.getElementById("twFour--btn").addEventListener("click", function () {
  let toUpperArr = [];

  toUpperArr = randStrArr();

  let upperAnswer = "Massiv: <br>" + toUpperArr;

  let UpperArr = upperCase(toUpperArr);

  upperAnswer += "<br>Yangilangan massiv:<br>" + UpperArr;

  innerHtml("twFour--answer", upperAnswer);
  close("twFour--close", "twFour--answer");
});

//
//
//  15. Funksiya yozing, bu funksiya massivdagi har bir elementning
//   uzunligini hisoblab, natijalarni yangi massivda
//   qaytarsin (agar element string bo'lsa).

//

function lenghtElements(array) {
  let lenghtArrSave = [];

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      lenghtArrSave.push(array[i].length);
    }
  }
  return lenghtArrSave;
}

//

document.getElementById("twFive--btn").addEventListener("click", function () {
  let lenghtArr = [];

  lenghtArr = randNum();

  let strArr = [];

  let maxStrValue=Math.trunc(Math.random()*15);
  strArr = randStrArr(6,maxStrValue);

  lenghtArr = concatArr(lenghtArr, strArr);

  let newLenghtArr = lenghtElements(lenghtArr);

  let twFiveAnswer =
    "Massiv: <br>" + lenghtArr + "<br>Element uzunliklari:<br>" + newLenghtArr;

  innerHtml("twFive--answer", twFiveAnswer);
  close("twFive--close", "twFive--answer");
});
