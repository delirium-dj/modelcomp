# Grok 4.1 Fast — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/grok-4-1-fast (xAI Grok 4.1 Fast model page), Artificial Analysis (`artificialanalysis.ai/models/grok-4-1-fast`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's proprietary fast non-reasoning model; 1M context; proprietary (weights not public); sibling: Grok 4.1 Fast (Reasoning).
- **Provider / access:** xAI API (`grok-4-1-fast`); proprietary (weights not public).
- **Release / knowledge:** Released 2026 per xAI; knowledge cutoff not stated.
- **IDs:** `grok-4-1-fast` (xAI API). No Free ID confirmed.
- **Context window:** 1M tokens (benchlm.ai). Verified.
- **Modalities:** Not confirmed on benchlm.ai; assumed text in → text out; reasoning type: Non-Reasoning per benchlm.ai; tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Not found on benchlm.ai or AA.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; non-reasoning model.

### Raw benchmarks found

Agent / tool use:

- τ²-bench results: **63.7%** (Artificial Analysis)
- Gert Labs: **47.32%** (Gert Labs rankings)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **11.3%** (Artificial Analysis)
- AA-GPQA Diamond: **63.7%** (Artificial Analysis)
- AA-HLE: **5.1%** (Artificial Analysis)
- AA-Omniscience Index **-50.9%**; Accuracy **17.2%**; Hallucination rate **82.3%** (AA)
- AA-LCR (long-context reasoning): **31.3%** (Artificial Analysis)
- CritPt: **0.0%** (Artificial Analysis)
- AA-IFBench: **36.5%** (Artificial Analysis)

Coding:

- None found for this variant.

Multimodal & grounded:

- AA-MMMU-Pro: **48.4%** (Artificial Analysis)

Long context:

- AA-LCR: **31.3%** (Artificial Analysis); declared 1M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is thin (benchlm 12 of 639 slots).

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 50/100.** τ²-bench (63.7%), Gert Labs (47.32%); capped by extremely thin coverage — only 2 agentic benchmarks found.
- **Reasoning: 45/100.** AA-GPQA Diamond 63.7%, AA-LCR (31.3%), AA Intelligence Index (11.3%); capped by CritPt (0.0%), AA-HLE (5.1%), AA-Omniscience accuracy (17.2%), Intelligence Index (11.3%). Weakest reasoning profile.
- **Context window: 90/100.** Verified 1M tokens (benchlm.ai); AA-LCR 31.3%; capped because no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 40/100.** AA-MMMU-Pro (48.4%); capped by text-only output assumption and thin multimodal coverage.
- **Coding: 25/100.** No coding benchmarks found for this variant; scored conservatively due to zero data.
- **Cost efficiency: 50/100.** No pricing data found; scored conservatively.
- **Overall Score: 50/100.** Half-up mean of (50 + 45 + 90 + 40 + 25) / 5 = 50.0 → 50. Best-fit recommendation: large context window (1M) but very thin benchmark coverage overall; verify broadly on all task types given sparse data.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai Grok 4.1 Fast model card + Artificial Analysis independent analysis); scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is thin (12 of 639 slots) — treat scores as provisional.
- Future sources: add a new file next to this one, using the same headings.
