
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
● Future Tense

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
  Wh-type: Wh word + do/does + sub + V₁...?
  Who type: +ve – Who + V₅ + obj...?

Uses:
  ★ Habitual activity       → I go to school everyday.
  ★ Universal / Scientific / Permanent truth → The sun rises in the east.
  ★ General facts           → Cows eat grass.
  ★ Scientific truth        → Water boils at 100°c.
  ★ Live commentaries       → Warner hits a six.
  ★ Indefinite adverbs      → Always, rarely, everyday, commonly, usually, seldoms, scarcely, hardly
  ★ A planned future action as per timetable.
  ★ Verbs of perception

━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. PRESENT PROGRESSIVE / CONTINUOUS
An action which is incomplete, begins before now and continuous at the present moment.
Structure:
  +ve: Sub + is/am/are + V₄ + obj
  -ve: Sub + is/am/are + not + V₄ + obj

Uses:
  ★ Progressive adverbs → today, now, at present, at the moment, tomorrow, now a days, this evening
    Example: What are you doing now?
  ★ An action going on at the time of speaking
  ★ With a future action → I am going to Puri tomorrow.
  ★ Action happening this time but not necessarily at time of speaking

━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. PRESENT PERFECT
Past action which has already completed.
Structure:
  +ve: Sub + has/have + V₃ + obj
  -ve: Sub + has/have + not + V₃ + obj

Uses:
  ★ Action completing recently → My father hasn't arrived yet.
  ★ Perfect adverbs → Just, already, Just now, Recently (positive); Yet, So far (negative)
  ★ Since = point of time | For = period of time
    Ex: We have lived here since 2000. / We have lived here for 10 years.

━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. PRESENT PERFECT PROGRESSIVE
Started in the past, continuing at present, likely to continue in future.
Structure: Sub + has/have + been + V₄ + obj
Uses:
  ★ Action began in past and still going → It has been raining since yesterday.
  ★ Action began in past and completed just now

━━━━━━━━━━━━━━━━━━━━━━━━━━━
PAST TENSES
━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. PAST SIMPLE / PAST INDEFINITE
Structure: +ve: Sub + V₂ | -ve: Sub + did + not + V₁
Uses: Completed past action, habitual past action, action continuing for some time in past.

6. PAST PROGRESSIVE / CONTINUOUS
Structure: Sub + was/were + V₄
Uses: Action in progress in past, two actions going on simultaneously.

7. PAST PERFECT
Structure: Sub + had + V₃
Uses: Earlier of two past actions, unfulfilled desires, impossible conditions.

8. PAST PERFECT PROGRESSIVE
Structure: Sub + had + been + V₄
Uses: Action going on for some time before another past action.

━━━━━━━━━━━━━━━━━━━━━━━━━━━
FUTURE TENSES
━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. SIMPLE FUTURE
Structure: Sub + will/shall + V₁
Uses: Future actions, conditional clauses.

10. FUTURE CONTINUOUS
Structure: Sub + will + be + V₄
Uses: Action in progress at a future moment.

11. FUTURE PERFECT
Structure: Sub + will + have + V₃
Uses: Complete by a certain future time.

