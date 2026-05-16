export interface Formula {
  id: string;
  name: string;
  expression: string;
  category: string;
  explanation: string;
  steps: string[];
  example: string;
  variables: { symbol: string; meaning: string }[];
  practiceQuestions: { q: string; a: string }[];
}

export const MATH_CATEGORIES = [
  { id: 'algebra', title: 'Algebra', icon: '🔢', color: '#6C63FF' },
  { id: 'trigonometry', title: 'Trigonometry', icon: '📐', color: '#A855F7' },
  { id: 'geometry', title: 'Geometry', icon: '🔷', color: '#3B82F6' },
  { id: 'mensuration', title: 'Mensuration', icon: '📏', color: '#10B981' },
  { id: 'statistics', title: 'Statistics', icon: '📊', color: '#F59E0B' },
  { id: 'probability', title: 'Probability', icon: '🎲', color: '#EF4444' },
  { id: 'calculus', title: 'Calculus', icon: '∫', color: '#6366F1' },
  { id: 'arithmetic', title: 'Arithmetic', icon: '➕', color: '#EC4899' },
];

export const FORMULAS: Formula[] = [
  {
    id: 'quad-formula',
    name: 'Quadratic Formula',
    expression: 'x = (-b ± √(b²-4ac)) / 2a',
    category: 'algebra',
    explanation: 'Finds the roots of any quadratic equation ax² + bx + c = 0. The discriminant (b²-4ac) determines the nature of roots.',
    steps: [
      'Write the equation in standard form: ax² + bx + c = 0',
      'Identify the values of a, b, and c',
      'Calculate the discriminant: D = b² - 4ac',
      'If D > 0: two real roots. D = 0: one root. D < 0: no real roots',
      'Substitute into formula: x = (-b ± √D) / 2a',
      'Simplify to get x₁ and x₂',
    ],
    example: 'Solve: x² - 5x + 6 = 0\na=1, b=-5, c=6\nD = 25-24 = 1\nx = (5 ± 1) / 2\nx₁ = 3, x₂ = 2',
    variables: [
      { symbol: 'a', meaning: 'Coefficient of x²' },
      { symbol: 'b', meaning: 'Coefficient of x' },
      { symbol: 'c', meaning: 'Constant term' },
    ],
    practiceQuestions: [
      { q: 'Solve: x² - 7x + 12 = 0', a: 'x = 4 or x = 3' },
      { q: 'Solve: 2x² + 3x - 2 = 0', a: 'x = 0.5 or x = -2' },
      { q: 'Solve: x² + 6x + 9 = 0', a: 'x = -3 (double root)' },
    ],
  },
  {
    id: 'pythagoras',
    name: 'Pythagorean Theorem',
    expression: 'a² + b² = c²',
    category: 'geometry',
    explanation: 'In a right-angled triangle, the square of the hypotenuse equals the sum of the squares of the other two sides.',
    steps: [
      'Identify the right angle in the triangle',
      'Label the hypotenuse (c) — side opposite to the right angle',
      'Label the two legs as a and b',
      'Apply: a² + b² = c²',
      'Solve for the unknown side',
    ],
    example: 'A triangle has legs 3 and 4. Find hypotenuse.\nc² = 3² + 4² = 9 + 16 = 25\nc = √25 = 5',
    variables: [
      { symbol: 'a', meaning: 'First leg of right triangle' },
      { symbol: 'b', meaning: 'Second leg of right triangle' },
      { symbol: 'c', meaning: 'Hypotenuse (longest side)' },
    ],
    practiceQuestions: [
      { q: 'Legs are 5 and 12. Find hypotenuse.', a: 'c = 13' },
      { q: 'Hypotenuse is 10, one leg is 6. Find other leg.', a: 'b = 8' },
      { q: 'Is a triangle with sides 7, 24, 25 a right triangle?', a: 'Yes, 49 + 576 = 625' },
    ],
  },
  {
    id: 'area-circle',
    name: 'Area of Circle',
    expression: 'A = πr²',
    category: 'mensuration',
    explanation: 'The area enclosed by a circle is pi times the square of its radius.',
    steps: [
      'Identify the radius r (half of diameter)',
      'Square the radius: r²',
      'Multiply by π (≈ 3.14159)',
      'Include correct units (sq. units)',
    ],
    example: 'A circle has radius 7 cm.\nA = π × 7² = 3.14159 × 49 ≈ 153.94 cm²',
    variables: [
      { symbol: 'A', meaning: 'Area of the circle' },
      { symbol: 'π', meaning: 'Pi ≈ 3.14159' },
      { symbol: 'r', meaning: 'Radius of the circle' },
    ],
    practiceQuestions: [
      { q: 'Find area of circle with radius 5 cm.', a: '≈ 78.54 cm²' },
      { q: 'Find area if diameter is 14 m.', a: '≈ 153.94 m²' },
      { q: 'If area is 314 cm², find radius.', a: 'r = 10 cm' },
    ],
  },
  {
    id: 'sine-rule',
    name: 'Sine Rule',
    expression: 'a/sin(A) = b/sin(B) = c/sin(C)',
    category: 'trigonometry',
    explanation: 'In any triangle, the ratio of a side to the sine of its opposite angle is constant.',
    steps: [
      'Label the triangle sides a, b, c and opposite angles A, B, C',
      'Write the sine rule proportion',
      'Identify which ratio has all known values',
      'Solve for the unknown using cross multiplication',
    ],
    example: 'In triangle ABC: a=7, A=45°, B=60°. Find b.\n7/sin(45°) = b/sin(60°)\nb = 7 × sin(60°) / sin(45°) ≈ 8.57',
    variables: [
      { symbol: 'a,b,c', meaning: 'Sides of the triangle' },
      { symbol: 'A,B,C', meaning: 'Angles opposite to respective sides' },
    ],
    practiceQuestions: [
      { q: 'a=10, A=30°, B=45°. Find b.', a: 'b ≈ 14.14' },
      { q: 'Find angle B if a=8, b=6, A=60°.', a: 'B ≈ 40.5°' },
    ],
  },
  {
    id: 'mean',
    name: 'Arithmetic Mean',
    expression: 'Mean = (Σx) / n',
    category: 'statistics',
    explanation: 'The arithmetic mean is the sum of all data values divided by the number of values. It represents the central tendency.',
    steps: [
      'List all data values: x₁, x₂, ..., xₙ',
      'Sum all values: Σx = x₁ + x₂ + ... + xₙ',
      'Count total values: n',
      'Divide sum by count: Mean = Σx / n',
    ],
    example: 'Scores: 70, 85, 90, 65, 80\nΣx = 390, n = 5\nMean = 390/5 = 78',
    variables: [
      { symbol: 'Σx', meaning: 'Sum of all data values' },
      { symbol: 'n', meaning: 'Number of data values' },
    ],
    practiceQuestions: [
      { q: 'Find mean of: 12, 18, 24, 30, 36', a: 'Mean = 24' },
      { q: 'Mean of 5 numbers is 40. Four numbers are 35,42,38,45. Find fifth.', a: '40' },
    ],
  },
  {
    id: 'compound-interest',
    name: 'Compound Interest',
    expression: 'A = P(1 + r/n)^(nt)',
    category: 'arithmetic',
    explanation: 'Compound interest is interest calculated on both the principal and the accumulated interest from previous periods.',
    steps: [
      'Identify P (principal), r (annual rate as decimal), n (compounding frequency), t (time in years)',
      'Calculate (1 + r/n)',
      'Raise to power (n×t)',
      'Multiply by P',
      'CI = A - P',
    ],
    example: 'P=1000, r=10%=0.1, n=4, t=2\nA = 1000(1+0.1/4)^8 = 1000(1.025)^8 ≈ 1218.40',
    variables: [
      { symbol: 'A', meaning: 'Amount after interest' },
      { symbol: 'P', meaning: 'Principal amount' },
      { symbol: 'r', meaning: 'Annual interest rate' },
      { symbol: 'n', meaning: 'Times compounded per year' },
      { symbol: 't', meaning: 'Time in years' },
    ],
    practiceQuestions: [
      { q: 'P=5000, r=8%, n=1, t=3. Find A.', a: 'A ≈ 6298.56' },
      { q: 'P=2000, r=12%, n=12, t=1. Find A.', a: 'A ≈ 2253.65' },
    ],
  },
  {
    id: 'probability-basic',
    name: 'Basic Probability',
    expression: 'P(E) = n(E) / n(S)',
    category: 'probability',
    explanation: 'The probability of an event is the number of favorable outcomes divided by the total number of possible outcomes.',
    steps: [
      'Define the sample space S (all possible outcomes)',
      'Define the event E (desired outcomes)',
      'Count n(E) = number of favorable outcomes',
      'Count n(S) = total outcomes',
      'P(E) = n(E) / n(S)',
      'P always between 0 and 1',
    ],
    example: 'Rolling a die: P(even) = {2,4,6} / {1,2,3,4,5,6} = 3/6 = 0.5',
    variables: [
      { symbol: 'P(E)', meaning: 'Probability of event E' },
      { symbol: 'n(E)', meaning: 'Number of favorable outcomes' },
      { symbol: 'n(S)', meaning: 'Total outcomes in sample space' },
    ],
    practiceQuestions: [
      { q: 'P(drawing a king from deck of 52 cards)?', a: '4/52 = 1/13 ≈ 0.077' },
      { q: 'P(getting head on coin flip)?', a: '1/2 = 0.5' },
    ],
  },
  {
    id: 'derivative-basic',
    name: 'Power Rule (Derivative)',
    expression: 'd/dx [xⁿ] = n·xⁿ⁻¹',
    category: 'calculus',
    explanation: 'The power rule is the most fundamental differentiation rule. To differentiate xⁿ, multiply by the exponent and reduce the power by 1.',
    steps: [
      'Identify the power n in xⁿ',
      'Multiply the coefficient by n',
      'Subtract 1 from the exponent',
      'Write the new expression',
    ],
    example: 'f(x) = 3x⁴\nf\'(x) = 3 × 4 × x³ = 12x³\n\nf(x) = 5x² + 3x - 2\nf\'(x) = 10x + 3',
    variables: [
      { symbol: 'n', meaning: 'Exponent/power of x' },
      { symbol: 'x', meaning: 'Variable' },
    ],
    practiceQuestions: [
      { q: 'Differentiate: f(x) = x⁵', a: 'f\'(x) = 5x⁴' },
      { q: 'Differentiate: f(x) = 4x³ + 2x', a: 'f\'(x) = 12x² + 2' },
    ],
  },
];

export function getFormulasByCategory(category: string): Formula[] {
  return FORMULAS.filter(f => f.category === category);
}

export function searchFormulas(query: string): Formula[] {
  const q = query.toLowerCase();
  return FORMULAS.filter(f =>
    f.name.toLowerCase().includes(q) ||
    f.expression.toLowerCase().includes(q) ||
    f.category.toLowerCase().includes(q) ||
    f.explanation.toLowerCase().includes(q)
  );
}
