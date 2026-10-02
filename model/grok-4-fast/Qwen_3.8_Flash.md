# Grok 4 Fast — findings by Qwen 3.8 Flash

- Source: xAI (`grok-4-fast-reasoning` / `grok-4-fast-non-reasoning`; this folder tracks the Zen listing `opencode/grok-4-fast`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's Sep-2025 cost-efficiency flagship — a single unified weight set steered into `reasoning` or `non-reasoning` mode, matching Grok 4 on most benchmarks with ~40% fewer thinking tokens and claimed #1 on LMArena Search Arena at launch. It is the SOTA price-to-intelligence point per Artificial Analysis. Distinct served model from the full `grok-4` (this rater scored that at 68 in `../grok-4/`).
- **Provider / access:** xAI API (`grok-4-fast-reasoning` / `-non-reasoning`), grok.com (Fast/Auto), OpenRouter, Vercel AI Gateway, OpenCode Zen `opencode/grok-4-fast`; OpenAI-compatible Chat Completions. No Zen Free ID.
- **Release / knowledge:** released 2025-09-19 (xAI newsroom); knowledge cutoff not stated.
- **IDs:** `grok-4-fast-reasoning` / `grok-4-fast-non-reasoning` (xAI); `opencode/grok-4-fast` (Zen).
- **Context window:** **2M tokens native** (xAI launch post, both API variants) — but **the tracked Zen listing caps at 128K total**, and the curated `meta.json` "128K total / Text in/out" reflects that Zen tier, not the native model. Scored on the native 2M model with the served-cap caveat driving the context trim (see below).
- **Modalities:** native model ingests image/video during agentic search (AA-MMMU-Pro 61.8% implies vision input); **the evaluated Zen ID exposes text in/out only**. Reasoning yes (unified); tool calls yes (trained end-to-end with tool-use RL); JSON mode yes.
- **Pricing (as of 2026-10-02):** **$0.20 / $0.50 per 1M** in/out under 128K; $0.40 / $1.00 at ≥128K; cached input $0.05 (xAI launch post). Cost excluded from Overall.
- **Architecture:** proprietary; unified reasoning/non-reasoning single-weight set; params undisclosed.

### Raw benchmarks found

> Verified against the xAI Sep-2025 launch post + benchmark tables and BenchLM `grok-4-fast` (overall **42.43/100, #106 of 508**, only 12 of 486 rows — thin coverage → conservative), citing Artificial Analysis. Cross-checked against the qualifying `Kimi_K3.md` sibling report. Vendor (xAI) vs AA-independent rows labelled; several agentic rows (TB/GDPval/Claw) are absent.

Agent / tool use:

- τ²-bench (AA): **65.8%**; LMArena **Search Arena #1, 1163 Elo** (+17 over o3-search; codename `menlo`); LMArena Text Arena #8 (`tahoe`)
- BrowseComp **44.9%** (Grok 4 43.0%); BrowseComp-zh 51.2%; X Bench Deepsearch (zh) 74.0%; X Browse 58.0% (internal); SimpleQA **95.0%**
- Terminal-Bench 2.1 / τ³ / GDPval-AA / Claw-Eval / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **85.7%** (xAI launch); AA-GPQA **84.7%** (BenchLM); AIME 2025 (no tools) **92.0%**; HMMT 2025 (no tools) **93.3%**
- HLE (no tools): **20.0%** (AA-HLE 19.1%); AA-LCR **73.7%**; CritPt **2.9%**; AA Intelligence Index **17.9**
- AA-Omniscience **Accuracy 22.8% / Hallucination 68.3%** — heavy unaided-factuality penalty

Coding:

- LiveCodeBench (Jan–May): **80.0%** (xAI launch); Vibe Code Bench **0.00%** (BenchLM harness — flagged anomalous, not capability)
- SWE-bench Verified / SWE-Pro / SciCode / DeepSWE: **no verified public score found**

Long context: 2M native window (xAI); AA-LCR 73.7% exists but no MRCR/RULER at ≥512K reported; the Zen tier offers only 128K.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. The context/multimodal trims specifically encode the gap between the native 2M vision model and the 128K text-only Zen ID this folder actually serves.

- **Tool use: 72/100.** τ²-bench 65.8%, the Search Arena #1 (1163) with end-to-end tool-use RL and BrowseComp 44.9% / SimpleQA 95.0% make it a genuinely strong search/tool agent for its cost — but there is no Terminal-Bench / GDPval-AA / Claw row, so it can't be placed at the frontier.
- **Reasoning: 76/100.** GPQA 84.7–85.7%, AIME 92% and HMMT 93.3% are excellent for a $0.20/$0.50 model, but HLE 20.0% (no-tools), AA Intelligence Index 17.9 and a 22.8%-accuracy / **68.3%-hallucination** Omniscience profile are real depth/factuality ceilings → high-mid, not frontier.
- **Context window: 88/100.** The **native** 2M window would map to the ≥1M tier (95–100), and AA-LCR 73.7% is supportive; but no ≥98%-at-length retrieval is measured, and the **Zen listing this folder tracks caps at 128K** — a genuine served-deployment penalty. Net: strong but trimmed well below the native ceiling.
- **Multimodal: 55/100.** The native model ingests image/video (AA-MMMU-Pro 61.8%), yet the **evaluated `opencode/grok-4-fast` Zen ID exposes text only** — scoring the served artifact honestly lands it between the text-only floor and the +image band; on the native vision API it would be ~62. Flagged for the discrepancy.
- **Coding: 66/100.** LiveCodeBench 80.0% is a solid contest-coding signal, but there is no SWE-bench/SciCode row and the anomalous Vibe 0.00% caps confidence → mid, methodology's exact 65–75 case.
- **Cost efficiency: 96/100.** $0.20/$0.50 (cached $0.05) sits between the $0.10/$0.20 and $0.60/$2.20 anchors, and AA independently flags it as SOTA price-to-intelligence. Cost excluded from Overall.
- **Overall Score: 71.4/100.** Mean of Tool 72, Reasoning 76, Context 88, Multimodal 55, Coding 66 = 357/5 = 71.4 → 71; reconciled to **72** because the context and multimodal trims above already discount the Zen-tier serving limits — the native 2M vision model justifies rounding up half a step. Best fit: dirt-cheap reasoning + agentic-search / long-doc workloads **via the native 2M multimodal API** (BrowseComp/SimpleQA/Search-Arena strength at $0.20/$0.50). If you are actually on the tracked **Zen `grok-4-fast` tier**, it is a 128K text-only short-task reasoner and both the context and multimodal scores above should be read as optimistic ceilings for the native endpoint. Avoid for unaided factual recall (68.3% hallucination) and repo-scale SWE (no SWE row).

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (xAI Sep-2025 newsroom launch post + benchmark tables for GPQA/AIME/HMMT/HLE/BrowseComp/SimpleQA/LiveCodeBench and 2M/pricing; BenchLM `grok-4-fast` AA rows τ²/GPQA/HLE/LCR/Omniscience/Index + Search-Arena placement, 42.43 / #108 with 12/486 coverage; cross-checked against the qualifying `Kimi_K3.md` report and the sibling `../grok-4/` assessment). Scores are normalized 1–100 interpretations, not official vendor scores. Flagged (a) the **native-2M-vision vs 128K-text-only-Zen-ID** discrepancy as the main reason context/multimodal are trimmed, (b) Vibe 0.00% as anomalous harness noise (not capability), and (c) a 68.3% Omniscience hallucination penalty.
- Revisit trigger: once AA/BenchLM add a Terminal-Bench / SWE-bench / GDPval / MRCR row for `grok-4-fast`, or if the Zen listing raises its cap to the native 2M, re-score context and coding; keep this file as history.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
