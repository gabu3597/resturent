# Restaurant React App Setup Guide

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Copy Images**
   Copy all images from the original HTML template to the React app:
   ```powershell
   Copy-Item "d:\Landing Pages\Resturent\restoran-1.0.0\restoran-1.0.0\img\*" -Destination "d:\Landing Pages\Resturent\resturent\public\img\" -Recurse
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open Browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.tsx       # Navigation bar
│   │   ├── Footer.tsx       # Footer component
│   │   └── Layout.tsx       # Main layout wrapper
│   ├── Home/
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Services.tsx     # Services section
│   │   ├── About.tsx        # About section
│   │   └── MenuPreview.tsx  # Menu preview section
│   └── Utils/
│       └── ScrollEffects.tsx # Scroll animations & effects
├── pages/
│   ├── Home.tsx            # Home page
│   ├── About.tsx           # About page
│   ├── Menu.tsx            # Menu page
│   ├── Service.tsx         # Services page
│   ├── Contact.tsx         # Contact page
│   ├── Booking.tsx         # Booking page
│   ├── Team.tsx            # Team page
│   └── Testimonial.tsx     # Testimonial page
├── App.tsx                 # Main app component with routing
├── App.css                 # Custom styles from original template
└── main.tsx               # Entry point with Bootstrap imports
```

## 🎨 Features Implemented

✅ **Complete Page Structure**
- Home page with Hero, Services, About, and Menu sections
- About page with team preview
- Full menu page with category tabs
- Services page
- Contact page with form and map
- Booking page with reservation form
- Team page with member cards
- Testimonial page

✅ **Responsive Design**
- Bootstrap 5 integration
- Mobile-first approach
- Responsive navigation

✅ **Interactive Elements**
- React Router navigation
- Form handling
- Tab switching in menu
- Scroll effects
- Loading spinner

✅ **Styling**
- Original template CSS converted
- Google Fonts integration
- Font Awesome icons
- Bootstrap Icons
- Custom animations

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 Notes

- All original HTML template functionality has been converted to React
- Images need to be copied manually from the original template
- Forms are functional with basic validation
- All navigation links are working
- Responsive design maintained from original template

## 🎯 Next Steps

1. Copy images from original template
2. Test all pages and functionality
3. Customize content as needed
4. Deploy to production

Enjoy your new React restaurant website! 🍽️
