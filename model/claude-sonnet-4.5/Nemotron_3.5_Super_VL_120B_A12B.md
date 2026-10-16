# Claude Sonnet 4.5 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/claude-sonnet-4-5 (Anthropic Claude Opus 4.5 system card), Artificial Analysis, Vals AI, Epoch AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's proprietary non-reasoning model; 200K context / text+in → text out; sibling: Claude Sonnet 4.5 Thinking; related: Claude Opus 4.5.
- **Provider / access:** Anthropic API (`claude-sonnet-4.5`); proprietary (weights not public).
- **Release / knowledge:** Released 2026 per Anthropic; knowledge cutoff not stated.
- **IDs:** `claude-sonnet-4.5` (Anthropic API / OpenRouter). No Free ID confirmed.
- **Context window:** 200K tokens (benchlm.ai). Verified.
- **Modalities:** Not confirmed on benchlm.ai; assumed text in → text out; reasoning type: Non-Reasoning per benchlm.ai; tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Not found on benchlm.ai or AA.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; non-reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **50%** (Anthropic Claude Opus 4.5 system card — cross-ref)
- OSWorld-Verified: **61.4%** (Anthropic Claude Opus 4.5 system card — cross-ref)
- VITA-Bench: **17.0%** (VitaBench leaderboard)
- JobBench: **27.7%** (JobBench paper)
- Gert Labs: **48.51%** (Gert Labs rankings)

Reasoning / knowledge:

- GPQA: **83.4%** (Anthropic Claude Opus 4.5 system card — cross-ref)
- ARC-AGI-2: **13.6%** (Anthropic Claude Opus 4.5 system card — cross-ref)
- Artificial Analysis Intelligence Index: not found for this variant
- AA-LCR: not found for this variant
- FrontierMath v2 Tiers 1-3: **23.860%** (Epoch AI)
- FrontierMath v2 Tier 4: **2.439%** (Epoch AI)

Coding:

- SWE-bench Verified: **77.2%** (Anthropic Claude Opus 4.5 system card — cross-ref)

Multimodal & grounded:

- Design Arena Website: **1191** (OpenRouter)

Long context:

- Declared 200K context (benchlm.ai); no public needle-recall score found.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is very thin (benchlm 13 of 639 slots).

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 45/100.** Terminal-Bench 2.0 (50%), OSWorld-Verified (61.4%), Gert Labs (48.51%); capped by weak VITA-Bench (17.0%), JobBench (27.7%), extremely thin coverage — only 5 agentic benchmarks found.
- **Reasoning: 50/100.** GPQA 83.4%, FrontierMath T1-3 (23.860%); capped by CritPt not found, HLE not found, AA-Omniscience not found, extremely thin coverage — only 2 reasoning benchmarks found.
- **Context window: 75/100.** Verified 200K tokens (benchlm.ai); capped because context below 1M frontier and no public needle-recall score found.
- **Multimodal: 35/100.** No multimodal benchmarks found beyond Design Arena Website (1191); capped by text-only output assumption and zero multimodal data.
- **Coding: 60/100.** SWE-bench Verified (77.2%); capped by extremely thin coverage — only 1 coding benchmark found.
- **Cost efficiency: 40/100.** No pricing data found; scored conservatively.
- **Overall Score: 53/100.** Half-up mean of (45 + 50 + 75 + 35 + 60) / 5 = 53.0 → 53. Best-fit recommendation: all quality scores are provisional due to extremely thin benchmark coverage (13 of 639 slots); treat as placeholder pending broader data.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai Claude Sonnet 4.5 model card + Anthropic Claude Opus 4.5 system card cross-ref + Epoch AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is very thin (13 of 639 slots) — treat scores as provisional.
- Future sources: add a new file next to this one, using the same headings.
