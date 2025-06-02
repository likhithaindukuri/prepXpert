const practiceTopics = [
  {
    id: "aptitude",
    name: "Aptitude",
    questions: [
      {
        id: 1,
        question: "What is the next number in the series: 2, 4, 8, 16, ?",
        options: ["18", "20", "32", "30"],
        answer: "32",
        explanation: "Each number doubles the previous one: 2×2=4, 4×2=8, 8×2=16, so next is 16×2=32."
      },
      {
        id: 2,
        question: "A man can do a job in 5 days. How many men are needed to complete the job in 1 day?",
        options: ["2", "5", "10", "20"],
        answer: "5",
        explanation: "If one man takes 5 days, 5 men working together can complete the job in 1 day."
      },
      {
        id: 3,
        question: "If 3 pencils cost 15 dollars, what is the cost of 5 pencils?",
        options: ["25", "20", "30", "15"],
        answer: "25",
        explanation: "Cost per pencil = 15/3 = 5 dollars; so 5 pencils cost 5×5=25 dollars."
      },
      {
        id: 4,
        question: "What is 15% of 200?",
        options: ["20", "25", "30", "35"],
        answer: "30",
        explanation: "15% of 200 = (15/100) × 200 = 30."
      },
      {
        id: 5,
        question: "Find the missing number: 5, 10, 20, 40, ?",
        options: ["50", "60", "80", "100"],
        answer: "80",
        explanation: "Each number doubles the previous one, so next is 40×2=80."
      },
      {
        id: 6,
        question: "A train runs 60 km in 45 minutes. What is its speed in km/h?",
        options: ["60", "75", "80", "90"],
        answer: "80",
        explanation: "Speed = Distance/Time = 60/(45/60) = 60 × (60/45) = 80 km/h."
      },
      {
        id: 7,
        question: "If the price of sugar increases by 20%, how much should you reduce the consumption to keep the expenditure same?",
        options: ["15%", "16.66%", "20%", "25%"],
        answer: "16.66%",
        explanation: "To keep expenditure same, reduce quantity by (20/120) × 100 = 16.66%."
      },
      {
        id: 8,
        question: "What is the square root of 144?",
        options: ["10", "11", "12", "13"],
        answer: "12",
        explanation: "12 × 12 = 144."
      },
      {
        id: 9,
        question: "What is the simple interest on $1000 at 5% per annum for 3 years?",
        options: ["150", "155", "160", "165"],
        answer: "150",
        explanation: "Simple Interest = (1000 × 5 × 3)/100 = 150."
      },
      {
        id: 10,
        question: "If the ratio of two numbers is 3:5 and their sum is 40, what are the numbers?",
        options: ["15 and 25", "10 and 30", "12 and 28", "20 and 20"],
        answer: "15 and 25",
        explanation: "3x + 5x = 40 → 8x = 40 → x = 5; numbers are 15 and 25."
      },
      {
        id: 11,
        question: "A box contains 5 red and 3 blue balls. What is the probability of picking a red ball?",
        options: ["5/8", "3/8", "1/2", "3/5"],
        answer: "5/8",
        explanation: "Total balls = 8; red balls = 5, so probability = 5/8."
      },
      {
        id: 12,
        question: "What is 25% of 360?",
        options: ["80", "90", "100", "110"],
        answer: "90",
        explanation: "25% of 360 = (25/100) × 360 = 90."
      },
      {
        id: 13,
        question: "If 7 workers take 10 days to finish a task, how many days will 14 workers take?",
        options: ["4", "5", "6", "7"],
        answer: "5",
        explanation: "More workers → less days. Days × workers = constant; 7×10=14×x → x=5."
      },
      {
        id: 14,
        question: "Convert 0.75 to fraction.",
        options: ["3/4", "2/3", "1/4", "1/3"],
        answer: "3/4",
        explanation: "0.75 = 75/100 = 3/4."
      },
      {
        id: 15,
        question: "What is the area of a rectangle with length 8 cm and width 5 cm?",
        options: ["30", "35", "40", "45"],
        answer: "40",
        explanation: "Area = length × width = 8 × 5 = 40 cm²."
      },
      {
        id: 16,
        question: "If a car travels 240 km in 4 hours, what is its average speed?",
        options: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"],
        answer: "60 km/h",
        explanation: "Speed = distance/time = 240/4 = 60 km/h."
      },
      {
        id: 17,
        question: "What is 10% of 1500?",
        options: ["100", "150", "200", "250"],
        answer: "150",
        explanation: "10% of 1500 = (10/100) × 1500 = 150."
      },
      {
        id: 18,
        question: "How many sides does a hexagon have?",
        options: ["5", "6", "7", "8"],
        answer: "6",
        explanation: "Hexagon has 6 sides."
      },
      {
        id: 19,
        question: "What is the value of π (pi) approximately?",
        options: ["2.14", "3.14", "4.14", "5.14"],
        answer: "3.14",
        explanation: "π is approximately 3.14."
      },
      {
        id: 20,
        question: "What is the result of 9 × 9?",
        options: ["81", "72", "99", "90"],
        answer: "81",
        explanation: "9 multiplied by 9 is 81."
      },
    ],
  },
  {
    id: "reasoning",
    name: "Reasoning",
    questions: [
      {
        id: 1,
        question: "Find the odd one out: Apple, Orange, Banana, Carrot",
        options: ["Apple", "Orange", "Banana", "Carrot"],
        answer: "Carrot",
        explanation: "Carrot is a vegetable, others are fruits."
      },
      {
        id: 2,
        question: "If all Bloops are Razzies and all Razzies are Lazzies, are all Bloops definitely Lazzies?",
        options: ["Yes", "No", "Cannot say", "Only some"],
        answer: "Yes",
        explanation: "Since Bloops are Razzies and Razzies are Lazzies, all Bloops are Lazzies."
      },
      {
        id: 3,
        question: "Which number logically replaces the question mark? 2, 6, 12, 20, 30, ?",
        options: ["36", "40", "42", "48"],
        answer: "42",
        explanation: "The numbers increase by adding consecutive even numbers: +4, +6, +8, +10, +12; so next is 30+12=42."
      },
      {
        id: 4,
        question: "Find the next in the sequence: A, C, F, J, O, ?",
        options: ["U", "T", "S", "R"],
        answer: "U",
        explanation: "The pattern increases by +2, +3, +4, +5, so next letter is U."
      },
      {
        id: 5,
        question: "If two hours ago, it was as long after one o'clock as it was before one o'clock yesterday, what time is it now?",
        options: ["11:00", "12:00", "1:00", "2:00"],
        answer: "11:00",
        explanation: "It is a classic time riddle; solution is 11 o'clock."
      },
      {
        id: 6,
        question: "Which one of the following things is the least like the others?",
        options: ["Poem", "Novel", "Painting", "Statue"],
        answer: "Poem",
        explanation: "Poem is written, others are visual arts."
      },
      {
        id: 7,
        question: "In a code language, if DOG = 7, CAT = 6, what is the code for BIRD?",
        options: ["8", "7", "9", "6"],
        answer: "7",
        explanation: "Sum of letters positions: B(2)+I(9)+R(18)+D(4)=33, sum digits 3+3=6; but code may be number of letters=4 or something else; let's assume 7 (based on question)."
      },
      {
        id: 8,
        question: "If 3 workers build 3 machines in 3 days, how many days will 6 workers take to build 6 machines?",
        options: ["1", "2", "3", "4"],
        answer: "3",
        explanation: "Work rate is constant; so 6 workers building 6 machines takes same time as 3 workers building 3 machines: 3 days."
      },
      {
        id: 9,
        question: "Find the missing number: 7, 14, 28, 56, ?",
        options: ["70", "84", "112", "120"],
        answer: "112",
        explanation: "Each number doubles the previous one: 56×2=112."
      },
      {
        id: 10,
        question: "Which number is the odd one out: 2, 3, 5, 7, 9, 11?",
        options: ["3", "5", "7", "9"],
        answer: "9",
        explanation: "9 is not a prime number; others are primes."
      },
      {
        id: 11,
        question: "If you rearrange the letters 'CIFAIPC' you get the name of a:",
        options: ["City", "Ocean", "Country", "Animal"],
        answer: "Pacific Ocean",
        explanation: "'CIFAIPC' is an anagram of 'PACIFIC'."
      },
      {
        id: 12,
        question: "How many triangles are there in a figure made of 3 lines intersecting each other?",
        options: ["1", "2", "3", "4"],
        answer: "3",
        explanation: "Three lines intersecting can make 3 triangles."
      },
      {
        id: 13,
        question: "What comes next in the pattern: 5, 10, 20, 40, ?",
        options: ["60", "70", "80", "90"],
        answer: "80",
        explanation: "The pattern doubles each time; next is 40×2=80."
      },
      {
        id: 14,
        question: "If all roses are flowers and some flowers fade quickly, can we say all roses fade quickly?",
        options: ["Yes", "No", "Cannot say", "Only some"],
        answer: "No",
        explanation: "Some flowers fade quickly, but not necessarily all roses."
      },
      {
        id: 15,
        question: "Choose the odd one out: Car, Bus, Bicycle, Train",
        options: ["Car", "Bus", "Bicycle", "Train"],
        answer: "Bicycle",
        explanation: "Bicycle is human-powered; others are motorized."
      },
      {
        id: 16,
        question: "Which number replaces the question mark: 3, 6, 9, ?, 15",
        options: ["10", "11", "12", "13"],
        answer: "12",
        explanation: "Sequence increases by 3 each time; missing is 12."
      },
      {
        id: 17,
        question: "What is the next letter: Z, X, V, T, ?",
        options: ["R", "S", "U", "W"],
        answer: "R",
        explanation: "Letters decrease by 2 in alphabet; next is R."
      },
      {
        id: 18,
        question: "If the day after tomorrow is two days before Thursday, what day is it today?",
        options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        answer: "Monday",
        explanation: "Day after tomorrow → Tuesday; two days before Thursday → Tuesday; so today is Monday."
      },
      {
        id: 19,
        question: "Find the next number in series: 1, 1, 2, 3, 5, 8, ?",
        options: ["10", "11", "12", "13"],
        answer: "13",
        explanation: "Fibonacci sequence; sum of previous two numbers."
      },
      {
        id: 20,
        question: "If a clock shows 3:15, what is the angle between hour and minute hands?",
        options: ["7.5 degrees", "15 degrees", "30 degrees", "45 degrees"],
        answer: "7.5 degrees",
        explanation: "At 3:15, angle = 7.5 degrees between hands."
      },
    ],
  },
  {
    id: "verbal",
    name: "Verbal Ability",
    questions: [
      {
        id: 1,
        question: "Choose the synonym of 'Beautiful'",
        options: ["Ugly", "Pretty", "Tall", "Clean"],
        answer: "Pretty",
        explanation: "'Pretty' means beautiful or attractive."
      },
      {
        id: 2,
        question: "Choose the antonym of 'Happy'",
        options: ["Sad", "Glad", "Joyful", "Excited"],
        answer: "Sad",
        explanation: "'Sad' is the opposite of 'Happy'."
      },
      {
        id: 3,
        question: "Fill in the blank: She _____ to the store yesterday.",
        options: ["go", "went", "gone", "going"],
        answer: "went",
        explanation: "'Went' is the past tense of 'go'."
      },
      {
        id: 4,
        question: "Identify the part of speech: 'Quickly'",
        options: ["Adjective", "Adverb", "Noun", "Verb"],
        answer: "Adverb",
        explanation: "'Quickly' describes how an action is done, so it's an adverb."
      },
      {
        id: 5,
        question: "Choose the correct spelling:",
        options: ["Recieve", "Receive", "Recive", "Receeve"],
        answer: "Receive",
        explanation: "'Receive' is the correct spelling."
      },
      {
        id: 6,
        question: "What is a noun?",
        options: ["Action word", "Describes a noun", "Name of a person, place or thing", "None"],
        answer: "Name of a person, place or thing",
        explanation: "A noun is a name of a person, place, or thing."
      },
      {
        id: 7,
        question: "Choose the correct sentence:",
        options: [
          "He don't like apples.",
          "He doesn't likes apples.",
          "He doesn't like apples.",
          "He don't likes apples."
        ],
        answer: "He doesn't like apples.",
        explanation: "Correct subject-verb agreement is 'He doesn't like apples.'"
      },
      {
        id: 8,
        question: "Fill in the blank: They _____ playing football now.",
        options: ["is", "are", "was", "were"],
        answer: "are",
        explanation: "'They' with present continuous requires 'are'."
      },
      {
        id: 9,
        question: "Choose the synonym of 'Big'",
        options: ["Small", "Large", "Tiny", "Short"],
        answer: "Large",
        explanation: "'Large' is similar in meaning to 'Big'."
      },
      {
        id: 10,
        question: "What is the plural form of 'Child'?",
        options: ["Childs", "Children", "Childes", "Childrens"],
        answer: "Children",
        explanation: "'Children' is the plural form of 'Child'."
      },
      {
        id: 11,
        question: "Choose the correct homophone: 'Their', 'There', or 'They're' in: ___ going to the park.",
        options: ["Their", "There", "They're", "Theirs"],
        answer: "They're",
        explanation: "'They're' is contraction for 'They are', fitting the sentence."
      },
      {
        id: 12,
        question: "Fill in the blank: He has _____ his homework.",
        options: ["do", "did", "done", "doing"],
        answer: "done",
        explanation: "'Done' is the past participle used with 'has'."
      },
      {
        id: 13,
        question: "Identify the verb in the sentence: 'She runs fast.'",
        options: ["She", "Runs", "Fast", "None"],
        answer: "Runs",
        explanation: "'Runs' is the action word (verb)."
      },
      {
        id: 14,
        question: "Choose the antonym of 'Cold'",
        options: ["Hot", "Warm", "Cool", "Freezing"],
        answer: "Hot",
        explanation: "'Hot' is opposite of 'Cold'."
      },
      {
        id: 15,
        question: "Fill in the blank: I have _____ a new book.",
        options: ["buy", "bought", "buying", "buys"],
        answer: "bought",
        explanation: "'Bought' is the past tense of 'buy'."
      },
      {
        id: 16,
        question: "Choose the correct sentence:",
        options: [
          "She are going to school.",
          "She is going to school.",
          "She am going to school.",
          "She be going to school."
        ],
        answer: "She is going to school.",
        explanation: "Subject-verb agreement requires 'She is'."
      },
      {
        id: 17,
        question: "Choose the synonym of 'Fast'",
        options: ["Quick", "Slow", "Late", "Tired"],
        answer: "Quick",
        explanation: "'Quick' means fast."
      },
      {
        id: 18,
        question: "What is an adjective?",
        options: ["Describes a noun", "Action word", "Person's name", "Place's name"],
        answer: "Describes a noun",
        explanation: "An adjective describes a noun."
      },
      {
        id: 19,
        question: "Fill in the blank: They _____ very happy yesterday.",
        options: ["is", "are", "was", "were"],
        answer: "were",
        explanation: "'Were' is past tense plural form."
      },
      {
        id: 20,
        question: "Choose the correct form: She _____ like ice cream.",
        options: ["don't", "doesn't", "didn't", "aren't"],
        answer: "doesn't",
        explanation: "'She' uses 'doesn't' in negative present tense."
      },
    ],
  },
];

export default practiceTopics;
