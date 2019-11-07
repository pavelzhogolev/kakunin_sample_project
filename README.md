# kakunin_sample_project
Sample automation project using Kakunin framework.

## Getting started

Make sure that you have installed:
* node.js - v7.8.0 min
* JDK
* Chrome

To run tests do following:
1. Clone current repository
1. Go to the project root directory in terminal
1. Run ```npm install``` to install dependencies
1. Run ```npm run kakunin``` to execute existing tests

**NOTE:**
In order to properly work with step definitions/feature files in IntelliJ IDEA Cucumber.js plugin should be installed.

More on kakunin: https://thesoftwarehouse.github.io/Kakunin/docs/index.html
 
## Troubleshooting
If you have issues with running tests due to errors in ```..\step_definitions\kakunin-*.js``` files try to recreate symbolik links to kakuin step definitions:
1. Go to ```step_definitions``` directory
1. Remove all ```kakunin-\*.js``` files
1. Go to the same directory in terminal (terminal should be started with administrator permissions)
1. Run following:
```mklink kakunin-debug.js ..\node_modules\kakunin\dist\step_definitions\debug.js
mklink kakunin-elements.js ..\node_modules\kakunin\dist\step_definitions\elements.js
mklink kakunin-debug.js ..\node_modules\kakunin\dist\step_definitions\debug.js 
mklink kakunin-file.js ..\node_modules\kakunin\dist\step_definitions\file.js 
mklink kakunin-form.js ..\node_modules\kakunin\dist\step_definitions\form.js 
mklink kakunin-email.js ..\node_modules\kakunin\dist\step_definitions\email.js
mklink kakunin-generators.js ..\node_modules\kakunin\dist\step_definitions\generators.js 
mklink kakunin-navigation.js ..\node_modules\kakunin\dist\step_definitions\navigation.js 
mklink kakunin-performance.js ..\node_modules\kakunin\dist\step_definitions\performance.js
