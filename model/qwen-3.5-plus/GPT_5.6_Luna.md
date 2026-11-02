# Qwen 3.5 Plus — findings by GPT 5.6 Luna

- Source: Alibaba Cloud/Qwen3.5-Plus
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Alibaba’s hosted Qwen3.5 Plus reasoning model for long-context text, vision, video, coding, and tool workflows.
- **Provider / access:** Alibaba Cloud Model Studio/QwenCloud; model ID `qwen3.5-plus`. The official pricing documentation identifies `qwen3.5-plus-2026-02-15` as the current equivalent alias; the April 20 snapshot is a separate version.
- **Release / knowledge:** February 15, 2026 base snapshot, with a separately documented 2026-04-20 snapshot; knowledge cutoff is not published.
- **IDs:** `qwen3.5-plus`, `qwen3.5-plus-2026-02-15`, and the separately documented `qwen3.5-plus-2026-04-20`.
- **Context window:** 1,000,000 tokens; maximum input 991K, maximum thinking input 983K, and maximum output 65,536 tokens.
- **Modalities:** Text, image, and video input with text output; function calling, web search, code interpreter, structured outputs, caching, and batch workflows are documented.
- **Pricing (as of 2026-11-02):** $0.40 input / $2.40 output per 1M tokens for prompts up to 256K; $0.50 / $3.00 for 256K–1M. Cache creation/read rates and regional prices differ.
- **Architecture:** Proprietary hosted hybrid architecture combining linear attention and sparse MoE; exact Plus parameterization is not published. The open-weight Qwen3.5-397B-A17B model is not used as a proxy.

### Raw benchmarks found

- BenchLM snapshot (2026-10-29): composite **49.17/100**, rank **#101/1004**, with only 2 of 724 benchmarks covered; coverage is explicitly partial. ([BenchLM Qwen3.5 Plus](https://benchlm.ai/models/qwen3-5-plus))
- Exact-tier rows in that profile: JobBench **18.5%** and Vibe Code Bench v1.1 **15.74%**. No exact-tier public score was verified for a broader reasoning, multimodal, or tool suite.
- The official model page documents the input modalities, long-context limits, tools, and hybrid architecture, but its qualitative capability claims do not provide a comparable exact-tier benchmark table. ([QwenCloud Qwen3.5-Plus](https://www.qwencloud.com/models/qwen3.5-plus))

### Normalized scores (1–100)

- **Tool use: 62/100.** Function calling, web search, and code interpreter are documented, but the only exact-tier task row, JobBench at 18.5%, is weak and independent coverage is sparse.
- **Reasoning: 60/100.** The model is explicitly reasoning-capable, but no exact-tier reasoning score was verified; family and 397B counterpart results are not substituted.
- **Context window: 97/100.** The official page documents a 1M window and nearly 1M maximum input, without a full-window retrieval score.
- **Multimodal: 85/100.** Native text/image/video input is documented, but no exact-tier multimodal benchmark number was verified.
- **Coding: 55/100.** Vibe Code Bench at 15.74% is the only exact-tier coding row found; broader Qwen3.5 family coding results are excluded.
- **Cost efficiency: 90/100.** $0.40/$2.40 at ordinary prompt lengths and $0.50/$3.00 for long prompts are competitive, though this is a paid hosted model.
- **Overall Score: 71.8/100.** Mean of the five quality dimensions `(62 + 60 + 97 + 85 + 55) / 5 = 71.8`; the high context and modality scores are specification-based, while capability scores remain provisional.

## Evidence notes

- This report intentionally does not substitute Qwen3.5-397B-A17B, Qwen3.5 Omni-Plus, Qwen3.7 Plus, or Qwen3.8 results for the exact Plus tier.
- The two BenchLM rows are benchmark-specific and not a complete quality profile; the BenchLM composite is retained as an external reference only.

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current Alibaba/Qwen model documentation, official pricing, and BenchLM’s October 29 exact-tier profile; scores are provisional normalized interpretations, not official vendor scores.
- Reference URLs:
  - [QwenCloud Qwen3.5-Plus model page](https://www.qwencloud.com/models/qwen3.5-plus)
  - [Alibaba Cloud Qwen3.5-Plus documentation](https://www.alibabacloud.com/help/en/model-studio/qwen3-5-plus)
  - [Alibaba Cloud model pricing](https://www.alibabacloud.com/help/en/model-studio/model-pricing)
  - [BenchLM Qwen3.5 Plus profile](https://benchlm.ai/models/qwen3-5-plus)
