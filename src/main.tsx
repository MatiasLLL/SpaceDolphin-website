import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import NTFs from './pages/NFTs.tsx';

import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nfts" element={<NTFs />} />
                {/* <Route path="/legalnotice" element={<Suspense fallback={<div>Loading...</div>}><LegalNotice /></Suspense>} />
        <Route path="/privacypolicy" element={<Suspense fallback={<div>Loading...</div>}><PrivacyPolicy /></Suspense>} /> */}
                <Route path="*" element={<Home />} />
            </Routes>
        </Router>
    </React.StrictMode>
);

// import React, { lazy, Suspense } from 'react'

// import LegalNotice from './pages/LegalNotice.tsx'
// import PrivacyPolicy from './pages/PrivacyPolicy.tsx'
// const LegalNotice = lazy(() => import ('./components/LegalNotice'))
// const PrivacyPolicy = lazy(() => import ('./components/PrivacyPolicy'))
