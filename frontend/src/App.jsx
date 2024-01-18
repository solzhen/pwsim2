import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { WrestlersPage } from './pages/WrestlersPage';
import { WrestlerFormPage } from './pages/WrestlerFormPage';
import { WrestlerDetailPage } from './pages/WrestlerDetailPage';
import { Navigation } from './components/NavigationComponent';
import { CompaniesPage } from './pages/CompaniesPage';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/wrestlers" />} />
        <Route path="/wrestlers" element={<WrestlersPage />} />
        <Route path="/wrestler-create" element={<WrestlerFormPage />} />
        <Route path="/wrestlers/:id/edit" element={<WrestlerFormPage />} />
        <Route path="/wrestlers/:id" element={<WrestlerDetailPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        {/* FUTURE ME: REMEMBER TO CHANGE THE PAGE IN THE /company-create ROUTE*/}
        <Route path="/company-create" element={<CompaniesPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}
export default App;