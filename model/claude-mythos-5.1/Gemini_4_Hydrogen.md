# Claude Mythos 5.1 — findings by Gemini 4 Hydrogen

- Source: Anthropic (`claude-mythos-5-1`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's limited-availability frontier model (same underlying model as Claude Fable 5.1, with permissive cybersecurity and life-sciences safeguards for organizations verified through Anthropic's Cyber Verification Program and Life Sciences Verification Program).
- **Provider / access:** Anthropic Messages API (`claude-mythos-5-1`), Amazon Bedrock (`anthropic.claude-mythos-5-1`), Google Cloud (`claude-mythos-5-1`), Microsoft Foundry (`claude-mythos-5-1`).
- **Release / knowledge:** 2026-09-01 release; reliable knowledge cutoff Jun 2026.
- **IDs:** `anthropic/claude-mythos-5-1` (no Free ID on OpenCode Zen)
- **Context window:** 1M tokens input / 128K tokens max output, verified via Anthropic Claude Mythos 5.1 docs.
- **Modalities:** Text and image input; text output; adaptive reasoning (always on, default effort `high`); tool calls supported.
- **Pricing (as of 2026-11-14):** $10.00 / 1M input tokens, $50.00 / 1M output tokens ($0.25/MTok cache read, $12.50/MTok 5m cache write, $20/MTok 1h cache write; Batch API 50% off).
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 (**agentic coding/tool use**): **60.9%** (Mythos 5.1; Anthropic announcement; Fable 5.1 scored 55.8%)
- Terminal-Bench-Science 0.1 (**agentic scientific research**): **52.6%** (Fable 5.1, same underlying model; Anthropic announcement)
- GDPval-AA v2 (**knowledge work**): **1853 Elo** (Fable 5.1; Anthropic announcement)
- OSWorld 2.0 (**computer use**): **77.9% partial / 41.7% strict** (Fable 5.1; Anthropic announcement)
- AutomationBench (**business workflows**): **31.4%** (Fable 5.1; Anthropic announcement)
- CyScenarioBench (**cybersecurity**): **61.7%** (Mythos 5.1; Anthropic 5.2 announcement)
- CVE Rediscovery (**cybersecurity**): **78.3%** (Mythos 5.1; Anthropic 5.2 announcement)
- De novo binder design 24 hr (**protein design**): **79.1** (Mythos 5.1; Anthropic 5.2 announcement)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE (Humanity's Last Exam): **60.9% (no tools) / 65.0% (with tools)** (Fable 5.1; Anthropic announcement)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- FrontierCode 2.0 (**agentic coding**): **32.4%** (Xhigh effort, Fable 5.1; Anthropic 5.2 announcement)
- FrontierSWE v2 (**agentic coding**): **56.3%** (Fable 5.1; Anthropic 5.2 announcement)
- CursorBench 3.2.0 (**agentic coding**): **73.4%** (Fable 5.1; Anthropic announcement)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found

Long context:

- no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 4.0 60.9% (Mythos 5.1), Terminal-Bench-Science 0.1 52.6%, GDPval-AA v2 1853 Elo, OSWorld 2.0 77.9% partial / 41.7% strict, and CVE Rediscovery 78.3%; capped by OSWorld strict completion (41.7%) and limited-availability access.
- **Reasoning: 93/100.** Humanity's Last Exam 60.9% (no tools) / 65.0% (with tools) and GDPval-AA v2 1853 Elo; capped by non-tool HLE ceiling (60.9%) and lack of public GPQA Diamond score.
- **Context window: 95/100.** 1M-token context window and 128K max output; capped by 1M tier (below 2M+ ultra-long-context models) and no public MRCR/RULER retrieval score.
- **Multimodal: 80/100.** Text and image input with strong vision/computer-use (OSWorld 2.0 77.9% partial); capped by no native audio or video input/output.
- **Coding: 94/100.** Terminal-Bench 4.0 60.9% (Mythos 5.1), CursorBench 3.2.0 73.4%, FrontierSWE v2 56.3%, and FrontierCode 2.0 32.4%; capped by FrontierCode 2.0 (32.4%) relative to 5.2-class models.
- **Cost efficiency: 40/100.** $10.00 / 1M input tokens and $50.00 / 1M output tokens ($0.25/MTok cache read); high frontier pricing caps cost efficiency despite the 75% cache-read discount.
- **Overall Score: 91/100.** Mean of the five quality dimensions (92, 93, 95, 80, 94). Best for verified organizations needing frontier agentic coding, cybersecurity (CVE Rediscovery 78.3%), and life-sciences research.

---

## Signature

- Provided by: **Gemini 4 Hydrogen (google/gemini-4-hydrogen)** — 2026-11-14 UTC
- Method: Public internet research via `webfetch` fallback (web search returned HTTP 402) on Anthropic official model docs and announcements. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Mythos 5.1 — Anthropic Docs](https://platform.claude.com/docs/en/models/mythos-5-1/overview)
  - [Claude Fable 5.1 and Claude Mythos 5.1 — Anthropic](https://www.anthropic.com/claude-fable-and-mythos-5-1)
  - [Claude Fable 5.2 and Mythos 5.2 — Anthropic](https://www.anthropic.com/claude-fable-and-mythos-5-2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
