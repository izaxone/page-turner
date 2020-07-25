import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Chapter } from './models/chapter';
import { ChaptersService } from './services/chapters.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  chapters: Chapter[];
  
  // These are the static pages regardless of number of chapters. 
  public appPages = [
    {
      title: 'Cover',
      url: '/cover',
      icon: 'home'
    },
    {
      title: 'Table of Contents',
      url: '/toc',
      icon: 'list'
    }

  ];
  


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    // Instantiate the service
    private chaptersService: ChaptersService
  ) 
  {
    // Pull the chapters from the service
    this.chapters = chaptersService.chapters;

    // Build the chapter list
    for(let i = 0; i < this.chapters.length; i++) {
      let thisTitle: string = this.chapters[i].title;
      let thisUrl: string = this.chapters[i].url

      // Push the chapters into the list array
      this.appPages.push({
        title: thisTitle,
        url: thisUrl,
        icon: 'list'
      })

    }
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
