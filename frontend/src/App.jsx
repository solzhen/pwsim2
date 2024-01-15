import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { WrestlersPage } from './pages/WrestlersPage';
import { WrestlerFormPage } from './pages/WrestlerFormPage';
import { WrestlerDetailPage } from './pages/WrestlerDetailPage';
import { Navigation } from './components/NavigationComponent';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/wrestlers" />} />
        <Route path="/wrestlers" element={<WrestlersPage />} />
        <Route path="/wrestler-create" element={<WrestlerFormPage />} />
        <Route path="/wrestlers/:id" element={<WrestlerDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;