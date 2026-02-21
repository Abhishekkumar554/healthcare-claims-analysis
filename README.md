#  Healthcare Claims Analysis

##  Project Overview
The Healthcare Claims Analysis project focuses on analyzing health insurance claim data using the MongoDB Aggregation Framework. The objective is to extract meaningful insights from raw claims data to support data-driven decision-making for insurance providers and healthcare organizations.

This project demonstrates how NoSQL databases can be used to efficiently process and analyze structured healthcare claim records.

---

##  Problem Statement
Insurance companies handle large volumes of healthcare claims daily. Identifying high-cost hospitals, common diseases, claim trends, and provider performance is essential for:

- Cost optimization
- Risk assessment
- Fraud detection
- Business strategy planning

This project analyzes claim data to uncover such insights using MongoDB aggregation pipelines.

---

##  Tech Stack
- MongoDB
- MongoDB Aggregation Framework
- JSON Dataset
- Git & GitHub

---

##  Dataset Description
The dataset contains healthcare insurance claim records with fields such as:

- Patient ID
- Hospital Name
- Disease
- Claim Amount
- Claim Date
- Insurance Provider

### Sample Record
```json
{
  "patient_id": 101,
  "hospital": "Apollo Hospital",
  "disease": "Diabetes",
  "claim_amount": 45000,
  "claim_date": "2023-05-12",
  "insurance_provider": "HDFC Ergo"
}
