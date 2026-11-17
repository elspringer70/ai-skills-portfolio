# Evaluation

Use this rubric to judge whether the JIRA Ticket Breakdown Agent produced useful, trustworthy output.

## Evaluation Criteria

Score each category from 1 to 5.

### 1. Product Understanding

The output should correctly identify the user problem, business goal, product outcome, and intended scope.

**Strong output:**

- Captures the real product intent
- Separates goals from implementation details
- Distinguishes in-scope from out-of-scope work

**Weak output:**

- Restates the input without synthesis
- Misses the user problem
- Adds unrelated product ideas

### 2. Ticket Quality

The generated tickets should be clear, focused, and actionable.

**Strong output:**

- Uses concise JIRA-style titles
- Breaks work into logical stories and tasks
- Avoids tickets that are too broad or too tiny

**Weak output:**

- Creates vague tickets
- Mixes multiple unrelated outcomes into one story
- Produces tickets that engineering cannot estimate

### 3. Acceptance Criteria

Acceptance criteria should be observable and testable.

**Strong output:**

- Uses concrete behavior
- Covers happy paths and important edge cases
- Gives QA enough detail to validate the work

**Weak output:**

- Uses subjective language like "works well" or "is user-friendly"
- Omits error states
- Cannot be tested without guessing

### 4. Risk and Dependency Detection

The output should surface important blockers before implementation begins.

**Strong output:**

- Identifies technical, product, compliance, data, and operational risks
- Pairs risks with practical mitigations
- Flags missing approvals or unresolved decisions

**Weak output:**

- Ignores obvious dependencies
- Treats unclear requirements as settled facts
- Misses regulated or sensitive product areas

### 5. Open Questions

Open questions should help the team resolve ambiguity quickly.

**Strong output:**

- Groups questions by owner or function
- Asks specific questions that unblock implementation
- Avoids questions already answered by the input

**Weak output:**

- Produces generic questions
- Asks too many low-value questions
- Fails to identify who should answer

### 6. JIRA Readiness

The output should be easy to convert into JIRA issues.

**Strong output:**

- Recommends issue type, priority, labels, components, and readiness
- Produces text that can be pasted into ticket descriptions
- Makes dependencies and owners visible

**Weak output:**

- Requires heavy editing before use
- Omits fields needed for ticket creation
- Does not indicate whether the work is ready for sprint planning

## Scoring Guide

| Score | Meaning |
| --- | --- |
| 5 | Excellent; ready to use with little or no editing |
| 4 | Strong; needs minor product review |
| 3 | Usable; needs meaningful cleanup |
| 2 | Weak; misses important details |
| 1 | Not useful; unsafe or misleading |

## Minimum Passing Standard

For portfolio-quality output, the skill should score at least:

- 4 in Product Understanding
- 4 in Ticket Quality
- 4 in Acceptance Criteria
- 3 in Risk and Dependency Detection
- 4 in JIRA Readiness

## Test Cases

Evaluate the skill against at least three input types:

1. A vague stakeholder request
2. A rough PRD or feature brief
3. A compliance-sensitive fintech workflow

## Red Flags

The output should be rejected or revised if it:

- Invents policies, legal rules, or business decisions
- Removes important constraints from the input
- Creates acceptance criteria that cannot be tested
- Fails to identify compliance review when regulated language is involved
- Treats open questions as confirmed requirements
