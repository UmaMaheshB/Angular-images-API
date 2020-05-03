import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImagesService } from '../images.service';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  public category;
  public images = [];
  constructor(private imagesService: ImagesService) {
  }

  ngOnInit(): void {
  }
  search() {

    this.imagesService.getImages(this.category).subscribe(response => this.images = response["hits"]);
    console.log(this.images);
  }
}
