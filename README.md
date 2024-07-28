# Tajna Strona

## Opis

"Tajna Strona" to aplikacja React, która demonstruje podstawowe techniki frontendowe, takie jak zarządzanie stanem, efekty, formularze oraz zabezpieczenia dostępu do zasobów. Aplikacja umożliwia dostęp do tajnej strony po odliczeniu czasu i wprowadzeniu poprawnego hasła.

## Instalacja

1. Sklonuj repozytorium:
   git clone https://github.com/JerzyJac/tajna-strona.git

2. Przejdź do katalogu projektu:
   cd tajna-strona

3. Zainstaluj zależności:
   npm install

## Uruchomienie

Aby uruchomić aplikację lokalnie:
npm start

Aplikacja zostanie uruchomiona na `http://localhost:3000`.

## Funkcjonalności

- **Odliczanie**: Po wejściu na stronę główną rozpoczyna się odliczanie, po którego zakończeniu użytkownik może wprowadzić hasło. Zmiana strony powoduje restart odliczania.
- **Weryfikacja hasła**: Użytkownik musi podać poprawne hasło (123), aby uzyskać dostęp do tajnej strony.
- **Blokada URL**: Dostęp do tajnej strony jest chroniony — bez poprawnego hasła przekierowanie na adres URL tajnej strony jest blokowane.
- **Stylizacja i responsywność**: Aplikacja jest w pełni ostylowana z użyciem Flexbox, co zapewnia elastyczny i responsywny układ na różnych urządzeniach.
- **Menu z zakładkami**: Strona zawiera menu nawigacyjne z zakładkami do podstron: Główna, O firmie, Kontakt.
- **O firmie** dane ładowane za pomocą fetch z lokalnego json

## Technologie

- React
- JavaScript
- CSS

## Live Preview

Aplikacja jest dostępna pod adresem [GitHub Pages/Netlify link].
