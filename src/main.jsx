import ReactDom from 'react-dom/client';
import App from './App';
import "./index.css";
import { Analytics } from '@vercel/analytics/react';

ReactDom.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Analytics />
  </>
);
