import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css'],
})
export class TestingComponent {
  products = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
    { id: 3, name: 'Product C' },
  ];
 
  categories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
  ];
 
  form: FormGroup;
 
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      rows: this.formBuilder.array([this.createRow()]),
    });
  }
 
  createRow(): FormGroup {
    return this.formBuilder.group({
      product: null,
      category: null,
    });
  }
 
  addRow() {
    const rows = this.form.get('rows') as FormArray;
    rows.push(this.createRow());
  }
 
  removeRow(index: number) {
    const rows = this.form.get('rows') as FormArray;
    rows.removeAt(index);
  }
 
  onSubmit() {
    console.log(this.form.value);
  }
}