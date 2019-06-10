import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './add.component';
import { UsersearchPipe } from '../pipe/usersearch.pipe';
import { ParentPipe } from '../pipe/parent.pipe';
import { ProjectPipe } from '../pipe/project.pipe';
import { DatePipe } from '@angular/common';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [AddComponent, UsersearchPipe, ParentPipe, ProjectPipe],
      providers:[DatePipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
