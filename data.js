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
    description: "Master complex numbers, matrices, vectors, sequences, polynomials, permutations, induction, and trigonometry as formulated in the NBF Grade 11 book.",
    isHero: true,
    gridSize: "large",
    difficulty: "Medium-Hard",
    nbfChaptersCount: 9,
    chapters: [
      {
        num: 1,
        title: "Complex Numbers",
        summary: "Complex numbers extend the real number system by introducing the imaginary unit i, where i² = −1. Every complex number is written as z = a + bi, where a is the real part and b is the imaginary part. The chapter covers arithmetic operations, modulus, conjugate, polar form, and De Moivre's theorem.",
        formulas: [
          { name: "Standard Form", equation: "z = a + bi", description: "Where a is the real part (Re z) and b is the imaginary part (Im z). i is the imaginary unit with i² = −1." },
          { name: "Modulus (Absolute Value)", equation: "|z| = √(a² + b²)", description: "The distance of z from the origin in the Argand plane." },
          { name: "Conjugate", equation: "z̄ = a − bi", description: "Obtained by changing the sign of the imaginary part. z · z̄ = |z|²." },
          { name: "Polar / Trigonometric Form", equation: "z = r(cosθ + i sinθ)", description: "Where r = |z| is the modulus and θ = arg(z) is the argument (angle). Also written as z = r·cis θ." },
          { name: "De Moivre's Theorem", equation: "zⁿ = rⁿ(cos nθ + i sin nθ)", description: "Used to compute powers and roots of complex numbers in polar form." },
          { name: "Product of Conjugates", equation: "z · z̄ = a² + b² = |z|²", description: "The product of a complex number with its conjugate is always a real number equal to the square of its modulus." }
        ],
        definitions: [
          { term: "Complex Number", text: "A number of the form z = a + bi, where a and b are real numbers and i = √−1. The set of all complex numbers is denoted by ℂ." },
          { term: "Imaginary Unit (i)", text: "A number defined by the property i² = −1. It is the fundamental building block of all complex numbers." },
          { term: "Real Part", text: "The real component 'a' in z = a + bi, written as Re(z) = a." },
          { term: "Imaginary Part", text: "The coefficient 'b' of i in z = a + bi, written as Im(z) = b." },
          { term: "Conjugate of z", text: "If z = a + bi, then its conjugate is z̄ = a − bi. Conjugates are reflections across the real axis in the Argand plane." },
          { term: "Modulus of z", text: "The non-negative real number |z| = √(a² + b²), representing the distance of z from the origin in the Argand diagram." },
          { term: "Argument of z", text: "The angle θ that the line segment from the origin to z makes with the positive real axis, measured in radians." },
          { term: "Polar Form", text: "The representation z = r(cosθ + i sinθ), where r is the modulus and θ is the argument of z." },
          { term: "Argand Diagram / Plane", text: "A 2D coordinate system where the horizontal axis represents real numbers and the vertical axis represents imaginary numbers." }
        ],
        shortQA: [
          { q: "What is the value of i², i³, and i⁴?", a: "i² = −1, i³ = i² × i = −i, i⁴ = (i²)² = (−1)² = 1. The powers of i cycle with period 4: i, −1, −i, 1, i, ..." },
          { q: "How do you add two complex numbers?", a: "Add real parts and imaginary parts separately: (a + bi) + (c + di) = (a + c) + (b + d)i." },
          { q: "How do you multiply two complex numbers?", a: "Use the FOIL method: (a + bi)(c + di) = ac + adi + bci + bdi² = (ac − bd) + (ad + bc)i, since i² = −1." },
          { q: "How do you divide complex numbers?", a: "Multiply both numerator and denominator by the conjugate of the denominator: (a + bi)/(c + di) = [(a + bi)(c − di)] / (c² + d²)." },
          { q: "State De Moivre's Theorem and give its use.", a: "De Moivre's theorem states that [r(cosθ + i sinθ)]ⁿ = rⁿ(cos nθ + i sin nθ). It is used to raise complex numbers in polar form to any power and to find nth roots of complex numbers." }
        ],
        quiz: {
          q: "For z = 3 + 4i, what is the modulus |z|?",
          options: ["5", "7", "1", "12"],
          correctIdx: 0,
          explanation: "|z| = √(3² + 4²) = √(9 + 16) = √25 = 5. This is a direct application of |z| = √(a² + b²)."
        }
      },
      {
        num: 2,
        title: "Matrices and Determinants",
        summary: "A matrix is a rectangular array of numbers arranged in rows and columns. This chapter covers matrix operations (addition, scalar multiplication, matrix multiplication), transpose, determinants of 2×2 and 3×3 matrices, adjoint, inverse, and solving systems of linear equations using Cramer's Rule and matrix inversion.",
        formulas: [
          { name: "Determinant of 2×2 Matrix", equation: "det(A) = |A| = ad − bc, for A = [[a,b],[c,d]]", description: "The determinant of a 2×2 matrix is the difference of the products of diagonals." },
          { name: "Determinant of 3×3 Matrix (Expansion)", equation: "|A| = a₁₁(a₂₂a₃₃ − a₂₃a₃₂) − a₁₂(a₂₁a₃₃ − a₂₃a₃₁) + a₁₃(a₂₁a₃₂ − a₂₂a₃₁)", description: "Cofactor expansion along the first row." },
          { name: "Inverse of a Matrix", equation: "A⁻¹ = (1 / |A|) × adj(A)", description: "Exists only if |A| ≠ 0 (non-singular matrix). adj(A) is the transpose of the cofactor matrix." },
          { name: "Cramer's Rule (2 unknowns)", equation: "x = |Aₓ| / |A|,  y = |Aᵧ| / |A|", description: "Where |A| is the coefficient matrix determinant, |Aₓ| replaces the x-column with constants, |Aᵧ| replaces the y-column." },
          { name: "Matrix Multiplication", equation: "(AB)ᵢⱼ = Σₖ Aᵢₖ Bₖⱼ", description: "Element (i,j) of AB is the dot product of row i of A and column j of B. Requires columns of A = rows of B." },
          { name: "Transpose", equation: "(Aᵀ)ᵢⱼ = Aⱼᵢ", description: "The transpose of A is obtained by interchanging rows and columns." }
        ],
        definitions: [
          { term: "Matrix", text: "A rectangular array of numbers (or algebraic expressions) arranged in rows and columns, enclosed in square brackets. Denoted by capital letters." },
          { term: "Order of a Matrix", text: "Described as m × n, where m is the number of rows and n is the number of columns." },
          { term: "Square Matrix", text: "A matrix with an equal number of rows and columns (m = n)." },
          { term: "Identity Matrix (I)", text: "A square matrix with 1s on the main diagonal and 0s everywhere else. AI = IA = A for any compatible matrix A." },
          { term: "Singular Matrix", text: "A square matrix whose determinant is zero. A singular matrix has no inverse." },
          { term: "Non-Singular Matrix", text: "A square matrix with a non-zero determinant. It is invertible." },
          { term: "Adjoint of a Matrix", text: "The transpose of the cofactor matrix of a square matrix A, denoted adj(A)." },
          { term: "Cofactor", text: "The cofactor Cᵢⱼ of element aᵢⱼ is (−1)^(i+j) times the minor Mᵢⱼ (the determinant of the submatrix obtained by deleting row i and column j)." },
          { term: "Cramer's Rule", text: "A method of solving a system of linear equations with a unique solution, using determinants of coefficient and modified matrices." }
        ],
        shortQA: [
          { q: "Under what condition does a matrix have an inverse?", a: "A matrix has an inverse (is invertible) if and only if its determinant is non-zero, i.e., |A| ≠ 0. Such a matrix is called non-singular." },
          { q: "What is the difference between a row matrix and a column matrix?", a: "A row matrix (row vector) has exactly one row and any number of columns (1 × n), while a column matrix (column vector) has exactly one column and any number of rows (m × 1)." },
          { q: "When is matrix multiplication defined?", a: "AB is defined only when the number of columns of A equals the number of rows of B. If A is m × n and B is n × p, then AB is m × p." },
          { q: "State two properties of the transpose operation.", a: "1) (Aᵀ)ᵀ = A (double transpose returns the original). 2) (AB)ᵀ = BᵀAᵀ (transpose reverses the order of multiplication)." },
          { q: "How do you find the inverse of a 2×2 matrix A = [[a,b],[c,d]]?", a: "A⁻¹ = (1/(ad−bc)) × [[d, −b],[−c, a]], provided ad − bc ≠ 0. Swap main diagonal elements, negate off-diagonal elements, then divide by the determinant." }
        ],
        quiz: {
          q: "For matrix A = [[2, 3],[1, 4]], what is the determinant |A|?",
          options: ["5", "11", "−5", "8"],
          correctIdx: 0,
          explanation: "det(A) = (2)(4) − (3)(1) = 8 − 3 = 5. For a 2×2 matrix [[a,b],[c,d]], det = ad − bc."
        }
      },
      {
        num: 3,
        title: "Vectors",
        summary: "Vectors are physical or geometric quantities possessing both magnitude and direction. This chapter covers vector algebra in 2D and 3D, addition, scalar (dot) product, vector (cross) product, and their geometric applications such as finding angles, areas, and projections.",
        formulas: [
          { name: "Magnitude of Vector", equation: "|A| = √(Aₓ² + Aᵧ² + A_z²)", description: "The length or magnitude of a 3D vector A = Aₓi + Aᵧj + A_z k." },
          { name: "Unit Vector", equation: "Â = A / |A|", description: "A vector of magnitude 1 in the direction of A." },
          { name: "Scalar (Dot) Product", equation: "A · B = |A||B| cosθ = AₓBₓ + AᵧBᵧ + A_z B_z", description: "Produces a scalar. θ is the angle between the vectors." },
          { name: "Vector (Cross) Product", equation: "A × B = |A||B| sinθ n̂", description: "Produces a vector perpendicular to both A and B. n̂ is the unit normal from the right-hand rule." },
          { name: "Cross Product (Determinant Form)", equation: "A × B = |i  j  k ; Aₓ Aᵧ A_z ; Bₓ Bᵧ B_z|", description: "Expand along the first row to find the component form of the cross product." },
          { name: "Angle Between Two Vectors", equation: "cosθ = (A · B) / (|A| |B|)", description: "Derived from the dot product formula. θ = 90° when A · B = 0." },
          { name: "Area of Parallelogram", equation: "Area = |A × B|", description: "The magnitude of the cross product equals the area of the parallelogram formed by the two vectors." },
          { name: "Area of Triangle", equation: "Area = (1/2)|A × B|", description: "Half the parallelogram area formed by two sides of the triangle as vectors." }
        ],
        definitions: [
          { term: "Vector", text: "A quantity with both magnitude and direction. Examples: displacement, velocity, force, momentum. Represented by an arrow." },
          { term: "Scalar", text: "A quantity with magnitude only, no direction. Examples: mass, speed, temperature, distance." },
          { term: "Position Vector", text: "A vector drawn from the origin O to a point P. If P is (x, y, z), the position vector OP = xi + yj + zk." },
          { term: "Unit Vector", text: "A vector of magnitude 1. The unit vectors along x, y, z axes are î, ĵ, k̂ respectively." },
          { term: "Null (Zero) Vector", text: "A vector with zero magnitude and no specific direction. Denoted by 0⃗." },
          { term: "Scalar (Dot) Product", text: "The product A · B = |A||B|cosθ, giving a scalar. If A · B = 0 (and neither is zero), A and B are perpendicular." },
          { term: "Vector (Cross) Product", text: "The product A × B = |A||B|sinθ n̂, giving a vector. If A × B = 0 (and neither is zero), A and B are parallel." },
          { term: "Collinear Vectors", text: "Vectors that are parallel (or anti-parallel), i.e., they lie along the same line or parallel lines. Their cross product is zero." }
        ],
        shortQA: [
          { q: "How do you determine if two vectors are perpendicular?", a: "Two non-zero vectors A and B are perpendicular (orthogonal) if and only if their dot product is zero: A · B = 0. This is because cos 90° = 0." },
          { q: "How do you determine if two vectors are parallel?", a: "Two non-zero vectors A and B are parallel if and only if their cross product is zero: A × B = 0⃗. This is because sin 0° = sin 180° = 0." },
          { q: "What is the physical significance of the cross product A × B?", a: "Its magnitude |A × B| gives the area of the parallelogram formed by A and B. Its direction (perpendicular to both A and B by the right-hand rule) represents rotation axes in physics, such as torque τ = r × F." },
          { q: "What is the difference between a free vector and a position vector?", a: "A free vector can be moved parallel to itself anywhere in space without changing its meaning. A position vector is fixed at the origin and points to a specific position in space." },
          { q: "State the commutative and anti-commutative properties of dot and cross products.", a: "Dot product is commutative: A · B = B · A. Cross product is anti-commutative: A × B = −(B × A). Reversing order in cross product reverses the direction." }
        ],
        quiz: {
          q: "If A · B = 0 for two non-zero vectors, what can you conclude?",
          options: ["They are parallel", "They are perpendicular", "They are equal", "Their magnitudes are equal"],
          correctIdx: 1,
          explanation: "A · B = |A||B|cosθ = 0 implies cosθ = 0, so θ = 90°. The two vectors are perpendicular (orthogonal) to each other."
        }
      },
      {
        num: 4,
        title: "Sequences and Series",
        summary: "A sequence is an ordered list of numbers following a rule, while a series is the sum of terms of a sequence. This chapter covers Arithmetic Progressions (AP), Geometric Progressions (GP), Arithmetic-Geometric sequences, and infinite geometric series, including their nth terms and sum formulas.",
        formulas: [
          { name: "nth Term of AP", equation: "aₙ = a₁ + (n − 1)d", description: "Where a₁ is the first term, d is the common difference, and n is the term number." },
          { name: "Sum of n Terms of AP", equation: "Sₙ = n/2 × [2a₁ + (n − 1)d]  OR  Sₙ = n/2 × (a₁ + aₙ)", description: "Sum of the first n terms of an arithmetic progression." },
          { name: "Arithmetic Mean", equation: "AM = (a + b) / 2", description: "The arithmetic mean of two numbers a and b. In an AP, any middle term equals the AM of its neighbours." },
          { name: "nth Term of GP", equation: "aₙ = a₁ × rⁿ⁻¹", description: "Where a₁ is the first term and r is the common ratio." },
          { name: "Sum of n Terms of GP", equation: "Sₙ = a₁(1 − rⁿ) / (1 − r),  r ≠ 1", description: "Sum of first n terms of a geometric progression. If r = 1, Sₙ = na₁." },
          { name: "Sum of Infinite GP", equation: "S∞ = a₁ / (1 − r),  |r| < 1", description: "The sum of all terms of an infinite geometric series converges only when |r| < 1." },
          { name: "Geometric Mean", equation: "GM = √(a × b)", description: "The geometric mean of two positive numbers a and b. In a GP, any middle term is the GM of its neighbours." }
        ],
        definitions: [
          { term: "Sequence", text: "An ordered list of numbers arranged according to a definite rule. Each number in the list is called a term." },
          { term: "Series", text: "The sum of the terms of a sequence. If the sequence is a₁, a₂, a₃, ..., the corresponding series is Sₙ = a₁ + a₂ + ... + aₙ." },
          { term: "Arithmetic Progression (AP)", text: "A sequence in which each term after the first is obtained by adding a fixed constant called the common difference (d) to the preceding term." },
          { term: "Common Difference (d)", text: "The constant value added to each term in an AP to get the next term. d = aₙ₊₁ − aₙ." },
          { term: "Geometric Progression (GP)", text: "A sequence in which each term after the first is obtained by multiplying the preceding term by a fixed constant called the common ratio (r)." },
          { term: "Common Ratio (r)", text: "The constant value by which each term in a GP is multiplied to get the next term. r = aₙ₊₁ / aₙ." },
          { term: "Convergent Series", text: "An infinite series whose sum approaches a finite limit. An infinite GP with |r| < 1 is convergent with sum S∞ = a/(1−r)." },
          { term: "Divergent Series", text: "An infinite series whose partial sums do not approach a finite limit. An infinite GP with |r| ≥ 1 is divergent." }
        ],
        shortQA: [
          { q: "What is the condition for an infinite GP to have a finite sum?", a: "The infinite GP converges (has a finite sum) only when |r| < 1, i.e., the common ratio is between −1 and 1 (exclusive). The sum is S∞ = a₁/(1 − r)." },
          { q: "Find the 10th term of the AP: 3, 7, 11, 15, ...", a: "Here a₁ = 3 and d = 7 − 3 = 4. Using aₙ = a₁ + (n−1)d: a₁₀ = 3 + (10−1)(4) = 3 + 36 = 39." },
          { q: "How many terms are there in the AP: 5, 8, 11, ..., 50?", a: "a₁ = 5, d = 3, aₙ = 50. Using aₙ = a₁ + (n−1)d: 50 = 5 + (n−1)3 → 45 = 3(n−1) → n − 1 = 15 → n = 16. There are 16 terms." },
          { q: "What is the difference between an AP and a GP?", a: "In an AP, consecutive terms have a constant difference (d = aₙ₊₁ − aₙ). In a GP, consecutive terms have a constant ratio (r = aₙ₊₁/aₙ)." },
          { q: "Insert 3 arithmetic means between 2 and 18.", a: "With 3 means, there are 5 terms total: a₁ = 2, a₅ = 18. d = (18 − 2)/(5−1) = 16/4 = 4. The means are 6, 10, 14. Sequence: 2, 6, 10, 14, 18." }
        ],
        quiz: {
          q: "What is the sum of the first 10 terms of the AP: 2, 5, 8, 11, ...?",
          options: ["155", "145", "150", "160"],
          correctIdx: 0,
          explanation: "a₁ = 2, d = 3, n = 10. Sₙ = n/2 × [2a₁ + (n−1)d] = 10/2 × [4 + 27] = 5 × 31 = 155."
        }
      },
      {
        num: 5,
        title: "Polynomials",
        summary: "A polynomial is an expression of variables raised to non-negative integer powers. This chapter covers the Remainder Theorem, Factor Theorem, synthetic division, finding zeros of polynomials, and resolving rational expressions into Partial Fractions — a key technique for simplifying complex fractions in calculus and algebra.",
        formulas: [
          { name: "Remainder Theorem", equation: "When p(x) is divided by (x − a), the remainder R = p(a)", description: "To find the remainder when a polynomial p(x) is divided by (x − a), simply substitute x = a into p(x)." },
          { name: "Factor Theorem", equation: "(x − a) is a factor of p(x) ⟺ p(a) = 0", description: "A special case of the Remainder Theorem: if the remainder is zero, then (x − a) is a factor." },
          { name: "Synthetic Division Step", equation: "Bring down leading coefficient; multiply by root; add to next coefficient; repeat", description: "An efficient shorthand for dividing a polynomial by a linear factor (x − a)." },
          { name: "Partial Fractions (Distinct Linear Factors)", equation: "p(x)/[(x−a)(x−b)] = A/(x−a) + B/(x−b)", description: "Resolve by multiplying both sides by the denominator and comparing coefficients or substituting values." },
          { name: "Partial Fractions (Repeated Linear Factor)", equation: "p(x)/(x−a)² = A/(x−a) + B/(x−a)²", description: "Each power of the repeated factor gets its own fraction term." },
          { name: "Partial Fractions (Irreducible Quadratic)", equation: "p(x)/[(x−a)(x²+bx+c)] = A/(x−a) + (Bx+C)/(x²+bx+c)", description: "The numerator of an irreducible quadratic factor must be a linear expression (Bx + C)." }
        ],
        definitions: [
          { term: "Polynomial", text: "An algebraic expression consisting of variables (x), coefficients, and non-negative integer exponents. General form: pₙxⁿ + pₙ₋₁xⁿ⁻¹ + ... + p₁x + p₀." },
          { term: "Degree of a Polynomial", text: "The highest power of the variable in the polynomial. Example: 3x⁴ + 2x² + 1 has degree 4." },
          { term: "Zero (Root) of a Polynomial", text: "A value of x for which p(x) = 0. If (x − a) is a factor of p(x), then x = a is a zero." },
          { term: "Remainder Theorem", text: "When polynomial p(x) is divided by (x − a), the remainder equals p(a). This avoids long division for finding remainders." },
          { term: "Factor Theorem", text: "A consequence of the Remainder Theorem: (x − a) is a factor of p(x) if and only if p(a) = 0." },
          { term: "Synthetic Division", text: "A compact method of dividing a polynomial by a linear factor (x − a) using only the coefficients, without writing variables." },
          { term: "Partial Fractions", text: "The process of decomposing a proper rational fraction (degree of numerator < degree of denominator) into a sum of simpler fractions." },
          { term: "Proper Rational Fraction", text: "A fraction p(x)/q(x) where the degree of p(x) is less than the degree of q(x). If not proper, perform polynomial division first." }
        ],
        shortQA: [
          { q: "State the Remainder Theorem and give an example.", a: "When p(x) is divided by (x − a), the remainder = p(a). Example: find the remainder when p(x) = x³ − 2x + 5 is divided by (x − 2). R = p(2) = 8 − 4 + 5 = 9." },
          { q: "How does the Factor Theorem differ from the Remainder Theorem?", a: "The Remainder Theorem gives the remainder R = p(a) for any division by (x − a). The Factor Theorem is a special case: if R = p(a) = 0, then (x − a) is a factor of p(x)." },
          { q: "Show that (x − 2) is a factor of p(x) = x³ − 3x² + 4.", a: "By the Factor Theorem, p(2) must be zero. p(2) = 8 − 12 + 4 = 0. Since p(2) = 0, (x − 2) is a factor." },
          { q: "What condition must be satisfied before resolving into partial fractions?", a: "The rational fraction must be proper, i.e., the degree of the numerator must be less than the degree of the denominator. If not, divide first to obtain a polynomial plus a proper fraction." },
          { q: "Find the zeros of p(x) = x² − 5x + 6.", a: "Factoring: x² − 5x + 6 = (x − 2)(x − 3). Setting each factor to zero: x − 2 = 0 → x = 2 and x − 3 = 0 → x = 3. The zeros are x = 2 and x = 3." }
        ],
        quiz: {
          q: "What is the remainder when p(x) = x³ + 2x² − x + 3 is divided by (x − 1)?",
          options: ["5", "3", "1", "7"],
          correctIdx: 0,
          explanation: "By the Remainder Theorem, R = p(1) = 1 + 2 − 1 + 3 = 5."
        }
      },
      {
        num: 6,
        title: "Permutation, Combination and Probability",
        summary: "Permutations count arrangements where order matters; combinations count selections where order does not matter. The chapter also introduces probability as the ratio of favourable outcomes to total outcomes, covering classical probability and the addition rule.",
        formulas: [
          { name: "Factorial", equation: "n! = n × (n−1) × (n−2) × ... × 2 × 1;  0! = 1", description: "The product of all positive integers up to n. By definition, 0! = 1." },
          { name: "Permutation Formula", equation: "P(n, r) = nPr = n! / (n − r)!", description: "Number of ways to arrange r distinct objects chosen from n distinct objects (order matters)." },
          { name: "Combination Formula", equation: "C(n, r) = nCr = n! / [r! × (n − r)!]", description: "Number of ways to select r objects from n distinct objects (order does not matter)." },
          { name: "Relation between P and C", equation: "P(n, r) = r! × C(n, r)", description: "Every combination gives rise to r! permutations, so P = r! × C." },
          { name: "Classical Probability", equation: "P(E) = n(E) / n(S)", description: "Where n(E) is the number of favourable outcomes and n(S) is the total number of equally likely outcomes in sample space S." },
          { name: "Addition Rule (Mutually Exclusive)", equation: "P(A ∪ B) = P(A) + P(B)", description: "For mutually exclusive events (A ∩ B = ∅)." },
          { name: "Addition Rule (General)", equation: "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)", description: "The general addition rule for any two events A and B." }
        ],
        definitions: [
          { term: "Permutation", text: "An arrangement of objects in a specific order. The number of permutations of n objects taken r at a time is P(n, r) = n!/(n−r)!." },
          { term: "Combination", text: "A selection of objects without regard to order. The number of combinations of n objects taken r at a time is C(n, r) = n!/[r!(n−r)!]." },
          { term: "Factorial (n!)", text: "The product of all positive integers from 1 to n. Special case: 0! = 1. Example: 5! = 5 × 4 × 3 × 2 × 1 = 120." },
          { term: "Sample Space (S)", text: "The set of all possible outcomes of a random experiment." },
          { term: "Event", text: "Any subset of the sample space. A simple event has one outcome; a compound event has more than one." },
          { term: "Mutually Exclusive Events", text: "Two events A and B are mutually exclusive if they cannot occur simultaneously: P(A ∩ B) = 0." },
          { term: "Complementary Events", text: "Events A and A' (not A) are complementary: P(A) + P(A') = 1. They are mutually exclusive and exhaustive." },
          { term: "Equally Likely Outcomes", text: "Outcomes are equally likely when each outcome in the sample space has the same probability of occurrence." }
        ],
        shortQA: [
          { q: "What is the key difference between permutation and combination?", a: "In permutation, order matters (arrangement). In combination, order does not matter (selection). For example, ABC and BAC are different permutations but the same combination." },
          { q: "How many ways can 5 books be arranged on a shelf?", a: "This is a permutation of 5 objects taken all at once: P(5, 5) = 5! = 120 ways." },
          { q: "From a group of 10 students, how many committees of 4 can be formed?", a: "Order doesn't matter (a committee), so use combinations: C(10, 4) = 10!/(4! × 6!) = (10 × 9 × 8 × 7)/(4 × 3 × 2 × 1) = 210 committees." },
          { q: "A die is rolled. What is the probability of getting a number greater than 4?", a: "Sample space S = {1, 2, 3, 4, 5, 6}, n(S) = 6. Favourable outcomes (>4) = {5, 6}, n(E) = 2. P(E) = 2/6 = 1/3." },
          { q: "Prove that C(n, r) = C(n, n−r).", a: "C(n, n−r) = n!/[(n−r)! × (n−(n−r))!] = n!/[(n−r)! × r!] = C(n, r). This means choosing r objects is equivalent to leaving out (n−r) objects." }
        ],
        quiz: {
          q: "How many ways can a committee of 3 be chosen from 8 people?",
          options: ["56", "336", "24", "512"],
          correctIdx: 0,
          explanation: "Order doesn't matter for a committee: C(8, 3) = 8!/(3! × 5!) = (8 × 7 × 6)/(3 × 2 × 1) = 336/6 = 56."
        }
      },
      {
        num: 7,
        title: "Mathematical Induction and Binomial Theorem",
        summary: "Mathematical induction is a proof technique for verifying statements true for all natural numbers. The Binomial Theorem gives an algebraic formula for expanding (a + b)ⁿ for any non-negative integer n, using binomial coefficients (nCr). This chapter covers the principle of induction, Pascal's triangle, the general term, and the middle term of a binomial expansion.",
        formulas: [
          { name: "Binomial Theorem", equation: "(a + b)ⁿ = Σᵣ₌₀ⁿ C(n,r) × aⁿ⁻ʳ × bʳ", description: "Expands (a + b)ⁿ into n + 1 terms using binomial coefficients C(n, r)." },
          { name: "General Term (Tᵣ₊₁)", equation: "Tᵣ₊₁ = C(n, r) × aⁿ⁻ʳ × bʳ", description: "The (r+1)th term in the expansion of (a + b)ⁿ, where r = 0, 1, 2, ..., n." },
          { name: "Number of Terms", equation: "Total terms in (a + b)ⁿ = n + 1", description: "A binomial expansion of degree n has exactly n + 1 terms." },
          { name: "Middle Term", equation: "If n is even: T_{n/2 + 1}; If n odd: T_{(n+1)/2} and T_{(n+3)/2}", description: "For even n, there is one middle term. For odd n, there are two middle terms." },
          { name: "Pascal's Triangle Relation", equation: "C(n, r) = C(n−1, r−1) + C(n−1, r)", description: "Each interior entry of Pascal's triangle is the sum of the two entries directly above it." }
        ],
        definitions: [
          { term: "Mathematical Induction", text: "A two-step proof method to prove a statement P(n) for all natural numbers n: (1) Base step: prove P(1) is true. (2) Inductive step: assume P(k) is true and prove P(k+1) is true." },
          { term: "Inductive Hypothesis", text: "The assumption made in the inductive step: we assume the statement P(k) is true for some arbitrary natural number k." },
          { term: "Binomial Theorem", text: "A formula that provides the expansion of (a + b)ⁿ for any non-negative integer n as a sum of n+1 terms involving binomial coefficients." },
          { term: "Binomial Coefficient C(n,r)", text: "The coefficient of the (r+1)th term in the expansion of (a + b)ⁿ, equal to n!/[r!(n−r)!]. Also written as ⁿCᵣ or (n choose r)." },
          { term: "General Term", text: "Tᵣ₊₁ = C(n, r) aⁿ⁻ʳ bʳ is the general (r+1)th term of (a+b)ⁿ. Setting r to a specific value gives any particular term." },
          { term: "Pascal's Triangle", text: "A triangular arrangement of binomial coefficients where each entry is the sum of the two above it. Row n gives the coefficients for (a+b)ⁿ." }
        ],
        shortQA: [
          { q: "State the two steps of the Principle of Mathematical Induction.", a: "Step 1 (Base Case): Verify that the statement P(n) is true for n = 1. Step 2 (Inductive Step): Assume P(k) is true (inductive hypothesis), then prove P(k+1) is also true." },
          { q: "Write the first four terms of (x + y)⁵ using the Binomial Theorem.", a: "T₁ = C(5,0)x⁵y⁰ = x⁵. T₂ = C(5,1)x⁴y = 5x⁴y. T₃ = C(5,2)x³y² = 10x³y². T₄ = C(5,3)x²y³ = 10x²y³." },
          { q: "Find the general term in the expansion of (2x − 3y)⁶.", a: "Tᵣ₊₁ = C(6, r)(2x)⁶⁻ʳ(−3y)ʳ = C(6, r) × 2⁶⁻ʳ × (−3)ʳ × x⁶⁻ʳ × yʳ, for r = 0, 1, 2, ..., 6." },
          { q: "How many terms are in the expansion of (a + b)¹²?", a: "The number of terms = n + 1 = 12 + 1 = 13 terms." },
          { q: "Find the middle term in the expansion of (x + 1/x)⁸.", a: "n = 8 (even), so the middle term is T_{n/2 + 1} = T₅. T₅ = C(8, 4) x⁴ (1/x)⁴ = 70 × x⁴/x⁴ = 70." }
        ],
        quiz: {
          q: "In the expansion of (a + b)ⁿ, how many terms are there?",
          options: ["n terms", "n + 1 terms", "2n terms", "n − 1 terms"],
          correctIdx: 1,
          explanation: "The Binomial Theorem gives exactly n + 1 terms for (a + b)ⁿ, corresponding to r = 0, 1, 2, ..., n."
        }
      },
      {
        num: 8,
        title: "Fundamentals of Trigonometry",
        summary: "Trigonometry studies the relationships between angles and sides of triangles. This chapter covers angle measurement in degrees and radians, the six trigonometric ratios (sin, cos, tan, csc, sec, cot), Pythagorean identities, signs of ratios in four quadrants, and inverse trigonometric functions.",
        formulas: [
          { name: "Radian-Degree Conversion", equation: "π rad = 180°;  θ(rad) = θ(°) × π/180", description: "To convert degrees to radians multiply by π/180. To convert radians to degrees multiply by 180/π." },
          { name: "Arc Length", equation: "l = r × θ", description: "Arc length l is the product of radius r and the central angle θ in radians." },
          { name: "First Pythagorean Identity", equation: "sin²θ + cos²θ = 1", description: "Fundamental identity derived from the unit circle definition." },
          { name: "Second Pythagorean Identity", equation: "1 + tan²θ = sec²θ", description: "Divide the first identity by cos²θ." },
          { name: "Third Pythagorean Identity", equation: "1 + cot²θ = csc²θ", description: "Divide the first identity by sin²θ." },
          { name: "Reciprocal Ratios", equation: "csc θ = 1/sin θ;  sec θ = 1/cos θ;  cot θ = 1/tan θ", description: "The three reciprocal trigonometric ratios." },
          { name: "Quotient Identities", equation: "tan θ = sin θ / cos θ;  cot θ = cos θ / sin θ", description: "Tangent and cotangent expressed in terms of sine and cosine." }
        ],
        definitions: [
          { term: "Angle", text: "Formed by rotating a ray from its initial position (initial side) to a terminal position (terminal side) about a fixed point (vertex). Positive angles are measured counter-clockwise." },
          { term: "Radian", text: "The angle subtended at the centre of a circle by an arc equal in length to the radius. 1 radian ≈ 57.3°. There are 2π radians in a full circle." },
          { term: "Trigonometric Ratios", text: "For a right-angled triangle: sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, tan θ = opposite/adjacent." },
          { term: "Pythagorean Identity", text: "sin²θ + cos²θ = 1, along with its derived forms 1 + tan²θ = sec²θ and 1 + cot²θ = csc²θ." },
          { term: "ASTC Rule (Quadrant Signs)", text: "All ratios positive in Quadrant I, Sin positive in Q-II, Tan positive in Q-III, Cos positive in Q-IV. Remembered as All Students Take Calculus." },
          { term: "Cosecant (csc)", text: "The reciprocal of sine: csc θ = 1/sin θ = hypotenuse/opposite. Undefined when sin θ = 0." },
          { term: "Secant (sec)", text: "The reciprocal of cosine: sec θ = 1/cos θ = hypotenuse/adjacent. Undefined when cos θ = 0." },
          { term: "Cotangent (cot)", text: "The reciprocal of tangent: cot θ = cos θ/sin θ = adjacent/opposite. Undefined when sin θ = 0." }
        ],
        shortQA: [
          { q: "Convert 150° to radians.", a: "Multiply by π/180: 150 × π/180 = 5π/6 radians." },
          { q: "Convert 3π/4 radians to degrees.", a: "Multiply by 180/π: (3π/4) × (180/π) = 3 × 45 = 135°." },
          { q: "Prove that sin²θ + cos²θ = 1.", a: "In a right triangle with hypotenuse h, opposite p, adjacent b: sin θ = p/h, cos θ = b/h. sin²θ + cos²θ = p²/h² + b²/h² = (p² + b²)/h² = h²/h² = 1, using Pythagoras: p² + b² = h²." },
          { q: "In which quadrant is sin θ negative and cos θ positive?", a: "Quadrant IV (between 270° and 360°). Using ASTC: only cosine (and sec) are positive in Q-IV." },
          { q: "Find sin θ if cos θ = 3/5 and θ is in the first quadrant.", a: "Using sin²θ + cos²θ = 1: sin²θ = 1 − 9/25 = 16/25. sin θ = 4/5 (positive in Q-I)." }
        ],
        quiz: {
          q: "Which Pythagorean identity is obtained by dividing sin²θ + cos²θ = 1 by cos²θ?",
          options: ["1 + cot²θ = csc²θ", "tan²θ + 1 = sec²θ", "sin²θ = 1 − cos²θ", "sec²θ − 1 = tan²θ"],
          correctIdx: 1,
          explanation: "Dividing sin²θ + cos²θ = 1 by cos²θ gives tan²θ + 1 = sec²θ, which is the same as 1 + tan²θ = sec²θ."
        }
      },
      {
        num: 9,
        title: "Trigonometric Functions",
        summary: "This chapter extends trigonometry to functions defined over all real numbers using the unit circle. It covers compound angle formulas (sum and difference of two angles), double-angle formulas, half-angle formulas, product-to-sum and sum-to-product identities, and their application in proving trigonometric identities and solving equations.",
        formulas: [
          { name: "Sin of Sum/Difference", equation: "sin(A ± B) = sin A cos B ± cos A sin B", description: "Sine compound angle formulas for addition and subtraction." },
          { name: "Cos of Sum/Difference", equation: "cos(A ± B) = cos A cos B ∓ sin A sin B", description: "Note: the sign flips compared to the sine formula." },
          { name: "Tan of Sum/Difference", equation: "tan(A ± B) = (tan A ± tan B) / (1 ∓ tan A tan B)", description: "Tangent compound angle identities." },
          { name: "Double Angle (Sin)", equation: "sin 2A = 2 sin A cos A", description: "Set B = A in the sine sum formula." },
          { name: "Double Angle (Cos)", equation: "cos 2A = cos²A − sin²A = 1 − 2sin²A = 2cos²A − 1", description: "Three equivalent forms of the cosine double-angle identity." },
          { name: "Double Angle (Tan)", equation: "tan 2A = 2 tan A / (1 − tan²A)", description: "Set B = A in the tangent sum formula." },
          { name: "Half Angle (Sin)", equation: "sin(A/2) = ±√[(1 − cos A)/2]", description: "Sign depends on the quadrant of A/2." },
          { name: "Half Angle (Cos)", equation: "cos(A/2) = ±√[(1 + cos A)/2]", description: "Sign depends on the quadrant of A/2." },
          { name: "Product to Sum", equation: "2 sin A cos B = sin(A+B) + sin(A−B)", description: "Converts a product of sin and cos into a sum." }
        ],
        definitions: [
          { term: "Compound Angle", text: "An angle expressed as the sum or difference of two other angles. For example, 75° = 45° + 30° is a compound angle." },
          { term: "Double Angle Formulas", text: "Identities that express trigonometric functions of 2A in terms of functions of A. Derived by setting B = A in compound angle formulas." },
          { term: "Half Angle Formulas", text: "Identities expressing trig functions of A/2 in terms of cos A. Useful for exact values and integration." },
          { term: "Period of Trigonometric Functions", text: "The period of sin x and cos x is 2π. The period of tan x and cot x is π. The period of sec x and csc x is 2π." },
          { term: "Even Function", text: "A function f where f(−x) = f(x). Cosine is an even function: cos(−θ) = cos θ." },
          { term: "Odd Function", text: "A function f where f(−x) = −f(x). Sine and tangent are odd functions: sin(−θ) = −sin θ, tan(−θ) = −tan θ." },
          { term: "Trigonometric Identity", text: "An equation involving trig functions that is true for all values of the variable for which both sides are defined." }
        ],
        shortQA: [
          { q: "Find the exact value of sin 75°.", a: "Write 75° = 45° + 30°. sin 75° = sin(45° + 30°) = sin 45° cos 30° + cos 45° sin 30° = (√2/2)(√3/2) + (√2/2)(1/2) = √6/4 + √2/4 = (√6 + √2)/4." },
          { q: "Derive the double angle formula for sin 2A.", a: "Using sin(A + B) = sin A cos B + cos A sin B, set B = A: sin(A + A) = sin A cos A + cos A sin A = 2 sin A cos A. Therefore sin 2A = 2 sin A cos A." },
          { q: "Express cos 2A in terms of sin A only.", a: "Using cos 2A = cos²A − sin²A and substituting cos²A = 1 − sin²A: cos 2A = (1 − sin²A) − sin²A = 1 − 2 sin²A." },
          { q: "Why is cosine called an even function?", a: "Because cos(−θ) = cos θ for all θ. On a graph, an even function is symmetric about the y-axis. Cosine satisfies this: its value does not change when θ is replaced by −θ." },
          { q: "State the period of sin x, cos x, and tan x.", a: "sin x and cos x have period 2π (they repeat every 2π radians or 360°). tan x has period π (it repeats every π radians or 180°)." }
        ],
        quiz: {
          q: "Which of the following equals sin(A + B)?",
          options: [
            "sin A cos B − cos A sin B",
            "sin A cos B + cos A sin B",
            "cos A cos B − sin A sin B",
            "cos A cos B + sin A sin B"
          ],
          correctIdx: 1,
          explanation: "sin(A + B) = sin A cos B + cos A sin B. This is the standard compound angle formula for sine addition."
        }
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

const MATHS_FORMULA_SHEET = [
  {
    unit: "Ch 1: Complex Numbers",
    formulas: [
      { concept: "Standard Form", equation: "z = a + bi,  i² = −1" },
      { concept: "Modulus", equation: "|z| = √(a² + b²)" },
      { concept: "Conjugate", equation: "z̄ = a − bi;  z · z̄ = |z|² = a² + b²" },
      { concept: "Polar Form", equation: "z = r(cosθ + i sinθ) = r cis θ;  r = |z|, θ = arg(z)" },
      { concept: "De Moivre's Theorem", equation: "zⁿ = rⁿ(cos nθ + i sin nθ)" },
      { concept: "Product", equation: "z₁z₂ = r₁r₂ cis(θ₁ + θ₂)" },
      { concept: "Quotient", equation: "z₁/z₂ = (r₁/r₂) cis(θ₁ − θ₂)" }
    ]
  },
  {
    unit: "Ch 2: Matrices and Determinants",
    formulas: [
      { concept: "det of 2×2", equation: "|A| = ad − bc  for  A = [[a,b],[c,d]]" },
      { concept: "det of 3×3 (cofactor expansion)", equation: "|A| = a₁₁C₁₁ + a₁₂C₁₂ + a₁₃C₁₃" },
      { concept: "Cofactor", equation: "Cᵢⱼ = (−1)^(i+j) Mᵢⱼ" },
      { concept: "Inverse", equation: "A⁻¹ = (1/|A|) × adj(A)" },
      { concept: "Cramer's Rule", equation: "x = |Aₓ|/|A|,  y = |Aᵧ|/|A|,  z = |A_z|/|A|" },
      { concept: "Properties", equation: "|AB| = |A||B|;  |Aᵀ| = |A|;  |A⁻¹| = 1/|A|" }
    ]
  },
  {
    unit: "Ch 3: Vectors",
    formulas: [
      { concept: "Magnitude", equation: "|A| = √(Aₓ² + Aᵧ² + A_z²)" },
      { concept: "Unit Vector", equation: "Â = A / |A|" },
      { concept: "Dot Product", equation: "A · B = |A||B|cosθ = AₓBₓ + AᵧBᵧ + A_zB_z" },
      { concept: "Cross Product (magnitude)", equation: "|A × B| = |A||B|sinθ" },
      { concept: "Cross Product (det form)", equation: "A × B = |î ĵ k̂; Aₓ Aᵧ A_z; Bₓ Bᵧ B_z|" },
      { concept: "Angle between vectors", equation: "cosθ = (A · B) / (|A||B|)" },
      { concept: "Area of parallelogram", equation: "Area = |A × B|" },
      { concept: "Area of triangle", equation: "Area = ½|A × B|" },
      { concept: "Perpendicularity test", equation: "A ⊥ B ⟺ A · B = 0" },
      { concept: "Parallelism test", equation: "A ∥ B ⟺ A × B = 0" }
    ]
  },
  {
    unit: "Ch 4: Sequences and Series",
    formulas: [
      { concept: "AP — nth Term", equation: "aₙ = a₁ + (n − 1)d" },
      { concept: "AP — Sum of n terms", equation: "Sₙ = n/2 [2a₁ + (n−1)d] = n/2 (a₁ + aₙ)" },
      { concept: "Arithmetic Mean", equation: "AM = (a + b)/2" },
      { concept: "GP — nth Term", equation: "aₙ = a₁ rⁿ⁻¹" },
      { concept: "GP — Sum of n terms", equation: "Sₙ = a₁(1 − rⁿ)/(1 − r),  r ≠ 1" },
      { concept: "Infinite GP (|r| < 1)", equation: "S∞ = a₁/(1 − r)" },
      { concept: "Geometric Mean", equation: "GM = √(ab)" }
    ]
  },
  {
    unit: "Ch 5: Polynomials",
    formulas: [
      { concept: "Remainder Theorem", equation: "Remainder of p(x) ÷ (x − a) = p(a)" },
      { concept: "Factor Theorem", equation: "(x − a) is a factor ⟺ p(a) = 0" },
      { concept: "Partial Fractions — Distinct Linear", equation: "N/[(x−a)(x−b)] = A/(x−a) + B/(x−b)" },
      { concept: "Partial Fractions — Repeated Linear", equation: "N/(x−a)² = A/(x−a) + B/(x−a)²" },
      { concept: "Partial Fractions — Quadratic", equation: "N/[(x−a)(x²+bx+c)] = A/(x−a) + (Bx+C)/(x²+bx+c)" }
    ]
  },
  {
    unit: "Ch 6: Permutation, Combination and Probability",
    formulas: [
      { concept: "Factorial", equation: "n! = n(n−1)(n−2)···2·1;  0! = 1" },
      { concept: "Permutation", equation: "P(n,r) = n!/(n−r)!" },
      { concept: "Combination", equation: "C(n,r) = n!/[r!(n−r)!]" },
      { concept: "Relation", equation: "P(n,r) = r! × C(n,r)" },
      { concept: "Classical Probability", equation: "P(E) = n(E)/n(S)" },
      { concept: "Complementary", equation: "P(A') = 1 − P(A)" },
      { concept: "Addition Rule (general)", equation: "P(A∪B) = P(A) + P(B) − P(A∩B)" },
      { concept: "Addition Rule (mutually exclusive)", equation: "P(A∪B) = P(A) + P(B)" }
    ]
  },
  {
    unit: "Ch 7: Mathematical Induction and Binomial Theorem",
    formulas: [
      { concept: "Binomial Theorem", equation: "(a+b)ⁿ = Σᵣ₌₀ⁿ C(n,r) aⁿ⁻ʳ bʳ" },
      { concept: "General Term", equation: "Tᵣ₊₁ = C(n,r) aⁿ⁻ʳ bʳ" },
      { concept: "Number of Terms", equation: "Total terms = n + 1" },
      { concept: "Middle Term (n even)", equation: "T_{n/2 + 1}" },
      { concept: "Middle Terms (n odd)", equation: "T_{(n+1)/2} and T_{(n+3)/2}" },
      { concept: "Pascal's Relation", equation: "C(n,r) = C(n−1,r−1) + C(n−1,r)" }
    ]
  },
  {
    unit: "Ch 8: Fundamentals of Trigonometry",
    formulas: [
      { concept: "Degree ↔ Radian", equation: "θ_rad = θ° × π/180;  θ° = θ_rad × 180/π" },
      { concept: "Arc Length", equation: "l = rθ  (θ in radians)" },
      { concept: "Area of Sector", equation: "A = ½r²θ" },
      { concept: "Pythagorean I", equation: "sin²θ + cos²θ = 1" },
      { concept: "Pythagorean II", equation: "1 + tan²θ = sec²θ" },
      { concept: "Pythagorean III", equation: "1 + cot²θ = csc²θ" },
      { concept: "Reciprocals", equation: "csc θ = 1/sinθ;  sec θ = 1/cosθ;  cot θ = 1/tanθ" },
      { concept: "Quotient", equation: "tan θ = sinθ/cosθ;  cot θ = cosθ/sinθ" }
    ]
  },
  {
    unit: "Ch 9: Trigonometric Identities (Compound Angles)",
    formulas: [
      { concept: "sin(A ± B)", equation: "sin(A±B) = sinA cosB ± cosA sinB" },
      { concept: "cos(A ± B)", equation: "cos(A±B) = cosA cosB ∓ sinA sinB" },
      { concept: "tan(A ± B)", equation: "tan(A±B) = (tanA ± tanB)/(1 ∓ tanA tanB)" },
      { concept: "Double Angle sin", equation: "sin 2A = 2 sinA cosA" },
      { concept: "Double Angle cos", equation: "cos 2A = cos²A − sin²A = 1 − 2sin²A = 2cos²A − 1" },
      { concept: "Double Angle tan", equation: "tan 2A = 2tanA/(1 − tan²A)" },
      { concept: "Half Angle sin", equation: "sin(A/2) = ±√[(1 − cosA)/2]" },
      { concept: "Half Angle cos", equation: "cos(A/2) = ±√[(1 + cosA)/2]" },
      { concept: "Product to Sum", equation: "2sinA cosB = sin(A+B) + sin(A−B)" },
      { concept: "Period", equation: "sin, cos, sec, csc: 2π;  tan, cot: π" }
    ]
  }
];

SUBJECTS_DATA.maths.formulaSheet = MATHS_FORMULA_SHEET;

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
