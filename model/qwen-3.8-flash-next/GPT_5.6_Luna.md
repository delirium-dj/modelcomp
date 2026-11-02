# Qwen 3.8 Flash Next — findings by GPT 5.6 Luna

- Source: Qwen/Qwen3.8-Flash-Next
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Experimental open-weight Qwen architecture preview with sparse activation, a vision encoder, and efficient long-context agent/coding capabilities.
- **Provider / access:** Qwen open weights on Hugging Face and compatible serving stacks; managed Qwen Cloud access is provided by the separate production `Qwen3.8-Flash` successor.
- **Release / knowledge:** 2026 experimental preview; knowledge cutoff is not published.
- **IDs:** `Qwen/Qwen3.8-Flash-Next` (Hugging Face); production `Qwen3.8-Flash` is a distinct service model.
- **Context window:** 262,144 tokens natively, extensible to 1,000,000 tokens according to the exact model card. The production Flash successor advertises 1M by default; its limits and scores are not substituted.
- **Modalities:** Text and image input through a causal language model with vision encoder; text output, reasoning, coding, and tools. Audio/video input was not established for this checkpoint.
- **Pricing (as of 2026-11-02):** Open weights; no single hosted price was assigned to the experimental preview. Production Qwen3.8-Flash pricing is a separate route.
- **Architecture:** 125B language-model parameters with 6B activated, plus 51B n-gram embedding parameters and 4B MTP; sparse experts and Qwen Sparse Attention.

### Raw benchmarks found

- BenchLM snapshot (2026-10-29): composite **55.8/100**, rank **#65/1004**, with 39 of 724 benchmarks covered; coverage is explicitly partial. ([BenchLM Qwen3.8-Flash-Next](https://benchlm.ai/models/qwen3-8-flash-next))
- Agent rows: CoWorkBench **73.9%**; JobBench **55.7%**; Agents’ Last Exam **51.2%**; Toolathlon-Verified **73.5%**; AndroidWorld **84.5%**; OSWorld 2.0 **19.4%**; GDPval-AA **1648**; Tau3 Banking **45.4%**.
- Coding rows: SWE-bench Pro **62.5%**; SWE Multilingual **81%**; NL2Repo **48.1%**; DeepSWE **58.7%**; LiveCodeBench v6 **91.9%**; AA Coding Index **73.0%**.
- Vision rows: ExtractBench **89.88%**; Vision2Web **64.0%**; ERQA **72.3%**; LVBench **76.6%**; RealWorldQA **88.5%**; MathVision **90.6%** without code interpreter / **95.7%** with it; CharXiv **84.6%** without tools / **90.6%** with tools.
- Reasoning/knowledge rows: GPQA Diamond **91.7%**; HLE **35.9%**; AA-LCR **79.7%**; CritPt **11.1%**; IFBench **81.3%**. ([Exact Hugging Face model card](https://huggingface.co/Qwen/Qwen3.8-Flash-Next))

### Normalized scores (1–100)

- **Tool use: 84/100.** Toolathlon, CoWorkBench, AndroidWorld, GDPval, Tau3, and AA Terminal-Bench support strong agents, while OSWorld 2.0 is a major counter-signal.
- **Reasoning: 83/100.** GPQA and instruction-following results are strong, but HLE, CritPt, and the partial coverage profile limit the ceiling.
- **Context window: 84/100.** The native 262K window is solid and 1M extension is documented, but no full-extension retrieval result supports a 1M-tier score.
- **Multimodal: 85/100.** The exact checkpoint has a vision encoder and broad image benchmark coverage, with strong MathVision/CharXiv results; audio and video are not established.
- **Coding: 85/100.** LiveCodeBench and multilingual SWE are excellent, while SWE-bench Pro, DeepSWE, and NL2Repo show practical task variance.
- **Cost efficiency: 92/100.** Open weights and only 6B activated language-model parameters improve deployment economics, subject to serving hardware.
- **Overall Score: 84.2/100.** Mean of the five quality dimensions `(84 + 83 + 84 + 85 + 85) / 5 = 84.2`; best fit is an efficient multimodal coding/agent deployment using the pinned preview checkpoint.

## Evidence notes

- `Qwen3.8-Flash-Next` benchmark rows are kept separate from the production `Qwen3.8-Flash` model’s 1M service claims and any later Qwen family checkpoints.
- Coding rows in the model card use stated harnesses and 256K evaluation contexts; they are not collapsed into a single benchmark-version score.

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current Qwen model card, BenchLM’s October 29 profile, and provider documentation; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen3.8-Flash-Next model card](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
  - [Qwen3.8-Flash-Next repository](https://github.com/QwenLM/Qwen3.8-Flash-Next)
  - [BenchLM Qwen3.8-Flash-Next profile](https://benchlm.ai/models/qwen3-8-flash-next)
