// Language translations
const translations = {
    en: {
        // Header
        logo: "Learn with AI",
        home: "Home",
        math: "Math",
        login: "Login",
        signup: "Sign Up",
        
        // Home Page
        heroTitle: "Master Math with AI Assistance",
        heroText: "Our intelligent tutor adapts to your learning style, providing personalized lessons and practice problems to help you excel in mathematics.",
        startLearning: "Start Learning Free",
        existingStudent: "Existing Student?",
        featuredSubject: "Featured Subject",
        mathDescription: "From basic arithmetic to advanced calculus, our AI tutor guides you through every mathematical concept with interactive lessons and real-time feedback.",
        exploreMath: "Explore Math",
        ctaTitle: "Ready to Transform Your Math Skills?",
        ctaText: "Join thousands of students who are mastering mathematics with our AI-powered learning platform.",
        getStarted: "Get Started Free",
        continueLogin: "Login to Continue",
        
        // Math Page
        mathTitle: "Mathematics",
        mathText: "Master mathematical concepts with our AI-powered learning system. From basic arithmetic to advanced calculus, we've got you covered.",
        arithmetic: "Arithmetic Basics",
        arithmeticDesc: "Learn addition, subtraction, multiplication, and division with interactive exercises.",
        algebra: "Algebra Fundamentals",
        algebraDesc: "Master variables, equations, and functions with step-by-step guidance.",
        geometry: "Geometry",
        geometryDesc: "Explore shapes, angles, and spatial relationships with visual learning tools.",
        calculus: "Calculus",
        calculusDesc: "Understand derivatives, integrals, and limits with AI-powered explanations.",
        statistics: "Statistics",
        statisticsDesc: "Learn data analysis, probability, and statistical methods with real-world examples.",
        problemSolving: "Problem Solving",
        problemSolvingDesc: "Develop critical thinking skills with challenging math problems and puzzles.",
        aiTutor: "AI Tutor",
        aiTutorDesc: "Get personalized explanations and step-by-step solutions tailored to your learning style.",
        interactiveExercises: "Interactive Exercises",
        interactiveExercisesDesc: "Practice with engaging, interactive problems that adapt to your skill level.",
        progressTracking: "Progress Tracking",
        progressTrackingDesc: "Monitor your improvement with detailed analytics and personalized recommendations.",
        gamification: "Gamification",
        gamificationDesc: "Earn badges and rewards as you master new concepts and complete challenges.",
        mathCtaTitle: "Ready to Master Math?",
        mathCtaText: "Join thousands of students who are transforming their math skills with our AI-powered platform.",
        
        // Auth Pages
        welcomeBack: "Welcome Back",
        signInText: "Sign in to continue your learning journey",
        email: "Email",
        enterEmail: "Enter your email",
        password: "Password",
        enterPassword: "Enter your password",
        dontHaveAccount: "Don't have an account?",
        createAccount: "Create Your Account",
        startExperience: "Start your personalized learning experience today",
        fullName: "Full Name",
        yourName: "Your full name",
        confirmPassword: "Confirm Password",
        minPassword: "Create a password (min 8 characters)",
        alreadyHaveAccount: "Already have an account?",
        
        // Learning Interface
        backToTopics: "Back to Topics",
        step: "Step",
        of: "of",
        arithmeticLessonTitle: "Understanding Basic Addition",
        arithmeticLesson1: "Addition is one of the four basic operations of arithmetic. It combines two or more numbers to form a sum.",
        arithmeticExample1: "If you have 3 apples and you get 2 more apples, how many apples do you have in total?",
        arithmeticExample1Explanation: "This means when you combine 3 and 2, the total is 5.",
        arithmeticLesson2: "The numbers being added are called \"addends\" and the result is called the \"sum\".",
        example: "Example",
        visualization: "Visualization",
        arithmeticVisualExplanation: "Visual representation helps understand how quantities combine.",
        practice: "Practice",
        arithmeticProblem1: "What is the sum of 4 and 5?",
        correct: "Correct! 🎉",
        arithmeticFeedbackCorrect: "Great job! 4 + 5 equals 9. You're getting the hang of addition!",
        incorrect: "Not Quite",
        arithmeticFeedbackIncorrect: "Remember, addition combines quantities. Try counting up from the larger number: 5... 6, 7, 8, 9.",
        submitAnswer: "Submit Answer",
        nextQuestion: "Next Question",
        previous: "Previous",
        next: "Next",
        lessonComplete: "Lesson Complete!",
        completionMessage: "Congratulations! You've completed this lesson on basic addition. You're one step closer to mastering arithmetic!",
        continueLearning: "Continue Learning",
        watchVideo: "Watch explanatory video",
        watchExample: "Watch worked example",
        watchSummary: "Watch lesson summary",
        
        // Gamification
        myProgress: "My Progress",
        dayStreak: "3-day streak",
        myBadges: "My Badges",
        starterBadge: "Starter Badge: Completed first lesson",
        streakBadge: "3-Day Streak: Learned for 3 consecutive days",
        masterBadge: "Master: Complete all lessons in a topic",
        championBadge: "Champion: Earn all badges",
        achievementUnlocked: "Achievement Unlocked!",
        starterAchievement: "Starter Badge: Completed your first lesson",
        
        // AI Chat
        aiWelcome: "Hello! I'm your AI tutor. How can I help you with your learning today?",
        askQuestion: "Ask me anything...",
        science: "Science",
        history: "History",
        language: "Language"
    },
    ro: {
        // Header
        logo: "Învață cu AI",
        home: "Acasă",
        math: "Matematică",
        login: "Autentificare",
        signup: "Înregistrare",
        
        // Home Page
        heroTitle: "Stăpânește Matematica cu Ajutorul AI",
        heroText: "Tutorul nostru inteligent se adaptează stilului tău de învățare, oferind lecții personalizate și probleme de practică pentru a te ajuta să excelezi în matematică.",
        startLearning: "Începe să Înveți Gratuit",
        existingStudent: "Ești deja student?",
        featuredSubject: "Materie Recomandată",
        mathDescription: "De la aritmetica de bază la calcul avansat, tutorul nostru AI te ghidează prin fiecare concept matematic cu lecții interactive și feedback în timp real.",
        exploreMath: "Explorează Matematica",
        ctaTitle: "Ești Gata să-ți Îmbunătățești Abilitățile Matematice?",
        ctaText: "Alătură-te miilor de studenți care stăpânesc matematica cu platforma noastră de învățare alimentată de AI.",
        getStarted: "Începe Gratuit",
        continueLogin: "Autentifică-te",
        
        // Math Page
        mathTitle: "Matematică",
        mathText: "Stăpânește concepte matematice cu sistemul nostru de învățare alimentat de AI. De la aritmetică de bază la calcul avansat, te avem acoperit.",
        arithmetic: "Bazele Aritmeticii",
        arithmeticDesc: "Învață adunarea, scăderea, înmulțirea și împărțirea cu exerciții interactive.",
        algebra: "Fundamentele Algebrei",
        algebraDesc: "Stăpânește variabilele, ecuațiile și funcțiile cu ghidare pas cu pas.",
        geometry: "Geometrie",
        geometryDesc: "Explorează forme, unghiuri și relații spațiale cu instrumente vizuale de învățare.",
        calculus: "Calcul",
        calculusDesc: "Înțelege derivatele, integralele și limitele cu explicații bazate pe AI.",
        statistics: "Statistică",
        statisticsDesc: "Învață analiza datelor, probabilitatea și metodele statistice cu exemple din lumea reală.",
        problemSolving: "Rezolvare de Probleme",
        problemSolvingDesc: "Dezvoltă abilități de gândire critică cu probleme și puzzle-uri matematice provocatoare.",
        aiTutor: "Tutor AI",
        aiTutorDesc: "Obține explicații personalizate și soluții pas cu pas adaptate stilului tău de învățare.",
        interactiveExercises: "Exerciții Interactive",
        interactiveExercisesDesc: "Exersează cu probleme interactive care se adaptează la nivelul tău de abilitate.",
        progressTracking: "Urmărire Progres",
        progressTrackingDesc: "Monitorizează îmbunătățirea ta cu analize detaliate și recomandări personalizate.",
        gamification: "Gamificare",
        gamificationDesc: "Câștigă insigne și recompense pe măsură ce stăpânești noi concepte și completezi provocări.",
        mathCtaTitle: "Ești Gata să Stăpânești Matematica?",
        mathCtaText: "Alătură-te miilor de studenți care își transformă abilitățile matematice cu platforma noastră alimentată de AI.",
        
        // Auth Pages
        welcomeBack: "Bine ai revenit",
        signInText: "Autentifică-te pentru a-ți continua călătoria de învățare",
        email: "Email",
        enterEmail: "Introdu adresa de email",
        password: "Parolă",
        enterPassword: "Introdu parola",
        dontHaveAccount: "Nu ai un cont?",
        createAccount: "Creează Cont",
        startExperience: "Începe experiența ta personalizată de învățare astăzi",
        fullName: "Nume complet",
        yourName: "Numele tău complet",
        confirmPassword: "Confirmă Parola",
        minPassword: "Creează o parolă (minim 8 caractere)",
        alreadyHaveAccount: "Ai deja un cont?",
        
        // Learning Interface
        backToTopics: "Înapoi la Subiecte",
        step: "Pasul",
        of: "din",
        arithmeticLessonTitle: "Înțelegerea Adunării de Bază",
        arithmeticLesson1: "Adunarea este una dintre cele patru operații aritmetice de bază. Combină două sau mai multe numere pentru a forma o sumă.",
        arithmeticExample1: "Dacă ai 3 mere și primești încă 2 mere, câte mere ai în total?",
        arithmeticExample1Explanation: "Aceasta înseamnă că atunci când combini 3 și 2, totalul este 5.",
        arithmeticLesson2: "Numerele care se adună se numesc \"termeni\" iar rezultatul se numește \"sumă\".",
        example: "Exemplu",
        visualization: "Vizualizare",
        arithmeticVisualExplanation: "Reprezentarea vizuală ajută la înțelegerea modului în care se combină cantitățile.",
        practice: "Exercițiu",
        arithmeticProblem1: "Care este suma dintre 4 și 5?",
        correct: "Corect! 🎉",
        arithmeticFeedbackCorrect: "Foarte bine! 4 + 5 este egal cu 9. Începi să înțelegi adunarea!",
        incorrect: "Nu chiar",
        arithmeticFeedbackIncorrect: "Ține minte, adunarea combină cantități. Încearcă să numeri pornind de la numărul mai mare: 5... 6, 7, 8, 9.",
        submitAnswer: "Trimite Răspunsul",
        nextQuestion: "Următoarea Întrebare",
        previous: "Anterior",
        next: "Următorul",
        lessonComplete: "Lecție Finalizată!",
        completionMessage: "Felicitări! Ai finalizat această lecție despre adunarea de bază. Ești cu un pas mai aproape de a stăpâni aritmetica!",
        continueLearning: "Continuă Învățarea",
        watchVideo: "Urmărește videoclip explicativ",
        watchExample: "Urmărește exemplu rezolvat",
        watchSummary: "Urmărește rezumatul lecției",
        
        // Gamification
        myProgress: "Progresul meu",
        dayStreak: "Șir de 3 zile",
        myBadges: "Insignele mele",
        starterBadge: "Insigna Începător: Ai finalizat prima lecție",
        streakBadge: "Șir de 3 Zile: Ai învățat timp de 3 zile consecutive",
        masterBadge: "Maestru: Finalizează toate lecțiile dintr-un subiect",
        championBadge: "Campion: Câștigă toate insignele",
        achievementUnlocked: "Realizare Deblocată!",
        starterAchievement: "Insigna Începător: Ai finalizat prima lecție",
        
        // AI Chat
        aiWelcome: "Bună! Sunt tutorul tău AI. Cu ce te pot ajuta în învățarea ta astăzi?",
        askQuestion: "Întreabă-mă orice...",
        science: "Știință",
        history: "Istorie",
        language: "Limba"
    }
};

