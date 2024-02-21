const testCasesFile = [
  {
    id: 1,
    title: 'Login Test with Dynamic Data',
    steps: [
      'Open page https://ayhando.vercel.app/login',
      'Type a dynamically generated username into Username field',
      'Type a dynamically generated password into Password field',
      'Push Submit button',
      'Verify URL includes "/" to confirm redirection to the main page',
      'Verify button "Logout (Germany2024)" is displayed and visible on the page',
      'Verify the presence of the Add button',
    ],
    links: [
      {
        name: 'Cypress',
        pageUrl: 'https://ayhando.vercel.app/login',
        gitHubUrl:
          'https://github.com/ayhanmetin/Ecommerce-Cypress-Test-Automation/blob/main/cypress/e2e/E-commerce_Test_File/Fakerjs_Login_Test.cy.js',
      },
      // { name: 'Selenium', url: '' },
      // { name: 'Playwright', url: '' },
    ],
  },
];

export default testCasesFile;
