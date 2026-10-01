# GPT-5.4 Mini — findings by Qwen 3.8 27B

- Source: OpenAI/GPT-5.4-mini
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Mini
- **Short description:** OpenAI's mid-tier "mini" model of the GPT-5.4 family (released a week after GPT-5.4 / GPT-5.4 Pro), marketed as "our strongest mini model yet for coding, computer use, and subagents."
- **Provider / access:** OpenCode Zen `opencode/gpt-5.4-mini`; OpenAI API `gpt-5.4-mini` (first-party; Responses API, Chat Completions in beta). Artificial Analysis notes it is deprecated as of this writing, superseded by GPT-5.6 Terra.
- **Release / knowledge:** Released 2026-03-17 (OpenAI API changelog + AA FAQ); knowledge cutoff 2025-08-31.
- **IDs:** `gpt-5.4-mini`, pinned snapshot `gpt-5.4-mini-2026-03-17`; `opencode/gpt-5.4-mini` on Zen.
- **Context window:** 400K total; 272K input / 128K output (verified from OpenAI docs model card; meta.json's "128K total" is a stale placeholder).
- **Modalities:** text + image in; text out; reasoning effort none/low/medium/high/xhigh; tool calls incl. `computer_use`, `tool_search`, `hosted_shell`, `skills`; JSON mode supported.
- **Pricing (as of 2026-09-30):** input $0.75 / output $4.50 / cached input $0.075 per 1M (OpenAI docs); 90% cache discount per AA.
- **Architecture:** proprietary.

### Raw benchmarks found

> Verified via public web research: OpenAI docs model card + API changelog, OpenAI "Introducing GPT-5.4" post (covers GPT-5.4 and GPT-5.4 Pro only), Artificial Analysis model page. No vendor benchmark table specific to the mini tier was found; OpenAI's launch post benchmarks only cover GPT-5.4 and GPT-5.4 Pro.

Agent / tool use:

- Tau2-Bench (Telecom / Retail): no verified public score found for GPT-5.4 mini specifically
- SWE-bench Verified / SWE-Bench Pro: no verified public score found for GPT-5.4 mini specifically
- Terminal-Bench 2.0 / 2.1: no verified public score found for GPT-5.4 mini specifically
- MCP Atlas / Toolathlon: no verified public score found for GPT-5.4 mini specifically
- OpenAI docs positioning: "our strongest mini model yet for coding, computer use, and subagents"; supports `computer_use`, `tool_search`, `hosted_shell`, and `skills` tools (OpenAI docs)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index (xhigh): **24**, rank #127/224 — below the price-tier median of 26; model flagged deprecated (GPT-5.6 Terra is newer) (Artificial Analysis, AA II v4.3.2 = 10 evals incl. Terminal-Bench 4.0, GDPval-AA, HLE, SciCode, AA-Omniscience)
- GPQA Diamond: no verified public score found for GPT-5.4 mini specifically
- HLE: no verified public score found for GPT-5.4 mini specifically
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found for GPT-5.4 mini specifically
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found (SciCode is inside the AA II composite above)
- OpenAI positions it as its strongest mini for coding (docs); no independent coding-table numbers located

Long context:

- No 400K long-context retrieval reported for GPT-5.4 mini (flagship GPT-5.4 MRCRv2 / Graphwalks results are not representative of the mini tier)

Supplementary measured data (Artificial Analysis, OpenAI first-party API):

- Output speed: **216.3 tokens/s** (#6/224, "notably fast"); TTFT 122.03 s
- Cost per AA Intelligence Index task: **$0.45** (#20/224)
- Verbosity: **230M** output tokens over the Intelligence Index run (price-tier median 81M) — very verbose

### Normalized scores (1–100)

- **Tool use: 68/100.** No direct tool-use benchmark numbers found for the mini tier; xhigh reasoning plus `computer_use`/`tool_search`/subagent tooling supports a solid mid-band, capped by the absence of any independent tool benchmark and AA II sitting below its price-tier median.
- **Reasoning: 68/100.** AA Intelligence Index 24 (xhigh), marginally below the price-tier median of 26 and in line with GPT-5.1 High (25); extreme verbosity (230M vs 81M median tokens) signals deep but inefficient reasoning.
- **Context window: 72/100.** 400K total (272K input / 128K output) sits in the 65–84 band per methodology; no measured retrieval score for the mini tier found to push it higher.
- **Multimodal: 65/100.** Text + image input, text-only output; no verified video or audio support; mid-band for a standard vision-capable API model.
- **Coding: 66/100.** OpenAI's "strongest mini model yet for coding" claim and subagent positioning are backed only by docs; no SWE-bench/Terminal-Bench mini-tier numbers found, and AA II (24) is below average, capping the score.
- **Cost efficiency: 78/100.** $0.75/$4.50 per 1M with a 90% cache discount and $0.45 per AA task lands well under the ~$3/$15 ≈ 60 anchor; strong value for its tier.
- **Overall Score: 67.8/100.** Mean of 68, 68, 72, 65, 66 (Cost excluded per v4 formula). Fast, cheap workhorse for high-volume coding, computer-use, and subagent loops where flagship GPT-5.4/5.5 quality is not required.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-10-01
- Method: public internet research (OpenAI docs model card + API changelog, OpenAI "Introducing GPT-5.4" launch post, Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.6.md`, using the same headings.
