# Web Scraping Project

This project is a web scraper that extracts data from dynamically rendered websites using Puppeteer.

## 🚀 Features
- Headless browser automation with Puppeteer  
- Handles dynamic content loading  
- Extracts location-based data  
- Environment variable support for security  

## 🔧 Installation
1. Clone this repository:  
   ```bash
   git clone https://github.com/fitrirdz/web-scraping.git
   cd web-scraping
   ```
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Create a `.env` file and add:  
   ```env
   SITE_URL=your_target_url
   ```
4. Run the scraper:  
   ```bash
   node scraper.js
   ```

## 📌 Notes
- Ensure Puppeteer dependencies are installed (`sudo apt install chromium` for Linux users).  
- Modify the `.env` file to target different pages.  
- Handle dynamic selectors if necessary.  

## 📄 License
This project is for educational purposes only.
