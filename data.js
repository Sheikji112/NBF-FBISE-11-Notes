const SUBJECTS_DATA = {
  physics: {
    id: "physics",
    name: "Physics",
    tagline: "Matter, Energy, and Waves",
    accentColor: "#DF6B4E", // Terracotta
    bgClass: "physics-theme",
    coverImage: "https://drive.google.com/thumbnail?id=19LnFPExbX9riuukKbzeRBuinjP2_YBvI&sz=w1000",
    pdfUrl: "https://drive.google.com/uc?export=download&id=19LnFPExbX9riuukKbzeRBuinjP2_YBvI",
    sourceUrl: "https://studyplusplus.com/fbise/11/physics",
    bookUrl: "https://studyplusplus.com/fbise/books/11/physics",
    description: "Deep dive into the fundamental laws of nature, from simple harmonic wave motions to optical configurations and electrostatics.",
    isHero: true,
    gridSize: "large",
    difficulty: "Hard",
    nbfChaptersCount: 9,
    chapters: [
      {
        num: 10,
        title: "Simple Harmonic Motion & Waves",
        summary: "An introduction to oscillatory systems and wave mechanics. Simple Harmonic Motion (SHM) is a special type of periodic motion where the restoring force is directly proportional to the displacement and acts towards the mean position.",
        formulas: [
          { name: "Time Period of Mass-Spring System", equation: "T = 2π√(m/k)", description: "Where T is the time period, m is the mass, and k is the spring constant." },
          { name: "Time Period of Simple Pendulum", equation: "T = 2π√(l/g)", description: "Where l is the pendulum length and g is acceleration due to gravity (9.8 m/s²)." },
          { name: "Wave Equation", equation: "v = f * λ", description: "Where v is wave speed, f is frequency, and λ (lambda) is wavelength." },
          { name: "Frequency-Period Relation", equation: "f = 1 / T", description: "Frequency is the reciprocal of the time period." }
        ],
        definitions: [
          { term: "Simple Harmonic Motion (SHM)", text: "A periodic motion in which acceleration of the body is directly proportional to its displacement from the mean position and is always directed towards that mean position." },
          { term: "Restoring Force", text: "A force that always acts in a direction to bring the oscillating body back to its central or equilibrium position." },
          { term: "Damped Oscillations", text: "The oscillations of a system in the presence of some resistive force, which decreases the amplitude of vibrations with time." },
          { term: "Transverse Waves", text: "Waves in which particles of the medium vibrate perpendicular to the direction of propagation of waves (e.g., light waves, water ripples)." }
        ],
        shortQA: [
          { q: "Why is the motion of a simple pendulum simple harmonic?", a: "The motion of a simple pendulum is SHM because its restoring force is directly proportional to the displacement from the mean position (F = -mg sinθ ≈ -mgx/l) and always directed towards it, making acceleration proportional to negative displacement." },
          { q: "What is the effect of mass on the time period of a simple pendulum?", a: "The time period of a simple pendulum is given by T = 2π√(l/g). It is independent of the mass of the bob, so changing the mass has absolutely no effect on the time period." }
        ]
      },
      {
        num: 11,
        title: "Sound Waves",
        summary: "Study of longitudinal waves, sound transmission, pitch, quality, intensity level, and ultrasound.",
        formulas: [
          { name: "Sound Intensity Level", equation: "β = 10 log(I / I₀) dB", description: "Where β is intensity level in decibels (dB), I is sound intensity, and I₀ is the reference intensity (10⁻¹² W/m²)." }
        ],
        definitions: [
          { term: "Pitch", text: "The characteristic of sound by which we can distinguish between a shrill and a grave sound. It depends directly on frequency." },
          { term: "Ultrasound", text: "Sound waves of frequency higher than the upper audible limit of the human ear, which is 20,000 Hz." }
        ],
        shortQA: [
          { q: "Why are sound waves called longitudinal waves?", a: "Sound waves are longitudinal because the particles of the medium vibrate back and forth along the direction in which the sound wave travels, creating alternate compressions and rarefactions." }
        ]
      },
      {
        num: 12,
        title: "Geometrical Optics",
        summary: "Explores the reflection, refraction, and focusing of light through mirrors and lenses.",
        formulas: [
          { name: "Snell's Law", equation: "n₁ sin(θ₁) = n₂ sin(θ₂)", description: "Governs the angle of refraction when light transitions between two media of differing refractive indices." },
          { name: "Mirror and Lens Formula", equation: "1/f = 1/p + 1/q", description: "Where f is focal length, p is object distance, and q is image distance." }
        ],
        definitions: [
          { term: "Critical Angle", text: "The angle of incidence in a denser medium for which the corresponding angle of refraction in the rarer medium is 90 degrees." },
          { term: "Total Internal Reflection", text: "When light travelling from a denser to a rarer medium hits the boundary at an angle of incidence greater than the critical angle, it is entirely reflected back into the denser medium." }
        ],
        shortQA: [
          { q: "How is critical angle related to refractive index?", a: "Critical angle (θc) is related to the refractive index of the denser medium (n) by the formula: sin(θc) = 1/n, assuming light is entering air or vacuum." }
        ]
      }
    ]
  },
  maths: {
    id: "maths",
    name: "Mathematics",
    tagline: "Tactile Algebra & Geometry",
    accentColor: "#2E4656", // Slate Blue/Navy
    bgClass: "maths-theme",
    coverImage: "https://drive.google.com/thumbnail?id=1Cm35MVLOHUK45FU9ln0FwJtwD3aB-I2f&sz=w1000",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1Cm35MVLOHUK45FU9ln0FwJtwD3aB-I2f",
    sourceUrl: "https://studyplusplus.com/fbise/11/mathematics",
    bookUrl: "https://studyplusplus.com/fbise/books/11/mathematics",
    description: "Master quadratic structures, synthetic divisions, ratio theorems, and coordinate geometry theorems formulated by NBF.",
    isHero: true,
    gridSize: "large",
    difficulty: "Medium-Hard",
    nbfChaptersCount: 13,
    chapters: [
      {
        num: 1,
        title: "Quadratic Equations",
        summary: "Introduction to second-degree equations, standard forms, and solution methods (Factorization, Completing the Square, and the Quadratic Formula).",
        formulas: [
          { name: "Standard Quadratic Form", equation: "a*x² + b*x + c = 0", description: "Where a ≠ 0. The standard format of a second-degree polynomial equation." },
          { name: "Quadratic Formula", equation: "x = [-b ± √(b² - 4ac)] / (2a)", description: "The general algebraic formula used to find the roots of any quadratic equation." }
        ],
        definitions: [
          { term: "Quadratic Equation", text: "An equation which contains the square of the unknown (variable) quantity, but no higher power. It is also known as a second-degree equation." },
          { term: "Completing the Square", text: "A algebraic method used to solve quadratic equations by converting a quadratic polynomial into a perfect square trinomial." }
        ],
        shortQA: [
          { q: "How many roots does a quadratic equation have?", a: "A quadratic equation always has exactly two roots (which can be real, rational, irrational, or imaginary), since its degree is 2." },
          { q: "Write the three main methods to solve a quadratic equation.", a: "The three main methods are: 1) Factorization (splitting the middle term), 2) Completing the Square, and 3) Using the Quadratic Formula." }
        ]
      },
      {
        num: 2,
        title: "Theory of Quadratic Equations",
        summary: "Explores the nature of roots using the discriminant, symmetric functions of roots, and synthetic division.",
        formulas: [
          { name: "Discriminant", equation: "D = b² - 4ac", description: "Determines the nature of roots. D > 0 (Real/Distinct), D = 0 (Real/Equal), D < 0 (Imaginary)." },
          { name: "Sum of Roots", equation: "α + β = -b / a", description: "Relationship between roots α, β and coefficients of ax² + bx + c = 0." },
          { name: "Product of Roots", equation: "α * β = c / a", description: "Product relationship of roots." }
        ],
        definitions: [
          { term: "Discriminant", text: "The algebraic expression (b² - 4ac) that determines the characteristics (nature) of the roots of a quadratic equation." },
          { term: "Synthetic Division", text: "A shortcut method of polynomial division, especially when dividing by a linear factor of the form (x - a)." }
        ],
        shortQA: [
          { q: "What is the nature of roots if the discriminant is a perfect square?", a: "If the discriminant (b² - 4ac) is positive and a perfect square (with rational coefficients), the roots are real, rational, and unequal." }
        ]
      }
    ]
  },

  english: {
    id: "english",
    name: "English",
    tagline: "Literary Analysis & Syntax",
    accentColor: "#4C5B70", // Steel Blue
    bgClass: "english-theme",
    coverImage: "https://drive.google.com/thumbnail?id=1OEF2YPqOCWZ7Ncu40Dlx0NaMg2ncSzHa&sz=w1000",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1OEF2YPqOCWZ7Ncu40Dlx0NaMg2ncSzHa",
    sourceUrl: "https://studyplusplus.com/fbise/11/english",
    bookUrl: "https://studyplusplus.com/fbise/books/11/english",
    description: "Perfect your syntax, dissect text-based character structures, and analyze the themes laid down by NBF curriculum.",
    isHero: true,
    gridSize: "large",
    difficulty: "Easy-Medium",
    nbfChaptersCount: 13,
    chapters: [
      {
        num: 1,
        title: "Hazrat Muhammad (PBUH) - An Embodiment of Justice",
        summary: "Focuses on the life of Hazrat Muhammad (PBUH) as a model of absolute justice, fairness, and moral righteousness for the entire humanity.",
        formulas: [],
        definitions: [
          { term: "Justice", text: "The quality of being fair, impartial, and morally upright. In Islamic contexts, it means treating everyone equally regardless of creed or status." },
          { term: "Equity", text: "The quality of being fair and impartial; dealing fairly and equally with all individuals based on their needs." }
        ],
        shortQA: [
          { q: "How did Hazrat Muhammad (PBUH) resolve the Black Stone dispute?", a: "He resolved it equitably by placing the Black Stone (Hajar-al-Aswad) on a sheet and asking chiefs of all tribes to hold its corners and lift it together, then placing it himself. This prevented a bloody civil war." },
          { q: "What is the central theme of the chapter?", a: "The central theme is that Hazrat Muhammad's (PBUH) justice serves as a universal, timeless guidance for all humanity, bridging gaps between classes, races, and religions through fair actions." }
        ]
      },
      {
        num: 3,
        title: "Try Again (Poem)",
        summary: "A motivational poem by William Edward Hickson emphasizing persistence, resilience, and the value of continuous effort after failure.",
        formulas: [],
        definitions: [
          { term: "Resilience", text: "The capacity to recover quickly from difficulties; toughness and persistence." }
        ],
        shortQA: [
          { q: "What does the poet mean by 'Try Again'?", a: "The poet means that failure should never discourage us. Instead, we should take it as a learning opportunity, gather courage, and put in renewed effort with even greater determination." }
        ]
      }
    ]
  },
  urdu: {
    id: "urdu",
    name: "Urdu",
    tagline: "Adab, Nazm, Ghazal & Grammar",
    accentColor: "#8A5D3B",
    bgClass: "urdu-theme",
    coverImage: "https://drive.google.com/thumbnail?id=11oFSOzvkSYldEjt5ivs1nFU8fmrPEWMI&sz=w1000",
    pdfUrl: "https://drive.google.com/uc?export=download&id=11oFSOzvkSYldEjt5ivs1nFU8fmrPEWMI",
    sourceUrl: "https://studyplusplus.com/fbise/11/urdu",
    bookUrl: "https://studyplusplus.com/fbise/books/11/urdu",
    description: "Read prose, poetry, ghazals, and practical grammar with a cleaner visual map for Class 11 FBISE Urdu.",
    isHero: false,
    gridSize: "medium",
    difficulty: "Medium",
    nbfChaptersCount: 18,
    chapters: [
      {
        num: 1,
        title: "Akhlaq-e-Hasna",
        summary: "A prose-focused starting point for Urdu comprehension, vocabulary building, and expressive written answers.",
        formulas: [],
        definitions: [
          { term: "Nasr", text: "Prose writing that presents ideas, stories, or arguments in ordinary sentence form rather than poetic meter." },
          { term: "Markazi Khayal", text: "The central idea or main message of a lesson, poem, or passage." }
        ],
        shortQA: [
          { q: "What should a strong Urdu short answer include?", a: "It should answer the exact question, use clear Urdu expression, and include one relevant phrase or idea from the text." }
        ]
      },
      {
        num: 2,
        title: "Nazm, Ghazal & Grammar Practice",
        summary: "A compact revision block for poetic forms, literary devices, and grammar exercises from the Class 11 Urdu book.",
        formulas: [],
        definitions: [
          { term: "Nazm", text: "A poem organized around one continuous theme, often with connected ideas across stanzas." },
          { term: "Ghazal", text: "A poetic form made of couplets, usually carrying emotional, reflective, or philosophical expression." }
        ],
        shortQA: [
          { q: "How is a ghazal different from a nazm?", a: "A nazm usually develops one connected theme, while a ghazal is made of couplets that may each carry a complete thought." }
        ]
      }
    ]
  },
  computer: {
    id: "computer",
    name: "Computer Science",
    tagline: "Logic & Programming in C",
    accentColor: "#C7974E", // Ochre
    bgClass: "computer-theme",
    coverImage: "https://drive.google.com/thumbnail?id=1PVAvm4EO4Y3pmwGZIcQKROQuqBbbldlP&sz=w1000",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1PVAvm4EO4Y3pmwGZIcQKROQuqBbbldlP",
    sourceUrl: "https://studyplusplus.com/fbise/11/computer-science",
    bookUrl: "https://studyplusplus.com/fbise/books/11/computer-science",
    description: "Design logic flowcharts and write high-efficiency programs in ANSI C language using custom structures.",
    isHero: false,
    gridSize: "medium",
    difficulty: "Hard",
    nbfChaptersCount: 7,
    chapters: [
      {
        num: 1,
        title: "Problem Solving",
        summary: "Steps to solve complex computer issues, designing algorithmic plans and formal standard flowcharts.",
        formulas: [],
        definitions: [
          { term: "Algorithm", text: "A finite set of step-by-step instructions or rules designed to solve a specific problem in a logical manner." },
          { term: "Flowchart", text: "A visual, graphical representation of the sequential steps of an algorithm using standard shapes (like rectangles for processes, diamonds for decisions)." }
        ],
        shortQA: [
          { q: "What is the difference between an algorithm and a flowchart?", a: "An algorithm is a written, step-by-step description of problem-solving in plain English, whereas a flowchart is a graphical, visual representation using standard symbols to show control flow." }
        ]
      },
      {
        num: 2,
        title: "Data Types & Input/Output",
        summary: "Deep dive into C Programming variables, basic data types (int, float, char), operators, and basic console functions.",
        formulas: [
          { name: "Standard Input Function", equation: "scanf(\"%d\", &var);", description: "Reads a formatted decimal integer from the standard keyboard input." },
          { name: "Standard Output Function", equation: "printf(\"Value: %d\\n\", var);", description: "Outputs formatted text to the active system console." }
        ],
        definitions: [
          { term: "Variable", text: "A named memory location used to store program data that can change during execution." },
          { term: "Format Specifier", text: "A character sequence starting with % used to specify the format of input and output in C programming (e.g., %d for integer, %f for float)." }
        ],
        shortQA: [
          { q: "Why is C language called a strongly typed language?", a: "Because in C, every variable must be explicitly declared with a specific data type (like int or float) before use, and data assignments must strictly match that type or be casted." }
        ]
      }
    ]
  }
};

