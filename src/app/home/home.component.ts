import { Component, OnInit } from '@angular/core';
import { faPlus, faSortAmountDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  open:String = "close";
  faPlus = faPlus;
  filter = faSortAmountDown;

  showHide(){
    this.open = this.open === "open" ? "close" : "open"
    console.log(this.open);
  }

  constructor() {}

  ngOnInit() {
  }

}
