# DeepSeek V4 Flash Vision Exp — findings by GPT 5.6 Luna

- Source: DeepSeek/DeepSeek-V4-Flash-Vision-Exp
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash Vision Exp
- **Short description:** Experimental multimodal DeepSeek V4 Flash variant adding visual modules and visual-agent training; it is a distinct August 2026 checkpoint, not V4.1 Flash.
- **Provider / access:** The original DeepSeek API route was `deepseek-v4-flash-vision-exp`; DeepSeek now marks that route retired and temporarily routes the name to V4.1 Flash. The exact checkpoint remains available as `deepseek-ai/DeepSeek-V4-Flash-Vision-Exp` on Hugging Face.
- **Release / knowledge:** 2026-08-21 experimental release; knowledge cutoff is not stated.
- **IDs:** Original API ID `deepseek-v4-flash-vision-exp`; Hugging Face ID `deepseek-ai/DeepSeek-V4-Flash-Vision-Exp`. The current compatibility route must not be treated as the original checkpoint.
- **Context window:** No exact Vision-Exp context limit is stated in the model card. The 1M figure on current DeepSeek documentation belongs to the routed V4.1 Flash service and is not substituted here.
- **Modalities:** Text and image input, text output; tool and agent workflows are supported.
- **Pricing (as of 2026-11-02):** The original announcement billed images, up to 384 tokens each, at V4-Flash rates. Current calls using the retired name are served and billed as V4.1 Flash, so current route prices are not checkpoint prices.
- **Architecture:** DeepSeek V4 Flash family with visual modules; the Hugging Face repository reports a 305B-parameter checkpoint.

### Raw benchmarks found

- Exact-model card: Terminal-Bench 2.1 **83.9%**; NL2Repo **57.7%**; Cybergym **75.3%**; DeepSWE **59.3%**; Toolathlon-Verified **75.9%**; DSBench-Hard **63.6%**; AutomationBench Public **25.7%**. ([Hugging Face model card](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp))
- Multimodal-agent rows from the same card: ApexBench Pass@1 **36.5%**; Agents’ Last Exam **27.3%**; Chartography **64.3%**; ZeroBench Pass@5 **35.0%**.
- DeepSeek’s release post identifies the checkpoint as matching V4 Flash on text-agent tasks and improving visual-agent performance; its published table uses DeepSeek Harness minimal mode, max effort, temperature 1.0, and top-p 0.95. ([DeepSeek release post](https://api-docs.deepseek.com/news/news260821/))

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench, Toolathlon, and Cybergym are strong, while AutomationBench and the multimodal-agent rows show harness and task variance.
- **Reasoning: 82/100.** Text-agent results are competitive, but Agents’ Last Exam and the lack of a broad independent reasoning suite cap the score.
- **Context window: 70/100.** No exact-checkpoint context or retrieval result was verified; V4.1 Flash’s 1M service window is excluded.
- **Multimodal: 84/100.** Vision is native and the exact checkpoint reports ApexBench, Chartography, and ZeroBench results, though the visual-agent scores are not uniformly frontier-leading.
- **Coding: 82/100.** Terminal-Bench 83.9%, NL2Repo 57.7%, DeepSWE 59.3%, and Cybergym 75.3% support strong coding-agent ability.
- **Cost efficiency: 94/100.** The original Flash-rate positioning was inexpensive, but the exact checkpoint is no longer a separately served API model.
- **Overall Score: 80.8/100.** Mean of the five quality dimensions `(86 + 82 + 70 + 84 + 82) / 5 = 80.8`; best fit is experimental visual-agent work using the pinned open checkpoint.

## Evidence notes

- DeepSeek’s September 2026 lifecycle notice says V4 Flash Vision Exp is retired and the legacy name temporarily routes to V4.1 Flash. V4.1 benchmark results, context claims, and current service behavior are intentionally not merged into this report.

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current public web research using DeepSeek’s release/lifecycle documentation and the exact Hugging Face model card; benchmark versions, harnesses, and model routes were kept distinct, and scores are normalized interpretations rather than official vendor scores.
- Reference URLs:
  - [DeepSeek Vision Exp release](https://api-docs.deepseek.com/news/news260821/)
  - [DeepSeek model lifecycle/update notice](https://api-docs.deepseek.com/updates)
  - [Exact Hugging Face checkpoint](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)