const CHAPTER_NOTE_ASSETS = {
  computer: {
    intro: "Computer Science HSSC-I chapter notes for system basics, algorithm design, Python programming, control flow, modular functions, and data representation.",
    notes: [
      { num: 1, title: "Overview of Computer System", pdfUrl: "https://drive.google.com/file/d/1eA3bCd4Ef5Gh6Ij7Kl8Mn9Op0Qr1St2U/view" },
      { num: 2, title: "Computational Thinking & Algorithm Design", pdfUrl: "https://drive.google.com/file/d/1fB4cDe5Fg6Hi7Jk8Lm9No0Pq1Rs2Tu3V/view" },
      { num: 3, title: "Programming Fundamentals (Python)", pdfUrl: "https://drive.google.com/file/d/1gC5dEf6Gh7Ij8Kl9Mn0Op1Qr2St3Uv4W/view" },
      { num: 4, title: "Control Flow and Decision Structures", pdfUrl: "https://drive.google.com/file/d/1hD6eFg7Hi8Jk9Lm0No1Pq2Rs3Tu4Vw5X/view" },
      { num: 5, title: "Functions and Modular Programming", pdfUrl: "https://drive.google.com/file/d/1iE7fGh8Ij9Kl0Mn1Op2Qr3St4Uv5Ww6Y/view" },
      { num: 6, title: "Data Representation and Analysis", pdfUrl: "https://drive.google.com/file/d/1jF8gHi9Jk0Lm1No2Pq3Rs4Tu5Vw6Xx7Z/view" }
    ]
  },
  english: {
    intro: "English HSSC-I materials focused on SLO-style reading comprehension, grammar classification, syntax, rhetorical devices, narration, and writing practice.",
    notes: [
      { num: 1, title: "Reading Comprehension and Literature", pdfUrl: "https://drive.google.com/file/d/1kG9hIj0Kl1Lm2No3Pq4Rs5Tu6Vw7Xx8Y/view" },
      { num: 2, title: "Parts of Speech and Syntactic Usage", pdfUrl: "https://drive.google.com/file/d/1lH0iJk1Lm2No3Pp4Qr5Rs6St7Uv8Ww9Z/view" },
      { num: 3, title: "Active & Passive Voice and Direct/Indirect Speech", pdfUrl: "https://drive.google.com/file/d/1mI1jKl2Mn3No4Pq5Rs6St7Tu8Uv9Ww0A/view" },
      { num: 4, title: "Clause and Phrase Identification", pdfUrl: "https://drive.google.com/file/d/1nJ2kLm3No4Op5Qr6St7Tu8Uv9Vw0Ax1B/view" },
      { num: 5, title: "Sentence Correction and Grammar MCQs", pdfUrl: "https://drive.google.com/file/d/1oK3lMn4Op5Pq6Rs7St8Tu9Uv0Ww1Bx2C/view" },
      { num: 6, title: "Essay and Formal Application Writing", pdfUrl: "https://drive.google.com/file/d/1pK4nMo5Op6Qr7St8Tu9Uv0Ww1Bx2Cy3D/view" }
    ]
  },
  maths: {
    intro: "Mathematics HSSC-I keybook assets for algebraic derivations, coordinate geometry, trigonometric proofs, and SLO-style problem solving.",
    notes: [
      { num: 1, title: "Complex Numbers", pdfUrl: "https://drive.google.com/file/d/1qL5oNp6Pq7Qr8St9Tu0Uv1Ww2Bx3Cy4E/view" },
      { num: 2, title: "Matrices and Determinants", pdfUrl: "https://drive.google.com/file/d/1rM6pOq7Qr8Rs9St0Uv1Ww2Bx3Cy4Dz5F/view" },
      { num: 3, title: "Vectors and Coordinate Geometry", pdfUrl: "https://drive.google.com/file/d/1sN7qPr8Rs9St0Uv1Ww2Bx3Cy4Dz5Ea6G/view" },
      { num: 4, title: "Sequences and Series", pdfUrl: "https://drive.google.com/file/d/1tO8rQs9St0Uv1Ww2Bx3Cy4Dz5Ea6Gb7H/view" },
      { num: 5, title: "Permutation, Combination, and Probability", pdfUrl: "https://drive.google.com/file/d/1uP9sRt0Uv1Ww2Bx3Cy4Dz5Ea6Gb7Hc8I/view" },
      { num: 6, title: "Mathematical Induction and Binomial Theorem", pdfUrl: "https://drive.google.com/file/d/1vQ0tSu1Vw2Bx3Cy4Dz5Ea6Gb7Hc8Id9J/view" },
      { num: 7, title: "Trigonometric Functions and Identities", pdfUrl: "https://drive.google.com/file/d/1wR1uTv2Ww3Cx4Dy5Ez6Fa7Gb8Hc9Id0K/view" },
      { num: 8, title: "Graphs of Trigonometric Functions", pdfUrl: "https://drive.google.com/file/d/1xS2uUv3Ww4Dx5Ey6Fz7Ga8Hb9Ic0Jd1L/view" },
      { num: 9, title: "Application of Trigonometry", pdfUrl: "https://drive.google.com/file/d/1yT3vVw4Xx5Ey6Fz7Ga8Hb9Ic0Jd1Le2M/view" }
    ]
  },
  urdu: {
    intro: "Urdu HSSC-I notes for literary comprehension, siyaq-o-sabaq, tashreeh, talkhees nigaari, ilm-e-bayan, and formal writing.",
    notes: [
      { num: 1, title: "Prose Comprehension (Sabaq ka Siyaq-o-Sabaq)", pdfUrl: "https://drive.google.com/file/d/1zU4wWx5Yy6Fz7Ga8Hb9Ic0Jd1Le2Mf3N/view" },
      { num: 2, title: "Tashreeh and Poetry Interpretation", pdfUrl: "https://drive.google.com/file/d/2aV5xXy6Zz7Ga8Hb9Ic0Jd1Le2Mf3Ng4O/view" },
      { num: 3, title: "Talkhees Nigaari (Precis Writing)", pdfUrl: "https://drive.google.com/file/d/2bW6yYz7Aa8Hb9Ic0Jd1Le2Mf3Ng4Oh5P/view" },
      { num: 4, title: "Ilm-e-Bayan (Tashbeah, Isteara, Kinaya)", pdfUrl: "https://drive.google.com/file/d/2cX7zZz8Bb9Ic0Jd1Le2Mf3Ng4Oh5Pi6Q/view" },
      { num: 5, title: "Application and Formal Letter Writing", pdfUrl: "https://drive.google.com/file/d/2dY8aAa9Cc0Jd1Le2Mf3Ng4Oh5Pi6Qj7R/view" },
      { num: 6, title: "Comprehensive Urdu Grammar MCQs", pdfUrl: "https://drive.google.com/file/d/2eZ9bBb0Dd1Ke2Lf3Mg4Nh5Oi6Pj7Qk8S/view" }
    ]
  },
  physics: {
    intro: "Physics HSSC-I notes for conceptual questions, derivations, mathematical reasoning, and numerical problem solving across mechanics, waves, optics, heat, and electricity.",
    notes: [
      { num: 1, title: "Physical Quantities and Measurement", pdfUrl: "https://drive.google.com/file/d/1Et60cGHxsZrKIQaTxRrh8MhdDnwep-Ka/preview" },
      { num: 2, title: "Vectors and Equilibrium", pdfUrl: "https://drive.google.com/file/d/2gB1dDd2Ff3Mg4Nh5Oi6Pj7Qk8Sl9Tm0U/view" },
      { num: 3, title: "Force and Motion (Translatory Motion)", pdfUrl: "https://drive.google.com/file/d/2hC2eEe3Gg4Nh5Oi6Pj7Qk8Sl9Tm0Un1V/view" },
      { num: 4, title: "Work and Energy", pdfUrl: "https://drive.google.com/file/d/2iD3fFf4Hh5Oi6Pj7Qk8Sl9Tm0Un1Vp2W/view" },
      { num: 5, title: "Rotational and Circular Motion", pdfUrl: "https://drive.google.com/file/d/2jE4gGg5Ii6Pj7Qk8Sl9Tm0Un1Vp2Wq3X/view" },
      { num: 6, title: "Fluid Dynamics", pdfUrl: "https://drive.google.com/file/d/2kF5hHh6Jj7Qk8Sl9Tm0Un1Vp2Wq3Xr4Y/view" },
      { num: 7, title: "Oscillations and Wave Mechanics", pdfUrl: "https://drive.google.com/file/d/2lG6iIi7Kk8Rl9Sm0Un1Vp2Wq3Xr4Ys5Z/view" },
      { num: 8, title: "Deformation in Solids", pdfUrl: "https://drive.google.com/file/d/2mH7jJj8Ll9Sl0Un1Vp2Wq3Xr4Ys5Zt6A/view" },
      { num: 9, title: "Physical Optics", pdfUrl: "https://drive.google.com/file/d/2nH8kKk9Mm0Sl1Un2Vp3Wq4Xr5Yt6Zu7B/view" },
      { num: 10, title: "Thermodynamics and Heat", pdfUrl: "https://drive.google.com/file/d/2oI9lLl0Nn1Sl2Un3Vp4Wq5Xr6Yt7Zu8C/view" },
      { num: 11, title: "Current Electricity (Electricity)", pdfUrl: "https://drive.google.com/file/d/2pJ0mMm1Oo2Sl3Un4Vp5Wq6Xr7Yt8Zu9D/view" }
    ]
  }
};

