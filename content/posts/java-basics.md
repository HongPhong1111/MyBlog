---
title: "Cơ bản về Java cho người mới bắt đầu"
date: 2023-07-10T10:00:00+07:00
draft: false
tags: ["Java", "Lập trình", "Cơ bản"]
categories: ["Java"]
description: "Hướng dẫn chi tiết về Java cho người mới bắt đầu. Tìm hiểu cú pháp, kiểu dữ liệu, và các khái niệm cơ bản của Java."
cover:
  image: "/MyBlog/images/java-logo.svg"
  alt: "Java Logo"
  caption: "Java - Ngôn ngữ lập trình phổ biến"
---

# Cơ bản về Java cho người mới bắt đầu

Java là một ngôn ngữ lập trình hướng đối tượng, mạnh mẽ và được sử dụng rộng rãi trong nhiều lĩnh vực từ phát triển ứng dụng di động, web đến các hệ thống doanh nghiệp lớn. Được phát triển bởi Sun Microsystems (nay thuộc Oracle) vào năm 1995, Java đã trở thành một trong những ngôn ngữ phổ biến nhất thế giới với phương châm "Write Once, Run Anywhere" (Viết một lần, chạy mọi nơi).

## Tại sao nên học Java?

Trước khi bắt đầu, hãy cùng tìm hiểu vì sao Java là lựa chọn tuyệt vời cho người mới:

- **Phổ biến rộng rãi**: Java được sử dụng bởi hàng triệu lập trình viên và hàng tỷ thiết bị trên toàn thế giới.
- **Đa nền tảng**: Nhờ Java Virtual Machine (JVM), code Java có thể chạy trên Windows, Linux, MacOS mà không cần thay đổi.
- **Hướng đối tượng**: Giúp tổ chức code tốt hơn, dễ bảo trì và mở rộng.
- **Bảo mật cao**: Java có nhiều tính năng bảo mật tích hợp sẵn.
- **Cộng đồng lớn**: Dễ dàng tìm kiếm tài liệu, thư viện và giải đáp thắc mắc.

## 1. Cài đặt Java Development Kit (JDK)

### JDK là gì?

JDK (Java Development Kit) là bộ công cụ phát triển Java, bao gồm:
- **JRE** (Java Runtime Environment): Môi trường để chạy các chương trình Java
- **Compiler** (javac): Công cụ biên dịch code Java thành bytecode
- **Debugger**: Công cụ gỡ lỗi
- **Các thư viện chuẩn**: Tập hợp các class và package có sẵn

### Cách cài đặt

**Windows:**
1. Tải JDK từ [Oracle](https://www.oracle.com/java/technologies/downloads/) hoặc [OpenJDK](https://adoptium.net/)
2. Chạy file cài đặt và làm theo hướng dẫn
3. Thiết lập biến môi trường JAVA_HOME và PATH

**macOS/Linux:**
```bash
# macOS (sử dụng Homebrew)
brew install openjdk

# Ubuntu/Debian
sudo apt install default-jdk

# CentOS/RHEL
sudo yum install java-devel
```

### Kiểm tra cài đặt

Sau khi cài đặt, mở terminal hoặc command prompt và chạy lệnh:

```bash
# Kiểm tra phiên bản Java đã cài đặt
java -version

# Kiểm tra compiler Java
javac -version
```

Nếu hiển thị thông tin phiên bản, bạn đã cài đặt thành công!

## 2. Chương trình Java đầu tiên - Hello World

### Cấu trúc cơ bản

Hãy cùng tạo chương trình Java đầu tiên của bạn:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Xin chào, thế giới!");
    }
}
```

### Giải thích chi tiết từng phần:

1. **`public class HelloWorld`**: 
   - `public`: Từ khóa chỉ định quyền truy cập, class này có thể được truy cập từ bên ngoài
   - `class`: Từ khóa khai báo một class
   - `HelloWorld`: Tên class (phải trùng với tên file, ví dụ: HelloWorld.java)

2. **`public static void main(String[] args)`**:
   - Đây là **phương thức chính** - điểm khởi đầu của mọi chương trình Java
   - `public`: Có thể truy cập từ mọi nơi
   - `static`: Có thể gọi mà không cần tạo đối tượng
   - `void`: Không trả về giá trị
   - `main`: Tên cố định của phương thức chính
   - `String[] args`: Mảng tham số dòng lệnh

3. **`System.out.println("Xin chào, thế giới!")`**:
   - `System`: Class hệ thống
   - `out`: Đối tượng output stream chuẩn
   - `println`: Phương thức in ra màn hình và xuống dòng
   - Text trong dấu ngoặc kép là nội dung sẽ hiển thị

### Biên dịch và chạy chương trình

**Bước 1**: Lưu code vào file `HelloWorld.java` (tên file phải trùng tên class)

**Bước 2**: Biên dịch code thành bytecode
```bash
javac HelloWorld.java
```
Lệnh này tạo ra file `HelloWorld.class` chứa bytecode

**Bước 3**: Chạy chương trình
```bash
java HelloWorld
```
Kết quả: `Xin chào, thế giới!`

### Quy trình thực thi

```
HelloWorld.java (Source code)
       ↓
    [javac] - Compiler
       ↓
