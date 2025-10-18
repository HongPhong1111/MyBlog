---
title: "Lập trình mạng với Java"
date: 2023-08-10T10:00:00+07:00
draft: false
tags: ["Java", "Networking", "Socket", "Lập trình"]
categories: ["Java"]
description: "Hướng dẫn lập trình mạng với Java Socket. Tìm hiểu TCP, UDP và xây dựng ứng dụng client-server."
cover:
  image: "/MyBlog/images/networking.svg"
  alt: "Lập trình mạng Java"
  caption: "Giao tiếp mạng với Java Socket"
---

# Lập trình mạng với Java

Java cung cấp một bộ API mạnh mẽ cho lập trình mạng, cho phép phát triển các ứng dụng client-server, giao tiếp qua mạng, và xử lý các giao thức mạng khác nhau. Bài viết này sẽ giới thiệu về lập trình mạng trong Java.

## 1. Cơ bản về lập trình mạng

Lập trình mạng trong Java chủ yếu dựa trên hai khái niệm: Socket và URL.

- **Socket**: Cho phép giao tiếp hai chiều giữa hai chương trình chạy trên mạng.
- **URL**: Cung cấp một cách để truy cập tài nguyên trên Internet.

## 2. Lập trình Socket

Socket là điểm cuối của liên kết giao tiếp hai chiều giữa hai chương trình chạy trên mạng. Java hỗ trợ cả TCP socket (luồng dữ liệu đáng tin cậy) và UDP socket (gói dữ liệu không đáng tin cậy).

### TCP Socket

#### Server Socket

```java
import java.io.*;
import java.net.*;

public class SimpleServer {
    public static void main(String[] args) {
        try {
            // Tạo server socket trên cổng 5000
            ServerSocket serverSocket = new ServerSocket(5000);
            System.out.println("Server đang lắng nghe trên cổng 5000...");
            
            // Chấp nhận kết nối từ client
            Socket clientSocket = serverSocket.accept();
            System.out.println("Client đã kết nối: " + clientSocket.getInetAddress());
            
            // Tạo luồng đầu vào và đầu ra
            BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
            PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);
            
            // Đọc dữ liệu từ client
            String inputLine = in.readLine();
            System.out.println("Nhận từ client: " + inputLine);
            
            // Gửi phản hồi đến client
            out.println("Xin chào từ server!");
            
            // Đóng kết nối
            clientSocket.close();
            serverSocket.close();
        } catch (IOException e) {
            System.out.println("Lỗi I/O: " + e.getMessage());
        }
    }
}
```

#### Client Socket

```java
import java.io.*;
import java.net.*;

public class SimpleClient {
    public static void main(String[] args) {
        try {
            // Kết nối đến server
            Socket socket = new Socket("localhost", 5000);
            
            // Tạo luồng đầu vào và đầu ra
            BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
            
            // Gửi dữ liệu đến server
            out.println("Xin chào từ client!");
            
            // Đọc phản hồi từ server
            String response = in.readLine();
            System.out.println("Nhận từ server: " + response);
            
            // Đóng kết nối
            socket.close();
        } catch (UnknownHostException e) {
            System.out.println("Không tìm thấy host: " + e.getMessage());
        } catch (IOException e) {
            System.out.println("Lỗi I/O: " + e.getMessage());
        }
    }
}
```

### UDP Socket

#### UDP Server

```java
import java.io.*;
import java.net.*;

public class UDPServer {
    public static void main(String[] args) {
        try {
            // Tạo datagram socket trên cổng 5000
            DatagramSocket socket = new DatagramSocket(5000);
            byte[] receiveData = new byte[1024];
            
            System.out.println("UDP Server đang lắng nghe trên cổng 5000...");
            
            while (true) {
                // Nhận gói dữ liệu
                DatagramPacket receivePacket = new DatagramPacket(receiveData, receiveData.length);
                socket.receive(receivePacket);
                
                // Xử lý dữ liệu nhận được
                String sentence = new String(receivePacket.getData(), 0, receivePacket.getLength());
                System.out.println("Nhận từ client: " + sentence);
                
                // Lấy địa chỉ và cổng của client
                InetAddress clientAddress = receivePacket.getAddress();
                int clientPort = receivePacket.getPort();
                
                // Chuẩn bị dữ liệu phản hồi
                String response = "Xin chào từ UDP server!";
                byte[] sendData = response.getBytes();
                
                // Gửi phản hồi đến client
                DatagramPacket sendPacket = new DatagramPacket(sendData, sendData.length, clientAddress, clientPort);
                socket.send(sendPacket);
            }
        } catch (IOException e) {
            System.out.println("Lỗi I/O: " + e.getMessage());
        }
    }
}
```

