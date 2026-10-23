# GPT-5.2 Pro — findings by GPT 5.6 Luna

- Source: OpenAI/gpt-5.2-pro
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Pro
- **Short description:** OpenAI's high-compute reasoning model for difficult professional and research work. It is a distinct Pro API model, not the standard GPT-5.2 route; figures below are used only when the source identifies GPT-5.2 Pro, never when it reports GPT-5.2 Thinking.
- **Provider / access:** OpenAI Responses API (`gpt-5.2-pro`); OpenCode Zen route `opencode/gpt-5.2-pro` is also listed in the project's curated metadata. OpenRouter independently lists the exact `openai/gpt-5.2-pro` route at [openrouter.ai/openai/gpt-5.2-pro](https://openrouter.ai/openai/gpt-5.2-pro).
- **Release / knowledge:** 2025-12-11 release; 2025-08-31 knowledge cutoff ([OpenAI model docs](https://developers.openai.com/api/docs/models/gpt-5.2-pro), [OpenAI announcement](https://openai.com/index/introducing-gpt-5-2/)).
- **IDs:** `openai/gpt-5.2-pro`; OpenAI API ID `gpt-5.2-pro`. No Free ID exists on Zen; this is a paid route.
- **Context window:** 400,000 total tokens, 128,000 maximum output ([OpenAI model docs](https://developers.openai.com/api/docs/models/gpt-5.2-pro)).
- **Modalities:** text and image input; text output; reasoning; Responses API tool calls including function calling, file search, MCP, image generation, and web search ([OpenAI model docs](https://developers.openai.com/api/docs/models/gpt-5.2-pro)).
- **Pricing (as of 2026-10-23):** $21 per 1M input tokens and $168 per 1M output tokens; OpenAI lists no cached-input price for this model in its pricing table ([OpenAI model docs](https://developers.openai.com/api/docs/models/gpt-5.2-pro), [OpenAI announcement](https://openai.com/index/introducing-gpt-5-2/)). Paid only.
- **Architecture:** proprietary; parameter count and mixture details are not publicly disclosed.

### Raw benchmarks found

> Only exact GPT-5.2 Pro rows were retained. The OpenAI release page also reports many GPT-5.2 Thinking results, but those rows are not substituted for the Pro model.

Agent / tool use:

- BrowseComp: **77.9%** (OpenAI's GPT-5.2 Pro row; research evaluation, maximum available reasoning) ([OpenAI](https://openai.com/index/introducing-gpt-5-2/)).
- GDPval, wins or ties: **74.1%**; clear wins: **60.0%**; no ties: **67.6%** (OpenAI's GPT-5.2 Pro rows) ([OpenAI](https://openai.com/index/introducing-gpt-5-2/)).
- Investment banking spreadsheet tasks: **71.7%** (OpenAI internal benchmark, GPT-5.2 Pro row) ([OpenAI](https://openai.com/index/introducing-gpt-5-2/)).
- Terminal-Bench 2.1, Tau2-bench, MCP-Atlas, Toolathlon: **no verified public score found for the exact GPT-5.2 Pro ID**; the OpenAI table leaves the Pro cells blank for these rows ([OpenAI](https://openai.com/index/introducing-gpt-5-2/)).

Reasoning / knowledge:

- GPQA Diamond, no tools: **93.2%** (OpenAI's GPT-5.2 Pro row) ([OpenAI](https://openai.com/index/introducing-gpt-5-2/)).
- HLE, no tools: **36.6%**; HLE with search and Python: **50.0%** (OpenAI's GPT-5.2 Pro rows) ([OpenAI](https://openai.com/index/introducing-gpt-5-2/)).
- HMMT, February 2025, no tools: **100.0%**; AIME 2025, no tools: **100.0%** (OpenAI's GPT-5.2 Pro rows) ([OpenAI](https://openai.com/index/introducing-gpt-5-2/)).
- ARC-AGI-1 Verified: **90.5%**; ARC-AGI-2 Verified: **54.2%** at high reasoning effort (OpenAI's GPT-5.2 Pro rows) ([OpenAI](https://openai.com/index/introducing-gpt-5-2/)).
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified independent score found**. BenchLM lists GPT-5.2 Pro as unranked with **0 of 705** benchmark entries covered and says coverage is coming soon, so it is not used as a score ([BenchLM](https://benchlm.ai/models/gpt-5-2-pro)).

Coding:

- SWE-Bench Pro, SWE-bench Verified, SWE-Lancer, LiveCodeBench, SciCode, and DeepSWE: **no verified public score found for the exact GPT-5.2 Pro ID**. The OpenAI release provides GPT-5.2 Thinking values for several coding rows but leaves the GPT-5.2 Pro cells blank; those Thinking values are excluded ([OpenAI](https://openai.com/index/introducing-gpt-5-2/)).

Long context:

- **No exact GPT-5.2 Pro retrieval score found** for MRCR, RULER, or GraphWalks. The 400K context specification is verified independently by OpenAI's model page and BenchLM, but the long-context benchmark rows in OpenAI's release are for GPT-5.2 Thinking and are excluded ([OpenAI model docs](https://developers.openai.com/api/docs/models/gpt-5.2-pro), [BenchLM](https://benchlm.ai/models/gpt-5-2-pro)).

### Normalized scores (1–100)

- **Tool use: 88/100.** Exact GPT-5.2 Pro results are strong on BrowseComp (77.9%) and GDPval (74.1% wins or ties), with documented Responses API tools; the score is capped below the frontier band because no exact Terminal-Bench, Tau2, MCP-Atlas, or Toolathlon result was published.
- **Reasoning: 95/100.** GPQA Diamond 93.2%, HLE 50.0% with search and Python, 90.5% ARC-AGI-1, and perfect HMMT/AIME results place it in the frontier range; the missing exact MRCR/independent index evidence prevents a 100.
- **Context window: 82/100.** The verified 400K window falls in the methodology's 200K–500K tier; no exact Pro retrieval curve is public, and the 128K output ceiling is a practical caveat.
- **Multimodal: 65/100.** OpenAI verifies image input plus text output, which earns the image-input band; there is no audio/video input or non-text output.
- **Coding: 72/100.** OpenAI describes GPT-5.2 Pro as stronger for complex programming, but publishes no exact Pro coding score; this is a provisional mid-high score capped below the frontier band rather than importing GPT-5.2 Thinking's coding results.
- **Cost efficiency: 15/100.** The verified $21/$168 per 1M input/output price is substantially above the methodology's value-oriented reference points; it is paid only and has no free tier.
- **Overall Score: 80/100.** Mean of the five non-cost dimensions: (88 + 95 + 82 + 65 + 72) / 5 = 80.4, half-up to 80. Best fit is high-stakes reasoning and research where quality outweighs very high token cost; it is less compelling for multimodal or cost-sensitive coding workloads.

---

## Signature

- Provided by: **GPT 5.6 Luna (opencode/gpt-5.6-luna)** — 2026-10-23
- Method: independent fresh public-web research using official OpenAI model documentation and release benchmark tables, plus independent OpenRouter and BenchLM checks; scores are normalized interpretations, not official vendor scores. Exact GPT-5.2 Pro evidence was separated from GPT-5.2 Thinking and other GPT-5.x data.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
