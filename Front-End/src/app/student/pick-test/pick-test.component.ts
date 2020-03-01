import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { map, startWith } from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material/chips';
import { StudentService } from 'app/shared/services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pick-test',
  templateUrl: './pick-test.component.html',
  styleUrls: ['./pick-test.component.scss']
})
export class PickTestComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  categoryCtrl = new FormControl();
  filteredCategories: Observable<string[]>;
  categories: string[] = [];
  allCategories: string[] = ['Java', 'JavaScript', 'Spring', 'NodeJS', 'Angular'];

  testLevel: string="";
  levels: string[] = ['Easy', 'Medium', 'Difficult'];

  @ViewChild('categoryInput') categoryInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private studentService: StudentService, private router: Router) {
    this.filteredCategories = this.categoryCtrl.valueChanges.pipe(
        startWith(null),
        map((category: string | null) => category ? this._filter(category) : this.allCategories.slice()));
  }
  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our category
    if ((value || '').trim()) {
      this.categories.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.categoryCtrl.setValue(null);
  }

  remove(category: string): void {
    const index = this.categories.indexOf(category);

    if (index >= 0) {
      this.categories.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.categories.push(event.option.viewValue);
    this.categoryInput.nativeElement.value = '';
    this.categoryCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allCategories.filter(category => category.toLowerCase().indexOf(filterValue) === 0);
  }

  onReady(){
    console.log(this.testLevel);
    console.log(this.categories[0]);
    this.studentService.pickTest(this.categories[0], this.testLevel)
              .subscribe(data => {
                this.studentService.test = data;
                
                this.studentService.testId = this.studentService.test._embedded.tests[0].id;
                
                this.router.navigateByUrl('/student/pass')
              });
  }

  isValid(){
    return this.testLevel.trim().length !== 0 && this.categories.length !==0;
  }
}
