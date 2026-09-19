# GPT-6 Astra — findings by Ox Alpha

- Source: OpenAI (`gpt-6-astra`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's most capable model, built for the hardest end-to-end work: complex reasoning, coding, computer use, research, and document creation. Flagship of the GPT-6 line, positioned above GPT-5.6 Sol/Terra.
- **Provider / access:** OpenAI API `gpt-6-astra` (Responses API recommended; tool calling requires Responses, Chat Completions also served). Available on the OpenAI Platform; not offered on OpenCode Zen free tier.
- **Release / knowledge:** Listed as default flagship model as of 2026-09 (per platform docs); knowledge cutoff April 30, 2026.
- **IDs:** `gpt-6-astra` (state explicitly: no Free ID exists — OpenAI free tier is "Not supported" for this model).
- **Context window:** 1,050,000 input tokens / 128,000 max output tokens (verified from official OpenAI model page, 2026-09). Requests over 272K input billed at 2x input / 1.5x output.
- **Modalities:** Text + image in; text out (no audio/video). Reasoning with effort levels `low`/`medium`/`high`/`xhigh`/`max` (`none` unsupported). Function calling, structured outputs/JSON mode, streaming, async tool calling, mid-turn steering, multi-agent orchestration, computer use, hosted shell, apply patch, MCP, web search, file search, code interpreter, skills, tool search, prompt caching, compaction, pro mode.
- **Pricing (as of 2026-09):** $10.00 in / $50.00 out per 1M tokens; cached input $1.00; cache writes $12.50 (1.25x input rate). Batch and Flex at 50% of standard. Fast mode 2x (unavailable with EU data residency). No free tier.
- **Architecture:** Proprietary, closed weights. Parameter counts not disclosed. Reasoning model with misalignment monitoring safeguards.

### Raw benchmarks found

> OpenAI's model guide describes qualitative positioning ("state-of-the-art performance in computer use, browsing, software engineering, science, and professional work"; "stronger results while using substantially fewer output tokens — lower estimated API cost per task than earlier models despite higher per-token pricing"). Artificial Analysis pages were fetched but do not expose per-model raw values to non-JS fetches. Third-party numbers below come from Google's Gemini 3.8 Flash model card comparison table (which includes GPT-5.6-class models, not Astra itself).

Agent / tool use:

- Terminal-Bench 4.0: no verified public score found for Astra itself (GPT-5.6 Sol proxy: 37.3%, Google model card)
- OSWorld-2.0 (agentic computer use): no verified public score found for Astra (GPT-5.6 Sol proxy: 62.6%, Google model card; OpenAI describes Astra as SOTA at computer use)
- GDPval-AA v2: no verified public score found for Astra (GPT-5.6 Sol proxy: Elo 1710, Google model card)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- HLE: no verified public score found for Astra (GPT-5.6 Sol proxy: 54.5% HLE-Verified, Google model card)
- GPQA Diamond: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found (page requires JS; value not exposed)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found (OpenAI guide claims SOTA software engineering qualitatively)
- DeepSWE v1.1: no verified public score found for Astra (GPT-5.6 Sol proxy: 72.7%, GPT-5.6 Terra: 69.6%, Google model card)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- no long-context retrieval reported (1.05M window advertised; no MRCR/RULER/GraphWalks value found for Astra)

### Normalized scores (1–100)

- **Tool use: 93/100.** Broadest first-party tool surface found in this research cycle (computer use, hosted shell, web/file search, code interpreter, MCP, skills, async tools, mid-turn steering) plus OpenAI's explicit SOTA computer-use claim; capped by absence of verified numeric agentic benchmarks to substantiate a top-of-scale score.
- **Reasoning: 92/100.** OpenAI positions Astra as its most intelligent model ever with SOTA science/professional-work results and `max` reasoning effort; capped because every concrete reasoning benchmark number remains unverified publicly.
- **Context window: 90/100.** 1.05M input + 128K output is the largest verified window among proprietary frontier models in this comparison (beats Gemini 3.8 Flash's 1M/64K); capped slightly by the 2x pricing above 272K tokens and no public retrieval benchmark.
- **Multimodal: 55/100.** Image + text input only, text output — no audio or video in, no native image generation; well above text-only (15) but far below full-coverage multimodal models.
- **Coding: 92/100.** Qualitative SOTA software-engineering positioning above GPT-5.6 Sol (DeepSWE 72.7% proxy) with advanced coding-specific tools (apply patch, hosted shell, programmatic tool calling); capped by missing verified public coding benchmark scores.
- **Cost efficiency: 20/100.** $10/$50 per 1M is among the most expensive pricing in this cohort, with 2x surcharges past 272K input; no free tier at all (rate-limit table: "Free — Not supported").
- **Overall Score: 84/100.** Mean of the five non-cost dims (93+92+90+55+92)/5 = 84.4. Best fit: frontier agentic work — long-horizon coding, computer use, and research automation — where per-task quality outweighs token price.

---

## Signature

- Provided by: **Ox Alpha (ox-alpha)** — 2026-09-19
- Method: public internet research (official OpenAI platform docs/model page + Google model-card comparison table; Artificial Analysis pages fetched but JS-gated); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
