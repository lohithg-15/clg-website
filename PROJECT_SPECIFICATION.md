# 🎓 COLLEGE WEBSITE PROJECT - COMPLETE SPECIFICATION
## Hackathon Submission: Malnad College of Engineering

---

## 📌 PROJECT OVERVIEW

**Objective:** Build a professional, full-stack college website with a modern responsive frontend, robust backend API, database integration, and admin CMS panel.

**Team:** Computer Science Engineering Students, MCE Hassan  
**Hackathon:** College Website Development Challenge  
**Submission Format:** Deployed on Vercel + GitHub Repository

---

## 🏗️ TECHNOLOGY STACK

### **Frontend**
- **Framework:** Next.js 14 (App Router) + React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom CSS
- **UI Components:** Shadcn/UI + Lucide Icons
- **Animations:** Framer Motion
- **HTTP Client:** Axios
- **State Management:** React Context / Zustand (for admin)
- **Forms:** React Hook Form + Zod validation

### **Backend**
- **Runtime:** Node.js
- **Framework:** Next.js API Routes (built into Next.js)
- **Authentication:** JWT (JSON Web Tokens)
- **Password Hashing:** bcryptjs
- **Validation:** Zod

### **Database**
- **Database:** MongoDB (Cloud Atlas - Free Tier)
- **ORM:** Mongoose
- **Document Structure:** BSON

### **Deployment**
- **Frontend & API:** Vercel (Free Tier)
- **Database:** MongoDB Atlas (Free Tier)
- **Domain:** Vercel auto-assigned (vercel.app)
- **Repository:** GitHub (Public)

### **Additional Tools**
- **Image Hosting:** Cloudinary (Optional - Free Tier)
- **Email:** NodeMailer (Gmail SMTP)
- **Version Control:** Git + GitHub
- **Build Tool:** Next.js Built-in

---

## ✨ FEATURES & REQUIREMENTS

### **Public Website Features**

#### 1. **Homepage**
- Hero section with rotating banner/slider
- "Why Choose MCE" section (key highlights)
- Latest news carousel
- Upcoming events section
- Featured departments grid
- Testimonials/Success stories carousel
- Quick stats (students, faculty, placements, etc.)
- Call-to-action buttons (Admissions, Apply Now)

#### 2. **About Page**
- College introduction & history
- Vision & Mission statements
- About the institution
- Accreditations & Rankings display (NIRF, NBA, NAAC, etc.)
- Leadership team (Principal, faculty leads)
- Notable achievements

#### 3. **Academics Page**
- Department listings with cards
- Programs offered (B.E, M.Tech, Research)
- Course details
- Faculty directory with filters
- Department head contacts
- Research highlights
- Collaboration/Partnerships info

#### 4. **Admissions Page**
- Admission requirements
- Application process
- Important dates/deadlines
- Scholarship information
- Fee structure
- Download prospectus (PDF)
- FAQ section
- Contact form for inquiries

#### 5. **Placements Page**
- Placement statistics (bar/pie charts)
- Recruiting companies logo gallery
- Placement process timeline
- Testimonials from placed students
- Top packages/average salary info
- Company visit announcements

#### 6. **Gallery Page**
- Campus photo gallery with filters
- Event images
- Infrastructure showcase
- Responsive lightbox/modal view
- Image lazy loading

#### 7. **News & Events**
- News listing page with pagination
- Individual news detail page
- Events calendar view
- Event detail pages
- Latest news feed

#### 8. **Contact Page**
- Contact form with validation
- College address, phone, email
- Google Maps embed (location)
- Department contacts directory
- Social media links

#### 9. **Dynamic Pages**
- About departments (generated from DB)
- Faculty profiles (detailed pages)
- Event detail pages

### **Admin Panel Features (CMS)**

#### 1. **Admin Authentication**
- Login page (email/password)
- JWT token-based sessions
- 7-day token expiry
- Role-based access control (Super Admin, Admin, Editor)
- Protected routes
- Logout functionality

#### 2. **Dashboard**
- Overview statistics (total news, events, faculty, etc.)
- Recent activity log
- Quick action buttons
- Charts/analytics (optional)

#### 3. **News Management**
- List all news with pagination
- Create new news post
- Edit existing news
- Delete news
- Bulk actions (publish/draft)
- Search & filter functionality
- Rich text editor for content
- Image upload integration
- Status: Draft/Published