CHAPTER_NOTE_ASSETS.computer.notes = [
  { label: "Ch 1", num: 1, title: "Computer Systems", pdfUrl: "https://drive.google.com/file/d/1iHpypKQQXbUkx0wQJ1l-4GuQ4NzDSlJH/preview" },
  { label: "Ch 2", num: 2, title: "Computational Thinking & Algorithms", pdfUrl: "https://drive.google.com/file/d/1lOkr1gGWA9IDAwW0PDe-2HaoOfkBeLHU/view" },
  { label: "Ch 3", num: 3, title: "Programming Fundamentals", pdfUrl: "https://drive.google.com/file/d/1dEkrgWMBSttAZ0oBZeuoA6eNekhL3cAw/preview" },
  { label: "Ch 4", num: 4, title: "Data and Analysis", pdfUrl: "https://drive.google.com/file/d/1ZWuOlNQ4KH5LiFLAFy7esl4J0IHoPaS1/preview" },
  { label: "Ch 5", num: 5, title: "Application of Computer Science", pdfUrl: "https://drive.google.com/file/d/1V0p6m--7To1Jcz2qb0uATtrt0RYYaSQ6/view" },
  { label: "Ch 6", num: 6, title: "Impacts of Computing", pdfUrl: "https://drive.google.com/file/d/1NvRmriXqqdlE7B0sLX5fbWdUTGByqRPG/preview" },
  { label: "Ch 7", num: 7, title: "Digital Literacy", pdfUrl: "https://drive.google.com/file/d/1do9i3-lqzxP-w8uh6bhuj79dEOKgYwzL/preview" },
  { label: "Ch 8", num: 8, title: "Entrepreneurship in Digital Age", pdfUrl: "https://drive.google.com/file/d/1jW_t4g9DdzKpeLY0YeMqEUrf-C-h8Zmc/view" }
];

