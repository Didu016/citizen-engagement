import { Point } from 'geojson';
export class Issue {    
    description: string;
    imageUrl: string;
    additionalImageUrls: string;
    issueTypeHref: string;    
    location: Point;
    tags: string[];
  }