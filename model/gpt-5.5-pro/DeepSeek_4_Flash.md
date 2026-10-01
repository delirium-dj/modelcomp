# GPT 5.5 Pro — findings by DeepSeek 4 Flash

- Source: OpenAI (`opencode/gpt-5.5-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's high-compute reasoning tier of the GPT-5.5 family, aimed at the hardest knowledge-work, research, and coding questions. A paid-only ChatGPT/API variant of GPT-5.5, not a separate architecture.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.5-pro`; API id `gpt-5.5-pro` (Responses and Chat Completions). Rolled out to Pro/Business/Enterprise ChatGPT tiers first, then the API (announcement update 2026-04-24).
- **Release / knowledge:** 2026-04-23 (OpenAI "Introducing GPT-5.5"). Knowledge cutoff not stated.
- **IDs:** `opencode/gpt-5.5-pro` (paid tier; no Free ID on Zen)
- **Context window:** ~920K (Artificial Analysis lists 922K / "920k tokens"); the GPT-5.5 API family ships a 1M-token context window, and Pro follows the same family limit — verified via OpenAI announcement and the Artificial Analysis model page.
- **Modalities:** text and image input; text output. Reasoning: yes (xhigh effort tier). Tool calls and structured/JSON output supported.
- **Pricing (as of 2026-04-23):** API $30 per 1M input tokens / $180 per 1M output tokens. Batch and Flex at half the standard API rate, Priority at 2.5x (standard GPT-5.5 rates; Pro listed separately). Paid only — no free tier.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

> Numbers below are the GPT-5.5 Pro column reported by OpenAI unless marked; cells OpenAI left blank (`-`) are noted as not reported for Pro rather than guessed.

Agent / tool use:

- BrowseComp (Pro): **90.1%** (OpenAI GPT-5.5 announcement, Professional/Tool-use table)
- MCP Atlas (GPT-5.5, Scale AI 2026-04 update): **75.3%** (Pro not reported)
- Toolathlon (GPT-5.5): **55.6%** (Pro not reported)
- OSWorld-Verified (GPT-5.5): **78.7%** (Pro not reported)
- GDPval (wins or ties, Pro): **82.3%**
- Investment Banking Modeling Tasks (Internal, Pro): **88.6%**
- Tau2-bench Telecom (GPT-5.5, no prompt tuning): **98.0%** (Pro not reported)
- No published Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA Elo / Claw-Eval figure specific to Pro.

Reasoning / knowledge:

- Humanity's Last Exam, no tools (Pro): **43.1%**
- Humanity's Last Exam, with tools (Pro): **57.2%**
- FrontierMath Tier 1–3 (Pro): **52.4%**
- FrontierMath Tier 4 (Pro): **39.6%**
- GPQA Diamond (GPT-5.5): **93.6%**; (GPT-5.4 Pro): 94.4% — Pro score not separately reported for GPT-5.5
- GeneBench (Pro): **33.2%**
- BixBench (GPT-5.5): **80.5%** (Pro not reported)
- Artificial Analysis Intelligence Index for Pro: **not publicly available** (AA model page shows N/A)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-Bench Pro, Public (GPT-5.5): **58.6%** (Pro not reported; Claude Opus 4.7 listed at 64.3%)
- Terminal-Bench 2.0 (GPT-5.5): **82.7%** (Pro not reported)
- Expert-SWE, Internal (GPT-5.5): **73.1%** (Pro not reported)
- LiveCodeBench / SciCode / AA-SciCode / Vibe Code Bench: no verified public score found
- Artificial Analysis Coding Index: OpenAI states GPT-5.5 delivers SOTA intelligence at roughly half the cost of competitive frontier coding models (no Pro-specific number)

Long context:

- OpenAI MRCR v2 8-needle 512K–1M (GPT-5.5): **74.0%** (GPT-5.4: 36.6%); Graphwalks parents 1M f1 (GPT-5.5): **58.5%** — Pro not reported
- AA-LCR for Pro: not publicly available

### Normalized scores (1–100)

- **Tool use: 94/100.** Pro tops the family on BrowseComp (90.1%), GDPval (82.3%) and internal IB modeling (88.6%); capped below 95 because dedicated agentic-harness evals (Terminal-Bench, Toolathlon) are only reported for base GPT-5.5.
- **Reasoning: 93/100.** HLE 57.2% with tools, FrontierMath T4 39.6% and GeneBench 33.2% are frontier-class; GPQA is shared at ~94% (base), and no Pro-specific AA Intelligence Index exists to anchor it higher.
- **Context window: 91/100.** ~920K verified by Artificial Analysis with the GPT-5.5 family's 1M API window; long-context retrieval (MRCR 512K–1M 74.0%) is strong but Pro-specific MRCR numbers are unpublished.
- **Multimodal: 76/100.** Text + image input, text output only (no audio/video/PDF-native generation); strong vision-in reasoning but narrower output coverage than fully multimodal rivals.
- **Coding: 93/100.** Family Terminal-Bench 2.0 82.7% and Expert-SWE 73.1% are SOTA-tier and AA rates the family's coding index SOTA at half the cost; Pro-specific coding rows are blank, capping the score.
- **Cost efficiency: 40/100.** $30/$180 per 1M is a steep premium tier (no free access); strong token efficiency partly offsets, but it is priced for high-accuracy work only.
- **Overall Score: 89.4/100.** Half-up mean of the five quality dims (94+93+91+76+93)/5 = 89.4. Best-fit recommendation: the hardest reasoning, research, and knowledge-work queries where accuracy outweighs price.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (OpenAI "Introducing GPT-5.5" announcement 2026-04-23 and the Artificial Analysis GPT-5.5 Pro model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
