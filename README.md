# 🧮 Calcolatore Codice Fiscale Online 🇮🇹

Un'applicazione web gratuita per il calcolo del **codice fiscale italiano**, semplice, veloce e sicura.  
Il progetto utilizza un'**API esterna** per recuperare in tempo reale i **codici catastali dei comuni italiani**, garantendo dati sempre aggiornati.

**DEMO ONLINE ->** https://codicefiscale.net/

---

## ✨ Funzionalità principali
- ⚡ **Calcolo immediato**: Genera il codice fiscale in tempo reale
- 🎨 **Interfaccia intuitiva**: Design moderno e responsive
- ✅ **Validazione dati**: Controlli di input per garantire correttezza
- 🌍 **Codici catastali aggiornati**: Recuperati dinamicamente tramite API
- 🔒 **Privacy garantita**: Nessun dato viene salvato o trasmesso
- 🆓 **Completamente gratuito**: Nessuna registrazione richiesta

---

## 🔗 API dei Comuni
L’applicazione sfrutta un endpoint per ottenere i codici catastali:

GET https://axqvoqvbfjpaamphztgd.functions.supabase.co/comuni

---

## 📌 Esempio di risposta Json

  {
    "nome": "Roma",
    "provincia": "RM",
    "codiceCatastale": "H501"
  },
  {
    "nome": "Milano",
    "provincia": "MI",
    "codiceCatastale": "F205"
  }

---

## 📦 Installazione e utilizzo
1. Clona la repository:
   git clone https://github.com/daviero/Calcolatore_Codice_Fiscale_Italiano.git
   
2. Entra nella cartella del progetto:
   cd Calcolatore_Codice_Fiscale_Italiano
   
3. Apri il file index.html nel browser.
  


