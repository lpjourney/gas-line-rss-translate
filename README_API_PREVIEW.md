# 📰 Web API (Preview Endpoint) for LIFF & GitHub Pages

This system provides a simple preview API for loading translated news articles from Google Sheets into any frontend (e.g., LIFF app, GitHub Pages, Netlify).

---

## ✅ API Usage

**Endpoint:**

```
https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?preview=1
```

Returns `JSON` from Google Sheets with the following structure:

```json
[
  {
    "title": "ข่าวต้นฉบับ",
    "translated": "เนื้อหาแปลไทย",
    "link": "https://example.com/news",
    "pubDate": "2025-04-20 09:30",
    "image": "https://example.com/image.jpg"
  }
]
```

---

## ⚙️ Setup & Script Properties

Make sure the following Script Properties are set in **Apps Script**:

| Key         | Example Value                                |
|-------------|-----------------------------------------------|
| `SHEET_ID`  | `1abcDEF...xyz` (your Sheet ID)               |
| `SHEET_NAME`| `ข่าวแปลอัตโนมัติ`                           |

To add: **Project Settings > Script Properties > Add Row**

---

## 🛡 Security Notes

- Do not expose your `Script ID`, `token.json`, or `credentials.json` in public repos.
- Use `.gitignore` to prevent pushing sensitive files.

---

## 💡 Notes

- This Web API only works with `doGet(e)` and `?preview=1` query
- It is read-only and CORS-enabled for frontend apps.
- It does **not** interfere with `doPost(e)` used for LINE Webhook integrations.

---

## 🕓 Last Updated

2025-04-20 15:09 JST
