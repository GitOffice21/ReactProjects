const authService = {
  login: async ( ) => {
    // Mock an API delay
    await new Promise(res => setTimeout(res, 500));
    // Just accept any email/password and store a dummy token
    localStorage.setItem('authToken', 'dummy-token');
  },
  signup: async () => {
    await new Promise(res => setTimeout(res, 500));
    // Do nothing (simulate success)
  },
  logout: () => {
    localStorage.removeItem('authToken');
  },
  getToken: () => localStorage.getItem('authToken'),
};

export default authService;
