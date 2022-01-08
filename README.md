

# Full-stack Developer role test


**Acess the deployed version of this project on this link:**
<a href="https://www.industria-i.com.br/" target="_blank">NestJs, Angular and NX project</a>

<p>This project was created using:
  <ul>
    <li>Nx(monolith management with libs sharing between back and front-end),</li>
    <li>NestJs (NodeJs framework),</li>
    <li>NgRx (State Management),</li>
    <li>RxJs (Observables pipes),</li>
    <li>Angular (SPA framework),</li>
    <li>and Angular Material (official Angular Components lib).</li>
    <li> Jest for the unit tests</li>
  </ul>     
</p>
<p>The deploy to containers required:
  <ul>
    <li>Docker,</li>
    <li>AWS cli installation</li>
    <li>and Amazon ECS.</li>
   </ul>
  </p>

🔎 **Author: Daniel Melo - cmdaniel@gmail.com**

  **Warrington, UK - January 8th, 2022**


## Disclosures

<p>This is an autoral and open source project, but it used some important references on Internet. The main refs are listed bellow.</p>
<p>Since it is a public repository, it doesn't disclose the name of recruiters or companies that required this coding test.</p>
<p>I received a json file but it mimics a public API and doesn't not violate personal or private sensitive data.</p>
<p>I only create unit tests, using a TDD aproach (I started coding the tests before the API methods) for the back-end.</p>
<p>My experience with unit tests and e2e tests are not very strong, but I think that I can make it works, and improve my skills on it.</p>

## Project scope
<p>From the ground up, just receiving a json file with Rails, Legs and Tickets, create a NodeJs Backend and an Angular Front-end to show the tickets.</p>

## Project Architecture

### Back-end
In the Back-end I used the NestJs framework. It is a great, easy to use and very similar to the Angular syntaxe. It was build on the Express.


## Time tracking
<p>I described each development stack in the git commits. So, it is possible to see how I add each element, build features, fixed bugs and code refactoring.
This project was executed in my spare time in 3 different days (06/jan, 07/jan and 08/jan/2022). </p>
<p>In total, I spend about 9 hours in the Back and Front end, plus 2 hours building the container and deploy.</p>

## Difficults during the execution
- I had minor problems during the coding fase, but it took me valuable time. For example, the simple json file reading was not working, I implemented many embbeded and runtime different codes. In the end of day, it was just the wrong place that I put the file, because the NX file structure.
- The NgRx boilerplate can be very anoying to start, because the syntaxe of this library was changed substantially a long time and it my vary if you use Entity and other complementary elements. Therefore, the code samples on Internet can have different ways to do the same and it tooks time to understand the variations and use each element appropriately.

## References

- https://betterprogramming.pub/angular-using-ngrx-schematics-ngrx-entity-to-speed-up-your-development-process-bb4edbab12d
- https://github.com/brandonroberts/nx-ngrx-seinfeld-app/blob/master/libs/quotes/data-access/src/lib/%2Bstate/quotes.reducer.ts
- https://material.angular.io/components/card/examples
- https://www.youtube.com/watch?v=ra_kJFIpU4A



## How to use this code

- Clone the project
- npm install
- Open 2 different terminals, one for the Back-end and other for the front-end
- In the back-end terminal, run `npm run api`
- In the front-end terminal, run `npm run app`







