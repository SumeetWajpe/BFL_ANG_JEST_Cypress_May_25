import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { LoaderService } from "./shared/services/loader.service";
describe("test suite for App Component", () => {
  it("should create App Component instance", async () => {
    // arrange
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [LoaderService],
      imports: [RouterTestingModule],
    }).compileComponents(); // compileComponents() - compile the css and html

    // act
    const fixture = TestBed.createComponent(AppComponent); // instantiation of AppComponent
    const app = fixture.componentInstance; // fixture - metadata along with component instance info

    // assert
    expect(app).toBeTruthy();
  });
});