12. FUTURE PERFECT PROGRESSIVE
Structure: Sub + will + have + been + V₄
Uses: Continuing beyond a given future point.`,
    rules: [
      'Simple Present: Sub + V(s/es) | Use: habitual, universal truth',
      'Present Continuous: Sub + is/am/are + V-ing | Use: action in progress now',
      'Present Perfect: Sub + has/have + V3 | Use: just, already, since, for',
      'Present Perfect Continuous: has/have + been + V-ing | Use: still going on',
      'Past Simple: Sub + V2 | Use: completed past action',
      'Past Continuous: Sub + was/were + V-ing | Use: ongoing past action',
      'Past Perfect: Sub + had + V3 | Use: earlier of two past actions',
      'Past Perfect Continuous: had + been + V-ing',
      'Simple Future: Sub + will/shall + V1',
      'Future Continuous: will + be + V-ing',
      'Future Perfect: will + have + V3',
      'Future Perfect Continuous: will + have + been + V-ing',
    ],
    examples: [
      { correct: 'He goes to market every morning. (Simple Present)', explanation: 'Habitual activity — Sub + V(s).' },
      { correct: 'I am learning English today. (Present Continuous)', explanation: 'Progressive adverb "today" — is/am/are + V-ing.' },
      { correct: 'I have already eaten my supper. (Present Perfect)', explanation: 'Perfect adverb "already" — has/have + V3.' },
      { correct: 'It has been raining since yesterday. (Present Perfect Continuous)', explanation: 'has/have + been + V-ing + since (point of time).' },
      { correct: 'She was sleeping when the phone rang. (Past Continuous)', explanation: 'Ongoing action interrupted by another.' },
      { correct: 'The train will have left before you reach. (Future Perfect)', explanation: 'will + have + V3: complete by a future time.' },
      { incorrect: 'I am knowing the answer.', correct: 'I know the answer.', explanation: 'State verbs do not use continuous tenses.' },
    ],
    exercises: [
      { id: 't1', type: 'fill-blank', question: 'She ___ (study) for three hours yesterday.', answer: 'studied', explanation: 'Simple Past (V2): completed action.' },
      { id: 't2', type: 'choose-correct', question: 'Which is correct?', options: ['I am knowing him since school', 'I have known him since school', 'I knew him since school'], answer: 'I have known him since school', explanation: 'Present Perfect with "since" for states lasting until now.' },
      { id: 't3', type: 'correct-sentence', question: 'Fix: "By tomorrow, I will finished the report."', answer: 'By tomorrow, I will have finished the report.', explanation: 'Future Perfect: will have + V3.' },
      { id: 't4', type: 'fill-blank', question: 'They ___ (play) cricket when it started raining.', answer: 'were playing', explanation: 'Past Continuous: was/were + V-ing.' },
      { id: 't5', type: 'choose-correct', question: 'I ___ here for five years. (Choose correct tense)', options: ['am working', 'have been working', 'worked', 'was working'], answer: 'have been working', explanation: 'Present Perfect Continuous with "for".' },
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
      { correct: 'She runs quickly but he runs slowly.', explanation: 'quickly, slowly = adverbs. but = conjunction.' },
    ],
    exercises: [
      { id: 'pos1', type: 'choose-correct', question: 'What part of speech is "beautiful" in "a beautiful sunset"?', options: ['Noun', 'Adverb', 'Adjective', 'Verb'], answer: 'Adjective', explanation: 'Beautiful describes the noun "sunset".' },
      { id: 'pos2', type: 'choose-correct', question: 'Identify the conjunction: "I wanted to come, but I was busy."', options: ['I', 'wanted', 'but', 'busy'], answer: 'but', explanation: '"but" is a coordinating conjunction joining two clauses.' },
      { id: 'pos3', type: 'fill-blank', question: 'The word "happiness" is a ___. (part of speech)', answer: 'Noun', explanation: 'Happiness is an abstract noun.' },
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
    ],
    exercises: [
      { id: 'v1', type: 'correct-sentence', question: 'Change to passive: "She wrote a letter."', answer: 'A letter was written by her.', explanation: 'Simple past passive: Object + was/were + V3 + by + Subject.' },
      { id: 'v2', type: 'fill-blank', question: 'The cake ___ (eat) by the children. [Simple Past Passive]', answer: 'was eaten', explanation: 'Past passive: was/were + past participle.' },
      { id: 'v3', type: 'choose-correct', question: 'Which is correct passive of "She has completed the project"?', options: ['The project has been completed by her.', 'The project was completed by her.', 'The project is completed by her.', 'The project had been completed by her.'], answer: 'The project has been completed by her.', explanation: 'Present Perfect Passive = has/have + been + V3.' },
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

TYPES: Simple, Compound, Complex

━━━━━━━━━━━━━━━━━━━
SIMPLE SENTENCE
━━━━━━━━━━━━━━━━━━━
Which sentence has a subject and a finite verb in the predicate part is called simple sentence.

5 types:
1. DECLARATIVE – declares/states; begins with capital; ends with (.)
   +ve: Sub + Verb + Obj | -ve: Sub + hv + not + mv + obj

2. INTERROGATIVE – asks for answer; two types:
   (i) Wh-type: starts with Wh words (What, Who, When, Where, Whose, Which, Why, How); ends with (?)
       Structure: +ve – Wh word + hv + sub + mv...?
   (ii) Yes-no type: starts with helping verb; answer = only yes or no
       Structure: +ve – Hv + sub + mv + obj...?

3. IMPERATIVE – order/command/request/warn/suggestion
   → Hidden subject 'you' (pseudo subject)
   Structure: V₁ + obj | Let's + V₁ + obj
   Ex: Turn left. May I help you.

4. EXCLAMATORY – strong feelings/emotion; starts with 'what' or 'how'; ends with (!)
   Structure using 'what': What + a/an + adj + noun + sub + verb + !
   Structure using 'how': How + adj + sub + verb + !

5. OPTATIVE – expresses wish or prayer
   Ex: May God bless you!

━━━━━━━━━━━━━━━━━━━
COMPOUND SENTENCE
━━━━━━━━━━━━━━━━━━━
Two or more independent clauses joined by coordinating conjunctions.

Co-ordinating conjunctions (BAFITOSBYS):
  B–but, A–and, F–for, I–therefore, T–therefore, O–or, S–so, B–beside, O–otherwise, Y–yet, S–since

Correlative conjunctions:
  Either...or | Neither...nor | Not only...but also | Both...and

━━━━━━━━━━━━━━━━━━━
COMPLEX SENTENCE
━━━━━━━━━━━━━━━━━━━
One independent + one or more dependent/subordinate clause.
Three types of subordinate clause:
  i) Noun clause  ii) Adverb clause  iii) Relative (Adjective) clause`,
    rules: [
      'Every sentence must have a subject and a finite verb',
      'Declarative: makes a statement; ends with (.)',
      'Interrogative: two types — Wh-type and Yes-no type; ends with (?)',
      'Imperative: command/request; hidden subject "you"; V₁ + obj',
      'Exclamatory: starts with "what" or "how"; ends with (!)',
      'Compound: two independent clauses + coordinating conjunction',
      'Correlative: Either...or, Neither...nor, Not only...but also, Both...and',
      'Complex: one independent + one dependent clause',
    ],
    examples: [
      { correct: 'What a beautiful picture it is! (Exclamatory using "what")', explanation: 'What + a/an + adj + noun + sub + verb + !' },
      { correct: 'How tall the tree is! (Exclamatory using "how")', explanation: 'How + adj + sub + verb + !' },
      { correct: 'She studied hard, but she failed the test. (Compound)', explanation: 'Two independent clauses joined by "but".' },
      { correct: 'Although it was raining, they went for a walk. (Complex)', explanation: '"Although it was raining" = dependent clause.' },
    ],
    exercises: [
      { id: 'sen1', type: 'choose-correct', question: 'Which is a compound sentence?', options: ['She runs fast.', 'She runs fast and she wins races.', 'Because she runs fast, she wins.', 'Running fast is her skill.'], answer: 'She runs fast and she wins races.', explanation: 'Two independent clauses joined by "and".' },
      { id: 'sen2', type: 'choose-correct', question: 'What type: "What a beautiful day!"', options: ['Declarative', 'Interrogative', 'Imperative', 'Exclamatory'], answer: 'Exclamatory', explanation: 'Begins with "What" + ends with (!).' },
      { id: 'sen3', type: 'choose-correct', question: 'Identify: "When do you get up?"', options: ['Yes-no type Interrogative', 'Wh-type Interrogative', 'Imperative', 'Exclamatory'], answer: 'Wh-type Interrogative', explanation: 'Starts with "When" (Wh word).' },
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

Subject – which sentence tells about whom, or who does the work in the sentence.
Verb – which word shows an action, state or position.

SUBJECT → VERB TABLE:
  I                                → am
  We / You / They / The students   → are
  He / She / It / Gopal / Ram      → is
  The teacher and the students     → are
  The cow                          → eats
  Cows, goats and sheep            → eat

━━━━━━━━━━━━━━━━━━━━━━━━━━━
RULES (from notes, 1–16)
━━━━━━━━━━━━━━━━━━━━━━━━━━━

RULE 1a: 'There' as introductory subject
  If noun is singular → singular verb | If noun is plural → plural verb
  Ex: There is/was a book on the table.
      There are/were four books on the table.

RULE 1b: 'It' as dummy subject → always singular verb
  Ex: It is/was ten past twelve. | It is raining heavily.

RULE 2 — WANTAD Rule:
We use singular verb after some plural numbers — WANTAD:
  W – Weight  A – Amount of money  N – Number  T – Time  A – Age  D – Distance
  Ex: Sixty years is a long time. (T)
      Two kilos of tea costs six hundred rupees. (A)
      Fifty kilometres is not a long distance. (D)
      Five rupees is not a big sum. (A)

RULE 3a: Two nouns joined by 'and' doing the same work (same thing) → singular verb after second subject noun.
  Ex: Bread and butter is my favourite food.
      Truth and honesty is the best policy.
      Curry and rice was his favourite food.

RULE 3b: Two subs (singular or plural) joined by 'and', total sub becomes plural → plural verb after second sub.
  Ex: Gopal and his sister have come.
      Two boys and three girls have written their essay.

RULE 4a: Collective noun showing singular opinion → singular verb; plural opinion → plural verb.
  Ex: The jury was divided in their opinions. (as members — plural)
      The jury has selected its chairman. (as one body — singular)

RULE 4b: Some collective nouns like police, people, poultry, cattle etc. usually take plural verbs.
  Ex: The police have not made any arrests.
      The people of India are concerned about their spiritual welfare.
      The poultry have been fed.
      The cattle are grazing in the field.

RULE 5: Some uncountable nouns like furniture, clothing, food, cutlery, stationary, crockery, jewellery, scenery usually take singular verbs.
  Ex: His clothing is very attractive.
      Food is necessary for living.

RULE 6: If a relative pronoun is after a clause in the sentence, we use the verb as per the noun or sub which is before the relative pronoun.
  Ex: All the books which have been placed on that table are (there).
      The radio which you gave my children works perfectly.

RULE 7a: When a sub begins with 'either of', 'neither of' or 'none of', the verb is usually singular because the above words followed by a plural noun or pronoun.
  Ex: Either of the boys has got a prize.
      Neither of them has come.
      None of the students has arrived yet.

RULE 7b: 'Each of', 'One of' etc. usually take singular verbs.
  Ex: Each of the students was given a prize.
      One of the girls was able to answer the question completely.

RULE 7c: If a sentence begins with 'no' or 'some' and a noun is after it, we use the singular or plural verb as per the noun.
  No/Some + singular noun (uncountable) → singular
  No/Some + plural noun → plural
  Ex: No child has done his homework. | No children have done their homework.
      Some water is left in the pot. | Some girls have gone on a picnic.

RULE 8d: If two determiners carry each one noun and joined by 'and' → plural verb.
  If two nouns joined with 'and', one noun has a determiner and the other is not → singular verb.
  Ex: The Vice-President of India and Chairman of Rajya Sabha has given the consent to the bill. (same person)
      The Vice-President of India and the Chancellor of the University were invited to the convocation. (two people)

RULE 8 — Fraction Rule: If a sentence begins with fraction, we use the verb as per the noun after the fraction.
  Ex: Two-thirds of the acid has evaporated. (uncountable → singular)
      Two-thirds of the apples are rotten. (plural → plural)

RULE 9a: When a sentence begins with 'a good deal of', 'a great deal of', 'a lot of', 'plenty of', 'most of', 'some of' etc., the verb agrees as per noun.
  Ex: A lot of people were present at the meeting.
      A lot of money was spent on buying clothes.
      Some of the students were intelligent.
      Some of the music was excellent.

RULE 9b: If a sub begins with 'a congregation of', 'a crowd of', 'a flock of', 'a group of', 'a herd of', 'a regiment of', always use singular verb after 'of'.
  Ex: A crowd of people was shouting slogans.
      A herd of elephants was seen in the jungle.
      A group of smugglers was arrested yesterday.

RULE 10 — 'A number of' vs 'The number of':
  ★ 'A number of' + plural noun → plural verb.
  ★ 'The number of' + plural noun → singular verb.
  Ex: A number of children are suffering from cold.
      The number of sick children is increasing.

RULE 10b: Uncountable nouns like Statistics, Mathematics, Physics, Economics, News, Measles, Mumps, Advice, Information, Jewellery, Scenery etc. always take singular verbs.
  Ex: Physics is my favourite subject.
      Measles is an infectious disease.
      The news was bad.
      No information is available now.

RULE 11: If the sub of a sentence is a clause, the verb is singular.
  Ex: That she is alive is good news.
      What he does these days does not concern me.

RULE 12a: If the two subjects joined with 'with', 'as well as', 'in addition to', 'together with', we use the verb as per the first subject.
  Ex: The teacher with all her students has come.
      Rabi as well as his friends is responsible.
      Population growth in addition to many other issues has affected India's growth.
      This new fact together with the other pieces of evidence proves the prisoner's innocence.

RULE 12b: If the two subjects connected by 'not only but also', 'either...or', 'neither...nor', the verb agrees as per the second subject.
  Ex: Not only the boy but also his friends are equally guilty.
      The boy or his friends have to repair the broken window.
      Neither the old man nor his sons are prepared to sell their old house.
      Either you or he has created this problem.

RULE 13: Some nouns made up of two similar parts in a pair like scissors, trousers, spectacles etc. always take plural verbs.
  ★ If 'the pair of' is used before those nouns, the verb agrees singular.
  Ex: The scissors are old.
      My trousers have been cleaned.
      A pair of shoes was lying in the corner.

RULE 14: When an adjective is used as a noun, it takes a plural verb.
  Ex: The rich have a lot of responsibility towards the poor.
      The blind need escorts to cross a road.

RULE 15: When the plural noun is a proper name or some collective unit, we use the singular verb.
  Ex: Gulliver's Travels was written by Jonathan Swift.
      The United States is a powerful country.

RULE 16: If a relative pronoun is in a sentence, the verb agrees as per the noun or pronoun before the relative pronoun.
  Ex: It is you who have wronged me.
      It is he who has torn my book.`,
    rules: [
      'WANTAD Rule: Weight, Amount, Number, Time, Age, Distance → singular verb',
      '"There" as introductory subject: verb depends on noun that follows',
      '"It" as dummy subject: always takes singular verb',
      'Two nouns with "and" doing same work → singular verb (bread and butter)',
      'Two distinct subs with "and" → plural verb (Gopal and his sister)',
      'police, people, poultry, cattle → always plural verbs',
      'furniture, clothing, food, jewellery, scenery → always singular verbs',
      '"Either of / Neither of / None of" + plural noun → singular verb',
      '"Each of / One of" → singular verb',
      '"A number of" → plural verb | "The number of" → singular verb',
      'Mathematics, Physics, News, Measles → always singular verb',
      'With / as well as / in addition to / together with → verb agrees with FIRST subject',
      'Not only but also / Either...or / Neither...nor → verb agrees with SECOND subject',
      'Scissors, trousers, spectacles → plural verb; "a pair of" + same nouns → singular verb',
      'Adjective used as noun (the rich, the blind) → plural verb',
      'Proper name as plural (Gulliver\'s Travels) → singular verb',
    ],
    examples: [
      { correct: 'Bread and butter is my favourite food. (Rule 3a)', explanation: 'Two nouns joined by "and" referring to same food item → singular verb.' },
      { correct: 'Gopal and his sister have come. (Rule 3b)', explanation: 'Two distinct people joined by "and" → plural verb.' },
      { correct: 'Either of the boys has got a prize. (Rule 7a)', explanation: '"Either of" + plural noun → singular verb.' },
      { correct: 'A lot of people were present. / A lot of money was spent. (Rule 9a)', explanation: 'Verb agrees with the noun after "of" — people (plural)/money (uncountable→singular).' },
      { correct: 'A crowd of people was shouting slogans. (Rule 9b)', explanation: '"A crowd of" → always singular verb after "of".' },
      { correct: 'The teacher with all her students has come. (Rule 12a)', explanation: '"With" → verb agrees with first subject "teacher" (singular).' },
      { correct: 'Not only the boy but also his friends are guilty. (Rule 12b)', explanation: '"Not only...but also" → verb agrees with second subject "friends" (plural).' },
      { correct: 'The scissors are old. / A pair of scissors was on the table.', explanation: 'Scissors (alone) → plural verb. "A pair of scissors" → singular verb.' },
      { correct: 'The rich have a lot of responsibility. (Rule 14)', explanation: 'Adjective "rich" used as noun → plural verb.' },
      { correct: 'Gulliver\'s Travels was written by Jonathan Swift. (Rule 15)', explanation: 'Plural-looking proper title → singular verb.' },
    ],
    exercises: [
      { id: 'sva1', type: 'fill-blank', question: 'The news ___ (be) shocking today.', answer: 'is', explanation: '"News" is always singular.' },
      { id: 'sva2', type: 'choose-correct', question: '"Each of the boys ___ a prize."', options: ['get', 'gets', 'are getting', 'have gotten'], answer: 'gets', explanation: '"Each of" → always singular verb.' },
      { id: 'sva3', type: 'correct-sentence', question: 'Fix: "The list of items are on the table."', answer: 'The list of items is on the table.', explanation: 'Subject is "list" (singular).' },
      { id: 'sva4', type: 'fill-blank', question: 'There ___ four books on the table.', answer: 'are', explanation: '"There" → verb based on following noun "four books" (plural).' },
      { id: 'sva5', type: 'choose-correct', question: '"Five kilometres ___ not a long distance."', options: ['are', 'is', 'were', 'have been'], answer: 'is', explanation: 'WANTAD — D = Distance → singular verb.' },
      { id: 'sva6', type: 'choose-correct', question: '"The teacher with all her students ___ come."', options: ['have', 'has', 'are', 'were'], answer: 'has', explanation: 'Rule 12a: "with" → verb agrees with first subject "teacher" (singular).' },
      { id: 'sva7', type: 'choose-correct', question: '"Neither the old man nor his sons ___ prepared to sell."', options: ['is', 'are', 'was', 'has'], answer: 'are', explanation: 'Rule 12b: "neither...nor" → verb agrees with second subject "sons" (plural).' },
      { id: 'sva8', type: 'fill-blank', question: '"A number of children ___ suffering from cold."', answer: 'are', explanation: '"A number of" + plural noun → plural verb.' },
      { id: 'sva9', type: 'fill-blank', question: '"The number of sick children ___ increasing."', answer: 'is', explanation: '"The number of" → singular verb.' },
      { id: 'sva10', type: 'choose-correct', question: '"The scissors ___ old." — Choose correct verb:', options: ['is', 'are', 'was', 'has'], answer: 'are', explanation: 'Rule 13: Scissors (without "a pair of") → plural verb.' },
    ],
  },

  // ─── NON-FINITE VERB ─────────────────────────────────────────────────────────
  {
    id: 'non-finite-verb',
    title: 'Non-Finite Verbs',
    icon: '🔠',
    color: '#0EA5E9',
    category: 'grammar',
    theory: `VERB (Doing words)
        ├── Finite Verb
        └── Non-Finite Verb

━━━━━━━━━━━━━━━━━━━━━━
FINITE VERB
━━━━━━━━━━━━━━━━━━━━━━
Which verb carries tense, OR which verb can be changed as per tense, person and number is called Finite Verb.

Example:
  i) I teach English.       ii) He teaches English.
  iii) They teach English.  iv) I bought English.
  v) I want to write a grammar book.  (want = FV)
  vi) He wants to write a grammar book. (wants = FV)
  vii) I am calling.

