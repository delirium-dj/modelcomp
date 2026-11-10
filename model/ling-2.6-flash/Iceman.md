# Ling 2.6 Flash — findings by Iceman

- Source: inclusionAI/Ling-2.6-flash
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-2.6-flash
- **Short description:** inclusionAI’s Ling-2.6-flash is an MIT-licensed 107B/7.4B-active non-reasoning instruct MoE (128K native, 256K via YaRN) optimized for fast agentic execution and token efficiency.
- **Provider / access:** Open weights on Hugging Face (`inclusionAI/Ling-2.6-flash`, MIT license) and hosted providers. Local metadata lists `inclusionai/ling-2.6-flash`, pricing ~$0.10/$0.30 per 1M, and notes deprecation in favor of newer Ling models.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `Ling-2.6-flash`, `inclusionAI/Ling-2.6-flash`.
- **Context window:** 131,072 tokens native (262,144 via YaRN).
- **Modalities:** Text input/output.
- **Pricing (as of 2026-11-10):** ~$0.10/$0.30 per 1M in/out on hosted routes per local metadata; open weights free to self-host (MIT).
- **Architecture:** Hybrid linear attention MoE (1:7 MLA + Lightning Linear), 104B/107B-class total with ~7.4B active parameters (HF card).

### Raw benchmarks found

> Verified figures below are from Hugging Face model card evaluation results / eval files for `inclusionAI/Ling-2.6-flash`.

Agent / tool use / coding:

- SWE-bench Verified: **61.2%** (resolved; eval result)
- BFCL-V4, TAU2-bench, Claw-Eval, PinchBench: strong/competitive positioning claimed in card (some comparative figures sourced from leaderboards; not all independently extracted here).

Reasoning / knowledge:

- AIME 2026: **73.85%** (MathArena eval result)
- HMMT Feb 2026: **49.29%** (MathArena eval result)
- AA Intelligence Index: **10** (per local metadata; not directly verified from card in this pass)

Long context:

- 128K native / 256K via YaRN context supported. MRCR **75.9%** at 256K cited in local metadata/card context.

Multimodal:

- Text-only model.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Interpreted cautiously due to high hallucination risk noted in metadata.

- **Tool use: 78/100.** Good coding-agent/tool-use positioning with verified SWE-bench Verified 61.2% and claimed strong BFCL/TAU2/Claw-Eval/PinchBench results.
- **Reasoning: 72/100.** Solid contest-math results for an instruct/non-reasoning efficiency model (AIME 2026 73.85%, HMMT Feb 2026 49.29), but metadata notes high hallucination rate and low AA Intelligence Index.
- **Context window: 84/100.** 128K native and 256K via YaRN with strong reported MRCR (75.9%).
- **Multimodal: 40/100.** Text-only model; no multimodal input capability.
- **Coding: 78/100.** Strong verified software-engineering signal (SWE-bench Verified 61.2%) for 7.4B active parameters.
- **Cost efficiency: 90/100.** MIT open weights, low active parameter count, fast inference, and low hosted pricing.
- **Overall Score: 70/100.** Mean of the five non-cost dims (78, 72, 84, 40, 78) = 70.4 → 70. Best fit for efficient text-only agentic/coding workflows, but caution advised for unattended use due to reported hallucination risk and deprecation.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card and eval results; scores are normalized 1–100 interpretations from verified/available figures, not official vendor scores.
- Reference URLs:
  - [Ling-2.6-flash model card (Hugging Face)](https://huggingface.co/inclusionAI/Ling-2.6-flash)
  - Local repository metadata consulted: `model/ling-2.6-flash/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