// Video Resources - Replace with your actual YouTube video IDs
const videoResources = {
    en: {
        arithmetic: {
            lesson: "https://www.youtube.com/embed/Aq8l2cdjWtE", // Basic addition
            practice: "https://www.youtube.com/embed/Fe8u2I3vmHU", // Addition examples
            summary: "https://www.youtube.com/embed/Fe8u2I3vmHU"  // Addition summary
        },
        algebra: {
            lesson: "https://www.youtube.com/embed/NybHckSEQBI", // Basic algebra
            practice: "https://www.youtube.com/embed/WgESpw4_J5s", // Algebra examples
            summary: "https://www.youtube.com/embed/WgESpw4_J5s"  // Algebra summary
        },
        geometry: {
            lesson: "https://www.youtube.com/embed/3S1jZ4xWrN4", // Basic geometry
            practice: "https://www.youtube.com/embed/3S1jZ4xWrN4", // Geometry examples
            summary: "https://www.youtube.com/embed/3S1jZ4xWrN4"  // Geometry summary
        },
        calculus: {
            lesson: "https://www.youtube.com/embed/5yfh5cf4-0w", // Basic calculus
            practice: "https://www.youtube.com/embed/5yfh5cf4-0w", // Calculus examples
            summary: "https://www.youtube.com/embed/5yfh5cf4-0w"  // Calculus summary
        },
        statistics: {
            lesson: "https://www.youtube.com/embed/xxpc-HPKN28", // Basic statistics
            practice: "https://www.youtube.com/embed/xxpc-HPKN28", // Statistics examples
            summary: "https://www.youtube.com/embed/xxpc-HPKN28"  // Statistics summary
        },
        problemSolving: {
            lesson: "https://www.youtube.com/embed/6sBB-gRhfjE", // Problem solving
            practice: "https://www.youtube.com/embed/6sBB-gRhfjE", // Problem examples
            summary: "https://www.youtube.com/embed/6sBB-gRhfjE"  // Problem solving summary
        }
    },
    ro: {
        arithmetic: {
            lesson: "https://www.youtube.com/embed/ABC123", // Romanian addition video
            practice: "https://www.youtube.com/embed/DEF456", // Romanian examples
            summary: "https://www.youtube.com/embed/GHI789"  // Romanian summary
        },
        algebra: {
            lesson: "https://www.youtube.com/embed/JKL012", // Romanian algebra video
            practice: "https://www.youtube.com/embed/MNO345", // Romanian examples
            summary: "https://www.youtube.com/embed/PQR678"  // Romanian summary
        },
        geometry: {
            lesson: "https://www.youtube.com/embed/STU901", // Romanian geometry video
            practice: "https://www.youtube.com/embed/VWX234", // Romanian examples
            summary: "https://www.youtube.com/embed/YZA567"  // Romanian summary
        },
        calculus: {
            lesson: "https://www.youtube.com/embed/BCD890", // Romanian calculus video
            practice: "https://www.youtube.com/embed/EFG123", // Romanian examples
            summary: "https://www.youtube.com/embed/HIJ456"  // Romanian summary
        },
        statistics: {
            lesson: "https://www.youtube.com/embed/KLM789", // Romanian statistics video
            practice: "https://www.youtube.com/embed/NOP012", // Romanian examples
            summary: "https://www.youtube.com/embed/QRS345"  // Romanian summary
        },
        problemSolving: {
            lesson: "https://www.youtube.com/embed/TUV678", // Romanian problem solving video
            practice: "https://www.youtube.com/embed/WXY901", // Romanian examples
            summary: "https://www.youtube.com/embed/YZA234"  // Romanian summary
        }
    }
};

