# 💰 Instrukcja Konfiguracji 6 Nowych Funkcji Monetyzacyjnych

## 📋 Spis Treści
1. [Newsletter Popup](#1-newsletter-popup)
2. [Ubezpieczenie ERV](#2-ubezpieczenie-erv)
3. [Zakładka Wycieczki](#3-zakładka-wycieczki-getyourguide)
4. [Banner Kart Kredytowych](#4-banner-kart-kredytowych)
5. [Powiadomienia Push](#5-powiadomienia-push-onesignal)
6. [Native Ads](#6-native-ads-taboolaoutbrain)

---

## 1. 📧 Newsletter Popup

### Co to robi?
- Popup pokazuje się po 5 sekundach od wejścia na stronę
- Zbiera adresy email do newslettera
- Zapisuje w localStorage, żeby nie denerwować użytkownika wielokrotnie

### Jak skonfigurować?
**OPCJA A: MailerLite (POLECANE - DARMOWE)**
1. Zarejestruj się: https://www.mailerlite.com
2. Plan: **DARMOWY** do 1,000 subskrybentów
3. Utwórz grupę "HoteleILoty Subscribers"
4. Idź do: **Integrations → Developer API**
5. Skopiuj **API Key**

**Dodaj kod w `index.html` (linia ~5295, w funkcji `subscribeNewsletter()`):**
```javascript
function subscribeNewsletter() {
    const email = document.getElementById('newsletter-email').value;
    if (email && email.includes('@')) {
        // MailerLite API
        fetch('https://api.mailerlite.com/api/v2/subscribers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-MailerLite-ApiKey': 'TWOJ_API_KEY' // <-- WKLEJ TUTAJ
            },
            body: JSON.stringify({
                email: email,
                fields: { last_name: 'HoteleILoty' }
            })
        })
        .then(response => response.json())
        .then(data => {
            alert('✅ Dziękujemy! Zapisaliśmy Cię do newslettera: ' + email);
            closeNewsletterPopup();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('❌ Wystąpił błąd. Spróbuj ponownie.');
        });
    } else {
        alert('❌ Podaj prawidłowy adres email');
    }
}
```

**OPCJA B: Google Sheets (NAJPROSTSZE)**
1. Stwórz Google Sheet: https://sheets.google.com
2. Kolumny: `Timestamp | Email | Source`
3. Użyj Google Apps Script do zapisu emaili
4. Instrukcja: https://github.com/jamiewilson/form-to-google-sheets

**POTENCJAŁ ZAROBKOWY:**
- 100 subskrybentów/miesiąc × 5% click rate × 50 zł prowizja = **250 zł/miesiąc**
- 500 subskrybentów/miesiąc = **1,250 zł/miesiąc**

---

## 2. 🛡️ Ubezpieczenie ERV

### Co to robi?
- Checkbox w wynikach wyszukiwania lotów
- Dodaje +29 zł za ubezpieczenie podróżne
- Link afiliacyjny do ERV (15-25% prowizja)

### Jak skonfigurować?
1. **Zarejestruj się w programie partnerskim ERV:**
   - Link: https://www.erv.pl/program-partnerski
   - Email: partnerzy@erv.pl
   - Minimalny próg: Brak (akceptują wszystkich)

2. **Otrzymasz link afiliacyjny typu:**
   ```
   https://www.erv.pl/?ref=TWOJ_ID
   ```

3. **Zamień w kodzie (linia ~3871):**
   ```html
   <a href="https://www.erv.pl/?ref=YOUR_ID" target="_blank">
   ```
   NA:
   ```html
   <a href="https://www.erv.pl/?ref=TWOJ_PRAWDZIWY_ID" target="_blank">
   ```

**ALTERNATYWY:**
- **Allianz Travel:** https://www.allianz-assistance.pl/partnerzy (20% prowizja)
- **Columbus Direct:** https://www.columbusdirect.pl/wspolpraca (25% prowizja)
- **TUI Care:** https://tuicare.pl/partnerzy (18% prowizja)

**POTENCJAŁ ZAROBKOWY:**
- 100 lotów/miesiąc × 10% kupuje ubezpieczenie × 29 zł × 20% prowizja = **58 zł/m**
- 500 lotów/miesiąc = **290 zł/m**
- 1,000 lotów/miesiąc = **580 zł/m**

---

## 3. 🗺️ Zakładka Wycieczki (GetYourGuide)

### Co to robi?
- Nowa zakładka "Wycieczki" w wyszukiwarce
- Pokazuje popularne wycieczki (Sagrada Familia, Wieża Eiffla, Koloseum)
- Linki afiliacyjne GetYourGuide (8% prowizja)

### Jak skonfigurować?
1. **Zarejestruj się w GetYourGuide Affiliate:**
   - Link: https://partner.getyourguide.com
   - Sieć: AWIN lub Impact Radius
   - Minimalne wymagania: Brak

2. **Otrzymasz Partner ID, np:** `123456`

3. **Zamień w kodzie (3 miejsca, linie ~3449-3451):**
   ```html
   <a href="https://www.getyourguide.pl/?partner_id=YOUR_ID" target="_blank">
   ```
   NA:
   ```html
   <a href="https://www.getyourguide.pl/?partner_id=123456" target="_blank">
   ```

**DEEP LINKING (zalecane):**
Zmień ogólny link na konkretne wycieczki:
```html
<!-- Barcelona Tour -->
<a href="https://www.getyourguide.pl/barcelona-l45/sagrada-familia-t23/tc-133/?partner_id=123456" target="_blank">

<!-- Paris Eiffel Tower -->
<a href="https://www.getyourguide.pl/paris-l16/eiffel-tower-t3/tc-5/?partner_id=123456" target="_blank">

<!-- Rome Colosseum -->
<a href="https://www.getyourguide.pl/rome-l33/colosseum-t12/tc-13/?partner_id=123456" target="_blank">
```

**ALTERNATYWY:**
- **Viator (TripAdvisor):** https://www.viatoraffiliates.com (8-10% prowizja)
- **Klook:** https://affiliate.klook.com (5-8% prowizja)
- **Musement:** https://about.musement.com/en/affiliates (6-12% prowizja)

**POTENCJAŁ ZAROBKOWY:**
- Średnia cena wycieczki: 100-200 zł
- 50 rezerwacji/miesiąc × 150 zł × 8% = **600 zł/m**
- 200 rezerwacji/miesiąc = **2,400 zł/m**

---

## 4. 💳 Banner Kart Kredytowych (Revolut/Curve)

### Co to robi?
- Banner pokazuje się po 10 sekundach na dole ekranu
- Promuje karty bez prowizji za granicą (Revolut, Curve)
- Zarabiasz za rejestracje (£5-20/signup)

### Jak skonfigurować?

**REVOLUT:**
1. Pobierz aplikację Revolut
2. Idź do: **Settings → Referrals**
3. Skopiuj swój kod, np.: `joe123abc`
4. Twój link: `https://revolut.com/referral/?referral_code=joe123abc`

5. **Zamień w kodzie (linia ~5360):**
   ```javascript
   onclick="window.open('https://revolut.com/referral/?referral_code=YOUR_CODE', '_blank')"
   ```
   NA:
   ```javascript
   onclick="window.open('https://revolut.com/referral/?referral_code=joe123abc', '_blank')"
   ```

**PROWIZJA:** £10-20 za każdą rejestrację + 3 transakcje kartą

**CURVE:**
1. Zarejestruj się: https://www.curve.com
2. Referral: **Settings → Refer a Friend**
3. Link typu: `https://www.curve.com/join#ABCD1234`

**ALTERNATYWY:**
- **Wise (TransferWise):** https://wise.com/invite (£75 za polecenie po 300 GBP transfer)
- **N26:** https://n26.com/r/ (15€ za polecenie)
- **Monzo:** https://monzo.com/i/ (£5 za polecenie)

**POTENCJAŁ ZAROBKOWY:**
- 20 rejestracji/miesiąc × £15 (63 zł) = **1,260 zł/m**
- 50 rejestracji/miesiąc = **3,150 zł/m**

---

## 5. 🔔 Powiadomienia Push (OneSignal)

### Co to robi?
- Prosi użytkownika o zgodę na push notifications
- Wysyłasz alerty o promocjach (spadek ceny o 30%+)
- Użytkownicy wracają na stronę = więcej prowizji

### Jak skonfigurować?

**OneSignal (POLECANE - DARMOWE):**
1. Zarejestruj się: https://onesignal.com
2. **New App/Website** → Wybierz "Web Push"
3. Nazwa: "HoteleILoty"
4. URL: https://hoteleiloty.pl
5. Skopiuj **App ID**, np: `12345678-abcd-1234-abcd-123456789abc`

6. **Dodaj w `<head>` (linia ~60):**
   ```html
   <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async></script>
   <script>
       window.OneSignal = window.OneSignal || [];
       OneSignal.push(function() {
           OneSignal.init({
               appId: "12345678-abcd-1234-abcd-123456789abc", // <-- TWOJ APP ID
               notifyButton: {
                   enable: false,
               },
               allowLocalhostAsSecureOrigin: true
           });
       });
   </script>
   ```

7. **W funkcji `requestPushPermission()` (linia ~5310) ZAMIEŃ:**
   ```javascript
   // TODO: Integrate OneSignal here
   ```
   NA:
   ```javascript
   OneSignal.push(function() {
       OneSignal.registerForPushNotifications();
   });
   ```

**JAK WYSYŁAĆ POWIADOMIENIA:**
1. Idź do OneSignal Dashboard
2. **Messages → New Push**
3. Tytuł: "✈️ PROMOCJA! Barcelona od 99 zł!"
4. Treść: "Tylko dziś! Kliknij i zarezerwuj >>>"
5. URL: https://hoteleiloty.pl
6. **Send to All Subscribers**

**ALTERNATYWY:**
- **PushEngage:** https://www.pushengage.com (lepsze targetowanie)
- **Pushwoosh:** https://www.pushwoosh.com (więcej funkcji)
- **Firebase Cloud Messaging:** https://firebase.google.com (Google)

**POTENCJAŁ ZAROBKOWY:**
- 1,000 subskrybentów × 15% CTR × 5% konwersja × 20 zł prowizja = **150 zł** za kampanię
- 2 kampanie/tydzień = **1,200 zł/m**
- 5,000 subskrybentów = **6,000 zł/m**

---

## 6. 📰 Native Ads (Taboola/Outbrain)

### Co to robi?
- Sponsorowane artykuły pod wynikami wyszukiwania
- "Ludzie czytają też..." / "Polecane dla Ciebie"
- CPM: 5-15 zł (pasywny dochód)

### Jak skonfigurować?

**TABOOLA:**
1. Zarejestruj się: https://www.taboola.com/publishers
2. **Minimalne wymagania:**
   - 500,000 odsłon/miesiąc
   - Unikatowa treść (nie tylko wyszukiwarka)
   - 6+ miesięcy istnienia domeny
3. Proces akceptacji: 2-4 tygodnie

**PO AKCEPTACJI:**
4. Otrzymasz Publisher Code: `pub-123456-hoteleiloty`
5. Skopiuj widget code
6. **Wklej w miejscu placeholdera (linia ~3539):**
   ```html
   <!-- USUŃ INSTRUKCJĘ I WKLEJ: -->
   <div id="taboola-below-article-thumbnails"></div>
   <script type="text/javascript">
       window._taboola = window._taboola || [];
       _taboola.push({
           mode: 'thumbnails-a',
           container: 'taboola-below-article-thumbnails',
           placement: 'Below Article Thumbnails',
           target_type: 'mix'
       });
   </script>
   ```

**OUTBRAIN (alternatywa):**
1. Zarejestruj się: https://www.outbrain.com/publishers
2. Wymagania: 10 milionów odsłon/miesiąc (bardziej restrykcyjne)
3. CPM: 8-20 zł (wyższe niż Taboola)

**DLA MAŁYCH STRON (< 500K odsłon/m):**
Zamiast Taboola/Outbrain użyj:
- **MGID:** https://www.mgid.com (50K+ odsłon wystarczy)
- **Revcontent:** https://www.revcontent.com (100K+ odsłon)
- **Content.ad:** https://content.ad (bez minimum)

**POTENCJAŁ ZAROBKOWY:**
- 100,000 odsłon/m × 10 zł CPM = **1,000 zł/m**
- 500,000 odsłon/m = **5,000 zł/m**
- 1,000,000 odsłon/m = **10,000 zł/m**

---

## 📊 PODSUMOWANIE POTENCJALNYCH ZAROBKÓW

| Funkcja | Przy 10K odwiedzin/m | Przy 50K odwiedzin/m |
|---------|---------------------|---------------------|
| 📧 Newsletter | 250 zł | 1,250 zł |
| 🛡️ Ubezpieczenie ERV | 58 zł | 290 zł |
| 🗺️ Wycieczki GetYourGuide | 600 zł | 2,400 zł |
| 💳 Karty Revolut/Curve | 1,260 zł | 3,150 zł |
| 🔔 Push OneSignal | 150 zł | 1,200 zł |
| 📰 Native Ads | 200 zł | 5,000 zł |
| **RAZEM** | **2,518 zł/m** | **13,290 zł/m** |

**+ POPRZEDNIE ŹRÓDŁA:**
- AdSense: 80-400 zł
- TravelPayouts (loty): 500-2,500 zł
- Booking.com (hotele): 300-1,500 zł

### 🎯 CAŁKOWITY POTENCJAŁ:
- **10K odwiedzin:** ~3,400 zł/miesiąc
- **50K odwiedzin:** ~17,700 zł/miesiąc
- **100K odwiedzin:** ~35,000 zł/miesiąc

---

## ⚡ QUICK START (5 minut setup)

### Szybka konfiguracja dla zapracowanych:

1. **Newsletter (1 min):**
   - Google Sheet: https://sheets.google.com → nowy arkusz → gotowe

2. **Ubezpieczenie (1 min):**
   - Email do ERV: partnerzy@erv.pl → poproś o link afiliacyjny

3. **Wycieczki (2 min):**
   - GetYourGuide: https://partner.getyourguide.com → Sign Up → Partner ID

4. **Karty (30 sek):**
   - Revolut app → Settings → Referrals → Copy link

5. **Push (1 min):**
   - OneSignal: https://onesignal.com → New App → Copy App ID

6. **Native Ads (SKIP):**
   - Wymaga 500K+ odsłon → wróć za 3-6 miesięcy

**TOTAL: 5.5 minuty → gotowe do zarabiania!** 🚀

---

## 🆘 WSPARCIE

Pytania? Problemy z integracją?
- Email: support@hoteleiloty.pl
- GitHub Issues: https://github.com/peblo13/hoteleiloty/issues

**Powodzenia z monetyzacją!** 💰✈️