#### 4. **Events Management**
- List all events
- Create event
- Edit event details
- Delete event
- Status management (Upcoming/Ongoing/Completed)
- Event categorization (Academic, Cultural, Sports, Placement, Technical)
- Event registrations (if enabled)

#### 5. **Faculty Management**
- Add new faculty member
- Edit faculty details
- Delete faculty
- Bulk upload (CSV)
- Faculty filters by department
- Faculty search
- Profile picture upload
- Designation management

#### 6. **Department Management**
- Add new department
- Edit department details
- Delete department
- Department head assignment
- Program management
- Vision/Mission editing

#### 7. **Content Management**
- Manage homepage content
- Edit static pages (About, Vision-Mission, etc.)
- Banner/Slider management
- FAQ management
- College statistics update

#### 8. **Contact Messages**
- View submitted contact forms
- Mark as replied/archived
- Delete messages
- Export contacts (CSV)

#### 9. **File/Media Management**
- Upload images for news, events, gallery
- Image optimization
- Gallery album management
- File organization

#### 10. **User Management** (Super Admin only)
- Add new admin user
- Edit admin details
- Assign roles (Admin, Editor)
- Deactivate users
- Reset password

#### 11. **Settings**
- College name, address, contact info
- Social media links
- Email configuration
- Website metadata
- Branding colors (optional)

---

## 🗄️ DATABASE SCHEMA & MODELS

### **1. Admin User Model**
```
Admin {
  _id: ObjectId
  name: String
  email: String (unique)
  password: String (hashed)
  role: enum['super-admin', 'admin', 'editor']
  isActive: Boolean
  lastLogin: Date
  createdAt: Timestamp
  updatedAt: Timestamp
}
```

### **2. News Model**
```
News {
  _id: ObjectId
  title: String (required, max 200)
  description: String (required, max 500)
  content: String (required, rich text)
  image: String (URL)
  date: Date (default: current)
  author: String
  featured: Boolean (default: false)
  status: enum['draft', 'published']
  views: Number (default: 0)
  category: String (optional)
  createdAt: Timestamp
  updatedAt: Timestamp
}
```

### **3. Event Model**
```
Event {
  _id: ObjectId
  title: String (required)
  description: String (required)
  date: Date (required)
  time: String (required, HH:MM format)
  location: String (required)
  image: String (URL)
  category: enum['academic', 'cultural', 'sports', 'technical', 'placement', 'other']
  registrationLink: String (optional)
  status: enum['upcoming', 'ongoing', 'completed']
  createdAt: Timestamp
  updatedAt: Timestamp
}
```

### **4. Faculty Model**
```
Faculty {
  _id: ObjectId
  name: String (required)
  email: String (required)
  phone: String
  department: String (required, references Department.code)
  designation: enum['Professor', 'Associate Professor', 'Assistant Professor', 'Lecturer']
  qualification: String (required, e.g., B.Tech, M.Tech, PhD)
  specialization: String
  image: String (profile photo URL)
  experience: Number (in years)
  research: String (research interests)
  officeLocation: String
  createdAt: Timestamp
  updatedAt: Timestamp
}
```

### **5. Department Model**
```
Department {
  _id: ObjectId
  name: String (required, unique)
  code: String (required, unique, e.g., CSE, ECE, etc.)
  description: String (required)
  image: String (department photo)
  headName: String (required)
  headEmail: String (required)
  established: Number (year)
  programs: Array[String] (e.g., ['B.E', 'M.Tech'])
  vision: String (optional)
  mission: String (optional)
  overview: String (detailed description)
  createdAt: Timestamp
  updatedAt: Timestamp
}
```

### **6. Contact Message Model**
```
Contact {
  _id: ObjectId
  name: String (required)
  email: String (required)
  phone: String (required)
  subject: String (required)
  message: String (required)
  status: enum['new', 'replied', 'archived']
  createdAt: Timestamp
  updatedAt: Timestamp
}
```

### **7. Settings Model** (Optional)
```
Settings {
  _id: ObjectId
  siteName: String
  siteDescription: String
  address: String
  phone: String
  email: String
  socialMedia: {
    facebook: String,
    twitter: String,
    instagram: String,
    linkedin: String
  }
  primaryColor: String (hex)
  secondaryColor: String (hex)
  updatedAt: Timestamp
}
```

---

## 🔌 API ENDPOINTS

