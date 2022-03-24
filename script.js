function calcGrades(){
  getScores();
}

function getScores(s1, s2, s3, s4, s5, s6, s7, s8, s9){
  let score1 = parseInt(((document.querySelector("#score1").value) * 100) / 20) * 0.25;
  let score2 = parseInt(((document.querySelector("#score2").value) * 100) / 30) * 0.35;
  let score3 = parseInt(((document.querySelector("#score3").value) * 100) / 50) * 0.40;

  let score4 = parseInt(((document.querySelector("#score4").value) * 100) / 20) * 0.25;
  let score5 = parseInt(((document.querySelector("#score5").value) * 100) / 30) * 0.35;
  let score6 = parseInt(((document.querySelector("#score6").value) * 100) / 50) * 0.40;

  let score7 = parseInt(((document.querySelector("#score7").value) * 100) / 20) * 0.25;
  let score8 = parseInt(((document.querySelector("#score8").value) * 100) / 30) * 0.35;
  let score9 = parseInt(((document.querySelector("#score9").value) * 100) / 50) * 0.40;
  
  getSum(score1, score2, score3, score4, score5, score6, score7, score8, score9);

}

function getSum(r1, r2, r3, r4, r5, r6, r7, r8, r9){
  let sum1 = r1 + r2 + r3;
  let sum2 = r4 + r5 + r6;
  let sum3 = r7 + r8 + r9;
  
  console.log("Subject 1 Total: " + sum1 + "%");
  console.log("Subject 2 Total: " + sum2 + "%");
  console.log("Subject 3 Total: " + sum3 + "%");

  getTenta(sum1, sum2, sum3);
}

function getTenta(total1, total2, total3){
  let tentativeGrade1, tentativeGrade2, tentativeGrade3 = "Could not be calculated";
  switch (true) {
    case (total1 >= 96):
      tentativeGrade1 = 1.00;
      break;
    case (total1 >= 90) && (total1 <= 95.99):
      tentativeGrade1 = 1.25;
      break;
    case (total1 >= 84) && (total1 <= 89.99):
      tentativeGrade1 = 1.50;
      break;
    case (total1 >= 78) && (total1 <= 83.99):
      tentativeGrade1 = 1.75;
      break;
    case (total1 >= 72) && (total1 <= 77.99):
      tentativeGrade1 = 2.00;
      break;
    case (total1 >= 66) && (total1 <= 71.99):
      tentativeGrade1 = 2.25;
      break;
    case (total1 >= 60) && (total1 <= 65.99):
      tentativeGrade1 = 2.50;
      break;
    case (total1 >= 55) && (total1 <= 59.99):
      tentativeGrade1 = 2.75;
      break;
    case (total1 >= 50) && (total1 <= 54.99):
      tentativeGrade1 = 3.00;
      break;
    case (total1 >= 40) && (total1 <= 49.99):
      tentativeGrade1 = 4.00;
      break;
    case (total1 < 40):
      tentativeGrade1 = 5.00;
      break;
    default:
      document.write("There was an error in calculating your grade. Please make sure the entered values are correct, and try again.");
   }
  switch (true) {
    case (total2 >= 96):
      tentativeGrade2 = 1.00;
      break;
    case (total2 >= 90) && (total2 <= 95.99):
      tentativeGrade2 = 1.25;
      break;
    case (total2 >= 84) && (total2 <= 89.99):
      tentativeGrade2 = 1.50;
      break;
    case (total2 >= 78) && (total2 <= 83.99):
      tentativeGrade2 = 1.75;
      break;
    case (total2 >= 72) && (total2 <= 77.99):
      tentativeGrade2 = 2.00;
      break;
    case (total2 >= 66) && (total2 <= 71.99):
      tentativeGrade2 = 2.25;
      break;
    case (total2 >= 60) && (total2 <= 65.99):
      tentativeGrade2 = 2.50;
      break;
    case (total2 >= 55) && (total2 <= 59.99):
      tentativeGrade2 = 2.75;
      break;
    case (total2 >= 50) && (total2 <= 54.99):
      tentativeGrade2 = 3.00;
      break;
    case (total2 >= 40) && (total2 <= 49.99):
      tentativeGrade2 = 4.00;
      break;
    case (total2 < 40):
      tentativeGrade2 = 5.00;
      break;
    default:
      document.write("There was an error in calculating your grade. Please make sure the entered values are correct, and try again.");
   }
  switch (true) {
    case (total3 >= 96):
      tentativeGrade3 = 1.00;
      break;
    case (total3 >= 90) && (total3 <= 95.99):
      tentativeGrade3 = 1.25;
      break;
    case (total3 >= 84) && (total3 <= 89.99):
      tentativeGrade3 = 1.50;
      break;
    case (total3 >= 78) && (total3 <= 83.99):
      tentativeGrade3 = 1.75;
      break;
    case (total3 >= 72) && (total3 <= 77.99):
      tentativeGrade3 = 2.00;
      break;
    case (total3 >= 66) && (total3 <= 71.99):
      tentativeGrade3 = 2.25;
      break;
    case (total3 >= 60) && (total3 <= 65.99):
      tentativeGrade3 = 2.50;
      break;
    case (total3 >= 55) && (total3 <= 59.99):
      tentativeGrade3 = 2.75;
      break;
    case (total3 >= 50) && (total3 <= 54.99):
      tentativeGrade3 = 3.00;
      break;
    case (total3 >= 40) && (total3 <= 49.99):
      tentativeGrade3 = 4.00;
      break;
    case (total3 < 40):
      tentativeGrade3 = 5.00;
      break;
    default:
      document.write("There was an error in calculating your grade. Please make sure the entered values are correct, and try again.");
   }
  
  console.log("\nSubject 1 Tentative Grade: " + tentativeGrade1);
  console.log("Subject 2 Tentative Grade: " + tentativeGrade2);
  console.log("Subject 3 Tentative Grade: " + tentativeGrade3);

  getFinalGrades(tentativeGrade1, tentativeGrade2, tentativeGrade3);
}

