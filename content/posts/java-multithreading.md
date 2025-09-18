---
title: "Lập trình đa luồng trong Java"
date: 2023-08-10T14:00:00+07:00
draft: false
tags: ["Java", "Multithreading", "Concurrency", "Lập trình"]
categories: ["Java"]
---

# Lập trình đa luồng trong Java

Lập trình đa luồng là một trong những tính năng mạnh mẽ của Java, cho phép thực thi nhiều luồng đồng thời trong cùng một chương trình. Bài viết này sẽ giới thiệu về các khái niệm cơ bản và kỹ thuật lập trình đa luồng trong Java.

## 1. Khái niệm cơ bản

### Thread là gì?

Thread (luồng) là đơn vị nhỏ nhất của việc thực thi mã trong một chương trình. Một chương trình Java có thể có nhiều luồng chạy đồng thời, mỗi luồng thực hiện một tác vụ riêng biệt.

### Lợi ích của lập trình đa luồng:

- **Tận dụng CPU đa lõi**: Cải thiện hiệu suất trên các hệ thống đa lõi.
- **Phản hồi nhanh hơn**: Ứng dụng vẫn phản hồi trong khi thực hiện các tác vụ nặng.
- **Chia sẻ tài nguyên**: Các luồng có thể chia sẻ bộ nhớ và tài nguyên.
- **Tiết kiệm tài nguyên**: Nhẹ hơn so với việc chạy nhiều tiến trình.

## 2. Tạo và quản lý Thread trong Java

### Cách 1: Kế thừa lớp Thread

```java
public class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("Thread đang chạy: " + Thread.currentThread().getName());
        // Mã của thread
    }
    
    public static void main(String[] args) {
        MyThread thread1 = new MyThread();
        thread1.setName("Thread-1");
        thread1.start(); // Bắt đầu thread
    }
}
```

### Cách 2: Triển khai interface Runnable (Khuyến nghị)

```java
public class MyRunnable implements Runnable {
    @Override
    public void run() {
        System.out.println("Thread đang chạy: " + Thread.currentThread().getName());
        // Mã của thread
    }
    
    public static void main(String[] args) {
        Thread thread1 = new Thread(new MyRunnable(), "Thread-1");
        thread1.start(); // Bắt đầu thread
    }
}
```

### Cách 3: Sử dụng Lambda Expression (Java 8+)

```java
public class ThreadExample {
    public static void main(String[] args) {
        Thread thread1 = new Thread(() -> {
            System.out.println("Thread đang chạy: " + Thread.currentThread().getName());
            // Mã của thread
        }, "Thread-1");
        
        thread1.start(); // Bắt đầu thread
    }
}
```

## 3. Vòng đời của Thread

Thread trong Java có các trạng thái sau:

1. **New**: Thread được tạo nhưng chưa bắt đầu.
2. **Runnable**: Thread đã bắt đầu và sẵn sàng chạy.
3. **Blocked**: Thread đang chờ monitor lock để vào hoặc tái nhập một đoạn mã đồng bộ hóa.
4. **Waiting**: Thread đang chờ vô thời hạn cho một thread khác thực hiện một hành động cụ thể.
5. **Timed Waiting**: Thread đang chờ trong một khoảng thời gian xác định.
6. **Terminated**: Thread đã kết thúc thực thi.

## 4. Đồng bộ hóa (Synchronization)

Khi nhiều thread cùng truy cập và thay đổi dữ liệu chia sẻ, có thể xảy ra các vấn đề về tính nhất quán. Java cung cấp các cơ chế đồng bộ hóa để giải quyết vấn đề này.

### Từ khóa synchronized

```java
public class Counter {
    private int count = 0;
    
    // Phương thức đồng bộ hóa
    public synchronized void increment() {
        count++;
    }
    
    // Khối đồng bộ hóa
    public void decrement() {
        synchronized(this) {
            count--;
        }
    }
    
    public int getCount() {
        return count;
    }
}
```

### Lock Interface (Java 5+)

```java
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class Counter {
    private int count = 0;
    private final Lock lock = new ReentrantLock();
    
    public void increment() {
        lock.lock();
        try {
            count++;
        } finally {
            lock.unlock(); // Luôn giải phóng lock trong khối finally
        }
    }
    
    public int getCount() {
        return count;
    }
}
```

## 5. Giao tiếp giữa các Thread

### wait(), notify() và notifyAll()

```java
public class MessageQueue {
    private String message;
    private boolean empty = true;
    
    public synchronized String receive() {
        while (empty) {
            try {
                wait(); // Chờ đến khi có tin nhắn
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
        empty = true;
        notifyAll(); // Thông báo cho producer
        return message;
    }
    
    public synchronized void send(String message) {
        while (!empty) {
            try {
                wait(); // Chờ đến khi queue trống
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
        empty = false;
        this.message = message;
        notifyAll(); // Thông báo cho consumer
    }
}
```

