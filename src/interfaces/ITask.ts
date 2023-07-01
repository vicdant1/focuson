export interface ITask {
  name: string;
  description: string;
  steps: {
    displayText: string;
    order: number;
  }[];
}