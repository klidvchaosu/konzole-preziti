// Pomocná funkce pro náhodný výběr ze seznamu
function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Globální proměnné
let apathyMode = false;
let zenClicks = 0;

// === Úvodní obrazovka se zbytečným faktem ===
const uselessFacts = [
    'Mravenci nemají plíce.',
    'Banán je vlastně bobule.',
    'Papírové peníze nejsou vyrobeny z papíru.',
    'Krávy mají nejlepší přátele a stresují se, když jsou oddělené.',
    'Oxfordská univerzita je starší než Aztécká říše.',
    'V Japonsku mají restauraci, kde tě obsluhují opice.',
    'Neexistuje rým na slovo „text“ v češtině.',
    'Vikingové používali med jako antibiotikum.',
    'Slon je jediný savec, který nedokáže skákat.',
    'Blesk udeří Zemi asi 100krát za sekundu.',
    'Lachtani dokážou spát i při plavání.',
    'Tučňáci si vybírají partnery na celý život.',
    'Včely poznají lidské tváře.',
    'Ve starém Římě si zuby bělili močí.',
    'Každý člověk má jedinečný otisk jazyka.',
    'Ve vesmíru se nedá říct „Ahoj“.',
    'Chobotnice mají tři srdce.',
    'Motýli ochutnávají nohama.',
    'Země není dokonale kulatá.',
    'Střevlík dokáže vyprodukovat výbuch.',
    'Na Saturnu prší diamanty.',
    'Mozek je z 75 % voda.',
    'Každá panda je půjčena Čínou.',
    'Člověk mrkne asi 20 000krát denně.',
    'V průměru člověk sní 8 pavouků za život. (Prý...)'
];

document.addEventListener("DOMContentLoaded", () => {
    const fact = randomItem(uselessFacts);
    const box = document.getElementById("uselessFact");
    if (box) box.textContent = fact;
});

// === Funkce pro jednotlivé boxy ===

// 1. Citát dne
function showQuote() {
    const quotes = [
        'Dnešek je jen včerejšek s víc kafem.',
        'Pondělí není stav mysli, je to diagnóza.',
        'Můžeš být cokoliv chceš – kromě v klidu.',
        'To zvládneš. Možná. Třeba.',
        'Nejsi unavená, jen ve stavu softwarové existence.',
        'Každý úspěšný den začíná výmluvou.',
        'I dnes můžeš udělat rozdíl. Nebo aspoň kafe.',
        'Tabulka není nepřítel. Leda že je.',
        'Sny se plní. Ale po schválení manažerem.',
        'Kdo neodpovídá na e-maily, ten nic nezkazí.'
    ];
    const output = document.getElementById("quoteOutput");
    output.innerHTML = randomItem(quotes);
    refreshAnimation(output);
}

// 2. Požár dne
function showFire() {
    const fires = [
        'Server padl. Restartuj kávovar.',
        'Zákazník nepochopil náš humor.',
        'Něco hoří. Možná Excel. Možná duše.',
        'Deadline je zítra. Ale to byl i včera.',
        'Náš chatbot začal mluvit sám se sebou.',
        'V kanclu se ztratila wifi. Podezření padá na IT.',
        'Požární poplach? To je jen HR kontrola nálady.',
        'Ztratil se stůl. Máš ho pod papíry.',
        'Někdo omylem odeslal koncept. Všem.',
        'Stážista je podezřele produktivní. Prověřit.'
    ];
    const output = document.getElementById("fireOutput");
    output.innerHTML = '🔥 ' + randomItem(fires);
    refreshAnimation(output);
}

// 3. Mikro-úkol
function showTask() {
    const tasks = [
        'Napiš kolegovi něco hezkého. I když si to nezaslouží.',
        'Zkontroluj, jestli žiješ. Pokud ano, dej si kafe.',
        'Přejdi na meeting bez sarkasmu. Aspoň na 5 minut.',
        'Zkus zavřít 3 záložky. Dobrovolně.',
        'Najdi soubor „Finální_verze_v6_final_FINAL“.',
        'Zeptej se zákazníka, jak se má. A poslouchej.',
        'Pošli jeden e-mail bez smajlíka.',
        'Vypni notifikace. A pak je zase zapni.',
        'Zkontroluj, zda ti kalendář neplánuje život.',
        'Usměj se. I když to zabolí.'
    ];
    const output = document.getElementById("taskOutput");
    output.innerHTML = '✅ ' + randomItem(tasks);
    refreshAnimation(output);
}

// 4. Legenda dne
function showLegend() {
    const legends = [
        'Dnešním hrdinou je ten, kdo přinesl kafe.',
        'Sláva patří tomu, kdo ví, jak zavřít 32 záložek.',
        'Legenda dne? Každý, kdo neodpověděl všem.',
        'Titul získává ten, kdo přežil pondělí.',
        'Respekt těm, kdo si dali oběd mimo klávesnici.',
        'Ten, kdo přečetl 100 mailů. Bez slz.',
        'Hvězda dne: někdo, kdo ví heslo do systému.',
        'Legenda je ten, kdo nezpanikařil. Zatím.',
        'Tichošlápek dne: člověk, co mlčí ve skupině.',
        'Kdo donesl koláče, získává nesmrtelnost.'
    ];
    const output = document.getElementById("legendOutput");
    output.innerHTML = '👑 ' + randomItem(legends);
    refreshAnimation(output);
}

