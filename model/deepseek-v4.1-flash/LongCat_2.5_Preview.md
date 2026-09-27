# DeepSeek V4.1 Flash — findings by LongCat 2.5 Preview

- Source: DeepSeek (`deepseek-flash` / `DeepSeek-V4.1-Flash`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4.1-Flash
- **Short description:** DeepSeek's efficiency-optimized multimodal MoE — a 552B-parameter model with only 8B/16B active parameters per token (Causal Encoder-Decoder), 1M context, and frontier-tier terminal/coding benchmarks at the lowest API prices in the field.
- **Provider / access:** DeepSeek API — `deepseek-flash` (OpenAI + Anthropic-compatible; thinking/non-thinking modes; `reasoning_effort` 1–100). Also DeepInfra, OpenRouter. Announced 2026-09-10 (V4-Flash and V4-Flash-Vision-Exp retired onto it).
- **Release / knowledge:** Announced 2026-09-10; knowledge cutoff not published.
- **IDs:** `deepseek/deepseek-v4.1-flash` (OpenRouter), `deepseek-flash` (DeepSeek API). No Zen Free ID — paid only.
- **Context window:** 1,048,576 tokens; max output 384K.
- **Modalities:** Text and image in; text out; reasoning yes (continuously controllable effort 1–100); tool calls, JSON output, function calling, FIM completion.
- **Pricing (as of 2026-09-27):** $0.15/M in (cache miss, off-peak; $0.30 peak), $0.003–0.006/M cache hit, $0.60/M out (off-peak; $1.20 peak). Paid only.
- **Architecture:** 552B backbone params; 8B active prefill / 16B active decode; Causal Encoder-Decoder (CED) with SWA bounded replay; MIT license open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (max effort; HF model card)
- Terminal-Bench 3.0: **30.0%**; Terminal-Bench 4.0: **31.2%**
- NL2Repo-Bench: **64.0%**; SEC-Bench Pro: **62.8%**
- Tau3-Banking / GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.9%**
- HLE: **36.8%** (39.1% with tools)
- MathArena Apex: **65.6%**; Codeforces: **3471**

Coding:

- DeepSWE v1.1: **74.2%** (max effort)
- BigCodeBench: **60.6%**; HumanEval: **79.4%**; ProgramBench: **20.3%**
- LiveCodeBench: no verified public score found

Long context:

- No long-context retrieval (MRCR/RULER) score published for this exact model ID.

### Normalized scores (1–100)

- **Tool use: 85/100.** TB2.1 90.6% clears the 88%+ frontier mark; NL2Repo 64.0% and SEC-Bench 62.8% are solid; TB4.0 31.2% keeps the dimension under 90.
- **Reasoning: 85/100.** GPQA 90.9% is frontier-tier; HLE 36.8% (39.1% with tools) sits just under the 40% frontier bar.
- **Context window: 95/100.** 1M tokens with 384K output earns the ≥1M tier; no published 512K+ retrieval result to confirm the top of the band.
- **Multimodal: 65/100.** Text/image input lands in the +image-in 60–70 band; no audio/video input and text-only output cap it there.
- **Coding: 85/100.** DeepSWE 74.2% (max effort) meets the 74%+ frontier reference; TB2.1 90.6% and BigCodeBench 60.6% support the band.
- **Cost efficiency: 97/100.** $0.15/$0.60 off-peak pricing is ~4x cheaper than the ~$0.60/$2.20 ≈ 92 reference point — the best rates in the field.
- **Overall Score: 83/100.** Mean of the five quality dims (85+85+95+65+85)/5 = 83. Best-fit: default cost-efficient coding/terminal agent — frontier-tier TB2.1/DeepSWE at the lowest API prices available.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (DeepSeek announcement + HF model card, DeepInfra, OpenRouter, deepseekv4guide); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
