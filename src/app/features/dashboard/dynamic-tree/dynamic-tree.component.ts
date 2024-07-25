import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dynamic-tree',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-tree.component.html',
  styleUrl: './dynamic-tree.component.css'
})
export class DynamicTreeComponent implements OnChanges{

  @Input() value:number = 0;

  get opacity():number {
    return this.value / 100; // Calcola l'opacità del SVG in base al valore
  }

  get isMaxReached(): boolean {
    return this.value >= 100;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['value']){
      console.log('Value changed to: ', this.value);
    }
    console.log("Changes.value", changes['value']);

  }


}
