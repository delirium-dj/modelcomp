# DeepSeek V4.1 Flash — findings by GPT-6.1 Terra

- Source: DeepSeek `DeepSeek-V4.1-Flash`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's multimodal open-weight mixture-of-experts model for long-context coding and agents. This is the original model, not the separately tracked 1017 revision.
- **Provider / access:** Weights `deepseek-ai/DeepSeek-V4.1-Flash`; DeepSeek's current `deepseek-flash` API route now serves the 1017 revision, so it must not be assumed to serve this earlier checkpoint.
- **Release / knowledge:** Vals reports 2026-09-10 release; knowledge cutoff not verified.
- **IDs:** Hugging Face `deepseek-ai/DeepSeek-V4.1-Flash`; no Zen Free ID verified.
- **Context window:** DeepSeek documents up to 1M tokens; Vals lists 384k maximum output for its evaluation route.
- **Modalities:** Text and image input, text output; tool calling and adjustable reasoning supported.
- **Pricing (2026-11-01):** Vals lists $0.30 input / $1.20 output per million on its evaluated route; current vendor route serves a different revision and may have different terms.
- **Architecture:** MIT-licensed 552B-backbone multimodal MoE, 8B active prefill / 16B active decode per DeepSeek; additional sparse memory is separately described by the model card.

### Raw benchmarks found

Agent / tool use:

- DeepSeek reports Terminal-Bench 2.1 **90.6%** at maximum effort using DeepSeek Harness Minimal; Vals reports **74.53%** across three trials at high effort. Harness and settings differ.
- Vals Terminal-Bench 4.0 **19.70% ± 1.75**; the vendor reports **31.2%** in its own harness. Different benchmark versions are not interchangeable.
- Tau3-Banking and GDPval-AA: no verified public score found.

Reasoning / knowledge:

- DeepSeek reports GPQA Diamond **90.9%**, HLE **36.8%**, and HLE **63.9% with tools** at maximum effort; the tool-assisted result is a separate setting.
- Vals ProofBench v1.1 **54.00% ± 5.01**.

Coding:

- DeepSeek reports DeepSWE v1.1 **74.2%** with mini-SWE agent, maximum effort; Vals Vibe Code Bench v1.1 **84.74% ± 2.89**.
- SWE-bench Verified and LiveCodeBench: no verified public score found.

Long context:

- Up to 1M advertised; no verified 512K-plus retrieval score found.

### Normalized scores (1–100)

- **Tool use: 86/100.** TB 2.1 and 4.0 show substantial harness and version sensitivity, which caps the score.
- **Reasoning: 89/100.** Vendor GPQA and HLE results support strong reasoning, tempered by independent ProofBench performance.
- **Context window: 96/100.** Advertised 1M context without a verified 512K-plus retrieval score.
- **Multimodal: 65/100.** Native image and text input, text output; audio and video not documented in the cited model card.
- **Coding: 90/100.** DeepSWE and Vals Vibe Code are strong, with the vendor's scaffold-specific configuration noted.
- **Cost efficiency: 95/100.** Vals reports $0.30/$1.20 per million for its evaluated route; current API model mapping differs.
- **Overall Score: 85/100.** Half-up mean of five quality dimensions; suited to open-weight long-context coding when appropriate serving is available.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Vendor model card and independent Vals research; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [DeepSeek V4.1 Flash model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)
  - [Vals evaluation](https://www.vals.ai/models/deepseek_deepseek-v4.1-flash)
  - [DeepSeek current API mapping](https://api-docs.deepseek.com/)
- Future sources: add a separate signed findings file alongside this one.
