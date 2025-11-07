# ✅ TODO: Konfiguracja 6 Funkcji Monetyzacyjnych

## 🎯 PRIORITY 1 - Szybkie wdrożenie (30 minut)

### 1. Newsletter Popup ✉️
- [ ] Załóż konto MailerLite: https://www.mailerlite.com
- [ ] Skopiuj API Key z: Integrations → Developer API
- [ ] Wklej API Key w `index.html` linia ~5295 w funkcji `subscribeNewsletter()`
- [ ] Testuj: Odśwież stronę → popup po 5 sek → wpisz email → sprawdź MailerLite

**ALTERNATYWA (łatwiejsza):**
- [ ] Stwórz Google Sheet z kolumnami: Timestamp | Email | Source
- [ ] Użyj Google Apps Script: https://github.com/jamiewilson/form-to-google-sheets
- [ ] Emaile będą zapisywane w arkuszu

---

### 2. Ubezpieczenie ERV 🛡️
- [ ] Wyślij email do: partnerzy@erv.pl
  ```
  Temat: Współpraca - program partnerski HoteleILoty.pl
  
  Dzień dobry,
  
  Prowadzę stronę hoteleiloty.pl (wyszukiwarka lotów i hoteli).
  Chciałbym dołączyć do programu partnerskiego ERV.
  
  Jak wygląda proces rejestracji?
  
  Pozdrawiam,
  [Twoje imię]
  ```
- [ ] Otrzymasz link afiliacyjny typu: `https://www.erv.pl/?ref=TWOJ_ID`
- [ ] Zamień w `index.html` linia ~3871:
  ```html
  <a href="https://www.erv.pl/?ref=YOUR_ID">
  ```
  NA Twój prawdziwy link
- [ ] Testuj: Szukaj lotów → zaznacz checkbox ubezpieczenia → kliknij link

---

### 3. Wycieczki GetYourGuide 🗺️
- [ ] Zarejestruj się: https://partner.getyourguide.com
- [ ] Wybierz sieć afiliacyjną: AWIN lub Impact Radius
- [ ] Skopiuj Partner ID (np. 123456)
- [ ] Zamień w `index.html` (3 miejsca, linie ~3449-3451):
  ```html
  https://www.getyourguide.pl/?partner_id=YOUR_ID
  ```
  NA:
  ```html
  https://www.getyourguide.pl/?partner_id=123456
  ```
- [ ] Testuj: Kliknij zakładkę "Wycieczki" → kliknij "Rezerwuj" → sprawdź czy redirect działa

---

### 4. Karty Kredytowe Revolut 💳
- [ ] Pobierz aplikację Revolut: https://revolut.com/download
- [ ] Załóż konto (jeśli nie masz)
- [ ] Idź do: Settings → Referrals
- [ ] Skopiuj kod polecenia (np. `joe123abc`)
- [ ] Zamień w `index.html` linia ~5360:
  ```javascript
  https://revolut.com/referral/?referral_code=YOUR_CODE
  ```
  NA:
  ```javascript
  https://revolut.com/referral/?referral_code=joe123abc
  ```
- [ ] Testuj: Odśwież stronę → czekaj 10 sek → banner karty się pojawi → kliknij "Sprawdź"

**BONUS: Curve (opcjonalne)**
- [ ] Zarejestruj się: https://www.curve.com
- [ ] Dodaj drugi przycisk w bannerze z Twoim kodem Curve

---

### 5. Push Notifications OneSignal 🔔
- [ ] Zarejestruj się: https://onesignal.com
- [ ] New App/Website → Web Push
- [ ] Nazwa: "HoteleILoty"
- [ ] URL: https://hoteleiloty.pl
- [ ] Skopiuj App ID (format: `12345678-abcd-1234-abcd-123456789abc`)
- [ ] Dodaj w `<head>` (linia ~60):
  ```html
  <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async></script>
  <script>
      window.OneSignal = window.OneSignal || [];
      OneSignal.push(function() {
          OneSignal.init({
              appId: "TWOJ_APP_ID_TUTAJ",
              notifyButton: { enable: false },
              allowLocalhostAsSecureOrigin: true
          });
      });
  </script>
  ```
- [ ] W funkcji `requestPushPermission()` (linia ~5310) zamień:
  ```javascript
  // TODO: Integrate OneSignal here
  ```
  NA:
  ```javascript
  OneSignal.push(function() {
      OneSignal.registerForPushNotifications();
  });
  ```
- [ ] Testuj: Odśwież stronę → czekaj 15 sek → kliknij "Włącz" → zgoda na powiadomienia
- [ ] Wyślij test: OneSignal Dashboard → Messages → New Push → Send

---

## 🎯 PRIORITY 2 - Długoterminowe (gdy osiągniesz 500K+ odsłon/m)

