import "./widgetLg.css";

export default function WidgetLg() {
  
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Ultimas transacciones</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Cliente</th>
          <th className="widgetLgTh">Fecha</th>
          <th className="widgetLgTh">Cantidad</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            
            <span className="widgetLgName">Juan Luis Moya</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$10000</td>
        </tr>

      </table>
    </div>
  );
}
