#!/bin/bash

# Automatyczne wstawienie Slot IDs do pliku index.html
# Użycie: ./setup-adsense.sh SLOT_ID_1 SLOT_ID_2
# Przykład: ./setup-adsense.sh 1234567890 0987654321

if [ -z "$1" ] || [ -z "$2" ]; then
    echo "❌ Błąd: Musisz podać 2 slot ID-y"
    echo "Użycie: ./setup-adsense.sh SLOT_ID_1 SLOT_ID_2"
    echo ""
    echo "Przykład:"
    echo "./setup-adsense.sh 1234567890 0987654321"
    exit 1
fi

SLOT_ID_1=$1
SLOT_ID_2=$2

echo "🔄 Wstawianie Slot IDs do index.html..."

# Zamiana SLOT-ID-1
sed -i.bak "s/data-ad-slot=\"SLOT-ID-1\"/data-ad-slot=\"$SLOT_ID_1\"/g" index.html

# Zamiana SLOT-ID-2
sed -i.bak "s/data-ad-slot=\"SLOT-ID-2\"/data-ad-slot=\"$SLOT_ID_2\"/g" index.html

echo "✅ Gotowe! Slot IDs zostały wstawione:"
echo "  - Reklama 1 (pod wyszukiwaniem): $SLOT_ID_1"
echo "  - Reklama 2 (pod blogiem): $SLOT_ID_2"
echo ""
echo "📤 Następnie wykonaj:"
echo "  git add index.html"
echo "  git commit -m 'AdSense configuration'"
echo "  git push"
