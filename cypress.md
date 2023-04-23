# Cypress Installation Guide

## System requirements
---
### Operating System

 Cypress is a desktop application that is installed on computer. The desktop application supports these operating systems:

    - macOS 10.9 and above (Intel or Apple Silicon 64-bit (x64 or arm64))
    - Linux Ubuntu 12.04 and above, Fedora 21 and Debian 8 (x86_64 or Arm 64-bit (x64 or arm64))
    - Windows 7 and above (64-bit only)

 #### Node.js

   If you're using npm to install Cypress, it support:
 

    - Node.js 14.x
    - Node.js 16.x
    - Node.js 18.x and above

  Cypress generally aligns with Node's release schedule(**https://github.com/nodejs/Release**).
 
#### Hardware

   When running Cypress in CI, we recommend that you have the following hardware requirements:
   
 CPU Requriment
 
    - 2 CPUs minimum to run Cypress
    - 1 additional CPU if video recording is enabled
    - 1 additional CPU per process you run outside of Cypress, such as:
        App server (frontend)
        App server (backend)
        App database
        Any additional infrastructure (Redis, Kafka, etc..)

   Memory

    4GB minimum, 8GB+ for longer test runs

###  Installing
  ---
 ### Install Cypress via npm:
  
   ##### To install Cypress using the npm (Node package manager) navigate to the project directory and execute the following command:

  - To navigate to your project directory
     ```
     cd /your/project/path
     ```
  - The create the package.json file in your project
     ```
     npm init
     ```
    ```sh
      Make sure that you have already run npm init or have a node_modules folder or package.json file in the root of your project to  ensure cypress is installed in the correct directory.
    ```
    Once done, run the command below to install Cypress.

     ```
      npm install cypress --save-dev
     ```
    above command will install Cypress locally as a dev dependency for your project.

  Cypress installation is now complete.
  For more information **https://docs.cypress.io/guides/getting-started/installing-cypress**

#### Now you can open Cypress from your project root one of the following ways:

 ##### Using npx
 
     npx cypress open
   
#### To use TypeScript with Cypress

      To use TypeScript with Cypress, you will need TypeScript 3.4+. 

  - Install Typescript Using the Below Command Typing in Terminal

      ```
       npm install --save-dev typescript
      ```
  - Type the below command to create tsconfig.json file.

      ```
       npx tsc --init
      ```
    - now Navigate to tsconfig.json file
    - Remove all default settings inside it. (make it empty)
    - Copy and paste the below code
    
    ```
       {
     "compilerOptions": {
     "target": "es5",
     "lib": ["es5", "dom"],
     "types": ["cypress", "node"]
      },
     "include": ["**/*.ts"]
     }
    ``` 
#### Execute Cypress Tests Using the Command-Line Interface Cypress CLI
   Navigate to the project folder and enter the below command
    ```
     npx cypress run --spec="./cypress/e2e/script.spec.ts"
    ```

## Learn more
 
 * https://docs.cypress.io


## How to run Cypress tests with GitHub Actions as part of CI/CD pipeline

  With CI/CD implemented we can set up our project’s CI/CD pipeline. So, our automation test suite would run whenever anyone pushes a code or creates a pull request automatically. It will take the latest code from the Git repository and run the test.

  #### steps to set up GitHub Actions in the Git repository:

   - goto your project repository.
   - click on Add file
   - Enter .github/workflows/main.yml ( It has to be in the same sequence). main.yml is the file name, 
      you can name it as per choice.
   - Create a workflow file.
       Follow the below sample code to create a GitHub Actions workflow (.yml file)
       copy and paste below code in main.yml file
 
       ```
          name: Cypress Tests
           on: [push]
            jobs:
               Cypress-Test:
                  runs-on: ubuntu-latest
                   steps:
                         - name: Checkout GitCode
                           uses: actions/checkout@v2
 
                         - name: Run Cypress Test
                           uses: cypress-io/github-action@v4
                     with:
                           command: npx cypress run
                             browser: chrome
       ```
   -  now do git pull from your terminal
   - The above workflow would be called whenever there will be code push to remote GitHub repository.

   Once, the workflow is run.workflow run status can view from the Actions tab in your GitHub Project 
   
   Detailed documentation is available in the GitHub Action Documentation(**https://docs.github.com/en/actions**).

   **Learn more https://docs.cypress.io/guides/continuous-integration/github-actions**
