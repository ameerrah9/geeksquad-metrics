import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AutoTech from '@/pages/AutoTech';
import Overview from '@/pages/Overview';
import RepairAgents from '@/pages/RepairAgents';
import AtHomeServices from '@/pages/AtHomeServices';
import ConsultationAgents from '@/pages/ConsultationAgents';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Overview />} />
        <Route path='/auto-tech' element={<AutoTech />} />
        <Route path='/ra' element={<RepairAgents />} />
        <Route path='/at-home' element={<AtHomeServices />} />
        <Route path='/ca' element={<ConsultationAgents />} />
      </Routes>
    </BrowserRouter>
  );
}
