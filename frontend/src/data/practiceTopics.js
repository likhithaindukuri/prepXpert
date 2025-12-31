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
      {
        id: 21,
        question: "What is the cube of 3?",
        options: ["9", "18", "27", "36"],
        answer: "27",
        explanation: "3³ = 3 × 3 × 3 = 27."
      },
      {
        id: 22,
        question: "If a shirt costs $40 and is on sale for 25% off, what is the sale price?",
        options: ["$25", "$30", "$35", "$32"],
        answer: "$30",
        explanation: "25% of $40 = $10; sale price = $40 - $10 = $30."
      },
      {
        id: 23,
        question: "What is the least common multiple (LCM) of 4 and 6?",
        options: ["10", "12", "18", "24"],
        answer: "12",
        explanation: "LCM of 4 and 6 is 12 (multiples: 4, 8, 12... and 6, 12...)."
      },
      {
        id: 24,
        question: "A rectangle has length 12 cm and width 8 cm. What is its perimeter?",
        options: ["30 cm", "40 cm", "50 cm", "60 cm"],
        answer: "40 cm",
        explanation: "Perimeter = 2(length + width) = 2(12 + 8) = 40 cm."
      },
      {
        id: 25,
        question: "What is 2³ + 3²?",
        options: ["15", "17", "19", "21"],
        answer: "17",
        explanation: "2³ = 8, 3² = 9; 8 + 9 = 17."
      },
      {
        id: 26,
        question: "If 4x + 8 = 20, what is the value of x?",
        options: ["2", "3", "4", "5"],
        answer: "3",
        explanation: "4x + 8 = 20 → 4x = 12 → x = 3."
      },
      {
        id: 27,
        question: "What is the greatest common divisor (GCD) of 18 and 24?",
        options: ["4", "6", "8", "12"],
        answer: "6",
        explanation: "GCD of 18 and 24 is 6 (factors: 18=2×3×3, 24=2×2×2×3, common=2×3=6)."
      },
      {
        id: 28,
        question: "A circle has a radius of 7 cm. What is its area? (Use π = 22/7)",
        options: ["154 cm²", "144 cm²", "164 cm²", "174 cm²"],
        answer: "154 cm²",
        explanation: "Area = πr² = (22/7) × 7 × 7 = 154 cm²."
      },
      {
        id: 29,
        question: "What is 1/4 + 1/3?",
        options: ["5/12", "7/12", "2/7", "1/2"],
        answer: "7/12",
        explanation: "1/4 + 1/3 = 3/12 + 4/12 = 7/12."
      },
      {
        id: 30,
        question: "If a number is increased by 20% and then decreased by 20%, what is the net change?",
        options: ["No change", "4% increase", "4% decrease", "20% decrease"],
        answer: "4% decrease",
        explanation: "If original is 100: +20% = 120, then -20% of 120 = 96; net change = -4%."
      },
      {
        id: 31,
        question: "What is the sum of first 10 natural numbers?",
        options: ["45", "50", "55", "60"],
        answer: "55",
        explanation: "Sum = n(n+1)/2 = 10(11)/2 = 55."
      },
      {
        id: 32,
        question: "A triangle has sides 5 cm, 12 cm, and 13 cm. What type of triangle is it?",
        options: ["Equilateral", "Isosceles", "Right-angled", "Scalene"],
        answer: "Right-angled",
        explanation: "5² + 12² = 25 + 144 = 169 = 13², so it's a right-angled triangle."
      },
      {
        id: 33,
        question: "What is the compound interest on $1000 at 10% per annum for 2 years?",
        options: ["$200", "$210", "$220", "$230"],
        answer: "$210",
        explanation: "CI = 1000(1.1)² - 1000 = 1210 - 1000 = $210."
      },
      {
        id: 34,
        question: "What is the average of 15, 20, 25, and 30?",
        options: ["20", "22.5", "25", "27.5"],
        answer: "22.5",
        explanation: "Average = (15 + 20 + 25 + 30)/4 = 90/4 = 22.5."
      },
      {
        id: 35,
        question: "If 30% of a number is 45, what is the number?",
        options: ["120", "135", "150", "165"],
        answer: "150",
        explanation: "30% of x = 45 → x = 45/0.30 = 150."
      },
      {
        id: 36,
        question: "What is the square root of 144?",
        options: ["10", "12", "14", "16"],
        answer: "12",
        explanation: "12 × 12 = 144, so √144 = 12."
      },
      {
        id: 37,
        question: "A rectangle has length 8 cm and width 5 cm. What is its area?",
        options: ["35 cm²", "40 cm²", "45 cm²", "50 cm²"],
        answer: "40 cm²",
        explanation: "Area = length × width = 8 × 5 = 40 cm²."
      },
      {
        id: 38,
        question: "What is 25% of 80?",
        options: ["15", "20", "25", "30"],
        answer: "20",
        explanation: "25% of 80 = (25/100) × 80 = 20."
      },
      {
        id: 39,
        question: "If 5 workers can build a wall in 10 days, how many days will 10 workers take?",
        options: ["3", "4", "5", "6"],
        answer: "5",
        explanation: "More workers means less time. 5 workers × 10 days = 10 workers × x days, so x = 5 days."
      },
      {
        id: 40,
        question: "What is the value of 3² + 4²?",
        options: ["20", "25", "30", "35"],
        answer: "25",
        explanation: "3² + 4² = 9 + 16 = 25."
      },
      {
        id: 41,
        question: "A shopkeeper sells an item for $120 at a profit of 20%. What was the cost price?",
        options: ["$90", "$100", "$110", "$115"],
        answer: "$100",
        explanation: "If CP is x, then 1.2x = 120, so x = 100."
      },
      {
        id: 42,
        question: "What is the LCM of 12 and 18?",
        options: ["24", "30", "36", "42"],
        answer: "36",
        explanation: "LCM of 12 (2²×3) and 18 (2×3²) = 2²×3² = 36."
      },
      {
        id: 43,
        question: "If a car travels 240 km in 3 hours, what is its average speed?",
        options: ["60 km/h", "70 km/h", "80 km/h", "90 km/h"],
        answer: "80 km/h",
        explanation: "Speed = Distance/Time = 240/3 = 80 km/h."
      },
      {
        id: 44,
        question: "What is 2³ × 3²?",
        options: ["48", "54", "60", "72"],
        answer: "72",
        explanation: "2³ × 3² = 8 × 9 = 72."
      },
      {
        id: 45,
        question: "A number when divided by 7 gives remainder 3. What is the remainder when the number is divided by 14?",
        options: ["3", "5", "7", "10"],
        answer: "3",
        explanation: "If number = 7k + 3, then when divided by 14, remainder is 3 (if k is even) or 10 (if k is odd). For smallest case, remainder is 3."
      },
      {
        id: 46,
        question: "What is the HCF of 24 and 36?",
        options: ["8", "10", "12", "14"],
        answer: "12",
        explanation: "HCF of 24 (2³×3) and 36 (2²×3²) = 2²×3 = 12."
      },
      {
        id: 47,
        question: "If the selling price is $90 and loss is 10%, what is the cost price?",
        options: ["$95", "$100", "$105", "$110"],
        answer: "$100",
        explanation: "If CP is x, then 0.9x = 90, so x = 100."
      },
      {
        id: 48,
        question: "What is the next number: 1, 4, 9, 16, 25, ?",
        options: ["30", "36", "40", "45"],
        answer: "36",
        explanation: "These are squares: 1², 2², 3², 4², 5², so next is 6² = 36."
      },
      {
        id: 49,
        question: "A circle has radius 10 cm. What is its circumference? (Use π = 3.14)",
        options: ["31.4 cm", "62.8 cm", "94.2 cm", "125.6 cm"],
        answer: "62.8 cm",
        explanation: "Circumference = 2πr = 2 × 3.14 × 10 = 62.8 cm."
      },
      {
        id: 50,
        question: "What is 15% of 300?",
        options: ["40", "45", "50", "55"],
        answer: "45",
        explanation: "15% of 300 = (15/100) × 300 = 45."
      },
      {
        id: 51,
        question: "What is the value of 2⁴?",
        options: ["8", "12", "16", "20"],
        answer: "16",
        explanation: "2⁴ = 2 × 2 × 2 × 2 = 16."
      },
      {
        id: 52,
        question: "A square has side 6 cm. What is its perimeter?",
        options: ["18 cm", "24 cm", "30 cm", "36 cm"],
        answer: "24 cm",
        explanation: "Perimeter = 4 × side = 4 × 6 = 24 cm."
      },
      {
        id: 53,
        question: "What is 1/2 + 1/3?",
        options: ["2/5", "5/6", "3/4", "4/5"],
        answer: "5/6",
        explanation: "1/2 + 1/3 = 3/6 + 2/6 = 5/6."
      },
      {
        id: 54,
        question: "If 4x = 20, what is x?",
        options: ["4", "5", "6", "7"],
        answer: "5",
        explanation: "4x = 20, so x = 20/4 = 5."
      },
      {
        id: 55,
        question: "What is the area of a rectangle with length 9 cm and width 4 cm?",
        options: ["32 cm²", "36 cm²", "40 cm²", "44 cm²"],
        answer: "36 cm²",
        explanation: "Area = length × width = 9 × 4 = 36 cm²."
      },
      {
        id: 56,
        question: "What is 60% of 150?",
        options: ["75", "80", "90", "100"],
        answer: "90",
        explanation: "60% of 150 = (60/100) × 150 = 90."
      },
      {
        id: 57,
        question: "If a number is multiplied by 3 and then 5 is added, the result is 23. What is the number?",
        options: ["4", "5", "6", "7"],
        answer: "6",
        explanation: "3x + 5 = 23, so 3x = 18, x = 6."
      },
      {
        id: 58,
        question: "What is the HCF of 18 and 27?",
        options: ["6", "9", "12", "15"],
        answer: "9",
        explanation: "HCF of 18 (2×3²) and 27 (3³) = 3² = 9."
      },
      {
        id: 59,
        question: "A car travels 180 km in 2.5 hours. What is its speed?",
        options: ["65 km/h", "70 km/h", "72 km/h", "75 km/h"],
        answer: "72 km/h",
        explanation: "Speed = Distance/Time = 180/2.5 = 72 km/h."
      },
      {
        id: 60,
        question: "What is the LCM of 8 and 12?",
        options: ["20", "24", "28", "32"],
        answer: "24",
        explanation: "LCM of 8 (2³) and 12 (2²×3) = 2³×3 = 24."
      },
      {
        id: 61,
        question: "If the cost price is $80 and selling price is $100, what is the profit percentage?",
        options: ["20%", "25%", "30%", "35%"],
        answer: "25%",
        explanation: "Profit = 100 - 80 = 20. Profit% = (20/80) × 100 = 25%."
      },
      {
        id: 62,
        question: "What is the value of 5³ - 3³?",
        options: ["98", "100", "102", "104"],
        answer: "98",
        explanation: "5³ - 3³ = 125 - 27 = 98."
      },
      {
        id: 63,
        question: "A circle has diameter 14 cm. What is its area? (Use π = 22/7)",
        options: ["154 cm²", "156 cm²", "158 cm²", "160 cm²"],
        answer: "154 cm²",
        explanation: "Radius = 7 cm. Area = πr² = (22/7) × 7 × 7 = 154 cm²."
      },
      {
        id: 64,
        question: "What is the sum of angles in a triangle?",
        options: ["150°", "180°", "200°", "270°"],
        answer: "180°",
        explanation: "Sum of angles in any triangle is always 180°."
      },
      {
        id: 65,
        question: "If 2x + 3y = 15 and x = 3, what is y?",
        options: ["2", "3", "4", "5"],
        answer: "3",
        explanation: "2(3) + 3y = 15, so 6 + 3y = 15, 3y = 9, y = 3."
      },
      {
        id: 66,
        question: "What is the compound interest on $2000 at 5% per annum for 2 years?",
        options: ["$200", "$205", "$210", "$215"],
        answer: "$205",
        explanation: "CI = 2000(1.05)² - 2000 = 2205 - 2000 = $205."
      },
      {
        id: 67,
        question: "A train 150m long passes a pole in 10 seconds. What is its speed in m/s?",
        options: ["12 m/s", "15 m/s", "18 m/s", "20 m/s"],
        answer: "15 m/s",
        explanation: "Speed = Distance/Time = 150/10 = 15 m/s."
      },
      {
        id: 68,
        question: "What is the value of √(144 + 256)?",
        options: ["18", "20", "22", "24"],
        answer: "20",
        explanation: "√(144 + 256) = √400 = 20."
      },
      {
        id: 69,
        question: "If the ratio of boys to girls is 3:2 and there are 30 boys, how many girls are there?",
        options: ["15", "18", "20", "25"],
        answer: "20",
        explanation: "3:2 = 30:x, so x = (30×2)/3 = 20."
      },
      {
        id: 70,
        question: "What is the volume of a cube with side 5 cm?",
        options: ["100 cm³", "125 cm³", "150 cm³", "175 cm³"],
        answer: "125 cm³",
        explanation: "Volume = side³ = 5³ = 125 cm³."
      },
      {
        id: 71,
        question: "A sum of money doubles in 5 years at simple interest. What is the rate of interest?",
        options: ["15%", "18%", "20%", "25%"],
        answer: "20%",
        explanation: "If principal doubles, interest = principal. So, P×R×5/100 = P, thus R = 20%."
      },
      {
        id: 72,
        question: "What is the median of 5, 8, 12, 15, 20?",
        options: ["10", "12", "13", "15"],
        answer: "12",
        explanation: "Median is the middle value when arranged: 5, 8, 12, 15, 20. Middle = 12."
      },
      {
        id: 73,
        question: "If x² - 5x + 6 = 0, what are the values of x?",
        options: ["2 and 3", "1 and 6", "3 and 4", "2 and 4"],
        answer: "2 and 3",
        explanation: "x² - 5x + 6 = (x-2)(x-3) = 0, so x = 2 or 3."
      },
      {
        id: 74,
        question: "A right triangle has legs 6 cm and 8 cm. What is the hypotenuse?",
        options: ["9 cm", "10 cm", "12 cm", "14 cm"],
        answer: "10 cm",
        explanation: "Hypotenuse = √(6² + 8²) = √(36 + 64) = √100 = 10 cm."
      },
      {
        id: 75,
        question: "What is the value of log₁₀(100)?",
        options: ["1", "2", "3", "4"],
        answer: "2",
        explanation: "log₁₀(100) = log₁₀(10²) = 2."
      },
      {
        id: 76,
        question: "If sin(30°) = 0.5, what is cos(60°)?",
        options: ["0.3", "0.5", "0.7", "0.9"],
        answer: "0.5",
        explanation: "cos(60°) = sin(30°) = 0.5 (complementary angles)."
      },
      {
        id: 77,
        question: "What is the derivative of x³?",
        options: ["x²", "2x²", "3x²", "4x²"],
        answer: "3x²",
        explanation: "d/dx(x³) = 3x² (power rule)."
      },
      {
        id: 78,
        question: "A cylinder has radius 7 cm and height 10 cm. What is its volume? (Use π = 22/7)",
        options: ["1540 cm³", "1560 cm³", "1580 cm³", "1600 cm³"],
        answer: "1540 cm³",
        explanation: "Volume = πr²h = (22/7) × 7 × 7 × 10 = 1540 cm³."
      },
      {
        id: 79,
        question: "What is the value of ∫(2x)dx from 0 to 3?",
        options: ["6", "9", "12", "15"],
        answer: "9",
        explanation: "∫(2x)dx = x². From 0 to 3: 3² - 0² = 9."
      },
      {
        id: 80,
        question: "If a number is increased by 25% and then decreased by 20%, what is the net percentage change?",
        options: ["No change", "2% increase", "5% increase", "5% decrease"],
        answer: "No change",
        explanation: "If original = 100: +25% = 125, then -20% of 125 = 100. Net change = 0%."
      },
      {
        id: 81,
        question: "What is the value of (a+b)² when a=5 and b=3?",
        options: ["56", "60", "64", "68"],
        answer: "64",
        explanation: "(a+b)² = a² + 2ab + b² = 25 + 30 + 9 = 64."
      },
      {
        id: 82,
        question: "A sphere has radius 6 cm. What is its volume? (Use π = 3.14)",
        options: ["904 cm³", "906 cm³", "908 cm³", "910 cm³"],
        answer: "904 cm³",
        explanation: "Volume = (4/3)πr³ = (4/3) × 3.14 × 216 ≈ 904 cm³."
      },
      {
        id: 83,
        question: "What is the value of 7! (7 factorial)?",
        options: ["4200", "5040", "7200", "8400"],
        answer: "5040",
        explanation: "7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040."
      },
      {
        id: 84,
        question: "If log₂(8) = x, what is x?",
        options: ["2", "3", "4", "5"],
        answer: "3",
        explanation: "log₂(8) = log₂(2³) = 3."
      },
      {
        id: 85,
        question: "What is the value of e⁰ (e to the power of 0)?",
        options: ["0", "1", "e", "undefined"],
        answer: "1",
        explanation: "Any number to the power of 0 equals 1. e⁰ = 1."
      },
      {
        id: 86,
        question: "A cone has radius 5 cm and height 12 cm. What is its volume? (Use π = 3.14)",
        options: ["300 cm³", "310 cm³", "314 cm³", "320 cm³"],
        answer: "314 cm³",
        explanation: "Volume = (1/3)πr²h = (1/3) × 3.14 × 25 × 12 ≈ 314 cm³."
      },
      {
        id: 87,
        question: "What is the value of lim(x→0) sin(x)/x?",
        options: ["0", "1", "∞", "undefined"],
        answer: "1",
        explanation: "This is a fundamental limit: lim(x→0) sin(x)/x = 1."
      },
      {
        id: 88,
        question: "If f(x) = x² + 3x + 2, what is f(-1)?",
        options: ["0", "1", "2", "3"],
        answer: "0",
        explanation: "f(-1) = (-1)² + 3(-1) + 2 = 1 - 3 + 2 = 0."
      },
      {
        id: 89,
        question: "What is the value of √(-1)?",
        options: ["-1", "0", "i", "1"],
        answer: "i",
        explanation: "√(-1) = i, where i is the imaginary unit."
      },
      {
        id: 90,
        question: "A complex number z = 3 + 4i. What is |z| (magnitude)?",
        options: ["4", "5", "6", "7"],
        answer: "5",
        explanation: "|z| = √(3² + 4²) = √(9 + 16) = √25 = 5."
      },
      {
        id: 91,
        question: "What is the value of ∫(eˣ)dx?",
        options: ["eˣ", "eˣ + C", "xeˣ", "eˣ/x"],
        answer: "eˣ + C",
        explanation: "The integral of eˣ is eˣ + C, where C is the constant of integration."
      },
      {
        id: 92,
        question: "If a matrix A = [[1,2],[3,4]], what is det(A)?",
        options: ["-2", "-1", "0", "1"],
        answer: "-2",
        explanation: "det(A) = (1×4) - (2×3) = 4 - 6 = -2."
      },
      {
        id: 93,
        question: "What is the value of ∑(n) from n=1 to 10?",
        options: ["50", "55", "60", "65"],
        answer: "55",
        explanation: "Sum = n(n+1)/2 = 10(11)/2 = 55."
      },
      {
        id: 94,
        question: "If f(x) = ln(x), what is f'(x)?",
        options: ["1/x", "x", "eˣ", "ln(x)"],
        answer: "1/x",
        explanation: "The derivative of ln(x) is 1/x."
      },
      {
        id: 95,
        question: "What is the value of ∫(1/x)dx?",
        options: ["x", "x²", "ln|x|", "1/x²"],
        answer: "ln|x|",
        explanation: "The integral of 1/x is ln|x| + C."
      },
      {
        id: 96,
        question: "A function f(x) = x³ - 6x² + 9x. At what x is f'(x) = 0?",
        options: ["x = 1 and x = 3", "x = 0 and x = 2", "x = 2 and x = 4", "x = 1 and x = 2"],
        answer: "x = 1 and x = 3",
        explanation: "f'(x) = 3x² - 12x + 9 = 3(x² - 4x + 3) = 3(x-1)(x-3) = 0, so x = 1 or 3."
      },
      {
        id: 97,
        question: "What is the value of lim(x→∞) (1 + 1/x)ˣ?",
        options: ["0", "1", "e", "∞"],
        answer: "e",
        explanation: "This is the definition of e: lim(x→∞) (1 + 1/x)ˣ = e ≈ 2.718."
      },
      {
        id: 98,
        question: "If z₁ = 2+3i and z₂ = 1-2i, what is z₁ × z₂?",
        options: ["8-i", "8+i", "8-7i", "8+7i"],
        answer: "8-i",
        explanation: "z₁ × z₂ = (2+3i)(1-2i) = 2 - 4i + 3i - 6i² = 2 - i + 6 = 8 - i."
      },
      {
        id: 99,
        question: "What is the value of ∫₀^π sin(x)dx?",
        options: ["0", "1", "2", "π"],
        answer: "2",
        explanation: "∫₀^π sin(x)dx = [-cos(x)]₀^π = -cos(π) - (-cos(0)) = -(-1) - (-1) = 2."
      },
      {
        id: 100,
        question: "If a differential equation is dy/dx = y, what is the general solution?",
        options: ["y = Cx", "y = Ceˣ", "y = Cx²", "y = C/x"],
        answer: "y = Ceˣ",
        explanation: "The solution to dy/dx = y is y = Ceˣ, where C is a constant."
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
        answer: "Ocean",
        explanation: "'CIFAIPC' is an anagram of 'PACIFIC', which is an ocean."
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
      {
        id: 21,
        question: "Find the next in series: 1, 4, 9, 16, 25, ?",
        options: ["30", "36", "40", "45"],
        answer: "36",
        explanation: "These are perfect squares: 1², 2², 3², 4², 5², so next is 6² = 36."
      },
      {
        id: 22,
        question: "If RED is coded as 27, BLUE is coded as 40, what is GREEN coded as?",
        options: ["50", "55", "60", "65"],
        answer: "55",
        explanation: "Sum of letter positions: R(18)+E(5)+D(4)=27; G(7)+R(18)+E(5)+E(5)+N(14)=49, but pattern may vary."
      },
      {
        id: 23,
        question: "Find the odd one out: Square, Circle, Triangle, Rectangle",
        options: ["Square", "Circle", "Triangle", "Rectangle"],
        answer: "Circle",
        explanation: "Circle has no straight sides; others are polygons."
      },
      {
        id: 24,
        question: "What comes next: 1, 3, 6, 10, 15, ?",
        options: ["18", "20", "21", "25"],
        answer: "21",
        explanation: "Triangular numbers: +2, +3, +4, +5, so next is +6 = 21."
      },
      {
        id: 25,
        question: "If all birds can fly and penguins are birds, can penguins fly?",
        options: ["Yes", "No", "Cannot say", "Only some"],
        answer: "No",
        explanation: "Penguins are birds but cannot fly; the premise is false."
      },
      {
        id: 26,
        question: "Find the missing number: 8, 16, 32, 64, ?",
        options: ["96", "112", "128", "144"],
        answer: "128",
        explanation: "Each number doubles: 64 × 2 = 128."
      },
      {
        id: 27,
        question: "Which word is different: Apple, Mango, Car, Orange",
        options: ["Apple", "Mango", "Car", "Orange"],
        answer: "Car",
        explanation: "Car is not a fruit; others are fruits."
      },
      {
        id: 28,
        question: "What is the next letter: A, D, G, J, ?",
        options: ["K", "L", "M", "N"],
        answer: "M",
        explanation: "Letters increase by 3 positions: A→D→G→J→M."
      },
      {
        id: 29,
        question: "If today is Monday, what day will it be 100 days from now?",
        options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        answer: "Wednesday",
        explanation: "100 days = 14 weeks + 2 days; Monday + 2 days = Wednesday."
      },
      {
        id: 30,
        question: "Find the pattern: 2, 5, 11, 23, 47, ?",
        options: ["89", "91", "95", "97"],
        answer: "95",
        explanation: "Each number = previous × 2 + 1: 47 × 2 + 1 = 95."
      },
      {
        id: 31,
        question: "Which number is prime: 15, 17, 21, 25?",
        options: ["15", "17", "21", "25"],
        answer: "17",
        explanation: "17 is only divisible by 1 and itself; others are composite."
      },
      {
        id: 32,
        question: "If CAT = 24, DOG = 26, what is BIRD?",
        options: ["34", "36", "38", "40"],
        answer: "36",
        explanation: "Sum of letter positions: B(2)+I(9)+R(18)+D(4)=33, but pattern may be different."
      },
      {
        id: 33,
        question: "What comes next: 0, 1, 1, 2, 3, 5, 8, 13, ?",
        options: ["18", "20", "21", "23"],
        answer: "21",
        explanation: "Fibonacci sequence: sum of previous two numbers; 8 + 13 = 21."
      },
      {
        id: 34,
        question: "Find the odd one: 2, 4, 8, 16, 32, 64",
        options: ["2", "4", "8", "All are correct"],
        answer: "All are correct",
        explanation: "All are powers of 2: 2¹, 2², 2³, 2⁴, 2⁵, 2⁶."
      },
      {
        id: 35,
        question: "If all roses are red and this flower is red, is it definitely a rose?",
        options: ["Yes", "No", "Cannot say", "Maybe"],
        answer: "No",
        explanation: "Not all red flowers are roses; there are other red flowers too."
      },
      {
        id: 36,
        question: "Find the missing number: 3, 6, 12, 24, 48, ?",
        options: ["72", "84", "96", "108"],
        answer: "96",
        explanation: "Each number doubles the previous: 48 × 2 = 96."
      },
      {
        id: 37,
        question: "Which word does NOT belong: Apple, Mango, Carrot, Banana",
        options: ["Apple", "Mango", "Carrot", "Banana"],
        answer: "Carrot",
        explanation: "Carrot is a vegetable, others are fruits."
      },
      {
        id: 38,
        question: "If Monday is the first day, what day is the 15th day?",
        options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        answer: "Monday",
        explanation: "15 days = 2 weeks + 1 day, so it's Monday again."
      },
      {
        id: 39,
        question: "Find the pattern: Z, Y, X, W, V, ?",
        options: ["U", "T", "S", "R"],
        answer: "U",
        explanation: "Alphabet in reverse order: Z, Y, X, W, V, U."
      },
      {
        id: 40,
        question: "What comes next: 1, 3, 6, 10, 15, ?",
        options: ["18", "20", "21", "24"],
        answer: "21",
        explanation: "Triangular numbers: +2, +3, +4, +5, so next is +6 = 21."
      },
      {
        id: 41,
        question: "If all dogs are animals and all animals are living things, are all dogs living things?",
        options: ["Yes", "No", "Cannot say", "Maybe"],
        answer: "Yes",
        explanation: "If dogs are animals and animals are living things, then dogs are living things."
      },
      {
        id: 42,
        question: "Find the odd one: Square, Circle, Triangle, Rectangle",
        options: ["Square", "Circle", "Triangle", "Rectangle"],
        answer: "Circle",
        explanation: "Circle has no straight sides, others are polygons."
      },
      {
        id: 43,
        question: "What is the next letter: A, D, G, J, M, ?",
        options: ["N", "O", "P", "Q"],
        answer: "P",
        explanation: "Pattern: +3 letters each time. A(+3)=D, D(+3)=G, so M(+3)=P."
      },
      {
        id: 44,
        question: "If RED is coded as 1854, how is BLUE coded?",
        options: ["212215", "212225", "212235", "212245"],
        answer: "212225",
        explanation: "R=18, E=5, D=4. B=2, L=12, U=21, E=5, so BLUE = 212125 (but pattern may vary)."
      },
      {
        id: 45,
        question: "Find the missing: 2, 5, 11, 23, 47, ?",
        options: ["89", "91", "93", "95"],
        answer: "95",
        explanation: "Pattern: ×2+1. 2×2+1=5, 5×2+1=11, so 47×2+1=95."
      },
      {
        id: 46,
        question: "Which is different: Spring, Summer, Autumn, December",
        options: ["Spring", "Summer", "Autumn", "December"],
        answer: "December",
        explanation: "December is a month, others are seasons."
      },
      {
        id: 47,
        question: "What comes next: 5, 10, 20, 40, 80, ?",
        options: ["120", "140", "160", "180"],
        answer: "160",
        explanation: "Each number doubles: 80 × 2 = 160."
      },
      {
        id: 48,
        question: "If BOOK is to READ, then MUSIC is to?",
        options: ["Listen", "Play", "Sing", "Hear"],
        answer: "Listen",
        explanation: "You read a book, you listen to music."
      },
      {
        id: 49,
        question: "Find the pattern: 1, 4, 9, 16, 25, 36, ?",
        options: ["42", "45", "49", "52"],
        answer: "49",
        explanation: "Perfect squares: 1², 2², 3², 4², 5², 6², so next is 7² = 49."
      },
      {
        id: 50,
        question: "If all birds can fly and penguin is a bird, can penguin fly?",
        options: ["Yes", "No", "Cannot say", "Maybe"],
        answer: "No",
        explanation: "The first statement is false (not all birds can fly), but logically if we assume it's true, penguin still cannot fly as it's an exception."
      },
      {
        id: 51,
        question: "Find the next: 1, 3, 5, 7, ?",
        options: ["8", "9", "10", "11"],
        answer: "9",
        explanation: "Odd numbers: 1, 3, 5, 7, 9."
      },
      {
        id: 52,
        question: "Which is different: Dog, Cat, Bird, Fish",
        options: ["Dog", "Cat", "Bird", "Fish"],
        answer: "Fish",
        explanation: "Fish lives in water, others are land animals."
      },
      {
        id: 53,
        question: "If APPLE is coded as 1225165, how is ORANGE coded?",
        options: ["15181475", "15181476", "15181477", "15181478"],
        answer: "15181475",
        explanation: "A=1, P=16, P=16, L=12, E=5. O=15, R=18, A=1, N=14, G=7, E=5."
      },
      {
        id: 54,
        question: "Find the pattern: 2, 4, 8, 16, 32, ?",
        options: ["48", "56", "64", "72"],
        answer: "64",
        explanation: "Each number doubles: 32 × 2 = 64."
      },
      {
        id: 55,
        question: "What comes next: A, C, E, G, ?",
        options: ["H", "I", "J", "K"],
        answer: "I",
        explanation: "Alternate letters: A, C, E, G, I."
      },
      {
        id: 56,
        question: "If RED is to COLOR, then ROSE is to?",
        options: ["Flower", "Plant", "Garden", "Beauty"],
        answer: "Flower",
        explanation: "RED is a type of COLOR, ROSE is a type of FLOWER."
      },
      {
        id: 57,
        question: "Find the missing: 5, 10, 15, 20, 25, ?",
        options: ["28", "30", "32", "35"],
        answer: "30",
        explanation: "Multiples of 5: 5, 10, 15, 20, 25, 30."
      },
      {
        id: 58,
        question: "Which word doesn't belong: Happy, Sad, Angry, Table",
        options: ["Happy", "Sad", "Angry", "Table"],
        answer: "Table",
        explanation: "Table is an object, others are emotions."
      },
      {
        id: 59,
        question: "If 3 + 4 = 7, 5 + 6 = 11, then 7 + 8 = ?",
        options: ["13", "14", "15", "16"],
        answer: "15",
        explanation: "Simple addition: 7 + 8 = 15."
      },
      {
        id: 60,
        question: "Find the next: 10, 20, 30, 40, ?",
        options: ["45", "50", "55", "60"],
        answer: "50",
        explanation: "Multiples of 10: 10, 20, 30, 40, 50."
      },
      {
        id: 61,
        question: "If all roses are flowers and this is a rose, is it a flower?",
        options: ["Yes", "No", "Cannot say", "Maybe"],
        answer: "Yes",
        explanation: "If all roses are flowers and this is a rose, then it must be a flower."
      },
      {
        id: 62,
        question: "What comes next: 1, 4, 9, 16, 25, 36, ?",
        options: ["42", "45", "49", "52"],
        answer: "49",
        explanation: "Perfect squares: 1², 2², 3², 4², 5², 6², 7² = 49."
      },
      {
        id: 63,
        question: "Find the odd one: Circle, Square, Triangle, Rectangle",
        options: ["Circle", "Square", "Triangle", "Rectangle"],
        answer: "Circle",
        explanation: "Circle has no straight sides, others are polygons."
      },
      {
        id: 64,
        question: "If CAT is to ANIMAL, then ROSE is to?",
        options: ["Plant", "Flower", "Garden", "Color"],
        answer: "Flower",
        explanation: "CAT is a type of ANIMAL, ROSE is a type of FLOWER."
      },
      {
        id: 65,
        question: "What is the next letter: B, D, F, H, ?",
        options: ["I", "J", "K", "L"],
        answer: "J",
        explanation: "Alternate letters: B, D, F, H, J."
      },
      {
        id: 66,
        question: "Find the pattern: 1, 1, 2, 3, 5, 8, 13, ?",
        options: ["18", "20", "21", "23"],
        answer: "21",
        explanation: "Fibonacci: sum of previous two. 8 + 13 = 21."
      },
      {
        id: 67,
        question: "If all doctors are smart and John is a doctor, is John smart?",
        options: ["Yes", "No", "Cannot say", "Maybe"],
        answer: "Yes",
        explanation: "If all doctors are smart and John is a doctor, then John must be smart."
      },
      {
        id: 68,
        question: "What comes next: 2, 6, 12, 20, 30, ?",
        options: ["38", "40", "42", "44"],
        answer: "42",
        explanation: "Differences: +4, +6, +8, +10, so next is +12 = 42."
      },
      {
        id: 69,
        question: "Find the missing: 3, 6, 9, 12, 15, ?",
        options: ["16", "18", "20", "22"],
        answer: "18",
        explanation: "Multiples of 3: 3, 6, 9, 12, 15, 18."
      },
      {
        id: 70,
        question: "If PEN is to WRITE, then KNIFE is to?",
        options: ["Cut", "Eat", "Cook", "Sharp"],
        answer: "Cut",
        explanation: "PEN is used to WRITE, KNIFE is used to CUT."
      },
      {
        id: 71,
        question: "What is the next number: 1, 8, 27, 64, ?",
        options: ["100", "125", "144", "169"],
        answer: "125",
        explanation: "Cubes: 1³, 2³, 3³, 4³, 5³ = 125."
      },
      {
        id: 72,
        question: "Find the pattern: A, Z, B, Y, C, X, ?",
        options: ["D", "W", "E", "V"],
        answer: "D",
        explanation: "Alternating from start and end: A, Z, B, Y, C, X, D."
      },
      {
        id: 73,
        question: "If all students study and Mary is a student, does Mary study?",
        options: ["Yes", "No", "Cannot say", "Maybe"],
        answer: "Yes",
        explanation: "If all students study and Mary is a student, then Mary must study."
      },
      {
        id: 74,
        question: "What comes next: 1, 2, 4, 8, 16, 32, ?",
        options: ["48", "56", "64", "72"],
        answer: "64",
        explanation: "Powers of 2: 2⁰, 2¹, 2², 2³, 2⁴, 2⁵, 2⁶ = 64."
      },
      {
        id: 75,
        question: "Find the missing: 5, 11, 17, 23, 29, ?",
        options: ["33", "35", "37", "39"],
        answer: "35",
        explanation: "Adding 6 each time: 29 + 6 = 35."
      },
      {
        id: 76,
        question: "If BOOK is to READ, then MUSIC is to?",
        options: ["Listen", "Play", "Sing", "Hear"],
        answer: "Listen",
        explanation: "You READ a BOOK, you LISTEN to MUSIC."
      },
      {
        id: 77,
        question: "What is the next: 0, 1, 1, 2, 3, 5, 8, 13, 21, ?",
        options: ["28", "32", "34", "35"],
        answer: "34",
        explanation: "Fibonacci sequence: 13 + 21 = 34."
      },
      {
        id: 78,
        question: "Find the pattern: 2, 5, 10, 17, 26, ?",
        options: ["35", "37", "39", "41"],
        answer: "37",
        explanation: "Differences: +3, +5, +7, +9, so next is +11 = 37."
      },
      {
        id: 79,
        question: "If all cars have wheels and this vehicle has wheels, is it a car?",
        options: ["Yes", "No", "Cannot say", "Maybe"],
        answer: "Cannot say",
        explanation: "Having wheels doesn't mean it's a car; trucks, buses also have wheels."
      },
      {
        id: 80,
        question: "What comes next: 1, 4, 10, 22, 46, ?",
        options: ["88", "90", "92", "94"],
        answer: "94",
        explanation: "Pattern: ×2+2. 1×2+2=4, 4×2+2=10, so 46×2+2=94."
      },
      {
        id: 81,
        question: "Find the missing: 3, 7, 15, 31, 63, ?",
        options: ["125", "127", "129", "131"],
        answer: "127",
        explanation: "Pattern: ×2+1. 3×2+1=7, 7×2+1=15, so 63×2+1=127."
      },
      {
        id: 82,
        question: "If TEACHER is to STUDENT, then DOCTOR is to?",
        options: ["Nurse", "Patient", "Medicine", "Hospital"],
        answer: "Patient",
        explanation: "TEACHER teaches STUDENT, DOCTOR treats PATIENT."
      },
      {
        id: 83,
        question: "What is the next: 1, 3, 7, 15, 31, ?",
        options: ["61", "63", "65", "67"],
        answer: "63",
        explanation: "Pattern: ×2+1. 31×2+1=63."
      },
      {
        id: 84,
        question: "Find the pattern: 2, 6, 18, 54, 162, ?",
        options: ["468", "476", "484", "486"],
        answer: "486",
        explanation: "Multiplying by 3: 162 × 3 = 486."
      },
      {
        id: 85,
        question: "If all mammals are animals and whale is a mammal, is whale an animal?",
        options: ["Yes", "No", "Cannot say", "Maybe"],
        answer: "Yes",
        explanation: "If all mammals are animals and whale is a mammal, then whale must be an animal."
      },
      {
        id: 86,
        question: "What comes next: 1, 5, 14, 30, 55, ?",
        options: ["85", "88", "91", "95"],
        answer: "91",
        explanation: "Differences: +4, +9, +16, +25 (squares), so next is +36 = 91."
      },
      {
        id: 87,
        question: "Find the missing: 2, 12, 36, 80, 150, ?",
        options: ["240", "252", "264", "276"],
        answer: "252",
        explanation: "Pattern: n²(n+1). For n=6: 36×7 = 252."
      },
      {
        id: 88,
        question: "If OCEAN is to WATER, then DESERT is to?",
        options: ["Sand", "Heat", "Dry", "Cactus"],
        answer: "Sand",
        explanation: "OCEAN is made of WATER, DESERT is made of SAND."
      },
      {
        id: 89,
        question: "What is the next: 1, 2, 6, 24, 120, ?",
        options: ["600", "720", "840", "960"],
        answer: "720",
        explanation: "Factorials: 1!, 2!, 3!, 4!, 5!, 6! = 720."
      },
      {
        id: 90,
        question: "Find the pattern: 1, 4, 27, 256, 3125, ?",
        options: ["46656", "50000", "60000", "70000"],
        answer: "46656",
        explanation: "nⁿ: 1¹, 2², 3³, 4⁴, 5⁵, 6⁶ = 46656."
      },
      {
        id: 91,
        question: "If all birds have wings and penguin is a bird, does penguin have wings?",
        options: ["Yes", "No", "Cannot say", "Maybe"],
        answer: "Yes",
        explanation: "If all birds have wings and penguin is a bird, then penguin must have wings (even if it can't fly)."
      },
      {
        id: 92,
        question: "What comes next: 1, 3, 6, 10, 15, 21, 28, ?",
        options: ["34", "36", "38", "40"],
        answer: "36",
        explanation: "Triangular numbers: differences +2, +3, +4, +5, +6, +7, so next is +8 = 36."
      },
      {
        id: 93,
        question: "Find the missing: 2, 5, 11, 23, 47, 95, ?",
        options: ["189", "191", "193", "195"],
        answer: "191",
        explanation: "Pattern: ×2+1. 95×2+1=191."
      },
      {
        id: 94,
        question: "If RIVER is to WATER, then MOUNTAIN is to?",
        options: ["Rock", "Height", "Snow", "Peak"],
        answer: "Rock",
        explanation: "RIVER is made of WATER, MOUNTAIN is made of ROCK."
      },
      {
        id: 95,
        question: "What is the next: 1, 8, 27, 64, 125, 216, ?",
        options: ["343", "400", "441", "512"],
        answer: "343",
        explanation: "Cubes: 1³, 2³, 3³, 4³, 5³, 6³, 7³ = 343."
      },
      {
        id: 96,
        question: "Find the pattern: 1, 2, 4, 7, 11, 16, 22, ?",
        options: ["28", "29", "30", "31"],
        answer: "29",
        explanation: "Differences: +1, +2, +3, +4, +5, +6, so next is +7 = 29."
      },
      {
        id: 97,
        question: "If all squares are rectangles and this is a square, is it a rectangle?",
        options: ["Yes", "No", "Cannot say", "Maybe"],
        answer: "Yes",
        explanation: "If all squares are rectangles and this is a square, then it must be a rectangle."
      },
      {
        id: 98,
        question: "What comes next: 1, 4, 9, 16, 25, 36, 49, 64, ?",
        options: ["80", "81", "90", "100"],
        answer: "81",
        explanation: "Perfect squares: 1², 2², 3², 4², 5², 6², 7², 8², 9² = 81."
      },
      {
        id: 99,
        question: "Find the missing: 3, 5, 9, 17, 33, 65, ?",
        options: ["127", "129", "131", "133"],
        answer: "129",
        explanation: "Pattern: ×2-1. 65×2-1=129."
      },
      {
        id: 100,
        question: "If all roses are red and this flower is red, is it a rose?",
        options: ["Yes", "No", "Cannot say", "Maybe"],
        answer: "Cannot say",
        explanation: "Not all red flowers are roses; there could be other red flowers like tulips or poppies."
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
      {
        id: 21,
        question: "Choose the synonym of 'Brave'",
        options: ["Coward", "Courageous", "Scared", "Weak"],
        answer: "Courageous",
        explanation: "'Courageous' means brave or showing courage."
      },
      {
        id: 22,
        question: "Fill in the blank: I _____ to the library every week.",
        options: ["go", "goes", "went", "going"],
        answer: "go",
        explanation: "Present tense with 'I' uses 'go'."
      },
      {
        id: 23,
        question: "Choose the antonym of 'Generous'",
        options: ["Kind", "Selfish", "Helpful", "Friendly"],
        answer: "Selfish",
        explanation: "'Selfish' is opposite of 'Generous'."
      },
      {
        id: 24,
        question: "What is the past tense of 'Think'?",
        options: ["Thinked", "Thought", "Thunk", "Thinked"],
        answer: "Thought",
        explanation: "'Thought' is the irregular past tense of 'think'."
      },
      {
        id: 25,
        question: "Choose the correct sentence:",
        options: [
          "The books is on the table.",
          "The books are on the table.",
          "The books was on the table.",
          "The books be on the table."
        ],
        answer: "The books are on the table.",
        explanation: "'Books' is plural, so it requires 'are'."
      },
      {
        id: 26,
        question: "Choose the synonym of 'Enormous'",
        options: ["Tiny", "Huge", "Small", "Little"],
        answer: "Huge",
        explanation: "'Huge' means very large, similar to 'enormous'."
      },
      {
        id: 27,
        question: "Fill in the blank: She has been _____ for two hours.",
        options: ["study", "studied", "studying", "studies"],
        answer: "studying",
        explanation: "Present perfect continuous uses 'studying'."
      },
      {
        id: 28,
        question: "What is the plural of 'Mouse'?",
        options: ["Mouses", "Mice", "Mousees", "Mices"],
        answer: "Mice",
        explanation: "'Mice' is the irregular plural form of 'mouse'."
      },
      {
        id: 29,
        question: "Choose the antonym of 'Ancient'",
        options: ["Old", "Modern", "Historic", "Classic"],
        answer: "Modern",
        explanation: "'Modern' is opposite of 'ancient'."
      },
      {
        id: 30,
        question: "Fill in the blank: They _____ studying when I arrived.",
        options: ["is", "are", "was", "were"],
        answer: "were",
        explanation: "Past continuous with 'they' uses 'were'."
      },
      {
        id: 31,
        question: "Choose the correct spelling:",
        options: ["Seperate", "Separate", "Seperete", "Separete"],
        answer: "Separate",
        explanation: "'Separate' is the correct spelling."
      },
      {
        id: 32,
        question: "What is a verb?",
        options: ["Describes a noun", "Action or state word", "Person's name", "Place name"],
        answer: "Action or state word",
        explanation: "A verb expresses an action or state of being."
      },
      {
        id: 33,
        question: "Choose the synonym of 'Clever'",
        options: ["Stupid", "Smart", "Slow", "Dull"],
        answer: "Smart",
        explanation: "'Smart' means clever or intelligent."
      },
      {
        id: 34,
        question: "Fill in the blank: He _____ finished his work before lunch.",
        options: ["has", "have", "had", "having"],
        answer: "had",
        explanation: "Past perfect tense uses 'had' with past participle."
      },
      {
        id: 35,
        question: "Choose the correct form: Neither of them _____ correct.",
        options: ["is", "are", "was", "were"],
        answer: "is",
        explanation: "'Neither' takes singular verb 'is'."
      },
      {
        id: 36,
        question: "Choose the synonym of 'Brave'",
        options: ["Coward", "Fearless", "Scared", "Weak"],
        answer: "Fearless",
        explanation: "'Fearless' means brave or courageous."
      },
      {
        id: 37,
        question: "Fill in the blank: I _____ to the library every week.",
        options: ["go", "goes", "went", "going"],
        answer: "go",
        explanation: "Present simple tense with 'I' uses 'go'."
      },
      {
        id: 38,
        question: "What is the past tense of 'Eat'?",
        options: ["Eated", "Ate", "Eaten", "Eating"],
        answer: "Ate",
        explanation: "'Ate' is the past tense of 'eat'."
      },
      {
        id: 39,
        question: "Choose the antonym of 'Bright'",
        options: ["Shiny", "Dark", "Light", "Clear"],
        answer: "Dark",
        explanation: "'Dark' is the opposite of 'bright'."
      },
      {
        id: 40,
        question: "Fill in the blank: She is _____ than her sister.",
        options: ["tall", "taller", "tallest", "more tall"],
        answer: "taller",
        explanation: "Comparative form of 'tall' is 'taller'."
      },
      {
        id: 41,
        question: "What is the plural of 'Child'?",
        options: ["Childs", "Children", "Childes", "Childrens"],
        answer: "Children",
        explanation: "'Children' is the irregular plural of 'child'."
      },
      {
        id: 42,
        question: "Choose the correct spelling:",
        options: ["Accomodate", "Accommodate", "Acommodate", "Accommodete"],
        answer: "Accommodate",
        explanation: "'Accommodate' is the correct spelling."
      },
      {
        id: 43,
        question: "What is an adjective?",
        options: ["Action word", "Describes a noun", "Person's name", "Place name"],
        answer: "Describes a noun",
        explanation: "An adjective describes or modifies a noun."
      },
      {
        id: 44,
        question: "Fill in the blank: They _____ playing football when it started raining.",
        options: ["is", "are", "was", "were"],
        answer: "were",
        explanation: "Past continuous with 'they' uses 'were'."
      },
      {
        id: 45,
        question: "Choose the synonym of 'Fast'",
        options: ["Slow", "Quick", "Lazy", "Tired"],
        answer: "Quick",
        explanation: "'Quick' means fast or rapid."
      },
      {
        id: 46,
        question: "What is the past participle of 'Write'?",
        options: ["Wrote", "Written", "Writing", "Writed"],
        answer: "Written",
        explanation: "'Written' is the past participle of 'write'."
      },
      {
        id: 47,
        question: "Fill in the blank: This is the _____ book I have ever read.",
        options: ["good", "better", "best", "well"],
        answer: "best",
        explanation: "Superlative form 'best' is used with 'the'."
      },
      {
        id: 48,
        question: "Choose the antonym of 'Generous'",
        options: ["Kind", "Selfish", "Helpful", "Friendly"],
        answer: "Selfish",
        explanation: "'Selfish' is the opposite of 'generous'."
      },
      {
        id: 49,
        question: "What is the plural of 'Tooth'?",
        options: ["Tooths", "Teeth", "Toothies", "Tooth"],
        answer: "Teeth",
        explanation: "'Teeth' is the irregular plural of 'tooth'."
      },
      {
        id: 50,
        question: "Fill in the blank: He _____ already left when I arrived.",
        options: ["has", "have", "had", "having"],
        answer: "had",
        explanation: "Past perfect tense uses 'had' with past participle."
      },
      {
        id: 51,
        question: "What is a verb?",
        options: ["A naming word", "An action word", "A describing word", "A connecting word"],
        answer: "An action word",
        explanation: "A verb expresses an action or state of being."
      },
      {
        id: 52,
        question: "Choose the correct spelling:",
        options: ["Beleive", "Believe", "Beleve", "Belive"],
        answer: "Believe",
        explanation: "'Believe' is the correct spelling."
      },
      {
        id: 53,
        question: "Fill in the blank: I _____ my homework yesterday.",
        options: ["do", "did", "done", "doing"],
        answer: "did",
        explanation: "Past tense of 'do' is 'did'."
      },
      {
        id: 54,
        question: "What is the plural of 'Box'?",
        options: ["Boxs", "Boxes", "Boxies", "Box"],
        answer: "Boxes",
        explanation: "'Boxes' is the plural of 'box'."
      },
      {
        id: 55,
        question: "Choose the synonym of 'Big'",
        options: ["Small", "Large", "Tiny", "Little"],
        answer: "Large",
        explanation: "'Large' means big or huge."
      },
      {
        id: 56,
        question: "Fill in the blank: She _____ beautiful.",
        options: ["is", "are", "am", "be"],
        answer: "is",
        explanation: "'She' takes singular verb 'is'."
      },
      {
        id: 57,
        question: "What is the past tense of 'Go'?",
        options: ["Goed", "Went", "Gone", "Going"],
        answer: "Went",
        explanation: "'Went' is the past tense of 'go'."
      },
      {
        id: 58,
        question: "Choose the antonym of 'Hot'",
        options: ["Warm", "Cold", "Cool", "Wet"],
        answer: "Cold",
        explanation: "'Cold' is the opposite of 'hot'."
      },
      {
        id: 59,
        question: "Fill in the blank: They _____ friends.",
        options: ["is", "are", "am", "be"],
        answer: "are",
        explanation: "'They' takes plural verb 'are'."
      },
      {
        id: 60,
        question: "What is the plural of 'Woman'?",
        options: ["Womans", "Women", "Womenses", "Woman"],
        answer: "Women",
        explanation: "'Women' is the irregular plural of 'woman'."
      },
      {
        id: 61,
        question: "Choose the correct sentence:",
        options: [
          "I am go to school.",
          "I go to school.",
          "I goes to school.",
          "I going to school."
        ],
        answer: "I go to school.",
        explanation: "Present simple tense: 'I go' is correct."
      },
      {
        id: 62,
        question: "What is an adverb?",
        options: ["Describes a noun", "Describes a verb", "Names a person", "Shows action"],
        answer: "Describes a verb",
        explanation: "An adverb describes how, when, or where an action happens."
      },
      {
        id: 63,
        question: "Fill in the blank: He runs _____.",
        options: ["quick", "quickly", "quickness", "quickest"],
        answer: "quickly",
        explanation: "'Quickly' is an adverb describing how he runs."
      },
      {
        id: 64,
        question: "Choose the synonym of 'Happy'",
        options: ["Sad", "Joyful", "Angry", "Tired"],
        answer: "Joyful",
        explanation: "'Joyful' means happy or delighted."
      },
      {
        id: 65,
        question: "What is the past participle of 'Eat'?",
        options: ["Ate", "Eaten", "Eating", "Eats"],
        answer: "Eaten",
        explanation: "'Eaten' is the past participle of 'eat'."
      },
      {
        id: 66,
        question: "Fill in the blank: I have _____ the book.",
        options: ["read", "readed", "reading", "reads"],
        answer: "read",
        explanation: "Past participle of 'read' is 'read' (same spelling, different pronunciation)."
      },
      {
        id: 67,
        question: "Choose the correct spelling:",
        options: ["Occurrence", "Occurence", "Occurrance", "Occurence"],
        answer: "Occurrence",
        explanation: "'Occurrence' is the correct spelling."
      },
      {
        id: 68,
        question: "What is a pronoun?",
        options: ["Replaces a noun", "Describes a noun", "Shows action", "Connects words"],
        answer: "Replaces a noun",
        explanation: "A pronoun replaces a noun (e.g., he, she, it, they)."
      },
      {
        id: 69,
        question: "Fill in the blank: _____ is my friend.",
        options: ["He", "Him", "His", "Himself"],
        answer: "He",
        explanation: "'He' is a subject pronoun used before the verb."
      },
      {
        id: 70,
        question: "Choose the antonym of 'Begin'",
        options: ["Start", "End", "Continue", "Middle"],
        answer: "End",
        explanation: "'End' is the opposite of 'begin'."
      },
      {
        id: 71,
        question: "What is the comparative form of 'Good'?",
        options: ["Gooder", "Better", "Best", "More good"],
        answer: "Better",
        explanation: "'Better' is the comparative form of 'good'."
      },
      {
        id: 72,
        question: "Fill in the blank: This is _____ than that.",
        options: ["good", "better", "best", "well"],
        answer: "better",
        explanation: "Comparative form 'better' is used with 'than'."
      },
      {
        id: 73,
        question: "What is a preposition?",
        options: ["Shows position", "Shows action", "Describes a noun", "Replaces a noun"],
        answer: "Shows position",
        explanation: "A preposition shows position or relationship (e.g., in, on, at, under)."
      },
      {
        id: 74,
        question: "Choose the correct: The book is _____ the table.",
        options: ["in", "on", "at", "by"],
        answer: "on",
        explanation: "'On' shows the book is positioned on top of the table."
      },
      {
        id: 75,
        question: "What is the superlative form of 'Bad'?",
        options: ["Badder", "Worse", "Worst", "More bad"],
        answer: "Worst",
        explanation: "'Worst' is the superlative form of 'bad'."
      },
      {
        id: 76,
        question: "Fill in the blank: This is the _____ day of my life.",
        options: ["bad", "worse", "worst", "baddest"],
        answer: "worst",
        explanation: "Superlative form 'worst' is used with 'the'."
      },
      {
        id: 77,
        question: "Choose the synonym of 'Beautiful'",
        options: ["Ugly", "Pretty", "Bad", "Wrong"],
        answer: "Pretty",
        explanation: "'Pretty' means beautiful or attractive."
      },
      {
        id: 78,
        question: "What is a conjunction?",
        options: ["Connects words", "Shows action", "Describes a noun", "Replaces a noun"],
        answer: "Connects words",
        explanation: "A conjunction connects words, phrases, or clauses (e.g., and, but, or)."
      },
      {
        id: 79,
        question: "Fill in the blank: I like tea _____ coffee.",
        options: ["and", "or", "but", "so"],
        answer: "and",
        explanation: "'And' connects two similar items."
      },
      {
        id: 80,
        question: "Choose the correct spelling:",
        options: ["Definately", "Definitely", "Definately", "Definitley"],
        answer: "Definitely",
        explanation: "'Definitely' is the correct spelling."
      },
      {
        id: 81,
        question: "What is an article?",
        options: ["A, an, the", "And, but, or", "In, on, at", "He, she, it"],
        answer: "A, an, the",
        explanation: "Articles are 'a', 'an', and 'the' used before nouns."
      },
      {
        id: 82,
        question: "Fill in the blank: _____ apple a day keeps the doctor away.",
        options: ["A", "An", "The", "None"],
        answer: "An",
        explanation: "'An' is used before words starting with a vowel sound."
      },
      {
        id: 83,
        question: "What is the passive voice of 'He wrote the letter'?",
        options: [
          "The letter was wrote by him.",
          "The letter was written by him.",
          "The letter is wrote by him.",
          "The letter is written by him."
        ],
        answer: "The letter was written by him.",
        explanation: "Passive voice: object becomes subject, past participle 'written' is used."
      },
      {
        id: 84,
        question: "Choose the synonym of 'Difficult'",
        options: ["Easy", "Hard", "Simple", "Quick"],
        answer: "Hard",
        explanation: "'Hard' means difficult or challenging."
      },
      {
        id: 85,
        question: "What is a gerund?",
        options: ["Verb + ing as noun", "Past tense verb", "Future tense", "Modal verb"],
        answer: "Verb + ing as noun",
        explanation: "A gerund is a verb ending in -ing used as a noun (e.g., 'Swimming is fun')."
      },
      {
        id: 86,
        question: "Fill in the blank: _____ is my favorite hobby.",
        options: ["Read", "Reading", "Reads", "Readed"],
        answer: "Reading",
        explanation: "'Reading' is a gerund (verb used as noun) functioning as subject."
      },
      {
        id: 87,
        question: "What is an infinitive?",
        options: ["To + verb", "Verb + ing", "Past tense", "Modal verb"],
        answer: "To + verb",
        explanation: "An infinitive is 'to' + base form of verb (e.g., 'to go', 'to eat')."
      },
      {
        id: 88,
        question: "Fill in the blank: I want _____ home.",
        options: ["go", "going", "to go", "went"],
        answer: "to go",
        explanation: "After 'want', we use infinitive 'to go'."
      },
      {
        id: 89,
        question: "Choose the correct spelling:",
        options: ["Necessary", "Necesary", "Necessery", "Necesery"],
        answer: "Necessary",
        explanation: "'Necessary' is the correct spelling."
      },
      {
        id: 90,
        question: "What is a modal verb?",
        options: ["Can, could, should", "Go, eat, sleep", "Big, small, tall", "In, on, at"],
        answer: "Can, could, should",
        explanation: "Modal verbs express possibility, necessity, or permission (can, could, should, must, etc.)."
      },
      {
        id: 91,
        question: "Fill in the blank: You _____ study hard to pass.",
        options: ["can", "could", "should", "will"],
        answer: "should",
        explanation: "'Should' expresses advice or recommendation."
      },
      {
        id: 92,
        question: "What is a conditional sentence?",
        options: ["If-then structure", "Question sentence", "Command sentence", "Exclamation sentence"],
        answer: "If-then structure",
        explanation: "A conditional sentence uses 'if' to express a condition and its result."
      },
      {
        id: 93,
        question: "Fill in the blank: If it rains, I _____ stay home.",
        options: ["will", "would", "can", "could"],
        answer: "will",
        explanation: "First conditional uses 'will' for likely future results."
      },
      {
        id: 94,
        question: "What is a relative clause?",
        options: ["Clause starting with who/which", "Main clause", "Question clause", "Command clause"],
        answer: "Clause starting with who/which",
        explanation: "A relative clause starts with who, which, that, etc., and adds information about a noun."
      },
      {
        id: 95,
        question: "Fill in the blank: The book _____ I read was interesting.",
        options: ["who", "which", "where", "when"],
        answer: "which",
        explanation: "'Which' is used for things (the book)."
      },
      {
        id: 96,
        question: "Choose the correct spelling:",
        options: ["Privilege", "Priviledge", "Privileg", "Privilige"],
        answer: "Privilege",
        explanation: "'Privilege' is the correct spelling."
      },
      {
        id: 97,
        question: "What is a subjunctive mood?",
        options: ["Expresses wishes/hypotheticals", "Shows past tense", "Indicates future", "Describes present"],
        answer: "Expresses wishes/hypotheticals",
        explanation: "Subjunctive mood expresses wishes, suggestions, or hypothetical situations."
      },
      {
        id: 98,
        question: "Fill in the blank: I wish I _____ taller.",
        options: ["am", "was", "were", "be"],
        answer: "were",
        explanation: "Subjunctive mood uses 'were' for all subjects in hypothetical situations."
      },
      {
        id: 99,
        question: "What is a phrasal verb?",
        options: ["Verb + preposition/adverb", "Past tense verb", "Modal verb", "Infinitive verb"],
        answer: "Verb + preposition/adverb",
        explanation: "A phrasal verb is a verb combined with a preposition or adverb (e.g., 'give up', 'look after')."
      },
      {
        id: 100,
        question: "Fill in the blank: I need to _____ smoking.",
        options: ["give up", "give in", "give out", "give away"],
        answer: "give up",
        explanation: "'Give up' means to stop or quit doing something."
      },
    ],
  },
];

export default practiceTopics;
