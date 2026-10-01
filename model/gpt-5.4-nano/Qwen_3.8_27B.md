# GPT-5.4 Nano — findings by Qwen 3.8 27B

- Source: OpenAI/GPT-5.4-nano
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Nano
- **Short description:** OpenAI's cheapest GPT-5.4-class model, designed for "simple high-volume tasks" such as classification, data extraction, ranking, and sub-agents.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.4-nano`; OpenAI API `gpt-5.4-nano` (Chat Completions + Responses + Batch all supported). Artificial Analysis flags it deprecated, superseded by GPT-5.6 Luna.
- **Release / knowledge:** Released 2026-03-17 (OpenAI API changelog + AA FAQ); knowledge cutoff 2025-08-31.
- **IDs:** `gpt-5.4-nano`, pinned snapshot `gpt-5.4-nano-2026-03-17`; `opencode/gpt-5.4-nano` on Zen.
- **Context window:** 400K total; 272K input / 128K output (verified from OpenAI docs model card; meta.json's "128K total" is a stale placeholder).
- **Modalities:** text + image in; text out; reasoning effort none (default)/low/medium/high/xhigh; tool calls incl. `function_calling`, `web_search`, `file_search`, `code_interpreter`, `hosted_shell`, `apply_patch`, `skills`, `mcp`; JSON mode (structured outputs) supported.
- **Pricing (as of 2026-09-30):** input $0.20 / output $1.25 / cached input $0.02 per 1M (OpenAI docs); 90% cache discount per AA. Regional-processing endpoints carry a 10% uplift.
- **Architecture:** proprietary.

### Raw benchmarks found

> Verified via public web research: OpenAI docs model card + API changelog, OpenAI "Introducing GPT-5.4" launch post (covers GPT-5.4 and GPT-5.4 Pro only), Artificial Analysis model page. No vendor benchmark table specific to the nano tier was found.

Agent / tool use:

- Tau2-Bench (Telecom / Retail): no verified public score found for GPT-5.4 nano specifically
- SWE-bench Verified / SWE-Bench Pro: no verified public score found for GPT-5.4 nano specifically
- Terminal-Bench 2.0 / 2.1: no verified public score found for GPT-5.4 nano specifically
- MCP Atlas / Toolathlon: no verified public score found for GPT-5.4 nano specifically
- OpenAI docs positioning: designed for classification, data extraction, ranking, and sub-agents; subagent-friendly tool set (`hosted_shell`, `apply_patch`, `skills`, `mcp`)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index (xhigh): **21**, rank #42/175 — well above the price-tier median of 12 (AA calls it "among the leading models in intelligence" for its price class); model flagged deprecated (GPT-5.6 Luna is newer) (Artificial Analysis, AA II v4.3.2 = 10 evals incl. Terminal-Bench 4.0, GDPval-AA, HLE, SciCode, AA-Omniscience)
- GPQA Diamond: no verified public score found for GPT-5.4 nano specifically
- HLE: no verified public score found for GPT-5.4 nano specifically
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found for GPT-5.4 nano specifically
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found (SciCode is inside the AA II composite above)
- OpenAI positions it for high-volume subagent coding loops (docs); no independent coding-table numbers located

Long context:

- No 400K long-context retrieval reported for GPT-5.4 nano (flagship GPT-5.4 MRCRv2 / Graphwalks results are not representative of the nano tier)

Supplementary measured data (Artificial Analysis, OpenAI first-party API):

- Output speed: **163.5 tokens/s** (#31/175, "notably fast"); TTFT 86.00 s
- Cost per AA Intelligence Index task: **$0.18** (#39/175)
- Verbosity: **190M** output tokens over the Intelligence Index run (price-tier median 92M) — very verbose

### Normalized scores (1–100)

- **Tool use: 62/100.** No direct tool-use benchmark numbers found for the nano tier; strong subagent positioning with `hosted_shell`/`apply_patch`/`skills`/`mcp` tooling, but AA II (21) leaves it behind the mini tier for agentic work — capped by absence of independent tool benchmarks.
- **Reasoning: 62/100.** AA Intelligence Index 21 (xhigh), well above its price-tier median (12) but below GPT-5.4 mini (24) and GPT-5.1 High (25); extreme verbosity (190M vs 92M median tokens) indicates deep, inefficient reasoning.
- **Context window: 70/100.** 400K total (272K input / 128K output) sits in the 65–84 band per methodology; no measured retrieval score for the nano tier found to push it higher.
- **Multimodal: 62/100.** Text + image input, text-only output; no verified video or audio support; mid-band for a standard vision-capable API model.
- **Coding: 60/100.** Documented for high-volume classification/extraction/ranking and subagent loops with `apply_patch`/`hosted_shell`; no SWE-bench or Terminal-Bench nano-tier numbers found, and overall AA II (21) is a step below the mini tier.
- **Cost efficiency: 90/100.** $0.20/$1.25 per 1M with 90% cache discount and $0.18 per AA task is among the cheapest GPT-5.4-class options — far below the ~$3/$15 ≈ 60 anchor.
- **Overall Score: 63.2/100.** Mean of 62, 62, 70, 62, 60 (Cost excluded per v4 formula). Cheapest GPT-5.4-class workhorse: right pick for high-volume classification, extraction, and cheap subagent loops where frontier accuracy is not required.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-10-01
- Method: public internet research (OpenAI docs model card + API changelog, OpenAI "Introducing GPT-5.4" launch post, Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.6.md`, using the same headings.
