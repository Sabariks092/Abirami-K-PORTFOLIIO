export const calculateExperience = (startDateStr) => {
  const startDate = new Date(startDateStr);
  const now = new Date();
  
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  let result = "";
  if (years > 0) {
    result += `${years} Year${years > 1 ? "s" : ""}`;
  }
  
  if (months > 0) {
    if (result) result += " ";
    result += `${months} Month${months > 1 ? "s" : ""}`;
  }
  
  // If result is empty (e.g. same month/year), default to "1 Month" or similar if needed
  if (!result) result = "0 Months";
  
  return result;
};