HelloWorld.class (Bytecode)
       ↓
     [JVM] - Java Virtual Machine
       ↓
   Kết quả trên màn hình
```

## 3. Biến và kiểu dữ liệu

### Biến là gì?

Biến là "hộp chứa" để lưu trữ dữ liệu trong chương trình. Mỗi biến có:
- **Tên**: Để tham chiếu đến dữ liệu
- **Kiểu dữ liệu**: Xác định loại dữ liệu có thể lưu trữ
- **Giá trị**: Dữ liệu thực tế được lưu

### Cách khai báo biến

```java
kiểuDữLiệu tenBien = giaTri;

// Ví dụ:
int tuoi = 25;
String hoTen = "Nguyễn Văn A";
```

### Kiểu dữ liệu nguyên thủy (Primitive Types)

Java có 8 kiểu dữ liệu nguyên thủy:

#### 1. Kiểu số nguyên:

| Kiểu | Kích thước | Phạm vi | Khi nào sử dụng |
|------|-----------|---------|-----------------|
| `byte` | 8-bit | -128 đến 127 | Tiết kiệm bộ nhớ với mảng lớn |
| `short` | 16-bit | -32,768 đến 32,767 | Tiết kiệm bộ nhớ hơn int |
| `int` | 32-bit | -2³¹ đến 2³¹-1 | **Dùng phổ biến nhất** |
| `long` | 64-bit | -2⁶³ đến 2⁶³-1 | Số rất lớn, thêm 'L' sau số |

```java
byte tuoi = 25;              // Đủ cho tuổi người
short soLuongSanPham = 500;  // Số lượng sản phẩm
int danSo = 100000000;       // Dân số thành phố
long khoangCachMatTroi = 149600000L;  // km, cần thêm L
```

#### 2. Kiểu số thực (dấu phẩy động):

| Kiểu | Kích thước | Độ chính xác | Khi nào sử dụng |
|------|-----------|-------------|-----------------|
| `float` | 32-bit | 6-7 chữ số thập phân | Tiết kiệm bộ nhớ, thêm 'f' |
| `double` | 64-bit | 15 chữ số thập phân | **Dùng cho số thực** |

```java
float chieuCao = 1.75f;      // Mét, cần thêm f
double diemTrungBinh = 8.75; // Điểm số
double pi = 3.14159265359;   // Số Pi
```

#### 3. Kiểu ký tự và logic:

```java
char kyTu = 'A';           // Một ký tự, dùng dấu nháy đơn
char kyTuUnicode = '\u0041';  // Ký tự Unicode (A)
boolean laDung = true;     // Chỉ có true hoặc false
boolean laSai = false;
```

### Kiểu dữ liệu tham chiếu (Reference Types)

#### String - Chuỗi ký tự

```java
String hoTen = "Nguyễn Văn A";
String diaChi = "Hà Nội, Việt Nam";
String chuoiRong = "";

// Nối chuỗi
String tenDay = "Họ tên: " + hoTen;
System.out.println(tenDay);  // Họ tên: Nguyễn Văn A