// 5. Zen zóna
function showZen() {
    const normalZens = [
        'Dýchám. Usmívám se. Přežívám.',
        'Žádný stres. Jen notifikace.',
        'Všechno má svůj čas. I odpověď na ten e-mail.',
        'Dneska jsem offline v duši.',
        'Můj klid je důležitější než deadliny.',
        'Moje myšlenky nejsou ve backlogu.',
        'Dnes nepracuji proti systému. Jen kolem něj.',
        'Káva je můj guru.',
        'Pondělí je jen sen z noční můry.',
        'Dnes je nový den. Možná.'
    ];
    const apathyZens = [
        'Ignoruj. Počkej. Zapomeň.',
        'Systém nepadl. Jen už nemá důvod vstát.',
        'Pocity? Dnes nemáme skladem.',
        'Dnešek není špatný. Je jen bez chuti.',
        'Deadline není konec světa. Jen začátek dalšího.',
        'To-do list žije. A krmí se mou energií.',
        'Naděje je přeceňovaná. Dej si sušenku.',
        'Čas je relativní. Hlavně mezi dvěma meetingy.',
        'Kávu si musíš uvařit sama. Emoce taky.',
        'Všichni se snaží. Někteří i zůstat vzhůru.'
    ];
    const zens = apathyMode ? apathyZens : normalZens;
    const output = document.getElementById("zenOutput");
    output.innerHTML = '🧘 ' + randomItem(zens);
    refreshAnimation(output);

    zenClicks++;
    if (zenClicks === 5 && !apathyMode) {
        alert("🧙 Tajný režim odemčen! Věř si víc než obchodník svému Excelu.");
        zenClicks = 0;
    }
}

// === Animace pro přepis výstupu ===
function refreshAnimation(element) {
    element.classList.remove('fade');
    void element.offsetWidth;
    element.classList.add('fade');
}

// === Flipbox reakce ===
function handleFlip(card, type) {
    card.classList.toggle('flipped');
    if (card.classList.contains('flipped')) {
        switch(type) {
            case 'quote': showQuote(); break;
            case 'fire': showFire(); break;
            case 'task': showTask(); break;
            case 'legend': showLegend(); break;
            case 'zen': showZen(); break;
        }
    }
}

// === Apatie mód ===
function toggleApathy() {
    apathyMode = !apathyMode;
    document.body.classList.toggle('apathy');
}

//Vtipná zpráva v podpisu
document.getElementById("authorTag").addEventListener("click", () => {
    const modal = document.createElement('div');
    modal.className = 'easter-egg-popup';
    modal.innerHTML = `
    <div class="popup-content">
      <h2>Zvědavost se vyplácí!</h2>
      <p>Chceš zanechat zprávu, zpětnou vazbu nebo vtip? Ráda si ji přečtu.</p>
      <a href="https://forms.gle/t314uUGw1ySNqxsH7" target="_blank" class="form-button">Odeslat vzkaz</a><br><br> 
      <button onclick="this.closest('.easter-egg-popup').remove()">Zavřít</button>
    </div>
  `;
    document.body.appendChild(modal);
});


function handleFlip(card, type) {
    card.classList.toggle('flipped');

    if (card.classList.contains('flipped')) {
        switch(type) {
            case 'zen':
                showZen();
                break;
            case 'quote':
                showQuote();
                break;
            case 'task':
                showTask();
                break;
            case 'fire':
                showFire();
                break;
            case 'legend':
                showLegend();
                break;
            case 'daily':
                showDailyQuote();
                break;
            case 'crisis': // 💥 DOPLNĚNO
                showCrisis();
                break;
        }
    }
}

function showCrisis() {
    const crisisMessages = [
        "🔥 Server padl. A s ním i naše naděje.",
        "📉 Klesáme rychleji než morálka v pátek odpoledne.",
        "🧯 Požár? Ne, jen běžný den v práci.",
        "💻 IT? Nepřítomné. Restart? Nepomohl.",
        "🪓 Zatím to nehážu do koše. Ale už ho hledám.",
        "📦 Krabice s nervy? Došly...",
        "🚪 Únikový východ? Zablokován Excelem.",
        "🐞 To není bug. To je krizový režim.",
        "📛 Systém hlásí: Nezvládám.",
        "🙈 Nikdo neví, co děláme. Ani my ne."
    ];

    const output = document.getElementById('crisisOutput');
    output.innerHTML = '💥 ' + randomItem(crisisMessages);
    output.classList.add('shake');

    // Odebrání třídy po skončení animace (aby se mohla znovu spustit)
    setTimeout(() => {
        output.classList.remove('shake');
    }, 500);
}

// Apatie mód

function toggleApathy() {
    apathyMode = !apathyMode;
    document.body.classList.toggle('apathy');

    // Vytvoření krátké zprávy pro potvrzení módu
    const msg = document.createElement('div');
    msg.className = 'apathy-toast';
    msg.textContent = apathyMode
        ? '😐 Apatie aktivována... Všechno je zbytečné.'
        : '🟢 Zpátky do boje! Apatie zrušena.';

    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 3000);
}


