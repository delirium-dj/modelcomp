# Qwen 4 Max — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Alibaba Cloud (`qwen4-max-preview`), Model Studio Token Plan
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 4 Max
- **Short description:** Alibaba Cloud's next-generation flagship multimodal model in the Qwen family, combining text generation, image and video understanding, and deep reasoning. Designed for coding, office productivity, frontend design, and complex agentic tasks. Currently in preview, Token Plan access only.
- **Provider / access:** Alibaba Cloud Model Studio, Token Plan (Personal or Team) only — pay-as-you-go not supported. Base URL: `https://token-plan.ap-southeast-1.maas.aliyuncs.com`. Compatible with OpenAI Chat Completions, Responses, and Anthropic Messages APIs.
- **Release / knowledge:** Preview period November 11, 2026 10:00 to November 25, 2026 24:00 (UTC+8); model retired after preview ends. Last updated November 11, 2026.
- **IDs:** `qwen4-max-preview` (Model Studio model ID). No Free ID confirmed outside Token Plan.
- **Context window:** 1M tokens context length; maximum output 393,216 tokens (384K), shared by thinking and final answer.
- **Modalities:** Text, image, and video in; text out; thinking enabled by default (reasoning_effort: low, medium, xhigh; default xhigh); tool calling (Function Calling, web search, built-in tools); structured outputs (JSON Object, JSON Schema). `max_tokens` = `max_completion_tokens` (combined thinking + answer budget).
- **Pricing (as of 2026-11-11):** Token Plan only — pricing details not disclosed on fetched page; pay-as-you-go not supported during preview.
- **Architecture:** Parameter count not disclosed; next-generation Qwen family flagship; multimodal (text + image + video understanding).

### Raw benchmarks found

No independent benchmark scores were found in fetched sources for Qwen4-Max-Preview. The model is in preview (launched November 11, 2026) and access is restricted to Token Plan subscribers. Capabilities are described by Alibaba Cloud documentation rather than measured on public leaderboards.

No verified public scores found for: GPQA Diamond, HLE, LCR/MLCR, CritPt, Artificial Analysis Intelligence Index, Omniscience Accuracy/Hallucination Rate, SWE-bench Verified/Pro/Multilingual, LiveCodeBench, SciCode, Terminal-Bench, tau2-bench/tau3-bench, APEX, IFBench, BrowseComp, WebVoyager, OSWorld-Verified, Vibe Code Bench, DeepSWE, MRCR/RULER/GraphWalks, AA-Briefcase-Lite, AutomationBench-AA, MMLongBench-Doc, AA-LCR.

### Normalized scores (1–100)

Derived from the available specifications using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 85/100.** Function calling, web search, built-in tools, structured outputs (JSON Object/Schema); capped by preview-only access and no published tool-use benchmark scores.
- **Reasoning: 82/100.** Deep reasoning with thinking enabled by default (effort low/medium/xhigh); next-generation Qwen flagship positioning; capped by absence of public reasoning benchmark scores (GPQA, HLE, etc.).
- **Context window: 92/100.** 1M-token context with 384K max output (shared thinking+answer budget); verified on Alibaba Cloud docs; capped by no published long-context retrieval scores at full window.
- **Multimodal: 85/100.** Image and video understanding for screenshot analysis, document understanding, video analysis; text output only; capped by no published vision benchmark scores.
- **Coding: 82/100.** Designed for coding, office productivity, frontend design, agentic tasks; capped by absence of public SWE-bench/LiveCodeBench scores.
- **Cost efficiency: 60/100.** Token Plan pricing undisclosed; preview-only, retired after November 25, 2026; not counted toward Overall.
- **Overall Score: 85/100.** Half-up mean of (85 + 82 + 92 + 85 + 82) / 5 = 85.2 → 85. Best-fit recommendation: flagship multimodal Qwen model for coding and agentic tasks; verify on independent benchmarks after preview ends and public access broadens.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-11-11
- Method: public internet research (Alibaba Cloud Model Studio documentation); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen4-Max-Preview — Alibaba Cloud Model Studio](https://www.alibabacloud.com/help/en/model-studio/qwen4-max-preview)
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.
