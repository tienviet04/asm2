## Đề thi thử Nodejs Web 503

( Thời gian 60’ )
Yêu cầu:

### 1. Tạo router và Models Books (2đ)

#### Tạo router : 1đ

    GET - /books
    POST – /books
    GET - /books /:id
    PUT - / books /:id
    DELETE - / books /:id

#### Tạo models Books: 1đ

    name – String, required
    price: Number
    description: String, required
    image: String, required
    author: String, required

### 2. Tạo file phân quyền CheckPermission (1đ)

- Kiểm tra token, verify token và kiểm tra user db

### 3. Xây dựng API CRUD Books (4đ)

- Trả về danh sách sản phẩm: 0.5đ
- Trả về sản phẩm chi tiết theo Id: 0.5đ
- Cập nhật sản phẩm: check quyền: 1đ
- Tạo mới sản phẩm: check quyền 1đ
- Xóa sản phẩm: check quyền: 1đ

## 4. Xây dựng API Auth đăng ký và đăng nhập: (3đ)

#### Tạo router : 0.5đ

    POST – /auth/register
    POST – /auth/login

#### Tạo models User: 0.5đ

    name – String, required
    email: String, email, required
    password: String, required

### Đăng ký: (1đ)

    Validate email, password, name
    Kiểm tra email tồn tại
    Mã hóa password

### Đăng nhập: (1đ)

    Validate email, password,
    Kiểm tra email tồn tại
    So sánh password
    Tạo ra token
    Trả về token sau khi đăng nhập thành công
