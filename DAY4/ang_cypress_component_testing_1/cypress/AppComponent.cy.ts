import { AppComponent } from '../src/app/app.component';

describe('test suite for AppComponent.cy.ts', () => {
  // it('should instantiate (mount) App Component', () => {
  //   // 1st way
  //   cy.mount(AppComponent); // compile anf render it in the browser
  // });
  // it('should instantiate (mount) App Component', () => {
  //   // 2nd way - mocking dependencies
  //   cy.mount(AppComponent, {
  //     declarations: [AppComponent],
  //     providers: [],
  //     imports: [],
  //   }); // compile and render it in the browser
  //   cy.get('h1').should('contain', 'Hello, ang_cypress_component_testing_1');
  // });

  it('should instantiate (mount) App Component', () => {
    // 3nd way - passing the model data
    cy.mount(AppComponent, {
      componentProperties: {
        title: 'Component testing using Cypress',
      },
    }); // compile and render it in the browser
    cy.get('h1').should('contain', 'Component testing using Cypress');
  });
});
