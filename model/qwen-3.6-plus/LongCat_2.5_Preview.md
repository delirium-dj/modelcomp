# Qwen 3.6 Plus — findings by LongCat 2.5 Preview

- Source: Alibaba/Qwen 3.6 Plus
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba's flagship reasoning model with 1M context window, native vision, function calling, and web search. Hybrid architecture combining linear attention with sparse MoE routing.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.6-plus`). OpenAI-compatible API.
- **Release / knowledge:** 2026-04-02 release.
- **IDs:** `qwen3.6-plus` (snapshot: `qwen3.6-plus-2026-04-02`)
- **Context window:** 1,000,000 tokens total; 991,808 max input at standard pricing. Max output 65,536 tokens.
- **Modalities:** text, image input; text output; reasoning yes; tool calling yes; web search yes.
- **Pricing (as of 2026-10-02):** International: $0.50/1M input, $3.00/1M output (<=256K); $1.10/1M input, $6.60/1M output (>256K). China: $0.276/1M input, $1.651/1M output.
- **Architecture:** Hybrid autoregressive with chain-of-thought integration; combines Gated DeltaNet linear attention with sparse MoE routing.

### Raw benchmarks found

Agent / tool use:

- BridgeBench Security Bench: **43.3%** (Venice.ai — GPT-5.4 Mini and Claude Sonnet 4.5 score ~87)
- Function calling: yes; Web search: yes

Reasoning / knowledge:

- LMSYS Arena Elo: **1443** (90.5th percentile) (LMMarketCap)

Coding:

- Agentic coding, front-end programming, Vibe coding: marked enhancement over 3.5 series (Alibaba Cloud docs)
- SWE-bench Verified (open-weight 27B): **77.2** (opper.ai — not Plus variant)
- SWE-bench Verified (open-weight 35B-A3B): **73.4** (opper.ai — not Plus variant)

Long context:

- No long-context retrieval benchmark (MRCR/RULER/GraphWalks) publicly reported for Qwen 3.6 Plus.

Multimodal:

- Native vision-language support (Alibaba Cloud docs)
- RealWorldQA (open-weight 35B-A3B): **85.3** (opper.ai — not Plus variant)
- MMBench (open-weight 35B-A3B): **92.8** (opper.ai — not Plus variant)

### Normalized scores (1–100)

- **Tool use: 60/100.** Function calling and web search supported. BridgeBench Security Bench 43.3% — significantly behind GPT-5.4 Mini and Claude Sonnet 4.5 (~87). Capped by security-focused coding benchmark.
- **Reasoning: 78/100.** LMSYS Arena Elo 1443 (90.5th percentile) indicates strong overall quality. No direct GPQA/AIME scores for Plus variant publicly reported.
- **Context window: 95/100.** 1M token context window with 65K max output. Among the largest available. Tiered pricing for >256K tokens.
- **Multimodal: 70/100.** Native vision-language support. Open-weight variants show strong RealWorldQA (85.3) and MMBench (92.8). Plus variant likely comparable or better.
- **Coding: 72/100.** Alibaba docs highlight "markedly enhanced" agentic coding, front-end programming, and Vibe coding. Open-weight 27B variant scores 77.2 on SWE-bench Verified. Plus variant expected to be stronger.
- **Cost efficiency: 90/100.** $0.50/1M input and $3.00/1M output (International) — very cost-efficient. China pricing even lower at $0.276/$1.651. Tiered pricing for >256K context.
- **Overall Score: 75/100.** Mean of five quality dims (60+78+95+70+72)/5 = 75.0 → 75. Best fit: cost-efficient multimodal reasoning and agentic coding with large context requirements.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
