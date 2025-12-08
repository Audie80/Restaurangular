import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from "@angular/common";

@Component({
    selector: 'audie-reserve',
    imports: [ReactiveFormsModule, JsonPipe],
    templateUrl: './reserve.component.html',
    styleUrl: './reserve.component.css'
})
export class ReserveComponent implements OnInit {
  reservationForm!: FormGroup;
  date = new Date();

  timeOptions = [
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
  ];
  peopleOptions = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.reservationForm = this.fb.group({
      date: new Date(),
      time: '',
      people: 1,
    });
  }
}
