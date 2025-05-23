# Nexus Bridge Advisors Website

A modern, responsive React website for Nexus Bridge Advisors - a Syria-based consulting firm serving international businesses.

## 🚀 Features

- **Modern Design**: Clean, professional design with white, red, and green color scheme
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth animations using Framer Motion and GSAP
- **Interactive**: Hover effects and interactive elements throughout
- **Contact Form**: Integrated with Formspree for form handling
- **Fast**: Built with React and optimized for performance

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **Tailwind CSS 3.4.15** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **GSAP** - Advanced animations
- **React Router** - Client-side routing
- **Formspree** - Form handling
- **Heroicons** - Icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nexus-bridge-advisors
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🎨 Design System

### Colors
- **Primary (Red)**: #ef4444 (red-500)
- **Accent (Green)**: #22c55e (green-500)
- **Background**: White with subtle gray gradients
- **Text**: Gray-900 for headings, Gray-600 for body text

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large sizes with gradient text effects
- **Body**: Regular weight, comfortable line height

### Components
- **Buttons**: Rounded-full with hover animations
- **Cards**: Rounded-2xl with subtle shadows and hover effects
- **Sections**: Generous padding with background elements

## 📱 Pages

1. **Home** - Hero, About Preview, Services, Team Preview, Insights, Contact CTA
2. **About** - Company information and team details
3. **Services** - Detailed service offerings
4. **Team** - Team member profiles
5. **Contact** - Contact form and company information

## 🔧 Configuration

### Formspree Setup
1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form
3. Replace `YOUR_FORMSPREE_ID` in `src/pages/Contact.js` with your form ID

### Customization
- Colors can be modified in `tailwind.config.js`
- Animations can be adjusted in the component files
- Content can be updated in the respective component files

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.js
│   │   └── Footer.js
│   └── sections/
│       ├── Hero.js
│       ├── AboutPreview.js
│       ├── ServicesSection.js
│       ├── TeamPreview.js
│       ├── InsightsSection.js
│       └── ContactCTA.js
├── pages/
│   ├── Home.js
│   ├── About.js
│   ├── Services.js
│   ├── Team.js
│   └── Contact.js
├── App.js
├── index.js
└── index.css
```

## 🎯 Key Features

### Animations
- **Framer Motion**: Page transitions, scroll animations, hover effects
- **GSAP**: Complex animations in Hero section
- **CSS Transitions**: Smooth hover states and interactions

### Responsive Design
- **Mobile-first**: Designed for mobile devices first
- **Breakpoints**: sm, md, lg, xl breakpoints for different screen sizes
- **Flexible Layouts**: Grid and flexbox layouts that adapt to screen size

### Performance
- **Code Splitting**: React lazy loading for optimal performance
- **Optimized Images**: Placeholder images with proper sizing
- **Minimal Dependencies**: Only essential libraries included

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, email info@nexusbridgeadvisors.com or create an issue in this repository.

---

Built with ❤️ for Nexus Bridge Advisors
