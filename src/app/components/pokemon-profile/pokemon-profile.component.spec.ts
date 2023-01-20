import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

import { PokemonProfileComponent } from './pokemon-profile.component';
import { ServicesModule } from '../../services/services.module';
import { LoadingModule } from '../loading/loading.module';
import { FavoriteModule } from '../favorite/favorite.module';
import { PokemonApi } from '../../api/pokemon.api';
import { PokemonApiMock } from '../../mocks/pokemon-api.mock';

describe('PokemonProfileComponent', () => {
  let component: PokemonProfileComponent;
  let fixture: ComponentFixture<PokemonProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ServicesModule,
        LoadingModule,
        FavoriteModule
      ],
      declarations: [PokemonProfileComponent],
      providers: [
        { provide: PokemonApi, useClass: PokemonApiMock },
        { provide: ActivatedRoute, useValue: { snapshot: { params: { pokemonId: 1 } } } }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create with valid pokemonId', () => {
    expect(component).toBeTruthy();
  });

  it('should create without pokemonId', () => {
    jest.spyOn(component, 'getPokemon');
    component.pokemonId = null;

    component.ngOnInit();

    expect(component.getPokemon).not.toHaveBeenCalled();
    expect(component.isLoading).toBeFalsy();
  });
});
