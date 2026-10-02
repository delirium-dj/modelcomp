# Kimi K2.6 — findings by Fledge Alpha

- Source: Moonshot AI (`kimi-k2.6`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot's April 21, 2026 open-weight MoE flagship (1T params, 32B active), superseded by Kimi K3 on July 16.
- **Provider / access:** Kimi API (`kimi-k2.6`), OpenRouter (`moonshotai/kimi-k2.6`), Fireworks, Novita, Cloudflare, Vercel AI Gateway.
- **Release / knowledge:** 2026-04-20/21.
- **IDs:** `moonshotai/Kimi-K2.6` (HF, Modified MIT license)
- **Context window:** 262,144 tokens; 65,536 max output.
- **Modalities:** text + native image/video (per Moonshot's model page; some secondary sources conflict) — treated as primary-source wins.
- **Pricing (as of 2026-10-02):** $0.95/M in, $0.16/M cache, $4/M out.
- **Architecture:** ~1T params, 32B active, 384 experts/61 layers MoE; modified-MIT open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **66.7%** (Terminus-2, default agent)
- Terminal-Bench 2.1: **65.9%** (AA independent)
- GDPval-AA v2: **1668 Elo**; AA-Briefcase: **1548 Elo**
- BrowseComp: **83.2%** (leads K2.5's 74.9%); AutomationBench: 30.8% (K3's row, direction indicates class)

Reasoning / knowledge:

- GPQA Diamond: **90.5–91.1%** (AA independent 91.1)
- HLE-Full w/Tools: **54.0%**; AIME 2026: **93.3–96.4%**
- MMLU-Pro: **84.6%**; BullshitBench v2: **65%**
- Hallucination rate: **39%** (vs K2.5's 65%)

Coding:

- SWE-bench Verified: **80.2%**; SWE-Bench Pro: **58.6%**
- LiveCodeBench: **89.6%**; SWE-bench Multilingual: **76.7%**
- CursorBench v3.1: **47.6%**; Next.js Evals: **67%**
- LiveBench Coding: **78.6%**; SciCode: **51.5%** (AA)

Multimodal:

- MMMU Pro: **80.1%**; MathVision (w/Python): **93.2%**

### Normalized scores (1–100)

- **Tool use: 80/100.** GDPval-AA 1668 Elo and BrowseComp 83.2% are strong open-weight results; Terminal-Bench 2.1 65.9% trails K3/flagships.
- **Reasoning: 80/100.** GPQA 91.1% and HLE-w/Tools 54.0% are solid for a 1T-class open model; AIME 96.4% high.
- **Context window: 66/100.** 262K window is a real constraint; strictly below the 1M-class flagship tier.
- **Multimodal: 82/100.** Native image/video per Moonshot's card, MMMU-Pro 80.1%.
- **Coding: 78/100.** SWE-bench Verified 80.2% and LCB 89.6% sit at the open-weight tier with DeepSeek-V4 (80.6); Pro 58.6% middling.
- **Cost efficiency: 82/100.** $0.95/$4 with 83% cache-hit discount is fair; GLM-5.3-Flash and Qwen3.6-Plus undercut it.
- **Overall Score: 77/100.** Mean of the five quality dims; the spring-2026 open-weight coding leader, now clearly behind Kimi K3.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Kimi K2.6 tech blog, benchr, llmreference, ai-atlas, verdictpal); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
