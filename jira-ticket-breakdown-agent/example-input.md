# Example Input

## Context

We want to add income verification before users can accept a pre-qualified credit offer in our fintech app.

Today, users can see an estimated offer after completing a short eligibility form. Compliance wants us to make it clearer that the offer is not final until verification is complete. Engineering said we can use the existing verification provider, but we may need a new API status because the provider sometimes returns "manual review" instead of approved or rejected.

## Stakeholder Notes

- Product wants to reduce user confusion around why an offer changes after verification.
- Compliance wants clearer language before the user continues.
- Support has seen tickets where users thought they were guaranteed approval.
- Engineering says the current offer flow assumes a binary verification result.
- Data wants an event when users start verification and when verification completes.
- Design has a draft modal, but the empty and failure states are not done.

## Desired User Experience

When a user clicks "Accept offer," they should see a confirmation step explaining that income verification is required. After they continue, they complete verification through our provider. When they return to the app, they should see one of these states:

- Approved: continue to final offer details
- Rejected: explain that we cannot verify income
- Manual review: tell the user we need more time and will notify them

## Constraints

- This should launch behind a feature flag.
- We need internal release notes before launch.
- We should not change the pre-qualification form in this release.
- Compliance must approve all user-facing copy.