// Độ dài chuỗi
int doDai = hoTen.length();  // 12
```

### Ví dụ thực tế:

```java
public class ThongTinSinhVien {
    public static void main(String[] args) {
        // Thông tin sinh viên
        String hoTen = "Nguyễn Hồng Phong";
        int tuoi = 20;
        double diemTrungBinh = 8.5;
        char xepLoai = 'A';
        boolean dangHoc = true;
        
        // Hiển thị thông tin
        System.out.println("=== THÔNG TIN SINH VIÊN ===");
        System.out.println("Họ tên: " + hoTen);
        System.out.println("Tuổi: " + tuoi);
        System.out.println("Điểm TB: " + diemTrungBinh);
        System.out.println("Xếp loại: " + xepLoai);
        System.out.println("Đang học: " + dangHoc);
    }
}
```

### Quy tắc đặt tên biến

✅ **Nên**:
- Bắt đầu bằng chữ cái, $ hoặc _
- Sử dụng camelCase: `tenBien`, `soLuongSinhVien`
- Tên có ý nghĩa: `tuoi` thay vì `a`

❌ **Không nên**:
- Bắt đầu bằng số: `1bien`
- Sử dụng từ khóa: `int`, `class`, `public`
- Có khoảng trắng: `ten bien`

## 4. Cấu trúc điều khiển

Cấu trúc điều khiển giúp chương trình đưa ra quyết định và lặp lại các thao tác.

### Câu lệnh if-else - Ra quyết định

Sử dụng khi cần kiểm tra điều kiện và thực hiện hành động khác nhau.

```java
int diem = 85;

if (diem >= 80) {
    System.out.println("Xếp loại: Giỏi");
} else if (diem >= 65) {
    System.out.println("Xếp loại: Khá");
} else if (diem >= 50) {
    System.out.println("Xếp loại: Trung bình");
} else {
    System.out.println("Xếp loại: Yếu");
}
```

**Giải thích**:
- Chương trình kiểm tra `diem >= 80` trước
- Nếu đúng → in "Giỏi" và kết thúc
- Nếu sai → kiểm tra điều kiện tiếp theo
- Cuối cùng, nếu tất cả sai → thực hiện `else`

### Toán tử so sánh

```java
int a = 10, b = 20;

a == b   // false (bằng)
a != b   // true (khác)
a > b    // false (lớn hơn)
a < b    // true (nhỏ hơn)
a >= b   // false (lớn hơn hoặc bằng)
a <= b   // true (nhỏ hơn hoặc bằng)
```

### Toán tử logic

```java
boolean coGioiTinh = true;
boolean coTuoi = false;

coGioiTinh && coTuoi  // false (AND - cả hai phải đúng)
coGioiTinh || coTuoi  // true (OR - một trong hai đúng)
!coGioiTinh           // false (NOT - đảo ngược)
```

### Vòng lặp for - Lặp với số lần xác định

Sử dụng khi biết trước số lần lặp.

```java
// In số từ 1 đến 5
for (int i = 1; i <= 5; i++) {
    System.out.println("Số: " + i);
}

// Kết quả:
// Số: 1
// Số: 2
// Số: 3
// Số: 4
// Số: 5
```

**Cấu trúc**: `for (khởi tạo; điều kiện; bước nhảy)`
- `int i = 1`: Khởi tạo biến đếm
- `i <= 5`: Điều kiện tiếp tục lặp
- `i++`: Tăng i lên 1 sau mỗi lần lặp

### Vòng lặp while - Lặp khi điều kiện đúng

Sử dụng khi không biết trước số lần lặp.

```java
int dem = 1;
while (dem <= 5) {
    System.out.println("Lần " + dem);
    dem++;  // Quan trọng: tăng biến đếm để tránh vòng lặp vô hạn
}
```

### Ví dụ thực tế - Tính tổng

```java
public class TinhTong {
    public static void main(String[] args) {
        int tong = 0;
        
        // Tính tổng từ 1 đến 100
        for (int i = 1; i <= 100; i++) {
            tong += i;  // tương đương: tong = tong + i
        }
        
        System.out.println("Tổng từ 1 đến 100 = " + tong);
        // Kết quả: 5050
    }
}
```

## 5. Mảng - Lưu trữ nhiều giá trị

### Mảng là gì?

Mảng là cấu trúc dữ liệu lưu trữ **nhiều giá trị cùng kiểu** trong một biến duy nhất.

Ví dụ: Thay vì khai báo:
```java
int diem1 = 8;
int diem2 = 7;
int diem3 = 9;
```

Bạn có thể dùng mảng:
```java
int[] diemSo = {8, 7, 9};
```

### Khai báo và khởi tạo mảng

**Cách 1**: Khai báo trước, gán sau
```java
int[] mangSoNguyen = new int[5];  // Mảng 5 phần tử, giá trị mặc định là 0
mangSoNguyen[0] = 10;
mangSoNguyen[1] = 20;
// ...
```

**Cách 2**: Khởi tạo với giá trị ngay
```java
int[] mangSoNguyen = {1, 2, 3, 4, 5};
String[] tenMonHoc = {"Toán", "Lý", "Hóa"};
```

### Truy cập phần tử mảng

Mảng trong Java bắt đầu từ **chỉ số 0**.

```java
int[] so = {10, 20, 30, 40, 50};

