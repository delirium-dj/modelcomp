# Step 5 Preview — findings by Flint

- Source: StepFun / Step 5 Preview
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview (StepFun; Step family — flagship preview).
- **Short description:** StepFun's flagship model for agentic work; sparse MoE with 600B total / 27B active parameters; frontier-level performance across software engineering and professional knowledge work, with particular strength in finance; up to 1M context; text, image, and video input; text output; reasoning + tool use.
- **Provider / access:** Open weights (Hugging Face `stepfun-ai/Step-5-Preview`, ModelScope); OpenAI-compatible API via vLLM / SGLang (platform.stepfun.ai); offline generation via Transformers.
- **Release / knowledge:** Released 2026-09-18 (Artificial Analysis, Epoch AI; Hugging Face card); knowledge cutoff not stated in verified sources.
- **IDs:** `step-5-preview` (Hugging Face / repo slug); `step5` model name in OpenAI-compatible API requests.
- **Context window:** 1,000,000 tokens (Artificial Analysis, Hugging Face); maximum output up to 1M tokens (Hugging Face).
- **Modalities:** Text, image, and video input; text output; reasoning yes (High setting); tool use / long-horizon agentic execution.
- **Pricing (as of 2026-10-28):** $1.00 input / $2.70 output per 1M tokens (Artificial Analysis, Epoch AI); blended cache-hit/input/output (7:2:1) approx $0.54 per 1M tokens; open weights under StepFun Model License 1.0 (Apache-2.0-style, additional attribution/commercial conditions).
- **Architecture:** Open-weight sparse Mixture-of-Experts; 600B total / 27B active parameters; training compute not disclosed.

### Raw benchmarks found

- Coding / agentic:
  - DeepSWE v1.1: **67.7%** (SWE-agent harness; Hugging Face eval results).
  - Terminal-Bench 4: **33.3** (Hugging Face eval results).
  - Ale CLI Pass Rate: **29.5** (Hugging Face eval results).
  - Text Arena (Coding): **1570** Elo (Epoch AI; best score **1820**).
- Reasoning / knowledge:
  - Artificial Analysis Intelligence Index: **29** - ranked **#5** of 16; above average among comparable open-weight models (median **23**).
  - ProofBench: **42%** (Epoch AI; best **100%**).
  - CritPt v1: **21%** (Epoch AI; best **32%**).
  - SciCode: **59%** (Epoch AI; best **67%**).
- Professional knowledge work / finance: GDPval-AA v2.1 scores referenced (Artificial Analysis, Sept 2026); DeepSWE v1.1 evaluations use SWE-agent harness.

### Cross-source comparison

- Context: Artificial Analysis and Hugging Face agree on 1M-token context; Hugging Face additionally reports up to 1M maximum output.
- Modality: Hugging Face describes text, image, and video input; Artificial Analysis reports text and image input, text output - expansion to video noted from official card.
- Reasoning: Artificial Analysis Intelligence Index **29** (open-weight comparable median **23**) vs Epoch AI capability numbers (ProofBench **42%**, SciCode **59%**, CritPt **21%**) -> open-weight mid-tier reasoning placement.

### Normalized scores (1-100)

- **Tool use: 65/100.** DeepSWE **67.7%**, Terminal-Bench 4 **33.3**, Ale CLI **29.5**; long-horizon agentic execution with tool use/verification/revision; mid band.
- **Reasoning: 55/100.** Artificial Analysis Intelligence Index **29** (above average among comparable open-weight models, median **23**); ProofBench **42%**, CritPt **21%**, SciCode **59%** -> open-weight mid tier; capped below frontier proprietary reasoning tiers.
- **Context window: 90/100.** 1M tokens (Artificial Analysis, Hugging Face); up to 1M max output (Hugging Face) -> top-tier context band.
- **Multimodal: 70/100.** Text, image, and video input (Hugging Face), text output; multimodal use in finance/knowledge work; no audio -> mid-high band.
- **Coding: 65/100.** DeepSWE **67.7%**, Text Arena (Coding) **1570** Elo (Epoch AI, best **1820**); mid band.

- **Cost efficiency: 60/100.** Open weights, $1.00 in / $2.70 out per 1M (Artificial Analysis, Epoch AI); blended approx $0.54/M; license carries commercial-restriction conditions -> open but restricted.
- **Overall Score: 69/100.** Mean of the five quality dims (Tool 65 + Reasoning 55 + Context 90 + Multimodal 70 + Coding 65) / 5 = 69; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-28
- Method: public web research prioritizing official model card/docs (StepFun / Hugging Face) plus independent benchmarks/reviews (Artificial Analysis, Epoch AI) - official-first with independent benchmark comparison.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