// Current language
let currentLanguage = 'en';

// Function to translate the page
function translatePage(lang) {
    currentLanguage = lang;
    document.getElementById('languageSelect').value = lang;
    
    // Get all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    
    // Translate each element
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Translate placeholders
    const inputs = document.querySelectorAll('[data-i18n-placeholder]');
    inputs.forEach(input => {
        const key = input.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            input.placeholder = translations[lang][key];
        }
    });
    
    // Update lesson content if on learning page
    if (document.getElementById('learningPage').classList.contains('active')) {
        updateLessonContent();
    }
}

// Initialize language from localStorage or browser preference
function initLanguage() {
    const savedLang = localStorage.getItem('language');
    const browserLang = navigator.language.substring(0, 2);
    
    if (savedLang) {
        currentLanguage = savedLang;
    } else if (browserLang === 'ro') {
        currentLanguage = 'ro';
    }
    
    translatePage(currentLanguage);
}

// Page Management System
const pages = {
    home: document.getElementById('homePage'),
    math: document.getElementById('mathPage'),
    login: document.getElementById('loginPage'),
    signup: document.getElementById('signupPage'),
    learning: document.getElementById('learningPage')
};

// Show a specific page and hide others
function showPage(pageId) {
    Object.keys(pages).forEach(key => {
        if (key === pageId) {
            pages[key].classList.add('active');
            
            // Animate progress bars when math page is shown
            if (key === 'math') {
                setTimeout(() => {
                    document.querySelectorAll('.progress-bar').forEach(bar => {
                        const targetWidth = bar.style.width;
                        bar.style.width = '0';
                        setTimeout(() => {
                            bar.style.width = targetWidth;
                        }, 100);
                    });
                }, 500);
            }
            
            // Reset learning interface when showing learning page
            if (key === 'learning') {
                resetPracticeInterface();
            }
        } else {
            pages[key].classList.remove('active');
        }
    });
    window.scrollTo(0, 0);
}

// Function to load video into placeholder
function loadVideo(containerId, placeholderId, videoUrl) {
    const container = document.getElementById(containerId);
    const placeholder = document.getElementById(placeholderId);
    
    // Clear any existing iframe
    container.innerHTML = '';
    container.appendChild(placeholder);
    
    placeholder.addEventListener('click', function() {
        container.innerHTML = `
            <iframe class="video-iframe" src="${videoUrl}?autoplay=1&rel=0" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
        `;
    });
}

