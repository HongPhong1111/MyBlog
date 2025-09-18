---
title: "Collections Framework trong Java"
date: 2023-07-20T10:00:00+07:00
draft: false
tags: ["Java", "Collections", "Lập trình"]
categories: ["Java"]
---

# Collections Framework trong Java

Collections Framework trong Java là một kiến trúc thống nhất để biểu diễn và thao tác với các tập hợp. Framework này cung cấp nhiều interface, implementation và thuật toán để làm việc với các nhóm đối tượng.

## 1. Các interface chính trong Collections Framework

### Collection Interface

`Collection` là interface gốc trong hệ thống phân cấp collection. Nó định nghĩa các phương thức cơ bản như `add()`, `remove()`, `contains()`, `size()`, `isEmpty()`, `iterator()`, v.v.

### List Interface

`List` là một collection có thứ tự (sequence) và cho phép các phần tử trùng lặp. Nó mở rộng Collection interface và thêm các phương thức để truy cập các phần tử dựa trên vị trí chỉ mục của chúng.

### Set Interface

`Set` là một collection không cho phép các phần tử trùng lặp. Nó mở rộng Collection interface nhưng không thêm bất kỳ phương thức mới nào.

### Map Interface

`Map` không kế thừa từ Collection interface. Nó ánh xạ các khóa duy nhất đến các giá trị và cung cấp các phương thức để truy cập các phần tử dựa trên khóa.

## 2. Các implementation phổ biến

### List Implementations

#### ArrayList

`ArrayList` là một implementation của List interface sử dụng mảng động. Nó cung cấp truy cập ngẫu nhiên nhanh chóng nhưng chậm hơn trong việc chèn và xóa phần tử.

```java
List<String> arrayList = new ArrayList<>();
arrayList.add("Java");
arrayList.add("Python");
arrayList.add("C++");
System.out.println(arrayList);  // [Java, Python, C++]
```

#### LinkedList

`LinkedList` là một implementation của List interface sử dụng danh sách liên kết đôi. Nó nhanh hơn trong việc chèn và xóa phần tử nhưng chậm hơn trong truy cập ngẫu nhiên.

```java
List<String> linkedList = new LinkedList<>();
linkedList.add("Java");
linkedList.add("Python");
linkedList.add("C++");
System.out.println(linkedList);  // [Java, Python, C++]
```

### Set Implementations

#### HashSet

`HashSet` là một implementation của Set interface sử dụng bảng băm. Nó không đảm bảo thứ tự của các phần tử.

```java
Set<String> hashSet = new HashSet<>();
hashSet.add("Java");
hashSet.add("Python");
hashSet.add("Java");  // Phần tử trùng lặp, sẽ không được thêm vào
System.out.println(hashSet);  // [Java, Python]
```

#### TreeSet

`TreeSet` là một implementation của Set interface sử dụng cây đỏ-đen. Nó duy trì các phần tử theo thứ tự tăng dần.

```java
Set<String> treeSet = new TreeSet<>();
treeSet.add("Java");
treeSet.add("Python");
treeSet.add("C++");
System.out.println(treeSet);  // [C++, Java, Python]
```

### Map Implementations

#### HashMap

`HashMap` là một implementation của Map interface sử dụng bảng băm. Nó không đảm bảo thứ tự của các phần tử.

```java
Map<String, Integer> hashMap = new HashMap<>();
hashMap.put("Java", 1995);
hashMap.put("Python", 1991);
hashMap.put("C++", 1985);
System.out.println(hashMap);  // {Java=1995, C++=1985, Python=1991}
```

#### TreeMap

`TreeMap` là một implementation của Map interface sử dụng cây đỏ-đen. Nó duy trì các khóa theo thứ tự tăng dần.

```java
Map<String, Integer> treeMap = new TreeMap<>();
treeMap.put("Java", 1995);
treeMap.put("Python", 1991);
treeMap.put("C++", 1985);
System.out.println(treeMap);  // {C++=1985, Java=1995, Python=1991}
```

## 3. Các thuật toán trong Collections

Java Collections Framework cung cấp các thuật toán hữu ích thông qua lớp `Collections`:

```java
List<Integer> list = new ArrayList<>();
list.add(3);
list.add(1);
list.add(2);

// Sắp xếp
Collections.sort(list);
System.out.println(list);  // [1, 2, 3]

// Tìm kiếm nhị phân (yêu cầu danh sách đã sắp xếp)
int index = Collections.binarySearch(list, 2);
System.out.println("Vị trí của 2: " + index);  // 1

// Đảo ngược
Collections.reverse(list);
System.out.println(list);  // [3, 2, 1]

// Xáo trộn
Collections.shuffle(list);
System.out.println(list);  // Thứ tự ngẫu nhiên

// Tìm giá trị lớn nhất/nhỏ nhất
int max = Collections.max(list);
int min = Collections.min(list);
System.out.println("Max: " + max + ", Min: " + min);
```

## 4. Lựa chọn Collection phù hợp

Khi lựa chọn Collection, bạn cần xem xét các yếu tố sau:

1. **Thứ tự**: Bạn có cần duy trì thứ tự chèn không? Nếu có, hãy xem xét `List`.
2. **Trùng lặp**: Bạn có cho phép các phần tử trùng lặp không? Nếu không, hãy xem xét `Set`.
3. **Hiệu suất**: Bạn cần tối ưu cho thao tác nào? Chèn, xóa, tìm kiếm?
4. **Khóa-Giá trị**: Bạn có cần lưu trữ dữ liệu dưới dạng cặp khóa-giá trị không? Nếu có, hãy xem xét `Map`.

## Kết luận

Collections Framework trong Java cung cấp một cách tiếp cận thống nhất và linh hoạt để làm việc với các nhóm đối tượng. Hiểu và sử dụng đúng các collection sẽ giúp bạn viết mã hiệu quả và dễ bảo trì hơn. Hãy chọn collection phù hợp với nhu cầu cụ thể của bạn để tối ưu hiệu suất và tính dễ đọc của mã.