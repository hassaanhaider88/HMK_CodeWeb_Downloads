# HMK Downloader (HMK CodeWeb)

[![Project Logo](https://ik.imagekit.io/hassaan/HMK_Downloads_vuj_mqrA8N)](https://ik.imagekit.io/hassaan/HMK_Downloads_vuj_mqrA8N)

HMK Downloader is a web application that lets users fetch YouTube video thumbnails, download them, and also search YouTube videos and download their thumbnails. The UI is built with Tailwind CSS, and the backend is built using Express (Node.js).

---

## 📁 Contents

* [Features](#features)
* [Demo / Preview](#demo--preview)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)

  * [Prerequisites](#prerequisites)
  * [Install & Run](#install--run)
* [Usage](#usage)

  * [YouTube Thumbnail](#youtube-thumbnail)
  * [Facebook Video (Thumbnail)](#facebook-video-thumbnail)
  * [Search Videos & Thumbnails](#search-videos--thumbnails)
* [API Endpoints](#api-endpoints)
* [Error Handling & Loading State](#error-handling--loading-state)
* [Future Enhancements](#future-enhancements)
* [License](#license)

---

## 🎯 Features

* Fetch YouTube video metadata including title, author, and thumbnail.
* Download YouTube video thumbnail.
* Search YouTube videos using a query and get a list of results with thumbnails.
* Download thumbnail from any search result.
* Loading spinners and inline error messages to keep users informed.
* Simple, elegant UI with Tailwind CSS.

---

## 🖼 Demo / Preview

Project logo / icon:
![Project Logo](https://ik.imagekit.io/hassaan/HMK_Downloads_vuj_mqrA8N)

You can use the above URL as the project’s favicon or display logo.

---

## 🧰 Tech Stack

| Layer      | Technology / Library                |
| ---------- | ----------------------------------- |
| Frontend   | HTML, CSS, Tailwind CSS, vanilla JS |
| Backend    | Node.js, Express.js                 |
| Video API  | `ytdl-core` (or custom downloader)  |
| Search API | `npms-search` (or custom search)    |
| CORS       | `cors` middleware                   |

---

## 🚀 Getting Started

### Prerequisites

* Node.js (version 14+ recommended)
* npm or yarn

### Install & Run

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the backend server:

   ```bash
   node index.js
   ```

   or if you use `nodemon`:

   ```bash
   nodemon index.js
   ```

4. Open the `index.html` (or your frontend file) in browser, or serve it via a static server.

5. The backend runs on `http://localhost:3000` by default.

---

## 🧭 Usage

### YouTube Thumbnail

1. Go to the “YT Thumbnail” tab.
2. Paste a YouTube video URL.
3. Click **Get Video Content**.
4. The thumbnail will display below.
5. Click **Download Thumbnail** to save it.

### Facebook Video (Thumbnail)

1. Switch to “Facebook” tab.
2. Paste a Facebook video URL.
3. Click **Generate Video Content**.
4. The thumbnail or video preview will show if available.
5. Download if possible.

### Search Videos & Thumbnails

1. Switch to “Search Thumbnails” tab.
2. Enter a search term (video title, topic etc.).
3. Click **Search**.
4. The app sends `POST /search` and displays result cards including embedded video and thumbnail.
5. Click **Download Thumbnail** on any card to get its image.

---

## 🛠 API Endpoints

| Method | Path            | Body / Query Params           | Response                                                    |
| ------ | --------------- | ----------------------------- | ----------------------------------------------------------- |
| `POST` | `/yt-thumbnail` | `{ "url": "<YouTube URL>" }`  | `{ data: { developer, status, title, thumbnail, author } }` |
| `POST` | `/fb-down`      | `{ "url": "<Facebook URL>" }` | `{ success, data }`                                         |
| `POST` | `/search`       | `{ "SearchQuery": "<term>" }` | `{ success, data: [ videoObjects ] }`                       |

### Example Video Object (from search)

```json
{
  "type": "video",
  "videoId": "OoX490U-T-Y",
  "url": "https://youtube.com/watch?v=OoX490U-T-Y",
  "title": "Allah Humari Toba Ka Intezar Kyun Karta Hai | Molana Tariq Jameel Latest Bayan",
  "description": "...",
  "image": "https://i.ytimg.com/vi/OoX490U-T-Y/hq720.jpg",
  "thumbnail": "https://i.ytimg.com/vi/OoX490U-T-Y/hq720.jpg",
  "seconds": 359,
  "timestamp": "5:59",
  "duration": {
    "seconds": 359,
    "timestamp": "5:59"
  },
  "ago": "7 years ago",
  "views": 7324995,
  "author": {
    "name": "AJ Official",
    "url": "https://youtube.com/@AJ.Official"
  }
}
```

---

## ⚠️ Error Handling & Loading State

* Each tab shows a **loading spinner + message** while waiting for server responses.
* If something goes wrong (network error, invalid URL, server error), an **inline error message** appears in the same section.
* No full-page alerts (except for fallback).
* The UI remains responsive even on error.

---

## 🎯 Future Enhancements

* Add actual video download (mp4/audio) function.
* Support more platforms (Instagram, TikTok, etc.).
* Add pagination in search results.
* Add user authentication / saved history.
* Improve UI with themes (dark mode).
* Deploy backend + frontend to a live host.

---

## 📝 License

Specify your license here (MIT, Apache, etc.), for example:

This project is licensed under the **MIT License**.
See the [LICENSE](LICENSE) file for details.

---

**Thank you for using HMK Downloader.**