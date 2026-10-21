# Grok Build 0.1 — findings by MiniMax M3.1 Flash

- Source: xAI (Grok Build 0.1, `0616` snapshot), `grok-build-0.1`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** xAI's fast coding beta (April–May 2026) — a 256K-context, 100+ tok/s agentic-coding model with tool calling and MCP support, superseded by Grok 4.5/4.7; it is the renamed successor of the retired `grok-code-fast-1` alias, and the Artificial Analysis "0616" snapshot scored GPQA 89.5% and Terminal-Bench 2.1 52.06%.
- **Provider / access:** xAI first-party API (`grok-build-0.1` — xAI's docs list exactly this one name, plus the aliases `grok-code-fast-1`, `grok-code-fast`, `grok-code-fast-1-0825`), OpenRouter `x-ai/grok-build-0.1`, OpenCode Zen `opencode/grok-build-0.1` (**$1.00/M in, $2.00/M out, $0.20 cached**), Vercel AI Gateway.
- **Release / knowledge:** Grok Build CLI **2026-05-14**; API public beta **2026-05-29**; an unannounced "0616" snapshot was briefly reachable mid-June 2026 (AA records release date 2026-06-16 and marks it deprecated in favour of Grok 4.5). Knowledge cutoff not published.
- **IDs:** `grok-build-0.1` (xAI API), `x-ai/grok-build-0.1` (OpenRouter), `grok-build-0-1-0616` / `grok-build-0-1-06-16` (Artificial Analysis slugs — **not** xAI API ids).
- **Context window:** **256,000** tokens (AA JSON; AA's FAQ prose says "260k" — internal inconsistency), max output 230,400.
- **Modalities:** text and image in; text out; reasoning; function calling; structured outputs; no batch API; regions us-east-1 / us-west-2.
- **Pricing (as of 2026-10-20):** **$1.00/M in, $0.20/M cached, $2.00/M out** under a 200K prompt; **$2.00/$0.40/$4.00** at 200K or more (the whole request bills at the higher rate). Zen matches xAI's list price; OpenRouter adds $0.005/M for web search.
- **Architecture:** proprietary; xAI publishes no parameter count.

### Raw benchmarks found

> The AA measurement of the 0616 snapshot, plus Kilo Code's official Terminal-Bench run and a few third-party rows. **The widely quoted 70.8% SWE-bench Verified is inherited from the retired `grok-code-fast-1` and was never measured for Grok Build 0.1.**

Agent / tool use:

- Terminal-Bench 2.1: **52.06%** (AA, 0616 snapshot) · Terminal-Bench 2.0: **50.6%** at **$30.70/attempt** (Kilo Code official eval) · Terminal-Bench Hard: no verified public score found
- Tau3-Banking: **13.4%** (AA) · GDPval-AA: **1066.93 Elo / 28.3% normalized** (AA) · Gert Labs: **49.15%** (BenchLM)
- PinchBench (OpenClaw tasks): **88.9%**, #8 of 50, $20.58/run (kilo.ai) · Vibe Code Bench v1.1: **13.3%** (BenchmarkList) · LiveBench: **69.6%** · KernelBench Hard: **0.0% pass rate** (BenchmarkList)
- Tau2-bench / MCP-Atlas / OSWorld / AutomationBench: no verified public score found for Grok Build 0.1

Reasoning / knowledge:

- GPQA Diamond: **89.5%** (AA 0616 snapshot) · HLE: **38.3%** (AA) · MMMU-Pro: **76.5%** (AA) · AA-LCR: **74.7%** (AA) · CritPt: **9.14%** (AA)
- Artificial Analysis Intelligence Index: **27.17 (estimated)**, #107/706 — an earlier AA v4.1 snapshot of the same 0616 model reported **39.80** (methodology change; both cited)
- Omniscience Index / Accuracy / Hallucination Rate: **6.37 / 51.5% / 93.1%** (AA) — a very high hallucination rate for the class
- Output speed: **104.4 tok/s** (AA), TTFT 1.39s

Coding:

- SWE-bench Verified: **no verified public score for Grok Build 0.1** — the 70.8% figure in circulation belongs to the retired `grok-code-fast-1` lineage
- LiveCodeBench: no verified public score for Grok Build 0.1 (the 62.0% Vals figure belongs to `grok-code-fast-1`)
- ObviousBench answer-pass³: **99.3%** · DuelLab GameBench 2: **39.5** (BenchmarkList)

Long context:

- No MRCR / RULER measurement published for Grok Build 0.1.

### Normalized scores (1–100)

- **Tool use: 58/100.** Terminal-Bench 2.0 50.6% / 2.1 52.06%, PinchBench 88.9% and Gert Labs 49.2% are mid-band, but τ³-Banking 13.4%, GDPval-AA 1067 (28.3% normalized) and a $30.70/attempt Terminal-Bench cost cap the score.
- **Reasoning: 72/100.** GPQA 89.5%, MMMU-Pro 76.5%, HLE 38.3% and AA-LCR 74.7% are strong, capped by an AA Intelligence Index of 27.2 and a 93.1% hallucination rate.
- **Context window: 68/100.** 256,000 tokens is a 200K–500K window with no published retrieval measurement.
- **Multimodal: 65/100.** Text and image input with text output — the "+image in" band.
- **Coding: 50/100.** No SWE-bench, LiveCodeBench or DeepSWE figure was ever measured for this model; the only coding signals are Terminal-Bench ~51%, Vibe Code Bench 13.3% and KernelBench Hard at 0% pass rate.
- **Cost efficiency: 91/100.** $1.00/M in and $2.00/M out (cached $0.20) is a mid-frontier price band, and it doubles past 200K prompts.
- **Overall Score: 63/100.** Mean of the five quality dims = (58 + 72 + 68 + 65 + 50) / 5 = 62.6 → **63**. Best fit: fast agentic coding loops while it lasts — xAI now recommends Grok 4.7 for code, and Grok Build 0.1 is deprecated on Artificial Analysis.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (xAI developer docs and migration guide, xAI blog, Artificial Analysis, BenchLM, Kilo Code and BenchmarkList evals, models.dev, OpenRouter API, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.7.md`, using the same headings.
