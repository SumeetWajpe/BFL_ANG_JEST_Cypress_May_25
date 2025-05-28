import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { LoaderService } from "./shared/services/loader.service";
import { DebugElement } from "@angular/core";
describe("test suite for App Component", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [LoaderService],
      imports: [RouterTestingModule],
    }).compileComponents(); // compileComponents() - compile the css and html
  });
  it("should create App Component instance", () => {
    // act
    const fixture = TestBed.createComponent(AppComponent); // instantiation of AppComponent
    const app = fixture.componentInstance; // fixture - metadata along with component instance info

    // assert
    expect(app).toBeTruthy();
  });

  it("should test if title is equal to pokedex-angular", () => {
    // act
    const fixture = TestBed.createComponent(AppComponent); // instantiation of AppComponent
    const app = fixture.componentInstance; // fixture - metadata along with component instance info
    expect(app.title).toEqual("pokedex-angular");
  });

  fit("tests if h1 tag is having header class generated", () => {
    // nativeElement returns a DOM tree
    // debugElement -> is Angular Object and has additional methods of reference
    const fixture = TestBed.createComponent(AppComponent); // instantiation of AppComponent
    const el: DebugElement = fixture.debugElement;
    const h1 = el.nativeElement.querySelector("h1.header");
    expect(h1).toBeTruthy();
  });
});
