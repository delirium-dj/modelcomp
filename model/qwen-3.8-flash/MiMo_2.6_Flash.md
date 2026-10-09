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

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Qwen3.8 Flash — findings by Mimo V2.6 Flash

- Source: Alibaba/`qwen3.8-flash`
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Flash
- **Short description:** Alibaba's 2026 lightweight multimodal MoE (125B total / 6B active — early Qwen4-architecture preview via Flash-Next lineage), 1M context, image+video in, Toolathlon 73.5 and SWE-Pro 62.5 at $0.15/$0.47. Trained at <1/9 the cost of Qwen3.7-Plus; pitched as surpassing Claude Opus 4.6 on coding/office at pocket-change pricing.
- **Provider / access:** Alibaba Cloud Model Studio / DashScope (`qwen3.8-flash` OpenAI-compatible Chat Completions + Anthropic protocol on some gateways); QwenCloud; OpenCode Zen `opencode/qwen3.8-flash` / OpenCode Go `opencode-go/qwen3.8-flash` ($0.15/$0.47); OpenRouter / models.dev `alibaba/qwen3.8-flash`.
- **Release / knowledge:** 2026-08 mid (QwenCloud docs / Reuters 2026-08-26 report on managed release); open-weight sibling `Qwen3.8-Flash-Next` OSS. Knowledge cutoff not published in rows reviewed.
- **IDs:** `qwen3.8-flash` (DashScope/QwenCloud); `alibaba/qwen3.8-flash` (gateways); Zen `opencode/qwen3.8-flash`.
- **Context window:** 1,000,000 tokens input; max output 131,072 (QwenCloud / models.dev); thinking CoT up to 262,144.
- **Modalities:** text, image, video in; text out; thinking mode toggle; tool calls; structured output / JSON mode; function calling.
- **Pricing (as of 2026-09-23):** $0.15 / $0.47 per 1M in/out (models.dev standard intl / QwenCloud intl rows); CN-mainland CNY tier separate (¥0.8/¥2.7 class per aliyun article). Batch/cache discounts available. Paid; Token Plan credits subscription optional.
- **Architecture:** sparse MoE 125B total / 6B active per token (+51B n-gram embedding component per aliyun deep-dive); early Qwen4 blueprint (Flash-Next open-weight sibling 125B/6B hybrid-attention).

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Missing rows = no verified public score found.

Agent / tool use:

- Toolathlon Verified: **73.5%** Pass@1 (QwenCloud / Qwen launch-class table — beats many Max-tier rows)
- AndroidWorld / OSWorld-class GUI: **84.5%** AndroidWorld-style row (prior research / Qwen docs — mobile agent strength)
- Terminal-Bench 2.1 / Tau3 / GDPval / MCP Atlas / Claw-Eval: **no verified public score found** for this exact Flash id in this pass

Reasoning / knowledge:

- GPQA-class / HLE / AA Intelligence Index: **no verified public score found** for Flash specifically in rows reviewed (Max/Plus siblings publish these; Flash rows are coding/agent-heavy)
- MathVision: **95.7%** (Qwen docs / prior research — strong multimodal math)
- IFBench / MMLU-Pro: **no verified public score found** in rows reviewed

Coding:

- SWE-bench Pro: **62.5%** (QwenCloud / sibling-table row — very strong for 6B-active Flash)
- DeepSWE: **58.7%** (Qwen / BenchmarkList-class row — beats several Pro-tier models)
- LiveCodeBench / SWE-bench Verified: **no verified public score found** for this exact id in this pass

Long context:

- 1M window documented (QwenCloud / models.dev); MRCR / RULER retrieval %: **no verified public score found**

Multimodal:

- Text, image, video in confirmed (QwenCloud docs); text out.
- MMMU-Pro / video suites: **no verified public score found** for Flash id in this pass (MathVision 95.7 is the primary multimodal measured row).

### Normalized scores (1–100)

- **Tool use: 82/100.** Toolathlon 73.5 and AndroidWorld-class 84.5 show strong GUI/agentic flash-tier workers; capped by missing public TB2.1/Tau3/GDPval/MCP/Claw rows for this exact id.
- **Reasoning: 82/100.** MathVision 95.7 proves hard multimodal math; capped by missing GPQA/HLE/AA Index public rows for Flash (cannot claim Max-class 90+ science on sibling numbers).
- **Context window: 95/100.** Full 1M (≥1M tier → 95); no public ≥98% retrieval at depth to claim 100.
- **Multimodal: 88/100.** Text/image/video in (video → 75–90 band, upper half); MathVision 95.7 strong; no audio/PDF claim and no MMMU-Pro row keeps it shy of 90+.
- **Coding: 90/100.** SWE-Pro 62.5 + DeepSWE 58.7 at 6B active is elite price-normalized coding — beats several Pro/frontier rows on effort-adjusted basis; capped slightly by missing SWE-V/LCB public rows for this exact id and absolute SWE-Pro still below Fable 80 / Opus 69.
- **Cost efficiency: 97/100.** $0.15/$0.47 is among the lowest non-free prices in this batch with 1M context + multimodal + Toolathlon 73.5 — near-ceiling value; only free-tier models score higher on pure $.
- **Overall Score: 87/100.** Mean of Tool 82 + Reasoning 82 + Context 95 + Multimodal 88 + Coding 90 = 437/5 = 87.4 → **87** (best-fit: runaway value pick for high-volume multimodal agentic coding at 1M context and $0.15/$0.47 — the price-per-capability leader of the Qwen3.8 line when Max-class absolute GPQA/HLE depth is not required).

---

## Signature

- Provided by: **Mimo V2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-09-23
- Method: public internet research (QwenCloud docs, models.dev provider rows, aliyun developer deep-dive, Qwen launch-class benchmark tables); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

