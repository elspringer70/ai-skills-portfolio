---
name: jira-ticket-breakdown
description: Turn PRDs, feature briefs, stakeholder notes, meeting transcripts, API behavior, compliance guidance, or vague backlog requests into human-reviewable epic, user story, engineering task, acceptance criteria, edge case, dependency, risk, and open-question drafts. Use when preparing work for backlog refinement, sprint planning, engineering review, or later manual entry into JIRA. Do not use this skill to claim that tickets were created or updated in JIRA.
---

# JIRA Ticket Breakdown

Create clear ticket drafts from product context. Preserve product intent, expose ambiguity, and make the result useful for product, engineering, design, QA, data, compliance, support, and operations review.

This first version is instruction-only. It does not require or use a JIRA integration. Produce Markdown drafts that a human can review, revise, and later enter into JIRA.

## Supporting Materials

Read only the materials needed for the current task:

- Read [the portfolio README](../../../skills/jira-ticket-breakdown-agent/README.md) for the workflow's purpose, use cases, and intended outputs.
- Read [the source prompt](../../../skills/jira-ticket-breakdown-agent/prompt.md) when detailed output guidance is needed.
- Read [the example input](../../../skills/jira-ticket-breakdown-agent/example-input.md) and [example output](../../../skills/jira-ticket-breakdown-agent/example-output.md) when calibrating ticket scope, detail, or formatting.
- Read [the evaluation rubric](../../../skills/jira-ticket-breakdown-agent/evaluation.md) before finalizing a substantial breakdown or when reviewing an existing draft.
- Read [the tool notes](../../../skills/jira-ticket-breakdown-agent/tools.md) only when discussing future integrations. Treat JIRA actions described there as possible future capabilities, not capabilities of this skill.

## Workflow

### 1. Understand the request

Extract the facts supplied by the user:

- User problem
- Business goal
- Desired product outcome
- Target user or affected segment
- In-scope behavior
- Explicit non-goals or constraints
- Known UX states
- API, data, analytics, security, compliance, support, or operational requirements
- Dependencies and approvals
- Requested delivery or rollout constraints

Separate confirmed facts from assumptions. Do not convert implied behavior into a confirmed requirement.

### 2. Decide whether clarification is required

Ask concise clarifying questions before drafting when an unknown would materially change:

- Epic or story boundaries
- Who the user is or what problem is being solved
- Core happy-path behavior
- Eligibility, pricing, approval, decisioning, or other business rules
- Data handling, permissions, security, or compliance obligations
- API contracts or system ownership
- What QA must observe to consider the work complete

Group questions by the person or function most likely to answer them. Ask only questions that unblock meaningful work.

If useful drafting can continue without an answer, proceed and label the uncertainty as an `Assumption` or `Open question`. Mark the relevant ticket and overall package as `Needs Clarification`. If the user explicitly requests a draft based on assumptions, comply, make every material assumption visible, and avoid presenting it as decided.

### 3. Define the epic

Create one recommended epic unless the input clearly contains multiple independent outcomes. Include:

- Epic title
- Description
- User problem
- Goal
- Proposed success metric, labeled as proposed if not supplied
- In scope
- Out of scope
- Confirmed constraints
- Assumptions

Do not invent a numeric target, deadline, policy, or business rule. A proposed metric may name what to measure without fabricating a target.

### 4. Break the work into user stories

Create stories around independently reviewable user or system outcomes. Avoid splitting work solely by frontend/backend layer when one vertical story can describe the outcome clearly.

For each story, include:

- Suggested ticket title
- User story in `As a [user], I want [capability], so that [benefit]` form when that form fits
- Problem or outcome
- Scope notes
- Acceptance criteria
- Edge cases
- Dependencies
- Assumptions specific to the story
- Open questions specific to the story
- Risk level: Low, Medium, or High, with a short reason
- Suggested review owner or participating function
- Readiness: Ready, Needs Clarification, or Blocked

Use system-oriented wording instead of forcing a user-story sentence for infrastructure, migration, observability, or compliance-enablement work.

### 5. Write testable acceptance criteria

Acceptance criteria must be observable, specific, and traceable to the supplied context.

Cover, where relevant:

- Entry conditions and feature-flag behavior
- Happy path
- Validation and error behavior
- Empty, loading, retry, timeout, and failure states
- Permissions and access control
- State transitions and persistence
- API response handling
- Analytics or audit events
- Accessibility expectations
- Compliance or copy approval gates
- Recovery when a user leaves and returns

Do not write subjective criteria such as "works well," "is intuitive," or "has a good user experience." Do not add behavior merely to make the criteria look complete; flag missing decisions instead.

### 6. Identify edge cases and dependencies

Distinguish edge cases from dependencies:

- Edge cases are unusual states, inputs, timing conditions, failures, or user paths the implementation must handle or explicitly defer.
- Dependencies are decisions, designs, systems, teams, vendors, approvals, migrations, or upstream work required for delivery.

Do not silently turn an edge case into a requirement. If expected behavior is unknown, state the case and ask who must decide it.

### 7. Add supporting engineering tasks

List tasks that support the stories but do not represent standalone user outcomes, such as:

- API or schema changes
- Data migration
- Feature flags
- Logging, analytics, audit history, and observability
- Permissions
- Error handling
- Test fixtures and QA setup
- Documentation, release notes, and support enablement

Label these as draft tasks. Do not prescribe implementation details that the input does not support.

### 8. Surface risks and open questions

Identify relevant product, UX, technical, data, security, compliance, operational, and support risks. Pair each risk with a practical mitigation or decision needed.

Group remaining open questions by:

- Product
- Design
- Engineering
- Data
- Security or Privacy
- Compliance or Legal
- QA
- Support or Operations

Omit empty groups.

### 9. Produce the ticket draft package

Use this order:

1. Summary
2. Confirmed context
3. Assumptions
4. Recommended epic
5. User stories
6. Supporting engineering tasks
7. Cross-cutting edge cases
8. Dependencies
9. Risks and mitigations
10. Open questions
11. Suggested JIRA metadata
12. Readiness assessment

Suggested JIRA metadata may include issue type, priority, labels, components, affected segment, and dependency links. Clearly label all recommendations as suggestions unless the user supplied them.

End with one of these readiness assessments:

- `Ready for human review`: The draft is coherent and remaining questions do not materially change scope or acceptance criteria.
- `Needs clarification`: Important decisions remain, but the draft is still useful for discussion.
- `Blocked`: A missing decision or source prevents a responsible breakdown.

Always state: `These are ticket drafts for human review; no JIRA issues were created or updated.`

## Quality Check

Before responding, verify that:

- Every story maps to the stated problem and epic scope.
- Acceptance criteria are observable and testable.
- Assumptions are explicit and are not presented as facts.
- Important failure states and edge cases are visible.
- Dependencies identify an owner or decision source when possible.
- Open questions are specific and routed to the likely answering function.
- Regulated or sensitive flows include the appropriate compliance, legal, privacy, or security review questions without offering legal conclusions.
- The output is concise enough to review and copy into a ticketing system.
- The response does not claim to have created, updated, or linked any JIRA issue.

For substantial work, use the linked evaluation rubric as a final self-review. Revise any category that would score below the rubric's minimum passing standard.
