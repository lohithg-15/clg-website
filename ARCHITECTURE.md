# 🏗️ PROJECT ARCHITECTURE

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT BROWSER                           │
└─────────────────────────────────────────────────────────────────┘
                              ↓↑
                    NEXT.JS (VERCEL)
         ┌──────────────────────────────────┐
         │   Frontend (React + TypeScript)   │
         │  - Public Pages                   │
         │  - Admin Panel (CMS)              │
         │  - Components & Hooks             │
         └──────────────────────────────────┘
                       ↓↑
         ┌──────────────────────────────────┐
         │  Backend (API Routes)             │
         │  - Authentication (JWT)           │
         │  - Data Validation                │
         │  - Error Handling                 │
         └──────────────────────────────────┘
                       ↓↑
         ┌──────────────────────────────────┐
         │      MongoDB Atlas (Database)     │
         │  - News Collection               │
         │  - Events Collection             │
         │  - Faculty Collection            │
         │  - Departments Collection        │
         │  - Contacts Collection           │
         │  - Admin Users Collection        │
         └──────────────────────────────────┘
```

---

## File Organization

### `/src/app/` - Main Application
- **`page.tsx`** - Homepage (dynamic content from DB)
- **`layout.tsx`** - Root layout with Navbar & Footer
- **`globals.css`** - Global styles

### `/src/app/api/` - Backend APIs
```
api/
├── auth/
│   └── login/          - JWT authentication endpoint
├── news/
│   ├── route.ts        - GET all news, POST create news
│   └── [id]/route.ts   - GET, PUT, DELETE specific news
├── events/
│   ├── route.ts        - Event CRUD
│   └── [id]/route.ts   - Event detail routes
├── faculty/
│   ├── route.ts        - Faculty CRUD
│   └── [id]/route.ts   - Faculty detail
├── departments/
│   ├── route.ts        - Department CRUD
│   └── [id]/route.ts   - Department detail
└── contact/            - Contact form submission
```

### `/src/app/(public)/` - Public Pages
```
(public)/
├── about/              - About MCE page
├── academics/          - Academics & departments
├── admissions/         - Admissions information
├── placements/         - Placements & stats
├── gallery/            - Photo gallery
├── news/               - News listing & detail
├── events/             - Events listing & detail
└── contact/            - Contact form page
```

### `/src/app/admin/` - Admin CMS
```
admin/
├── login/              - Admin login page
├── dashboard/          - Main admin dashboard
├── news/               - News management
├── events/             - Events management
├── faculty/            - Faculty management
├── departments/        - Department management
├── contact/            - Contact messages
├── gallery/            - Gallery management
├── users/              - User management
└── settings/           - Site settings
```

### `/src/components/` - Reusable Components
```
components/
├── Navbar.tsx          - Navigation bar
├── Footer.tsx          - Footer
├── Hero.tsx            - Hero section
├── NewsCard.tsx        - News card component
├── EventCard.tsx       - Event card
├── FacultyCard.tsx     - Faculty profile card
└── ...                 - Other UI components
```

### `/src/lib/` - Utilities
```
lib/
├── db.ts               - MongoDB connection
├── auth.ts             - JWT utilities (generateToken, verifyToken)
├── api.ts              - API helpers
└── ...                 - Other utilities
```

### `/src/models/` - Database Schemas
```
models/
├── News.ts             - News schema
├── Event.ts            - Event schema
├── Faculty.ts          - Faculty schema
├── Department.ts       - Department schema
├── Contact.ts          - Contact message schema
├── Admin.ts            - Admin user schema
└── Settings.ts         - Site settings schema
```

### `/src/hooks/` - React Hooks
```
hooks/
├── useAuth.ts          - Authentication hook
├── useFetch.ts         - Data fetching hook
└── ...                 - Custom hooks
```

---

## Authentication Flow

```
┌─────────────────────┐
│   Admin Login Page   │
└─────────────────────┘
        ↓
    ┌─────────────────────┐
    │   POST /api/auth    │
    │  (email, password)  │
    └─────────────────────┘
        ↓
    ┌─────────────────────┐
    │  Verify Credentials │
    │  Hash Password      │
    └─────────────────────┘
        ↓
    ┌─────────────────────┐
    │  Generate JWT Token │
    └─────────────────────┘
        ↓
    ┌─────────────────────┐
    │  Store in localStorage
    │  Redirect to        │
    │  Dashboard          │
    └─────────────────────┘
```

---

## Data Flow Example: Create News

```
Admin User
    ↓
Create News Form
    ↓
POST /api/news (with JWT token)
    ↓
API Route
  ├─ Verify JWT Token
  ├─ Validate Input (Zod)
  ├─ Save to MongoDB
  └─ Return Created News
    ↓
Update UI / Show Success
    ↓
News appears on Homepage
    ↓
Public Users see new News
```

---

## API Request/Response Example

### Create News (Admin)
**Request:**
```bash
POST /api/news
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "title": "MCE Achieves NIRF Ranking",
  "description": "MCE ranked among top colleges in India",
  "content": "Full article content here...",
  "featured": true
}
```

**Response:**
```json
{
  "message": "News created successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "MCE Achieves NIRF Ranking",
    "description": "MCE ranked among top colleges in India",
    "content": "Full article content here...",
    "featured": true,
    "status": "published",
    "views": 0,
    "createdAt": "2026-06-30T12:00:00Z",
    "updatedAt": "2026-06-30T12:00:00Z"
  }
}
```

---

## Database Schema Relationships

```
┌──────────────┐
│   Admin      │ (Authentication)
├──────────────┤
│ _id          │
│ email        │
│ password     │
│ role         │
└──────────────┘

