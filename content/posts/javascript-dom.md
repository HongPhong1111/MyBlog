---
title: "DOM và Xử lý sự kiện trong JavaScript"
date: 2023-07-30T10:00:00+07:00
draft: false
tags: ["JavaScript", "DOM", "Web", "Lập trình"]
categories: ["JavaScript"]
---

# DOM và Xử lý sự kiện trong JavaScript

Document Object Model (DOM) là một giao diện lập trình cho phép JavaScript tương tác với HTML và CSS, cho phép trang web được cập nhật động mà không cần tải lại. Bài viết này sẽ giới thiệu về DOM và cách xử lý sự kiện trong JavaScript.

## 1. DOM là gì?

DOM là một biểu diễn có cấu trúc của tài liệu HTML dưới dạng cây đối tượng. Mỗi thẻ HTML trở thành một nút (node) trong cây, và mỗi nút có thể có các nút con.

```
Document
└── html
    ├── head
    │   ├── title
    │   └── meta
    └── body
        ├── header
        ├── div
        │   ├── h1
        │   └── p
        └── footer
```

## 2. Truy cập các phần tử DOM

JavaScript cung cấp nhiều phương thức để truy cập các phần tử DOM:

```javascript
// Truy cập theo ID
const header = document.getElementById('header');

// Truy cập theo tên thẻ
const paragraphs = document.getElementsByTagName('p');

// Truy cập theo tên lớp
const buttons = document.getElementsByClassName('btn');

// Truy cập bằng CSS selector (trả về phần tử đầu tiên)
const firstButton = document.querySelector('.btn');

// Truy cập bằng CSS selector (trả về tất cả phần tử)
const allButtons = document.querySelectorAll('.btn');
```

## 3. Thao tác với nội dung và thuộc tính

### Thay đổi nội dung

```javascript
// Thay đổi nội dung văn bản
document.getElementById('title').textContent = 'Tiêu đề mới';

// Thay đổi HTML
document.getElementById('content').innerHTML = '<strong>Nội dung mới</strong>';
```

### Thao tác với thuộc tính

```javascript
// Lấy giá trị thuộc tính
const imgSrc = document.getElementById('myImage').getAttribute('src');

// Đặt giá trị thuộc tính
document.getElementById('myImage').setAttribute('src', 'new-image.jpg');

// Xóa thuộc tính
document.getElementById('myImage').removeAttribute('alt');

// Sử dụng thuộc tính trực tiếp (chỉ áp dụng cho một số thuộc tính tiêu chuẩn)
document.getElementById('myImage').src = 'new-image.jpg';
```

## 4. Thao tác với CSS

```javascript
// Thay đổi style trực tiếp
document.getElementById('myElement').style.color = 'red';
document.getElementById('myElement').style.fontSize = '20px';

// Thêm/xóa lớp CSS
document.getElementById('myElement').classList.add('highlight');
document.getElementById('myElement').classList.remove('old-class');
document.getElementById('myElement').classList.toggle('active');
document.getElementById('myElement').classList.contains('highlight'); // true
```

## 5. Tạo và xóa phần tử

```javascript
// Tạo phần tử mới
const newParagraph = document.createElement('p');
newParagraph.textContent = 'Đây là đoạn văn mới.';

// Thêm phần tử vào DOM
document.getElementById('container').appendChild(newParagraph);

// Chèn phần tử trước một phần tử khác
const referenceElement = document.getElementById('referenceElement');
document.getElementById('container').insertBefore(newParagraph, referenceElement);

// Xóa phần tử
document.getElementById('oldElement').remove();

// Hoặc
const oldElement = document.getElementById('oldElement');
oldElement.parentNode.removeChild(oldElement);
```

## 6. Xử lý sự kiện

Sự kiện là các hành động hoặc tình huống xảy ra trong trình duyệt mà bạn có thể phản ứng bằng JavaScript.

### Thêm trình xử lý sự kiện

```javascript
// Sử dụng addEventListener
document.getElementById('myButton').addEventListener('click', function(event) {
  console.log('Nút đã được nhấn!');
  console.log(event); // Đối tượng sự kiện
});

// Sử dụng thuộc tính on-event
document.getElementById('myButton').onclick = function() {
  console.log('Nút đã được nhấn!');
};
```

### Các sự kiện phổ biến

- **Sự kiện chuột**: `click`, `dblclick`, `mousedown`, `mouseup`, `mousemove`, `mouseover`, `mouseout`
- **Sự kiện bàn phím**: `keydown`, `keyup`, `keypress`
- **Sự kiện form**: `submit`, `change`, `focus`, `blur`
- **Sự kiện window**: `load`, `resize`, `scroll`, `unload`

### Ngăn chặn hành vi mặc định

```javascript
document.getElementById('myLink').addEventListener('click', function(event) {
  event.preventDefault(); // Ngăn chặn chuyển hướng
  console.log('Liên kết đã được nhấn, nhưng không chuyển hướng');
});

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Ngăn chặn gửi form
  console.log('Form đã được gửi, nhưng không tải lại trang');
});
```

### Lan truyền sự kiện (Event Propagation)

Sự kiện trong DOM lan truyền theo hai giai đoạn: capturing (từ trên xuống) và bubbling (từ dưới lên).

```javascript
// Mặc định là bubbling (false)
element.addEventListener('click', handler, false);

// Capturing (true)
element.addEventListener('click', handler, true);

// Dừng lan truyền sự kiện
element.addEventListener('click', function(event) {
  event.stopPropagation();
  console.log('Sự kiện sẽ không lan truyền lên các phần tử cha');
});
```

## 7. Ví dụ thực tế: Tạo một ứng dụng Todo đơn giản

```html
<!DOCTYPE html>
<html>
<head>
  <title>Todo App</title>
  <style>
    .completed {
      text-decoration: line-through;
      color: gray;
    }
  </style>
</head>
<body>
  <h1>Todo App</h1>
  
  <form id="todoForm">
    <input type="text" id="todoInput" placeholder="Thêm việc cần làm...">
    <button type="submit">Thêm</button>
  </form>
  
  <ul id="todoList"></ul>
  
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const todoForm = document.getElementById('todoForm');
      const todoInput = document.getElementById('todoInput');
      const todoList = document.getElementById('todoList');
      
      todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const todoText = todoInput.value.trim();
        if (todoText === '') return;
        
        // Tạo phần tử li mới
        const li = document.createElement('li');
        li.textContent = todoText;
        
        // Thêm sự kiện click để đánh dấu hoàn thành
        li.addEventListener('click', function() {
          li.classList.toggle('completed');
        });
        
        // Tạo nút xóa
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Xóa';
        deleteButton.addEventListener('click', function(event) {
          event.stopPropagation(); // Ngăn sự kiện click lan đến li
          li.remove();
        });
        
        // Thêm nút xóa vào li
        li.appendChild(deleteButton);
        
        // Thêm li vào danh sách
        todoList.appendChild(li);
        
        // Xóa nội dung input
        todoInput.value = '';
      });
    });
  </script>
</body>
</html>
```

## Kết luận

DOM và xử lý sự kiện là hai khía cạnh quan trọng của JavaScript trong phát triển web. Hiểu và sử dụng chúng hiệu quả sẽ giúp bạn tạo ra các trang web động và tương tác. Bài viết này chỉ giới thiệu các khái niệm cơ bản, còn nhiều khía cạnh nâng cao khác như sự kiện tùy chỉnh, ủy quyền sự kiện, và các API DOM hiện đại mà bạn có thể tìm hiểu thêm.