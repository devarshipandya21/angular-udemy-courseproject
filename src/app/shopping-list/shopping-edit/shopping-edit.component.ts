import { Ingredient } from './../../shared/ingredient.model';
import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  constructor() {}

  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem = () => {
    const IngName = this.nameInputRef.nativeElement.value;
    const IngAmt = this.amountInputRef.nativeElement.value;

    const newIngredient = new Ingredient(IngName, IngAmt);

    this.ingredientAdded.emit(newIngredient);
  };

  ngOnInit(): void {}
}
