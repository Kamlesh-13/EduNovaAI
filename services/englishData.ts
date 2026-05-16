export interface EnglishTopic {
  id: string;
  title: string;
  icon: string;
  color: string;
  category: 'grammar' | 'vocabulary' | 'speaking' | 'writing';
  theory: string;
  rules: string[];
  examples: { correct: string; incorrect?: string; explanation: string }[];
  exercises: ExerciseItem[];
}

export interface ExerciseItem {
  id: string;
  type: 'fill-blank' | 'correct-sentence' | 'choose-correct';
  question: string;
  options?: string[];
  answer: string;
  explanation: string;
}

export const ENGLISH_TOPICS: EnglishTopic[] = [
  {
    id: 'tenses',
    title: 'Tenses',
    icon: '⏱️',
    color: '#45B7D1',
    category: 'grammar',
    theory: 'English has 3 main tenses (Past, Present, Future) each with 4 aspects (Simple, Continuous, Perfect, Perfect Continuous) = 12 tenses total.\n\nThe tense tells you WHEN something happens.\nThe aspect tells you HOW it happens (one-time, ongoing, completed).',
    rules: [
      'Simple Present: Subject + V1 (He eats) / Subject + does/do + V1 (questions)',
      'Present Continuous: Subject + is/am/are + V-ing (She is eating)',
      'Present Perfect: Subject + has/have + V3 (They have eaten)',
      'Simple Past: Subject + V2 (He ate)',
      'Past Continuous: Subject + was/were + V-ing',
      'Future Simple: Subject + will + V1',
      'Note: will/would, shall/should for future/conditional',
    ],
    examples: [
      { correct: 'She has been working here for five years.', explanation: 'Present Perfect Continuous: started in past, still continuing' },
      { correct: 'I was studying when he called.', explanation: 'Past Continuous + Simple Past: ongoing action interrupted' },
      { incorrect: 'I am knowing the answer.', correct: 'I know the answer.', explanation: 'State verbs (know, believe, want) don\'t use continuous tenses' },
    ],
    exercises: [
      { id: 't1', type: 'fill-blank', question: 'She ___ (study) for three hours yesterday.', answer: 'studied', explanation: 'Simple past: completed action in the past' },
      { id: 't2', type: 'choose-correct', question: 'Which is correct?', options: ['I am knowing him since school', 'I have known him since school', 'I knew him since school'], answer: 'I have known him since school', explanation: 'Present Perfect with "since" for states lasting until now' },
      { id: 't3', type: 'correct-sentence', question: 'Fix: "By tomorrow, I will finished the report."', answer: 'By tomorrow, I will have finished the report.', explanation: 'Future Perfect: will have + V3 for action complete by a future time' },
    ],
  },
  {
    id: 'parts-of-speech',
    title: 'Parts of Speech',
    icon: '📚',
    color: '#6C63FF',
    category: 'grammar',
    theory: '8 Parts of Speech:\n1. Noun - names a person, place, thing, idea\n2. Pronoun - replaces a noun (he, she, it, they)\n3. Verb - action or state (run, is, seem)\n4. Adjective - describes a noun (big, blue, happy)\n5. Adverb - modifies verb/adj/adverb (quickly, very, well)\n6. Preposition - shows relationship (in, on, at, by)\n7. Conjunction - joins words/clauses (and, but, because)\n8. Interjection - exclamation (Oh!, Wow!, Hey!)',
    rules: [
      'A noun can be subject or object of a sentence',
      'Adjectives come BEFORE nouns (a beautiful flower)',
      'Adverbs often end in -ly but not always (fast, hard, well)',
      'Prepositions are always followed by a noun/pronoun phrase',
      'Coordinating conjunctions: FANBOYS (For, And, Nor, But, Or, Yet, So)',
    ],
    examples: [
      { correct: 'The quick brown fox jumps over the lazy dog.', explanation: 'Noun: fox, dog. Adjective: quick, brown, lazy. Verb: jumps. Preposition: over.' },
      { correct: 'She runs quickly but he runs slowly.', explanation: 'quickly, slowly = adverbs modifying verbs. but = conjunction.' },
    ],
    exercises: [
      { id: 'pos1', type: 'choose-correct', question: 'What part of speech is "beautiful" in "a beautiful sunset"?', options: ['Noun', 'Adverb', 'Adjective', 'Verb'], answer: 'Adjective', explanation: 'Beautiful describes the noun "sunset" — that makes it an adjective.' },
      { id: 'pos2', type: 'choose-correct', question: 'Identify the conjunction: "I wanted to come, but I was busy."', options: ['I', 'wanted', 'but', 'busy'], answer: 'but', explanation: '"but" is a coordinating conjunction joining two clauses.' },
    ],
  },
  {
    id: 'voice',
    title: 'Active & Passive Voice',
    icon: '🔄',
    color: '#FF6B6B',
    category: 'grammar',
    theory: 'Active Voice: Subject performs the action\n"The dog bit the man."\n\nPassive Voice: Subject receives the action\n"The man was bitten by the dog."\n\nPassive Formula:\nObject + [be verb in same tense] + Past Participle (V3) + by + Subject\n\nUse passive when:\n• Doer is unknown or unimportant\n• Action is more important than doer\n• In formal/scientific writing',
    rules: [
      'Simple Present Active → Passive: am/is/are + V3',
      'Simple Past Active → Passive: was/were + V3',
      'Present Perfect Active → Passive: has/have been + V3',
      'Future Active → Passive: will be + V3',
      'Modal Active → Passive: modal + be + V3',
    ],
    examples: [
      { correct: 'The teacher taught the lesson. → The lesson was taught by the teacher.', explanation: 'Simple past passive: was/were + V3' },
      { correct: 'They are building a new bridge. → A new bridge is being built by them.', explanation: 'Present continuous passive: is/am/are being + V3' },
      { correct: 'Someone has stolen my wallet. → My wallet has been stolen.', explanation: 'Present perfect passive: has/have been + V3. "by someone" omitted (unknown doer)' },
    ],
    exercises: [
      { id: 'v1', type: 'correct-sentence', question: 'Change to passive: "She wrote a letter."', answer: 'A letter was written by her.', explanation: 'Simple past passive: Object + was/were + V3 + by + Subject(object case)' },
      { id: 'v2', type: 'fill-blank', question: 'The cake ___ (eat) by the children. [Simple Past Passive]', answer: 'was eaten', explanation: 'Past passive: was/were + past participle' },
    ],
  },
  {
    id: 'vocabulary',
    title: 'Vocabulary Building',
    icon: '📖',
    color: '#10B981',
    category: 'vocabulary',
    theory: 'A strong vocabulary improves reading, writing, speaking and comprehension. Key strategies:\n\n1. Learn word roots (Latin/Greek)\n2. Learn prefixes and suffixes\n3. Use words in context\n4. Practice with synonyms and antonyms\n5. Learn collocations (words that go together)',
    rules: [
      'Prefix UN- means "not": unhappy, unkind, unlikely',
      'Prefix PRE- means "before": preview, predict, prepare',
      'Suffix -TION/-SION makes nouns: education, decision',
      'Suffix -FUL means "full of": beautiful, careful, hopeful',
      'Suffix -LESS means "without": careless, hopeless, useless',
    ],
    examples: [
      { correct: 'BENEVOLENT = bene (good) + volent (wish) = wishing good for others', explanation: 'Word root analysis helps remember meaning' },
      { correct: 'AMBIGUOUS (adj) = having more than one meaning\nAMBIGUITY (noun) = the state of being ambiguous', explanation: 'Learn words in word families: adj → noun → verb forms' },
    ],
    exercises: [
      { id: 'voc1', type: 'choose-correct', question: 'Choose the synonym for DILIGENT:', options: ['Lazy', 'Hardworking', 'Careless', 'Slow'], answer: 'Hardworking', explanation: 'Diligent means hardworking, showing steady effort and care.' },
      { id: 'voc2', type: 'choose-correct', question: 'What does EPHEMERAL mean?', options: ['Permanent', 'Lasting only a short time', 'Very large', 'Confusing'], answer: 'Lasting only a short time', explanation: 'Ephemeral (adj): lasting for a very short time. "An ephemeral trend."' },
    ],
  },
  {
    id: 'speaking',
    title: 'Speaking Confidence',
    icon: '🎤',
    color: '#F59E0B',
    category: 'speaking',
    theory: 'Effective English speaking combines fluency, accuracy, vocabulary, and confidence.\n\nKey Areas:\n• Pronunciation - stress and intonation patterns\n• Fluency - speaking smoothly without long pauses\n• Vocabulary - using varied and appropriate words\n• Grammar - using correct structures naturally\n• Confidence - speaking without fear of mistakes\n\n"The only way to improve speaking is to SPEAK MORE!"',
    rules: [
      'Stress the RIGHT syllable: PHOtograph, phoTOGraphy, photoGRAPHic',
      'Use linking sounds: "pick_it_up" not "pick it up" separately',
      'Intonation rises for questions: "You are coming?" ↗',
      'Intonation falls for statements: "I am coming." ↘',
      'Use filler phrases naturally: "Well, you see...", "Actually...", "You know..."',
    ],
    examples: [
      { correct: 'Instead of: "The thing is good." → Say: "The product is excellent/remarkable/outstanding."', explanation: 'Use specific, precise words to sound more fluent and natural.' },
      { correct: 'Instead of: "I am not knowing." → Say: "I don\'t know." / "I\'m not sure."', explanation: 'State verbs (know, understand, believe) are not used in continuous form.' },
    ],
    exercises: [
      { id: 'sp1', type: 'choose-correct', question: 'Which is more natural in spoken English?', options: ['I am not understanding this.', 'I don\'t understand this.', 'I am not understand this.'], answer: "I don't understand this.", explanation: '"Understand" is a state verb — use simple present, not continuous.' },
      { id: 'sp2', type: 'fill-blank', question: 'Polite request: "___ you please help me?" (modal verb)', answer: 'Could', explanation: 'Could/Would you please... is the most polite request form.' },
    ],
  },
];
