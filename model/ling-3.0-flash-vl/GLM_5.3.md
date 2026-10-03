# Ling 3.0 Flash VL — findings by GLM 5.3

- Source: InclusionAI (`opencode/ling-3.0-flash-vl`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL (Ling-3.0-flash-VL)
- **Short description:** InclusionAI's next-generation native multimodal model built upon Ling-3.0-flash, bringing visual information into the full understand → reason → act → verify loop for real-world tasks through vision.
- **Provider / access:** open weights on Hugging Face `inclusionAI/Ling-3.0-flash-VL` (MIT; SGLang and vLLM recipes official); hosted inference via Novita. Not on the OpenCode Zen list.
- **Release / knowledge:** release date not pinned on the card; HF collection "Ling 3.0" updated ~2026-09-23; knowledge cutoff not published.
- **IDs:** `opencode/ling-3.0-flash-vl` (repo slug; no Zen ID verified); `inclusionAI/Ling-3.0-flash-VL` (HF/Novita).
- **Context window:** up to 256K native, 262,144 with YaRN (official SGLang recipe, `rope_scaling yarn factor 2.0`) — verified by HF card and BenchLM (262K).
- **Modalities:** image and video in (ViT encoder + two-layer MLP projector, VideoRoPE for temporal order), text out; thinking mode enabled by default; native tool-call parser (`ling3`); reasoning yes.
- **Pricing (as of 2026-10-02):** no verified public per-token API price; MIT open weights allow $0-license self-hosting (4×141GB-class GPUs for 256K per the official recipe).
- **Architecture:** 124B total / 5.5B activated sparse MoE; 42-layer hybrid backbone alternating KDA and Gated MLA layers at 5:1; ViT + MLP projector + VideoRoPE; MIT license.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **32.5%** (Artificial Analysis model benchmarks via BenchLM)
- Terminal-Bench 2.1: evaluated under the AA protocol per the HF card, but the value is in a chart image — no verified public score in text
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- AA-GPQA Diamond: **86.2%** (Artificial Analysis via BenchLM)
- AA-HLE: **22.0%** (Artificial Analysis via BenchLM)
- CritPt: **2.0%** (Artificial Analysis via BenchLM)
- Artificial Analysis Intelligence Index: **42** (v4.1.1, official HF card; +4 over Ling-3.0-flash's 38) / BenchLM lists the AA index row at 24.6% under its own protocol
- AA-Omniscience Index: **-4.5%** (accuracy 14.4%, hallucination rate 22.0% — Artificial Analysis via BenchLM)
- BenchLM composite: **47.66/100, #105 of 783** (11 of 645 benchmarks covered — conservative)

Coding:

- AA-SciCode: **44.2%** (Artificial Analysis via BenchLM)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- Vibe Code Bench: no verified public score found

Multimodal:

- AA-MMMU-Pro: **79.0%** (Artificial Analysis via BenchLM)

Long context:

- AA-LCR: **78.3%** (Artificial Analysis via BenchLM) — the only verified long-context reasoning row; no MRCR / RULER / GraphWalks scores.

### Normalized scores (1–100)

- **Tool use: 48/100.** Agentic-by-design (native tool-call parser; official "act" capability for interface tasks) but the only measured agentic row is weak — GDPval-AA 32.5% — and Terminal-Bench 2.1's value is not extractable from the card; capped by thin verified agentic evidence.
- **Reasoning: 62/100.** GPQA Diamond 86.2% is near-frontier and AA Intelligence Index 42 (v4.1.1) sits above the mid band, but HLE 22.0%, CritPt 2.0%, and a negative Omniscience Index (-4.5%, 22% hallucination rate) show unreliable knowledge and weak physics reasoning — caps it well below the GPQA tier.
- **Context window: 78/100.** 262,144 tokens verified (200K–500K tier) with a strong measured AA-LCR 78.3% long-context reasoning row; 32K max output not verified; no MRCR/RULER anchor at 512K+, so not higher.
- **Multimodal: 82/100.** Image and video in with native temporal encoding (VideoRoPE), text out; measured MMMU-Pro 79.0% is a strong grounded-vision result — solidly in the +video tier (75–90).
- **Coding: 55/100.** Single measured row AA-SciCode 44.2% is below the frontier reference (55%+); no SWE-bench Verified / LiveCodeBench rows — capped by thin coding evidence.
- **Cost efficiency: 75/100.** No verified public per-token API price; MIT open weights mean $0 license and self-hosting at raw-GPU cost (4×141GB-class GPUs per the official 256K recipe) — good but not free-tier good, capped by unspecified serving costs.
- **Overall Score: 65/100.** Half-up mean of the five quality dims: (48 + 62 + 78 + 82 + 55) / 5 = 65. Strong open multimodal value pick — near-frontier GPQA and solid vision/video at 5.5B active params; keep it away from knowledge-critical work (negative Omniscience Index) and verify agentic claims independently.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-02
- Method: public internet research (official Hugging Face model card, BenchLM tracker rows sourced to Artificial Analysis model benchmarks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
