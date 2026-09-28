# GPT-5 — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-5 (`gpt-5`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 (no Free-tier wording — paid on every route found)
- **Short description:** OpenAI's August 2025 flagship: a routed system that pairs a fast responder with a deeper reasoning model behind one `gpt-5` ID. It set launch records in mathematics and coding, then was superseded by GPT-5.1 and the later 5.x/6.x line, so this entry is the historical 2025 frontier reference.
- **Provider / access:** OpenAI (Responses and Chat Completions APIs) and OpenCode Zen as `opencode/gpt-5`. Proprietary, no open weights.
- **Release / knowledge:** Released 2025-08-07 (tracked with its benchmark record); **knowledge cutoff 2024-09-30**, published on OpenAI's own API model page. (Correction from the first pass, which recorded "not restated": the cutoff is now stated by the vendor — re-verified 2026-09-27.)
- **IDs:** `opencode/gpt-5` (OpenCode Zen) and `gpt-5` (OpenAI). No OpenCode Zen Free ID exists — paid on every route found.
- **Context window:** 400,000 tokens total, split as 272K input / 128K max output in OpenAI's API; the repo's curated `meta.json` likewise records 400K total with 128K output. Verified from the published API spec via the model's consolidated eval record.
- **Modalities:** text, image and file/PDF input; text out; reasoning yes (routed, with a reasoning-effort control); tool calls and structured outputs yes; no audio or video input and no image output.
- **Pricing (as of 2026-09-27):** OpenAI $1.25 / 1M input, $10.00 / 1M output, $0.125 / 1M cached input; OpenCode Zen $1.07 / $8.50. Paid only.
- **Architecture:** proprietary, parameter count undisclosed; internally a two-component router (fast non-reasoning model plus a deeper reasoning model) presented as a single model ID.

### Raw benchmarks found

All figures below are the consolidated launch numbers recorded for GPT-5 (evals.report `openai-gpt-5`, 49 tracked benchmarks, status "Official" unless marked otherwise).

Agent / tool use:

- GDPval-AA: **1294 Elo** (official)
- Tau3-Banking / Tau2-Bench (τ²-bench Telecom): **96.7% pass^1** (unverified mirror)
- MCP Atlas: **44.5% pass rate**; MCP-Universe: **44.16% overall success rate**
- GAIA: **42.1%**; BrowseComp: **54.9%**; Online-Mind2Web: **42.33%**; METR task-completion horizon: **203 min**
- Claw-Eval / ClawProBench / Toolathon / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **86.2%**; MMLU-Pro: **87.1%**; HLE: **25.32%**
- FrontierMath: **32.41%** (Tier 4: **12.5%**); AIME (OTIS Mock): **91.4%**; IMO-Bench: **65.6%**; PutnamBench: **28 / 660 solved**
- ARC-AGI-1: **65.67%**; ARC-AGI-2: **9.86%**; MultiChallenge: **63.19%**; EnigmaEval: **10.47%**
- Artificial Analysis Intelligence Index: **44.6**; Epoch Capabilities Index: **150.0**
- SimpleQA Verified: **50.6%**; MASK honesty score: **79.33**; Vectara hallucination rate: **15.1%**

Multimodal:

- MMMU: **84.2%**; MMMU-Pro: **78.4%**; Video-MMMU: **84.6%**; CharXiv: **81.1%**; OCRBench v2: **55.5**; ZeroBench: **1.0% pass@1**

Coding:

- SWE-bench Verified: **73.6%**; SWE-bench Pro: **41.78%**; LiveCodeBench: **84.6% pass@1**; LiveCodeBench Pro: **2176 Codeforces Elo**
- Aider Polyglot: **88.0%**; SciCode: **42.9%**; WeirdML: **60.7%**; Vibe Code Bench: **20.09%**; GSO optimizer benchmark: **6.86% Opt@1**
- DeepSWE / Terminal-Bench 2.1 / SWE-Atlas: **no verified public score found**

Long context:

- No MRCR / RULER / GraphWalks recall value was published for the 400K window; the long-context score is therefore set by window size and max output only, not by retrieval evidence.

### Normalized scores (1–100)

- **Tool use: 80/100.** GDPval-AA 1294 Elo clears the mid-band ceiling (900–1200 → 50–70) and τ²-bench Telecom 96.7% is elite, but MCP Atlas/MCP-Universe sit at ~44% and no Claw-Eval-class agent harness exists — that evidence gap caps it below the agentic 90s.
- **Reasoning: 87/100.** GPQA Diamond 86.2%, MMLU-Pro 87.1% and AIME 91.4% are near-frontier, yet HLE 25.3%, FrontierMath 32.4% and ARC-AGI-2 9.9% show the 2026 generation has moved past it; capped just under the 90+ frontier band.
- **Context window: 80/100.** 400K total (272K input) sits in the 200K–500K tier (200K = 70), lifted by a 128K max output; no recall-at-depth benchmark keeps it well below the 1M tier.
- **Multimodal: 76/100.** Image and file/PDF input with MMMU 84.2% and MMMU-Pro 78.4% is solid for the class, but output is text-only, there is no native audio or video path and ZeroBench 1.0% shows hard visual-reasoning limits.
- **Coding: 82/100.** SWE-bench Verified 73.6%, LiveCodeBench 84.6% and Aider Polyglot 88% are strong, but SciCode 42.9% is below the 55% frontier bar and Vibe Code Bench 20.1% shows weak long-horizon repo work.
- **Cost efficiency: 78/100.** $1.25 / 1M input is mid-market, but $10 / 1M output with only a 90% cached-input discount makes it dearer than every free tier in this comparison and dearer than the current Flash-class models.
- **Overall Score: 81/100.** (80 + 87 + 80 + 76 + 82) / 5 = 81.0. Best fit: high-stakes reasoning, review and one-shot generation where frontier math/coding accuracy matters more than price or agentic tool depth.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-27
- Method: public internet research (consolidated vendor-reported benchmark record for the 2025-08-07 GPT-5 launch at evals.report, plus OpenCode Zen pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
