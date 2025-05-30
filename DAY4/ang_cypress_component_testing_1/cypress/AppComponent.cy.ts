import { AppComponent } from '../src/app/app.component';

describe('test suite for AppComponent.cy.ts', () => {
  it('should instantiate (mount) App Component', () => {
    // 1st way
    cy.mount(AppComponent); // compile anf render it in the browser
  });
});
