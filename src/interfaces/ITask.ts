export interface ITask {
  name: string;
  song: string;
  description: string;
  steps: {
    displayText: string;
    order: number;
    id: number
  }[];
  tip: string;
}