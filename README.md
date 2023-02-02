# Gruppuppgift: Färgglada marker

Regler

- Det finns vita, orangea, gula och gröna marker
- Marker kan ha värdet 1, 2 eller 3
- Spelaren börjar med ett antal marker i sin påse.
  - Fyra vita marker med värde 1
  - Två vita marker med värde 2
  - En vit marker med värde 3
  - En grön marker med värde 1
  - En grön marker med värde 2
  - En orange marker med värde 1
  - En orange marker med värde 3
  - En gul marker med värde 3
- Spelaren drar slumpvis en marker i taget ur påsen tills det sammanlagda värdet
  av spelarens dragna _vita_ marker är större än sju.

Presentera för varje omgång hur många marker som dragits och det sammanlagda
värdet av dessa.

Fokusera på att lösa uppgiften som ett team. Ni väljer själva språk etc. Några
saker att tänka på:

- Tänk på tester och testbarhet.
  - En bra fråga att ställa sig är: "Hur skriver jag testbar kod för något som
    skall ske slumpvis?"
- Tänk på hur ni representerar de koncept som nämns i reglerna.
- Fundera på hur ni gör för att programmet ni bygger ska vara skalbart.

Extra regler:

- Om den sista eller näst sista markern är grönt så får spelaren en rubin.
  Rubinen är värd 5 poäng.
- Om spelaren drar en gul marker och markern före var vit, så ska du stoppa
  tillbaka den vita i påsen.
- Om värdet av de vita marker som dragits är större än 9 så måste spelaren lägga
  tillbaka alla gröna marker.
