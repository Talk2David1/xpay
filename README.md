# xxxPay Dashboard Client

A modern React frontend for the xxxPay financial dashboard.

## Features

- 📊 Dashboard with wallet overview and transaction analytics
- 💰 Multi-currency wallet management (NGN, USDT, etc.)
- 📈 Real-time swap rates and charts
- 📋 Transaction history and statistics
- 🎨 Modern UI with Tailwind CSS
- 📱 Responsive design

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **Recharts** - Charts and data visualization
- **Lucide React** - Icons
- **Axios** - HTTP client

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## Project Structure

```
client/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── App.jsx        # Main app component
│   ├── main.jsx       # Entry point
│   └── index.css      # Global styles
├── public/            # Static assets
└── package.json       # Dependencies and scripts
```

## Components

- **Layout** - Main layout with sidebar and header
- **Sidebar** - Navigation menu
- **Header** - Top bar with user info and currency selector
- **WalletCard** - Wallet balance display
- **SwapRates** - Live exchange rates
- **Overview** - Transaction analytics chart
- **TransactionStats** - Transaction statistics grid

## Pages

- **Dashboard** - Main overview page
- **Wallets** - Wallet management
- **Transactions** - Transaction history
- **Payment** - Payment processing
- **Settings** - App settings