┌──────────────┐         ┌─────────────────┐
│   News       │◄────────│   Department    │
├──────────────┤         ├─────────────────┤
│ _id          │         │ _id             │
│ title        │         │ name            │
│ content      │         │ code (CSE/ECE)  │
│ author       │         │ headName        │
│ date         │         │ faculty[]       │
└──────────────┘         └─────────────────┘

┌──────────────┐
│   Faculty    │ (references Department)
├──────────────┤
│ _id          │
│ name         │
│ department   │ (FK → Department.code)
│ designation  │
│ email        │
└──────────────┘

┌──────────────┐
│   Contact    │
├──────────────┤
│ _id          │
│ name         │
│ email        │
│ message      │
│ status       │
│ createdAt    │
└──────────────┘
```

---

## Technology Stack Details

### Frontend Rendering
- **Next.js 14 (App Router)**
  - Server Components for static content
  - Client Components for interactivity
  - Automatic code splitting
  - Built-in image optimization

- **React 18**
  - Hooks for state management
  - Suspense for code splitting
  - Context API for global state

- **TypeScript**
  - Type safety throughout
  - Better IDE autocomplete
  - Fewer runtime errors

- **Tailwind CSS**
  - Utility-first CSS framework
  - Responsive design
  - Dark mode support (optional)

- **Framer Motion**
  - Page transitions
  - Component animations
  - Scroll-triggered animations

### Backend Features
- **JWT Authentication**
  - Secure token generation
  - 7-day expiration
  - Token verification middleware

- **Data Validation**
  - Input sanitization
  - Zod schemas
  - Error messages

- **Error Handling**
  - Try-catch blocks
  - Proper HTTP status codes
  - User-friendly error messages

### Database
- **MongoDB**
  - Document-based storage
  - Flexible schema
  - Built-in indexing

- **Mongoose ORM**
  - Schema validation
  - Middleware hooks
  - Query optimization

---

## Deployment Architecture

```
┌──────────────────┐
│  GitHub Repo     │
└────────┬─────────┘
         │
         ↓
┌──────────────────┐
│  Vercel (Push)   │ ← Auto-deploys on git push
├──────────────────┤
│ Next.js Build    │
│ Environment Vars │
│ Functions        │
└────────┬─────────┘
         │
         ↓
┌──────────────────┐
│  CDN Global Edge │
└────────┬─────────┘
         │
         ↓
┌──────────────────┐
│  MongoDB Atlas   │
│  (Database)      │
└──────────────────┘
```

---

## Performance Optimization Strategies

### Image Optimization
- Next.js `<Image>` component
- Automatic format conversion (WebP)
- Lazy loading images
- Responsive images (srcset)

### Code Splitting
- Automatic per-route
- Dynamic imports for heavy components
- Tree-shaking unused code

### Caching Strategy
- Static page generation (SSG) where possible
- Incremental Static Regeneration (ISR)
- Browser caching headers
- CDN edge caching

### Database Optimization
- Indexed queries
- Pagination for large datasets
- Connection pooling (MongoDB Atlas)
- Query optimization

---

## Security Implementation

### Authentication
```typescript
// JWT Token Generation
const token = jwt.sign(
  { id: user._id, email: user.email, role: user.role },
  JWT_SECRET,
  { expiresIn: '7d' }
);

// Token Verification
const payload = jwt.verify(token, JWT_SECRET);
```

### Password Security
```typescript
// Hashing
const hashed = await bcrypt.hash(password, 10);

// Verification
const isValid = await bcrypt.compare(password, hashed);
```

### Protected Routes
```typescript
// API Route Protection
const token = extractToken(request);
if (!token || !verifyToken(token)) {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}
```

### Input Validation
```typescript
// Zod Validation
const schema = z.object({
  title: z.string().min(3).max(200),
  email: z.string().email(),
});

const validated = schema.parse(input);
```

---

## Scalability Considerations

### Current Capacity
- **Users:** 1000+ concurrent
- **Database:** 1GB storage (MongoDB free tier)
- **Requests:** 1M+ per month (Vercel free tier)

### Future Scaling
1. **Upgrade MongoDB** → Paid tier (10GB+)
2. **Upgrade Vercel** → Pro plan
3. **Add Redis** → Caching layer
4. **Add CDN** → Global content delivery
5. **Separate Services** → Microservices architecture
6. **Load Balancing** → Multiple servers

---

## Testing Recommendations

### Unit Tests
```typescript
// Test JWT generation
test('generates valid JWT token', () => {
  const token = generateToken({ id: '123', email: 'test@example.com' });
  expect(token).toBeDefined();
});
```

### Integration Tests
```typescript
// Test API endpoint
test('POST /api/news creates news', async () => {
  const res = await fetch('/api/news', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}` },
    body: JSON.stringify(newsData),
  });
  expect(res.status).toBe(201);
});
```

### E2E Tests
- Test full user workflows
- Test admin CRUD operations
- Test contact form submission

---

## Monitoring & Logging

### Vercel Analytics
- Page performance metrics
- User analytics
- Error tracking

### MongoDB Atlas Monitoring
- Query performance
- Storage usage
- Connection metrics

### Error Tracking
- Sentry (recommended)
- Error boundaries in React
- API error logging

---

## Maintenance Schedule

- **Daily:** Monitor error logs
- **Weekly:** Review analytics
- **Monthly:** Security audit, dependency updates
- **Quarterly:** Database optimization, backups

---

## Documentation Links

- [Next.js Docs](https://nextjs.org/docs)
- [MongoDB Docs](https://docs.mongodb.com/)
- [Vercel Docs](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [JWT.io](https://jwt.io/)

---

**Last Updated:** June 2026  
**Architecture Version:** 1.0  
**Status:** Production Ready ✅
