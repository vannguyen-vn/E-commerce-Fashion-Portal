# fashion-store# E-commerce Fashion Portal
![javascript](https://img.shields.io/badge/JavaScript-20232A?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![node.js](https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=nodedotjs&logoColor=green)
![Express](https://img.shields.io/badge/-Express-20232A?style=for-the-badge&logo=express&logoColor=yellow)
![Webpack](https://img.shields.io/badge/-webpack-20232A?style=for-the-badge&logo=webpack&logoColor=blueviolet)
![Babel](https://img.shields.io/badge/-Babel-20232A?style=for-the-badge&logo=babel&logoColor=yellow)
![html](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![css](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Less](https://img.shields.io/badge/less-2B4C80?style=for-the-badge&logo=less&logoColor=white)

## Project Catwalk
This is a modernized retail portal based on design specifications and requirements outlined by project stakeholders. 

<!-- Insert gif of overall image  -->

## Tech Stack and Challenges

### React
Utilized React on to implement a responsive, single-page application capable of rendering data from a third-party API. 


### Node.js and Express
<!-- - Despite being a front-end capstone that explicitly placed back-end implementation out of scope, used Nodejs to utilize Express. -->
<!-- - Simplified API requests by implementing a proxy server in Express.js that adds authentication while forwarding requests to an existing RESTful API. -->
Although the emphasis of this project was front-end development, we utilized an Express for Node.js server to route requests to a RESTful API with necessary authorization added. Express compression middleware was used for optimization.

### Webpack
Used webpack as our solution for bundling static assets. The compression, imageminimizer and cssminimizer plugins help boost web performance.
<!-- - Webpack was our solution to elegantly handle our numerous static assets, implement JSX, and harness ES6 in this project. -->

---

## Product Overview

The Product Overview contains an image carousel that can be toggled by left and right arrows, along with the thumbnail track. The gallery can expand over the product information for a zoomed in view that will track the user's cursor position for dynamic zoom. Customers can toggle styles and add products to their cart.

## Related Products 
Related products which present the user with products similar to the currently selected product, provided by the external API and it changes accordingly. Having carousel of cards let users navigate between the card. When a user clicks on the star icon in the upper righthand corner of the card, a modal will pop up comparing the feature of the current product and the selected product.


## Ratings and Reviews
<!-- We implemented modals using React.CreatePortal. -->

The ratings and reviews section includes a list of available reviews paired with a side panel displaying product metadata. The review list pulls in data from an API endpoint and dynamically renders individual reviews with varying sub-components.

The side pannel includes a review rating breakdown bars. Each star rating bar acts as filter for the review list, allowing the user to refine the review list based on average rating.

Selecting the “add a review” button at the bottom of the review list renders a new React DOM modal housing a form that allows users to rate the overall product score. Submitting the form sends a post request to the API to save the data.

## Set up Instructions
1. Clone this repository to your local machine
2. Using npm, install project dependencies :

   ```
   npm install
   ```
3. Using webpack, bundle the files:
   ```
   npm run build
   ```
4. To run the server:
   ```
   npm run start
   ```
5. Open localhost: 3000 in the browser

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[QuestionsAndAnswers]: readMeAssets/QuestionAnswer.gif
[ProductOverview]: readMeAssets/productOverview.png
