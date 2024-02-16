const testCasesFile = [
  {
    id: 1,
    title: 'Positive LogIn Test',
    steps: [
      'Open page',
      "Type username 'ayhan89' into Username field",
      "Type password 'ayhan123' into Password field",
      'Push Submit button',
      'Verify new page contains expected text "Login Successful! "',
      "Verify button 'Log out' is displayed on the page",
    ],
    links: [
      {
        name: 'Cypress',
        pageUrl: '/practice/loginpage/1',
        gitHubUrl:
          'https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/blob/main/cypress/e2e/Test_Login_Page/Positive_Login_Test.cy.js',
      },
      // { name: 'Selenium', url: '' },
      // { name: 'Playwright', url: '' },
    ],
  },
  {
    id: 2,
    title: 'Negative Username Test',
    steps: [
      'Open page',
      "Type username 'incorrectUser' into Username field",
      "Type password 'ayhan123' into Password field",
      'Push Submit button',
      'Verify error message is displayed',
      "Verify error message text is 'Your username is invalid!'",
    ],
    links: [
      {
        name: 'Cypress',
        pageUrl: '/practice/loginpage/2',
        gitHubUrl:
          'https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/blob/main/cypress/e2e/Test_Login_Page/Negative_Username_%20Test.cy.js',
      },
      // { name: 'Selenium', url: '' },
      // { name: 'Playwright', url: '' },
    ],
  },
  {
    id: 3,
    title: 'Negative Password Test',
    steps: [
      'Open page',
      "Type username 'ayhan89' into Username field",
      "Type password 'incorrectPassword' into Password field",
      'Push Submit button',
      'Verify error message is displayed',
      "Verify error message text is 'Your password is invalid!'",
    ],
    links: [
      {
        name: 'Cypress',
        pageUrl: '/practice/loginpage/3',
        gitHubUrl:
          'https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/blob/main/cypress/e2e/Test_Login_Page/Negative_Password_Test.cy.js',
      },
      // { name: 'Selenium', url: '' },
      // { name: 'Playwright', url: '' },
    ],
  },
  {
    id: 4,
    title: 'Username Field Validation Test',
    steps: [
      'Open page',
      'Leave Username field empty',
      "Type password 'ayhan123' into Password field",
      'Push Submit button',
      'Verify error message is displayed',
      "Verify error message text is 'Username and password cannot be empty!'",
    ],
    links: [
      {
        name: 'Cypress',
        pageUrl: '/practice/loginpage/4',
        gitHubUrl:
          'https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/blob/main/cypress/e2e/Test_Login_Page/Username_Field_Validation.cy.js',
      },
      // { name: 'Selenium', url: '' },
      // { name: 'Playwright', url: '' },
    ],
  },
  {
    id: 5,
    title: 'Password Field Validation Test',
    steps: [
      'Open page',
      "Type username 'ayhan89' into Username field",
      'Leave Password field empty',
      'Push Submit button',
      'Verify error message is displayed',
      "Verify error message text is 'Username and password cannot be empty!'",
    ],
    links: [
      {
        name: 'Cypress',
        pageUrl: '/practice/loginpage/5',
        gitHubUrl:
          'https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/blob/main/cypress/e2e/Test_Login_Page/Password_Field_Validation.cy.js',
      },
      // { name: 'Selenium', url: '' },
      // { name: 'Playwright', url: '' },
    ],
  },
  {
    id: 6,
    title: 'Password Strength Test',
    steps: [
      'Open page',
      "Type username 'ayhan89' into Username field",
      "Type a weak password '1234' into Password field",
      'Push Submit button',
      'Verify error message is displayed',
      "Verify error message text is 'Password is too weak!'",
    ],
    links: [
      {
        name: 'Cypress',
        pageUrl: '/practice/loginpage/6',
        gitHubUrl:
          'https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/blob/main/cypress/e2e/Test_Login_Page/Password_Strength_Test.cy.js',
      },
      // { name: 'Selenium', url: '' },
      // { name: 'Playwright', url: '' },
    ],
  },
];

export default testCasesFile;
