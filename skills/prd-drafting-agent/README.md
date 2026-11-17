# PRD Drafting Agent

A reusable AI skill for turning raw product ideas, stakeholder notes, meeting summaries, and discovery research into clear product requirements documents.

This skill helps product managers move from scattered context to a structured PRD that can support alignment, design exploration, engineering scoping, compliance review, and sprint planning.

## What It Does

The PRD Drafting Agent converts messy product input into a polished product requirements document. It identifies the user problem, business goal, requirements, non-goals, risks, metrics, open questions, and launch considerations.

It is designed for early-to-mid discovery, when the team needs enough structure to align on what should be built before breaking the work into JIRA tickets.

## Best Use Cases

- Drafting a new PRD from meeting notes
- Converting stakeholder requests into a product brief
- Turning customer feedback into product requirements
- Preparing a feature for design and engineering review
- Clarifying scope, non-goals, and success metrics
- Creating a public-safe portfolio artifact from synthetic product context

## Skill Goals

- Create consistent PRD structure
- Reduce ambiguity before engineering scoping
- Make assumptions and open questions visible
- Separate user needs from implementation details
- Capture compliance, operational, and analytics considerations
- Produce a document that can feed ticket breakdown, design work, and launch planning

## Included Files

- `prompt.md` - The reusable AI prompt for the skill
- `example-input.md` - A realistic sample input
- `example-output.md` - A polished sample PRD output
- `tools.md` - Suggested tool integrations
- `evaluation.md` - A rubric for judging PRD quality

## Recommended Workflow

1. Gather raw context from notes, stakeholder feedback, user research, support issues, and business goals.
2. Run the PRD Drafting Agent on the combined input.
3. Review assumptions, open questions, risks, and non-goals.
4. Share the draft with product, design, engineering, data, support, and compliance as needed.
5. Convert approved requirements into JIRA epics, stories, and tasks.

## Public Portfolio Framing

This skill can be shown publicly with synthetic product scenarios. A strong demo could show how the agent turns rough fintech stakeholder notes into a polished PRD for an AI-powered transaction categorization feature.

## Example Public Demo Scenario

> A personal finance app wants to add AI-generated transaction categories so users can better understand spending trends. Stakeholders want a fast launch, but support, compliance, and data teams have concerns about incorrect classifications and user trust.

## Output Format

The agent produces:

- Title
- Executive summary
- Background and problem
- Goals and non-goals
- Target users
- User stories
- Functional requirements
- Non-functional requirements
- Analytics and success metrics
- Dependencies
- Risks and mitigations
- Rollout plan
- Open questions

## Why This Skill Matters

PRDs often begin as scattered conversations. Without structure, teams lose time debating scope, intent, and success criteria. This skill helps product teams create a shared source of truth before work reaches design, engineering, or delivery planning.
