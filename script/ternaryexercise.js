// script/ternary.js

// 1. Adult Check
let age = 10;
let adultCheck = age <= 18 ? "Minor" : "Adult";
document.getElementById("adultCheck").textContent = `Adult Check: ${adultCheck}`;

// 2. Grade Classification
let score = 95;
let gradeClassification = score <= 50 ? "Fail" : "Pass";
document.getElementById("gradeClassification").textContent = `Grade Classification: ${gradeClassification}`;

// 3. Voting Eligibility
let ages = 21;
let votingEligibility = ages <= 18 ? "Not eligible" : "Eligible";
document.getElementById("votingEligibility").innerText = `Voting Eligibility: ${votingEligibility}`;

// 4. Temperature Check
let temperature = 28;
let temperatureCheck = temperature > 30 ? "Hot" : "Cool";
document.getElementById("temperatureCheck").innerText = `Temperature Check: ${temperatureCheck}`;

// 5. Check String Length
let str = "Hello!";
let stringLengthCheck = str.length >= 5 ? "Long" : "Short";
document.getElementById("stringLengthCheck").innerText = `String Length Check: ${stringLengthCheck}`;

// 6. Day or Night
let hour = 14;
let dayOrNight = (hour >= 6 && hour <= 18) ? "Day" : "Night";
document.getElementById("dayOrNight").innerText = `Day or Night: ${dayOrNight}`;

// 7. Basic Ternary Operation
let x = 52;
let basicTernary = x > 10 ? "Greater" : "Smaller or equal";
document.getElementById("basicTernary").innerText = `Basic Ternary Operation: ${basicTernary}`;
