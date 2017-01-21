#BUTT 

Questa classe Javascript è stata realizzata per la creazione di un oggetto **button**. La classe provvede alla creazione di 3 oggetti, un oggetto **button** che contiene al suo interno un oggetto **icon** (\<i\>) e un oggetto **text** (\<p\>). 
I parametri da fornire per la creazione sono i seguenti:
- altezza (in px);
- larghezza (in px);
- testo contenuto all'interno del button (coinciderà poi con l'attributo **id** del button)
- il nome dell'icona, usando come riferimento le icone contenute nella repository [Material Icons - Google Design](https://material.io/icons/) oppure porre a null nel caso non si voglia aggiungere alcuna icona. Per il reperimento dell'icona dovrà essere integrato nella sezione **head** del documento html il seguente tag :
```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```
- l'attributo **id** del contenitore, per esempio se si vuole integrare il button in un tag div bisognerà fornire l'**id** del div in considerazione;
- il colore del button (porre a valore **null** nel caso lo si voglia lasciare del colore di default);
- il font desiderato per il testo contenuto all'interno dell'icona;
- la visibilità del button (valore **hidden** se si vuole creare il button già nascosto, **null** nel caso si voglia che sia visibile sin dalla creazione);
- il nome del metodo che gestisce l'evento di click sul button;

Tutti i valori vanno passati sottoforma di stringa, eccetto per il nome del metodo che gestisce l'evento (scriverlo senza virgolette), in quanto verrà gestito dalla classe **Butt** come un oggetto da aggiungere all'**eventListener**.

I metodi per la modifica del **button** e dei suoi parametri sono i seguenti:
- *setButtonAttribute(attribute, value)*: passando l'attributo del tag *\<button\>* e il relativo valore verrà applicato all'oggetto **button**;
- *setIconAttribute(attribute, value)*: passando l'attributo del tag *\<i\>* e il relativo valore verrà applicato all'oggetto **icon**;
- *setTextAttribute(attribute, value)*: passando l'attributo del tag *\<p\>* e il relativo valore verrà applicato all'oggetto **text**;
- *getButtonAttribute(attribute)*: ritorna il valore dell'attributo passato relativo all'oggetto **button**;
- *getIconAttribute(attribute)*: ritorna il valore dell'attributo passato relativo all'oggetto **icon**;
- *getTextAttribute(attribute)*: ritorna il valore dell'attributo passato relativo all'oggetto **text**;
- *setButtonColor(newColor)*: imposta il colore dell'oggetto **button** con il valore dato;
- *setText(newText)*: imposta il valore dell'oggetto **text** (il testo contenuto nel button) con il valore dato;
- *setTextSize(size)*: imposta la grandezza dell'oggetto **text** con il valore dato (in px);
- *setVisible()*: rende visibile l'oggetto **button**;
- *setNotVisible()*: rende non visibile l'oggetto **button**;
- *setBorderRadius(value)*: arrotonda gli spigoli dell'oggetto **button** a seconda del valore dato (in px);
- *setIconSize(size)*: imposta la dimensione dell'oggetto l'oggetto **icon** con il valore dato (in px);

Esempio:

```
window.onload = newbutton;
var button;

function newbutton() {
    button = new Butt("150px", "150px", "prova", "pregnant_woman", "divButt", "red", "Calibri", null, onClick);
    button.setBorderRadius("30px");
    button.setIconSize("25px");
}

function onClick() {
    button.setIconSize("25px");
	button.setButtonColor("green");
	button.setText("ciao");
}
```

[Immagine dell'esempio](http://i.imgur.com/VpRiqmq.png)

