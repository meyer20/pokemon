import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFavoritesComponent } from './pokemon-favorites.component';
import { ServicesModule } from '../../services/services.module';
import { PokemonCardModule } from '../pokemon-card/pokemon-card.module';
import { LoadingModule } from '../loading/loading.module';

describe('PokemonFavoritesComponent', () => {
  let component: PokemonFavoritesComponent;
  let fixture: ComponentFixture<PokemonFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesModule, PokemonCardModule, LoadingModule],
      declarations: [PokemonFavoritesComponent]
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
});
