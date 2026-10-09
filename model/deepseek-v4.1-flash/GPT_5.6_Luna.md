# DeepSeek V4.1 Flash — findings by ChatGPT 5.6 Luna

- Source: DeepSeek/DeepSeek-V4.1-Flash
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash (paid API; no verified official Free-tier ID)
- **Short description:** DeepSeek's smallest V4.1-family model, an open-weight 552B MoE with native visual understanding and a 1M-token context window. It targets agentic coding, tool use, long-context workflows, and high-throughput inference. The official API identifier is `deepseek-flash`; OpenCode Zen exposes the model as `deepseek-v4.1-flash`. ([DeepSeek][1])
- **Provider / access:** DeepSeek API `deepseek-flash` — OpenAI Chat Completions and Responses API, also Anthropic API; OpenCode Zen `opencode/deepseek-v4.1-flash` — OpenAI-compatible Chat Completions. OpenCode Zen lists the model as paid and does not list a Free variant/ID for it. ([DeepSeek API Docs][2])
- **Release / knowledge:** 2026-09-10 release; knowledge cutoff not publicly disclosed by DeepSeek. ([DeepSeek API Docs][3])
- **IDs:** `deepseek/deepseek-flash` (DeepSeek API); `opencode/deepseek-v4.1-flash` (OpenCode Zen); `deepseek-ai/DeepSeek-V4.1-Flash` (Hugging Face). No Free ID exists on Zen for this model; Zen's current free-model list does not include a DeepSeek V4.1 Flash Free variant. ([Hugging Face][4])
- **Context window:** 1M tokens total; maximum output 384K tokens. Verified in DeepSeek's official Models & Pricing documentation and corroborated by Hugging Face/model metadata. ([DeepSeek API Docs][2])
- **Modalities:** text/image input; text output; reasoning yes; tool calls yes; JSON output yes; Responses API yes. Native visual understanding is explicitly supported. No verified native audio/video input or non-text output found. ([DeepSeek API Docs][2])
- **Pricing (as of 2026-09-30):** DeepSeek API: **$0.30/M input, $1.20/M output, $0.006/M cached input at peak; $0.15/$0.60/$0.003 respectively off-peak**. OpenCode Zen: **$0.30/M input, $1.20/M output, $0.006/M cached read**. Paid; no verified Free-tier variant. DeepSeek's off-peak rates are 50% of peak. ([DeepSeek API Docs][2])
- **Architecture:** 552B-parameter MoE with a new Causal Encoder–Decoder architecture; 8B active parameters for input/prefill and 16B active parameters for output/decode. DeepSeek reports KV-cache requirements reduced to 1/4 of the previous generation's HBM requirement and 1/8 of its SSD requirement. Open weights under MIT. ([DeepSeek][1])

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (DeepSeek official; DeepSeek Harness Minimal, 1M-token context; Hugging Face evaluation record) ([DeepSeek API Docs][3])
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1600 Elo** (Artificial Analysis; GDPval-AA v2.1) ([Artificial Analysis][5])
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
  Reasoning / knowledge:
- GPQA Diamond: **90.9%** (DeepSeek official/Hugging Face evaluation result) ([DeepSeek API Docs][3])
- HLE: **36.8%** (DeepSeek official; pure-text HLE subset; 39.1% alternate reported configuration) ([DeepSeek API Docs][3])
- LCR / MLCR: **84.0%** (Artificial Analysis; AA-LCR v1.1) ([OpenRouter][6])
- CritPt: **14.3%** (Artificial Analysis; CritPt) ([Artificial Analysis][5])
- Artificial Analysis Intelligence Index / BenchLM overall: **39 / #28 of 679** (Artificial Analysis Intelligence Index v4.3.2; current release comparison) ([Artificial Analysis][7])
- Omniscience Accuracy / Hallucination Rate: **46.4% / no verified public score found** (Artificial Analysis reports 46.4% accuracy and 3.5% non-hallucination rate; a directly reported hallucination-rate figure was not found in the permitted sources) ([OpenRouter][6])
  Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **51.9%** (Artificial Analysis; SciCode) ([OpenRouter][6])
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **DeepSWE v1.1: 74.2%** (DeepSeek official; mini-SWE harness) ([DeepSeek API Docs][3])
  Long context:
