// This is a model of what properties a chapter contains. 

export class Chapter {
  id: number;
  title: string;
  url: string;
  // Each paragraph is a string in the array. 
  content: string[];
}
