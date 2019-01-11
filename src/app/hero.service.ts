import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private messageServive: MessageService) { 

  }

  getHeroes(): Observable<Hero[]> {
    this.messageServive.add('HeroService: Heroes were fetched');
    return of(HEROES);
  }

}
