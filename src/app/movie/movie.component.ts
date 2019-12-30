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
    'releaseDate': 1994,
    'thumbnail': 'string',
    'description': 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.'
  }

  constructor() { }

  ngOnInit() {
  }

}
