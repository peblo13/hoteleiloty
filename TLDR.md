# ⚡ TL;DR - BARDZO SZYBKO (3 MINUTY)

## CO TRZEBA ZROBIĆ

```bash
# 1. Zaloguj się https://adsense.google.com
# 2. Utwórz 2 Slot IDs (5 minut)
#    - Slot 1: "Reklama nad wynikami"  → skopiuj numer (np: 1234567890)
#    - Slot 2: "Reklama w blogu"       → skopiuj numer (np: 0987654321)

# 3. Wstaw do projektu
python3 setup-adsense.py 1234567890 0987654321

# 4. Git Push
git add index.html
git commit -m 'AdSense configuration'
git push

# KONIEC! ✅
```

## GDZIE SĄ SLOT IDS

```
Google AdSense
  ↓
Reklamy
  ↓
Jednostki reklamowe
  ↓
[Kliknij nową reklamę]
  ↓
Kod reklamy
  ↓
Szukaj: data-ad-slot="1234567890"
  ↓
SKOPIUJ LICZBĘ (to jest Slot ID)
```

## CO JUŻ MASZ

✅ Publisher ID: pub-9110227480064306  
✅ AdSense script w HTML  
✅ 2 miejsca na reklamy  
✅ Profesjonalny design  
✅ Bogata zawartość  

## CO CHYBA CIĘ PYTA

**P: Ile to trwa?**  
O: 10 minut na akcję. Reklamy pojawią się za 1-3 dni.

**P: Ile zarobię?**  
O: Przy 10K odwiedzin/miesiąc ≈ 2,700 PLN

**P: Mogę edytować kod?**  
O: NIE. Tylko wstaw Slot IDs w data-ad-slot=""

**P: Co to Slot ID?**  
O: To 10-cyfrowy numer dla każdej reklamy

**P: Czy będzie działać?**  
O: TAK - jeśli wstawisz poprawne Slot IDs

## DOKUMENTY

- **00_MASTER_INDEX.md** - Kompletny indeks
- **ZACZNIJ_TUTAJ.md** - Punkt wejścia
- **CHECKLIST_TODO.md** - Checklista
- **KROK_PO_KROKU_ADSENSE.md** - Instrukcje
- **WIZUALNY_PRZEWODNIK.md** - Gdzie klikać

## NAJCZĘSTSZE BŁĘDY

❌ Skopium Publisher ID zamiast Slot ID  
✅ Rozwiązanie: Skopiuj liczbę z data-ad-slot

❌ Spacje w Slot ID  
✅ Rozwiązanie: Skopiuj dokładnie bez spacji

❌ Edycja kodu reklamy  
✅ Rozwiązanie: Zmień TYLKO wartość w data-ad-slot

❌ Błędny format  
✅ Rozwiązanie: python3 setup-adsense.py SLOT_1 SLOT_2

## SZYBKA INSTRUKCJA SETUP

```bash
# Opcja 1: Automatycznie (najlepiej)
python3 setup-adsense.py SLOT_ID_1 SLOT_ID_2

# Opcja 2: Ręcznie
# 1. Otwórz index.html
# 2. Ctrl+F → SLOT-ID-1 → zamień na TWÓJ_SLOT_ID_1
# 3. Ctrl+F → SLOT-ID-2 → zamień na TWÓJ_SLOT_ID_2
# 4. Ctrl+S (zapisz)
```

## POTEM GIT

```bash
git add index.html
git commit -m 'AdSense configuration - added slot IDs'
git push origin website-improvement-for-adsense
```

## STATUS

✅ Strona: Gotowa  
✅ Zawartość: Gotowa  
✅ Reklamy: Gotowe do umieszczenia  
⏳ Slot IDs: Czeka na Ciebie  

## DALEJ

Przeczytaj: 00_MASTER_INDEX.md

---

**Gotowy? Zacznij od:** python3 setup-adsense.py
