import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() placeholder: string = 'Buscar...';
  @Output() termino = new EventEmitter<string>();
  @Output() onSugerencia = new EventEmitter<string>();
  searchForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit(): void {
    this.searchForm
      .get('termino')
      ?.valueChanges.pipe(debounceTime(300))
      .subscribe((resp) => this.onSugerencia.emit(resp));
  }

  get terminoValue() {
    return this.searchForm.get('termino')?.value;
  }
  initForm() {
    this.searchForm = this.fb.group({
      termino: [''],
    });
  }

  buscar() {
    this.termino.emit(this.terminoValue);
  }
}
