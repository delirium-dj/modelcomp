# MAI-Thinking-1 — findings by MiniMax M3.1 Flash

- Source: Microsoft AI (MAI-Thinking-1), `MAI-Thinking-1`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Thinking-1
- **Short description:** Microsoft's in-house reasoning flagship from Build 2026 — a ~1T-total / 35B-active sparse MoE trained from scratch (30T pretraining tokens, no third-party distillation) with a 256K context, SWE-bench Verified 73.5%, LiveCodeBench v6 87.7% and GPQA 84.2%; available as a **public preview in Microsoft Foundry with no published rate card**.
- **Provider / access:** Microsoft Foundry (public preview since 2026-08-12), Chat-Completions-compatible, function calling, 256K window. **No published API model id** — BenchLM records "API model ID: Not published" — and the folder's `opencode/mai-thinking-1` resolves to nothing: no Hugging Face repo, 404 on OpenRouter, no models.dev entry.
- **Release / knowledge:** announced **2026-06-02** (Microsoft Build, "hill-climbing machine", seven MAI models at once); Foundry public preview **2026-08-12**. Knowledge cutoff not published.
- **IDs:** none published — Foundry catalog name only (`MAI-Thinking-1`).
- **Context window:** **256,000** tokens, max output **25,000**.
- **Modalities:** text in / text out only.
- **Pricing (as of 2026-10-20):** **no public rate card** — Microsoft's pages carry no token price, Azure AI Foundry lists no MAI-Thinking-1 line, and models.dev/OpenRouter have no listing. The folder's "$2.00 in / $8–$10 out" is **unverified**; the cost score below is therefore provisional.
- **Architecture:** proprietary, closed weights — sparse MoE, **~1T total / 35B active**, trained from scratch on 30T tokens, evaluated with an avg-of-4-runs protocol (T=1, top-p 0.97).

### Raw benchmarks found

> Every number is from Microsoft's own technical report (109 pages) and product page; there is no independent evaluation of this model anywhere.

Coding:

- SWE-bench Verified: **73.5%** · SWE-bench Pro: **52.8%** · LiveCodeBench v6: **87.7%** · Terminal-Bench 2.0: **46.0%**
- DeepSWE / SciCode / Vibe Code Bench: no verified public score found (Terminal-Bench **2.1** is not reported — only 2.0)

Reasoning / knowledge:

- GPQA Diamond: **84.2%** · AIME 2025: **97.0%** · AIME 2026: **94.5%** · HMMT Feb 2026: **84.9%** · MMLU-Pro: **85%** · IFBench: **85%**
- SimpleQA Verified: **31** · BFCL v3: **72%** · Human side-by-side vs Sonnet 4.6: win 49% / tie 6% / lose 45% over 1,276 tasks; vs Opus 4.6: 43/5/52
- HLE: no verified public score found (no HLE row in the report tables) · Artificial Analysis: **no model page** (404) — so no independent index, GPQA or LCR measurement exists

Agent / tool use:

- Terminal-Bench 2.0: **46.0%** · BFCL v3: **72%** · GraphWalks (≤128k): **90** · LongBenchV2: **61** · CorpusQA: **82**
- Tau2-bench / Tau3 / GDPval-AA / OSWorld / AutomationBench / MCP-Atlas / Toolathlon: no verified public score found

Long context:

- MRCR: **60%** average similarity at 256K (Microsoft reports this as a SOTA-beating figure, then notes it dropped MRCR from its long-context set in favour of 1,000 targeted synthetic examples) — the window is 256K, not 1M.

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench 2.0 46.0% is mid-low, BFCL v3 72% and GraphWalks 90 (≤128k) are decent, but there is no τ², GDPval, OSWorld or MCP-Atlas figure at all.
- **Reasoning: 74/100.** AIME 2025 97.0% / 2026 94.5%, GPQA 84.2%, HMMT 84.9%, MMLU-Pro 85% and IFBench 85% are strong, capped by SimpleQA 31% and the absence of any independent measurement or HLE row.
- **Context window: 68/100.** 256,000 tokens with a 25,000-token output cap, and MRCR at 60% average similarity at 256K — a 200K–500K window with mediocre measured retrieval.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 76/100.** SWE-bench Verified 73.5%, LiveCodeBench v6 87.7% and SWE-bench Pro 52.8% are strong mid-to-high band coding numbers, capped by Terminal-Bench 2.0 at 46.0%.
- **Cost efficiency: 70/100.** **Provisional** — no first-party rate card exists, so this is a placeholder mid-market score rather than a measured price; the folder's $2.00/$8–$10 claim could not be verified in any Microsoft, Foundry, Azure, models.dev or OpenRouter source.
- **Overall Score: 58/100.** Mean of the five quality dims = (55 + 74 + 68 + 15 + 76) / 5 = 57.6 → **58**. Best fit: hard reasoning and STEM-heavy code work in Microsoft Foundry — but every number is vendor-published and the price is unknown, so benchmark and price-check it yourself.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (Microsoft AI model page, launch posts, 109-page technical report PDF, BenchLM, models.dev, OpenRouter API, Artificial Analysis absence check); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MAI_Code_2.md`, using the same headings.
