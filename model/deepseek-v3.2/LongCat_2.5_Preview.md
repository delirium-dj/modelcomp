# DeepSeek V3.2 — findings by LongCat 2.5 Preview

- Source: DeepSeek/DeepSeek-V3.2
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V3.2
- **Short description:** DeepSeek's reasoning-first open MoE with DeepSeek Sparse Attention (DSA), integrating thinking directly into tool-use. Supports thinking and non-thinking modes. MIT open weights. A higher-compute variant (V3.2-Speciale) targets competitive programming.
- **Provider / access:** DeepSeek API (`deepseek-v3.2`), Hugging Face (`deepseek-ai/DeepSeek-V3.2` open weights), OpenRouter, Novita, Venice AI, 26+ providers. OpenAI-compatible API.
- **Release / knowledge:** 2025-12-01.
- **IDs:** `deepseek/deepseek-v3.2` (also `deepseek-ai/DeepSeek-V3.2` on Hugging Face)
- **Context window:** 128K–164K tokens (varies by provider) — verified via Opper, ModelBench, Ofox; up to 64K output tokens.
- **Modalities:** Text input; Text output. Reasoning: yes (thinking and non-thinking modes). Tool calling: yes (function calling, tool use in both modes).
- **Pricing (as of 2026-10-09):** $0.18–0.28/1M input, $0.35–0.43/1M output (varies by provider). MIT open weights.
- **Architecture:** 671B total / 37B active MoE, DeepSeek Sparse Attention (DSA) + Multi-head Latent Attention (MLA). Pre-trained on 15T tokens. V3.2-Speciale variant for competitive programming (IMO/CMO gold-level).

### Raw benchmarks found

Agent / tool use:

- Function calling: supported (ModelBench, Ofox)
- Tool use in thinking and non-thinking modes (Opper, DeepSeek)
- TAU2: evaluated (CloudPrice)
- SWE-bench Verified: **73.1%** (Opper)

Reasoning / knowledge:

- Intelligence Index (Opper): **16.0**
- Intelligence Index (CloudPrice): **21.5 / #3**
- Math Index (Opper): **59.0**
- AIME 2025: **93.1%** (Opper)
- GSM8K: **95.91%** (5-shot, vLLM)
- HLE (CloudPrice): below average
- Arena Elo: **1425 / 87.5th percentile** (LMMarketCap)

Coding:

- SWE-bench Verified: **73.1%** (Opper)
- Vals Open-Weight Index: **#1** (Nonthinking, Vals AI)
- Coding Index (CloudPrice): **44.2 / #3**
- LiveCodeBench: evaluated (CloudPrice)

Long context:

- Context window: **128K–164K tokens** (varies by provider) — verified via Opper, ModelBench
- LCR (CloudPrice): below average

Multimodal:

- Text input only (ModelBench, Opper)
- No image, audio, or video input

### Normalized scores (1–100)

- **Tool use: 68/100.** Function calling + tool use in both thinking and non-thinking modes. Good agentic capability but below frontier on complex agent tasks.
- **Reasoning: 62/100.** Intelligence Index 16-21.5 (below average), AIME 93.1% (strong math). Moderate general reasoning with strong mathematical capability.
- **Context window: 80/100.** 128K-164K token context. Good long-context capability.
- **Multimodal: 15/100.** Text-only input/output. No image, audio, or video support.
- **Coding: 72/100.** SWE-bench Verified 73.1%, Vals #1 open-weight. Good coding for open weights, competitive with larger models.
- **Cost efficiency: 92/100.** $0.18-0.28/$0.35-0.43 per 1M tokens — very affordable. MIT open weights. Exceptional value.
- **Overall Score: 59/100.** Mean of Tool (68), Reasoning (62), Context (80), Multimodal (15), Coding (72) = 297/5 = 59.4 → 59. Good value open-weight model with strong math and coding, but below average on general intelligence and text-only.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
