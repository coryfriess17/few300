import { Component, OnInit } from '@angular/core';
import { QuestionModel } from '../../models';
import { MathState, selectQuestionModel, selectAtEndOfQuestions } from '../../reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { answerProvided } from '../../actions/questions.actions';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  model$: Observable<QuestionModel>;
  atEnd$: Observable<boolean>;
  constructor(private store: Store<MathState>) { }

  ngOnInit() {
    this.model$ = this.store.select(selectQuestionModel);
    this.atEnd$ = this.store.select(selectAtEndOfQuestions);
  }
  next(guessE1: HTMLInputElement) {
    const guess = guessE1.valueAsNumber;
    this.store.dispatch(answerProvided({ guess }));
    guessE1.value = ''; // clear it out for the next quesion
    guessE1.focus(); // put the cursor back there
  }

}
