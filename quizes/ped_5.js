var title = 'Педагогика 201-250'; 
var questionCount = 50; 
var timeValue = 60;
var answerMixing = true;
var deadLine = false;
var about = true;
let syllabus = '';

showDetail();

let questions = [

                {
                    numb: 1,
                    question: 'Оқу дискуссиясының ерекшелігі:',
                    answer: 'жаңа білімді игеріп, өзінің пікірін бекітіп, өз көзқарасын дәлелдей алуы',
                    options: ['жаңа білімді игеріп, өзінің пікірін бекітіп, өз көзқарасын дәлелдей алуы','оқушылардың сауатты сөйлеуіне мүмкіндік беруі','оқу материалының логикалық мазмұндалуы мен ақпарат ағымның көптігі','оқушылардың қоғамдық қажеттікті түсіну деңгейі','жаңа материалды игеруге оқушының дайындалуы']
                }
                ,
                {
                    numb: 2,
                    question: 'Интербелсенді тақтаның, мультимедиалық кешеннің көмегімен видеороликтерді, цифрлық ақпараттарды көрсету әдісі:',
                    answer: 'көрнекілік',
                    options: ['көрнекілік','сезімдік','сөздік','бейвербалдық','кинестезиялық']
                }
                ,
                {
                    numb: 3,
                    question: 'Оқушыларға ғылыми ұғымдарды түсіндіруді және олардың қабылдауын, түсінуін жеңілдетуге мүмкіндік беретін маңызды құралдардың бірі:',
                    answer: 'ақпараттық-коммуникациялық технологиялар',
                    options: ['ақпараттық-коммуникациялық технологиялар','әдістемелік нұсқаулық','технологиялық білімдер','оқыту дәстүрлі құралдары','жағымды психологиялық ахуал']
                }
                ,
                {
                    numb: 4,
                    question: 'Ақпаратпен жұмыс жасау үшін арнайы тәсілдер, педагогикалық технологиялар, бағдарламалық және техникалық құралдарды (видео, компьютер, аудио) қолданатын технология:',
                    answer: 'оқытудың ақпараттық технологиясы',
                    options: ['оқытудың ақпараттық технологиясы','сыни тұрғыдан ойлау','диалогтік оқыту','педагогикалық технология','модульдік технология']
                }
                ,
                {
                    numb: 5,
                    question: 'Сын тұрғысынан ойлау кезеңдері:',
                    answer: 'қызығушылықты ояту, мағынаны тану, ой толғаныс',
                    options: ['қызығушылықты ояту, мағынаны тану, ой толғаныс','жеке, топтық, лездеме','ауызша, жазбаша','кубизм, әңгімелесу, дискуссия','ой шақыру, кубизм, тренинг']
                }
                ,
                {
                    numb: 6,
                    question: 'Сыни ойлауды дамытатын оқыту әдісі:',
                    answer: 'кластер',
                    options: ['кластер','жоба','кейс','модуль','тренинг']
                }
                ,
                {
                    numb: 7,
                    question: 'Сын тұрғысынан ойлау технологиясының әдіс-тәсілдеріне жатпайтынын көрсет:',
                    answer: 'анкета',
                    options: ['анкета','миға шабуыл','фишбоун','инсерт','синквейн']
                }
                ,
                {
                    numb: 8,
                    question: 'Оқушы берілген тапсырманы зерттейді, салыстырады, суреттейді:',
                    answer: 'кубизм',
                    options: ['кубизм','инсерт','Т кестесі','мағынаны тану','қызығушылықты ояту']
                }
                ,
                {
                    numb: 9,
                    question: 'Оқушының өзіндік білім деңгейін тексеруге арналған қолайлы әдіс:',
                    answer: 'инсерт',
                    options: ['инсерт','семантикалық карта','екі жақты күнделік','Венн диаграммасы','қызығушылықты ояту']
                }
                ,
                {
                    numb: 10,
                    question: 'Мұғалім мен білім алушылардың өзара әрекеттестігін және әртүрлі ішкі байланыстарды айқындайтын ұйымдастыру тәсілі:',
                    answer: 'оқыту формасы',
                    options: ['оқыту формасы','оқыту техникасы','оқыту технологиясы','оқыту құзіреттілігі','оқыту мүмкіндіктері']
                }
                ,
                {
                    numb: 11,
                    question: 'Мұғалім мен білім алушылардың арнайы ұйымдастырылған, белгіленген тәртіппен өтетін оқу үдерісінің бөлігі:',
                    answer: 'сабақ',
                    options: ['сабақ','семинар','тәрбиелік іс-шара','марафон','дидактикалық ойын']
                }
                ,
                {
                    numb: 12,
                    question: 'Оқытуды ұйымдастырудың негізгі формасы:',
                    answer: 'сабақ',
                    options: ['сабақ','факультатив','үй тапсырмасы','экскурсия','үйірме']
                }
                ,
                {
                    numb: 13,
                    question: 'Оқытудың сынып-сабақтық жүйесінің негізін құрушы:',
                    answer: 'Я.А.Коменский',
                    options: ['Я.А.Коменский','К.Д.Ушинский','Ы.Алтынсарин','А.Байтұрсынов','В.А.Сухомменский']
                }
                ,
                {
                    numb: 14,
                    question: 'Сынып-сабақтық жүйе нені пайымдайды :',
                    answer: 'ұжымдық танымдық іс-әрекетті',
                    options: ['ұжымдық танымдық іс-әрекетті','жеке өз басының екпінімен ілгерілеуді','білім берудің мазмұнын дербес таңдауды','басқа оқушылардан бөлек жұмыс жасауды','білім берудің мазмұнын ата-ананың таңдауын']
                }
                ,
                {
                    numb: 15,
                    question: 'Сабақтың құрылымы дегеніміз:',
                    answer: 'бір-бірімен байланысты сабақтың құрылымдық элементтері',
                    options: ['бір-бірімен байланысты сабақтың құрылымдық элементтері','сабақта қолданылатын әдіс- тәсілдер','дидактикалық міндеттердің шешілуі','оқушылардың оқу жұмыстары','оқытудың заңдылықтары мен принциптері']
                }
                ,
                {
                    numb: 16,
                    question: 'Сабақтарды тақырып бойынша жоспарлау – мұғалімнің сабаққа дайындығының ... кезеңі:',
                    answer: 'бірінші',
                    options: ['бірінші','екінші','үшінші','төртінші','бесінші']
                }
                ,
                {
                    numb: 17,
                    question: 'Сабаққа тән емес сипаттаманы көрсет:',
                    answer: 'қолөнер технологиясын меңгертеді',
                    options: ['қолөнер технологиясын меңгертеді','білім мазмұнын анықтайтын құжаттарға сай ұйымдастырылады','сабақ кестесіне сәйкес жүргізіледі','мұғалім басшылық жасайды','оқушыларды ізденіске түсіреді']
                }
                ,
                {
                    numb: 18,
                    question: 'Дәстүрлі емес сабақ түрі:',
                    answer: 'экскурсия-саяхат',
                    options: ['экскурсия-саяхат','дәріс сабақ','диалог сабақ','семинар сабақ','қорытынды сабақ']
                }
                ,
                {
                    numb: 19,
                    question: 'Оқытудың дәстүрлі емес формаларының ерекшеліктеріне жатпайтынын көрсет:',
                    answer: 'білім алушылардың әрекетін жоспарлы түрде ұйымдастыру',
                    options: ['білім алушылардың әрекетін жоспарлы түрде ұйымдастыру','мұғалім мен оқушы арасындағы қарым-қатынас сипатының өзгеруі','пәнге деген қызығушылықты ояту және арттыру','пәнге деген қызығушылықты ояту және арттыру','ұжымдық жұмыс формаларының қолданылуы']
                }
                ,
                {
                    numb: 20,
                    question: 'Іс-әрекетті зерттеу тәсіліндегі басты үдеріс:',
                    answer: 'сабақты зерттеу',
                    options: ['сабақты зерттеу','оқушыны зерттеу','мұғалімді зерттеу','пәнді зерделеу','жоспарды зерделеу']
                }
                ,
                {
                    numb: 21,
                    question: 'жоспарды зерделеу',
                    answer: 'сабақты зерттеу',
                    options: ['сабақты зерттеу','оқушыны зерттеу','мұғалімді зерттеу','пәнді зерделеу','жоспарды зерделеу']
                }
                ,
                {
                    numb: 22,
                    question: 'Lesson study қағидаты:',
                    answer: 'мұғалімнің оқуына емес, оқушының оқуына баса назар аудару',
                    options: ['мұғалімнің оқуына емес, оқушының оқуына баса назар аудару','оқушылармен сұхбаттасу','бірлесіп жоспарлау','сабақ барысын қадағалау','ашық зерттеу']
                }
                ,
                {
                    numb: 23,
                    question: 'Қазіргі мектепте мұғалім мен білім алушылардың өзара қарым-қатынас стилінің қайсысы тиімді:',
                    answer: 'демократиялық',
                    options: ['демократиялық','авторитарлық','либералдық','қызметтік','жүйелік']
                }
                ,
                {
                    numb: 24,
                    question: 'Оқушылармен тұрақты араласып, оларды дербестікке ынталандыратын мұғалімнің стилі:',
                    answer: 'демократиялық',
                    options: ['демократиялық','авторитарлық','либералдық','қызметтік','жүйелік']
                }
                ,
                {
                    numb: 25,
                    question: 'Білім алушылардың әртүрлі әрекет түрлерін меңгеруімен анықталатын білім беру нәтижесі:',
                    answer: 'құзіреттілік',
                    options: ['құзіреттілік','оқыту','көзқарас','дүниетаным','білім']
                }
                ,
                {
                    numb: 26,
                    question: 'Мұғалім көшбасшылығын дамытуға әсер ету түрі:',
                    answer: 'кәсіби білімді құруға және таратуға ат салысу',
                    options: ['кәсіби білімді құруға және таратуға ат салысу','сезімталдық қабілетін дамыту','мәтін мағынасын түсіну','көру дағдысын жетілдіру','қарапайым түсініктерді меңгерту']
                }
                ,
                {
                    numb: 27,
                    question: 'Нақты педагогикалық міндеттерді шешудегі үлгі, стандарт:',
                    answer: 'педагогикалық парадигма',
                    options: ['педагогикалық парадигма','педагогикалық рефлексия','педагогикалық психология','педагогикалық ойлау','педагогикалық такт']
                }
                ,
                {
                    numb: 28,
                    question: 'Қазіргі білім беру парадигмасы неге бағдарланған:',
                    answer: 'нәтижеге',
                    options: ['нәтижеге','білімге','бағалауға','тексеруге','теорияға']
                }
                ,
                {
                    numb: 29,
                    question: 'Нәтижеге бағдарланған білім беру парадигмасының мәні:',
                    answer: '«Неге оқимын?»',
                    options: ['«Неге оқимын?»','«Неге оқытамыз?»','«Нені білуі тиіс?»','«Қалай жұмыс істеуі қажет?»','«Қандай дағдыларды меңгеруі тиіс?»']
                }
                ,
                {
                    numb: 30,
                    question: 'Білімге бағытталған парадигманың мәні:',
                    answer: '«Нені оқытамыз?»',
                    options: ['«Нені оқытамыз?»','«Неге оқытамыз?»','«Нені игеруі тиіс?»','«Қалай жұмыс істеуі қажет?»','«Қандай дағдыларды меңгеруі тиіс?»']
                }
                ,
                {
                    numb: 31,
                    question: 'Оқушылар өздерінің сеніміне, біліміне сүйеніп, пайымдау жасай алады деген түсінікке негізделген оқыту ортасы:',
                    answer: 'оқушыға бағдарланған',
                    options: ['оқушыға бағдарланған','қоғамға бағдарланған','логикаға бағдарланған','үйретуге бағдарланған','мұғалімге бағдарланған']
                }
                ,
                {
                    numb: 32,
                    question: 'Оқушылардың танымдық әрекетінің белсенділігіне зор үлес қосқан педагог-психолог:',
                    answer: 'Л.С.Выготский',
                    options: ['Л.С.Выготский','М.Н.Сергеева','Д.С.Кондратенко','В.И.Малиновский','Н.В.Петрова']
                }
                ,
                {
                    numb: 33,
                    question: 'Даму оқыту мен тәрбиенің көмегі арқылы тарихи қалыптасқан іс-әрекет формаларын меңгеру арқылы жүреді және бұл жағдайда олар (оқыту мен тәрбие) тек жеткен деңгейге ғана сүйенбейді, сонымен қатар оның алдында да жүреді деп түсіндіруші:',
                    answer: 'Л.С.Выготский',
                    options: ['Л.С.Выготский','Б.Г.Ананьев','Л.И.Божович','Д.Б.Эльконин','А.Ф.Лазурский']
                }
                ,
                {
                    numb: 34,
                    question: '«Жақын арадағы даму аймағы» (ЖАДА) ұғымын ғылымға енгізген ғалым:',
                    answer: 'Л.С.Выготский',
                    options: ['Л.С.Выготский','П.Я.Гальперин','В.В.Давыдов','Д.Б.Эльконин','Н.Ф.Талызина']
                }
                ,
                {
                    numb: 35,
                    question: '«Баланың дамуы оқыту мен тәрбиеден тәуелсіз, яғни спонтанды, өзінен-өзі жүреді, ол – табиғатынан берілген ішкі қасиет» деп түсіндіруші:',
                    answer: 'Ж.Пиаже',
                    options: ['Ж.Пиаже','Л.Божович','К.Роджерс','А.Адлер','А.Маслоу']
                }
                ,
                {
                    numb: 36,
                    question: 'Бұл үдеріс арқылы оқушылар түсіну, бақылау, оқу тәжірибесін қадағалау қабілетін дамытады:',
                    answer: 'метатану',
                    options: ['метатану','интерпретация','эмпатия','дифференциация','логика']
                }
                ,
                {
                    numb: 37,
                    question: 'Жаңартылған білім беру бағдарламасының басты мақсаты:',
                    answer: 'функционалдық сауаттылықты дамыту',
                    options: ['функционалдық сауаттылықты дамыту','білім, іскерлік және дағдыларды тағайындау','бағалауға қатысты көзқарасты өзгерту','өмір сүріп жатқан қоғамды жақсарту','ұзақ, орта және қысқа мерзімді жоспарлау']
                }
                ,
                {
                    numb: 38,
                    question: 'Функционалдық сауаттылықтың негізі:',
                    answer: 'құзіреттілік',
                    options: ['құзіреттілік','білім','іскерлік','дағды','білік']
                }
                ,
                {
                    numb: 39,
                    question: 'Функционалдық сауаттылыққа тән емес сипаттаманы көрсет:',
                    answer: 'білім қорын молайту',
                    options: ['білім қорын молайту','сыртқы ортамен қарым-қатынас жасау','әлеуметтік дағдыларды дамыту','проблеманың шешімін табу','өзгермелі ортаға бейімделу']
                }
                ,
                {
                    numb: 40,
                    question: '«Қатаң» дағдылар» (hard skills):',
                    answer: 'АКТ сауаттылығы',
                    options: ['АКТ сауаттылығы','мәселені шешу','көшбасшылық','коммуникация','жауапкершілік']
                }
                ,
                {
                    numb: 41,
                    question: '«Икемді» дағдылар» (soft skills):',
                    answer: 'сыни ойлау',
                    options: ['сыни ойлау','базалық білімдер','болашақ кәсіби әрекетке қажет білімдер','негізгі компьютерлік білім','шет тілдерді меңгеру']
                }
                ,
                {
                    numb: 42,
                    question: 'Сабақ тақырыптарының әрбір келесі деңгейде алдыңғыға қарағанда анағұрлым күрделі әрі тереңдетіліп оқытылуы:',
                    answer: 'спиральді қағида',
                    options: ['спиральді қағида','белсенділік қағида','саналылық қағида','дәйектілік қағида','ашықтық қағида']
                }
                ,
                {
                    numb: 43,
                    question: 'Нақты пән бойынша оқу мақсаттарына жету үшін түрлі пәндер аясында білімі мен білігін біріктіретін құрал ретінде пайдаланылатын мазмұны бірыңғай компонент:',
                    answer: 'ортақ тақырып',
                    options: ['ортақ тақырып','шиыршықты қағида','даму ортасы','мемлекеттік стандарт','ұзақ мерзімді жоспар']
                }
                ,
                {
                    numb: 44,
                    question: 'Оқу бағдарламасына сәйкес пән бойынша оқу курсы аралығында білу, түсіну және дағды жетістіктеріне қатысты күтілетін нәтижелерді қалыптастыратын тұжырым:',
                    answer: 'оқу мақсаттары',
                    options: ['оқу мақсаттары','оқу құралдары','оқу әдістері','оқу техникасы','оқу стратегиясы']
                }
                ,
                {
                    numb: 45,
                    question: 'Оқу мақсаттарының иерархиялық өзара байланыстағы жүйесі нені қалыптастыруға бағытталған:',
                    answer: 'ойлау дағдыларының деңгейлері',
                    options: ['ойлау дағдыларының деңгейлері','білім алушының оқу жетістігі','білім алушының портфолиосы','тест спецификациясы','балл қою кестесі']
                }
                ,
                {
                    numb: 46,
                    question: 'Блум таксономиясына сай ойлау дағдылары:',
                    answer: 'білу, түсіну, қолдану, талдау, жинақтау, бағалау',
                    options: ['білу, түсіну, қолдану, талдау, жинақтау, бағалау','талдау, бағалау, жинақтау, түзеу, түсіну','түсіну, қолдану, талдау, зерттеу, бағалау','сынау, түсіну, талдау, жинақтау, бағалау','айтылым, жазылым, тыңдалым']
                }
                ,
                {
                    numb: 47,
                    question: 'Жаңа үлгідегі әртүрлі тәсілдермен элементтерді қиыстыру арқылы ақпаратты жүйелеу – Блум таксономиясының қай деңгейіне сай:',
                    answer: 'жинақтау',
                    options: ['жинақтау','бағалау','білу','түсіну','қолдану']
                }
                ,
                {
                    numb: 48,
                    question: 'Жаңа білімдерді, әдістерді және ережелерді түрлі нұсқада пайдалану – Блум таксономиясының қай деңгейіне сәйкес келеді:',
                    answer: 'қолдану',
                    options: ['қолдану','жинақтау','бағалау','білу','түсіну']
                }
                ,
                {
                    numb: 49,
                    question: 'Тізім құру, терминдерді, формулаларды анықтау, ұғымдарды атау – Блум таксономиясының қай деңгейінің тапсырмаларына тән:',
                    answer: 'білу',
                    options: ['білу','бағалау','жинақтау','талдау','қолдану']
                }
                ,
                {
                    numb: 50,
                    question: 'Жаттап алынған білімді тексеруге арналған сұрақ:',
                    answer: 'төмен дәрежелі',
                    options: ['төмен дәрежелі','жоғары дәрежелі','жеңіл дәрежелі','күрделі дәрежелі','орташа дәрежелі']
                }
                ,
];
showqa();