const scienceQuestions = [
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2"],
    correct: "H2O",
  },
  {
    question: "What planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus"],
    correct: "Mars",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond"],
    correct: "Diamond",
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen"],
    correct: "Carbon Dioxide",
  },
  {
    question: "What is the speed of light?",
    options: ["300,000 km/s", "150,000 km/s", "1,000 km/s"],
    correct: "300,000 km/s",
  },
  {
    question: "What is the center of an atom called?",
    options: ["Nucleus", "Proton", "Electron"],
    correct: "Nucleus",
  },
  {
    question: "What force keeps us on the ground?",
    options: ["Magnetism", "Gravity", "Friction"],
    correct: "Gravity",
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Earth", "Venus", "Mercury"],
    correct: "Mercury",
  },
  {
    question: "What is the main gas found in Earth's atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide"],
    correct: "Nitrogen",
  },
  {
    question: "What part of the cell contains DNA?",
    options: ["Nucleus", "Cytoplasm", "Ribosome"],
    correct: "Nucleus",
  },
  {
    question: "Which organ in the human body produces insulin?",
    options: ["Liver", "Pancreas", "Kidney"],
    correct: "Pancreas",
  },
  {
    question: "What is the chemical formula for table salt?",
    options: ["NaCl", "KCl", "CaCl2"],
    correct: "NaCl",
  },
  {
    question: "What is the largest organ in the human body?",
    options: ["Heart", "Liver", "Skin"],
    correct: "Skin",
  },
  {
    question: "What is the powerhouse of the cell?",
    options: ["Mitochondria", "Ribosome", "Nucleus"],
    correct: "Mitochondria",
  },
  {
    question: "Which planet has the most moons?",
    options: ["Earth", "Jupiter", "Mars"],
    correct: "Jupiter",
  },
  {
    question: "What gas do humans exhale?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen"],
    correct: "Carbon Dioxide",
  },
  {
    question: "What is the SI unit of force?",
    options: ["Newton", "Joule", "Watt"],
    correct: "Newton",
  },
  {
    question: "What is the boiling point of water in Celsius?",
    options: ["100°C", "50°C", "200°C"],
    correct: "100°C",
  },
  {
    question: "What type of energy is stored in food?",
    options: ["Kinetic", "Chemical", "Thermal"],
    correct: "Chemical",
  },
  {
    question: "Which scientist proposed the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei"],
    correct: "Albert Einstein",
  },
  {
    question: "Which part of the plant conducts photosynthesis?",
    options: ["Root", "Stem", "Leaf"],
    correct: "Leaf",
  },
  {
    question: "What is Earth's only natural satellite?",
    options: ["Mars", "Sun", "Moon"],
    correct: "Moon",
  },
  {
    question: "Which vitamin is produced when skin is exposed to sunlight?",
    options: ["Vitamin C", "Vitamin D", "Vitamin A"],
    correct: "Vitamin D",
  },
  {
    question: "What is the most abundant element in the universe?",
    options: ["Oxygen", "Helium", "Hydrogen"],
    correct: "Hydrogen",
  },
  {
    question: "What type of blood cells help fight infections?",
    options: ["Red blood cells", "White blood cells", "Platelets"],
    correct: "White blood cells",
  },
  {
    question: "What is the smallest unit of life?",
    options: ["Molecule", "Atom", "Cell"],
    correct: "Cell",
  },
  {
    question: "What gas is necessary for human respiration?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen"],
    correct: "Oxygen",
  },
  {
    question: "Which planet has the strongest gravitational pull?",
    options: ["Saturn", "Jupiter", "Neptune"],
    correct: "Jupiter",
  },
  {
    question: "What is the Earth's core primarily made of?",
    options: ["Iron and Nickel", "Gold and Silver", "Carbon and Silicon"],
    correct: "Iron and Nickel",
  },
  {
    question: "What is the chemical formula of glucose?",
    options: ["C6H12O6", "H2O2", "NaOH"],
    correct: "C6H12O6",
  },
  {
    question: "Which scientist developed the three laws of motion?",
    options: ["Galileo Galilei", "Isaac Newton", "Nikola Tesla"],
    correct: "Isaac Newton",
  },
  {
    question: "What part of the human brain controls balance?",
    options: ["Cerebrum", "Cerebellum", "Medulla"],
    correct: "Cerebellum",
  },
  {
    question: "What is the process of water changing from liquid to gas called?",
    options: ["Condensation", "Evaporation", "Sublimation"],
    correct: "Evaporation",
  },
  {
    question: "What is the main function of red blood cells?",
    options: ["Fight infections", "Transport oxygen", "Clot blood"],
    correct: "Transport oxygen",
  },
  {
    question: "Which planet rotates on its side?",
    options: ["Mars", "Uranus", "Venus"],
    correct: "Uranus",
  },
  {
    question: "Which part of the eye controls the amount of light entering?",
    options: ["Retina", "Pupil", "Cornea"],
    correct: "Pupil",
  },
  {
    question: "What is the name of the galaxy that contains our solar system?",
    options: ["Andromeda", "Milky Way", "Triangulum"],
    correct: "Milky Way",
  },
  {
    question: "Which scientist discovered penicillin?",
    options: ["Alexander Fleming", "Marie Curie", "Louis Pasteur"],
    correct: "Alexander Fleming",
  },
  {
    question: "What is the basic unit of heredity?",
    options: ["Chromosome", "Gene", "DNA"],
    correct: "Gene",
  },
  {
    question: "What type of energy is produced by vibrating objects?",
    options: ["Thermal energy", "Sound energy", "Electrical energy"],
    correct: "Sound energy",
  },
  {
    question: "What do bees collect from flowers to make honey?",
    options: ["Pollen", "Nectar", "Sap"],
    correct: "Nectar",
  },
  {
    question: "Which vitamin is essential for blood clotting?",
    options: ["Vitamin A", "Vitamin D", "Vitamin K"],
    correct: "Vitamin K",
  },
  {
    question: "What part of the atom has a positive charge?",
    options: ["Electron", "Neutron", "Proton"],
    correct: "Proton",
  },
  {
    question: "What is the second most abundant gas in Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Argon"],
    correct: "Oxygen",
  },
  {
    question: "What is the main function of the large intestine?",
    options: ["Absorb nutrients", "Absorb water", "Produce enzymes"],
    correct: "Absorb water",
  },
  {
    question: "What do we call animals that only eat plants?",
    options: ["Omnivores", "Carnivores", "Herbivores"],
    correct: "Herbivores",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Saturn", "Jupiter", "Neptune"],
    correct: "Jupiter",
  },
  {
    question: "Which body system includes the heart and blood vessels?",
    options: ["Nervous system", "Respiratory system", "Circulatory system"],
    correct: "Circulatory system",
  },
  {
    question: "What is the Earth's outermost layer called?",
    options: ["Mantle", "Core", "Crust"],
    correct: "Crust",
  },
];

export default scienceQuestions;
