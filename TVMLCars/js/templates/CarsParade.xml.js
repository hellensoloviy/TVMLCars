var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <paradeTemplate>
    <list>
      <header>
        <title>Cars</title>
      </header>
    <section>
      <listItemLockup>
        <title>Lamboghini</title>
      </listItemLockup>
      <listItemLockup>
        <title>Ferrari</title>
      </listItemLockup>
     <listItemLockup>
        <title>Tesla</title>
     </listItemLockup>
    </section>
    <relatedContent>
    <imgDeck>
    <img src="${this.BASEURL}/images/cars/l1.jpg" />
    <img src="${this.BASEURL}/images/cars/l2.jpg" />
    <img src="${this.BASEURL}/images/cars/l3.jpg" />
    </imgDeck>
    </relatedContent>
    </list>
    </paradeTemplate>
  </document>`
}
