import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-test-load-time',
  templateUrl: './test-load-time.component.html',
  styleUrls: ['./test-load-time.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // providers: [
  //   {
  //     provide: 'TestComponent',
  //     useExisting: forwardRef(() => TestLoadTimeComponent),
  //   },
  // ],
})
export class TestLoadTimeComponent
  implements OnInit, AfterContentInit, AfterViewInit {
  startTime: number;
  initTime: number;
  contentInitTime: number;
  viewInitTime: number;

  //  Created
  constructor() {
    this.startTime = window.performance.now();
    this.printTime('constructor', this.startTime);
  }

  //  Initialized by Angular (after @Inputs && @Outputs have been resolved) (called only once)
  ngOnInit(): void {
    this.initTime = window.performance.now();
    this.printTime('ngOnInit', this.initTime);
  }

  //  Rendered without children (this comes from content projection -- @ContentChild and @ContentChildren will be resolved) (called only once)
  ngAfterContentInit() {
    this.contentInitTime = window.performance.now();
    this.printTime('ngAfterContentInit', this.contentInitTime);
  }

  //  Rendered with children (@ViewChild and @ViewChildren will be resolved -- child components will be fully initialized) (called only once)
  ngAfterViewInit() {
    this.viewInitTime = window.performance.now();
    this.printTime('ngAfterViewInit', this.initTime);
  }

  private printTime(lifeCycle: string, time: number) {
    console.log(`============= ${lifeCycle} =================`);
    console.log(`Global loading ${time}ms`);
    console.log(`Global loading ${time / 1000}s`);
    console.log(`Component loading ${time - this.startTime}ms`);
    console.log(`Component loading ${(time - this.startTime) / 1000}s`);
    console.log('');
  }
}

/*
OnInit
  is called once when the component's @Inputs and @Outputs have been resolved.

AfterViewInit 
  is called when the component's view has been attached. Remember that Angular compiles 
  all views to JS files, not html - the framework manages templates in code and has a rendering engine 
  to interact with the DOM. In addition to actually rendering components, Angular needs to recursively 
  build and manage child/parent relationships in regard to component bindings and their lifetime cycles. 
  Child components will also need their bindings resolved and to go through the same rendering lifecycle 
  as their parents. Simply put, at this hook @ViewChild and @ViewChildren will be resolved -- child components 
  will be fully initialized.

AfterContentInit
  is a little weirder. It's called when the component's child views and external content
  have been attached. This comes from content projection, normally into <ng-content> tags. You really don't 
  need to worry about it if you're not messing around with templates or <ng-content>. Here @ContentChild and 
  @ContentChildren will be resolved.
*/

//  https://stackoverflow.com/questions/44648066/angular-life-cycle-hooks
//  https://pusher.com/tutorials/lifecycle-hooks-angular
