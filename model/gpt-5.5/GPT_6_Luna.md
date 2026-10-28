# GPT-5.5 — findings by GPT-6 Luna

- Source: OpenAI/GPT-5.5
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's proprietary reasoning model for complex coding, computer use, research, and professional work. This report covers the base GPT-5.5 API SKU, not GPT-5.5 Pro.
- **Provider / access:** OpenAI API; Chat Completions (`v1/chat/completions`) and Responses (`v1/responses`). [Official API model documentation](https://developers.openai.com/api/docs/models/gpt-5.5)
- **Release / knowledge:** Released April 23, 2026; API availability announced April 24; knowledge cutoff December 1, 2025. [Official launch post](https://openai.com/index/introducing-gpt-5-5/) · [API model documentation](https://developers.openai.com/api/docs/models/gpt-5.5)
- **IDs:** `gpt-5.5`; default snapshot `gpt-5.5-2026-04-23`. [Official API model documentation](https://developers.openai.com/api/docs/models/gpt-5.5)
- **Context window:** 1,050,000 tokens; max output 128,000. Artificial Analysis reports 922K and LLM Stats rounds this to 1.1M; the official API spec is used here. [Official API model documentation](https://developers.openai.com/api/docs/models/gpt-5.5) · [Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-5) · [LLM Stats](https://llm-stats.com/models/gpt-5.5)
- **Modalities:** Text and image input; text output. Reasoning effort supports none, low, medium, high, and xhigh. Responses API features include function calling, web/file search, image input, structured outputs, and computer-use tools. [Official API model documentation](https://developers.openai.com/api/docs/models/gpt-5.5)
- **Pricing (as of 2026-10-28):** $5 input / $30 output per 1M tokens; cached input $0.50/1M. Prompts over 272K input tokens incur 2× input and 1.5× output rates for the full session; regional processing adds 10%. [Official API model documentation](https://developers.openai.com/api/docs/models/gpt-5.5)
- **Architecture:** Proprietary; parameter count and detailed architecture are undisclosed. OpenAI says the model was co-designed, trained, and served on NVIDIA GB200/GB300 systems, which describes infrastructure, not model architecture. [Official launch post](https://openai.com/index/introducing-gpt-5-5/)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (OpenAI; independent BenchLM listing rounds to 82%). This is v2.0 and should not be compared as though it were v2.1. [OpenAI launch post](https://openai.com/index/introducing-gpt-5-5/) · [BenchLM](https://benchlm.ai/models/gpt-5-5)
- GDPval: **84.9% wins or ties** on OpenAI's task set. This is not GDPval-AA Elo. [OpenAI launch post](https://openai.com/index/introducing-gpt-5-5/)
- OSWorld-Verified: **78.7%**; Tau2-Bench Telecom: **98.0%** (original prompts, no prompt adjustment); Toolathlon: **55.6%**; BrowseComp: **84.4%**; MCP Atlas: **75.3%**. [OpenAI launch post](https://openai.com/index/introducing-gpt-5-5/)
- Artificial Analysis separately lists GDPval-AA at **1,396 Elo** (BenchLM) and a Terminal-Bench 2.1 result of **84.3%** (AA); these differ in evaluation from OpenAI's GDPval wins/ties and Terminal-Bench 2.0 figures. [BenchLM](https://benchlm.ai/models/gpt-5-5) · [Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-5)
- Claw-Eval / ClawProBench: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **93.6%**; Humanity's Last Exam: **41.4% without tools / 52.2% with tools**; ARC-AGI-2 Verified: **85.0%**. [OpenAI launch post](https://openai.com/index/introducing-gpt-5-5/)
- Artificial Analysis reports CritPt **27.1%** and AA-LCR **84.3%**. Its current model page marks the composite Intelligence Index as unavailable/deprecated; no current AA index value is asserted here. [Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-5)
- BenchLM's composite score: **69.25/100, rank #21 of 1,000** (its own partial-coverage aggregator, not the project's normalized score). [BenchLM](https://benchlm.ai/models/gpt-5-5)
- Omniscience Accuracy / Hallucination Rate: **58.0% / 89.0%** on the AA page's reported metrics; the page labels the newer AA-Omniscience v1.1 results as updated, so this pair is retained with that source context. [Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-5)

Coding:

- SWE-bench Pro: **58.6%**; Terminal-Bench 2.0: **82.7%**; Expert-SWE (internal): **73.1%**. OpenAI notes a research evaluation environment and xhigh reasoning effort, which may differ from production. [OpenAI launch post](https://openai.com/index/introducing-gpt-5-5/)
- LiveCodeBench (Vals): **85.3%**; SWE-bench Verified (Vals): **82.6%**; Vibe Code Bench v1.1: **69.85%**; AA-SciCode: **55.8%**; AA Coding Index: **74.9**. [BenchLM](https://benchlm.ai/models/gpt-5-5)

Long context:

- OpenAI MRCR v2 8-needle: **74.0%** at 512K–1M, **81.5%** at 256K–512K, and **87.5%** at 128K–256K. GraphWalks at 1M: BFS **45.4% F1**, Parents **58.5% F1**. [OpenAI launch post](https://openai.com/index/introducing-gpt-5-5/)

### Normalized scores (1–100)

- **Tool use: 90/100.** Strong evidence includes 98.0% Tau2 Telecom, 84.9% GDPval wins/ties, and 78.7% OSWorld-Verified; the more modest 55.6% Toolathlon and OpenAI's 82.7% Terminal-Bench 2.0 cap the score. Independent GDPval-AA and Terminal-Bench numbers use different variants/harnesses.
- **Reasoning: 92/100.** GPQA Diamond 93.6%, HLE 52.2% with tools, and ARC-AGI-2 85.0% support a frontier rating; caps include the lower 41.4% HLE result without tools and no current comparable AA Intelligence Index value.
- **Context window: 95/100.** Officially 1.05M tokens, which reaches the methodology's ≥1M tier; 74.0% MRCR at 512K–1M and weaker 1M GraphWalks results cap it at the bottom of that tier rather than 100.
- **Multimodal: 65/100.** Official specification confirms image input, but text-only output and no verified audio/video input keep it within the image-input tier.
- **Coding: 92/100.** SWE-bench Pro 58.6%, Terminal-Bench 2.0 82.7%, AA Coding Index 74.9 and SciCode 55.8% are strong; no verified DeepSWE score and the Terminal-Bench variant/harness differences limit confidence.
- **Cost efficiency: 45/100.** $5/$30 per MTok is premium pricing, with the $0.50 cached-input price helping; the >272K surcharge makes very long prompts materially more expensive.
- **Overall Score: 87/100.** Half-up mean of quality dimensions: (90 + 92 + 95 + 65 + 92) / 5 = 86.8. A strong fit for tool-heavy coding and knowledge work where image understanding matters; its output and high-context costs are substantial.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Three independent public searches; primary OpenAI API/launch documentation was checked against Artificial Analysis, BenchLM, and LLM Stats. Distinct benchmark versions and harnesses are reported separately. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
