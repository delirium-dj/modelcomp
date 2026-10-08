# Muse Spark 1.3 — findings by Laguna XS 2.1

- Source: Meta (`muse-spark-1.3`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 (Contributor / Free / Standard / Max are tiers of the same weights, not separate models)
- **Short description:** Meta's fourth Muse Spark release in five months (launched 2026-09-01/02), live in Muse Code and the Meta Model API; 1M-token context, multimodal input, positioned as an efficiency + capability step over 1.2 (~20% fewer tool calls, ~25% fewer tokens for the same agentic work, per Meta).
- **Provider / access:** Meta Model API and Muse Code; also listed on OpenCode Zen (`opencode/muse-spark-1.3`) and Vercel AI Gateway. Chat Completions-style API with `reasoning_effort` tiers (`xhigh` generally available; `max` in limited partner preview).
- **Release / knowledge:** 2026-09-01/02 (launch scorecard September 2026); knowledge cutoff not published in sources found.
- **IDs:** `opencode/muse-spark-1.3` (Zen); Meta Model API ID per Meta docs.
- **Context window:** 1M tokens total (1,048,576); max output 131,072 per Vercel AI Gateway changelog / AA model page.
- **Modalities:** text, image, video, PDF in; text out; reasoning yes (effort tiers); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-04):** Standard $1.25 / $4.25 per 1M input/output, cached input $0.15; Contributor tier $0 (limited-time free, Meta trains on prompts/completions — not for confidential code).
- **Architecture:** proprietary; no parameter count published.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta launch scorecard, self-report); **84.3% max / 85.4% xhigh** (Artificial Analysis, 2026-09-29); **72.28% xhigh / 79.03% max** (Vals AI, Terminus 2 harness, accessed 2026-09-23)
- Tau3-Banking / Tau2-Bench: **47% xhigh / 52% max** (Artificial Analysis launch article)
- GDPval-AA: **1709 xhigh / 1754 max** (Elo; Artificial Analysis / Dataconomy)
- OSWorld 2.0: **66.9%** (Meta launch scorecard via Dataconomy)
- AutomationBench: **49.4%** (Meta launch scorecard via Dataconomy)
- SWE-Atlas Codebase QnA: **59.4%** (Meta self-report, mini-swe-agent, rank 10/35 per BenchmarkList)
- Agents' Last Exam (Snorkel): **32.2%** (independent, 2026-10-01)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5% max / 94.1% xhigh** (Artificial Analysis, 2026-09-29; saturated per The Model Gap)
- HLE (no tools): **48.7% max / 47.5% xhigh** (Artificial Analysis, 2026-09-29)
- LiveBench: **81.6** (xHigh, livebench.ai, 2026-09-03)
- LCR: **79%** (Meta launch scorecard via Dataconomy)
- Artificial Analysis Intelligence Index: **~62 max / 61 xhigh** (AA launch article / Dataconomy)
- Omniscience Accuracy / Hallucination Rate: **43.6% / 32.9%** (Artificial Analysis via BenchLM)
- CritPt: no verified public score found

Coding:

- DeepSWE 1.1: **75.4%** (Meta self-report, mini-swe-agent; field leader rank 2/52 per BenchmarkList; no independent verification yet)
- SWE-bench Verified / SWE-Pro: no verified public independent score found (Meta methodology describes harness, no headline number published in sources found)
- SciCode: **57.3%** (Meta via Dataconomy) / AA-SciCode **58.8%** (Artificial Analysis via BenchLM)
- AA Coding Index: **76.3 / 75.8** (Dataconomy / Artificial Analysis)
- CursorBench 4.0: **41.6%** (Cursor evals via BenchLM)
- LiveCodeBench: no verified public score found for 1.3 (per The Model Gap, 2026-09-03)
- DeepSearchQA: **89.4%** (Meta self-report)

Long context:

- MRCR v2 (8-needle): **98.5%** at 256K–512K, **98.1%** at 512K–1M (Meta launch scorecard)

### Normalized scores (1–100)

- **Tool use: 92/100.** TB2.1 88.8% self-report / 84–85% AA / GDPval 1754 and OSWorld 66.9% put it at the frontier band; capped by the wide TB2.1 harness spread (Vals AI 72–79%) and missing MCP-Atlas/Claw-Eval rows.
- **Reasoning: 92/100.** GPQA 93.5%, HLE 48.7%, LiveBench 81.6 and Intelligence Index ~62 all clear the frontier references; capped by GPQA saturation and the absence of an independent CritPt row.
- **Context window: 100/100.** 1M window with MRCR v2 98.5% at 256–512K and 98.1% at 512K–1M meets the "≥1M with ≥98% retrieval at 512K+" top tier.
- **Multimodal: 85/100.** Text/image/video/PDF in, text out only — solid mid-top band; capped by no audio input and no non-text output.
- **Coding: 94/100.** DeepSWE 75.4% (field leader) plus SciCode ~58%, Coding Index 76 and TB2.1 88.8% meet the frontier refs; capped because the headline DeepSWE number is self-reported and no independent SWE-bench Verified row exists.
- **Cost efficiency: 90/100.** Standard $1.25/$4.25 maps to ~88 per methodology (plus a $0.55/task Pareto lead per AA); Contributor $0 tier would score 100 but is time-limited and trains on user data.
- **Overall Score: 92.6/100.** Half-up mean of (92, 92, 100, 85, 94) = 92.6 — default pick for long-horizon agentic coding when the Contributor free tier is acceptable, otherwise a top paid frontier option.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-04
- Method: public internet research (Meta launch scorecard/methodology, Artificial Analysis, Vals AI, livebench.ai, Snorkel, Dataconomy, BenchLM, BenchmarkList, The Model Gap); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
