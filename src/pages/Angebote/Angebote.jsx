const Angebote = () => {
  return (
    <div>
      <h1> Hier finden Sie unsere Angebote:</h1>

      <table>
        <h2>Unsere Pakete: </h2>

        <tr>
          <th>Tagesbetreuung:</th>
          <th>Presie</th>
          <th>Dauer</th>
        </tr>

        <tr>
          <td> Halbtags (bis 5 Stunden):</td>
          <td>20€</td>
          <td>(bis 5 Stunden)</td>
        </tr>

        <tr>
          <td>Ganztags (bis 10 Stunden):</td>
          <td> 35€</td>
          <td>(bis 10 Stunden)</td>
        </tr>

        <tr>
          <th>Übernachtung:</th>
          <th></th>
          <th></th>
        </tr>

        <tr>
          <th>Einzelübernachtung:</th>
          <th>45€ </th>
          <th>pro Nacht</th>
        </tr>

        <tr>
          <th>Wochenpaket (7 Nächte):</th>
          <th>280€ </th>
          <th>(eine Nacht gratis!)</th>
        </tr>
      </table>
      <br />
      <h2>Langzeitaufenthalt:</h2>
      <table>
        <tr>
          <th>Langzeitaufenthalt:</th>
          <th>Presie</th>
          <th>Dauer</th>
        </tr>
        <tr>
          <th> Monatspaket (30 Nächte):</th>
          <td>500€</td>
          <td>(zwei Nächte gratis!)</td>
        </tr>

        <h2> Zusatzleistungen :</h2>
        <br />
        <h2> Unsere Angebote für Mitglieder</h2>
        <tr>
          <th> Mitglied :</th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th>Langzeitaufenthalt:</th>
          <th>Presie</th>
          <th>Dauer</th>
        </tr>
        <tr>
          <th> Gassi-Service:</th>
          <td> 10€ </td>
          <td> pro Spaziergang</td>
        </tr>
        <tr>
          <th> Pflegeservice (Baden und Bürsten):</th>
          <td> 25€</td>
          <td> pro 30 min</td>
        </tr>

        <tr>
          <th> Spezielle Diätkost:</th>
          <td> Auf Anfrage</td>
          <td> </td>
        </tr>
      </table>
    </div>
  );
};

export default Angebote;
