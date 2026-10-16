# Mistral Large 4 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/mistral-large-4 (Mistral AI launch page mistral.ai/news/mistral-large-4/), Artificial Analysis (`artificialanalysis.ai/models/mistral-large-4`), Vals AI, OpenRouter
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral's Large 4 proprietary reasoning model (released Oct 2026 per AA; Mistral AI launch) for complex professional work; hybrid reasoning; text+image in → text out; 524K–1M context window (benchlm 1M, AA 524k/520k), $1.36/$4.18 per MTok.
- **Provider / access:** Mistral API (`mistral-large-4`), OpenRouter (`mistralai/mistral-large-4-0`), 2 API providers per Artificial Analysis. Related: Mistral Large 3, Mistral Small 4, Magistral family. Source type: "Pending" per benchlm; AA labels proprietary.
- **Release / knowledge:** Released 2026-10 (AA says 6 Oct 2026); knowledge cutoff not stated.
- **IDs:** `mistral-large-4` (Mistral API / OpenRouter). AA says 1T parameters; benchlm source type pending — conflicting parameter/openness info.
- **Context window:** 1M (benchlm.ai) / 524k–520k (Artificial Analysis); ~786 A4 pages per AA.
- **Modalities:** Text and image in; text out; reasoning yes (hybrid/extended thinking); tool use yes (agentic workflows); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $1.36/M input, $4.18/M output (AA; cache discount 90%, cost per task $1.13).
- **Architecture:** Proprietary (weights not public per AA); 1T parameters per AA; benchlm source type pending — conflicting.

### Raw benchmarks found

Agent / tool use:

- Cybench: **93.0%** (Mistral AI launch)
- Finance Agent v2: **54.7%** (Vals AI)
- GDPval-AA: **1422 Elo** (Artificial Analysis); normalized **46.1%**
- AA Briefcase Elo: **1393** (Artificial Analysis)
- AA AutomationBench: **59.9%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **26.8%** (Artificial Analysis)
- GDP.pdf: **18.6%** (Artificial Analysis)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **38.4%** (Artificial Analysis)
- AA-HLE: **35.0%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **81.3%** (Artificial Analysis)
- CritPt: **10.6%** (Artificial Analysis)
- AA-Omniscience Index **-5.3%**; Accuracy **25.8%**; Hallucination rate **41.9%** (AA)

Coding:

- Vibe Code Bench: **78.40%** (Vals AI)
- AA-SciCode: **54.2%** (Artificial Analysis)

Multimodal & grounded:

- AA-MMMU-Pro: **76.4%** (Artificial Analysis)
- Design Arena Website: **1259** (OpenRouter)
- Text+image in, text out per AA; no MMMU-Pro/Chartography breakdown beyond AA-MMMU-Pro.

Long context:

- AA-LCR: **81.3%** (Artificial Analysis); declared 524k–1M context; no public full-depth needle-recall score beyond LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is thin (benchlm 19 of 638 slots); mistral-large-4 has sparse public numbers outside Artificial Analysis.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 68/100.** Cybench 93.0%, GDPval-AA Elo 1422, AA AutomationBench 59.9%; capped by weak AA Terminal-Bench 4.0 (26.8), GDP.pdf (18.6). Strong cyber/security tool use, weak on terminal-agent tasks.
- **Reasoning: 64/100.** AA Intelligence Index 38, AA-LCR 81.3%; capped by CritPt (10.6), AA-Omniscience accuracy (25.8%), AA-HLE (35.0), no public GPQA/ARC-AGI numbers for this exact model.
- **Context window: 80/100.** Declared 524K–1M context (conflicting: benchlm 1M, AA 524k); AA-LCR 81.3%; capped because no public full-depth needle-recall score beyond LCR and conflicting window size.
- **Multimodal: 72/100.** Text+image in, text out; AA-MMMU-Pro 76.4%; capped by thin vision benchmark coverage and text-only output.
- **Coding: 64/100.** Vibe Code Bench 78.4%, AA-SciCode 54.2%; capped by absence of public SWE-bench/LiveCodeBench numbers — scored conservatively.
- **Cost efficiency: 75/100.** $1.36/$4.18 moderate pricing with 90% cache discount; not counted toward Overall.
- **Overall Score: 70/100.** Half-up mean of (68 + 64 + 80 + 72 + 64) / 5 = 69.6 → 70. Best-fit recommendation: proprietary hybrid-reasoning model strong on cybersecurity tool use (Cybench); verify on agentic terminal and coding tasks given thin public coverage.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + Mistral AI launch page + Artificial Analysis + Vals AI + OpenRouter independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
