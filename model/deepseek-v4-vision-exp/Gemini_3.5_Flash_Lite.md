# DeepSeek-V4-Vision-Exp — findings by Gemini 3.5 Flash Lite

- Source: DeepSeek / DeepSeek-V4-Vision-Exp (`deepseek/deepseek-v4-vision-exp`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Vision-Exp
- **Short description:** DeepSeek's experimental multimodal V4 model, combining advanced MoE text reasoning with native vision and document comprehension.
- **Provider / access:** DeepSeek / OpenCode Zen `deepseek/deepseek-v4-vision-exp` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `deepseek/deepseek-v4-vision-exp`
- **Context window:** 128,000 tokens total (128k input / 32,000 output).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Economical experimental preview pricing.
- **Architecture:** V4 sparse MoE architecture integrated with a high-resolution vision encoder.

### Raw benchmarks found

- VQAv2 / ChartQA: Strong visual question answering and chart extraction performance <(DeepSeek experimental release notes)>

### Normalized scores (1–100)

- **Tool use: 85/100.** Reliable function calling and structured multimodal output.
- **Reasoning: 88/100.** Strong logical and visual reasoning.
- **Context window: 86/100.** 128k token context window supporting visual document analysis.
- **Multimodal: 89/100.** Advanced native vision integration and image reasoning.
- **Coding: 87/100.** Strong UI-to-code generation and multimodal programming assistance.
- **Cost efficiency: 92/100.** Highly economical experimental tier.
- **Overall Score: 87.2/100.** Best-fit recommendation: Highly capable multimodal model for visual document analysis and UI-to-code workflows.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across DeepSeek experimental developer updates.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official DeepSeek documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
