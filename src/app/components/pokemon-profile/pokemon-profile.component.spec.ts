import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { RouterTestingModule } from '@angular/router/testing';

import { PokemonProfileComponent } from './pokemon-profile.component';
import { ServicesModule } from '../../services/services.module';
import { LoadingModule } from '../loading/loading.module';
import { FavoriteModule } from '../favorite/favorite.module';

describe('PokemonProfileComponent', () => {
  let component: PokemonProfileComponent;
  let fixture: ComponentFixture<PokemonProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ServicesModule,
        IvyCarouselModule,
        LoadingModule,
        FavoriteModule
      ],
      declarations: [ PokemonProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
