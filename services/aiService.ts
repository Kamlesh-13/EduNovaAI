// AI Service - Mock implementation for V1.0
// Real AI integration requires OnSpace Cloud (enable in settings)

export type AIChatModule = 'general' | 'math' | 'webdev' | 'english' | 'aptitude';

interface AIResponse {
  content: string;
  suggestions?: string[];
}

const MATH_RESPONSES: Record<string, string> = {
  'formula': 'Great question! For math formulas, remember the key categories: Algebra (quadratic, linear), Geometry (Pythagorean theorem, area formulas), Trigonometry (sin/cos/tan, sine rule), and Calculus (power rule, chain rule). Which specific formula do you need help with?',
  'algebra': 'In algebra, the most important formulas are:\n• Quadratic: ax² + bx + c = 0 → x = (-b ± √(b²-4ac))/2a\n• Factoring: a² - b² = (a+b)(a-b)\n• Expansion: (a+b)² = a² + 2ab + b²\nWant me to solve a specific problem?',
  'calculus': 'For calculus basics:\n• Power Rule: d/dx[xⁿ] = nxⁿ⁻¹\n• Chain Rule: d/dx[f(g(x))] = f\'(g(x))·g\'(x)\n• Product Rule: d/dx[uv] = u\'v + uv\'\nWhich rule are you struggling with?',
};

const WEB_RESPONSES: Record<string, string> = {
  'css': 'For CSS, master these fundamentals:\n1. Box Model: margin → border → padding → content\n2. Flexbox: display:flex with justify-content and align-items\n3. Grid: display:grid with grid-template-columns\n4. Positions: static, relative, absolute, fixed, sticky\n\nWhat specific CSS challenge are you facing?',
  'javascript': 'JavaScript essentials to know:\n• let/const vs var (use let/const always)\n• Arrow functions: const fn = (x) => x * 2\n• Promises & async/await for async operations\n• Array methods: map, filter, reduce, find\n• Destructuring: const {name, age} = user\n\nWhat JS concept is confusing you?',
  'react': 'React core concepts:\n• Components: functional components with hooks\n• State: useState for reactive data\n• Effects: useEffect for side effects\n• Props: data passed from parent to child\n• Context: global state sharing\n\nAre you stuck on a specific React concept?',
};

const ENGLISH_RESPONSES: Record<string, string> = {
  'tense': 'English tenses can be tricky! The key is:\n• Present tenses: what happens now/habitually\n• Past tenses: what happened before\n• Future tenses: what will happen\n\nThe most common mistake is using Present Continuous for states: say "I know" NOT "I am knowing". Which tense is confusing you?',
  'grammar': 'Key grammar rules:\n• Subject-verb agreement: He runs, They run\n• Articles: use "a" before consonant sounds, "an" before vowel sounds\n• Prepositions: in (enclosed), on (surface), at (point)\n• Tenses: match tense to time reference\n\nSend me a sentence and I\'ll correct it!',
  'vocabulary': 'To build vocabulary faster:\n1. Learn word families (act → action → active → activate)\n2. Learn prefixes (un-, pre-, re-, dis-) and suffixes (-tion, -ly, -ful)\n3. Use new words in sentences immediately\n4. Read extensively — 20 minutes daily exposes you to 1000+ words/week\n\nWant me to explain any specific word?',
};

const APTITUDE_RESPONSES: Record<string, string> = {
  'percentage': 'Percentage tricks:\n• x% of y = y% of x (swap trick!)\n• % increase: (change/original)×100\n• Successive change: a+b+(ab/100)\n• 10%=1/10, 20%=1/5, 25%=1/4, 33.33%=1/3\n\nUse fraction equivalents to calculate mentally!',
  'profit': 'Profit & Loss formula:\n• Profit% = (SP-CP)/CP × 100\n• SP = CP × (100+P%)/100\n• CP = SP × 100/(100+P%)\n• If same SP, sold at x% profit and x% loss → always net LOSS = (x/10)²%\n\nShare a specific problem!',
  'time': 'Time & Work shortcut:\n• A takes x days → 1-day work = 1/x\n• A+B together = AB/(A+B) days\n• Use LCM method: set total work = LCM(x,y)\nThen find daily work in units and solve.\n\nGive me your problem!',
};

