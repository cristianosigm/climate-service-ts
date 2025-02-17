export interface ReaderService {
  findAll(): Promise<Array<any>>;

  findById(id: number): Promise<any>;
}
