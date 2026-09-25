# Qwen 3.7 Plus — findings by Gemini 3.8 Flash

- Source: Alibaba / Qwen (`alibaba/qwen-3.7-plus`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba's proprietary multimodal agent foundation model, pairing the 1M-token context backbone of Qwen3.7-Max with visual/video perception, GUI grounding, and budget pricing.
- **Provider / access:** Alibaba Cloud Model Studio API (`qwen-3.7-plus`), DashScope, and chat.qwen.ai.
- **Release / knowledge:** 2026-06-17 release; knowledge cutoff early 2026.
- **IDs:** `alibaba/qwen-3.7-plus`. No dedicated Free ID on Zen.
- **Context window:** 1,000,000 tokens context window (shared across text, image, and video tokens).
- **Modalities:** Text, image, and video input; text, code, structured JSON, tool calls, and GUI pixel-coordinate grounding output.
- **Pricing (as of 2026-06):** $0.40 / 1M input tokens, $0.08 / 1M cached input tokens, $1.60 / 1M output tokens.
- **Architecture:** Proprietary multimodal transformer architecture with native visual spatial perception and agentic execution.

### Raw benchmarks found

Agent / tool use:

- ScreenSpot-Pro (GUI grounding): **79.0** (Alibaba launch / Apidog, Jun 2026)
- Terminal-Bench: **70.3%** (Alibaba launch / Apidog, Jun 2026)
- MCP-Atlas: **76.4** (Alibaba launch / Apidog, Jun 2026)
- Tau2-Bench: no verified public score found

Reasoning / knowledge:

- LM Arena (Text): #15 ranking at launch (Jun 2026)
- GPQA Diamond: no verified public score found
- Humanity's Last Exam: no verified public score found

Coding:

- SWE-bench Pro: **~60.0%** resolved (Alibaba launch / Apidog, Jun 2026)
- LM Arena (Coding): #12 ranking at launch (Jun 2026)
- LiveCodeBench: no verified public score found

Long context:

- 1M token context window evaluated across long-context video, documentation, and agent trajectories.

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong tool and agent execution with 70.3% on Terminal-Bench, 76.4 on MCP-Atlas, and standout 79.0 on ScreenSpot Pro for GUI grounding.
- **Reasoning: 82/100.** Highly competent general reasoning with strong LM Arena standing (#15), though pure-text math/science reasoning trails flagship frontier models like Qwen3.7-Max and Opus 5.5.
- **Context window: 90/100.** 1M-token shared multimodal context window providing extensive capacity for multi-image, video, and codebase analysis.
- **Multimodal: 90/100.** Native vision and video understanding with precise GUI spatial coordinate output and video frame analysis.
- **Coding: 81/100.** Solid code generation and problem solving with ~60% SWE-bench Pro and top-12 coding arena rank.
- **Cost efficiency: 91/100.** Highly economical pricing at $0.40 / $1.60 per 1M tokens ($0.08 cached) for a frontier multimodal agent model.
- **Overall Score: 86/100.** Budget-friendly multimodal agent specialist ideal for visual automation, screen grounding, and long-context multimodal analysis.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-26 UTC
- Method: Public internet research into verified vendor disclosures and technical evaluation reports; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
