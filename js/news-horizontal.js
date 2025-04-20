dayjs.locale("th");
dayjs.extend(dayjs_plugin_relativeTime);
dayjs.extend(dayjs_plugin_utc);
dayjs.extend(dayjs_plugin_timezone);

function formatSmartThaiDate(isoDate) {
  const now = dayjs().tz("Asia/Bangkok");
  const date = dayjs(isoDate).tz("Asia/Bangkok");
  if (now.isSame(date, "day")) return `วันนี้ เวลา ${date.format("HH:mm")} น.`;
  if (now.subtract(1, "day").isSame(date, "day"))
    return `เมื่อวาน เวลา ${date.format("HH:mm")} น.`;
  return date.format("D MMMM YYYY เวลา HH:mm น.");
}

const API_URL =
  "https://script.google.com/macros/s/AKfycbw7HEHW_mrgBUD-L1ogKs7r6XbbdenH6UwuS6W8XhUVeTeHci0gKW3IAOJ080YMc7PjGw/exec";

fetch(API_URL)
  .then((res) => res.json())
  .then((data) => {
    const list = document.getElementById("newsList");
    if (data.length === 0) {
      list.innerHTML = "<p>ไม่พบข่าวล่าสุด</p>";
      return;
    }

    data.forEach((news) => {
      const imageUrl =
        news.image && news.image.trim() !== ""
          ? news.image
          : "img/placeholder.png";

      const col = document.createElement("div");
      col.className = "col";

      const card = document.createElement("div");
      card.className = "card shadow-sm";
      card.innerHTML = `
        <div class="card-body">
          <div class="row g-3">
            <div class="col-md-auto">
              <div class="news-thumb-wrapper">
                <div class="ratio ratio-1x1">
                  <img src="${imageUrl}" alt="image">
                </div>
              </div>
            </div>
            <div class="col">
              <h5 class="card-title text-success">${news.title}</h5>
              <p class="card-text">${news.translated}</p>
            </div>
          </div>
        </div>
        <div class="card-footer d-flex justify-content-between align-items-center">
          <small class="text-muted">🗓 ${formatSmartThaiDate(
            news.pubDate
          )}</small>
          <a href="liff-news.html?id=${encodeURIComponent(
            news.link
          )}" class="btn btn-sm btn-outline-success">อ่านภาษาไทย</a>
        </div>
      `;

      col.appendChild(card);
      list.appendChild(col);
    });
  })
  .catch((err) => {
    document.getElementById("newsList").innerHTML =
      "<p class='text-danger'>เกิดข้อผิดพลาดในการโหลดข่าว</p>";
    console.error(err);
  });

// Load header + theme
fetch("header.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("header-container").innerHTML = html;
    const currentTheme = localStorage.getItem("theme") || "light";
    document.body.classList.add(currentTheme);
    const themeSwitcher = document.getElementById("themeSwitcher");
    if (themeSwitcher) {
      themeSwitcher.value = currentTheme;
      themeSwitcher.addEventListener("change", (e) => {
        document.body.className = e.target.value;
        localStorage.setItem("theme", e.target.value);
      });
    }
  });
