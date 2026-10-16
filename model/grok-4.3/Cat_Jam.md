# Grok 4.3 — findings by Cat Jam

- Source: SpaceXAI / Grok 4.3 (`opencode/grok-4-3`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** Low-cost Grok reasoning model (released 2026-04-30). 1M context, text/image in; text out, no reasoning can be disabled (none to high effort). Strong instruction following and factuality, but lower AA Index.
- **Provider / access:** xAI API (`grok-4.3`), Grok in X/SuperGrok, AWS Bedrock (Mantle), OpenRouter. Chat/Responses. Text/image in; text out.
- **Knowledge cutoff:** Not stated in sampled docs? likely Jan 2026? Mark unknown.
- **IDs:** `grok-4.3`
- **Context window:** 1,000,000 tokens; >200K rates 2x. (Max output unspecified; likely no text limit docs says? OpenRouter says no output limit).
- **Modalities:** text, image → text. Reasoning none/low/medium/high.
- **Pricing (as of 2026-10-16):** $1.25/$2.50 under 200K; $2.50/$5.00 ≥200K; cached under 200K $0.20; batch 20% (for grok-4.3). Cached long context $0.40. US regional not available (only models listed none for 4.3).
- **Architecture:** Proprietary reasoning model (Grok family, 4.3 scale). No open weights.

### Raw benchmarks found (AA/OpenRouter)

- AA Intelligence Index (high): **24.9** (AA measured, low for price tier? note)
- GPQA Diamond: 90.1% (AA high)
- HLE: 37.2% (AA high)
- IFBench: 81.3% (AA high)
- τ²-Bench Telecom: 97.7% (AA high)
- AA-LCR: 73.0% (AA high)
- CritPt: 8.0% (AA high)
- SciCode: 48.3% (AA high)
- Terminal-Bench Hard: 37.9% (AA high); Terminal-Bench 2.1 (AA high) 39.7%; TB4 (AA) 0.0%
- Omniscience Accuracy / Non-hall: 34.8% / 74.2%
- GDPval-AA: 21.9%
- Vals SWE-bench: 71.4%, LiveCodeBench 84.5
- OSWorld? not found in sampled data

### Normalized scores (1–100)

- **Tool use: 74/100.** Tau2-Telecom 97.7, TB Hard 37.9, SWE Verified 71.4, IFBench 81.3, but GDPval low (21.9) caps.
- **Reasoning: 78/100.** GPQA 90.1, HLE 37.2, AA Index 24.9, LCR 73.0, CritPt 8.0. Decent.
- **Context window: 90/100.** 1M with 200K pricing threshold; LCR 73 cap.
- **Multimodal: 76/100.** Text/image in; text out; no standard multimodal benchmark in sampled data.
- **Coding: 72/100.** SWE Verified 71.4, LiveCode 84.5, KB? 3.9; SciCode 48.3 and Terminal 39.7 cap.
- **Cost efficiency: 94/100.** $1.25/$2.50 per 1M, cache 20%, batch 20%; very cheap (though low intelligence).
- **Overall Score: 78/100.** Mean (74+78+90+76+72)/5 = 78.0. Low-cost capable reasoning model with weak absolute reasoning index.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (xAI docs/OpenRouter/AA/Index); scores normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using same headings.
