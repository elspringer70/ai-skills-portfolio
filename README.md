# AI Skills Portfolio

A portfolio of practical AI skills and reusable agents for product management, fintech, lending, compliance, and startup operations.

The project focuses on a simple question: how can AI turn recurring, high-context work into structured outputs that teams can review, refine, and use? Each skill is designed around a real workflow, with defined inputs, clear outputs, tool integrations, examples, and an evaluation standard.

This repository is intended for AI startup founders, product leaders, fintech operators, hiring managers, and technical PMs interested in applied AI systems rather than isolated prompts.

## Why I Am Building This

Much of product and operations work begins with messy context: meeting notes, stakeholder feedback, policy documents, API discussions, customer conversations, and incomplete requirements. The difficult part is rarely generating more text. It is identifying what matters, applying sound judgment, and producing an artifact another person can act on.

I am building this portfolio to explore how those judgment patterns can become reusable AI workflows. The goal is to create skills that are transparent, testable, and grounded in the way real teams work across product, engineering, compliance, support, sales, and leadership.

## Skills

The portfolio covers 12 practical workflows:

1. **Release Notes Writer** - Turns shipped work into release notes for customers, support, sales, and internal teams.
2. **JIRA Ticket Breakdown Agent** - Converts product context into engineering-ready stories, tasks, acceptance criteria, dependencies, and open questions.
3. **Fair Lending Risk Checker** - Reviews lending flows, customer-facing copy, and decision criteria for potential fair lending risk.
4. **Competitor Research Agent** - Produces structured product comparisons, positioning summaries, and opportunity areas from public research.
5. **Customer Email Drafter** - Drafts clear customer communications for launches, incidents, policy changes, and follow-ups.
6. **Meeting Notes to Action Items** - Extracts decisions, owners, deadlines, risks, and follow-up actions from meeting notes or transcripts.
7. **Product Requirements Generator** - Transforms product ideas and stakeholder context into structured PRDs with requirements, metrics, and rollout plans.
8. **API Docs Explainer** - Translates API documentation and engineering discussions into product-friendly behavior summaries and edge cases.
9. **Sales Call Follow-Up Agent** - Converts sales conversations into follow-up emails, objection summaries, next steps, and CRM updates.
10. **Financial Model Reviewer** - Reviews model assumptions, inconsistencies, scenario logic, and executive-level risks.
11. **LinkedIn Post Generator** - Turns product lessons, launch notes, and market observations into credible professional posts.
12. **Founder Outreach Researcher** - Creates focused founder and company research briefs with relevant personalization angles.

Detailed, repository-ready packages are currently available for:

- [JIRA Ticket Breakdown Agent](skills/jira-ticket-breakdown-agent/)
- [Product Requirements Generator](skills/prd-drafting-agent/)

The remaining skills are represented in the portfolio site and will be added as complete packages over time.

## How Each Skill Is Structured

Each completed skill follows the same format:

| File | Purpose |
| --- | --- |
| `README.md` | Explains the workflow, use cases, goals, and intended audience. |
| `prompt.md` | Contains the reusable agent instructions and expected output format. |
| `example-input.md` | Provides realistic source material for testing the skill. |
| `example-output.md` | Shows what a strong, structured result should look like. |
| `tools.md` | Describes relevant integrations and possible production workflows. |
| `evaluation.md` | Defines a rubric for reviewing accuracy, completeness, clarity, and usefulness. |

This structure makes each agent easier to understand, test, compare, and improve. It also separates the prompt itself from the examples and quality criteria needed to evaluate whether the workflow is genuinely useful.

## How to Use This Repository

1. Browse the [`skills/`](skills/) directory and choose a workflow.
2. Read the skill's `README.md` to understand its purpose and boundaries.
3. Use `prompt.md` as the base instructions for an AI assistant or agent.
4. Replace the sample material with your own context, keeping sensitive or regulated data out of public tools unless they are approved for that use.
5. Compare the result with `example-output.md` and score it using `evaluation.md`.
6. Review `tools.md` for ideas on connecting the workflow to systems such as JIRA, Confluence, GitHub, Slack, Google Docs, or CRM platforms.

The skills are designed as starting points. They should be adapted to the policies, terminology, data controls, and review practices of the team using them. Compliance-related agents are intended to support structured review, not replace legal or compliance judgment.

## Portfolio Site

The static site in [`portfolio-site/`](portfolio-site/) presents the full portfolio and can be opened locally by loading `portfolio-site/index.html` in a browser. It uses plain HTML, CSS, and JavaScript with no external dependencies.

## Project Status

This is an evolving portfolio. The current focus is building complete skill packages, testing them against realistic examples, and improving their evaluation criteria so that each workflow demonstrates both practical AI implementation and product judgment.
