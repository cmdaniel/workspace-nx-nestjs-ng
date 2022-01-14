

# Full-stack Developer role testing


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
<p>The deploy in AWS containers required:
  <ul>
    <li>Docker,</li>
    <li>AWS cli installation</li>
    <li>and Amazon ECS and Fargate.</li>
   </ul>
  </p>
  
<p>The Front-end was deployed to Vercel, integrated with the github repository</p>

🔎 **Author: Daniel Melo - cmdaniel@gmail.com**

  **Warrington, UK - January 8th, 2022**


## Project scope
<p>From the ground up, just receiving a json file with Rails, Legs and Tickets, I had to create a NodeJs Backend and an Angular Front-end to show the Tickets.</p>

## Project Architecture

### Back-end
<p>In the Back-end I used the NestJs framework. It is a great, easy to use and very similar to the Angular syntax. It was built on the Express.</p>
<p>Despite a very simple scope, I tried to demonstrate some SOLID principles.</p>
<p>**app.service**: It is the main service responsible for providing data to the Controllers. It receives the provider (RailService) and Data Transformation Services by Dependence Injection. I also created some custom operators for RxJs pipes and the result is a very clean code, easy to read and also loosely coupled with the Data Provider and Data Tranformation Classes.</p>
<p>**RailService**: It just contain a Single Responsability and a Single Reason to Change. It has a factory method with a Business Rule that will factory the Data Provider according to condition (EnRailType). It allows provide data from the json file, but also implement an API call in the future without requiring change in the main service. Beyond being prepared to future extensions, it also allows commuting the Data Source based on Use Cases. For example, a simple method could detect a problem with the API and them factory the json file instead. It is also a candidate to receive a class to check for a record in a Redis Cache.</p>
<p>Just because of the limited time, only the last level of the data tree was considered to be exposed (Tickets node) and the transformation does a reduction in the json source to extract some elements of higher level and all of the Tickets entity.</p>


### Front-end
<p>It is a well structured Angular project, with some separated elements in different components and Input and Output communication between them.</p>
<p>It was also implemented a Redux State Management with the NgRx. The user interface is Reactive what means any changes in the data emission will automatically update the interface. A use for this changes can be perceived in the implementarion of the sort buttons and the input search.</p>
<p>The use of Async Pipe also unsubscribes the Observable automatically to avoid memory leaks.</p>
<p>Since the visuals wasn't a requirement, I didn't spend much time thinking in the UX. But is a well presented interface, using Angular Material in a Grid that turns the page responsive, reducing the number of columns according with the View Port size (user screen).</p>


## What can be improved
- Implement Routes and Route Guards in the front-end
- Create a hierachic organization between Rail, Legs and Tickets
- Change the components strategy to turn-off the change detection and improve performance
- In the back-end if the relation between Rail, Legs and Tickets has much more complexity, it will be interesting have separated classes and interfaces to describe each one of these classes and the relation between then, but respecting SOLID principles.
- **I am oppen to any suggestions:** I would love to learn from an experient archicted/developer some improvements ideas!


## Disclosures
<p>This is an autoral and open source project, but it used some important references on Internet. The main refs are listed bellow.</p>
<p>Since it is a public repository, it doesn't disclose the name of recruiters or companies which required this coding test.</p>
<p>I received a json file but it mimics a public API and doesn't not violate personal or private sensitive data.</p>
<p>I only create unit tests, using a TDD aproach (I started coding the tests before the API methods) for the back-end.</p>
<p>I was the only one developer of this project and I hadn't any help beyond the stack overflow, github autopilot, youtube and blogs. My computer has a different account registered on git, so probably the commits are from my other github user.</p>

## Time tracking
<p>I described each development stack in the git commits. So, it is possible to see how I add each element, build features, fixed bugs and code refactoring.
This project was executed in my spare time in 4 different days. </p>
<p>In total, I spend about 6.5 hours in the Back and Front end, plus 2 hours building the container and deploy.</p>


## Difficults during the execution
- The NgRx boilerplate can be very anoying to commence, because the syntaxe of this library was changed substantially along the time and it may vary if you use Entity and other complementary artifacts. Therefore, the code samples on Internet have different ways to do the same and it tooks time to understand the variations and use each element appropriately.


## References

- https://betterprogramming.pub/angular-using-ngrx-schematics-ngrx-entity-to-speed-up-your-development-process-bb4edbab12d
- https://github.com/brandonroberts/nx-ngrx-seinfeld-app/blob/master/libs/quotes/data-access/src/lib/%2Bstate/quotes.reducer.ts
- https://material.angular.io/components/card/examples
- https://www.youtube.com/watch?v=ra_kJFIpU4A
- https://aws.amazon.com/pt/premiumsupport/knowledge-center/create-alb-auto-register/
- https://aws.amazon.com/pt/premiumsupport/knowledge-center/associate-acm-certificate-alb-nlb/


## How to use this code

- Check if your machine or container has the Node 14.18.2
- Clone this git project
- `npm install`
- Open 2 different terminals, one for the Back-end and other for the front-end:
  - In the back-end terminal, run `npm run api`
  - In the front-end terminal, run `npm run app`


## Run the Unit Tests for the back-end
- `npm run test-api`
or
- `npm run test2` (it will run the tests in watch mode)

