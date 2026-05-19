
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
    id: 'sentence',
    title: 'Sentence',
    icon: '✏️',
    color: '#E879F9',
    category: 'grammar',
    theory: 'A sentence is a group of words that expresses a complete thought. It has two essential parts:\n\n1. SUBJECT – who or what the sentence is about\n2. PREDICATE – what the subject does or is\n\nTypes of Sentences:\n• Declarative – makes a statement: "She reads books."\n• Interrogative – asks a question: "Does she read books?"\n• Imperative – gives a command: "Read this book."\n• Exclamatory – expresses strong emotion: "What a great book!"\n\nStructure types:\n• Simple – one independent clause\n• Compound – two independent clauses joined by a conjunction\n• Complex – one independent + one dependent clause\n• Compound-Complex – two independent + one dependent clause',
    rules: [
      'Every sentence must have a subject and a verb',
      'A sentence starts with a capital letter and ends with . ? or !',
      'Simple sentence: one subject + one predicate',
      'Compound sentence: uses FANBOYS conjunctions (and, but, or, so…)',
      'Complex sentence: uses subordinating conjunctions (because, although, when, if…)',
      'Avoid run-on sentences: never join two sentences with only a comma',
    ],
    examples: [
      { correct: 'The students completed their homework. (Simple)', explanation: 'Subject: The students. Predicate: completed their homework.' },
      { correct: 'She studied hard, but she failed the test. (Compound)', explanation: 'Two independent clauses joined by "but" (coordinating conjunction).' },
      { correct: 'Although it was raining, they went for a walk. (Complex)', explanation: '"Although it was raining" = dependent clause. "they went for a walk" = independent clause.' },
      { incorrect: 'She is tired, she wants to sleep.', correct: 'She is tired, so she wants to sleep.', explanation: 'Run-on sentence — add a conjunction or split into two sentences.' },
    ],
    exercises: [
      { id: 'sen1', type: 'choose-correct', question: 'Which is a compound sentence?', options: ['She runs fast.', 'She runs fast and she wins races.', 'Because she runs fast, she wins.', 'Running fast is her skill.'], answer: 'She runs fast and she wins races.', explanation: 'Two independent clauses joined by the coordinating conjunction "and".' },
      { id: 'sen2', type: 'choose-correct', question: 'What type of sentence is: "What a beautiful day!"', options: ['Declarative', 'Interrogative', 'Imperative', 'Exclamatory'], answer: 'Exclamatory', explanation: 'Exclamatory sentences express strong emotion and end with an exclamation mark.' },
      { id: 'sen3', type: 'correct-sentence', question: 'Fix: "I was tired, I went to bed early." (run-on)', answer: 'I was tired, so I went to bed early.', explanation: 'Use a coordinating conjunction (so) to properly join the two clauses.' },
    ],
  },
  {
    id: 'subject-verb-agreement',
    title: 'Subject-Verb Agreement',
    icon: '🔗',
    color: '#F97316',
    category: 'grammar',
    theory: 'Subject-Verb Agreement means the verb must agree with its subject in NUMBER (singular/plural) and PERSON (1st, 2nd, 3rd).\n\nKey Rule: Singular subject → Singular verb\nPlural subject → Plural verb\n\nExample:\n• He runs. (singular) ✅\n• They run. (plural) ✅\n• He run. ❌\n\nTricky Cases:\n• Collective nouns (team, class, group) usually take singular verb\n• "Either/Neither" + singular noun → singular verb\n• Compound subject with "and" → plural verb\n• Intervening phrases don\'t affect agreement',
    rules: [
      'He/She/It + V1+s/es (He goes, She watches)',
      'I/You/We/They + V1 (They go, We watch)',
      'Collective nouns: The team is ready. (usually singular)',
      'Either/Neither takes singular: Neither of them is wrong.',
      'With "and": Ram and Shyam are friends. (plural)',
      'With "or/nor": verb agrees with nearer subject',
      'Intervening clause: The box of apples is on the table.',
    ],
    examples: [
      { correct: 'The quality of the mangoes is poor.', explanation: 'Subject = "quality" (singular), not "mangoes". Ignore the intervening phrase.' },
      { correct: 'Either he or his friends are responsible.', explanation: 'With or/nor: verb agrees with the nearer subject "friends" (plural).' },
      { incorrect: 'The committee have decided.', correct: 'The committee has decided.', explanation: 'Collective nouns (committee, jury, class) take singular verb.' },
      { correct: 'Mathematics is a difficult subject.', explanation: 'Subjects ending in -ics (mathematics, physics, economics) take singular verb.' },
    ],
    exercises: [
      { id: 'sva1', type: 'fill-blank', question: 'The news ___ (be) shocking today.', answer: 'is', explanation: '"News" appears plural but is singular — always takes singular verb.' },
      { id: 'sva2', type: 'choose-correct', question: 'Choose the correct verb: "Each of the boys ___ a prize."', options: ['get', 'gets', 'are getting', 'have gotten'], answer: 'gets', explanation: '"Each" is always singular and takes singular verb.' },
      { id: 'sva3', type: 'correct-sentence', question: 'Fix: "The list of items are on the table."', answer: 'The list of items is on the table.', explanation: 'Subject is "list" (singular). "of items" is an intervening phrase.' },
    ],
  },
  {
    id: 'non-finite-verb',
    title: 'Non-Finite Verbs',
    icon: '🔠',
    color: '#0EA5E9',
    category: 'grammar',
    theory: 'A FINITE verb changes with subject and tense. A NON-FINITE verb does NOT change — it remains the same regardless of the subject or tense.\n\nThere are 3 types of Non-Finite Verbs:\n\n1. INFINITIVE – to + base verb\n   "She wants to learn." / "To err is human."\n\n2. GERUND – verb + ing (used as a noun)\n   "Swimming is healthy." / "I enjoy reading."\n\n3. PARTICIPLE – verb form used as an adjective\n   • Present Participle (V-ing): "The crying baby..."\n   • Past Participle (V3): "A broken window..."',
    rules: [
      'Infinitive = to + V1: used as noun, adjective, or adverb',
      'Gerund = V+ing used as NOUN (subject/object of sentence)',
      'Present Participle = V+ing used as ADJECTIVE or in continuous tenses',
      'Past Participle = V3 used as adjective or in perfect/passive forms',
      'Gerund vs Infinitive: "enjoy/avoid/finish" + gerund; "want/wish/hope" + infinitive',
    ],
    examples: [
      { correct: 'To read is important. / She wants to read.', explanation: 'Infinitive used as noun (subject) and after verb "want".' },
      { correct: 'Reading improves your mind.', explanation: 'Gerund "reading" acts as the subject of the sentence.' },
      { correct: 'The barking dog scared the child.', explanation: 'Present Participle "barking" acts as an adjective modifying "dog".' },
      { correct: 'The broken vase was on the floor.', explanation: 'Past Participle "broken" acts as an adjective modifying "vase".' },
    ],
    exercises: [
      { id: 'nfv1', type: 'choose-correct', question: 'Identify the non-finite verb: "She stopped to rest."', options: ['stopped', 'to rest', 'She', 'rest'], answer: 'to rest', explanation: '"to rest" is an infinitive (non-finite) — it does not change with subject/tense.' },
      { id: 'nfv2', type: 'choose-correct', question: 'Which sentence uses a gerund?', options: ['She is swimming.', 'Swimming is good exercise.', 'He swam fast.', 'They will swim.'], answer: 'Swimming is good exercise.', explanation: '"Swimming" is used as a noun (subject) — that makes it a gerund.' },
      { id: 'nfv3', type: 'fill-blank', question: 'I enjoy ___ (read) novels. [gerund]', answer: 'reading', explanation: '"enjoy" must be followed by a gerund (V+ing), not infinitive.' },
    ],
  },
  {
    id: 'preposition',
    title: 'Prepositions',
    icon: '📍',
    color: '#14B8A6',
    category: 'grammar',
    theory: 'A PREPOSITION is a word placed before a noun or pronoun to show its relationship with another word in the sentence.\n\nCommon Types:\n• Place: in, on, at, under, above, between, behind, beside\n• Time: in (months/years), on (days), at (times)\n• Direction: to, into, towards, through\n• Manner: by, with, like\n• Cause: because of, due to, owing to\n\nGolden Rule:\n"A preposition is always followed by a noun/pronoun, NEVER a verb."\nIf followed by a verb → use V+ing (gerund)',
    rules: [
      'AT – specific time/place: at 5 PM, at school, at the door',
      'IN – enclosed space/month/year: in the room, in May, in 2024',
      'ON – surface/day/date: on the table, on Monday, on 5th June',
      'BY – means/agent: by car, by Ram',
      'WITH – instrument/company: cut with a knife, came with him',
      'Between = two things; Among = three or more things',
      'Preposition + V+ing: She is good at singing (NOT at sing)',
    ],
    examples: [
      { correct: 'She arrived at 9 AM. / She arrived in the morning. / She arrived on Monday.', explanation: 'at = specific time; in = general period; on = day/date' },
      { incorrect: 'He is good at sing.', correct: 'He is good at singing.', explanation: 'After a preposition, use the gerund (V+ing) not the base verb.' },
      { correct: 'The book is between the pen and the pencil.', explanation: '"between" for exactly two items.' },
      { correct: 'Distribute sweets among the children.', explanation: '"among" for three or more.' },
    ],
    exercises: [
      { id: 'prep1', type: 'fill-blank', question: 'She is interested ___ learning English.', answer: 'in', explanation: '"interested in" is a fixed preposition phrase. Then use V+ing (learning).' },
      { id: 'prep2', type: 'choose-correct', question: 'He was born ___ 1998.', options: ['at', 'on', 'in', 'by'], answer: 'in', explanation: 'Use "in" with years.' },
      { id: 'prep3', type: 'correct-sentence', question: 'Fix: "The prize was distributed between all students."', answer: 'The prize was distributed among all students.', explanation: '"among" is used when referring to three or more people/things.' },
    ],
  },
  {
    id: 'direct-indirect-speech',
    title: 'Direct & Indirect Speech',
    icon: '💬',
    color: '#8B5CF6',
    category: 'grammar',
    theory: 'DIRECT SPEECH reports the exact words spoken, placed inside quotation marks.\n"She said, \'I am happy.\'"\n\nINDIRECT (Reported) SPEECH reports what was said without quotation marks, often changing tense, pronouns, and time expressions.\nShe said that she was happy.\n\nTense Changes (Backshift):\n• am/is/are → was/were\n• was/were → had been\n• will → would\n• can → could\n• may → might\n• has/have → had\n• Simple Present → Simple Past\n• Simple Past → Past Perfect',
    rules: [
      'Remove quotation marks in indirect speech',
      'Change present tenses to past tense (backshift rule)',
      'Change pronouns: I→he/she, we→they, my→his/her',
      'Change time expressions: now→then, today→that day, tomorrow→the next day, yesterday→the previous day, here→there',
      'Reporting verb for questions: asked/enquired (not said)',
      'Yes/No questions → if/whether: "Are you ready?" → He asked if I was ready.',
      'Commands/Requests → told/asked + to infinitive: "Sit down" → He told me to sit down.',
    ],
    examples: [
      { correct: 'Direct: He said, "I am tired."\nIndirect: He said that he was tired.', explanation: 'am → was (backshift). I → he (pronoun change). "that" added.' },
      { correct: 'Direct: She said, "I will call you tomorrow."\nIndirect: She said that she would call me the next day.', explanation: 'will → would, tomorrow → the next day, you → me.' },
      { correct: 'Direct: He said, "Do you play cricket?"\nIndirect: He asked me if I played cricket.', explanation: 'Yes/No question: asked + if/whether. play → played (backshift).' },
      { correct: 'Direct: The teacher said, "Open your books."\nIndirect: The teacher told us to open our books.', explanation: 'Command: told + object + to + V1. "your" → "our".' },
    ],
    exercises: [
      { id: 'dis1', type: 'correct-sentence', question: 'Change to indirect: She said, "I love music."', answer: 'She said that she loved music.', explanation: 'love → loved (backshift). I → she (pronoun). Add "that".' },
      { id: 'dis2', type: 'fill-blank', question: 'He asked me ___ I was feeling well. (if/whether)', answer: 'if', explanation: 'Yes/No questions in indirect speech use if or whether.' },
      { id: 'dis3', type: 'choose-correct', question: 'Change: "He said, \\"I can swim.\\""', options: ['He said that he can swim.', 'He said that he could swim.', 'He told that he could swim.', 'He said that I could swim.'], answer: 'He said that he could swim.', explanation: 'can → could (backshift). I → he (pronoun change). Use "said that", not "told that".' },
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
