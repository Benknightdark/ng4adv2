import { Component, OnInit, ViewChild } from '@angular/core';
import { BlockComponent } from "app/block/block.component";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
 @ViewChild('block1')
  block1: BlockComponent;

  @ViewChild(BlockComponent)
  block2: BlockComponent;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    this.block1.title = 'Oh!';

  }

}