// Set home as default page
showPage('home');

// Navigation event listeners
document.getElementById('homeLink').addEventListener('click', (e) => {
    e.preventDefault();
    showPage('home');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showPage(link.dataset.page);
    });
});

// Auth navigation
document.getElementById('loginNavBtn').addEventListener('click', () => showPage('login'));
document.getElementById('signupNavBtn').addEventListener('click', () => showPage('signup'));
document.getElementById('heroLoginBtn').addEventListener('click', () => showPage('login'));
document.getElementById('heroSignupBtn').addEventListener('click', () => showPage('signup'));
document.getElementById('cardSignupBtn').addEventListener('click', () => showPage('math'));
document.getElementById('ctaLoginBtn').addEventListener('click', () => showPage('login'));
document.getElementById('ctaSignupBtn').addEventListener('click', () => showPage('signup'));
document.getElementById('switchToLogin').addEventListener('click', (e) => {
    e.preventDefault();
    showPage('login');
});
document.getElementById('switchToSignup').addEventListener('click', (e) => {
    e.preventDefault();
    showPage('signup');
});

// Language selector event
document.getElementById('languageSelect').addEventListener('change', (e) => {
    const lang = e.target.value;
    localStorage.setItem('language', lang);
    translatePage(lang);
});

// Dark mode toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌓';
});

// Check for saved theme preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}

// Form submissions
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert(currentLanguage === 'en' ? 'Login successful! Redirecting to dashboard...' : 'Autentificare reușită! Redirecționare către panoul de control...');
    // In a real app, you would handle authentication here
});

document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;
    
    if (password !== confirm) {
        alert(currentLanguage === 'en' ? 'Passwords do not match!' : 'Parolele nu se potrivesc!');
        return;
    }
    
    alert(currentLanguage === 'en' ? 'Account created successfully! Redirecting to dashboard...' : 'Cont creat cu succes! Redirecționare către panoul de control...');
    // In a real app, you would handle registration here
});

// Enhanced button animations
const authButtons = document.querySelectorAll('.auth-btn, .start-btn');

authButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-3px)';
        button.style.boxShadow = '0 8px 25px rgba(108, 99, 255, 0.3)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        if (button.classList.contains('signup-btn') || button.classList.contains('start-btn')) {
            button.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        } else {
            button.style.boxShadow = 'none';
        }
    });
    
    button.addEventListener('mousedown', () => {
        button.style.transform = 'translateY(1px)';
    });
    
    button.addEventListener('mouseup', () => {
        button.style.transform = 'translateY(-3px)';
    });
});

// Learning Interface Functionality
let currentPracticeStep = 1;
const totalPracticeSteps = 4;
let selectedAnswer = null;
let answerSubmitted = false;
let currentTopic = 'arithmetic';

// Back to topics button
document.getElementById('backToTopics').addEventListener('click', (e) => {
    e.preventDefault();
    showPage('math');
});

// Start learning buttons functionality
document.querySelectorAll('.start-btn').forEach(button => {
    button.addEventListener('click', function() {
        currentTopic = this.getAttribute('data-topic');
        showPage('learning');
    });
});

// Function to reset the practice interface
function resetPracticeInterface() {
    currentPracticeStep = 1;
    selectedAnswer = null;
    answerSubmitted = false;
    
    // Update progress indicator
    document.getElementById('currentStep').textContent = currentPracticeStep;
    document.getElementById('totalSteps').textContent = totalPracticeSteps;
    
    // Reset progress circles
    const progressCircles = document.querySelectorAll('.progress-circle');
    progressCircles.forEach((circle, index) => {
        circle.classList.remove('active', 'completed');
        if (index < currentPracticeStep - 1) {
            circle.classList.add('completed');
        } else if (index === currentPracticeStep - 1) {
            circle.classList.add('active');
        }
    });
    
    // Reset practice UI
    document.querySelectorAll('.answer-option').forEach(option => {
        option.classList.remove('selected', 'correct', 'incorrect');
    });
    
    document.getElementById('correctFeedback').style.display = 'none';
    document.getElementById('incorrectFeedback').style.display = 'none';
    document.getElementById('submitAnswer').style.display = 'block';
    document.getElementById('nextQuestion').style.display = 'none';
    document.getElementById('prevStep').disabled = true;
    
    // Hide completion screen
    document.getElementById('completionScreen').style.display = 'none';
    document.querySelector('.learning-interface').style.display = 'block';
    
    // Update lesson content based on current topic and step
    updateLessonContent();
}

