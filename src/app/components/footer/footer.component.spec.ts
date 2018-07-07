import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a div tag with `© 2018 Copyright:`', () => {
    expect(de.query(By.css('div')).nativeElement.innerHTML).toContain('© 2018 Copyright:')
  })

  it('should contain href to Neel\'s homepage', () => {
    let protfolio = fixture.debugElement.query(By.css("a")).nativeElement.getAttribute('href');
    expect(protfolio).toEqual("http://www.neelindap.com/");
  })
});
