import { FormatDurationPipe } from './format-duration.pipe';

describe('FormatDurationPipe', () => {
  it('create an instance', () => {
    const pipe = new FormatDurationPipe();
    expect(pipe).toBeTruthy();
  });
  it('format zero', () => {
    const pipe = new FormatDurationPipe();
    expect(pipe.transform(15)).toBeTruthy('0min');
  });
  it('format minutes only', () => {
    const pipe = new FormatDurationPipe();
    expect(pipe.transform(15)).toBeTruthy('15min');
  });
  it('format hours', () => {
    const pipe = new FormatDurationPipe();
    expect(pipe.transform(121)).toBeTruthy('2h 1min');
  });
});