━━━━━━━━━━━━━━━━━━━━━━
NON-FINITE VERB
━━━━━━━━━━━━━━━━━━━━━━
Which verb doesn't carry tense, OR which verb can't be changed as per tense, person and number is called Non-Finite Verb.

Example:
  i) I want to write a grammar book.
  ii) The book may have been written.
  iii) She could have been laughing at us.
  iv) They made Seema write the letter.

━━━━━━━━━━━━━━━━━━━━━━
KEY POINTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━
★ If a sentence has only one verb, that verb is the finite verb.
★ Sentence can't be formed without finite verb.
★ If a simple sentence has more than one verb, the first verb is finite verb.
  Example:
    i) My brother goes to school every working day. (goes = FV)
    ii) Sanju has been waiting there for half an hour. (has = FV, waiting = NFV)

━━━━━━━━━━━━━━━━━━━━━━
FUNCTIONS OF NON-FINITE VERB
━━━━━━━━━━━━━━━━━━━━━━
a) As subject    b) As object    c) As complement    d) As adjunct

a) As subject — NFV + Finite verb of the sentence
   "To err is human." (NFV/as sub)

b) As object — Sub + Transitive Finite verb + non finite verb part
   "I expect to solve this problem by tomorrow."
   S    tfv        nfv

c) As complement — Sub + be verb/have verb + NFV part
   "I am to be in Paris."
   Sub  beverb   complement

d) As adjunct — It is used as the extra part of the sentence.
   If adjunct is omitted, the sentence can't be changed.
   "The Shikari killed the tiger to save the things." (NFV/adjunct)

━━━━━━━━━━━━━━━━━━━━━━
FOUR FORMS OF NON-FINITE VERB
━━━━━━━━━━━━━━━━━━━━━━
a) To infinitive    — (to + V₁)
b) Bare infinitive  — (Ø + V₁)
c) Past participle  — (V₃ form)
d) Present participle — (ing form)

Example:
  Kamlesh wants to play the piano.       (To infinitive)
  Kamlesh made me cry.                   (Bare infinitive)
  Kamlesh went on crying in his childhood. (Present participle)
  I got my shoes mended.                  (Past participle)

━━━━━━━━━━━━━━━━━━━━━━
FOLLOWING VERBS USE 'ING' WITH NFV
━━━━━━━━━━━━━━━━━━━━━━
Finite verb + Non-finite verb (gerund):
Avoid, Delay, Deny, Accept, Suggest, Mind, Stop, Like, Love, Hate, Prefer, Force, Enjoy etc.
  Ex: I enjoy writing the essay.

