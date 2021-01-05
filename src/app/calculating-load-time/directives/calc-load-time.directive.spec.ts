import { TestLoadTimeComponent } from '../components/test-load-time/test-load-time.component';
import { CalcLoadTimeDirective } from './calc-load-time.directive';

describe('CalcLoadTimeDirective', () => {
  it('should create an instance', () => {
    const directive = new CalcLoadTimeDirective(new TestLoadTimeComponent());
    expect(directive).toBeTruthy();
  });
});
