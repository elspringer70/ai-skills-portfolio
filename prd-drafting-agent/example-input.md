# Example Input

## Context

We want to add AI-powered transaction categorization to our personal finance app. Today, users see a raw transaction list with merchant names and amounts, but categories are inconsistent because some come from the bank feed and some are manually set by users.

## Stakeholder Notes

- Product wants users to understand where their money is going without manually editing every transaction.
- Data says we can classify transactions with a model, but confidence varies by merchant and transaction type.
- Support says users get frustrated when categories are wrong and may not know how to fix them.
- Compliance wants us to avoid suggesting that categories are financial advice.
- Engineering wants this behind a feature flag and prefers not to rewrite the existing transaction pipeline.
- Design wants to show a lightweight "AI suggested" label, but has not finalized the correction flow.

## Desired Experience

When users open their transaction list, they should see suggested categories for uncategorized transactions. If the model is confident, the category can be shown directly. If confidence is low, the app should show an "uncategorized" state and prompt the user to choose a category.

Users should be able to correct an AI-suggested category. Corrections should be saved and used to improve future suggestions for that user if possible.

## Constraints

- Launch behind a feature flag.
- Do not change the bank feed integration in this release.
- Do not position categorization as financial advice.
- Track when categories are suggested, accepted, or corrected.
- Support needs internal notes before launch.
