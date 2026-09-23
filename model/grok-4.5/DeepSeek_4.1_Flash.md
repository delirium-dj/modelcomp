# Grok 4.5 — findings by DeepSeek 4.1 Flash

- Source: xAI (SpaceXAI)/Grok 4.5 (`grok-4.5`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's coding-and-engineering-focused reasoning model ("trained in SpaceXAI's data centers in Memphis with new datasets spanning science, engineering, and math"), released 2026-07-08. A separate ID from Grok 4.6/4.7 and from the Grok 4.20/4.1 Fast lines; not an alias.
- **Provider / access:** xAI (SpaceXAI) API — model name `grok-4.5`, aliases `grok-4.5-latest` and `grok-build-latest`; regions us-east-1/us-west-2; function calling and structured outputs; Batch API not supported. OpenCode Zen route `opencode/grok-4.5`; OpenRouter `x-ai/grok-4.5`.
- **Release / knowledge:** 2026-07-08 (xAI docs as tracked by evals.report, OpenRouter and Model Beat). Knowledge cutoff not published on the pages checked.
- **IDs:** `x-ai/grok-4.5` (aliases `grok-4.5-latest`, `grok-build-latest`); `opencode/grok-4.5` (Zen). No Free ID verified → cost scored on paid pricing.
- **Context window:** 500,000 tokens (xAI docs); max output not published on the page checked; requests above the 200K window are charged at higher rates.
- **Modalities:** text + image in → text out (xAI docs: "Text, Image → Text"; Model Beat additionally lists file input); reasoning yes with efforts low/medium/high/xhigh (default high); function calling; structured outputs.
- **Pricing (as of 2026-09-23):** $2.00 in / $6.00 out per 1M tokens; cached input $0.30 per 1M; regional and >200K-context surcharges apply.
- **Architecture:** proprietary, no open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.3%** task success (verified, evals.report)
- Tau3-Banking: **no verified public score found**; τ²-bench/Tau2: **no verified public score found**
- GDPval-AA: **43.5%** (Artificial Analysis via OpenRouter — competitive percentage form, not the Elo scale used elsewhere)
- APEX (multi-step agentic): **56.2%** (Model Beat / Epoch AI, revised up from 34.2% on 2026-09-22); SWE-Marathon **29.0%** resolution (verified, evals.report)
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: **no verified public score found**
- AA Agentic Index **41.2**; Epoch AI Agentic percentile **83rd**

Reasoning / knowledge:

- GPQA Diamond: **93.1%** (Artificial Analysis via OpenRouter) / **93.4%** (Model Beat–Epoch AI row)
- HLE: **42.7%** (AA and Model Beat agree)
- LCR / MLCR: **AA-LCR 79.3%** (AA); no MRCR/RULER row found
- CritPt: **15.4%** (AA via OpenRouter)
- Artificial Analysis Intelligence Index **38.8** (AA); Epoch AI Intelligence percentile **76th**
- Omniscience / hallucination: AA-Omniscience accuracy **51.5%**, non-hallucination rate **45.9%**; SimpleQA Verified **48.3%** (Model Beat, revised down from 53.5%); SimpleBench **70.0%**; ARC-AGI-1 **85.67%**, ARC-AGI-2 **52.64%** (official, evals.report); AIME 2024/2025 **97.8%**

Coding:

- SWE-bench Verified: **no verified public score found**
- SWE-bench Pro: **64.7%** resolved (verified, evals.report)
- DeepSWE: **no verified public score found**; FrontierCode **42.4%** weighted (official, evals.report)
- LiveCodeBench: **no verified public score found**; SciCode **55.0%** (AA and Model Beat agree); WeirdML **46.4%**
- AA Coding Index **72.4**; Epoch AI Coding percentile **80th**; WebDev Arena **1555**; Design Arena Elos 1208–1291 across app/UI/game categories (verified, OpenRouter)

Long context:

- AA-LCR 79.3% is the only long-context retrieval signal found; no 500K-retention (MRCR/RULER) score is published.

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 83.3% is close to the 88%+ frontier band with APEX 56.2% and AA Agentic Index 41.2 backing it up; capped because Tau3-Banking/τ² and every Claw/MCP harness score was missing, and GDPval-AA is published only as a 43.5% preference figure rather than Elo.
- **Reasoning: 88/100.** GPQA Diamond 93.1–93.4%, HLE 42.7% and AIME 97.8% are frontier-grade maths/science numbers; capped by AA Intelligence Index 38.8 (frontier ref 60+) and CritPt 15.4%.
- **Context window: 88/100.** 500K lands in the 500K–1M band (85–94) — just under the 1M tier that earns 95+ — and above-200K requests are surcharged.
- **Multimodal: 68/100.** Text + image (plus file) input with text-only output → bottom of the "+image in = 60–70" band; no audio/video input and no verified vision benchmark for this ID.
- **Coding: 88/100.** AA Coding Index 72.4 clears the 70%+ frontier reference, SciCode 55.0% clears 55%, SWE-bench Pro 64.7% is verified and the Design/WebDev Arena scores are strong; capped by unpublished SWE-bench Verified and DeepSWE values, so the top band cannot be claimed.
- **Cost efficiency: 78/100.** $2.00/$6.00 per 1M (cached $0.30) sits between the $1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 anchors.
- **Overall Score: 83/100.** (85 + 88 + 88 + 68 + 88) / 5 = 83.4 → **83**. Best fit: frontier-grade STEM reasoning plus strong terminal/agentic coding, with a narrower (text+image) modality set than the Gemini/Qwen entries here.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-23 (UTC)
- Method: public internet research (xAI/SpaceXAI official model docs, evals.report 6-row benchmark table, OpenRouter benchmark summary with Artificial Analysis rows, Model Beat / Epoch AI rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
