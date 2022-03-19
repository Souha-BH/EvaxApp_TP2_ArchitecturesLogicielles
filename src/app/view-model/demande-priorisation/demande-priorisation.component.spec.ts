import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DemandePriorisationComponent } from "./demande-priorisation.component";

describe("DemandePriorisationComponent", () => {
  let component: DemandePriorisationComponent;
  let fixture: ComponentFixture<DemandePriorisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DemandePriorisationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandePriorisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