━━━━━━━━━━━━━━━━━━━━━━
WHERE TO USE BARE INFINITIVE
━━━━━━━━━━━━━━━━━━━━━━
Finite verb: See, Hear, Watch, Let, Make, Help, Notice, Had better, Would rather etc.
  Ex: I saw him cross the road.`,
    rules: [
      'Finite verb: changes with tense, person, number',
      'Non-finite verb: does NOT change — remains same for all subjects/tenses',
      'Every sentence MUST have at least one finite verb',
      'If one verb in sentence → it is finite verb',
      'If more than one verb → first verb is finite, rest may be non-finite',
      'To infinitive = to + V1 (function: subject, object, complement, adjunct)',
      'Bare infinitive = V1 without "to" (after: See, Hear, Let, Make, Watch, Help...)',
      'Present participle = V+ing as adjective or NFV',
      'Past participle = V3 as adjective or NFV',
      'Gerund (V+ing as noun): after Avoid, Enjoy, Suggest, Mind, Stop, Like, Love, Hate, Prefer',
    ],
    examples: [
      { correct: 'To err is human. (NFV as subject)', explanation: '"To err" = NFV (to infinitive) acting as subject of the sentence.' },
      { correct: 'I expect to solve this problem. (NFV as object)', explanation: '"to solve" = NFV (to infinitive) acting as object after transitive verb "expect".' },
      { correct: 'I am to be in Paris. (NFV as complement)', explanation: '"to be" = NFV acting as complement after be-verb.' },
      { correct: 'The Shikari killed the tiger to save the things. (NFV as adjunct)', explanation: '"to save" = NFV as adjunct (extra information, can be removed).' },
      { correct: 'Kamlesh made me cry. (Bare infinitive)', explanation: '"cry" = bare infinitive (no "to") after "made" (causative verb).' },
      { correct: 'I got my shoes mended. (Past participle NFV)', explanation: '"mended" = V3 (past participle) as NFV.' },
      { correct: 'I enjoy writing the essay. (Gerund)', explanation: '"writing" = V+ing used as NFV after "enjoy". Avoid/Enjoy/Like/Hate etc. → V+ing.' },
      { correct: 'I saw him cross the road. (Bare infinitive)', explanation: '"cross" = bare infinitive after perceptive verb "saw".' },
    ],
    exercises: [
      { id: 'nfv1', type: 'choose-correct', question: 'Which is the finite verb in: "I want to write a book."?', options: ['want', 'to write', 'write', 'book'], answer: 'want', explanation: '"want" carries tense and changes with subject. It is the finite verb.' },
      { id: 'nfv2', type: 'choose-correct', question: 'Identify the function of NFV: "To err is human."', options: ['Object', 'Subject', 'Complement', 'Adjunct'], answer: 'Subject', explanation: '"To err" is the non-finite verb acting as the subject of the sentence.' },
      { id: 'nfv3', type: 'fill-blank', question: 'I enjoy ___ (read) novels. [NFV form]', answer: 'reading', explanation: '"Enjoy" belongs to the gerund group (Avoid, Enjoy, Suggest...) → V+ing.' },
      { id: 'nfv4', type: 'choose-correct', question: 'Which verb requires Bare Infinitive?', options: ['want', 'avoid', 'let', 'suggest'], answer: 'let', explanation: '"Let" is a perceptive/causative verb. Uses bare infinitive: "Let him go."' },
      { id: 'nfv5', type: 'choose-correct', question: '"I got my shoes mended." The NFV form is:', options: ['To infinitive', 'Bare infinitive', 'Present participle', 'Past participle'], answer: 'Past participle', explanation: '"mended" is V3 (past participle) used as a non-finite verb.' },
      { id: 'nfv6', type: 'choose-correct', question: 'Identify NFV function in: "She went there to meet him."', options: ['Subject', 'Object', 'Complement', 'Adjunct'], answer: 'Adjunct', explanation: '"to meet him" is extra information (adjunct). Removing it does not destroy the core meaning.' },
    ],
  },

  // ─── PREPOSITIONS ────────────────────────────────────────────────────────────
  {
    id: 'preposition',
    title: 'Prepositions',
    icon: '📍',
    color: '#14B8A6',
    category: 'grammar',
    theory: `What is a Preposition?
"Pre" means 'before' and 'position' means 'place'. That means which parts of speech show the place or is used before the place.
"Place" indicates noun or pronoun.

It relates between two things. One noun or pronoun to another noun or pronoun or it can be adjective or adverb extra. So it is called "relating word" also.

Preposition is a word like at, in, of, about, etc. which establishes a relationship between words in a sentence.
However, without the preposition the sentence becomes meaningless. That is why the use of appropriate preposition is so important.
Example: The train is 9 o'clock. ✗ | The train is at 9 o'clock. ✓

━━━━━━━━━━━━━━━━━━━━━━
KINDS OF PREPOSITIONS
━━━━━━━━━━━━━━━━━━━━━━
i)   Simple Preposition   — (at, to, on, by, for, of, with etc.)
ii)  Compound Preposition — (about, within, untill, into etc.)
iii) Participial Preposition — (during)
iv)  Phrasal Preposition   — (along with, on, be, half of etc.)
v)   Double Preposition    — (from under, from be)

━━━━━━━━━━━━━━━━━━━━━━
USES OF PREPOSITIONS (from notes)
━━━━━━━━━━━━━━━━━━━━━━

AT (↑)
  a) To show definite time → I get up at 5:30 am.
  b) To show definite location → Now I am at your home.
  c) Use before the name of a city → My uncle lives at GTC.
  d) Use before the name of a village → Ankita lives at Ranapa.
  e) Use before the name of a colony → Actually I am living at New LIG colony.
  f) Use before dawn, dusk, noon, night etc. → Generally people go to temple at dawn.
  g) To show the price of a thing or foods → Potato sells at 20 rupees per kg.

IN
  a) To indicate definite place → The bank manager is in the cabin.
  b) Use before the name of a state → We are living in Odisha.
  c) Use before the name of a big city → My brother's dream is to study in USA.
  d) Use before the name of a country → Taj Mahal is in India.
  e) To show financial condition → I do not live to poverty.
  f) To show the month and year → Neha was born in January.
  g) Use before morning, evening and afternoon → Everyone should get up early in the morning.
  h) To show duration of an action → I finish my breakfast in ten minutes.

TO
  a) Used before destination → I go to school everyday.
  b) To tell the time → It is fifteen minutes to six.
  c) Used before a infinitive verb → I want to go home.

ABOVE
  a) To show upper position → Keep your head above water.

OVER
  a) To show a much higher position → The sky is over our head.

BETWEEN
  a) Use with two persons → Please distribute the sweets between the two children.
  b) Showing two pronouns → There is no secret between you and me.
  c) Showing two things/items/good → There is no similarity between your book and my book.
  d) Showing the intervening places → There is a distance of 20 km between GTC to BBSR.

AMONG
  a) Use between more than two places → There is no difference of culture among GTC, BBSR and Puri.
  b) Use between more than two persons → Distribute the sweet among these children.

BY
  a) Shows person as agent → Tea has been taken by the guest.
  b) Use to refer according to → What is the time by your watch?
  c) To show lastly most of time → You have to finish this work by 6 o'clock.
  d) To show the way of an action → She caught you by collar.
  e) To show means of an action → We should go to Puri by train.
  f) To show measuring instruments → Apples are sold by the kg.

WITH
  a) Showing harmful instrument → Why did you stab your friend with a knife?
  b) To show the companion/same action → Now he is playing cricket with his friends.

TILL
  a) To show time limit → I shall wait for you till sunset.

UNDER
  a) To show a lower position in place → A cat is sleeping under the table.

BELOW
  a) To show a lower rank in service → A clerk is always below an accountant.

BESIDE
  a) Use to refer by the side of → The baby has slept beside its mother.

BESIDES
  a) Use to refer in addition to being punished → She knows 400 words besides numerous proper nouns.

OF
  a) To show relationship → She is a daughter of a rich man.

OFF
  a) Used to disconnect function → Switch off the light.
  b) To show separation from upwards to downwards → She fell off the tree.

FROM
  a) To show the starting point → She has come direct from home.
  b) To show time → I shall start conversation from tomorrow.
  c) To show the source → This is the quotation from...

SINCE
  a) To show reason → I cannot take exercise since 9 am.
  b) To show the point of time → I have been reading since morning.

FOR
  a) To show an indefinite period of time → She has been reading for five hours.
  b) To show exact period of time → Lend me your book for a day.

TOWARDS
  a) To show direction → She went towards the post office.

INTO (Double Preposition)
  a) To show movement towards a place → She went into the kitchen.
  b) To change the form → Transfer the passage into English.

UPON (Double Preposition)
  a) To show movement to a higher position → The cat pounced upon a rat.

