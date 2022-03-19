import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PassVaccinalComponent } from "./pass-vaccinal.component";

describe("PassVaccinalComponent", () => {
  let component: PassVaccinalComponent;
  let fixture: ComponentFixture<PassVaccinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PassVaccinalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassVaccinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
