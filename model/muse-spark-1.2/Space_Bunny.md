# Muse Spark 1.2 — findings by Space Bunny

- Source: Meta (`muse-spark-1.2`; Meta Model API standard tier; OpenCode Zen `muse-spark-1.2`)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-29
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Scope note.** The first pass evaluated OpenCode Zen's withdrawn `muse-spark-1.2-contributor-free`
> alias. This pass covers the **model**, as Meta's own developer page and research site document it,
> because that is what the folder's scores have to mean for every other rater. The free alias
> remains withdrawn — Meta's price table offers a Contributor tier for Muse Spark 1.3
> ($0.10 / $0.002 / $0.20), but **no Contributor tier for 1.2**.

## Model card

- **Name:** Muse Spark 1.2 (xhigh reasoning effort)
- **Short description:** Meta Superintelligence Labs' coding-focused August 2026 update, co-trained with **Muse Code**, Meta's terminal coding agent — positioned for whole-repository generation, long-horizon software work and multi-agent delegation.
- **Provider / access:** **Meta Model API** (`muse-spark-1.2`), direct and self-serve; Muse Code (beta); OpenRouter; OpenCode Zen (`https://opencode.ai/zen/v1/responses`). Rate limits reach 3,000 requests and 4M tokens per minute per team.
- **Release / knowledge:** Released **2026-08-05**; third Muse Spark model in four months (base 2026-04-08, 1.1 on 2026-07-09). Knowledge cutoff not disclosed.
- **IDs:** `muse-spark-1.2`. The Zen alias `muse-spark-1.2-contributor-free` is no longer listed on Zen in any form.
- **Context window:** **1,048,576 tokens (1M)**, unchanged from Muse Spark 1.1; 131,072 max output. No long-context price premium.
- **Modalities:** Text, image, video and PDF input; text output. Meta publishes a dedicated multimodal evaluation methodology covering ten benchmarks plus a Wild Artifact Bench agent suite.
- **Pricing (as of 2026-10-10):** **$1.25 input / $0.15 cached input / $4.25 output per 1M** on the Meta Model API standard tier, explicitly "**not used to improve our products**". The contributor rate Meta charges for 1.3 ($0.10 / $0.002 / $0.20) is not offered for 1.2.
- **Architecture:** Proprietary; Meta discloses no parameter count.

### Raw benchmarks found

*Meta's official evaluation (research.meta.ai; Muse Code harness, xhigh effort, 5 attempts, isolated Daytona sandboxes):*

- **MCP Atlas: 90.3%** — the highest of any model in Meta's comparison set (result produced by Scale AI on the benchmark's own harness: 1,000 tasks, 36 MCP servers, 220 tools, pass at ≥0.75 claim coverage). Ahead of Claude Opus 5 at 85.8%, GPT-5.6 Sol 81.8%, Kimi K3 82.3%
- **GDPval-AA v2: 1,631 Elo** — produced by Artificial Analysis in its Stirrup harness; **#5 of all models AA has measured**, ahead of Claude Opus 4.8 (1,588)
- Terminal-Bench 2.1: **82.9%** (second behind Claude Opus 5 at 86.7%; ahead of GPT-5.6 Terra 81.8%, Grok 4.5 81.6%, Gemini 3.6 Flash 78.9%, Muse Spark 1.1 76.2%)
- DeepSWE v1.1: **59.3%** (third, behind Claude Opus 5 at 65.0% and GPT-5.6 Terra at 64.8%)
- Meta Internal Coding Bench: **70.6%** — 440 tasks drawn from Meta's own internal pull requests, graded by unit tests in dedicated containers; no public dataset
- Long-horizon GPU-kernel case study (KDA): **+68.7%** speedup, 1,000+ tool calls in a single session (Claude Opus 5: +74.0%)
- Against Muse Spark 1.1: Terminal-Bench +6.7, DeepSWE +6.3, GDPval-AA +260 Elo, MCP Atlas +2.2

*Independent:*

- **Vals AI: Vals Index 71.88% ± 1.12, 609.63 s latency, $0.70 per test** — on the current index version this is the highest Vals score of any model measured, ahead of Gemini 4 Argon (68.90%), Claude Sonnet 5.5 (67.04%) and Claude Opus 5.5 (66.97%)
- Artificial Analysis (launch article, index v4.1): Intelligence Index **54**, up 3 from Muse Spark 1.1's 51; **GPQA Diamond 90.4%**; **HLE 45.46% no-tools**; Terminal-Bench 2.1 80%; **τ³-Banking 27%** (up from 25%); minor regressions vs 1.1 on SciCode (−2) and HLE (−1)
- **Index-version conflict:** the same model reads **40 on the re-based v4.3.2 index** that the first pass recorded. The v4.3 rebase added Terminal-Bench 4.0 and AutomationBench-AA and changed private-task weighting, so 54 and 40 are not comparable.
- SWE-bench Verified: **86.6%** (Vals AI, rank 13 of 86, ±1.52, mini-SWE-agent); DeepSWE official board: **55.0%** (rank 13, ±2%, $3.70/test, 99k output tokens, 101 steps)
- **Terminal-Bench 2.1 has a 13-point spread across sources:** 82.9% (Meta / Muse Code), 80.15% (Artificial Analysis), 69.66% (Vals AI / Terminus 2)
- **Terminal-Bench 4.0 (xhigh): 6.1%** (Vals AI, 2026-10-08) — the model's weakest measured row by a wide margin
- LiveBench **78.0** (Reasoning 90.0, Math 91.2, Coding 77.5, Agentic Coding 57.6); Toolathlon-Verified **75.9%** Pass@1 (Pass@3 87.0%, Pass³ 63.0%)
- LMArena text: **1,498.33 Elo, rank 4** on the xhigh listing
- Throughput (first pass): 240.1 tokens/s, rank #4 of 216; TTFT 12.14 s; $0.97 per Intelligence Index task; 130M output tokens across the index