#### UDP Client

```java
import java.io.*;
import java.net.*;

public class UDPClient {
    public static void main(String[] args) {
        try {
            // Tạo datagram socket
            DatagramSocket socket = new DatagramSocket();
            
            // Địa chỉ server
            InetAddress serverAddress = InetAddress.getByName("localhost");
            int serverPort = 5000;
            
            // Chuẩn bị dữ liệu gửi
            String sentence = "Xin chào từ UDP client!";
            byte[] sendData = sentence.getBytes();
            
            // Tạo và gửi gói dữ liệu
            DatagramPacket sendPacket = new DatagramPacket(sendData, sendData.length, serverAddress, serverPort);
            socket.send(sendPacket);
            
            // Chuẩn bị nhận phản hồi
            byte[] receiveData = new byte[1024];
            DatagramPacket receivePacket = new DatagramPacket(receiveData, receiveData.length);
            
            // Nhận phản hồi từ server
            socket.receive(receivePacket);
            String response = new String(receivePacket.getData(), 0, receivePacket.getLength());
            System.out.println("Nhận từ server: " + response);
            
            // Đóng socket
            socket.close();
        } catch (IOException e) {
            System.out.println("Lỗi I/O: " + e.getMessage());
        }
    }
}
```

## 3. Lập trình URL

Java cung cấp các lớp URL và URLConnection để làm việc với tài nguyên trên Internet.

### Đọc dữ liệu từ URL

```java
import java.io.*;
import java.net.*;

public class URLReader {
    public static void main(String[] args) {
        try {
            // Tạo đối tượng URL
            URL url = new URL("https://www.example.com");
            
            // Mở kết nối
            URLConnection connection = url.openConnection();
            
            // Đọc dữ liệu từ URL
            BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String inputLine;
            StringBuilder content = new StringBuilder();
            
            while ((inputLine = in.readLine()) != null) {
                content.append(inputLine).append("\n");
            }
            
            // Đóng kết nối
            in.close();
            
            // Hiển thị nội dung
            System.out.println(content.toString());
        } catch (MalformedURLException e) {
            System.out.println("URL không hợp lệ: " + e.getMessage());
        } catch (IOException e) {
            System.out.println("Lỗi I/O: " + e.getMessage());
        }
    }
}
```

### HTTP Request với HttpURLConnection

```java
import java.io.*;
import java.net.*;

public class HttpClient {
    public static void main(String[] args) {
        try {
            // Tạo URL
            URL url = new URL("https://jsonplaceholder.typicode.com/posts/1");
            
            // Mở kết nối HTTP
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            
            // Thiết lập phương thức request
            connection.setRequestMethod("GET");
            
            // Thiết lập header
            connection.setRequestProperty("Content-Type", "application/json");
            connection.setRequestProperty("User-Agent", "Mozilla/5.0");
            
            // Lấy mã phản hồi
            int responseCode = connection.getResponseCode();
            System.out.println("Mã phản hồi: " + responseCode);
            
            // Đọc phản hồi
            BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String inputLine;
            StringBuilder response = new StringBuilder();
            
            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();
            
            // Hiển thị phản hồi
            System.out.println("Phản hồi: " + response.toString());
        } catch (Exception e) {
            System.out.println("Lỗi: " + e.getMessage());
        }
    }
}
```

## 4. Ví dụ ứng dụng chat đơn giản

### Chat Server

