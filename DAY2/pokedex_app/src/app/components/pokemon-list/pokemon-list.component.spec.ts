import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PokemonListComponent } from "./pokemon-list.component";
import { PokemonItemComponent } from "../pokemon-item/pokemon-item.component";
import { FilterPokemonPipe } from "../../shared/pipes/filter-pokemon.pipe";
import { HeaderComponent } from "../../shared/components/header/header.component";
import { StatsFilterComponent } from "../../shared/components/stats-filter/stats-filter.component";
import { DialogComponent } from "../../shared/components/dialog/dialog.component";
import { PokemonDetailsComponent } from "../../components/pokemon-details/pokemon-details.component";
import { PokemonService } from "../../shared/services/pokemon.service";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { FormsModule } from "@angular/forms";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { of } from "rxjs";

xdescribe("test suites for Pokemon List Component", () => {
  let httpMock: HttpTestingController;
  let componentInstance: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PokemonListComponent,
        PokemonItemComponent,
        FilterPokemonPipe,
        HeaderComponent,
        StatsFilterComponent,
        DialogComponent,
        PokemonDetailsComponent,
      ],
      providers: [PokemonService],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        NgMultiSelectDropDownModule,
      ],
    }).compileComponents();
    httpMock = TestBed.inject(HttpTestingController); // injects HttpClient & its a mock backend for testing HttpRequests
    fixture = TestBed.createComponent(PokemonListComponent);
    componentInstance = fixture.componentInstance;
  });

  it("tests for the service instance to be created", () => {
    const servInstance = fixture.debugElement.injector.get(PokemonService);
    expect(servInstance).toBeTruthy();
  });
  // it  tests for any method from service to be invoked

  it("spies on getPokemonData method (mock the method)", () => {
    componentInstance.pokemonCount = 2;
    componentInstance.pokemonList = [{ name: "pokemon1" }];
    const servInstance = fixture.debugElement.injector.get(PokemonService);

    jest
      .spyOn(servInstance, "getPokemonData")
      .mockReturnValue(of({ count: 2, results: [{ name: "pokemon1" }] }));

    componentInstance.getPokemonList(); // call component instance method
    expect(servInstance.getPokemonData).toHaveBeenCalled();
  });
});
