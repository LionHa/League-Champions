import {AppComponent} from './app.component';

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

describe('AppComponent', function () {
  let debug: DebugElement;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(component).toBeDefined());

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = debug.nativeElement;
    expect(h1.innerText).toMatch(/angular/i,
      '<h1> should say something about "Angular"');
  });
});
