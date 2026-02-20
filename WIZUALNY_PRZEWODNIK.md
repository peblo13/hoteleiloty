# 🖼️ WIZUALNY PRZEWODNIK - GDZIE KLIKAĆ W GOOGLE ADSENSE

## Ekran 1: Strona główna Google AdSense
```
https://adsense.google.com

Po zalogowaniu powinieneś zobaczyć:
- Po lewej: Menu z opcjami
- Na górze: Tabs (Przegląd, Reklamy, Raporty, Ustawienia)
```

## Ekran 2: Tworzenie nowej jednostki reklamowej
```
KLIKNIJ TUTAJ:
1. W lewym menu → REKLAMY
2. W submenu → JEDNOSTKI REKLAMOWE (Ad units)
3. Przycisk niebieski → "+ NOWA JEDNOSTKA" (+ NEW AD UNIT)
```

## Ekran 3: Formularz nowej reklamy
```
UZUPEŁNIJ:
- Nazwa: "Reklama nad wynikami"
- Typ: Responsywna (Responsive ads) ← WYBIERZ TO
- Format: Auto/Automat ← WYBIERZ TO
- Rozmiar: Domyślny/Default ← WYBIERZ TO

Kliknij niebieski przycisk: UTWÓRZ / CREATE
```

## Ekran 4: Otrzymanie Slot ID
```
Po kliknięciu UTWÓRZ zobaczysz popup/dialog z kodem:

<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-9110227480064306"
     data-ad-slot="1234567890"  ← SKOPIUJ TĘ LICZBĘ!
     ...

SKOPIUJ: 1234567890 (będzie to inny numer)

To jest Twój SLOT ID #1
```

## Ekran 5: Powtórz dla drugiej reklamy
```
1. Ponownie kliknij: + NOWA JEDNOSTKA
2. Uzupełnij:
   - Nazwa: "Reklama w blogu"
   - Typ: Responsywna
   - Format: Auto
   - Rozmiar: Domyślny
3. Kliknij: UTWÓRZ
4. SKOPIUJ drugi Slot ID
```

## Ekran 6: Wstaw do pliku
```
Teraz masz:
- SLOT_ID_1 = np. 1234567890
- SLOT_ID_2 = np. 0987654321

Wykonaj w terminalu:
python3 setup-adsense.py 1234567890 0987654321
```

## Ekran 7: Git Push
```
git add index.html
git commit -m 'Configure Google AdSense'
git push origin website-improvement-for-adsense
```

## ✅ Gotowe!
```
Po push:
1. Wejdź na: https://hoteleiloty.pl
2. Sprawdź czy reklamy się wyświetlają
3. Czekaj na zarobki (pojawią się po 1-3 dniach)
```

---

## 🎨 Jak wygląda Slot ID
```
Będzie to 10-cyfrowy numer, np:
- 1234567890
- 9876543210
- 5555666677

Nie mylić z Publisher ID (ma 19 znaków z "pub-" na początku):
- pub-9110227480064306 ← To już masz ✅
```

---

## ❌ Co się może nie stać

### Problem: Nie widzę menu REKLAMY
```
Rozwiązanie:
1. Zaloguj się ponownie
2. Odczekaj 2-3 dni od weryfikacji domeny
3. Google musi najpierw zatwierdzić Twoją stronę
```

### Problem: Nie mogę znaleźć "Jednostki reklamowe"
```
Rozwiązanie:
Menu może mieć inną nazwę w zależności od języka:
- PL: Reklamy → Jednostki reklamowe
- EN: Ads → Ad units
- Szukaj po angielsku jeśli interfejs jest w EN
```

### Problem: Po wstawieniu nie widać reklam
```
Rozwiązanie:
1. Czekaj minimum 30 minut
2. Przeładuj stronę (Ctrl+Shift+R)
3. Sprawdź czy slot IDs są prawidłowe (bez spacji)
4. Google musi zatwierdzić reklamy (1-3 dni)
```

### Problem: "Invalid slot ID"
```
Rozwiązanie:
1. Sprawdź czy nie ma spacji
2. Upewnij się że skopiowałeś LICZBĘ (bez cudzysłowów)
3. Wklej dokładnie jak jest w popup'ie AdSense
```

---

## 💬 Tak powinna wyglądać reklama na stronie

Po prawidłowej konfiguracji:
- Na stronie pojawią się prostokątne pola z napisem "Ads by Google"
- Reklamy mogą być klikalne
- Będą się zmieniać co kilka sekund
- To są REKLAMY - to jest dobrze! Normalnie się wyświetlają

---

## 🚀 Jesteś gotów!

Wszystkie pozostałe rzeczy zostały już zrobione:
- ✅ Publisher ID wstawiony
- ✅ AdSense Script w `<head>`
- ✅ 2 miejsca na reklamy przygotowane
- ✅ Strona ma bogatą treść
- ✅ Responsywny design
- ⏳ Tylko czekaj na weryfikację Google (1-3 dni)