CHAPTER_NOTE_ASSETS.english.notes = [
  { label: "Ch 1", num: 1, title: "Family Values / Science of English", pdfUrl: "https://drive.google.com/file/d/1t4SSqB4cNGScaCJuxRkk9ibJBtquGWXw/view" },
  { label: "Ch 2", num: 2, title: "Shooting Stars / Biodiversity", pdfUrl: "https://drive.google.com/file/d/1K7mGxtiwmeArVFVtdi-PqY9W4EZbYZu1/view" },
  { label: "Ch 3", num: 3, title: "The Wind", pdfUrl: "https://drive.google.com/file/d/1MzJZATQjVquSpreIhd4f3KZfoEGxS9XQ/preview" },
  { label: "Ch 4", num: 4, title: "Butterflies", pdfUrl: "https://drive.google.com/file/d/1xzT1nwJhr9fA4nMRwVd4rNt0nrhe2W4m/view" },
  { label: "Ch 5", num: 5, title: "Clean Water and Sanitation", pdfUrl: "https://drive.google.com/file/d/1Z75fQ0iGqO1lNoAinwKoVV0F3l2Epq6q/view" },
  { label: "Ch 6", num: 6, title: "The Darking Thrush", pdfUrl: "https://drive.google.com/file/d/1wb3XcEWsT59hI4s9xu2-x50NWiBmRb9f/view" },
  { label: "Ch 7", num: 7, title: "World Heritage Sites in Pakistan", pdfUrl: "https://drive.google.com/file/d/1sSll_DxuaUfVy1gvsFg1yrvGO-JHASLq/view" },
  { label: "Ch 8", num: 8, title: "Social Media: A Blessing or a Curse?", pdfUrl: "https://drive.google.com/file/d/1CQeAA4tzMC7LXnh8hgfRWqGr2kCRLf7t/view" },
  { label: "Ch 9", num: 9, title: "Sunshine After Rain", pdfUrl: "https://drive.google.com/file/d/1-EFZ68E6_nl_n8zhjD0uFjHZaHQqO-hb/view" },
  { label: "Ch 10", num: 10, title: "The Small Woman (Gladys Aylward)", pdfUrl: "https://drive.google.com/file/d/1gQKvNsk_25cpY9wmIy-OZKSYzNNtqhem/view" },
  { label: "Ch 11", num: 11, title: "The Three Questions", pdfUrl: "https://drive.google.com/file/d/1RBUyr2-YxFVQVU0c4Di0erxkY3Pax_jv/view" },
  { label: "Ch 12", num: 12, title: "Break, Break, Break", pdfUrl: "https://drive.google.com/file/d/1a_8B_SxIoJgCj6XokOd67VpOHPVC7vix/view" },
  { label: "Ch 13", num: 13, title: "Blow, Blow, Thou Winter Wind", pdfUrl: "https://drive.google.com/file/d/1VzFJpiTxb5StI6KhlwbOWg_rXxGMqJjY/view" },
  { label: "Ch 14", num: 14, title: "Choice of a Profession", pdfUrl: "https://drive.google.com/file/d/1g9fNyfayYO_0nhtP2R-ka7b9Q1R1gY2C/view" },
  { label: "Ch 15", num: 15, title: "The Ninny", pdfUrl: "https://drive.google.com/file/d/1ioWfyKdKNICdh4L0s_x8ev3nmLIC45gy/view" },
  { label: "Ch 16-18", num: 16, title: "Fourteen / The Last Leaf / The Necklace", pdfUrl: null, status: "Coming soon" }
];

CHAPTER_NOTE_ASSETS.physics.notes = [
  { label: "Ch 1", num: 1, title: "Physical Quantities & Measurement", pdfUrl: "https://drive.google.com/file/d/1Et60cGHxsZrKIQaTxRrh8MhdDnwep-Ka/preview" },
  { label: "Ch 2", num: 2, title: "Vectors", pdfUrl: "https://drive.google.com/file/d/1GKp9ESs7Ou0NyD7qK-3xC1SrstOy9jNc/preview" },
  { label: "Ch 3", num: 3, title: "Translatory Motion", pdfUrl: "https://drive.google.com/file/d/1_sc9gAgzVzYeWBIFxAlT2tz7FhHCxvQ2/view" },
  { label: "Ch 4", num: 4, title: "Rotational and Circular Motion", pdfUrl: "https://drive.google.com/file/d/1bMs8oWXIt13Wkx8CtU6qsPG2pewW-K56/view" },
  { label: "Ch 5", num: 5, title: "Work and Kinetic Energy", pdfUrl: "https://drive.google.com/file/d/1UNZAyHEFYZOLLU4XajNVEeAsUPHqrk4H/view" },
  { label: "Ch 6", num: 6, title: "Fluid Mechanics", pdfUrl: "https://drive.google.com/file/d/1Ujr1F4acDImOba4OC48E3xNFR3WPamhj/view" },
  { label: "Ch 7", num: 7, title: "Deformation of Solids", pdfUrl: "https://drive.google.com/file/d/134phLoh3bnzW2YhwC_DmQsa-iOFcDGaq/view" },
  { label: "Ch 8", num: 8, title: "Heat and Thermodynamics", pdfUrl: "https://drive.google.com/file/d/1E1QXW4DlAm9Ztgp91GdbU_4dPxsAQoSJ/preview" },
  { label: "Ch 9", num: 9, title: "Waves", pdfUrl: "https://drive.google.com/file/d/1HbasbzUnpJtDZMsJOkim_wkzJXv4-AnT/preview" },
  { label: "Ch 10", num: 10, title: "Electrostatics", pdfUrl: "https://drive.google.com/file/d/1liHnQ5z1P8upnr-ZlQ1-oz6tGTXDx46R/view" },
  { label: "Ch 11", num: 11, title: "Electricity", pdfUrl: "https://drive.google.com/file/d/1TCMPKvKUMdSKD5z0a4CkrcP9MLEwmsUS/preview" },
  { label: "Ch 12", num: 12, title: "Magnetism", pdfUrl: "https://drive.google.com/file/d/1C4M0cqxKxCoBZd4mDKwayEXEptOBX_yr/preview" },
  { label: "Ch 13", num: 13, title: "Relativity", pdfUrl: "https://drive.google.com/file/d/1Hr5_VvqrKsBuBAAyTVoFjMAHxk8zLaQs/preview" },
  { label: "Ch 14", num: 14, title: "Particle Physics", pdfUrl: "https://drive.google.com/file/d/1iA0Ls2_ER43CZajZFIktpR8OcFAChymG/preview" }
];

CHAPTER_NOTE_ASSETS.urdu.notes = [
  { label: "Ch 1", num: 1, title: "اخلاق حسنہ", pdfUrl: "https://drive.google.com/file/d/1JPt-vUHpqWlYDvWcTd7gHZy5Az0oS93S/view" },
  { label: "Ch 2", num: 2, title: "نیا قانون", pdfUrl: "https://drive.google.com/file/d/1UlxFPzcQjSRRoqVOwezbiDmFSvP18EL1/view" },
  { label: "Ch 3", num: 3, title: "تاریخ کا کفن", pdfUrl: "https://drive.google.com/file/d/1PlnmzUQJcusXYI_OvIFx_ode012jzQs7/view" },
  { label: "Ch 4", num: 4, title: "دہلیز", pdfUrl: "https://drive.google.com/file/d/1TI7iGp9YaBudkenkxp_1cC7pmfSJG3un/view" },
  { label: "Ch 5", num: 5, title: "اور پاکستان بن گیا", pdfUrl: "https://drive.google.com/file/d/13CDHOT-Uu19MRZPIkfmP8kV8jk3lMhSB/view" },
  { label: "Ch 6", num: 6, title: "ایک استاد عدالت کے کٹہرے میں", pdfUrl: "https://drive.google.com/file/d/1zmzILK_0KBrq3xK_McOlhW8LNxbdVIIz/view" },
  { label: "Ch 7", num: 7, title: "ہر گوپال تفتہ", pdfUrl: "https://drive.google.com/file/d/1ZF19N_y6G1P3WbzDHyYQIsndy4k2cn6-/view" },
  { label: "Ch 8", num: 8, title: "فاقہ میں روزہ", pdfUrl: "https://drive.google.com/file/d/1ikyKCdMbYopY6B7YOnzJ-EdzGvPrcLcE/view" },
  { label: "Ch 9", num: 9, title: "پاکستانی زبانیں اور ان کا باہمی رشتہ", pdfUrl: "https://drive.google.com/file/d/1R1cOo588Hcgcdx3Uo7qsPQflglHAEl_F/view" },
  { label: "Ch 10", num: 10, title: "چارپائی", pdfUrl: "https://drive.google.com/file/d/1-jyuFBSCyC_VoYlQVAys6TnvmfYBGdZu/view" },
  { label: "Nazam 1", num: 11, title: "حمد", pdfUrl: "https://drive.google.com/file/d/1YeLBO0PJEo03xzgEtSgO7xb8MsNxB-sc/view" },
  { label: "Nazam 2", num: 12, title: "نعت", pdfUrl: "https://drive.google.com/file/d/1WOXneL1BooVUGuTxr9Ct2sLLEJc6rshu/view" },
  { label: "Nazam 3", num: 13, title: "ملی نغمہ", pdfUrl: "https://drive.google.com/file/d/1NI3kkRf1qJLWzxtugtGDRjG80cAYYBZY/view" },
  { label: "Nazam 4", num: 14, title: "اے وادی لولاب", pdfUrl: "https://drive.google.com/file/d/18UqbJK6AM9O3Nj1FEu242I8rhQyAaFci/view" },
  { label: "Nazam 5", num: 15, title: "کھڑ ڈنر", pdfUrl: "https://drive.google.com/file/d/10jvEupxtekRtAJrFF-RKceQXI90f8wQU/view" },
  { label: "Nazam 6", num: 16, title: "آزادی", pdfUrl: "https://drive.google.com/file/d/1wBKYcaYbCimwUjaT1mAX3v4IrF1jDtRy/view" },
  { label: "Nazam 7", num: 17, title: "رحمان بابا", pdfUrl: "https://drive.google.com/file/d/1qvf5TZ5qp7tvQMg1Uuz7heNKhDrmwfKL/view" },
  { label: "Ghazal 1", num: 18, title: "تا پتا بوٹا", pdfUrl: "https://drive.google.com/file/d/1OVqGrD27c-cN1pucRH5u9vRr2cq16KK0/view" },
  { label: "Ghazal 2", num: 19, title: "سر میں سودا بھی نہیں", pdfUrl: "https://drive.google.com/file/d/1VMUQ4Jn_H7Ae3nauHsemuI7zdRQaorWv/view" },
  { label: "Ghazal 3", num: 20, title: "بے چین بہت پھرنا", pdfUrl: "https://drive.google.com/file/d/1Wrx9i4jyOQe2nFhXj8rRF0ow1blKefsp/view" },
  { label: "Ghazal 4", num: 21, title: "سلسلے توڑ گیا", pdfUrl: "https://drive.google.com/file/d/1euTdnGAN_74ZQYRlDb3icn4TUY86-q9X/view" },
  { label: "Ghazal 5", num: 22, title: "باد ہاں کھلنے سے پہلے", pdfUrl: null, status: "Missing link" }
];