function getFinalGrades (t1, t2, t3) {
  let previousGrade1 = parseInt(document.querySelector("#previousGrade1").value);
  let previousGrade2 = parseInt(document.querySelector("#previousGrade2").value);
  let previousGrade3 = parseInt(document.querySelector("#previousGrade3").value); 
  
  let finalGrade1 = ((t1 * 2) + previousGrade1)/3;
  let finalGrade2 = ((t2 * 2) + previousGrade2)/3;
  let finalGrade3 = ((t3 * 2) + previousGrade3)/3;

  switch (true) {
    case (finalGrade1 >= 1.000) && (finalGrade1 <= 1.125):
      finalGrade1 = 1.00;
      break;
    case (finalGrade1 >= 1.126) && (finalGrade1 <= 1.375):
      finalGrade1 = 1.25;
      break;
    case (finalGrade1 >= 1.376) && (finalGrade1 <= 1.625):
      finalGrade1 = 1.50;
      break;
    case (finalGrade1 >= 1.626) && (finalGrade1 <= 1.875):
      finalGrade1 = 1.75;
      break;
    case (finalGrade1 >= 1.876) && (finalGrade1 <= 2.125):
      finalGrade1 = 2.00;
      break;
    case (finalGrade1 >= 2.126) && (finalGrade1 <= 2.375):
      finalGrade1 = 2.25;
      break;
    case (finalGrade1 >= 2.376) && (finalGrade1 <= 2.625):
      finalGrade1 = 2.50;
      break;
    case (finalGrade1 >= 2.626) && (finalGrade1 <= 2.875):
      finalGrade1 = 2.75;
      break;
    case (finalGrade1 >= 2.876) && (finalGrade1 <= 3.125):
      finalGrade1 = 3.00;
      break;
    case (finalGrade1 >= 3.126) && (finalGrade1 <= 3.375):
      finalGrade1 = 4.00;
      break;
    case (finalGrade1 < 3.126 ):
      finalGrade1 = 5.00;
      break;
    default:
      document.write("There was an error in calculating your grade. Please make sure the entered values are correct, and try again.");
   }

   switch (true) {
    case (finalGrade2 >= 1.000) && (finalGrade2 <= 1.125):
      finalGrade2 = 1.00;
      break;
    case (finalGrade2 >= 1.126) && (finalGrade2 <= 1.375):
      finalGrade2 = 1.25;
      break;
    case (finalGrade2 >= 1.376) && (finalGrade2 <= 1.625):
      finalGrade2 = 1.50;
      break;
    case (finalGrade2 >= 1.626) && (finalGrade2 <= 1.875):
      finalGrade2 = 1.75;
      break;
    case (finalGrade2 >= 1.876) && (finalGrade2 <= 2.125):
      finalGrade2 = 2.00;
      break;
    case (finalGrade2 >= 2.126) && (finalGrade2 <= 2.375):
      finalGrade2 = 2.25;
      break;
    case (finalGrade2 >= 2.376) && (finalGrade2 <= 2.625):
      finalGrade2 = 2.50;
      break;
    case (finalGrade2 >= 2.626) && (finalGrade2 <= 2.875):
      finalGrade2 = 2.75;
      break;
    case (finalGrade2 >= 2.876) && (finalGrade2 <= 3.125):
      finalGrade2 = 3.00;
      break;
    case (finalGrade2 >= 3.126) && (finalGrade2 <= 3.375):
      finalGrade2 = 4.00;
      break;
    case (finalGrade2 < 3.126 ):
      finalGrade2 = 5.00;
      break;
    default:
      document.write("There was an error in calculating your grade. Please make sure the entered values are correct, and try again.");
   }

     switch (true) {
    case (finalGrade3 >= 1.000) && (finalGrade3 <= 1.125):
      finalGrade3 = 1.00;
      break;
    case (finalGrade3 >= 1.126) && (finalGrade3 <= 1.375):
      finalGrade3 = 1.25;
      break;
    case (finalGrade3 >= 1.376) && (finalGrade3 <= 1.625):
      finalGrade3 = 1.50;
      break;
    case (finalGrade3 >= 1.626) && (finalGrade3 <= 1.875):
      finalGrade3 = 1.75;
      break;
    case (finalGrade3 >= 1.876) && (finalGrade3 <= 2.125):
      finalGrade3 = 2.00;
      break;
    case (finalGrade3 >= 2.126) && (finalGrade3 <= 2.375):
      finalGrade3 = 2.25;
      break;
    case (finalGrade3 >= 2.376) && (finalGrade3 <= 2.625):
      finalGrade3 = 2.50;
      break;
    case (finalGrade3 >= 2.626) && (finalGrade3 <= 2.875):
      finalGrade3 = 2.75;
      break;
    case (finalGrade3 >= 2.876) && (finalGrade3 <= 3.125):
      finalGrade3 = 3.00;
      break;
    case (finalGrade3 >= 3.126) && (finalGrade3 <= 3.375):
      finalGrade3 = 4.00;
      break;
    case (finalGrade3 < 3.126 ):
      finalGrade3 = 5.00;
      break;
    default:
      document.write("There was an error in calculating your grade. Please make sure the entered values are correct, and try again.");
   }
  
  console.log("\nSubject 1 Final Grade: " + finalGrade1);
  console.log("Subject 2 Final Grade: " + finalGrade2);
  console.log("Subject 2 Final Grade: " + finalGrade3);

  getAverageGrades(finalGrade1,finalGrade2,finalGrade3);
}

