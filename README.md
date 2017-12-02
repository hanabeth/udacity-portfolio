# Portfolio Project - Udacity Fullstack Nano-Degree
This project creates a personal portfolio site. React was used to make the code more reusable. This project is a part of the [Udacity Fullstack Nanodegree](https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004)

# Resources
[React Boilerplate Used](https://github.com/facebookincubator/create-react-app)

[Portfolio Comp](https://d17h27t6h515a5.cloudfront.net/topher/2017/November/5a136147_design-mockup-portfolio/design-mockup-portfolio.pdf)

[Images](https://unsplash.com)

[Icons](http://fontawesome.io)

# Files:
The only images/elements specific to me can be changed in the following files:
* portfolio.js - name, position, and personal photo. Aside from that, this is the main file that renders the page and calls component featured-work.js
* featured-work-constants.js - list of personal projects. The list gets imported in components/featured-work.js

Reusable files:
 * header.js - renders the header. Parameters passed to it:
    * fullname
    * job position
 * featured-work.js - imports the constants from featured-work-constants.js and then maps through the array, passing the FeaturedCard component the props needed for the portfolio cards:
    * image to decorate card
    * title fo project
    * url to the projects source code.
  * featured-card.js - displays the project cards.
  * featured-cards.css
  * featured-work.css
  * header.css
  * portfolio.css
 
 Any other folders/files (such as the public folder and src/index.js) are from the [Create React App](https://github.com/facebookincubator/create-react-app) project.
 
# How to run the code
* Clone this repository into a local directory and then navigate to the project via terminal.
```
cd udacity-portfolio
```
* Then install the node modules needed to run the project.
```
npm install
```
* After the installation is done, run the following command to start the application:
```
npm start
```

The website should automatically open, but if not put the following address in your browsers search bar:
```
localhost:3000/
```

## License

This program is based off of a project from [Udacity's Full Stack Web Developer Nanodegree](https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004).
The React boilerplate I used to create this project - [React Boilerplate](https://github.com/facebookincubator/create-react-app).
Icons used on site are from [Font Awesome](http://fontawesome.io).
