---
title: "Cơ bản về JavaScript cho người mới bắt đầu"
date: 2023-07-25T10:00:00+07:00
draft: false
tags: ["JavaScript", "Web", "Lập trình"]
categories: ["JavaScript"]
description: "Khóa học JavaScript cơ bản. Học biến, hàm, vòng lặp và DOM manipulation cho người mới."
cover:
  image: "/images/javascript-basics.svg"
  alt: "JavaScript Basics"
  caption: "Cơ bản JavaScript cho người mới"
---

# Cơ bản về JavaScript cho người mới bắt đầu

JavaScript là ngôn ngữ lập trình phổ biến nhất trên web. Nó cho phép tạo ra các trang web động và tương tác với người dùng. Bài viết này sẽ giới thiệu các khái niệm cơ bản về JavaScript cho người mới bắt đầu.

## 1. Cách nhúng JavaScript vào trang web

Có ba cách chính để nhúng JavaScript vào trang HTML:

### Inline JavaScript

```html
<button onclick="alert('Xin chào!')">Nhấn vào đây</button>
```

### Internal JavaScript

```html
<script>
  function sayHello() {
    alert('Xin chào!');
  }
</script>
```

### External JavaScript

```html
<script src="script.js"></script>
```

Trong file script.js:
```javascript
function sayHello() {
  alert('Xin chào!');
}
```

## 2. Biến và kiểu dữ liệu

JavaScript có các từ khóa `var`, `let`, và `const` để khai báo biến:

```javascript
// var (phạm vi function hoặc global)
var x = 10;

// let (phạm vi block)
let y = 20;

// const (không thể gán lại giá trị)
const z = 30;
```

### Các kiểu dữ liệu cơ bản:

- **Number**: `let age = 25;`
- **String**: `let name = "John";`
- **Boolean**: `let isActive = true;`
- **Undefined**: `let job;`
- **Null**: `let salary = null;`
- **Symbol**: `let id = Symbol('id');`
- **BigInt**: `let bigNumber = 1234567890123456789012345678901234567890n;`

### Kiểu dữ liệu tham chiếu:

- **Object**: `let person = {name: "John", age: 30};`
- **Array**: `let colors = ["red", "green", "blue"];`
- **Function**: `let greet = function() { return "Hello"; };`

## 3. Toán tử

### Toán tử số học:

```javascript
let a = 10;
let b = 5;

console.log(a + b);  // 15 (cộng)
console.log(a - b);  // 5 (trừ)
console.log(a * b);  // 50 (nhân)
console.log(a / b);  // 2 (chia)
console.log(a % b);  // 0 (chia lấy dư)
console.log(a ** b); // 100000 (lũy thừa)
```

### Toán tử so sánh:

```javascript
console.log(a == b);   // false (bằng về giá trị)
console.log(a === b);  // false (bằng về giá trị và kiểu)
console.log(a != b);   // true (khác về giá trị)
console.log(a !== b);  // true (khác về giá trị hoặc kiểu)
console.log(a > b);    // true (lớn hơn)
console.log(a < b);    // false (nhỏ hơn)
console.log(a >= b);   // true (lớn hơn hoặc bằng)
console.log(a <= b);   // false (nhỏ hơn hoặc bằng)
```

### Toán tử logic:

```javascript
console.log(true && false);  // false (AND)
console.log(true || false);  // true (OR)
console.log(!true);          // false (NOT)
```

## 4. Cấu trúc điều khiển

### Câu lệnh if-else:

```javascript
let hour = 10;

if (hour < 12) {
  console.log("Chào buổi sáng!");
} else if (hour < 18) {
  console.log("Chào buổi chiều!");
} else {
  console.log("Chào buổi tối!");
}
```

### Switch case:

```javascript
let day = 2;
let dayName;

switch (day) {
  case 1:
    dayName = "Thứ Hai";
    break;
  case 2:
    dayName = "Thứ Ba";
    break;
  case 3:
    dayName = "Thứ Tư";
    break;
  default:
    dayName = "Ngày khác";
}

console.log(dayName);  // "Thứ Ba"
```

### Vòng lặp for:

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);  // 0, 1, 2, 3, 4
}
```

### Vòng lặp while:

```javascript
let i = 0;
while (i < 5) {
  console.log(i);  // 0, 1, 2, 3, 4
  i++;
}
```

### Vòng lặp do-while:

```javascript
let i = 0;
do {
  console.log(i);  // 0, 1, 2, 3, 4
  i++;
} while (i < 5);
```

## 5. Hàm

### Khai báo hàm:

```javascript
function greet(name) {
  return "Xin chào, " + name + "!";
}

console.log(greet("John"));  // "Xin chào, John!"
```

### Function Expression:

```javascript
const greet = function(name) {
  return "Xin chào, " + name + "!";
};

console.log(greet("John"));  // "Xin chào, John!"
```

### Arrow Function:

```javascript
const greet = (name) => {
  return "Xin chào, " + name + "!";
};

// Hoặc ngắn gọn hơn
const greetShort = name => "Xin chào, " + name + "!";

console.log(greetShort("John"));  // "Xin chào, John!"
```

## 6. Mảng và các phương thức phổ biến

```javascript
// Khai báo mảng
let fruits = ["Apple", "Banana", "Orange"];

// Truy cập phần tử
console.log(fruits[0]);  // "Apple"

// Thêm phần tử vào cuối mảng
fruits.push("Mango");
console.log(fruits);  // ["Apple", "Banana", "Orange", "Mango"]

// Xóa phần tử cuối mảng
fruits.pop();
console.log(fruits);  // ["Apple", "Banana", "Orange"]

// Thêm phần tử vào đầu mảng
fruits.unshift("Grape");
console.log(fruits);  // ["Grape", "Apple", "Banana", "Orange"]

// Xóa phần tử đầu mảng
fruits.shift();
console.log(fruits);  // ["Apple", "Banana", "Orange"]

// Lặp qua mảng
fruits.forEach(function(fruit) {
  console.log(fruit);
});

// Lọc mảng
let longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits);  // ["Banana", "Orange"]

// Biến đổi mảng
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits);  // ["APPLE", "BANANA", "ORANGE"]
```

## 7. Đối tượng

```javascript
// Khai báo đối tượng
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

// Truy cập thuộc tính
console.log(person.firstName);  // "John"
console.log(person["lastName"]);  // "Doe"

// Gọi phương thức
console.log(person.fullName());  // "John Doe"

// Thêm thuộc tính
person.email = "john@example.com";
console.log(person.email);  // "john@example.com"

// Xóa thuộc tính
delete person.email;
console.log(person.email);  // undefined
```

## Kết luận

JavaScript là một ngôn ngữ mạnh mẽ và linh hoạt, được sử dụng rộng rãi trong phát triển web. Bài viết này chỉ giới thiệu một số khái niệm cơ bản. Để trở thành một lập trình viên JavaScript giỏi, bạn cần thực hành nhiều và tìm hiểu thêm về các khái niệm nâng cao như bất đồng bộ, Promise, async/await, và các framework phổ biến như React, Angular, hoặc Vue.