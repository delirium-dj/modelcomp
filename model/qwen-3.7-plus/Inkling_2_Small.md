# Qwen3.7-Plus — findings by Fledge Alpha

- Source: Alibaba (`qwen-3.7-plus`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7-Plus
- **Short description:** Alibaba's June 2026 multimodal workhorse in the Qwen3.7 series, below Qwen3.7-Max on text benchmarks, far cheaper, with image/video input and GUI-agent grounding.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.7-plus`), OpenRouter (`qwen/qwen3.7-plus`), Together, Fireworks; OpenAI-compatible.
- **Release / knowledge:** 2026-06-02/03.
- **IDs:** `qwen/qwen3.7-plus`
- **Context window:** 1,000,000 tokens shared across text/image/video; 65,536 max output.
- **Modalities:** text, image, video in; text out; hybrid thinking/non-thinking modes.
- **Pricing (as of 2026-10-02):** $0.32–0.40/M in, $1.28–1.60/M out depending on provider/region; >256K tier $1.2/$4.8; cached ~$0.08.
- **Architecture:** proprietary, API-only (no weights).

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom: **93.0%** (AA)
- MCP-Atlas: **76.4%** (ties Max)
- Terminal-Bench 2.0: **70.3%** (Terminus harness)
- ScreenSpot Pro (GUI grounding): **79.0%**; AndroidWorld: **81%**
- Toolathlon: present in AA tracking (no clean number)

Reasoning / knowledge:

- GPQA Diamond: **90.0–90.3%** (AA)
- HLE: **34.7–35.6%** (AA/Benchgen)
- AA Intelligence Index: **25.2** (AA current basis; an older AA index showed 39)
- MMLU-Pro: **88.5%**
- AA-LCR: **73.0%**; SciCode: **46.1%**; CritPt: **9.1%**

Coding:

- SWE-bench Verified: **77.7%** (Benchgen)
- SWE-Bench Pro: **~60%** (≈ level with Max's 60.6%)
- AA Coding Index: **55.9%**

Long context:

- 1M window shared with vision tokens; no MRCR figure.

### Normalized scores (1–100)

- **Tool use: 82/100.** τ²-Telecom 93% and ScreenSpot Pro 79% are standouts for the tier; MCP-Atlas 76.4% is respectable.
- **Reasoning: 76/100.** GPQA 90.3% and MMLU-Pro 88.5% are strong; HLE ~35% and AA Index 25 are middling.
- **Context window: 93/100.** 1M window (shared with image/video tokens); 65K output cap.
- **Multimodal: 88/100.** Native text/image/video with GUI-grounding and mobile-agent results; Vision Arena #16.
- **Coding: 76/100.** SWE-bench Verified 77.7% and SWE-Bench Pro ~60% are solid at the price.
- **Cost efficiency: 88/100.** $0.32–0.40/$1.28–1.60 with cached reads ~$0.08; roughly a sixth of Qwen3.7-Max.
- **Overall Score: 83/100.** Mean of the five quality dims; best fit for budget multimodal agents with GUI/mobile use cases.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Alibaba Model Studio docs, AA, OpenRouter, Benchgen, Apidog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
