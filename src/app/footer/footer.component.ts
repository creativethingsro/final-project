import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public isContact: boolean=window.location.href.includes(`/contact`)
  constructor() { }

  ngOnInit(): void {
  }

}
