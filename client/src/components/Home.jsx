import React, { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";

const Home = () => {
  const [dataCity, setDataCity] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const response = await fetch(
        "https://pacific-coast-92755.herokuapp.com/weather/Montevideo"
      );
      const dataJson = await response.json();
      setDataCity(dataJson.data);
      setIsLoading(false);
    };
    getData();
  }, [reload]);
  console.log(dataCity.data);
  const handleClick = () => setReload(!reload);

  return (
    <>
      {isLoading && (
        <div className="loader">
          <BarLoader color={"#0d7377"} />
        </div>
      )}

      {!isLoading && dataCity && (
        <div className="main-container">
          <h1 className="title-main-container">Montevideo</h1>

          <div className="info-container">
            <p className="actual-temp">
              Temperatura actual: {dataCity.temp} C°
            </p>

            <div className="info-details-container">
              <div>
                <p className="info-details">
                  Temperatura mínima: {dataCity.temp_min} C°
                </p>
                <p className="info-details">Presión: {dataCity.pressure} hPa</p>
              </div>
              <div>
                <p className="info-details">
                  Temperatura máxima: {dataCity.temp_max} C°
                </p>
                <p className="info-details">Humedad: {dataCity.humidity} %</p>
              </div>
            </div>
          </div>

          <div className="map-container">
            <iframe
              title="map"
              className="iframe-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209626.3583755119!2d-56.37652516570118!3d-34.820736151576035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f80ffc63bf7d3%3A0x6b321b2e355bec99!2sMontevideo%2C%20Departamento%20de%20Montevideo%2C%20Uruguay!5e0!3m2!1ses-419!2sar!4v1601002253856!5m2!1ses-419!2sar"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </div>

          <button className="button-reload" onClick={handleClick}>
            Actualizar
          </button>
        </div>
      )}
    </>
  );
};

export default Home;
