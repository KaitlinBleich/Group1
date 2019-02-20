import { iImage } from ".";

export interface iAbout {
    id: number;
    greeting: string;
    description: string;
    location: string;
    //location: iAddress;????????
    hours: string;
    imageUrl: string;
  }
  