# Qwen 3.7 Plus — findings by Muse Spark 1.3

- Source: Alibaba/Qwen 3.7 Plus (`opencode/qwen-3.7-plus`)
- Date: 2026-09-26 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: catalog absolutes added, meta claims corrected, scores recomputed 60 → 86)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba Qwen team's mid-tier 3.7-generation model; leads Qwen's internal QwenWorldBench agentic-simulation board ahead of Qwen3.7 Max. Top use case: cost-balanced agentic coding inside the Qwen toolchain.
- **Provider / access:** Alibaba Qwen (API via Qwen/Alibaba Cloud model studio; OpenCode Zen ID `opencode/qwen-3.7-plus`).
- **Release / knowledge:** 2026-06-03 release (BenchLM/CloudPrice records); knowledge cutoff undisclosed (amended 2026-09-27).
- **IDs:** `opencode/qwen-3.7-plus` (Zen-hosted; no standalone Free-tier wording confirmed).
- **Context window:** 1M / 131K out — verified via CloudPrice specs (corrects filed 128K meta.json claim; amended 2026-09-27).
- **Modalities:** Text, image, PDF in; text out (CloudPrice caps; corrects filed text-only claim — no video/audio)
- **Pricing (as of 2026-09, re-verified 2026-09-27):** $0.32/$1.28 per 1M (CloudPrice, 5 providers); no $0 tier.
- **Architecture:** Proprietary (undisclosed; Qwen 3.7 family).

### Raw benchmarks found

Agent / tool use:

- QwenWorldBench (Qwen internal sim): **0.621, rank #1 of 2** (llm-stats leaderboard; vendor-internal — provisional weight only)
- Terminal-Bench 2.0: **70.3%** (BenchLM mirror)
- Claw-Eval: **62.7%** (BenchLM mirror); **QwenClawBench 61.8%** (BenchLM mirror)
- BFCL v4: **72.9%** (BenchLM mirror); **MCP Atlas 73.2%** (BenchLM mirror)
- VITA-Bench: **45.6%** (BenchLM mirror — weak tail); **DeepPlanning 62.3%** (BenchLM mirror)
- OSWorld-Verified: **73.3%** (BenchLM mirror)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Toolathon / SWE Atlas Codebase QnA: **no verified public score found** (MCP Atlas 73.2% row above)

Reasoning / knowledge:

- GPQA Diamond: **90.3%** (ApX/CloudPrice row); **GPQA-D 90.3%** (BenchLM mirror)
- HLE: **34.7%** (BenchLM mirror)
- MMLU-Pro: **88.5%** (ApX row); **HMMT Feb 2026 92.9%** (BenchLM mirror); **CharXiv 85.9%** (BenchLM mirror)
- LCR: **0.7** (CloudPrice row — weak tail); Finance board **38.2%** (weak tail)
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **30.8** (CloudPrice #89); **BenchLM overall 65.68 (#42)**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **77.7%** (BenchLM mirror); **75.8% Multilingual** (BenchLM mirror)
- SWE-bench Pro: **0.576** (llm-stats SWE-Pro leaderboard; BenchLM mirror **57.6%** — consistent)
- LiveCodeBench: **89.6%** (BenchLM mirror)
- NL2Repo: **41.1%** (BenchLM mirror)
- SciCode: **0.5** (CloudPrice row — weak tail)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **55.9% Coding Index** (CloudPrice #55); DeepSWE: no verified score found

Long context:

- no long-context retrieval reported (no public MRCR/RULER/GraphWalks number for the Plus cut; sibling Max MRCRv2 90.4% is not claimed for Plus)

### Normalized scores (1–100)

- **Tool use: 86/100.** TB2.0 70.3% plus Claw-Eval 62.7%, MCP Atlas 73.2%, OSWorld 73.3% and BFCL 72.9% show broad orchestration; capped by the VITA 45.6% tail and no Tau/GDPval numbers.
- **Reasoning: 88/100.** GPQA-D 90.3% plus MMLU-Pro 88.5%, HMMT 92.9% and CharXiv 85.9% show strong reasoning; capped by HLE 34.7% mid-band and the LCR 0.7 tail.
- **Context window: 95/100.** 1M / 131K out verified (corrects filed 128K); capped below 97+ with no retrieval-saturation proof.
- **Multimodal: 75/100.** Text/image/PDF in (corrects filed text-only), text out; capped with no video/audio and no measured vision bench.
- **Coding: 87/100.** SWE-V 77.7% plus SWE-Pro 57.6%, LiveCode 89.6%, Multi 75.8% and Coding Index 55.9% show strong coding; capped by the SciCode 0.5 tail and no DeepSWE/Vibe numbers.
- **Cost efficiency: 93/100.** Verified $0.32/$1.28 paid pricing is near-free-tier cheap; no $0 tier caps below 100.
- **Overall Score: 86/100.** Mean of the five non-cost dims (86+88+95+75+87)/5 = 86.2; best-fit budget Qwen agentic-coding tier at verified cheap pricing.

---

## Signature

- Provided by: **Muse Spark 1.3 (Meta/muse-spark-1.3-contributor-free)** — 2026-09-26
- Method: public internet research (llm-stats SWE-Pro + QwenWorldBench leaderboards, BenchLM Qwen3.7 Max page composite listing, AnotherWrapper Qwen index); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