- **no long-context retrieval reported** (no verified MRCR/RULER/GraphWalks retrieval score found; AA-LCR 84.0% is a long-context reasoning evaluation, but is not treated as an MRCR/RULER retrieval measurement) ([OpenRouter][6])

### Normalized scores (1-100)

- **Tool use: 93/100.** Terminal-Bench 2.1 at 90.6% is in the frontier range, while DeepSeek's Automation-Bench result is 54.8%; the combination supports a high tool-use score but the absence of verified Tau3/MCP-Atlas/Claw scores caps it below the top end. ([DeepSeek API Docs][3])
- **Reasoning: 82/100.** GPQA Diamond reaches 90.9%, while HLE is 36.8% and the Artificial Analysis Intelligence Index is 39; this is strong academic reasoning evidence but does not satisfy the methodology's combined frontier thresholds for 90+. ([DeepSeek API Docs][3])
- **Context window: 95/100.** The verified 1M-token context places it in the >=1M tier; 100 is reserved by the methodology for demonstrated >=98% retrieval at 512K+ such as MRCR/RULER, which was not verified. ([DeepSeek API Docs][2])
- **Multimodal: 65/100.** Native text and image input with text output places it in the methodology's image-input tier; no verified audio input or non-text output was found. ([DeepSeek][1])
- **Coding: 94/100.** Terminal-Bench 2.1 is 90.6% and DeepSWE v1.1 is 74.2%; these are strong agentic-coding results, although no verified SWE-bench Verified or LiveCodeBench score was found for the exact V4.1 Flash model. ([DeepSeek API Docs][3])
- **Cost efficiency: 97/100.** At the evaluated DeepSeek off-peak price of $0.15/M input and $0.60/M output, it falls into the low-cost/high-efficiency range of the supplied methodology; OpenCode Zen uses the higher $0.30/$1.20 paid tier. ([DeepSeek API Docs][2])
- **Overall Score: 85.8/100.** Mean of the five non-cost dimensions: (93 + 82 + 95 + 65 + 94) / 5 = 85.8. Best fit: cost-sensitive agentic coding and tool-driven workloads where 1M context and native vision are useful.

---

### Multi-source deep-research addendum (2026-10-09)

- DeepSeek’s official release and API docs confirm the 1M context and Flash pricing/compatibility routing. The Hugging Face card reports 552B MoE architecture and direct code-agent evaluations; independent comparisons put Terminal-Bench 2.1 near 90.6, but harness differences remain material.
- Recalculation: retained existing score; stronger coding evidence does not by itself justify changing the normalized composite.
- Sources: https://deepseek.com/en/news/deepseek-v4-1-flash/ ; https://api-docs.deepseek.com/quick_start/pricing/ ; https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash

## Signature

- Provided by: **ChatGPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-09-30
- Method: public internet research using official DeepSeek documentation/model release material, Hugging Face, Artificial Analysis, and OpenCode Zen documentation; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

[1]: https://deepseek.com/en/news/deepseek-v4-1-flash/?utm_source=chatgpt.com "DeepSeek | Introducing DeepSeek-V4.1-Flash: smarter, faster, more efficient."
[2]: https://api-docs.deepseek.com/quick_start/pricing/?push_animated=1&show_loading=0&theme=light&webview_progress_bar=1&utm_source=chatgpt.com "Models & Pricing | DeepSeek API Docs"
[3]: https://api-docs.deepseek.com/updates/?utm_source=chatgpt.com "Change Log | DeepSeek API Docs"
[4]: https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash?utm_source=chatgpt.com "deepseek-ai/DeepSeek-V4.1-Flash · Hugging Face"
[5]: https://artificialanalysis.ai/models/comparisons/deepseek-v4-1-flash-vs-deepseek-v4-flash-vision?utm_source=chatgpt.com "DeepSeek V4.1 Flash (Reasoning, Max Effort) vs DeepSeek V4 Flash Vision (Reasoning, Max Effort): Model Comparison | Artificial Analysis"
[6]: https://openrouter.ai/deepseek/deepseek-v4.1-flash/providers?utm_source=chatgpt.com "DeepSeek V4.1 Flash - API Pricing & Benchmarks | OpenRouter"
[7]: https://artificialanalysis.ai/models/releases/deepseek-v4-1-flash?utm_source=chatgpt.com "DeepSeek V4.1 Flash Models - Intelligence, Performance & Price Comparison | Artificial Analysis"
