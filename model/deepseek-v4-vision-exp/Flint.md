# DeepSeek-V4-Flash-Vision-Exp — findings by Flint

- Source: DeepSeek / DeepSeek-V4-Flash-Vision-Exp
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Flash-Vision-Exp (DeepSeek; DeepSeek-V4 family — experimental multimodal tier built on V4-Flash).
- **Short description:** DeepSeek's first experimental multimodal model in the V4 family; adds visual modules and continued training onto DeepSeek-V4-Flash for visual understanding; substantially improves multimodal agent capabilities while keeping comparable text-only agent performance.
- **Provider / access:** Open weights (Hugging Face `deepseek-ai/DeepSeek-V4-Flash-Vision-Exp`, MIT License); DeepSeek API (legacy model name `deepseek-v4-flash-vision-exp` retired — requests now served by DeepSeek-V4.1-Flash-1017 at Flash pricing); OpenAI-compatible API via vLLM / SGLang / DSpark speculative inference.
- **Release / knowledge:** Released ~2026 (HF card updated Sep 1; V4 family era); knowledge cutoff not stated in verified sources.
- **IDs:** `deepseek-ai/DeepSeek-V4-Flash-Vision-Exp`; API legacy alias `deepseek-v4-flash-vision-exp`.
- **Context window:** Not separately stated for the vision-exp variant (inherits V4-Flash architecture); max output not stated in verified sources.
- **Modalities:** Image + text input (Image-Text-to-Text), text output; multimodal agentic capabilities.
- **Pricing (as of 2026-10-28):** Open weights (MIT); DeepSeek API billing at Flash tier (vision-exp alias retired → served by DeepSeek-V4.1-Flash-1017 at Flash price).
- **Architecture:** Open-weight MoE (V4-Flash lineage; 291B Flash / 292B Flash-Base / 1.6T Pro variants); vision encoder + aligner + DFlash attention + MoE + Hyper-Connections + DSpark forward path.

### Raw benchmarks found

- Text agent capabilities (DeepSeek Harness minimal mode, `max` reasoning effort, temp=1.0, top_p=0.95):
  - Terminal Bench 2.1: **83.9**.
  - DeepSWE: **59.3**.
  - NL2Repo: **57.7**.
  - Cybergym: **75.3**.
  - Toolathlon-Verified: **75.9**.
  - DSBench-Hard: **63.6**.
  - AutomationBench (Public): **25.7**.
- Multimodal agent capabilities:
  - ApexBench (Pass@1): **36.5**.
  - Agents' Last Exam: **27.3**.
  - Chartography: **64.3**.
  - ZeroBench (Pass@5): **35.0**.

### Cross-source comparison

- Text vs multimodal agent performance: DeepSeek reports comparable text-only agent performance with substantial multimodal gains; ApexBench / Agents' Last Exam mixed results across text/multimodal elements.
- API note: `deepseek-v4-flash-vision-exp` retired; current serving model DeepSeek-V4.1-Flash-1017.

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal Bench 2.1 **83.9**, Toolathlon-Verified **75.9**, DeepSWE **59.3**; multimodal agentic ApexBench **36.5** → mid-high agentic band.
- **Reasoning: 70/100.** Text agent benchmarks (TB2.1 **83.9**, DeepSWE **59.3**, NL2Repo **57.7**) strong for V4-Flash lineage; capped below frontier proprietary tiers.
- **Context window: 60/100.** Context not separately stated for vision-exp variant; retrieval-at-scale not verified → mid band.
- **Multimodal: 80/100.** First V4 multimodal; ApexBench **36.5**, Chartography **64.3**, ZeroBench **35.0**; multimodal agentic upper-mid band for open weights.
- **Coding: 70/100.** Terminal Bench 2.1 **83.9**, DeepSWE **59.3**, NL2Repo **57.7**, Cybergym **75.3** → mid-high coding/agentic band.

- **Cost efficiency: 80/100.** Open weights (MIT); retired alias served by DeepSeek-V4.1-Flash-1017 at Flash pricing → high open-weight score.
- **Overall Score: 70/100.** Mean of the five quality dims (Tool 70 + Reasoning 70 + Context 60 + Multimodal 80 + Coding 70) / 5 = 70; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-28
- Method: public web research prioritizing official model card/docs (Hugging Face / DeepSeek API) plus independent benchmarks/reviews (Hugging Face eval results) — official-first with independent benchmark comparison.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
