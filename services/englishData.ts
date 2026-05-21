
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
  // ─── TENSES ─────────────────────────────────────────────────────────────────
  {
    id: 'tenses',
    title: 'Tenses — All 12 Tenses',
    icon: '⏱️',
    color: '#45B7D1',
    category: 'grammar',
    theory: `What is Tense?
The word "Tense" stands for a verb or a series of verb forms that indicate the time / keep relationship with the time.

TENSE is divided into:
● Present Tense
● Past Tense
(and Future Tense)

Why we need Tense?
We need tense very much because it shows at what time and the work is done and how much the work is done.

━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRESENT TENSES
━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. SIMPLE PRESENT / PRESENT INDEFINITE
An action which is done regularly / habitually.
Structure:
  +ve: Sub + V(s/es) + object
  -ve: Sub + do/does + not + V₁ + obj
  Yes-no type: Do/Does + sub + mv + object..?
               Do/Does + sub + not + V₁ + obj...?
  Wh-type: Wh word + do/does + sub + V₁...?
           Wh word + do/does + not + sub + V₁...?
  Who type: +ve – Who + V₅ + obj...?
             -ve – Who + do/does + not + V₁ + obj...?

Uses / Usage:
  ★ Habitual activity       → I go to school everyday.
  ★ Universal / Scientific / Permanent truth → The sun rises in the east.
  ★ General facts           → Cows eat grass.
  ★ Scientific truth        → Water boils at 100°c.
  ★ Fact of presents        → Potato sells at Rs 20.
  ★ Live commentaries       → Warner hits a six.
  ★ Indefinite adverbs      → Always, rarely, everyday, commonly, usually, seldoms, scarcely, hardly etc.
  ★ Regular / everyday
  ★ A planned future action as per timetable.
  ★ Verbs of perception
  ★ In sports commentaries / Live telecast / Instruction

━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. PRESENT PROGRESSIVE / CONTINUOUS / IMPERFECT
An action which is incomplete, begins before now and continuous at the present moment.
Structure:
  +ve: Sub + is/am/are + V₄ + obj
  -ve: Sub + is/am/are + not + V₄ + obj
  Yes-no type +ve: Is/am/are + S + V₄ + obj?
              -ve: Is/am/are + S + not + V₄ + obj?
  Wh type +ve: Wh word + is/am/are + S + V₄?
          -ve: Wh word + is/am/are + not + S + V₄?

Uses:
  ★ Progressive adverbs → When we see progressive adverbs such as today, now, at present, at the moment, tomorrow, now a days, this evening etc., we will use the present continuous.
    Example: What are you doing now?
             I am learning English today.
  ★ An action is going on at the time of speaking →
    Example: I am reading.
             You are listening.
             He is singing.
  ★ With a future action →
    Example: I am going to Puri tomorrow.
             Uncle is teaching here on coming Sunday.
  ★ An action happening this time but not necessarily at the time of speaking →
    My brother is working in a bank.
    My sister is reading in school.

━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. PRESENT PERFECT
Present Perfect is a past action which has already completed.
Structure:
  +ve: Sub + has/have + V₃ + obj
  -ve: Sub + has/have + not + V₃ + obj
  Yes-no +ve: Has/have + sub + V₃ + obj?
         -ve: Has/have + sub + not + V₃ + obj?
  Wh type +ve: Wh word + has/have + sub + V₃...?
          -ve: Wh word + has/have + not + sub + V₃...?

Uses:
  ★ An action which has been completing recently →
    Ex: We have written the uses of present simple.
        My father hasn't arrived yet.
  ★ An action completed in the past but the effect is still going →
    Ex: Man has reached the moon.
        Pushi, where have you been?
        I haven't completed my homework.
  ★ Perfect adverbs → We will use present perfect tense when there are following adverbs: Just, already, Just now, Recently in a positive sentence. Yet and So far in a negative sentence.
    I have already eaten my supper.
    My friend has changed his school recently.
  ★ Use of since and for →
    Since is used with a point of time upto now.
    Ex: We have lived here since 2000.
    For is used with period of time upto now.
    Ex: We have lived here for 10 hours/years.

━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. PRESENT PERFECT PROGRESSIVE
Present Perfect Progressive is that it started in the past, continuing at present and likely to continue in the future.
Structure:
  +ve: Sub + has/have + been + V₄ + obj
  -ve: Sub + has/have + not + been + V₄ + obj
  Yes-no type +ve: Has/have + sub + been + V₄ + obj?
               -ve: Has/have + sub + not + been + V₄ + obj?
  Wh type +ve: Wh word + has/have + sub + been + V₄?
          -ve: Wh word + has/have + not + sub + been + V₄?

Uses:
  ★ An action which began at some time in the past and it is still going on →
    Ex: It has been raining since yesterday.
        I have been teaching for one year.
  ★ An action which began in the past and completed just now →
    Ex: He has been learning Hindi for five years.
        He has been playing his student life.

━━━━━━━━━━━━━━━━━━━━━━━━━━━
PAST TENSES
━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. PAST SIMPLE / PAST INDEFINITE
Past simple is used for a past action that happened in a moment, or a past action that happened over a period of time.
Structure:
  +ve: Sub + V₂
  -ve: Sub + did + not + V₁
  Yes-no type +ve: Did + sub + V₁...?
              -ve: Did + not + sub + V₁...?
  Wh word type +ve: Wh word + did + sub + V₁...?
               -ve: Wh word + did + not + sub + V₁...?

Uses:
  ★ To describe an action that took place and was completed in the past.
    Ex: He left for Bengaluru yesterday.
        India defeated Pakistan during the Kargil.
  ★ To express the past event, when the time is not given but it is implied and definite.
    Ex: The flight was half an hour late.
        I bought this shirt from the McDonalds.
  ★ To describe a habitual, or repeated action in the past.
    Ex: Ram never smoked.
        Everyday my father used to read a chapter of the Gita.
  ★ To denote an action which continued for sometime in the past.
    Ex: We studied Sanskrit for two years.
        We met twice a day during the summer holidays.

━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. PAST PROGRESSIVE / PAST CONTINUOUS
Past progressive is used for an action which was in progress in the past.
Structure:
  +ve: Sub + was/were + V₄
  -ve: Sub + was/were + not + V₄
  Yes-no type +ve: Was/Were + sub + V₄...?
              -ve: Was/Were + not + sub + V₄...?
  Wh word type +ve: Wh word + was/were + sub + V₄...?
               -ve: Wh word + was/were + not + sub + V₄...?

Uses:
  ★ To describe an action that was in progress at a point of time or over a period of time in the past.
    Ex: I was having my supper at 7 o'clock yesterday.
        At 5 o'clock in the morning, I was completing my homework.
  ★ To show gradual development of a happening.
    Ex: It was getting dark.
        The boys were growing like a young plant.
  ★ To describe an action that was in progress when another action took place.
    Ex: I was reading the newspaper when the postman knocked at the door.
        She was sleeping when the phone rang.
  ★ To describe two actions going on at the same time in the past.
    Ex: While I was writing letters, she was listening to the radio.

━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. PAST PERFECT
Past perfect is used for an earlier action in the past.
Structure:
  +ve: Sub + had + V₃
  -ve: Sub + had + not + V₃
  Yes-no type +ve: Have/Has + sub + V₃?
              -ve: Have/Has + sub + V₃?
  Wh type +ve: Wh word + has/have + sub + V₃...?
          -ve: Wh word + has/have + not + sub + V₃...?

Uses:
  ★ To express unfulfilled desires of the past.
    Ex: If only Ramesh had not spoiled his career.
        I wish I had listened to my parents' teaching.
  ★ To express impossible conditions of the past.
    Ex: If we had left early, we would have caught the train.
        If you had worked hard, you would have passed.
  ★ To express an action in the past which was complete before another action took place in the past.
    Ex: We went to school after the rain had stopped.
        He had died before the war began.
  ★ To express an action completed before a certain moment in the past.
    Ex: At 9.00 pm all the shops had closed.
        He had passed his graduation at the age of 16 years.

━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. PAST PERFECT PROGRESSIVE
Past perfect progressive is used for a past action in progress for some time when another action took place.
Structure:
  +ve: Sub + have/has + been + verb + ing
  -ve: Sub + have/has + not + been + verb + ing
  Yes-no type +ve: Have/Has + sub + been + verb+ing?
              -ve: Have/Has + not + sub + been + verb+ing?
  Wh type +ve: Wh word + have/has + sub + been + verb+ing?
          -ve: Wh word + have/has + not + sub + been + verb+ing?

Uses:
  ★ To express an action which had been going on for some time before another past action.
    Ex: We had been reading for an hour when our teacher came.
        He had been living in Delhi for a year when his father died.
  ★ To describe a repeated action in the Past Perfect.
    Ex: Siba had been trying to learn German language.

━━━━━━━━━━━━━━━━━━━━━━━━━━━
FUTURE TENSES
━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. SIMPLE FUTURE / FUTURE INDEFINITE
The Future Indefinite time is used to express the action or event which is likely to happen in future.
Structure:
  +ve: Sub + will/shall + verb
  -ve: Sub + will/shall + not + verb
  Yes-no type +ve: Shall/will + sub + verb...?
              -ve: Shall/will + not + sub + verb...?
  Wh type +ve: Wh word + will/shall + sub + verb...?
          -ve: Wh word + will/shall + not + sub + verb...?

Uses:
  ★ To express an action that will take place in the future.
    Ex: I shall be sixty tomorrow.
        They will certainly wait for us.
  ★ For habitual actions which we assume will take place.
    Ex: Winters will come soon.
        The flood victims will build their houses.
  ★ With clauses of condition and time.
    Ex: The cup will break if I drop it.
        He will fail unless he works hard.

━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. CONTINUOUS FUTURE / FUTURE CONTINUOUS
The Future Continuous Tense is used to express an event that is expected to take place in the normal course or at some time in the future.
Structure:
  +ve: Sub + will/shall + be + V₄
  -ve: Sub + will/shall + not + be + V₄
  Yes-no type +ve: Will/Shall + sub + be + V₄...?
              -ve: Will/Shall + not + sub + be + V₄...?
  Wh type +ve: Wh word + will/shall + sub + be + V₄...?
          -ve: Wh word + will/shall + not + sub + be + V₄...?

Uses:
  ★ As an ordinary continuous tense.
    Ex: Meena will be returning.
        I shall be meeting the doctor tomorrow.
  ★ To express future without intention.
    Ex: I shall be waiting for my friends.
        Ranjan will be helping Sonam tomorrow.
  ★ To express an action that will be in progress at a given point of time in the future during a period of time in the future.
    Ex: When I reach Mussourie, it will be raining there.
        It will be snowing in Manali during October.

━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. FUTURE PERFECT
Structure:
  +ve: Sub + will/shall + have/has + V₃
  -ve: Sub + will/shall + not + have/has + V₃
  Yes-no type +ve: Will/Shall + sub + have/has + V₃...?
              -ve: Will/Shall + not + sub + have/has + V₃...?
  Wh type +ve: Wh word + will/shall + sub + have/has + V₃...?
          -ve: Wh word + will/shall + not + sub + have/has + V₃...?

Uses:
  ★ To express an action which is expected to be complete by a certain time in the future.
    Ex: The train will have left the station before you reach.
        By 2010, Delhi will have a lot of changes due to Olympics.
  ★ To express the speaker's belief that something has taken place.
    Ex: You will have heard about my father's promotion.

━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. FUTURE PERFECT PROGRESSIVE / CONTINUOUS
The future perfect continuous tense is used to express an action that will have been going on at or before some point of time in the future.
Structure:
  +ve: Sub + will/shall + have/has + been + verb + ing
  -ve: Sub + will/shall + not + have/has + been + V₄
  Yes-no type +ve: Will/Shall + sub + have/has + been + V₄...?
              -ve: Will/Shall + sub + not + have/has + been + V₄...?
  Wh type +ve: Wh word + will/shall + sub + has/have + been + V₄...?
          -ve: Wh word + will/shall + not + sub + has/have + been + V₄...?

Uses:
  ★ To express an action continuing beyond some given time in future.
    Ex: By next June, Neelu will have been an I.T. expert in T.C.S.`,
    rules: [
      'Simple Present: Sub + V(s/es) + obj | Use: habitual, universal truth, general facts',
      'Present Continuous: Sub + is/am/are + V-ing | Use: action in progress now',
      'Present Perfect: Sub + has/have + V3 | Use: just, already, since, for',
      'Present Perfect Continuous: Sub + has/have + been + V-ing | Use: action from past still going',
      'Past Simple: Sub + V2 | Use: completed past action',
      'Past Continuous: Sub + was/were + V-ing | Use: action in progress in past',
      'Past Perfect: Sub + had + V3 | Use: earlier of two past actions',
      'Past Perfect Continuous: Sub + had + been + V-ing | Use: action before another past action',
      'Simple Future: Sub + will/shall + V1 | Use: future actions',
      'Future Continuous: Sub + will + be + V-ing | Use: ongoing future action',
      'Future Perfect: Sub + will + have + V3 | Use: complete by a future time',
      'Future Perfect Continuous: Sub + will + have + been + V-ing | Use: continuing beyond future point',
    ],
    examples: [
      { correct: 'Simple Present: He goes to market every morning.', explanation: 'Sub + V(s) + obj. Habitual activity.' },
      { correct: 'Present Continuous: I am learning English today.', explanation: 'Sub + is/am/are + V-ing. Progressive adverb "today".' },
      { correct: 'Present Perfect: I have already eaten my supper.', explanation: 'Sub + has/have + V3. Perfect adverb "already".' },
      { correct: 'Present Perfect Progressive: It has been raining since yesterday.', explanation: 'Sub + has/have + been + V-ing + since (point of time).' },
      { correct: 'Past Simple: He left for Bengaluru yesterday.', explanation: 'Sub + V2. Completed action in the past.' },
      { correct: 'Past Progressive: She was sleeping when the phone rang.', explanation: 'was/were + V-ing: ongoing action interrupted by another.' },
      { correct: 'Past Perfect: He had died before the war began.', explanation: 'had + V3: earlier of two past actions.' },
      { correct: 'Past Perfect Progressive: We had been reading for an hour when our teacher came.', explanation: 'had + been + V-ing: action going on before another past action.' },
      { correct: 'Simple Future: He will fail unless he works hard.', explanation: 'will/shall + V1: clause of condition.' },
      { correct: 'Future Continuous: It will be raining when I reach Mussourie.', explanation: 'will + be + V-ing: action in progress at a future moment.' },
      { correct: 'Future Perfect: The train will have left before you reach.', explanation: 'will + have + V3: complete by a future time.' },
      { correct: 'Future Perfect Progressive: By next June, Neelu will have been an I.T. expert.', explanation: 'will + have + been + V-ing: continuing beyond a future point.' },
      { incorrect: 'I am knowing the answer.', correct: 'I know the answer.', explanation: 'State verbs (know, believe, want) do not use continuous tenses.' },
    ],
    exercises: [
      { id: 't1', type: 'fill-blank', question: 'She ___ (study) for three hours yesterday.', answer: 'studied', explanation: 'Simple Past (V2): completed action in the past.' },
      { id: 't2', type: 'choose-correct', question: 'Which is correct?', options: ['I am knowing him since school', 'I have known him since school', 'I knew him since school'], answer: 'I have known him since school', explanation: 'Present Perfect with "since" for states lasting until now.' },
      { id: 't3', type: 'correct-sentence', question: 'Fix: "By tomorrow, I will finished the report."', answer: 'By tomorrow, I will have finished the report.', explanation: 'Future Perfect: will have + V3 for action complete by a future time.' },
      { id: 't4', type: 'fill-blank', question: 'They ___ (play) cricket when it started raining.', answer: 'were playing', explanation: 'Past Continuous: ongoing action interrupted. Was/were + V-ing.' },
      { id: 't5', type: 'choose-correct', question: 'I ___ here for five years. (Choose correct tense)', options: ['am working', 'have been working', 'worked', 'was working'], answer: 'have been working', explanation: 'Present Perfect Continuous: action started in past, still continuing. Use with "for".' },
      { id: 't6', type: 'correct-sentence', question: 'Fix: "She has went to the market."', answer: 'She has gone to the market.', explanation: 'Present Perfect needs V3. Go → went → gone. "went" is V2, NOT V3.' },
      { id: 't7', type: 'choose-correct', question: 'Which sentence uses Past Perfect?', options: ['He had finished before she arrived.', 'He finished before she arrived.', 'He was finishing before she arrived.', 'He has finished.'], answer: 'He had finished before she arrived.', explanation: 'Past Perfect (had + V3) shows the earlier of two past actions.' },
      { id: 't8', type: 'fill-blank', question: '"Water ___ (boil) at 100°C." — Which tense?', answer: 'boils', explanation: 'Simple Present for scientific/universal truth. Sub + V(s/es).' },
      { id: 't9', type: 'choose-correct', question: 'Choose the Future Continuous sentence:', options: ['I will go tomorrow.', 'I will be going tomorrow.', 'I have gone tomorrow.', 'I went tomorrow.'], answer: 'I will be going tomorrow.', explanation: 'Future Continuous = will + be + V-ing: action in progress at a future time.' },
      { id: 't10', type: 'fill-blank', question: 'He ___ (live) in Delhi for a year when his father died. [Past Perfect Continuous]', answer: 'had been living', explanation: 'Past Perfect Continuous: had + been + V-ing. Action going on before another past event.' },
    ],
  },

  // ─── PARTS OF SPEECH ─────────────────────────────────────────────────────────
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
      { id: 'pos3', type: 'choose-correct', question: 'What part of speech is "quickly" in "She ran quickly"?', options: ['Adjective', 'Noun', 'Adverb', 'Verb'], answer: 'Adverb', explanation: '"Quickly" modifies the verb "ran" — adverbs modify verbs, adjectives, or other adverbs.' },
      { id: 'pos4', type: 'fill-blank', question: 'The word "happiness" is a ___. (part of speech)', answer: 'Noun', explanation: 'Happiness is an abstract noun — it names a concept, feeling, or idea.' },
      { id: 'pos5', type: 'correct-sentence', question: 'Identify all nouns in: "The brave soldier fought the enemy at the border."', answer: 'Nouns: soldier, enemy, border', explanation: '"brave" = adjective, "fought" = verb, "the" = article. Soldier, enemy, border name people/places/things.' },
      { id: 'pos6', type: 'choose-correct', question: 'Which word is a preposition in: "She sat under the tree"?', options: ['sat', 'under', 'tree', 'She'], answer: 'under', explanation: '"under" shows the relationship between "sat" and "the tree" — it is a preposition.' },
    ],
  },

  // ─── ACTIVE & PASSIVE VOICE ──────────────────────────────────────────────────
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
      { id: 'v1', type: 'correct-sentence', question: 'Change to passive: "She wrote a letter."', answer: 'A letter was written by her.', explanation: 'Simple past passive: Object + was/were + V3 + by + Subject(object case).' },
      { id: 'v2', type: 'fill-blank', question: 'The cake ___ (eat) by the children. [Simple Past Passive]', answer: 'was eaten', explanation: 'Past passive: was/were + past participle.' },
      { id: 'v3', type: 'correct-sentence', question: 'Change to passive: "They are building a new school."', answer: 'A new school is being built by them.', explanation: 'Present Continuous Passive: is/am/are + being + V3.' },
      { id: 'v4', type: 'choose-correct', question: 'Which is correct passive of: "She has completed the project"?', options: ['The project has been completed by her.', 'The project was completed by her.', 'The project is completed by her.', 'The project had been completed by her.'], answer: 'The project has been completed by her.', explanation: 'Present Perfect Passive = has/have + been + V3. The tense must be preserved.' },
      { id: 'v5', type: 'fill-blank', question: 'Letters ___ (deliver) every morning. [Simple Present Passive]', answer: 'are delivered', explanation: 'Simple Present Passive: am/is/are + V3. "Letters" is plural → "are delivered".' },
      { id: 'v6', type: 'correct-sentence', question: 'Change to active: "The song was sung beautifully by her."', answer: 'She sang the song beautifully.', explanation: 'Active: Subject + verb in same tense + object. was sung → sang.' },
    ],
  },

  // ─── VOCABULARY ──────────────────────────────────────────────────────────────
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
      { id: 'voc3', type: 'choose-correct', question: 'Antonym of BENEVOLENT:', options: ['Kind', 'Malevolent', 'Generous', 'Gentle'], answer: 'Malevolent', explanation: 'Benevolent = wishing good (bene = good). Malevolent = wishing harm (male = bad). Opposite!' },
      { id: 'voc4', type: 'fill-blank', question: 'The prefix UN- in UNHAPPY means ___.', answer: 'not', explanation: 'UN- is a negative prefix meaning "not": unhappy=not happy, unkind=not kind.' },
      { id: 'voc5', type: 'choose-correct', question: 'Choose the correct meaning of VERBOSE:', options: ['Silent', 'Using too many words', 'Polite', 'Angry'], answer: 'Using too many words', explanation: 'Verbose = using more words than necessary. From Latin "verbum" (word). Opposite: concise.' },
      { id: 'voc6', type: 'choose-correct', question: 'Synonym for AMBIGUOUS:', options: ['Clear', 'Vague', 'Exact', 'Simple'], answer: 'Vague', explanation: 'Ambiguous means having more than one possible meaning, unclear. Synonym: vague, unclear, equivocal.' },
    ],
  },

  // ─── SENTENCE ────────────────────────────────────────────────────────────────
  {
    id: 'sentence',
    title: 'Sentence',
    icon: '✏️',
    color: '#E879F9',
    category: 'grammar',
    theory: `Sentence is a group of words with complete meaning.

TYPES OF SENTENCES:
          Sentence
       ╱     │      ╲
  Simple  Compound  Complex

━━━━━━━━━━━━━━━━━━━━━━━
SIMPLE SENTENCE
━━━━━━━━━━━━━━━━━━━━━━━
Which sentence has a subject and a finite verb in the predicate part is called simple sentence.

Finite verb – Which verb can change as per person, number & tense.

Simple sentence has 5 types:
  1. Declarative / Affirmative / Assertive / Stamentive
  2. Interrogative
  3. Imperative
  4. Exclamatory
  5. Optative

★ DECLARATIVE SENTENCE – Which simple sentence declares/states something.
  → It begins with capital letter and ends with (.)
  → It is two types:
     +ve – Sub + Verb + Obj
     -ve – Sub + hv + not + mv + obj
  → Ex: We are reading English.
        We are not eating rice.

★ INTERROGATIVE SENTENCE – Which simple sentence asks something to get the answer or asking type sentences are called Interrogative sentence.
  → It has two types: (i) Wh-type Interrogative  (ii) Yes-no type Interrogative

  (i) Wh-type Interrogative:
  → This type begins with Wh words such as 'What', 'Who', 'When', 'Where', 'Whose', 'Which', 'Why', 'Howman' etc. and ends with question mark (?).
  → By this sentence, we can get the answer in a word or more than one word.
  Structure:
    +ve – Wh word + hv + sub + mv...?
    -ve – Wh word + hv + not + sub + mv...?
  Ex: Who is your principal of your school?
      When do you get up?
      Where have you been?
      When had they gone to home?

  (ii) Yes-no type Interrogative:
  → This type of sentence begins with helping verb and ends with (?).
  → From this question we get the answer in only one word, that is yes or no.
  Structure:
    +ve – Hv + sub + mv + obj...?
    -ve – Hv + not + sub + mv + obj?  / Hv + sub + not + mv + obj?
  Ex: Have we learnt grammar?
      Does your father drink alcohol?
      Did that woman dance yesterday?

★ IMPERATIVE SENTENCE – Which simple sentence shows or indicates order, command, request, warn, wish, suggestion etc.
  → In this sentence subject doesn't use/write but sub is in hidden and that hiding sub is 'you'.
  → These hiding subs are known as 'pseudo' sub.
  Structure:
    V₁ + obj
    Let's + V₁ + obj
  Ex: Turn left.
      May I help you.
      Let's go.

★ EXCLAMATORY SENTENCE – Which sentence expresses strong feelings or emotion.
  → This sentence begins with 'what' or 'how'
  → It ends with Exclamatory mark (!)
  → This can be written into two ways: (i) Using 'what'  (ii) Using 'how'

  Structure using 'what':
    What + a/an + adj + noun + sub + verb + !
  Ex: What a beautiful picture it is!
      What a naughty boy you are!

  Structure using 'how':
    How + adj + sub + verb + !
  Ex: How stupid you are!
      How tall the tree is!

━━━━━━━━━━━━━━━━━━━━━━━
COMPOUND SENTENCE
━━━━━━━━━━━━━━━━━━━━━━━
The sentences which have two or more than two independent clauses and are joined by coordinating conjunctions are known as 'compound sentences'.

There are two types of compound sentence:
  (i) Co-ordinating conjunctions joined in the sentence.
  (ii) Co-relative conjunctions are joined in the sentence.

Co-ordinating conjunctions:
  B – but       → He is very hardworking but he is really not intelligent.
  A – and       → I went to school and joined the prayer class.
  F – for       → He came and stayed for a week.
  I – therefore
  T – (therefore)
  O – or
  S – so
  B – beside
  O – otherwise
  Y – yet
  S – since

Correlative conjunctions:
  Either ... or
  Neither ... nor
  Not only ... but also
  Both ... and

━━━━━━━━━━━━━━━━━━━━━━━
COMPLEX SENTENCE
━━━━━━━━━━━━━━━━━━━━━━━
Which sentences have one or more than one dependent or subordinate clause, is known as 'complex sentence'.

The subordinate clauses can be of three types:
  i) Noun clause
  ii) Adverb clause
  iii) Relative (Adjective) clause`,
    rules: [
      'Every sentence must have a subject and a finite verb',
      'Simple sentence: one subject + one finite verb in predicate',
      'Declarative: makes a statement; ends with (.)',
      'Interrogative: asks a question; ends with (?); two types: Wh-type and Yes-no type',
      'Imperative: command/request; hidden subject "you"; Structure: V₁ + obj',
      'Exclamatory: expresses strong emotion; starts with "what" or "how"; ends with (!)',
      'Compound: two independent clauses + coordinating conjunction (FANBOYS + beside, otherwise, yet, since)',
      'Correlative conjunctions: Either...or, Neither...nor, Not only...but also, Both...and',
      'Complex: one independent + one dependent clause; three types: noun, adverb, relative clause',
      'Avoid run-on sentences: never join two sentences with only a comma',
    ],
    examples: [
      { correct: 'The students completed their homework. (Simple — Declarative)', explanation: 'Subject: The students. Predicate: completed their homework.' },
      { correct: 'What a beautiful picture it is! (Exclamatory using "what")', explanation: 'What + a/an + adj + noun + sub + verb + !' },
      { correct: 'How tall the tree is! (Exclamatory using "how")', explanation: 'How + adj + sub + verb + !' },
      { correct: 'She studied hard, but she failed the test. (Compound)', explanation: 'Two independent clauses joined by "but" (co-ordinating conjunction).' },
      { correct: 'Although it was raining, they went for a walk. (Complex)', explanation: '"Although it was raining" = dependent clause. "they went for a walk" = independent clause.' },
      { incorrect: 'She is tired, she wants to sleep.', correct: 'She is tired, so she wants to sleep.', explanation: 'Run-on sentence — add a coordinating conjunction or split into two sentences.' },
      { correct: 'Who is your principal of your school? (Wh-type Interrogative)', explanation: 'Starts with Wh word. Can get answer in more than one word.' },
      { correct: 'Does your father drink alcohol? (Yes-no type Interrogative)', explanation: 'Starts with helping verb. Answer = only yes or no.' },
    ],
    exercises: [
      { id: 'sen1', type: 'choose-correct', question: 'Which is a compound sentence?', options: ['She runs fast.', 'She runs fast and she wins races.', 'Because she runs fast, she wins.', 'Running fast is her skill.'], answer: 'She runs fast and she wins races.', explanation: 'Two independent clauses joined by the coordinating conjunction "and".' },
      { id: 'sen2', type: 'choose-correct', question: 'What type of sentence is: "What a beautiful day!"', options: ['Declarative', 'Interrogative', 'Imperative', 'Exclamatory'], answer: 'Exclamatory', explanation: 'Exclamatory sentences express strong emotion. Begins with "What" + ends with (!).' },
      { id: 'sen3', type: 'correct-sentence', question: 'Fix: "I was tired, I went to bed early." (run-on)', answer: 'I was tired, so I went to bed early.', explanation: 'Use a coordinating conjunction (so) to properly join the two clauses.' },
      { id: 'sen4', type: 'choose-correct', question: 'Which sentence is Imperative?', options: ['He runs fast.', 'Does he run fast?', 'Turn left.', 'What a runner he is!'], answer: 'Turn left.', explanation: 'Imperative sentences give commands/instructions. Subject "you" is hidden (pseudo subject).' },
      { id: 'sen5', type: 'choose-correct', question: 'Identify the type: "When do you get up?"', options: ['Yes-no type Interrogative', 'Wh-type Interrogative', 'Imperative', 'Exclamatory'], answer: 'Wh-type Interrogative', explanation: 'Starts with "When" (Wh word). Answer can be in more than one word.' },
      { id: 'sen6', type: 'fill-blank', question: '"Either...or" and "Neither...nor" are ___ conjunctions.', answer: 'Correlative', explanation: 'Correlative conjunctions work in pairs: Either...or, Neither...nor, Not only...but also, Both...and.' },
      { id: 'sen7', type: 'choose-correct', question: 'Complex sentences have:', options: ['Two independent clauses', 'One independent + one dependent clause', 'Only a dependent clause', 'Three independent clauses'], answer: 'One independent + one dependent clause', explanation: 'Complex sentence = one independent clause + one or more subordinate/dependent clauses.' },
    ],
  },

  // ─── SUBJECT-VERB AGREEMENT ──────────────────────────────────────────────────
  {
    id: 'subject-verb-agreement',
    title: 'Subject-Verb Agreement',
    icon: '🔗',
    color: '#F97316',
    category: 'grammar',
    theory: `The agreement between subject and verb is called subject-verb agreement.

Subject – Which sentence tells about whom, or who does the work in the sentence, or the main part of the sentence.

Verb – Which word or the parts of speech shows an action, state or position is called verb.

SUBJECT → VERB TABLE (from notes):
  I                               → am
  We / You / They / The students  → are
  He / She / It / Gopal / Ram / The teacher → is
  The teacher and the students    → are
  The cow                         → eats
  Cows, goats and sheep           → eat

NOUN → PRONOUN:
  Saumya → He        Computer → It
  Mobile → It        Book → It
  Clock → It         Pen → It
  Subha → She        Student → They

━━━━━━━━━━━━━━━━━━━━━━
SPECIAL RULES (from notes)
━━━━━━━━━━━━━━━━━━━━━━

1a. 'There' — which is an introductory subject — is used as per the noun.
  ★ If the noun is singular, we use the singular verb.
  ★ If the noun is plural, we use the plural verb.
  Example: There is / was a book on the table.
           There are / were four books on the table.

1b. When the sub 'it', which is a dummy sub, is in the sub place, always we use the singular verb after the sub 'it'.
  Example: It is / was ten past twelve.
           It is / was two miles to the beach.
           It is / was raining heavily.

2. We use the singular verb after some plural numbers shortcut named 'WANTAD'.
  There are six letters in the word 'WANTAD'. Which means:
  W – Weight
  A – Amount of money
  N – Number
  T – Time
  A – Age
  D – Distance

  Example: Sixty years is a long time.
           Two kilos of tea costs six hundred rupees.
           Fifty kilometres is not a long distance.
           Five rupees is not a big sum.
           The weight of mine is 42 kg.`,
    rules: [
      'He/She/It + V1+s/es (He goes, She watches)',
      'I/You/We/They + V1 (They go, We watch)',
      'Collective nouns (team, class, group) take singular verb: The team is ready.',
      'Either/Neither takes singular: Neither of them is wrong.',
      'With "and": Ram and Shyam are friends. (plural)',
      'With "or/nor": verb agrees with nearer subject',
      '"There" as introductory subject: verb agrees with the noun that follows it',
      '"It" as dummy subject: always takes singular verb',
      'WANTAD rule: Weight, Amount, Number, Time, Age, Distance → singular verb even if plural-looking',
      'Intervening phrase does not affect agreement: The box of apples is on the table.',
    ],
    examples: [
      { correct: 'There is a book on the table. / There are four books on the table.', explanation: '"There" as introductory subject: verb depends on the noun that follows.' },
      { correct: 'It is raining heavily. / It was ten past twelve.', explanation: '"It" as dummy subject always takes singular verb.' },
      { correct: 'Sixty years is a long time. (WANTAD – Time)', explanation: 'WANTAD: Time (T) takes singular verb even though "sixty years" looks plural.' },
      { correct: 'Two kilos of tea costs six hundred rupees. (WANTAD – Amount)', explanation: 'WANTAD: Amount of money (A) takes singular verb.' },
      { correct: 'The quality of the mangoes is poor.', explanation: 'Subject = "quality" (singular). Ignore the intervening phrase "of the mangoes".' },
      { correct: 'Either he or his friends are responsible.', explanation: 'With or/nor: verb agrees with the nearer subject "friends" (plural).' },
      { incorrect: 'The committee have decided.', correct: 'The committee has decided.', explanation: 'Collective nouns (committee, jury, class) take singular verb.' },
      { correct: 'Mathematics is a difficult subject.', explanation: 'Subjects ending in -ics (mathematics, physics, economics) take singular verb.' },
    ],
    exercises: [
      { id: 'sva1', type: 'fill-blank', question: 'The news ___ (be) shocking today.', answer: 'is', explanation: '"News" appears plural but is singular — always takes singular verb.' },
      { id: 'sva2', type: 'choose-correct', question: 'Choose the correct verb: "Each of the boys ___ a prize."', options: ['get', 'gets', 'are getting', 'have gotten'], answer: 'gets', explanation: '"Each" is always singular and takes singular verb.' },
      { id: 'sva3', type: 'correct-sentence', question: 'Fix: "The list of items are on the table."', answer: 'The list of items is on the table.', explanation: 'Subject is "list" (singular). "of items" is an intervening phrase.' },
      { id: 'sva4', type: 'fill-blank', question: 'There ___ four books on the table.', answer: 'are', explanation: '"There" takes verb based on the following noun. "four books" is plural → "are".' },
      { id: 'sva5', type: 'choose-correct', question: '"Five kilometres ___ not a long distance." Choose correct verb:', options: ['are', 'is', 'were', 'have been'], answer: 'is', explanation: 'WANTAD rule — D = Distance. Use singular verb even though "Five kilometres" looks plural.' },
      { id: 'sva6', type: 'fill-blank', question: 'It ___ raining heavily. (dummy subject)', answer: 'is', explanation: '"It" as dummy subject always takes singular verb.' },
      { id: 'sva7', type: 'choose-correct', question: '"We/You/They/The students ___" — Choose correct verb form:', options: ['is', 'am', 'are', 'was'], answer: 'are', explanation: 'We/You/They/The students → "are". (from Subject-Verb agreement table)' },
    ],
  },

  // ─── NON-FINITE VERB ─────────────────────────────────────────────────────────
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

  // ─── PREPOSITIONS ────────────────────────────────────────────────────────────
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

  // ─── DIRECT & INDIRECT SPEECH ────────────────────────────────────────────────
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

  // ─── SPEAKING ────────────────────────────────────────────────────────────────
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
      { id: 'sp1', type: 'choose-correct', question: 'Which is more natural in spoken English?', options: ['I am not understanding this.', "I don't understand this.", 'I am not understand this.'], answer: "I don't understand this.", explanation: '"Understand" is a state verb — use simple present, not continuous.' },
      { id: 'sp2', type: 'fill-blank', question: 'Polite request: "___ you please help me?" (modal verb)', answer: 'Could', explanation: 'Could/Would you please... is the most polite request form.' },
      { id: 'sp3', type: 'choose-correct', question: 'Which phrase best replaces "I want to say that..." in formal speaking?', options: ['I would like to point out that...', 'I wanna say...', 'The thing is...', 'You know what...'], answer: 'I would like to point out that...', explanation: 'In formal speaking, "I would like to" is more polished and professional.' },
      { id: 'sp4', type: 'correct-sentence', question: 'Make more confident: "Maybe I think this idea could be perhaps good."', answer: '"I believe this is an excellent idea." or "This idea has great potential."', explanation: 'Eliminate hedging words (maybe, perhaps, could be). Use assertive language: I believe, I am confident. Strong speakers commit to their ideas.' },
    ],
  },
];
