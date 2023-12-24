import { Component, OnInit } from '@angular/core';
import { DetaService } from 'src/app/services/deta.service';
import { Anime } from 'src/app/modal/anime';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-anime',
  templateUrl: './add-anime.component.html',
  styleUrls: ['./add-anime.component.css']
})
export class AddAnimeComponent implements OnInit{

  animeList: Anime[] = [];
  newAnime: Anime = {
    id: '',
    name: '',
    englishName: '',
    currentStats: '',
    noOfSeasons: '',
    episodes: '',
    theme: '',
    gist: '',
    updates: ''
  };

  constructor(private data: DetaService,
    private router: Router) {}

  ngOnInit(): void {
    this.getAllAnime();
  }

  getAllAnime() {
    this.data.getAllAnime().subscribe(res => {
      this.animeList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data as Anime;
      });
    }, err => {
      console.error('Error fetching anime: ', err);
    });
  }

  addAnime() {
    this.data.addAnime(this.newAnime).then(() => {
      // Clear the form or perform any other actions upon successful addition
      this.newAnime = {
        id: '',
        name: '',
        englishName: '',
        currentStats: '',
        noOfSeasons: '',
        episodes: '',
        theme: '',
        gist: '',
        updates: ''
      };
    }).catch((error) => {
      console.error('Error adding anime: ', error);
    });
  }

  back() {
    this.router.navigate(['/homepage']);
  }

  deleteAnime(anime: Anime) {
    if (window.confirm("Are you sure you want to delete the payroll? This action cannot be undone.")) {
      this.data.deleteAnime(anime);
    }
  }
}