// Function to update lesson content based on current topic and step
function updateLessonContent() {
    // Topic-specific content (in a real app, this would come from a database)
    const topics = {
        arithmetic: {
            title: currentLanguage === 'en' ? 'Understanding Basic Addition' : 'Înțelegerea Adunării de Bază',
            steps: [
                {
                    lesson: currentLanguage === 'en' ? 
                        'Addition is one of the four basic operations of arithmetic. It combines two or more numbers to form a sum.' : 
                        'Adunarea este una dintre cele patru operații aritmetice de bază. Combină două sau mai multe numere pentru a forma o sumă.',
                    example: currentLanguage === 'en' ? 
                        'If you have 3 apples and you get 2 more apples, how many apples do you have in total?' : 
                        'Dacă ai 3 mere și primești încă 2 mere, câte mere ai în total?',
                    exampleExplanation: currentLanguage === 'en' ? 
                        'This means when you combine 3 and 2, the total is 5.' : 
                        'Aceasta înseamnă că atunci când combini 3 și 2, totalul este 5.'
                },
                {
                    lesson: currentLanguage === 'en' ? 
                        'The numbers being added are called "addends" and the result is called the "sum".' : 
                        'Numerele care se adună se numesc "termeni" iar rezultatul se numește "sumă".',
                    example: currentLanguage === 'en' ? 
                        'Visual representation helps understand how quantities combine.' : 
                        'Reprezentarea vizuală ajută la înțelegerea modului în care se combină cantitățile.'
                },
                {
                    lesson: currentLanguage === 'en' ? 
                        'Addition is commutative, meaning the order of the numbers doesn\'t change the result (a + b = b + a).' : 
                        'Adunarea este comutativă, ceea ce înseamnă că ordinea numerelor nu schimbă rezultatul (a + b = b + a).',
                    example: currentLanguage === 'en' ? 
                        'For example: 4 + 5 = 5 + 4 = 9' : 
                        'De exemplu: 4 + 5 = 5 + 4 = 9'
                },
                {
                    lesson: currentLanguage === 'en' ? 
                        'Addition is also associative, meaning when adding three or more numbers, the grouping doesn\'t matter ((a + b) + c = a + (b + c)).' : 
                        'Adunarea este și asociativă, ceea ce înseamnă că atunci când aduni trei sau mai multe numere, gruparea nu contează ((a + b) + c = a + (b + c)).',
                    example: currentLanguage === 'en' ? 
                        'For example: (2 + 3) + 4 = 2 + (3 + 4) = 9' : 
                        'De exemplu: (2 + 3) + 4 = 2 + (3 + 4) = 9'
                }
            ],
            problems: [
                {
                    question: currentLanguage === 'en' ? 'What is the sum of 4 and 5?' : 'Care este suma dintre 4 și 5?',
                    options: ['8', '9', '10', '11'],
                    correctAnswer: '9',
                    feedbackCorrect: currentLanguage === 'en' ? 'Great job! 4 + 5 equals 9. You\'re getting the hang of addition!' : 'Foarte bine! 4 + 5 este egal cu 9. Începi să înțelegi adunarea!',
                    feedbackIncorrect: currentLanguage === 'en' ? 'Remember, addition combines quantities. Try counting up from the larger number: 5... 6, 7, 8, 9.' : 'Ține minte, adunarea combină cantități. Încearcă să numeri pornind de la numărul mai mare: 5... 6, 7, 8, 9.'
                },
                {
                    question: currentLanguage === 'en' ? 'Calculate: 7 + 3 = ?' : 'Calculează: 7 + 3 = ?',
                    options: ['9', '10', '11', '12'],
                    correctAnswer: '10',
                    feedbackCorrect: currentLanguage === 'en' ? 'Excellent! 7 + 3 equals 10. You\'re doing great!' : 'Excelent! 7 + 3 este egal cu 10. Te descurci minunat!',
                    feedbackIncorrect: currentLanguage === 'en' ? 'Try counting up from the larger number: 7... 8, 9, 10.' : 'Încearcă să numeri pornind de la numărul mai mare: 7... 8, 9, 10.'
                },
                {
                    question: currentLanguage === 'en' ? 'If you have 6 pencils and get 4 more, how many do you have?' : 'Dacă ai 6 creioane și primești încă 4, câte ai în total?',
                    options: ['9', '10', '11', '12'],
                    correctAnswer: '10',
                    feedbackCorrect: currentLanguage === 'en' ? 'Perfect! 6 + 4 equals 10. You\'ve mastered this concept!' : 'Perfect! 6 + 4 este egal cu 10. Ai stăpânit acest concept!',
                    feedbackIncorrect: currentLanguage === 'en' ? 'Remember to combine the quantities: start with 6 and count up 4 more.' : 'Nu uita să combini cantitățile: începe cu 6 și numără încă 4.'
                },
                {
                    question: currentLanguage === 'en' ? 'Solve: 9 + 2 = ?' : 'Rezolvă: 9 + 2 = ?',
                    options: ['10', '11', '12', '13'],
                    correctAnswer: '11',
                    feedbackCorrect: currentLanguage === 'en' ? 'Fantastic! 9 + 2 equals 11. You\'re ready for more challenging problems!' : 'Fantastic! 9 + 2 este egal cu 11. Ești pregătit pentru probleme mai provocatoare!',
                    feedbackIncorrect: currentLanguage === 'en' ? 'Try counting up from 9: 10, 11.' : 'Încearcă să numeri pornind de la 9: 10, 11.'
                }
            ],
            completionMessage: currentLanguage === 'en' ? 
                'Congratulations! You\'ve completed this lesson on basic addition. You\'re one step closer to mastering arithmetic!' : 
                'Felicitări! Ai finalizat această lecție despre adunarea de bază. Ești cu un pas mai aproape de a stăpâni aritmetica!'
        },
        // Other topics would be defined similarly
        algebra: {
            title: currentLanguage === 'en' ? 'Algebra Fundamentals' : 'Fundamentele Algebrei',
            // ... similar structure for algebra content
        },
        geometry: {
            title: currentLanguage === 'en' ? 'Geometry Basics' : 'Bazele Geometriei',
            // ... similar structure for geometry content
        }
    };

    const topic = topics[currentTopic] || topics.arithmetic;
    
    // Update lesson title
    document.getElementById('lessonTitle').textContent = topic.title;
    
    // Update lesson content
    const lessonContent = document.getElementById('lessonContent');
    const currentStepContent = topic.steps[currentPracticeStep - 1];
    
    lessonContent.innerHTML = `
        <p>${currentStepContent.lesson}</p>
        
        <!-- Video Placeholder -->
        <div class="video-container" id="lessonVideoContainer">
            <div class="video-placeholder" id="lessonVideoPlaceholder">
                <div class="video-icon">▶️</div>
                <div class="video-prompt" data-i18n="watchVideo">${translations[currentLanguage].watchVideo}</div>
            </div>
        </div>
        
        <div class="example">
            <div class="example-title">${currentLanguage === 'en' ? 'Example' : 'Exemplu'}</div>
            <p>${currentStepContent.example}</p>
            ${currentStepContent.example.includes('+') ? `<p class="math-expression">${currentStepContent.example.split('?')[0]}</p>` : ''}
            <p>${currentStepContent.exampleExplanation}</p>
        </div>
    `;
    
    // Load video for lesson
    const videos = videoResources[currentLanguage][currentTopic] || videoResources.en.arithmetic;
    loadVideo('lessonVideoContainer', 'lessonVideoPlaceholder', videos.lesson);
    
    // Update problem statement and options
    const problem = topic.problems[currentPracticeStep - 1];
    document.getElementById('problemStatement').textContent = problem.question;
    
    const answerOptions = document.getElementById('answerOptions');
    answerOptions.innerHTML = '';
    problem.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'answer-option';
        optionElement.dataset.value = option;
        optionElement.textContent = option;
        answerOptions.appendChild(optionElement);
        
        optionElement.addEventListener('click', function() {
            if (answerSubmitted) return;
            
            document.querySelectorAll('.answer-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            this.classList.add('selected');
            selectedAnswer = this.dataset.value;
        });
    });
    
    // Update feedback messages
    document.getElementById('correctFeedbackText').textContent = problem.feedbackCorrect;
    document.getElementById('incorrectFeedbackText').textContent = problem.feedbackIncorrect;
    
    // Update submit button with correct answer
    document.getElementById('submitAnswer').dataset.correctAnswer = problem.correctAnswer;
    
    // Update completion message
    document.getElementById('completionMessage').textContent = topic.completionMessage;
    
    // Load practice video
    loadVideo('practiceVideoContainer', 'practiceVideoPlaceholder', videos.practice);
    
    // Load summary video
    loadVideo('summaryVideoContainer', 'summaryVideoPlaceholder', videos.summary);
}

