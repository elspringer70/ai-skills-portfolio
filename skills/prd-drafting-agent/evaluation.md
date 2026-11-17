# Evaluation

Use this rubric to judge whether the PRD Drafting Agent produced a useful, trustworthy product requirements document.

## Evaluation Criteria

Score each category from 1 to 5.

### 1. Problem Clarity

The PRD should clearly explain the user problem and why it matters.

**Strong output:**

- Identifies the current state
- Explains the user pain point
- Connects the feature to a business or product goal
- Uses evidence from the input

**Weak output:**

- Starts with a solution without explaining the problem
- Uses generic language
- Misses why the work matters now

### 2. Scope Control

The PRD should separate goals, non-goals, assumptions, and open questions.

**Strong output:**

- Defines what is in scope
- Clearly names what is out of scope
- Labels assumptions honestly
- Avoids inventing unsupported requirements

**Weak output:**

- Expands scope beyond the input
- Treats assumptions as facts
- Omits non-goals

### 3. Requirement Quality

Requirements should be specific, actionable, and useful for downstream design and engineering.

**Strong output:**

- Uses clear requirement IDs
- Includes rationale
- Includes testable acceptance criteria
- Covers important edge cases

**Weak output:**

- Produces vague requirements
- Omits acceptance criteria
- Combines unrelated behaviors into one requirement

### 4. Cross-Functional Completeness

The PRD should consider the teams needed to launch the feature successfully.

**Strong output:**

- Captures design, engineering, data, compliance, and support dependencies when relevant
- Identifies launch and operational needs
- Makes review ownership clear

**Weak output:**

- Focuses only on product language
- Misses obvious dependencies
- Ignores support, compliance, or analytics implications

### 5. Metrics and Analytics

The PRD should define success and identify what needs to be tracked.

**Strong output:**

- Includes a primary success metric
- Includes secondary and guardrail metrics
- Recommends relevant event tracking
- Connects metrics to feature goals

**Weak output:**

- Says "improve engagement" without defining measurement
- Omits guardrails
- Recommends events unrelated to the user journey

### 6. Risk and Mitigation Quality

The PRD should surface meaningful risks and pair them with practical mitigations.

**Strong output:**

- Identifies product, technical, compliance, user experience, and operational risks
- Provides concrete mitigations
- Flags risks that must be resolved before launch

**Weak output:**

- Lists generic risks
- Provides vague mitigations
- Misses sensitive or regulated areas

### 7. Readability

The PRD should be concise, structured, and easy for a cross-functional team to review.

**Strong output:**

- Uses clear headings
- Avoids unnecessary jargon
- Keeps sections scannable
- Produces text that can be pasted into a doc system

**Weak output:**

- Is too long without adding clarity
- Buries decisions in prose
- Uses language that is hard to act on

## Scoring Guide

| Score | Meaning |
| --- | --- |
| 5 | Excellent; ready for cross-functional review with little or no editing |
| 4 | Strong; needs minor product review |
| 3 | Usable; needs meaningful cleanup |
| 2 | Weak; misses important requirements or context |
| 1 | Not useful; unsafe, misleading, or too generic |

## Minimum Passing Standard

For portfolio-quality output, the skill should score at least:

- 4 in Problem Clarity
- 4 in Scope Control
- 4 in Requirement Quality
- 4 in Cross-Functional Completeness
- 3 in Metrics and Analytics
- 4 in Readability

## Test Cases

Evaluate the skill against at least three input types:

1. A vague product idea from a stakeholder
2. A messy meeting transcript
3. A compliance-sensitive fintech feature brief

## Red Flags

The output should be rejected or revised if it:

- Invents unsupported business rules
- Treats compliance assumptions as approved policy
- Omits non-goals for a broad feature
- Produces requirements that cannot be tested
- Fails to identify key dependencies
- Does not define success metrics
