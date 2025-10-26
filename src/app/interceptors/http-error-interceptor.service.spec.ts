import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SerieList } from '../serie/serie-list/serie-list';
import { SerieService } from '../serie/serie.service';

describe('SerieListComponent', () => {
  let component: SerieList;
  let fixture: ComponentFixture<SerieList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SerieList],
      imports: [HttpClientTestingModule], 
      providers: [SerieService]         
    }).compileComponents();

    fixture = TestBed.createComponent(SerieList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});