WITHIN (Compound Preposition)
  a) To show the position of time between the specified limit → He will return within a week.
  b) To show the boundary or boundlessness of a place → She was holding it within her.`,
    rules: [
      'AT: specific time/city/village/colony/dawn/dusk/price',
      'IN: state/big city/country/month/year/morning-evening-afternoon/duration',
      'ON: surface/specific day/date',
      'TO: destination/time (minutes TO hour)/before infinitive verb',
      'BY: agent/deadline/means of transport/measuring instrument',
      'WITH: instrument/companion',
      'BETWEEN: exactly two people/things | AMONG: three or more',
      'ABOVE: upper position | OVER: much higher position',
      'UNDER: lower position in place | BELOW: lower rank in service',
      'BESIDE: by the side of | BESIDES: in addition to',
      'SINCE: point of time (since 1990, since morning) | FOR: period of time (for 5 years)',
      'INTO: movement into a place | UPON: movement to higher position',
      'Preposition + V+ing (gerund): She is good at singing (NOT at sing)',
    ],
    examples: [
      { correct: 'I get up at 5:30 am. / She was born in January. / Come on Monday.', explanation: 'at = specific time; in = month/year/period; on = day.' },
      { correct: 'The train is at 9 o\'clock. (NOT "is 9 o\'clock")', explanation: 'Without preposition sentence becomes meaningless.' },
      { correct: 'Please distribute sweets between the two children.', explanation: '"between" for exactly TWO people.' },
      { correct: 'Distribute the sweet among these children.', explanation: '"among" for THREE or more people.' },
      { correct: 'Tea has been taken by the guest. (BY = agent in passive)', explanation: 'BY shows the agent/doer in passive sentences.' },
      { correct: 'She has been reading for five hours. / I have been reading since morning.', explanation: 'FOR = period of time. SINCE = point of time.' },
      { incorrect: 'He is good at sing.', correct: 'He is good at singing.', explanation: 'After a preposition, use gerund (V+ing), not base verb.' },
    ],
    exercises: [
      { id: 'prep1', type: 'fill-blank', question: 'She is interested ___ learning English.', answer: 'in', explanation: '"Interested in" = fixed phrase. Use V+ing after preposition.' },
      { id: 'prep2', type: 'choose-correct', question: 'He was born ___ 1998.', options: ['at', 'on', 'in', 'by'], answer: 'in', explanation: 'Use "in" with years.' },
      { id: 'prep3', type: 'correct-sentence', question: 'Fix: "The prize was distributed between all students."', answer: 'The prize was distributed among all students.', explanation: '"among" = three or more people.' },
      { id: 'prep4', type: 'choose-correct', question: '"The baby has slept ___ its mother." Which preposition?', options: ['beside', 'besides', 'between', 'among'], answer: 'beside', explanation: '"Beside" = by the side of. "Besides" = in addition to.' },
      { id: 'prep5', type: 'fill-blank', question: 'I have been reading ___ morning.', answer: 'since', explanation: '"Since" = point of time (morning, 1990, Monday). "For" = period (for 2 hours).' },
      { id: 'prep6', type: 'choose-correct', question: '"She went ___ the kitchen." (movement into a place)', options: ['in', 'into', 'to', 'inside'], answer: 'into', explanation: '"Into" = movement towards and inside a place.' },
      { id: 'prep7', type: 'choose-correct', question: '"A clerk is always ___ an accountant." (rank)', options: ['under', 'below', 'beneath', 'beside'], answer: 'below', explanation: '"Below" shows lower rank in service. "Under" shows lower position in place.' },
    ],
  },

  // ─── DIRECT & INDIRECT SPEECH ────────────────────────────────────────────────
  {
    id: 'direct-indirect-speech',
    title: 'Direct & Indirect Speech',
    icon: '💬',
    color: '#8B5CF6',
    category: 'grammar',
    theory: 'DIRECT SPEECH: exact words in quotation marks.\n"She said, \'I am happy.\'"\n\nINDIRECT SPEECH: reported without quotation marks, tense/pronoun/time changes.\nShe said that she was happy.\n\nTense Changes (Backshift):\n• am/is/are → was/were\n• will → would\n• can → could\n• has/have → had\n• Simple Present → Simple Past\n• Simple Past → Past Perfect\n\nTime Changes:\n• now → then | today → that day | tomorrow → the next day | yesterday → the previous day | here → there',
    rules: [
      'Remove quotation marks in indirect speech',
      'Change present tenses to past (backshift rule)',
      'Change pronouns: I→he/she, we→they, my→his/her',
      'Change time/place expressions: now→then, today→that day, here→there',
      'Yes/No questions → if/whether: "Are you ready?" → He asked if I was ready.',
      'Commands → told/asked + to infinitive: "Sit down" → He told me to sit down.',
    ],
    examples: [
      { correct: 'Direct: He said, "I am tired."\nIndirect: He said that he was tired.', explanation: 'am → was (backshift). I → he (pronoun).' },
      { correct: 'Direct: "Do you play cricket?" → He asked me if I played cricket.', explanation: 'Yes/No question: asked + if/whether. play → played.' },
      { correct: 'Direct: "Open your books." → The teacher told us to open our books.', explanation: 'Command: told + object + to + V1.' },
    ],
    exercises: [
      { id: 'dis1', type: 'correct-sentence', question: 'Change to indirect: She said, "I love music."', answer: 'She said that she loved music.', explanation: 'love → loved (backshift). I → she.' },
      { id: 'dis2', type: 'choose-correct', question: 'Change: "He said, \\"I can swim.\\""', options: ['He said that he can swim.', 'He said that he could swim.', 'He told that he could swim.', 'He said that I could swim.'], answer: 'He said that he could swim.', explanation: 'can → could (backshift). I → he.' },
    ],
  },

  // ─── VOCABULARY ──────────────────────────────────────────────────────────────
  {
    id: 'vocabulary',
    title: 'Vocabulary Building',
    icon: '📖',
    color: '#10B981',
    category: 'vocabulary',
    theory: 'A strong vocabulary improves reading, writing, speaking and comprehension.\n\nKey strategies:\n1. Learn word roots (Latin/Greek)\n2. Learn prefixes and suffixes\n3. Use words in context\n4. Practice with synonyms and antonyms\n5. Learn collocations',
    rules: [
      'Prefix UN- means "not": unhappy, unkind',
      'Prefix PRE- means "before": preview, predict',
      'Suffix -TION/-SION makes nouns: education, decision',
      'Suffix -FUL means "full of": beautiful, careful',
      'Suffix -LESS means "without": careless, hopeless',
    ],
    examples: [
      { correct: 'BENEVOLENT = bene (good) + volent (wish) = wishing good for others', explanation: 'Word root analysis helps remember meaning.' },
    ],
    exercises: [
      { id: 'voc1', type: 'choose-correct', question: 'Synonym for DILIGENT:', options: ['Lazy', 'Hardworking', 'Careless', 'Slow'], answer: 'Hardworking', explanation: 'Diligent means hardworking, showing steady effort.' },
      { id: 'voc2', type: 'choose-correct', question: 'Antonym of BENEVOLENT:', options: ['Kind', 'Malevolent', 'Generous', 'Gentle'], answer: 'Malevolent', explanation: 'Benevolent = wishing good. Malevolent = wishing harm.' },
    ],
  },

  // ─── SPEAKING ────────────────────────────────────────────────────────────────
  {
    id: 'speaking',
    title: 'Speaking Confidence',
    icon: '🎤',
    color: '#F59E0B',
    category: 'speaking',
    theory: 'Effective English speaking combines fluency, accuracy, vocabulary, and confidence.\n\nKey Areas:\n• Pronunciation - stress and intonation patterns\n• Fluency - speaking smoothly without long pauses\n• Vocabulary - using varied words\n• Grammar - using correct structures naturally',
    rules: [
      'Stress the RIGHT syllable: PHOtograph, phoTOGraphy',
      'Intonation rises for questions ↗, falls for statements ↘',
      'State verbs (know, understand, believe) do NOT use continuous form',
      'Use assertive language: "I believe..." instead of "Maybe I think..."',
    ],
    examples: [
      { incorrect: 'I am not knowing.', correct: 'I do not know. / I am not sure.', explanation: 'State verbs not used in continuous form.' },
    ],
    exercises: [
      { id: 'sp1', type: 'choose-correct', question: 'Which is more natural?', options: ['I am not understanding this.', "I don't understand this.", 'I am not understand this.'], answer: "I don't understand this.", explanation: '"Understand" is a state verb — use simple present.' },
      { id: 'sp2', type: 'fill-blank', question: 'Polite request: "___ you please help me?"', answer: 'Could', explanation: 'Could/Would you please... is most polite.' },
    ],
  },

  // ─── PASSAGE WRITING ─────────────────────────────────────────────────────────
  {
    id: 'passage-writing',
    title: 'Passage Writing',
    icon: '📜',
    color: '#6366F1',
    category: 'writing',
    theory: `A PASSAGE is a piece of writing on a given topic with a clear beginning, middle, and end.

HOW TO WRITE A PASSAGE:
━━━━━━━━━━━━━━━━━━━━━━
Structure of a Passage:
  1. INTRODUCTION (Opening Para)
     → Introduce the topic. State the main idea.
     → Hook the reader with an interesting statement, question or fact.

  2. BODY (Middle Para/s)
     → Develop the main idea with supporting points.
     → Use examples, facts, reasons.
     → One idea per paragraph.
     → Use linking words (however, moreover, furthermore, in addition, on the other hand).

  3. CONCLUSION (Closing Para)
     → Summarise the main points.
     → End with a final thought, recommendation or moral.

LINKING / TRANSITION WORDS:
  Adding: and, also, moreover, furthermore, in addition, besides
  Contrasting: but, however, on the other hand, although, despite, yet
  Cause/Effect: because, therefore, as a result, consequently, so
  Sequence: first, then, next, after that, finally, lastly
  Example: for example, for instance, such as, namely

TIPS FOR GOOD PASSAGE WRITING:
  ★ Stick to the topic — do not drift to unrelated ideas
  ★ Use short, clear sentences in body paragraphs
  ★ Vary sentence length for rhythm
  ★ Use active voice wherever possible
  ★ Avoid repetition — use synonyms
  ★ Maintain consistent tense throughout
  ★ Start each paragraph with a topic sentence

