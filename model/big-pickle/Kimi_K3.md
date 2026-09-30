# Big Pickle (GLM 4.6 stealth) — findings by Kimi K3

- Source: OpenCode Zen stealth `opencode/big-pickle` — community consensus: Z.AI GLM-4.6 weights (`zai-org/GLM-4.6`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle (stealth; consensus identity: GLM-4.6)
- **Short description:** Free stealth reasoning model on OpenCode Zen. Community consensus identifies it as Z.AI's open-weight GLM-4.6 — roughly Sonnet-class coding at zero token cost during the promo. All scores below are measured GLM-4.6 numbers, provisional for the stealth deployment.
- **Provider / access:** OpenCode Zen `opencode/big-pickle` (free promo); underlying GLM-4.6 also via Z.AI API / open weights.
- **Release / knowledge:** stealth promo 2026; underlying GLM-4.6 released ~2025 (not re-verified); cutoff not verified.
- **IDs:** `opencode/big-pickle` (Free Zen ID); consensus base `zai/glm-4.6`.
- **Context window:** 200K total (160K in / 32K out) per Zen listing; GLM-4.6 native 200K (benchlm.ai) — consistent.
- **Modalities:** text in/out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Free Zen tier; paid GLM-4.6 equivalent ~$0.60/$2.20 per 1M (catalog note).
- **Architecture:** open-weight GLM-4.6 (Z.AI); params undisclosed here.

### Raw benchmarks found (measured on GLM-4.6 = consensus identity; provisional for big-pickle)

Agent / tool use:

- τ²-bench (Tau2-Bench): **76.9%** (benchlm.ai)
- All other agentic rows (TB, GDPval, MCP, Claw): no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **63.2%** (AA); 74.5% (Vals) — wide harness split (benchlm.ai)
- HLE (AA-HLE): **5.5%** (benchlm.ai)
- AA-LCR: **26.3%**; CritPt: **0.0%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **14.9**; BenchLM overall **39.8/100, #115 of 507**
- AA-Omniscience Index: **−31.7** — accuracy 21.4% / hallucination 67.6% (benchlm.ai)
- MMLU-Pro (Vals): **82.2%**; FrontierMath v2: **3.8%** T1–3 / **2.1%** T4; AA-IFBench: **36.7%** (benchlm.ai)

Coding:

- LiveCodeBench (Vals): **81.0%** (benchlm.ai)
- Vibe Code Bench: **3.1%** (benchlm.ai)
- SWE-bench / SciCode: no verified public score found

Long context:

- AA-LCR 26.3% within 200K (benchlm.ai) — weak retrieval even at 200K.

Multimodal:

- Text-only (Zen listing) — floor.

### Normalized scores (1–100)

- **Tool use: 62/100.** τ²-bench 76.9% is the only strong row; capped by total absence of terminal/agent coverage.
- **Reasoning: 55/100.** Vals GPQA 74.5% decent; capped by HLE 5.5%, CritPt 0%, FrontierMath ~4%, hallucination 67.6%.
- **Context window: 60/100.** 200K window but LCR 26.3% means poor usable depth.
- **Multimodal: 15/100.** Text-only — floor.
- **Coding: 68/100.** LiveCodeBench 81.0% is genuinely good (stealth coding reputation checks out); capped by Vibe Code 3.1% and no SWE rows.
- **Cost efficiency: 98/100.** $0 during Zen promo; even paid-equivalent ~$0.60/$2.20 is cheap.
- **Overall Score: 52/100.** Mean of the five quality dims (62+55+60+15+68)/5 = 52.0 → 52. Best fit: free everyday coding/chat on Zen while the promo lasts; identity remains unofficial.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai GLM-4.6 scorecard, OpenCode Zen catalog, OpenRouter model API lookup — stealth ID not queryable); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
