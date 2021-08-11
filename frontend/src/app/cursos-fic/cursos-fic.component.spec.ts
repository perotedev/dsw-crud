import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosFicComponent } from './cursos-fic.component';

describe('CursosFicComponent', () => {
  let component: CursosFicComponent;
  let fixture: ComponentFixture<CursosFicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosFicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosFicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
