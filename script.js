// kávová tlačítka skryta 16-07-2025
function setCoffeeStatus(status) {
    const output = document.getElementById('coffeeOutput');
    const messages = {
        green: '🟢 Všechno v pohodě, můžeš mluvit.',
        yellow: '🟡 Mluv pomalu. Kafe dochází.',
        red: '🔴 NE. NEMLUV. HROZÍ NEBEZPEČÍ.'
    };
    output.innerHTML = messages[status];
    refreshAnimation(output);
}

function showFire() {
    const fires = [
        'Klient čeká na odpověď, ale nikdo netuší na co.',
        'ERP spadlo. Zas. Ale teď už to bereme jako stav věcí.',
        'Obchodník slíbil něco, co neexistuje. Tak to začneme vyvíjet. Dnes.',
        'Došlo mléko do kuchyňky. Kávová krize eskaluje.',
        'Meeting, co mohl být e-mailem, byl. Ale někdo to e-mailem neposlal.',
        'Tiskárna tvrdí, že nemá papír. Má. Ale jen pro vyvolené.',
        'Okno je otevřené, takže je někomu zima a někomu teplo. Emoce na bodu varu.',
        'Klimatizace? Fouká jen na květinu. Ta se má nejlíp.',
        'Někdo si ohřál rybu. Kuchyňka je opuštěná. Důstojnost taky.',
        'Pozvánka na rychlý status call. Už trvá 48 minut.',
        'Helpdesk komunikuje v Morseovce. Přes čelo a kávovar.',
        'Slack dělá “ping” i když je zavřený. Je to duch.',
        'Wi-Fi nepadla. Jen šla na pauzu. Bez oznámení.',
        'Kolega má hlasitost na 300 %. Celý tým slyší i jeho myšlenky.',
        'Projektová změna dne: přejmenovat všechno a začít znova. Údajně agilní přístup.'
    ];

    const output = document.getElementById('fireOutput');
    output.innerHTML = '🔥 ' + randomItem(fires);
    refreshAnimation(output);
}

function showTask() {
    const redaTasks = [
        'Napiš kolegovi milý e-mail. A zkus ho začít jinak než “ahoj, dotaz”.',
        'Zhluboka se nadechni. Reda stojí. Zatím.',
        'Uklidni si plochu. A když zbude čas, i pracovní stůl.',
        'Zeptej se sám/a sebe, proč sis otevřel/a Slack. Už zase.',
        'Nezapomeň pít vodu. Kafe a nervy se nepočítají.',
        'Přečti si celé zadání. Nebo aspoň první větu.',
        'Zdrav recepti. Jo, *recepti*. To je recepční + respekt.',
        'Zkus nekomentovat úkol v Redmine slovy “co to je?”',
        'Dneska prosím neříkej “to ještě nemám ready”, když jsi to ještě ani neotevřel/a.',
        'Mluv tiše. Všichni slyší všechno. Doslova. Open space.',
        'Pokud řekneš “v pohodě to stihnu”, mělo by to být aspoň trochu pravda.',
        'Zavři záložky, které nepoužíváš. Včetně té s dovolenou.',
        'Pošli mail bez caps locku. Nejsme v 90kách.',
        'Odpověz na Slack zprávu starší než dva dny. Překvapíš sám/a sebe.',
        'Přestaň hledat návod “jak nebýt vyhořelý”. Udělej si čaj.'
    ];


    const output = document.getElementById('taskOutput');
    output.innerHTML = '✅ ' + randomItem(redaTasks);
    refreshAnimation(output);
}

