
# 📢 LINE LIFF - ส่ง Flex Message ด้วย liff.sendMessages()

หน้านี้ใช้สำหรับให้ผู้ใช้งานเลือกข่าวที่แปลแล้ว และส่ง Flex Message ไปยังกลุ่ม LINE ผ่าน LIFF

---

## ✅ ความสามารถหลัก

- แสดงรายการข่าวจาก Google Sheet ผ่าน Web API
- แสดงตัวอย่าง Flex Message
- ส่งข้อความด้วย `liff.sendMessages()` โดยไม่เจอปัญหา CORS

---

## 🛠 วิธีติดตั้งและใช้งาน

### 1. ตั้งค่าใน LINE Developers Console

#### ✅ 1.1 สร้าง LIFF App

- ไปที่ [https://developers.line.biz/console](https://developers.line.biz/console)
- เลือกโปรเจกต์ → ไปที่เมนู **LIFF**
- กด **Add**
  - LIFF App Name: liff-send-flex
  - LIFF URL: URL ของไฟล์นี้ที่อัปโหลด เช่น `https://news.watsaitama.com/liff-select-sendflex.html`
  - Size: ✅ Compact หรือ Full (ห้ามเป็น External)

> ⚠️ ถ้าใช้ External จะส่งข้อความไม่ได้

#### ✅ 1.2 เปิด Scope `chat_message.write`

- ไปที่เมนู **LINE Login** > OpenID Connect > Scopes
- ตรวจสอบว่ามี scope นี้อยู่:

```
chat_message.write
```

- ถ้าไม่มี ให้เพิ่มใหม่ แล้วกด **Apply**

---

### 2. ตั้งค่าในไฟล์ HTML

ในไฟล์ `liff-select-sendflex.html`  
ให้แก้ไขบรรทัดนี้:

```js
await liff.init({ liffId: "YOUR_LIFF_ID_HERE" });
```

ให้เป็น:

```js
await liff.init({ liffId: "1661018679-7JYB8QQ1" });
```

> อย่าลืมบันทึกและอัปโหลดไฟล์ขึ้นใหม่หลังแก้ไข

---

### 3. อัปโหลดไปยัง GitHub Pages / Netlify

สามารถใช้ได้กับ:
- GitHub Pages
- Netlify
- Firebase Hosting

---

### 4. ทดสอบใช้งาน

- ส่ง LIFF URL ให้ตัวเองใน LINE
- กดลิงก์ผ่านแอป LINE เท่านั้น
- เลือกข่าว → พรีวิว → ส่งผ่าน LIFF

---

## ❌ ข้อผิดพลาดที่พบบ่อย

| ข้อผิดพลาด | วิธีแก้ |
|-------------|---------|
| `LiffId is not found` | ยังไม่ได้ใส่ LIFF ID จริงในไฟล์ HTML |
| `permission is not in LIFF app scope` | ยังไม่ได้เปิด `chat_message.write` |
| Flex ไม่ส่ง | เปิดใน Browser ธรรมดาแทน LINE App |

---

หากคุณต้องการฟีเจอร์เพิ่มเติม เช่น Carousel, LIFF Login, ประวัติการส่ง ฯลฯ  
สามารถขอให้เพิ่มได้เลยครับ 😎
