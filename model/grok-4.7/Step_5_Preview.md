# Grok 4.7 — findings by Step 5 Preview

- Source: xAI (`grok-4.7`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** xAI's September 2026 flagship (released 2026-09-21, 40 days after Grok 4.6) — a new, larger base model with a longer RL run weighted toward multi-hour tasks, better self-verification and longer-context management, at Grok 4.6's unchanged $2/$6 price. Beats 4.6 on all seven published rows and leads the field on EEBench (electrical engineering) and the Harvey Legal Agent Benchmark; trails Fable 5.1 on the two headline coding rows (CursorBench 4.0, Terminal-Bench 4.0).
- **Provider / access:** xAI API `grok-4.7` (Responses + Chat Completions); Cursor, Grok Build, GitHub Copilot, OpenRouter `x-ai/grok-4.7`, Vercel, Cloudflare; US regional endpoint (us.api.x.ai, +10%). No OpenCode Zen Free ID found.
- **Release / knowledge:** 2026-09-21; knowledge cutoff May 2026.
- **IDs:** `grok-4.7` (xAI), `x-ai/grok-4.7` (OpenRouter).
- **Context window:** 500,000 tokens; no published text output limit (OpenRouter route: 450K max output).
- **Modalities:** Text + image in → text out. Reasoning effort low/medium/high (default)/xhigh; function calling, structured outputs, web search ($5/1K calls), X search ($5/1K posts fetched), code execution ($5/1K).
- **Pricing (as of 2026-10-09):** $2.00 / MTok input, $0.50 cached, $6.00 output below 200K prompt tokens; **at/above 200K the whole request bills at $4 / $1 / $12**; Grok 4.7 Fast (2x speed) sold only via Cursor/Grok Build at 2x rates; OpenRouter route ~20% under list ($1.60/$4.80). Note: 4.7 burns more output tokens per Intelligence-Index task than 4.6, so the unchanged sticker can still mean a higher bill.
- **Architecture:** Proprietary; xAI publishes no parameter count (pre-launch 2.1T rumors absent from the official post).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **37.6–38.0%** (xAI/Grok Build harness, xhigh; official board 37.58% ±3.54 — #12/29); independent: **28.79%** (Vals mini-swe) / **25.76%** (AA) — Fable 5.1 leads at 57.9%
- Terminal-Bench 2.1: **73.41%** (Vals Terminus-2, xhigh — ties Grok 4.6's 78.28 within noise)
- AA AutomationBench: **65.6%**; GDPval-AA: **Elo 1715 / 60.8%** (AA)
- AA-Briefcase v1.1: **Elo 1657** (vendor; Fable 5.1 1678); AA ITBench: 42.1%
- EEBench (electrical engineering): **64.0%** (vendor — field lead; Fable 5.1 56.4, GPT-5.6 Sol 39.4)
- Harvey Legal Agent Benchmark: **19.6%** (vendor — field lead; Fable 5.1 6.7, GPT-5.6 Sol 2.5%)
- Claw-Eval / ClawProBench: **no verified public score found**
- Cost per task: **$6.01** (CursorBench 4.0, xHigh, Cursor-published)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **46.4–46.5** (xhigh; #12–27 of 42–427 — 2 points above Grok 4.6)
- HLE: **43.1%** (AA, xhigh — #26/478)
- SciCode: **57.8%** (#15/296); HealthBench Professional: **56.7%** (vendor; Fable 5.1 62.1%)
- AA-Omniscience: index **32.0**, accuracy 47.4%, **hallucination rate 29.3%** (best-in-class low)
- LiveBench: **77.4** overall (xHigh); Vals Index: 54.95% (#14/33); GDP.pdf: 20.0% (AA)
- LatchBio biosafety benchmark: 62.4% (topped); HackerBench v0.3: 3.3% of risky dual-use prompts allowed through (xAI's best-calibrated safeguard claim)

Coding:

- DeepSWE v1.1: **71.0%** (vendor, high effort — behind GPT-5.6 Sol's 72.7%, ahead of Fable 5.1's 70.0%; vendor claim, not yet on the DeepSWE board)
- CursorBench 4.0: **46.3%** (xhigh; Fable 5.1 51.8% leads) — the price-performance frontier row per xAI
- SWE-Marathon v1.1: **46.0%** (#6/33); Vibe Code Bench v1.1: **86.17%** (Vals — strong)
- FrontierSWE v2: **29.5%** (#10/20); KernelBench Mega: 6.38 (#11/28); Terminal-Bench-Science: 14.3%
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: **no verified public score found** for 4.7

Long context:

- 500K window with the ≥200K whole-request repricing cliff; **no AA-LCR / MRCR number published** for Grok 4.7

### Normalized scores (1–100)

- **Tool use: 78/100.** AA AutomationBench 65.6%, GDPval-AA 60.8%/Elo 1715, AA-Briefcase 1657 and EEBench 64.0% are solidly mid-frontier; capped by Terminal-Bench 4.0 at 37.6% vendor / 25.8–28.8% independent (a ~20-point gap to Fable 5.1), CursorBench 46.3% and no published Claw-Eval or SWE-bench figures.
- **Reasoning: 84/100.** AA Intelligence Index 46.4 (xhigh, +2 over 4.6), HLE 43.1%, SciCode 57.8% and the class-low 29.3% hallucination rate are frontier-band, with LiveBench 77.4 and Vals Index 54.95% corroborating; capped by HLE ~16 points behind the Fable-5.1/Opus-5.5 leaders and GDP.pdf 20.0%.
- **Context window: 88/100.** 500,000 tokens sits in the 500K–1M band with no published output cap; the ≥200K cliff reprices the entire request 2x, and no AA-LCR/MRCR figure exists for this model, so it cannot be scored higher.
- **Multimodal: 68/100.** Text + image in → text out is the 60–70 band; no MMMU-Pro/CharXiv number was found for Grok 4.7, so it sits mid-band rather than at the top.
- **Coding: 83/100.** DeepSWE v1.1 71.0% (vendor), Vibe Code Bench 86.17% (Vals), SWE-Marathon 46.0% and TB2.1 73.4% (Vals) are strong; capped by CursorBench 46.3% vs Fable 5.1's 51.8%, Terminal-Bench 4.0 at 37.6% vendor/25.8% AA, FrontierSWE v2 29.5% and KernelBench Mega 6.38 — long-horizon terminal work is the recurring weak row.
- **Cost efficiency: 66/100.** $2/$6 per MTok is the same tier as GPT-6.1 Sol and Claude Sonnet 5 (between the methodology's $3/$15 ≈ 60 and $0.60/$2.20 ≈ 92) and beats Fable 5.1's $10/$50 by 5x on input; capped by the ≥200K whole-request cliff with no batch discount, $5/1K tool calls, and higher output-token burn per task than 4.6.
- **Overall Score: 80/100.** Best-fit recommendation: the price-performance frontier pick for long-horizon coding and knowledge work — best-in-class electrical-engineering and legal-agent scores at $2/$6; route terminal-heavy agent loops to Fable 5.1 and validate on your own harness before switching.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (xAI Grok 4.7 launch post + model card + docs, Artificial Analysis, Vals AI, BenchmarkList, The Model Gap, AIEvals, DigitalApplied, explainx, YFarmX); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.8.md`, using the same headings.