### **Authentication Endpoints**
```
POST   /api/auth/login              - Admin login (email, password)
POST   /api/auth/logout             - Logout (client-side)
POST   /api/auth/verify             - Verify token validity
```

### **News Endpoints**
```
GET    /api/news                    - Get all published news (paginated)
GET    /api/news?featured=true      - Get featured news
GET    /api/news/[id]               - Get single news detail
POST   /api/news                    - Create news (admin only)
PUT    /api/news/[id]               - Update news (admin only)
DELETE /api/news/[id]               - Delete news (admin only)
```

### **Events Endpoints**
```
GET    /api/events                  - Get all events (paginated)
GET    /api/events?status=upcoming  - Get events by status
GET    /api/events/[id]             - Get event detail
POST   /api/events                  - Create event (admin only)
PUT    /api/events/[id]             - Update event (admin only)
DELETE /api/events/[id]             - Delete event (admin only)
```

### **Faculty Endpoints**
```
GET    /api/faculty                 - Get all faculty (paginated)
GET    /api/faculty?department=CSE  - Get faculty by department
GET    /api/faculty/[id]            - Get faculty detail
POST   /api/faculty                 - Create faculty (admin only)
PUT    /api/faculty/[id]            - Update faculty (admin only)
DELETE /api/faculty/[id]            - Delete faculty (admin only)
```

### **Department Endpoints**
```
GET    /api/departments             - Get all departments
GET    /api/departments/[code]      - Get department detail
POST   /api/departments             - Create department (admin only)
PUT    /api/departments/[code]      - Update department (admin only)
DELETE /api/departments/[code]      - Delete department (admin only)
```

### **Contact Endpoints**
```
POST   /api/contact                 - Submit contact form (public)
GET    /api/contact                 - Get all messages (admin only)
PUT    /api/contact/[id]            - Update message status (admin only)
DELETE /api/contact/[id]            - Delete message (admin only)
```

### **Gallery Endpoints** (Optional)
```
GET    /api/gallery                 - Get all gallery images
POST   /api/gallery                 - Upload image (admin only)
DELETE /api/gallery/[id]            - Delete image (admin only)
```

---

## 🎨 FRONTEND STRUCTURE

### **Pages (Public)**
```
/                          - Homepage
/about                     - About college
/academics                 - Academics & departments
/academics/[dept]          - Department detail
/faculty                   - Faculty directory
/faculty/[id]              - Faculty profile
/admissions                - Admissions info
/placements                - Placements page
/gallery                   - Photo gallery
/news                      - News listing
/news/[id]                 - News detail
/events                    - Events calendar/listing
/events/[id]               - Event detail
/contact                   - Contact page
```

### **Admin Pages (Protected)**
```
/admin/login               - Login page
/admin/dashboard           - Admin dashboard
/admin/news                - News management
/admin/news/create         - Create news
/admin/news/[id]/edit      - Edit news
/admin/events              - Events management
/admin/events/create       - Create event
/admin/events/[id]/edit    - Edit event
/admin/faculty             - Faculty management
/admin/faculty/create      - Add faculty
/admin/faculty/[id]/edit   - Edit faculty
/admin/departments         - Department management
/admin/departments/create  - Add department
/admin/departments/[code]/edit - Edit department
/admin/contact             - Contact messages
/admin/gallery             - Gallery management
/admin/users               - User management (super-admin)
/admin/settings            - Settings
```

### **Reusable Components**
```
/components
  ├── Navbar.tsx              - Navigation bar
  ├── Footer.tsx              - Footer
  ├── Hero.tsx                - Hero section
  ├── NewsCard.tsx            - News card component
  ├── EventCard.tsx           - Event card component
  ├── DepartmentCard.tsx      - Department card
  ├── FacultyCard.tsx         - Faculty profile card
  ├── FormInput.tsx           - Reusable form input
  ├── Modal.tsx               - Modal dialog
  ├── Pagination.tsx          - Pagination controls
  ├── LoadingSpinner.tsx      - Loading indicator
  ├── AdminSidebar.tsx        - Admin panel sidebar
  ├── AdminHeader.tsx         - Admin panel header
  ├── ProtectedRoute.tsx      - Route protection HOC
  └── ...
```

---

## 🔐 SECURITY FEATURES

