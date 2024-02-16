import { useEffect } from "react";

export const LocationCountry = ({ styles }) => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log("Latitude:", position.coords.latitude);
        console.log("Longitude:", position.coords.longitude);
      },
      function (error) {
        console.error("Ошибка получения местоположения:", error);
      }
    );
  }, []);

  return <div className={styles.country}>Россия</div>;
};
