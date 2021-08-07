import { Component, OnInit, Input } from '@angular/core';
import { faFolderOpen, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {

  faFolderOpen = faFolderOpen
  faEllipsisV = faEllipsisV

  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
