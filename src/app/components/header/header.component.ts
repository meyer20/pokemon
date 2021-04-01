import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggledNavigator = false; // Não é uma solução elegante, porém como necessita do jquery para o dropdown funcionar, é melhor isso

  constructor() { }

  ngOnInit(): void {
  }

}
