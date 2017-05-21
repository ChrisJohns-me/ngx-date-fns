import { NgModule } from '@angular/core';

import { DistanceInWordsPipe } from './distance-in-words.pipe';
import { DistanceInWordsStrictPipe } from './distance-in-words-strict.pipe';
import { DistanceInWordsToNowPipe } from './distance-in-words-to-now.pipe';
import { FormatPipe } from './format.pipe';

const PIPES = [
  DistanceInWordsPipe,
  DistanceInWordsStrictPipe,
  DistanceInWordsToNowPipe,
  FormatPipe
];

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class DateFnsModule { }