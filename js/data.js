var timeUntilMusicStop = 20;
var timeUntilViewAnswer = 0;
var scoreForEachTime = 50;

//question: "כאן כתבי את השאלה",
//answer1: " תשובה1",
//answer2: " תשובה2",
//answer3: " תשובה3",
//correctAnswer: כאן כתבי את מספר התשובה הנכונה


var userQuestions = [
    {
        question: 'באיזו שנה הוקמה עמותת "גניזה כללית"?',
        answer1:'1.	תש"ע',
        answer2: '2. תשמ"ו',
        answer3: '3. תשכ"ו',
        correctAnswer: 2
    },
    {
        question: 'באיזו שכונה הוצב מתקן הגניזה הראשון בעולם?',
        answer1: '1. מטרסדורף',
        answer2: '2. נוה יעקב',
        answer3:'3. בית וגן',
        correctAnswer: 3
    },
    {
        question: 'כל כמה זמן מפנים גניזה?',
        answer1: '1. מידי יום',
        answer2: '2. פעם בשבוע',
        answer3:'3. פעם בחודש',
        correctAnswer: 1
    },
    {
        question: 'מדוע אסור לחטט במתקן הגניזה?',
        answer1: '1. כי יש בפנים דברי קודש',
        answer2: '2. כי כך הגניזה נשמרת באדמה יותר בכבוד',
        answer3: '3. 2 התשובות נכונות',
        correctAnswer: 3
    },
    {
        question: 'ממתי קיים המושג "גניזה"?',
        answer1: '1. מאז המצאת הדפוס',
        answer2: '2. מאז ומעולם',
        answer3: '3. בעשורים האחרונים',
        correctAnswer: 2
    },
    {
        question: 'האם טלית טעונה גניזה?',
        answer1: '1. כן, גניזה חמורה',
        answer2: '2. כן, גניזה רגילה',
        answer3: '3. לא',
        correctAnswer: 2
    },
    {
        question: 'איזו גניזה טעונה מזוזה?',
        answer1: '1. גניזה רגילה',
        answer2: '2. גניזה חמורה',
        answer3: '3. זה רק חומרא לגנוז ',
        correctAnswer: 2
    },
    {
        question: 'האם כיפה טעונה גניזה?',
        answer1: '1. כן',
        answer2: '2. לא',
        answer3: '3. תלוי אם השתמשו בה או לא',
        correctAnswer: 2
    },
    {
        question: 'באלו כדים נקברת הגניזה החמורה בזמננו?',
        answer1: '1. כדי חרס',
        answer2: '2. כדי פלסטיק',
        answer3: '3. כדי ברזל',
        correctAnswer: 2
    },
    {
        question: 'היכן קוברים גניזה חמורה?',
        answer1: '1. בבור עמוק באדמה',
        answer2: '2. בבית קברות',
        answer3: '3. בתוך קבר של תלמיד חכם',
        correctAnswer:2
    },
    {
        question: 'כמה מתקני גניזה יש בירושלים?',
        answer1: '1. 50',
        answer2: '2. 70',
        answer3: '3. למעלה מ-100',
        correctAnswer: 3
    }
]
