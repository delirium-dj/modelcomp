# MiMo V2.5 Free — findings by GLM 5.3

- Source: Xiaomi (`opencode/mimo-v2.5-free`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free (Xiaomi MiMo-V2.5)
- **Short description:** Free Zen tier of Xiaomi's open-weights omni MiMo-V2.5 (April 2026) — full text/image/audio/video input at $0 during the limited free period. Top use case: free omni + balanced agent/coding work.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/chat/completions` (openai-compatible); OpenRouter `xiaomi/mimo-v2.5` ($0.105/$0.28); native Xiaomi platform serves the full 1M window.
- **Release / knowledge:** 2026-04-22 (BenchmarkList/OpenRouter); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/mimo-v2.5-free` (Zen Free ID, limited time — data used to improve the model)
- **Context window:** Zen tier caps 200K total / 32K out (models.dev `mimo-v2.5-free.toml`); the native model supports 1M.
- **Modalities:** text/image/audio/video in; text out; reasoning yes; tool calls; JSON mode (open weights).
- **Pricing (as of 2026-09-24):** Free on Zen (limited time); OpenRouter $0.105 in / $0.28 out per 1M for the native model.
- **Architecture:** open weights (BenchmarkList: open-weight; AA Openness Index 38.9); Xiaomi publishes MiMo-V2.5 as an omni MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **63.7%** (BenchmarkList `xiaomi-mimo-v2.5` — rank 49/182); Terminal-Bench Hard **41.7%** (AA, rank 29/326)
- Tau2-Bench (Telecom): **90.6%** (BenchmarkList); Tau3-Banking (AA): **8.7%** (BenchmarkList — weak)
- GDPval-AA: **1146 Elo** (BenchmarkList; rank 71/340)
- ClawProBench: **60.39** final (BenchmarkList — rank 13/48; efficiency 96.6%)
- Agents' Last Exam: **8.6%** (BenchmarkList — weak); Gert Labs **47.5%**; Omni-DeepSearch **11.7%** (BenchmarkList)

Reasoning / knowledge:

- GPQA Diamond: **81.6%** (Vals) / **84.9%** (AA epoch) (BenchmarkList — below the 90% bar)
- HLE: **27.2%** (BenchmarkList — below the 40% bar)
- Artificial Analysis Intelligence Index: **38** (BenchmarkList — rank 70/418)
- AA-LCR: **68.3%** (BenchmarkList); Context Arena MRCR: AUC-1M **14.3%** (thinking off) / **15.8%** (on) — weak long-window retrieval
- MMLU-Pro: **82.9%**; AIIQ Composite IQ **109**; ProofBench **16.0%** (BenchmarkList)

Coding:

- SWE-bench Verified (Vals): **71.0%** (BenchmarkList)
- LiveCodeBench (Vals): **81.5%**; SciCode **43.1%**; Vibe Code Bench v1.1 **42.2%**; Code Migration **14.2%**; EvoCode-Bench MT@4 **17.3%** (BenchmarkList)

Long context:

- Native 1M window, but Zen tier caps at 200K/32K; Context Arena AUC-1M 14.3–15.8% shows retrieval collapsing near the native limit.

Multimodal (grounding):

- MMMU-Pro **80.0%** (BenchmarkList); PanoWorld spatial **37.2%** (rank 2/14); Design Arena Elo **1288** (80th percentile); audio-driven omni search 11.7% (BenchmarkList).

### Normalized scores (1–100)

- **Tool use: 65/100.** Tau2 90.6% and ClawProBench 60.4 (96.6% efficiency) are strong; TB2.1 63.7%, GDPval 1146 and Tau3 8.7% sit mid-to-weak — solid free-tier tooling, not frontier.
- **Reasoning: 66/100.** GPQA 81.6–84.9% and HLE 27.2% are below frontier bars; AA Index 38 and AA-LCR 68.3% keep it respectable for a free omni model.
- **Context window: 70/100.** The evaluated Zen tier caps at 200K (methodology reference point); native 1M exists but with verified weak retrieval at 1M (AUC 14–16%).
- **Multimodal: 92/100.** Full text+image+audio+video input (90–100 band) with MMMU-Pro 80.0% and top-tier panoramic spatial reasoning — the free omni standout.
- **Coding: 62/100.** SWE-bench V 71.0% and LiveCodeBench 81.5% are decent; SciCode 43.1% and Vibe 42.2% are weak.
- **Cost efficiency: 100/100.** $0 in/out on the Zen free tier (limited time; data used for training); the native model is also near-free on OpenRouter ($0.105/$0.28).
- **Overall Score: 71.0/100.** (65 + 66 + 70 + 92 + 62) / 5 = 71.0. Best-fit: the free omni pick — audio/video/image input at $0; use native endpoints for 1M work, frontier models for hard reasoning.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (BenchmarkList, OpenCode Zen docs, models.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
