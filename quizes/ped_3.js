var title = 'Педагогика 101-150'; 
var questionCount = 50; 
var timeValue = 45;
var answerMixing = true;
var deadLine = false;
var about = true;
let syllabus = '';

showDetail();

let questions = [

                {
                    numb: 1,
                    question: '﻿Тұлғаның дамуына тәрбиенің тиімді әсер ету шарттары: ',
                    answer: 'оқушының жақын даму аймағына бағдарлану',
                    options: ['оқушының жақын даму аймағына бағдарлану','оқуға қызығушылықты арттыру','сынып көшбасшыларының көзқарасын ескеру','мұғалімнің ұстанымын басшылыққа алу','ғаламтордың тәрбиелік мүмкіндіктерін қолдану']
                }
                ,
                {
                    numb: 2,
                    question: 'Тәрбие мақсатын сипаттаудағы қате пікір:',
                    answer: 'мақсат – педагогтың кәсіби қызметінің қорытынды элементі',
                    options: ['мақсат – педагогтың кәсіби қызметінің қорытынды элементі','мақсат – тәрбие үдерісінің мазмұнын айқындаушы','мақсат – тәрбие нәтижесіне негіз болушы','мақсат – педагогтың кәсіби іс-әрекетінің баға өлшемі','мақсат – педагог санасының үздіксіз айналымды жүретін ой обьектісі']
                }
                ,
                {
                    numb: 3,
                    question: 'Жан-жақты үйлесімді дамыған жеке тұлғаны қалыптастыру:',
                    answer: 'тәрбиенің мақсаты',
                    options: ['тәрбиенің мақсаты','тәрбиенің мәні','тәрбиенің міндеті','тәрбиенің миссиясы','тәрбиенің тиімділігі']
                }
                ,
                {
                    numb: 4,
                    question: 'Тәрбие мақсатын анықтаушы факторлар:',
                    answer: 'қоғам қажеттіліктері',
                    options: ['қоғам қажеттіліктері','тұлға сұраныстары','білім беру міндеттері','ата-ана мүмкіндіктері','тәрбиеші әлеуеті']
                }
                ,
                {
                    numb: 5,
                    question: '«Тәрбие логикасы оқу логикасын қайталамайды, тәрбиенің өзіндік мазмұны, принциптері, әдістері бар» деген көзқарасты ұстанған:',
                    answer: 'А.С.Макаренко',
                    options: ['А.С.Макаренко','К.Д.Ушинский','Қ.Б.Жарықбаев','Л.С.Выготский','В.А.Сухомлинский']
                }
                ,
                {
                    numb: 6,
                    question: 'Азаматтық тәрбиенің мәні:',
                    answer: 'басқа азаматтар мен мемлекеттік билікті сыйлауға үйрету',
                    options: ['басқа азаматтар мен мемлекеттік билікті сыйлауға үйрету','белсенді ойлау қызметін дамыту','табиғатқа жауапкершілікті көзқараспен қарау','нарықтық заман аймағында бағыт-бағдар алып жүру','этносаралық бейбітшілік пен келісімге жауапкершілік таныттыру']
                }
                ,
                {
                    numb: 7,
                    question: 'Азаматтық тәрбие қай тәрбие бағытымен тығыз байланысты:',
                    answer: 'патриоттық',
                    options: ['патриоттық','экологиялық','экономикалық','зияткерлік','ақпараттық']
                }
                ,
                {
                    numb: 8,
                    question: 'Тәрбиеленушілерде өз Отанына деген сүйіспеншілік сезімін оятып, оған адал қызмет жасауға, оны қорғауға баулу:',
                    answer: 'патриоттық тәрбие',
                    options: ['патриоттық тәрбие','құқықтық тәрбие','зияткерлік тәрбие','рухани-адамгершілік тәрбиесі','ұлттық тәрбие']
                }
                ,
                {
                    numb: 9,
                    question: 'Оқушылардың мемлекет заңдарына құрметпен қарауын насихаттайтын тәрбие:',
                    answer: 'құқықтық',
                    options: ['құқықтық','патриоттық','зияткерлік','рухани-адамгершілік','ұлттық']
                }
                ,
                {
                    numb: 10,
                    question: 'Жағымды мінез-құлық нормалары мен ережелерінің жиынтығы:',
                    answer: 'адамгершілік',
                    options: ['адамгершілік','белсенділік','еңбексүйгіштік','қарым-қатынас','құқық пен міндет']
                }
                ,
                {
                    numb: 11,
                    question: 'Мектептегі ұлттық тәрбиенің негізгі міндеттеріне кірмейтінін көрсетіңіз:',
                    answer: 'тәрбиеленушіге талап қою негізінде оның дамуына қажетті жағдай туғызу',
                    options: ['тәрбиеленушіге талап қою негізінде оның дамуына қажетті жағдай туғызу','мемлекеттік тілді және ана тілін меңгеруіне жағдай жасау','өз халқының мәдени мұрасын білгізу','қазақ халқының және өз халқының дәстүрлері мен әдет-ғұрпын білгізу','этносаралық бейбітшілік пен келісімге жауапкершілік таныттыру']
                }
                ,
                {
                    numb: 12,
                    question: '«Халық тәрбиесінен тыс жерде педагогика да жоқ, педагог та жоқ» деп тұжырымдаған:',
                    answer: 'К.Д.Ушинский',
                    options: ['К.Д.Ушинский','Л.Н.Толстой','Ж.Ж.Руссо','Н.К.Крупская','М.В.Ломоносов']
                }
                ,
                {
                    numb: 13,
                    question: 'Отбасы тәрбиесіне орай ата-ана міндеті:',
                    answer: 'бәріне ортақ тәртіп ережелеріне үйрету, жағымды әдеттер қалыптастыру',
                    options: ['бәріне ортақ тәртіп ережелеріне үйрету, жағымды әдеттер қалыптастыру','баланы болашақ өмірге даярлау','бала бойындағы азаматтық белсенділікті арттыру','зерттеу жұмысын жүргізуге ынтасын ояту','қоғамдағы құбылыстарға жауапкершілікті қатынасты қалыптастыру']
                }
                ,
                {
                    numb: 14,
                    question: 'Отбасы тәрбиесінің басты қағидасы:',
                    answer: 'адамгершілік, балаға деген мейірімділік',
                    options: ['адамгершілік, балаға деген мейірімділік','қарым-қатынастың пессимистік сипаты','бала құқықтарын шектеу','балаға қойылатын талаптардың қаталдығы','баланың өзін-өзі тәрбиелеуі']
                }
                ,
                {
                    numb: 15,
                    question: 'Қазіргі отбасындағы тәрбиелеу ... негізделеді:',
                    answer: 'гуманистік педагогикаға',
                    options: ['гуманистік педагогикаға','вальдорфтық педагогикаға','авторитарлық педагогикаға','әлеуметтік педагогикаға','монтессори педагогикасына']
                }
                ,
                {
                    numb: 16,
                    question: 'Отбасы тәрбиесінің әдісі:',
                    answer: 'жеке үлгі болу',
                    options: ['жеке үлгі болу','балаларды қорқытып бағындыру','нақты істер арқылы балаға әсер ету','белсенділік көрсету','қызығушылық таныту']
                }
                ,
                {
                    numb: 17,
                    question: 'Отбасындағы баланың тәрбиесіне табысты ықпал ететін басты белгі:',
                    answer: 'ата-ананың мәдени әлеуеті: мәдениеті, күн ырғағы, демалыс',
                    options: ['ата-ананың мәдени әлеуеті: мәдениеті, күн ырғағы, демалыс','ата-анадан балаға берілетін нақты сапалар мен ерекшеліктер','ата- аналардың қабілеттері','ата-аналардың жағымсыз қасиеттері','ата-аналардың адамгершілік сапалары']
                }
                ,
                {
                    numb: 18,
                    question: 'Бейнелеу өнері арқылы сезім мен талғамды дамыту:',
                    answer: 'көркем-эстетикалық тәрбиенің міндеті',
                    options: ['көркем-эстетикалық тәрбиенің міндеті','ақпараттық мәдениет тәрбиесінің міндеті','зияткерлік тәрбиенің міндеті','көпмәдениетті тәрбиенің міндеті','азаматтық тәрбиенің мәндеті']
                }
                ,
                {
                    numb: 19,
                    question: 'Көркем-эстетикалық тәрбиенің құралдары:',
                    answer: 'табиғат, өнер',
                    options: ['табиғат, өнер','ойын, әрекет','қарым-қатынас','жаттығу, тапсырма','талғам, көңіл-күй']
                }
                ,
                {
                    numb: 20,
                    question: 'Оқушыларда табыскерлікті, өзіндік дербестікті дамыту қай тәрбие бағытының міндеті:',
                    answer: 'экономикалық',
                    options: ['экономикалық','эстетикалық','экологиялық','зияткерлік','отбасылық']
                }
                ,
                {
                    numb: 21,
                    question: 'Табиғатты қорғауды мақсат еткен тәрбие:',
                    answer: 'экологиялық тәрбие',
                    options: ['экологиялық тәрбие','эстетикалық тәрбие','құқықтық тәрбие','зияткерлік тәрбие','дене тәрбиесі']
                }
                ,
                {
                    numb: 22,
                    question: 'Еңбек тәрбиесі:',
                    answer: 'қоғамдық пайдалы әрекет тәжірибесін қалыптастыру',
                    options: ['қоғамдық пайдалы әрекет тәжірибесін қалыптастыру','негізгі қозғалыс көрсеткіштерін (ептілік және төзімділік) дамыту','дене және эстетикалық тәрбиенің ажырамас бөлігі болып саналады','дүниені шығармашылық тұрғыдан танып-білу','жасөспірімдер арасында теңдікті ұстауға үйрету']
                }
                ,
                {
                    numb: 23,
                    question: 'Оқушылардың еңбек әрекеті:',
                    answer: 'сенбіліктерге қатысу',
                    options: ['сенбіліктерге қатысу','кездесу өткізу','байқау ұйымдастыру','көркемсөз оқу','жарыстарға қатысу']
                }
                ,
                {
                    numb: 24,
                    question: 'Зияткерлік тәрбие беру барысында оқушылардың қандай қабілеттері артады:',
                    answer: 'танымдық',
                    options: ['танымдық','эстетикалық','адамгершілік','экономикалық','белсенділік']
                }
                ,
                {
                    numb: 25,
                    question: 'Дене тәрбиесінің басты құралы:',
                    answer: 'ойын',
                    options: ['ойын','сабақ','жарыс','еңбек','сөз']
                }
                ,
                {
                    numb: 26,
                    question: 'Тәрбие әдісі:',
                    answer: 'тәрбие мақсатына жету жолы',
                    options: ['тәрбие мақсатына жету жолы','әртүрлі іс-әрекеттерді ұйымдастыру','тұлғаға жасалған ықпалдың нәтижелі болуы','тәлімгерлік тәсілді тиімді қолдану','мәселелік жағдайды шешу нұсқасы']
                }
                ,
                {
                    numb: 27,
                    question: 'Тәрбие әдістері қандай сұраққа жауап береді:',
                    answer: 'қалай тәрбиелеу керек?',
                    options: ['қалай тәрбиелеу керек?','не үшін тәрбиелеу керек?','кім үшін тәрбиелеу керек?','неге тәрбиелеу керек?','нені тәрбиелеу керек?']
                }
                ,
                {
                    numb: 28,
                    question: 'Тәрбие әдістерінің құрамды бөліктері, жеке көріністері:',
                    answer: 'тәрбие тәсілдері',
                    options: ['тәрбие тәсілдері','тәрбие әдістері','тәрбие құралдары','тәрбие формалары','тәрбие жабдықтары']
                }
                ,
                {
                    numb: 29,
                    question: 'Тұлға санасын қалыптастыру әдісі:',
                    answer: 'әңгіме',
                    options: ['әңгіме','үйрету','қоғамдық пікір','талап қою','жарыс']
                }
                ,
                {
                    numb: 30,
                    question: 'Тұлға санасын қалыптастыру әдістері ... механизміне негізделеді:',
                    answer: 'сендіру',
                    options: ['сендіру','жаттықтыру','кінәлау','ынталандыру','талап қою']
                }
                ,
                {
                    numb: 31,
                    question: 'Қозғалатын тақырыптың мақсаты айқын белгіленіп, мазмұны нақты фактілермен дәлелденеді, қарапайым тілмен нақтылы өмірге қатысты мәселелер қозғалады:',
                    answer: 'әңгіме',
                    options: ['әңгіме','үйрету','қоғамдық пікір','талап қою','жазалау']
                }
                ,
                {
                    numb: 32,
                    question: 'Тәрбиедегі ересектердің үлгі көрсетуі:',
                    answer: 'өнеге',
                    options: ['өнеге','пікірталас','этикалық әңгіме','түсіндіру','тәрбиелік жағдайлар']
                }
                ,
                {
                    numb: 33,
                    question: 'Көзін жеткізу, түсіндіру, әңгімелесу, баяндау - қай тәрбие әдісінің тәсілдері:',
                    answer: 'сендіру',
                    options: ['сендіру','түсіндіру','мадақтау','өнеге көрсету','тәрбиелік жағдайлар']
                }
                ,
                {
                    numb: 34,
                    question: 'Тәрбиеленушілерді қызықтыратын әртүрлі тақырыптарға арналған қызу ой сайысы:',
                    answer: 'пікірталас',
                    options: ['пікірталас','этикалық әңгіме','өнеге','түсіндіру','тәрбиелік жағдайлар']
                }
                ,
                {
                    numb: 35,
                    question: 'Сендіру әдісі қандай тәсіл арқылы іске асады:',
                    answer: 'көзін жеткізу',
                    options: ['көзін жеткізу','кінәлау','айыптау','дәлелдеу','мадақтау']
                }
                ,
                {
                    numb: 36,
                    question: 'Ұжым мүшелерінің баға беруі:',
                    answer: 'қоғамдық пікір',
                    options: ['қоғамдық пікір','әңгіме','үйрету','талап қою','жазалау']
                }
                ,
                {
                    numb: 37,
                    question: 'Іс-әрекетті ұйымдастыру және қоғамдық мінез-құлық тәжірибесін қалыптастыру әдістері қатарына жатпайтын әдіс:',
                    answer: 'түсіндіру',
                    options: ['түсіндіру','қоғамдық пікір','педагогикалық талап','тапсырма беру','үйрету']
                }
                ,
                {
                    numb: 38,
                    question: 'Арнайы жасалған шарттарға орай тәрбиеленуші іс-әрекеті мен мінез-қылығын қалыптастыру әдісі:',
                    answer: 'тәрбиелік жағдай',
                    options: ['тәрбиелік жағдай','үйрету','қоғамдық пікір','талап қою','жарыс']
                }
                ,
                {
                    numb: 39,
                    question: 'Оқушыларды әлеуметтік тәжірибеге қатыстыру әдісі:',
                    answer: 'талап қою',
                    options: ['талап қою','тәрбиелік жағдай','үйрету','қоғамдық пікір','жарыс']
                }
                ,
                {
                    numb: 40,
                    question: 'Оқушының белгілі қасиеттерінің көрінуіне әсер ететін талап формалары:',
                    answer: 'өтініш',
                    options: ['өтініш','оқу','қызмет','түсіндіру','қабылдау']
                }
                ,
                {
                    numb: 41,
                    question: 'Нұсқау, көрсету, үйрету, ақыл-кеңес беру - қай тәрбие әдісінің тәсілдері:',
                    answer: 'жаттығу',
                    options: ['жаттығу','жарыс','өнеге көрсету','түсіндіру','талап қою']
                }
                ,
                {
                    numb: 42,
                    question: '«Нағыз тәрбие ережелерден емес, жаттығулардан тұрады» деген ойды білдірген:',
                    answer: 'Ж.Ж.Руссо',
                    options: ['Ж.Ж.Руссо','Я.А.Коменский','К.Д.Ушинский','Л.С.Выготский','Ш.А.Амонашвили']
                }
                ,
                {
                    numb: 43,
                    question: 'Оқушыларды қажетті дағдыларға төселдіру:',
                    answer: 'жаттықтыру',
                    options: ['жаттықтыру','мадақтау','жазалау','әңгіме','өнеге']
                }
                ,
                {
                    numb: 44,
                    question: 'Мінез-құлықты және әрекетті ынталандыру әдісі:',
                    answer: 'жарыс',
                    options: ['жарыс','түсіндіру','көндіру','сендіру','баяндау']
                }
                ,
                {
                    numb: 45,
                    question: 'Мадақтау әдісінің тәсілі:',
                    answer: 'марапаттау',
                    options: ['марапаттау','үйрету','жаттықтыру','тәрбиелеу','талап қою']
                }
                ,
                {
                    numb: 46,
                    question: 'Оқушылардың теріс қылығын тежеу әдісі:',
                    answer: 'жазалау',
                    options: ['жазалау','түсіндіру','көндіру','сендіру','баяндау']
                }
                ,
                {
                    numb: 47,
                    question: 'Мектеп тәжірибесінде жазалаудың қай түрі қолданылмайды:',
                    answer: 'іс-әрекетті басқару',
                    options: ['іс-әрекетті басқару','қосымша міндеттер беру','кей құқықтардан айыру немесе шектеу','моральдық сөгіс жариялау немесе айып тағу','ескерту жасау немесе сөгіс жариялау']
                }
                ,
                {
                    numb: 48,
                    question: 'Жарыс:',
                    answer: 'оқушы қабілеттілігін арттыру',
                    options: ['оқушы қабілеттілігін арттыру','кез келген жолмен бірінші болу','көзделген нәтижеге жету мақсаты','тәрбиешімен бірге тапсырманы орындау','тәжірибе жүзіндегі әрекет']
                }
                ,
                {
                    numb: 49,
                    question: 'Құптау, марапаттау, алғыс білдіру - қай тәрбие әдісінің тәсілдері:',
                    answer: 'мадақтау',
                    options: ['мадақтау','сендіру','өнеге көрсету','түсіндіру','тәрбиелік жағдайлар']
                }
                ,
                {
                    numb: 50,
                    question: 'Белгілі бір тәрбиелік міндеттерді шешудің мақсатты түрде ұйымдастырылған әдістемелік жолдары:',
                    answer: 'тәрбие құралдары',
                    options: ['тәрбие құралдары','тәрбие әдістері','тәрбие тәсілдері','тәрбие формалары','тәрбие жіктеуі']
                }
                ,
];
showqa();