function showQuote() {
    const quotes = [
        'Nejsme korporát. Máme vlastní chaos.',
        'Není proces? Nevadí. Improvizujeme každý den.',
        'Když něco nefunguje, restartuj. Když to nepomůže, utíkej.',
        'Všechno je důležité. Ale něco je *nejdůležitější*. Každou hodinu jiné.',
        'Kdo potřebuje HR, když máme pasivní-agresivní poznámky ve Slacku?',
        'Workflow? To je to, co si pamatuješ z minula.',
        'Tady máme plochou strukturu. A hlubokou frustraci.',
        'Agilní jsme tak moc, že nevíme, co bude zítra.',
        'Interní systémy fungují skvěle. Jen nikdo neví, jak.',
        'Přestávka na kafe = krizové řízení.',
        'Zadání je vždy intuitivní. Bohužel pro zadavatele.',
        'Máme firemní kulturu. Ale momentálně je na dovolené.',
        'Týmová spolupráce: 5 lidí čeká, kdo to nakonec udělá.',
        'U nás se to nedělá „správně“. U nás se to dělá „nějak“ a hned.',
        'To, že nejsme korporát, ještě neznamená, že nemůžeme mít čtyři tabulky na jedno rozhodnutí.'
    ];

    const output = document.getElementById('quoteOutput');
    output.innerHTML = '💬 ' + randomItem(quotes);
    refreshAnimation(output);
}

function showLegend() {
    const legends = [
        'Ty!',
        'Tvoje kolegyně!',
        'Šéf (výjimečně)',
        'Excel',
        'Ten, kdo přišel do práce',
        'Ten, kdo si stihl udělat kafe a nezapomněl ho na kuchyňce.',
        'Kdokoli, kdo pochopil, co se řeší na standupu.',
        'Ten, komu dnes nic nespadlo.',
        'Týpek, co opravil bug a hned ho commitnul. Bez komentáře.',
        'Ten, kdo se dnes dokázal odhlásit z Teams callu napoprvé.',
        'Kolegyně, co donesla buchtu. Automatický MVP.',
        'Ten, kdo nereagoval pasivně-agresivně. Ani jednou.',
        'Ten, komu se podařilo zavřít všech 34 otevřených tabů.',
        'Ten, kdo aspoň předstíral, že čte to zadání.',
        'Designér, co přežil feedback bez jediného “možná bych to udělal jinak…”'
    ];

    const output = document.getElementById('legendOutput');
    output.innerHTML = '👑 ' + randomItem(legends);
    refreshAnimation(output);
}

let zenClicks = 0;

function showZen() {
    const normalZens = [
        'Dneska zvládnu cokoliv. I další tabulku.',
        'Jsem víc než e-maily.',
        'Klient není moje karma.',
        'Můj klid je důležitější než deadliny.',
        'Dýchám. Usmívám se. Přežívám.',
        'Všechno se stihne. A co se nestihne, to se odloží.',
        'Moje myšlenky nejsou ve backlogu.',
        'Dneska jsem offline v duši.',
        'Žádný stres. Jen notifikace.',
        'Jsem v pohodě. Nebo to alespoň dobře předstírám.',
        'Moje klidná energie je silnější než firemní chat.',
        'Dneska nepracuji proti systému. Jen kolem něj.',
        'Dávám věci do pořádku. Začínám u sebe. Až pak Google Drive.',
        'Všechno má svůj čas. I odpověď na ten e-mail.',
        'Mluvím tiše, pracuji pomalu, fakturuji v klidu.'
    ];
    const apathyZens = [
        'Není to horší. Je to jen... stejné.',
        'Kávu si musíš uvařit sama. Emoce taky.',
        'Ignoruj. Počkej. Zapomeň.',
        'Systém nepadl. Jen už nemá důvod vstát.',
        'Naděje je přeceňovaná. Dej si sušenku.',
        'Dnešek není špatný. Je jen bez chuti.',
        'Pocity? Dnes nemáme skladem.',
        'Plánování nemá smysl. Outlook to stejně rozbije.',
        'Dneska je jen včerejšek s novým to-do listem.',
        'Nic se neděje. A přesto je toho moc.',
        'Čas je relativní. Hlavně mezi dvěma meetingy.',
        'To-do list žije. A krmí se mou energií.',
        'Všichni se snaží. Někteří i zůstat vzhůru.',
        'Odevzdaný úsměv je taky forma aktivity.',
        'Deadline není konec světa. Jen začátek dalšího.'
    ];


    const zens = apathyMode ? apathyZens : normalZens;
    const output = document.getElementById('zenOutput');
    output.innerHTML = '🧘 ' + randomItem(zens);
    refreshAnimation(output);

    zenClicks++;
    if (zenClicks === 5 && !apathyMode) {
        alert("🧙 Tajný režim odemčen! Věř si víc než obchodník svému Excelu.");
        zenClicks = 0;
    }
}