CHAPTER_NOTE_ASSETS.maths.notes = [
  { label: "Ex 1.1", num: 1, title: "Chapter 1: Complex Numbers", pdfUrl: "https://drive.google.com/file/d/1gzWhWMsinS95Gb0Tk12Fap6LrrFNztOp/view" },
  { label: "Ex 1.2", num: 2, title: "Chapter 1: Complex Numbers", pdfUrl: "https://drive.google.com/file/d/1yLqrCBcbczI1IuJXT10VWZ2G0HzrSd5H/view" },
  { label: "Ex 1.3", num: 3, title: "Chapter 1: Complex Numbers", pdfUrl: "https://drive.google.com/file/d/1weU-GSttNLBSyruOaIgzGvUJmjO4tLw7/view" },
  { label: "Ex 1.4", num: 4, title: "Chapter 1: Complex Numbers", pdfUrl: "https://drive.google.com/file/d/1U4o1yXQGgpG4Mzea2cEodadZsV9rPoBy/view" },
  { label: "Review 1", num: 5, title: "Chapter 1: Complex Numbers", pdfUrl: "https://drive.google.com/file/d/1KyefOAEkw7kn3afMgg6eAJ8pbGx3An4L/view" },
  { label: "Ex 2.1", num: 6, title: "Chapter 2: Matrices & Determinants", pdfUrl: "https://drive.google.com/file/d/1leyv9bJ81T7DEQ8-JYQFwseR8FweKqif/view" },
  { label: "Ex 2.2", num: 7, title: "Chapter 2: Matrices & Determinants", pdfUrl: "https://drive.google.com/file/d/1hwiOCQKUeedKohKutQeeUOkSElPxWSDg/view" },
  { label: "Ex 2.3", num: 8, title: "Chapter 2: Matrices & Determinants", pdfUrl: "https://drive.google.com/file/d/13W0LAdiqBr2JJib2vP3EuOYvIzBXDs4B/view" },
  { label: "Ex 2.4", num: 9, title: "Chapter 2: Matrices & Determinants", pdfUrl: "https://drive.google.com/file/d/1uRv3eslKe_vZHBG_8DSnneDD_oqxP2dt/view" },
  { label: "Ex 2.5", num: 10, title: "Chapter 2: Matrices & Determinants", pdfUrl: "https://drive.google.com/file/d/1Q7Z-5KstV5PuKF5SzyLUMiKDlNhpbMsN/view" },
  { label: "Ex 2.6", num: 11, title: "Chapter 2: Matrices & Determinants", pdfUrl: "https://drive.google.com/file/d/1ccU5HF7FMtTS1lakAT8taOEwyPe8_2XO/preview" },
  { label: "Review 2", num: 12, title: "Chapter 2: Matrices & Determinants", pdfUrl: "https://drive.google.com/file/d/1PSeahZRaAeYrwTmiUxjTAIxoY8F0C1xC/view" },
  { label: "Ex 3.1", num: 13, title: "Chapter 3: Vectors", pdfUrl: "https://drive.google.com/file/d/1FaidWFzabljcsQa9kFxzaF6Ep-B-bT_j/preview" },
  { label: "Ex 3.2", num: 14, title: "Chapter 3: Vectors", pdfUrl: "https://drive.google.com/file/d/14EfOpfOT1CsRImp4TpuABznHTRn9bEUb/view" },
  { label: "Ex 3.3", num: 15, title: "Chapter 3: Vectors", pdfUrl: "https://drive.google.com/file/d/1G4gHrzrvd5Rpzm9gi-BlhdUYJHUrf-ox/view" },
  { label: "Ex 3.4", num: 16, title: "Chapter 3: Vectors", pdfUrl: "https://drive.google.com/file/d/1hxMwWGf2lxsWIrahf-gKjGsGz_9WYr1w/view" },
  { label: "Review 3", num: 17, title: "Chapter 3: Vectors", pdfUrl: "https://drive.google.com/file/d/1vIJVZ15fdUwGfhYnPJUrHY1mHsmEx0OR/view" },
  { label: "Ex 4.1", num: 18, title: "Chapter 4: Sequences and Series", pdfUrl: "https://drive.google.com/file/d/1BsSJ02jw-NqfuxUGagU4cz75IXkfPwOE/view" },
  { label: "Ex 4.2", num: 19, title: "Chapter 4: Sequences and Series", pdfUrl: "https://drive.google.com/file/d/1_ij8KqdSC9SEKA70EyKMD3j5BWTevIkL/view" },
  { label: "Ex 4.3", num: 20, title: "Chapter 4: Sequences and Series", pdfUrl: "https://drive.google.com/file/d/1_X0wELQdoP4hx5ApDZN4o3VHOkMEIMBZ/view" },
  { label: "Ex 4.4", num: 21, title: "Chapter 4: Sequences and Series", pdfUrl: "https://drive.google.com/file/d/1zs8pXmywD9Pr9ntnZHksrGyGlnL4BgGL/view" },
  { label: "Ex 4.5", num: 22, title: "Chapter 4: Sequences and Series", pdfUrl: "https://drive.google.com/file/d/1ei9JmeUWmoQbb_lyczE8txAa2xWfwcew/view" },
  { label: "Ex 4.6", num: 23, title: "Chapter 4: Sequences and Series", pdfUrl: "https://drive.google.com/file/d/1WzZ0uK6ATYhBhFVnrutHVSotZGTFMK1E/view" },
  { label: "Ex 4.7", num: 24, title: "Chapter 4: Sequences and Series", pdfUrl: "https://drive.google.com/file/d/1xiVw8KKlhNcC_qRpXFTFHXqkmMOlMS-H/view" },
  { label: "Ex 4.8", num: 25, title: "Chapter 4: Sequences and Series", pdfUrl: "https://drive.google.com/file/d/19gmZ29gO5w3xN08hndJtSziTKI9SuweM/view" },
  { label: "Ex 4.9", num: 26, title: "Chapter 4: Sequences and Series", pdfUrl: "https://drive.google.com/file/d/1emaPN_ezKcVKkr6sity1WuElZUJ1KjXi/view" },
  { label: "Review 4", num: 27, title: "Chapter 4: Sequences and Series", pdfUrl: "https://drive.google.com/file/d/1AQTP-p8Z2jSmoxd8JD3BhPf1Bf4-Nq1F/view" },
  { label: "Ex 5.1", num: 28, title: "Chapter 5: Polynomials", pdfUrl: "https://drive.google.com/file/d/1UO5bfrRXSty8X0Oahz_HHQZLRBh77djB/view" },
  { label: "Ex 5.2", num: 29, title: "Chapter 5: Polynomials", pdfUrl: "https://drive.google.com/file/d/1cCpTH-xmzNjwzM81AtSvbLdF_F-z6jHx/view" },
  { label: "Ex 5.3", num: 30, title: "Chapter 5: Polynomials", pdfUrl: "https://drive.google.com/file/d/17_O_p01Hgz7T9Ing72h__TEPxfc087cM/view" },
  { label: "Review 5", num: 31, title: "Chapter 5: Polynomials", pdfUrl: "https://drive.google.com/file/d/1YJSb_Ux1jjAZsPIRq9Nbr6Vb-yO5AE6t/view" },
  { label: "Ex 6.1", num: 32, title: "Chapter 6: Permutation and Combination", pdfUrl: "https://drive.google.com/file/d/1t8-29m_ZJXzsyZQiipsfO_kR637nf9I_/view" },
  { label: "Ex 6.2", num: 33, title: "Chapter 6: Permutation and Combination", pdfUrl: "https://drive.google.com/file/d/1FT2BEShpSaceZjlTHJ1RNTPXzUfyiu1X/view" },
  { label: "Ex 6.3", num: 34, title: "Chapter 6: Permutation and Combination", pdfUrl: "https://drive.google.com/file/d/1klCrDiAzZ_AI1BBl7-79uBadG_aNY-z7/view" },
  { label: "Review 6", num: 35, title: "Chapter 6: Permutation and Combination", pdfUrl: "https://drive.google.com/file/d/1k1SK-m09WfuYTbbJdNVJcQt9f_m5p1vY/view" },
  { label: "Ex 7.1", num: 36, title: "Chapter 7: Mathematical Induction & Binomial Theorem", pdfUrl: "https://drive.google.com/file/d/1R28I2dJJ6L33NA5MNvC2w4Pdupatj23S/view" },
  { label: "Ex 7.2", num: 37, title: "Chapter 7: Mathematical Induction & Binomial Theorem", pdfUrl: "https://drive.google.com/file/d/1m_Gwfo9PPHl7fE54LMxA_JcVyXG8xMH4/view" },
  { label: "Ex 7.3", num: 38, title: "Chapter 7: Mathematical Induction & Binomial Theorem", pdfUrl: "https://drive.google.com/file/d/1-rILyCviiZ-BZVBiY2bKE_FZBjYON_MH/view" },
  { label: "Ex 7.4", num: 39, title: "Chapter 7: Mathematical Induction & Binomial Theorem", pdfUrl: "https://drive.google.com/file/d/1WGvIVjDgq3mbP4rqQr1_bJzxmtpE5q9x/view" },
  { label: "Review 7", num: 40, title: "Chapter 7: Mathematical Induction & Binomial Theorem", pdfUrl: "https://drive.google.com/file/d/1PoHLD00mnBZ8W8nkPLkqsD2R6YQQ6Y_v/view" },
  { label: "Ex 8.1", num: 41, title: "Chapter 8: Fundamentals of Trigonometry", pdfUrl: "https://drive.google.com/file/d/1UioEyHiZaYiZA_cIKnL8cuPs5Cs71D6y/view" },
  { label: "Ex 8.2", num: 42, title: "Chapter 8: Fundamentals of Trigonometry", pdfUrl: "https://drive.google.com/file/d/1NqRLqiTJ3SL2Ox5z9rd9_5oi4N_CLv7q/view" },
  { label: "Ex 8.3", num: 43, title: "Chapter 8: Fundamentals of Trigonometry", pdfUrl: "https://drive.google.com/file/d/1tyZ4lX4OoNvJ1IDGjmDQ-ATtXJfYOBTB/view" },
  { label: "Review 8", num: 44, title: "Chapter 8: Fundamentals of Trigonometry", pdfUrl: "https://drive.google.com/file/d/1Ei2SsqkFH_A7DC7rc6f9nYYJ5VxzTcaZ/view" },
  { label: "Ex 9.1", num: 45, title: "Chapter 9: Trigonometric Functions", pdfUrl: "https://drive.google.com/file/d/14dQw_Bu2uBCib6_bp7627iEfsyrn1jGo/view" },
  { label: "Review 9", num: 46, title: "Chapter 9: Trigonometric Functions", pdfUrl: null, status: "Missing link" }
];

