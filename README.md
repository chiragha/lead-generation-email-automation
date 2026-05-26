# Singing Bowl Lead Automation System

A full-stack web automation application built using React.js, Node.js, Express.js, and web scraping technologies to automate lead discovery for singing bowl-related businesses and wellness niches.
## Project Overview

This project automates the process of searching and collecting potential business leads related to keywords such as **singing bowls, meditation, wellness, sound healing, yoga, and therapy products**.

The system allows users to enter a keyword, automatically searches relevant websites, extracts useful business/product information, generates campaign results, enables CSV export, and displays results through a dashboard.

This project demonstrates:

- Automated lead discovery using web scraping
- Full-stack MERN architecture
- API integration
- Search and filtering functionality
- Data scraping and processing
- Responsive frontend UI

---

## Features

### Keyword-Based Search
Users can search using niche-related keywords such as:

- Singing Bowl
- Meditation
- Wellness
- Sound Healing
- Yoga Therapy
- Chakra Healing

### Automated Data Extraction
The application automatically:

- Visits target websites
- Searches relevant products/businesses
- Extracts useful information
- Stores results for viewing

### Dashboard Interface
- Search input for keywords
- Lead listing table
- Dynamic results rendering
- Error handling for failed searches

### Backend API
REST APIs built with Node.js and Express.js for:

- Triggering search automation
- Fetching lead data
- Managing application flow

### Campaign Results
- Displays extracted lead information
- Shows keyword-based search results
- Dynamic lead rendering in dashboard

### CSV Export
- Export extracted leads into CSV format
- Download structured lead data
- Easy reporting and sharing

### Email Communication
- Email support using Nodemailer
- Automated notifications/workflow support

---

## Tech Stack

frontend
- React.js
- HTML5
- CSS3
- JavaScript

backend/
│── controllers/
│── routes/
│── services/
│── utils/
│── index.js

### Data Extraction / Scraping
- Axios
- Cheerio
- Google Search API (`google-it`)

### Export & Communication
- json2csv
- Nodemailer

### Utilities
- dotenv
- CORS
- Express Rate Limit

### Version Control
- Git & GitHub
  
---
## Project Structure

```bash
project-root/
│── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── services/
│
│── backend/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── config/
│   └── server.js
│
│── README.md
```

---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

### 2. Navigate to Project

```bash
cd project-name
```

### 3. Install Dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd backend
npm install
```

### 4. Environment Variables

Create a `.env` file inside backend:

```env
PORT=3000
EMAIL_USER=your_email
EMAIL_PASS=your_password
```

### 5. Run the Project

#### Start Backend

```bash
npm start
```

#### Start Frontend

```bash
npm run dev
```

---

## How It Works

1. User enters a keyword in the search box.
2. Backend receives the keyword request.
3. Relevant websites are searched dynamically.
4. Google search and scraping logic identify relevant sources.
5. HTML content is fetched and parsed using Cheerio.
6. Lead-related information is extracted and processed.
7. Campaign results are generated and displayed.
8. Users can export results into CSV format.
---

## Challenges Faced

- Handling dynamic website structures
- Managing scraping delays and loading states
- Error handling for unavailable pages
- Structuring reusable scraping logic



## Demo

### Screenshots
<img width="1365" height="622" alt="success" src="https://github.com/user-attachments/assets/d85ac690-124d-4de6-b116-1c68d4b17cea" />
<img width="1366" height="775" alt="send_email" src="https://github.com/user-attachments/assets/0d3b6674-eafb-4145-bc34-4290587d85c0" />

<img width="1361" height="703" alt="campaign_start" src="https://github.com/user-attachments/assets/ecc99814-8822-450f-86b9-d7efd17440ef" />

---

## Author

**Shivani Sinha**

Software Developer | MERN Stack Developer

GitHub: YOUR_GITHUB_PROFILE_LINK
