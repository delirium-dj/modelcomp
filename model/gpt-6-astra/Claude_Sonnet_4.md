Now I have extensive data. Let me compile the findings file. Let me note the key data points:

**Key benchmark data collected:**

- **Terminal-Bench 4.0**: 57.9% (OpenAI), 59% (AA), 56% (AA Coding Index harness) — no TB 2.1 published
- **OSWorld 2.0**: 72.6% (OpenAI)
- **AutomationBench-AA**: 69% (AA)
- **GPQA Diamond**: 96.0% (OpenAI)
- **HLE with tools**: 57.2% (OpenAI)
- **AA Intelligence Index v4.3.2**: 53 (max) — but earlier v4.1.1 had ~61.2
- **AA Coding Agent Index**: 62 (ties with Fable 5.1)
- **DeepSWE v1.1**: 74.1% (OpenAI), 68% (AA harness)
- **FrontierCode 1.1 Main**: 53.3%
- **SWE-bench Verified / SWE-Pro**: not published
- **LiveCodeBench**: not published
- **SciCode**: included in AA index but no standalone score published
- **Context**: 1,050,000 tokens; MRCR v2 8-needle: 100% at 256K-512K, 96.3% at 512K-1M
- **Multimodal**: text + image in, text out
- **Pricing**: $10 input / $50 output / $1 cached per 1M tokens
- **BenchLM**: 88.7/100, #1 of 194
- **Hallucination rate**: 51% (AA-Omniscience at max effort, down from 92%)
- **Agents' Last Exam**: 59.3%
- **Knowledge cutoff**: April 30, 2026
- **Release**: September 3, 2026

---

# GPT-6 Astra — findings by Claude (anthropic/claude-sonnet-4-20250514)

- Source: OpenAI / `gpt-6-astra`

- Date: 2026-09-25 (UTC)

- Overview and scoring methodology: `../../model-comparison.md`

- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra (no free tier; paid API and ChatGPT Plus/Pro/Enterprise)

- **Short description:** OpenAI's flagship frontier model, described as "the world's most intelligent and aligned model," state-of-the-art on computer use, browsing, software engineering, cybersecurity, science, and professional work. Successor to GPT-5.6 Sol as the top model for reasoning, computer use, and agentic work.

- **Provider / access:** Available in ChatGPT paid plans, the OpenAI API, Microsoft Foundry, Amazon Bedrock, and GitHub Copilot. Also available via OpenRouter at `openai/gpt-6-astra`. Uses Chat Completions and Responses API. API ID: `gpt-6-astra`. No Free tier on OpenCode Zen found.

- **Release / knowledge:** Released as a limited preview on September 3, 2026. Knowledge cutoff April 30, 2026.

- **IDs:** `openai/gpt-6-astra` (state explicitly: no verified Free ID on Zen)

- **Context window:** 1,050,000 context window; 128,000 max output tokens. Verified via OpenAI API docs and MRCR v2 retrieval testing at 512K-1M range.

- **Modalities:** Multimodal — text and image input; text output. Reasoning: yes (reasoning token support with multiple effort levels). Tool calls: yes (computer use, browsing, function calling). JSON mode: yes.

- **Pricing (as of 2026-09-25):** Input $10.00 / Output $50.00 / Cached input $1.00 / Cache writes $12.50 per 1M tokens. Prompts with more than 272K input tokens are priced at 2x input and cache rates and 1.5x output. Batch and Flex are priced at 50% of Standard rates. Paid only; no free tier.

- **Architecture:** Proprietary; OpenAI has not disclosed the model size or parameter count. Trained on over 100,000 GPUs at the Stargate site in Texas; first release where earlier OpenAI models supervised the training.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found — OpenAI did not publish Terminal-Bench 2.x for Astra.

- Terminal-Bench 4.0: **57.9%** (OpenAI vendor-reported; Sol 37.3%); 59% per Artificial Analysis (ahead of Fable 5.1 at 52%)

- Tau3-Banking / Tau2-Bench: no verified public score found

- GDPval-AA: no verified public Elo score found (included in AA Index aggregate but standalone value not published in results)

- Claw-Eval / ClawProBench: no verified public score found

- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: SWE-Atlas-QnA 62% (vs Sol 54%), per Artificial Analysis Coding Agent Index breakdown

- OSWorld 2.0: **72.6%** (OpenAI; ~47% less time per task than Sol at 65.7%)

- AutomationBench-AA: **69%** (Artificial Analysis implementation)

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (OpenAI; highest published score; vs Gemini 3.8 Flash 95.3%, Sol 94.6%)

- HLE (with tools): **57.2%** (OpenAI; behind Fable 5.1 at 65.0% and Opus 5 at 63.6%)

- Agents' Last Exam: **59.3%** (OpenAI; ahead of Opus 5 at 55.5% and Sol at 53.6%)