### Normalized scores (1–100)

- **Tool use: 90/100.** **MCP Atlas 90.3% is the strongest tool-selection and orchestration result in Meta's entire comparison set**, and GDPval-AA v2 at 1,631 Elo ranks #5 on AA's leading general-agentic metric. Terminal-Bench 2.1 is strong across all three sources (82.9 / 80.15 / 69.66). Held below the ceiling by τ³-Banking at 27% and Terminal-Bench 4.0 at 6.1%.
- **Reasoning: 90/100.** GPQA Diamond 90.4%, HLE 45.46% no-tools, LiveBench 78.0 with Reasoning at 90.0 and Mathematics at 91.2, LMArena text 1,498 at rank 4. The current Intelligence Index of 40 (v4.3.2) is what stops this going higher — the launch-era 54 was a different index version.
- **Context window: 94/100.** A 1,048,576-token window with 131,072 max output, no long-context premium, and a documented 1,000+-tool-call single-session case study on whole-repository work. Docked only because Meta publishes no retrieval-at-length benchmark (MRCR/RULER/AA-LCR) for this model.
- **Multimodal: 93/100.** Text, image, video and PDF input with text output, and — unusually for a coding-focused release — a full published multimodal evaluation spanning BabyVision, PerceptionBench, ZeroBench, WorldVQA, SimpleVQA, ERQA, OmniSpatial, CharXiv, ChartMuseum, ChartQAPro plus the Wild Artifact Bench agent suite. Text-only output keeps it short of the ceiling.
- **Coding: 91/100.** SWE-bench Verified 86.6% (rank 13 of 86), Terminal-Bench 2.1 82.9% on Meta's own Muse Code harness, Meta Internal Coding Bench 70.6% on 440 real internal pull requests, DeepSWE 55–59.3%, plus a whole-repository training focus. Held off 93+ by the frontier-terminal result (Terminal-Bench 4.0 at 6.1%) and by DeepSWE, where Meta's 59.3% exceeds the official board's 55.0% by 4.3 points — outside that benchmark's own ±2% interval.
- **Cost efficiency: 80/100.** $1.25/$4.25 with an 88% cache discount and no long-context premium, plus the cheapest measured professional-task run in the dataset (**$0.70 per Vals Index test**). It is no longer free — the contributor rate belongs to Muse Spark 1.3 — but the standard tier carries an explicit no-training-use guarantee, which the contributor tier does not.
- **Overall Score: 92/100.** (90 + 90 + 94 + 93 + 91) / 5 = 458 / 5 = 91.6. Best fit as a fast, cheap, long-context agentic coding and MCP-tool model with a no-training-use guarantee; the frontier-terminal suite (Terminal-Bench 4.0) is the one place to test before committing.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: second-pass public internet research across Meta's Muse Spark developer page and pricing table, Meta AI Research's Muse Spark 1.2 evaluation and multimodal-evaluation methodology documents, Artificial Analysis's launch analysis and model data, Vals AI's model page, Datacurve's DeepSWE board, Toolathlon and LiveBench leaderboards, and aggregator tracks of Terminal-Bench 2.1/4.0; the 13-point Terminal-Bench 2.1 spread, the 54-vs-40 index-version conflict, and the DeepSWE vendor-vs-independent gap are all reported side by side rather than merged; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Sources

- Meta AI — Muse Spark 1.2 model page and API price table: https://dev.meta.ai/models/muse-spark-1-2
- Meta AI Research — Muse Spark 1.2 & Muse Code evaluation methodology: https://research.meta.ai/static/muse-spark-1-2-methodology
- Meta AI Research — Muse Spark 1.2 multimodal evaluation methodology: https://research.meta.ai/static/muse-spark-1-2-multimodal-evaluation-methodology
- Artificial Analysis — Muse Spark 1.2: benchmarks and analysis (index 54 on v4.1, GDPval-AA 1631, τ³-Banking 27%): https://artificialanalysis.ai/articles/muse-spark-1-2
- Artificial Analysis — Muse Spark 1.2 model page (index 40 on v4.3.2, 240.1 tok/s): https://artificialanalysis.ai/models/muse-spark-1-2
- Vals AI — Muse Spark 1.2 model page (Vals Index 71.88%, $0.70/test): https://www.vals.ai/models/meta_muse_spark_1_2
- The Model Gap — Muse Spark 1.2 per-benchmark independent track (Terminal-Bench 2.1 80.15, SWE-bench Verified 86.6, DeepSWE 55.0, Toolathlon 75.9, LiveBench 78, Terminal-Bench 4.0 6.1): https://themodelgap.com/models/muse-spark-1-2
- Benchgen — Muse Spark 1.2 Meta-reported figures (MCP Atlas 90.3%, Meta Internal Coding Bench 70.6%): https://benchgen.com/models/meta/muse-spark-1-2
- AI Model Timeline — Muse Spark 1.2 vendor/independent split with provenance: https://ai-model-timeline.org/models/meta-muse-spark-1-2
- AI/TLDR — Meta launch chart comparison table: https://ai-tldr.dev/models/muse-spark-1-2/