import React from "react";
import styles from "./styles.module.css";

const Table = ({ data }) => {
  return (
    <>
      {data.length > 0 && (
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>Mês</th>
              {/* <th>year_id</th> */}
              <th>Data</th>
              <th>Aporte</th>
              <th>Acumulado</th>
              <th>Juros</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, key) => {
              return (
                <tr key={key}>
                  <td>{value.month_id}</td>
                  {/* <td>{value.year_id}</td> */}
                  <td>{value.date}</td>
                  <td>R$ {value.contribution.toFixed(2)}</td>
                  <td>R$ {value.accumulated.toFixed(2)}</td>
                  <td>R$ {value.interest.toFixed(2)}</td>
                  <td>R$ {value.total.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Table;
