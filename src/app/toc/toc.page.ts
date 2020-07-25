import { Component, OnInit } from '@angular/core';
import { ChaptersService } from '../services/chapters.service'
import { Chapter } from '../models/chapter';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  chapters: Chapter[];
    


  // Instantiate the service
  // Private because we only want this to be inside this component
  constructor(private chaptersService: ChaptersService) {
    // Pull the chapters from the service
    this.chapters = chaptersService.chapters;
   }

  ngOnInit() {
  }

}
