# Grok 4 Fast — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/grok-4-fast-reasoning (xAI Grok 4 Fast model page), Artificial Analysis (`artificialanalysis.ai/models/grok-4-fast-reasoning`), Vals AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's proprietary fast reasoning model; 2M context; proprietary (weights not public); sibling models: Grok 4, Grok 4.3, Grok 4.5, Grok 4.6.
- **Provider / access:** xAI API (`grok-4-fast-reasoning`); proprietary (weights not public).
- **Release / knowledge:** Released 2026 per xAI; knowledge cutoff not stated.
- **IDs:** `grok-4-fast-reasoning` (xAI API). No Free ID confirmed.
- **Context window:** 2M tokens (benchlm.ai). Verified.
- **Modalities:** Not confirmed on benchlm.ai; assumed text in → text out; reasoning type: Reasoning per benchlm.ai; tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Not found on benchlm.ai or AA.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- τ²-bench results: **65.8%** (Artificial Analysis)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **17.9%** (Artificial Analysis)
- AA-GPQA Diamond: **84.7%** (Artificial Analysis)
- AA-HLE: **19.1%** (Artificial Analysis)
- AA-Omniscience Index **-29.9%**; Accuracy **22.8%**; Hallucination rate **68.3%** (AA)
- AA-LCR (long-context reasoning): **73.7%** (Artificial Analysis)
- CritPt: **2.9%** (Artificial Analysis)
- AA-IFBench: **50.5%** (Artificial Analysis)

Coding:

- Vibe Code Bench: **0.00%** (Vals AI)

Multimodal & grounded:

- AA-MMMU-Pro: **61.8%** (Artificial Analysis)

Long context:

- AA-LCR: **73.7%** (Artificial Analysis); declared 2M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is thin (benchlm 12 of 639 slots).

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 50/100.** τ²-bench (65.8%); capped by extremely thin coverage — only 1 agentic benchmark found.
- **Reasoning: 60/100.** AA-GPQA Diamond 84.7%, AA-LCR (73.7%), AA Intelligence Index (17.9%); capped by CritPt (2.9%), AA-HLE (19.1%), AA-Omniscience accuracy (22.8%), Intelligence Index (17.9%). Moderate reasoning.
- **Context window: 90/100.** Verified 2M tokens (benchlm.ai); AA-LCR 73.7%; capped because no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 50/100.** AA-MMMU-Pro (61.8%); capped by text-only output assumption and thin multimodal coverage.
- **Coding: 20/100.** Vibe Code Bench (0.00%); capped by extremely thin coverage — only 1 coding benchmark found at 0%.
- **Cost efficiency: 50/100.** No pricing data found; scored conservatively.
- **Overall Score: 54/100.** Half-up mean of (50 + 60 + 90 + 50 + 20) / 5 = 54.0 → 54. Best-fit recommendation: very large context window (2M) but thin benchmark coverage overall; verify on coding and agentic tasks given poor coding result.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai Grok 4 Fast model card + Artificial Analysis + Vals AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is thin (12 of 639 slots) — treat scores as provisional.
- Future sources: add a new file next to this one, using the same headings.
