# Ling 3.0 Flash Fin (Free) — findings by Kimi K3

- Source: InclusionAI (Ant Group) / Ling 3.0 Flash Fin (`opencode/ling-3-0-flash-fin-free`; base weights `inclusionAI/Ling-3.0-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin (Free)
- **Short description:** InclusionAI/Ant Group's finance-enhanced variant of the open-weight Ling 3.0 Flash MoE, served free (limited promo) on OpenCode Zen for financial research and tool-intensive workflows. No Fin-specific public benchmark rows exist yet — numbers below are base Ling 3.0 Flash measurements marked provisional.
- **Provider / access:** OpenCode Zen `opencode/ling-3-0-flash-fin-free` (free limited-time promo); Vercel promo; base weights on HF (inclusionAI/Ling-3.0-flash, open).
- **Release / knowledge:** 2026 (exact date not verified); cutoff not verified.
- **IDs:** `opencode/ling-3-0-flash-fin-free` (Free ID).
- **Context window:** 262,144 tokens (256K marketed) / 32K max output (catalog).
- **Modalities:** text in/out only; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Free (limited-time promo on Zen/Vercel); underlying model open-weight.
- **Architecture:** open-weight MoE (InclusionAI); params not verified here.

### Raw benchmarks found

> The Fin variant has zero separately-published rows; all values below are the base Ling 3.0 Flash (benchlm.ai) — treat as provisional proxies for the Fin tuning.

Agent / tool use (base):

- τ³-Banking (AA): **28.0%**; BFCL v4: **73.0%**; MCP Atlas: **65.5%** (benchlm.ai)
- Terminal-Bench 2.1: **57.0%** (Vals 50.2%) (benchlm.ai)
- GDPval-AA: **1107 Elo**; WideResearch: **73.6%**; BrowseComp: **72.2%**; DRACO: **70.4%**; skillsBench: **44.8%**; AA Agentic Index: **21.0%** (benchlm.ai)
- Fin-specific rows (finance agent benchmarks): no verified public score found — notable gap for a finance-branded variant

Reasoning / knowledge (base):

- GPQA Diamond: **85.0%** (GPQA-D; AA 85.5%; Vals 84.8%) (benchlm.ai)
- HLE: **22.7%**; AA-HLE: **23.7%** (benchlm.ai)
- AA-LCR: **73.0%**; CritPt: **1.7%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **24.9**; BenchLM overall (base) **45.35/100, #94 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **18.2% / 44.1%** (benchlm.ai)
- AIME 2026: **93.2%**; HMMT Feb 2026: **87.0%**; IMOAnswerBench: **83.7%**; MMLU-Pro (Vals): **82.0%**; IFBench: **74.5%** (benchlm.ai)

Coding (base):

- LiveCodeBench v5: **82.8%** (Vals 84.0%); SWE-bench (Vals): **65.2%**; SWE-bench Pro: **56.6%**; SWE Multilingual: **72.4%** (benchlm.ai)
- SciCode: **41.2%**; AA Coding Index: **50.6** (benchlm.ai)

Long context:

- AA-LCR 73.0% within 256K (benchlm.ai); no MRCR/RULER rows.

Multimodal:

- Text-only on this entry — floor (VL is a separate sibling variant).

### Normalized scores (1–100)

- **Tool use: 70/100.** BFCL 73%, MCP Atlas 65.5%, WideResearch 73.6% (all base-model values, provisional); capped by GDPval 1107 and absent finance-agent measurements.
- **Reasoning: 72/100.** AIME 93.2% and GPQA 85% strong, hallucination 44% acceptable; capped by HLE ~23% and CritPt 1.7%.
- **Context window: 66/100.** 256K window with LCR 73%; below 1M tier.
- **Multimodal: 15/100.** Text-only — floor.
- **Coding: 70/100.** LiveCodeBench ~83%, SWE-bench (Vals) 65.2%; capped by Coding Index 50.6.
- **Cost efficiency: 97/100.** Free promo tier + open weights.
- **Overall Score: 59/100.** Mean of the five quality dims (70+72+66+15+70)/5 = 58.6 → 59. Best fit: free financial-analysis/tool-calling experiments; demand Fin-specific evals before trusting the finance branding.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai base-model scorecard, repo catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
