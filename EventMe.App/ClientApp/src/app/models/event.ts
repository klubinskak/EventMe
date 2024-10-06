
export interface IEvent {
  id: number;
  name: string;
  date: string;
  timeZone: string;
  typeId: number | null;
  maxAttendees: number | null;
  duration: number | null;
  categoryId: string | null;
  link: string | null;
  tags: string | null;
  description: string | null;
  notifications: boolean;
  locationId: number | null;
  eventLocation: Location | null;
}