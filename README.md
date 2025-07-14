# 🎬 MoviePulse

**MoviePulse** is a modern web application that dynamically displays the most searched movies on the platform. It uses real-time user activity to rank trending movies, giving you insight into what's currently popular based on actual interest.

<!-- ![MoviePulse Banner](https://your-image-link-if-any.com) -->

---

## 🌟 Features

- 🔍 **Search-driven Popularity**: See movies ranked by how often users search for them.
- 🎞️ **Rich Movie Data**: Fetches posters, ratings, and overviews using [TMDB](https://www.themoviedb.org/).
- 📊 **Real-time Analytics**: Uses [Appwrite](https://appwrite.io/) to store and analyze search data.
- 💻 **Clean UI**: Simple and responsive design for all devices.
- 🔐 **No Login Required**: Instant access — just search and explore!

---

## 🧱 Tech Stack

| Layer       | Technology                           |
|-------------|--------------------------------------|
| Frontend    | HTML, Tailwindcss, JavaScript, React |
| Backend     | Appwrite (Functions, Database)       |
| Movie Data  | TMDB API                             |
| Hosting     | Netlify                              |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/moviepulse.git
cd moviepulse
```

### 2. Set Up Appwrite

- Install and configure [Appwrite](https://appwrite.io/docs/installation).
- Create a new project and database.
- Set up a `movies` collection to store search count per movie.
- (Optional) Add Appwrite Functions to handle search updates securely.

### 3. Get a TMDB API Key

- Sign up at [https://www.themoviedb.org/](https://www.themoviedb.org/).
- Go to Settings > API and generate an API key.

### 4. Configure Environment

Create a `.env` file in the root folder and add:

```env
VITE_TMDB_API_KEY=your_tmdb_key
VITE_APPWRITE_ENDPOINT=https://your-appwrite-url/v1
VITE_APPWRITE_PROJECT=your_project_id
VITE_APPWRITE_DATABASE=your_database_id
VITE_APPWRITE_COLLECTION=your_collection_id
```

### 5. Run the App

```bash
npm install
npm run dev
```

Open your browser and visit: `http://localhost:5173`

---

## 📸 Demo

![Uploading image.png…]()


---

## 🤝 Contributing

Contributions are welcome! If you’d like to fix bugs, improve UI, or add features:

1. Fork the repository  
2. Create a new branch: `git checkout -b feature/your-feature-name`  
3. Commit your changes: `git commit -m 'Add some feature'`  
4. Push to the branch: `git push origin feature/your-feature-name`  
5. Open a pull request

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🙌 Acknowledgements

- [Appwrite](https://appwrite.io/) — Backend as a Service  
- [TMDB API](https://www.themoviedb.org/) — Movie data provider
