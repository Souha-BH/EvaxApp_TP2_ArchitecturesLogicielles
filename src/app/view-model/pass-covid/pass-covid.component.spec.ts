import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PassCovidComponent } from "./pass-covid.component";

describe("PassCovidComponent", () => {
  let component: PassCovidComponent;
  let fixture: ComponentFixture<PassCovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PassCovidComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
