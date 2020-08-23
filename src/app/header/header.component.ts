import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor() {}
  collapsed = false;

  @Output() featureSelected = new EventEmitter();

  onSelect = (feature) => {
    this.featureSelected.emit(feature);
  };

  ngOnInit() {}
}
