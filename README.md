# Blissboard

Blissboard is a platform for creating **beautiful digital event invitations** using customizable templates.
Users can sign up, purchase templates, provide event details, and receive a hosted live invitation link.
Admins manage orders, template customization, and delivery.

---

## Project Overview

Blissboard simplifies the event invitation process by combining:

- **Template browsing & selection**
- **Secure payments**
- **Custom event data collection**
- **Admin customization**
- **Delivery of a hosted invitation link**

---

## Technical Architecture

### **Frontend**

- Framework: **Next.js (TypeScript)**
- Styling: **TailwindCSS**
- Authentication: **NextAuth.js**
- Deployment: **Vercel**

### **Backend / Database**

- **Supabase (Postgres)** or MongoDB Atlas
- **Prisma ORM** for DB management

### **Payments**

- **Paystack** (primary, Nigeria-based)
- **Stripe** (optional for global expansion)

### **File Storage**

- **Cloudinary** for image/file uploads

### **Notifications**

- **Resend / SendGrid** for email updates

### **Admin Panel**

- Next.js admin routes (`/admin`)
- Order management, event data review, status updates

---

## Folder Structure

```bash
blissboard/
│── components/       # Reusable UI components
│── pages/            # Next.js pages (templates, checkout, dashboard, admin, etc.)
│── prisma/           # Database schema and migrations
│── public/           # Static assets
│── styles/           # Tailwind CSS configs
│── utils/            # Helpers and utilities
│── README.md
```
