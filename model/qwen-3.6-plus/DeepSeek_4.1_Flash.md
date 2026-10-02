# Qwen 3.6 Plus — findings by DeepSeek 4.1 Flash

- Source: Alibaba / Qwen3.6 Plus (`qwen/qwen3.6-plus`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba's flagship commercial API model of the Qwen3.6 series — a hybrid linear-attention + sparse-MoE architecture with major gains over 3.5 in agentic coding, front-end ("vibe") development and overall reasoning (3D scenes, games, repository-level problem solving).
- **Provider / access:** Alibaba Cloud / DashScope and OpenRouter (OpenAI-compatible). The series is open-weights-oriented; the 3.6 family ships alongside Apache-2.0 siblings.
- **Release / knowledge:** Released 2026-04-02; knowledge cutoff not separately published for this ID.
- **IDs:** `qwen/qwen3.6-plus` (OpenRouter); OpenCode Zen tracks it as `opencode/qwen-3.6-plus`. No Zen Free ID.
- **Context window:** 1,000,000 tokens (OpenRouter); max output not separately published.
- **Modalities:** text and image in (multimodal per the vendor description); text out. Reasoning yes, tool use, prompt caching.
- **Pricing (as of 2026-10-01):** **$0.325 / $1.95 per 1M** in/out (OpenRouter).
- **Architecture:** hybrid linear-attention + sparse mixture-of-experts. Parameter count not published for the Plus SKU.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom: **97.7%** — near-saturated (Artificial Analysis via OpenRouter)
- Terminal-Bench Hard: **43.9%**; GDPval-AA: **23.8%**; IFBench: **75.2%** (Artificial Analysis via OpenRouter)
- AA-Omniscience Accuracy **26.4%** / Non-Hallucination **65.4%** (high non-hallucination rate)
- Claw-Eval / Toolathlon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.2%**; HLE: **27.8%**; AA-LCR: **78.3%**; CritPt: **2.9%** (Artificial Analysis via OpenRouter)
- Design Arena: Models Arena Website Elo **1248**, UI Component **1241**, Code Categories **1242**, 3D **1217**, SVG **1161**

Coding:

- SWE-bench Verified: **78.8%** (vendor-stated on the OpenRouter overview); Artificial Analysis Coding Index: **54.5**
- Terminal-Bench Hard **43.9%** (see above); LiveCodeBench / SciCode / DeepSWE: **no verified public score found**

Long context:

- 1.0M-token window documented; AA-LCR **78.3%** is the only long-context figure found; **no MRCR/RULER/GraphWalks retrieval score** — **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 78/100.** τ²-Bench Telecom 97.7% is near-saturated and IFBench 75.2% is strong, but Terminal-Bench Hard 43.9% is mid and GDPval-AA 23.8% is low — capped in the upper-mid band.
- **Reasoning: 80/100.** GPQA 88.2% and AA-LCR 78.3% are strong; HLE 27.8% and CritPt 2.9% hold it out of the frontier band.
- **Context window: 95/100.** 1.0M-token window (≥1M band); held at 95 because no ≥98%-at-512K retrieval benchmark is published.
- **Multimodal: 68/100.** Text and image input, text output (+image band = 60–70); no audio/video documented.
- **Coding: 80/100.** SWE-bench Verified 78.8% and a Coding Index of 54.5 (below the 70+ frontier reference) with strong front-end Arena Elos put it firmly in the upper-mid coding band.
- **Cost efficiency: 93/100.** $0.325 / $1.95 per 1M undercuts the $0.60/$2.20 (~92) reference on a 1M-context frontier-adjacent model.
- **Overall Score: 80/100.** (78 + 80 + 95 + 68 + 80) / 5 = 80.2 → 80. Best fit: high-volume agentic coding and front-end generation with a 1M window at low cost.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-01
- Method: public internet research (OpenRouter model page incl. its Artificial Analysis and Design Arena tables with exact values); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7.md`, using the same headings.