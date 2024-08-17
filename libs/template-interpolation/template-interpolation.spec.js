import { describe, it, expect } from 'vitest';
import TemplateInterpolation from './template-interpolation';

describe('Template Interpolation', () => {
  it('should return the template with the specified values placed in place', () => {
    const params = { text: 'test_text' };
    const expected = `<span>${params.text}</span>`;
    expect(TemplateInterpolation.interpolate(`<span>{{ text }}</span>`, params)).toBe(expected);
  });
});
