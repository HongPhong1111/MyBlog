---
title: "Cơ bản về Java cho người mới bắt đầu"
date: 2023-07-10T10:00:00+07:00
draft: false
tags: ["Java", "Lập trình"]
categories: ["Java"]
---

# Cơ bản về Java cho người mới bắt đầu

Java là một ngôn ngữ lập trình hướng đối tượng, mạnh mẽ và được sử dụng rộng rãi trong nhiều lĩnh vực từ phát triển ứng dụng di động, web đến các hệ thống doanh nghiệp lớn.

## 1. Cài đặt Java Development Kit (JDK)

Để bắt đầu lập trình Java, bạn cần cài đặt JDK. Bạn có thể tải JDK từ trang web chính thức của Oracle hoặc sử dụng OpenJDK.

```bash
# Kiểm tra phiên bản Java đã cài đặt
java -version
```

## 2. Cấu trúc chương trình Java cơ bản

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Xin chào, thế giới!");
    }
}
```

Để biên dịch và chạy chương trình:

```bash
javac HelloWorld.java
java HelloWorld
```

## 3. Biến và kiểu dữ liệu

Java có các kiểu dữ liệu nguyên thủy và kiểu dữ liệu tham chiếu:

### Kiểu dữ liệu nguyên thủy:
- `byte`: 8-bit, từ -128 đến 127
- `short`: 16-bit, từ -32,768 đến 32,767
- `int`: 32-bit, từ -2^31 đến 2^31-1
- `long`: 64-bit, từ -2^63 đến 2^63-1
- `float`: 32-bit, số thực dấu phẩy động
- `double`: 64-bit, số thực dấu phẩy động
- `boolean`: true hoặc false
- `char`: 16-bit, ký tự Unicode

### Ví dụ:

```java
int soNguyen = 10;
double soThuc = 10.5;
boolean dung = true;
char kyTu = 'A';
String chuoi = "Đây là một chuỗi";
```

## 4. Cấu trúc điều khiển

### Câu lệnh if-else:

```java
if (dieuKien) {
    // Thực hiện khi điều kiện đúng
} else {
    // Thực hiện khi điều kiện sai
}
```

### Vòng lặp for:

```java
for (int i = 0; i < 5; i++) {
    System.out.println("Giá trị của i: " + i);
}
```

### Vòng lặp while:

```java
int i = 0;
while (i < 5) {
    System.out.println("Giá trị của i: " + i);
    i++;
}
```

## 5. Mảng

```java
// Khai báo mảng
int[] mangSoNguyen = new int[5];

// Khởi tạo mảng với giá trị
int[] mangSoNguyen = {1, 2, 3, 4, 5};

// Truy cập phần tử mảng
System.out.println("Phần tử đầu tiên: " + mangSoNguyen[0]);
```

## 6. Lập trình hướng đối tượng trong Java

Java là ngôn ngữ hướng đối tượng, hỗ trợ các khái niệm như lớp, đối tượng, kế thừa, đa hình, trừu tượng và đóng gói.

### Ví dụ về lớp:

```java
public class SinhVien {
    // Thuộc tính
    private String hoTen;
    private int tuoi;
    
    // Constructor
    public SinhVien(String hoTen, int tuoi) {
        this.hoTen = hoTen;
        this.tuoi = tuoi;
    }
    
    // Phương thức
    public void hienThiThongTin() {
        System.out.println("Họ tên: " + hoTen);
        System.out.println("Tuổi: " + tuoi);
    }
}
```

## Kết luận

Bài viết này chỉ giới thiệu một số khái niệm cơ bản về Java. Để trở thành một lập trình viên Java giỏi, bạn cần thực hành nhiều và tìm hiểu thêm về các khái niệm nâng cao như xử lý ngoại lệ, luồng, đa luồng, và các thư viện Java phổ biến.