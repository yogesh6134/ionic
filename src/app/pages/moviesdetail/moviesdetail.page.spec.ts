import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesdetailPage } from './moviesdetail.page';

describe('MoviesdetailPage', () => {
  let component: MoviesdetailPage;
  let fixture: ComponentFixture<MoviesdetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MoviesdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
