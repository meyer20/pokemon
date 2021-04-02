import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PokemonFavoritesComponent } from './pokemon-favorites.component';
import { ServicesModule } from '../../services/services.module';
import { PokemonCardModule } from '../pokemon-card/pokemon-card.module';
import { LoadingModule } from '../loading/loading.module';
import { PokemonApi } from '../../api/pokemon.api';
import { PokemonApiMock, PokemonItemMock } from '../../mocks';

describe('PokemonFavoritesComponent', () => {
  let component: PokemonFavoritesComponent;
  let fixture: ComponentFixture<PokemonFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ServicesModule,
        PokemonCardModule,
        LoadingModule,
        RouterTestingModule
      ],
      declarations: [PokemonFavoritesComponent],
      providers: [{ provide: PokemonApi, useClass: PokemonApiMock }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get favorite pokemons', () => {
    const favoritePokemonsLength = 4;
    Array.from({ length: favoritePokemonsLength }).forEach((data, index) => {
      const pokemonItemMock = new PokemonItemMock();
      pokemonItemMock.id = index.toString();
      pokemonItemMock.name = index.toString();
      component.localStorageService.setFavorite(pokemonItemMock);
    });

    component.ngOnInit();

    expect(component.isLoading).toBeFalsy();
    expect(component.pokemons.length).toEqual(favoritePokemonsLength);
  });

  it('remove favorite pokemon', () => {
    const pokemonToRemove = component.pokemons[0];

    component.removeFavorite(pokemonToRemove);

    expect(component.pokemons.indexOf(pokemonToRemove)).toEqual(-1);
  });
});
