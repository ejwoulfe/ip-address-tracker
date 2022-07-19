import { useEffect, useState } from "react";
import "./location-details.scss";

interface LocationDetailsProps {
  searchValue: string;
}
interface IPAddressFetchObject {
  ip: string;
  location: LocationObject;
  timezone: string;
  isp: string;
}
interface LocationObject {
  country: string;
  region: string;
  timezone: string;
}
export default function LocationDetails(props: LocationDetailsProps) {
  const [ipAddress, setIPAddress] = useState<string>("N/A");
  const [location, setLocation] = useState<LocationObject>({
    country: "N/A",
    region: "N/A",
    timezone: "N/A",
  });
  const [timezone, setTimezone] = useState<string>("N/A");
  const [ISP, setISP] = useState<string>("N/A");
  useEffect(() => {
    if (props.searchValue !== "") {
      fetch(process.env.REACT_APP_IPIFY_API_KEY + props.searchValue)
        .then((response) => response.json())
        .then((data: IPAddressFetchObject) => {
          setIPAddress(data.ip);
          setLocation(data.location);
          setTimezone(data.location.timezone);
          setISP(data.isp);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [props.searchValue]);
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
