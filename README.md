# Web Development Visualization

For the finished website, please see `https://web101fanjiang.z13.web.core.windows.net/`

## Files:
This project has the following folders and files:
```
/data
/images
/Location_Bubble
/Status_Bar
/Year_Pie
/styles
index.html
```
1. /data folder contains the dataset we used from Kaggle: `https://www.kaggle.com/petersunga/google-amazon-facebook-employee-reviews/version/2`. This folder also contains the R files that were used to manipulate the data, and the ready-to-use datasets.
2. /images folder contains the images we used to build the website.
3. /Location_Bubble contains the html file that generates our first bubble visual, which shows the number of participants distributed by location. Partial of this visual template is downloaded from: `https://github.com/UsabilityEtc/d3-country-bubble-chart`. This visual is built using D3.js.
4. /Status_Bar contains the html file that generates our second visual - grouped bar chart, which shows the rating distribution by employee status. This visual is built using Chart.js.
5. /Year_Pie contains the visual package downloaded from `https://github.com/sitepoint-editors/ThePieGetsBigger`. Our visual is built based on this template using D3.js. This visual shows the rating change grouped by year.
6. /styles folder contains the css files for desktop and mobile versions. 
7. index.html is the home page for our website. Through this page you can get access to all of the dataset and visuals.

## Running Integration Tests:
1. Please ensure you have node environment setup (`https://nodejs.org/en/download/`)
2. Install JS dependencies and required softwares

`npm install http-server`
`npm install d3`
chart.js download: `https://github.com/chartjs/Chart.js/releases/download/v2.8.0/Chart.js`

Version:
chart.js: v2.8.0
d3.js: 5.9.2
node.js: v11.10.0
Visual Studio: 1.32.3
http server: 0.11.1
RStudio: 1.1.414
R: 3.4.3

3. Open terminal, change the path to the directory where you put this folder, then run `http-server`. 
4. Now you can visit `http://localhost:8080/` to view our website. 
   
### Contact Information
Please contact us at fj1@ualberta.ca if you have any questions.
