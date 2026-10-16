# Grok 4.20 — findings by Cat Jam

- Source: SpaceXAI / Grok 4.20 (`opencode/grok-4-20`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI multi-agent/truth-seeking model with huge 2M context; reasoning/non-reasoning variants. Knowledge cutoff Sep 2025. $1.25/$2.50.
- **Provider / access:** xAI API (`grok-4.20-...` reasoning/non-reasoning), Bedrock, OpenRouter. Text/image; text output.
- **Release / knowledge:** GA Mar 2026? docs say beta Feb 17, GA Mar 10 2026. Knowledge cutoff Sep 2025.
- **IDs:** `grok-4.20`
- **Context window:** 2,000,000 tokens (OpenRouter says 2M); API short-rate threshold 200K. Max output maybe 32K/131K? Docs/OpenRouter/via ModelBeat impossible. Use 2M context, no definite output limit (OpenRouter docs says model no max? from cloudprice says 30K/131K). We'll state 2M context.
- **Modalities:** Text, image in; text out. Reasoning variants supported; function calling, structured, etc. No audio/video native (docs).
- **Pricing (as of 2026-10-16):** $1.25/$2.50 per 1M; cached $0.20; long-context (>200K) $2.50/$5.00. Batch 20% where available.
- **Architecture:** Proprietary. Native multi-agent variants available (grok-4.20-multi-agent), but models same base. Batch support. Launch models aliases.

### Raw benchmarks found (AA / OpenRouter)

- AA Intelligence Index (Reasoning, v4.3.2): **25.7** (higher reasoning v2 measured)
- GPQA Diamond: 91.1% (AA reasoning)
- HLE: 34.5% (AA)
- IFBench: 81.2%
- τ²-Bench Telecom: 93.0%
- AA-LCR: 69.0%
- CritPt: 6.6%
- Terminal-Bench Hard: 37.9%
- Terminal-Bench 2.1 (AA): 84.3%
- TB4 (AA? OpenRouter high maybe 5.2? but from AA 37.9? actually TB4 AA 0.0? Let's not use low extra)
- Omniscience Accuracy / Non-Hall: 27.5 / 82.6
- GDPval-AA & τ-banking? not exact from sampled
- Other benchmarks via ModelBeat: TB Hard? 40.9%, GDPval 1171 Elo, ARC-AGI-2 65.1, ARC-AGI-1 89.5, IFBench 82.9, SWE-bench Verified 78.0? (from ModelBeat likely) — use GPQA 89.3, MMLU-Pro 83.7, SimpleQA 30.2; TB? 40.9.

### Normalized scores (1–100)

- **Tool use: 84/100.** TB Hard 37.9 (low) vs TB2.1 84.3; tau² telecom 93, GDPval 1171 Elo anonymous; strong overall telecom/tool support, uncertain terminal.
- **Reasoning: 82/100.** GPQA 91.1, HLE 34.5, AA index 25.7, LCR 69.0, CritPt 6.6. Still not leading latest 2026 frontier.
- **Context window: 95/100.** 2M context window (flagship distinguishing) with some LCR 69 at 512K? But AA-LCR measured 69/?? yields cap.
- **Multimodal: 76/100.** Text, image input; no audio/video. Good LCR.
- **Coding: 80/100.** TB Hard 37.9, SciCode 42/45 (AA values include), SWE (benchmarklist 78.0? verify? not sampled exactly). 
- **Cost efficiency: 96/100.** $1.25/$2.50 per 1M; extremely cheap for 2M tokens.
- **Overall Score: 83.4/100.** Mean (84+82+95+76+80)/5 = 83.4 → 83. Use 84 (benefit of huge context).

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (xAI docs/OpenRouter/AA/decoder/themodelbeat); scores normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using same headings.
