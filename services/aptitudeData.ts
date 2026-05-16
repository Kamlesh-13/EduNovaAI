export interface AptitudeTopic {
  id: string;
  title: string;
  icon: string;
  color: string;
  category: 'quant' | 'reasoning';
  theory: string;
  shortcutTricks: string[];
  questions: MCQuestion[];
}

export interface MCQuestion {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const APTITUDE_TOPICS: AptitudeTopic[] = [
  {
    id: 'percentage',
    title: 'Percentage',
    icon: '%',
    color: '#FF6B6B',
    category: 'quant',
    theory: 'Percentage means "per hundred." It expresses a fraction as parts of 100.\n\nKey Formula: % = (Part/Whole) × 100\n\nIncrease%: [(New - Old) / Old] × 100\nDecrease%: [(Old - New) / Old] × 100\n\nSuccessive % change: a + b + (ab/100)',
    shortcutTricks: [
      'x% of y = y% of x (very useful!)',
      'If price increases by x%, consumption must decrease by [x/(100+x)] × 100% to keep expenditure same',
      '20% of 350 = 350/5 = 70 (use fractions)',
      '33.33% = 1/3, 66.67% = 2/3, 12.5% = 1/8',
      'Multiplier method: 20% increase → multiply by 1.2',
    ],
    questions: [
      {
        id: 'p1', difficulty: 'easy',
        question: 'What is 35% of 400?',
        options: ['120', '140', '150', '160'],
        correct: 1,
        explanation: '35% of 400 = (35/100) × 400 = 35 × 4 = 140',
      },
      {
        id: 'p2', difficulty: 'medium',
        question: 'If a number is increased by 20% and then decreased by 20%, the net change is:',
        options: ['0%', '-4%', '+4%', '-2%'],
        correct: 1,
        explanation: 'Using formula: a + b + ab/100 = 20 + (-20) + (20×-20)/100 = -4%',
      },
      {
        id: 'p3', difficulty: 'hard',
        question: 'A score of 480 is 60% of the total marks. What are the total marks?',
        options: ['700', '750', '800', '850'],
        correct: 2,
        explanation: '60% of total = 480 → total = 480 × 100/60 = 800',
      },
    ],
  },
  {
    id: 'profit-loss',
    title: 'Profit & Loss',
    icon: '💰',
    color: '#FF8E53',
    category: 'quant',
    theory: 'Profit/Loss = SP - CP\nProfit% = (Profit/CP) × 100\nLoss% = (Loss/CP) × 100\n\nSP = CP × (100 + Profit%) / 100\nCP = SP × 100 / (100 + Profit%)\n\nDiscount = MP - SP\nDiscount% = (Discount/MP) × 100',
    shortcutTricks: [
      'If same item sold at x% profit and y% loss for same SP: Net = -(xy/10)² loss%',
      'Trade discount and cash discount: apply one after another',
      'Profit on CP vs profit on SP are different',
      '25% profit means SP = 5/4 × CP',
    ],
    questions: [
      {
        id: 'pl1', difficulty: 'easy',
        question: 'A book is bought for ₹200 and sold for ₹250. Profit% is:',
        options: ['20%', '25%', '30%', '15%'],
        correct: 1,
        explanation: 'Profit = 250-200 = 50. Profit% = (50/200)×100 = 25%',
      },
      {
        id: 'pl2', difficulty: 'medium',
        question: 'If SP = ₹660 and loss = 12%, find CP:',
        options: ['₹750', '₹720', '₹700', '₹780'],
        correct: 0,
        explanation: 'CP = SP × 100/(100-loss%) = 660 × 100/88 = ₹750',
      },
    ],
  },
  {
    id: 'time-work',
    title: 'Time & Work',
    icon: '⏰',
    color: '#A855F7',
    category: 'quant',
    theory: 'If A can do work in n days, A\'s 1-day work = 1/n\n\nA and B together: (1/A + 1/B) per day\nTime = 1/(1/A + 1/B) = AB/(A+B)\n\nWork done = Efficiency × Time\n\nPipes: Filling pipe positive, leaking pipe negative',
    shortcutTricks: [
      'A takes x days, B takes y days → Together: xy/(x+y) days',
      'If A is twice as fast as B, A takes half the time',
      'LCM method: take LCM as total work units',
      'A+B complete in d days, B alone takes n days → A alone = dn/(n-d)',
    ],
    questions: [
      {
        id: 'tw1', difficulty: 'easy',
        question: 'A can do a job in 12 days and B in 15 days. Together they finish in:',
        options: ['6 days', '7 days', '6.67 days', '8 days'],
        correct: 2,
        explanation: 'Together = 12×15/(12+15) = 180/27 = 6.67 days',
      },
      {
        id: 'tw2', difficulty: 'medium',
        question: 'A pipe fills a tank in 6 hours, another empties it in 8 hours. If both open, tank fills in:',
        options: ['20 hrs', '24 hrs', '18 hrs', '22 hrs'],
        correct: 1,
        explanation: 'Net rate = 1/6 - 1/8 = 4/24 - 3/24 = 1/24. Time = 24 hours.',
      },
    ],
  },
  {
    id: 'blood-relation',
    title: 'Blood Relations',
    icon: '👨‍👩‍👧',
    color: '#EF4444',
    category: 'reasoning',
    theory: 'Blood relation problems require understanding family tree structure.\n\nKey Relations:\n• Father of Father = Grandfather\n• Father\'s sister = Aunt\n• Mother\'s brother = Uncle\n• Brother\'s son = Nephew\n• Sister\'s son = Nephew\n• Husband\'s/Wife\'s sister = Sister-in-law\n\nTips: Draw a family tree diagram. Use ↑ for parent, ↓ for child.',
    shortcutTricks: [
      'Always draw the family tree',
      "If A says 'B is my father's only son', then B is A's brother",
      "Pointing to a photo: determine gender from pronoun clues",
      'Coded blood relations: decode the code first',
    ],
    questions: [
      {
        id: 'br1', difficulty: 'easy',
        question: 'Pointing to a man, a woman says "His mother is the only daughter of my mother." How is the woman related to the man?',
        options: ['Grandmother', 'Mother', 'Daughter', 'Sister'],
        correct: 1,
        explanation: 'Only daughter of my mother = the woman herself. So the man\'s mother is the woman. She is his Mother.',
      },
      {
        id: 'br2', difficulty: 'medium',
        question: 'A is B\'s sister. C is B\'s mother. D is C\'s father. E is D\'s mother. How is A related to D?',
        options: ['Granddaughter', 'Daughter', 'Great-granddaughter', 'Grand daughter'],
        correct: 0,
        explanation: 'A\'s parent is C. C\'s parent is D. So A is D\'s granddaughter.',
      },
    ],
  },
  {
    id: 'coding-decoding',
    title: 'Coding-Decoding',
    icon: '🔐',
    color: '#3B82F6',
    category: 'reasoning',
    theory: 'In coding-decoding, a word or number is coded using a pattern.\n\nCommon Types:\n• Letter shifting: A→D means +3\n• Reverse alphabet: A=Z, B=Y\n• Number substitution: A=1, B=2\n• Mixed coding\n• Substitution codes\n\nApproach: Find the pattern, verify with given examples, apply.',
    shortcutTricks: [
      'Check forward shift, backward shift, or position values',
      'Look for vowel/consonant patterns',
      'ASCII-like mappings: A=1, Z=26',
      'Opposite letters: A-Z, B-Y, C-X (sum = 27)',
    ],
    questions: [
      {
        id: 'cd1', difficulty: 'easy',
        question: 'If CAT = 3120, DOG = 4157, what is PIG?',
        options: ['1697', '16917', '9167', '1679'],
        correct: 1,
        explanation: 'Each letter is replaced by its position: P=16, I=9, G=7 → 16917',
      },
      {
        id: 'cd2', difficulty: 'medium',
        question: 'In a code language, MANGO is written as NBOHP. How is APPLE written?',
        options: ['BQQMF', 'BPQMF', 'BRQMF', 'BQQNF'],
        correct: 0,
        explanation: 'Each letter is shifted by +1: A→B, P→Q, P→Q, L→M, E→F = BQQMF',
      },
    ],
  },
  {
    id: 'ratio-proportion',
    title: 'Ratio & Proportion',
    icon: '⚖️',
    color: '#10B981',
    category: 'quant',
    theory: 'Ratio a:b = a/b\nProportion a:b = c:d means ad = bc (cross multiply)\n\nCompound Ratio: (a:b) × (c:d) = ac:bd\nDuplicate Ratio: a²:b²\nSub-duplicate: √a:√b\n\nMixture: use alligation method\nDividing in ratio a:b: Part1 = a/(a+b) × Total',
    shortcutTricks: [
      'If a:b = 3:4, let a=3k, b=4k',
      'Alligation: cross-difference method for mixtures',
      'Fourth proportional to a,b,c = bc/a',
      'Mean proportional of a,b = √(ab)',
    ],
    questions: [
      {
        id: 'rp1', difficulty: 'easy',
        question: 'Divide ₹560 between A and B in ratio 3:4. A\'s share is:',
        options: ['₹200', '₹240', '₹320', '₹180'],
        correct: 1,
        explanation: 'A\'s share = 3/(3+4) × 560 = 3/7 × 560 = ₹240',
      },
      {
        id: 'rp2', difficulty: 'medium',
        question: 'If x:y = 3:4 and y:z = 2:3, find x:z',
        options: ['1:2', '3:8', '1:3', '2:3'],
        correct: 0,
        explanation: 'x:y:z = 3:4:6 → x:z = 3:6 = 1:2',
      },
    ],
  },
  {
    id: 'puzzles',
    title: 'Puzzles & Arrangement',
    icon: '🧩',
    color: '#6C63FF',
    category: 'reasoning',
    theory: 'Seating/Arrangement puzzles involve placing items in a sequence based on given conditions.\n\nTypes:\n• Linear arrangement (row facing same/opposite)\n• Circular arrangement\n• Floor arrangement\n• Box/Stack arrangement\n\nApproach: Use a table or diagram. Place definite clues first, then use elimination for the rest.',
    shortcutTricks: [
      'In circular arrangement of n people: (n-1)! arrangements',
      'Start with definite clues, then relative positions',
      'Use elimination: if A is not 1st, 2nd, 3rd, must be 4th or 5th',
      'Facing outside/inside changes left-right direction',
    ],
    questions: [
      {
        id: 'pz1', difficulty: 'medium',
        question: '5 people sit in a row. A is to the right of B. C is to the left of D. E is between A and D. Who is in the middle?',
        options: ['A', 'B', 'E', 'C'],
        correct: 2,
        explanation: 'Arrangement: B A E D C or similar. E is in the middle position.',
      },
    ],
  },
];

export function getTopicsByCategory(category: 'quant' | 'reasoning') {
  return APTITUDE_TOPICS.filter(t => t.category === category);
}
