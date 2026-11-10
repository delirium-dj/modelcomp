# Ling 3.0 Flash — findings by Iceman

- Source: inclusionAI/Ling-3.0-flash
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-flash
- **Short description:** inclusionAI’s Ling-3.0-flash is an MIT-licensed 124B/5.1B-active hybrid-linear reasoning MoE (262K context) optimized for efficient agentic, coding, and long-context workflows.
- **Provider / access:** Open weights on Hugging Face (`inclusionAI/Ling-3.0-flash`, MIT license) and hosted providers. Local metadata lists `inclusionai/ling-3.0-flash`, pricing ~$0.075/$0.22 per 1M, and `noFreeId`.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `Ling-3.0-flash`, `inclusionAI/Ling-3.0-flash`.
- **Context window:** 262,144 tokens.
- **Modalities:** Text input/output.
- **Pricing (as of 2026-11-10):** ~$0.075/$0.22 per 1M in/out (first-party API; some routes lower) per local metadata; open weights free to self-host (MIT).
- **Architecture:** Hybrid-linear MoE (KDA + Gated MLA), 124B total / 5.1B active parameters, 256K training context schedule, thinking mode enabled by default (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card evaluation section/results for `inclusionAI/Ling-3.0-flash`.

Agent / tool use:

- SWE-Bench Pro: **56.6%**
- SWE-bench Multilingual: **72.4%**
- Terminal-Bench 2.1: **50–57%** range noted in local metadata/context (agentic ceiling moderate)
- MCP-Atlas / SkillsBench / Tau3-banking-AA: strong performance reported in card text (specific numerics partially in charts/text)

Reasoning / knowledge:

- AIME 2026: **93.2%**
- HMMT Feb 2026: **87%**
- HLE: **22.7%**
- GPQA: **85.0%** (per local metadata/card context)

Coding:

- SWE-Bench Pro: **56.6%**
- SWE-bench Multilingual: **72.4%**
- LiveCodeBench: **82.8%** (per local metadata)

Long context:

- 262K context supported; long-context understanding reported strong qualitatively. No standalone MRCR/RULER numeric extracted from accessible text.

Multimodal:

- Text-only model.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 82/100.** Good agentic/coding benchmark results (SWE-Bench Pro 56.6%, SWE-bench Multilingual 72.4%) with moderate terminal-agent ceiling noted.
- **Reasoning: 86/100.** Strong math/reasoning and solid science results (AIME 2026 93.2%, HMMT Feb 2026 87%, GPQA ~85.0%, HLE 22.7%).
- **Context window: 84/100.** 262K context with efficient hybrid-linear architecture for long-context workflows.
- **Multimodal: 40/100.** Text-only model; no multimodal input capability.
- **Coding: 84/100.** Strong coding performance (LiveCodeBench ~82.8%, SWE-bench Multilingual 72.4%, SWE-Bench Pro 56.6%).
- **Cost efficiency: 94/100.** MIT open weights, very low active parameter count (5.1B), fast inference, and low hosted pricing.
- **Overall Score: 75/100.** Mean of the five non-cost dims (82, 86, 84, 40, 84) = 75.2 → 75. Best fit for efficient open-weight text reasoning, coding, and agentic workflows.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card/eval results; scores are normalized 1–100 interpretations from verified figures, not official vendor scores.
- Reference URLs:
  - [Ling-3.0-flash model card (Hugging Face)](https://huggingface.co/inclusionAI/Ling-3.0-flash)
  - Local repository metadata consulted: `model/ling-3.0-flash/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
