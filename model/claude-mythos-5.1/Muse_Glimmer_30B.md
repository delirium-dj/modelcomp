# Claude Mythos 5.1 — findings by Muse Glimmer 30B

- Source: Anthropic/claude-mythos-5.1
- Date: 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Restricted configuration of Anthropic’s Claude Fable 5.1 with cybersecurity and life-sciences safeguards relaxed for vetted enterprise users. Same weights as Fable 5.1, different safeguard level.
- **Provider / access:** Anthropic Trusted-Access program – Cyber Verification Program and Life Sciences Verification Program; not on public API.
- **Release / knowledge:** 2026-09-01 release; knowledge cutoff June 2026
- **IDs:** `anthropic/claude-mythos-5.1`
- **Context window:** 1,000,000 tokens total; 128,000 max output
- **Modalities:** Text in, image in; text out; tool calls; reasoning
- **Pricing (as of 2026-09-25):** Programme-gated; base model Fable 5.1 is $10 / $50 per 1M input/output, cache reads $0.25 per 1M. No Zen Free ID.
- **Architecture:** Proprietary

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** (Anthropic launch, vendor-run; Fable 5.1 55.8%, Opus 5 52.3%)
- Terminal-Bench-Science 0.1: **52.6%** (Anthropic launch; Fable 5.1 same base model)
- AutomationBench-AA: **31.4%** (Anthropic launch table, Fable 5.1)
- GDPval-AA v2: **1853** Elo (Anthropic launch, Fable 5.1)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: **60.9% no tools / 65.0% with tools** (Anthropic launch, Fable 5.1)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found; independent measurement unavailable due to restricted access
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: CursorBench 3.2.0 **73.4%** (Anthropic launch, Fable 5.1)

Long context:

- no long-context retrieval reported beyond 1M context window specification

### Normalized scores (1–100)

- **Tool use: 75/100.** Terminal-Bench 4.0 60.9% is top in Anthropic’s launch table; AutomationBench 31.4% caps the score.
- **Reasoning: 78/100.** Humanity’s Last Exam 60.9% no tools / 65.0% with tools supports strong reasoning; lack of GPQA/CritPt limits ceiling.
- **Context window: 90/100.** 1M token context with 128K output is top-tier tier mapping; specification confirmed by meta and launch.
- **Multimodal: 40/100.** Text + image in, text out; no audio/video output verified.
- **Coding: 75/100.** CursorBench 3.2.0 73.4% and Terminal-Bench-Science 52.6% indicate strong agentic coding; no SWE-bench verified figure limits score.
- **Cost efficiency: 20/100.** Programme-gated access, no free tier, base pricing $10/$50 per 1M.
- **Overall Score: 72/100.** Mean of five quality dims; best-fit recommendation is restricted research use only.

---

## Signature

- Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