✅ **JWT Token-based Authentication**  
✅ **Password Hashing (bcryptjs)**  
✅ **Protected API Routes (Token Verification)**  
✅ **Protected Frontend Pages (ProtectedRoute wrapper)**  
✅ **Role-based Access Control (RBAC)**  
✅ **Environment Variables (.env.local)**  
✅ **CORS Configuration** (for API)  
✅ **Input Validation** (Zod schemas)  
✅ **SQL Injection Prevention** (MongoDB parameterized queries)  

---

## 📊 PERFORMANCE & OPTIMIZATION

✅ **Image Optimization** (Next.js Image component)  
✅ **Lazy Loading** (Images, components)  
✅ **Code Splitting** (Next.js automatic)  
✅ **Server-Side Rendering (SSR)** for pages  
✅ **Static Generation (SSG)** for public pages  
✅ **API Response Caching** (optional)  
✅ **Responsive Design** (Mobile-first, Tailwind)  
✅ **Accessibility (A11y)** (Semantic HTML, ARIA)  

---

## 📦 PROJECT STRUCTURE

```
college-website/
├── src/
│   ├── app/
│   │   ├── api/                    # API routes
│   │   │   ├── auth/
│   │   │   │   └── login/
│   │   │   ├── news/
│   │   │   ├── events/
│   │   │   ├── faculty/
│   │   │   ├── departments/
│   │   │   └── contact/
│   │   ├── admin/                  # Admin pages
│   │   │   ├── login/
│   │   │   ├── dashboard/
│   │   │   ├── news/
│   │   │   ├── events/
│   │   │   ├── faculty/
│   │   │   ├── departments/
│   │   │   ├── contact/
│   │   │   ├── gallery/
│   │   │   ├── users/
│   │   │   └── settings/
│   │   ├── (public)/               # Public pages
│   │   │   ├── page.tsx            # Home
│   │   │   ├── about/
│   │   │   ├── academics/
│   │   │   ├── admissions/
│   │   │   ├── placements/
│   │   │   ├── gallery/
│   │   │   ├── news/
│   │   │   ├── events/
│   │   │   └── contact/
│   │   ├── layout.tsx              # Root layout
│   │   └── globals.css             # Global styles
│   ├── components/                 # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   └── ...
│   ├── lib/                        # Utility functions
│   │   ├── db.ts                   # MongoDB connection
│   │   ├── auth.ts                 # JWT utilities
│   │   └── api.ts                  # API helpers
│   ├── models/                     # Mongoose models
│   │   ├── News.ts
│   │   ├── Event.ts
│   │   ├── Faculty.ts
│   │   ├── Department.ts
│   │   ├── Contact.ts
│   │   └── Admin.ts
│   ├── types/                      # TypeScript types
│   │   └── index.ts
│   ├── hooks/                      # Custom React hooks
│   │   ├── useAuth.ts
│   │   └── useFetch.ts
│   └── styles/                     # Additional styles
├── public/                         # Static assets
│   ├── images/
│   ├── icons/
│   └── ...
├── .env.local                      # Environment variables
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── README.md
└── vercel.json (optional)
```

---

## 🚀 DEPLOYMENT STRATEGY

### **Step 1: Local Development**
- Clone repository
- Install dependencies (`npm install`)
- Configure `.env.local` with MongoDB URI and JWT secret
- Run local dev server (`npm run dev`)
- Test all features locally

### **Step 2: GitHub Repository**
- Create public GitHub repository
- Push code with clean commit history
- README.md with setup instructions
- .gitignore to exclude node_modules, .env.local, .next

### **Step 3: MongoDB Atlas Setup**
- Create free MongoDB Atlas cluster
- Get connection string
- Configure IP whitelist (allow all for hackathon)
- Add connection string to Vercel environment variables

### **Step 4: Vercel Deployment**
- Connect GitHub repository to Vercel
- Configure environment variables in Vercel dashboard:
  - `MONGODB_URI`
  - `JWT_SECRET`
  - `ADMIN_EMAIL`
  - `ADMIN_PASSWORD`
  - `NEXT_PUBLIC_API_URL`
- Deploy (Vercel auto-deploys on git push)
- Get live URL (e.g., college-website.vercel.app)

### **Step 5: Post-Deployment**
- Test all API endpoints
- Verify admin login and CMS functions
- Check database connections
- Test image uploads
- Verify responsive design on mobile

---

## 📋 DEFAULT CREDENTIALS (For Hackathon)

