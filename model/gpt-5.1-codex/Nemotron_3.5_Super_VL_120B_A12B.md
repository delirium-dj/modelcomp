# GPT-5.1-Codex — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/gpt-5-1-codex (OpenAI launch page), Artificial Analysis (`artificialanalysis.ai/models/gpt-5-1-codex`), Vals AI, OpenRouter
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex
- **Short description:** OpenAI's proprietary reasoning model (released Nov 2025 per AA); deprecated by AA in favor of GPT-5.2 Codex; 400K context, text+image input → text out, $1.25/$10 per MTok; knowledge cutoff Sep 30, 2024.
- **Provider / access:** OpenAI API (`gpt-5.1-codex`), native OpenAI API; 1 API provider per Artificial Analysis; proprietary (weights not public).
- **Release / knowledge:** Released Nov 2025 (AA); knowledge cutoff Sep 30, 2024; deprecated by AA (GPT-5.2 Codex is newer).
- **IDs:** `gpt-5.1-codex` (OpenAI API); sibling: `gpt-5.2-codex`. No Free ID confirmed.
- **Context window:** 400K tokens (benchlm.ai, Artificial Analysis). Verified.
- **Modalities:** Text and image in; text out; reasoning yes; tool use not explicitly specified for this variant; JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $1.25/M input, $10.00/M output (AA).
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- τ²-bench results: **83%** (Artificial Analysis)
- JobBench: **26.2%** (JobBench paper)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **23.7%** (#132 of 217; below median 27) (Artificial Analysis)
- GPQA Diamond: **86.0%** (Artificial Analysis)
- HLE: **25.7%** (AA-HLE)
- AA-LCR (long-context reasoning): **69.3%** (Artificial Analysis)
- CritPt: **5.7%** (Artificial Analysis)
- AA-Omniscience Index **-6.5%**; Accuracy **39.9%**; Hallucination rate **77.2%** (AA)
- IFBench: **70.0%** (Artificial Analysis)

Coding:

- LiveCodeBench (Vals): **85.6%** (Vals AI)
- Vibe Code Bench: **13.12%** (Vals AI)

Multimodal & grounded:

- AA-MMMU-Pro: **72.5%** (Artificial Analysis)
- Design Arena Website: **1163** (OpenRouter)
- Text+image in, text out per AA; no MMMU-Pro/Chartography breakdown beyond AA-MMMU-Pro.

Long context:

- AA-LCR: **69.3%** (Artificial Analysis); declared 400K context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is thin (benchlm 16 of 638 slots).

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 62/100.** τ²-bench (83%); capped by weak JobBench (26.2%), no OSWorld/Terminal-Bench/MCP Atlas numbers found for this exact model.
- **Reasoning: 62/100.** GPQA 86.0%, AA-LCR 69.3%, AA Intelligence Index 23.7; capped by CritPt (5.7%), HLE (25.7%), AA-Omniscience accuracy (39.9%), Intelligence Index (23.7, below median).
- **Context window: 70/100.** Verified 400K tokens (benchlm.ai + AA); capped because context below 1M frontier and no public full-depth needle-recall score.
- **Multimodal: 62/100.** Text+image in, text out per AA; AA-MMMU-Pro 72.5%; capped by text-only output and thin vision coverage.
- **Coding: 64/100.** LiveCodeBench Vals 85.6%, Vibe Code Bench 13.12%; capped by zero public SWE-bench number found for this exact model — scored conservatively.
- **Cost efficiency: 75/100.** $1.25/$10 moderate pricing with 90% cache discount; not counted toward Overall.
- **Overall Score: 64/100.** Half-up mean of (62 + 62 + 70 + 62 + 64) / 5 = 66.0 → 66. Best-fit recommendation: deprecated Codex reasoning model with strong LiveCodeBench; superseded by GPT-5.2 Codex — verify on coding tasks given weak Vibe Code Bench result.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + OpenAI GPT-5.1-Codex launch page + Artificial Analysis + Vals AI + OpenRouter independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
