# 🚀 Instrukcja Uruchomienia API Last Minute

## 📋 **Kroki do Uruchomienia**

### **1. Zarejestruj się w TravelPayouts** 
- **URL**: https://www.travelpayouts.com
- **Czas**: 5 minut
- **Korzyści**: Dostęp do lotów z całego świata
- **Commission**: 0.5-2% z każdej rezerwacji

**Kroki:**
1. Idź na travelpayouts.com
2. Kliknij "Join for Free"
3. Wypełnij formularz rejestracyjny
4. Potwierdź email
5. W panelu idź do "Tools" → "API"
6. Skopiuj swój **API Token**

### **2. Zarejestruj się w HotelLook**
- **URL**: https://www.hotellook.com/affiliates
- **Czas**: 5 minut  
- **Korzyści**: Hotele z Booking.com, Agoda, Hotels.com
- **Commission**: 25-50% z zysku HotelLook

**Kroki:**
1. Idź na hotellook.com/affiliates
2. Kliknij "Become a Partner"
3. Wypełnij dane partnera
4. W panelu znajdź "API Access"
5. Skopiuj **API Token**

### **3. Wstaw API Keys do Kodu**

**W pliku `travel-api.js` zamień:**
```javascript
this.TRAVELPAYOUTS_TOKEN = 'YOUR_TRAVELPAYOUTS_TOKEN';
this.HOTELLOOK_TOKEN = 'YOUR_HOTELLOOK_TOKEN';
```

**Na swoje prawdziwe tokeny:**
```javascript
this.TRAVELPAYOUTS_TOKEN = 'abc123def456ghi789';
this.HOTELLOOK_TOKEN = 'xyz987wvu654tsr321';
```

### **4. Testowanie API**

**Test TravelPayouts API:**
```bash
curl "https://api.travelpayouts.com/v1/prices/cheap?origin=WAW&destination=BER&depart_date=2025-12-15&token=TWÓJ_TOKEN"
```

**Test HotelLook API:**
```bash
curl "https://engine.hotellook.com/api/v2/search/start.json?destination=BER&checkin=2025-12-15&checkout=2025-12-17&token=TWÓJ_TOKEN"
```

### **5. Uruchomienie Strony**

1. **Zapisz pliki** `last-minute.html` i `travel-api.js`
2. **Commit & Push** do GitHub:
   ```bash
   git add .
   git commit -m "Add Last Minute Travel page with API integration"
   git push eventfinder master
   ```
3. **Otwórz**: https://eventfinder.fun/last-minute.html

## 💰 **Monetyzacja - Jak Zarabiać**

### **TravelPayouts Commission:**
- **Loty**: 0.5-2% z wartości biletu
- **Hotele**: 1-4% z wartości rezerwacji
- **Przy 100 rezerwacjach/miesiąc = 500-2000 zł**

### **HotelLook Commission:**
- **Booking.com**: 25% z zysku HotelLook
- **Agoda**: 30% z zysku HotelLook  
- **Hotels.com**: 20% z zysku HotelLook
- **Przy 50 rezerwacjach/miesiąc = 800-1500 zł**

### **Dodatkowe Przychody:**
- **AdSense na stronie**: 200-500 zł/miesiąc
- **Sponsored deals**: 1000-3000 zł/miesiąc
- **Email marketing**: 300-800 zł/miesiąc

**CAŁKOWITY POTENCJAŁ: 2,800-7,800 zł/miesiąc** 🚀

## 🎯 **Następne Kroki**

### **Dzisiaj:**
1. ✅ Zarejestruj się w TravelPayouts (15 min)
2. ✅ Zarejestruj się w HotelLook (15 min)
3. ✅ Wstaw API keys (5 min)
4. ✅ Testuj API calls (10 min)

### **Jutro:**
1. Dodaj więcej destynacji
2. Zintegruj z kalendarzem eventów
3. Dodaj newsletter signup
4. Uruchom kampanie social media

### **W tym tygodniu:**
1. Stwórz landing pages dla popularnych tras
2. Dodaj blog o podróżach last minute
3. Zbuduj email listę
4. Uruchom pierwsze kampanie reklamowe

## ⚠️ **Ważne Uwagi**

1. **Rate Limits**: TravelPayouts ma limit 1000 calls/dzień na free plan
2. **CORS**: API może wymagać proxy dla call-ów z przeglądarki
3. **Caching**: Cachuj wyniki na 15-30 minut
4. **Fallback**: Zawsze miej backup z mock danymi

## 🔧 **Troubleshooting**

**Błąd CORS:**
- Użyj proxy servera lub
- Przenieś API calls na backend

**Brak wyników:**
- Sprawdź czy API key jest poprawny
- Sprawdź format dat (YYYY-MM-DD)
- Sprawdź kody lotnisk (IATA codes)

**Limit API calls:**
- Upgrade do paid plan
- Implementuj caching
- Optymalizuj liczbę zapytań