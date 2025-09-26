import {Component, Input, OnInit} from '@angular/core';
import {DescriptionType} from "../../Types/description.type";

@Component({
  selector: 'advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent implements OnInit {
  @Input() descriptions!: DescriptionType[];

  constructor() { }

  ngOnInit(): void {
  }

}
