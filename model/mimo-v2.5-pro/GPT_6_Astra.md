# MiMo-V2.5-Pro — findings by GPT 6 Astra

- Source: Xiaomi / MiMo-V2.5-Pro
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Name:** MiMo-V2.5-Pro, reasoning configuration.
- **Short description:** Open-weight text model for long agent tasks; distinct from multimodal MiMo-V2.5.
- **Architecture:** MIT; 1.02T total / 42B active MoE with hybrid attention. [Publisher card](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)
- **Provider / IDs:** Xiaomi `mimo-v2.5-pro`; OpenRouter Chat Completions `xiaomi/mimo-v2.5-pro`. No verified Zen Free ID.
- **Release / knowledge:** Provider listing April 22, 2026; publisher open-release article April 27; cutoff not verified.
- **Context window:** Publisher 1M; OpenRouter 1,050,000; separate output ceiling not verified.
- **Modalities:** Text in/out, reasoning, function calling and schema outputs on supported routes.
- **Pricing (2026-10-05):** Xiaomi route $0.435 input / $0.87 output / $0.0036 cache read per million. Other routes offer temporary discounts; evaluated tariff is Xiaomi's paid route. [Provider pricing](https://openrouter.ai/xiaomi/mimo-v2.5-pro/performance)

### Raw benchmarks found

- AA reasoning configuration: Intelligence Index v4.3.2 26; GDPval-AA v2.1 1123; Briefcase v1.1 882; AutomationBench 14%; Terminal-Bench **4.0** 0%; SciCode 51%; HLE 36%; CritPt 4%; Omniscience index 3 (not accuracy); AA-LCR v1.1 80%. [Direct evaluator table](https://artificialanalysis.ai/models/comparisons/mimo-v2-5-pro-vs-mimo-v2-pro)
- Publisher ClawEval 64% Pass^3 at approximately 70K tokens per trajectory; separate compiler case study passed 233/233 tests after 672 tool calls. Case study is not a general SWE benchmark. [Xiaomi evaluation](https://mimo.xiaomi.com/mimo-v2-5-pro)
- GPQA, Tau3, Terminal-Bench 2.1, SWE-bench Pro, LiveCodeBench, MCP-Atlas and Vibe Code Bench: no verified public score found in retrieved primary text. Base-model card scores are not assigned to the post-trained model.
- No full-window retrieval score verified beyond AA-LCR.

### Normalized scores (1–100)

- **Tool use: 69/100.** ClawEval and professional tasks are useful; low automation/terminal performance caps reliability.
- **Reasoning: 77/100.** HLE and LCR are strong; low CritPt and current composite limit generality.
- **Context window: 95/100.** 1M capacity with no near-perfect full-window retrieval evidence.
- **Multimodal: 15/100.** Text-only.
- **Coding: 74/100.** SciCode and measured compiler task support competence; no verified standardized repair result here.
- **Cost efficiency: 96/100.** Low paid token price with steep cache discount.
- **Overall Score: 66/100.** Half-up mean: (69 + 77 + 95 + 15 + 74) / 5 = 66. Long-context text agents are its strongest fit.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-05 UTC
- Method: Fresh primary-source research; scores are normalized interpretations, not official scores.

