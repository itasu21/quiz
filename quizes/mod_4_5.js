var title = 'Психология / 201-259'; 
var questionCount = 59; 
var timeValue = 60;
var answerMixing = true;
var deadLine = false;
var about = false;
let syllabus = '';

showDetail();

let questions = [

                {
                    numb: 1,
                    question: '﻿Адамның танымдық әрекетіне жатпайтын психологиялық категория:',
                    answer: 'сезім',
                    options: ['сезім','зейін','ойлау','түйсік','қиял']
                }
                ,
                {
                    numb: 2,
                    question: 'Сезімдер тобына кірмейтін психологиялық құбылыс:',
                    answer: 'мінез.',
                    options: ['мінез.','көңіл','құмарлық','эмоция','сезім']
                }
                ,
                {
                    numb: 3,
                    question: 'Психиканың пайда болуының нақты негізі:',
                    answer: 'ми',
                    options: ['ми','ой','сана','жүйке','қиял']
                }
                ,
                {
                    numb: 4,
                    question: 'Ой операцияларына жатпайтын психикалық құбылыс:',
                    answer: 'қиял',
                    options: ['қиял','анализ','синтез','салыстыру','абстракция']
                }
                ,
                {
                    numb: 5,
                    question: 'Психиканың пайда болуының нақты негізі:',
                    answer: 'ми',
                    options: ['ми','ой','сана','жүйке','қиял']
                }
                ,
                {
                    numb: 6,
                    question: '“Шартты рефлекс” терминін алғаш ұсынған:',
                    answer: 'И.П.Павлов.',
                    options: ['И.П.Павлов.','И.М.Сеченов.','В.М.Бехтерев.','Ч.Дарвин.','Анохин']
                }
                ,
                {
                    numb: 7,
                    question: 'Шартты және шартсыз рефлекстер ұғымын ғылыми тұрғыда қарастырғандар:',
                    answer: 'И.М.Сеченов пен И.П.Павлов.',
                    options: ['И.М.Сеченов пен И.П.Павлов.','В.М.Бехтерев.','К.Линней.','Р.Декарт.','З.Фрейд.']
                }
                ,
                {
                    numb: 8,
                    question: 'Төл тіліміздегі тұңғыш шыққан «Психология» оқулығының арторы:',
                    answer: 'Ж.Аймауытұлы, 1926 ж. Ташкентте.',
                    options: ['Ж.Аймауытұлы, 1926 ж. Ташкентте.','В.Я.Струминский, 1923 ж. Орынборда.','Т.Тәжібаев, 1998 ж. Алматыда.','Қ.Б.Жарықбаев, 1986 ж. Алматыда.','Ә.Темірбеков, С.Балаубаев, 1966 ж. Алматыда.']
                }
                ,
                {
                    numb: 9,
                    question: 'Сезгіштік деген не:',
                    answer: 'психологияда адамның түйсіне алу қабілетін айтады.',
                    options: ['психологияда адамның түйсіне алу қабілетін айтады.','сезім мүшелерінің өте әлсіз тітіркендіргіштерді түйсіне алуы.','сезім мүшелерінің тітіркендіргіштердің арасындағы болмашы айырмашылықты түйсіне алуы.','мидың рефлекстік қызметі.','әртүрлі себептермен туындайтын қызу өтетін эмоциялық күйдің жоғары түрі.']
                }
                ,
                {
                    numb: 10,
                    question: 'Тану процесінің мазмұны:',
                    answer: 'бұрынғы қабылданған нәрсеге, құбылысқа қайта кездескенде ғана болатын процесс.',
                    options: ['бұрынғы қабылданған нәрсеге, құбылысқа қайта кездескенде ғана болатын процесс.','қабылданған материалды керек кезінде еске түсіре алмау, қателесу.','есте қалдыру процесіне қарама-қарсы процесс.','жүйке клеткаларындағы тежелу процесінің дамуы.','адамның ақыл-ойымен тығыз байланысты психикалық сана.']
                }
                ,
                {
                    numb: 11,
                    question: 'Жоғары сезімдерді анықта:',
                    answer: 'ақыл-ой, эстетикалық, адамгершілік*моральдық сезімдер.',
                    options: ['ақыл-ой, эстетикалық, адамгершілік*моральдық сезімдер.','аффект, эмпатия, стресс.','стеникалық, астеникалық сезімдер.','кейіп, фрустрация.','дистресс']
                }
                ,
                {
                    numb: 12,
                    question: 'Ерік әрекетінің мазмұны:',
                    answer: 'адамның өз мінез-құлқын саналы түрде меңгере алу қабілеті.',
                    options: ['адамның өз мінез-құлқын саналы түрде меңгере алу қабілеті.','адам көңіл-күйінің ерекше көріністері.','адамның өзіне, өзге адамдарға, айналасындағы заттер мен құбылыстарға көңіл-күйінің қатынасын білдіруі.','ерікті болуы адамдардың адамдармен тіл табысын кетуі.','өз-өзінен пайда болатын адамның қажеттілігі.']
                }
                ,
                {
                    numb: 13,
                    question: 'Мінез көріністерінің мазмұны:',
                    answer: 'әрбір адамның жеке басына тән өзіндік психологиялық қасиеттер мен ерекшеліктер жиынтығы.',
                    options: ['әрбір адамның жеке басына тән өзіндік психологиялық қасиеттер мен ерекшеліктер жиынтығы.','өзгермейтін, тұрақты психикалық қасиет.','жүйке жүйесінің табиғи типтік қасиеттеріне тәуелді, жеке адамға тән дара өзгешелік.','ес сезімінің тума қабілеттерден туындайтын адамның іс-әрекеті.','адамның іс-әрекетін меңгере алу қабілеті.']
                }
                ,
                {
                    numb: 14,
                    question: 'Психика деген не:',
                    answer: 'объективті дүниенің миымызда субъективті бейнеленуі.',
                    options: ['объективті дүниенің миымызда субъективті бейнеленуі.','жоғары деңгейде кемелденіп жетілген мидың қызметі.','ақиқатты, объективті шындықты танып білудің үнемі дамып күрделеніп отыратын диалектикалық жолы.','адамның дара ерекшелігі.','адамның жоғары сезімі.']
                }
                ,
                {
                    numb: 15,
                    question: 'Темпераменттің физиологиялық негізі неге байланысты:',
                    answer: 'жүйке жүйесінің жұмысына.',
                    options: ['жүйке жүйесінің жұмысына.','мидың физиологиялық ерекшелігіне.','денедегі сұйықтардың мөлшеріне.','организмнің түрліше физиологиялық өзгешеліктеріне.','организмдегі химиялық элементтердің азды-көптігіне.']
                }
                ,
                {
                    numb: 16,
                    question: 'Темпераменттің физиологиялық негіздерін ғылыми тұрғыдан түсіндірген:',
                    answer: 'Академик – И.П.Павлов.',
                    options: ['Академик – И.П.Павлов.','И.М.Сеченов.','В.М.Бехтерев.','Неміс философы – И.Кант.','Ежелгі грек дәрігері – Гиппократ.']
                }
                ,
                {
                    numb: 17,
                    question: 'Сөйлеудің мәнерлілігі:',
                    answer: 'әрбір сөзді өзінің сазымен, ырғағымен айту.',
                    options: ['әрбір сөзді өзінің сазымен, ырғағымен айту.','ойдың, сезімнің құндылығы, тереңдігі, мазмұндылығын ескеру.','адамның білім дәрежесімен сипатталады.','адамның ниет тілегін, мұқтаждығы мен қабілеттілігіне тәуелді.','ойды нақты баяндай білу.']
                }
                ,
                {
                    numb: 18,
                    question: 'Қабілет дегеніміз не:',
                    answer: 'іс-әрекеттің белгілі бір түрін ойдағыдай нәтижелі орындауда көрінетін адамның жеке қасиеті.',
                    options: ['іс-әрекеттің белгілі бір түрін ойдағыдай нәтижелі орындауда көрінетін адамның жеке қасиеті.','біртіндеп өмір сатысында дамып, қалыптасып отыратын психикалық қасиет.','қоршаған ортаның әсерінен пайда болатын психикалық процесс.','өмірдің қай саласында болмасын жаңалық ашу.','адам санасының белгілі бір объектіге бағытталуы.']
                }
                ,
                {
                    numb: 19,
                    question: 'Нышанның ықпалымен қалыптасқан жеке адамның психикалық қасиеті не деп аталады:',
                    answer: 'дарындылық',
                    options: ['дарындылық','данышпандық','бейімділік','қабілет','талант']
                }
                ,
                {
                    numb: 20,
                    question: 'Жүйке жүйесінің типтерін анықта:',
                    answer: 'ширақ тип, баяу тип, ұстамсыз тип, әлсіз тип.',
                    options: ['ширақ тип, баяу тип, ұстамсыз тип, әлсіз тип.','ұстамсыз тип , қозғалғыштығы.','жүйке жүйесінің күші, тепе-теңдігі, қозғалмалығы .','әлсіз тип.','баяу тиа.']
                }
                ,
                {
                    numb: 21,
                    question: 'Адам мен хайуанаттар психикасын салыстыра отырып зерттейтін, ерекшеліктерін ажырататын психология ғылымының саласын анықта:',
                    answer: 'салыстырмалы психология.',
                    options: ['салыстырмалы психология.','әлеуметтік психология.','медициналық психология.','сот психологиясы.','еңбек психологиясы.']
                }
                ,
                {
                    numb: 22,
                    question: 'Қазіргі психологиялық зерттеулерде қай әдіс негізгі және маңыздырақ деп саналады:',
                    answer: 'эксперимент',
                    options: ['эксперимент','гнетикалық','тест','референтометрия.','сұхбат']
                }
                ,
                {
                    numb: 23,
                    question: 'Индукциялық ой қорытындысы деген не:',
                    answer: 'жекеден жалпыға қарай жасалатын ой қорытындысы.',
                    options: ['жекеден жалпыға қарай жасалатын ой қорытындысы.','жалпыдан жекеге қарай жасалатын ой қорытындысы.','объектілер мен болмыстың айырмашылығын табу тәсілі.','ойдың шындық дүниедегі заттар мен құбылыстардың жалпы және мәнді сипаттарын.','Заттар мен құбылыстар туралы ой.']
                }
                ,
                {
                    numb: 24,
                    question: 'Жеке адамның психикалық қасиеттері:',
                    answer: 'мінез, темперамент, қабілет .',
                    options: ['мінез, темперамент, қабілет .','сезім, ерік.','зейін.','түйсіну, қабылдау.','сана, психика.']
                }
                ,
                {
                    numb: 25,
                    question: 'Эстетикалық сезімдер дегеніміз:',
                    answer: 'адамның шындықтағы қандай болмасын бір сұлулықты сезінуі.',
                    options: ['адамның шындықтағы қандай болмасын бір сұлулықты сезінуі.','адамның тану процестерімен, ақыл-ой әрекетімен тығыз байланысып жатуы.','адамның ойы мен әрекетінің негізгі бағытына із қалдыратын терең тұрақты эмоция.','ьахаббат сезімі.','қоғамның тарихи дамуында пайда болған сезімдер.']
                }
                ,
                {
                    numb: 26,
                    question: 'Көрсетілген әдістердің қайсысы қосымша әдістерге жатады:',
                    answer: 'анкета әдісі, тест әдісі .',
                    options: ['анкета әдісі, тест әдісі .','бақылау','лабораториялық эксперимент.','табиғи эксперимент.','жаппай және ішінара бақылау.']
                }
                ,
                {
                    numb: 27,
                    question: 'Диалогтық сөйлеу дегеніміз:',
                    answer: 'екі немесе одан да көп адамдардың тілдесуі.',
                    options: ['екі немесе одан да көп адамдардың тілдесуі.','тілдік материалдар негізінде дауыстамай-ақ сөйлей алушылық.','бір адамның сөзі, яғни баяндамашының сөзі.','өз ойын жазба түрінде беруі.','жымдағы мәселені талдау.']
                }
                ,
                {
                    numb: 28,
                    question: 'Экстерорецепторларға жататын түйсіну түрлерін анықта:',
                    answer: 'лөру, есту, иіс, дәм, тері .',
                    options: ['лөру, есту, иіс, дәм, тері .','бұлшық ет, сіңірден шығатын түйсінулер.','органикалық.','буыннан шығатын түйсінулер.','аштықты, шөлді, тоқтықты, ауырғанды түйсінулер .']
                }
                ,
                {
                    numb: 29,
                    question: 'Фрустрация деген не:',
                    answer: 'қанағаттанбаушылық сезіммен жан дүниесінің күйзелуі.',
                    options: ['қанағаттанбаушылық сезіммен жан дүниесінің күйзелуі.','адам халінің өз басына түскендей көңіл-күйде болуы.','кенеттен пайда болып, бұрқ етіп сыртқа шығатын қуатты көңіл-күй.','қуаныш сезімі.','адамның таным, білімге байланысты қажырлы көңіл-күйі.']
                }
                ,
                {
                    numb: 30,
                    question: 'Синестезия қандай құбылыс:',
                    answer: 'түйсіктердің қосарлана жұмыс істеуі.',
                    options: ['түйсіктердің қосарлана жұмыс істеуі.','организмнің сыртқы тітіркендіргіштерге бейімделуі.','сезгіштіктің тек артуын көрсететін құбылыс.','ішкі факторлар әсерінен анализаторлардың сезгіштігінің төмендеуі.','түйсіне алу қабілеті.']
                }
                ,
                {
                    numb: 31,
                    question: 'Түйсік заңдылықтарын анықта:',
                    answer: 'адаптация, синестезия, сенсибилизация.',
                    options: ['адаптация, синестезия, сенсибилизация.','түйсіктің әрбір түрінің өзінің спецификалық ерекшеліктері бар.','тітіркендіргіштердің әсер ету уақыты мен жиілігі және сезу органдарының жағдайлары.','әсер ететін тітіркендіргіштердің күшімен және рецептордың функционалдық жағдайларымен анықталады.','мнемоника']
                }
                ,
                {
                    numb: 32,
                    question: 'Зейіннің аударылуы деген не:',
                    answer: 'Бір объектіден екінші объектіге назар аударылуы.',
                    options: ['Бір объектіден екінші объектіге назар аударылуы.','Бір уақыттың ішінде оның қамтитын объектілерінің саны.','Бір объектіге бағытталып, ұзақ уақыт бойы шоғырлануы.','Адам санасының белгілі бір затқа бағыттала тұрақталуы.','Бөгде тітіркендіргіштерге елеңдей беруі.']
                }
                ,
                {
                    numb: 33,
                    question: 'Бұлшық еттерде, тарамыс пен сіңірлерде орналасқан сезім мүшелері:',
                    answer: 'Проприорецептор',
                    options: ['Проприорецептор','экстерорецептор','интерорецептор','органикалық','статикалық']
                }
                ,
                {
                    numb: 34,
                    question: 'Бұл адамның барлық толғаныс-тебіреністері мен әрекетіне өң беретін біршама ұзақ эмоциялық күй:',
                    answer: 'көңіл-күй.',
                    options: ['көңіл-күй.','аффект','фрустрация','құмарлық','эмпатия']
                }
                ,
                {
                    numb: 35,
                    question: 'Ассоциациялық принциптерді тұңғыш зерттеген кім:',
                    answer: 'Аристотель',
                    options: ['Аристотель','Д.Н.Узнадзе .','А.Р.Лурия .','Гиппократ','И.П.Павлов']
                }
                ,
                {
                    numb: 36,
                    question: 'Ахроматикалық түстерге қандай түс жатады :',
                    answer: 'ақ, сұр, қара.',
                    options: ['ақ, сұр, қара.','қызыл','жасыл','сары','көк']
                }
                ,
                {
                    numb: 37,
                    question: 'Ес процестерін анықта:',
                    answer: 'есте сақтау, қайта жаңғырту, тану, ұмыту.',
                    options: ['есте сақтау, қайта жаңғырту, тану, ұмыту.','сөз-логикалық.','образдық.','қозғалыс.','эмоциялық.']
                }
                ,
                {
                    numb: 38,
                    question: 'Мінездің анықтамасы:',
                    answer: 'Адамның жеке басына тән өзіндік психологиялық қасиеттер мен ерекшеліктердің жиынтығы.',
                    options: ['Адамның жеке басына тән өзіндік психологиялық қасиеттер мен ерекшеліктердің жиынтығы.','Жүйке жүйесінің тума биологиялық ерекшеліктері.','Адамның әрқилы қимыл-әрекеті.','Мидағы оптималдық қозу ошағы.','Тұрақты, өзгермейтін психикалық қасиет.']
                }
                ,
                {
                    numb: 39,
                    question: 'Психологияның ғылым ретінде пайда болып, дүниеге тұңғыш келген жері:',
                    answer: 'Ежелгі Грецияда .',
                    options: ['Ежелгі Грецияда .','Мысыр мен Үндістанда /б.з.д. VI ғасыр/ .','Қытайда /б.з.д. ХІІІ ғ./.','Англияда /ХVғ./.','Германияда']
                }
                ,
                {
                    numb: 40,
                    question: 'Темперамент типтерін анықта: Жүйке процестері күшті, бірі екіншісіне тең келмейтін, ұйытқымалы, қимыл-қозғалысы шапшаң, басынан кешкен сезімі санасында терең із қалдырады, іске шапшаң кіріседі, ұйымдастырушылық қабілеті жоғары:',
                    answer: 'холерик',
                    options: ['холерик','меланхолик','сангвиник','флегматиг','экстраверт']
                }
                ,
                {
                    numb: 41,
                    question: 'Адамның өзіне бағытталған сөйлеу түрі:',
                    answer: 'эгоцентрикалық',
                    options: ['эгоцентрикалық','диалог','монолог','сырттай','жазбаша']
                }
                ,
                {
                    numb: 42,
                    question: 'Білім беру мен тәрбиелеудің психологиялық негізін зерттейтін психологияның саласы:',
                    answer: 'педагогикалық психология.',
                    options: ['педагогикалық психология.','медициналық психология.','өнер психологиясы.','жалпы психология.','инженерлік.']
                }
                ,
                {
                    numb: 43,
                    question: 'Адамға күш беріп, әрекетке ұмтылдыратын, көтеріңкі сезімдер қалай аталады:',
                    answer: 'стеникалық.',
                    options: ['стеникалық.','астеникалық.','стресс.','дистресс','аффект']
                }
                ,
                {
                    numb: 44,
                    question: 'Түрлі себептерге байланысты шындықтағы объектілерді қате қабылдау:',
                    answer: 'иллюзия.',
                    options: ['иллюзия.','галлюцинация.','структуралы қабылдау.','тұтастай','ьұрақтылығы.']
                }
                ,
                {
                    numb: 45,
                    question: 'Қабілеттің бастапқы табиғи негізі ретінде адамда туа пайда болатын жүйке қызметінің ерекшелігі не деп аталады:',
                    answer: 'нышан',
                    options: ['нышан','синестезия','амнезия','гипотеза','бейімділік']
                }
                ,
                {
                    numb: 46,
                    question: 'Ойлау процесінің мазмұны:',
                    answer: 'Сыртқы дүние заттары мен құбылыстарының байланыс-қатынастарының миымызда жалпылай және жанама түрде сөз арқылы бейнеленуі.',
                    options: ['Сыртқы дүние заттары мен құбылыстарының байланыс-қатынастарының миымызда жалпылай және жанама түрде сөз арқылы бейнеленуі.','таным процестерінің ішіндегі күрделі әрі тек адамға ғана тән психикалық процесс.','өмірдің қай саласы болмасын жаңалық ашуы.','адамның ақыл-ойымен тығыз байланысты күрделі психикалық процесс.','адамның дыбыс арқылы ойын басқа біреуге жеткізуі.']
                }
                ,
                {
                    numb: 47,
                    question: 'Сырттан әсер еткен тітіркендіргішке организмнің бейімделуі:',
                    answer: 'адаптация',
                    options: ['адаптация','синестезия','сенсибилизация','апперцепция','иллюция']
                }
                ,
                {
                    numb: 48,
                    question: 'Хроматикалық түстерге қандай түс жатады:',
                    answer: 'қызыл, сары, жасыл, күлгін.',
                    options: ['қызыл, сары, жасыл, күлгін.','шұбар, ала .','сұр','ақ','қара']
                }
                ,
                {
                    numb: 49,
                    question: 'Ассоциациялық принциптерді тұңғыш зерттеген кім:',
                    answer: 'Аристотель.',
                    options: ['Аристотель.','Д.Н.Узнадзе .','А.Р.Лурия .','И.П.Павлов .','Гиппократ.']
                }
                ,
                {
                    numb: 50,
                    question: 'Адам қанағаттанбау, реніш сезімін бастан жиі кешіреді, тұрақты жағымсыз эмоцияға душар ететін күйдің түрі:',
                    answer: 'фрустрация',
                    options: ['фрустрация','эмпатия','құмарлық','әуестік','стресс']
                }
                ,
                {
                    numb: 51,
                    question: 'Жеткіншектік кезеңдегі балалардың негізгі әрекетін ата:',
                    answer: 'оқу',
                    options: ['оқу','ойын','қоғамдық пайдалы еңбек.','өзіне-өзі қызмет етуі.','спортпен шұғылдану.']
                }
                ,
                {
                    numb: 52,
                    question: 'Екінші сигналдық жүйенің мазмұны:',
                    answer: 'сөз, сөйлеу және олардың негізінде туатын уақытша байланыстар.',
                    options: ['сөз, сөйлеу және олардың негізінде туатын уақытша байланыстар.','адамға да, жануарларға да тән.','адамның шығармашылық қиялының сырқа шығуы үшін қажетті шарт.','айналадағы болмыс пен шындық жайлы дұрыс елес тудыру.','шартсыз рефлекстерге сүйенбейді.']
                }
                ,
                {
                    numb: 53,
                    question: 'Вибрациялық түйсіну деген не:',
                    answer: 'қозғалған заттардың ауаны толқытуын дененің сезіне алуы.',
                    options: ['қозғалған заттардың ауаны толқытуын дененің сезіне алуы.','дененің кеңістіктегі орнын анықтайды.','қимыл әрекеттердің жылдамдықтарымен байланысты.','Заттардың механикалық және термикалық сипаттарының теріге әсер етуі.','ішкі органдардың жұмысымен байланысты.']
                }
                ,
                {
                    numb: 54,
                    question: 'Жүйке жүйесінің ауруға шалдығуына байланысты жалған, теріс, бұрмаланған бейнелердің тууын қабылдаудың қай заңдылығына жатқызуға болады Жүйке жүйесінің ауруға шалдығуына байланысты жалған, теріс, бұрмаланған бейнелердің тууын қабылдаудың қай заңдылығына жатқызуға болады:',
                    answer: 'галлюцинация',
                    options: ['галлюцинация','иллюзия','апперцепция','синестезия','адаптация']
                }
                ,
                {
                    numb: 55,
                    question: 'Ой қорытындысы деген не:',
                    answer: 'адам түрлі пікірлерді салыстыра, анализдей отырып, жеке я логикалық қорытындыға келеді.',
                    options: ['адам түрлі пікірлерді салыстыра, анализдей отырып, жеке я логикалық қорытындыға келеді.','құбылыстар арасында байланыс орнату.','қажырлы ақыл-ой жұмысының нәтижелі аяқталуы.','ой арқылы әрбір объекті мен болмыстың ерекшеліктерін, қасиеттерін көрсету.','жеке бөлшектерден тұтас объектіні құрастыру.']
                }
                ,
                {
                    numb: 56,
                    question: 'Төменде берілген тапсырмада эмоциялық жағдайдың қай түрін ажыратуға болады. «Бір бала асық ойнауға, екіншісі марка жинауға, үшіншісі аквариумда балық өсіруге, ал өзге біреулері тіпті жағымсыз істерге /темекі шегу т.б./ бейім тұрады»:',
                    answer: 'құмарлық',
                    options: ['құмарлық','аффект','көңіл-күй.','фрустрация.','эмпатия.']
                }
                ,
                {
                    numb: 57,
                    question: 'Зейіннің негізгі қасиетін анықта: Адамның бір объектіге немесе бір жұмысқа ұзағырақ тұрақтай алуы зейіннің қай қасиеті:',
                    answer: 'зейіннің тұрақтылығы.',
                    options: ['зейіннің тұрақтылығы.','зейіннің бөлінуі.','зейіннің ауысуы.','апперцепция.','зейіннің шоғырлануы.']
                }
                ,
                {
                    numb: 58,
                    question: 'Нышанның ықпалымен қалыптасқан жеке адамның психикалық қасиеті не деп аталады:',
                    answer: 'дарындылық.',
                    options: ['дарындылық.','талант.','данышпандық','бейімділік','қабілет']
                }
                ,
                {
                    numb: 59,
                    question: 'Қазіргі психологиялық зерттеулерде қай әдіс негізгі және маңыздырақ деп саналады:',
                    answer: 'эксперимент.',
                    options: ['эксперимент.','генетикалық','тест','социометрия','сұхбат']
                }
                ,
];
showqa();