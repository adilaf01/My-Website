/* The following javascript file contains elements of AI generated code to create 
a fade in effect when scrolling down the webpage. The code has been edited to fit the 
use of the website being made.*/

/* The AI tool used for creating these scripts was Open Ai's  Chat GPT-3 */

/* This is the first fade-in-effect which has been utilised */

/* The reason multiple duplicates of the same piece of code has been utilised is because 
each is associated to specific ID to create a transition effect when scrolling down the 
webpage*/

/* The fade-in-effects---------------------------------------*/

/* Associated to (id=content) */
      /* Create a query selector */
      const content = document.querySelector('#content');

      /* Added an event - scroll */
 window.addEventListener('scroll', () => {
   const scrollPos = window.scrollY + window.innerHeight;
   const contentPos = content.offsetTop + content.offsetHeight;
 
       /* if function asking if the scroll position is greater than or equal
       to content position then the opacity becomes 100% or as an integer '1'*/
   if (scrollPos >= contentPos) {
     content.style.opacity = '1'; /* Show the content */
   }
 });
 
 
 /* Associated to (id=content2)*/
 const content2 = document.querySelector('#content2');
 
 window.addEventListener('scroll', () => {
   const scrollPos = window.scrollY + window.innerHeight;
   const content2Pos = content2.offsetTop + content2.offsetHeight;
 
   if (scrollPos >= content2Pos) {
     content2.style.opacity = '1'; /* Show the content */
   }
 });
 
 
 /* Associated to (id=content3)*/
 const content3 = document.querySelector('#content3');
 
 window.addEventListener('scroll', () => {
   const scrollPos = window.scrollY + window.innerHeight;
   const content3Pos = content3.offsetTop + content3.offsetHeight;
 
   if (scrollPos >= content3Pos) {
     content3.style.opacity = '1'; /* Show the content */
   }
 });
 
 
 window.addEventListener('scroll', function() {
   var projects = document.querySelector('#about');
   var projectsPosition = projects.getBoundingClientRect().top;
   var screenPosition = window.innerHeight / 1.5;
 
   if (projectsPosition < screenPosition) {
     projects.classList.add('fade-in');
   }
 });
 
 window.addEventListener('scroll', function() {
   var projects = document.querySelector('#slide');
   var projectsPosition = projects.getBoundingClientRect().top;
   var screenPosition = window.innerHeight / 1.5;
 
   if (projectsPosition < screenPosition) {
     projects.classList.add('fade-in');
   }
 });
 
 
 /* A fade-in effect that is used when the page is first loaded 
 for the projects div. This was Ai assisted code*/
 window.addEventListener('scroll', function() {
   var projects = document.querySelector('#projects');
   var projectsPosition = projects.getBoundingClientRect().top;
   var screenPosition = window.innerHeight / 1.5;
 
   if (projectsPosition < screenPosition) {
     projects.classList.add('fade-in');
   }
 });
 