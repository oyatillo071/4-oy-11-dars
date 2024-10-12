//  random string qiymat massiv yaratish
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
//

//

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
  for (let i = str.length-1; i >= 0; i--) {
    reverse += str[i];
  }

  return reverse;
}

//

document.getElementById("ten--btn").addEventListener("click", function () {
  let strValue = getValue("ten--value");

  innerHtml("ten--answer", reverseStr(strValue));
  close('ten--close','ten--asnwer');
});
