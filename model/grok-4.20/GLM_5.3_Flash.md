# Grok 4.20 — findings by GLM 5.3 Flash

- Source: xAI (`grok-4.20-0309-reasoning`), researched from fresh public web sources; Artificial Analysis lists the publisher as "SpaceXAI" on its 2026 model pages, but the canonical publisher of the Grok line is xAI.
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20 (Reasoning) — the `0309 v2` reasoning build; AA also tracks a sibling "Grok 4.20 Multi-agent" variant.
- **Short description:** xAI's high-performance reasoning model with industry-leading output speed and agentic tool calling, marketed as combining the lowest hallucination rate on the market with strict prompt adherence. Now superseded — AA marks it deprecated and points to Grok 4.3+ / Grok 4.7 as successors. BenchLM ranks it #56 of 889 (57.33).
- **Provider / access:** xAI first-party API (`grok-4.20-0309-reasoning`, Chat Completions-compatible); Artificial Analysis lists 2 API providers. No Free ID on OpenCode Zen — paid only.
- **Release / knowledge:** released 2026-04-07 (Artificial Analysis FAQ, "0309 v2"); knowledge cutoff not disclosed in the sources found.
- **IDs:** `grok-4.20-0309-reasoning` (xAI direct, aliases include `grok-4.20`, `grok-4.20-reasoning-latest`, `grok-4.20-beta`).
- **Context window:** 1,000,000 tokens per docs.x.ai (first-party model page) — **BenchLM now lists 2M (2026-10-10), matching AA's earlier claim**; the first-party 1M stays primary with the 2M claim now dual-sourced but still unverified by retrieval measurement.
- **Modalities:** text + image in; text out; reasoning yes; function calling yes; structured outputs (JSON mode) yes; Batch API supported (billed at 20% discount); logprobs/top_logprobs silently ignored (grok-4.20 and newer).
- **Pricing (as of 2026-10-11):** paid — prompts <200k tokens: $1.25 in / $0.20 cached / $2.50 out per 1M; prompts ≥200k tokens: $2.50 / $0.40 / $5.00 per 1M (whole request billed at the higher rate). AA blended price $0.64/1M (7:2:1); Batch API at 20% off. No free tier.
- **Architecture:** proprietary; parameters undisclosed. The felloai deep-dive (found 2026-10-08) documents the 4-agent multi-agent architecture: Grok (coordinator), Harper (research), Benjamin (logic/math), Lucas (contrarian analysis) working in parallel to cross-verify outputs.

### Raw benchmarks found

> Second-pass verification (2026-10-11): the freshly fetched BenchLM page (updated 2026-10-10) reproduces every existing row identically (now attributed to Meta's Muse Spark comparison chart as the upstream source) and adds several new grounded/knowledge rows. Scores are carried, not moved.

Agent / tool use:

- Terminal-Bench 2.0: **47.1%** (corroborated); Terminal-Bench 2.1 (Vals): **44.2%** (corroborated); Gert Labs: **38.36%** (corroborated); DeepSearchQA: **62.8%** (corroborated)
- Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.5%** (corroborated; Vals 88.6%); HLE (w/o tools): **31.6%** (corroborated); ARC-AGI-2: **53.3%** (corroborated); ARC-AGI-3: **0.1%** (corroborated); MMLU-Pro (Vals): **86.3%** (corroborated)
- MedXpertQA (Text): **50.2%**; MedXpertQA (MM): **65.8%**; HealthBench Hard: **20.3%** (new rows)
- Artificial Analysis Intelligence Index / BenchLM overall: **26 (AA estimate) / 57.33 (#56 of 889, updated from the prior 59.66 #43/507 tracker composite)**
- The vendor's "lowest hallucination rate on the market" claim stands quantified at an **83% non-hallucination rate** (felloai, prior pass)

Coding:

- SWE-bench Verified: **76.7%** (corroborated; Vals 72.2%); SWE-bench Pro: **51.8%** (corroborated); LiveCodeBench: **84.3%** (Vals, corroborated); LiveCodeBench Pro: **74.2%** (corroborated); Vibe Code Bench: **4.06%** (corroborated)
- DeepSWE / SciCode / AA-SciCode / Coding Index: no verified public score found

Long context:

- 1M window (first-party; BenchLM/AA list 2M — conflict updated); no MRCR/RULER/GraphWalks retrieval score reported; DeepSearchQA 62.8% remains a provisional proxy only

Multimodal:

- MMMU-Pro: **75.2%**; CharXiv: **60.9%** (corroborated); ERQA: **54.1%**; SimpleVQA: **57.4%** (new rows); Design Arena Website: **1236** (OpenRouter)

### Normalized scores (1–100)

> Scores unchanged on the 2026-10-11 second pass: full row-by-row corroboration; the new grounded rows (ERQA 54.1, SimpleVQA 57.4, MedXpertQA 65.8/50.2, HealthBench Hard 20.3) all land inside the existing bands.

- **Tool use: 55/100.** Terminal-Bench 2.0 47.1% / TB2.1 (Vals) 44.2% sit in the mid band and Gert Labs 38.36% is weak; missing Tau3 and GDPval-AA numbers prevent a higher score despite the tool-calling marketing.
- **Reasoning: 79/100.** GPQA Diamond 88.5%, ARC-AGI-2 53.3%, and MMLU-Pro 86.3% are strong; the quantified 83% non-hallucination rate (industry-leading) adds a reliability point; capped by the estimated AA Intelligence Index of 26, HLE 31.6% (w/o tools), and ARC-AGI-3 at 0.1%.
- **Context window: 95/100.** 1M verified on docs.x.ai lands in the ≥1M tier (95–100) — the BenchLM/AA 2M listing is now dual-sourced but still retrieval-unverified; 100 would require ≥98% measured retrieval at 512K+.
- **Multimodal: 70/100.** Image input with MMMU-Pro 75.2% / CharXiv 60.9% / MedXpertQA (MM) 65.8% tops the +image-in band (60–70); no video/PDF/audio input and no non-text output.
- **Coding: 78/100.** SWE-bench Verified 76.7% and LiveCodeBench 84.3% are strong; capped by Vibe Code Bench 4.06%, SWE-bench Pro 51.8%, and missing DeepSWE/SciCode verification.
- **Cost efficiency: 90/100.** Paid only ($1.25/$2.50 short-context, $0.64 blended per 1M) — below the ~88 reference point ($1.25/$4.25) in price, lifted to ~90 by the cheap output rate. Scored independently, never counted toward Overall.
- **Overall Score: 75.4/100.** (55 + 79 + 95 + 70 + 78) / 5 = 377/5 = 75.4 — unchanged. Best fit: a fast, cheap 1M-context generalist with strong exam-style reasoning and coding — now deprecated in favor of Grok 4.3+/4.7, so choose it only for legacy ID consistency.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 citing Meta's Muse Spark comparison chart + Vals AI + ARC Prize, the prior 2026-10-08 pass on xAI docs/AA/BenchLM, felloai deep-dive from the prior pass; full row-by-row corroboration confirmed); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.8.md`, using the same headings.
