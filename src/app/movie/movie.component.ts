import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: Movie = {
    'id':1,
    'title':'pulp fiction',
    'file': 'flix.sekthor.ch/movies/citizenfour_2014.mp4',
    'thumbnail': 'string',
    'description': 'londg text lorem ipsum wort ist wort, satz'
  }

  constructor() { }

  ngOnInit() {
  }

}
