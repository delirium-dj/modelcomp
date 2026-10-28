# MiniMax-M3 — findings by GPT-6 Luna

- Source: MiniMax (`MiniMax-M3`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax-M3
- **Short description:** MiniMax's open-weight, native multimodal reasoning model for agentic coding, tool use, and long-horizon work. M3 is distinct from the later MiniMax M3.1 Flash serving/model release.
- **Provider / access:** MiniMax API (`MiniMax-M3`) at `https://api.minimax.io/v1/text/chatcompletion_v2`; MiniMax also supports Anthropic Messages and OpenAI-compatible Chat Completions/Responses APIs. Weights are published as `MiniMaxAI/MiniMax-M3` on Hugging Face. [MiniMax M3 launch post](https://www.minimax.io/blog/minimax-m3) · [MiniMax API docs](https://platform.minimax.io/docs/guides/text-generation) · [Hugging Face model card](https://huggingface.co/MiniMaxAI/MiniMax-M3)
- **Release / knowledge:** Official MiniMax launch date is June 1, 2026. Vals records May 31, 2026, likely a timezone/date-boundary difference. No knowledge cutoff verified. [MiniMax launch post](https://www.minimax.io/blog/minimax-m3) · [Vals AI](https://www.vals.ai/models/minimax_MiniMax-M3)
- **IDs:** MiniMax API ID `MiniMax-M3`; open-weight checkpoint `MiniMaxAI/MiniMax-M3`. [MiniMax launch post](https://www.minimax.io/blog/minimax-m3) · [Hugging Face model card](https://huggingface.co/MiniMaxAI/MiniMax-M3)
- **Context window:** Up to 1,000,000 tokens; MiniMax says the API guarantees at least 512K. Standard billing changes above 512K input tokens. [MiniMax M3 model page](https://www.minimax.io/models/text/m3) · [MiniMax pricing docs](https://platform.minimax.io/docs/pricing/overview)
- **Modalities:** Text, image, and video input; text output. Audio input/output was not documented for M3. [MiniMax launch post](https://www.minimax.io/blog/minimax-m3) · [Artificial Analysis](https://artificialanalysis.ai/models/minimax-m3)
- **Pricing (as of 2026-10-28):** Standard API up to 512K input: $0.30/MTok input, $1.20/MTok output, $0.06/MTok prompt-cache reads. Above 512K input: $0.60/$2.40/$0.12 per MTok. Priority service is 1.5× Standard. These rates include MiniMax's permanent 50% discount from the crossed-out list prices. Some aggregators list third-party route pricing (e.g. OpenRouter $0.23/$0.96); that is not the first-party rate. [MiniMax pricing docs](https://platform.minimax.io/docs/pricing/overview) · [OpenRouter](https://openrouter.ai/minimax/minimax-m3/benchmarks)
- **Architecture:** Open weights under the MiniMax Community License; native multimodal MoE with about 428B total and 23B active parameters, using MiniMax Sparse Attention (MSA) for long context. Commercial use is subject to the community license terms. [Hugging Face model card](https://huggingface.co/MiniMaxAI/MiniMax-M3) · [Artificial Analysis](https://artificialanalysis.ai/models/minimax-m3)

### Raw benchmarks found

> Scores below are for exact MiniMax-M3, but results vary by evaluator and harness. MiniMax's launch post includes a detailed evaluation-method section; independent Vals and Artificial Analysis evaluations are reported separately rather than averaged into vendor results.

Agent / tool use:

- Terminal-Bench 2.1: **66.0%** in MiniMax's internal evaluation using Terminus 2, 8C16G sandbox, 2-hour timeout, and 128K max output; **53.56%** in Vals' evaluation via the official MiniMax API at temperature 1 and top_p 0.95. This is a material harness/result difference. [MiniMax launch post](https://www.minimax.io/blog/minimax-m3) · [Vals AI](https://www.vals.ai/models/minimax_MiniMax-M3)
- BrowseComp: **83.5%** in MiniMax's results; the vendor notes its WebExplorer framework discards all history after 64K tokens. MCP Atlas: **74.2%**; Claw-Eval: **74.5% pass@3**; OSWorld-Verified: **70.1%**. [MiniMax model page](https://www.minimax.io/models/text/m3) · [BenchLM](https://benchlm.ai/models/minimax-m3)
- τ²-bench: **88.9%** in the Artificial Analysis-sourced rows indexed by BenchLM. GDPval-AA appears as **1,304 Elo** in BenchLM and **37.1%** in a separate row/source display; these are different metrics/definitions and are not conflated. [BenchLM](https://benchlm.ai/models/minimax-m3)
- ClawProBench: **no verified exact-model result found**.

Reasoning / knowledge:

- GPQA Diamond: **92.68%** on Vals and **92.9%** on Artificial Analysis; MMLU-Pro: **84.22%** on Vals. [Vals AI](https://www.vals.ai/models/minimax_MiniMax-M3) · [Artificial Analysis](https://artificialanalysis.ai/models/minimax-m3)
- Humanity's Last Exam: **39.0%** on Artificial Analysis. AA Intelligence Index v5.0: **19** on the current Artificial Analysis page, whose description notes the index now includes nine evaluations. [Artificial Analysis](https://artificialanalysis.ai/models/minimax-m3) · [BenchLM](https://benchlm.ai/models/minimax-m3)
- MiniMax's PostTrainBench: **37.1** (vendor page), placing M3 behind Opus 4.7 and GPT-5.5 in its stated comparison. This is a proprietary, specialized evaluation, not the AA Intelligence Index. [MiniMax model page](https://www.minimax.io/models/text/m3)
- BenchLM aggregate: **55.11/100**, rank **#78/1,002**, with partial coverage of 47/716 benchmarks. This is BenchLM's composite, not the project's normalized score. [BenchLM](https://benchlm.ai/models/minimax-m3)

Coding:

- SWE-bench Pro: **59.0%**; Terminal-Bench 2.1: **66.0%**; SWE-fficiency: **34.8%**; KernelBench Hard: **28.8%**; MCP Atlas: **74.2%** in MiniMax's launch evaluation. [MiniMax launch post](https://www.minimax.io/blog/minimax-m3)
- SWE-bench Verified: **80.5%** in BenchLM's vendor-linked row versus **75.0%** on Vals. Vals' current table also lists LiveCodeBench **82.15%**, and Terminal-Bench 4.0 **1.01%**; the latter is a different, newer benchmark edition and not a contradictory TB2.1 run. [BenchLM](https://benchlm.ai/models/minimax-m3) · [Vals AI](https://www.vals.ai/models/minimax_MiniMax-M3)
- Vibe Code Bench v1.1: **47.57%** on Vals; AA SciCode: **47.1%**. [Vals AI](https://www.vals.ai/models/minimax_MiniMax-M3) · [BenchLM](https://benchlm.ai/models/minimax-m3)

Multimodal:

- MMMU-Pro: **78.1%** in MiniMax/BenchLM source-linked results and **81.16%** on Vals; VideoMMMU: **84.6%** and Video-MME with subtitles: **85.4%** in MiniMax's model results. MiniMax's Video-MME protocol used up to 1,024 frames, but the M3 run was capped at 512 frames. [BenchLM](https://benchlm.ai/models/minimax-m3) · [Vals AI](https://www.vals.ai/models/minimax_MiniMax-M3) · [MiniMax launch post](https://www.minimax.io/blog/minimax-m3)
- MiniMax documents image/video input and text output; no audio input or non-text generation was verified. [MiniMax launch post](https://www.minimax.io/blog/minimax-m3) · [Artificial Analysis](https://artificialanalysis.ai/models/minimax-m3)

Long context:

- The 1M-token API limit is official. Artificial Analysis reports AA-LCR **83.0%**, but no exact retrieval score tied to a 512K/1M needle test was verified. MiniMax's BrowseComp harness also discards history after 64K, limiting the relevance of that run to 1M retrieval. [MiniMax M3 model page](https://www.minimax.io/models/text/m3) · [BenchLM](https://benchlm.ai/models/minimax-m3) · [MiniMax launch post](https://www.minimax.io/blog/minimax-m3)

### Normalized scores (1–100)

- **Tool use: 78/100.** MiniMax reports TB2.1 at 66%, BrowseComp at 83.5%, MCP Atlas at 74.2%, and Claw-Eval at 74.5%; Vals' TB2.1 is 53.56%, and the AA agentic results are mixed.
- **Reasoning: 82/100.** GPQA Diamond is 92.68–92.9%, HLE is 39.0%, and MMLU-Pro 84.22%, while the current AA Intelligence Index is 19.
- **Context window: 95/100.** The API supports up to 1M tokens, but no verified 512K/1M needle-retrieval result supports a higher score.
- **Multimodal: 85/100.** Text/image/video input and text output are documented; VideoMMMU is 84.6%, though no audio or non-text output is supported.
- **Coding: 83/100.** SWE-Pro is 59%, Vals SWE-bench Verified 75%, LiveCodeBench 82.15%, and TB2.1 spans 53.56–66% across harnesses; Terminal-Bench 4.0 is much lower at 1.01%.
- **Cost efficiency: 94/100.** $0.30/$1.20 per MTok up to 512K is moderate/competitive; requests above 512K cost twice as much, with cache-read and priority surcharges reflected separately.
- **Overall Score: 85/100.** Half-up mean of the five quality dimensions: (78 + 82 + 95 + 85 + 83) / 5 = 84.6. Useful for self-hosting, long-context multimodal coding, and agent tasks; validate the serving harness because terminal-agent scores vary by edition and configuration.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Three independent web searches (Yahoo, DuckDuckGo, Bing), followed by direct checks of MiniMax's launch/model pages, API release/pricing documentation, and official Hugging Face weights, plus Vals AI, Artificial Analysis, BenchLM, and OpenRouter. Vendor/independent Terminal-Bench and SWE-bench differences, release-date boundary, and first-party versus reseller prices are explicitly distinguished. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
