import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaOfTheDay } from './media-of-the-day';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private readonly ENDPOINT = "https://api.nasa.gov/planetary/apod";
  private readonly TOKEN = "???";

  private formatDate(d: Date): string {
    return d.toISOString().slice(0, 10);
  }

  constructor() { }

  // Docs (search for APOD): https://api.nasa.gov/
  getMedias(startDate: Date, endDate: Date): Observable<MediaOfTheDay[]> {
    // TODO: fetch medias of the day
  }
}