### 6. Native Ads Taboola 📰
**WYMAGANIA:**
- 500,000 odsłon/miesiąc minimum
- 6+ miesięcy istnienia domeny
- Unikatowa treść (blog, artykuły)

**KROKI (gdy spełnisz wymagania):**
- [ ] Zarejestruj się: https://www.taboola.com/publishers
- [ ] Wypełnij formularz wydawcy
- [ ] Czekaj 2-4 tygodnie na akceptację
- [ ] Otrzymasz Publisher Code
- [ ] Skopiuj widget code
- [ ] Wklej w `index.html` linia ~3539 (usuń placeholder)
- [ ] Testuj: Wyniki wyszukiwania → przewiń na dół → Native Ads widoczne

**ALTERNATYWA dla małych stron (<500K):**
- [ ] MGID: https://www.mgid.com (minimum: 50K odsłon)
- [ ] Content.ad: https://content.ad (bez minimum)
- [ ] Revcontent: https://www.revcontent.com (minimum: 100K)

---

## 📊 TRACKING & OPTYMALIZACJA

### Po wdrożeniu WSZYSTKICH funkcji:

- [ ] Zainstaluj Google Analytics 4
- [ ] Dodaj śledzenie konwersji:
  - Newsletter signup
  - Insurance checkbox clicks
  - Tour bookings
  - Card referrals
  - Push subscriptions
- [ ] Ustaw cele (Goals):
  - Newsletter: 5% conversion rate
  - Insurance: 10% click rate
  - Tours: 3% booking rate
  - Cards: 2% signup rate
  - Push: 30% acceptance rate

### Cotygodniowe zadania:
- [ ] Poniedziałek: Sprawdź statystyki w MailerLite
- [ ] Wtorek: Wyślij push notification (oferta dnia)
- [ ] Środa: Dodaj nową wycieczkę w zakładce Tours
- [ ] Czwartek: Sprawdź prowizje ERV/GetYourGuide
- [ ] Piątek: Wyślij newsletter (best deals tygodnia)
- [ ] Sobota: Optymalizuj AdSense (blacklist, filtry)
- [ ] Niedziela: Analiza GA4 + planowanie następnego tygodnia

---

## 🚀 QUICK WIN CHECKLIST (Zrób DZIŚ!)

- [ ] **5 MIN:** Newsletter → Google Sheet setup
- [ ] **2 MIN:** Email do ERV o partnerstwie
- [ ] **3 MIN:** GetYourGuide registration
- [ ] **1 MIN:** Revolut referral code copy
- [ ] **5 MIN:** OneSignal account + App ID
- [ ] **15 MIN:** Test WSZYSTKICH funkcji lokalnie
- [ ] **10 MIN:** Git commit + push do produkcji

**TOTAL: 41 minut → wszystkie funkcje LIVE!** 🎉

---

## ⚠️ CZĘSTE PROBLEMY & ROZWIĄZANIA

### Newsletter nie zapisuje emaili
```javascript
// Sprawdź czy fetch() działa w konsoli:
console.log('Newsletter test:', email);
```

### Ubezpieczenie checkbox nie działa
```javascript
// Dodaj console.log w updateInsuranceTotal():
function updateInsuranceTotal() {
    console.log('Checkbox clicked!');
    // ... reszta kodu
}
```

### Push nie prosi o zgodę
- Sprawdź czy HTTPS (localhost OK w dev)
- Sprawdź konsolę: błędy OneSignal?
- Wyczyść localStorage: `localStorage.clear()`

### Native Ads nie pokazują się
- Normalne! Potrzebujesz 500K+ odsłon/m
- Użyj MGID jako alternatywy (50K minimum)

---

## 📞 KONTAKT Z SUPPORTEM

### MailerLite
- Email: support@mailerlite.com
- Chat: https://www.mailerlite.com/contact

### ERV
- Email: partnerzy@erv.pl
- Tel: +48 22 203 99 99

### GetYourGuide
- Email: affiliates@getyourguide.com
- Help: https://partner.getyourguide.com/help

### OneSignal
- Email: support@onesignal.com
- Docs: https://documentation.onesignal.com

### Taboola
- Email: publishers@taboola.com
- Tel: +1 212-206-7663

---

## 🎓 DALSZE KROKI

Po skonfigurowaniu 6 funkcji:

1. **Tydzień 1-2:** Zbieraj dane (subscribers, clicks, conversions)
2. **Tydzień 3-4:** Optymalizuj (A/B testing popup, banner placement)
3. **Miesiąc 2:** Dodaj więcej tour operators (Viator, Klook)
4. **Miesiąc 3:** Dodaj blog (zwiększ ruch → qualify dla Taboola)
5. **Miesiąc 6:** Skaluj (SEO, content marketing, social media)

**CEL: 50K odwiedzin/m = 17,700 zł/m przychodu** 💰

---

Powodzenia! 🚀✈️
