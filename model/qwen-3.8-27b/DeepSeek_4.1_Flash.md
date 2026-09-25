# Qwen3.8-27B — findings by DeepSeek 4.1 Flash

- Source: Alibaba Qwen / Qwen3.8-27B (`Qwen/Qwen3.8-27B`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B (also written Qwen 3.8 27B). No "Free" wording — open weights, no Zen Free ID.
- **Short description:** Alibaba's dense 27B open-weights vision-language model of the Qwen3.8 generation, aimed at image/video understanding plus agentic coding and long-horizon tool use on modest hardware. A different model from the proprietary Qwen3.8-Flash-Next / Qwen3.8-Max entries (same generation, different weights).
- **Provider / access:** open weights (`Qwen/Qwen3.8-27B`, Apache-2.0) on Hugging Face / ModelScope, self-hostable in fp8/int4; also served by third-party hosts. No OpenCode Zen Free ID found (`noFreeId: true` in this folder's `meta.json`). OpenAI-compatible Chat Completions API; thinking mode default on.
- **Release / knowledge:** released 2026-08-14 (BenchmarkList launch post). Knowledge cutoff not disclosed.
- **IDs:** `Qwen/Qwen3.8-27B` (open weights). No `opencode/qwen-3.8-27b-free` ID exists.
- **Context window:** 262,144 tokens native; the project `meta.json` records 1M extension with YaRN. Native figure is the one scored — no independent retrieval measurement at 1M was published, so the larger window is treated as unverified.
- **Modalities:** text, image and video in; text out; reasoning yes; function calling / JSON output yes (BenchmarkList capability rows).
- **Pricing (as of 2026-09-25):** no published API list price found (BenchmarkList: "Price not published"). Open weights ⇒ ~$0 marginal cost self-hosted; hosted per-token rates vary by provider. No free Zen tier.
- **Architecture:** dense 27B vision-language transformer, Apache-2.0 weights (vendor/registry).

### Raw benchmarks found

Agent / tool use:

- Tau3-Banking: **48.0%** (BenchmarkList; 98th percentile, rank 5 of 174)
- GDPval-AA: **1,543 Elo** (BenchmarkList; 94th percentile, rank 22 of 340)
- OSWorld-Verified: **84.3%** (BenchmarkList; 93rd percentile, rank 5 of 61)
- AndroidWorld: **81.9%** (BenchmarkList; rank 6 of 21); WebArena-Verified: **64.8%**; ClawEval-MM: **57.4%**
- Toolathlon: **67.1%**; WildClawBench: **48.0%**; JobBench: **33.4%**; Agents' Last Exam: **20.4%**; RuneBench: **2.8**
- Terminal-Bench 2.1: **0.8%** as printed by BenchmarkList (with "85th percentile, rank 28 of 182") — score and percentile are mutually inconsistent in the source; treat the row as a tracker error, not a measured score.
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.5%** (BenchmarkList; 94th percentile, rank 31 of 464)
- HLE: **33.9%** (BenchmarkList; 90th percentile, rank 48 of 466)
- Artificial Analysis Intelligence Index: **52** (94th percentile, rank 28 of 418); AIIQ Composite IQ **112**
- CritPt: **5.4%**; ERQA: **65.5%**; IFBench: **79.5%**
- AA-Omniscience: **-9.98** index (BenchmarkList; 15th percentile — weak factual reliability)
- LCR / MLCR: no separate value found (AA-LCR 77.3% listed under long context)

Coding:

- LiveCodeBench: **90.3%** (BenchmarkList; 88th percentile, rank 7 of 49)
- SWE-bench Pro: **61.7%**; SWE-bench Multilingual: **73.8%** (BenchmarkList)
- SciCode: **44.7%**; DeepSWE 1.1: **42.2%**; NL2Repo: **42.3%**; Vision2Web: **62.9%**
- AI WebDev Arena: **1597.46 Elo** (88th percentile, rank 13 of 105)
- SWE-bench Verified: no verified public score found

Long context:

- Context Arena: **92.8% / 94.0% / 90.2%** across three reported splits (BenchmarkList; 100th percentile, rank 1 of 31 / 20 / 11)
- AA-LCR: **77.3%** (94th percentile, rank 26 of 409)

### Normalized scores (1–100)

- **Tool use: 88/100.** Tau3-Banking 48.0% and GDPval-AA 1,543 Elo sit at the frontier anchors (Tau3 ~50%+, GDPval ~1750+), with OSWorld-Verified 84.3% and Toolathlon 67.1% confirming real computer/agent use. Capped below 92 by the unsourced Terminal-Bench 2.1 row and the absence of any Claw-Eval number.
- **Reasoning: 88/100.** GPQA Diamond 90.5% meets the 90%+ frontier anchor and HLE 33.9% is close to the 40% reference, but the 52-point Intelligence Index and AA-Omniscience -9.98 keep it short of the top band.
- **Context window: 76/100.** 262K native maps into the 200K–500K tier (65–84). Top-of-class retrieval (Context Arena #1 in three splits, AA-LCR 77.3%) earns the upper half; the 1M YaRN window is unscored because no retrieval-at-1M evidence exists.
- **Multimodal: 80/100.** Native image and video input with text output lands in the 75–90 band (MMMU-Pro 76.3%, video LVBench 72.4%, MathVision 90.0%); no audio input or non-text output caps it at 80.
- **Coding: 82/100.** LiveCodeBench 90.3% and WebDev Arena 1597 Elo are strong, but SciCode 44.7% (<55) and DeepSWE 42.2% (<74) miss the frontier refs, holding it in the low 80s.
- **Cost efficiency: 90/100.** No published API price, but Apache-2.0 weights make self-hosting ~free at the margin and quantized local runs cheap; the missing free Zen tier (and unknown hosted rates) prevents the 97–99 band.
- **Overall Score: 83/100.** (88 + 88 + 76 + 80 + 82) / 5 = 82.8 → 83. Best fit: self-hosted multimodal agent work — strong agentic/vision scores with an open licence, traded against a 262K window and a weak factuality row.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-25 UTC
- Method: public internet research (BenchmarkList model page, vendor/registry entries); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
