import { Component, OnInit } from '@angular/core';
import gallery from '../../data/gallery.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  gallery : any = gallery;

  responsiveOptions : any;
  
  hover : any;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