SAMPLE PASSAGE:
Topic: Importance of Trees

  Trees are vital for the survival of all living creatures on Earth. They provide us with oxygen, food, and shelter — essentials we cannot live without.

  Trees help maintain the ecological balance. They absorb carbon dioxide and release oxygen, keeping the air clean. Forests are home to thousands of species of animals and birds. Moreover, tree roots hold the soil together and prevent erosion.

  Unfortunately, deforestation is destroying our forests at an alarming rate. Every year, millions of acres of forest are cleared for agriculture and construction. This has led to rising temperatures, irregular rainfall, and loss of biodiversity.

  Therefore, it is our responsibility to protect and plant trees. Every individual should plant at least one tree a year. Only when we respect nature will nature sustain us.`,
    rules: [
      'Every passage must have 3 parts: Introduction, Body, Conclusion',
      'Start each paragraph with a topic sentence',
      'Use linking words to connect ideas smoothly',
      'Maintain one consistent tense throughout the passage',
      'Stick strictly to the given topic — no irrelevant content',
      'Vary sentence structure: short + complex sentences for rhythm',
      'Use active voice for clearer, stronger writing',
      'Conclude with a summary or recommendation — never end abruptly',
    ],
    examples: [
      { correct: 'Introduction: "Clean water is one of the most precious resources on Earth."', explanation: 'Opens with a clear, strong statement about the topic.' },
      { correct: 'Body: "Moreover, polluted water causes diseases like cholera and typhoid."', explanation: '"Moreover" = adding another point. One idea per paragraph.' },
      { correct: 'Conclusion: "Therefore, we must take collective action to conserve water."', explanation: '"Therefore" introduces a recommendation in the conclusion.' },
      { incorrect: 'The passage switches from talking about trees to talking about rivers.', correct: 'Stay on ONE topic throughout all paragraphs.', explanation: 'Changing topics mid-passage breaks coherence.' },
    ],
    exercises: [
      { id: 'pw1', type: 'choose-correct', question: 'Which part of the passage introduces the topic?', options: ['Body', 'Conclusion', 'Introduction', 'Heading'], answer: 'Introduction', explanation: 'The Introduction opens the passage and states the main idea.' },
      { id: 'pw2', type: 'choose-correct', question: 'Which linking word shows CONTRAST?', options: ['moreover', 'however', 'therefore', 'for example'], answer: 'however', explanation: '"However" introduces a contrasting point. "moreover" = addition; "therefore" = result.' },
      { id: 'pw3', type: 'fill-blank', question: 'The first sentence of each paragraph is called the ___ sentence.', answer: 'topic', explanation: 'A topic sentence states the main idea of that paragraph.' },
      { id: 'pw4', type: 'choose-correct', question: 'Where does the writer summarise main points?', options: ['Introduction', 'Body', 'Conclusion', 'Heading'], answer: 'Conclusion', explanation: 'The Conclusion summarises key points and gives a final thought.' },
      { id: 'pw5', type: 'choose-correct', question: 'Which shows CAUSE AND EFFECT?', options: ['although', 'however', 'therefore', 'moreover'], answer: 'therefore', explanation: '"Therefore" = shows result/effect. "Although" = contrast. "Moreover" = addition.' },
    ],
  },

  // ─── REPORT WRITING ──────────────────────────────────────────────────────────
  {
    id: 'report-writing',
    title: 'Report Writing',
    icon: '📋',
    color: '#0EA5E9',
    category: 'writing',
    theory: `A REPORT is a formal, factual document that presents information about an event, situation, or topic in an organised way.

TYPES OF REPORTS:
  1. Newspaper Report — reports a recent event for a newspaper
  2. School/Formal Report — reports an event/activity for a school/organisation

━━━━━━━━━━━━━━━━━━━━━━
FORMAT OF A NEWSPAPER REPORT
━━━━━━━━━━━━━━━━━━━━━━
  HEADLINE (Bold, in CAPITALS)
  Byline: By [Name of Reporter] | Place | Date

  Opening Paragraph:
    → Answer: WHAT happened? WHERE? WHEN? WHO was involved?

  Body:
    → HOW did it happen? Details, background.
    → Quotes from eyewitnesses or officials.
    → Statistics and facts.

  Conclusion:
    → Action taken. Future impact or follow-up.

━━━━━━━━━━━━━━━━━━━━━━
FORMAT OF A SCHOOL REPORT
━━━━━━━━━━━━━━━━━━━━━━
  Title: Report on [Event Name]
  Submitted to: [Authority Name]
  Submitted by: [Name/Position]
  Date: [DD/MM/YYYY]

  1. INTRODUCTION — brief background
  2. BODY — detailed account of what happened, how, who was involved
  3. FINDINGS/HIGHLIGHTS
  4. CONCLUSION AND RECOMMENDATIONS

━━━━━━━━━━━━━━━━━━━━━━
KEY FEATURES OF REPORT WRITING
━━━━━━━━━━━━━━━━━━━━━━
  ★ Written in THIRD PERSON (he, she, they) — NOT first person (I, we)
  ★ Use PASSIVE VOICE frequently
  ★ PAST TENSE for events that have occurred
  ★ Formal, objective language — no personal opinions
  ★ Factual and precise — use numbers, dates, names
  ★ Organised in clear sections/paragraphs
  ★ Short, clear headline that summarises the event

SAMPLE NEWSPAPER REPORT:
  FIRE BREAKS OUT IN CITY MARKET
  By Staff Reporter | Bhubaneswar | 15 March 2024

  A massive fire broke out in the Old Market area of Bhubaneswar late on Friday night, destroying nearly 50 shops. The incident occurred around 11:30 PM and was brought under control by three fire engines after four hours.

  According to the fire department, an electrical short circuit in one of the shops is suspected to be the cause. No casualties were reported, though property worth several lakhs was destroyed.

  The district administration has promised compensation to the affected traders. An inquiry committee has been set up to investigate the cause.`,
    rules: [
      'Always write in THIRD PERSON (he/she/they — NOT I/we)',
      'Use PAST TENSE for events that have occurred',
      'Use PASSIVE VOICE frequently ("It was reported that...")',
      'Headline: short, bold, informative (verb included)',
      'Opening para answers: WHAT, WHERE, WHEN, WHO',
      'Body answers: HOW and WHY — include quotes and facts',
      'Conclusion: action taken and future implications',
      'Language must be formal, objective, and factual',
      'No personal opinions — report only facts',
    ],
    examples: [
      { correct: 'HEADLINE: FIRE BREAKS OUT IN CITY MARKET', explanation: 'Bold, in capitals, uses a strong active verb "breaks out".' },
      { correct: 'Byline: By Staff Reporter | Bhubaneswar | 15 March 2024', explanation: 'Byline always below headline with reporter name, place, and date.' },
      { incorrect: 'I saw that the fire was very big and scary.', correct: 'The fire was reported to be massive, destroying nearly 50 shops.', explanation: 'Reports use third person and passive voice — not first person.' },
      { correct: 'Three fire engines were deployed and the blaze was brought under control after four hours.', explanation: 'Passive voice, past tense, specific facts (three engines, four hours).' },
    ],
    exercises: [
      { id: 'rw1', type: 'choose-correct', question: 'Reports are written in which person?', options: ['First person (I/we)', 'Second person (you)', 'Third person (he/she/they)', 'Any person'], answer: 'Third person (he/she/they)', explanation: 'Reports are objective and formal — always third person.' },
      { id: 'rw2', type: 'choose-correct', question: 'Which tense is used in reports about past events?', options: ['Present tense', 'Future tense', 'Past tense', 'Present perfect only'], answer: 'Past tense', explanation: 'Events that have occurred are reported in past tense.' },
      { id: 'rw3', type: 'fill-blank', question: 'The first line below the headline that gives reporter name, place, date is called ___', answer: 'byline', explanation: 'Byline = "By [Reporter] | Place | Date" — appears right below the headline.' },
      { id: 'rw4', type: 'choose-correct', question: 'What does the opening paragraph of a newspaper report answer?', options: ['Why and How', 'What, Where, When, Who', 'Only What happened', 'Future consequences'], answer: 'What, Where, When, Who', explanation: 'The 5Ws: the opening must answer What, Where, When, and Who.' },
      { id: 'rw5', type: 'correct-sentence', question: 'Rewrite in report style: "I think the accident happened because of bad roads."', answer: 'The accident is believed to have occurred due to poor road conditions.', explanation: 'Remove "I think" (opinion/first person). Use passive voice and formal vocabulary.' },
    ],
  },

  // ─── NOTE MAKING ─────────────────────────────────────────────────────────────
  {
    id: 'note-making',
    title: 'Note Making',
    icon: '📝',
    color: '#F59E0B',
    category: 'writing',
    theory: `NOTE MAKING is the skill of reading a passage and recording only the important points in a short, organised form using headings, subheadings, abbreviations, and symbols.

━━━━━━━━━━━━━━━━━━━━━━
FORMAT OF NOTE MAKING
━━━━━━━━━━━━━━━━━━━━━━
  Title: [Main topic of the passage]

  1. Main Heading
     1.1 Sub-point
     1.2 Sub-point
         1.2.1 Sub-sub-point

  2. Main Heading
     2.1 Sub-point
     2.2 Sub-point

  Key to Abbreviations:
     [list all abbreviations used in notes]

━━━━━━━━━━━━━━━━━━━━━━
KEY FEATURES OF GOOD NOTES
━━━━━━━━━━━━━━━━━━━━━━
  ★ Use numbered headings and indented sub-headings
  ★ Use abbreviations and symbols to save time and space
  ★ Write only KEY WORDS — not full sentences
  ★ Use your own words where possible
  ★ Capture all main ideas — nothing important should be missed
  ★ Use consistent abbreviation system

COMMON ABBREVIATIONS:
  e.g.  = for example          i.e. = that is
  etc.  = and so on            vs   = versus
  &     = and                  @    = at
  govt. = government           edu. = education
  imp.  = important            dev. = development
  info. = information          env. = environment
  approx. = approximately      diff. = difference
  b/w   = between              w/o  = without
  w/    = with                 →    = leads to / causes
  ↑     = increase             ↓    = decrease
  ∴     = therefore            ∵    = because

