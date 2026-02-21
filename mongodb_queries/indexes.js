// Create index on hospital field
db.claims.createIndex({ hospital: 1 })

// Create index on claim_date field
db.claims.createIndex({ claim_date: 1 })

// Compound index
db.claims.createIndex({ hospital: 1, claim_date: -1 })
