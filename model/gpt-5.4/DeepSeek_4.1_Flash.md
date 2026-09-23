# GPT-5.4 — findings by DeepSeek 4.1 Flash

- Source: OpenAI/GPT-5.4 (`gpt-5.4`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's flagship "more affordable model for coding and professional work", released 2026-03-05. It is the base tier of the GPT-5.4 family (GPT-5.4 Pro and GPT-5.4 Mini are separate, differently priced IDs), not an alias of GPT-5.5.
- **Provider / access:** OpenAI API — model `gpt-5.4`, snapshot `gpt-5.4-2026-03-05`; served on Responses (`v1/responses`), Chat Completions (`v1/chat/completions`), Live, Realtime and Batch endpoints. OpenCode Zen route `opencode/gpt-5.4`.
- **Release / knowledge:** released 2026-03-05 (OpenAI model catalog / evals.report); knowledge cutoff 2025-08-31.
- **IDs:** `openai/gpt-5.4` (snapshot `gpt-5.4-2026-03-05`); `opencode/gpt-5.4` (Zen). No Free ID verified → cost scored on paid pricing.
- **Context window:** 1,050,000 input tokens, 128,000 max output (OpenAI model page). Requests over 272K input tokens are billed at 2× input / 1.5× output for the whole session.
- **Modalities:** text + image in → text out (audio and video not supported); reasoning yes via `reasoning_effort` none/low/medium/high/xhigh; streaming; function calling; structured outputs; Responses tools include web search, file search, code interpreter, computer use, hosted shell, apply patch, MCP, skills and tool search.
- **Pricing (as of 2026-09-23):** $2.50 in / $15.00 out per 1M tokens; cached input $0.25 per 1M; Batch API discount and flex tier listed.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **75.1%** task success (verified, evals.report); Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking: **no verified public score found**; τ²-bench Telecom **87.1%** pass^1 (official, evals.report)
- GDPval: **1674 Elo** (official, evals.report); GDPval-AA percentage form not found
- OSWorld **75.0%** (unverified); Online-Mind2Web **92.8%** (verified); GAIA **48.2%** (unverified); METR task-completion time horizon **341.7 min**; FrontierSWE **54** dominance; PostTrainBench **20.23%**
- MCP-Atlas / Toolathon / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.3%**; HLE **40.28%** (both official, evals.report)
- LCR / MLCR: **no verified long-context retrieval score found** on the pages checked (MultiNRC 58.29% is a separate multidoc eval)
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index **56.8** (unverified); Epoch Capabilities Index **156.1** (official); LiveBench **80.28%**
- Omniscience / hallucination: AA-Omniscience Index **6**; Vectara Hallucination Rate **7.0%** (official); SimpleQA Verified **44.8%**; MASK honesty score **89.67**
- AIME 2026 **99.17%**; AIME (OTIS mock) **95.3%**; ARC-AGI-1 **93.67%**, ARC-AGI-2 **73.95%**, ARC-AGI-3 **0.21%**; FrontierMath **47.6%** (Tier 4 **27.1%**); MultiNRC **58.29%**; IFBench **73.9%**; EnigmaEval **15.96%**

Coding:

- SWE-bench Verified: **76.9%** (official, evals.report)
- SWE-bench Pro: **59.10%**; DeepSWE **55.53%** (official, evals.report)
- SciCode: **56.6%** (unverified); Vibe Code Bench **67.42%** (official); WeirdML **77.7%**; GBA Eval **31.6%**; GSO **31.37%**; ProgramBench **0.0%** almost-resolved
- WebDev Arena **1388** Elo (verified); Design Arena **1264**; LMArena **1472**

Long context:

- No MRCR/RULER-style retrieval row was published for this ID; the 1.05M window comes from OpenAI's spec page and is surcharged above 272K input.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.0 75.1%, τ²-bench Telecom 87.1%, GDPval 1674 Elo (frontier ref 1750+), OSWorld 75.0% and Online-Mind2Web 92.8% are a near-frontier agentic profile; capped because Terminal-Bench 2.1, Tau3-Banking and the MCP/Claw harnesses had no verified score for this ID.
- **Reasoning: 90/100.** GPQA Diamond 93.3% and HLE 40.28% hit the frontier band (90%+ / 40%+); held just below the top by AA Index 56.8 (frontier ref 60+) and EnigmaEval 15.96%.
- **Context window: 95/100.** 1.05M input / 128K output is the ≥1M tier; kept at the band floor because no 512K-retention number was found and prompts above 272K input are surcharged 2×.
- **Multimodal: 68/100.** Image input only (MMMU-Pro 82.1%, ScreenSpot-Pro 85.4%) → bottom of the "+image in = 60–70" band; no audio/video input and text-only output.
- **Coding: 85/100.** SWE-bench Verified 76.9%, SWE-bench Pro 59.10%, SciCode 56.6% and Vibe Code Bench 67.42% are strong; capped by DeepSWE 55.53% against the 74% frontier reference and ProgramBench 0.0%.
- **Cost efficiency: 62/100.** $2.50/$15.00 per 1M sits just above the $3/$15 ≈ 60 anchor (cached input $0.25 softens agent loops); no free or promotional tier verified.
- **Overall Score: 85/100.** (88 + 90 + 95 + 68 + 85) / 5 = 85.2 → **85**. Best fit: highest verified all-round quality in this batch for professional coding and knowledge work — provided text+image input is enough.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-23 (UTC)
- Method: public internet research (OpenAI API model catalog page for specs/tools/pricing, evals.report 46-row benchmark table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
