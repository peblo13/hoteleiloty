#!/bin/bash
# 
# 🚀 SZYBKI START - Wszystko w jednym skrypcie
# Uwaga: Musisz mieć Slot IDs skopiowane z Google AdSense
#

echo ""
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║            GOOGLE ADSENSE - SZYBKI START                       ║"
echo "║                    Wersja 1.0                                 ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Krok 1
echo "📋 Krok 1: Sprawdzanie wymagań..."
echo ""

if ! command -v python3 &> /dev/null; then
    echo "⚠️  Python3 nie jest zainstalowany"
    echo "Możesz edytować ręcznie index.html (zamień SLOT-ID-1 i SLOT-ID-2)"
    USE_PYTHON=0
else
    echo "✅ Python3 zainstalowany"
    USE_PYTHON=1
fi

if ! command -v git &> /dev/null; then
    echo "❌ Git nie jest zainstalowany - musisz mieć Git!"
    exit 1
fi
echo "✅ Git zainstalowany"
echo ""

# Krok 2
echo "🔍 Krok 2: Wczytywanie instrukcji..."
echo ""

if [ ! -f "index.html" ]; then
    echo "❌ Błąd: Plik index.html nie znaleziony!"
    echo "   Uruchom ten skrypt z głównego folderu projektu"
    exit 1
fi
echo "✅ Plik index.html znaleziony"
echo ""

# Krok 3
echo "📝 Krok 3: Wpisanie Slot IDs"
echo ""
echo "Będziesz teraz wpisywać Slot IDs które skopiowałeś z Google AdSense"
echo ""

if [ $USE_PYTHON -eq 1 ]; then
    read -p "Wpisz SLOT ID #1 (z reklamy nad wynikami): " SLOT_ID_1
    read -p "Wpisz SLOT ID #2 (z reklamy w blogu): " SLOT_ID_2
    
    # Walidacja
    if [ -z "$SLOT_ID_1" ] || [ -z "$SLOT_ID_2" ]; then
        echo ""
        echo "❌ Błąd: Slot IDs nie mogą być puste!"
        exit 1
    fi
    
    echo ""
    echo "⚙️  Krok 4: Wstawianie Slot IDs..."
    echo ""
    
    # Wykonaj skrypt
    python3 setup-adsense.py "$SLOT_ID_1" "$SLOT_ID_2"
    
    if [ $? -ne 0 ]; then
        echo "❌ Błąd podczas wstawiania Slot IDs"
        exit 1
    fi
else
    echo "ℹ️  Ręczna edycja:"
    echo "1. Otwórz plik: index.html"
    echo "2. Znajdź: data-ad-slot=\"SLOT-ID-1\""
    echo "3. Zamień na: data-ad-slot=\"[TWÓJ SLOT ID 1]\""
    echo "4. Znajdź: data-ad-slot=\"SLOT-ID-2\""
    echo "5. Zamień na: data-ad-slot=\"[TWÓJ SLOT ID 2]\""
    echo "6. Zapisz plik"
    echo ""
    read -p "Naciśnij ENTER gdy skończy się edycja..."
fi

# Krok 5
echo ""
echo "📤 Krok 5: Git Commit i Push..."
echo ""

git add index.html

git commit -m "Configure Google AdSense - add slot IDs"

if [ $? -eq 0 ]; then
    echo "✅ Commit utworzony"
else
    echo "⚠️  Commit nie został stworzony (może już jest)"
fi

echo ""
echo "📡 Wysyłanie do Git'a..."
git push origin website-improvement-for-adsense

if [ $? -eq 0 ]; then
    echo "✅ Push wykonany"
else
    echo "❌ Push nie powiódł się"
    echo "   Spróbuj wykonać manualnie: git push"
    exit 1
fi

# Koniec
echo ""
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║                    ✅ WSZYSTKO GOTOWE!                         ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""
echo "Co teraz:"
echo "1. Otwórz stronę: https://hoteleiloty.pl"
echo "2. Sprawdź czy reklamy się wyświetlają"
echo "3. Czekaj na zarobki (pojawią się za 1-3 dni)"
echo ""
echo "Dokumentacja: przeczytaj 00_MASTER_INDEX.md"
echo ""
