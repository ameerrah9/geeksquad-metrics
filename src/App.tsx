import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Overview from '@/pages/Overview';
import ConsultationAgents from '@/pages/ConsultationAgents';
import RepairAgents from '@/pages/RepairAgents';
import AtHomeServices from '@/pages/AtHomeServices';
import AutoTech from '@/pages/AutoTech';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className='min-h-screen bg-background'>
        <Routes>
          <Route path='/' element={<Overview />} />
          <Route path='/ca' element={<ConsultationAgents />} />
          <Route path='/ra' element={<RepairAgents />} />
          <Route path='/at-home' element={<AtHomeServices />} />
          <Route path='/auto-tech' element={<AutoTech />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