System.out.println(so[0]);  // 10 (phần tử đầu tiên)
System.out.println(so[2]);  // 30 (phần tử thứ 3)
System.out.println(so[4]);  // 50 (phần tử cuối)

// Độ dài mảng
System.out.println(so.length);  // 5
```

### Duyệt mảng với vòng lặp

**Cách 1**: Dùng vòng lặp for thông thường
```java
String[] monHoc = {"Toán", "Lý", "Hóa", "Văn"};

for (int i = 0; i < monHoc.length; i++) {
    System.out.println("Môn " + (i+1) + ": " + monHoc[i]);
}
```

**Cách 2**: Dùng for-each (đơn giản hơn)
```java
String[] monHoc = {"Toán", "Lý", "Hóa", "Văn"};

for (String mon : monHoc) {
    System.out.println("Môn học: " + mon);
}
```

### Ví dụ thực tế - Tính điểm trung bình

```java
public class TinhDiemTrungBinh {
    public static void main(String[] args) {
        // Điểm các môn học
        double[] diem = {8.5, 7.0, 9.0, 6.5, 8.0};
        double tong = 0;
        
        // Tính tổng điểm
        for (double d : diem) {
            tong += d;
        }
        
        // Tính trung bình
        double trungBinh = tong / diem.length;
        
        System.out.println("Điểm trung bình: " + trungBinh);
        // Kết quả: 7.8
    }
}
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

## Kết luận và lộ trình học tiếp

### Những gì đã học

Trong bài viết này, bạn đã làm quen với:
- ✅ Cài đặt JDK và viết chương trình Java đầu tiên
- ✅ Biến, kiểu dữ liệu và cách sử dụng chúng
- ✅ Cấu trúc điều khiển (if-else, for, while)
- ✅ Mảng để lưu trữ nhiều giá trị
- ✅ Khái niệm cơ bản về lập trình hướng đối tượng

### Bước tiếp theo

Để trở thành lập trình viên Java giỏi, hãy tiếp tục học:

**1. Nền tảng cơ bản:**
- Phương thức (Methods) và tham số
- Xử lý ngoại lệ (Exception Handling)
- File I/O - đọc ghi file

**2. Lập trình hướng đối tượng nâng cao:**
- Kế thừa (Inheritance)
- Đa hình (Polymorphism)
- Interface và Abstract Class

**3. Collections Framework:**
- ArrayList, LinkedList
- HashMap, HashSet
- Làm việc với dữ liệu phức tạp

**4. Lập trình nâng cao:**
- Đa luồng (Multithreading)
- Lập trình mạng (Network Programming)
- Database với JDBC

### Lời khuyên cho người mới

💡 **Thực hành là chìa khóa**: Viết code mỗi ngày, dù chỉ 30 phút.

💡 **Làm dự án nhỏ**: Bắt đầu với máy tính, game đoán số, quản lý sinh viên.

💡 **Đọc code người khác**: Học từ mã nguồn mở trên GitHub.

💡 **Tham gia cộng đồng**: Stack Overflow, Reddit r/learnjava, các group Facebook.

💡 **Kiên nhẫn**: Lập trình không dễ, nhưng mỗi lỗi là một bài học.

### Tài nguyên học tập

- **Tài liệu chính thức**: [Oracle Java Documentation](https://docs.oracle.com/javase/)
- **Bài tập thực hành**: [LeetCode](https://leetcode.com/), [HackerRank](https://www.hackerrank.com/)
- **Video tutorials**: [Codecademy](https://www.codecademy.com/), [freeCodeCamp](https://www.freecodecamp.org/)

Chúc bạn thành công trên con đường trở thành lập trình viên Java! 🚀