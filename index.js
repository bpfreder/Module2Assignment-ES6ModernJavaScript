var loan = {
      id: 0,
      customerName: "Jack Smith",
      phoneNumber: "(303)217-8922",
      address: "12345 Spinning Circle",
      loanAmount: 250,
      interest: 0.06,
      loanTermYears: 4,
      loanType: "Car",
      description: "2014 Toyota Prius C",
      presentValue: function() {
        return this.loanAmount * ( (1 - ( 1 /(( 1 + this.interest ) ** (this.loanTermYears * 12)))) / this.interest )
      }
}

var loan2 = {
      id: 1,
      customerName: "Johnny Appleseed",
      phoneNumber: "(808)345-8903",
      address: "8008 Hawaii Lane",
      loanAmount: 1000,
      interest: 0.10,
      loanTermYears: 1,
      loanType: "Business Loan",
      description:  "Loan granted as bank investment for techonology startup company",
      presentValue: function() {
        return this.loanAmount * ( (1 - ( 1 /(( 1 + this.interest ) ** (this.loanTermYears * 12)))) / this.interest )
      }
}

var loan3 = {
      id: 2,
      customerName: "Kevin James",
      phoneNumber: "(915)678-1572",
      address: "4200 Cherry Pine Dr",
      loanAmount: 400,
      interest: 0.03,
      loanTermYears: 5,
      loanType: "Car",
      description: "2023 Toyota RAV 4",
      presentValue: function() {
        return this.loanAmount * ( (1 - ( 1 /(( 1 + this.interest ) ** (this.loanTermYears * 12)))) / this.interest )
      }
}
    
var loan4 = {
     id: 3,
      customerName: "Juan Rodriguez",
      phoneNumber: "(719) 372-8167",
      address: "2220 E Outer Ave",
      loanAmount: 1500,
      interest: 0.05,
      loanTermYears: 30,
      loanType: "Home Mortgage",
      description: "30 year mortgage for house purchase",
      presentValue: function() {
        return this.loanAmount * ( (1 - ( 1 /(( 1 + this.interest ) ** (this.loanTermYears * 12)))) / this.interest )
      }
}
 
var loan5 = {
      id: 4,
      customerName: "Linda Campbell",
      phoneNumber: "(909)281-1283",
      address: "1000 Camp St",
      loanAmount: 1250,
      interest: 0.07,
      loanTermYears: 20,
      loanType: "Home Mortgage",
      description: "20 year mortgage for house purchase",
      presentValue: function() {
        return this.loanAmount * ( (1 - ( 1 /(( 1 + this.interest ) ** (this.loanTermYears * 12)))) / this.interest )
      }
}

const loans = [loan, loan2, loan3, loan4, loan5]

for (let i = 0; i < loans.length; i++) {
    console.log("Loan #" + (i+1) + ":")
    console.log("ID: " + loans[i].id)
    console.log("Name: " + loans[i].customerName)
    console.log("Phone Number: " + loans[i].phoneNumber)
    console.log("Address: " + loans[i].address)
    console.log("Monthly Payment Amount: $" + loans[i].loanAmount)
    console.log("Interest Rate: " + (loans[i].interest * 100).toFixed(0) + "%")
    console.log("Term Years: " + loans[i].loanTermYears)
    console.log("Loan Type: " + loans[i].loanType)
    console.log("Description: " + loans[i].description)
    console.log("Present Value: $" + loans[i].presentValue().toFixed(2))
    console.log("")
}