SAMPLE:
Passage topic: Pollution and its effects

Title: Pollution and Its Effects

1. Types of pollution
   1.1 Air pollution
   1.2 Water pollution
   1.3 Soil pollution

2. Causes
   2.1 Industrial waste
   2.2 Vehicle emissions
   2.3 Deforestation

3. Effects
   3.1 Health: respiratory diseases, cancer
   3.2 Env.: ↑ global warming, acid rain
   3.3 Economy: loss of agricultural land

4. Solutions
   4.1 Use of renewable energy
   4.2 Strict govt. regulations
   4.3 Public awareness

Key to Abbreviations:
  Env. = Environment  |  Govt. = Government  |  ↑ = Increase`,
    rules: [
      'Use numbered/lettered headings and sub-headings (1, 1.1, 1.2...)',
      'Write only key words — NOT full sentences',
      'Use abbreviations and symbols to save space',
      'List all abbreviations used in "Key to Abbreviations" at the end',
      'Maintain consistent indentation for hierarchy',
      'Include a title that reflects the main topic',
      'Do not copy sentences verbatim — paraphrase in brief',
      'Capture ALL main ideas from the passage',
    ],
    examples: [
      { correct: '1. Global Warming\n   1.1 Causes: fossil fuels, deforestation\n   1.2 Effects: ↑ sea level, extreme weather', explanation: 'Numbered headings, sub-points with abbreviations, key words only.' },
      { incorrect: 'Global warming is a very serious problem that is caused by burning fossil fuels and cutting down trees.', correct: '1.1 Causes: fossil fuels, deforestation', explanation: 'Notes must be brief — key words, not full sentences.' },
      { correct: 'Key to Abbreviations:\n  → = leads to  |  govt. = government  |  ↑ = increase', explanation: 'Every abbreviation used in notes must be explained in the key.' },
    ],
    exercises: [
      { id: 'nm1', type: 'choose-correct', question: 'Notes are written in:', options: ['Full sentences', 'Key words and phrases', 'Paragraph form', 'Question-answer form'], answer: 'Key words and phrases', explanation: 'Note making records only essential words — not complete sentences.' },
      { id: 'nm2', type: 'fill-blank', question: 'All abbreviations used in notes must be explained in "Key to ___".', answer: 'Abbreviations', explanation: 'The "Key to Abbreviations" section lists all short forms used.' },
      { id: 'nm3', type: 'choose-correct', question: 'Which symbol means "leads to / causes" in notes?', options: ['↑', '∴', '→', '∵'], answer: '→', explanation: '→ = leads to / results in. ↑ = increase. ∴ = therefore. ∵ = because.' },
      { id: 'nm4', type: 'choose-correct', question: 'Note-making format uses:', options: ['Paragraphs only', 'Numbered headings and sub-headings', 'Bullet points only', 'Tables only'], answer: 'Numbered headings and sub-headings', explanation: 'Standard note format: 1. Heading → 1.1 Sub-heading → 1.1.1 detail' },
    ],
  },

  // ─── ESSAY WRITING ───────────────────────────────────────────────────────────
  {
    id: 'essay-writing',
    title: 'Essay Writing',
    icon: '🖊️',
    color: '#EC4899',
    category: 'writing',
    theory: `An ESSAY is a piece of writing that presents and develops ideas on a particular topic in a structured way.

TYPES OF ESSAYS:
  1. Descriptive Essay — describes a person, place, thing, or experience
  2. Narrative Essay — tells a story (personal or fictional)
  3. Expository Essay — explains/informs about a topic factually
  4. Persuasive/Argumentative Essay — argues a point of view

━━━━━━━━━━━━━━━━━━━━━━
STRUCTURE OF AN ESSAY
━━━━━━━━━━━━━━━━━━━━━━
  TITLE (in the centre)

  Para 1 — INTRODUCTION:
    → Hook (interesting opening: question, quote, statistic)
    → Brief background on the topic
    → Thesis statement (your main argument/what the essay will discuss)

  Para 2, 3, 4 — BODY:
    → Each paragraph = ONE main idea
    → Topic sentence at the start of each paragraph
    → Support with examples, facts, reasons
    → Use transition words

  Last Para — CONCLUSION:
    → Restate main points (do NOT introduce new ideas)
    → Final thought/recommendation/moral

━━━━━━━━━━━━━━━━━━━━━━
ESSAY WRITING TIPS
━━━━━━━━━━━━━━━━━━━━━━
  ★ Plan before writing — jot down ideas in a mind map
  ★ Introduction should grab reader's attention
  ★ Body: 3-4 paragraphs, each with ONE central idea
  ★ Use a variety of vocabulary — avoid repeating words
  ★ Maintain one consistent point of view
  ★ Conclusion must logically follow from the body — no surprise endings
  ★ Word count: usually 250–400 words for school essays

SAMPLE ESSAY PLAN:
Topic: "Social Media — Boon or Bane?"

  Para 1 (Intro): Social media has transformed communication.
  Para 2 (Body 1): Benefits — connectivity, information, business opportunities.
  Para 3 (Body 2): Drawbacks — addiction, fake news, cyberbullying.
  Para 4 (Body 3): Finding balance — responsible usage.
  Para 5 (Conclusion): Social media is a powerful tool; how we use it determines whether it is a boon or bane.`,
    rules: [
      'Every essay has 3 parts: Introduction, Body, Conclusion',
      'Introduction must have a hook + thesis statement',
      'Body: one idea per paragraph, topic sentence at start',
      'Conclusion: summarise — do NOT add new ideas',
      'Use transition words to connect paragraphs',
      'Maintain consistent tense and person throughout',
      'Descriptive: rich, sensory language | Argumentative: logical, evidence-based',
      'Plan your essay before writing — outline first',
      'Avoid very short paragraphs (min. 3-4 sentences per paragraph)',
    ],
    examples: [
      { correct: 'Hook: "Did you know that over 4 billion people use social media today?"', explanation: 'A question as hook grabs the reader\'s attention immediately.' },
      { correct: 'Thesis: "While social media offers tremendous benefits, its misuse poses serious threats."', explanation: 'Thesis states BOTH sides — sets up the essay\'s argument.' },
      { correct: 'Topic sentence: "One major benefit of social media is its role in connecting people across the world."', explanation: 'Topic sentence introduces the paragraph\'s central idea.' },
      { incorrect: 'Conclusion: "...and also, let me mention that online gaming is also addictive."', correct: 'Conclusion should only summarise what was already discussed.', explanation: 'Never introduce NEW ideas in the conclusion.' },
    ],
    exercises: [
      { id: 'ew1', type: 'choose-correct', question: 'What is a thesis statement?', options: ['The title of the essay', 'The main argument stated in the introduction', 'The conclusion of the essay', 'A fact in the body paragraph'], answer: 'The main argument stated in the introduction', explanation: 'Thesis statement = the central argument/position of the essay, stated in the introduction.' },
      { id: 'ew2', type: 'choose-correct', question: 'What should a conclusion NOT do?', options: ['Summarise main points', 'Introduce new ideas', 'Give a final thought', 'Restate the thesis'], answer: 'Introduce new ideas', explanation: 'Conclusion only wraps up existing ideas — never introduces anything new.' },
      { id: 'ew3', type: 'fill-blank', question: 'The first sentence of each body paragraph is called a ___ sentence.', answer: 'topic', explanation: 'Topic sentence = introduces the main idea of that paragraph.' },
      { id: 'ew4', type: 'choose-correct', question: 'Which type of essay argues a viewpoint with evidence?', options: ['Descriptive', 'Narrative', 'Persuasive/Argumentative', 'Expository'], answer: 'Persuasive/Argumentative', explanation: 'Argumentative essay = takes a position and supports it with evidence and reasoning.' },
      { id: 'ew5', type: 'choose-correct', question: 'What is a "hook" in essay writing?', options: ['The conclusion sentence', 'The opening that grabs reader\'s attention', 'A question in the body', 'The title of the essay'], answer: 'The opening that grabs reader\'s attention', explanation: 'Hook = interesting opening (question, quote, statistic) in the introduction.' },
    ],
  },

  // ─── LETTER WRITING ──────────────────────────────────────────────────────────
  {
    id: 'letter-writing',
    title: 'Letter Writing',
    icon: '✉️',
    color: '#3B82F6',
    category: 'writing',
    theory: `A LETTER is a written message from one person/organization to another.

━━━━━━━━━━━━━━━━━━━━━━
TYPES OF LETTERS
━━━━━━━━━━━━━━━━━━━━━━
  1. FORMAL LETTER — to a person/organisation in an official capacity
     (complaint, enquiry, application, order, suggestion)

  2. INFORMAL LETTER — to friends, family (personal/friendly)

━━━━━━━━━━━━━━━━━━━━━━
FORMAT OF FORMAL LETTER
━━━━━━━━━━━━━━━━━━━━━━
  Sender's Address (top right or left)
  Date

  Receiver's Address (left side, below sender's details)
  The Principal,
  ABC School, Bhubaneswar.

  Salutation:    Dear Sir/Madam, / Respected Sir/Madam,
  Subject:       Sub: [Brief subject line]

  Body:
    Para 1 — State the purpose of the letter
    Para 2 — Explain in detail (reasons, facts, requests)
    Para 3 — Mention what action you expect from the reader

  Complimentary Close:    Yours faithfully, / Yours sincerely,
  Signature: [Name]
  Designation (if official)

