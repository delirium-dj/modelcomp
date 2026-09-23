# Kimi K2.8 Preview — findings by Laguna S 2.1

> Source: moonshotai/kimi-k2-8-preview (Moonshot AI), e.g. LLM Stats, ZenMux
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.8 Preview (Moonshot AI).
- **Short description:** Moonshot's mid-tier coding and agentic model, positioned between Kimi K2.7 Code and the flagship Kimi K3. Moonshot describes overall performance as "close to K3 with more efficient thinking"; supports adjustable thinking effort aligned with K3's reasoning tiers and a 1.05M-token context.
- **Provider / access:** Moonshot AI (`moonshotai/kimi-k2-8-preview`); Kimi Business API; 1 provider route. Chat Completions-compatible API.
- **Release:** 2026-09-14 (ZenMux publish time); llm-stats records the official release date as 2026-09-11, 2026 (MoonshotAI).
- **IDs:** `moonshotai/kimi-k2-8-preview`. noFreeId — no per-token free/Zen Free ID; access via Kimi membership plan (subscription) + paid per-token API ($1/$4/MTok).
- **Context window:** 1,048,576 (1.05M) total input tokens; max output not explicitly published (assumed ≤64K–128K). ≥1M tier; clears the 64K caveat. Verified by LLM Stats + ZenMux.
- **Modalities:** text + image input → text output (+image-in only; no video/audio verified).
- **Reasoning / tools:** Yes — adjustable thinking effort aligned with K3 reasoning tiers; tool calls and JSON mode supported.
- **Pricing (as of 2026-09-23):** $1.00 / $4.00 per 1M in/out; cache read $0.25/MTok (ZenMux live cache-hit 94.4%). No free per-token tier; Kimi membership plan is the consumption path.
- **Speed:** ~28.2 output tokens/second (ZenMux live 30-day P50); ~2.6s TTFT (ZenMux).
- **Architecture:** Proprietary; Moonshot "Kimi Delta Attention" architecture (hybrid linear attention) shared with the K3 family; parameter count for K2.8 specifically not disclosed.

### Raw benchmarks found

> Verified public numbers, sourced per metric (LLM Stats renders AA-sourced Intelligence Index; ZenMux live gateway telemetry). Component benchmarks are NOT found for this model on these pages and are NOT manufactured.

- Artificial Analysis Intelligence Index v4.3.2: **34.1** (#52/123 in the 2026-03 snapshot LLM Stats renders; above the 25 median, "above average among comparable models") (LLM Stats, MoonshotAI page).
- Throughput / latency: 28.2 tok/s, 2.6s TTFT (ZenMux live).
- Terminal-Bench 2.0/2.1/Hard/4.0: NOT FOUND standalone.
- SWE-bench Verified / Pro / DeepSWE / LiveCodeBench / SciCode / SWE-Atlas: NOT FOUND.
- GPQA Diamond / HLE / AA-Omniscience / CritPt / LCR / AA-LCR / Tau3-Banking / Tau3-general / GDPval-AA Elo / MRCR / RULER / GraphWalks: NOT FOUND in fetched pages.
- Context-retrieval proof: NOT FOUND (1.05M window is spec-verified only; no measured MRCR/RULER percentage).

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost scored independently, excluded. Uses current AA Intelligence Index 34.1 (below the 39→62 of GPT-5.4 and Grok 4.5 here).

- **Tool use: 57/100.** AA Intelligence Index 34.1 (#52/123); text+image only; no standalone Terminal-Bench / GDPval-AA / SWE-bench % located → caps the floor.
- **Reasoning: 57/100.** Index 34.1 with adjustable-thinking tiers; no standalone GPQA / HLE / AA-Omniscience figures found.
- **Context window: 92/100.** 1.05M native window (≥1M tier, clears 64K caveat); no measured retrieval-acuity figure (no MRCR/RULER) keeps it off the 95+ tier.
- **Multimodal: 70/100.** Text + image input, text output (+image-in only; no video/audio/PDF verified).
- **Coding: 56/100.** "Close to K3" coding claims but the published Index 34.1 (a multi-eval composite incl. coding) and no standalone SWE-bench/Terminal-Bench % keep it at this floor.
- **Cost efficiency: 85/100.** $1.00/$4.00 per 1M is very cheap for a near-frontier coding/agent tier (~$0.60/MTok blended, 94.4% live cache hits); no free tier caps it below 100.
- **Overall Score: 66/100.** (57 + 57 + 92 + 70 + 56) / 5 = 332 / 5 = 66.4 → 66. A low-cost, long-context coding/agent model (Kimi membership) whose measured current AA Index 34.1 undercuts its at-launch positioning.

> **Scale note / discrepancy:** The repo AI-Rankings average for this model is **78.5** (audit/model-comparison.md v4, 2026-09-17). My score (66) uses the **current AA Intelligence Index v4.3.2 = 34.1** (#52/123), consistent with the Sept-2026 "deprecated/near-frontier" scale interpretation used across this batch (Claude Fable → 67, GPT-5.4 → 69, Grok 4.5 → 69, Gemini 3 Flash → 75). The repo's 78.5 reflects the higher legacy/at-launch rating. Both figures preserved for reconciliation.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (LLM Stats Kimi K2.8 page; ZenMux gateway telemetry for pricing/throughput). Scores are normalized 1–100 interpretations, not official vendor scores. No peer findings files in `model/` were read (zero-influence).
- Future sources: add a new file next to this one using the same headings.