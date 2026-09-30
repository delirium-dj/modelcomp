# Claude Sonnet 4 — findings by Kimi K3

- Source: Anthropic (`claude-sonnet-4-20250514`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's balanced Claude 4 model (launched alongside Opus 4), matching Opus on SWE-bench Verified at launch at a fraction of the price; first Claude generation with extended thinking + tool use and parallel tool calls. Now a legacy tier, superseded by Sonnet 4.5 → 5.
- **Provider / access:** Anthropic Claude API (Messages API), Amazon Bedrock, Google Cloud Vertex AI; hybrid reasoning (instant + extended thinking with tool use, beta at launch); also on claude.ai incl. free tier.
- **Release / knowledge:** Released 2025-05-22 (Anthropic "Introducing Claude 4"). Knowledge cutoff Mar 2025 (per Anthropic model docs).
- **IDs:** `anthropic/claude-sonnet-4` (API snapshot `claude-sonnet-4-20250514`). No Zen Free ID exists — paid tier.
- **Context window:** 200K tokens input / 64K max output (BenchLM + Anthropic platform docs).
- **Modalities:** Text + image in; text out. Extended thinking (reasoning) yes; tool calls yes (parallel execution); JSON/structured output via tool use.
- **Pricing (as of 2026-09-27):** $3.00 / $15.00 per 1M tokens in/out (paid; unchanged from announcement).
- **Architecture:** Proprietary; params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Tau-bench (original, extended thinking + tool use): reported at launch with prompt addendum + 100-step cap (Anthropic launch appendix); Tau2-Bench: **52.3%** (BenchLM, AA harness)
- Terminal-Bench 2.1: no verified public score found (Opus 4's 43.2% launch number is a different model)
- Tau3-Banking / GDPval-AA / Claw-Eval / MCP-Atlas: no verified public score found
- Launch note: 65% less shortcut/loophole behavior than Sonnet 3.7 on susceptible agentic tasks (Anthropic)

Reasoning / knowledge:

- GPQA Diamond: **70.0%** without extended thinking (Anthropic launch appendix); AA-GPQA Diamond 68.3% (BenchLM)
- MMMU: **72.6%**, MMMLU: **85.4%**, AIME: **33.1%** — all without extended thinking (Anthropic launch appendix)
- HLE: AA-HLE **4.3%** (BenchLM)
- LCR / AA-LCR: **44.0%** (BenchLM)
- CritPt: **1.1%** (BenchLM)
- Artificial Analysis Intelligence Index: **16.6**; BenchLM overall: **36.08 / #129 of 508** (15 of 486 benchmarks covered)
- Omniscience Accuracy / Hallucination Rate: **22.7% / 41.0%** (AA via BenchLM)

Coding:

- SWE-bench Verified: **72.7%** (Anthropic launch, simple scaffold; high-compute variant 80.2%)
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- AA-LCR 44.0% at 200K class; no MRCR/RULER reported

### Normalized scores (1–100)

- **Tool use: 65/100.** Tau2 52.3% with first-gen extended-thinking+tool-use and parallel calls is mid-band; capped by missing TB/Tau3/GDPval evidence for this exact model.
- **Reasoning: 70/100.** GPQA 70% no-thinking and MMMU 72.6% sit at the strong end of the 60–80% mid band; capped by AIME 33.1% and AA-HLE 4.3% (weak hard-reasoning showings).
- **Context window: 70/100.** 200K band base (=70); AA-LCR 44.0% is middling for its window.
- **Multimodal: 65/100.** Image in + text out (60–70 band); MMMU 72.6% / AA-MMMU-Pro 62.4% solid but no audio/video/PDF-native or non-text output.
- **Coding: 80/100.** SWE-bench Verified 72.7% was SOTA at launch (high-compute 80.2%); capped a year+ later by frontier models at 79–81%+ and missing LiveCodeBench/SciCode rows.
- **Cost efficiency: 58/100.** $3/$15 matches the methodology's ~60 anchor; legacy paid tier with no free ID.
- **Overall Score: 70/100.** (65+70+70+65+80)/5 = 70.0 → 70. Best fit: pinned legacy compatibility for mid-2025 agent/coding deployments; new work should default to later Sonnet versions.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-27
- Method: public internet research (Anthropic "Introducing Claude 4" launch post + benchmark appendix, BenchLM model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
