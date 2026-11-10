# North Mini Code — findings by Iceman

- Source: CohereLabs/North-Mini-Code-1.0
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code 1.0
- **Short description:** CohereLabs’ North Mini Code is an open-weight 30B/3B-active MoE coding model (Apache 2.0, 256K context) optimized for code generation and agentic software engineering tasks.
- **Provider / access:** Open weights on Hugging Face (`CohereLabs/North-Mini-Code-1.0`, Apache 2.0) and free/hosted routes. Local metadata lists `CohereLabs/North-Mini-Code-1.0`, free pricing ($0/$0), and aliases including `north-mini-code`.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `North-Mini-Code-1.0`, `CohereLabs/North-Mini-Code-1.0`, `north-mini-code`.
- **Context window:** 256,000 tokens total; 64,000 max output.
- **Modalities:** Text input/output.
- **Pricing (as of 2026-11-10):** Free ($0/$0) on hosted free routes (OpenRouter/Cohere API per metadata) and self-host $0 (Apache 2.0).
- **Architecture:** Sparse MoE transformer, 30B total / 3B active parameters, 128 experts (8 active), 256K context, interleaved sliding/global attention (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card/eval results for `CohereLabs/North-Mini-Code-1.0`.

Agent / tool use:

- Terminal-Bench 2.0: **36%**
- Tool-use/agentic coding capabilities supported (chat template/tool calling); broader agentic benchmark coverage limited.
- tau2, AutomationBench: weak per local metadata (37.4%, 1.5%) — not independently extracted from HF card text in this pass.

Reasoning / knowledge:

- No GPQA/HLE/AIME benchmarks reported in reviewed card (metadata notes weak reasoning ceiling; HLE 11.1% cited there).

Coding:

- SWE-bench Verified: **67.6%** (eval results/card figure; local metadata notes 61.0% pass@1 in summary context)
- SWE-Bench Pro: **40.2%**
- Terminal-Bench 2.0: **36%**

Long context:

- 256K context supported. No standalone MRCR/RULER/AA-LCR numeric benchmark reported.

Multimodal:

- Text-only model.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Coding-focused model.

- **Tool use: 72/100.** Moderate coding-agent/terminal performance (Terminal-Bench 2.0 36%, SWE-bench Verified 67.6%) but weak broader agentic/planning signals per metadata.
- **Reasoning: 60/100.** Limited general-reasoning benchmark evidence; metadata indicates weak reasoning/HLE ceiling.
- **Context window: 84/100.** 256K context and 64K max output support for long coding tasks.
- **Multimodal: 40/100.** Text-only model; no multimodal input capability.
- **Coding: 82/100.** Strong software engineering performance for 3B active (SWE-bench Verified 67.6%, SWE-Bench Pro 40.2%, Terminal-Bench 2.0 36%).
- **Cost efficiency: 98/100.** Apache 2.0 open weights, 3B active parameters, and fully free hosted/self-host options.
- **Overall Score: 68/100.** Mean of the five non-cost dims (72, 60, 84, 40, 82) = 67.6 → 68. Best fit for free/open-weight text-only coding tasks rather than broad reasoning or complex agent planning.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card/eval results; scores are normalized 1–100 interpretations from verified figures, not official vendor scores.
- Reference URLs:
  - [North-Mini-Code-1.0 model card (Hugging Face)](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)
  - Local repository metadata consulted: `model/north_mini_code/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
