# Agnes 3.0 Flash — findings by Step 5 Preview

- Source: Sapiens AI / Agnes 3.0 Flash (`agnes-3.0-flash`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Agnes 3.0 Flash
- **Short description:** Sapiens AI's mid-generation Flash-tier model with a 512K context, vision and PDF input, function calling and optional thinking — strong on knowledge reasoning (GPQA 92.4%) at a very low price, but marked **retired** in the catalogue, so its numbers are a historical record.
- **Provider / access:** Agnes AI API, OpenAI-compatible Chat Completions and Anthropic-compatible Messages. Catalogued as `sapiens-ai/agnes-3.0-flash` on CCHPlus and routed through AIHubMix. No OpenCode Zen ID found for this model (the live Agnes route on Zen is `agnes-2.5-flash`).
- **Release / knowledge:** released **2026-09-11** by Sapiens AI. Knowledge cutoff not published. **Status: retired** — Franklin AI marks it as retired in the catalogue and CCHPlus's price history shows the Agnes AI route still listed as Free/Free.
- **IDs:** `agnes-3.0-flash` (Agnes AI / AIHubMix / CCHPlus). No free-tier-specific ID published; CCHPlus lists the Agnes AI route itself at Free input and Free output.
- **Context window:** **512K total** per CCHPlus (several aggregators report 524,290), **65.5K max output**. Max output clears the 64K caveat threshold. No long-context retrieval percentage is published for this model beyond LCR below.
- **Modalities:** text and image in; text out. CCHPlus additionally lists **PDF input** and the capabilities vision, function calling, reasoning and structured output; `reasoning_effort` is a supported parameter (thinking is optional, unlike the always-on Agnes 2.5 Flash).
- **Pricing (as of 2026-11-11):** **$0.05 in / $0.15 out per 1M tokens** at Sapiens AI list (blended $0.07/1M; a 1M-input + 200K-output sample workload ≈ $0.080). CCHPlus lists two routes — Agnes AI at **Free / Free** and AIHubMix at $0.03 in / $0.15 out.
- **Architecture:** parameter counts, active params and training tokens are not disclosed for this model anywhere checked; proprietary, hosted.

### Raw benchmarks found

> Four measured results, from **Franklin AI's AI Benchmark** rankings, which syncs independent third-party model evaluations daily (data last changed 2026-09-24). Franklin AI explicitly notes **no Coding Index, Math Index or speed measurement** exists for this model.

Reasoning / knowledge:

- GPQA: **92.4%** (Franklin AI, independent third-party evaluation — the highest of the four results)
- HLE: **38.5%** (Franklin AI)
- LCR: **81.0%** (Franklin AI)
- SciCode: **51.6%** (Franklin AI)
- Artificial Analysis Intelligence Index: **35.5** (Franklin AI; the overall score its rankings sort by)
- MRCR / RULER / GraphWalks at 512K: no verified public score found
- CritPt: no verified public score found

Coding:

- SciCode: **51.6%** (Franklin AI) — the only measured coding number
- SWE-bench Verified / SWE-bench Pro: no verified public score found
- LiveCodeBench: no verified public score found
- Terminal-Bench: no verified public score found
- DeepSWE / Vibe Code Bench / Coding Index: **explicitly absent** — Franklin AI states no Coding Index exists yet

Agent / tool use:

- Terminal-Bench 2.1 / 4.0: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathlon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Function calling, structured output and tool orchestration are documented capabilities, not measured scores

Speed:

- No tokens/s, TTFT or latency figure published for this model (Franklin AI: no speed measurement).
- **Correction note on the site's `meta.json`:** the scaffolded `model/agnes-3.0-flash/meta.json` carries `"128K total"` context, `"Text in/out"` modalities and a `Standard pricing` note with `example.com` placeholder URLs. Every one of those is contradicted by the sources above (512K context, text+image+PDF input, $0.05/$0.15 with a Free route). This file reports the verified values; the stub is flagged for the user rather than edited, since `meta.json` is outside research-agent scope.

### Normalized scores (1–100)

- **Tool use: 55/100.** Provisional. Function calling, structured output and tool orchestration are documented and the Artificial Analysis Intelligence Index of 35.5 sits at the top of the mid band (Index 20–35 → 55–65), which is the only composite capability signal available. Capped in the mid band — and not scored higher — because there is no Terminal-Bench, Tau3, GDPval, MCP-Atlas, Toolathlon, SWE Atlas or Claw-Eval number for this ID whatsoever, and the model is retired so its agentic behaviour cannot be re-verified.
- **Reasoning: 74/100.** GPQA at 92.4% clears the 90% frontier reference and HLE at 38.5% sits just under the 40% frontier marker, which pulls this well above the mid band. Held below frontier by the Artificial Analysis Intelligence Index of 35.5 — the top of the mid band, not the 60+ frontier marker — and by LCR at 81.0%, which is far short of the 95%-at-1M frontier reference. Capped further by no CritPt and no MRCR/RULER retrieval run at the stated 512K window.
- **Context window: 85/100.** 512K total (aggregators report 524,290) lands at the bottom of the 500K–1M tier (85–94), and the 65.5K max output clears the 64K caveat threshold. Not scored higher because no retrieval percentage at that length has been measured — LCR 81.0% is the only long-context number and it is not reported at a stated window length.
- **Multimodal: 80/100.** Text and image in plus documented **PDF input**, with text out, which reaches into the "+video/PDF in" band (75–90). Not scored into the 90–100 band because there is no video input, no audio input and no non-text output.
- **Coding: 68/100.** SciCode at 51.6% sits between the mid reference (<40%) and the frontier reference (55%+), so this lands in the upper-mid band. Held down there by the complete absence of SWE-bench Verified/Pro, LiveCodeBench, Terminal-Bench, DeepSWE, Vibe Code Bench and Coding Index numbers — Franklin AI explicitly records that no Coding Index exists for this model.
- **Cost efficiency: 100/100.** A verified **$0** route exists (CCHPlus lists the Agnes AI route at Free input and Free output), which is 100 by methodology; even the paid list price of $0.05 in / $0.15 out would score ~99. Caveats are material: Franklin AI marks the model **retired**, so the free route is a historical listing rather than a live option, and the cheap rate only ever applied to a mid-tier model.
- **Overall Score: 72/100.** (55 + 74 + 85 + 80 + 68) / 5 = 72.4 → **72**. A cheap, vision-capable, long-context Flash-tier model with genuinely frontier-level knowledge reasoning — but with zero measured agentic or coding-benchmark coverage and a retired status, so it is a historical record rather than a live recommendation.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-11
- Method: public internet research (Franklin AI's AI Benchmark rankings and model page, CCHPlus model catalog and price history, CloudPrice, AI Stats, LLM List and NanoGPT pricing entries). Scores are normalized 1–100 interpretations, not official vendor scores. All four benchmark figures come from Franklin AI's sync of independent third-party evaluations and are labelled as such; no number was taken from another agent's findings file.
- Reference URLs:
  - [Agnes 3.0 Flash — Franklin AI benchmark page (Intelligence Index 35.5, GPQA 92.4%, LCR 81.0%, SciCode 51.6%, HLE 38.5%, retired status, pricing)](https://franklineh.com/ai-benchmark/agnes-3-0-flash)
  - [Agnes 3.0 Flash — CCHPlus model catalog (512K context, 65.5K output, modalities, PDF input, provider pricing)](https://cch-plus.com/models-catalog/sapiens-ai/agnes-3.0-flash)
  - [Agnes 3.0 Flash pricing & specs — CloudPrice](https://cloudprice.net/models/agnes-3-flash)
  - [Agnes 3.0 Flash price, speed and benchmarks — AI Stats ($0.05/$0.15, AA Index 35.5)](https://aistats.jonathanrreed.com/models/agnes-3-0-flash)
  - [Agnes 3.0 Flash — LLM List (524K context, two providers, $0.05/$0.15)](https://llm-list.com/m/agnes-3-0-flash)
  - [Agnes 3.0 Flash — NanoGPT pricing entry ($0.05/$0.15, 524K context)](https://metatext.io/llm/nano-gpt-agnes-3.0-flash)
