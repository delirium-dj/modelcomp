# Kimi K2.7 Code HighSpeed — findings by GLM 5.3

- Source: Moonshot AI (`moonshot/kimi-k2.7-code-highspeed`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code HighSpeed
- **Short description:** The high-speed serving tier of Kimi K2.7 Code, Moonshot AI's dedicated coding model — officially "the same model as Kimi K2.7 Code, but with an output speed of approximately 180 Tokens/s and up to 260 Tokens/s in short context scenarios". Flag: performance rows below are the K2.7 Code model's verified scores, applied to this tier on the vendor's explicit same-model claim; only speed and price differ.
- **Provider / access:** Kimi API Platform (`https://api.moonshot.ai/v1`, OpenAI-compatible; also the Anthropic-compatible endpoint); NOT currently listed on OpenCode Zen. Base64 image / uploaded video input for vision.
- **Release / knowledge:** released with the K2.7 Code generation (2026, between K2.6 and K3); exact date not re-verified. Knowledge cutoff not published.
- **IDs:** `kimi-k2.7-code-highspeed` (Kimi Platform). No Zen ID at 2026-10-01.
- **Context window:** 256K tokens (262,144, official pricing table — shared by `kimi-k2.7-code` and the highspeed tier).
- **Modalities:** text, image (png/jpeg/webp/gif), and video (mp4/mpeg/mov/avi/webm and more) input, text output; thinking always on (an error is thrown if disabled; temperature fixed at 1.0, top_p 0.95); tool calls (tool_choice auto/none only; keep `reasoning_content` in multi-turn tool context).
- **Pricing (as of 2026-10-01):** $1.90 per MTok input (cache miss; $0.38 cache hit) and $8.00 per MTok output — 2x the base K2.7 Code tier ($0.95/$4.00). No free tier.
- **Architecture:** open-weight family (BenchLM lists K2.7 Code as Open Weight; model card at huggingface.co/moonshotai/Kimi-K2.7-Code); size undisclosed here. vs K2.6: ~30% lower overthinking on average and ~10% agentic improvement (official, qualitative).

### Raw benchmarks found

> All rows are the shared K2.7 Code model's scores (official same-model claim for the highspeed tier).

Agent / tool use:

- MCP Atlas: **76%**; MCP Mark Verified: **81.1%** (official model card via BenchLM)
- τ²-bench: **90.1%** (AA via BenchLM)
- Terminal-Bench 2.1 (Vals): **67.0%**
- Kimi Claw 24/7: **46.9%** (official model card)
- GDPval-AA: **1114** raw / **26.3%** normalized; AA Agentic Index: **22.5%** (AA via BenchLM)
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.6%** (AA via BenchLM)
- HLE: **35.0%** (AA via BenchLM)
- CritPt: **10.0%**; AA-LCR: **79.3%**; AA Intelligence Index: **25.8%** (AA via BenchLM)
- Omniscience: accuracy **39.6%**, hallucination rate **82.4%**, index **-10.2%** (AA via BenchLM — poor honesty)
- BenchLM composite (K2.7 Code): **54.59/100, #71 of 783** (27 of 645 benchmarks covered)

Coding:

- LiveCodeBench (Vals): **82.1%**; SWE-bench (Vals): **78.2%**
- Kimi Code Bench v2: **62.0%**; ProgramBench: **53.6%** (official model card)
- AA Coding Index: **60.8%**; AA-SciCode: **47.8%** (AA via BenchLM)
- CursorBench 3.2: **49.7%**; MLS-Bench Lite: **35.1%**; OpenHarmony Bench: **52.1%** (via BenchLM)
- Design Arena Website: **1273** (OpenRouter via BenchLM)

Long context:

- MRCR / RULER: no verified public score found (256K window, official)

### Normalized scores (1–100)

- **Tool use: 72/100.** MCP Atlas 76% and MCP Mark Verified 81.1% are strong tool-ecosystem results with τ²-bench 90.1% and a solid TB2.1 67.0%; Kimi Claw 24/7 46.9%, GDPval-AA 26.3%, and AA Agentic Index 22.5% are the soft spots. Capped by the weaker always-on agent results.
- **Reasoning: 62/100.** GPQA 89.6% just misses the frontier bar and LCR 79.3% is solid, but HLE 35.0%, CritPt 10.0%, and an 82.4% hallucination rate cap it. Capped by honesty and deep-reasoning weakness.
- **Context window: 72/100.** 256K (262,144, official) — the established ~72 anchor for 256K-class windows; no verified retrieval rows exist for this model.
- **Multimodal: 72/100.** Verified text + image + video input (official quickstart, explicit format list and multimodal tool API) — video-in band (75-90) — but zero measured multimodal scores for this model temper it below the omni leaders.
- **Coding: 74/100.** LiveCodeBench 82.1% and SWE-bench 78.2% (Vals) lead a coding-specialist profile, with KCB v2 62.0% and AA Coding Index 60.8% mid-pack; SciCode 47.8% and MLS-Bench 35.1% cap it. Capped by the deep/research-coding tail.
- **Cost efficiency: 72/100.** $1.90/$8.00 per MTok (cache hit $0.38) is 2x the base tier for identical outputs — a pure latency premium. Fair value only when wall-clock time on long coding runs matters; otherwise use base K2.7 Code.
- **Overall Score: 70/100.** Half-up mean of the five quality dims: (72 + 62 + 72 + 72 + 74) / 5 = 70.4 → 70. Identical brain to Kimi K2.7 Code at roughly 2-4x the token speed for 2x the price — buy it for time-critical long-horizon coding, not for capability.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-01
- Method: public internet research (Kimi Platform official quickstart + pricing/models docs carrying the explicit same-model claim for the highspeed tier, K2.7 Code benchmark rows via BenchLM with sources — official HF model card, AA, Vals — plus OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
