# GPT-5.6 Luna — findings by Kimi K3

- Source: OpenAI / GPT-5.6 Luna (`gpt-5.6-luna`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's fastest, cheapest GPT-5.6 variant (GA July 9, 2026; siblings Sol/Terra) — "optimized for cost-sensitive workloads," roughly the nano-tier of earlier GPT-5 families (developers.openai.com).
- **Provider / access:** OpenAI API (`gpt-5.6-luna`, Chat Completions + Responses; Batch).
- **Release / knowledge:** GA 2026-07-09 (openai.com/index/gpt-5-6); price cut 80% on 2026-07-30; knowledge cutoff February 16, 2026 (developers.openai.com).
- **IDs:** `openai/gpt-5.6-luna` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1,050,000 tokens (max input 922K) / 128K max output (developers.openai.com); >272K input priced higher.
- **Modalities:** text/image in; text out; reasoning (`none`–`max` effort); function calling, structured outputs, prompt caching (developers.openai.com).
- **Pricing (as of 2026-09-29):** $0.20/M input, $1.20/M output, $0.02/M cached input (after the July 30, 2026 80% cut from launch $1/$6); prompts >272K input billed 2x input / 1.5x output; cache writes 1.25x (developers.openai.com, openai.com).
- **Architecture:** proprietary (OpenAI); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.7%** (official, openai.com; Vals 79.0%); TB 3.0: **14.3%** (benchlm.ai)
- Tau3-Banking (AA): **31.1%** (benchlm.ai)
- GDPval-AA v2: **1,591.8 Elo** (official, openai.com; benchlm lists 1582 / 47.2% normalized)
- OSWorld 2.0: **45.6%**; BrowseComp: **83.3%**; AutomationBench: **14.9%**; Toolathlon: **53.4%** (openai.com)
- CyberGym: **77.9%**; AA Harvey LAB: **87.9%**; AA Agentic Index: **42.7%**; ApprenticeBench: **7%** (benchlm.ai)
- SEC-Bench Pro: **48.9%**; ExploitBench: **33.2%**; ExploitGym: **12.4%** (openai.com)
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (official; AA 91.1%; Vals 91.7%)
- HLE (AA-HLE): **39.5%** (benchlm.ai)
- AA-LCR: **83.7%**; MLCR-AA: **19.4%**; CritPt: **20.6%** (benchlm.ai)
- ARC-AGI-2: **59.5%**; ARC-AGI-3: **0.18%** (official table; benchlm lists 0.2%)
- Artificial Analysis Intelligence Index v4.1: **51.2** (official); BenchLM overall **65.6/100, #25 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **42.7% / 92.6%** (benchlm.ai)
- FrontierMath v2 T1–3: **78.6%**, Tier 4: **58.5%** (openai.com); MMLU-Pro (Vals): **86.0%** (benchlm.ai)
- HealthBench Professional: **55.7%** (official, openai.com)

Coding:

- SWE-bench Pro: **62.7%** (official, openai.com); SWE-bench (Vals): **93.0%** (benchlm.ai); SWE-bench Verified: no separate verified public score found
- AA Coding Agent Index v1.1: **74.6** (official, openai.com; prior benchlm listing 71.5)
- DeepSWE v1.1: **67.2%** (official, openai.com)
- LiveCodeBench (Vals): no verified public score found
- AA-SciCode: **53.6%**; VulcanBench v3: **85.5%**; CursorBench 3.2: **61.1%** (benchlm.ai)

Long context:

- MRCR v2 8-needle 256K–512K: **41.3%**; 512K–1M: **41.3%** (official, openai.com — weakest in family); GraphWalks BFS 256K F1: **81.3%**, 1M F1: **51.2%** (openai.com); AA-LCR 83.7% (benchlm.ai).

Multimodal:

- MMMU Pro (no tools): **78.4%**; with tools: **79.5%** (official, openai.com); AA 78.6% (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 79/100.** TB 2.1 84.7%, GDPval-AA 1591.8 Elo, Harvey LAB 87.9%; capped by Tau3-Banking 31.1%, TB 3.0 14.3%, ApprenticeBench 7%.
- **Reasoning: 78/100.** GPQA 92.3%, LCR 83.7%, FrontierMath 78.6/58.5 are good; capped by hallucination 92.6%, HLE 39.5%, ARC-AGI-3 0.18%.
- **Context window: 76/100.** Verified 1.05M window but retrieval collapses on official probes (MRCR 41.3% both bands, GraphWalks 1M 51.2%); usable long context far below the nominal window.
- **Multimodal: 68/100.** Mid image-in/text-out band: MMMU Pro ~78–79.5% vision input; no audio/video input rows; text-only output.
- **Coding: 79/100.** SWE-bench Pro 62.7%, DeepSWE 67.2%, AA Coding Index 74.6, VulcanBench 85.5%; capped by SciCode 53.6% and missing LiveCodeBench rows.
- **Cost efficiency: 95/100.** Verified $0.20/$1.20 per 1M (band ≈95) after the 80% July 30, 2026 cut — budget-tier cost with a 1.05M window.
- **Overall Score: 76/100.** Mean of the five quality dims (79+78+76+68+79)/5 = 76.0. Best fit: cost-conscious OpenAI workloads needing long context at nano-tier spend, accepting weak far-context retrieval.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard, developers.openai.com model page, openai.com/index/gpt-5-6 announcement); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: verified GA 2026-07-09, pricing $0.20/$1.20 (post 2026-07-30 80% cut) + >272K tier, 1.05M/922K/128K window, cutoff Feb 16 2026; updated GDPval-AA to official 1591.8 Elo, AA Coding Index to official 74.6, added official MRCR (41.3%), GraphWalks, HealthBench, security rows; Context 87→76 (new MRCR evidence), Cost 76→95 per band rules; Overall 78→76.
- Future sources: add a new file next to this one using the same headings.