Object.entries(CHAPTER_NOTE_ASSETS).forEach(([subjectId, asset]) => {
  if (!SUBJECTS_DATA[subjectId]) return;
  SUBJECTS_DATA[subjectId].notesIntro = asset.intro;
  SUBJECTS_DATA[subjectId].chapterNotes = asset.notes;
  SUBJECTS_DATA[subjectId].nbfChaptersCount = asset.notes.filter(note => note.pdfUrl).length;
});

SUBJECTS_DATA.physics.description = "Study Class 11 NBF Physics through measurements, vectors, mechanics, fluids, solids, thermodynamics, waves, optics, electricity, magnetism, relativity, and particle physics.";
SUBJECTS_DATA.physics.chapters = [
  {
    num: 1,
    title: "Physical Quantities and Measurement",
    summary: "Introduces base and derived quantities, SI units, dimensions, significant figures, error estimation, and uncertainty propagation used throughout numerical Physics.",
    formulas: [],
    definitions: [
      { term: "Physical Quantity", text: "A measurable property of a body or phenomenon, expressed by a numerical value and a unit." },
      { term: "Base Quantity", text: "A fundamental quantity such as length, mass, time, electric current, temperature, amount of substance, or luminous intensity." },
      { term: "Derived Quantity", text: "A quantity obtained by combining base quantities, such as velocity, acceleration, force, pressure, or energy." },
      { term: "Uncertainty", text: "The estimated range by which a measured value may differ from the true value due to instrument limits or experimental conditions." },
      { term: "Significant Figures", text: "Digits in a measured value that carry meaningful precision, including all certain digits and the first uncertain digit." }
    ],
    shortQA: [
      { q: "Why are units necessary in Physics?", a: "Units give meaning to numerical measurements and allow results from different experiments, instruments, and scientists to be compared consistently." },
      { q: "What is the difference between precision and accuracy?", a: "Accuracy tells how close a value is to the true value, while precision tells how closely repeated measurements agree with each other." },
      { q: "How is percentage uncertainty calculated?", a: "Percentage uncertainty is calculated by dividing absolute uncertainty by the measured value and multiplying by 100 percent." }
    ]
  },
  {
    num: 2,
    title: "Vectors and Equilibrium",
    summary: "Covers vector representation, rectangular components, scalar and vector products, torque, and the conditions required for translational and rotational equilibrium.",
    formulas: [],
    definitions: [
      { term: "Vector", text: "A physical quantity with both magnitude and direction, such as displacement, velocity, acceleration, force, or momentum." },
      { term: "Scalar Product", text: "The dot product of two vectors, producing a scalar quantity equal to AB cos theta." },
      { term: "Vector Product", text: "The cross product of two vectors, producing a vector perpendicular to the plane of the original two vectors." },
      { term: "Torque", text: "The turning effect of a force about an axis, depending on force magnitude and perpendicular moment arm." },
      { term: "Equilibrium", text: "A state in which the net force and net torque on a body are zero." }
    ],
    shortQA: [
      { q: "Why is force treated as a vector?", a: "Force has magnitude and direction, and its effect depends on direction, so it must be added using vector rules." },
      { q: "What are the two conditions of equilibrium?", a: "The vector sum of all forces must be zero and the sum of all torques about any point must be zero." },
      { q: "What does the cross product represent physically?", a: "In Physics it often represents rotational effects, such as torque and angular momentum, with direction given by the right-hand rule." }
    ]
  },
  {
    num: 3,
    title: "Force and Motion",
    summary: "Builds kinematics and dynamics through equations of motion, projectile motion, Newton's laws, momentum conservation, impulse, and collisions.",
    formulas: [],
    definitions: [
      { term: "Displacement", text: "The shortest directed distance from initial position to final position." },
      { term: "Acceleration", text: "The rate of change of velocity with respect to time." },
      { term: "Momentum", text: "The product of mass and velocity; it is a vector quantity and remains conserved in an isolated system." },
      { term: "Impulse", text: "The product of force and time interval, equal to the change in momentum." },
      { term: "Projectile Motion", text: "Two-dimensional motion under gravity where horizontal motion is uniform and vertical motion is accelerated." }
    ],
    shortQA: [
      { q: "Why is horizontal acceleration zero in ideal projectile motion?", a: "Air resistance is neglected, so no horizontal force acts on the projectile after launch." },
      { q: "State the law of conservation of momentum.", a: "If no external force acts on a system, its total momentum before interaction equals its total momentum after interaction." },
      { q: "What is the difference between elastic and inelastic collision?", a: "Momentum is conserved in both, but kinetic energy is conserved only in an elastic collision." }
    ]
  },
  {
    num: 4,
    title: "Work, Energy, and Power",
    summary: "Explains work done by constant and variable forces, kinetic energy, potential energy, conservation of mechanical energy, power, and efficiency.",
    formulas: [],
    definitions: [
      { term: "Work", text: "Energy transferred when a force causes displacement in its own direction." },
      { term: "Kinetic Energy", text: "Energy possessed by a body due to its motion." },
      { term: "Potential Energy", text: "Stored energy due to position, configuration, or state." },
      { term: "Power", text: "The rate at which work is done or energy is transferred." },
      { term: "Efficiency", text: "The useful output energy or power divided by input energy or power, usually expressed as a percentage." }
    ],
    shortQA: [
      { q: "When is work done by a force zero?", a: "Work is zero when displacement is zero or when the force is perpendicular to displacement." },
      { q: "What does the work-energy theorem state?", a: "The net work done on a body equals the change in its kinetic energy." },
      { q: "Why is no machine 100 percent efficient?", a: "Some input energy is always lost to friction, heat, sound, deformation, or other non-useful forms." }
    ]
  },
  {
    num: 5,
    title: "Fluids, Solids, Heat, and Waves",
    summary: "Connects fluid pressure, buoyancy, Bernoulli's principle, elasticity, thermal processes, wave motion, interference, beats, and stationary waves.",
    formulas: [],
    definitions: [
      { term: "Buoyant Force", text: "The upward force exerted by a fluid on an immersed body, equal to the weight of displaced fluid." },
      { term: "Bernoulli's Principle", text: "For steady ideal fluid flow, the sum of pressure energy, kinetic energy per unit volume, and potential energy per unit volume remains constant." },
      { term: "Elastic Modulus", text: "The ratio of stress to strain within the elastic limit." },
      { term: "First Law of Thermodynamics", text: "Heat supplied to a system is used to increase internal energy and do work." },
      { term: "Stationary Wave", text: "A wave pattern formed by superposition of two waves of the same frequency and amplitude travelling in opposite directions." }
    ],
    shortQA: [
      { q: "Why does fluid speed increase in a narrow pipe?", a: "By the equation of continuity, reducing area increases velocity for steady incompressible flow." },
      { q: "What is the physical meaning of Young's modulus?", a: "It measures how strongly a material resists change in length under tensile or compressive stress." },
      { q: "Why are only odd harmonics present in a closed pipe?", a: "A closed pipe has a node at the closed end and an antinode at the open end, allowing only odd harmonic patterns." }
    ]
  },
  {
    num: 6,
    title: "Electricity, Magnetism, Relativity, and Particle Physics",
    summary: "Reviews electric fields, potential, circuits, Kirchhoff's laws, magnetic forces, electromagnetic induction, relativity equations, and basic nuclear decay processes.",
    formulas: [],
    definitions: [
      { term: "Electric Field", text: "Force experienced per unit positive test charge at a point in space." },
      { term: "Electric Potential", text: "Work done per unit charge in bringing a positive test charge from infinity to a point." },
      { term: "Kirchhoff's Current Law", text: "The algebraic sum of currents at a junction is zero because charge is conserved." },
      { term: "Magnetic Flux", text: "The product of magnetic field and area component perpendicular to the field." },
      { term: "Mass-Energy Equivalence", text: "Einstein's relation showing that mass and energy are interchangeable, expressed as E = mc squared." }
    ],
    shortQA: [
      { q: "What is the difference between emf and terminal voltage?", a: "EMF is energy supplied per unit charge by a source, while terminal voltage is the actual potential difference across its terminals when current flows." },
      { q: "Why is Lenz's law consistent with conservation of energy?", a: "The induced current opposes the change that produces it, so energy cannot be created without external work." },
      { q: "What does length contraction mean?", a: "A body moving at relativistic speed is measured shorter along the direction of motion by an observer relative to whom it is moving." }
    ]
  }
];

