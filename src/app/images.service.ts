import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }
  getImages(category) {
    return this.http.get(`https://pixabay.com/api/?key=6332435-a0453d9d9a06525421f65a9b1&q=${category}&image_type=photo`);
  }
}
