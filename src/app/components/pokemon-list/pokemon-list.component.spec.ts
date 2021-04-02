import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RouterTestingModule } from '@angular/router/testing';

import { PokemonListComponent } from './pokemon-list.component';
import { PokemonApi } from '../../api/pokemon.api';
import { PokemonCardModule } from '../pokemon-card/pokemon-card.module';
import { LoadingModule } from '../loading/loading.module';
import { PokemonApiMock } from '../../mocks';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule,
        InfiniteScrollModule,
        PokemonCardModule,
        LoadingModule
      ],
      declarations: [PokemonListComponent],
      providers: [{ provide: PokemonApi, useClass: PokemonApiMock }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test.skip('should create', () => {
    expect(component).toBeTruthy();
  });

  // Problema reportado na issue https://github.com/orizens/ngx-infinite-scroll/issues/380
});