function refreshAnimation(element) {
    element.classList.remove("message-box");
    void element.offsetWidth; // Force reflow
    element.classList.add("message-box");
}

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function remindCoffee() {
    setInterval(() => {
        const now = new Date();
        const hours = now.getHours();
        if (hours >= 8 && hours <= 17) {
            alert("☕ Pauzička! Zasloužíš si kafe nebo aspoň vodu.");
        }
    }, 1000 * 60 * 45);
}

remindCoffee(); // Spustit připomínku při načtení


function showDailyQuote() {
    const quotes = {
        0: [
            'Neděle: Inbox je tichý. To je podezřelé. Připrav se.',
            'Neděle: Dýchej. Ještě nikdo nic nechce. Zatím.',
            'Neděle: Regeneruj. I tabulky odpočívají.'
        ],
        1: [
            'Pondělí: Všichni dělají, že ví, co dělají. Přidej se.',
            'Pondělí: První e-mail tě nezabije. Ten druhý možná.',
            'Pondělí: Tvá energie je jako Wi-Fi. Slabá, ale připojená.'
        ],
        2: [
            'Úterý: Už je to rozjeté. Je pozdě couvnout, brzy vzdát.',
            'Úterý: Dnešní výkon? Tak akorát na přežití.',
            'Úterý: Stále nejsi v polovině týdne. Ale tvá duše už ano.'
        ],
        3: [
            'Středa: Den mezi zoufalstvím a nadějí. Perfektní čas na poradu.',
            'Středa: To nejhorší je za tebou. Pravděpodobně.',
            'Středa: Půlka týdne = půlka sil. Vydrž.'
        ],
        4: [
            'Čtvrtek: Už cítíš pátek? Ne? Tak zpátky do práce.',
            'Čtvrtek: Jsi skoro v cíli. Ale jen skoro.',
            'Čtvrtek: Je to jak pátek... bez radosti.'
        ],
        5: [
            'Pátek: Všechno se dá odložit na pondělí. I nervy.',
            'Pátek: Už jen předstírej, že něco děláš. Všichni to chápou.',
            'Pátek: Tvá snaha je přímá úměra víkendové chuti.'
        ],
        6: [
            'Sobota: Svoboda chutná jako kafe bez notifikací. Krátce.',
            'Sobota: Ještě chvíli klid. Pak tě dostihne pondělí.',
            'Sobota: Nikdo po tobě nic nechce. Nezvyk, viď?'
        ]
    };

    const day = new Date().getDay();
    const quoteOfTheDay = quotes[day][Math.floor(Math.random() * quotes[day].length)];
    document.getElementById('dailyQuote').innerHTML = '📅 ' + quoteOfTheDay;

}

showDailyQuote();


let apathyMode = false;

function toggleApathy() {
    apathyMode = !apathyMode;

    if (apathyMode) {
        document.body.classList.add("dark");
        document.body.classList.add("apathy");
        alert("😑 ...Kašlu na to mód... aktivní. Emoce pozastaveny.");
    } else {
        document.body.classList.remove("apathy");
        alert("✨ Vítej zpět v realitě. Nebo v simulaci.");
    }
}

function toggleApathy() {
    apathyMode = !apathyMode;
    document.body.classList.toggle("dark", apathyMode);
    document.body.classList.toggle("apathy", apathyMode);

    const btn = document.querySelector('[onclick="toggleApathy()"]');
    btn.textContent = apathyMode ? "😑 Apatie aktivní" : "😐 Aktivovat apatii";
}

if (new Date().getDay() === 5) {
    setTimeout(() => {
        alert("🎉 PÁTEK! Gratuluji k přežití pracovního týdne.");
    }, 3000);
}
