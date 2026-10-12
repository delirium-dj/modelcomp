# Muse Spark 1.2 Free — findings by GLM 5.3 Flash

- Source: Meta Superintelligence Labs (`muse-spark-1.2`; OpenCode Zen Contributor free tier)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Free (Contributor free tier of Meta's Muse Spark 1.2; superseded by Muse Spark 1.3, 2026-09-02)
- **Short description:** Meta Superintelligence Labs' coding-focused upgrade to Muse Spark 1.1 and the model behind Meta's Muse Code terminal agent — released 2026-08-05 with 1M context, whole-repository generation and 1,000+ tool-call sessions. Evaluated here on the $0 Contributor tier (training-data consent). BenchLM's 2026-10-10 recomposition ranks it #28 of 889 (66.48) — down from the #11 (71.88) the 2026-10-08 pass cited.
- **Provider / access:** OpenCode Zen Contributor free tier (`opencode/muse-spark-1.2-contributor-free`, Responses API; free in exchange for training-data consent per repo catalog); Meta Model API (`muse-spark-1.2`, model page developer.meta.com/ai/models/muse-spark/); OpenRouter (`meta/muse-spark-1.2`); inside Muse Code. Proprietary, closed weights (a departure from Meta's open Llama line).
- **Release / knowledge:** released 2026-08-05 alongside Muse Code (lineage: Muse Spark 2026-04-08 → 1.1 2026-07-09 → 1.2 2026-08-05 → 1.3 2026-09-02). Knowledge cutoff not verified in this pass.
- **IDs:** `opencode/muse-spark-1.2-contributor-free` (Zen); `muse-spark-1.2` (Meta API); `meta/muse-spark-1.2` (OpenRouter).
- **Context window:** 1,048,576 tokens (unchanged from 1.1; BenchLM concurs), no long-context premium; max output not published on the pages checked.
- **Modalities:** text, images, video and PDFs in; text out (repo catalog adds audio). Reasoning + tool use; optimized for multi-step tool use across thousands of calls.
- **Pricing (as of 2026-10-11):** **$0** on the evaluated Contributor free tier (training-data consent — no confidential code); paid $1.25 in / $4.25 out per 1M, cached $0.15 (same rate as 1.1).
- **Architecture:** proprietary, parameters undisclosed; self-improvement training loop, co-trained with the Muse Code agent.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (each model with its own agent): **82.9%** with Muse Code — 2nd at launch behind Claude Opus 5 86.7% (Claude Code) (Meta launch table via ai-tldr); **Vals independent: 69.7%** — a −13.2-pt vendor-vs-independent gap
- AA Agentic Index: **44.0%** (AA, independent)
- GDPval-AA: **1631** (Meta model page via benchlm.ai); AA-normalized: **48.9%** (AA — well below Opus 5.5's 67.0)
- MCP Atlas: **90.3%** (Benchgen, catalogued in `../../model-comparison.md`)
- Long-horizon tool use: KDA GPU-kernel case study runs **1,000+ tool calls in a single session** (Meta)
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- AA-GPQA Diamond: **90.4%** (AA, independent — corroborates the prior row); AA-HLE: **45.5%** (AA)
- MMLU-Pro: **88.3%** (Vals, independent)
- Artificial Analysis Intelligence Index: **39.6** (AA, independent)
- BenchLM overall: **66.48, #28 of 889** (updated 2026-10-10) — **conflicts with the 71.88 #11 reading the 2026-10-08 pass cited; the recomposed board supersedes it**
- AA-LCR v1.1: **79.0%** (AA — first measured long-context number; fills the gap)
- CritPt: **17.7%** (AA — weak)
- AA-Omniscience: **45.4% accuracy / 33.3% non-hallucination row / 27.2 index** (AA)

Coding:

- SWE-bench (Vals): **86.6%** (Vals, independent — fills the SWE gap)
- AA-SciCode: **57.4%** (AA); AA Coding Index: **72.2%** (AA)
- FrontierSWE v2: **12.0%** (Proximal — very weak vs Opus 5's 52.0%)
- VulcanBench v3: **87.0%** (VulcanBench effort study)
- DeepSWE 1.1: **59.3%** — 3rd at launch behind Opus 5 and GPT-5.6 Terra (Meta launch table; well below the 74%+ frontier ref)
- Meta Internal Coding Bench: **70.6%** — 2nd behind Opus 5 79.4% (same source)

Long context:

- Window: **1M tokens** with no long-context premium
- AA-LCR v1.1: **79.0%** (AA — first measured retrieval-adjacent number)
- MRCR/RULER at window length: no verified public score found

Multimodal:

- Design Arena Website: **1319** (OpenRouter); no MMMU-Pro/CharXiv-class row published

### Normalized scores (1–100)

- **Tool use: 88/100.** (Was 92 on the prior pass.) The independent corrective is material: Vals TB2.1 69.7% vs the vendor's 82.9%, GDPval normalized 48.9% and AA Agentic Index 44.0% sit well below frontier refs; MCP Atlas 90.3% and the 1,000+-call session design keep it a strong agent rather than a frontier one.
- **Reasoning: 83/100.** (Was 88 on the prior pass.) GPQA 90.4% and MMLU-Pro 88.3% remain solid, but AA's Index of 39.6, CritPt 17.7%, Omniscience 45.4% accuracy and the BenchLM recomposition to 66.48 #28 move the frontier-adjacent framing down a band.
- **Context window: 95/100.** (Was 100 on the prior pass.) 1M tokens with no premium still maps to the ≥1M tier, but the tier ceiling requires measured ≥98% retrieval at length; AA-LCR 79.0% is the only measured number and it is mid-pack, so the score aligns with the other 1M-window models lacking strong retrieval evidence.
- **Multimodal: 88/100.** Text + image + video + PDF in (audio per repo catalog); text-only output; Design Arena 1319; no published MMMU-Pro-class benchmark.
- **Coding: 85/100.** (Was 89 on the prior pass.) Vals SWE-bench 86.6% and VulcanBench 87.0% are decent, but DeepSWE 59.3% is far below the 74%+ frontier ref, FrontierSWE v2 12.0% is the weakest measured in this batch, and AA Coding Index 72.2% trails every frontier peer measured this pass.
- **Cost efficiency: 100/100.** Evaluated $0 Contributor free tier (training-data consent); paid $1.25/$4.25 with $0.15 cache noted.
- **Overall Score: 87.8/100.** (Was 91 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (88 + 83 + 95 + 88 + 85) / 5 = 439/5 = 87.8 — lowered on the 2026-10-11 second pass because independent boards (Vals −13.2 on TB2.1, FrontierSWE 12.0, AA Index 39.6, BenchLM #28) contradict the launch-table vendor numbers the prior scores leaned on, the same vendor-vs-independent pattern documented for Gemini 3.8 Flash. Best fit: near-frontier free fallback for long-horizon coding/agentic work when 1.3 Free is unavailable — at $0 the value is unmatched, but the measured capability is a band below the launch story.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 citing Meta's model page, Vals AI leaderboards, Artificial Analysis independent boards (Index/GPQA/HLE/LCR/SciCode/Omniscience/Agentic) via benchlm.ai, Proximal/VulcanBench/OpenRouter, plus the prior 2026-10-08 pass); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
