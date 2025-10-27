import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  standalone: false,
  templateUrl: './serie-list.html',
  styleUrls: ['./serie-list.css'],
})
export class SerieList implements OnInit{
  series: Array<Serie> = [];
  averageSeasons = 0;
  constructor(private serieServicio: SerieService){}
  getSeriesList(){
    this.serieServicio.getSeries().subscribe({
      next: (series) => {
        this.series = series;
        console.log('Series received:', series);
        if (series.length > 0) {
          const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
          this.averageSeasons = totalSeasons / series.length;
        } else {
          this.averageSeasons = 0;
        }
      },
      error: (err) => {
        console.error('Error fetching series:', err);
      }
    });
  }
  ngOnInit(){
    this.getSeriesList();
  }
  selectedSerie: Serie | null = null;

  selectSerie(serie: Serie): void {
    this.selectedSerie = serie;
  }

}
