document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Quiz Placeholder Logic
    const startBtn = document.getElementById('start-quiz-btn');
    const startScreen = document.querySelector('.quiz-start-screen');
    const questionsContainer = document.getElementById('quiz-questions-container');
    const questionText = document.querySelector('.question-text');
    const optionsGrid = document.querySelector('.options-grid');

    // Simple placeholder questions
    const questions = [
        {
            q: "How often do you feel overwhelmed by daily tasks?",
            options: ["Rarely", "Sometimes", "Often", "Always"]
        },
        {
            q: "When stressed, do you tend to shut down or withdraw?",
            options: ["Yes, immediately", "Sometimes", "No, I get busy", "I don't know"]
        },
        {
            q: "Do you experience physical tension without realizing it?",
            options: ["Yes, frequently", "Only when very stressed", "Rarely", "Never"]
        },
        {
            q: "How would you describe your energy levels?",
            options: ["Consistent", "Fluctuating wildly", "Generally low/drained", "High anxiety energy"]
        },
        {
            q: "Do you struggle to make simple decisions?",
            options: ["All the time", "When under pressure", "Rarely", "Never"]
        }
    ];

    let currentQuestionIndex = 0;

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            startScreen.classList.add('hidden');
            questionsContainer.classList.remove('hidden');
            loadQuestion(0);
        });
    }

    function loadQuestion(index) {
        if (index >= questions.length) {
            // End of placeholder quiz
            questionsContainer.innerHTML = `
                <div class="quiz-completed">
                    <h3>Analyzing your patterns...</h3>
                    <p>This is a placeholder. The full quiz logic and redirection to results will be implemented here.</p>
                    <button class="cta-button primary-cta" onclick="location.reload()">Reset Demo</button>
                </div>
            `;
            return;
        }

        const q = questions[index];
        const stepDisplay = document.querySelector('.question-step h3');
        stepDisplay.textContent = `Question ${index + 1}/${questions.length}`;
        questionText.textContent = q.q;
        
        optionsGrid.innerHTML = ''; // Clear previous options
        q.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt;
            btn.addEventListener('click', () => {
                // Simulate selection and move to next
                btn.style.borderColor = 'var(--primary-color)';
                btn.style.background = '#fff8e8';
                setTimeout(() => {
                    loadQuestion(index + 1);
                }, 400);
            });
            optionsGrid.appendChild(btn);
        });
    }
});