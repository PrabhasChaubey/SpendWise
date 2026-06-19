# 💸 SpendWise – AI-Powered Finance Platform

![SpendWise Banner](public/spendwise.png)

**SpendWise** is a full-stack AI-powered personal finance platform built with the MERN stack and TypeScript. It lets you track income and expenses, scan receipts with AI, visualize spending patterns, and receive automated monthly financial reports — all in one place.

---

## 🚀 Features

- 🔐 **JWT Authentication** – Secure login with protected routes and session management.
- 🧾 **AI Receipt Scanning** – Upload a receipt image and Gemini AI automatically extracts and categorizes the transaction.
- 📊 **Advanced Analytics** – MongoDB Aggregation Pipeline powers spending breakdowns, income vs expense trends, and category-wise insights rendered as interactive pie and line charts.
- 🔁 **Recurring Transactions** – Automate repeating income/expense entries using cron jobs.
- 📬 **Monthly AI Reports** – Auto-generated financial summaries with personalized insights delivered to your inbox via Resend.
- 📥 **CSV Import** – Bulk upload transactions from any CSV file.
- 🔍 **Filter & Search** – Filter transactions by date ranges, categories, and keywords.
- 🗑️ **Bulk Delete** – Select and delete multiple transactions at once.
- 🖼️ **Profile Management** – Upload and manage profile photos via Cloudinary.
- 🌗 **Responsive UI** – Clean, modern interface built with React and Tailwind CSS.

---

## 🧱 Tech Stack

| Layer       | Technology                                      |
|-------------|-------------------------------------------------|
| Frontend    | React.js, TypeScript, Tailwind CSS              |
| Backend     | Node.js, Express.js, REST APIs                  |
| Database    | MongoDB, Mongoose, Aggregation Pipeline         |
| Auth        | JWT (JSON Web Tokens)                           |
| AI          | Gemini AI (receipt scanning + report insights)  |
| Scheduler   | node-cron (recurring transactions + reports)    |
| Email       | Resend API                                      |
| File Upload | Cloudinary                                      |

---

## 🛠️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/spendwise.git
cd spendwise
```

### 2. Install Dependencies

Install both frontend and backend dependencies:

```bash
# Backend
cd backend
npm install

# Frontend
cd ../client
npm install
```

### 3. Set Up Environment Variables

In the `backend` folder, create a `.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=your_verified_sender_email

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

In the `client` folder, create a `.env` file:

```env
VITE_API_URL=http://localhost:5000
```

### 4. Run the Development Servers

```bash
# Start backend (from /server)
npm run dev

# Start frontend (from /client)
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 📁 Project Structure

```
spendwise/
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Route-level page components
│   │   ├── hooks/           # Custom React hooks
│   │   └── utils/           # Helper functions
│   └── package.json
│
├── backend/                  # Express backend
│   ├── src/
│   │   ├── controllers/     # Route handlers
│   │   ├── models/          # Mongoose schemas
│   │   ├── routes/          # API route definitions
│   │   ├── middleware/       # Auth, error handling
│   │   ├── jobs/            # node-cron scheduled tasks
│   │   └── utils/           # Gemini, Resend, Cloudinary helpers
│   └── package.json
│
└── README.md
```

---

## 🔑 Key Workflows

### AI Receipt Scanning
1. User uploads a receipt image
2. Image is sent to Gemini AI API
3. Gemini extracts merchant, amount, date, and category
4. Transaction is automatically created and saved

### Monthly Report Generation
1. node-cron triggers on the 1st of each month
2. Gemini AI analyses the previous month's transactions
3. Personalized financial summary is generated
4. Report is delivered to the user's email via Resend API

### Analytics Pipeline
MongoDB Aggregation Pipeline stages:
- `$match` — filter by user and date range
- `$group` — group by category and calculate totals
- `$sort` — order by amount descending
- `$project` — shape the output for the frontend charts

---

<!-- ## 📸 Screenshots

> Add screenshots of your dashboard, analytics charts, and receipt scanning flow here.

---

## 🚀 Deployment

- **Frontend** — Deployed on [Vercel](https://vercel.com)
- **Backend** — Deployed on [Render](https://render.com)
- **Database** — MongoDB Atlas

--- -->


