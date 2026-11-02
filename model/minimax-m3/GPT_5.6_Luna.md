# MiniMax M3 — findings by GPT 5.6 Luna

- Source: MiniMax/M3
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's open-weight multimodal model for coding, browsing, long documents, and economical agent workflows.
- **Provider / access:** MiniMax API, MiniMax Code, M Plan, OpenRouter, and downloadable open weights.
- **Release / knowledge:** Released June 1, 2026; knowledge cutoff is not published.
- **IDs:** `MiniMax-M3` / `minimax/minimax-m3`.
- **Context window:** Approximately 1,048,576 tokens; current provider listings report up to 512K output on some routes.
- **Modalities:** Text and image input with text output; vendor materials also describe video/document understanding and tool invocation.
- **Pricing (as of 2026-11-02):** Approximately $0.30 input / $1.20 output per 1M tokens on current API/provider listings.
- **Architecture:** Open-weight model; MiniMax describes a large sparse architecture, while current public catalogues do not provide a single stable parameter specification for every checkpoint.

## Raw benchmarks found

- BenchLM current profile: **48.57/100, #108 of 1,004**, with 51 benchmark rows covered.
- BrowseComp: **83.5%** (MiniMax vendor model page); GDPval-AA: **37.1%**; GDPval rubrics: **74.7%**; BankerToolBench: **76.1%**.
- LiveCodeBench: **82.2%**; VIBE V2: **50.1%**; SVG-Bench: **63.7%**; KernelBench Hard: **28.8%**.
- AA-IFBench: **82.9%**; USAMO 2026: **85.7%**; MazeBench: **0%**.
- MiniMax reports a long-running coding evaluation with **147 submissions and 1,959 tool calls** over roughly 24 hours; this is a vendor workflow report, not a standard benchmark score.
- Artificial Analysis reports an Intelligence Index of **19**, while BenchLM's broader aggregate is **48.57**; the disagreement is retained rather than averaged into a false consensus.

## Normalized scores (1–100)

- **Tool use: 79/100.** BrowseComp 83.5%, BankerToolBench 76.1%, and the vendor tool-loop report support useful agents, while current independent agentic ranking is modest.
- **Reasoning: 74/100.** USAMO and instruction-following results are good, but the Artificial Analysis Intelligence Index and current composite place M3 below reasoning-first frontier models.
- **Context window: 96/100.** The 1M window is consistently documented; no independent full-window retrieval curve was found.
- **Multimodal: 87/100.** Native visual/document understanding and the model's multimodal positioning are strong, though independent modality coverage is limited.
- **Coding: 82/100.** LiveCodeBench 82.2%, VIBE V2 50.1%, and the coding-agent workflow report show useful engineering ability with broad task variance.
- **Cost efficiency: 97/100.** $0.30/$1.20 pricing, open weights, and a 1M context make it very economical for high-volume work.
- **Overall Score: 83.6/100.** Mean of the five quality dimensions `(79 + 74 + 96 + 87 + 82) / 5 = 83.6`; best fit is economical multimodal browsing and coding where cost and context matter more than peak benchmark rank.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current MiniMax model/pricing material, Hugging Face/OpenRouter catalogues, BenchLM's October 29 profile, and Artificial Analysis; vendor workflow claims and independent benchmark rows were kept distinct, and scores are normalized interpretations rather than official vendor scores.
- Reference URLs:
  - [MiniMax M3 model page](https://www.minimax.io/models/text/m3)
  - [MiniMax M3 announcement](https://www.minimax.io/blog/minimax-m3)
  - [MiniMax M3 model card](https://huggingface.co/MiniMaxAI/MiniMax-M3)
  - [BenchLM MiniMax M3 profile](https://benchlm.ai/models/minimax-m3)
