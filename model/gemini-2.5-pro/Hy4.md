- Source: Google DeepMind/Gemini 2.5 Pro
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google DeepMind's 2025-03-25 experimental reasoning model that introduced a built-in chain-of-thought "thinking" mechanism and a 1M-token window. A distinct model; the bare `gemini-2.5` name is a deleted phantom folder per the project identity roster (folds into this Pro flagship), and Gemini 2.5 Flash / 2.5 Flash-Lite are separate SKUs.
- **Provider / access:** Google AI Studio and Vertex AI; on-demand access from 2025-10-01; a dedicated computer-use variant with a `computer_use` tool (click/type/scroll) shipped 2025-10-08; free access for 500M+ users via the Reliance Jio partnership from 2025-11-01.
- **Release / knowledge:** 2025-03-25 (I/O and 05-06 / 06-05 preview refreshes); **knowledge cutoff 2025-01**.
- **IDs:** `gemini-2.5-pro` family ID as cited; preview variants 05-06 / 06-05 / I/O. No free Zen ID verified.
- **Context window:** **1,000,000 tokens**, with a pricing step above **200,000 input tokens**.
- **Modalities:** text, image, audio, video and codebase in, text/code out; built-in thinking, Google Search tool for fact verification, hand-drawn-sketch-to-app generation, GUI computer use (click/type/scroll) with safety controls. No verified non-text output.
- **Pricing (as of 2026-11-14):** **$1.25 / 1M input** (≤200K tokens), **$2.50 / 1M input** (>200K), **$10 / 1M output** (a parallel Baike API article gives **$15 / 1M output** above 200K — reported separately, not merged). Usage grew 80% vs launch.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. Built-in chain-of-thought reasoning.

### Raw benchmarks found

Agent / tool use:

- WebDev Arena Elo: **1443** (06-05 preview, +35); **1499.95** (I/O version)
- LMArena Elo: **+24 points** in the 06-05 refresh (relative delta, no absolute figure in the retrieved page)
- Global-MMLU (Lite): **89.8%** (secondary Tencent Cloud launch analysis) — labelled secondary
- Computer use via the `computer_use` tool with click/type/scroll and developer safety controls (qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam: **18.8%**
- Long-context retrieval: **91.5% at 128K** and **83.1% at 1M** (secondary Tencent Cloud analysis of the launch evaluation) — labelled secondary
- GPQA Diamond / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- SWE-Bench Verified: **63.8%**
- WebDev Arena **1443 / 1499.95** as above; sketch-to-functional-app generation
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 91.5% (128K) / 83.1% (1M) long-context retrieval — secondary source, harness as cited; no vendor-verified MRCR / RULER / GraphWalks figure found

### Normalized scores (1–100)

- **Tool use: 84/100.** Native Google Search verification, a dedicated `computer_use` tool with safety controls and a 1499.95 WebDev Arena Elo; capped by no scored τ-bench/OSWorld figure and a 2025-01 knowledge cutoff.
- **Reasoning: 86/100.** The generation that introduced built-in thinking, with 18.8% HLE (strong for March 2025), long-context retrieval of 91.5%/83.1% (secondary) and 89.8% Global-MMLU (secondary); capped by no GPQA/ARC figure and by later models far exceeding it.
- **Context window: 92/100.** A verified 1M-token window with measured 83.1% retrieval at 1M (secondary); capped by a 2x price step above 200K and no vendor-verified retrieval benchmark.
- **Multimodal: 91/100.** Text, image, audio, video and codebase input with sketch-to-app generation; capped by text/code-only output and no published multimodal benchmark.
- **Coding: 84/100.** SWE-Bench Verified 63.8% and WebDev Arena 1499.95; capped by no Terminal-Bench / LiveCodeBench figure.
- **Cost efficiency: 76/100.** $1.25/$10 per 1M with free Jio-partnership consumer access, but a 2x input step above 200K; excluded from Overall.
- **Overall Score: 87/100.** Half-up mean of 84, 86, 92, 91, 84 = 87.4 → 87. Best fit: historical/legacy long-context multimodal analysis; superseded by Gemini 3 and 4.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Gemini 2.5 Pro article (full specs, 1M context, pricing tiers, SWE-Bench Verified 63.8%, HLE 18.8%, WebDev Arena 1443/1499.95, computer-use tooling, Jio partnership), with a secondary Tencent Cloud launch analysis for the 91.5%/83.1% long-context and 89.8% Global-MMLU figures — explicitly labelled secondary. Identity handling follows the project's generated roster: the bare `gemini-2.5` phantom folder was deleted and never recreated; research belongs here. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Gemini 2.5 Pro — 百度百科 (specs, pricing, SWE-Bench, HLE, WebDev Arena, computer use)](https://baike.baidu.com/item/Gemini%202.5%20Pro/65750846)
