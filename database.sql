-- Database Setup for Demaryx Portfolio
-- Please run this script in phpMyAdmin

CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL,
    categoryLabel VARCHAR(100),
    shortDesc TEXT,
    image VARCHAR(255),
    problem TEXT,
    built TEXT,
    outcome TEXT,
    liveLink VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert dummy data so the site works immediately (using placeholders since you have your own images!)
INSERT INTO projects (title, category, categoryLabel, shortDesc, image, problem, built, outcome, liveLink) VALUES
('Lumina Commerce', 'web-ecom', 'Web & Ecommerce', 'A high-end minimal e-commerce experience.', 'https://via.placeholder.com/800x600/1e70ff/ffffff?text=Web+Project', 'Lumina needed a massive overhaul of their old storefront.', 'We built a smooth, headless e-commerce store with dynamic cart updates.', 'A 45% increase in mobile conversions.', 'https://lumina.example.com'),
('Onyx Dashboard', 'app-dash', 'App & Dashboards', 'A modern SaaS landing page and Dashboard mockup.', 'https://via.placeholder.com/800x600/1e70ff/ffffff?text=App+Project', 'Apex wanted to showcase their capabilities effectively.', 'We created an incredibly sleek landing page featuring glassmorphism.', 'Increased daily lead generation by 200%.', 'https://apex.example.com'),
('Sentinel Automation', 'ai-auto', 'AI & Automation', 'A complex AI-driven predictive dashboard.', 'https://via.placeholder.com/800x600/1e70ff/ffffff?text=AI+Project', 'Analysts were drowning in spreadsheets.', 'A modern dashboard utilizing techy charts and auto-updating metrics.', 'Reduced daily reporting time by 4 hours.', 'https://onyxdash.example.com'),
('Verve Identity', 'branding', 'Branding & Graphic Design', 'Typography-focused dynamic branding.', 'https://via.placeholder.com/800x600/1e70ff/ffffff?text=Branding+Project', 'Verve had an extremely plain identity.', 'We established a striking typography identity and modern graphics.', 'Helped Verve secure their Series A funding.', 'https://verve.example.com'),
('Creative Resume', 'content', 'Content & Creative Design', 'Animated cartoons and visual content creation.', 'https://via.placeholder.com/800x600/1e70ff/ffffff?text=Creative+Project', 'Client needed engaging visual content.', 'We designed 2D animated sequences.', 'Increased viewer retention by 60%.', ''),
('Wiki Blueprint', 'special', 'Specialized Services', 'Custom digital blueprint and wikipedia services.', 'https://via.placeholder.com/800x600/1e70ff/ffffff?text=Specialized+Project', 'Client needed niche verification.', 'We set up specialized digital pipelines.', 'Client achieved massive credibility boost.', '');
