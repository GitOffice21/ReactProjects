import React from 'react';
import { AuthProvider } from '../auth/authContext.jsx'; // or correct relative path
import AppRouter from "./routes/AppRouter.jsx";

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
