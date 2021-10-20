import React, { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import axios from "axios";
import img from "./img/icons.png";

const TransHistory = () => {
  const [allinvoice, setallinvoice] = useState([]);
  const [allwalhist, setallwalhist] = useState([]);
  const [usertoken, setusertoken] = useState("");
  const [count, setcount] = useState(0);

  const [isloading, setisloading] = useState(true);


   // Wallet History 
   const fetchwalhist = () => {
    const data = new FormData();
    data.append("apptoken", "T9H1E6KUYM");
    data.append("usertoken", localStorage.getItem("usertoken"));

    axios
      .post(`https://test.api.eclipse.com.ng/v1/get-wallet-history`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.success === false) {
          console.log(response.data);
          setisloading(false);
        } else {
          setallwalhist(response.data);
          setisloading(false);

          console.log(response.data);
        }
      })

      .catch((error) => {
        console.log(error.response);
        setisloading(false);
      });
  };
  useEffect(() => {
    fetchwalhist();
  }, [count]);

  const walhist = allwalhist.map((item, i) => {
    return (
      <>
        <div className="first mt-3">
          <div className="row ">
            <div className="col-7 mr-auto ">
              <p className="bold-text">{item.type}</p>
            </div>
            <div className="col-4 ml-auto">
              <p className="bold-text" className="float-right">
                ₦ {item.amount_th}
              </p>
            </div>
          </div>
          <div className="row mt-0">
            <div className="col-8 mr-auto">
              <div className="row mt-0 float-left">
                <div className="col-5 mr-auto">
                  <p className="">
                    <small> {item.usertoken} </small>
                  </p>
                </div>
                <div className="col-7 mr-auto">
                  <p className="green-text">
                    <small>
                      <i>- {item.type} -</i>
                    </small>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-4 ml-auto">
              <p className="" className="grey-text float-right">
                <small>
                  <i> {item.timeago}</i>
                </small>
              </p>
            </div>
          </div>
        </div>
        <hr className="p-0 m-0" />
      </>
    );
  });



  const fetchinvoice = () => {
    const data = new FormData();
    data.append("apptoken", "T9H1E6KUYM");
    data.append("usertoken", localStorage.getItem("usertoken"));

    axios
      .post(`https://test.api.eclipse.com.ng/v1/get-orders`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.success === false) {
          console.log(response.data);
          setisloading(false);
        } else {
          setallinvoice(response.data);
          setisloading(false);

          console.log(response.data);
        }
      })

      .catch((error) => {
        console.log(error.response);
        setisloading(false);
      });
  };
  useEffect(() => {
    fetchinvoice();
  }, [count]);

  const invoice = allinvoice.map((item, i) => {
    return (
      <>
        <div className="first mt-3">
          <div className="row ">
            <div className="col-7 mr-auto ">
              <p className="bold-text">{item.packagename}</p>
            </div>
            <div className="col-4 ml-auto">
              <p className="bold-text" className="float-right">
                ₦ {item.price}
              </p>
            </div>
          </div>
          <div className="row mt-0">
            <div className="col-8 mr-auto">
              <div className="row mt-0 float-left">
                <div className="col-5 mr-auto">
                  <p className="">
                    <small> {item.trackid} </small>
                  </p>
                </div>
                <div className="col-7 mr-auto">
                  <p className="blue-text">
                    <small>
                      <i>- {item.paidstatus} -</i>
                    </small>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-4 ml-auto">
              <p className="" className="grey-text float-right">
                <small>
                  <i> {item.timestamp}</i>
                </small>
              </p>
            </div>
          </div>
        </div>
        <hr className="p-0 m-0" />
      </>
    );
  }).concat(walhist).reverse();


 


  return (
    <>
      <div className="history">
        <div className=" row justify-content-center">
          <div className="col-md-10">
            <div className="mt-5 text-center">
              <h5> Transaction History </h5>
            </div>

            {isloading ? (
              <div className="text-center my-5">
                <Spinner color="success" />
              </div>
            ) : (
              <>
                {invoice == "" ? (
                  <>
                    <div className="mt-5 text-center">
                      <img src={img} width="100px" />
                      <h5
                        class="mt-3 font-weight-normal mb-5"
                        style={{ color: "#CCCCCC" }}
                      >
                        Transaction is empty ...
                      </h5>
                    </div>
                  </>
                ) : (
                  <>{invoice}</>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TransHistory;
