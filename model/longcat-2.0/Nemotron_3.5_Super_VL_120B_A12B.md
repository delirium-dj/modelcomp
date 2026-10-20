# LongCat 2.0 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: ominigate.ai (`ominigate.ai/en/models/meituan/longcat-2.0/benchmarks`), LongCat API Platform (`longcat.ai/platform/docs/Pricing/LongCat-2.0.html`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.0
- **Short description:** Meituan's LongCat 2.0, released June 2026; open-weight long-context model; text+image input, text output; 1M-token context; successor model to LongCat 2.5 Preview.
- **Provider / access:** Meituan LongCat API (`longcat-2.0`, Chat Completions + Anthropic Messages); OpenRouter route likely available.
- **Release / knowledge:** Released 2026-06-29 (per OpenVibeEval); knowledge cutoff not stated.
- **IDs:** `longcat-2.0` (LongCat API). No Free ID confirmed on OpenCode Zen.
- **Context window:** 1,000,000 tokens declared (ominigate.ai, OpenVibeEval); max output 262.1K tokens (ominigate.ai).
- **Modalities:** Text and image in; text out; reasoning not explicitly stated; tool calling not explicitly advertised.
- **Pricing (as of 2026-10-20):** Uncached input $0.30/1M, cached input $0.006/1M, output $1.20/1M (LongCat API Platform limited-time discounted); standard $0.75 input / $2.95 output / $0.015 cache read per 1M.
- **Architecture:** Open weights (parameter count not disclosed in sources checked); proprietary training, open weights release.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **79.9%** (ominigate.ai)
- Terminal-Bench: **70.8%** (ominigate.ai, v2.1)
- FORTE: **73.2%** (ominigate.ai)
- IFEval: **90** (ominigate.ai)

Reasoning / knowledge:

- GPQA Diamond: **78.0%** (ominigate.ai, AA)
- HLE: **32.1%** (ominigate.ai, AA)
- Artificial Analysis Intelligence Index: not numerically reported (ominigate.ai shows #61 of 148)

Coding:

- SciCode: **35.4%** (ominigate.ai, AA)
- SWE-Bench Pro: **59.5%** (ominigate.ai)
- SWE-Bench Multilingual: **77.3%** (ominigate.ai)

Long context:

- No dedicated long-context retrieval score beyond context window declaration of 1M tokens.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 70/100.** Strong agent/tool profile: BrowseComp 79.9%, Terminal-Bench 70.8%, FORTE 73.2%, IFEval 90%. Top-tier instruction following and web browsing; no OSWorld or MCP Atlas scores found.
- **Reasoning: 65/100.** Solid knowledge: GPQA Diamond 78.0%; held down by HLE 32.1%. No MMLU, ARC-AGI, or Intelligence Index numeric score found.
- **Context window: 70/100.** Verified 1M-token context with 262.1K max output; no LCR/MRCR/RULER retrieval score found.
- **Multimodal: 35/100.** Text+image in, text out; no vision benchmark scores (MMMU, etc.) found to justify higher.
- **Coding: 60/100.** SWE-Bench Pro 59.5%, SWE-Bench Multilingual 77.3%, SciCode 35.4%; no LiveCodeBench or HumanEval scores found.
- **Cost efficiency: 60/100.** $0.30 input / $1.20 output per 1M (discounted) — moderate pricing; paid API, no Free tier confirmed.
- **Overall Score: 60/100.** Half-up mean of (70 + 65 + 70 + 35 + 60) / 5 = 60.0 → 60. Best-fit recommendation: strong agentic/web-browsing model with 1M context; weak on multimodal and frontier reasoning (HLE).

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-20
- Method: public internet research (ominigate.ai benchmarks + LongCat official API pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.