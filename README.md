# DEEPval — Full Stack E-Commerce Application

A full-stack e-commerce web application built with **React**, featuring a dual-portal system for both **Admin** and **User** roles. Admins can manage the product catalogue, while users can browse, view, and purchase products.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Getting Started](#getting-started)
- [Environment & API Configuration](#environment--api-configuration)
- [Available Routes](#available-routes)
- [Component Reference](#component-reference)
- [Styling System](#styling-system)
- [Future Improvements](#future-improvements)

---

## Overview

DEEPval is a role-based e-commerce platform with two separate portals:

- **Admin Portal** — register/login as an admin, add products, edit existing listings, delete items, and view detailed product pages.
- **User Portal** — register/login as a user, browse the product catalogue, view product details, and add items to cart or buy directly.

The application uses a JSON-based REST API (via `json-server` or a compatible backend) to persist product, admin, and user data.

---

## Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Frontend   | React 18, React Router DOM v6     |
| HTTP       | Axios                             |
| Styling    | Custom CSS (component-scoped)     |
| UI Extras  | React Bootstrap (Dropdown), React Toastify |
| Fonts      | Orbitron, Rajdhani, Exo 2, Share Tech Mono (Google Fonts) |
| Backend    | JSON Server (REST API mock)       |
| Runtime    | Node.js                           |

---

## Project Structure

```
deepval/
├── public/
├── src/
│   ├── config/
│   │   └── api.js                  # Centralized API base URLs
│   ├── Components/
│   │   ├── LandingPage.jsx         # Role selection screen
│   │   ├── ErrorPage.jsx           # 404 fallback
│   │   │
│   │   ├── ── Admin ──
│   │   ├── AdminLogin.jsx
│   │   ├── AdminSignUp.jsx
│   │   ├── AdminHomePage.jsx       # Admin layout + nested routes
│   │   ├── AdminNavBar.jsx
│   │   ├── Dashboard.jsx           # Product management grid
│   │   ├── AddProducts.jsx         # Add new product form
│   │   ├── UpdateProduct.jsx       # Edit existing product form
│   │   ├── ViewProduct.jsx         # Admin product detail view
│   │   ├── Profile.jsx             # Shared dropdown profile menu
│   │   │
│   │   └── ── User ──
│   │       ├── UserLogin.jsx
│   │       ├── UserSignUp.jsx
│   │       ├── UserHomePage.jsx    # User layout + nested routes
│   │       ├── UserNavbar.jsx
│   │       ├── UserDashboard.jsx   # Product browsing grid
│   │       └── UserViewProduct.jsx # User product detail + buy/cart
│   │
│   ├── Styles/
│   │   ├── global.css              # CSS variables & reset
│   │   ├── LandingPage.css
│   │   ├── AdminLogin.css
│   │   ├── AdminSignUp.css
│   │   ├── AdminNavBar.css
│   │   ├── AdminHomePage.css
│   │   ├── Dashboard.css
│   │   ├── AddProducts.css
│   │   ├── UpdateProduct.css
│   │   ├── ViewProduct.css
│   │   ├── UserLogin.css
│   │   ├── UserSignUp.css
│   │   ├── UserNavBar.css
│   │   ├── UserDashboard.css
│   │   └── UserViewProduct.css
│   │
│   ├── App.jsx                     # Root router
│   └── main.jsx                    # React entry point
│
├── db.json                         # JSON Server database
├── package.json
└── README.md
```

---

## Features

### Admin Portal
- ✅ Admin registration and login (credential-based)
- ✅ Add new products with name, category, brand, price, description, stock, ratings, and image URL
- ✅ Edit any existing product via a pre-filled update form
- ✅ Delete products with a confirmation prompt
- ✅ View detailed product info page
- ✅ Product search via navbar input
- ✅ Toast notifications for all CRUD operations

### User Portal
- ✅ User registration and login
- ✅ Browse all available products in a responsive grid
- ✅ View detailed product page with offer pricing (15% off MRP)
- ✅ Add to cart button (UI ready)
- ✅ Buy Now navigation to product detail
- ✅ Toast notifications on login success/failure

### Shared
- ✅ Fully responsive layouts (mobile, tablet, desktop)
- ✅ Futuristic black & purple theme with neon accents
- ✅ Animated card entrance effects
- ✅ Profile dropdown menu (React Bootstrap)
- ✅ 404 error page with home navigation

---

## Getting Started

### Prerequisites

- Node.js `v16+`
- npm `v8+`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/deepval.git
cd deepval

# 2. Install dependencies
npm install

# 3. Start the JSON Server backend (in a separate terminal)
npx json-server --watch db.json --port 1001

# 4. Start the React development server
npm run dev
```

The app will be available at `http://localhost:5173` (Vite default).  
The API will be running at `http://localhost:1001`.

### Sample `db.json`

```json
{
  "Products": [],
  "Admin": [
    {
      "id": 1,
      "U_name": "Admin",
      "email": "admin@deepval.com",
      "password": "admin123",
      "age": "30",
      "phone": "9999999999",
      "profile": ""
    }
  ],
  "User": []
}
```

---

## Environment & API Configuration

All API base URLs are centralized in `src/config/api.js`. Update this file if your backend runs on a different host or port.

```js
// src/config/api.js

export const PRODUCT_API = "http://localhost:1001";
export const AUTH_API    = "http://localhost:1001";
export const USER_API    = "http://localhost:1001";
```

> If you deploy the backend separately, replace the localhost URLs with your hosted API base URL here — no other files need to change.

---

## Available Routes

| Path                                    | Component          | Access |
|-----------------------------------------|--------------------|--------|
| `/`                                     | LandingPage        | Public |
| `/admin-login`                          | AdminLogin         | Public |
| `/admin-signup`                         | AdminSignUp        | Public |
| `/admin-homepage`                       | AdminHomePage      | Admin  |
| `/admin-homepage/` *(index)*            | Dashboard          | Admin  |
| `/admin-homepage/add-products`          | AddProducts        | Admin  |
| `/admin-homepage/viewproduct/:id`       | ViewProduct        | Admin  |
| `/admin-homepage/updateproduct/:id`     | UpdateProduct      | Admin  |
| `/user-login`                           | UserLogin          | Public |
| `/user-signup`                          | UserSignUp         | Public |
| `/user-homepage`                        | UserHomePage       | User   |
| `/user-homepage/` *(index)*             | UserDashboard      | User   |
| `/user-homepage/userviewproduct/:id`    | UserViewProduct    | User   |
| `*`                                     | ErrorPage          | Public |

---

## Component Reference

### `AddProducts.jsx` / `UpdateProduct.jsx`
Form components for creating and editing products. Both share the same field set:

| Field    | Type   | Notes                          |
|----------|--------|--------------------------------|
| Prname   | text   | Product name                   |
| category | select | 20 predefined categories       |
| brand    | select | 20 predefined brands           |
| price    | text   | Numeric string                 |
| desc     | text   | Short description              |
| stock    | text   | Numeric string                 |
| ratings  | text   | e.g. `4.5`                     |
| image    | text   | Direct image URL               |

### `Dashboard.jsx`
Renders all products in a grid. Provides **Edit** (navigates to update form) and **Remove** (DELETE request with confirmation) actions per card.

### `UserDashboard.jsx`
Renders all products for browsing. Provides **Buy Now** (navigates to detail view) and **Add to Cart** (UI ready, logic to be implemented) per card.

### `Profile.jsx`
A shared React Bootstrap `Dropdown` component used in both `AdminNavBar` and `UserNavbar`. Contains links for Profile & Privacy, Account Settings, and Logout.

---

## Styling System

All styles use a centralized CSS variable system defined in `global.css` and imported per component.

### Futuristic Theme — Admin Dashboard (`Dashboard.css`)
- **Font:** `Orbitron` (display) + `Rajdhani` (body)
- **Style:** Cyberpunk — angular clip-path corners, HUD targeting brackets, CRT scanlines
- **Accent:** Violet `#7c3aed`, Neon Pink `#e040fb`, Cyan `#00e5ff`

### Futuristic Theme — User Dashboard (`UserDashboard.css`)
- **Font:** `Exo 2` (display) + `Share Tech Mono` (mono/data)
- **Style:** Holographic terminal — neon grid background, moving scan line over images, notched card geometry
- **Accent:** Purple `#a259ff`, Magenta `#d946ef`, Neon Green `#39ff9a`

### Key CSS Variables (`global.css`)

```css
--bg-primary:    #0a0a0f     /* Page background      */
--bg-card:       #16161f     /* Card surface         */
--accent:        #6c63ff     /* Primary purple       */
--accent-secondary: #ff6584  /* Coral / pink         */
--accent-tertiary:  #43e97b  /* Mint green           */
--text-primary:  #f0f0f8     /* Main text            */
--text-muted:    #5a5a7a     /* Subdued labels       */
--font-display:  'Syne'      /* Headings             */
--font-body:     'DM Sans'   /* Body copy            */
```

---


## Future Improvements

- 🔐 **JWT-based authentication** — replace client-side credential filtering with server-issued tokens
- 🛒 **Cart functionality** — persist cart state with `localStorage` or a `/Cart` API endpoint
- 🔍 **Working search** — wire up the navbar search input to filter the displayed product grid
- 📦 **Order management** — admin panel to view and manage placed orders
- 🖼️ **Image upload** — replace image URL input with direct file upload (Cloudinary / S3)
- 📄 **Pagination** — add page controls for large product catalogues
- 🔒 **Protected routes** — use React Router `<Navigate>` guards to block unauthenticated access

---

## License

This project is for educational/personal use. Feel free to fork and extend.

---

> Built with ⚡ by DEEPval
