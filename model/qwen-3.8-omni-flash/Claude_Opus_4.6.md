# Qwen 3.8 Omni Flash — findings by Claude Opus 4.6

- Source: Alibaba / Qwen Team (`qwen/qwen-3.8-omni-flash`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Omni Flash
- **Short description:** Alibaba's native omnimodal model processing text, image, audio, and video streams in a 1M context window. Designed for high-throughput productivity, spatial audio reasoning, and agentic execution across all modalities. Released September 18, 2026.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen/qwen-3.8-omni-flash`), OpenAI-compatible endpoints. Hosted API only.
- **Release / knowledge:** 2026-09-18 release; knowledge cutoff not publicly specified.
- **IDs:** `qwen/qwen-3.8-omni-flash` (no Free ID)
- **Context window:** 1,000,000 tokens (1M) input / 131,072 tokens max output — per meta.json and Alibaba docs.
- **Modalities:** Text + image + audio + video in; text out. Real-time streaming audio output (base64-encoded). Coarse-to-fine perception mechanism for efficient video processing (45.7% token reduction on video tasks).
- **Pricing (as of 2026-11-13):** $0.15/1M input, $0.47/1M output, $0.016/1M cached input. Very affordable for a 1M-context omnimodal model.
- **Architecture:** Sparse MoE / hybrid backend optimized for high-speed agentic execution. Exact parameter counts undisclosed. Part of the Qwen 3.8 infrastructure line.

### Raw benchmarks found

Agent / tool use:

- Agentic multimodal execution confirmed via Qwen-MM-Plugins and Qwen-Live-Harness frameworks
- WildClawBench-MM / UniClawBench: competitive with Gemini 3.8 Flash (specific scores not broken out)
- Terminal-Bench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.0%** (arxiv.org / Qwen Team)
- HLE: evaluated but specific score not published as headline metric
- IFBench: evaluated (specific score not broken out)
- MMLU: not formally highlighted as primary standalone metric
- CritPt: no verified public score found

Coding:

- LiveCodeBench v6: **92.6%** (arxiv.org / Qwen Team — competitive coding)
- SWE-bench Pro: **63.3%** (arxiv.org / Qwen Team)
- SciCode / AA-SciCode: no verified public score found

Long context:

- 1M token context window confirmed. Coarse-to-fine perception mechanism reduces token usage on video tasks by ~45.7%. No specific MRCR/RULER/GraphWalks retrieval numbers found.

Multimodal-specific:

- OmniVideoBench: ~67.8 (improvements reported vs. predecessor)
- Audio benchmarks: outperforms Gemini 3.8 Flash on dense audio reasoning (AliMeeting-test, AISHELL-4, WenetSpeech)
- >26% average performance gain across ~30 audio/audio-visual/agentic benchmarks vs. Qwen3.5-Omni-Plus predecessor
- 98% reduction in audio input processing costs, 93% reduction in audio-visual input costs vs. prior generations

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong agentic multimodal execution with dedicated plugin frameworks (Qwen-MM-Plugins, Qwen-Live-Harness). Competitive with Gemini 3.8 Flash on multimodal agentic benchmarks. SWE-bench Pro 63.3% shows solid software engineering capability. Capped by absent Terminal-Bench/Toolathon scores.
- **Reasoning: 90/100.** GPQA Diamond 91.0% is near frontier-class. This is a remarkably strong reasoning score for a "Flash" tier model. Capped slightly by the absence of standalone HLE/MMLU headline numbers.
- **Context window: 92/100.** 1M token input (highest commercial tier) with 131K output. Efficient coarse-to-fine perception cuts video token usage nearly in half. No long-context retrieval benchmark to cap further, but the architecture is purpose-built for long multimodal streams.
- **Multimodal: 85/100.** Native text + image + audio + video input with streaming audio output — one of the most comprehensive multimodal input suites available. Real-time voice/video conversation support. Outperforms Gemini 3.8 Flash on dense audio reasoning. No image/video generation output, which caps the score.
- **Coding: 88/100.** LiveCodeBench v6 92.6% is frontier-class competitive coding. SWE-bench Pro 63.3% is solid for practical software engineering. Very strong coding for an omnimodal flash model. Capped by no DeepSWE or Vibe Code Bench scores.
- **Cost efficiency: 90/100.** $0.15/$0.47 per 1M tokens — extremely affordable for a 1M-context omnimodal model. Among the cheapest frontier-class models available.
- **Overall Score: 87/100.** Mean of (82 + 90 + 92 + 85 + 88) / 5 = 87.4 → 87. A remarkably capable omnimodal flash model with frontier-class reasoning (GPQA 91%) and coding (LiveCodeBench 92.6%) at flash pricing. The native audio+video input plus 1M context makes it one of the most versatile models in the roster.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-13
- Method: Public internet research (arxiv.org Qwen Team paper, qwen.ai, Alibaba Cloud Model Studio, apxml.com, flowtivity.ai, alizila.com, kompozy.io); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen Team — Qwen3.8-Omni-Flash](https://qwen.ai)
  - [arxiv.org — Qwen3.8-Omni-Flash technical paper](https://arxiv.org)
  - [Alibaba Cloud — Model Studio models](https://www.alibabacloud.com/help/en/model-studio/models)
  - [alizila.com — Qwen3.8 Omni Flash announcement](https://alizila.com)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
