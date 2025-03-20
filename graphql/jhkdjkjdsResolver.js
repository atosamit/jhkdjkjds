const resolvers = {
  Query: {
    searchCreditUnionByContractNumber: (parent, { contractNumber }) => {
      // Placeholder sample data and logic
      return sampleCreditUnions.filter(cu => cu.Contract_Number === contractNumber);
    },
    searchCreditUnionByName: (parent, { name }) => {
      // Placeholder sample data and logic
      return sampleCreditUnions.filter(cu => cu.Credit_Union_Name === name);
    },
    searchCreditUnionByState: (parent, { state }) => {
      // Placeholder sample data and logic
      // Assuming state info was in the type which was excluded
      return sampleCreditUnions;
    },
    searchCreditUnionByNameAndState: (parent, { name, state }) => {
      // Placeholder sample data and logic
      // Assuming state info was in the type which was excluded
      return sampleCreditUnions.filter(cu => cu.Credit_Union_Name === name);
    }
  },
  Mutation: {
    editPremiumAdjustment: (parent, { input }) => {
      // Placeholder sample data and logic
      const adjustment = samplePremiumAdjustments.find(pa => pa.id === input.id);
      if (adjustment) {
        Object.assign(adjustment, input);
      }
      return adjustment;
    }
  }
};

const sampleCreditUnions = [
  {
    id: "1",
    Contract_Number: "12345",
    Credit_Union_Name: "Sample Credit Union",
    premium_reports: [],
    premium_adjustments: [],
    single_premium_certificate_returns: []
  }
];

const samplePremiumAdjustments = [
  {
    id: "1",
    Product_Name: "Product A",
    Report_Period: "2023-04",
    Status: "Completed",
    Last_Update: "2023-04-15",
    Period_Ending: "2023-04-30",
    Adjustment_Type_to_the_Credit_Union: "Type 1",
    Comment: "Monthly Adjustment",
    Total_Borrower_Fees_: 100.0,
    CU_Retail_Rate: 5.0,
    Protected_Loan_Amount: 1000.0,
    Pay_Rate: 3.0,
    Premium_Due: 200.0,
    Total_Amount: 1300.0
  }
];

export default resolvers;