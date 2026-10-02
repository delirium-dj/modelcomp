# Mercury 2.5 — findings by Laguna S 2.1

- Source: Artificial Analysis (`https://artificialanalysis.ai/models/mercury-2-5`), BenchLM (`https://benchlm.ai/models/mercury-2-5`), Inception launch blog (`https://www.inceptionlabs.ai/blog/introducing-mercury-2-5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception's most capable diffusion LLM, released September 8, 2026. A reasoning model designed for speed and affordability — 1,107 tokens/sec on NVIDIA GPUs, 40% intelligence increase over Mercury 2. Priced at $0.25 per million input tokens and $0.75 per million output tokens (80% launch discount to $0.04/$0.15). Supports text input/output with tunable reasoning and parallel tool calls.
  > Note: the repo `meta.json` lists 128K context and text in/out only. The AA model page and Inception launch blog confirm 260K context and text-only modality. This file documents the full model per verified external sources.
- **Provider / access:** Inception — API via Inception platform (`https://platform.inceptionlabs.ai/`); also available through Baseten and OpenRouter
- **Release / knowledge:** September 8, 2026 (Inception launch blog); knowledge cutoff not disclosed
- **IDs:** `mercury-2-5` (AA, BenchLM); `opencode/mercury-2.5` (project)
- **Context window:** 260,000 tokens total (AA model page, Inception launch blog)
- **Modalities:** Text input, text output (AA model page: "Supports: text"); no image, audio, or video input
- **Pricing (as of 2026-09-08):** $0.25 input / $0.75 output per 1M tokens (standard); $0.04 input / $0.15 output (80% launch discount); cost per Intelligence Index task $0.12
- **Architecture:** Diffusion language model (dLLM); proprietary; parameter count not disclosed
- **Reasoning:** Yes (tunable reasoning / extended thinking)

### Raw benchmarks found

> Sources: Artificial Analysis model page (`artificialanalysis.ai/models/mercury-2-5`), BenchLM (`benchlm.ai/models/mercury-2-5`), Inception launch blog (`inceptionlabs.ai/blog/introducing-mercury-2-5`). Intelligence Index v4.3.2 includes: AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1.

Agent / tool use:

- τ³-bench results: **96.0%** — (Inception launch blog, via BenchLM)
- DeepSearchQA: **34.0%** — (Inception launch blog, via BenchLM)
- Terminal-Bench 2.1 (Vals): **34.1%** — (Vals AI leaderboard, via BenchLM)
- GDPval-AA (normalized Elo): **0.0%** — (AA model benchmarks, via BenchLM)
- GDPval-AA (raw %): **no verified public score found** separately — (Elo 0.0 from AA benchmarks)
- Terminal-Bench 4.0: **no verified public score found**
- OSWorld-Verified: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **79.0%** — (Inception launch blog, via BenchLM)
- AA-HLE: **11.8%** — (AA model benchmarks, via BenchLM)
- AA-LCR: **68.0%** — (Inception launch blog, via BenchLM)
- AA-Omniscience Index: **-39.5%** — (AA model benchmarks, via BenchLM)
- AA-Omniscience Accuracy: **22.0%** — (Inception launch blog, via BenchLM)
- AA-Omniscience Hallucination Rate: **67.0%** — (Inception launch blog, via BenchLM)
- Artificial Analysis Intelligence Index: **12** — (AA model page; rank #90/175 overall, #148/783 on BenchLM)
- CritPt: **0.0%** — (AA model benchmarks, via BenchLM)
- Humanity's Last Exam: **no verified public score found**
- IFBench: **77%** — (Inception launch blog, via BenchLM; instruction following)

Coding:

- SciCode: **38%** — (Inception launch blog, via BenchLM)
- AA-SciCode: **38.5%** — (AA model benchmarks, via BenchLM)
- SWE-bench Verified: **no verified public score found**
- DeepSWE: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- AA Coding Index: **no verified public score found**

Multimodal:

- Text-only — confirmed by AA model page ("Supports: text" input, "Supports: text" output) and Inception launch blog (no image support)
- MMMU / MMMU-Pro: **no verified public score found**
- Design Arena / ImageBench: **no verified public score found**

Long context:

- 260K context window per AA model page and Inception launch blog; no MRCR / RULER / GraphWalks retrieval score reported

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.

- **Tool use: 58/100.** τ³-bench at 96.0% is exceptional — far above the ~50% frontier reference and indicating strong agentic capability on real-world tasks. However, Terminal-Bench 2.1 (Vals) at 34.1% is below the 2026 ~55% frontier threshold, GDPval-AA at 0.0% Elo is very poor, and DeepSearchQA at 34.0% adds little. The wide variance suggests harness or version differences between the Inception launch numbers and the AA/Vals benchmarks. TB2.1 and GDPval-AA are not on BenchLM's Mercury 2.5 page as separate entries, only the τ³-bench 96% from the launch blog. The 96% τ³-bench score is credible and from the official source, but the weak supporting data caps the score. Scored upper-mid — strong on the headline number, weak on the broader agentic suite.

- **Reasoning: 50/100.** GPQA Diamond at 79.0% is solid but below the 90%+ frontier. AA-LCR at 68.0% is decent (above ~40% mid-tier threshold). IFBench at 77% shows good instruction following. However, AA-HLE at 11.8% is well below the ~35%+ frontier, CritPt at 0.0% is the worst among comparable models, and AA Intelligence Index at 12 (rank #90/175) is below average overall. AA-Omniscience Index at -39.5% indicates more incorrect than correct answers on knowledge tasks, though better than gpt-oss-120B's -49.2%. The model sits in the mid-tier for 2026 — solid GPQA but weak on HLE and physics reasoning.

- **Context window: 66/100.** 260,000 tokens per AA model page and Inception launch blog — falls in the 200K–500K tier (58–84 band), interpolated to ~66 for being in the lower third of that range. No MRCR/RULER/GraphWalks retrieval-at-length benchmark reported.

- **Multimodal: 15/100.** Text in / text out only — confirmed by AA model page ("Supports: text" for both input and output) and Inception launch blog (no image support). Methodology text-only band (10–20). The repo `meta.json` is accurate on this point.

- **Coding: 35/100.** SciCode at 38% and AA-SciCode at 38.5% are below the 55%+ frontier threshold and below the 40% mid-tier threshold. No SWE-bench Verified, DeepSWE, LiveCodeBench, or AA Coding Index data found. The coding benchmarks that exist paint a weak picture. Scored in the bottom-third — no strong coding numbers found.

- **Cost efficiency: 92/100.** $0.25 input / $0.75 output per 1M tokens at launch, dropping to $0.04/$0.15 with the 80% launch discount. The standard pricing falls between the ~$0.10/$0.20 = 97–99 anchor and the ~$0.60/$2.20 = ~92 anchor; scored at 92. At launch discount pricing, effectively in the ~97–99 range.

- **Overall Score: 45/100.** Mean of five quality dims: (58 + 50 + 66 + 15 + 35) / 5 = 224 / 5 = 44.8 → 45. Mercury 2.5 is a fast, affordable reasoning model from Inception — its 96.0% on τ³-bench is exceptional and its GPQA 79% is solid for a 2026 release. However, it lags on standard benchmarks: GDPval-AA 0.0% Elo, HLE 11.8%, CritPt 0.0%, SciCode 38%, and Intelligence Index 12 (rank #90/175). It lacks SWE-bench, DeepSWE, LiveCodeBench, and other coding benchmarks. Best fit: cost-sensitive agentic workloads where τ³-bench performance matters and coding/knowledge depth is less critical; take advantage of the launch discount if available.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-02
- Method: public internet research via Artificial Analysis model page (Intelligence Index, technical specifications, benchmark tables), BenchLM (composite scores, per-benchmark breakdown with sources), and Inception launch blog (benchmark methodology, comparison tables, pricing details); scores are normalized 1–100 interpretations, not official vendor scores.
- Sources cited: `https://artificialanalysis.ai/models/mercury-2-5`, `https://benchlm.ai/models/mercury-2-5`, `https://www.inceptionlabs.ai/blog/introducing-mercury-2-5`
- Zero-influence: did not read peer `model/` findings files during research.
- Future sources: add a new file next to this one, e.g. `Mercury_2_5.md`, using the same headings.

---
