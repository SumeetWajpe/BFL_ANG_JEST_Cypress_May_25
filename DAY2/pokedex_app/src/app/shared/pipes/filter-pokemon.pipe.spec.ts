import { TestBed } from "@angular/core/testing";
import { PokemonService } from "../services/pokemon.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FilterPokemonPipe } from "./filter-pokemon.pipe";

describe("test suite for Filter Pokemon Pipe", () => {
  let pokeMonService: PokemonService;
  let pipe: FilterPokemonPipe;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [PokemonService],
      imports: [HttpClientTestingModule],
    });
    pokeMonService = TestBed.inject(PokemonService);
    pipe = new FilterPokemonPipe(pokeMonService);
  });
  it("should return the input array if no filters are applied", () => {
    const pokemonArr = [
      {
        id: 1,
        name: "Bulbasaur",
        types: [{ type: { name: "grass" } }],
      },
      {
        id: 2,
        name: "Charmender",
        types: [{ type: { name: "fire" } }],
      },
      {
        id: 1,
        name: "Squirtle",
        types: [{ type: { name: "water" } }],
      },
    ];

    const args = { searchText: "", types: [], genders: [] };
    expect(pipe.transform(pokemonArr, args)).toEqual(pokemonArr);
  });
  fit("should return the searched array when searchtext is provided", () => {
    const pokemonArr = [
      {
        id: 1,
        name: "Bulbasaur",
        types: [{ type: { name: "grass" } }],
      },
      {
        id: 2,
        name: "Charmender",
        types: [{ type: { name: "fire" } }],
      },
      {
        id: 1,
        name: "Squirtle",
        types: [{ type: { name: "water" } }],
      },
    ];

    const args = { searchText: "bulb", types: [], genders: [] };

    const expectedOutput = [
      {
        id: 1,
        name: "Bulbasaur",
        types: [{ type: { name: "grass" } }],
      },
    ];

    expect(pipe.transform(pokemonArr, args)).toEqual(expectedOutput);
  });
});
