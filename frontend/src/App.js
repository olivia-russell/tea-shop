// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import Pages
// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design.
// If your schema requires SHORT data input, then use the TABLE design.

import TeasPage from './pages/TeasPage';
// import AddTeaPageForm from './pages/AddTeaPageForm';
import AddTeaPageTable from './pages/AddTeaPageTable';
// import EditTeaPageForm from './pages/EditTeaPageForm';
import EditTeaPageTable from './pages/EditTeaPageTable';

// import functionName from './data/products.js';
// import functionName from './pages/HomePage.js';
import TopicsPage from './pages/TopicsPage.js';
import HomePage from './pages/HomePage.js'

// Define the function that renders the content in Routes, using State.
function App() {

  const [tea, setTeaToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>Tea Collection</h1>
            <p>Describe this collection.</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    <Route path="/" element={<HomePage/>} />
                    {/* <Route path="/create" element={<AddTeaPageForm />} />  */}
                    <Route path="/TeasPage" element={<TeasPage setTea={setTeaToEdit}/>} />
                    {/* <Route path="/create" element={<AddTeaPageForm />} />  */}
                    <Route path="/create" element={<AddTeaPageTable />} /> 
                    {/* <Route path="/update" element={<EditTeaPageForm teaToEdit={tea} />} /> */}
                    <Route path="/update" element={<EditTeaPageTable teaToEdit={tea} />} />
                    {/* <Route path="/TopicsPage" element={<TopicsPage />} /> */}
                    <Route path="/TopicsPage" element={<TopicsPage />} />
                    
                </Routes>
              </section>
          </main>

          <footer>
            <p>&#169; 2023 Olivia Russell</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;