# Grok 4.20 — findings by GLM 5.3 Flash

- Source: xAI (`grok-4.20-0309-reasoning`), researched from fresh public web sources; Artificial Analysis lists the publisher as "SpaceXAI" on its 2026 model pages, but the canonical publisher of the Grok line is xAI.
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20 (Reasoning) — the `0309 v2` reasoning build; AA also tracks a sibling "Grok 4.20 Multi-agent" variant.
- **Short description:** xAI's high-performance reasoning model with industry-leading output speed and agentic tool calling, marketed as combining the lowest hallucination rate on the market with strict prompt adherence. Now superseded — AA marks it deprecated and points to Grok 4.3+ / Grok 4.7 as successors.
- **Provider / access:** xAI first-party API (`grok-4.20-0309-reasoning`, Chat Completions-compatible); Artificial Analysis lists 2 API providers. No Free ID on OpenCode Zen was found as of 2026-09-25.
- **Release / knowledge:** released 2026-04-07 (Artificial Analysis FAQ, "0309 v2"); knowledge cutoff not disclosed in the sources found.
- **IDs:** `grok-4.20-0309-reasoning` (xAI direct, aliases include `grok-4.20`, `grok-4.20-reasoning-latest`, `grok-4.20-beta`). No Free ID exists on Zen as of research date — paid only.
- **Context window:** 1,000,000 tokens per docs.x.ai (first-party model page, verified 2026-09-25); Artificial Analysis reports 2.0M — sources disagree, first-party 1M taken as verified.
- **Modalities:** text + image in; text out; reasoning yes; function calling yes; structured outputs (JSON mode) yes; Batch API supported (billed at 20% discount); logprobs/top_logprobs silently ignored (grok-4.20 and newer).
- **Pricing (as of 2026-09-25):** paid — prompts <200k tokens: $1.25 in / $0.20 cached / $2.50 out per 1M; prompts ≥200k tokens: $2.50 / $0.40 / $5.00 per 1M (whole request billed at the higher rate). AA blended price $0.64/1M (7:2:1 cache-hit/input/output); Batch API at 20% off. No free tier, so no data-usage caveat applies.

### Raw benchmarks found

BenchLM coverage is partial (24 of 483 rows, updated 2026-09-24; its computed Overall 59.66 #43/507 is a tracker composite, not a vendor score). AA marks its Intelligence Index as an estimate with "independent evaluation forthcoming".

Agent / tool use:

- Terminal-Bench 2.0 (**agentic coding & terminal**): **47.1%** (BenchLM)
- Terminal-Bench 2.1 (Vals harness): **44.2%** (BenchLM)
- Gert Labs: **38.36%** (BenchLM)
- DeepSearchQA: **62.8%** (BenchLM)
- Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.5%** (BenchLM; Vals harness 88.6%)
- HLE (w/o tools): **31.6%** (BenchLM)
- ARC-AGI-2: **53.3%** (BenchLM)
- ARC-AGI-3: **0.1%** (BenchLM)
- MMLU-Pro (Vals): **86.3%** (BenchLM)
- Artificial Analysis Intelligence Index / BenchLM overall: **26 (estimated) / 59.66 (#43 of 507)** (AA #105/211; AA median 26)
- LCR / MLCR / CritPt / Omniscience Accuracy / Hallucination Rate: no verified public score found (vendor claims "lowest hallucination rate on the market" without a public number)

Coding:

- SWE-bench Verified: **76.7%** (BenchLM; Vals harness 72.2%)
- SWE-bench Pro: **51.8%** (BenchLM)
- LiveCodeBench: **84.3%** (BenchLM, Vals harness); LiveCodeBench Pro: **74.2%** (BenchLM)
- Vibe Code Bench: **4.06%** (BenchLM)
- DeepSWE / SciCode / AA-SciCode / Coding Index: no verified public score found

Long context:

- 1M window claimed (first-party); no MRCR / RULER / GraphWalks retrieval score reported. DeepSearchQA 62.8% is a search-grounding benchmark, not pure retrieval — provisional proxy only.

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench 2.0 47.1% / TB2.1 (Vals) 44.2% sit in the mid band and Gert Labs 38.36% is weak; missing Tau3 and GDPval-AA numbers prevent a higher score despite the tool-calling marketing.
- **Reasoning: 78/100.** GPQA Diamond 88.5%, ARC-AGI-2 53.3%, and MMLU-Pro 86.3% are strong; capped by the estimated AA Intelligence Index of 26, HLE 31.6% (w/o tools), and ARC-AGI-3 at 0.1%.
- **Context window: 95/100.** 1M verified on docs.x.ai lands in the ≥1M tier (95–100); 100 would require ≥98% measured retrieval at 512K+, which no source provides (AA's 2M claim noted as unverified).
- **Multimodal: 70/100.** Image input with strong MMMU-Pro 75.2% / CharXiv 60.9% / MedXpertQA (MM) 65.8% tops the +image-in band (60–70); no video/PDF/audio input and no non-text output cap it.
- **Coding: 78/100.** SWE-bench Verified 76.7% and LiveCodeBench 84.3% are strong; capped by Vibe Code Bench 4.06%, SWE-bench Pro 51.8%, and missing DeepSWE / SciCode verification.
- **Cost efficiency: 90/100.** Paid only ($1.25/$2.50 short-context, $0.64 blended per 1M) — below the ~88 reference point ($1.25/$4.25) in price, lifted to ~90 by the cheap output rate. Scored independently, never counted toward Overall.
- **Overall Score: 75/100.** (55 + 78 + 95 + 70 + 78) / 5 = 75.2 → 75 (half-up). Best fit: a fast, cheap 1M-context generalist with strong exam-style reasoning and coding — now deprecated in favor of Grok 4.3+/4.7, so choose it only for legacy ID consistency.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-25
- Method: public internet research (xAI docs, Artificial Analysis model page, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.8.md`, using the same headings.