## 6. Concurrent Collections

Java cung cấp các collection thread-safe trong gói `java.util.concurrent`:

- **ConcurrentHashMap**: Phiên bản thread-safe của HashMap với hiệu suất cao.
- **CopyOnWriteArrayList**: Phiên bản thread-safe của ArrayList, tối ưu cho đọc.
- **BlockingQueue**: Interface cho queue hỗ trợ các thao tác chặn.

```java
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;

public class ProducerConsumerExample {
    public static void main(String[] args) {
        BlockingQueue<String> queue = new LinkedBlockingQueue<>(10);
        
        // Producer
        new Thread(() -> {
            try {
                for (int i = 0; i < 20; i++) {
                    queue.put("Item " + i);
                    System.out.println("Produced: Item " + i);
                    Thread.sleep(100);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }).start();
        
        // Consumer
        new Thread(() -> {
            try {
                for (int i = 0; i < 20; i++) {
                    String item = queue.take();
                    System.out.println("Consumed: " + item);
                    Thread.sleep(200);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }).start();
    }
}
```

## 7. Thread Pool và Executor Framework

Thay vì tạo thread mới cho mỗi tác vụ, Thread Pool tái sử dụng các thread đã tạo, giúp cải thiện hiệu suất.

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ThreadPoolExample {
    public static void main(String[] args) {
        // Tạo thread pool với 5 thread
        ExecutorService executor = Executors.newFixedThreadPool(5);
        
        // Gửi 10 tác vụ đến thread pool
        for (int i = 0; i < 10; i++) {
            final int taskId = i;
            executor.execute(() -> {
                System.out.println("Tác vụ " + taskId + " đang chạy trên " + 
                                  Thread.currentThread().getName());
                try {
                    Thread.sleep(500);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            });
        }
        
        // Dừng thread pool
        executor.shutdown();
    }
}
```

## 8. CompletableFuture (Java 8+)

CompletableFuture cung cấp cách tiếp cận lập trình bất đồng bộ hiện đại với hỗ trợ cho các phép biến đổi và kết hợp.

```java
import java.util.concurrent.CompletableFuture;

public class CompletableFutureExample {
    public static void main(String[] args) {
        CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
            return "Kết quả từ thread khác";
        });
        
        future.thenAccept(result -> System.out.println("Nhận được: " + result));
        
        // Đợi để xem kết quả
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}
```

## 9. Các vấn đề phổ biến trong lập trình đa luồng

### Race Condition

Xảy ra khi nhiều thread cùng truy cập và thay đổi dữ liệu chia sẻ, dẫn đến kết quả không xác định.

### Deadlock

Xảy ra khi hai hoặc nhiều thread chờ đợi lẫn nhau vô thời hạn.

```java
public class DeadlockExample {
    private static final Object LOCK_1 = new Object();
    private static final Object LOCK_2 = new Object();
    
    public static void main(String[] args) {
        Thread thread1 = new Thread(() -> {
            synchronized (LOCK_1) {
                System.out.println("Thread 1: Đã có LOCK_1");
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
                
                synchronized (LOCK_2) {
                    System.out.println("Thread 1: Đã có LOCK_2");
                }
            }
        });
        
        Thread thread2 = new Thread(() -> {
            synchronized (LOCK_2) {
                System.out.println("Thread 2: Đã có LOCK_2");
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
                
                synchronized (LOCK_1) {
                    System.out.println("Thread 2: Đã có LOCK_1");
                }
            }
        });
        
        thread1.start();
        thread2.start();
    }
}
```

### Cách tránh Deadlock:

1. Luôn lấy lock theo cùng một thứ tự.
2. Tránh giữ nhiều lock cùng lúc.
3. Sử dụng timeout khi lấy lock.
4. Sử dụng `tryLock()` từ Lock interface.

## 10. Các nguyên tắc thiết kế cho lập trình đa luồng

1. **Giảm thiểu chia sẻ dữ liệu**: Hạn chế chia sẻ dữ liệu giữa các thread.
2. **Immutability**: Sử dụng các đối tượng không thay đổi khi có thể.
3. **Đồng bộ hóa tối thiểu**: Chỉ đồng bộ hóa các đoạn mã cần thiết.
4. **Sử dụng các cấu trúc dữ liệu thread-safe**: Ưu tiên sử dụng các collection từ gói `java.util.concurrent`.
5. **Tránh blocking**: Sử dụng các phương pháp non-blocking khi có thể.

## Kết luận

Lập trình đa luồng trong Java là một chủ đề phức tạp nhưng rất mạnh mẽ. Hiểu và áp dụng đúng các kỹ thuật đa luồng có thể giúp cải thiện đáng kể hiệu suất và khả năng phản hồi của ứng dụng Java. Tuy nhiên, cần cẩn thận để tránh các vấn đề như race condition, deadlock và starvation.