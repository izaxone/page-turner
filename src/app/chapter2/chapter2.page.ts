import { Component, OnInit } from '@angular/core';
import { ListPage } from '../list/list.page';
import { Router } from '@angular/router';

// Import the chapter from the chapter list
import { ChaptersService } from '../services/chapters.service'
import { Chapter } from '../models/chapter';

@Component({
  selector: 'app-chapter2',
  templateUrl: './chapter2.page.html',
  styleUrls: ['./chapter2.page.scss'],
})
export class Chapter2Page implements OnInit {
  chapter: Chapter;
  chapterNumber: number = parseInt(this.router.url.replace("/chapter", "")); // Gets the number from the URL
  previousChapter: string; nextChapter: string;

  // The constructor loads the chapter from the service. 
  constructor(private chaptersService: ChaptersService, private router: Router) {

    // Load this chapter from the chapters service
    this.chapter = chaptersService.chapters[this.chapterNumber - 1];

    // If there is a previous chapter to go to, go to it. Otherwise to to Table of Contents
    if (this.chapterNumber > 1) {
      this.previousChapter = "../chapter" + (this.chapterNumber - 1);
    }
    else {
      this.previousChapter = "../toc";
    }

    // If not on the last chapter, go to the next chapter. Else go to the Table of Contents
    if(this.chapterNumber < chaptersService.chapters.length) {
      this.nextChapter = "../chapter" + (this.chapterNumber + 1);
    }
    else {
      this.nextChapter = "../toc";
    }

  }
  ngOnInit() {
  }

}
