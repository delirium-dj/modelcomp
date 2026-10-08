# Grok 4.5 — findings by DeepSeek 4.1 Flash

- Source: xAI (SpaceXAI)/Grok 4.5 (`grok-4.5`)
- Date: 2026-10-06 (UTC)
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

- Terminal-Bench 2.1: **83.3%** task success (xAI launch post, verified evals.report) versus **67.8%** on the independent Vals AI run; Terminal-Bench 3.0 **15.7%** (FrontierBench leaderboard)
- Tau3-Banking: **no verified public score found**; τ²-bench/Tau2: **no verified public score found**
- GDPval-AA: **44.5%** normalized (Artificial Analysis, revised up from 43.5%) and **1430 Elo** (the Elo-scale figure; methodology frontier ref ~1750+)
- APEX (multi-step agentic): **56.2%** (Model Beat / Epoch AI, revised up from 34.2% on 2026-09-22); SWE-Marathon **29.0%** resolution (verified, evals.report)
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: **no verified public score found**
- AA Agentic Index **42.1** (revised up from 41.2); Epoch AI Agentic percentile **83rd**

Reasoning / knowledge:

- GPQA Diamond: **93.1%** (Artificial Analysis via OpenRouter) / **93.4%** (Model Beat–Epoch AI row) / **92.9%** (Vals AI leaderboard)
- HLE: **42.7%** (AA and Model Beat agree); MMLU-Pro **89.2%** (Vals AI leaderboard)
- LCR / MLCR: **AA-LCR 79.3%** (AA); no MRCR/RULER row found
- CritPt: **15.4%** (AA via OpenRouter)
- Artificial Analysis Intelligence Index **38.8** (AA); Epoch AI Intelligence percentile **76th**
- Omniscience / hallucination: AA-Omniscience accuracy **51.6%** (revised up from 51.5%), index **25.3%**, hallucination rate **54.1%**; SimpleQA Verified **48.3%** (Model Beat, revised down from 53.5%); SimpleBench **70.0%**; ARC-AGI-1 **85.67%**, ARC-AGI-2 **52.64%**, ARC-AGI-3 **0.3%** (official, evals.report); AIME 2024/2025 **97.8%**

Coding:

- SWE-bench Verified: **86.6%** (Vals AI leaderboard); SWE-bench Pro **64.7%** resolved (xAI launch post, verified evals.report); SWE Multilingual **78%** (Cursor launch post)
- DeepSWE: **53%** (xAI launch post — below the 74% frontier reference); FrontierCode **42.4%** weighted (official, evals.report)
- LiveCodeBench: **87.4%** (Vals AI leaderboard); SciCode **55.0%** (AA and Model Beat agree); WeirdML **46.4%**; CursorBench 3.2 **66.7%**; VulcanBench v3 **89.9%**; PostTrainBench v1.1 **23.4%**
- AA Coding Index **72.5**; Epoch AI Coding percentile **80th**; WebDev Arena **1555**; Design Arena Elos 1208–1291 across app/UI/game categories (verified, OpenRouter)

Long context:

- AA-LCR 79.3% is the only long-context retrieval signal found; no 500K-retention (MRCR/RULER) score is published.

Multimodal:

- AA-MMMU-Pro **80.4%** (Artificial Analysis) — the first verified vision benchmark found for this ID.

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 83.3% is close to the 88%+ frontier band with APEX 56.2% and AA Agentic Index 42.1 backing it up; held despite the weaker independent Vals TB2.1 run (67.8%) and Terminal-Bench 3.0 (15.7%), and capped because Tau3-Banking/τ² and every Claw/MCP harness score is still missing and GDPval-AA 1430 Elo sits below the ~1750+ frontier reference.
- **Reasoning: 88/100.** GPQA Diamond 92.9–93.4%, HLE 42.7%, MMLU-Pro 89.2% and AIME 97.8% are frontier-grade maths/science numbers; capped by AA Intelligence Index 38.8 (frontier ref 60+) and CritPt 15.4%.
- **Context window: 88/100.** 500K lands in the 500K–1M band (85–94) — just under the 1M tier that earns 95+ — and above-200K requests are surcharged.
- **Multimodal: 68/100.** Text + image (plus file) input with text-only output → the "+image in = 60–70" band; the verified AA-MMMU-Pro 80.4% supports the top of that band, but there is still no audio/video input.
- **Coding: 88/100.** SWE-bench Verified 86.6% and LiveCodeBench 87.4% (Vals) plus AA Coding Index 72.5 and SciCode 55.0% now fill the prior gaps and clear most frontier references; the top band is still blocked by DeepSWE 53% (below the 74% reference) and PostTrainBench 23.4%.
- **Cost efficiency: 78/100.** $2.00/$6.00 per 1M (cached $0.30) sits between the $1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 anchors.
- **Overall Score: 83/100.** (85 + 88 + 88 + 68 + 88) / 5 = 83.4 → **83**. Best fit: frontier-grade STEM reasoning plus strong terminal/agentic coding, with a narrower (text+image) modality set than the Gemini/Qwen entries here.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-06 (UTC)
- Method: public internet research (xAI/SpaceXAI official model docs, evals.report 6-row benchmark table, BenchLM `grok-4-5` page with Artificial Analysis, Vals AI and FrontierBench rows, Cursor launch post, OpenRouter benchmark summary, Model Beat / Epoch AI rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