```java
import java.io.*;
import java.net.*;
import java.util.*;

public class ChatServer {
    private static final int PORT = 5000;
    private static Set<PrintWriter> clientWriters = new HashSet<>();
    
    public static void main(String[] args) {
        System.out.println("Chat Server đang chạy...");
        
        try (ServerSocket serverSocket = new ServerSocket(PORT)) {
            while (true) {
                // Chấp nhận kết nối mới
                Socket clientSocket = serverSocket.accept();
                System.out.println("Kết nối mới: " + clientSocket.getInetAddress());
                
                // Tạo luồng xử lý cho client
                Thread thread = new Thread(new ClientHandler(clientSocket));
                thread.start();
            }
        } catch (IOException e) {
            System.out.println("Lỗi server: " + e.getMessage());
        }
    }
    
    // Lớp xử lý client
    private static class ClientHandler implements Runnable {
        private Socket socket;
        private BufferedReader in;
        private PrintWriter out;
        private String name;
        
        public ClientHandler(Socket socket) {
            this.socket = socket;
        }
        
        @Override
        public void run() {
            try {
                // Thiết lập luồng I/O
                in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
                out = new PrintWriter(socket.getOutputStream(), true);
                
                // Yêu cầu tên người dùng
                out.println("SUBMITNAME");
                name = in.readLine();
                
                // Thông báo tham gia
                System.out.println(name + " đã tham gia chat");
                synchronized (clientWriters) {
                    clientWriters.add(out);
                }
                broadcast(name + " đã tham gia chat");
                
                // Xử lý tin nhắn
                String message;
                while ((message = in.readLine()) != null) {
                    if (message.equals("QUIT")) {
                        break;
                    }
                    broadcast(name + ": " + message);
                }
            } catch (IOException e) {
                System.out.println("Lỗi xử lý client: " + e.getMessage());
            } finally {
                // Đóng kết nối và thông báo rời đi
                if (name != null) {
                    System.out.println(name + " đã rời chat");
                    broadcast(name + " đã rời chat");
                }
                
                try {
                    synchronized (clientWriters) {
                        clientWriters.remove(out);
                    }
                    socket.close();
                } catch (IOException e) {
                    System.out.println("Lỗi đóng socket: " + e.getMessage());
                }
            }
        }
        
        // Gửi tin nhắn đến tất cả client
        private void broadcast(String message) {
            synchronized (clientWriters) {
                for (PrintWriter writer : clientWriters) {
                    writer.println(message);
                }
            }
        }
    }
}
```

### Chat Client

```java
import java.io.*;
import java.net.*;
import java.util.Scanner;

public class ChatClient {
    private static final String SERVER_ADDRESS = "localhost";
    private static final int SERVER_PORT = 5000;
    
    public static void main(String[] args) {
        try {
            // Kết nối đến server
            Socket socket = new Socket(SERVER_ADDRESS, SERVER_PORT);
            System.out.println("Đã kết nối đến server");
            
            // Thiết lập luồng I/O
            BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
            Scanner scanner = new Scanner(System.in);
            
            // Tạo luồng đọc tin nhắn từ server
            Thread readerThread = new Thread(() -> {
                try {
                    String message;
                    while ((message = in.readLine()) != null) {
                        if (message.equals("SUBMITNAME")) {
                            System.out.print("Nhập tên của bạn: ");
                            String name = scanner.nextLine();
                            out.println(name);
                        } else {
                            System.out.println(message);
                        }
                    }
                } catch (IOException e) {
                    System.out.println("Mất kết nối đến server");
                }
            });
            readerThread.start();
            
            // Đọc và gửi tin nhắn từ người dùng
            String userInput;
            while (true) {
                userInput = scanner.nextLine();
                if (userInput.equalsIgnoreCase("quit")) {
                    out.println("QUIT");
                    break;
                }
                out.println(userInput);
            }
            
            // Đóng kết nối
            socket.close();
            scanner.close();
        } catch (IOException e) {
            System.out.println("Lỗi kết nối: " + e.getMessage());
        }
    }
}
```

## Kết luận

Lập trình mạng là một phần quan trọng của Java, cho phép phát triển các ứng dụng phân tán và giao tiếp qua mạng. Java cung cấp các API mạnh mẽ cho cả lập trình socket cấp thấp và xử lý HTTP cấp cao.

Bài viết này chỉ giới thiệu các khái niệm cơ bản về lập trình mạng trong Java. Để phát triển ứng dụng mạng phức tạp hơn, bạn có thể tìm hiểu thêm về các thư viện và framework như Netty, gRPC, hoặc Spring WebFlux.