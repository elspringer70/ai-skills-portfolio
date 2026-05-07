# JIRA Ticket Breakdown Agent

A reusable AI skill for turning messy product context into clear, engineering-ready JIRA tickets.

This skill helps product managers, founders, and delivery teams convert raw notes, stakeholder feedback, PRD fragments, meeting transcripts, or vague feature requests into well-scoped tickets with acceptance criteria, open questions, dependencies, and implementation risks.

## What It Does

The JIRA Ticket Breakdown Agent takes unstructured product input and produces a structured ticket package that is ready for backlog grooming, sprint planning, or engineering review.

It is designed for situations where the product intent exists, but the work is not yet crisp enough for a team to build.

## Best Use Cases

- Breaking a PRD into epics, stories, and tasks
- Turning stakeholder requests into implementation-ready tickets
- Cleaning up vague backlog items
- Preparing sprint planning materials
- Identifying missing requirements before engineering handoff
- Translating compliance, API, or workflow constraints into ticket-level details

## Skill Goals

- Reduce ambiguity before tickets reach engineers
- Make acceptance criteria explicit and testable
- Surface dependencies, risks, and unanswered questions
- Preserve product intent while improving execution detail
- Create consistent ticket structure across teams

## Included Files

- `prompt.md` - The reusable AI prompt for the skill
- `example-input.md` - A realistic sample input
- `example-output.md` - A polished sample output
- `tools.md` - Suggested tool integrations
- `evaluation.md` - A rubric for judging output quality

## Recommended Workflow

1. Paste raw product context into the skill.
2. Ask the agent to identify the core user problem and product goal.
3. Have the agent break the work into epics, stories, and implementation tasks.
4. Review open questions with product, design, engineering, compliance, or support.
5. Convert approved outputs into JIRA tickets.

## Public Portfolio Framing

This skill can be shown publicly using synthetic product examples. A strong demo could show how the agent takes messy notes from a fake fintech product meeting and turns them into a clean ticket breakdown with acceptance criteria, edge cases, and compliance review flags.

## Example Public Demo Scenario

> A fintech app wants to add an income verification step before users can unlock a credit offer. Stakeholders have provided mixed requirements across product, compliance, support, and engineering. The agent turns those notes into a structured backlog.

## Output Format

The agent produces:

- Executive summary
- Assumptions
- Epic recommendation
- User stories
- Engineering tasks
- Acceptance criteria
- Edge cases
- Dependencies
- Risks
- Open questions
- Suggested JIRA fields

## Why This Skill Matters

Poorly defined tickets create delays, rework, and frustrating handoffs. This skill acts as a product operations layer between messy discovery and clean delivery. It helps teams move faster without losing the judgment and nuance that product work requires.
