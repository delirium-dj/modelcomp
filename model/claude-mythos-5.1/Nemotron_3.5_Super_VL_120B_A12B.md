# Claude Mythos 5.1 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Anthropic (`anthropic.com/claude-fable-and-mythos-5-1`), benchlm.ai/models/claude-mythos-5, Artificial Analysis (`artificialanalysis.ai/models/claude-fable-5-1`), llm-stats.com
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's proprietary mythos-class model (released September 1, 2026), the vetted-access sibling of Claude Fable 5.1 — same underlying model weights with more permissive cybersecurity and biology safeguards; available only to vetted organizations through Anthropic's Cyber Verification Program and Life Sciences Verification Program; 1M context / 128K max output; text+images→text; $10/$50 per MTok; knowledge cutoff Jun 2026.
- **Provider / access:** Claude API (`claude-mythos-5-1`), Anthropic API; available only through vetted access programs (Cyber Verification Program, Life Sciences Verification Program); not generally available.
- **Release / knowledge:** Released September 1, 2026; knowledge cutoff June 2026.
- **IDs:** `claude-mythos-5-1` (Claude API); Claude Mythos 5.1 shares the same model as Claude Fable 5.1 but with relaxed cybersecurity/biology safeguards; no Free ID confirmed.
- **Context window:** 1M tokens; max output 128K tokens (same as Claude Fable 5.1, verified on Anthropic launch page).
- **Modalities:** Text and images in; text out; reasoning yes; tool use yes (agentic workflows); structured outputs yes.
- **Pricing (as of 2026-10-16):** $10/MTok input, $50/MTok output (same as Claude Fable 5.1); cache read discount 75% ($0.25/MTok).
- **Architecture:** Proprietary (weights not public); same underlying model as Claude Fable 5.1; parameter count undisclosed; reasoning model. Differentiator is access control and relaxed safeguards, not architecture.

### Raw benchmarks found

The following numbers come from Anthropic's official launch announcement (anthropic.com/claude-fable-and-mythos-5-1), which explicitly compares Claude Fable 5.1 and Claude Mythos 5.1 side by side since they are the same underlying model with different safeguards. benchlm.ai provides Claude Mythos 5 (predecessor) data; Artificial Analysis provides Claude Fable 5.1 independent analysis (applicable to Mythos 5.1 as same model).

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** (Mythos 5.1, Anthropic launch) vs **55.8%** (Fable 5.1)
- BrowseComp: not found for Mythos 5.1 specifically (Fable 5.1 not reported either)
- GDPval-AA: not found for Mythos 5.1 specifically
- AutomationBench: not found for Mythos 5.1 specifically (Fable 5: 31.4%)
- OSWorld-Verified: not found for Mythos 5.1 specifically (Fable 5: 85%)
- Mythos 5 (predecessor): Terminal-Bench 2.1 **88.0%**, OSWorld-Verified **85%**, BrowseComp **88%**, CyberGym **83.8%**, SWE-bench Verified **95.5%**, SWE-bench Pro **80.3%**, GPQA **94.1%**, HLE **64.5%** (benchlm.ai)

Reasoning / knowledge:

- GPQA: not found for Mythos 5.1 specifically (Fable 5: 94.1% per benchlm; Fable 5.1: 92.6% per AA)
- HLE: not found for Mythos 5.1 specifically (Fable 5: 64.5% per benchlm; Fable 5.1: 55.5% per AA)
- MMLU-Pro: not found for Mythos 5.1 specifically (Fable 5.1: 91.5% per Vals AI)
- ARC-AGI-1: not found for Mythos 5.1 specifically (Fable 5: 98.50% per ARC Prize)
- Artificial Analysis Intelligence Index: **53** (#5 of 217) (Artificial Analysis, for Claude Fable 5.1 — same model as Mythos 5.1)
- AA-LCR: not found for Mythos 5.1 specifically
- CritPt: not found for Mythos 5.1 specifically

Coding:

- SWE-bench Verified: not found for Mythos 5.1 specifically (Fable 5: 95.5% per benchlm; Fable 5.1: 95% per system card)
- SWE-bench Pro: not found for Mythos 5.1 specifically (Fable 5: 80.3% per benchlm; Fable 5.1: 80% per system card)
- LiveCodeBench: not found for Mythos 5.1 specifically (Fable 5: 89.8% per Vals AI; Fable 5.1: 89.8% per Vals AI)
- SWE-bench Multimodal: not found for Mythos 5.1 specifically (Fable 5: 54.9% per Anthropic system card)

Multimodal & grounded:

- CharXiv: not found for Mythos 5.1 specifically (Fable 5: 93.5% per Anthropic system card)
- Chartography: not found for Mythos 5.1 specifically

Long context:

- AA-LCR: not found for Mythos 5.1 specifically (Fable 5.1: 82.3% per AA)

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is limited to a few agentic/coding rows from the Anthropic launch page plus sister-model (Claude Fable 5.1) data from Artificial Analysis and benchlm.ai — treat all scores as provisional.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 78/100.** Terminal-Bench 4.0 (60.9%, Mythos 5.1 specific); GDPval-AA not found for Mythos 5.1 (Fable 5: 1747 Elo per Anthropic); capped by very limited agentic benchmark coverage for this exact variant — most agentic numbers come from the Claude Fable 5.1 sibling (same model, same capabilities).
- **Reasoning: 81/100.** AA Intelligence Index 53 (#5 of 217, shared with Fable 5.1); GPQA not found for Mythos 5.1 specifically (Fable 5: 94.1%, Fable 5.1: 92.6% per Vals AI); capped by absence of HLE/ARC-AGI numbers for this exact variant.
- **Context window: 88/100.** 1M tokens (same as Fable 5.1, verified on Anthropic launch page); no public full-depth needle-recall score for Mythos 5.1 specifically.
- **Multimodal: 72/100.** Text+images→text per AA (Fable 5.1 listing); no public multimodal benchmark numbers (MMMU-Pro, CharXiv, etc.) found for Mythos 5.1 specifically.
- **Coding: 82/100.** SWE-bench Verified not found for Mythos 5.1 specifically (Fable 5: 95.5% per benchlm; Fable 5.1: 95% per system card); DeepSWE not found for Mythos 5.1 (Fable 5: 71.0% per Anthropic); capped by extremely thin coding coverage for this exact variant.
- **Cost efficiency: 75/100.** $10/$50 same as Fable 5.1 (premium pricing); not counted toward Overall.
- **Overall Score: 80.2/100.** Half-up mean of (78 + 81 + 88 + 72 + 82) / 5 = 75.8 → 76. Best-fit recommendation: vetted-access variant of Claude Fable 5.1 with relaxed cybersecurity/biology safeguards; same underlying model; verify on your own tasks given extremely thin independent benchmark coverage (3 vendor-reported rows only).

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (Anthropic launch page + benchlm.ai + Artificial Analysis independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
