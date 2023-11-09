var title = 'ICT | 1-75'; 
var questionCount = 75; 
var timeValue = 99;
var answerMixing = true;
var deadLine = false;
var about = true;
let syllabus = '';

showDetail();

let questions = [

                {
                    numb: 1,
                    question: 'The workstation is:',
                    answer: 'ordinary personal computer that is connected to a network',
                    options: ['ordinary personal computer that is connected to a network','type of a server','desktop used for calculations','powerful desktop computers used for high-performance tasks','type of a netbook']
                }
                ,
                {
                    numb: 2,
                    question: 'What are the differences between 5th generation computer and other generation computers?',
                    answer: 'Technological advancement',
                    options: ['Technological advancement','Scientific code','Object Oriented Programming','All of the above','None of the above']
                }
                ,
                {
                    numb: 3,
                    question: 'Which computer language is used for artificial intelligence?',
                    answer: 'PROLOG',
                    options: ['PROLOG','FORTRAN','C/C++','COBOL','None of the above']
                }
                ,
                {
                    numb: 4,
                    question: 'Which of the following is the output device?',
                    answer: 'Loud speaker',
                    options: ['Loud speaker','Joystick','Scanner','Mouse','Keyboard']
                }
                ,
                {
                    numb: 5,
                    question: '... is a common boundary between two systems',
                    answer: 'Interface',
                    options: ['Interface','Interdiction','Surface','None of the above','Visual pathway']
                }
                ,
                {
                    numb: 6,
                    question: '... is the fastest, most powerful computer and the most expensive.',
                    answer: 'Supercomputers',
                    options: ['Supercomputers','Digital camera','Personal computer','Tablet PCs','Notebook Computers']
                }
                ,
                {
                    numb: 7,
                    question: 'Which language was developed by professor Niklaus Wirth in 1970-1971?',
                    answer: 'PASCAL',
                    options: ['PASCAL','APL','LOGO','FORTRAN','None of the above']
                }
                ,
                {
                    numb: 8,
                    question: 'ASCII stands for',
                    answer: 'American standard code for information interchange',
                    options: ['American standard code for information interchange','All purpose scientific code for information interchange','American security code for information interchange','American Scientific code for information interchange','None of the above']
                }
                ,
                {
                    numb: 9,
                    question: 'A program that is employed in the development, repair or enhancement of other programs is known as …',
                    answer: 'Software tool',
                    options: ['Software tool','System software','Applications program','Utility program','None of the above']
                }
                ,
                {
                    numb: 10,
                    question: 'Which output device is used for translating information from a computer into pictorial form on paper.',
                    answer: 'Plotter',
                    options: ['Plotter','Mouse','Touch panel','Card punch','None of the above']
                }
                ,
                {
                    numb: 11,
                    question: '... involves having a current knowledge and understanding of computers and their uses.',
                    answer: 'Computer literacy',
                    options: ['Computer literacy','Visual pathway','System software','Surface','Interdiction']
                }
                ,
                {
                    numb: 12,
                    question: '... are the technologies used in the conveying, manipulation and storage of data by electronic means',
                    answer: 'Information and communication technologies (ICTs)',
                    options: ['Information and communication technologies (ICTs)','Multimedia technologies (MT)','Fundamentals of technologies','Dynamic technologies','Industry technologies']
                }
                ,
                {
                    numb: 13,
                    question: 'Which language was devised by Dr. Seymour Aubrey Papert?',
                    answer: 'LOGO',
                    options: ['LOGO','APL','PASCAL','FORTRAN','None of the above']
                }
                ,
                {
                    numb: 14,
                    question: '... is a device that performs signal conversion',
                    answer: 'Modulator',
                    options: ['Modulator','Plotter','Modem','Keyboard','Plotter']
                }
                ,
                {
                    numb: 15,
                    question: 'What is Communication?',
                    answer: 'Communication is simply the act of transferring information from one place to another',
                    options: ['Communication is simply the act of transferring information from one place to another','Communication is set of processing methods','Communication is an organized system for the collection, organization, storage of information','Communication consists of a series of related instructions, organized for a common purpose, that tells the computer what tasks to perform and how to perform them.','Communication is the physical part of a computer']
                }
];
showqa();