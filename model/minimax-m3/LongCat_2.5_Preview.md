# MiniMax M3 — findings by LongCat 2.5 Preview

- Source: MiniMax (`MiniMax-M3`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's open-weight flagship — the first open model combining frontier coding/agentic performance, a 1M-token context window (via MiniMax Sparse Attention), and native multimodality (text/image/video in).
- **Provider / access:** MiniMax API — `MiniMax-M3` (OpenAI + Anthropic-compatible); open weights on HuggingFace (MiniMax Community License; code MIT). Also OpenRouter, Fireworks, Novita, Together, Venice. Released 2026-06-01.
- **Release / knowledge:** Released 2026-06-01; knowledge cutoff not documented.
- **IDs:** `minimax/MiniMax-M3` (HF), `MiniMax-M3` (API). No Zen Free ID — paid API / open weights.
- **Context window:** 1,048,588 tokens (guaranteed minimum 512K); max output 512K (recommended 131K).
- **Modalities:** Text, image, video in; text out; reasoning yes (adaptive or disabled); tool calling, code execution, structured outputs, prompt caching.
- **Pricing (as of 2026-09-27):** $0.30/M in, $1.20/M out (≤512K input); $0.60/$2.40 (>512K); cache read $0.06/$0.12. Paid API / open weights.
- **Architecture:** 428B total params, ~23B active; MoE with MiniMax Sparse Attention (MSA); open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **66.0%**; Terminal-Bench 2.1 (Vals): **53.6%**
- BrowseComp: **83.5%**; OSWorld-Verified: **70.1%**
- MCP Atlas: **74.2%**; Claw-Eval: **74.5%**
- Tau3-Banking / GDPval-AA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **35.7** (independent)
- GPQA Diamond / HLE: no verified public score found

Coding:

- SWE-bench Verified: **80.5%**
- SWE-bench Pro: **59.0%**
- LiveCodeBench (Vals): **82.2%**; SWE-bench (Vals): **75.0%**
- VIBE V2: **50.1%**; NL2Repo: **42.1%**; KernelBench Hard: **28.8%**
- AA Coding Index: **58.6** (independent)

Long context:

- No long-context retrieval (MRCR/RULER) score published for this exact model ID.

Multimodal extras:

- MMMU-Pro: **78.1%**; SVG-Bench: **63.7%**; OmniDocBench exceeds Gemini 3.1 Pro (vendor claim)

### Normalized scores (1–100)

- **Tool use: 75/100.** BrowseComp 83.5%, MCP Atlas 74.2% and OSWorld 70.1% are solid; TB2.0 66.0% sits mid-band and TB2.1 (Vals) 53.6% lags the field.
- **Reasoning: 66/100.** AA Intelligence Index 35.7 (independent) lands just above the mid band (20–35 → 55–65); no GPQA/HLE number to confirm more.
- **Context window: 95/100.** 1M tokens with 512K output earns the ≥1M tier; no published 512K+ retrieval result to confirm the top of the band.
- **Multimodal: 85/100.** Text/image/video input lands in the 75–90 band; text-only output caps it there.
- **Coding: 70/100.** SWE-bench Verified 80.5% and VIBE V2 50.1% are mid-band; SWE-bench Pro 59.0% is a notch under the field leaders.
- **Cost efficiency: 95/100.** $0.30/$1.20 standard pricing beats the methodology's ~$0.60/$2.20 ≈ 92 reference point — among the best rates in the field.
- **Overall Score: 78/100.** Mean of the five quality dims (75+66+95+85+70)/5 = 78.2 → 78. Best-fit: cost-efficient open-weight multimodal coding/agent — strong economics and native video input, a step behind the frontier on reasoning and terminal benchmarks.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (MiniMax launch + report, BenchLM, llm-stats, LLMReference, Artificial Analysis mirrors); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
