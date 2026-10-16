# Gemini 3 Flash — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind/Gemini 3 Flash (`gemini-3-flash-preview`)
- Date: 2026-10-16 (UTC) — third pass (previous Signature 2026-10-06)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass refresh — 2026-10-16** (≥4 independent sources: Artificial Analysis, BenchLM (2026-10-15), Vals AI, OpenRouter / Google release blog).
> **Variant caveat (new, load-bearing):** Artificial Analysis now benchmarks `gemini-3-flash-preview` only as a **non-reasoning** model and flags it **deprecated** (suggests Gemini 3.5 Flash). The 2026-10-06 pass mixed reasoning-mode and non-reasoning rows without labelling them, which explains most corrections below.
> Newly found / updated independent rows:
> - AA Intelligence Index **18** ("estimated"; BenchLM lists 17.9) — replaces the earlier unverified "35"; AA-GPQA Diamond **81.2%**; AA-HLE **15.0%**; AA-LCR **55.3%**; CritPt **1.4%**; AA-IFBench **55.1%**; AA-MMMU-Pro **78.6%**; AA Global-MMLU-Lite **92.7%**; AA-Omniscience accuracy **45.8%** / hallucination **92.4%** / index **-4.3%**; FrontierMath v2 Tiers 1-3 **51.228%** / Tier 4 **17.073%** (Epoch AI); τ²-bench **43.3%** (AA); Claw-Eval **49.2%**; Gert Labs **56.63%**; JobBench **11.4%**; Terminal-Bench 2.1 (Vals) **53.9%**.
> - Vals AI (full harness): accuracy **50.61%** Vals Index; Terminal-Bench 2.1 **53.93%** (#52/75); SWE-bench **75.00%** (#44/88; a 2025-12-18 Vals note recorded **76.2%, #1** at launch); LiveCodeBench **85.59%** (#30/143); GPQA Diamond **87.88%** (#37/138); MMLU Pro **88.59%** (#19/138); MMMU Pro **87.63%** (#13/93); Vibe Code Bench v1.1 **20.20%** (#79/112); ProgramBench **0.00%** (#55/64); max output **65,536**.
> Factual corrections: knowledge cutoff now published as **January 2025** (AA); max output **65,536** (Vals) — both previously unverified/unstated. BenchLM overall slipped **54.46 → 54.35** (#63 → #75/951). AA lists a **90% cache discount** and a blended **$0.43/1M** 7:2:1 rate.
> Conflicts surfaced: (1) AA non-reasoning HLE **15.0%** / Index **18** vs the earlier official HLE **36.6%** / Index **35** — different variants/harnesses, both retained. (2) AA τ² **43.3%** vs the earlier "τ²-Bench Telecom 80.4%". (3) LiveCodeBench **85.6%** (Vals) vs **79.7%** (previously unverified). (4) FrontierMath Tier 4 **17.07%** (Epoch/AA) vs **4.167%** (earlier) — version/harness.
> Sources: https://artificialanalysis.ai/models/gemini-3-flash · https://benchlm.ai/models/gemini-3-flash · https://www.vals.ai/models/google_gemini-3-flash-preview · https://openrouter.ai/google/gemini-3-flash-preview

## Model card

- **Name:** Gemini 3 Flash (Preview)
- **Short description:** Google DeepMind's speed-optimized Gemini 3 tier, marketed for agentic workflows, multi-turn chat and coding assistance with near-Pro reasoning at Flash latency/cost. Announced 2025-12-17 and rolled out as the default model in the Gemini app and AI Mode in Search. Not an alias: Gemini 3 Pro and Gemini 3 Deep Think are separate IDs. Artificial Analysis now marks this preview **deprecated** and points to Gemini 3.5 Flash as the current successor.
- **Provider / access:** Google (`gemini-3-flash-preview` via Gemini API, AI Studio, Vertex AI, Gemini CLI, Antigravity); OpenCode Zen route `opencode/gemini-3-flash`. GenAI SDK and OpenAI-compatible entry points; structured output, function calling and automatic context caching documented.
- **Release / knowledge:** 2025-12-17 (Google release blog). Knowledge cutoff now published as **January 2025** (Artificial Analysis; the earlier pass had it unverified).
- **IDs:** `google/gemini-3-flash-preview` (Google); `opencode/gemini-3-flash` (Zen). No Free ID verified → cost scored on paid pricing.
- **Context window:** 1,000,000 input tokens; max output **65,536** (Vals AI) — the earlier pass left max output unstated.
- **Modalities:** text, image, speech, video and PDF in → text out; thinking levels minimal/low/medium/high (AA benchmarks the preview as a non-reasoning model; a reasoning/thinking variant also exists); tool use/function calling; structured output; reasoning yes.
- **Pricing (as of 2026-10-16):** $0.50 in / $3.00 out per 1M tokens (AA/OpenRouter). AA reports a **90% cache discount** and a blended 7:2:1 rate of **$0.43/1M**. Paid tier only; no free tier verified.
- **Architecture:** proprietary, no parameter disclosure.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **53.9%** (Vals AI, #52/75)
- Terminal-Bench Hard (AA): **38.6%** (Artificial Analysis via OpenRouter)
- τ²-Bench: **43.3%** (Artificial Analysis, non-reasoning) vs the **80.4%** Telecom figure recorded in the 2026-10-06 pass — harness/variant spread, both listed
- GDPval: **1204 Elo** (official, via evals.report)
- GAIA: **35.2%** (unverified, evals.report)
- Claw-Eval **49.2%**; Gert Labs **56.63%**; JobBench **11.4%** (all BenchLM)
- MCP-Atlas / Toolathon / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **83.2%** official (evals.report); **87.88%** (Vals AI); **81.2%** non-reasoning and **89.8%** reasoning mode (Artificial Analysis — harness differs, all listed)
- HLE: **36.6%** (evals.report official) vs **15.0%** (Artificial Analysis non-reasoning) — variant/harness conflict
- LCR: AA-LCR **55.3%** (AA; down from the 78.0% recorded earlier); OpenAI-MRCR v2 **22.1%** mean SequenceMatcher similarity (evals.report)
- CritPt: **1.4%** (AA) vs **8.6%** recorded earlier — conflict
- Artificial Analysis Intelligence Index: **18** (AA page, "estimated"; BenchLM 17.9) — replaces the earlier unverified 35; Epoch Capabilities Index **150.9** (official)
- Omniscience / hallucination: AA-Omniscience accuracy **45.8%**, hallucination rate **92.4%**, index **-4.3%** (AA via BenchLM); Vectara Hallucination Rate **13.5%** (official)
- AIME 2026 **95.83%**; AIME (OTIS mock) **92.8%**; MathArena HMMT February 2026 **89.39%**; FrontierMath v2 Tiers 1-3 **51.228%** / Tier 4 **17.073%** (Epoch AI); ARC-AGI-1 **84.67%**, ARC-AGI-2 **33.61%** (official, evals.report)
- MMLU-Pro **88.59%** (Vals); Global-MMLU-Lite **92.7%** (AA); IFBench **55.1%** (AA)

Coding:

- SWE-bench Verified: **75.4%** (official, evals.report) / **75.00%** (Vals AI, #44/88; Vals recorded **76.2%** and a #1 placing at the 2025-12-18 launch)
- SWE-bench Pro: **34.63%**; SWE-bench Multilingual **72.7%**; SWE-rebench **57.6%** (official, evals.report)
- DeepSWE: **5.16%** resolved (official, evals.report) — long-horizon agentic coding is the clear weak spot
- LiveCodeBench: **85.59%** (Vals AI) vs **79.7%** (unverified) recorded earlier; LiveCodeBench Pro **2316** Codeforces Elo (official)
- SciCode **50.6%** (unverified); WeirdML **61.6%**; Vibe Code Bench **20.20%** (Vals, #79/112); GSO **9.8%** (earlier); ProgramBench **0.00%** (Vals, #55/64)
- LMArena **1466**; WebDev Arena **1437** Elo (verified)

Long context:

- AA-LCR **55.3%** and OpenAI-MRCR v2 **22.1%** are the long-context retrieval signals — no ≥98% retention at 512K+, so the 1M window is scored at the band floor.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.1 53.9% (Vals) plus GDPval 1204 Elo (top of the 900–1200 mid band) show real tool use, but AA τ² 43.3% is weak and Terminal-Bench 2.1 official, Tau3-Banking/τ³ and every MCP/Claw-family harness score remain unverified — that gap holds it well below the 83–88% Terminal-Bench frontier band.
- **Reasoning: 78/100.** GPQA Diamond 83.2–87.9% and HLE 36.6% (official) sit above the mid band (GPQA 60–80%), but the non-reasoning AA Index of 18, AA-HLE 15.0%, AA-LCR 55.3% and CritPt 1.4% show how variant-dependent the row is; kept at 78 to reflect the reasoning-mode evidence, capped by HLE variant conflict, CritPt and FrontierMath Tier 4.
- **Context window: 95/100.** 1M-token input lands in the ≥1M tier (95–100); held at the floor because no ≥98% retention at 512K+ is published (AA-LCR 55.3%, MRCR v2 22.1%).
- **Multimodal: 92/100.** Text, image, speech, video and PDF in with text-only out puts it in the "+audio in = 90–100" band (AA-MMMU-Pro 78.6%, Vals MMMU Pro 87.63%); capped by text-only output and no audio-generation capability.
- **Coding: 80/100.** SWE-bench Verified 75.4–76.2% and LiveCodeBench 85.6% are strong and Vibe Code Bench 20.2% clears the "<10%" trap in the mid band, but SciCode 50.6%, ProgramBench 0.00% and DeepSWE 5.16% cap the score.
- **Cost efficiency: 89/100.** $0.50/$3.00 per 1M with a 90% cache discount (blended $0.43) sits between the ~$0.60/$2.20 ≈ 92 and $1.25/$4.25 ≈ 88 anchors; paid-only tier, no $0 route verified.
- **Overall Score: 83/100.** (72 + 78 + 95 + 92 + 80) / 5 = 83.4 → **83**. Best fit: the cheapest verified route to 1M-context multimodal reasoning with real (if not frontier) tool use — avoid it for long-horizon autonomous coding, where DeepSWE 5.16% and ProgramBench 0.00% are the tell.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-16 (UTC)
- Method: public internet research; third-pass re-verification on 2026-10-16 against Artificial Analysis (non-reasoning model page + provider benchmark page), BenchLM (2026-10-15 snapshot), Vals AI and the OpenRouter listing / Google release blog, adding independent Terminal-Bench 2.1, LiveCodeBench, GPQA/MMLU/MMMU, AA Intelligence Index, AA-Omniscience, AA-LCR and Epoch FrontierMath rows and correcting the earlier reasoning numbers (which had mixed reasoning-mode and non-reasoning variants) with scores recalculated as normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