// Answer selection
document.querySelectorAll('.answer-option').forEach(option => {
    option.addEventListener('click', function() {
        if (answerSubmitted) return;
        
        document.querySelectorAll('.answer-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        this.classList.add('selected');
        selectedAnswer = this.dataset.value;
    });
});

// Submit answer
document.getElementById('submitAnswer').addEventListener('click', function() {
    if (!selectedAnswer) {
        alert(currentLanguage === 'en' ? 'Please select an answer' : 'Te rugăm să selectezi un răspuns');
        return;
    }
    
    answerSubmitted = true;
    const correctAnswer = this.dataset.correctAnswer;
    
    document.querySelectorAll('.answer-option').forEach(option => {
        option.classList.remove('correct', 'incorrect');
        if (option.dataset.value === correctAnswer) {
            option.classList.add('correct');
        } else if (option.classList.contains('selected')) {
            option.classList.add('incorrect');
        }
    });
    
    if (selectedAnswer === correctAnswer) {
        document.getElementById('correctFeedback').style.display = 'block';
        document.getElementById('incorrectFeedback').style.display = 'none';
        
        // Award XP for correct answer
        awardXP(10);
    } else {
        document.getElementById('correctFeedback').style.display = 'none';
        document.getElementById('incorrectFeedback').style.display = 'block';
        
        // Award some XP even for incorrect answer (participation)
        awardXP(5);
    }
    
    this.style.display = 'none';
    document.getElementById('nextQuestion').style.display = 'block';
});

// Next question
document.getElementById('nextQuestion').addEventListener('click', function() {
    currentPracticeStep++;
    
    // Update progress indicator
    document.getElementById('currentStep').textContent = currentPracticeStep;
    
    // Update progress circles
    const progressCircles = document.querySelectorAll('.progress-circle');
    progressCircles.forEach((circle, index) => {
        circle.classList.remove('active');
        if (index < currentPracticeStep - 1) {
            circle.classList.add('completed');
        } else if (index === currentPracticeStep - 1) {
            circle.classList.add('active');
        }
    });
    
    if (currentPracticeStep > totalPracticeSteps) {
        // Show completion screen
        document.querySelector('.learning-interface').style.display = 'none';
        document.getElementById('completionScreen').style.display = 'block';
        
        // Award XP and check for achievements
        awardXP(50);
        checkForAchievements();
        return;
    }
    
    // Reset for next question
    selectedAnswer = null;
    answerSubmitted = false;
    document.querySelectorAll('.answer-option').forEach(option => {
        option.classList.remove('selected', 'correct', 'incorrect');
    });
    
    document.getElementById('correctFeedback').style.display = 'none';
    document.getElementById('incorrectFeedback').style.display = 'none';
    document.getElementById('submitAnswer').style.display = 'block';
    this.style.display = 'none';
    
    // Update navigation buttons
    document.getElementById('prevStep').disabled = currentPracticeStep === 1;
    
    // Update lesson content
    updateLessonContent();
});

// Navigation buttons
document.getElementById('prevStep').addEventListener('click', function() {
    if (currentPracticeStep > 1) {
        currentPracticeStep--;
        
        // Update progress indicator
        document.getElementById('currentStep').textContent = currentPracticeStep;
        
        // Update progress circles
        const progressCircles = document.querySelectorAll('.progress-circle');
        progressCircles.forEach((circle, index) => {
            circle.classList.remove('active', 'completed');
            if (index < currentPracticeStep - 1) {
                circle.classList.add('completed');
            } else if (index === currentPracticeStep - 1) {
                circle.classList.add('active');
            }
        });
        
        // Reset for previous question
        selectedAnswer = null;
        answerSubmitted = false;
        document.querySelectorAll('.answer-option').forEach(option => {
            option.classList.remove('selected', 'correct', 'incorrect');
        });
        
        document.getElementById('correctFeedback').style.display = 'none';
        document.getElementById('incorrectFeedback').style.display = 'none';
        document.getElementById('submitAnswer').style.display = 'block';
        document.getElementById('nextQuestion').style.display = 'none';
        
        // Update navigation buttons
        this.disabled = currentPracticeStep === 1;
        
        // Update lesson content
        updateLessonContent();
    }
});

document.getElementById('nextStep').addEventListener('click', function() {
    document.getElementById('nextQuestion').click();
});

// Continue learning button
document.getElementById('continueLearning').addEventListener('click', function() {
    showPage('math');
});

// Gamification System
let xp = 0;
let streak = 0;
const unlockedBadges = ['starter', 'streak'];

// Toggle gamification panel
document.getElementById('gamificationToggle').addEventListener('click', function() {
    document.getElementById('gamificationPanel').classList.toggle('active');
});

// Award XP function
function awardXP(amount) {
    xp += amount;
    const xpBar = document.getElementById('xpProgress');
    const newWidth = Math.min(100, (xp % 1000) / 10); // Show progress to next level (1000 XP per level)
    xpBar.style.width = `${newWidth}%`;
    
    // Check for level up
    if (xp % 1000 === 0) {
        showAchievementNotification(
            currentLanguage === 'en' ? 'Level Up!' : 'Nivel Crescut!',
            currentLanguage === 'en' ? `You've reached level ${Math.floor(xp / 1000) + 1}!` : `Ai atins nivelul ${Math.floor(xp / 1000) + 1}!`
        );
    }
}

// Check for achievements
function checkForAchievements() {
    // Check if this is the first completed lesson
    if (!unlockedBadges.includes('starter')) {
        unlockedBadges.push('starter');
        document.querySelector('.badge[data-badge="starter"]').classList.add('unlocked');
        showAchievementNotification(
            currentLanguage === 'en' ? 'Starter Badge Unlocked!' : 'Insigna Începător Deblocată!',
            currentLanguage === 'en' ? 'Congratulations on completing your first lesson!' : 'Felicitări pentru finalizarea primei lecții!'
        );
    }
    
    // Check for streak achievements
    streak++;
    if (streak >= 3 && !unlockedBadges.includes('streak')) {
        unlockedBadges.push('streak');
        document.querySelector('.badge[data-badge="streak"]').classList.add('unlocked');
        showAchievementNotification(
            currentLanguage === 'en' ? 'Streak Badge Unlocked!' : 'Insigna Serii Deblocată!',
            currentLanguage === 'en' ? 'You\'ve learned for 3 consecutive days!' : 'Ai învățat timp de 3 zile consecutive!'
        );
    }
    
    // Update streak counter
    document.getElementById('streakCount').textContent = 
        currentLanguage === 'en' ? `${streak}-day streak` : `Șir de ${streak} zile`;
}

// Show achievement notification
function showAchievementNotification(title, description) {
    const notification = document.getElementById('achievementNotification');
    document.getElementById('achievementTitle').textContent = title;
    document.getElementById('achievementDesc').textContent = description;
    
    notification.classList.add('active');
    setTimeout(() => {
        notification.classList.remove('active');
    }, 5000);
}

// AI Chat System with Subject-Specific Chats
const aiChat = document.getElementById('aiChat');
const aiChatLauncher = document.getElementById('aiChatLauncher');
const aiChatClose = document.getElementById('aiChatClose');
const aiChatHeader = document.getElementById('aiChatHeader');
const aiChatInput = document.getElementById('aiChatInput');
const aiChatSend = document.getElementById('aiChatSend');
const aiChatSubjectSelect = document.getElementById('aiChatSubjectSelect');
const aiChatAddSubject = document.getElementById('aiChatAddSubject');
const aiChatTabs = document.getElementById('aiChatTabs');

// Chat data structure
const chatData = {
    math: {
        name: 'Math',
        messages: [
            { text: translations[currentLanguage].aiWelcome, sender: 'bot' }
        ],
        active: true
    },
    science: {
        name: 'Science',
        messages: [
            { text: translations[currentLanguage].aiWelcome, sender: 'bot' }
        ],
        active: false
    },
    history: {
        name: 'History',
        messages: [
            { text: translations[currentLanguage].aiWelcome, sender: 'bot' }
        ],
        active: false
    },
    language: {
        name: 'Language',
        messages: [
            { text: translations[currentLanguage].aiWelcome, sender: 'bot' }
        ],
        active: false
    }
};

// Current active subject
let currentSubject = 'math';

// Initialize chat interface
function initChat() {
    // Create tabs for each subject
    aiChatTabs.innerHTML = '';
    Object.keys(chatData).forEach(subject => {
        const tab = document.createElement('div');
        tab.className = `ai-chat-tab ${chatData[subject].active ? 'active' : ''}`;
        tab.textContent = chatData[subject].name;
        tab.dataset.subject = subject;
        aiChatTabs.appendChild(tab);
        
        tab.addEventListener('click', () => {
            switchSubject(subject);
        });
    });
    
    // Create chat content areas
    document.querySelector('.ai-chat-body').innerHTML = '';
    Object.keys(chatData).forEach(subject => {
        const content = document.createElement('div');
        content.className = `ai-chat-content ${chatData[subject].active ? 'active' : ''}`;
        content.id = `${subject}ChatContent`;
        document.querySelector('.ai-chat-body').appendChild(content);
        
        // Add existing messages
        chatData[subject].messages.forEach(msg => {
            addMessageToContent(msg.text, msg.sender, content);
        });
    });
    
    // Set the current subject
    switchSubject(currentSubject);
}

// Switch between subjects
function switchSubject(subject) {
    currentSubject = subject;
    
    // Update tabs
    document.querySelectorAll('.ai-chat-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.subject === subject) {
            tab.classList.add('active');
        }
    });
    
    // Update chat contents
    document.querySelectorAll('.ai-chat-content').forEach(content => {
        content.classList.remove('active');
        if (content.id === `${subject}ChatContent`) {
            content.classList.add('active');
        }
    });
    
    // Update subject selector
    aiChatSubjectSelect.value = subject;
}

