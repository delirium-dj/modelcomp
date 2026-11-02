# Inkling — findings by GPT 5.6 Luna

- Source: Thinking Machines Lab/Inkling
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab’s open-weight general-purpose model for text, vision, audio, reasoning, coding, and customizable agent workflows.
- **Provider / access:** Full weights are available from Thinking Machines Lab and Hugging Face; Tinker and several hosted partners provide managed access. No single universal hosted API ID was verified.
- **Release / knowledge:** 2026-07-15 release; knowledge cutoff is not published.
- **IDs:** `thinkingmachines/inkling`; hosted provider IDs vary by serving route.
- **Context window:** Up to 1,000,000 tokens in the model release. Tinker’s launch documentation lists route-specific 64K and 256K options, so deployment limits vary.
- **Modalities:** Text, image, and audio input with text output; the model was pretrained on text, images, audio, and video, but a video-input API was not independently verified.
- **Pricing (as of 2026-11-02):** Open-weight download; Tinker and hosted serving costs are infrastructure/provider dependent, and no single current token rate was verified for the base checkpoint.
- **Architecture:** Mixture-of-Experts transformer, 975B total parameters and 41B active parameters; controllable thinking effort.

### Raw benchmarks found

- BenchLM snapshot (2026-10-29): composite **47.91/100**, rank **#112/1004**, with 49 of 724 benchmarks covered; coverage is explicitly partial. ([BenchLM Inkling](https://benchlm.ai/models/inkling))
- Thinking Machines’ released-checkpoint table, effort 0.99: HLE **29.7%** text-only / **46.0%** with tools; AIME 2026 **97.1%**; GPQA Diamond **87.2%**; IFBench **79.8%**. ([Inkling launch post](https://thinkingmachines.ai/news/introducing-inkling/))
- Agentic rows: Terminal-Bench 2.1 **63.8%** (internal best harness), BrowseComp **77.1%**, MCP Atlas **76.0%**, Tau3 Banking **23.7%**, Toolathlon Verified **45.5%**, and GDPval-AA **1238**. ([Inkling launch post](https://thinkingmachines.ai/news/introducing-inkling/))
- Coding rows: SWE-bench Verified **77.6%**, SWE-bench Pro **54.3%**, and AA Coding Index **52.1%**. ([BenchLM Inkling](https://benchlm.ai/models/inkling))
- Multimodal rows: MMMU-Pro **73.5%**, CharXiv **78.1%** without tools / **82.0%** with Python, Audio MC **56.6%**, MMAU **77.2%**, and VoiceBench **91.4%**. ([Inkling launch post](https://thinkingmachines.ai/news/introducing-inkling/))

### Normalized scores (1–100)

- **Tool use: 82/100.** BrowseComp and MCP Atlas are strong, but Terminal-Bench, Toolathlon, Tau3, GDPval, and independent/official harnesses show meaningful variance.
- **Reasoning: 84/100.** AIME 2026 at 97.1%, GPQA Diamond at 87.2%, and HLE with tools are strong; lower text-only HLE and Artificial Analysis coverage keep it below the frontier ceiling.
- **Context window: 95/100.** The model advertises 1M context, but no full-window retrieval curve was found and managed Tinker routes are smaller.
- **Multimodal: 82/100.** Vision and audio results are directly reported, with solid but not leading MMMU-Pro and CharXiv scores.
- **Coding: 84/100.** SWE-bench Verified is strong, while SWE-bench Pro, Terminal-Bench, and the coding-index result show task and harness dependence.
- **Cost efficiency: 92/100.** Open weights and controllable thinking effort can reduce serving cost, although hardware and hosted-route costs remain.
- **Overall Score: 85.4/100.** Mean of the five quality dimensions `(82 + 84 + 95 + 82 + 84) / 5 = 85.4`; best fit is customizable multimodal agents where deployment control matters.

## Evidence notes

- The official Terminal-Bench and SWE-bench figures use Thinking Machines’ internal coding harness and a 256K maximum trajectory; contamination handling is documented in the launch post. They are not silently mixed with Vals or other harness rows.
- BenchLM’s composite is a current external reference, not a replacement for the five-dimension normalized score.

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current public web research using the official launch post, BenchLM’s October 29 profile, and model documentation; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Thinking Machines Lab Inkling launch post](https://thinkingmachines.ai/news/introducing-inkling/)
  - [Inkling model card](https://thinkingmachines.ai/model-card/inkling/)
  - [BenchLM Inkling profile](https://benchlm.ai/models/inkling)