━━━━━━━━━━━━━━━━━━━━━━
FORMAT OF INFORMAL LETTER
━━━━━━━━━━━━━━━━━━━━━━
  Sender's Address
  Date

  Salutation: Dear [Name],

  Body:
    Para 1 — Opening (greeting, how are you, mention last contact)
    Para 2 — Main content (news, request, advice, experience)
    Para 3 — Closing (give regards, express hope to meet)

  Complimentary Close: Your loving friend/cousin/brother,
  Signature: [Name]

━━━━━━━━━━━━━━━━━━━━━━
KEY DIFFERENCES
━━━━━━━━━━━━━━━━━━━━━━
  Formal                      Informal
  ───────────────────────────────────────────────
  Formal language             Casual, friendly language
  Yours faithfully/sincerely  Your loving friend / With love
  Subject line required       No subject line
  No contractions (don't)     Contractions allowed (don't, I'll)
  Third person / professional  First/second person (I, you)

SAMPLE FORMAL LETTER:
  [Your Address]
  15 March 2024

  The Principal,
  Kendriya Vidyalaya,
  Bhubaneswar.

  Respected Sir,
  Sub: Request for Leave

  I am a student of Class X, Section B, Roll No. 15. I wish to inform you that I shall be unable to attend school from 18th to 20th March 2024 due to a family function in another city.

  I, therefore, request you to kindly grant me three days of leave. I assure you that I will cover all the missed work upon my return.

  Yours faithfully,
  Priya Sharma`,
    rules: [
      'Formal letter: use formal language, no contractions, subject line required',
      'Salutation Formal: Dear Sir/Madam OR Respected Sir/Madam',
      'Salutation Informal: Dear [Name]',
      'Formal close: "Yours faithfully" (if salutation = Sir/Madam) / "Yours sincerely" (if name used)',
      'Informal close: "Your loving friend/cousin/brother/sister"',
      'Subject line mandatory in formal letters (Sub: ...)',
      'Address and date always at the top',
      'Body should be clear, concise, and to the point',
      'State purpose in FIRST paragraph — do not beat around the bush',
    ],
    examples: [
      { correct: 'Salutation: "Respected Sir," / Close: "Yours faithfully,"', explanation: 'When you do not know the name → "Respected Sir" + "Yours faithfully".' },
      { correct: 'Sub: Request for Grant of Leave', explanation: 'Subject line is mandatory in formal letters — brief and specific.' },
      { incorrect: 'Dear Sir, I am writing this letter to you because I want to ask you about leave...', correct: 'Respected Sir, I request you to kindly grant me three days of leave...', explanation: 'Be direct — state purpose clearly in first sentence, avoid unnecessary phrases.' },
    ],
    exercises: [
      { id: 'lw1', type: 'choose-correct', question: 'Which closing is correct for a formal letter when salutation is "Dear Sir"?', options: ['Your loving friend,', 'Yours faithfully,', 'Yours sincerely,', 'With regards,'], answer: 'Yours faithfully,', explanation: '"Yours faithfully" is used when salutation is "Sir/Madam" (name not known).' },
      { id: 'lw2', type: 'fill-blank', question: 'In a formal letter, the brief line below the salutation that states the purpose is called ___.', answer: 'subject line', explanation: '"Sub: ..." gives the purpose of the letter in one line.' },
      { id: 'lw3', type: 'choose-correct', question: 'Which of these is correct for an INFORMAL letter?', options: ['Respected Sir/Madam,', 'To whomsoever it may concern,', 'Dear Priya,', 'Sub: Request for Leave'], answer: 'Dear Priya,', explanation: 'Informal letters use first name in salutation: "Dear [Name],"' },
      { id: 'lw4', type: 'choose-correct', question: 'In which paragraph of a formal letter do you state the purpose?', options: ['Last paragraph', 'Middle paragraph', 'First paragraph', 'After the closing'], answer: 'First paragraph', explanation: 'Formal letters must state the purpose clearly in the very first paragraph.' },
    ],
  },

  // ─── APPLICATION WRITING ─────────────────────────────────────────────────────
  {
    id: 'application-writing',
    title: 'Application Writing',
    icon: '📄',
    color: '#10B981',
    category: 'writing',
    theory: `An APPLICATION is a formal letter written to an authority to make a request for something (leave, certificate, permission, job, etc.).

━━━━━━━━━━━━━━━━━━━━━━
TYPES OF APPLICATIONS
━━━━━━━━━━━━━━━━━━━━━━
  1. Leave Application (to school/office)
  2. Application for Transfer Certificate
  3. Application for Fee Concession
  4. Application for Scholarship
  5. Job Application (Cover Letter)

━━━━━━━━━━━━━━━━━━━━━━
FORMAT OF APPLICATION
━━━━━━━━━━━━━━━━━━━━━━
  To,
  The [Designation of Receiver],
  [Name of School/Organisation],
  [Address]

  Date: [DD/MM/YYYY]

  Subject: Application for [purpose]

  Respected Sir/Madam,

  Para 1: State who you are (name, class, roll number) and the purpose.
  Para 2: Explain the reason or details clearly and politely.
  Para 3: Request politely and assure of cooperation.

  Yours obediently/faithfully,
  [Full Name]
  [Class & Roll Number / Designation]

━━━━━━━━━━━━━━━━━━━━━━
JOB APPLICATION FORMAT
━━━━━━━━━━━━━━━━━━━━━━
  [Your Address]
  [Date]

  To,
  The HR Manager,
  [Company Name],
  [Address]

  Subject: Application for the Post of [Designation]

  Respected Sir/Madam,
  I am writing to apply for the post of [designation] as advertised in [newspaper/website] dated [date].

  I have completed my [qualification] from [institution]. I have [X] years of experience in [field]. I possess strong skills in [relevant skills].

  I am confident that my qualifications and experience make me a suitable candidate for this position. I have enclosed my resume for your kind perusal. I request you to grant me an opportunity for a personal interview.

  Yours faithfully,
  [Name]
  Enclosure: Resume / CV

━━━━━━━━━━━━━━━━━━━━━━
KEY TIPS
━━━━━━━━━━━━━━━━━━━━━━
  ★ Always use polite, formal language
  ★ Be clear and specific about what you are requesting
  ★ State your identity (name, class, designation) clearly
  ★ Keep it brief — do not include unnecessary details
  ★ "Yours obediently" — for school applications (student to teacher/principal)
  ★ "Yours faithfully" — for office/job applications
  ★ Proofread before submitting`,
    rules: [
      'Application is a type of formal letter with a specific request',
      'Always begin with "To, The [Designation]..."',
      'Date appears after receiver\'s address',
      'Subject line is mandatory: "Subject: Application for..."',
      'Salutation: "Respected Sir/Madam,"',
      'Para 1: identify yourself + state purpose',
      'Para 2: explain reason/details clearly',
      'Para 3: polite request + assurance',
      'Close: "Yours obediently" (school) / "Yours faithfully" (office/job)',
      'Sign with full name and class/designation below',
    ],
    examples: [
      { correct: 'Subject: Application for Two Days Leave', explanation: 'Subject line: brief and specific.' },
      { correct: 'I am Priya Sharma, a student of Class X, Section B. I wish to inform you that I will be unable to attend school on 18th and 19th March due to a family function.', explanation: 'Para 1: Identify yourself + state purpose clearly.' },
      { correct: 'I, therefore, humbly request you to kindly grant me two days of leave. I assure you that I will cover all missed work.', explanation: 'Para 3: Polite request + assurance. "humbly request" and "assure" are key phrases.' },
      { incorrect: 'Yours loving,', correct: 'Yours obediently, (for school) / Yours faithfully, (for office)', explanation: '"Yours loving" is informal. Applications always use formal closing.' },
    ],
    exercises: [
      { id: 'aw1', type: 'choose-correct', question: 'What closing is used for a school leave application (student to principal)?', options: ['Yours sincerely,', 'Yours lovingly,', 'Yours obediently,', 'With regards,'], answer: 'Yours obediently,', explanation: '"Yours obediently" = student to teacher/principal in school applications.' },
      { id: 'aw2', type: 'fill-blank', question: 'The brief line stating the purpose of the application is called ___.', answer: 'subject line', explanation: '"Subject: Application for..." summarises the purpose in one line.' },
      { id: 'aw3', type: 'choose-correct', question: 'In which paragraph do you identify yourself in an application?', options: ['Last paragraph', 'Middle paragraph', 'First paragraph', 'Subject line'], answer: 'First paragraph', explanation: 'First paragraph: state your name, class/designation, and the purpose of the application.' },
      { id: 'aw4', type: 'choose-correct', question: 'What closing is appropriate for a job application?', options: ['Yours obediently,', 'Yours lovingly,', 'Yours faithfully,', 'Your friend,'], answer: 'Yours faithfully,', explanation: '"Yours faithfully" = used in formal/professional applications (job, office).' },
      { id: 'aw5', type: 'correct-sentence', question: 'What should Para 3 of an application contain?', answer: 'A polite request and an assurance of cooperation/future compliance.', explanation: 'Para 3 always ends with a polite request ("I request you to kindly...") and an assurance ("I assure you...").' },
    ],
  },
];
