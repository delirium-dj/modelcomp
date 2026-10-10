# GPT-6 Luna — findings by Claude Opus 5.5

- Source: OpenAI/GPT-6 Luna (`gpt-6-luna`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna (paid API model. There is no free API tier. In ChatGPT, Free and Go users can use it only in the desktop app, per the OpenAI launch post. BazaarLink also lists it as "a paid model".)
- **Short description:** GPT-6 Luna is OpenAI's cheapest and fastest GPT-6 model, ranked below GPT-6 Sol and the flagship GPT-6 Astra. It's built for high-volume tasks with a clear goal, such as summarizing, extracting information and answering quick questions. At higher reasoning effort it can also handle coding and computer-use work (OpenAI blog, TechCrunch, OpenRouter). Watch for these other names: GPT-6 Luna is a different model from the older GPT-5.6 Luna, and ChatGPT Free/Go web chat still runs GPT-5.6 Luna (Lindy).
- **Provider / access:** OpenAI API `gpt-6-luna`. Responses API is recommended for tools; per llm-stats, Chat Completions function calling only works with reasoning effort `none`. OpenRouter `openai/gpt-6-luna`. Amazon Bedrock `openai.gpt-6-luna` / `us.openai.gpt-6-luna` / `global.openai.gpt-6-luna`; Classmethod tested Converse, Responses and Chat Completions there. Codex / ChatGPT Work: `gpt-6-luna`. The pi.dev registry also lists `opencode/gpt-6-luna`, `opencode-go/gpt-6-luna`, Azure, GitHub Copilot and Cloudflare AI Gateway. I did not check these against the OpenCode Zen docs.
- **Release / knowledge:** 2026-09-22 (OpenAI blog, AWS Bedrock model card). Knowledge cutoff is 2026-05-18 (AWS Bedrock model card).
- **IDs:** `openai/gpt-6-luna`. I could not confirm any OpenCode Zen ID, and no free Zen ID exists that I could verify.
- **Context window:** 1,050,000 tokens total with 128,000 max output (official AWS Bedrock model card; OpenRouter and TypingMind agree). llm-stats and models.sulat list max input as 922,000. The Codex and TeamoRouter versions are limited to 272,000 (pi.dev, TeamoRouter).
- **Modalities:** Text and image in, text out (AWS official). Third-party listings (vakati/OpenRouter, openmodel) also show file/PDF input, but official docs don't confirm it. Reasoning: yes, with adjustable effort up to `max`. Tool/function calling: yes. Structured outputs / JSON: yes (Bedrock catalog summary, callmissed).
- **Pricing (as of 2026-10-10):** Paid, per 1M tokens: $0.10 input, $0.50 output, $0.01 cached input, $0.125 cache write (OpenAI blog, Puter, llm-stats). Prompts over 272K input tokens cost $0.20 input / $0.75 output. Batch and Flex cost 50% of standard; Fast costs 2x. Bedrock us-region pricing is $0.11 / $0.55. There is no free API tier, so no free-tier privacy caveat applies.
- **Architecture:** Proprietary and closed-weights. Parameter count and MoE status are not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found. (Artificial Analysis via OpenRouter reports a different version: Terminal-Bench 4.0 **4.5%** for GPT-6 Luna (High). This is not the same benchmark as TB2.1.)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: **42.0%** (Artificial Analysis via OpenRouter, High effort). It's reported as a percentage, not an Elo; no Elo found.
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found. OpenAI says only that Luna (max) beats GPT-5.6 Sol (medium) on computer use at about a tenth of the cost, and gives no number.
  Reasoning / knowledge:
- GPQA Diamond: no verified public score found
- HLE: **32.9%** for High; **8.6%** for Non-reasoning (Artificial Analysis via OpenRouter)
- LCR / MLCR: **79.3%** AA-LCR for High; **39.7%** for Non-reasoning (Artificial Analysis via OpenRouter)
- CritPt: **15.4%** (Artificial Analysis via OpenRouter, High)
- Artificial Analysis Intelligence Index / BenchLM overall: **32.9** for High; **18.5** for Non-reasoning. Rank: no verified public rank found. BenchLM: no verified public score found. (LiveBench overall is **72.0 / #40**, from vakati-tech.) The High-effort Index and HLE values are both exactly 32.9, which may be a listing error. Check this against artificialanalysis.ai.
- Omniscience Accuracy / Hallucination Rate: **42.8% / no verified public score found**. AA lists a Non-Hallucination Rate of 15.6%, and I did not convert it into a hallucination rate.
  Coding:
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **50.3%** (Artificial Analysis via OpenRouter, High)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **66.6%** DeepSWE v1.1 at max effort. OpenAI reported this number itself (OpenAI blog; benchmark name per Lindy). Coding Index: no verified public score found.
  Long context:
- AA-LCR is 79.3% for High and 39.7% for Non-reasoning. I found no MRCR, RULER or GraphWalks results at 512K or more.

### Normalized scores (1-100)

- **Tool use: 55/100.** GDPval-AA is 42.0% (a percentage, so it can't be mapped to the Elo scale) and Terminal-Bench 4.0 is only 4.5%. The computer-use claim is OpenAI's own and has no number. Capped by the missing TB2.1, Tau3 and OSWorld scores and the very low Terminal-Bench result.
- **Reasoning: 72/100.** HLE is 32.9% (High), between the mid-tier (under 10%) and frontier (40%+) markers. AA-LCR is 79.3% and CritPt 15.4%. Capped by an AA Index of 32.9, far below the frontier marker of 60+, and by having no GPQA Diamond score.
- **Context window: 95/100.** The verified total is 1,050,000 tokens (AWS official card), which puts it in the ≥1M tier. It doesn't get 100 because there's no retrieval result at 512K or more. Codex and some routers limit it to 272K.
- **Multimodal: 65/100.** Text and image input are officially confirmed, with text-only output. PDF/file input appears only in third-party listings, so it wasn't credited. No audio or video.
- **Coding: 82/100.** DeepSWE v1.1 is 66.6% (vendor-reported, max effort), under the 74% frontier marker. SciCode is 50.3%, under the 55% marker. LiveBench overall is 72.0. Capped by the 4.5% Terminal-Bench 4.0 score and the missing SWE-bench Verified and LiveCodeBench scores.
- **Cost efficiency: 96/100.** Paid at $0.10 / $0.50 per 1M tokens, which falls between the ~$0.10/$0.20 (97-99) and ~$0.60/$2.20 (~92) markers. Cached input is $0.01. Prompts over 272K cost more.
- **Overall Score: 73.8/100.** (55 + 72 + 95 + 65 + 82) / 5 = 73.8. Best fit: cheap, high-volume, long-context summarizing, extraction and sub-agent work. Use Sol or Astra for heavy agentic or terminal tasks.

---

## Signature

- Provided by: **Claude Opus 5.5 (anthropic/claude-opus-5-5)** — 2026-10-10
- Method: Fresh public web search on 2026-10-10. Sources: OpenAI launch post, AWS Bedrock model card, OpenAI Bedrock guide, OpenRouter (showing Artificial Analysis data), TechCrunch, llm-stats, pi.dev, Puter, Lindy, vakati-tech, Classmethod and other pricing/registry pages. My search tool limit ran out before I could open artificialanalysis.ai, BenchLM, SWE-bench, LiveCodeBench or the OpenCode Zen docs directly, so I got the AA numbers second-hand through OpenRouter. These scores are my normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
