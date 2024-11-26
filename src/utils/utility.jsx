export function convertToIST(utcDateString) {
  // Create a new Date object from the UTC date string
  const utcDate = new Date(utcDateString);

  // Options for formatting the output date and time
  const options = {
    timeZone: "Asia/Kolkata", // IST time zone
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    //   second: 'numeric',
    hour12: true, // Use 12-hour format
  };

  // Use the toLocaleString() method to convert to IST
  const istDateTime = utcDate.toLocaleString("en-IN", options);

  return istDateTime;
}

export function formatCurrency(number) {
  return Number(number).toLocaleString("en-IN");
}
