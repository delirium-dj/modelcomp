# GLM-5 — findings by MiMo 2.6 Flash

- Source: Z.ai / Zhipu AI (`glm-5`; evaluated route OpenCode Zen `opencode/glm-5`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5
- **Short description:** Z.ai/Zhipu AI's flagship open-weights foundation model for complex systems design and long-horizon agentic workflows — the GLM-4.6 successor (744B MoE, 40B active), engineered for large-scale programming and autonomous multi-step execution. Not an alias. **Status note:** Artificial Analysis now banners GLM-5 as deprecated in favor of GLM-5.1 (still benchmarked); Z.ai docs remain live.
- **Provider / access:** Z.ai API (Chat Completions, OpenAI-compatible); also OpenRouter (`z-ai/glm-5`, multiple providers) and 6+ hosted endpoints per AA; evaluation route OpenCode Zen `opencode/glm-5` (Chat Completions).
- **Release / knowledge:** Released 2026-02-11 (OpenRouter); knowledge cutoff not posted.
- **IDs:** `z-ai/glm-5` (Z.ai / OpenRouter); `opencode/glm-5` (Zen). No Free ID verified.
- **Context window:** 131,072 tokens total / 262,144 max output (Z.ai official docs); catalogues list ~200–205K total (OpenRouter 205K, AA 200K) — discrepancy noted, official Z.ai docs used as primary.
- **Modalities:** text in → text out only (AA confirms no image input; GLM-4.6V is the separate vision variant). Reasoning mode toggleable (thinking / non-thinking); tool calling, structured outputs.
- **Pricing (as of 2026-10-16):** Z.ai list $1.00 in / $3.20 out per 1M (AA median across providers); OpenRouter shows a 40%-off rate at $0.60/$1.92; cache discount 80%. No free tier.
- **Architecture:** 744B total / 40B active parameters, Mixture-of-Experts; MIT open weights (commercial use allowed).

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom: **98.2%** (Artificial Analysis, GLM-5 Reasoning; non-reasoning 97.4%)
- Terminal-Bench Hard: **43.2%** (AA, Reasoning; non-reasoning 39.4%)
- Terminal-Bench 2.1 (standard): no verified public score found for this exact ID in this pass's sources
- GDPval-AA / Tau3-Banking / OSWorld / MCP-Atlas / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **82.0%** (AA, Reasoning; non-reasoning 66.6%)
- HLE: **29.3%** (AA, Reasoning; non-reasoning 7.6%)
- AA-LCR: **75.7%** (AA, Reasoning; non-reasoning 43.7%)
- CritPt: **2.0%** (AA, Reasoning; non-reasoning 0.0%)
- AA-Omniscience: accuracy **26.3%**, non-hallucination rate **64.7%** (AA, Reasoning)
- IFBench: **72.3%** (AA, Reasoning; non-reasoning 55.2%)
- Artificial Analysis Intelligence Index: **27.9 → 28** (estimated, Reasoning; #24/120; non-reasoning 21.8; same-class open-weight median 19)
- MMLU-Pro / AIME: no verified public score found this pass

Coding:

- SWE-bench Verified: **70.85%** (Z.ai official docs, GLM-5)
- LiveCodeBench / SWE-bench Pro / SciCode / Vibe Code Bench / DeepSWE: no verified public score found for this exact ID in this pass's sources

Long context:

- 131,072 tokens total (Z.ai docs; catalogues report up to 205K) with 262,144 max output — no MRCR / RULER / GraphWalks retrieval-at-length published.

### Normalized scores (1–100)

- **Tool use: 74/100.** τ²-Bench Telecom 98.2% is the standout — near-perfect tool reliability on the AA harness (well above the ~50%+ Tau frontier reference) — but Terminal-Bench Hard 43.2% is mid-band and no GDPval-AA, Tau3-Banking, OSWorld, or MCP-Atlas rows exist, capping the composite agentic picture in the mid-70s.
- **Reasoning: 78/100.** GPQA Diamond 82.0% and HLE 29.3% are strong-mid (below the ≥90% / 40%+ frontier anchors), AA-LCR 75.7% is genuinely good, and the AA Intelligence Index 28 (#24/120) sits well above the open-weight median; capped by CritPt 2.0%, AA-Omniscience non-hallucination of only 64.7%, and the gap to 2026 frontier reasoning.
- **Context window: 76/100.** Official Z.ai docs report 131,072 total / 262,144 max output; catalogues (OpenRouter 205K, AA 200K) disagree — taking the higher catalogue figures, 200–205K lands in the 200K–500K tier (200K = 70, upper band to 84); no retrieval-at-length measurement, and the documentation discrepancy holds it mid-band.
- **Multimodal: 15/100.** Text-only in / text out (AA confirms no image input; GLM-4.6V is the separate vision SKU) — text-only floor.
- **Coding: 70/100.** SWE-bench Verified 70.85% (Z.ai official) is a strong open-weight result — above the 65%+ band but short of the 74%+ DeepSWE frontier reference — and the model is purpose-built for systems-level agentic coding; capped by no LiveCodeBench, SWE-bench Pro, SciCode, or DeepSWE rows this pass, and Terminal-Bench Hard 43.2% mid-band.
- **Cost efficiency: 76/100.** MIT open weights make self-hosting $0 token cost; at the Z.ai list $1.00/$3.20 the API sits between the $0.60/$2.20 (~92) and $3/$15 (~60) anchors — the 80% cache discount and OpenRouter's 40%-off promo ($0.60/$1.92) argue up; the $3.20 output price (AA calls it expensive for its size class) and 744B hosting footprint argue down.
- **Overall Score: 63/100.** Mean of the five non-cost dims (74 + 78 + 76 + 15 + 70) / 5 = 62.6 → 63. Best-fit: self-hostable agentic-coding and systems-construction engine with near-perfect τ² tool reliability and SWE-bench Verified 70.85% at MIT-licensed cost — not for multimodal work (text-only) or frontier reasoning (GPQA 82, HLE 29.3); note Z.ai has already shipped GLM-5.1 as the successor.

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-16
- Method: public internet research across 4 independent sources (Z.ai official GLM-5 docs, OpenRouter model page with AA benchmark block, Artificial Analysis GLM-5 model page, plus Z.ai release-notes cross-check); conflicts compared (context-window discrepancy 131K/262K-out docs vs 200–205K catalogues flagged; reasoning vs non-reasoning variant scores separated). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

