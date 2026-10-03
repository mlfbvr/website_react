import { Routes, Route } from 'react-router';
import RootLayout from '@/pages/RootLayout';
import HomePage from '@/pages/home/HomePage';
import ContactPage from '@/pages/contact/ContactPage';
import ResumePage from '@/pages/resume/ResumePage';
import AboutPage from '@/pages/about/AboutPage';
import PortfolioPage from '@/pages/portfolio/Portfolio';

function App() {
  console.log(import.meta.env.BASE_URL);
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="resume" element={<ResumePage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
