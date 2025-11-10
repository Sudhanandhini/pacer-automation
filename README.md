# Pacer Automation - System Integrators Website

A modern, responsive website built with React (Vite), Tailwind CSS, and Framer Motion for Pacer Automation Pvt. Ltd. - a leading System Integrator providing enterprise-class IT infrastructure solutions and services.

## 🚀 Features

- **Modern UI/UX Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Multi-Page Application**: Complete website with multiple pages and navigation
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **SEO Friendly**: Optimized structure for search engines
- **Fast Performance**: Built with Vite for lightning-fast development and build times

## 📋 Pages

1. **Home** - Landing page with hero section, features, and testimonials
2. **About Us** - Company information, values, leadership team, and statistics
3. **Our Offering** - Complete list of IT infrastructure services
4. **Contact** - Contact form, company information, and Google Maps integration
5. **Alliance** - Partnership information (placeholder)
6. **Career** - Job opportunities and career information (placeholder)

## 🛠️ Tech Stack

- **React 18** - JavaScript library for building user interfaces
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animation library for React
- **React Icons** - Popular icon library

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup Instructions

1. **Clone or navigate to the project directory**
   ```bash
   cd pacer-automation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

## 🏗️ Build for Production

```bash
npm run build
```

The build files will be generated in the `dist` folder.

## 📁 Project Structure

```
pacer-automation/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable components
│   │   ├── Header.jsx    # Navigation header
│   │   └── Footer.jsx    # Site footer
│   ├── pages/            # Page components
│   │   ├── Home.jsx      # Home page
│   │   ├── About.jsx     # About us page
│   │   ├── Contact.jsx   # Contact page
│   │   ├── Offerings.jsx # Services page
│   │   ├── Alliance.jsx  # Alliance page
│   │   └── Career.jsx    # Career page
│   ├── App.jsx           # Main app component with routes
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles with Tailwind
├── index.html            # HTML template
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
├── vite.config.js        # Vite configuration
└── package.json          # Dependencies and scripts
```

## 🎨 Design Features

### Color Scheme
- **Primary**: `#00BFA5` (Teal/Turquoise)
- **Secondary**: `#1E3A8A` (Navy Blue)
- **Dark**: `#1F2937` (Gray-800)

### Typography
- **Font Family**: Inter, system-ui, sans-serif

### Animations
- Smooth scroll behavior
- Fade-in animations on scroll
- Hover effects on buttons and cards
- Mobile menu slide animations

## 📱 Menu Structure

### Main Navigation
- Home
- About Us
- Our Offering (with dropdown)
  - Immense Infrastructure Management Services
  - DataCenter Solutions
  - Cloud Solutions
  - Network and Security Solutions
  - User Computing
  - Implementations and Migration Services
  - Consulting Services
- Alliance
- Career
- Contact Us

## 🔧 Customization

### Updating Colors
Edit the `tailwind.config.js` file:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#00BFA5',    // Change this
      secondary: '#1E3A8A',  // Change this
      dark: '#1F2937',       // Change this
    },
  },
}
```

### Adding New Pages
1. Create a new file in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/Header.jsx`

### Modifying Animations
Animation settings can be adjusted in individual component files using Framer Motion props.

## 📧 Contact Information

**Pacer Automation Pvt. Ltd.**

- **Address**: No. 33/5, First Floor, Mount Kailash Building, Meanee Avenue Road (Above HDFC Bank), Ulsoor, Bangalore-560 042, INDIA
- **Phone**: +91 80 4282 3000
- **Fax**: +91 80 4282 3003
- **Sales Email**: solutions@pacerautomation.com
- **Support Email**: supportcenter@pacerautomation.com
- **Working Hours**: 09:00 AM to 06:00 PM IST (Monday – Friday)

## 🚀 Deployment

### Vercel
```bash
npm run build
# Deploy the 'dist' folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy the 'dist' folder to Netlify
```

### cPanel/Traditional Hosting
```bash
npm run build
# Upload contents of 'dist' folder to public_html
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint (if configured)

## 🤝 Contributing

This is a proprietary project for Pacer Automation Pvt. Ltd.

## 📄 License

Proprietary - © 2025 Pacer Automation Pvt. Ltd. All rights reserved.

## 👨‍💻 Developer

Developed by **Sunsys Technologies Pvt Ltd**

---

For any queries or support, please contact the development team.
