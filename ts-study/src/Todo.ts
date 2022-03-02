export default class Todo {
  constructor(private title: string, private priority: Priority) {}
}
enum Priority {
  High,
  Medium,
  Low,
}
