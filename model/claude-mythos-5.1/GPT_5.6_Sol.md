# Claude Mythos 5.1 — findings by GPT 5.6 Sol

- Source: Anthropic/Claude Mythos 5.1
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** The Project Glasswing, invite-only deployment of the same underlying model as Claude Fable 5.1, with safeguards tailored for vetted cybersecurity and life-science work.
- **Provider / access:** Claude API (`claude-mythos-5-1`), AWS Bedrock (`anthropic.claude-mythos-5-1`), Google Cloud, and Microsoft Foundry; access is limited to approved Project Glasswing participants.
- **Release / knowledge:** Released 2026-09-01; reliable and training-data cutoff June 2026.
- **IDs:** `anthropic/claude-mythos-5-1`; no public or free access.
- **Context window:** 1,000,000 tokens with 128,000 maximum output.
- **Modalities:** Text and image input; text output; adaptive always-on thinking, controllable effort, and tool use.
- **Pricing (as of 2026-10-04):** $10/1M input, $50/1M output, $12.50 five-minute cache writes, $20 one-hour cache writes, and $0.25 cache reads; Batch API is 50% off input/output. Default safety monitoring retains data for 30 days.
- **Architecture:** Proprietary and identical underlying model to Claude Fable 5.1; parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** for Mythos 5.1 (Anthropic); Fable 5.1 scores 55.8%, with Anthropic attributing the gap to safeguard interventions.
- Terminal-Bench 2.1: no Mythos-specific verified public score found; the same underlying Fable model scores **91.4%** in Artificial Analysis.
- OSWorld 2.0: no Mythos-specific public score found; Fable scores **77.9%** partial / **41.7%** strict.
- GDPval-AA v2: no Mythos-specific public score found; Fable scores **1853 Elo**.

Reasoning / knowledge:

- HLE: no Mythos-specific number found; same-model Fable results are **59.1%** independent no-tools and **65.0%** vendor-reported with tools.
- GPQA Diamond: no Mythos-specific number found; same-model Fable independently scores **93.43%**.
- ARC-AGI-2: no Mythos-specific number found; same-model Fable scores **90.0%**.

Coding:

- Terminal-Bench 4.0: **60.9%** (Anthropic, Mythos-specific).
- LiveCodeBench: no Mythos-specific result found; same-model Fable independently scores **90.52%**.
- CursorBench 3.2: no Mythos-specific result found; same-model Fable scores **73.4%** at max effort in SpaceXAI's evaluation.
- SWE-bench Verified / DeepSWE / SciCode: no verified public Mythos-specific score found.

Long context:

- No verified public Mythos-specific MRCR/RULER score found; the documented window is 1M tokens.

Multimodal:

- Text and image input are documented; no verified public Mythos-specific multimodal benchmark was found, and native audio/video input is not documented.

Sources: [Anthropic Mythos product page](https://www.anthropic.com/claude/mythos), [Anthropic Fable/Mythos announcement and benchmark table](https://www.anthropic.com/claude-fable-and-mythos-5-1), and [Claude Platform specifications](https://platform.claude.com/docs/en/models/fable-5-1/whats-new-fable-5-1).

### Normalized scores (1–100)

- **Tool use: 98/100.** A 60.9% Terminal-Bench 4.0 result and the underlying model's broader agent record indicate exceptional agency, with restricted access limiting independent validation.
- **Reasoning: 96/100.** Identical underlying weights to Fable 5.1 support frontier HLE, GPQA, and ARC performance, while the absence of Mythos-specific independent runs caps confidence.
- **Context window: 94/100.** The 1M-token window and long-horizon design are excellent, but no public retrieval measurement was found.
- **Multimodal: 68/100.** Text and image understanding are supported, while native audio/video and broad public multimodal evidence are absent.
- **Coding: 97/100.** The Mythos-specific Terminal-Bench 4.0 lead and Fable-equivalent coding capability place it near the top, subject to limited-access verification.
- **Cost efficiency: 54/100.** Cheap cache reads and batch discounts help, but $10/$50 pricing and invite-only access substantially limit value.
- **Overall Score: 91/100.** Half-up mean of the five quality dimensions; best for vetted high-end cyber, life-science, coding, and research agents requiring fewer safeguard interruptions.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-04
- Method: Fresh public internet research using official Anthropic documentation; same-model Fable evidence is explicitly labeled and scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
