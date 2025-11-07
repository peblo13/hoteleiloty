# 💰 Przewodnik Programów Afiliacyjnych - LastMinute.pl

## 🎯 Najlepsze Programy Partnerskie (Najwyższe Prowizje!)

---

## 1. 🏨 BOOKING.COM - HOTELE (Prowizja 25-40%)

### Dlaczego Booking.com?
- ✅ Najwyższe prowizje w branży hotelowej
- ✅ Zaufana marka (90% ludzi zna Booking)
- ✅ Wysoka konwersja (ludzie chętnie rezerwują)
- ✅ Prowizja od całej wartości rezerwacji

### Jak się zarejestrować:
1. Wejdź na: https://www.booking.com/affiliate-program/v2/index.html
2. Kliknij "Join Now" / "Dołącz teraz"
3. Wypełnij formularz (potrzebujesz strony www)
4. Po akceptacji otrzymasz:
   - `AID` (Affiliate ID)
   - `LABEL` (Tracking label)
   - `SID` (Session ID)

### Jak wstawić w kod:
Znajdź w `index.html` linię:
```javascript
booking: `https://www.booking.com/hotel/pl/index.pl.html?aid=YOUR_AID&label=YOUR_LABEL&sid=YOUR_SID`
```

Zamień:
- `YOUR_AID` → Twój AID (np. 1234567)
- `YOUR_LABEL` → Twój label (np. lastminute-pl)
- `YOUR_SID` → Twój SID (opcjonalny)

**Zarobek:** Przy rezerwacji hotelu za 500 PLN, zarobisz **125-200 PLN!** (25-40% prowizji)

---

## 2. ✈️ TRAVELPAYOUTS - LOTY (Prowizja 3-5%)

### Dlaczego TravelPayouts?
- ✅ Jeden panel = dostęp do 100+ programów
- ✅ Kiwi.com, Aviasales, Hotellook w jednym miejscu
- ✅ Automatyczne płatności
- ✅ Łatwa integracja

### Jak się zarejestrować:
1. Wejdź na: https://www.travelpayouts.com/
2. Zarejestruj się (email + hasło)
3. Zweryfikuj email
4. W panelu znajdź "Programs" → "Kiwi.com"
5. Aktywuj program i skopiuj Affiliate ID

### Jak wstawić w kod:
```javascript
kiwi: `https://www.kiwi.com/deep?affilid=YOUR_AFFILIATE_ID&currency=PLN`
```

Zamień `YOUR_AFFILIATE_ID` na swój ID z TravelPayouts

**Zarobek:** Przy locie za 600 PLN, zarobisz **18-30 PLN** (3-5% prowizji)

---

## 3. 🚗 DISCOVER CARS - WYNAJEM AUT (Prowizja 30-50%!)

### Dlaczego Discover Cars?
- ✅ Najwyższe prowizje w branży (do 50%!)
- ✅ Porównywarka wielu wypożyczalni
- ✅ Dobra konwersja
- ✅ Płatności PayPal lub bank

### Jak się zarejestrować:
1. Wejdź na: https://www.discovercars.com/affiliate-program
2. Wypełnij formularz aplikacyjny
3. Czekaj na akceptację (1-3 dni)
4. Otrzymasz `a_aid` (Affiliate AID)

### Jak wstawić w kod:
```javascript
discovercars: `https://www.discovercars.com/?a_aid=YOUR_AID`
```

**Zarobek:** Przy wynajmie auta za 400 PLN, zarobisz **120-200 PLN!** (30-50% prowizji)

---

## 4. 🎒 TUI / RAINBOW TOURS - PAKIETY (Prowizja 5-8%)

### TUI Partner Program:
1. Wejdź na: https://www.tui.pl/
2. Przewiń na dół → "Współpraca"
3. Wypełnij formularz kontaktowy
4. Opisz swoją stronę
5. Czekaj na kontakt (3-7 dni)

### Rainbow Tours:
1. Email: partnerzy@rainbowtours.pl
2. Opisz swój projekt
3. Poproś o dołączenie do programu partnerskiego

**Zarobek:** Przy pakiecie za 3000 PLN, zarobisz **150-240 PLN** (5-8% prowizji)

---

## 5. 📱 SKYSCANNER - LOTY (CPC Model)

### Jak działa:
- Płacą za każde KLIKNIĘCIE (nie tylko rezerwacje!)
- $0.10-0.50 za kliknięcie
- Dobry dodatek do innych programów

### Rejestracja:
1. https://www.skyscanner.net/affiliate-program
2. Zarejestruj się
3. Skopiuj tracking link
4. Wstaw w kod

---

## 💡 STRATEGIA MAKSYMALNYCH ZAROBKÓW

### Rekomendowana kombinacja:
1. **Booking.com** - główny zarobek (hotele)
2. **TravelPayouts** - agregator (loty, auta)
3. **Discover Cars** - dodatkowe auto
4. **Google AdSense** - już masz!

### Przykładowe zarobki (10,000 wizyt/miesiąc):

| Źródło | Konwersja | Rezerwacje | Średnia wartość | Prowizja | Zarobek |
|--------|-----------|------------|-----------------|----------|---------|
| Booking.com | 2% | 200 hoteli | 500 PLN | 30% | **30,000 PLN** |
| Kiwi.com | 1.5% | 150 lotów | 600 PLN | 4% | **3,600 PLN** |
| Discover Cars | 1% | 100 aut | 400 PLN | 40% | **16,000 PLN** |
| Pakiety | 0.5% | 50 pakietów | 3000 PLN | 6% | **9,000 PLN** |
| AdSense | - | - | - | - | **2,000 PLN** |
| **RAZEM** | | | | | **60,600 PLN/m** |

---

## 🚀 QUICK START (30 minut)

### Krok 1: Zarejestruj się
- [ ] Booking.com Affiliate
- [ ] TravelPayouts
- [ ] Discover Cars

### Krok 2: Skopiuj ID
- [ ] Booking: AID, LABEL
- [ ] TravelPayouts: Affiliate ID
- [ ] Discover Cars: a_aid

### Krok 3: Wklej w kod
Otwórz `index.html` i znajdź funkcje:
- `bookFlight()` - wklej TravelPayouts ID
- `bookHotel()` - wklej Booking.com AID i LABEL
- `bookCar()` - wklej Discover Cars a_aid

### Krok 4: Testuj!
- Kliknij "Rezerwuj" na stronie
- Sprawdź czy przekierowuje do partnera
- Zrób testową rezerwację (opcjonalnie)

### Krok 5: Monitoruj zarobki
- Panel Booking.com - zarobki z hoteli
- Panel TravelPayouts - zarobki z lotów
- Panel Discover Cars - zarobki z aut
- Google AdSense - zarobki z reklam

---

## 📊 TRACKING I ANALITYKA

### Google Analytics (już skonfigurowany!)
Kod śledzi:
- `book_flight` - kliknięcia w loty
- `book_hotel` - kliknięcia w hotele
- `book_package` - kliknięcia w pakiety
- `book_car` - kliknięcia w auta

### Jak sprawdzić statystyki:
1. Wejdź na: https://analytics.google.com
2. Wybierz swoją stronę
3. Events → Custom events
4. Zobacz ile masz konwersji!

---

## ⚠️ WAŻNE WSKAZÓWKI

### ✅ DO:
- Testuj linki co tydzień
- Sprawdzaj statystyki codziennie
- Optymalizuj teksty pod konwersję
- Dodaj więcej ofert
- Promuj stronę w social media

### ❌ NIE:
- Nie klikaj własnych linków (ban!)
- Nie obiecuj rabatów, których nie możesz dać
- Nie używaj botów do kliknięć
- Nie ukrywaj że to affiliate link

---

## 🎯 KOLEJNE KROKI

### Tydzień 1-2:
- Zarejestruj się we wszystkich programach
- Wklej linki do kodu
- Przetestuj wszystkie przyciski

### Tydzień 3-4:
- Pierwsze rezerwacje = pierwsze pieniądze! 💰
- Monitoruj co się najlepiej sprzedaje
- Dodaj więcej ofert dla bestselerów

### Miesiąc 2-3:
- Optymalizuj SEO (Google)
- Dodaj blog z poradami podróżniczymi
- Rozbuduj funkcje premium

### Miesiąc 4+:
- Skaluj ruch (Facebook Ads, Google Ads)
- Dodaj newsletter
- Rozważ model subskrypcyjny

---

## 📞 WSPARCIE

### Problemy z rejestracją?
- Booking.com: affiliatesupport@booking.com
- TravelPayouts: support@travelpayouts.com
- Discover Cars: affiliate@discovercars.com

### Pytania techniczne?
- Sprawdź dokumentację partnera
- Developer console w przeglądarce (F12)
- Śledź błędy JavaScript

---

## 🎊 BONUS: Dodatkowe Programy

### Hotels.com (backup dla Booking)
- https://www.hotels.com/affiliate
- Prowizja: 4-6%

### Agoda
- https://www.agoda.com/partners
- Prowizja: 5-7%
- Dobry w Azji!

### Expedia
- https://www.expedia.com/affiliate
- Prowizja: 3-5%

### GetYourGuide (atrakcje, wycieczki)
- https://partner.getyourguide.com
- Prowizja: 8%
- Dodatkowy zarobek!

---

## 💪 MOTYWACJA

**Pamiętaj:**
- Pierwsze 1000 PLN może przyjść w miesiąc 1
- Po 3 miesiącach możesz mieć 10,000 PLN/m
- Po roku nawet 50,000+ PLN/m
- To PASYWNY DOCHÓD - zarabiasz nawet w nocy!

**Powodzenia! 🚀💰**

---

*Dokument zaktualizowany: Listopad 2025*
