# Ling 2.6 Flash — findings by Nemotron 3.5 Super VL 120B A12B

- Source: inclusionAI/Ling-2.6-flash Hugging Face model card + arxiv 2606.15079 (Ling and Ring 2.6 Technical Report), benchlm.ai/models/ling-2-6-flash (aggregator), benchlm.ai comparisons (vs LongCat-2.0, Qwen3.7 Flash, MiMo-V2-Pro, LLaDA2.2-flash, Soofi S 30B-A3B, Ling 3.0 Flash, Ling 3.0 Flash Fin), openrouter.ai/inclusionai/ling-2.6-flash, artificialanalysis.ai/providers/inclusionai, requesty.ai/models/novita/inclusionai-ling-2.6-flash, aimadetools.com blog
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 Flash (InclusionAI)
- **Short description:** Open-weight hybrid-reasoning MoE instruct model, 104B total / 7.4B active parameters, 262K context; MIT license; released 2026-07-23. Part of the Ling 2.6 family (base Ling-2.6-1T, Ling-2.6-flash). Designed for token efficiency and agent performance — hybrid linear architecture, optimized for fewer output tokens per task, strong on agent benchmarks (BFCL-V4, TAU2-bench, SWE-bench Verified, Claw-Eval, PinchBench).
- **Provider / access:** Hugging Face (inclusionAI/Ling-2.6-flash), OpenRouter, Novita AI ($0.10/M input, $0.30/M output per requesty.ai).
- **Release / knowledge:** Released 2026-07-23; knowledge cutoff not stated.
- **IDs:** `inclusionAI/Ling-2.6-flash` (HF), `inclusionai/ling-2.6-flash` (OpenRouter/Novita).
- **Context window:** 262,000 tokens (benchlm.ai; HF; opencode.ai). Verified.
- **Modalities:** Text in, text out (text-only — NOT multimodal); reasoning yes (hybrid reasoning MoE); tool calls yes (agent-optimized); structured output/JSON mode not explicitly advertised.
- **Pricing (as of 2026-10-16):** $0.10/M input, $0.30/M output (Novita via requesty.ai); MIT open weights (self-host effectively $0).
- **Architecture:** 104B total / 7.4B active per token, hybrid linear architecture (Mamba/Transformer mix), sparse MoE FFN with 128 experts.

### Raw benchmarks found

benchlm.ai aggregator (Artificial Analysis + inclusionAI model card), HF README, arxiv technical report.

Agent / tool use:

- τ²-bench: **86%** (Artificial Analysis Ling 2.6 Flash summary screenshot via benchlm)
- GDPval-AA: **0.0%** / **550 Elo** (Artificial Analysis)

Reasoning / knowledge:

- GPQA: **59%** (Artificial Analysis); AA-GPQA Diamond: **59.3%** (benchlm)
- HLE: **6.3%** (Artificial Analysis)
- MMLU: not isolated
- Artificial Analysis Intelligence Index: **14.1%** (benchlm)

Coding:

- SciCode: **27%** (Artificial Analysis)
- AA Coding Index: **25.3%** (benchlm)

Multimodal & grounded: Text-only — NOT multimodal.

Long context: Declared 262K; no public long-context retrieval score isolated.

Instruction following:

- IFBench: **57%** (Artificial Analysis); AA-IFBench: **57.4%** (benchlm)

### Conflicting results noted

- benchlm.ai overall 32.43 (#172/954) is conservative (16 of 639 benchmarks covered).
- aibenchy.com comparison vs "Elephant Alpha" reveals Elephant Alpha was a stealth model revealed as Ling-2.6-flash — identity aliasing noted; not used for scoring.
- No Terminal-Bench/SWE-bench/MCP-Atlas scores isolated for Ling 2.6 Flash in fetched sources.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 45/100.** τ²-bench 86% strong; but no public Terminal-Bench/SWE-bench/MCP-Atlas scores isolated; floor-leaning moderate estimate.
- **Reasoning: 50/100.** GPQA 59, MMLU not isolated, HLE 6.3% very weak, AA Intelligence Index 14.1 below median — spiky; knowledge reasoning weak.
- **Context window: 70/100.** Declared 262K; no public retrieval curve beyond.
- **Multimodal: 50/100.** Text in / text out only — NOT multimodal.
- **Coding: 50/100.** SciCode 27, AA Coding Index 25.3; agent-optimized but few public coding benchmarks isolated.
- **Cost efficiency: 90/100.** MIT open weights, cheap hosted pricing ($0.10/$0.30), token-efficient design; not counted toward Overall.
- **Overall Score: 53/100.** Half-up mean of (45 + 50 + 70 + 50 + 50) / 5 = 53.0 → 53, but low confidence due to thin public benchmark coverage (16 of 639 on benchlm); treat as directional.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (inclusionAI HF model card + arxiv 2606.15079 technical report + benchlm.ai + Artificial Analysis + Novita/requesty pricing); scores are normalized 1–100 interpretations, not official vendor scores. Public benchmark coverage is thin — treat scores as directional.
- Future sources: add a new file next to this one, using the same headings.
