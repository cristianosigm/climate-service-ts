export interface WriterService {
  create(data: any): Promise<any>;

  update(data: any): Promise<any>;

  remove(id: number);
}
