import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeOrDislikeComponent } from './like-or-dislike.component';

describe('TestMyBehaviourComponent', () => {
  let component: LikeOrDislikeComponent;
  let fixture: ComponentFixture<LikeOrDislikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeOrDislikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeOrDislikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with "zero likes"', () => {
    // Given (Arrange)
    const h4Header = fixture.nativeElement.querySelector('h4');

    // When (Act)
    fixture.detectChanges(); // odśwież widok

    // Then (Assert)
    expect(h4Header.textContent).toContain('zero lajków');
  });

  it('should count up the likes - one click - one like', () => {
    // Given (Arrange)
    const h4Header = fixture.nativeElement.querySelector('h4');
    const likeButton = fixture.nativeElement.querySelector('button[title="I like"]');

    // When (Act)
    likeButton.click();
    likeButton.click();
    likeButton.click();
    likeButton.click();
    fixture.detectChanges(); // odśwież widok


    // Then (Assert)
    expect(h4Header.textContent).toContain('4 lajki');
  });

  it('should not be possible to have less than zero likes', () => {
    // Given (Arrange)
    const h4Header = fixture.nativeElement.querySelector('h4');
    const dislikeButton = fixture.nativeElement.querySelector('button[title="I dislike"]');

    // When (Act)
    dislikeButton.click();
    dislikeButton.click();
    dislikeButton.click();
    fixture.detectChanges(); // odśwież widok


    // Then (Assert)
    expect(h4Header.textContent).toContain('zero lajków');
  });
});