function getAverageGrades(f1,f2,f3) {
  let GWA = (f1 + f2 + f3) / 3;

     switch (true) {
    case (GWA >= 1.000) && (GWA <= 1.125):
      GWA = 1.00;
      break;
    case (GWA >= 1.126) && (GWA <= 1.375):
      GWA = 1.25;
      break;
    case (GWA >= 1.376) && (GWA <= 1.625):
      GWA = 1.50;
      break;
    case (GWA >= 1.626) && (GWA <= 1.875):
      GWA = 1.75;
      break;
    case (GWA >= 1.876) && (GWA <= 2.125):
      GWA = 2.00;
      break;
    case (GWA >= 2.126) && (GWA <= 2.375):
      GWA = 2.25;
      break;
    case (GWA >= 2.376) && (GWA <= 2.625):
      GWA = 2.50;
      break;
    case (GWA >= 2.626) && (GWA <= 2.875):
      GWA = 2.75;
      break;
    case (GWA >= 2.876) && (GWA <= 3.125):
      GWA = 3.00;
      break;
    case (GWA >= 3.126) && (GWA <= 3.375):
      GWA = 4.00;
      break;
    case (GWA < 3.126 ):
      GWA = 5.00;
      break;
    default:
      document.write("There was an error in calculating your grade. Please make sure the entered values are correct, and try again.");
   }
  document.write("Your Gwa: " + GWA);
  console.log ("\n GWA:" + GWA);
} 




