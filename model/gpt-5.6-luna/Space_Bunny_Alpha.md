# GPT-5.6 Luna — findings by Space Bunny Alpha

- Source: OpenAI (`gpt-5.6-luna`; max reasoning)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna (max)
- **Short description:** OpenAI's cost-sensitive GPT-5.6 model for high-volume coding, tool use, and reasoning, available through Chat Completions and Responses endpoints. **Deprecated:** Artificial Analysis flags GPT-5.6 Luna as superseded and points users at GPT-6 Luna, which succeeds it with higher intelligence and better writing quality and computer use.
- **Provider / access:** OpenAI API (`gpt-5.6-luna`); Chat Completions `v1/chat/completions` and Responses `v1/responses`; OpenCode Zen `opencode/gpt-5.6-luna` Responses route. Successor route: `gpt-6-luna`.
- **Release / knowledge:** OpenAI model documentation gives a February 16, 2026 knowledge cutoff. Artificial Analysis and BenchLM list release on July 9, 2026.
- **IDs:** `gpt-5.6-luna`; OpenCode Zen ID `gpt-5.6-luna`. Superseded by `gpt-6-luna`.
- **Context window:** 1,050,000 tokens; 128,000 maximum output tokens (OpenAI API model documentation, verified 2026-09-29). BenchLM reports 1.05M.
- **Modalities:** Text and image input; text output; reasoning effort supports none, low, medium, high, xhigh, and max. Function calling, structured outputs, web search, file search, code interpreter, hosted shell, apply patch, skills, computer use, MCP, and tool search are supported through Responses.
- **Pricing (as of 2026-09-29):** $0.20 per 1M input tokens, $0.02 cached input, and $1.20 per 1M output tokens. Prompts over 272K input tokens are charged at 2x input and 1.5x output; cache writes are 1.25x uncached input.
- **Architecture:** Proprietary; OpenAI has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **37/100**, rank **#5/173** (Artificial Analysis, accessed 2026-09-29; index held at 37 after the re-run)
- BenchLM overall: **64.9/100**, rank **#30/196** (BenchLM, accessed 2026-09-29; composite score with different methodology)
- OSWorld 2.0: **45.6%** (BenchLM, provider-exact OpenAI GPT-5.6 source)
- Terminal-Bench 2.1: **84.7%** provider-exact; **79.0%** on Vals AI harness (BenchLM)
- BrowseComp: **83.3%** (BenchLM, provider-exact OpenAI GPT-5.6 source)
- Toolathlon: **53.4%** (BenchLM, provider-exact OpenAI GPT-5.6 source)
- CyberGym: **77.9%**; ExploitGym: **12.4%**; ApprenticeBench: **7%** (BenchLM, provider-exact OpenAI GPT-5.6 source)
- GDPval-AA, Tau3-Banking, Claw-Eval, and MCP-Atlas: **no verified public exact value found**
- Latency: time to first answer token **107.35 s** (Artificial Analysis, 2026-09-29) — roughly **50x the class median**, newly measured in this re-run and materially worse than the deprecated status would suggest

Reasoning / knowledge:

- GPQA Graduate-Level: **92.3%**; GPQA-D: **92.3%** (BenchLM, provider-exact OpenAI GPT-5.6 source)
- GPQA Diamond (Vals AI): **91.7%**; MMLU-Pro (Vals): **86.0%** (BenchLM, independent leaderboards)
- Artificial Analysis Intelligence Index: **37** (accessed 2026-09-29; held, not revised)
- HLE, LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact value found**

Coding:

- SWE-bench Pro: **62.7%** (BenchLM, provider-exact OpenAI GPT-5.6 source)
- DeepSWE: **67.2%** (BenchLM, provider-exact OpenAI GPT-5.6 source)
- SWE-bench (Vals AI): **93.0%** (BenchLM, Cognition GPT-5.6 models in Devin source; harness-specific)
- Terminal-Bench 2.1: **84.7%** provider-exact; **79.0%** Vals harness
- CursorBench 3.2: **61.1%**; FrontierCode 1.1 Extended: **55.1%** (BenchLM, provider/exact or independent source labels)
- LiveCodeBench, SciCode, and Vibe Code Bench: **no verified public exact value found**

Long context:

- No public retrieval-at-length result for this exact model was found. OpenAI verifies a 1,050,000-token context window and 128K maximum output; long-context pricing changes above 272K input tokens.

Sources consulted: [OpenAI GPT-5.6 Luna model documentation](https://platform.openai.com/docs/models/gpt-5.6-luna), [Artificial Analysis GPT-5.6 Luna](https://artificialanalysis.ai/models/gpt-5-6-luna), [Microsoft Foundry gpt-6-luna catalog](https://ai.azure.com/catalog/models/gpt-6-luna), and [BenchLM GPT-5.6 Luna](https://benchlm.ai/models/gpt-5-6-luna), accessed 2026-09-29. Composite scores and benchmark harnesses are kept separate.

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 84.7%, BrowseComp 83.3%, Toolathlon 53.4%, and OSWorld 45.6% provide broad measured agent evidence; trimmed from 93 because the newly measured 107.35 s TTFT (≈50x class median) is a real drag on agent loops, and missing Tau, GDPval, and MCP values cap certainty.
- **Reasoning: 88/100.** GPQA 92.3%, MMLU-Pro 86.0%, and the AA Index of 37 support strong reasoning; missing HLE/LCR/CritPt values cap confidence.
- **Context window: 98/100.** OpenAI verifies 1.05M context and 128K output, though no exact-model retrieval-at-length result was found.
- **Multimodal: 65/100.** Text and image input with text output are supported; audio and video are not supported.
- **Coding: 89/100.** DeepSWE 67.2%, SWE-bench Pro 62.7%, Terminal-Bench 84.7%, and harness-specific SWE-bench Vals 93.0% show strong coding; trimmed from 91 because the model is now deprecated with no new exact-model coding evidence and LiveCodeBench/SciCode remain unpublished.
- **Cost efficiency: 96/100.** $0.20/$1.20 with a 90% cache discount is exceptionally inexpensive for a frontier tool-capable model, though long-context and cache-write surcharges apply.
- **Overall Score: 86.4/100.** (92 + 88 + 98 + 65 + 89) / 5 = 432 / 5 = 86.4. Best fit: high-volume coding and tool agents that need long context and multimodal image input at low token cost — but prefer the successor GPT-6 Luna unless this route's price or existing prompts require it.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of OpenAI's official model documentation, Artificial Analysis, Microsoft Foundry, and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
