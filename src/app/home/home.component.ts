import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  popular_movies: any;
  upcoming_movies: any;
  search_result: any;
  movie: any;


  constructor(public movieService: MovieService) {



    // get upcoming movies
    this.movieService.getUpcomingMovies().subscribe(data => {
      this.upcoming_movies = data['results'];
      // console.log(this.upcoming_movies);
    });

    // get popular movies
    this.movieService.getPopularMovies().subscribe(data => {
      this.popular_movies = data['results'];
      // console.log(this.popular_movies);
    });

  }

  // get search results of movies
  searchMovies() {
    this.movieService.searchMovie(this.movie).subscribe(data => {
      this.search_result = data['results'];
      // console.log(this.search_result);
    });
  }


  addToDelteList(id: any,arr:any, index:any){

    let r = confirm("You Are About To Delete The Movie ");

    
    if (r == true) {
      let a = [];
      // Parse the serialized data back into an aray of objects
      if(JSON.parse(localStorage.getItem('session'))){
        a = JSON.parse(localStorage.getItem('session'));
      }
  
      // Push the new data (whether it be an object or anything else) onto the array
      a.push(id);
      // Alert the array value
      // alert(a);  // Should be something like [Object array]
      // Re-serialize the array back into a string and store it in localStorage
      localStorage.setItem('session', JSON.stringify(a));
  
      arr.splice(index,1);
    } else {
      console.log("UNdo");
      
    }

    setTimeout(()=>{
      console.log("Hello From Undo");
      document.getElementById('undo').style.display="block";
     
      
    },3000)
    
  }

  clearAll(){
    localStorage.clear();
    location.reload();
  }

  ngOnInit() {
  }

}
