export class Report {
  id: number;
  data: string[];
  constructor(data: string[], id?: number) {
    this.data = data;
    this.id = id;
  }
  run(): void {
    this.data.forEach((_data) => {
      console.log(_data);
    });
  }
}

export class TableReport extends Report {
  headers: string[];
  constructor(headers: string[], value: string[], id?: number) {
    super(value, id);
    this.headers = headers;
  }
  run(): void {
    console.log(this.headers);
    super.run();
  }
}
