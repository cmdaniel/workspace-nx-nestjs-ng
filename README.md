

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


## Project scope
<p>From the ground up, just receiving a json file with Rails, Legs and Tickets, create a NodeJs Backend and an Angular Front-end to show the tickets.</p>

## Project Architecture

### Back-end
<p>In the Back-end I used the NestJs framework. It is a great, easy to use and very similar to the Angular syntaxe. It was build on the Express.</p>
<p>Despite a very simple scope, I tried to demonstrate some SOLID principles.</p>
<p>**app.service**: is the main service responsible to provide data to the controllers. It receives the provider (RailService) and data transformation services by Dependence Injection. I also created some custom operators for RxJs and the result is a very clean code, easy to read and also loosely coupled with the data provider and data tranformation classes.</p>
<p>**RailService**: It just contain a Single Responsability and a single reason to change. It has a factory method with a business rule that will factory the data provider according to condition (EnRailType). It allows provide data from the json file, but also implement an API call in the future without requires change in the main service. Beyond being prepared to future extensions, it also allows commute the data source based on Use Cases. For example, a simple method could detect a problem with the API (It was not implemented an API call, but it basic structure was) and them factory the json file instead.</p>
<p>Just because of the limited time, just the last level was consider to be exposed (Tickets) and the transformation does a reduction in the json source to extract some elements of superior level and all of the Tickets entity.</p>

### Front-end
<p>It is a well structure Angular project, with some separated elements in different components and Input and Output communication between them.</p>
<p>It was also implemented a Redux state management with the NgRx. The interface is Reactive what means any changes in the data emission will automatically update the interface.</p>
<p>The use of async pipe also unsubscribe the observable automatically to avoid memory leak</p>
<p>Since the visuals wasn't a requirement, I didn't spend much time thinking in the UX. But is a well presented interface, using Angular Material in a Grid that turns the page responsive.</p>

## What can be improved
- Implement routes and route guards in the front-end
- Create search, and hierachic organization between Rail, Legs and Tickets
- Change the components strategies to turn-off the change detection and improve performance
- In the back-end if the relation between Rail, Legs and Tickets has much more complexity, it will be interesting have separated classes and interfaces to describe each one of these classes and the relation between then, but respecting SOLID principles.

## Disclosures
<p>This is an autoral and open source project, but it used some important references on Internet. The main refs are listed bellow.</p>
<p>Since it is a public repository, it doesn't disclose the name of recruiters or companies that required this coding test.</p>
<p>I received a json file but it mimics a public API and doesn't not violate personal or private sensitive data.</p>
<p>I only create unit tests, using a TDD aproach (I started coding the tests before the API methods) for the back-end.</p>
<p>My experience with unit tests and e2e tests are not very strong, but I think that I can make it works, and improve my skills on it.</p>
<p>I was the only one developer of this project and I had any help beyond the stack overflow, github autopilot, youtube and blogs. My computer has a different account registered on git, so probably the commits are from my other github user.</p>

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

- Check if you machine or container has the Node 14.18.2
- Clone the project
- npm install
- Open 2 different terminals, one for the Back-end and other for the front-end:
  - In the back-end terminal, run `npm run api`
  - In the front-end terminal, run `npm run app`


## Run the Unit Tests for the back-end
- `npm run test-api`
or
- `npm run test2` (it will run the tests in watch mode)





