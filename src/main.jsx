import ReactDom from 'react-dom/client';
import App from './App';
import "./index.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

ReactDom.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <SpeedInsights />
    <Analytics />
  </>
);
