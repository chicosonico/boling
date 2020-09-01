import { Component, OnInit } from '@angular/core';
import { BolosService } from '../../services/bolos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  constructor(public bolosService: BolosService,
              private router: Router) { }

  ngOnInit() {}

}
