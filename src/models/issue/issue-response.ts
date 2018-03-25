import { Point } from "geojson";

export class IssueResponse {
    assigneeHref: string;
    createdAt: Date;
    creatorHref: string;    
    description: string;
    href: string;
    id: string;
    imageUrl: string;
    additionalImageUrls: string;
    issueTypeHref: string;
    location: Point;
    state: string;
    tags: string[];
    updatedAt:string;
  }