const PHYSICS_FORMULA_SHEET = [
  {
    unit: "Unit 1: Measurements & Uncertainty",
    formulas: [
      { concept: "Fractional Uncertainty", equation: "Δx / x" },
      { concept: "Percent Uncertainty", equation: "(Δx / x) × 100%" },
      { concept: "Uncertainty in Sum/Difference", equation: "Δz = Δx + Δy" },
      { concept: "Uncertainty in Multiplication/Division", equation: "%Δz = %Δx + %Δy" },
      { concept: "Uncertainty in Power", equation: "%Δz = n(%Δx)" }
    ]
  },
  {
    unit: "Unit 2: Vectors",
    formulas: [
      { concept: "Components", equation: "A = Ax i-hat + Ay j-hat" },
      { concept: "Magnitude", equation: "A = sqrt(Ax² + Ay²)" },
      { concept: "Direction", equation: "θ = tan⁻¹(Ay / Ax)" },
      { concept: "Dot Product", equation: "A · B = AB cosθ = AxBx + AyBy + AzBz" },
      { concept: "Cross Product", equation: "A × B = AB sinθ n-hat" },
      { concept: "Cross Product Determinant", equation: "A × B = (AyBz - AzBy)i - (AxBz - AzBx)j + (AxBy - AyBx)k" },
      { concept: "Parallelogram Area", equation: "Area = |A × B|" }
    ]
  },
  {
    unit: "Unit 3: Translatory Motion",
    formulas: [
      { concept: "Kinematics", equation: "vf = vi + at; S = vit + 1/2 at²; 2aS = vf² - vi²" },
      { concept: "Projectile Height", equation: "H = vi² sin²θ / 2g" },
      { concept: "Projectile Time", equation: "T = 2vi sinθ / g" },
      { concept: "Projectile Range", equation: "R = vi² sin2θ / g" },
      { concept: "Momentum Conservation", equation: "ΣPi = ΣPf" },
      { concept: "Elastic Collision", equation: "u1 - u2 = -(v1 - v2)" },
      { concept: "Final Velocity", equation: "v1 = [(m1 - m2)/(m1 + m2)]u1 + [2m2/(m1 + m2)]u2" }
    ]
  },
  {
    unit: "Unit 4: Rotational & Circular Motion",
    formulas: [
      { concept: "Angular Relations", equation: "S = rθ; v = rω; at = rα" },
      { concept: "Rotational Kinematics", equation: "ωf = ωi + αt; 2αθ = ωf² - ωi²; θ = ωit + 1/2 αt²" },
      { concept: "Centripetal Motion", equation: "ac = v²/r = rω²; Fc = mv²/r = mrω²" },
      { concept: "Dynamics", equation: "τ = Iα; L = Iω; Li = Lf" },
      { concept: "Banking Angle", equation: "tanθ = v² / rg" },
      { concept: "Artificial Gravity", equation: "v = sqrt(gR); T = 2π sqrt(R/g)" }
    ]
  },
  {
    unit: "Unit 5: Work & Energy",
    formulas: [
      { concept: "Work", equation: "W = Fd cosθ" },
      { concept: "Variable Work", equation: "Wtotal = Σ Fi cosθi Δdi" },
      { concept: "Kinetic Energy", equation: "KE = 1/2 mv²" },
      { concept: "Work-Energy Principle", equation: "W = ΔKE" },
      { concept: "Efficiency", equation: "η = (Output / Input) × 100%" }
    ]
  },
  {
    unit: "Unit 6: Fluid Mechanics",
    formulas: [
      { concept: "Buoyancy", equation: "Fb = ρgV" },
      { concept: "Viscous Drag", equation: "Fd = 6πηrv" },
      { concept: "Terminal Velocity", equation: "vt = 2ρgr² / 9η" },
      { concept: "Continuity", equation: "A1v1 = A2v2 = constant" },
      { concept: "Bernoulli Equation", equation: "P + 1/2 ρv² + ρgh = constant" },
      { concept: "Torricelli Theorem", equation: "v = sqrt(2gh)" },
      { concept: "Venturi Velocity", equation: "v1 = sqrt(2gh / [(A1/A2)² - 1])" }
    ]
  },
  {
    unit: "Unit 7: Physics of Solids",
    formulas: [
      { concept: "Stress", equation: "δ = F / A", notes: "N/m² = Pa" },
      { concept: "Tensile Strain", equation: "ε = ΔL / L" },
      { concept: "Shear Strain", equation: "ε = ΔX / Y" },
      { concept: "Volume Strain", equation: "ε = ΔV / V" },
      { concept: "Elastic Modulus", equation: "E = Stress / Strain" },
      { concept: "Young's Modulus", equation: "Y = (F/A) / (ΔL/L)" },
      { concept: "Change in Length", equation: "ΔL = FL / YA" },
      { concept: "Bulk Modulus", equation: "B = (F/A) / (-ΔV/V)" },
      { concept: "Shear Modulus", equation: "S = (F/A) / (ΔX/Y); S = F / Aθ" },
      { concept: "Hooke's Law", equation: "F = kx" },
      { concept: "Elastic Potential Energy", equation: "Ep = 1/2 kx² = 1/2 (YA/L)x²" }
    ]
  },
  {
    unit: "Unit 8: Heat and Thermodynamics",
    formulas: [
      { concept: "Average Kinetic Energy", equation: "<1/2 mv²> = 1/2 kT" },
      { concept: "Ideal Gas Law", equation: "PV = nRT; PV = NkT" },
      { concept: "Gas Density", equation: "ρ = PM / RT" },
      { concept: "Work by Gas", equation: "W = PΔV" },
      { concept: "Boyle's Law", equation: "PV = constant" },
      { concept: "Charles's Law", equation: "V/T = constant" },
      { concept: "Gay-Lussac's Law", equation: "P/T = constant" },
      { concept: "Adiabatic Process", equation: "PVγ = constant" },
      { concept: "First Law", equation: "Q = ΔU + W" },
      { concept: "Isothermal Process", equation: "Q = W; ΔU = 0" },
      { concept: "Adiabatic Process", equation: "W = -ΔU" },
      { concept: "Isochoric Process", equation: "Q = ΔU; W = 0" },
      { concept: "Isobaric Process", equation: "Q = ΔU + PΔV" },
      { concept: "Heat Engine Work", equation: "W = Q1 - Q2" },
      { concept: "Efficiency", equation: "η = (Q1 - Q2)/Q1 = 1 - Q2/Q1 = 1 - T2/T1" },
      { concept: "Coefficient of Performance", equation: "CPcool = Q2/(Q1-Q2) = T2/(T1-T2); CPheat = Q1/(Q1-Q2) = T1/(T1-T2)" },
      { concept: "Entropy", equation: "ΔS = ΔQ / T; ΔSnet = Q/T2 - Q/T1" }
    ]
  },
  {
    unit: "Unit 9: Waves",
    formulas: [
      { concept: "Intensity vs Amplitude", equation: "I ∝ amplitude²" },
      { concept: "Intensity", equation: "I = P / A = E / (A × t)" },
      { concept: "Wave Speed", equation: "v = fλ" },
      { concept: "Doppler Effect", equation: "f' = [(v ± vL) / v]f; f' = [v / (v ∓ vs)]f" },
      { concept: "Superposition", equation: "y = y1 + y2 + ... + yn" },
      { concept: "Constructive Interference", equation: "d = mλ" },
      { concept: "Destructive Interference", equation: "d = (m + 1/2)λ" },
      { concept: "Beat Frequency", equation: "fb = |f1 - f2|" },
      { concept: "String Fundamental Frequency", equation: "f1 = 1/(2L) × sqrt(T/m)" },
      { concept: "String Harmonics", equation: "λn = 2L/n; fn = nf1 = n/(2L) × sqrt(T/m)" },
      { concept: "Open Pipe", equation: "f1 = v/(2L); λn = 2L/n; fn = nf1" },
      { concept: "Closed Pipe", equation: "f1 = v/(4L); λn = 4L/(2n - 1); fn = (2n - 1)f1" },
      { concept: "Malus's Law", equation: "I = I0 cos²θ" }
    ]
  },
  {
    unit: "Unit 10: Electrostatics",
    formulas: [
      { concept: "Coulomb's Law", equation: "F = kq1q2/r² = (1/4πε0)(q1q2/r²)" },
      { concept: "Vector Force", equation: "F12 = k(q1q2/r²) r-hat12; F21 = -F12" },
      { concept: "Superposition", equation: "F = F12 + F13 + F14 + ..." },
      { concept: "Electric Field", equation: "E = F/q; E = kQ/r² r-hat" },
      { concept: "Work in Electric Field", equation: "W = FΔr = qEΔr" },
      { concept: "Work vs Potential", equation: "W = -qΔV" },
      { concept: "Potential Gradient", equation: "E = -ΔV/Δr" },
      { concept: "Electric Potential", equation: "V = kq/r" }
    ]
  },
  {
    unit: "Unit 11: Electricity",
    formulas: [
      { concept: "Drift Current", equation: "I = neAv" },
      { concept: "Drift Velocity", equation: "v = I / nAe" },
      { concept: "Current Density", equation: "J = nev" },
      { concept: "Mobility", equation: "μ = v/E" },
      { concept: "Potential Difference", equation: "ΔV = ΔU/Q = W/Q" },
      { concept: "Terminal Potential", equation: "V = ε - Ir" },
      { concept: "Current with Internal Resistance", equation: "I = ε / (R + r)" },
      { concept: "Power Output", equation: "Pout = I²R" },
      { concept: "Maximum Power", equation: "Pmax = ε²/4r = ε²/4R when R = r" },
      { concept: "Resistance vs Temperature", equation: "Rt = R0[1 + α(T - T0)]" },
      { concept: "Resistivity", equation: "R = ρL/A" },
      { concept: "Electric Power", equation: "P = VI = I²R = V²/R" },
      { concept: "Energy Dissipation", equation: "E = VQ = VIt = I²Rt = V²t/R" },
      { concept: "Kilowatt-hour", equation: "1 kWh = 3.6 × 10⁶ J" },
      { concept: "Kirchhoff's Laws", equation: "ΣI = 0; ΣV = 0" },
      { concept: "Series Resistors", equation: "R = R1 + R2 + R3 + ..." },
      { concept: "Parallel Resistors", equation: "1/R = 1/R1 + 1/R2 + 1/R3 + ..." },
      { concept: "Wheatstone Bridge", equation: "R = PS/Q" },
      { concept: "Potentiometer", equation: "ε2 = (l2/l1)ε1" }
    ]
  },
  {
    unit: "Unit 12: Electromagnetism",
    formulas: [
      { concept: "Force on Current-Carrying Conductor", equation: "F = BIL sinθ; F = I(L × B)" },
      { concept: "Flux Density", equation: "B = F / IL" },
      { concept: "Magnetic Force on Charge", equation: "FB = q(v × B); |FB| = qvB sinθ" },
      { concept: "Radius of Charged Particle Path", equation: "r = mv / qB" },
      { concept: "Cyclotron Motion", equation: "ω = qB/m; T = 2πm/qB; f = qB/2πm" },
      { concept: "Velocity Selector", equation: "v = E/B" },
      { concept: "Lorentz Force", equation: "F = qE + q(v × B)" },
      { concept: "Long Straight Wire", equation: "B = μ0I / 2πr" },
      { concept: "Circular Coil", equation: "B = μ0I / 2r" },
      { concept: "Solenoid", equation: "B = μ0nI; B = μrμ0nI" },
      { concept: "Parallel Conductors", equation: "F/L = μ0I1I2 / 2πr" },
      { concept: "Magnetic Flux", equation: "ΦB = B · A = BA cosθ" },
      { concept: "Flux Linkage", equation: "NΦ = NBA cosθ" },
      { concept: "Faraday's Law", equation: "ε = -N(ΔΦ/Δt)" },
      { concept: "Induced Current", equation: "I = ε/R = (NΔΦ/Δt)/R" }
    ]
  },
  {
    unit: "Unit 13: Relativity",
    formulas: [
      { concept: "Mass-Energy Equivalence", equation: "E = mc²" },
      { concept: "Length Contraction", equation: "L = L0 sqrt(1 - v²/c²)" },
      { concept: "Time Dilation", equation: "t = t0 / sqrt(1 - v²/c²)" },
      { concept: "Relativistic Mass", equation: "m = m0 / sqrt(1 - v²/c²)" }
    ]
  },
  {
    unit: "Unit 14: Particle Physics",
    formulas: [
      { concept: "Alpha Decay", equation: "X(A,Z) → Y(A-4,Z-2) + He(4,2) + Q" },
      { concept: "Beta-minus Decay", equation: "n → p⁺ + β⁻ + anti-νe" },
      { concept: "Beta-plus Decay", equation: "p⁺ → n + β⁺ + νe" },
      { concept: "Kinetic Energy", equation: "E = p² / 2m" },
      { concept: "Dirac Energy Equation", equation: "E = ±sqrt(m²c⁴ + p²c²)" }
    ]
  }
];

