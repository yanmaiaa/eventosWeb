export interface IEvent {
  id: number;
  name: string;
  date: Date;
  time: string;
  price: number;
  imageUrl: string;
  location?: {
    address: string;
    city: string;
    country: string;
  }; //A interrogação indica que ele pode ser null
  onlineUrl?: string;
  sessions: ISession[];
}
export interface ISession {
  id: number;
  name: string;
  presenter: string;
  duration: number;
  level: string;
  abstract: string;
  voters: string[];
}
