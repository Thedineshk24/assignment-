# Events Explorer - Mini Events Application

A responsive event listing application built with Next.js 15, TypeScript, and Tailwind CSS. This application allows users to explore events, filter by location, search through events, and view detailed information about each event.

## 🚀 Features

- **Event Listing**: Display of 8 mock events with title, date, location, and description
- **Filtering**: Filter events by location using a dropdown menu
- **Search**: Search events by title, description, or location
- **Dynamic Routing**: Individual event detail pages with full information
- **Responsive Design**: Mobile-first responsive design using Tailwind CSS
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured data
- **Accessibility**: Keyboard navigation, ARIA labels, and semantic HTML elements
- **Static Generation**: Pre-rendered pages for optimal performance

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data**: Local JSON file with mock event data
- **Deployment**: Ready for Vercel deployment

## 📁 Project Structure

\`\`\`
events-explorer/
├── app/
│   ├── events/
│   │   └── [id]/
│   │       └── page.tsx          # Dynamic event detail pages
│   ├── globals.css               # Global styles
│   ├── layout.tsx               # Root layout
│   ├── not-found.tsx            # 404 page
│   └── page.tsx                 # Homepage
├── components/
│   ├── event-card.tsx           # Individual event card component
│   ├── event-list.tsx           # Event listing with filtering
│   └── filter-dropdown.tsx      # Location filter dropdown
├── data/
│   └── events.json              # Mock event data
└── README.md
\`\`\`

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd events-explorer
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 🎯 Key Implementation Details

### Static Generation
- Uses \`generateStaticParams\` to pre-generate all event detail pages
- Implements \`generateMetadata\` for dynamic SEO optimization
- All pages are statically generated at build time for optimal performance

### Filtering & Search
- Client-side filtering by location using React state
- Real-time search functionality across event titles, descriptions, and locations
- Responsive filter controls that work on mobile and desktop

### Accessibility Features
- Semantic HTML elements (\`main\`, \`section\`, \`article\`, \`header\`, \`footer\`)
- Proper ARIA labels and screen reader support
- Keyboard navigation support
- Focus management and visual focus indicators

### SEO Optimization
- Dynamic meta titles and descriptions for each event
- Open Graph tags for social media sharing
- Structured semantic HTML
- Proper heading hierarchy

## 🎨 Design Decisions

### Component Architecture
- Modular component design for reusability
- Separation of concerns between data fetching and presentation
- Custom hooks for state management where appropriate

### Styling Approach
- Tailwind CSS for rapid development and consistency
- Mobile-first responsive design
- Custom color scheme avoiding indigo/blue as requested
- Hover and focus states for better user experience

### Data Management
- Local JSON file for mock data as specified
- TypeScript interfaces for type safety
- Efficient filtering algorithms for good performance

## 🚀 Deployment

This application is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

The app uses static generation, making it perfect for CDN deployment.

## 🔮 Future Improvements

Given more time, potential enhancements could include:

- **Enhanced Filtering**: Category-based filtering, date range selection
- **Event Management**: Add/edit/delete functionality with a backend
- **User Features**: User accounts, event favorites, RSVP functionality
- **Advanced Search**: Full-text search with highlighting
- **Calendar Integration**: Export to Google Calendar, Outlook
- **Social Features**: Event sharing, comments, ratings
- **Performance**: Image optimization, lazy loading, virtual scrolling
- **Testing**: Unit tests, integration tests, E2E testing
- **Analytics**: Event tracking, user behavior analysis

## 📝 Assessment Compliance

This project fulfills all requirements:

✅ **Homepage**: Displays 8 mock events with required information  
✅ **Filter Functionality**: Location-based filtering with dropdown  
✅ **Dynamic Routing**: Event detail pages with \`[id]\` routing  
✅ **Static Generation**: Uses App Router equivalent of \`getStaticPaths\`/\`getStaticProps\`  
✅ **SEO & Accessibility**: Meta tags, semantic HTML, keyboard navigation  
✅ **Technical Constraints**: Next.js 15, Tailwind CSS, mock data, no external UI kits  
✅ **Responsive Design**: Mobile-first approach with Tailwind CSS  

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is created for assessment purposes.
\`\`\`
