# GPT-5.6 Sol — findings by Kimi K3

- Source: OpenAI / GPT-5.6 Sol (`gpt-5.6-sol`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's top GPT-5.6 variant (predecessor-state to GPT-6 Astra), a reasoning flagship strong on agentic terminal work, math, and knowledge benchmarks. Siblings: GPT-5.6 Terra, Luna, Cyber.
- **Provider / access:** OpenAI API (`gpt-5.6-sol`, OpenAI-compatible Chat/Responses API).
- **Release / knowledge:** 2026 release (exact date not verified in my sources; superseded 2026-09-03 by GPT-6 Astra); knowledge cutoff not verified.
- **IDs:** `openai/gpt-5.6-sol` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1.05M tokens (benchlm.ai); max output not verified.
- **Modalities:** text/image in (MMMU-Pro measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** $4/M input, $20/M output, ~90% cache-read discount (artificialanalysis.ai GPT-6 Astra benchmarking article: "up from $4/$20 to $10/$50").
- **Architecture:** proprietary (OpenAI); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **91.9%** (benchlm.ai; Vals harness 85.8%); Terminal-Bench 3.0: **34.6%**; terminalBenchHard: **65.9%**
- Tau2-Bench (τ²-bench): **85.1%**; Tau3-Banking (AA): **44.3%** (benchlm.ai)
- GDPval-AA: **1735 Elo** (54.4% normalized) (benchlm.ai)
- BrowseComp: **92.2%**; OSWorld 2.0: **62.6%**; CyberGym: **84.5%**; Toolathlon: **58%** (benchlm.ai)
- AA Briefcase: **1487**; AA Agentic Index: **50.5%**; AA AutomationBench: **60.1%**; AA ITBench: **56.2%** (benchlm.ai)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.6%** (94.1% AA; 95.2% Vals) (benchlm.ai)
- HLE: **54.5%** (HLE-Verified); 49.5% (AA-HLE) (benchlm.ai)
- AA-LCR: **84.0%**; MLCR-AA: **26.1%**; CritPt: **32.3%** (benchlm.ai)
- ARC-AGI-2: **92.5%**; ARC-AGI-3: **7.8%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **58.9** (benchlm.ai; AA cited 61 per felloai.com); BenchLM overall **78.49/100, #7 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **59.4% / 92.2%** (hallucination rate poor — 92.2%) (benchlm.ai)
- FrontierMath: **89%** (legacy); FrontierMath v2 T1–3: **89.0%**, Tier 4: **83.0%** (benchlm.ai)

Coding:

- SWE-bench (Vals): **96.2%**; SWE-bench Pro: **64.6%**; SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): **82.6%** (benchlm.ai)
- AA-SciCode: **57.1%**; AA Coding Index: **77.4** (benchlm.ai)
- DeepSWE: **72.7%**; FrontierSWE v2: **32.2%**; CursorBench 3.2: **67.2%** / 4.0: **41.7%**; VulcanBench CII: **86.5%** (benchlm.ai)

Long context:

- AA-LCR 84.0% at the 1.05M window; no separate MRCR/RULER/GraphWalks public score found.

Multimodal:

- MMMU-Pro: **83.0%** (84.6% w/ Python; AA 83.4%) (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 89/100.** Terminal-Bench 2.1 91.9%, τ²-bench 85.1%, BrowseComp 92.2%, GDPval-AA 1735 — top-tier agentic; capped by Tau3-Banking 44.3% and ApprenticeBench 26%.
- **Reasoning: 89/100.** FrontierMath v2 89%/83%, GPQA ~94.6%, ARC-AGI-2 92.5% are excellent; capped hard by Omniscience hallucination rate 92.2% and ARC-AGI-3 7.8%.
- **Context window: 90/100.** 1.05M window with the strongest LCR (84.0%) among its peers; capped by missing max-window retrieval probes.
- **Multimodal: 78/100.** Solid vision (MMMU-Pro ~83–84.6%) but no measured audio/video/PDF rows and text-only output.
- **Coding: 86/100.** SWE-bench (Vals) 96.2%, DeepSWE 72.7%, Coding Index 77.4; capped by FrontierSWE v2 32.2% and CursorBench 4.0 41.7%.
- **Cost efficiency: 55/100.** $4/$20 per 1M — 40% of GPT-6 Astra's price for ~9 points less BenchLM overall; strong value within flagship land, not cheap in absolute terms.
- **Overall Score: 86/100.** Mean of the five quality dims (89+89+90+78+86)/5 = 86.4 → 86. Best fit: flagship-grade math/agentic coding where GPT-6 Astra's premium or access tier is unjustified.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard, artificialanalysis.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
