import { Route, Routes } from 'react-router-dom';

import Homepage from './components/pages/Homepage';
import Hardships from './components/pages/Hardships';
import Evil from './components/pages/Evil';
import Worry from './components/pages/Worry';
import Death from './components/pages/Death';

function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="hardships" element={<Hardships />} />
      <Route path="evil" element={<Evil />} />
      <Route path="worry" element={<Worry />} />
      <Route path="death" element={<Death />} />
    </Routes>
  );
}

export default App;