```
Email: admin@mcehassan.ac.in
Password: Admin@123
```

⚠️ *Change these after deployment!*

---

## ✅ HACKATHON EVALUATION CRITERIA

### **Functionality** (25%)
- ✅ All pages load correctly
- ✅ API endpoints working
- ✅ Database integration functional
- ✅ Admin CMS operational
- ✅ Form validations working
- ✅ Authentication secure

### **Code Quality** (20%)
- ✅ Clean, readable code
- ✅ TypeScript types properly used
- ✅ Proper error handling
- ✅ Modular component structure
- ✅ No hardcoded values
- ✅ Environment variables used

### **UI/UX** (20%)
- ✅ Modern, professional design
- ✅ Responsive (mobile, tablet, desktop)
- ✅ Fast loading times
- ✅ Intuitive navigation
- ✅ Consistent styling
- ✅ Smooth animations/transitions

### **Completeness** (20%)
- ✅ All required features implemented
- ✅ Admin panel fully functional
- ✅ All CRUD operations working
- ✅ Deployed and accessible
- ✅ Documentation clear
- ✅ GitHub repository clean

### **Originality & Polish** (15%)
- ✅ Not a copy of existing templates
- ✅ Custom styling and design
- ✅ Extra features (analytics, charts, etc.)
- ✅ Performance optimizations
- ✅ Professional appearance
- ✅ Attention to detail

---

## 🎯 DELIVERABLES

1. **GitHub Repository**
   - Clean code with meaningful commits
   - Comprehensive README.md
   - Setup instructions
   - Environment variables example (.env.example)

2. **Deployed Website**
   - Live on Vercel
   - All features working
   - Admin CMS functional
   - Database connected

3. **Documentation**
   - API documentation (Postman collection or in README)
   - Admin user guide
   - Feature list
   - Known limitations (if any)

4. **Demo Credentials**
   - Admin login (email/password)
   - Sample data populated in database
   - All features ready to demo

---

## ⏱️ ESTIMATED TIMELINE

| Phase | Duration | Tasks |
|-------|----------|-------|
| **Setup** | 2 hours | Create project, install dependencies, configure DB |
| **Backend** | 4-5 hours | Create models, API routes, authentication |
| **Frontend** | 5-6 hours | Build pages, components, styling |
| **Admin Panel** | 4-5 hours | Build CMS, protected routes, forms |
| **Testing** | 2 hours | Test all features, bug fixes |
| **Deployment** | 1 hour | Deploy to Vercel, configure environment |
| **Polish** | 1-2 hours | Documentation, README, final tweaks |
| **Total** | ~20-25 hours | Complete production-ready website |

---

## 🎓 LEARNING OUTCOMES

By completing this project, you'll learn:

✅ Full-stack web development with Next.js  
✅ RESTful API design  
✅ Database modeling with MongoDB/Mongoose  
✅ Authentication & Authorization (JWT)  
✅ Admin dashboard/CMS development  
✅ Responsive design with Tailwind CSS  
✅ TypeScript best practices  
✅ Deployment to Vercel  
✅ Git workflow and GitHub  
✅ Professional coding standards  

---

## 📌 IMPORTANT NOTES

1. **Reuse MCE Hassan Content**: Where appropriate, use real data from their website (departments, faculty names, etc.) for authenticity.

2. **Responsive Design**: Ensure all pages work perfectly on:
   - Mobile (320px - 768px)
   - Tablet (768px - 1024px)
   - Desktop (1024px+)

3. **Loading States**: Implement loading indicators for all async operations (API calls).

4. **Error Handling**: Show user-friendly error messages for all failures.

5. **Accessibility**: Use semantic HTML, proper contrast ratios, alt text for images.

6. **Performance**: Aim for Lighthouse score > 80 on mobile and desktop.

7. **Admin Usability**: Design admin panel to be intuitive - a non-technical admin should easily manage content.

8. **Scalability**: Design database schemas to handle growth (100s of news items, 1000s of visitors).

---

## 🚀 NOW READY FOR BUILDING!

This specification covers **100% of the hackathon requirements** and provides a clear roadmap for development. 

**Next steps:** Confirm you're satisfied with this spec, then proceed with full implementation.

Would you like any modifications to this specification before we start building?

---

**Document Version:** 1.0  
**Last Updated:** June 2026  
**Status:** Ready for Implementation
