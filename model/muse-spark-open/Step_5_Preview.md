# Muse Spark Open — findings by Step 5 Preview

- Source: Meta / Meta AI (FAIR) (`Muse Spark Open`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark Open (816B-A42B). An **open-weights SKU**, not a tier of Muse Spark 1.3 — different release line, different weights, self-hostable.
- **Short description:** Meta's first open Muse model, positioned as "the most capable open-weight model from a US lab". An 816B-total / 42B-active multimodal MoE built for coding agents, MCP orchestration and end-to-end agentic workflows. LLMLearner's editorial verdict after 39 recorded benchmarks is blunt and well-supported: a **tool-use specialist, not a coder**.
- **Provider / access:** Meta Model API at $1.25/$4.25; weights downloadable from Hugging Face (`meta-models/Muse-Spark-Open-816B-A42B`) under the **Muse Model License** (commercial use allowed with conditions); Artificial Analysis records **6 providers** serving it. Self-hosting is a genuine option given the 42B active parameter count.
- **Release / knowledge:** released 2026-10-15. **Knowledge cutoff not disclosed.**
- **IDs:** `opencode/muse-spark-open` on Zen (paid, $1.25/$4.25/$0.15); `meta-models/Muse-Spark-Open-816B-A42B` on Hugging Face.
- **Context window:** 1M tokens (1,048,576). **Max output not published** by Meta (LLMLearner lists `—`).
- **Modalities:** text, image, **audio and video** input; text output. Reasoning model with tool use, function calling, computer use and long context. A separate commentary channel lets the model state intent before acting.
- **Pricing (as of 2026-11-05):** **$1.25 input / $0.15 cached / $4.25 output per 1M** on Meta Model API. AA reports an 88% cache discount and a $0.78/1M blended rate at 7:2:1 cache-hit/input/output, and **$2.02 per Intelligence Index task**. AA is explicit that at these rates it is "particularly expensive when comparing to other open weight models of similar size" — LLMLearner puts it at roughly 4x DeepSeek-V4.1-Flash-1017's rate and 7–8x MiniMax M3.1 Flash's, both of which score higher on DeepSWE and the AA index.
- **Architecture:** open-weight MoE, **816B total / 42B active parameters**.

### Raw benchmarks found

Meta's own table is the `Muse Spark Open (xhigh)` column, labelled "best available / self-reported harness". Artificial Analysis measured several of the same benchmarks independently and is listed separately.

Agent / tool use:

- MCP-Atlas: **89.2%** (#2 of 49 — the strongest tool-orchestration result in this entire research series)
- OSWorld-Verified: **80.4%** (#11/36); Toolathlon-Verified: **72.8%** (#19/38)
- HLE with tools + internet: **61.0%** (#10/144) — one of the highest open-weight HLE scores
- JobBench: **61.8%** (unranked in LLMLearner's field); Finance Agent v2: **61.3%** (#3/75); EMB (Excel Modeling): 53.7% (#51/76); Tax Agent Bench 26.3% (#42/69); Plotly Analytics Exam 88.0% (#2/2)
- Terminal-Bench 2.1: **76.4%** (#46/61 — mid-table, consistent across Meta, LLMLearner, AA and BenchLM)
- **Terminal-Bench 4.0: 8.1%** (Artificial Analysis) — a severe drop-off on the newer terminal harness; LLMLearner had no TB4.0 run as of Oct 23, so this is the first recorded figure
- MazeBench: **0%** (BenchLM) — the weakest result in this report series
- GDPval-AA v2: **1,401 Elo** (#16/19) / **45.1%** AA-normalized; AA-Briefcase: 1,278 Elo; AA-AutomationBench: 49.7%
- APEX-Agents: **33.4%** (#49/56); GDPx: **1.7** (#20/20); GDP.pdf: 18.6%
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **89.0%** (#57/198) — just below the 90% frontier reference
- AA-HLE: **43.9%**; HLE-Diamond (no tools): **26.1%** (#5/6); HLE (tools + internet): **61.0%** (#10/144) — three different harnesses, all reported rather than averaged
- SciCode: **58.5%** (#18/98); FrontierMath v2: 69.8% (#29/83); FrontierMath Tier 4 v2: **31.7%** (#31/71)
- ARC-AGI-1: **89.0%** (#32/82); ARC-AGI-2: **57.5%** (#37/75)
- AA-LCR: **78.3%**; **CritPt: 14.9%**; **MLCR-AA: 7.8%** — the two physics/long-context-reasoning scores are the weakest in this series
- AA-Omniscience: index **25.8**, accuracy **42.0%**, hallucination rate **28.0%**
- Artificial Analysis Intelligence Index: **39.0** (v4.3, no-tools) — **#16 of 16, last on that board**, behind DeepSeek-V4.1-Flash-1017 (45.1) and MiniMax M3.1 Flash (42.4); **24.7** (v5.0, with tools, #26/37); AA's own page reports **25**, i.e. #11 of 24 among open-weight models of similar size (median 23)
- MRCR: **no verified public score found**

Coding:

- DeepSWE: **60.0%** (#38/59); SWE-Atlas-QnA: **58.0%** (#7/17)
- Vibe Code Bench v1.1: **76.2%** (#37/114); Code Migration: **21.2%** (#51/78)
- Terminal-Bench 2.1: 76.4% (#46/61); Terminal-Bench 4.0: 8.1%
- SWE-bench Verified: **no verified public score found**

Long context:

- AA-LCR: **78.3%**; MLCR-AA: 7.8%. 1M window confirmed by Meta, AA and BenchLM. No MRCR/RULER/GraphWalks run published.

Multimodal:

- MMMU-Pro: **80.9%** (#25/131); BabyVision: **80.2%** (#13/16); SimpleVQA: **73.6%** (#2/6); ZeroBench: **50.0%** (#8/11)
- IntPhys 2 (video): 68.3%; Video-MME v2: 61.5%; WorldVQA (3000): 49.4%; Design Arena (website): 1,301 Elo

Safety (open-weights standalone robustness — Meta's stated reason for the extra post-training):

- FORTRESS (adversarial robustness): **5.8** (#1/1, lower is better); Meta StrongREJECT v2: **0.5** (#1/1, lower is better) — both top of a one-model board, so treat as indicative, not competitive
- AA-Omniscience: 25.8 index / 42.0% accuracy / 28.0% hallucination rate

### Normalized scores (1–100)

- **Tool use: 80/100.** Genuinely bimodal, and the scoring has to reflect both halves. The tool-orchestration half is world-class: MCP-Atlas 89.2% is **#2 of 49 globally**, with OSWorld-Verified 80.4% (#11), Toolathlon-Verified 72.8% (#19), HLE-with-tools 61.0% (#10/144) and Finance Agent v2 61.3% (#3/75) all top-tier. The agentic-coding half is poor: Terminal-Bench 2.1 76.4% (#46/61), Terminal-Bench 4.0 8.1%, MazeBench 0%, APEX-Agents 33.4% (#49/56) and GDPval 1,401 Elo (#16/19). Averaging the two halves puts it in the upper-middle of the 50–90 band.
- **Reasoning: 64/100.** Above the methodology's mid band on most axes — GPQA Diamond 89.0% (just under the 90% frontier reference), HLE 43.9–61.0% depending on harness, AA-LCR 78.3%, ARC-AGI-1 89.0% — but clearly below frontier, and pulled down hard by CritPt 14.9%, MLCR-AA 7.8%, FrontierMath Tier 4 31.7% and an AA Intelligence Index that is **last of 16** on v4.3 and #26/37 on v5.0.
- **Context window: 95/100.** 1M-token tier as required, confirmed independently by Meta, Artificial Analysis and BenchLM. Held at the tier floor because no MRCR/RULER retrieval number exists and the only long-context figures are AA-LCR 78.3% and MLCR-AA 7.8% — the latter disqualifying the ≥98%-retrieval condition for a 100.
- **Multimodal: 92/100.** Text + image + audio + video input is the joint-widest coverage in this series (top 90–100 tier), and depth is real: MMMU-Pro 80.9%, BabyVision 80.2% (#13/16), SimpleVQA 73.6% (#2/6), IntPhys 2 68.3% on video, plus a 1,301-Elo Design Arena. Not higher because output is text-only and nothing here is class-leading (#25 on MMMU-Pro, behind GPT-6 Astra's #4).
- **Coding: 72/100.** Sits squarely in the methodology's mid band: DeepSWE 60.0% (#38/59), Vibe Code Bench v1.1 76.2% (#37/114), Terminal-Bench 2.1 76.4% (#46/61) and SciCode 58.5% (#18/98) are all serviceable but none clear a frontier reference, and Code Migration 21.2% (#51/78) plus Terminal-Bench 4.0 8.1% are weak. The one bright spot is SWE-Atlas-QnA 58.0% (#7/17). No SWE-bench Verified figure is published.
- **Cost efficiency: 84/100.** The $1.25/$4.25 rate card is the methodology's ~88 baseline, but with **no Pareto-lead bonus**: Artificial Analysis explicitly calls it expensive versus other open-weight models of similar size, at $2.02 per index task while DeepSeek-V4.1-Flash-1017 and MiniMax M3.1 Flash both score higher for a fraction of the price. Kept well above the ~$3/$15 (≈60) tier by the 88% cache discount, the $0.78/1M blended rate and — unlike every closed model here — a real self-hosting escape hatch at 42B active parameters.
- **Overall Score: 81/100.** (80 + 64 + 95 + 92 + 72) / 5 = 80.6 → **81** → 81. Recommendation: the right pick for **MCP-heavy agents, research/finance assistants and any workflow where a US-origin open-weight model is a procurement requirement** — MCP-Atlas #2 in the world plus 1M context and full multimodal input is a genuinely rare combination at any price. Do not pick it for coding agents or terminal work: it trails the Chinese open models on DeepSWE and the AA index at 4–8x their price, and its Terminal-Bench 4.0 and MazeBench results show that gap widening on newer harnesses.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: public internet research using Meta's official model page and benchmark table as the primary source, cross-checked against Artificial Analysis's model page (independent runs of Terminal-Bench 4.0, SciCode, GPQA, HLE, LCR, CritPt, MMMU-Pro, Omniscience, plus cost-per-task and speed measurements), LLMLearner's 39-result catalog with per-leaderboard ranks and editorial analysis, and BenchLM's 29-row transcription. Conflicting figures are listed side by side with their harness (HLE appears three times: 61.0% tools+internet, 43.9% AA harness, 26.1% HLE-Diamond no-tools). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta — Muse Spark Open model page and benchmark table](https://dev.meta.ai/models/muse-spark-open)
  - [Meta AI Research — Introducing Muse Spark Open / evaluation methodology](https://research.meta.ai/blog/muse-spark-open)
  - [Hugging Face — meta-models/Muse-Spark-Open-816B-A42B (weights, license)](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B)
  - [Artificial Analysis — Muse Spark Open (xhigh) model page](https://artificialanalysis.ai/models/muse-spark-open)
  - [LLMLearner — Muse Spark Open (39 curated results + editorial)](https://llmlearner.com/models/muse-spark-open)
  - [BenchLM — Muse Spark Open benchmark scores (50.48/100, #98/1008)](https://benchlm.ai/models/muse-spark-open)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
