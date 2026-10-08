# Qwen3.8-Flash — findings by MiMo 2.6 Flash

- Source: Alibaba / Qwen (`qwen-3.8-flash`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Flash
- **Short description:** The **production hosted build** behind the open-weights `Qwen3.8-Flash-Next` architecture preview (both released 2026-08-26; "Qwen4-preview" engineering — Gated DeltaNet, Qwen Sparse Attention, Gated Residual, N-gram Embedding; ~176B stored checkpoint, ~6B activated main params + 51B N-gram embeddings, 125B figure per llmboard). Same engineering lineage as Flash-Next but served with a **default 1M context**, hosted built-in tools, and OpenAI/Anthropic-compatible APIs. Trained for ~1/9 the compute of Qwen3.7-Plus while beating it across coding/office/agent suites; positioned at ~1/12 of Qwen3.8-Max's price as the flash-tier workhorse.
- **Provider / access:** Qwen Cloud / Alibaba Cloud Model Studio (`qwen3.8-flash`), OpenRouter (`qwen/qwen3.8-flash`), Together AI, Ofox, B.AI (currently 0-credit promo); open sibling weights on Hugging Face/ModelScope (`Qwen/Qwen3.8-Flash-Next` + GGUF/FP8 quants; Unsloth 1-bit build runs in ~75 GB RAM); SGLang/vLLM/TensorRT-LLM/NVIDIA GB300 NVL72 validated (>16K tok/s/GPU FP8); draft Ascend NPU support in SGLang.
- **Release / knowledge:** released 2026-08-26; knowledge cutoff not published in sources reviewed.
- **IDs:** `qwen3.8-flash` (hosted) / `qwen/qwen3.8-flash` (gateways) / `Qwen/Qwen3.8-Flash-Next` (open weights).
- **Context window:** **1,000,000 tokens default on the hosted API**; the open Flash-Next checkpoint is 262,144 native, YaRN-extendable to 1M; max output 131,072.
- **Modalities:** text, images, video understanding in; text out; reasoning yes (thinking mode, `reasoning_effort` levels); tool calls yes (function calling, structured output, hosted built-in tools, web search).
- **Pricing (as of 2026-10-07):** **$0.15 in / $0.47 out** per 1M (official blog; X post says $0.16/$0.47; China 1/3 CNY ≈ $0.149/$0.447); cache read **$0.016** (10% of input), cache write $0.20; cheapest tracked third party Ofox $0.11/$0.39; ~1/12 of Qwen3.8-Max's $2/$6. Free weights for self-hosting (GGUF 72–111 GB by quant).
- **Architecture:** Flash-Next MoE lineage as above; ~1/9 training compute of Qwen3.7-Plus (vendor).

### Raw benchmarks found

> Qwen has not published a separate table for the hosted endpoint; rows below are the Flash-Next foundation evaluation (vendor) plus independent leaderboard readings for `qwen3.8-flash`.

Agent / tool use:

- Terminal-Bench 2.1: **86.1** (Artificial Analysis, independent, observed 2026-09-15) — **clears the 85% ref**
- Terminal-Bench 4.0: **25.3** (AA, independent) — mid-lower pack
- Toolathlon Verified (Pass@1): **73.5** (vendor; vs DeepSeek-V4-Flash 70.3, Qwen3.7-Plus 50.6)
- CoWorkBench: 73.9 (vendor; vs Claude Opus 4.6 68.2); JobBench 55.7 (vs Qwen3.7-Plus 27.6)
- AndroidWorld: **84.5** (vendor; vs Opus 4.6 62.0) — strong mobile-agent row; ERQA embodied row mentioned without figure
- OSWorld / GDPval / MCP-Atlas / ALE: no figure found

Reasoning / knowledge:

- GPQA Diamond: **91.7** vendor / **92.3** independent (AA, 2026-09-11/16; −3.94 vs GPT-6 Astra); llmboard: 91.70, 92nd pct, rank 20/250 — **clears the 90%+ ref, on both vendor and independent readings**
- HLE / ARC-AGI / AIME: not published for this id
- LiveCodeBench v6: **91.9** (vendor; vs Opus 4.6 88.8)
- LLMBoard composite: 80.6 (coverage 40%, 22 benchmark families, independent)

Coding (Qwen-run unless noted):

- SWE-bench Pro: **62.5** (vendor; vs Opus 4.6 Max 53.4, Qwen3.7-Plus 55.8, DeepSeek-V4-Flash 56.0) — mid-tier, no ref for this row
- DeepSWE 1.1: **58.7** (vendor; vs Qwen3.7-Plus 16.5) — **under the 74%+ ref**
- SWE-bench Multilingual: 81.0; NL2Repo-Bench: 48.1; SWE-bench Verified: not published for this id
- SciCode / AA Coding Index: not found

Long context:

- 1M default hosted window; open checkpoint 262K native → 1M YaRN; **no needle/MRCR/LCR figure found**

Multimodal (Qwen-run):

- LVBench (video): **76.6** (vs Opus 4.6 63.0); RealWorldQA: **88.5** (vs Opus 4.6 73.9); MathVision mentioned as competitive (no figure extracted); AndroidWorld 84.5 as above

### Normalized scores (1–100)

- **Tool use: 85/100.** Independent TB2.1 86.1 (85+ ref), Toolathlon 73.5, CoWork 73.9, AndroidWorld 84.5 and JobBench 55.7 make a credible multi-surface agent story; no OSWorld/GDPval/ALE/MCP rows and TB4.0 25.3 keep it at 85.
- **Reasoning: 83/100.** GPQA Diamond clears the 90+ ref twice over (91.7 vendor / 92.3 AA independent) and LCB v6 91.9 reinforces technical depth; but HLE, ARC-AGI and the AA Intelligence Index are all absent, so only one of three reasoning refs is verifiable.
- **Context window: 95/100.** Hosted default is 1M → ≥1M floor; no retrieval benchmark at any length and the open checkpoint's native 262K prevent anything above the floor.
- **Multimodal: 86/100.** Text + image + video in → 75–90 band; LVBench 76.6, RealWorldQA 88.5, AndroidWorld 84.5 all beat their Opus 4.6 comparators; no audio input and no PDF-native/document rows hold it at 86.
- **Coding: 83/100.** Independent TB2.1 86.1 clears the ref, LCB v6 91.9 is strong, SWE-ML 81.0 solid; DeepSWE 58.7 misses the 74% ref badly, SWE-Pro 62.5 is mid-tier, no SWE-V/SciCode row, and Qwen explicitly hasn't published hosted-endpoint results.
- **Cost efficiency: 95/100.** $0.15/$0.47 with 10%-of-input cache reads and free open weights — roughly a twelfth of Max pricing at functional parity for most flash-tier workloads; only the absence of a documented free API tier and the usual China-region hosting considerations keep it below 96.
- **Overall Score: 86/100.** (85+83+95+86+83)/5 = 86.4 → 86 — Qwen's cost-optimization showpiece: independent-verified frontier-band agentic coding and GPQA at under 50¢ per million output tokens, discounted for missing HLE/Index/retrieval disclosure, a sub-74 DeepSWE, and benchmark tables that technically belong to its open foundation, not the hosted endpoint.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Alibaba Cloud blog, Qwen GitHub, AI Atlas, llmboard, LLM Data Hub, OrcaRouter, MindStudio, B.AI docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
