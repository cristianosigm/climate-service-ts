import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class SampleClient {
  constructor(private readonly http: HttpService) {}

  public async getSample(): Promise<string> {
    const result = await firstValueFrom(
      this.http.get<string>('https://cat-fact.herokuapp.com/facts/').pipe(
        catchError((err: AxiosError) => {
          console.log(err.response.data);
          throw new Error('Error when requesting cat facts!');
        }),
      ),
    );
    return result.data;
  }
}