// Add a new subject
aiChatAddSubject.addEventListener('click', () => {
    const newSubject = prompt(currentLanguage === 'en' ? 'Enter new subject name:' : 'Introduceți numele noului subiect:');
    if (newSubject && newSubject.trim() !== '') {
        const subjectKey = newSubject.toLowerCase().replace(/\s+/g, '-');
        if (!chatData[subjectKey]) {
            chatData[subjectKey] = {
                name: newSubject,
                messages: [
                    { text: translations[currentLanguage].aiWelcome, sender: 'bot' }
                ],
                active: false
            };
            
            // Add to subject selector
            const option = document.createElement('option');
            option.value = subjectKey;
            option.textContent = newSubject;
            aiChatSubjectSelect.appendChild(option);
            
            // Reinitialize chat to show new subject
            initChat();
            switchSubject(subjectKey);
        }
    }
});

// Change subject from selector
aiChatSubjectSelect.addEventListener('change', () => {
    switchSubject(aiChatSubjectSelect.value);
});

// Add message to specific content area
function addMessageToContent(text, sender, contentElement) {
    const messageElement = document.createElement('div');
    messageElement.className = `ai-message ${sender}`;
    messageElement.textContent = text;
    contentElement.appendChild(messageElement);
    contentElement.scrollTop = contentElement.scrollHeight;
}

