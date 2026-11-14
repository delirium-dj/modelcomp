- Source: Google DeepMind/Gemini 3.5 Flash
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's 2026-05-19 I/O launch — the first member of the Gemini 3.5 series and a lightweight model combining "frontier intelligence with action", focused on agentic capability and speed for coding, agent tasks and real workflows. **Free to all users globally** at launch. A distinct model; the planned Gemini 3.5 Pro was repeatedly delayed and never shipped, while 3.6/3.7/3.8 Flash are later separate versions.
- **Provider / access:** Gemini App, Google Search AI Mode (became the default model), Google AI Studio, Google Antigravity, Gemini API, and (from 2026-06) NotebookLM with a per-notebook cloud code runtime; powers the Gemini Spark 24/7 agent. Google later switched Search AI Mode fully to the Gemini 4 Hydrogen base.
- **Release / knowledge:** 2026-05-19 (I/O 2026); knowledge cutoff: no verified public score found.
- **IDs:** `gemini-3.5-flash` family ID as cited. No free Zen ID verified.
- **Context window:** no verified Gemini 3.5 Flash-specific figure in the retrieved page — no verified public score found.
- **Modalities:** text and image in, text out; fast web-UI generation, interactive components, turning complex papers into visual learning cards; agentic long-horizon tasks. No verified audio/video input or non-text output for this exact ID.
- **Pricing (as of 2026-11-14):** **free to all users globally** at launch; no per-token API rate card in the retrieved page. I/O coverage reports ~**40% lower cost** than the previous generation — a relative claim, not a price sheet.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. Output speed **>280 tokens/s**, claimed ~**4x** other frontier models.

### Raw benchmarks found

Agent / tool use:

- I/O 2026 launch coverage: **11 of 15 benchmarks** beat Gemini 3.1 Pro, with **40% lower cost** (CSDN event analysis; secondary source, exact per-benchmark numbers not published in the retrieved pages)
- Fast web-interface / interactive-component / visual-learning-card generation (qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Stated to outperform Gemini 3.1 Pro on several benchmarks (directional; no per-benchmark numbers in the retrieved page)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index: no verified public score found

Coding:

- A launch-comparison table (CSDN, 2026-05-22) compares Terminal-Bench 2.0/2.1 across Claude Opus 4.7, GPT-5.5 and Gemini 3.5 Flash, but the retrieved excerpt truncates the exact Gemini 3.5 Flash cell — no verified public score found
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- Long-cycle task support with NotebookLM per-notebook cloud runtimes; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 87/100.** Agent-first positioning, 11-of-15 benchmark wins over Gemini 3.1 Pro, a default role in Search AI Mode and a 24/7 Spark agent with a cloud code runtime; capped by no scored agent harness figures in the primary source.
- **Reasoning: 85/100.** Beating the 77.1%-ARC-AGI-2 Gemini 3.1 Pro on several benchmarks and turning papers into visual learning cards; capped by no published numeric reasoning benchmark for this exact ID.
- **Context window: 86/100.** Long-cycle complex task support and per-notebook persistent cloud environments; capped by no verified token window and no long-context retrieval measurement.
- **Multimodal: 86/100.** Image-in web-interface generation and visual learning cards; capped by text-only output, no verified audio/video input, and no published multimodal benchmark score.
- **Coding: 86/100.** Strong coding/agent emphasis with fast UI generation and an explicit Terminal-Bench launch comparison; capped because the exact score was truncated in the retrieved excerpt and no SWE-bench figure is published.
- **Cost efficiency: 97/100.** Free global access at launch, ~40% lower cost than the prior generation and >280 tok/s (~4x frontier speed); the best value proposition in this comparison set. Excluded from Overall.
- **Overall Score: 86/100.** Half-up mean of 87, 85, 86, 86, 86 = 86.0 → 86. Best fit: high-volume, cost-free consumer/developer agent and web-UI workloads where speed and zero cost dominate; superseded by the 3.6/3.7/3.8 Flash and Gemini 4 lines.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Gemini 3.5 Flash article (release, free global availability, >280 tok/s, 4x speed, agent positioning, platform rollout, the delayed 3.5 Pro and the later Hydrogen switch). I/O event coverage (CSDN) is used only for the 11-of-15 / 40%-cost figures and is labelled secondary; a truncated Terminal-Bench comparison table is explicitly NOT assigned a number. Rows without a verified figure are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Gemini 3.5 Flash — 百度百科 (release, free availability, speed, agent focus, platforms)](https://baike.baidu.com/item/Gemini%203.5%20Flash/67864797)
