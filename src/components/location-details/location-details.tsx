import { useEffect, useState } from "react";
import "./location-details.scss";

interface LocationDetailsProps {
  searchValue: string;
  setLangAndLat: React.Dispatch<React.SetStateAction<Array<number>>>;
}
interface IPAddressFetchObject {
  ip: string;
  location: LocationObject;
  timezone: string;
  isp: string;
}
interface LocationObject {
  city: string;
  country: string;
  region: string;
  timezone: string;
  lat: number;
  lng: number;
}
export default function LocationDetails(props: { data: LocationDetailsProps }) {
  const [ipAddress, setIPAddress] = useState<string>("N/A");
  const [location, setLocation] = useState<LocationObject>({
    city: "N/A",
    country: "N/A",
    region: "N/A",
    timezone: "N/A",
    lat: 0,
    lng: 0,
  });
  const [timezone, setTimezone] = useState<string>("N/A");
  const [ISP, setISP] = useState<string>("N/A");

  useEffect(() => {
    async function fetchIPInformation() {
      let fetchIP = await fetch(
        "https://geo.ipify.org/api/v2/country,city?apiKey=" +
          process.env.REACT_APP_IPIFY_API_KEY +
          "&ipAddress=" +
          props.data.searchValue
      );

      let ipData: IPAddressFetchObject = await fetchIP.json();
      setIPAddress(ipData.ip);
      setLocation(ipData.location);
      setTimezone(ipData.location.timezone);
      setISP(ipData.isp);
      props.data.setLangAndLat([ipData.location.lat, ipData.location.lng]);
      await console.log(ipData);
    }
    if (props.data.searchValue !== "") {
      fetchIPInformation();
    }
  }, [props.data.searchValue]);

  return (
    <div id="details-container">
      <span className="details__info" id="details__ip-address">
        <h5>IP ADDRESS</h5>
        <h6>{ipAddress}</h6>
      </span>
      <span className="details__info" id="details__location">
        <h5>LOCATION</h5>
        <h6>{location.country}</h6>
      </span>
      <span className="details__info" id="details__timezone">
        <h5>TIMEZONE</h5>
        <h6>{timezone}</h6>
      </span>
      <span className="details__info" id="details__isp">
        <h5>ISP</h5>
        <h6>{ISP}</h6>
      </span>
    </div>
  );
}
