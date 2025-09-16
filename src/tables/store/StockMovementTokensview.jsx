import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form, Button, Row, Col, Table } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UniversalExportComponent from "../../components/UniversalExportComponent";
import {
  fetchData,
  saveData,
} from "../../reducer/redux/tableDataSlice";

function getLastParameter() {
  const pathname = window.location.pathname;
  const pathSegments = pathname.split("/").filter(Boolean);
  return pathSegments[pathSegments.length - 1];
}

const StockMovementTokensview = () => {
  const [slug, setSlug] = useState(getLastParameter().trim());
  const loanregister = useSelector((state) => state.data);
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state;
  const [stockData, setStockData] = useState([]);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("userdata"));
  const [formData, setFormData] = useState({});

  // Define columns for export
  const tokenMovementColumns = [
    { field: 'srNo', headerName: 'Sr. No' },
    { field: 'equipment', headerName: 'Equipment/No' },
    { field: 'noOfTokens', headerName: 'No. of Tokens' },
    { field: 'from', headerName: 'From' },
    { field: 'to', headerName: 'To' },
    { field: 'time', headerName: 'Time' },
    { field: 'empNo', headerName: 'Emp No' }
  ];

  const closingStockColumns = [
    { field: 'srNo', headerName: 'Sr. No' },
    { field: 'ContNo', headerName: 'Cont. No.' },
    { field: 'Qty', headerName: 'Qty.' },
    { field: 'location', headerName: 'Location' }
  ];

  // Fetch data on mount
  useEffect(() => {
    dispatch(fetchData({ formType: slug }));
  }, [dispatch]);

  const itmm = loanregister.data.data;
  let filteredData;

  if (itmm) {
    filteredData = itmm.filter((itm) => {
      return itm.id === id;
    });
  }

  // Prepare export data
  const tokenMovementExportData = filteredData?.[0]?.tokenMovement?.map((item, index) => ({
    srNo: index + 1,
    equipment: item.equipment,
    noOfTokens: item.noOfTokens,
    from: item.from,
    to: item.to,
    time: item.time,
    empNo: item.empNo
  })) || [];

  const closingStockExportData = filteredData?.[0]?.closingStock?.map((item, index) => ({
    srNo: index + 1,
    ContNo: item.ContNo,
    Qty: item.Qty,
    location: item.location
  })) || [];

  const handleSave = () => {
    dispatch(saveData({ slug, id }));
    alert(slug);
    navigate(`list/${slug}`);
  };

  return (
    <Container>
      {/* Universal Export Component */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
        <UniversalExportComponent
          data={tokenMovementExportData}
          columns={tokenMovementColumns}
          exportType="pdf"
          formName="Stock Movement Record - Token Movement"
          formId="stock-movement-tokens"
          template="standard"
          includeSerialNumber={false}
          size="medium"
          showLabel={false}
          metadata={{
            date: filteredData?.[0]?.date,
            station: filteredData?.[0]?.station,
            netOpeningStock: filteredData?.[0]?.netOpeningStockOK,
            reportType: "Token Movement"
          }}
        />
        <UniversalExportComponent
          data={closingStockExportData}
          columns={closingStockColumns}
          exportType="excel"
          formName="Stock Movement Record - Closing Stock"
          formId="stock-movement-closing-stock"
          template="standard"
          includeSerialNumber={false}
          size="medium"
          showLabel={true}
        />
      </div>

      <h2 className="text-center my-4">STOCK MOVEMENT RECORD - TOKEN</h2>
      <Table bordered responsive>
        <thead>
          <tr>
            <th>Date</th>
            <th>Station</th>
            <th>Net Opening Stock</th>
            <th>OK</th>
            <th>Defective</th>
            <th>Emergency</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{filteredData?.[0]?.date}</td>
            <td>{filteredData?.[0]?.station}</td>
            <td>{filteredData?.[0]?.netOpeningStockOK}</td>
            <td>{filteredData?.[0]?.netOpeningStock?.ok}</td>
            <td>{filteredData?.[0]?.netOpeningStock?.defective}</td>
            <td>{filteredData?.[0]?.netOpeningStock?.emergency}</td>
          </tr>
        </tbody>
      </Table>

      <div className="row">
        <div className="col-md-8">
          <h4>Token Movement for the Day</h4>
          <Table bordered responsive>
            <thead>
              <tr>
                <th>Sr. No</th>
                <th>Equipment/No</th>
                <th>No. of Tokens</th>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
                <th>Emp No</th>
              </tr>
            </thead>
            <tbody>
              {filteredData?.[0]?.tokenMovement?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.equipment}</td>
                  <td>{item.noOfTokens}</td>
                  <td>{item.from}</td>
                  <td>{item.to}</td>
                  <td>{item.time}</td>
                  <td>{item.empNo}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h4 className="mt-4">Additional Stock Details</h4>
          <Table bordered hover responsive>
            <tbody>
              <tr><td>Received from Gates in whole day</td><td>{filteredData?.[0]?.receivedFromGates}</td></tr>
              <tr><td>Received from other Station</td><td>{filteredData?.[0]?.receivedFromOtherStation}</td></tr>
              <tr><td>Refunded & Cancelled Tokens</td><td>{filteredData?.[0]?.refundedCancelledTokens}</td></tr>
              <tr><td>Loose Tokens</td><td>{filteredData?.[0]?.looseTokens}</td></tr>
              <tr><td>Received from RCC (Normal Stock)</td><td>{filteredData?.[0]?.receivedFromRCC}</td></tr>
              <tr><td>Token Left in Gates at Night</td><td>{filteredData?.[0]?.tokenLeftInGates}</td></tr>
              <tr><td>Sent to other Station</td><td>{filteredData?.[0]?.sentToOtherStation}</td></tr>
              <tr><td>Total token sale for The Day</td><td>{filteredData?.[0]?.totalTokenSale}</td></tr>
            </tbody>
          </Table>
        </div>
        <div className="col-md-6">
          <h4>Location of closing stock</h4>
          <Table bordered responsive>
            <thead>
              <tr>
                <th>Sr. No</th>
                <th>Cont. No.</th>
                <th>Qty.</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {filteredData?.[0]?.closingStock?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.ContNo}</td>
                  <td>{item.Qty}</td>
                  <td>{item.location}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      <Table bordered responsive>
        <thead>
          <tr><th colSpan={3}><h4>For the Day</h4></th></tr>
          <tr>
            <th>Net OK</th>
            <th>Defective</th>
            <th>Emergency</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{filteredData?.[0]?.netForTheDayStock?.ok}</td>
            <td>{filteredData?.[0]?.netForTheDayStock?.defective}</td>
            <td>{filteredData?.[0]?.netForTheDayStock?.emergency}</td>
          </tr>
        </tbody>

        <thead>
          <tr><th colSpan={3}><h4>Closing Stock</h4></th></tr>
          <tr>
            <th>Net OK</th>
            <th>Defective</th>
            <th>Emergency</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{filteredData?.[0]?.netClosingStock?.ok}</td>
            <td>{filteredData?.[0]?.netClosingStock?.defective}</td>
            <td>{filteredData?.[0]?.netClosingStock?.emergency}</td>
          </tr>

          <tr>
            <td className="d-flex gap-3 mt-3 justify-content-end">
              {filteredData?.[0]?.status === "0" || user?.role === "Admin" ? (
                <div className="d-flex">
                  <Link
                    to={`/edit/${slug}`}
                    state={{ id: filteredData?.[0]?.id }}
                    className="btn btn-primary align-content-center mx-3"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-success"
                    onClick={handleSave}
                  >
                    Submit
                  </button>
                </div>
              ) : (
                ""
              )}
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default StockMovementTokensview;