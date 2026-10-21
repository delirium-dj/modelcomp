# Qwen3.5-35B-A3B — findings by GLM 5.3

- Source: Alibaba Qwen (`alibaba/qwen3.5-35b-a3b`, weights `Qwen/Qwen3.5-35B-A3B`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-35B-A3B
- **Short description:** Alibaba Qwen's smallest MoE member of the Qwen3.5 generation (February 2026): 35B total / 3B active parameters, unified vision-language (image + video input), thinking mode, tool calling. Top use case: a very cheap, high-throughput multimodal endpoint for coding/agent work where per-token cost dominates.
- **Provider / access:** 23 hosted providers under the models.dev canonical `alibaba/qwen3.5-35b-a3b`; Alibaba Cloud Model Studio `Qwen3.5-35B-A3B` (DashScope OpenAI-compatible); open weights self-hostable (official GPTQ-Int4 quantization and an unsloth mirror on HF) via vLLM/SGLang/Transformers.
- **Release / knowledge:** released 2026-02-23 (models.dev; BenchmarkList lists Feb 25, 2026); knowledge cutoff not stated.
- **IDs:** `alibaba/qwen3.5-35b-a3b` (models.dev canonical), `Qwen/Qwen3.5-35B-A3B` (Hugging Face weights), `Qwen3.5-35B-A3B` (DashScope).
- **Context window:** 262,144 tokens native (official Qwen3.5 generation config, extensible to 1,010,000 via YaRN); max output 65,536 (models.dev provider rows); BenchmarkList's Context Arena rows show the YaRN 1M lane measured with 8.7% AUC at 1M — the native window is the dependable one.
- **Modalities:** text, image, and video in; text out; reasoning yes (thinking mode default); tool calls yes; JSON/structured output yes (models.dev structured = yes).
- **Pricing (as of 2026-10-21):** cheapest hosted route $0.0564 in / $0.4512 out per 1M (models.dev, 23 providers); BenchmarkList lists $0.14 in / $1.00 out; llm-stats $0.14 in / $0.05 cached / $1.00 out; open weights free to self-host.
- **Architecture:** sparse mixture-of-experts, 35B total / 3B activated (the "A3B" designation; llm-stats profile), in the Qwen3.5 hybrid Gated DeltaNet + Gated Attention generation design with an integrated vision encoder and multi-token prediction; open weights (Apache-2.0 is the family license per the sibling model cards).

### Raw benchmarks found

> Vendor numbers from the official Qwen3.5 generation tables (35B-A3B column, published on the sibling HF cards) plus independent BenchmarkList rows (verified 2026-07/09/10-2026) that cross-check the vendor figures. Artificial Analysis itself has no model page (404), but its index components appear via BenchmarkList. Missing rows say "no verified public score found".

Agent / tool use:

- Terminal-Bench 2.1: **40.8%** (BenchmarkList, verified 2026-07-21, rank 93/193, 52nd pct; vendor table "Terminal Bench 2" 40.5% — concordant)
- Terminal-Bench Hard: **26.5%** (BenchmarkList, rank 84/326, 74th pct)
- Tau2-Bench: vendor composite **81.2%**; Tau2-Bench Telecom (BenchmarkList): **89.2%** (rank 56/332, 83rd pct) — concordant
- Tau3-Banking (AA harness): **4.9%** (BenchmarkList, rank 147/176, 17th pct — a verified agentic weak point)
- GDPval-AA: **798 Elo** (BenchmarkList, rank 156/356, 56th pct)
- BFCL-V4 (function calling): **67.3%** (vendor table; BenchmarkList rank 15/102, 86th pct — concordant)
- ScreenSpot Pro: **68.6** (vendor table; BenchmarkList grounding 68.6, rank 20/59 — concordant)
- OSWorld-Verified **54.5%** / AndroidWorld **71.1%** (vendor vision-agent table)
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **84.2%** (vendor table) / **84.5%** (BenchmarkList, rank 94/469, 80th pct — concordant)
- HLE: **22.4%** w/ CoT (vendor table) / **21.0%** (BenchmarkList, rank 121/485, 75th pct — concordant)
- HMMT Feb 25 **89.0%** / HMMT Nov 25 **89.2%** (vendor table; BenchmarkList HMMT 89.0 — concordant); AIME 2026 **93.3%** (BenchmarkList)
- LCR / MLCR: AA-LCR **58.5%** (vendor table) vs **72.0%** (BenchmarkList source 2026-10-18, rank 116/414; AA Intelligence-Index component lists 62.7%) — harness/date spread noted
- Artificial Analysis Intelligence Index: **29.26** (via BenchmarkList, rank 118/433, 73rd pct; components: SciCode 37.7, AA-LCR 62.7, AA-Omniscience −46.38 pts, HLE 19.7, GPQA 84.5, CritPt 0.9)
- MMLU-Redux **93.3%**, MMLU-ProX **81.0%**, SuperGPQA **63.4%** (vendor table; BenchmarkList concordant)
- Omniscience Accuracy / Hallucination Rate: AA-Omniscience contributes −46.38 pts inside the AA Index (BenchmarkList component) — no clean accuracy/hallucination pair published

Coding:

- SWE-bench Verified: **69.2%** (vendor table); SWE-rebench: **53.7%** resolved (BenchmarkList, 29th pct)
- LiveCodeBench v6: **74.6%** (vendor table)
- SciCode: **37.7%** (BenchmarkList, rank 145/303, 52nd pct)
- Terminal-Bench 2.1: **40.8%** (listed under Tool use)
- CodeForces (vendor's own query set): **2028**; OJBench **36.0%**; FullStackBench en **58.1%** / zh **55.0%** (vendor table; BenchmarkList concordant)
- Arena AI WebDev Arena: **ELO 1249.98** (BenchmarkList, 13th pct — weak)
- DeepSWE / Vibe Code Bench / Coding Index: no verified public score found (closest composite: BenchLM Coding 61.1 points)

Long context:

- 262,144 native (official config); Context Arena / GDM-MRCRv2 (BenchmarkList, 2026-08-28): 128K lane **56.7% AUC / 68.9% cum-avg**, YaRN 1M lane **8.7% AUC / 43.1% cum-avg** — native window reliable, the 1M extension degrades hard.

Multimodal (vendor vision-language table, 35B-A3B column):

- MMMU **81.4%**, MMMU-Pro **75.1%**, MathVision **83.9%**, VlmsAreBlind **97.0%** (BenchmarkList: rank 1 of 6), OCRBench **91.0%**, CC-OCR **80.7%**, RealWorldQA **84.1%**, MMStar **81.9%**, VideoMME(w sub) **86.6%**, MLVU **85.6%**, LVBench **71.4%** (BenchmarkList concordant)

### Normalized scores (1–100)

- **Tool use: 55/100.** Function calling is a genuine strength (BFCL-V4 67.3% at 86th pct, Tau2 Telecom 89.2%) and computer use is decent (ScreenSpot Pro 68.6, AndroidWorld 71.1, OSWorld 54.5), but Terminal-Bench 2.1 40.8%, Terminal-Bench Hard 26.5%, Tau3-Banking 4.9%, and GDPval 798 all verify as weak-to-mid — capped by the worst verified agentic numbers in the family.
- **Reasoning: 70/100.** GPQA Diamond 84.5% and competition math (AIME 93.3, HMMT 89.0) are strong, but HLE 21.0%, AA Intelligence Index 29.26 (solidly mid-band), SciCode 37.7%, and AA-LCR 58.5–72 (harness spread) hold it below the 27B sibling's reasoning tier.
- **Context window: 72/100.** 262,144 native lands in the 200K–500K tier (200K = 70); the YaRN 1M extension is vendor-configurable but measured at only 8.7% AUC at 1M (Context Arena), so no extension credit is given.
- **Multimodal: 85/100.** Image and video input with excellent verified results (VlmsAreBlind 97.0 — #1 on BenchmarkList, OCRBench 91.0, VideoMME 86.6 w/ sub, CC-OCR 80.7); capped at the video-in band by text-only output and no audio input.
- **Coding: 68/100.** Vendor SWE-bench Verified 69.2% and LiveCodeBench v6 74.6% are respectable, but independent rows are harsher — SciCode 37.7%, SWE-rebench 53.7%, WebDev Arena 13th pct, OJBench 36.0% — and BenchLM's coding composite sits at the 56th percentile; capped by the weak end of the verified evidence.
- **Cost efficiency: 96/100.** $0.0564/$0.4512 cheapest hosted route with 23 competing providers, only 3B active experts to serve, and open weights — near the value frontier.
- **Overall Score: 70/100.** Half-up mean of the five quality dims (55 + 70 + 72 + 85 + 68 = 350, 350/5 = 70.0 → 70); best fit: the ultra-budget multimodal agent endpoint of the Qwen3.5 family — strong vision and function-calling per dollar, but verify agentic reliability on your own harness before trusting it with terminal work.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-21
- Method: public internet research (official Qwen3.5 generation benchmark tables via the sibling HF model cards, BenchmarkList.com independent rows, models.dev catalog, llm-stats profile, Context Arena/GDM-MRCRv2 rows, Artificial Analysis absence check); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