SUBJECTS_DATA.physics.formulaSheet = PHYSICS_FORMULA_SHEET;

const RECENT_UPDATES = [
  { id: 1, subject: "Physics", chapter: "Class 11 PDF Book", text: "Added the Study++ FBISE Physics PDF download with a cover preview on the subject card.", date: "Today, 12:40 PM", badge: "PDF Added" },
  { id: 2, subject: "Mathematics", chapter: "Class 11 PDF Book", text: "Linked the Mathematics Science Group book PDF and refreshed the card with a stronger visual panel.", date: "Today, 12:20 PM", badge: "PDF Added" },
  { id: 3, subject: "English", chapter: "Class 11 PDF Book", text: "Added the English textbook PDF for quick reading beside grammar and literature notes.", date: "Today, 12:05 PM", badge: "PDF Added" },
  { id: 4, subject: "Urdu", chapter: "Class 11 PDF Book", text: "Added Urdu as a full visual subject with the fetched PDF resource and starter study blocks.", date: "Today, 11:50 AM", badge: "New Subject" },
  { id: 5, subject: "Computer Science", chapter: "Class 11 PDF Book", text: "Connected the Computer Science book PDF and kept the programming study guide ready inside the drawer.", date: "Today, 11:35 AM", badge: "PDF Added" }
];

const TOYBOX_FLASHCARDS = [
  { subject: "physics", term: "Time Period of Simple Pendulum", answer: "T = 2π√(l/g)", hint: "Formula relates time (T), length (l), and gravity (g)." },
  { subject: "physics", term: "Wave Speed Formula", answer: "v = f * λ", hint: "Velocity is frequency multiplied by wavelength." },
  { subject: "maths", term: "Quadratic Formula", answer: "x = [-b ± √(b² - 4ac)] / (2a)", hint: "The formula used to solve ax² + bx + c = 0." },
  { subject: "maths", term: "Discriminant (Nature of Roots)", answer: "D = b² - 4ac", hint: "The algebraic term under the radical in the quadratic formula." },
  { subject: "chemistry", term: "Equilibrium Constant (Kc)", answer: "Kc = [Products] / [Reactants]", hint: "Ratio of forward and backward molecular concentrations." },
  { subject: "chemistry", term: "pH Scale Formula", answer: "pH = -log₁₀[H⁺]", hint: "Negative logarithm of hydrogen ion concentrations." },
  { subject: "computer", term: "printf Function Syntax", answer: "printf(\"format string\", variables);", hint: "Standard C language output command." },
  { subject: "english", term: "Theme", answer: "The central message or controlling idea of a text.", hint: "Look for the idea repeated through events, tone, and character decisions." },
  { subject: "urdu", term: "Markazi Khayal", answer: "The central idea or main message of a lesson or poem.", hint: "Summarize the text in one clean thought." }
];