const GENERAL_RESPONSES = [
  'That\'s a great question! Based on what you\'re asking, I\'d recommend breaking it down step by step. What specific part would you like me to explain first?',
  'I can help with that! The key thing to remember is to approach problems systematically. Can you share more details about what you\'re working on?',
  'Excellent point! This concept is fundamental to understanding the bigger picture. Let me explain it in simple terms...',
  'Sure, let\'s work through this together! Learning happens best when we apply concepts to real examples. Want me to show you a practical example?',
  'I understand your doubt. This is one of the most commonly asked questions. The answer is simpler than you might think!',
];

function findBestResponse(message: string, module: AIChatModule): string {
  const msg = message.toLowerCase();

  if (module === 'math') {
    for (const [key, response] of Object.entries(MATH_RESPONSES)) {
      if (msg.includes(key)) return response;
    }
    if (msg.includes('help') || msg.includes('solve') || msg.includes('explain')) {
      return 'I\'m your Math AI tutor! I can help with:\n• Algebra formulas and equations\n• Geometry and mensuration\n• Trigonometry identities\n• Statistics and probability\n• Calculus basics\n\nJust describe your problem and I\'ll guide you step by step!';
    }
  }

  if (module === 'webdev') {
    for (const [key, response] of Object.entries(WEB_RESPONSES)) {
      if (msg.includes(key)) return response;
    }
    if (msg.includes('help') || msg.includes('how') || msg.includes('explain')) {
      return 'I\'m your Web Dev AI mentor! I can help with:\n• HTML structure and semantic markup\n• CSS styling, flexbox, and grid\n• JavaScript (ES6+, async, DOM)\n• React hooks and components\n• Node.js and Express APIs\n\nWhat are you building or learning today?';
    }
  }

  if (module === 'english') {
    for (const [key, response] of Object.entries(ENGLISH_RESPONSES)) {
      if (msg.includes(key)) return response;
    }
    if (msg.includes('correct') || msg.includes('fix') || msg.includes('check')) {
      return 'I\'d love to check your English! Please share:\n• A sentence you want me to correct\n• A grammar doubt\n• A word you want to understand\n• A speaking/writing situation\n\nI\'ll provide corrections with explanations!';
    }
  }

  if (module === 'aptitude') {
    for (const [key, response] of Object.entries(APTITUDE_RESPONSES)) {
      if (msg.includes(key)) return response;
    }
    if (msg.includes('trick') || msg.includes('shortcut') || msg.includes('fast')) {
      return 'Top aptitude shortcuts:\n• Percentage: use fraction equivalents\n• Time-Work: LCM method\n• Ratio: use variables (3k, 4k)\n• Speed: Distance = Speed × Time triangle\n• Probability: favorable/total\n\nWhich topic\'s shortcut do you want?';
    }
  }

  // General fallback
  const idx = Math.floor(Math.random() * GENERAL_RESPONSES.length);
  return GENERAL_RESPONSES[idx];
}

export async function getAIResponse(
  message: string,
  module: AIChatModule = 'general'
): Promise<AIResponse> {
  // Simulate AI thinking time
  await new Promise(r => setTimeout(r, 800 + Math.random() * 700));

  const content = findBestResponse(message, module);

  return {
    content,
    suggestions: getSuggestions(module),
  };
}

function getSuggestions(module: AIChatModule): string[] {
  const suggestions: Record<AIChatModule, string[]> = {
    math: ['Explain quadratic formula', 'Solve a trigonometry problem', 'Statistics formulas'],
    webdev: ['Explain React hooks', 'CSS flexbox help', 'Async/await example'],
    english: ['Check my sentence', 'Explain past perfect tense', 'Vocabulary synonyms'],
    aptitude: ['Percentage shortcuts', 'Time & Work tricks', 'Blood relation help'],
    general: ['What can you help with?', 'Give me a study tip', 'Explain a concept'],
  };
  return suggestions[module] || suggestions.general;
}
