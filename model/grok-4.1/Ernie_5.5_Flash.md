# Grok-4.1 — findings by Ernie 5.5 Flash

- Source: xAI (`grok-4.1`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 (non-thinking standard mode; a Grok 4.1 Fast variant exists separately)
- **Short description:** xAI's November 2025 incremental update to Grok 4, focused on conversational quality, emotional intelligence, creative writing and factual accuracy rather than raw reasoning; it shipped with standard (non-thinking) and thinking-style modes.
- **Provider / access:** xAI API (`grok-4.1`), grok.com, X; OpenAI-compatible Chat Completions endpoint. Hosted only — proprietary weights.
- **Release / knowledge:** 2025-11-17; knowledge cutoff not published by xAI (rolling).
- **IDs:** `grok-4.1` (xAI API)
- **Context window:** 262,144 tokens (256K) input / 8,192 output per xAI's tracked provider listing; BenchLM's page lists 1M for the family, so treat 256K as the verified vendor figure and 1M as unconfirmed.
- **Modalities:** text + image input; text output. Reasoning modes selectable (standard non-thinking vs thinking), native tool use, structured outputs.
- **Pricing (as of 2026-11-12):** $3.00 / 1M input, $15.00 / 1M output (xAI, per LLM-Stats provider table; blended ≈ $3.57 per 1M at 20:1 in:out).
- **Architecture:** proprietary; not disclosed (Grok 4 lineage, no open weights).

### Raw benchmarks found

Agent / tool use:

- ResearchClawBench: **13.5%** (run by ResearchClawBench; the only public agentic row BenchLM lists for this model)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found for Grok 4.1 itself** (Grok 4 figures are lineage data, not this checkpoint)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- EQ-Bench: **1586 Elo** — xAI release claim, +100 Elo over the previous generation (emotional-intelligence, not reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **not ranked** (BenchLM: 1 of 815 benchmarks covered, overall not computed)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** (xAI claims improved factual accuracy / fewer hallucinations in the release post, no number published)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No MRCR / RULER / GraphWalks numbers published for Grok 4.1; the 256K window is vendor-listed without a retrieval table.

### Normalized scores (1–100)

- **Tool use: 45/100.** Only one public agentic row exists (ResearchClawBench 13.5%), and no Terminal-Bench, Tau3, GDPval or MCP benchmark is published for this checkpoint; the score reflects an unproven agent rather than a measured weak one.
- **Reasoning: 58/100.** xAI positions 4.1 as a conversational-quality release, not a reasoning release; with no GPQA/HLE/Index number and a non-thinking default, the score sits mid-band, with EQ-Bench 1586 Elo counting only as an emotional-intelligence signal.
- **Context window: 72/100.** 262,144 tokens input / 8,192 output, inside the 200K–500K band; the unverified 1M family claim and the small 8K max output are the caps.
- **Multimodal: 65/100.** Text + image input, text only out — the "image in" band (60–70), no video/PDF/audio.
- **Coding: 48/100.** No coding benchmark of any kind is published for Grok 4.1; the score is a conservative placeholder for a general flagship with unmeasured code ability, not a measured result.
- **Cost efficiency: 60/100.** $3.00/$15.00 per 1M is frontier-tier pricing (roughly 3–4× the cost of the best value Chinese open-weight models); not counted toward Overall.
- **Overall Score: 58/100.** Mean of tool use 45, reasoning 58, context 72, multimodal 65, coding 48. Best fit: high-volume conversational, role-play and creative-writing workloads where EQ and tone matter; not a defensible pick for agentic coding or long-horizon tool use until agentic benchmarks appear.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12 UTC
- Method: public internet research (LLM-Stats provider table, BenchLM model page, xAI release coverage via DataCamp/36Kr); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [LLM-Stats — Grok-4.1 benchmarks, pricing & context window](https://llm-stats.com/models/grok-4.1-2025-11-17)
  - [BenchLM — Grok 4.1 (1 benchmark row, unranked)](https://benchlm.ai/models/grok-4-1)
  - [DataCamp — Grok 4.1: improvements in EQ, writing, reliability](https://www.datacamp.com/blog/grok-4-1)
  - [36Kr — xAI unveils Grok 4.1 (EQ-Bench 1586 Elo)](https://eu.36kr.com/en/p/3557787373288329)
  - [AI Wiki — Grok 4.1](https://aiwiki.ai/wiki/grok_4_1)