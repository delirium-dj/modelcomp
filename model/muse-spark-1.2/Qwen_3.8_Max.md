# Muse Spark 1.2 — findings by Qwen 3.8 Max

- Source: Meta (`muse-spark-1.2`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's third Muse Spark release in four months (launched alongside Muse Code), a coding-specialised point release. A strong **second-tier** model priced like a budget one: fast (~270 tok/s), cheap ($1.25/$4.25), 1M-token context, with its clearest gain in agentic knowledge work (GDPval-AA v2 +260 Elo to #5). Independent harnesses place it further from the frontier than Meta's own chart suggests, and it has documented long-horizon reliability (hallucination) failures. Superseded by Muse Spark 1.3 (Sept 2, 2026) at the same list price.
- **Provider / access:** Meta first-party API at launch; Muse Code (agentic coding product). Closed-weights at launch — Zuckerberg announced (2026-08-10) that Meta will open-source the weights, but they are not yet released (no date).
- **Release / knowledge:** Released 2026-08-05. Architecture, parameter count and knowledge cutoff are **not published** by Meta.
- **IDs:** `meta/muse-spark-1.2` (xhigh reasoning effort).
- **Context window:** 1,048,576 (1M) tokens input; ~943,718 tokens max output (an unusually large output cap). No verified long-context retrieval (MRCR/needle) score published.
- **Modalities:** text (+ Meta's eval suite covers multimodal and health knowledge, but no discrete multimodal benchmark numbers are published in accessible sources); reasoning yes (xhigh); tool calls yes (shell + web browsing in an agentic loop, via AA's Stirrup harness).
- **Pricing (as of 2026-10-21):** $1.25 / 1M input, $4.25 / 1M output, cache hits $0.15 / 1M — unchanged from Muse Spark 1.1.
- **Architecture:** proprietary / undisclosed (closed weights at launch; open-sourcing announced but pending).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2 (Elo, general agentic knowledge work): **1,631** — #5 of all AA-benchmarked models (+260 Elo from 1.1's 1,371; behind Claude Opus 5 1,852, GPT-5.6 Sol 1,730, Kimi K3 1,685; ahead of Claude Opus 4.8 1,588)
- Terminal-Bench v2.1: **80%** (AA-measured, +2 from 1.1's 78%); τ³-Banking (agentic tool use): **27%** (+2 from 25%)
- LiveBench agentic coding: **57.6** — its weakest column and a **regression** from 1.1's 58.5
- Reliability caveat: a documented hands-on failure where the agent researched a non-existent project, built its plan on the fabrication and could not recover ("cannot trust it for longer-running work")

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **54** at launch (v4.1.1 basket — tied with GPT-5.5 xhigh 55 / Grok 4.5 high 54, behind Opus 5 61, Fable 5 60, GPT-5.6 Sol 59, Kimi K3 57); **39.58** on the rebased v4.3.2 index (Oct 2026, vs Opus 5's 50.78) — the two are not convertible (AA swapped component evals in Sept 2026)
- LiveBench: overall **78.0**, reasoning **90.0**, maths **91.2** (strong)
- Humanity's Last Exam: **44%** (-1 from 1.1); CritPt (research physics): **18%** (+3); SciCode: **56%** (-2)
- AA-Omniscience: **22** (up from 18) — hallucination rate fell 38%→**28%** but accuracy slipped 41%→**38%** as the attempt rate dropped to 67% (heavy abstention)

Coding (all Meta-run / vendor-claimed unless noted):

- Terminal-Bench 2.1: **82.9%** (Meta claim, 2nd to Claude Opus 5's 86.7%); independent estimate ~**79–80%** (AA; and applying Meta's own 1.1 over-claim correction)
- DeepSWE v1.1: **59.3%** (2nd to Opus 5's 65.0%; GPT-5.6 Terra 64.8%, Grok 4.5 56.6%, 1.1 was 53.0%)
- Meta Internal Coding Bench: **70.6%** (2nd to Opus 5's 79.4%); kernel-generation: 4th of 6
- Vals Index (common harness): **71.88%** — #5 behind Fable 5, Opus 5, Kimi K3, GPT-5.6 Sol, with the lowest cost/test in the top five (~$0.69)
- **Absent from every verified agentic-coding leaderboard** (Terminal-Bench, SWE-bench, SWE-rebench, Aider)

Multimodal:

- Meta's eval methodology covers multimodal + health knowledge, but **no discrete multimodal benchmark** (MMMU-Pro / OmniDocBench / CharXiv) is published in accessible sources.

Long context:

- 1M-token window with ~944K max output; no published retrieval (MRCR/needle) score.

> Provenance: Artificial Analysis (launch analysis, 2026-08-05 — Meta shared early access) and CodexSera's critical benchmark review (2026-08-07, updated Oct 2026) comparing Meta's vendor-run chart against Vals AI, LiveBench and AA's rebased index. Meta published results as chart images (no harness config / per-task / raw files), so its figures cannot be independently recomputed; treat vendor scores as an upper bound. Cost-per-task data is AA/Vals-reported.

### Normalized scores (1–100)

- **Tool use: 83/100.** GDPval-AA v2 #5 (1,631, ahead of Opus 4.8) with Terminal-Bench v2.1 80% and τ³-Banking 27% is genuinely strong bounded agentic work; capped by the LiveBench agentic-coding regression (57.6) and a documented long-horizon hallucination failure that makes extended autonomy untrustworthy.
- **Reasoning: 83/100.** LiveBench reasoning 90.0 / maths 91.2 and a launch Intelligence Index of 54 (tied with GPT-5.5/Grok 4.5) are solid, but HLE 44%, CritPt 18% and heavy abstention (Omniscience accuracy slipped to 38%) keep it clearly second-tier, not frontier.
- **Context window: 89/100.** A full 1M-token window with an exceptional ~944K max-output cap; discounted because no verified long-context retrieval benchmark is published and the architecture/cutoff are undisclosed.
- **Multimodal: 77/100.** Meta's eval suite includes multimodal and health knowledge, so the capability is present, but no multimodal benchmark is published in accessible sources — scored conservatively on asserted-but-unquantified evidence.
- **Coding: 83/100.** A strong second-tier coder — Meta's chart puts it 2nd to Opus 5 on all three evals (Terminal-Bench 82.9%, DeepSWE 59.3%, internal 70.6%) and Vals ranks it #5 at the lowest cost/test; capped because it is absent from every verified agentic-coding leaderboard, independent Terminal-Bench is ~79–80%, and LiveBench agentic coding regressed.
- **Cost efficiency: 85/100.** $1.25/$4.25 with $0.15 cache hits was the cheapest model in the top tier at launch (~$0.40/AA-task, ~$0.69/Vals-test, near the Pareto frontier; Muse Code audited 222 PRs for ~$0.10 vs ~$32 on a frontier model); held below 90 because by Oct 2026 GLM 5.3 Flash, MiMo-V2.6-Pro and GPT-6.1 Sol all beat it on capability **and** cost-per-task simultaneously.
- **Overall Score: 83/100.** Mean of Tool 83 + Reasoning 83 + Context 89 + Multimodal 77 + Coding 83 = 83.0 → 83. Best fit: bounded, verifiable, high-volume coding/agent work where its speed (270 tok/s), 1M context and budget pricing win outright; long-horizon autonomous tasks and maximum-capability coding still favor the frontier (Claude Opus 5), and Muse Spark 1.3 now supersedes it at the same price.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-21
- Method: public internet research (Artificial Analysis' Muse Spark 1.2 launch analysis; CodexSera's critical benchmark review cross-checking Meta's vendor chart against Vals AI, LiveBench and AA's rebased Intelligence Index v4.3.2); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
