# LIFF Web Page: ส่ง Flex + Preview

- แสดงตัวอย่าง Flex ที่จะส่ง (preview)
- ปุ่มส่งข่าวล่าสุดไปยัง LINE Group ผ่าน Web App (POST)
- รองรับการ embed ใน LIFF หรือหน้าเว็บทั่วไป

## ขั้นตอนใช้งาน

1. อัปโหลดไฟล์ `liff-send-flex.html` ไปยัง GitHub Pages
2. ตั้งค่า LIFF URL ใน LINE Developer Console ให้ชี้มาที่หน้านี้
3. ตรวจสอบให้ Web App URL มี `doPost()` และรองรับพารามิเตอร์ `?preview=1` (optional)
