import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  @Input() id: string;
  @Input() name: string;
  @Input() code: string;
  @Input() color: string;

  constructor() { }

  ngOnInit() {
  }

}
