# Mindarc Frontend Assessment Boilerplate 

Assessment accomplished by *George Asuncion Jr*

## Project Contents
- original source files (HTML, JS, CSS)
- distribution files


### Dependencies

If source files need to be tested make sure these are installed first.

- [Node.js](http://nodejs.org)
- [Gulp Command Line Utility](http://gulpjs.com) `npm install --global gulp-cli`

### Testing

__Testing with source files:__
1. In bash/terminal/command line, `cd` into your project directory.
2. Run `npm install` to install required files and dependencies.
3. When it's done installing, run one of the task runners to get going:
	- `gulp` manually compiles files.
	- `gulp watch` automatically compiles files and applies changes using [BrowserSync](https://browsersync.io/) when you make changes to your source files.
	
__Testing with distribution files:__
1. Go to project directory.
2. Open the dist folder and locate the assessment files (exercise1.html or exercise2.html) you wish to check





### Assessment Notes

##### Exercise 1

- Created the responsive design website with HTML and CSS (through SASS)
- Used [Gulp Boilerplate](https://github.com/cferdinandi/gulp-boilerplate)

##### Exercise 2

- Display data from `data.json` as tabs on desktop and an accordion on mobile
- Data is gathered using the `fetch()` API directly from the  [Project Github](https://raw.githubusercontent.com/mindarc/frontend-assessment/master/data.json) repository
- Does not use any Javascript libraries

###### Bonus
Explain why the result of ('b' + 'a' + + 'a' + 'a').toLowerCase() is banana.

_The following expression 'b' + 'a' + + 'a' + 'a' will be evaluated a (regular concatenation) s:_

- `('b') + ('a')` = ba
- `+ (+'a')` = NaN (Not a Number, attempts to convert the string to a number but fails because a is not a number that's why it returns NaN)
- `+ ('a')` = a
- The current result will be: baNaNa
- From this expression `toLowerCase()` method is applied that will result to **banana**
