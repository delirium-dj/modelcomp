# Agnes 2.5 Flash — findings by Step 5 Preview

- Source: Sapiens AI / Agnes 2.5 Flash (`agnes-2.5-flash`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Agnes 2.5 Flash
- **Short description:** Sapiens AI's (Singapore) generally-available flash-tier text model upgraded from Agnes 2.0 Flash, aimed at everyday coding, agent workflows and tool use with a 512K context window at a very low or zero list price.
- **Provider / access:** Agnes AI API, `https://apihub.agnes-ai.com/v1` — OpenAI-compatible Chat Completions (`POST /v1/chat/completions`), Responses (`POST /v1/responses`) and Anthropic-compatible Messages (`POST /v1/messages`). Also routed through the ZenMux AI gateway as `sapiens-ai/agnes-2.5-flash`. No OpenCode Zen ID found for this model.
- **Release / knowledge:** launched 2026-07-13 per launch coverage (hands-on review published 2026-07-15); gateway listings (Phaseo, ZenMux) carry 2026-08-10 as their publish date. Knowledge cutoff not announced.
- **IDs:** `agnes-2.5-flash` (Agnes API), `sapiens-ai/agnes-2.5-flash` (ZenMux AI). No free-tier-specific ID is published — the launch statement says the Flash model itself stays free of charge rather than running as a time-limited promo; Phaseo/ZenMux list no separate free underscore variant.
- **Context window:** 512K total / 65.5K max output per the official docs table; ZenMux's routing entry reports 524,290 tokens. Max output is above the 64K caveat threshold, so no output-cap penalty.
- **Modalities:** text and image (publicly reachable `image_url`) in; text out. Thinking mode (`chat_template_kwargs.enable_thinking` / Anthropic `thinking` budget), tool calling, streaming output.
- **Pricing (as of 2026-11-11):** list $0.05 in / $0.15 out / $0.005 cached per 1M tokens; the same docs carry a trial price of $0 for input, output and cached input, and ZenMux currently serves the route at $0 in / $0 out. Agnes AI's launch statement says Flash remains free rather than becoming paid after a trial.
- **Architecture:** parameter counts, active parameters, licence and training-token totals are not disclosed anywhere checked (Phaseo lists all as "Not listed"); proprietary/hosted.

### Raw benchmarks found

> All seven rows are Sapiens AI's own internal evaluation, published by the vendor and reproduced in the 2026-07-15 hands-on review; the vendor itself labels them internal rather than independently reproduced leaderboard submissions. They are the only measured numbers found for this exact ID. No GPQA/HLE/Intelligence-Index entry exists on Artificial Analysis, BenchLM, BenchmarkList or any leaderboard checked.

Agent / tool use:

- Terminal-Bench 2.1: **62.3%** (Sapiens AI internal eval, published 2026-07-15; predecessor Agnes 2.0 Flash scored 52.5%)
- SWE Atlas — Codebase QnA: **36.5%** (same internal eval; 2.0 Flash 15.8%) — http://arxiv.org/abs/2605.08366
- SWE Atlas — Test Writing: **27.5%** (same internal eval; 2.0 Flash 13.8%)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (absent from both)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **75.6%** (Sapiens AI internal eval, published 2026-07-15; 2.0 Flash 72.4%)
- SWE-bench Pro: **50.4%** (same internal eval; 2.0 Flash 49.6%)
- SWE-bench Multilingual: **69.1%** (same internal eval; 2.0 Flash 67.3%)
- SWE Atlas — Refactoring: **29.5%** (same internal eval; 2.0 Flash 11.4%)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench / DeepSWE / Coding Index: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks retrieval figure published at 512K; the 512K figure comes from the vendor's own spec table and one gateway's routing entry, not from a measured long-context run. Marked provisional on retrieval.
- Qualitative hands-on signal only (not a score): a reviewer's three-task test — locating a manually inserted bug from symptoms, building a single-file comparison app, and adding a two-player mode across an existing multi-file project (we0.ai, 2026-07-15).

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 2.1 at 62.3% plus SWE Atlas QnA 36.5% / Test Writing 27.5%, with native tool calling and thinking mode, puts it at the top of the mid band (TB2.1 45–60% = 50–70) and short of the frontier band (TB2.1 88%+ = 90–100). Capped because there is no Tau3-Banking, GDPval-AA, Claw-Eval or Toolathon/MCP-Atlas number for this ID and every agentic figure is vendor-internal rather than independently reproduced.
- **Reasoning: 62/100.** Provisional. No GPQA Diamond, HLE, LCR/MLCR, CritPt or Artificial Analysis Intelligence Index figure exists for `agnes-2.5-flash` on any tracker checked, so this is anchored only on the coding profile (SWE-bench Verified 75.6%, Multilingual 69.1%) and deliberately held in the mid-to-upper-mid band; it is capped below frontier until a knowledge-reasoning benchmark is published for this ID.
- **Context window: 85/100.** 512K total per the official docs table (ZenMux reports 524,290), which lands at the bottom of the 500K–1M tier (85–94); max output 65.5K clears the 64K caveat. Not scored higher because no MRCR/RULER retrieval percentage at that length has been measured or published — the window is a vendor spec, not a demonstrated retrieval result.
- **Multimodal: 62/100.** Text + image in (via public image URL), text out, with documented image understanding (screenshot analysis, visual Q&A). Sits inside the "+image in" band of 60–70; no video, PDF or audio input and no non-text output, which caps it there.
- **Coding: 72/100.** SWE-bench Verified 75.6% / Multilingual 69.1% / Pro 50.4% with Terminal-Bench 2.1 62.3% is upper-mid against the mid reference (LiveCode ~80% but Vibe <10% and SciCode <40% = 65–75) and short of the frontier set (DeepSWE 74%+, TB2.1 85%+, Coding Index 70%+). The three SWE Atlas tracks (36.5 / 29.5 / 27.5%) are low and cap the score, as does the total absence of DeepSWE, LiveCodeBench, SciCode, Vibe Code Bench and Coding Index numbers, and the vendor-internal status of every figure.
- **Cost efficiency: 100/100.** A verified $0 route exists (docs trial price $0 in / $0 out / $0 cached; ZenMux serves `sapiens-ai/agnes-2.5-flash` at $0 in / $0 out), and the vendor states the free tier is permanent rather than a launch promotion — $0 = 100 per methodology. Listed paid pricing is $0.05/$0.15 with $0.005 cached, which would still score ~97–99; the caveat is quota and rate-limit friction (30/60/1,000 RPM by plan tier) rather than price.
- **Overall Score: 70/100.** (70 + 62 + 85 + 62 + 72) / 5 = 70.2 → **70**. A genuinely cheap (often free) mid-tier coding/agent model with a large spec'd context window; its ceiling is set by vendor-only benchmarks and a total absence of verified reasoning, retrieval and independent-leaderboard numbers.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-11
- Method: public internet research (official vendor docs, vendor model catalog, gateway routing pages, independent hands-on review, release-date trackers); scores are normalized 1–100 interpretations, not official vendor scores. All seven benchmark rows are Sapiens AI's own internal evaluation and are labelled as such; no figure was taken from another agent's findings file.
- Reference URLs:
  - [Agnes 2.5 Flash — official docs (context, output limit, pricing table, API)](https://wiki.agnes-ai.com/en/docs/agnes-25-flash)
  - [Agnes-2.5-Flash Review: free coding model tested on bug fixing, app building and multi-file refactoring (benchmark table + hands-on tests)](https://we0.ai/articles/agnes-2-5-flash-review-a)
  - [Agnes AI model catalog (official GitHub; model spec reference)](https://github.com/AgnesAI-Labs/AgnesAI-Models/blob/main/MODEL_CATALOG.md)
  - [Sapiens AI: Agnes 2.5 Flash on ZenMux (route, current $0 pricing, 524,290-token entry)](https://zenmux.ai/sapiens-ai/agnes-2.5-flash)
  - [Agnes-2.5-Flash on Phaseo (release date 2026-08-10, parameters not listed)](https://phaseo.app/models/sapiens-ai/agnes-2.5-flash)
  - [Agnes AI vendor post confirming the internal seven-benchmark evaluation](https://www.linkedin.com/posts/agnesaisapiens_agnesai-ai-codingai-activity-7481661387040026625-VKjJ)
  - [SWE Atlas paper (benchmark suite behind the QnA / Refactoring / Test Writing tracks)](https://arxiv.org/abs/2605.08366)
