# Installation
Clone the repository, change to the directory, and run `npm install`

# Adding Chapters
Chapters can be added to the ChaptersService under `src/app/services/chapeters.service.ts`. 

1. Create a component for the chapter
2. Copy the contents from one of the other chapters
3. Add the chapter contents to the service. Each chapter is an object with the following properties:
* **id**: Chapter Number.
* **title**: Title of the chapter.
* **url**: URL of the chapter.
* **content**: Content of the chapter. Each paragraph is a string in the array. 

# Running
Since this is an Ionic App , the application can be run in a web browser using instructions found on the [Ionic Documentation](https://ionicframework.com/docs/), or by using `ionic cordova start browser`.
* **Note:** It may take a while to load the first time you run the application. 