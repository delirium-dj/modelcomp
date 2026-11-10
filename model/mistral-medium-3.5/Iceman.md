# Mistral Medium 3.5 — findings by Iceman

- Source: Mistral AI/Mistral Medium 3.5
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5 128B
- **Short description:** Mistral Medium 3.5 is a dense 128B open-weight merged model (text+image input) with 256K context, configurable reasoning effort, and strong instruction-following, coding, and agentic capabilities.
- **Provider / access:** Open weights on Hugging Face (`mistralai/Mistral-Medium-3.5-128B`, Modified MIT license) and Mistral API. Local metadata lists `mistralai/mistral-medium-3-5` and `noFreeId` (not on OpenCode Zen).
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `Mistral-Medium-3.5-128B`, `mistralai/Mistral-Medium-3.5-128B`, `mistral-medium-3.5`.
- **Context window:** 256,000 tokens (HF card/local metadata).
- **Modalities:** Text and image input; text output.
- **Pricing (as of 2026-11-10):** Mistral API $1.50 / 1M input, $7.50 / 1M output, $0.15 cached input; batch $0.75/$3.75; self-host under Modified MIT (local metadata). Hosted pricing varies by provider.
- **Architecture:** Dense 128B-parameter merged model with vision encoder trained from scratch (variable image sizes/aspect ratios), 256K context, configurable reasoning effort, native function calling/JSON output (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card for `mistralai/Mistral-Medium-3.5-128B` unless noted. Some benchmark charts/images are present on the card; text-extractable numerics used here are explicitly stated in the card.

Agent / tool use:

- τ³-Telecom (agentic benchmark): **91.4%** (HF card text)
- Native function calling / agentic capabilities emphasized; replaces Devstral in Vibe CLI context.
- Terminal-Bench 2.1: **no verified public score found** in extracted text
- GDPval-AA / Toolathon / MCP-Atlas / Claw-Eval: **no verified public score found** in extracted text

Reasoning / knowledge:

- Strong results reported on instruction-following and reasoning (including math) benchmarks vs competing models (charted); specific GPQA/AIME/MMLU numerics not clearly extracted as plain text in this pass.
- GPQA Diamond: **no verified public score found** (text-extracted)
- HLE: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**

Coding:

- SWE-bench Verified: **77.6%** (HF card text; local metadata notes Mistral-reported figure; Vals reported 66.4% separately in metadata but not verified from this card)
- Replaces previous Mistral coding models (e.g. Devstral) across agentic coding benchmarks per card.
- LiveCodeBench / SWE-Pro / SciCode: **no verified public score found** in extracted text

Long context:

- 256K context window documented. No standalone MRCR/RULER/AA-LCR numeric score extracted.

Multimodal:

- Multimodal text+image input supported; no multimodal benchmark numerics extracted from text.

### Normalized scores (1–100)

> Derived from limited verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Conservative where only partial benchmark numerics were text-extractable.

- **Tool use: 86/100.** Very strong agentic/telecom tool-use signal (τ³-Telecom 91.4%) and native function calling/JSON output for agent workflows.
- **Reasoning: 82/100.** Positioned as strong on instruction-following/reasoning tasks with configurable reasoning effort; canonical reasoning benchmark numerics were not fully extracted in this pass.
- **Context window: 86/100.** 256K context is strong for long documents and agentic sessions.
- **Multimodal: 80/100.** Text+image input supported with vision encoder improvements, but multimodal benchmark evidence was not extracted.
- **Coding: 86/100.** Strong coding/agentic coding signal (SWE-bench Verified 77.6% reported by Mistral) and replacement of prior coding models in Vibe CLI.
- **Cost efficiency: 80/100.** $1.50/$7.50 API pricing is mid/high; open weights (Modified MIT) enable self-hosting but 128B dense inference is resource-intensive.
- **Overall Score: 84/100.** Mean of the five non-cost dims (86, 82, 86, 80, 86) = 84.0 → 84. Best fit for instruction-following, agentic workflows, and coding with long context and multimodal input, with scoring limited by partially extractable benchmark numerics in this pass.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are conservative normalized 1–100 interpretations from text-extractable verified/reported figures, not official vendor scores.
- Reference URLs:
  - [Mistral-Medium-3.5-128B model card (Hugging Face)](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)
  - Local repository metadata consulted: `model/mistral-medium-3.5/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
