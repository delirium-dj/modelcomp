# Claude Sonnet 4 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Sonnet 4 (`anthropic/claude-sonnet-4`)
- Date: 2026-10-16 (UTC) — third pass (previous Signature 2026-10-06); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM has **no page** for `claude-sonnet-4` (404); no new independent benchmark surfaced and the prior deep-pass rows stand. **No score change.**

> **Third-pass refresh — 2026-10-16** (≥3 independent sources: official Anthropic Claude 4 launch post, Artificial Analysis, BenchLM, OpenRouter).
> Newly found rows: AA-MMMU-Pro **62.4%**, Anthropic MMMU **72.6%** (no extended thinking), AA-LCR **44.0%**, CritPt **1.1%**, AA Intelligence Index **16.6** (BenchLM) / **17 estimated** (AA non-reasoning page, #42 of 296), AA-GPQA Diamond **68.3%**, AA-HLE **4.3%**, AA-Omniscience Index **-9.0 / accuracy 22.7% / hallucination rate 41.0%**, AA-IFBench **45.4%**, τ²-bench **52.3%**, Gert Labs **39.66%**, JobBench **18.4%**, AIME 2025 **33.1%**.
> Factual corrections: (1) the earlier "no MMMU-class benchmark published" note is wrong — Anthropic's launch post reports **MMMU 72.6%** for Sonnet 4 (no extended thinking); (2) BenchLM overall moved **38.39 → 38.09** and rank **#139 → #147 of 950**.
> Conflicts surfaced: (1) **Context window** — BenchLM and Anthropic's stated standard are **200K**, but Artificial Analysis's Claude 4 Sonnet page lists **1M**; the 1M beta claim for this exact checkpoint could not be independently confirmed, so the 200K tier is retained and the 1M figure is marked unverified. (2) **Knowledge cutoff** — Artificial Analysis says **March 2025**; OpenRouter says **Jan 2025**. (3) **GPQA Diamond** — Anthropic vendor **76.0% with extended thinking** (70.0% without) vs Artificial Analysis's independent **68.3%**; harness gap, both recorded. (4) **Hallucination** — the earlier "#2 on kluster.ai hallucination-detection leaderboard (98.6%)" measures detection ability, whereas AA-Omniscience records an actual **41.0%** hallucination rate; different constructs, not comparable.
> Sources: https://www.anthropic.com/news/claude-4 · https://artificialanalysis.ai/models/claude-4-sonnet · https://benchlm.ai/models/claude-4-sonnet · https://openrouter.ai/anthropic/claude-sonnet-4

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's 2025-05-22 mid-tier Claude 4 model. It posted 72.7% SWE-bench Verified — statistically level with the flagship Opus 4 — at one fifth of Opus pricing, which made it the default backbone of production coding agents (GitHub Copilot's coding agent launched on it). Superseded for new builds by Sonnet 4.5/4.6.
- **Provider / access:** Anthropic Claude API (`claude-sonnet-4-20250514`) via the Messages API; Claude apps, Bedrock/Vertex resale; OpenAI-compatible via gateways. Proprietary, closed. **Re-verification 2026-09-27: Anthropic deprecated this model on 2026-04-14** (it no longer appears on the current model list, only under "Legacy models"), so it is supported but no longer recommended and carries a scheduled retirement date.
- **Release / knowledge:** Released 2025-05-22 (Anthropic launch post, OpenRouter, Artificial Analysis); knowledge cutoff **March 2025** (Artificial Analysis) vs **Jan 2025** (OpenRouter) — conflict, not resolved.
- **IDs:** `anthropic/claude-sonnet-4` (BenchmarkList/Artificial Analysis naming); `claude-sonnet-4-20250514` on Anthropic's API. The Hugging Face/BenchLM family label is "Claude 4 Sonnet". No OpenCode Zen Free ID.
- **Context window:** 200,000 tokens with 16,000 max output tokens (BenchLM; Anthropic). Artificial Analysis lists a **1M** window for this model — treated here as unverified for this checkpoint (the 1M beta window is documented for Sonnet 4.6).
- **Modalities:** text and vision in, text out (Artificial Analysis confirms text+image input); hybrid reasoning with extended thinking (including thinking with tool use), tool/function calling, computer use, structured output. No audio or video.
- **Pricing (as of 2026-10-16):** $3.00 / 1M input and $15.00 / 1M output (Anthropic launch post; unchanged).
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- OSWorld-MCP **45.0%** (1/7); ChronosBench **98.2%** (1/13); WildAgtEval **67.5%** (1/10); AndroidWorld **94.8%** (2/21); Claw Bench **100** (2/37)
- MCP-Universe **29.4%** (5/27); MCP-Bench **0.68** (79th pct); MCPMark **28.3%**; Tau2-Bench Telecom **64.6%**; Tau3-Banking **16.7%**; Tau2 Airline **60.0%**; Terminal-Bench Hard **31.1%**; GDPval-AA **877 Elo**; Online Mind2Web **40.0%**; MultiChallenge **57.1%**; CAR-bench **47.0%**; PinchBench **80.5%**
- τ²-bench **52.3%** (AA, via BenchLM); Gert Labs **39.66%**; JobBench **18.4%** (arXiv 2605.26329)
- Claw-Eval / ClawProBench / Toolathon / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond **76.0%** (with extended thinking; Anthropic) / **70.0%** (no extended thinking; Anthropic) vs AA-GPQA Diamond **68.3%** (independent harness)
- AA-HLE **4.3%**; AA Intelligence Index **16.6** (BenchLM) / **17 estimated** (AA, #42 of 296); AA-Omniscience Index **-9.0** / accuracy **22.7%** / hallucination rate **41.0%**; AA-IFBench **45.4%**
- AIME 2025 **33.1%** (Anthropic, no extended thinking; reproduced by BenchLM); ARC-AGI-1 **40.0%**; ARC-AGI-2 **5.9%**; MultiChallenge **57.1%**
- kluster.ai LLM Hallucination Detection Leaderboard **98.6%** (rank 2 of 16); PTCBENCH context stability **0.03** (rank 2 of 4)
- LCR / MLCR / CritPt / vendor HLE: CritPt **1.1%** (AA); MRCR/RULER/MLCR and vendor HLE: **no verified public score found** for this checkpoint

Coding:

- SWE-bench Verified **72.7%** (Anthropic; via BenchLM/OpenRouter); SWE-bench Lite **60.3%** (1/18); SWE-bench Multimodal **35.6%**; Aider Polyglot **61.3%** (14/47, $26.58 for 225 tasks)
- SciCode **40.0%**; Terminal-Bench 2.0 **35.5%** (Anthropic) / Terminal-Bench 2.1 **36.3%**; CORE-Bench Hard **46.7%** ($65.58/run); LiveCodeBench **62.4%**; IOI **6.5%**; ALE-Bench **655.35**
- DeepSWE / SWE-Pro / Vibe Code Bench: **no verified public score found**

Multimodal:

- MMMU **72.6%** (Anthropic, no extended thinking); AA-MMMU-Pro **62.4%** (independent); SWE-bench Multimodal **35.6%**; JMed48k **84.1%**, MedAraBench **69.4%**

Long context:

- AA-LCR **44.0%** (Artificial Analysis long-context reasoning) — the first long-context retrieval-style row; no MRCR/RULER/GraphWalks needle-at-depth value for the 200K window, and the 16K output cap is the documented limit. ALE-Bench self-refine x16 burned 523,943 tokens in one run, hinting at cost behaviour rather than recall quality.

### Normalized scores (1–100)

- **Tool use: 74/100.** Excellent computer-use-adjacent agentics (ChronosBench 98.2%, AndroidWorld 94.8%, OSWorld-MCP 45.0%), workable MCP coverage (MCP-Universe 29.4%) and a mid-band τ²-bench 52.3%; the cap is Tau3-Banking **16.7%**, JobBench 18.4% and terminal agentics around 31–36%.
- **Reasoning: 64/100.** GPQA Diamond 68.3–76.0% and AIME 2025 33.1% sit mid-band, but AA-HLE **4.3%**, CritPt **1.1%** and ARC-AGI-2 **5.9%**, plus an AA Intelligence Index of **16.6** — below the 20–35 mid band — place it clearly below 2026 frontier reasoning tiers. Lowered from 70 on this pass.
- **Context window: 72/100.** 200K input with a 16K output cap and only a 44.0% AA-LCR row; Artificial Analysis's 1M listing is unresolved, so the top 1M tier is not granted.
- **Multimodal: 62/100.** Image input is confirmed and now measured (Anthropic MMMU 72.6%, AA-MMMU-Pro 62.4%, SWE-bench Multimodal 35.6%) but there is no image output, no audio or video.
- **Coding: 78/100.** 72.7% SWE-bench Verified at $3/$15 was the value breakthrough of mid-2025, reinforced by SWE-bench Lite (60.3%) and Aider Polyglot (61.3%); the caps are IOI **6.5%** and LiveCodeBench **62.4%**.
- **Cost efficiency: 62/100.** $3/$15 is mid-priced: roughly 5× cheaper than Opus-class input pricing but with no free tier and an expensive output side for long agent loops (CORE-Bench Hard cost $65.58 per run).
- **Overall Score: 70/100.** (74 + 64 + 72 + 62 + 78) / 5 = 70.0. Best fit: high-volume production coding and computer-use agents that need 2025-frontier reliability at sustainable cost, not frontier-2026 reasoning.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research; third-pass re-verification on 2026-10-16 against the official Anthropic Claude 4 launch post, Artificial Analysis, BenchLM and OpenRouter, adding AA-MMMU-Pro, AA-LCR, CritPt, AA-Omniscience, AA Intelligence Index and Anthropic MMMU 72.6% rows over the 2026-10-06 pass, correcting the "no MMMU published" note, and recording the 200K-vs-1M context, cutoff-date, GPQA-harness and hallucination-definition conflicts rather than inventing values. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
