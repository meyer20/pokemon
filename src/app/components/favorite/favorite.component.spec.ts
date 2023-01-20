import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FavoriteComponent } from './favorite.component';
import { ServicesModule } from '../../services/services.module';
import { PokemonItemMock } from '../../mocks/pokemon-item.mock';

describe('FavoriteComponent', () => {
  let component: FavoriteComponent;
  let fixture: ComponentFixture<FavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesModule, NoopAnimationsModule],
      declarations: [FavoriteComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteComponent);
    component = fixture.componentInstance;
    component.pokemon = new PokemonItemMock();
    component.pokemon.id = '1';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('set pokemon favorite', () => {
    component.setFavorite();

    expect(component.pokemon.favorite).toBeTruthy();
    expect(component.localStorageService.checkPokemonIsFavorite(component.pokemon.id.toString())).toBeTruthy();
  });

  it('unset pokemon favorite', () => {
    component.pokemon.favorite = true;

    component.setFavorite();

    expect(component.pokemon.favorite).toBeFalsy();
    expect(component.localStorageService.checkPokemonIsFavorite(component.pokemon.id.toString())).toBeFalsy();
  });
});
