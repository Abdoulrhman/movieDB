import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(movies: any): any {
    let a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem("session"));

    if (!movies || !a) {
      return movies;
    }
    console.log(
      movies.filter(movie => {
        a.forEach(id => {
          console.log(id);
          console.log(movie);

          if (movie.id != id) {
            return movie;
          }
        });
      })
    );

    a.forEach(id => {
      movies.forEach((movie, i) => {
        if (movie.id == id) {
          movies.splice(i, 1);
        }
      });
    });
    return movies;
  }
}
