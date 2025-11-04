# Advocate Thaniga K - Professional Legal Services Website

A modern, responsive website built with React.js for Advocate Thaniga K, featuring a professional black-gold design theme and comprehensive legal service information.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI/UX**: Clean, professional design with black-gold color scheme
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Interactive Components**: Smooth animations using Framer Motion
- **Contact Integration**: WhatsApp, phone, and email integration
- **Practice Areas**: Detailed information about legal services
- **Client Testimonials**: Carousel and grid layout for client feedback
- **Legal Blog**: Dynamic blog section for legal updates and insights

## 🛠️ Tech Stack

- **Frontend**: React.js 18
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email**: EmailJS integration ready

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   └── Footer.js          # Footer component
├── pages/
│   ├── Home.js            # Homepage with hero section
│   ├── About.js           # About page with bio and qualifications
│   ├── PracticeAreas.js   # Legal practice areas
│   ├── Testimonials.js    # Client testimonials
│   ├── Blog.js            # Legal blog and updates
│   └── Contact.js         # Contact form and information
├── App.js                 # Main app component
├── index.js               # Entry point
└── index.css              # Global styles and Tailwind imports
```

## 🎨 Design Features

- **Color Scheme**: Black background with gold (#D4AF37) accents
- **Typography**: Playfair Display for headings, Lato for body text
- **Animations**: Smooth scroll animations and hover effects
- **Layout**: Hexagonal background pattern inspired by legal themes
- **Responsive**: Mobile-first design approach

## 📱 Pages Overview

### Home Page
- Hero section with advocate name and tagline
- Call-to-action buttons for consultation booking
- Key features and why choose section
- Quick contact section

### About Page
- Professional biography
- Educational qualifications (B.A., LL.B.)
- Mission statement
- Why choose me section with 4 key pillars

### Practice Areas
- Criminal Law
- Civil Litigation
- Family Law
- Corporate Law
- Property Disputes
- Legal Documentation

### Testimonials
- Interactive carousel with client feedback
- Grid layout showing all testimonials
- 5-star rating system

### Blog
- Legal insights and updates
- Search and category filtering
- Newsletter subscription
- Legal disclaimer

### Contact
- Contact form with validation
- Office information and hours
- Google Maps integration placeholder
- WhatsApp and emergency contact options

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd advocate-thaniga-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📞 Contact Information

**Advocate Thaniga K**
- **Qualification**: B.A., LL.B.
- **Organization**: LawSpot – Verified Member
- **Phone**: 9629200302 / 9445888307
- **Email**: thinga07@gmail.com
- **Address**: No.62, Mudhaliyarkuppam Village, Nainarkuppam Post, Cheyyur Taluk, Chengalpattu District – 603302

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  gold: '#D4AF37',
  bronze: '#CD7F32',
  darkGold: '#B8941F',
}
```

### Content
- Update advocate information in respective page components
- Modify testimonials in `src/pages/Testimonials.js`
- Add/edit blog posts in `src/pages/Blog.js`
- Update practice areas in `src/pages/PracticeAreas.js`

### Email Integration
To enable email functionality:
1. Sign up for EmailJS
2. Add your service ID, template ID, and user ID
3. Update the contact form submission handler

## 📱 Mobile Responsiveness

The website is fully responsive with:
- Mobile-first design approach
- Hamburger menu for mobile navigation
- Optimized layouts for tablets and phones
- Touch-friendly buttons and interactions

## 🔍 SEO Features

- Meta tags for search engines
- Open Graph tags for social media
- Structured data markup
- Semantic HTML structure
- Fast loading times

## 📄 License

This project is created for Advocate Thaniga K's professional website. All rights reserved.

## 🤝 Support

For technical support or customization requests, please contact the development team.

---

**Built with ❤️ for professional legal services**