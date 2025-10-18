---
title: "Lập trình hướng đối tượng trong Java"
date: 2023-07-15T10:00:00+07:00
draft: false
tags: ["Java", "OOP", "Lập trình"]
categories: ["Java"]
description: "Khám phá 4 nguyên tắc cơ bản của lập trình hướng đối tượng: Đóng gói, Kế thừa, Đa hình và Trừu tượng trong Java."
cover:
  image: "/images/java-oop.svg"
  alt: "Lập trình hướng đối tượng Java"
  caption: "4 nguyên tắc OOP trong Java"
---

# Lập trình hướng đối tượng trong Java

Lập trình hướng đối tượng (Object-Oriented Programming - OOP) là một phương pháp lập trình dựa trên khái niệm về "đối tượng". Java là một ngôn ngữ lập trình hướng đối tượng thuần túy, mọi thứ trong Java đều liên quan đến các lớp và đối tượng.

## 1. Bốn nguyên tắc cơ bản của OOP

### Tính đóng gói (Encapsulation)

Tính đóng gói là việc gói dữ liệu và các phương thức xử lý dữ liệu đó lại với nhau, tạo thành một đơn vị độc lập. Trong Java, chúng ta sử dụng các access modifiers (public, private, protected) để kiểm soát quyền truy cập.

```java
public class SinhVien {
    private String hoTen;  // Thuộc tính private
    private int tuoi;      // Thuộc tính private
    
    // Getter và Setter
    public String getHoTen() {
        return hoTen;
    }
    
    public void setHoTen(String hoTen) {
        this.hoTen = hoTen;
    }
    
    public int getTuoi() {
        return tuoi;
    }
    
    public void setTuoi(int tuoi) {
        if (tuoi > 0) {  // Kiểm tra tính hợp lệ
            this.tuoi = tuoi;
        }
    }
}
```

### Tính kế thừa (Inheritance)

Tính kế thừa cho phép một lớp (lớp con) kế thừa các thuộc tính và phương thức từ một lớp khác (lớp cha). Trong Java, chúng ta sử dụng từ khóa `extends` để thực hiện kế thừa.

```java
// Lớp cha
public class NguoiDung {
    protected String hoTen;
    protected String email;
    
    public void hienThiThongTin() {
        System.out.println("Họ tên: " + hoTen);
        System.out.println("Email: " + email);
    }
}

// Lớp con kế thừa từ lớp cha
public class SinhVien extends NguoiDung {
    private String maSinhVien;
    private double diemTrungBinh;
    
    @Override
    public void hienThiThongTin() {
        super.hienThiThongTin();  // Gọi phương thức của lớp cha
        System.out.println("Mã sinh viên: " + maSinhVien);
        System.out.println("Điểm trung bình: " + diemTrungBinh);
    }
}
```

### Tính đa hình (Polymorphism)

Tính đa hình cho phép một đối tượng có thể có nhiều hình thái khác nhau. Trong Java, chúng ta thực hiện đa hình thông qua ghi đè phương thức (method overriding) và nạp chồng phương thức (method overloading).

```java
// Nạp chồng phương thức (Method Overloading)
public class TinhToan {
    public int cong(int a, int b) {
        return a + b;
    }
    
    public double cong(double a, double b) {
        return a + b;
    }
    
    public int cong(int a, int b, int c) {
        return a + b + c;
    }
}

// Ghi đè phương thức (Method Overriding)
public class HinhHoc {
    public double tinhDienTich() {
        return 0;
    }
}

public class HinhChuNhat extends HinhHoc {
    private double chieuDai;
    private double chieuRong;
    
    @Override
    public double tinhDienTich() {
        return chieuDai * chieuRong;
    }
}
```

### Tính trừu tượng (Abstraction)

Tính trừu tượng là quá trình ẩn các chi tiết triển khai và chỉ hiển thị chức năng cho người dùng. Trong Java, chúng ta sử dụng lớp trừu tượng (abstract class) và giao diện (interface) để thực hiện tính trừu tượng.

```java
// Lớp trừu tượng
public abstract class HinhHoc {
    public abstract double tinhDienTich();  // Phương thức trừu tượng
    public abstract double tinhChuVi();     // Phương thức trừu tượng
    
    public void hienThiThongTin() {  // Phương thức cụ thể
        System.out.println("Diện tích: " + tinhDienTich());
        System.out.println("Chu vi: " + tinhChuVi());
    }
}

// Giao diện
public interface HinhVe {
    void ve();  // Mặc định là public abstract
    void xoa(); // Mặc định là public abstract
}
```

## 2. Lớp và đối tượng trong Java

### Lớp (Class)

Lớp là một bản thiết kế hoặc khuôn mẫu để tạo ra các đối tượng. Nó định nghĩa các thuộc tính và phương thức mà các đối tượng của lớp đó sẽ có.

```java
public class SanPham {
    // Thuộc tính
    private String ten;
    private double gia;
    private int soLuong;
    
    // Constructor
    public SanPham(String ten, double gia, int soLuong) {
        this.ten = ten;
        this.gia = gia;
        this.soLuong = soLuong;
    }
    
    // Phương thức
    public double tinhTongGia() {
        return gia * soLuong;
    }
}
```

### Đối tượng (Object)

Đối tượng là một thể hiện cụ thể của lớp. Chúng ta tạo đối tượng bằng cách sử dụng từ khóa `new`.

```java
// Tạo đối tượng từ lớp SanPham
SanPham sp1 = new SanPham("Laptop", 15000000, 2);
SanPham sp2 = new SanPham("Điện thoại", 8000000, 3);

// Sử dụng phương thức của đối tượng
System.out.println("Tổng giá sp1: " + sp1.tinhTongGia());
System.out.println("Tổng giá sp2: " + sp2.tinhTongGia());
```

## Kết luận

Lập trình hướng đối tượng là một phương pháp lập trình mạnh mẽ giúp tổ chức mã nguồn một cách có cấu trúc và dễ bảo trì. Java, với tư cách là một ngôn ngữ OOP thuần túy, cung cấp đầy đủ các tính năng để thực hiện các nguyên tắc OOP. Hiểu và áp dụng đúng các nguyên tắc này sẽ giúp bạn trở thành một lập trình viên Java giỏi hơn.