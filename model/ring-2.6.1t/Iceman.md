# Ring 2.6 1T — findings by Iceman

- Source: inclusionAI/Ring-2.6-1T
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ring-2.6-1T
- **Short description:** inclusionAI’s Ring-2.6-1T is an open-weights reasoning MoE (1T total / 63B active, MIT) for maths and research with adjustable high/xhigh thinking effort.
- **Provider / access:** Open weights on Hugging Face (`inclusionAI/Ring-2.6-1T`, MIT license). Local metadata lists `inclusionai/ring-2.6-1t`, notes limited hosted availability, and `noFreeId`.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `Ring-2.6-1T`, `inclusionAI/Ring-2.6-1T`.
- **Context window:** 131,072 tokens native (256,144 with YaRN per metadata/card).
- **Modalities:** Text input/output.
- **Pricing (as of 2026-11-10):** Open weights free to self-host (MIT), but heavy serving requirements (~32 GPUs per metadata). Hosted pricing limited/uncertain; AA estimate ~$0.30/$2.50 per 1M in metadata.
- **Architecture:** Sparse MoE reasoning model, 1T total / 63B active parameters, hybrid/long-thinking emphasis (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card for `inclusionAI/Ring-2.6-1T` (high/xhigh effort as reported).

Agent / tool use:

- No Terminal-Bench published per local metadata/card context.
- Agentic/tool-use benchmark coverage appears limited in reviewed card.

Reasoning / knowledge:

- AIME 2026: **95.8%** (xhigh)
- HMMT Feb 2026: **92.7%** (xhigh)
- GPQA Diamond: **88.3%** (xhigh)
- ARC-AGI-2: **66.2%** (xhigh)
- HLE: **35.8%** (xhigh, no tools context as reported)

Coding:

- LiveCodeBench Pro / coding contest-style results reported in card; standardized SWE-bench/Terminal-Bench coverage limited.
- No verified SWE-bench Verified / Terminal-Bench 2.1 score found in reviewed card.

Long context:

- 128K native / 256K with YaRN. No standalone numeric long-context retrieval benchmark (MRCR/RULER/AA-LCR) clearly extracted from reviewed card.

Multimodal:

- Text-only model.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Evidence is strongest on math/reasoning.

- **Tool use: 62/100.** Limited published agentic/tool-use benchmark evidence; no Terminal-Bench result published.
- **Reasoning: 90/100.** Excellent reasoning/math and strong science/abstract reasoning (AIME 2026 95.8%, HMMT Feb 2026 92.7%, GPQA Diamond 88.3%, ARC-AGI-2 66.2%, HLE 35.8%).
- **Context window: 80/100.** 128K native/256K YaRN support, but limited standalone long-context benchmark evidence.
- **Multimodal: 40/100.** Text-only model; no multimodal input capability.
- **Coding: 74/100.** Reasoning-oriented model with some coding evidence implied, but limited standardized coding-agent benchmark coverage.
- **Cost efficiency: 60/100.** MIT open weights, but extremely heavy self-hosting requirements and limited hosted availability reduce practical cost efficiency.
- **Overall Score: 69/100.** Mean of the five non-cost dims (62, 90, 80, 40, 74) = 69.2 → 69. Best fit for open-weight math/research reasoning tasks rather than broad tool-using coding agents.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Ring-2.6-1T model card (Hugging Face)](https://huggingface.co/inclusionAI/Ring-2.6-1T)
  - Local repository metadata consulted: `model/ring-2.6.1t/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
