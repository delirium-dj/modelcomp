# Gemini 3 Pro — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind/Gemini 3 Pro (`gemini-3-pro`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind's flagship announced 2025-11-18 — the model that introduced Deep Think reasoning and native agentic execution (Gemini Agent / Antigravity) alongside a 1M-token context. Ten months on it is one generation behind the 3.1 Pro tier, so its agentic-coding numbers date faster than its science/math ones. **Availability caveat:** Google's current model docs list "Gemini 3 Pro Preview (Shut down)" among deprecated endpoints — verify that the stable `gemini-3-pro` ID you are calling is still live before you standardise on it.
- **Provider / access:** Google AI Studio (a free tier was offered at launch), Vertex AI and the Gemini App; Gemini API. Thinking mode and Deep Think reasoning; function calling; structured output.
- **Release / knowledge:** 2025-11-18 (llm-stats launch guide / evals.report). Knowledge cutoff not published on the pages checked.
- **IDs:** `gemini-3-pro` (aliases "gemini 3 pro"); Zen route `opencode/gemini-3-pro`. Whether a Free ID exists on the evaluated route is unverified here → cost scored on Google's list pricing.
- **Context window:** 1,000,000 input tokens, 64,000 output tokens (launch guide).
- **Modalities:** text, image, video, audio and PDF in → text out (natively multimodal — trained jointly rather than vision bolted on); Deep Think parallel reasoning; agentic execution.
- **Pricing (as of 2026-09-23):** standard context **$2 in / $12 out** per 1M; extended context **$4 / $18**; Batch 50% discount; AI Studio free tier at launch.
- **Architecture:** proprietary, no parameter disclosure.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **54.2%** (launch summary — listed as #1 at launch); Terminal-Bench 2.1: **no verified public score found**
- τ²-bench Telecom: **85.4%** pass^1 (unverified, evals.report); Tau3-Banking: **no verified public score found**
- MCP Atlas **54.1%** pass rate; MCP-Universe **44.59%** overall success rate; Berkeley Function Calling Leaderboard **72.51%** (all evals.report)
- GDPval **1184 Elo**; METR task-completion time horizon **224.3 min**; GAIA **38.5%** (unverified); Remote Labor Index **1.25%** automation rate; PostTrainBench **18.12%**
- OSWorld: **no verified public score found**; Claw-Eval / Toolathon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.6%** official (evals.report); the launch guide separately cites **91.9%** as "#1 at launch" — both recorded
- HLE: **38.3%** (official, evals.report)
- LCR / MLCR: OpenAI-MRCR v2 **77.0%** mean SequenceMatcher similarity (verified) — the strongest long-context retrieval figure in this batch; FACTS Grounding **69.0%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index **48.4** (unverified, evals.report); Epoch Capabilities Index **153.4** (official)
- AIME 2026 **91.67%**, AIME (OTIS mock) **91.4%** (the launch guide cites 95% for AIME 2025); FrontierMath **37.6%** (Tier 4 **18.8%**); ARC-AGI-1 **75%**, ARC-AGI-2 **31.11%**; MMLU-Pro **89.8%**; Global-MMLU **92.2%**; MultiChallenge **65.67%**; EnigmaEval **18.24%**
- SimpleQA Verified **72.9%**; FACTS **69.0%**; Vectara Hallucination Rate **13.6%**; MASK honesty **42.60**

Coding:

- SWE-bench Verified: **72.9%** (official, evals.report)
- SWE-bench Pro: **43.30%**; SWE-rebench **56.5%**; SWE-bench Multilingual **68.7%** (official)
- LiveCodeBench **91.7%** pass@1 (unverified); LiveCodeBench Pro **2439** Codeforces Elo
- SciCode **56.1%** (unverified); WeirdML **69.9%**; Vibe Code Bench **14.30%** (verified); GSO **18.63%** Opt@1
- WebDev Arena **1438**; LMArena **1479**; Design Arena **1295**; Search Arena **1208**

Long context:

- MRCR v2 **77.0%** at 1M-scale settings — real retention, not just a headline window, but short of the ≥98% needed for a 100.

### Normalized scores (1–100)

- **Tool use: 78/100.** τ²-Bench Telecom 85.4%, MCP Atlas 54.1%, BFCL 72.51%, METR 224.3 min and Terminal-Bench 2.0 54.2% are upper-mid band (TB 45–60% → 50–70); capped by GDPval 1184 Elo (frontier ref 1750+), no OSWorld row and no Terminal-Bench 2.1 result.
- **Reasoning: 88/100.** GPQA Diamond 92.6% clears the 90%+ frontier reference with AIME ~91–95%, MMLU-Pro 89.8% and Epoch 153.4; held below 90 by HLE 38.3% (just under the 40% marker) and an unverified AA Index of 48.4.
- **Context window: 96/100.** 1M input / 64K output is the ≥1M tier with the best measured retrieval in this batch (MRCR v2 77.0%), which is why it sits a point above the plain-1M-with-no-evidence entries — but well short of the ≥98% needed for a 100.
- **Multimodal: 90/100.** Text, image, video, audio and PDF in → text out puts it in the "+audio in = 90–100" band (MMMU-Pro 81.0%, Video-MMMU 87.6%, ScreenSpot-Pro 72.7%, CharXiv 81.4%); held at the floor because output is text-only.
- **Coding: 80/100.** SWE-bench Verified 72.9% with LiveCodeBench 91.7% and SciCode 56.1% (clears 55%) is solid but generational — SWE-bench Pro 43.30% and Vibe Code Bench 14.30% are well behind current frontier values, which is what caps it.
- **Cost efficiency: 68/100.** $2/$12 at standard context (extended-context $4/$18, Batch 50%) sits between the $1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 anchors; a launch-era free AI Studio tier exists for direct Google access but no Zen Free ID was verified for the evaluated route.
- **Overall Score: 86/100.** (78 + 88 + 96 + 90 + 80) / 5 = 86.4 → **86**. Best fit: native omni-modal long-context science and reasoning work at reasonable list pricing — verify the stable endpoint still exists, and expect to pay more for the newer 3.1 Pro tier on agentic coding.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-23 (UTC)
- Method: public internet research (evals.report 52-row benchmark table for official/verified rows, llm-stats launch guide for context/output/pricing/modalities and launch-era benchmark summary, Google's current Gemini API model docs for the deprecated-preview availability note); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
