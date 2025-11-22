# 🔗 URL Shortener App  
A simple and efficient URL Shortener built using **Next.js (App Router)**, **Tailwind CSS**, and **MongoDB**.  
It converts long URLs into short, clean, and shareable links using custom short codes.

---

## 🚀 Features
- Convert long URLs into short URLs  
- User-defined **shorturl** (custom short code)  
- Prevent duplicate short URLs  
- MongoDB database integration  
- Automatic redirect using dynamic routing  
- Clean and responsive UI  
- Proper error handling & validation  

---

## 🛠️ Tech Stack
- **Next.js 14**  
- **Tailwind CSS**  
- **MongoDB Atlas 
- **JavaScript (ES6)**  
- **Node.js**

---

## 🧠 How It Works
1. User enters **long URL** and a **shorturl** (custom code)  
2. Frontend sends a POST request to `/api/generate`  
3. API validates the data  
4. Connects to MongoDB  
5. Checks if the shorturl already exists  
6. Saves `{ url, shorturl }` in DB  
7. Returns the generated short link  
8. When someone visits `shorturl` → user is redirected to the original long URL

