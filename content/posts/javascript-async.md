---
title: "Lập trình bất đồng bộ trong JavaScript"
date: 2023-08-05T10:00:00+07:00
draft: false
tags: ["JavaScript", "Async", "Promise", "Web", "Lập trình"]
categories: ["JavaScript"]
description: "Tìm hiểu về Promise, Async/Await và cách xử lý tác vụ bất đồng bộ trong JavaScript một cách hiệu quả."
cover:
  image: "/images/javascript-async.svg"
  alt: "JavaScript Async Programming"
  caption: "Promise, Async & Await trong JavaScript"
---

# Lập trình bất đồng bộ trong JavaScript

JavaScript là một ngôn ngữ lập trình đơn luồng (single-threaded), nhưng nó có thể xử lý các tác vụ bất đồng bộ thông qua các cơ chế như callback, Promise, và async/await. Bài viết này sẽ giới thiệu về lập trình bất đồng bộ trong JavaScript.

## 1. Tại sao cần lập trình bất đồng bộ?

Trong môi trường web, có nhiều tác vụ có thể mất thời gian để hoàn thành, như:
- Gọi API từ server
- Đọc/ghi file (trong Node.js)
- Truy cập cơ sở dữ liệu
- Tải hình ảnh hoặc tài nguyên khác

Nếu JavaScript chạy đồng bộ (synchronous), các tác vụ này sẽ chặn luồng chính, làm cho trang web không phản hồi cho đến khi tác vụ hoàn thành. Lập trình bất đồng bộ giúp giải quyết vấn đề này.

## 2. Callback

Callback là cách truyền thống nhất để xử lý bất đồng bộ trong JavaScript. Một callback là một hàm được truyền vào một hàm khác như một đối số và được thực thi sau khi tác vụ hoàn thành.

```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: 'John', age: 30 };
    callback(data);
  }, 2000);
}

fetchData((data) => {
  console.log(data); // { name: 'John', age: 30 }
});

console.log('Đang tải dữ liệu...'); // Hiển thị trước khi dữ liệu được tải
```

### Callback Hell

Khi có nhiều tác vụ bất đồng bộ lồng nhau, code có thể trở nên khó đọc và bảo trì, hiện tượng này được gọi là "callback hell" hoặc "pyramid of doom".

```javascript
fetchUserData((userData) => {
  fetchUserPosts(userData.id, (posts) => {
    fetchPostComments(posts[0].id, (comments) => {
      fetchCommentAuthor(comments[0].authorId, (author) => {
        console.log(author);
        // Và còn nhiều lồng nhau nữa...
      });
    });
  });
});
```

## 3. Promise

Promise là một đối tượng đại diện cho kết quả của một tác vụ bất đồng bộ, có thể là thành công (resolved) hoặc thất bại (rejected). Promise giúp viết code bất đồng bộ dễ đọc hơn và tránh callback hell.

### Tạo Promise

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Thực hiện tác vụ bất đồng bộ
  setTimeout(() => {
    const success = true;
    
    if (success) {
      resolve('Thành công!'); // Tác vụ thành công
    } else {
      reject('Có lỗi xảy ra!'); // Tác vụ thất bại
    }
  }, 2000);
});
```

### Sử dụng Promise

```javascript
myPromise
  .then((result) => {
    console.log(result); // 'Thành công!'
  })
  .catch((error) => {
    console.error(error); // 'Có lỗi xảy ra!' (nếu thất bại)
  })
  .finally(() => {
    console.log('Hoàn thành tác vụ, dù thành công hay thất bại');
  });
```

### Promise chaining

Promise cho phép nối chuỗi các tác vụ bất đồng bộ, giúp code dễ đọc hơn:

```javascript
fetchUserData()
  .then(userData => fetchUserPosts(userData.id))
  .then(posts => fetchPostComments(posts[0].id))
  .then(comments => fetchCommentAuthor(comments[0].authorId))
  .then(author => console.log(author))
  .catch(error => console.error('Có lỗi:', error));
