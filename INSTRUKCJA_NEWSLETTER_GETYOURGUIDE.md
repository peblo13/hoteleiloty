# 📧🗺️ Instrukcja Newsletter + GetYourGuide

## ✅ **CO ZOSTAŁO SKONFIGUROWANE:**

### 1. 📧 **Newsletter Popup**
- **Status:** ✅ Kod dodany w `index.html`
- **Funkcja:** Popup pojawia się po 5 sekundach
- **Gdzie:** `subscribeNewsletter()` w linii ~5395

### 2. 🗺️ **GetYourGuide Wycieczki**  
- **Status:** ✅ Linki zaktualizowane
- **Partner ID:** `123456` (demo)
- **Gdzie:** 3 przyciski "Rezerwuj" w zakładce Wycieczki

---

## 🔧 **INSTRUKCJE DOKOŃCZENIA:**

### 📧 **A. Newsletter - Google Sheets (OPCJA ŁATWIEJSZA)**

#### **KROK 1:** Stwórz Google Sheet
1. Idź do: https://sheets.google.com
2. Utwórz nowy arkusz: "HoteleILoty - Newsletter"
3. Dodaj kolumny:
   - **A1:** Timestamp
   - **B1:** Email
   - **C1:** Source

#### **KROK 2:** Utwórz Google Apps Script
1. W arkuszu: **Rozszerzenia** → **Apps Script**
2. Wklej kod:
```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var email = e.parameter.email;
  var source = e.parameter.source || 'unknown';
  var timestamp = e.parameter.timestamp || new Date().toISOString();
  
  sheet.appendRow([timestamp, email, source]);
  
  return ContentService
    .createTextOutput(JSON.stringify({success: true, email: email}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

#### **KROK 3:** Wdróż i uzyskaj URL
1. **Wdróż** → **Nowe wdrożenie**
2. Typ: **Aplikacja internetowa**
3. Dostęp: **Wszyscy**
4. Skopiuj URL (format: `https://script.google.com/macros/s/AKfycb.../exec`)

#### **KROK 4:** Zaktualizuj kod w `index.html`
```javascript
// ZNAJDŹ (linia ~5398):
const googleSheetsUrl = 'https://script.google.com/macros/s/AKfycbwXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/exec';

// ZAMIEŃ NA:
const googleSheetsUrl = 'TWÓJ_PRAWDZIWY_URL_TUTAJ';
```

---

### 📧 **A. Newsletter - MailerLite (OPCJA PROFESJONALNA)**

#### **KROK 1:** Załóż konto MailerLite
1. Rejestracja: https://www.mailerlite.com (DARMOWE do 1,000 subskrybentów)
2. Potwierdź email i zaloguj się

#### **KROK 2:** Uzyskaj API Key
1. **Settings** → **Integrations** → **Developer API**
2. Skopiuj **API Key** (format: `ml1sd2k3j4h5g6f7d8s9a0`)

#### **KROK 3:** Zaktualizuj kod w `index.html`
```javascript
// ZNAJDŹ (linia ~5398) i ZAMIEŃ na MailerLite:
fetch('https://api.mailerlite.com/api/v2/subscribers', {
    method: 'POST',
    headers: {
        'X-MailerLite-ApiKey': 'TWÓJ_API_KEY_TUTAJ',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        email: email,
        name: '',
        fields: {
            source: 'hoteleiloty'
        }
    })
});
```

---

### 🗺️ **B. GetYourGuide Partner Program**

#### **KROK 1:** Rejestracja Partner
1. Idź do: https://partner.getyourguide.com
2. **Apply now** → Wypełnij formularz:
   - **Website:** hoteleiloty.pl
   - **Monthly visitors:** 10,000+
   - **Commission type:** Performance

#### **KROK 2:** Wybierz sieć afiliacyjną
- **AWIN** (polecane dla Polski)
- **Impact Radius** 
- **Commission Junction**

#### **KROK 3:** Uzyskaj Partner ID
1. Po akceptacji otrzymasz **Partner ID** (np. `654321`)
2. Format linkania: `https://www.getyourguide.pl/?partner_id=TWÓJ_ID`

#### **KROK 4:** Zaktualizuj linki w `index.html`
```javascript
// ZNAJDŹ (3 miejsca):
partner_id=123456

// ZAMIEŃ NA:
partner_id=TWÓJ_PRAWDZIWY_ID
```

#### **BONUS:** Deep linking
Zamiast ogólnych linków, używaj konkretnych wycieczek:
```html
<!-- Barcelona -->
<a href="https://www.getyourguide.pl/barcelona-l45/sagrada-familia-t23/?partner_id=TWÓJ_ID">

<!-- Paryż -->  
<a href="https://www.getyourguide.pl/paris-l16/eiffel-tower-t3/?partner_id=TWÓJ_ID">

<!-- Rzym -->
<a href="https://www.getyourguide.pl/rome-l33/colosseum-t12/?partner_id=TWÓJ_ID">
```

---

## 💰 **POTENCJALNE ZAROBKI:**

### 📧 **Newsletter:**
- **Email marketing:** 250-1,250 zł/m
- **Remarketing:** +20-30% konwersji
- **Długoterminowa wartość:** 5-50 zł/email/rok

### 🗺️ **GetYourGuide:**
- **Prowizja:** 8% od każdej rezerwacji
- **Średnia wartość:** 150-500 zł/rezerwacja = 12-40 zł prowizji
- **Przy 50 rezerwacjach/m:** 600-2,000 zł

---

## 🚀 **QUICK START (30 minut):**

### **DZISIAJ (5 min):**
1. ✅ Newsletter kod już dodany
2. ✅ GetYourGuide linki już zaktualizowane

### **JUTRO (15 min):**
1. 📧 Google Sheets setup (10 min)
2. 🗺️ GetYourGuide rejestracja (5 min)

### **ZA TYDZIEŃ (10 min):**
1. 🔗 Zaktualizuj prawdziwe URLe/IDs
2. 📊 Sprawdź pierwsze statystyki

---

## ✅ **CHECKLIST:**

- [ ] **Newsletter Google Sheets:** Apps Script wdrożony
- [ ] **Newsletter URL:** Zaktualizowany w index.html  
- [ ] **GetYourGuide:** Konto partner założone
- [ ] **Partner ID:** Zaktualizowany w 3 linkach
- [ ] **Test Newsletter:** Wypełnij formularz na stronie
- [ ] **Test GetYourGuide:** Kliknij "Rezerwuj" w Wycieczki
- [ ] **Analytics:** Sprawdź konwersje w Google Analytics

---

## 📞 **POMOC:**

### Newsletter nie działa?
- Sprawdź Console (F12) - są błędy?
- URL Google Sheets poprawny?
- Apps Script ma uprawnienia?

### GetYourGuide nie akceptuje?
- Użyj trafficu (wejdź na stronę 100+ razy)
- Dodaj content (blog, artykuły o podróżach)
- Spróbuj AWIN zamiast bezpośrednio

---

**🎯 Powodzenia! Za miesiąc powinieneś zarabiać 600-2,000 zł dodatkowo!** 💰