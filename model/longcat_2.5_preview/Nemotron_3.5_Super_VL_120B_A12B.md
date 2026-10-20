# LongCat 2.5 Preview — findings by Nemotron 3.5 Super VL 120B A12B

- Source: OpenVibeEval (`openvibeeval.com/compare/longcat-2-0-vs-longcat-v2-5-preview/`), OpenCode Data (`opencode.ai/data/meituan/longcat-2-5-preview`), LongCat API Platform (`longcat.ai/platform/docs/pricing/longcat-2.5`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5 Preview
- **Short description:** Meituan's LongCat 2.5 Preview, released September 2026; successor to LongCat 2.0 (June 2026); text+image input, text output; 1M-token context; available via LongCat API Platform pay-as-you-go, not open weights.
- **Provider / access:** LongCat API Platform (`longcat-2.5-preview`, Chat Completions + Responses API + Anthropic Messages); OpenCode route.
- **Release / knowledge:** Released September 2026; knowledge cutoff unknown.
- **IDs:** `longcat-2.5-preview` (LongCat API, OpenCode). No Free ID confirmed on OpenCode Zen.
- **Context window:** 1,000,000 tokens declared (OpenVibeEval, OpenCode); max output 131K tokens (OpenCode); LCR 65% measured (OpenVibeEval).
- **Modalities:** Text and image in; text out; reasoning not explicitly stated; tool calling not explicitly advertised; structured output/JSON not confirmed.
- **Pricing (as of 2026-10-20):** Uncached input $0.30/1M tokens; cached input $0.006/1M tokens; output $1.20/1M tokens (LongCat API Platform, limited-time discounted pricing). OpenCode lists input $0.30/1M, output $1.20/1M.
- **Architecture:** Not publicly disclosed (parameter count, MoE/dense not published); proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal Bench: **50%** (OpenVibeEval)
- Terminal Bench 4.0: **0%** (OpenVibeEval)
- Tau Banking: **13%** (OpenVibeEval)
- Agentic Index: **14** (OpenVibeEval, index value)

Reasoning / knowledge:

- GPQA: **78%** (OpenVibeEval)
- HLE: **34%** (OpenVibeEval)
- SciCode: **36%** (OpenVibeEval)

Long context:

- LCR: **65%** (OpenVibeEval)

Coding:

- Coding Index: **45** (OpenVibeEval, index value)
- SciCode: **36%** (OpenVibeEval)

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 30/100.** Very weak agent/tool profile: Terminal Bench 50%, Terminal Bench 4.0 0%, Agentic Index 14, Tau Banking 13%. No OSWorld, BrowseComp, or MCP Atlas scores found.
- **Reasoning: 55/100.** Mixed: GPQA 78% is solid but HLE 34% is very low; no MMLU, MMLU-Pro, ARC-AGI, or Intelligence Index scores found.
- **Context window: 65/100.** Declared 1M-token context with LCR 65% measured; max output 131K tokens; no full-window MRCR/RULER curve.
- **Multimodal: 25/100.** Text+image in, text out only; no vision benchmark scores (MMMU, MMMU-Pro, etc.) found to justify a higher score.
- **Coding: 40/100.** Weak coding: Coding Index 45, SciCode 36%; no SWE-bench, LiveCodeBench, or HumanEval scores found.
- **Cost efficiency: 70/100.** Low pricing ($0.30 input / $1.20 output per 1M, cached $0.006) but paid — no Free tier confirmed; strong value per dollar but not free.
- **Overall Score: 43/100.** Half-up mean of (30 + 55 + 65 + 25 + 40) / 5 = 43.0 → 43. Best-fit recommendation: long-context document processing at low cost; not recommended for agentic, reasoning, or coding workloads given near-zero Terminal-Bench-4.0 and sub-40% HLE/Coding results.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-20
- Method: public internet research (OpenVibeEval benchmark suite + OpenCode usage/specs + LongCat official API pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.