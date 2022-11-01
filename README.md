Thanks for downloading the app. This file shows you how to use this app.  To run the app right away without reading other parts 
of this document, please scroll down to phase 2 below. Alternatively, simply run `npm install` and then `npm start` on the root folder of this project.

However, I recommend going through the entire documentation. There are 4 phases in this documentation. Phase 1 is the description of the  project.
Phase 2 shows how to run the project. Phase 3 provides additional information on testing and deployment while phase 5 provides licensing information.

*****************************************************************************************************************************************

### PHASE 1:  DESCRIPTION AND DEFINITION OF THE APP


# PROJECT NAME: GOOD CARBON

# DESCRIPTION: HOME ASSESSMENT TASK
This app allows users to search for projects using any keyword. When the keyword (at least 3 letters) matches any project on the database, it will show the projects and activates the search button. By clicking on "Search Project" button, the user can now be taken to another page where he can see all the projects. The user can create or uncreate each project, he can approve or unapprove each project, and he can publish or unpublish each project.

# App Created By: Martin Oputa <martin@martinoputa.com>

# USE CASE FOR THIS APP
This app can be used internally by a company to keep track of all the project status. The use of Redux in managing application state in this app means that it can be used to manage large database. Additionally, this ensures that the app can scale in the long-run.


# VISUALS
You can get idea of how this project looks like by viewing the screenshot from the links listed below. Alternatively, you can run the project to see how it looks and works in real live
Links for visuals:
https://ibb.co/Xx9MKzq
https://ibb.co/LxDLHhX 



# TECHNOLOGIES USED FOR THIS APP:
- TypeScript: 79%
- HTML: 11.8%
- JavaScript: 6.5%
- CSS: 2.5%
- Material-UI
- Redux
- Styled Components
- NPM


# FEATURES
- Search project functionality
- Create (and un-create) project functionality
- Approve (and unapprove) project functionality
- Publish (and unpublish) project functionality


# APP DESIGN LOGIC
Redux was used in this app to manage the app state. While redux is not necessary for small apps, it is important in the enterprise-scenario since it becomes much useful as the app grows. Styled-component was combined with Material-UI  in this project. The use of Styled-Component makes it easier to keep the CSS for each 
component inside that component. This makes it easier to debug the app and of course, maintain and scale it. Finally, the components in the app were kept as small as
possible following the industry standard for easy maintenance.

*****************************************************************************************************************************************


### PHASE 2:  HOW TO RUN THIS APP ON YOUR MACHINE

In this phase 2, we discuss how you can set up this app and run it locally on your machine

# Step 1:
Cd into the project root folder e.g: user\goodcarbon

Note: The exact file path may differ on your machine. However, the project is saved on a folder name `goodcarbon`

# Step 2:
Run `npm install`

Note: `npm install` will download node_modules and also add all the dependencies used for this project

# Step 3:
After node_modules installation have been completed, run the following command to start the project on development mode:

Run `npm start`

# Step 4:
After running `npm start`, the app should not start on [http://localhost:3000]
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


*****************************************************************************************************************************************


### PHASE 3: ADDITIONAL INFO
This section is only necessary if there is a need to scale the app and use it on real live scenario.

# To test the app:
Run `npm test`

Note: This will launch the test runner in the interactive watch mode.

# To build the app
Run `npm run build`

Note: This will build the app and minify it for production. The build app can be seen on the  `build` folder. You can only deply the app after the build is completed.
It correctly bundles React in production mode and optimizes the build for the best performance.


# Support
To ask questions regarding this project, please contact the author via e-mail at: `martin@martinoputa.com`

*****************************************************************************************************************************************


### PHASE 4: LICENCE
MIT License

Copyright (c) [2022] [`MARTIN OPUTA`]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

# Acknowledgment
This project was inspired by goodcarbon. I'm very grateful for the opportunity to get an insight on some of the tasks required of a frontend developer in 
your company.