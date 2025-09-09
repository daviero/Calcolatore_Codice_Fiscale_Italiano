# 🧮 Calcolatore Codice Fiscale Online 🇮🇹

Un'applicazione web gratuita per il calcolo del **codice fiscale italiano**, semplice, veloce e sicura.  
Il progetto utilizza un'**API esterna** per recuperare in tempo reale i **codici catastali dei comuni italiani**, garantendo dati sempre aggiornati.

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
L’applicazione sfrutta un endpoint serverless per ottenere i codici catastali:  

```http
GET https://axqvoqvbfjpaamphztgd.functions.supabase.co/comuni

