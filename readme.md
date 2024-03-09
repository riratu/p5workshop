Hier sind einige grundlegende Funktionen um an einem Tag Spass mit p5.js zu haben.

# Links

- P5 Live Editor: https://p5live.org
- Dokumentation p5.js: https://p5js.org/

# Teil 1
- **ellipse(x, y, durchmesser)**
  Zeichnet einen Kreis

- **i = 10**
  Das ist eine Variable. Damit können Dinge gespeichert werden.
  
- **frameCount**
  liefert die Zahl an Durchgängen
  
- **%**
  modulo operator, teilt durch eine Zahl und gibt den Rest aus
  
- **background(0)**
  Übermalt den Hintergrund
  
- **text("eins", x, y)**
  Schreibe etwas
- **console.log()** (Zeige den Wert einer unten am Fenster an.)

**FARBEN**
- **colorMode(HSB, 255)**
  Ändert die Farben im Sketch auf Farbe, Sättigung und Helligkeit
  
- **stroke(255, 50, 132)**
  Definiert die Linienfarbe von Formen
  
- **strokeWeight(10)**
  Definiert die Linienstärke von Formen
  
- **fill()**
  definiert die Füllfarbe

**Selbst in Dokumentation schauen:**
- line
- rect
- point

**Allgemeine Programmierkonzepte**
In diesem Block erklärt euch Sebastian einige grundlegende Konzepte.
- **while(i < 100){}**    
  Damit können Dinge viele Male ausgeführt werden.

- **Browser Console**    
  Damit können mehr Ausgaben und Fehler angezeigt werden.

- **Chat GPT**    
   Wie benutze ich Chat GPT um etwas zu entwerfen?    
   Wie benutze ich Chat GPT zum debuggen oder code erklären lassen?    

## Weitere Tools
- **noise()**
  Liefert sich angsam ändernde Zufallswerte
 
- **sin() / cos()**
  macht aus einer sich ändernden Zahl eine Sinus oder Kreisbewegung

## Sound input
In setup() funktion:
- **mic = new p5.AudioIn()**
- **mic.start()**
- **mic.amp(50)**
  Definiert den Microfon Eingang und die Eingangs-Lautstärke.

In draw() funktion
- **amp = mic.getLevel()**
  gibt die aktuelle Lautstärke zurück

**Weiteres:**
- Wie kommt mein Code auf eine Webseite? -> https://p5js.org/get-started/
