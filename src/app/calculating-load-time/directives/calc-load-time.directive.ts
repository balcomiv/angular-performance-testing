import {
  AfterContentInit,
  AfterViewInit,
  Directive,
  OnInit,
} from '@angular/core';
import { TestLoadTimeComponent } from '../components/test-load-time/test-load-time.component';

//  https://stackoverflow.com/questions/58120105/creating-an-directive-to-spy-angular-life-cycle-hooks
//  https://stackoverflow.com/questions/46014761/how-to-access-host-component-from-directive

@Directive({
  selector: '[appCalcLoadTime]',
})
export class CalcLoadTimeDirective
  implements OnInit, AfterContentInit, AfterViewInit {
  //  constructor(@Inject('TestComponent') private host: TestLoadComponent) {}
  constructor(private host: TestLoadTimeComponent) {}

  ngOnInit() {
    this.print('onInit');
  }

  ngAfterContentInit() {
    this.print('ngAfterContentInit');
  }

  ngAfterViewInit() {
    this.print('ngAfterViewInit');
  }

  private print(lifeCycle: string) {
    console.log(`Directive's ${lifeCycle}`);
    console.log('');
  }
}
