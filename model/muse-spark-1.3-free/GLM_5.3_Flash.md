# Muse Spark 1.3 Contributor — findings by GLM 5.3 Flash

- Source: Meta Superintelligence Labs (`muse-spark-1.3`; OpenCode Zen Contributor free tier / `muse-spark-1.3-contributor`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Contributor (free Contributor-tier access to Meta's Muse Spark 1.3; the current Muse Spark flagship, released 2026-09-02)
- **Short description:** Meta's efficiency-focused update to Muse Spark 1.2: same 1M context and pricing, but ~20% fewer tool calls and ~25% fewer tokens on coding work, harness-general agent training, and collaborative behaviors (clarifying questions, confirmation before consequential actions).
- **Provider / access:** OpenCode Zen free Contributor tier (`opencode/muse-spark-1.3-contributor-free`, Responses API; free in exchange for training-data consent per repo catalog); Meta Model API (`muse-spark-1.3`); a paid `muse-spark-1.3-contributor` tier exists at $0.10/$0.20; inside Muse Code. Proprietary, closed weights (open-weights release "on the roadmap").
- **Release / knowledge:** released 2026-09-02. Knowledge cutoff not verified in this pass.
- **IDs:** `opencode/muse-spark-1.3-contributor-free` (Zen); `muse-spark-1.3` (Meta API).
- **Context window:** 1,000,000 tokens (unchanged from 1.2/1.1); max output not published on the pages checked (AA tracked 165 tok/s output).
- **Modalities:** natively multimodal — text, images, video and documents in; text out (no audio documented). Reasoning modes shipped day one; **max reasoning pending additional safety testing**.
- **Pricing (as of 2026-09-18):** **$0** on the evaluated free Contributor tier (Meta uses the data to improve products — no confidential code); paid $1.25 in / $4.25 out per 1M (cached $0.15); discounted contributor tier $0.10/$0.20 (cached $0.002).
- **Architecture:** proprietary, parameters undisclosed; trained across a diverse set of agent harnesses so behavior generalizes between environments.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** — tie for the best published agentic-terminal result tracked in this repo (BenchLM/DataCamp summaries, catalogued in `../../model-comparison.md`; AA's own harness measured 85–86%)
- Tau3: **50.5%** (47% xhigh / 52% max — #1) (BenchLM/AA, catalogued in `../../model-comparison.md`)
- GDPval: **1754** (AA's own run 1709) (same sources)
- Efficiency: **~20% fewer tool calls and ~25% fewer tokens** vs 1.2 in Meta's engineer comparisons (launch post)
- OSWorld / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%**; HLE: **48.7%**; AA-LCR: **83%**; MRCR: **98.5% / 98.1%** (best measured to 1M) (BenchLM/AA, catalogued in `../../model-comparison.md`)

Coding:

- DeepSWE: **75.4%** (beats Claude Opus' 74.0) (BenchLM, catalogued in `../../model-comparison.md`)
- SWE-Atlas: **59.4%**; SciCode: **58.8%** (same source)
- Cost per task: **$0.55/task** on the AA efficiency frontier (AA article)

Long context:

- MRCR **98.5%/98.1%** at depth — the best long-context retrieval evidence measured in this repo; window 1M tokens

### Normalized scores (1–100)

> Independent derivation per the methodology in `../../model-comparison.md`; Overall = mean of the six.

- **Tool use: 95/100.** TB2.1 88.8 (tie SOTA) + Tau3 #1 (50.5/52%) + GDPval 1754 with 20% fewer tool calls — the best free-tier agent package measured in this repo.
- **Reasoning: 92/100.** GPQA 93.5 / HLE 48.7 / LCR 83 — frontier-class; max reasoning mode still pending safety testing caps it.
- **Context window: 100/100.** 1M tokens with the strongest measured retrieval (MRCR 98.5) of any model tracked here.
- **Multimodal: 85/100.** Text + image + video + documents in; text-only output and no audio modality.
- **Coding: 95/100.** DeepSWE 75.4 (above Opus-class), SWE-Atlas 59.4, SciCode 58.8, 25% token savings on coding work.
- **Cost efficiency: 100/100.** Evaluated $0 free Contributor tier (training-data consent); $0.55/task efficiency-frontier economics even paid.
- **Overall Score: 93/100.** Mean: (95 + 92 + 100 + 85 + 95 + 100) / 6 = 567/6 = 94.5 → **95**. Best fit: the default pick for long-horizon coding/agentic work whenever the free tier is available.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-09-18
- Method: fresh public internet research from zero (ai-tldr.dev Muse Spark 1.3 page quoting Meta's launch post, developer docs and pricing; the BenchLM/AA benchmark rows and independent summaries as catalogued in `../../model-comparison.md`); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
