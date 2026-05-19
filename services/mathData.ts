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
  // ─── ALGEBRA ────────────────────────────────────────────────────────────────
  {
    id: 'quad-formula',
    name: 'Quadratic Formula',
    expression: 'x = (-b ± √(b²-4ac)) / 2a',
    category: 'algebra',
    explanation: 'Finds the roots of any quadratic equation ax² + bx + c = 0. The discriminant (b²-4ac) determines the nature of roots: D>0 → two real roots, D=0 → one repeated root, D<0 → no real roots.',
    steps: [
      'Write the equation in standard form: ax² + bx + c = 0',
      'Identify the values of a, b, and c',
      'Calculate the discriminant: D = b² - 4ac',
      'If D > 0: two distinct real roots',
      'If D = 0: one repeated real root',
      'If D < 0: no real roots (complex roots)',
      'Substitute into formula: x = (-b ± √D) / 2a',
      'Simplify to get x₁ and x₂',
    ],
    example: 'Solve: x² - 5x + 6 = 0\na=1, b=-5, c=6\nD = 25-24 = 1\nx = (5 ± 1) / 2\nx₁ = 3, x₂ = 2',
    variables: [
      { symbol: 'a', meaning: 'Coefficient of x²' },
      { symbol: 'b', meaning: 'Coefficient of x' },
      { symbol: 'c', meaning: 'Constant term' },
      { symbol: 'D', meaning: 'Discriminant = b²-4ac' },
    ],
    practiceQuestions: [
      { q: 'Solve: x² - 7x + 12 = 0', a: 'x = 4 or x = 3\n(D = 49-48 = 1; x = (7±1)/2)' },
      { q: 'Solve: 2x² + 3x - 2 = 0', a: 'x = 0.5 or x = -2\n(D = 9+16 = 25; x = (-3±5)/4)' },
      { q: 'Solve: x² + 6x + 9 = 0', a: 'x = -3 (double root)\n(D = 36-36 = 0)' },
      { q: 'For what value of k does x² + kx + 9 = 0 have equal roots?', a: 'k = ±6\n(D = k²-36 = 0 ⟹ k = ±6)' },
      { q: 'Solve: x² - 4x - 5 = 0', a: 'x = 5 or x = -1\n(Factorise: (x-5)(x+1)=0)' },
      { q: 'Find the sum and product of roots of 3x² - 5x + 2 = 0', a: 'Sum = 5/3 (−b/a); Product = 2/3 (c/a)' },
    ],
  },
  {
    id: 'algebraic-identities',
    name: 'Algebraic Identities',
    expression: '(a+b)² = a²+2ab+b²  |  (a-b)² = a²-2ab+b²  |  (a+b)(a-b) = a²-b²',
    category: 'algebra',
    explanation: 'These three identities are the foundation of algebra. They allow you to expand brackets quickly and factorise expressions without long multiplication.',
    steps: [
      'Identity 1: (a+b)² = a² + 2ab + b²',
      'Identity 2: (a-b)² = a² - 2ab + b²',
      'Identity 3: (a+b)(a-b) = a² - b²  (difference of squares)',
      'Identity 4: (a+b)³ = a³ + 3a²b + 3ab² + b³',
      'Identity 5: a³ - b³ = (a-b)(a² + ab + b²)',
      'Identity 6: a³ + b³ = (a+b)(a² - ab + b²)',
    ],
    example: 'Expand (3x + 2)²\n= (3x)² + 2(3x)(2) + (2)²\n= 9x² + 12x + 4\n\nFactorise 25x² - 16\n= (5x)² - (4)²\n= (5x+4)(5x-4)',
    variables: [
      { symbol: 'a, b', meaning: 'Any algebraic expressions or numbers' },
    ],
    practiceQuestions: [
      { q: 'Expand: (2x + 3)²', a: '4x² + 12x + 9' },
      { q: 'Expand: (5a - 2b)²', a: '25a² - 20ab + 4b²' },
      { q: 'Factorise: x² - 49', a: '(x+7)(x-7)' },
      { q: 'Factorise: 4m² - 25n²', a: '(2m+5n)(2m-5n)' },
      { q: 'If a+b = 7 and ab = 12, find a² + b²', a: 'a²+b² = (a+b)² - 2ab = 49 - 24 = 25' },
      { q: 'If a - b = 3 and a² - b² = 21, find a + b', a: 'a+b = (a²-b²)/(a-b) = 21/3 = 7' },
    ],
  },
  {
    id: 'linear-equation',
    name: 'Linear Equation (Two Variables)',
    expression: 'ax + by = c  →  Substitution / Elimination method',
    category: 'algebra',
    explanation: 'A system of two linear equations with two unknowns. Solved using substitution (express one variable from one equation and substitute in the other) or elimination (add/subtract equations to cancel one variable).',
    steps: [
      'Write both equations clearly: a₁x + b₁y = c₁ and a₂x + b₂y = c₂',
      'Elimination: Multiply equations to make coefficients of one variable equal',
      'Add or subtract the equations to eliminate that variable',
      'Solve the remaining single-variable equation',
      'Back-substitute to find the other variable',
      'Verify solution by substituting back into both equations',
    ],
    example: 'Solve: 2x + 3y = 12 and x - y = 1\nFrom eq2: x = y + 1\nSub in eq1: 2(y+1)+3y=12 → 5y=10 → y=2\nx = 3\nSolution: x=3, y=2 ✓',
    variables: [
      { symbol: 'x, y', meaning: 'Unknown variables to find' },
      { symbol: 'a, b, c', meaning: 'Coefficients and constant' },
    ],
    practiceQuestions: [
      { q: 'Solve: x + y = 10 and x - y = 4', a: 'x = 7, y = 3' },
      { q: 'Solve: 3x + 2y = 16 and x + y = 7', a: 'x = 2, y = 5' },
      { q: 'Solve: 2x - y = 5 and 3x + 2y = 11', a: 'x = 3, y = 1' },
      { q: 'The sum of two numbers is 42. Their difference is 8. Find them.', a: 'x+y=42, x-y=8 → x=25, y=17' },
    ],
  },

  // ─── TRIGONOMETRY ────────────────────────────────────────────────────────────
  {
    id: 'trig-ratios',
    name: 'Trigonometric Ratios',
    expression: 'sin θ = P/H  |  cos θ = B/H  |  tan θ = P/B',
    category: 'trigonometry',
    explanation: 'In a right-angled triangle, the three primary trigonometric ratios relate angles to the sides. P = Perpendicular (opposite), B = Base (adjacent), H = Hypotenuse. Remember: SOH-CAH-TOA',
    steps: [
      'Identify the angle θ you are working with',
      'Label sides: Hypotenuse (longest, opposite 90°), Perpendicular (opposite θ), Base (adjacent to θ)',
      'sin θ = Opposite/Hypotenuse (SOH)',
      'cos θ = Adjacent/Hypotenuse (CAH)',
      'tan θ = Opposite/Adjacent (TOA)',
      'Reciprocals: cosec θ = H/P, sec θ = H/B, cot θ = B/P',
    ],
    example: 'In right triangle: P=3, B=4, H=5\nsin θ = 3/5 = 0.6\ncos θ = 4/5 = 0.8\ntan θ = 3/4 = 0.75',
    variables: [
      { symbol: 'P', meaning: 'Perpendicular (side opposite angle θ)' },
      { symbol: 'B', meaning: 'Base (side adjacent to angle θ)' },
      { symbol: 'H', meaning: 'Hypotenuse (longest side)' },
    ],
    practiceQuestions: [
      { q: 'If sin θ = 5/13, find cos θ and tan θ', a: 'P=5, H=13, B=12\ncos θ = 12/13, tan θ = 5/12' },
      { q: 'Find sin 30°, cos 60°, tan 45°', a: 'sin 30° = 1/2; cos 60° = 1/2; tan 45° = 1' },
      { q: 'If tan θ = 3/4, find sin θ', a: 'H² = 9+16 = 25, H=5; sin θ = 3/5' },
      { q: 'Prove: sin²θ + cos²θ = 1', a: 'P²/H² + B²/H² = (P²+B²)/H² = H²/H² = 1 (using Pythagoras)' },
    ],
  },
  {
    id: 'standard-angle-table',
    name: 'Standard Angle Values',
    expression: 'sin/cos/tan values for 0°, 30°, 45°, 60°, 90°',
    category: 'trigonometry',
    explanation: 'These exact values appear in almost every trigonometry problem. Memorise using the pattern: sin values go 0, 1/2, 1/√2, √3/2, 1 for 0°,30°,45°,60°,90°.',
    steps: [
      'sin:  0° = 0  |  30° = 1/2  |  45° = 1/√2  |  60° = √3/2  |  90° = 1',
      'cos:  0° = 1  |  30° = √3/2  |  45° = 1/√2  |  60° = 1/2  |  90° = 0',
      'tan:  0° = 0  |  30° = 1/√3  |  45° = 1  |  60° = √3  |  90° = ∞',
      'Trick for sin: √(0/4), √(1/4), √(2/4), √(3/4), √(4/4) = 0, 1/2, 1/√2, √3/2, 1',
      'cos values are sin values in REVERSE order',
      'tan = sin/cos for any angle',
    ],
    example: 'Evaluate: sin 30° × cos 60° + cos 30° × sin 60°\n= (1/2)(1/2) + (√3/2)(√3/2)\n= 1/4 + 3/4 = 1\n\n(This equals sin 90° = 1 ✓ — compound angle formula)',
    variables: [
      { symbol: '√2 ≈ 1.414', meaning: 'Square root of 2' },
      { symbol: '√3 ≈ 1.732', meaning: 'Square root of 3' },
    ],
    practiceQuestions: [
      { q: 'Find: 2sin 30° + tan 45° - cos 60°', a: '2(1/2) + 1 - 1/2 = 1 + 1 - 0.5 = 1.5' },
      { q: 'Find: sin²45° + cos²45°', a: '(1/√2)² + (1/√2)² = 1/2 + 1/2 = 1' },
      { q: 'Evaluate: tan 60° / tan 30°', a: '√3 / (1/√3) = √3 × √3 = 3' },
      { q: 'If sin(A+B)=1 and sin(A-B)=1/2, find A and B', a: 'A+B=90°, A-B=30° → A=60°, B=30°' },
    ],
  },
  {
    id: 'sine-rule',
    name: 'Sine Rule',
    expression: 'a/sin(A) = b/sin(B) = c/sin(C) = 2R',
    category: 'trigonometry',
    explanation: 'In any triangle, the ratio of a side to the sine of its opposite angle is constant and equals 2R (diameter of circumscribed circle). Use when given: two angles + one side (AAS), or two sides + angle opposite to one (SSA).',
    steps: [
      'Label the triangle sides a, b, c and opposite angles A, B, C',
      'Note: side a is opposite angle A, side b is opposite B, etc.',
      'Choose the ratio that has the most known values',
      'Cross-multiply to solve for the unknown',
    ],
    example: 'In triangle: a=7, A=45°, B=60°. Find b.\n7/sin45° = b/sin60°\nb = 7 × sin60°/sin45° = 7 × (√3/2)/(1/√2) ≈ 8.57',
    variables: [
      { symbol: 'a,b,c', meaning: 'Sides of the triangle' },
      { symbol: 'A,B,C', meaning: 'Angles opposite to respective sides' },
      { symbol: 'R', meaning: 'Circumradius of triangle' },
    ],
    practiceQuestions: [
      { q: 'a=10, A=30°, B=45°. Find b.', a: 'b = 10 × sin45°/sin30° = 10 × (1/√2)/(1/2) = 10√2 ≈ 14.14' },
      { q: 'Find angle B if a=8, b=6, A=60°.', a: 'sinB = 6×sin60°/8 = 6×(√3/2)/8 ≈ 0.6495; B ≈ 40.5°' },
      { q: 'In a triangle A=30°, B=70°, a=15. Find b.', a: 'C=80°; b = 15×sin70°/sin30° ≈ 28.19' },
    ],
  },

  // ─── GEOMETRY ────────────────────────────────────────────────────────────────
  {
    id: 'pythagoras',
    name: 'Pythagorean Theorem',
    expression: 'a² + b² = c²',
    category: 'geometry',
    explanation: 'In a right-angled triangle, the square of the hypotenuse equals the sum of the squares of the other two sides. Pythagorean triplets: (3,4,5), (5,12,13), (8,15,17), (7,24,25).',
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
      { q: 'Legs are 5 and 12. Find hypotenuse.', a: 'c = √(25+144) = √169 = 13' },
      { q: 'Hypotenuse is 10, one leg is 6. Find other leg.', a: 'b = √(100-36) = √64 = 8' },
      { q: 'Is a triangle with sides 7, 24, 25 a right triangle?', a: 'Yes: 7² + 24² = 49+576 = 625 = 25²' },
      { q: 'A ladder 13 m long rests against a wall. Foot is 5 m from wall. How high does it reach?', a: 'h = √(169-25) = √144 = 12 m' },
      { q: 'Find diagonal of a rectangle 8cm × 15cm', a: 'd = √(64+225) = √289 = 17 cm' },
      { q: 'Find the altitude of an equilateral triangle with side 6 cm', a: 'h = (√3/2)×6 = 3√3 ≈ 5.196 cm' },
    ],
  },
  {
    id: 'triangle-area',
    name: "Triangle Area (Heron's Formula)",
    expression: 'A = √[s(s-a)(s-b)(s-c)]  where s = (a+b+c)/2',
    category: 'geometry',
    explanation: "Heron's Formula finds the area of any triangle when all three sides are known, without needing the height. s is the semi-perimeter.",
    steps: [
      'Find semi-perimeter: s = (a + b + c) / 2',
      'Calculate each factor: (s-a), (s-b), (s-c)',
      'Multiply: s(s-a)(s-b)(s-c)',
      'Take the square root to get area',
    ],
    example: 'Triangle sides: 5, 6, 7\ns = (5+6+7)/2 = 9\nA = √[9×4×3×2] = √216 = 6√6 ≈ 14.7 cm²',
    variables: [
      { symbol: 'a, b, c', meaning: 'Three sides of the triangle' },
      { symbol: 's', meaning: 'Semi-perimeter = (a+b+c)/2' },
    ],
    practiceQuestions: [
      { q: 'Find area of triangle with sides 3, 4, 5', a: 's=6; A=√(6×3×2×1)=√36=6 sq units' },
      { q: 'Find area of triangle with sides 13, 14, 15', a: 's=21; A=√(21×8×7×6)=√7056=84 sq units' },
      { q: 'Equilateral triangle side = 10. Find area using Heron.', a: 's=15; A=√(15×5×5×5)=25√3≈43.3 sq units' },
    ],
  },

  // ─── MENSURATION ─────────────────────────────────────────────────────────────
  {
    id: 'area-circle',
    name: 'Area & Circumference of Circle',
    expression: 'Area = πr²  |  Circumference = 2πr  |  Diameter = 2r',
    category: 'mensuration',
    explanation: 'The area enclosed by a circle is pi times the square of its radius. The circumference is the total boundary length. Use π ≈ 22/7 or 3.14159.',
    steps: [
      'Identify the radius r (half of diameter)',
      'Area: A = πr²',
      'Circumference: C = 2πr',
      'If diameter d is given: r = d/2',
      'Include correct units (area = sq. units, circumference = linear units)',
    ],
    example: 'Circle with radius 7 cm:\nArea = π × 7² = 22/7 × 49 = 154 cm²\nCircumference = 2 × 22/7 × 7 = 44 cm',
    variables: [
      { symbol: 'A', meaning: 'Area of the circle' },
      { symbol: 'C', meaning: 'Circumference (perimeter)' },
      { symbol: 'π', meaning: 'Pi ≈ 22/7 ≈ 3.14159' },
      { symbol: 'r', meaning: 'Radius of the circle' },
    ],
    practiceQuestions: [
      { q: 'Find area of circle with radius 5 cm. (use π=3.14)', a: 'A = 3.14 × 25 = 78.5 cm²' },
      { q: 'Find circumference if diameter = 14 m.', a: 'r=7; C = 2×22/7×7 = 44 m' },
      { q: 'If area is 154 cm², find radius. (π=22/7)', a: 'πr²=154 → r²=154×7/22=49 → r=7 cm' },
      { q: 'A wheel of radius 35 cm makes 100 revolutions. Find distance covered.', a: 'Distance = 100 × 2πr = 100 × 2 × 22/7 × 35 = 22000 cm = 220 m' },
    ],
  },
  {
    id: 'cylinder-cone-sphere',
    name: 'Cylinder, Cone & Sphere',
    expression: 'Cylinder: V=πr²h  |  Cone: V=(1/3)πr²h  |  Sphere: V=(4/3)πr³',
    category: 'mensuration',
    explanation: 'Three key 3D solids. The volume of a cone is exactly 1/3 of a cylinder with same base and height. Curved surface area (CSA) is the lateral area excluding top and bottom faces.',
    steps: [
      'CYLINDER: V=πr²h | CSA=2πrh | TSA=2πr(r+h)',
      'CONE: V=(1/3)πr²h | CSA=πrl | TSA=πr(r+l) where l=√(r²+h²) (slant height)',
      'SPHERE: V=(4/3)πr³ | SA=4πr²',
      'HEMISPHERE: V=(2/3)πr³ | CSA=2πr² | TSA=3πr²',
    ],
    example: 'Cone: r=3cm, h=4cm\nl = √(9+16) = 5 cm\nV = (1/3)×π×9×4 = 12π ≈ 37.7 cm³\nCSA = π×3×5 = 15π ≈ 47.1 cm²',
    variables: [
      { symbol: 'r', meaning: 'Radius of base' },
      { symbol: 'h', meaning: 'Height of solid' },
      { symbol: 'l', meaning: 'Slant height of cone = √(r²+h²)' },
    ],
    practiceQuestions: [
      { q: 'Find volume of cylinder: r=7cm, h=10cm (π=22/7)', a: 'V = 22/7 × 49 × 10 = 1540 cm³' },
      { q: 'Find volume of sphere with radius 6 cm (π=3.14)', a: 'V = (4/3)×3.14×216 = 904.32 cm³' },
      { q: 'Cone has r=5cm, h=12cm. Find slant height and CSA', a: 'l=√(25+144)=13cm; CSA=π×5×13≈204.2cm²' },
      { q: 'A sphere and a cylinder have same radius 3cm. Cylinder height=4cm. Compare volumes.', a: 'Sphere V=(4/3)π×27=36π; Cylinder V=π×9×4=36π. They are equal!' },
    ],
  },

  // ─── STATISTICS ──────────────────────────────────────────────────────────────
  {
    id: 'mean',
    name: 'Mean, Median & Mode',
    expression: 'Mean = Σx/n  |  Median = middle value  |  Mode = most frequent',
    category: 'statistics',
    explanation: 'The three measures of central tendency describe what is "typical" in a dataset. Mean is affected by outliers. Median is the middle value when sorted. Mode is the most repeated value.',
    steps: [
      'MEAN: Sum all values, divide by count',
      'MEDIAN: Sort data. If n is odd: middle value. If n is even: average of two middle values',
      'MODE: The value that appears most often (can have none or multiple modes)',
      'Relation: Mode ≈ 3×Median - 2×Mean (empirical formula)',
    ],
    example: 'Data: 4, 7, 2, 9, 4, 6, 4\nMean = (4+7+2+9+4+6+4)/7 = 36/7 ≈ 5.14\nSorted: 2,4,4,4,6,7,9 → Median = 4\nMode = 4 (appears 3 times)',
    variables: [
      { symbol: 'Σx', meaning: 'Sum of all data values' },
      { symbol: 'n', meaning: 'Number of data values' },
    ],
    practiceQuestions: [
      { q: 'Find mean of: 12, 18, 24, 30, 36', a: 'Mean = 120/5 = 24' },
      { q: 'Find median of: 3, 8, 5, 1, 9, 7', a: 'Sorted: 1,3,5,7,8,9 → Median = (5+7)/2 = 6' },
      { q: 'Find mode of: 2, 5, 3, 2, 8, 2, 5, 3', a: 'Mode = 2 (appears 3 times)' },
      { q: 'Mean of 5 numbers is 40. Four numbers are 35,42,38,45. Find fifth.', a: 'Sum=200; 35+42+38+45=160; Fifth=40' },
      { q: 'The median of 3, x, 7, 9 (sorted) is 6. Find x.', a: 'Median = (x+7)/2 = 6 → x = 5' },
    ],
  },
  {
    id: 'standard-deviation',
    name: 'Standard Deviation & Variance',
    expression: 'σ = √[Σ(xᵢ - x̄)² / n]  |  Variance = σ²',
    category: 'statistics',
    explanation: 'Standard deviation measures how spread out data is from the mean. A low σ means data is close to the mean; a high σ means data is spread widely.',
    steps: [
      'Calculate the mean (x̄)',
      'Subtract mean from each value: (xᵢ - x̄)',
      'Square each difference: (xᵢ - x̄)²',
      'Find the mean of those squares: Σ(xᵢ - x̄)²/n → this is Variance',
      'Take square root of Variance → Standard Deviation σ',
    ],
    example: 'Data: 2, 4, 4, 4, 5, 5, 7, 9\nMean = 40/8 = 5\nDeviations: -3,-1,-1,-1,0,0,2,4\nSquared: 9,1,1,1,0,0,4,16 → Sum=32\nVariance = 32/8 = 4\nσ = √4 = 2',
    variables: [
      { symbol: 'σ', meaning: 'Standard deviation' },
      { symbol: 'x̄', meaning: 'Mean of the data' },
      { symbol: 'xᵢ', meaning: 'Each individual data value' },
    ],
    practiceQuestions: [
      { q: 'Find variance of: 2, 4, 6', a: 'Mean=4; Deviations: -2,0,2; Squares: 4,0,4; Variance=8/3≈2.67' },
      { q: 'Data: 10, 20, 30. Find standard deviation.', a: 'Mean=20; Squared deviations: 100,0,100; Variance=200/3≈66.7; σ≈8.16' },
      { q: 'If all values in a dataset increase by 5, does σ change?', a: 'No — σ measures spread, not position. Adding a constant does not change spread.' },
    ],
  },

  // ─── PROBABILITY ─────────────────────────────────────────────────────────────
  {
    id: 'probability-basic',
    name: 'Basic Probability',
    expression: 'P(E) = n(E) / n(S)  |  0 ≤ P(E) ≤ 1',
    category: 'probability',
    explanation: 'The probability of an event is the number of favorable outcomes divided by the total number of possible outcomes. P(E)+P(E̅)=1. P(sure event)=1. P(impossible event)=0.',
    steps: [
      'Define the sample space S (all possible outcomes)',
      'Define the event E (desired outcomes)',
      'Count n(E) = number of favorable outcomes',
      'Count n(S) = total outcomes',
      'P(E) = n(E) / n(S)',
      'P(not E) = 1 - P(E)',
    ],
    example: 'Rolling a die: P(even) = {2,4,6} / {1,2,3,4,5,6} = 3/6 = 1/2\n\nP(odd) = 1 - 1/2 = 1/2',
    variables: [
      { symbol: 'P(E)', meaning: 'Probability of event E' },
      { symbol: 'n(E)', meaning: 'Number of favorable outcomes' },
      { symbol: 'n(S)', meaning: 'Total outcomes in sample space' },
      { symbol: 'P(E̅)', meaning: 'Probability of event NOT happening' },
    ],
    practiceQuestions: [
      { q: 'P(drawing a king from deck of 52 cards)?', a: '4/52 = 1/13 ≈ 0.077' },
      { q: 'P(getting head on coin flip)?', a: '1/2 = 0.5' },
      { q: 'A bag has 4 red, 3 blue, 2 green balls. P(not red)?', a: 'P(not red) = (3+2)/9 = 5/9' },
      { q: 'Two dice rolled. P(sum = 7)?', a: 'Favourable: (1,6)(2,5)(3,4)(4,3)(5,2)(6,1) = 6 outcomes; P = 6/36 = 1/6' },
      { q: 'P(drawing a face card from a deck)?', a: 'Face cards = 12 (J,Q,K × 4 suits); P = 12/52 = 3/13' },
    ],
  },
  {
    id: 'addition-multiplication-probability',
    name: 'Addition & Multiplication Rules',
    expression: 'P(A∪B) = P(A)+P(B)-P(A∩B)  |  P(A∩B) = P(A)×P(B) [independent]',
    category: 'probability',
    explanation: 'Addition Rule: For ANY two events. Multiplication Rule: For INDEPENDENT events (one does not affect the other). Mutually exclusive events: P(A∩B) = 0.',
    steps: [
      'Addition (OR): P(A or B) = P(A) + P(B) - P(A and B)',
      'If mutually exclusive: P(A or B) = P(A) + P(B)',
      'Multiplication (AND, independent): P(A and B) = P(A) × P(B)',
      'Conditional probability: P(A|B) = P(A∩B)/P(B)',
    ],
    example: 'A die: P(even OR > 4)\nP(even)=3/6, P(>4)=2/6, P(even AND >4)=P(6)=1/6\nP(even OR >4) = 3/6+2/6-1/6 = 4/6 = 2/3',
    variables: [
      { symbol: 'P(A∪B)', meaning: 'P(A or B) — at least one occurs' },
      { symbol: 'P(A∩B)', meaning: 'P(A and B) — both occur' },
    ],
    practiceQuestions: [
      { q: 'A card is drawn from deck. P(heart OR queen)?', a: 'P(heart)=13/52, P(queen)=4/52, P(heart queen)=1/52; P=13/52+4/52-1/52=16/52=4/13' },
      { q: 'Two coins tossed. P(HH)?', a: 'Independent: P(H)×P(H) = 1/2×1/2 = 1/4' },
    ],
  },

  // ─── CALCULUS ────────────────────────────────────────────────────────────────
  {
    id: 'derivative-basic',
    name: 'Differentiation — Power & Standard Rules',
    expression: 'd/dx[xⁿ] = nxⁿ⁻¹  |  d/dx[sin x] = cos x  |  d/dx[eˣ] = eˣ',
    category: 'calculus',
    explanation: 'Differentiation finds the rate of change (slope) of a function. The power rule is the most used rule. Geometrically, f\'(x) gives the slope of the tangent at point x.',
    steps: [
      'Power Rule: d/dx[xⁿ] = n·xⁿ⁻¹',
      'Constant Rule: d/dx[c] = 0',
      'Sum Rule: d/dx[f+g] = f\' + g\'',
      'd/dx[sin x] = cos x  |  d/dx[cos x] = -sin x',
      'd/dx[eˣ] = eˣ  |  d/dx[ln x] = 1/x',
      'Chain Rule: d/dx[f(g(x))] = f\'(g(x)) · g\'(x)',
    ],
    example: 'f(x) = 3x⁴ - 2x² + 5\nf\'(x) = 12x³ - 4x + 0 = 12x³ - 4x\n\nf(x) = sin(x²)\nf\'(x) = cos(x²) × 2x = 2x cos(x²)  [chain rule]',
    variables: [
      { symbol: 'f\'(x)', meaning: 'Derivative / rate of change at x' },
      { symbol: 'n', meaning: 'Exponent/power of x' },
    ],
    practiceQuestions: [
      { q: 'Differentiate: f(x) = x⁵', a: 'f\'(x) = 5x⁴' },
      { q: 'Differentiate: f(x) = 4x³ + 2x - 7', a: 'f\'(x) = 12x² + 2' },
      { q: 'Differentiate: f(x) = sin x + cos x', a: 'f\'(x) = cos x - sin x' },
      { q: 'Find slope of y = x² + 3x at x = 2', a: "y' = 2x+3; at x=2: slope = 4+3 = 7" },
      { q: 'Differentiate: y = e^(3x)', a: "y' = 3e^(3x)  [chain rule: derivative of 3x is 3]" },
    ],
  },
  {
    id: 'integration-basic',
    name: 'Integration — Basic Rules',
    expression: '∫xⁿ dx = xⁿ⁺¹/(n+1) + C  |  ∫sin x dx = -cos x + C',
    category: 'calculus',
    explanation: 'Integration is the reverse of differentiation. It finds the area under a curve. Indefinite integral has +C (constant of integration). Definite integral gives a numeric area value.',
    steps: [
      'Power Rule: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C  (n ≠ -1)',
      '∫1/x dx = ln|x| + C',
      '∫eˣ dx = eˣ + C',
      '∫sin x dx = -cos x + C',
      '∫cos x dx = sin x + C',
      'Definite integral: ∫[a to b] f(x) dx = F(b) - F(a) where F is antiderivative',
    ],
    example: '∫(3x² + 2x) dx\n= 3·x³/3 + 2·x²/2 + C\n= x³ + x² + C\n\n∫[0 to 2] x² dx = [x³/3]₀² = 8/3 - 0 = 8/3',
    variables: [
      { symbol: '∫', meaning: 'Integral sign' },
      { symbol: 'C', meaning: 'Constant of integration (indefinite integrals)' },
    ],
    practiceQuestions: [
      { q: '∫ 4x³ dx', a: 'x⁴ + C' },
      { q: '∫ (2x + 5) dx', a: 'x² + 5x + C' },
      { q: '∫[1 to 3] 2x dx', a: '[x²]₁³ = 9 - 1 = 8' },
      { q: '∫ cos x dx', a: 'sin x + C' },
    ],
  },

  // ─── ARITHMETIC ──────────────────────────────────────────────────────────────
  {
    id: 'compound-interest',
    name: 'Compound Interest',
    expression: 'A = P(1 + r/n)^(nt)  |  CI = A - P',
    category: 'arithmetic',
    explanation: 'Compound interest is interest on both principal and accumulated interest. More compounding periods = more interest. SI = PRT/100 (Simple Interest for comparison).',
    steps: [
      'Identify P (principal), r (annual rate as decimal), n (compounding frequency/year), t (time in years)',
      'For annual compounding (n=1): A = P(1+r)^t',
      'Calculate A = P(1 + r/n)^(nt)',
      'CI = A - P',
      'Simple Interest for comparison: SI = PRT/100',
    ],
    example: 'P=10000, r=10%, t=2 years, annual\nA = 10000(1.1)² = 10000×1.21 = 12100\nCI = 12100-10000 = ₹2100\nSI = 10000×10×2/100 = ₹2000\nDifference = ₹100 (extra from compounding)',
    variables: [
      { symbol: 'A', meaning: 'Amount after interest' },
      { symbol: 'P', meaning: 'Principal amount' },
      { symbol: 'r', meaning: 'Annual interest rate (decimal)' },
      { symbol: 'n', meaning: 'Times compounded per year' },
      { symbol: 't', meaning: 'Time in years' },
    ],
    practiceQuestions: [
      { q: 'P=5000, r=8%, t=3 years, annually. Find CI.', a: 'A = 5000×(1.08)³ = 6298.56; CI = ₹1298.56' },
      { q: 'P=2000, r=12%, t=1 year, monthly (n=12). Find A.', a: 'A = 2000×(1+0.01)^12 = 2000×1.1268 ≈ ₹2253.65' },
      { q: 'At what rate does ₹1000 become ₹1331 in 3 years (annually)?', a: '1331/1000 = (1+r)³ → 1.331 = 1.1³ → r = 10%' },
      { q: 'Difference between CI and SI for P=1000, r=10%, t=2 years?', a: 'SI=200; CI=210; Difference=₹10 (=P×r²)' },
    ],
  },
  {
    id: 'simple-interest',
    name: 'Simple Interest',
    expression: 'SI = (P × R × T) / 100  |  A = P + SI',
    category: 'arithmetic',
    explanation: 'Simple interest is calculated only on the original principal, not on accumulated interest. Used for short-term loans and basic financial calculations.',
    steps: [
      'Identify P (Principal), R (Rate per annum %), T (Time in years)',
      'Calculate: SI = PRT/100',
      'Total Amount: A = P + SI',
      'To find P: P = (SI × 100) / (R × T)',
      'To find R: R = (SI × 100) / (P × T)',
      'To find T: T = (SI × 100) / (P × R)',
    ],
    example: 'P=6000, R=5%, T=3 years\nSI = 6000×5×3/100 = 900\nA = 6000+900 = ₹6900',
    variables: [
      { symbol: 'P', meaning: 'Principal (original amount)' },
      { symbol: 'R', meaning: 'Rate of interest per annum (%)' },
      { symbol: 'T', meaning: 'Time period in years' },
      { symbol: 'SI', meaning: 'Simple interest earned' },
    ],
    practiceQuestions: [
      { q: 'P=8000, R=6%, T=2.5 years. Find SI.', a: 'SI = 8000×6×2.5/100 = ₹1200' },
      { q: 'SI=750, R=5%, T=3 years. Find P.', a: 'P = 750×100/(5×3) = ₹5000' },
      { q: 'P=4000, SI=800, T=4 years. Find R.', a: 'R = 800×100/(4000×4) = 5%' },
      { q: 'In how many years will ₹1500 yield SI of ₹300 at 4% p.a.?', a: 'T = 300×100/(1500×4) = 5 years' },
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
