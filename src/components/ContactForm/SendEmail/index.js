import { useState } from "react";
import PropTypes from "prop-types";

const SendEmail = (endpointUrl) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const sendEmail = (data) => {
    setLoading(true);
    setSubmitted(false);
    setError(undefined);

    fetch(endpointUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 422) {
          throw new Error("Robot Detected?");
        }

        if (response.status !== 200) {
          throw new Error(`${response.statusText} (${response.status})`);
        }

        return response.json();
      })
      .then(() => {
        setSubmitted(true);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.toString());
        setLoading(false);
      });
  };

  return {
    submitted,
    loading,
    error,
    sendEmail,
  };
};

SendEmail.propTypes = {
  endpointUrl: PropTypes.string.isRequired,
};

SendEmail.defaultProps = {};

export default SendEmail;
