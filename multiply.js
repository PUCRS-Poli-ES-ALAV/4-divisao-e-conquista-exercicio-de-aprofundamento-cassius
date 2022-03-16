/**
 * MULTIPLY(x, y, n) 
   IF (n = 1)
      RETURN x * y.
   ELSE
      m ← ⎡ n / 2 ⎤.
      a ← ⎣ x / 2^m ⎦; b ← x mod 2^m.
      c ← ⎣ y / 2^m ⎦; d ← y mod 2^m.
      e ← MULTIPLY(a, c, m).
      f ← MULTIPLY(b, d, m).
      g ← MULTIPLY(b, c, m).
      h ← MULTIPLY(a, d, m).
      RETURN 2^(2m)*e + 2^m*(g + h) + f.
 */

function multiply(x, y, bits) {
    if (bits === 1) return x * y;
    const middle = bits / 2;
    const a = x / 2 ** middle;
    const b = x % 2 ** middle
    const c = y / 2 ** middle;
    const d = y % 2 ** middle;
    const e = multiply(a, c, middle)
    const f = multiply(b, d, middle)
    const g = multiply(b, c, middle)
    const h = multiply(a, d, middle)
    return 2 ** (2 * middle) * e + 2 ** middle * (g + h) + f;
}