# Muse Spark 1.3 — findings by Step 5 Preview

- Source: Meta (Meta Superintelligence Labs) `muse-spark-1.3`
- Date: 2026-10-19 (UTC) — third-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 (`muse-spark-1.3`; Zen route `opencode/muse-spark-1.3`)
- **Short description:** Meta Superintelligence Labs' proprietary frontier model trained for long-horizon agentic workflows and competitive coding. Improves on Muse Spark 1.2 in multitasking, instruction following, and long-context collaboration. Not a variant of another entry — the successor generation to `muse-spark-1.2`.
- **Provider / access:** Meta Model API (`opencode/muse-spark-1.3`), also via OpenRouter and Muse Code. OpenAI-SDK-compatible Chat Completions endpoint. Two tiers of the SAME weights: **Standard** `muse-spark-1.3` (privacy-preserving, $1.25/$4.25) and **Contributor** `muse-spark-1.3-contributor` ($0.10/$0.20, Meta may train on your prompts). Only price and data-use policy differ.
- **Release / knowledge:** Released 2026-09-02. Knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/muse-spark-1.3` (Standard); `opencode/muse-spark-1.3-contributor` (Contributor). No separate "Free" ID on Zen — the $0 Contributor tier is the free route.
- **Context window:** 1,048,576 (1M) total input; 943,700 (~944K) max output, verified on Meta developer page + llm-stats.
- **Modalities:** Text, Image, Audio, Video, PDF in; Text out; reasoning yes (`reasoning_effort` up to `max`); tool calls yes; JSON mode yes. Native multimodal perception runs visual reasoning through a real execution environment.
- **Pricing (as of 2026-10-08):** Standard $1.25/M in · $0.15/M cached in · $4.25/M out. Contributor $0.10/M in · $0.002/M cached in · $0.20/M out (training-data consent caveat — not for confidential code).
- **Architecture:** Proprietary, weights not disclosed; open-weights path uncertain (EU AI Act Art. 53 systemic-risk exemption likely inapplicable).

### Raw benchmarks found

> Cross-referenced five sources: Meta official page (self-reported, `max` tier), benchmarkregistry.org (30 results/20 benchmarks, independent + self-reported), themodelgap.com (independent AA runs + noise-band analysis), llm-stats.com, benchlm.ai. Independent runs preferred where both exist.

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta self-reported, max) / **84.3%** (Artificial Analysis, max — independent, themodelgap) / **72.3%** (Vals AI Terminus-2, xHigh — independent)
- Terminal-Bench 4.0: **24.75** (Vals AI, independent) / **14.6%** (Muse Code harness) / **10.6%** (Vals AI mini-swe-agent) — the newest/hardest long-horizon bench, still early
- GDPval-AA v2 (Elo): **1754** (Meta self-reported) — at the frontier threshold
- OSWorld 2.0: **66.9 partial / 32.0 binary** (Meta self-reported)
- Vals Index 2.1: **53.2%** (xHigh, Vals AI — independent)
- DeepSearchQA: **90.3%** (Meta self-reported)
- AutomationBench: **49.6%** (self-reported) / **20.7%** (Zapier independent, 1.0.6)
- APEX-Agents Original: **58.6%** (xHigh) / **47.6%** (Max) (Mercor — independent)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Artificial Analysis, max — independent; saturated board, trust grade D)
- HLE (no tools): **48.7%** (Artificial Analysis, max — independent)
- LiveBench Composite: **81.6** (xHigh, independent; +3.6 over 1.2 at matched tier)
- MRCR 256K–512K: **98.5%** (Meta self-reported)
- MRCR 512K–1M: **98.1%** (Meta self-reported)
- CharXiv (descriptive + reasoning): **93.9%** (Mercor single-shot, max — independent)
- Artificial Analysis Intelligence Index: **48** (max, live on the AA leaderboard 2026-10-10 — previously "pending"; a broad composite well below the 60+ frontier ref, though it aggregates coding/agentic/long-context where 1.3 is not its strongest, vs. its near-ceiling GPQA/HLE/MRCR)

Coding:

- DeepSWE v1.1: **75.4%** (Meta self-reported, max; no independent run yet to check)
- SWE-bench Verified: no verified public score found (not on any board checked)
- SWE Atlas Codebase QnA: **59.4%** (Meta self-reported)
- LiveCodeBench: no verified public score found for 1.3
- Vibe Code Bench 1.1 (OpenHands): **82.9%** (Vals AI, xHigh — independent)
- CursorBench 4.0: **29.3/32.6/33.4%** (low/med/high, Cursor — independent)

Long context:

- MRCR v2 8-needle 512K–1M: **98.1%**; 256K–512K: **98.5%** (self-reported) — ≥98% retrieval at 512K+
- **AA-LCR: 83.0%** (Artificial Analysis, 2026-10-19 via BenchLM) — independent long-context-reasoning row

Third-pass verification (2026-10-19):

- Artificial Analysis (max): Intelligence Index **48** (#24/214 — matches the file), 132.5 tok/s (#37/186), TTFT 64.73s, Standard-tier pricing $1.25/$4.25 with 88% cache discount (blended $0.78/M; $1.60 per Index task), 1M context, text/image/video, 170M Index tokens (very verbose), 1 provider — not deprecated
- BenchLM composite: 35 of 666 benchmarks covered, no public overall score (unranked); new rows filling the file's gaps: GDPval-AA **59.0% normalized** (AA — the missing normalized row for the file's Elo 1,754), AA Agentic Index **55.7%** (strong), AA Tau3 Banking **50.5%**, AA Coding Index **75.8%**, JobBench **64.9%**, CWE-bench v1 **55.0%**, CritPt **24.9%**, AA-Omniscience index **25.0%** / accuracy 43.6% / hallucination 32.9%, Epoch FrontierMath v2 Tiers 1–3 **74.0%** / Tier 4 **46.3%** (strong math), Bug Hunt Bench **32.2 fixes**, FrontierSWE v2 **25.8%** (weak), Gray Swan IPI **15.9%**
- Still weak on the hardest suites: Terminal-Bench 4.0 ~24.75 (Vals AI), independent AutomationBench 20.7%, MazeBench **0%**, ApprenticeBench **19%** — the caps on Tool use 91 / Coding 93 are unchanged

### Normalized scores (1–100)

- **Tool use: 91/100.** GDPval-AA 1754 Elo and TB2.1 84–89% sit at the frontier threshold (rubric ≥1750 / ≥88% → 90–100), and Vals Index 53.2% is solid. Capped below the very top by the hardest long-horizon benches: Terminal-Bench 4.0 only ~24.75 (Vals AI) and AutomationBench independent run 20.7% — the newest agentic evals still expose gaps that TB2.1's earlier generation hid.
- **Reasoning: 92/100.** HLE 48.7% clears the frontier 40% bar and GPQA Diamond 93.5% is near-ceiling (though saturated/trust-D), with MRCR 98%+ at long range. Capped by LiveBench 81.6, Vals Index 53.2%, and the now-live Artificial Analysis Intelligence Index of 48 — all broad composites below the 60+ frontier ref, even as the point benchmarks (GPQA/HLE/MRCR) stay frontier.
- **Context window: 100/100.** 1M input / 944K output with MRCR ≥98% retrieval at 512K+ — squarely in the rubric's "≥1M = 100 if ≥98% retrieval at 512K+" top tier.
- **Multimodal: 90/100.** Text + image + audio + video + PDF in (text out), so it hits the 90–100 band; CharXiv 93.9% (independent) confirms strong multimodal reasoning. Not a full 100 because output is text-only (no native non-text generation).
- **Coding: 93/100.** DeepSWE 75.4% (self-reported, >74 frontier ref), TB2.1 88.8%, Vibe Code 82.9% — all at the frontier coding band. Capped by the absence of an independent SWE-bench Verified / LiveCodeBench run and the harder TB4.0 (~24.75) and CursorBench (~33%) long-horizon results.
- **Cost efficiency: 98/100.** Contributor tier $0.10/$0.20 (rubric ~$0.10/$0.20 = 97–99); Standard tier $1.25/$4.25 also competitive. Free tier carries a training-data-consent caveat (not confidential-safe).
- **Overall Score: 93/100.** Mean of the five non-cost dims (91+92+100+90+93)/5 = 93.2. Best fit as the default long-horizon agentic/coding model when the free Contributor tier is acceptable; use the Standard tier for confidential work.

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Third-pass verification (2026-10-19) re-ran Artificial Analysis (max: Index 48 #24/214 — unchanged; 132.5 tok/s; TTFT 64.73s; $1.60 per Index task; 170M tokens — very verbose) and BenchLM (35/666, unranked): the file's GDPval-normalized and agentic-index gaps are filled (GDPval-AA 59.0% normalized, AA Agentic Index 55.7%, AA Coding Index 75.8%, Tau3 Banking 50.5%, JobBench 64.9%, CWE-bench 55.0%, CritPt 24.9%, Omniscience 25.0%, Epoch FrontierMath v2 74.0%/46.3%) — all reinforcing the existing Tool 91 / Reasoning 92 / Context 100 / Multimodal 90 / Coding 93 reads, no score change; TB4.0 ~24.75, MazeBench 0% and ApprenticeBench 19% keep the caps. Second-pass verification (2026-10-10) cross-referenced benchmarkregistry.org (30 primary-source results, updated 2026-10-07) and the AA live leaderboard (Index 48). Prior pass (2026-10-08) used Meta's official page, benchmarkregistry.org, themodelgap.com, llm-stats.com, and benchlm.ai.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

