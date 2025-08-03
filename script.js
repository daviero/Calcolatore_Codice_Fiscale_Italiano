    // Province italiane
    const PROVINCE = [
        {codice: "AG", nome: "Agrigento"}, {codice: "AL", nome: "Alessandria"},
        {codice: "AN", nome: "Ancona"}, {codice: "AO", nome: "Aosta"},
        {codice: "AQ", nome: "L'Aquila"}, {codice: "AR", nome: "Arezzo"},
        {codice: "AP", nome: "Ascoli Piceno"}, {codice: "AT", nome: "Asti"},
        {codice: "AV", nome: "Avellino"}, {codice: "BA", nome: "Bari"},
        {codice: "BT", nome: "Barletta-Andria-Trani"}, {codice: "BL", nome: "Belluno"},
        {codice: "BN", nome: "Benevento"}, {codice: "BG", nome: "Bergamo"},
        {codice: "BI", nome: "Biella"}, {codice: "BO", nome: "Bologna"},
        {codice: "BZ", nome: "Bolzano"}, {codice: "BS", nome: "Brescia"},
        {codice: "BR", nome: "Brindisi"}, {codice: "CA", nome: "Cagliari"},
        {codice: "CL", nome: "Caltanissetta"}, {codice: "CB", nome: "Campobasso"},
        {codice: "CI", nome: "Carbonia-Iglesias"}, {codice: "CE", nome: "Caserta"},
        {codice: "CT", nome: "Catania"}, {codice: "CZ", nome: "Catanzaro"},
        {codice: "CH", nome: "Chieti"}, {codice: "CO", nome: "Como"},
        {codice: "CS", nome: "Cosenza"}, {codice: "CR", nome: "Cremona"},
        {codice: "KR", nome: "Crotone"}, {codice: "CN", nome: "Cuneo"},
        {codice: "EN", nome: "Enna"}, {codice: "FM", nome: "Fermo"},
        {codice: "FE", nome: "Ferrara"}, {codice: "FI", nome: "Firenze"},
        {codice: "FG", nome: "Foggia"}, {codice: "FC", nome: "Forlì-Cesena"},
        {codice: "FR", nome: "Frosinone"}, {codice: "GE", nome: "Genova"},
        {codice: "GO", nome: "Gorizia"}, {codice: "GR", nome: "Grosseto"},
        {codice: "IM", nome: "Imperia"}, {codice: "IS", nome: "Isernia"},
        {codice: "SP", nome: "La Spezia"}, {codice: "LT", nome: "Latina"},
        {codice: "LE", nome: "Lecce"}, {codice: "LC", nome: "Lecco"},
        {codice: "LI", nome: "Livorno"}, {codice: "LO", nome: "Lodi"},
        {codice: "LU", nome: "Lucca"}, {codice: "MC", nome: "Macerata"},
        {codice: "MN", nome: "Mantova"}, {codice: "MS", nome: "Massa-Carrara"},
        {codice: "MT", nome: "Matera"}, {codice: "VS", nome: "Medio Campidano"},
        {codice: "ME", nome: "Messina"}, {codice: "MI", nome: "Milano"},
        {codice: "MO", nome: "Modena"}, {codice: "MB", nome: "Monza e Brianza"},
        {codice: "NA", nome: "Napoli"}, {codice: "NO", nome: "Novara"},
        {codice: "NU", nome: "Nuoro"}, {codice: "OG", nome: "Ogliastra"},
        {codice: "OT", nome: "Olbia-Tempio"}, {codice: "OR", nome: "Oristano"},
        {codice: "PD", nome: "Padova"}, {codice: "PA", nome: "Palermo"},
        {codice: "PR", nome: "Parma"}, {codice: "PV", nome: "Pavia"},
        {codice: "PG", nome: "Perugia"}, {codice: "PU", nome: "Pesaro e Urbino"},
        {codice: "PE", nome: "Pescara"}, {codice: "PC", nome: "Piacenza"},
        {codice: "PI", nome: "Pisa"}, {codice: "PT", nome: "Pistoia"},
        {codice: "PN", nome: "Pordenone"}, {codice: "PZ", nome: "Potenza"},
        {codice: "PO", nome: "Prato"}, {codice: "RG", nome: "Ragusa"},
        {codice: "RA", nome: "Ravenna"}, {codice: "RC", nome: "Reggio Calabria"},
        {codice: "RE", nome: "Reggio Emilia"}, {codice: "RI", nome: "Rieti"},
        {codice: "RN", nome: "Rimini"}, {codice: "RM", nome: "Roma"},
        {codice: "RO", nome: "Rovigo"}, {codice: "SA", nome: "Salerno"},
        {codice: "SS", nome: "Sassari"}, {codice: "SV", nome: "Savona"},
        {codice: "SI", nome: "Siena"}, {codice: "SR", nome: "Siracusa"},
        {codice: "SO", nome: "Sondrio"}, {codice: "TA", nome: "Taranto"},
        {codice: "TE", nome: "Teramo"}, {codice: "TR", nome: "Terni"},
        {codice: "TO", nome: "Torino"}, {codice: "TP", nome: "Trapani"},
        {codice: "TN", nome: "Trento"}, {codice: "TV", nome: "Treviso"},
        {codice: "TS", nome: "Trieste"}, {codice: "UD", nome: "Udine"},
        {codice: "VA", nome: "Varese"}, {codice: "VE", nome: "Venezia"},
        {codice: "VB", nome: "Verbano-Cusio-Ossola"}, {codice: "VC", nome: "Vercelli"},
        {codice: "VR", nome: "Verona"}, {codice: "VV", nome: "Vibo Valentia"},
        {codice: "VI", nome: "Vicenza"}, {codice: "VT", nome: "Viterbo"}
    ];

    let comuniSelezionati = {};

    document.addEventListener('DOMContentLoaded', function() {
        inizializzaApp();
    });

    function inizializzaApp() {
        popolaDate();
        popolaProvince();
    }

    function popolaDate() {
        // Popola giorni
        const giornoSelect = document.getElementById('giorno');
        for (let i = 1; i <= 31; i++) {
            const option = document.createElement('option');
            option.value = i < 10 ? '0' + i : i.toString();
            option.textContent = i;
            giornoSelect.appendChild(option);
        }

        // Popola mesi
        const meseSelect = document.getElementById('mese');
        const mesi = [
            {val: '01', text: 'Gennaio'}, {val: '02', text: 'Febbraio'},
            {val: '03', text: 'Marzo'}, {val: '04', text: 'Aprile'},
            {val: '05', text: 'Maggio'}, {val: '06', text: 'Giugno'},
            {val: '07', text: 'Luglio'}, {val: '08', text: 'Agosto'},
            {val: '09', text: 'Settembre'}, {val: '10', text: 'Ottobre'},
            {val: '11', text: 'Novembre'}, {val: '12', text: 'Dicembre'}
        ];
        mesi.forEach(mese => {
            const option = document.createElement('option');
            option.value = mese.val;
            option.textContent = mese.text;
            meseSelect.appendChild(option);
        });

        // Popola anni
        const annoSelect = document.getElementById('anno');
        const annoCorrente = new Date().getFullYear();
        for (let i = annoCorrente; i >= 1900; i--) {
            const option = document.createElement('option');
            option.value = i.toString();
            option.textContent = i.toString();
            annoSelect.appendChild(option);
        }
    }

    function popolaProvince() {
        const provinciaSelect = document.getElementById('provincia');
        PROVINCE.forEach(provincia => {
            const option = document.createElement('option');
            option.value = provincia.codice;
            option.textContent = `${provincia.nome} (${provincia.codice})`;
            provinciaSelect.appendChild(option);
        });
    }

    function validaForm() {
        let isValid = true;
        
        // Validazione cognome
        const cognome = document.getElementById('cognome').value.trim();
        if (cognome.length < 2) {
            mostraErrore('cognome', 'Il cognome deve contenere almeno 2 caratteri');
            isValid = false;
        } else {
            nascondiErrore('cognome');
        }

        // Validazione nome
        const nome = document.getElementById('nome').value.trim();
        if (nome.length < 2) {
            mostraErrore('nome', 'Il nome deve contenere almeno 2 caratteri');
            isValid = false;
        } else {
            nascondiErrore('nome');
        }

        // Validazione provincia
        const provincia = document.getElementById('provincia').value;
        if (!provincia) {
            mostraErrore('provincia', 'Seleziona una provincia');
            isValid = false;
        } else {
            nascondiErrore('provincia');
        }

        return isValid;
    }

    function mostraErrore(campo, messaggio) {
        const errorElement = document.getElementById(`${campo}-error`);
        errorElement.textContent = messaggio;
        errorElement.style.display = 'block';
    }

    function nascondiErrore(campo) {
        document.getElementById(`${campo}-error`).style.display = 'none';
    }

    document.getElementById('cf-form').addEventListener('submit', async function(e) {
    e.preventDefault();
        
    let comuneTrovato;
    const comuneInput = document.getElementById('comune').value.trim().toLowerCase();
  
    try {
      const response = await fetch('https://axqvoqvbfjpaamphztgd.functions.supabase.co/comuni');
  
      if (!response.ok) {
        throw new Error('Errore durante la chiamata all\'API');
      }
     
      const comuni = await response.json();
  
      // Cerca il comune inserito
      comuneTrovato = comuni.find(c =>
        c.nome.toLowerCase() === comuneInput
      );
  
      if (comuneTrovato) {
          const codiceCat = calcolaCodiceFiscale(comuneTrovato.codiceCatastale);
      } else {
        console.log('Comune non trovato');
      }
  
    } catch (error) {
      //document.getElementById('output').textContent = 'Errore: ' + error.message;
      console.log('Errore: ' + error.message);
    }
  });

    function calcolaCodiceFiscale(codComune) {
        console.log('Qui');
        const cognome = normalizzaTesto(document.getElementById('cognome').value);
        const nome = normalizzaTesto(document.getElementById('nome').value);
        const sesso = document.getElementById('sesso').value;
        const giorno = document.getElementById('giorno').value;
        const mese = document.getElementById('mese').value;
        const anno = document.getElementById('anno').value;
        //const comune = document.getElementById('comune').value.trim().toUpperCase();

        // Calcola i componenti del codice fiscale
        const codCognome = calcolaCodCognome(cognome);
        const codNome = calcolaCodNome(nome);
        const codAnno = anno.substring(2);
        const codMese = calcolaCodMese(mese);
        const codGiorno = calcolaCodGiorno(giorno, sesso);

        // Componi il codice fiscale parziale
        const codFiscParziale = codCognome + codNome + codAnno + codMese + codGiorno + codComune;
        
        // Calcola il carattere di controllo
        const carattereControllo = calcolaCarattereControllo(codFiscParziale);

        const codiceFiscale = codFiscParziale + carattereControllo;
        mostraRisultato(codiceFiscale);

        return codFiscParziale + carattereControllo;
    }

    function normalizzaTesto(testo) {
        return testo.trim()
            .toUpperCase()
            .replace(/[ÀÁÂÃÄÅ]/g, 'A')
            .replace(/[ÈÉÊË]/g, 'E')
            .replace(/[ÌÍÎÏ]/g, 'I')
            .replace(/[ÒÓÔÕÖ]/g, 'O')
            .replace(/[ÙÚÛÜ]/g, 'U')
            .replace(/[^A-Z]/g, '');
    }

    function calcolaCodCognome(cognome) {
        const consonanti = estraiConsonanti(cognome);
        const vocali = estraiVocali(cognome);
        let codice = consonanti + vocali + 'XXX';
        return codice.substring(0, 3);
    }

    function calcolaCodNome(nome) {
        let consonanti = estraiConsonanti(nome);
        const vocali = estraiVocali(nome);
        
        // Regola speciale per il nome: se ci sono almeno 4 consonanti,
        // prendo la prima, la terza e la quarta
        if (consonanti.length >= 4) {
            consonanti = consonanti[0] + consonanti[2] + consonanti[3];
        }
        
        let codice = consonanti + vocali + 'XXX';
        return codice.substring(0, 3);
    }

    function estraiConsonanti(testo) {
        return testo.replace(/[AEIOU]/g, '');
    }

    function estraiVocali(testo) {
        return testo.replace(/[^AEIOU]/g, '');
    }

    function calcolaCodMese(mese) {
        const tabellaMesi = {
            '01': 'A', '02': 'B', '03': 'C', '04': 'D', '05': 'E', '06': 'H',
            '07': 'L', '08': 'M', '09': 'P', '10': 'R', '11': 'S', '12': 'T'
        };
        return tabellaMesi[mese];
    }

    function calcolaCodGiorno(giorno, sesso) {
        let giornoInt = parseInt(giorno, 10);
        if (sesso === 'F') {
            giornoInt += 40;
        }
        return giornoInt < 10 ? '0' + giornoInt : giornoInt.toString();
    }

    function calcolaCarattereControllo(codFiscParziale) {
        const tabDispari = {
            '0': 1, '1': 0, '2': 5, '3': 7, '4': 9, '5': 13, '6': 15, '7': 17, '8': 19, '9': 21,
            'A': 1, 'B': 0, 'C': 5, 'D': 7, 'E': 9, 'F': 13, 'G': 15, 'H': 17, 'I': 19, 'J': 21,
            'K': 2, 'L': 4, 'M': 18, 'N': 20, 'O': 11, 'P': 3, 'Q': 6, 'R': 8, 'S': 12, 'T': 14,
            'U': 16, 'V': 10, 'W': 22, 'X': 25, 'Y': 24, 'Z': 23
        };

        const tabPari = {
            '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
            'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6, 'H': 7, 'I': 8, 'J': 9,
            'K': 10, 'L': 11, 'M': 12, 'N': 13, 'O': 14, 'P': 15, 'Q': 16, 'R': 17, 'S': 18, 'T': 19,
            'U': 20, 'V': 21, 'W': 22, 'X': 23, 'Y': 24, 'Z': 25
        };

        const tabResto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        let somma = 0;
        for (let i = 0; i < codFiscParziale.length; i++) {
            const carattere = codFiscParziale[i];
            if (i % 2 === 0) {
                somma += tabDispari[carattere];
            } else {
                somma += tabPari[carattere];
            }
        }

        const resto = somma % 26;
        return tabResto[resto];
    }

    function mostraRisultato(codiceFiscale) {
        document.getElementById('codice-result').textContent = codiceFiscale;
        document.getElementById('result').style.display = 'block';
        document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
    }