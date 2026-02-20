#!/usr/bin/env python3
"""
Skrypt do wstawienia Slot IDs do index.html
Użycie: python3 setup-adsense.py SLOT_ID_1 SLOT_ID_2

Przykład:
python3 setup-adsense.py 1234567890 0987654321
"""

import sys
import re

if len(sys.argv) != 3:
    print("❌ Błąd: Musisz podać 2 slot ID-y")
    print("Użycie: python3 setup-adsense.py SLOT_ID_1 SLOT_ID_2")
    print("")
    print("Przykład:")
    print("python3 setup-adsense.py 1234567890 0987654321")
    sys.exit(1)

SLOT_ID_1 = sys.argv[1]
SLOT_ID_2 = sys.argv[2]

# Przeczytaj plik
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Zamiana SLOT-ID-1 na pierwszy slot ID
content = content.replace('data-ad-slot="SLOT-ID-1"', f'data-ad-slot="{SLOT_ID_1}"')

# Zamiana SLOT-ID-2 na drugi slot ID
content = content.replace('data-ad-slot="SLOT-ID-2"', f'data-ad-slot="{SLOT_ID_2}"')

# Zapisz plik
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Gotowe! Slot IDs zostały wstawione:")
print(f"  - Reklama 1 (pod wyszukiwaniem): {SLOT_ID_1}")
print(f"  - Reklama 2 (pod blogiem): {SLOT_ID_2}")
print("")
print("📤 Następnie wykonaj:")
print("  git add index.html")
print("  git commit -m 'AdSense configuration'")
print("  git push")