```

### Promise.all và Promise.race

- `Promise.all()`: Chờ tất cả các promise hoàn thành
- `Promise.race()`: Chờ promise đầu tiên hoàn thành

```javascript
// Chờ tất cả các promise hoàn thành
Promise.all([fetchUsers(), fetchPosts(), fetchComments()])
  .then(([users, posts, comments]) => {
    console.log(users, posts, comments);
  })
  .catch(error => console.error(error));

// Chờ promise đầu tiên hoàn thành
Promise.race([fetchDataFromAPI1(), fetchDataFromAPI2()])
  .then(result => console.log('Kết quả đầu tiên:', result))
  .catch(error => console.error(error));
```

## 4. Async/Await

Async/await là một cú pháp hiện đại hơn để làm việc với Promise, giúp code bất đồng bộ trông giống như code đồng bộ, dễ đọc và dễ hiểu hơn.

### Hàm async

Một hàm async luôn trả về một Promise. Từ khóa `async` được đặt trước khai báo hàm:

```javascript
async function fetchData() {
  return 'Dữ liệu';
}

// Tương đương với
function fetchData() {
  return Promise.resolve('Dữ liệu');
}
```

### Từ khóa await

Từ khóa `await` chỉ có thể được sử dụng bên trong hàm async. Nó tạm dừng thực thi hàm async cho đến khi Promise được giải quyết:

```javascript
async function fetchUserData() {
  try {
    const response = await fetch('https://api.example.com/users');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Lỗi:', error);
  }
}
```

### Viết lại ví dụ callback hell với async/await

```javascript
async function getAuthorDetails() {
  try {
    const userData = await fetchUserData();
    const posts = await fetchUserPosts(userData.id);
    const comments = await fetchPostComments(posts[0].id);
    const author = await fetchCommentAuthor(comments[0].authorId);
    console.log(author);
  } catch (error) {
    console.error('Có lỗi:', error);
  }
}

getAuthorDetails();
```

### Xử lý nhiều Promise đồng thời với async/await

```javascript
async function fetchAllData() {
  try {
    // Chạy đồng thời, không chờ lẫn nhau
    const [users, posts, comments] = await Promise.all([
      fetchUsers(),
      fetchPosts(),
      fetchComments()
    ]);
    
    console.log(users, posts, comments);
  } catch (error) {
    console.error('Có lỗi:', error);
  }
}
```

## 5. Ví dụ thực tế: Gọi API với Fetch API

Fetch API là một cách hiện đại để thực hiện các yêu cầu HTTP trong JavaScript. Nó trả về Promise, nên có thể được sử dụng với cả Promise chaining và async/await.

### Sử dụng Promise

```javascript
function fetchUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error('Lỗi mạng: ' + response.status);
      }
      return response.json();
    })
    .then(users => {
      console.log('Danh sách người dùng:', users);
    })
    .catch(error => {
      console.error('Có lỗi khi tải dữ liệu:', error);
    });
}
```

### Sử dụng Async/Await

```javascript
async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
      throw new Error('Lỗi mạng: ' + response.status);
    }
    
    const users = await response.json();
    console.log('Danh sách người dùng:', users);
  } catch (error) {
    console.error('Có lỗi khi tải dữ liệu:', error);
  }
}
```

## Kết luận

Lập trình bất đồng bộ là một phần quan trọng của JavaScript, đặc biệt trong phát triển web hiện đại. Từ callback truyền thống đến Promise và async/await hiện đại, JavaScript cung cấp nhiều cách để xử lý các tác vụ bất đồng bộ.

Async/await là cách tiếp cận hiện đại nhất và được khuyến nghị sử dụng vì nó giúp code dễ đọc và dễ bảo trì hơn. Tuy nhiên, hiểu về callback và Promise vẫn rất quan trọng vì chúng là nền tảng của async/await và vẫn được sử dụng rộng rãi trong các thư viện và framework JavaScript.