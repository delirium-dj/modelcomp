# GPT-5.3 Codex — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/gpt-5-3-codex (OpenAI GPT-5.3 Codex System Card), Artificial Analysis (`artificialanalysis.ai/models/gpt-5-3-codex`), Vals AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex
- **Short description:** OpenAI's proprietary reasoning model for coding (released February 5, 2026 per AA); 400K context / text+image in → text out; $1.75/$14 per MTok; knowledge cutoff Aug 2025; sibling: GPT-5.3-Codex-Spark.
- **Provider / access:** OpenAI API (`gpt-5.3-codex`), 1 API provider per Artificial Analysis; proprietary (weights not public).
- **Release / knowledge:** Released February 5, 2026 (AA); knowledge cutoff Aug 2025.
- **IDs:** `gpt-5.3-codex` (OpenAI API). No Free ID confirmed.
- **Context window:** 400K tokens (benchlm.ai, Artificial Analysis). Verified.
- **Modalities:** Text+image in, text out per AA; reasoning yes (chain-of-thought); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $1.75/M input, $14.00/M output (AA; cache discount 90%, blended rate $1.87).
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **77.3%** (OpenAI GPT-5.3 Codex System Card)
- OSWorld-Verified: **64.7%** (OpenAI GPT-5.3 Codex System Card)
- τ²-bench results: **86%** (Artificial Analysis)
- JobBench: **33.7%** (JobBench paper)
- Gert Labs: **57.47%** (Gert Labs rankings)

Reasoning / knowledge:

- GPQA Diamond: **91.5%** (Artificial Analysis)
- HLE: **42.5%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **32.5%** (#88 of 216; median 27)
- AA-LCR (long-context reasoning): **83.3%** (Artificial Analysis)
- CritPt: **16.9%** (Artificial Analysis)
- AA-Omniscience Index **10.9%**; Accuracy **52.9%**; Hallucination rate **89.2%** (AA)
- AA-IFBench: **75.4%** (Artificial Analysis)

Coding:

- SWE-bench Verified: **85%** (OpenAI GPT-5.3 Codex System Card)
- SWE-bench Pro: **56.8%** (OpenAI GPT-5.3 Codex System Card)
- SWE-Rebench: **58.2%** (SWE-Rebench leaderboard)
- Vibe Code Bench: **61.77%** (Vals AI)
- LiveCodeBench v6: **87.3%** (Vals AI)
- SWE-bench (Vals): **78.0%** (Vals AI)

Multimodal & grounded:

- AA-MMMU-Pro: **78.5%** (Artificial Analysis)
- Design Arena Website: **1164** (OpenRouter)

Long context:

- AA-LCR: **83.3%** (Artificial Analysis); declared 400K context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 70/100.** Terminal-Bench 2.0 (77.3%), OSWorld-Verified (64.7%), τ²-bench (86%), AA-IFBench (75.4%); capped by weak JobBench (33.7%). Solid agentic tool-use profile.
- **Reasoning: 68/100.** GPQA Diamond 91.5%, AA Intelligence Index (32.5%), AA-LCR (83.3%); capped by CritPt (16.9%), HLE (42.5%), AA-Omniscience accuracy (52.9%). Strong knowledge reasoning.
- **Context window: 78/100.** Verified 400K tokens (benchlm.ai + AA); AA-LCR 83.3%; capped because context below 1M frontier and no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 68/100.** Text+image in, text out per AA; AA-MMMU-Pro (78.5%), Design Arena Website 1164; capped by text-only output and no MMMU/CharXiv numbers found.
- **Coding: 74/100.** SWE-bench Verified (85%), SWE-bench Pro (56.8%), SWE-Rebench (58.2%), LiveCodeBench v6 (87.3%), SWE-bench Vals (78.0%), Vibe Code Bench (61.77%); strong verified coding.
- **Cost efficiency: 55/100.** $1.75/$14 premium pricing with 90% cache discount; not counted toward Overall.
- **Overall Score: 71.6/100.** Half-up mean of (70 + 68 + 78 + 68 + 74) / 5 = 71.6 → 72. Best-fit recommendation: strong verified coding model at 400K context; premium output price ($14/M) justified only for demanding coding tasks where its SWE-Verified edge matters.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + OpenAI GPT-5.3 Codex System Card + Artificial Analysis + Vals AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
