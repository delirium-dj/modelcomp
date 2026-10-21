# Claude Haiku 5.5 — findings by Muse Glimmer 30B

- Source: Anthropic/claude-haiku-5.5
- Date: 2026-10-20
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's fastest and most cost-efficient small model, built for high-volume subagents, summarization, classification and real-time experiences. 1M context, effort controls for cost/intelligence tuning.
- **Provider / access:** Anthropic Claude API `claude-haiku-5-5`; also Amazon Web Services, Google Cloud, Microsoft Foundry, and Claude Code. Free/Pro/Max/Team/Enterprise tier access on claude.ai.
- **Release / knowledge:** 2026-10-07 release; knowledge cutoff not publicly verified.
- **IDs:** `anthropic/claude-haiku-5-5`, `opencode/claude-haiku-5.5`
- **Context window:** 1,000,000 total tokens; max output 128K. Verified via Anthropic Haiku 5.5 page and meta.json.
- **Modalities:** Text, image, PDF in; text out. No audio/video input/output reported.
- **Pricing (as of 2026-10-20):** $0.10 / 1M input / $0.50 / 1M output for prompts ≤100K; $0.50 / 1M input / $2.50 / 1M output for prompts >100K. Prompt cache read $0.01 / $0.05 / 1M, write $0.125 / $0.625 / 1M. Paid.
- **Architecture:** proprietary

### Raw benchmarks found

> List measured numbers with source for traceability.

Agent / tool use:

- OSWorld 2.1 offline subset: **72.4%** (Anthropic Claude Haiku 5.5 announcement 2026-10-07, computer use)
- Terminal-Bench 4.0 agentic coding: **39.2%** (Anthropic Claude Haiku 5.5 announcement 2026-10-07)
- GDPval-AA v2.1 knowledge work: **1620** Elo (Anthropic Claude Haiku 5.5 announcement 2026-10-07)
- AA-Briefcase v1.1: **1578** Elo (Anthropic Claude Haiku 5.5 announcement 2026-10-07)
- Chartography visual reasoning no tools: **46.4%** (Anthropic Claude Haiku 5.5 announcement 2026-10-07)

Reasoning / knowledge:

- Humanity's Last Exam no tools: **45.9%** (Anthropic Claude Haiku 5.5 announcement 2026-10-07)
- Humanity's Last Exam with tools: **57.4%** (Anthropic Claude Haiku 5.5 announcement 2026-10-07)
- GDPval-AA v2.1: **1620** Elo (see above)
- AA-Briefcase v1.1: **1578** Elo (see above)
- GPQA Diamond: no verified public score found

Coding:

- Terminal-Bench 4.0: **39.2%** (see above)
- FrontierCode 1.1 Main: **46.4%** (Anthropic Claude Haiku 5.5 announcement 2026-10-07)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found

Long context:

- Long-context retrieval / GraphWalks / RULER / MRCR at 1M: no verified public score found

### Normalized scores (1–100)

- **Tool use: 62/100.** OSWorld 2.1 72.4% offline shows solid computer use; Terminal-Bench 4.0 39.2% caps agentic terminal coding.
- **Reasoning: 58/100.** Humanity's Last Exam 45.9% no tools / 57.4% with tools indicates moderate multidisciplinary reasoning; GDPval-AA 1620 Elo supports knowledge work.
- **Context window: 85/100.** 1M total / 128K output verified; no measured long-context retrieval reported.
- **Multimodal: 45/100.** Image/PDF in, text out with Chartography 46.4% no tools; no audio/video.
- **Coding: 55/100.** Terminal-Bench 39.2% and FrontierCode 46.4% show capable subagent coding but below frontier.
- **Cost efficiency: 95/100.** $0.10/$0.50 per 1M for ≤100K prompts is among the lowest API pricing.
- **Overall Score: 61/100.** Mean of five quality dims (Tool 62 + Reasoning 58 + Context 85 + Multimodal 45 + Coding 55) /5 = 61.0. Best fit for high-volume subagents, summarization, classification and real-time tasks.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
