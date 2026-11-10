# GLM 4.7 Flash — findings by Iceman

- Source: Z.ai/GLM-4.7-Flash
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-4.7-Flash
- **Short description:** Z.ai’s GLM-4.7-Flash is an MIT-licensed 30B/3B-active MoE model (1M context class in metadata; 128K+ serving contexts common) optimized for efficient agentic, reasoning, and coding tasks.
- **Provider / access:** Open weights on Hugging Face (`zai-org/GLM-4.7-Flash`, MIT license) and hosted providers. Local metadata lists `opencode/glm-4.7-flash` and free availability on Zen.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `GLM-4.7-Flash`, `zai-org/GLM-4.7-Flash`.
- **Context window:** 1M total (local metadata); card emphasizes long-context/efficient deployment.
- **Modalities:** Text input/output.
- **Pricing (as of 2026-11-10):** Free on Zen per local metadata; open weights free to self-host (MIT). Hosted pricing varies by provider.
- **Architecture:** Sparse MoE (glm4_moe_lite), 30B total / ~3B active parameters, reasoning/tool-calling support (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card benchmark table/eval results for `zai-org/GLM-4.7-Flash`.

Agent / tool use:

- SWE-bench Verified: **59.2%**
- τ²-Bench: **79.5%**
- BrowseComp: **42.8%**

Reasoning / knowledge:

- AIME 25: **91.6%**
- GPQA: **75.2%**
- HLE: **14.4%**

Coding:

- LCB v6 (LiveCodeBench v6): **64.0%**
- SWE-bench Verified: **59.2%**

Long context:

- Large context window supported (1M per metadata). No standalone MRCR/RULER/AA-LCR numeric benchmark reported in reviewed table.

Multimodal:

- Text-only model.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 78/100.** Good agentic/tool-use signals (τ²-Bench 79.5%, BrowseComp 42.8%) with moderate coding-agent performance (SWE-bench Verified 59.2%).
- **Reasoning: 80/100.** Strong math and solid science reasoning (AIME 25 91.6%, GPQA 75.2%) with low HLE (14.4%).
- **Context window: 92/100.** Very large context support (1M per metadata) for long workflows.
- **Multimodal: 40/100.** Text-only model; no multimodal input capability.
- **Coding: 76/100.** Competitive coding performance for a lightweight MoE (LiveCodeBench v6 64.0%, SWE-bench Verified 59.2%).
- **Cost efficiency: 96/100.** MIT open weights, 3B active parameters, and free Zen availability make it highly efficient.
- **Overall Score: 73/100.** Mean of the five non-cost dims (78, 80, 92, 40, 76) = 73.2 → 73. Best fit for efficient, long-context text-only agentic/reasoning and coding tasks.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [GLM-4.7-Flash model card (Hugging Face)](https://huggingface.co/zai-org/GLM-4.7-Flash)
  - Local repository metadata consulted: `model/glm-4.7-flash/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
