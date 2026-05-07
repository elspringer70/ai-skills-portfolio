# Example Output

## 1. Summary

Add an income verification step before users can accept a pre-qualified credit offer. The flow should clarify that the offer is not final until verification is complete, support approved, rejected, and manual review outcomes, and launch behind a feature flag.

## 2. Recommended Epic

**Epic title:** Add income verification before credit offer acceptance

**Epic description:**  
Introduce a required income verification step between offer selection and final offer confirmation. The experience should reduce user confusion, support provider return states, and create the events needed for funnel tracking and support visibility.

**Goal:**  
Ensure users understand that pre-qualified offers are conditional until income verification is complete.

**Success metric:**  
Reduce support tickets related to "guaranteed approval" confusion after offer acceptance.

**In scope:**

- Confirmation step before verification
- Provider handoff and return handling
- Approved, rejected, and manual review states
- Analytics events for start and completion
- Feature flag configuration
- Compliance-approved copy

**Out of scope:**

- Changes to the pre-qualification form
- New verification vendor selection
- Final credit decision model changes

## 3. User Stories

### Story 1: Show income verification confirmation before provider handoff

**Suggested JIRA title:** Show income verification confirmation before accepting offer

**User story:**  
As a pre-qualified user, I want to understand that income verification is required before my offer is final so that I know what to expect before continuing.

**Problem being solved:**  
Users currently may interpret a pre-qualified offer as guaranteed approval.

**Acceptance criteria:**

- When a user clicks "Accept offer," the app displays a confirmation step before launching verification.
- The confirmation step explains that the offer is conditional until income verification is complete.
- The user can continue to verification from the confirmation step.
- The user can cancel or return to the offer screen without starting verification.
- User-facing copy is configurable or easily editable for compliance review.
- The confirmation step only appears when the income verification feature flag is enabled.

**Edge cases:**

- User refreshes the page on the confirmation step.
- User returns to the offer screen without starting verification.
- Feature flag is disabled after the user has already seen the confirmation step.

**Dependencies:**

- Compliance-approved copy
- Final design for confirmation step
- Feature flag setup

**Risk level:** Medium

**Suggested owner:** Product

### Story 2: Handle approved verification result

**Suggested JIRA title:** Route approved income verification users to final offer details

**User story:**  
As a user whose income is verified, I want to continue to final offer details so that I can complete the offer acceptance flow.

**Acceptance criteria:**

- When the provider returns an approved result, the app routes the user to final offer details.
- The app stores or references the approved verification status.
- The user does not see the verification confirmation step again after approval.
- The app records a verification completion event with status `approved`.

**Edge cases:**

- Provider returns approved status after a delayed callback.
- User closes the provider flow and returns later.

**Dependencies:**

- Provider result mapping
- Analytics event schema

**Risk level:** Medium

**Suggested owner:** Engineering

### Story 3: Handle rejected verification result

**Suggested JIRA title:** Show rejected income verification state

**User story:**  
As a user whose income cannot be verified, I want a clear explanation so that I understand why I cannot continue with the offer.

**Acceptance criteria:**

- When the provider returns a rejected result, the app displays a rejection state.
- The rejection state explains that income could not be verified.
- The user is not allowed to continue to final offer details.
- The app records a verification completion event with status `rejected`.
- Copy is reviewed by compliance before launch.

**Edge cases:**

- User retries verification if retry is allowed.
- Provider returns incomplete data with a rejected status.

**Dependencies:**

- Compliance-approved rejection copy
- Product decision on retry behavior

**Risk level:** High

**Suggested owner:** Product

### Story 4: Handle manual review verification result

**Suggested JIRA title:** Add manual review state for income verification

**User story:**  
As a user whose verification requires manual review, I want to know what happens next so that I am not left waiting without context.

**Acceptance criteria:**

- When the provider returns a manual review result, the app displays a pending review state.
- The state tells the user that review may take additional time.
- The user is not routed to final offer details while manual review is pending.
- The app records a verification completion event with status `manual_review`.
- The state includes support-safe language approved by compliance.

**Edge cases:**

- Manual review later changes to approved.
- Manual review later changes to rejected.
- User returns to the app while review is still pending.

**Dependencies:**

- New API status for manual review
- Notification or follow-up ownership
- Compliance-approved pending copy

**Risk level:** High

**Suggested owner:** Engineering

## 4. Engineering Tasks

- Add feature flag for income verification gate.
- Update offer acceptance flow to insert verification confirmation step.
- Extend verification status model to support `manual_review`.
- Map provider responses to internal statuses: `approved`, `rejected`, and `manual_review`.
- Add analytics events for `verification_started` and `verification_completed`.
- Add return-state handling for users who close the provider flow.
- Add QA test cases for feature flag on and off.
- Prepare internal release notes for support and operations.

## 5. Open Questions

**Product:**

- Should users be allowed to retry after rejected verification?
- What should happen if manual review later becomes approved or rejected?
- Should users receive an email or in-app notification after manual review completes?

**Design:**

- What are the final empty, failure, rejected, and manual review states?
- Is the confirmation step a modal, full page, or inline step?

**Engineering:**

- Does the existing provider integration support delayed status updates?
- Where should manual review status live in the data model?
- How should the app recover if the provider callback fails?

**Compliance:**

- What exact language is required to explain conditional offers?
- What language is acceptable for rejected verification?

**Data:**

- What event properties are required for verification start and completion?
- Should manual review be tracked as completed or pending?

**Support or Operations:**

- What should support agents see when a user is in manual review?
- Is there an SLA for manual review follow-up?

## 6. Risks and Mitigations

| Risk | Type | Mitigation |
| --- | --- | --- |
| Users misunderstand pre-qualified offers as final offers | Product / Compliance | Add clear pre-verification copy reviewed by compliance |
| Existing flow assumes binary verification status | Technical | Add explicit `manual_review` status before launch |
| Users get stuck in manual review without follow-up | Operational | Define notification, SLA, and support visibility before release |
| Rejected users may need adverse-action compliant language | Compliance | Route all rejection copy through compliance review |
| Analytics events may be inconsistent across provider outcomes | Data | Define required event names and status values before implementation |

## 7. Suggested JIRA Fields

**Issue type:** Epic with linked stories and tasks  
**Priority:** High  
**Labels:** `income-verification`, `credit-offer`, `compliance-review`, `feature-flag`  
**Components:** Offer Flow, Verification, Analytics, Compliance  
**Affected user segment:** Pre-qualified credit offer users  
**Dependencies:** Compliance copy approval, provider status mapping, design completion  
**Sprint readiness:** Needs Clarification
