import jsPDF from "jspdf";
import React from "react";
import TableHead from "../common/TableHead";
import { AdminInfo } from "../mockdata";
import  autoTable  from "jspdf-autotable";

export const Home = () => {
  const tableHeading = [
    { label: "S.no" },
    { label: "Employee Name" },
    { label: "Account" },
    { label: "IFCE Code" },
    { label: "Adhar no" },
    { label: "action" },
  ];

  const print = () => {
    const headerCol = [
      {
        headerName: "S.no",
        exportHead: "S.no",
        field: "id",
        xlCol: { dataType: "string", dataFormat: null },
      },
      {
        headerName: "Employee Name",
        exportHead: "Employee Name",
        field: "employeeName",
        xlCol: { dataType: "string", dataFormat: null },
      },
      {
        headerName: "Account",
        exportHead: "Account",
        field: "account",
        xlCol: { dataType: "string", dataFormat: null },
      },
      {
        headerName: "IFCE Code",
        exportHead: "IFCE Code",
        field: "ifceCode",
        xlCol: { dataType: "string", dataFormat: null },
      },
      {
        headerName: "Adhar no",
        exportHead: "Adhar no",
        field: "adharNo",
        xlCol: { dataType: "string", dataFormat: null },
      },
    ];

    const pdfColumn = headerCol?.map((el)=>{
      return{
        header:el.exportHead,
        dataKey:el.field,
        xlCol:el.xlCol
      }
    })
    const doc = new jsPDF({
      orientation:"l",
      format:"a4"
    })
    doc.autoTableSetDefaults({
      headStyles : {fontSize:10,with:"auto",hlign:"left",fillColor: [30, 89, 167]}
    })

    doc.setProperties({
      title:"data.pdf",
      subject:"table",
      author:"shivakant Tiwari",
      keywords:"table,create array",
    })
    autoTable(doc,{
      margin:{top:10,left:5,right:5,bottom:5},
      alternateRowStyles:{
        fillColor:[255,255,255]
      },
      columns:pdfColumn,
      body:AdminInfo,
      columnStyles:{
        0:{halign:"left",fontSize:8},
        1:{halign:"left",fontSize:8},
        2:{halign:"left",fontSize:8},
        3:{halign:"left",fontSize:8},
        4:{halign:"left",fontSize:8},
      },
      theme:"grid",
      headStyles:{
        fillColor:[30,89,167]
      }
    })

    setTimeout(()=>{
      document.getElementById("output").data = doc.output('datauristring',"data.pdf")
    },1000)
  };
  return (
    <>
      <h1>Home Component</h1>
      <table border="1">
        <TableHead tableHeading={tableHeading} />
        <tbody>
          {AdminInfo?.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.employeeName}</td>
                <td>{item.account}</td>
                <td>{item.ifceCode}</td>
                <td>{item.adharNo}</td>
                <td>
                  <button>Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="print_btn">
        <button onClick={print}>Print</button>
      </div>
      <object
      id="output"
      type="application/pdf"
      height="500"
      width="1200"
      title="table"
      >  
      </object>
    </>
  );
};
