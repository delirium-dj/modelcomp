# Hy3 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/hy3 (Tencent Hy3 model card), Artificial Analysis (`artificialanalysis.ai/models/hy3`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3
- **Short description:** Tencent's open-weights MoE reasoning model (released July 6, 2026 per AA); 299B total / 21B active parameters; 256K context / text in → text out; $0.14/$0.55 per MTok; Apache 2.0 license; sibling: Hy3 Preview.
- **Provider / access:** Tencent API (`hy3`), 4 API providers per AA; open weights on Hugging Face (`tencent/Hy3`).
- **Release / knowledge:** Released July 6, 2026 (AA); knowledge cutoff not stated.
- **IDs:** `hy3` (Tencent API / OpenRouter), `tencent/Hy3` (HF weights). No Free ID confirmed.
- **Context window:** 256K tokens (benchlm.ai, AA). Verified.
- **Modalities:** Text in, text out per AA; reasoning yes (chain-of-thought); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $0.14/M input, $0.55/M output (AA; cache discount 75%, cost per task $0.07).
- **Architecture:** Open-weights MoE, 299B total / 21B active, Apache 2.0 license.

### Raw benchmarks found

All benchmarks below come from Artificial Analysis only; no agentic benchmarks found on benchlm.ai page.

Reasoning / knowledge:

- GPQA Diamond: **89.7%** (Artificial Analysis)
- HLE: **33.5%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **25.3%** (#30 of 120 open-weights; median 19)
- AA-LCR (long-context reasoning): **79.0%** (Artificial Analysis)
- CritPt: **4.9%** (Artificial Analysis)
- AA-Omniscience Index **-18.5%**; Accuracy **32.0%**; Hallucination rate **74.1%** (AA)

Coding:

- AA-SciCode: **48.6%** (Artificial Analysis)
- AA Coding Index: **58.8%** (Artificial Analysis)

Agentic / tool use:

- GDPval-AA: **1136 Elo** (Artificial Analysis); normalized **28.3%**
- AA Agentic Index: **25.6%** (Artificial Analysis)

Multimodal & grounded:

- Design Arena Website: **1183** (OpenRouter)

Long context:

- AA-LCR: **79.0%** (Artificial Analysis); declared 256K context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is thin (benchlm 14 of 639 slots).

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 40/100.** GDPval-AA (1136 Elo), AA Agentic Index (25.6%); capped by extremely thin coverage — only 2 agentic benchmarks found.
- **Reasoning: 62/100.** GPQA Diamond 89.7%, AA-LCR (79.0%), AA Intelligence Index (25.3%); capped by CritPt (4.9%), HLE (33.5%), AA-Omniscience accuracy (32.0%). Moderate reasoning.
- **Context window: 75/100.** Verified 256K tokens (benchlm.ai + AA); AA-LCR 79.0%; capped because context below 1M frontier and no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 45/100.** Text in, text out per AA; Design Arena Website 1183; capped by text-only output assumption.
- **Coding: 55/100.** AA-SciCode (48.6%), AA Coding Index (58.8%); capped by extremely thin coding coverage — only 2 coding benchmarks found.
- **Cost efficiency: 90/100.** $0.14/$0.55 competitive pricing with 75% cache discount; not counted toward Overall.
- **Overall Score: 55.4/100.** Half-up mean of (40 + 62 + 75 + 45 + 55) / 5 = 55.2 → 55. Best-fit recommendation: moderate reasoning and coding at 256K context with open weights; verify on agentic and multimodal tasks given thin coverage there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai Hy3 model card + Artificial Analysis + OpenRouter independent analysis); scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is thin (14 of 639 slots) — treat scores as provisional.
- Future sources: add a new file next to this one, using the same headings.
