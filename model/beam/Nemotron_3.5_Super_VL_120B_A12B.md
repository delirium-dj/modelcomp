# Beam — findings by Nemotron 3.5 Super VL 120B A12B

- Source: reflection.ai/beam-model-card (official Reflection model card), beammodel.com (independent community specs site, not Reflection-operated), research.nvidia.com/labs/nemotron (Nemotron family context), artificialanalysis.ai/models/reflection-beam (independent Intelligence Index), benchlm.ai/models/reflection-beam (benchmarks), gate.com/news (Reflection AI unveil press)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam (Reflection AI Beam 1.0)
- **Short description:** Reflection AI's first open-weight model — a 501B-total / 23B-active sparse Mixture-of-Experts built for coding, reasoning, and agentic workloads; 1M-token context; Apache 2.0 open weights; announced 2026-10-05, weights expected late October 2026 (early-access waitlist only at research date).
- **Provider / access:** Reflection AI early-access beta API (waitlist); weights not yet on Hugging Face/OpenRouter/Ollama at research date; beammodel.com is an unofficial community site, not affiliated with Reflection AI.
- **Release / knowledge:** Announced 2026-10-05; pretrained on 23.8T tokens; knowledge cutoff not stated; technical report + full model card pending at research date.
- **IDs:** `reflection-beam` (benchlm/Artificial Analysis), `beam-501b` / `beam` (community). No confirmed HF/OpenRouter ID yet.
- **Context window:** 1M tokens (reflection.ai model card; Artificial Analysis; beammodel.com). Verified across sources.
- **Modalities:** Text in, text out (text-only — NOT multimodal); reasoning yes (configurable reasoning effort); tool calls yes; structured output/JSON not explicitly advertised.
- **Pricing (as of 2026-10-16):** Not publicly disclosed; weights expected under Apache 2.0 (self-host effectively $0 once released); hosted pricing TBD.
- **Architecture:** 501.3B total / 23.4B active parameters, sparse MoE (52 layers: 3 dense + 49 MoE, 256 experts), Gated GQA + Sliding Window Attention, BF16/FP8/NVFP4 numerics, 152k vocabulary.

### Raw benchmarks found

Most figures below are vendor-reported by Reflection AI in its launch table (beammodel.com, reflection.ai, benchlm.ai). Artificial Analysis ran independent Intelligence Index testing. No independent third-party verification of launch-table numbers exists yet — weights were unreleased at research date.

Agent / tool use:

- Terminal-Bench 2.1: **80.1%** (Reflection launch table; benchlm.ai)
- MCP Atlas: **78.7%** (Reflection launch table)
- BrowseComp: **77.4%** (Reflection launch table)
- DeepSearchQA: **80.1%** (Reflection launch table)
- AutomationBench-AA: **48.5%** (Artificial Analysis independent; level with Qwen3.8 27B, +11pp vs K2 Horizon)
- Terminal-Bench 4.0: **3.0%** (Artificial Analysis independent — weakest Intelligence Index component)
- AA-Briefcase v1.1: **976 Elo** (Artificial Analysis independent)
- GDPval-AA v2.1: included in Intelligence Index (score not isolated)

Reasoning / knowledge:

- GPQA Diamond: **90.5%** (Reflection launch table; below GLM 5.2 91.2, Kimi K3 93.5 in head-to-head charts)
- HLE w/o tools: **36.2%** (Reflection launch table / benchlm.ai)
- AIME 2026: **97.8%** (Reflection launch table)
- LongBench v2: **65.5%** (benchlm.ai)
- CritPt: **13.1%** (Artificial Analysis independent; more than doubles K2 Horizon 4.6%)
- AA-Omniscience: included in Intelligence Index (score not isolated; hallucination rate 47%)
- Artificial Analysis Intelligence Index: **30** (#19/120 overall, #2 among US open weights, #10 all open weights) — independent, not vendor-reported

Coding:

- SWE-Bench Verified: **80.9%** (Reflection launch table; self-reported)
- SWE-Bench Pro: **65.5%** (benchlm.ai / Reflection)
- SWE-Bench Multilingual: **78%** (benchlm.ai)
- DeepSWE: **44.4%** (benchlm.ai)
- SciCode: **49.7%** (benchlm.ai)
- SWE-Atlas Codebase QnA: **34.6%** (benchlm.ai)
- Artificial Analysis Coding Agent Index: **28** (Mirror harness; 15 pts behind Claude Code+Qwen3.8 Max)

Long context:

- AA-LCR v1.1: **79.3%** (beammodel.com benchmark highlights; benchlm lists "Coming soon")
- Declared 1M context; multi-stage midtraining to extend effective context; no public needle-recall curve at full 1M.

### Conflicting results noted

- beammodel.com is an unofficial community site ("not affiliated with, endorsed by, or operated by Reflection AI") — its spec/benchmark table mirrors Reflection's launch claims but is not an official source.
- Artificial Analysis independent Intelligence Index (30) is lower-sounding than raw launch percentages suggest because it is a normalized composite across 10 evaluations including weak Terminal-Bench 4.0 (3.0%) and high hallucination (47%).
- Reflection's own head-to-head charts show Beam trailing GLM 5.2 and Kimi K3 on GPQA Diamond and Terminal-Bench despite launch claims of "matching or approaching" them.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 75/100.** Strong agentic profile — Terminal-Bench 2.1 (80.1), MCP Atlas (78.7), BrowseComp (77.4), DeepSearchQA (80.1), AutomationBench-AA (48.5); capped by weak Terminal-Bench 4.0 (3.0) and unvendor-verified sourcing.
- **Reasoning: 72/100.** Spiky — elite GPQA Diamond (90.5) and AIME 2026 (97.8), but weak HLE (36.2), CritPt (13.1), AA-Omniscience hallucination (47%); Intelligence Index 30 is above-average but not frontier.
- **Context window: 90/100.** Declared and verified 1M tokens with AA-LCR 79.3; capped by no public retrieval curve at the full 1M window.
- **Multimodal: 50/100.** Text in / text out only — NOT multimodal.
- **Coding: 70/100.** SWE-Bench Verified 80.9 (vendor-reported, unverified), SWE Multilingual 78, SWE-bench Pro 65.5; capped by DeepSWE 44.4, SWE-Atlas 34.6, SciCode 49.7, and Coding Agent Index 28 (well behind leaders).
- **Cost efficiency: 85/100.** Apache 2.0 open weights (self-host ~$0), 23B-active / 501B-total MoE implies ~3–4× less inference compute than GLM 5.2 per Reflection; not counted toward Overall.
- **Overall Score: 71/100.** Half-up mean of (75 + 72 + 90 + 50 + 70) / 5 = 71.4 → 71. Best-fit recommendation: promising open-weight agent/coder pending independent verification of launch-table numbers; treat SWE-Bench Verified 80.9 as vendor-claimed until weights ship.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official Reflection model card + beammodel.com community specs + Artificial Analysis independent Intelligence Index + benchlm.ai + press coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
