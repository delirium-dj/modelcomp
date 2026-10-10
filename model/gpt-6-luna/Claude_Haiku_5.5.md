# GPT-6 Luna — findings by Claude Haiku 5.5

- Source: OpenAI/GPT-6 Luna (`gpt-6-luna`), with third-party hosts Vercel AI Gateway and Wiro (`openai/gpt-6-luna`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna. Free tier: available free only inside the ChatGPT desktop app (Free and Go users). No free API ID found.
- **Short description:** OpenAI's most efficient GPT-6 family model, built for focused, high-volume tasks with adjustable reasoning. It is the low-cost sibling of GPT-6 Sol and sits below GPT-6 Astra, which OpenAI positions as its top computer-use model. Top use case: cost-sensitive coding sub-agents and bulk text or image workloads.
- **Provider / access:** OpenAI API `gpt-6-luna` (Responses API recommended for built-in tools and function calling; Chat Completions supports function calling only when reasoning is set to `none`). Also `openai/gpt-6-luna` on Vercel AI Gateway, and `openai/gpt-6-luna-fast` (priority tier) there. Wiro AI also lists `openai/gpt-6-luna`. OpenCode Zen: no verified listing found, so no Free ID exists on Zen as far as public sources show.
- **Release / knowledge:** Released 2026-09-22 (per Box model card); OpenAI's launch post for Sol and Luna is dated within the last week. Knowledge cutoff 2026-05-18 (OpenAI docs).
- **IDs:** `openai/gpt-6-luna` (OpenAI API: `gpt-6-luna`). No free ID verified.
- **Context window:** 1,050,000 total input context, 128,000 max output tokens (OpenAI official model docs). A comparison site lists 1.1M, but the official figure is 1,050,000.
- **Modalities:** Text and image in; text out. No audio or video input. Reasoning: yes (effort levels none, low, medium default, high, xhigh, max). Tool calls: yes (function calling, web search, file search). Structured outputs: yes. Streaming: yes. Fine-tuning: no. JSON mode: via structured outputs.
- **Pricing (as of 2026-10-10):** $0.10 input / $0.50 output / $0.01 cached input per 1M tokens (paid, halved from GPT-5.6 Luna's $0.20 / $1.20). Free access exists only in the ChatGPT desktop app, not the API.
- **Architecture:** Proprietary. Total and active parameter counts not publicly disclosed. Not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **73.0%** (Vals AI, #22 of 73)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **42.0%** (Artificial Analysis, high effort; reported as a percentage, not Elo. Elo unverified.)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **SWE-Atlas-QnA 44%** (Artificial Analysis, Codex harness, max effort). Toolathon and MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **90.5%** (side-by-side comparison table on anotherwrapper.com; no Vals or OpenAI primary figure found for Luna specifically)
- HLE: **38.5%** (Artificial Analysis, max effort); 32.9% at high; 28.3% at medium
- LCR / MLCR: **79.3%** (AA-LCR, Artificial Analysis, high effort)
- CritPt: **19.4%** (Artificial Analysis, max effort); 15.4% at high
- Artificial Analysis Intelligence Index / BenchLM overall: **32.9 (high effort, OpenRouter table) / 37 (effort unstated, emergent.sh)** / rank: no verified rank found. Vals Index: 51.2%, #25 of 44 (Vals AI).
- Omniscience Accuracy / Hallucination Rate: **no verified public score found.** A third-party "factuality" table shows values falling from 27.7% (low) to 7.6% (max), but the metric is not labeled clearly, so it is not used here.

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** for Luna. The 93% SWE-bench figure belongs to GPT-5.6 Luna, not GPT-6 Luna.
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **54.6%** (Artificial Analysis, max effort); 50.3% at high
- Vibe Code Bench: **81.6%** (Vals AI, Vibe Code Bench v1.1)
- DeepSWE / Coding Index / other: **DeepSWE v1.1 66.6%** (OpenAI launch report, max effort); **Artificial Analysis Coding Agent Index 41** (max effort, Codex harness; down 2 points from GPT-5.6 Luna)

Long context:

- No long-context retrieval reported. No MRCR, RULER, or GraphWalks score verified for Luna at 512K or longer.

### Normalized scores (1-100)

- **Tool use: 70/100.** Terminal-Bench 2.1 at 73.0% sits well above the mid band but below the frontier threshold of 88%. Tau3-Banking and verified GDPval Elo are missing, which caps the score. The GDPval-AA figure is reported as 42.0%, not as Elo, so it cannot be mapped to the Elo scale.
- **Reasoning: 72/100.** GPQA Diamond at 90.5% reaches the frontier band, and HLE at 38.5% (max) sits just under the 40% frontier threshold. The Artificial Analysis Intelligence Index of 32.9 to 37 is well below the 60+ frontier mark, which caps the score.
- **Context window: 95/100.** Verified total of 1,050,000 tokens falls in the 1M+ tier. The 100 ceiling needs at least 98% retrieval at 512K or more, and no such retrieval score is reported.
- **Multimodal: 65/100.** Accepts text and images, outputs text only. No audio or video input. This matches the 60-70 image-input band.
- **Coding: 75/100.** Vibe Code Bench at 81.6% and DeepSWE v1.1 at 66.6% are strong for the price, but DeepSWE is below the 74% frontier threshold, Terminal-Bench 2.1 is below 85%, and SciCode at 54.6% is just under 55%. The Coding Agent Index dropped to 41, a regression from the prior generation. Missing SWE-bench Verified and SWE-Pro also cap the score.
- **Cost efficiency: 96/100.** Paid at $0.10 input and $0.50 output per 1M tokens, which sits between the ~$0.10/$0.20 band (97-99) and the ~$0.60/$2.20 band (~92). Not counted in Overall.
- **Overall Score: 75.4/100.** Mean of the five non-cost dimensions: (70 + 72 + 95 + 65 + 75) / 5 = 75.4. Best fit: high-volume, cost-sensitive work such as coding sub-agents, classification, extraction, routing, summarization, and screenshot analysis. Use GPT-6 Sol or Astra for harder problems where peak capability matters.

---

## Signature

- Provided by: **Claude Haiku 5.5 (anthropic/claude-haiku-5-5)** — 2026-10-10
- Method: Public internet research across OpenAI's official model docs and launch post, Artificial Analysis, Vals AI, Vellum, Box, Vercel AI Gateway, OpenRouter, and BenchLM, with the Artificial Analysis and Vals figures preferred where they conflict with aggregator sites. Scores are normalized 1-100 interpretations, not official vendor scores. Two discrepancies remain: the Intelligence Index (32.9 vs 37, effort level unclear) and the GPQA figure, which comes from a comparison site rather than a primary source.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