// Send message
function sendMessage() {
    const message = aiChatInput.value.trim();
    if (message === '') return;
    
    // Add user message to current subject chat
    chatData[currentSubject].messages.push({
        text: message,
        sender: 'user'
    });
    
    const contentElement = document.getElementById(`${currentSubject}ChatContent`);
    addMessageToContent(message, 'user', contentElement);
    aiChatInput.value = '';
    
    // Simulate AI response based on subject
    setTimeout(() => {
        let response;
        const langResponses = translations[currentLanguage];
        
        if (currentSubject === 'math') {
            if (message.toLowerCase().includes('add') || message.toLowerCase().includes('addition')) {
                response = currentLanguage === 'en' ? 
                    "Addition is combining numbers to find their total. For example, 2 + 3 = 5. Would you like more examples?" :
                    "Adunarea înseamnă combinarea numerelor pentru a afla totalul. De exemplu, 2 + 3 = 5. Dorești mai multe exemple?";
            } else if (message.toLowerCase().includes('multiply') || message.toLowerCase().includes('multiplication')) {
                response = currentLanguage === 'en' ?
                    "Multiplication is repeated addition. For example, 3 × 4 means adding 3 four times: 3 + 3 + 3 + 3 = 12." :
                    "Înmulțirea este adunare repetată. De exemplu, 3 × 4 înseamnă să aduni 3 de patru ori: 3 + 3 + 3 + 3 = 12.";
            } else {
                response = getDefaultResponse();
            }
        } 
        else if (currentSubject === 'science') {
            if (message.toLowerCase().includes('photosynthesis')) {
                response = currentLanguage === 'en' ?
                    "Photosynthesis is how plants make food using sunlight, converting carbon dioxide and water into glucose and oxygen." :
                    "Fotosinteza este procesul prin care plantele produc hrană folosind lumina soarelui, transformând dioxidul de carbon și apa în glucoză și oxigen.";
            } else {
                response = getDefaultResponse();
            }
        }
        else if (currentSubject === 'history') {
            if (message.toLowerCase().includes('rome') || message.toLowerCase().includes('roman')) {
                response = currentLanguage === 'en' ?
                    "The Roman Empire was one of the most powerful civilizations in history, lasting from 27 BC to 476 AD in the West." :
                    "Imperiul Roman a fost una dintre cele mai puternice civilizații din istorie, durând din 27 î.Hr. până în 476 d.Hr. în partea de vest.";
            } else {
                response = getDefaultResponse();
            }
        }
        else if (currentSubject === 'language') {
            if (message.toLowerCase().includes('grammar')) {
                response = currentLanguage === 'en' ?
                    "Grammar is the set of structural rules governing the composition of clauses, phrases, and words in any language." :
                    "Gramatica este ansamblul de reguli structurale care guvernează alcătuirea propozițiilor, frazelor și cuvintelor în orice limbă.";
            } else {
                response = getDefaultResponse();
            }
        }
        else {
            // For custom subjects
            response = getDefaultResponse();
        }
        
        // Add AI response to chat
        chatData[currentSubject].messages.push({
            text: response,
            sender: 'bot'
        });
        addMessageToContent(response, 'bot', contentElement);
    }, 1000);
}

function getDefaultResponse() {
    const responses = {
        en: [
            "I'm not sure I understand. Could you rephrase your question?",
            "I'm still learning. Can you ask your question differently?",
            "That's an interesting question. Let me think about how to best explain this.",
            "I'm designed to help with learning. Could you be more specific about what you need?"
        ],
        ro: [
            "Nu sunt sigur că am înțeles. Poți reformula întrebarea?",
            "Încă învăț. Poți pune întrebarea altfel?",
            "Aceasta este o întrebare interesantă. Lasă-mă să mă gândesc cum să explic acest lucru cel mai bine.",
            "Sunt conceput să ajut la învățare. Poți fi mai specific în legătură cu ceea ce ai nevoie?"
        ]
    };
    
    const langResponses = responses[currentLanguage] || responses.en;
    return langResponses[Math.floor(Math.random() * langResponses.length)];
}

// Toggle chat interface
function toggleChat() {
    aiChat.classList.toggle('active');
}

// Open chat
aiChatLauncher.addEventListener('click', toggleChat);
aiChatHeader.addEventListener('click', toggleChat);

// Close chat
aiChatClose.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleChat();
});

// Send message on button click or Enter key
aiChatSend.addEventListener('click', sendMessage);
aiChatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Initialize chat when page loads
initChat();

// Initialize animations when page loads
window.addEventListener('load', () => {
    // Initialize language
    initLanguage();
    
    // Animate hero elements
    const heroElements = document.querySelectorAll('.hero h1, .hero p, .hero-buttons');
    heroElements.forEach((el, i) => {
        el.style.animation = `fadeInUp 0.8s ease-out ${i * 0.2}s forwards`;
        el.style.opacity = '0';
    });

    // Animate subject card
    const subjectCard = document.querySelector('.subject-card');
    if (subjectCard) {
        subjectCard.style.animation = 'fadeInUp 0.8s ease-out 0.4s forwards';
        subjectCard.style.opacity = '0';
    }

    // Animate CTA section
    const ctaElements = document.querySelectorAll('.cta-section h2, .cta-section p, .cta-buttons');
    ctaElements.forEach((el, i) => {
        el.style.animation = `fadeInUp 0.8s ease-out ${0.4 + i * 0.1}s forwards`;
        el.style.opacity = '0';
    });
});