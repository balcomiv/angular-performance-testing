import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestLoadTimeComponent } from './calculating-load-time/components/test-load-time/test-load-time.component';
import { CalcLoadTimeDirective } from './calculating-load-time/directives/calc-load-time.directive';

@NgModule({
  declarations: [AppComponent, TestLoadTimeComponent, CalcLoadTimeDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
