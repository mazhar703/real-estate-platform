# Real Estate Listing Platform

A professional, feature-rich real estate platform built with Next.js and React. Browse properties, advanced filtering, user authentication, and admin panel for property management.

## 🏠 Features

### For Buyers/Renters
- **Property Browsing**
  - View property listings with detailed information
  - High-quality images with gallery
  - Property descriptions and specifications
  - Location on interactive map

- **Advanced Filtering**
  - Filter by price range
  - Filter by property type (House, Apartment, Commercial)
  - Filter by location/city
  - Filter by bedrooms and bathrooms
  - Filter by area/square feet
  - Filter by amenities

- **Property Details**
  - Full property information
  - Photo gallery with lightbox
  - Agent contact information
  - Property features and amenities
  - Price history
  - Similar properties

- **User Features**
  - User authentication (signup/login)
  - Saved properties/favorites
  - Search history
  - Property inquiries
  - Message agent directly

### For Agents/Admins
- **Admin Dashboard**
  - Property listing management
  - Add/edit/delete properties
  - Manage user inquiries
  - View statistics and analytics
  - User management

- **Property Management**
  - Upload multiple images
  - Set property details
  - Manage availability
  - Track inquiries
  - Generate leads

## 🛠 Tech Stack

- **Frontend:** Next.js 14, React, TypeScript, Tailwind CSS
- **Authentication:** JWT ready (Backend integration)
- **Maps:** Google Maps API ready
- **Icons:** Lucide React
- **Image Handling:** Next.js Image optimization
- **Database Ready:** PostgreSQL / MongoDB

## 📋 Prerequisites

- Node.js 16+ (Recommended: 18+)
- npm or yarn
- Google Maps API key (optional, for map features)

## 🚀 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/mazhar703/real-estate-platform.git
cd real-estate-platform
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Create environment variables:**
```bash
# Create .env.local
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

4. **Run development server:**
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
real-estate-platform/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                  # Home page
│   ├── globals.css
│   ├── properties/
│   │   ├── page.tsx              # Property listings
│   │   ├── [id]/
│   │   │   └── page.tsx          # Property details
│   │   └── search/
│   │       └── page.tsx          # Search results
│   ├── auth/
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── dashboard/
│   │   ├── page.tsx              # User dashboard
│   │   └── admin/
│   │       └── page.tsx          # Admin panel
│   └── api/
│       ├── auth/
│       ├── properties/
│       └── inquiries/
├── components/
│   ├── PropertyCard.tsx
│   ├── PropertyFilter.tsx
│   ├── PropertyGallery.tsx
│   ├── MapView.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── lib/
│   ├── types.ts
│   └── utils.ts
└── public/
    └── images/
```

## 💡 Usage

### For Users

1. **Browse Properties**
   - Visit homepage
   - Click on properties
   - Apply filters to narrow search
   - View detailed property information

2. **Save Properties**
   - Click heart icon to save favorite
   - Access saved properties in dashboard
   - Compare multiple properties

3. **Contact Agent**
   - Click "Contact Agent" button
   - Send inquiry message
   - Receive response via email

### For Admins

1. **Manage Properties**
   - Go to admin dashboard
   - Add new properties
   - Edit existing properties
   - Delete properties

2. **Upload Images**
   - Upload multiple images per property
   - Set featured image
   - Organize gallery

3. **View Analytics**
   - Property view counts
   - User inquiries
   - Popular properties
   - User statistics

## 📊 Data Structure

### Property
```typescript
interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  type: 'House' | 'Apartment' | 'Commercial';
  bedrooms: number;
  bathrooms: number;
  area: number; // square feet
  location: {
    city: string;
    address: string;
    latitude: number;
    longitude: number;
  };
  images: string[];
  amenities: string[];
  agentId: string;
  featured: boolean;
  createdAt: Date;
  views: number;
}
```

### User
```typescript
interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: 'user' | 'agent' | 'admin';
  savedProperties: string[];
  createdAt: Date;
}
```

## 🔌 API Integration Ready

### Backend Endpoints Required

```
AUTH
- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/logout
- GET /api/auth/profile

PROPERTIES
- GET /api/properties
- GET /api/properties/:id
- POST /api/properties (admin)
- PUT /api/properties/:id (admin)
- DELETE /api/properties/:id (admin)

INQUIRIES
- GET /api/inquiries
- POST /api/inquiries
- PUT /api/inquiries/:id

FAVORITES
- GET /api/favorites
- POST /api/favorites
- DELETE /api/favorites/:id
```

## 🎨 Customization

### Add Features

Popular additions:
- Virtual tours/3D viewing
- Property comparison tool
- Price history graph
- Mortgage calculator
- Investment analysis
- Document management
- Video listings
- Neighborhood information
- School/transit information
- Payment integration

### Styling

- Edit `tailwind.config.ts` for colors
- Component styles in respective files
- Responsive design adjustments

## 🚀 Deployment

### Deploy to Vercel

1. Push to GitHub
2. Visit vercel.com
3. Import repository
4. Set environment variables
5. Deploy

### Deploy to AWS/GCP/Azure

1. Build the project
2. Deploy to cloud platform
3. Set up database
4. Configure environment variables

## 🔒 Security Considerations

- Validate all user inputs
- Use HTTPS for data transmission
- Implement rate limiting
- Sanitize database queries
- Use JWT tokens for auth
- Hash passwords with bcrypt
- Implement CORS properly
- Add CSRF protection

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [PostgreSQL](https://www.postgresql.org/docs/)
- [Google Maps API](https://developers.google.com/maps)

## 🤝 Contributing

Contributions welcome! Submit pull requests and report issues.

## 📝 License

MIT License

## 📧 Contact

- Email: mazharmunir507@gmail.com
- GitHub: [github.com/mazhar703](https://github.com/mazhar703)
- LinkedIn: [Mazhar Munir](https://linkedin.com/in/mazhar-munir-32a953275/)

---

**Building the future of real estate, one property at a time! 🏡**