- LCR / MLCR: no verified public score found (AA-LCR v1.1 is a component of the Index but no standalone value published)

- CritPt: no verified public score found (component of AA Index, standalone unpublished)

- Artificial Analysis Intelligence Index v4.3.2: **53** (max effort; ties for first with Fable 5.1)

- BenchLM overall: **88.7 / #1** (of 194 models)

- Omniscience Accuracy / Hallucination Rate: Hallucination rate 51% at max effort (down from 92% for Sol); accuracy improved ~4 points (AA-Omniscience). Exact accuracy % not published as standalone.

Coding:

- SWE-bench Verified / SWE-Pro: No SWE-Bench Pro published by OpenAI for Astra. No verified SWE-bench Verified score found.

- DeepSWE v1.1: **74.1%** (OpenAI; vs Sol 72.7%); 68% per Artificial Analysis harness (vs Sol 72%)

- FrontierCode 1.1 Main: **53.3%** (OpenAI; vs Fable 5 53.5%, Opus 5 53.4% — effectively a tie)

- LiveCodeBench: no verified public score found

- SciCode / AA-SciCode: no standalone public score found (component of AA Index)

- Vibe Code Bench: no verified public score found

- AA Coding Agent Index: **62** (Codex harness; ties Fable 5.1 in Claude Code at 62; ahead of Opus 5 at 60, Sol at 55)

Long context:

- MRCR v2 8-needle: 100% at 256K-512K; 96.3% at 512K-1M (vs Sol 91.5% and 73.8% respectively). Needle-in-a-haystack across ~1M tokens: 96% accuracy (vs Sol 74%).

### Normalized scores (1-100)

- **Tool use: 80/100.** Terminal-Bench v4.0 at 59% leads the field, OSWorld 2.0 at 72.6%, and AutomationBench-AA at 69%. No TB 2.1 score published; no Tau3-Banking score. Strong agent/computer-use performance but missing frontier TB 2.1 ≥88% needed for 90+. Terminal-Bench 4.0 is a different benchmark version. Capped by absent TB 2.1 and Tau3 verification.

- **Reasoning: 82/100.** GPQA Diamond at 96.0% is the highest published score, placing it well above the 90%+ frontier threshold for that benchmark. However, HLE at 57.2% trails Fable 5.1 (65.0%) and is above the 40%+ frontier line. AA Index at 53 (max) is moderate. The very high GPQA and above-frontier HLE push upward, but the moderate AA Index score and loss on HLE vs. competitors cap it.

- **Context window: 97/100.** 1,050,000 token context window puts this in the ≥1M tier (95-100). MRCR v2 8-needle retrieval at 96.3% in the 512K-1M band is very strong but just below the 98%+ threshold at 512K+ needed for 100. Mapped to 97.

- **Multimodal: 65/100.** Text and image input; text output only. No video, audio, or PDF-native input reported; no non-text output. Fits the "+image in = 60-70" tier. Placed at 65 for image-in without broader modality coverage.

- **Coding: 80/100.** DeepSWE v1.1 at 74.1% (vendor) reaches the 74%+ frontier threshold, but AA's independent harness measured only 68%. FrontierCode 1.1 Main at 53.3% is a three-way tie with competitors. Terminal-Bench 4.0 at 57.7% (not TB 2.1 which would need 85%+). No SWE-bench Verified, LiveCodeBench, or SciCode standalone scores. Vendor DeepSWE hits frontier, but independent coding scores are strong-but-not-dominant. Capped by lack of verified SWE-bench and independent DeepSWE regression.

- **Cost efficiency: 30/100.** $10/$50 per 1M input/output tokens. This maps directly to the $10/$50 tier = ~30 per the methodology. Astra is cost-efficient per task due to low token usage (~40% of Fable 5.1's cost per task), but per-token pricing is at the high end.

- **Overall Score: 80.8/100.** Mean of (80 + 82 + 97 + 65 + 80) / 5 = 404 / 5 = 80.8. Best-fit recommendation: frontier-class model for agentic computer use, long-context professional workflows, cybersecurity, and science; overkill and expensive for simple chat or short-context tasks where smaller models match or exceed it on independent indices.

---

## Signature

- Provided by: **Claude (anthropic/claude-sonnet-4-20250514)** — 2026-09-25

- Method: public internet research across OpenAI official blog/API docs, Artificial Analysis, BenchLM, Vellum, DataCamp, MindStudio, Emergent.sh, Digikestra, OpenRouter, Wikipedia, Axios, Al Jazeera, CNBC, Yotta Labs, and the OpenAI System Card; scores are normalized 1-100 interpretations per the provided methodology rubric, not official vendor scores. All raw numbers are cited to source. Where independent and vendor scores diverge, both are noted.

- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
