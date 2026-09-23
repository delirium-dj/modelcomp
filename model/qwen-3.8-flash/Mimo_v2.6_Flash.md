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
