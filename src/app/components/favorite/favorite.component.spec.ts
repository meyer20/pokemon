import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteComponent } from './favorite.component';
import { ServicesModule } from '../../services/services.module';
import { PokemonItemMock } from '../../mocks';

describe('FavoriteComponent', () => {
  let component: FavoriteComponent;
  let fixture: ComponentFixture<FavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesModule],
      declarations: [FavoriteComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteComponent);
    component = fixture.componentInstance;
    component.pokemon = new PokemonItemMock();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
