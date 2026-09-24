# gpt-oss-120b — findings by GLM 5.3 Flash

- Source: OpenAI (`openai/gpt-oss-120b`, Apache 2.0 open weights)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** gpt-oss-120b (reasoning "high" configuration measured by Artificial Analysis)
- **Short description:** OpenAI's open-weight August 2025 entry into the open-source space — a 117B-parameter MoE (5.1B active) under Apache 2.0, targeting research applications, on-premises deployments and custom fine-tuning workflows. Text-only with a modest 131K context window; well above average for its open-weight size class but far below frontier models.
- **Provider / access:** Apache 2.0 weights on Hugging Face (`openai/gpt-oss-120b`); hosted via ~20 API providers (median pricing $0.15/$0.59); OpenAI reference at `https://huggingface.co/openai`. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2025-08-05; knowledge cutoff 2024-05-31 (verified via Artificial Analysis).
- **IDs:** `openai/gpt-oss-120b` (open weights); hosted `gpt-oss-120b` per provider catalogs.
- **Context window:** 131,000 tokens (132.1K per tracker listings; ~197 A4 pages — verified via Artificial Analysis context-window page).
- **Modalities:** text input only; text output; reasoning yes (extended thinking / chain-of-thought, low/medium/high effort levels); tool calls (function calling); no image, audio or video input.
- **Pricing (as of 2026-09-24):** $0.15 / $0.59 per 1M in/out (median across providers, AA blended $0.18 per 1M; cache discount ~17%); weights free under Apache 2.0 (self-hosting requires your own GPUs).
- **Architecture:** 117B total / 5.1B active parameters (Mixture-of-Experts, router selects experts per token); Apache 2.0 license.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **1.6%** (airank.dev, unverified harness)
- Terminal-Bench, Tau3-Banking/Tau2-Bench, GDPval-AA, MCPAtlas, Claw-Eval, Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **78.3%** (airank.dev, unverified harness; strongest verified result)
- Artificial Analysis Intelligence Index: **12 / #9 of 65** open-weight-class models (Artificial Analysis model page, Sep 2026; well above the class median of 8)
- HLE: no verified public score found
- LCR / MLCR, CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- No verified public SWE-bench Verified/SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench or DeepSWE score found for this exact model (OpenAI's model-card figures were not retrievable in machine-readable form from the sources consulted)

Long context:

- No long-context retrieval reported (131K window claimed; no MRCR/RULER/GraphWalks value verified)
- Throughput: 184.1 tokens/second, TTFT 0.86s (median across providers, Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 50/100.** BrowseComp 1.6% is very low and no Terminal-Bench/Tau3/GDPval numbers were found — the score rests on thin evidence, conservative.
- **Reasoning: 62/100.** GPQA Diamond 78.3% is in the 60–80 mid band, but the AA Index of 12 sits below the 20–35 band used for modern reasoning models; the 2024 knowledge cutoff and small context reinforce the lower-mid placement.
- **Context window: 55/100.** 131K tokens maps to the 100K–200K tier (50–64); no measured retrieval.
- **Multimodal: 15/100.** Text-only in/out — no image, audio or video input per Artificial Analysis.
- **Coding: 55/100.** No verified public coding benchmarks for this exact model — score rests on thin evidence, conservative per the no-hallucination rule.
- **Cost efficiency: 96/100.** $0.15/$0.59 per 1M (blended $0.18) sits in the ~$0.10/$0.20 = 97–99 methodology band; free Apache 2.0 weights as an extra cost lever.
- **Overall Score: 47/100.** Mean of the five quality dims (50 + 62 + 55 + 15 + 55) / 5 = 47.4 → 47. Best-fit: a cheap open-weight base for self-hosted fine-tuning and research — not a competitor for frontier agentic, coding or multimodal work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-24
- Method: public internet research (Artificial Analysis model page, airank.dev, DuckDuckGo web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_OSS.md`, using the same headings.
