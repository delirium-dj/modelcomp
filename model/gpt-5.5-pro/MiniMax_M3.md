# GPT-5.5 Pro — findings by MiniMax M3

- Source: OpenAI (`openai/gpt-5.5-pro`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's premium extra-compute deployment of GPT-5.5 for deep reasoning on high-stakes research, math, and expert QA. First fully retrained base model since GPT-4.5.
- **Provider / access:** OpenAI API (`gpt-5.5-pro`); also routed on OpenCode as `opencode/gpt-5.5-pro`. Chat Completions API.
- **Release / knowledge:** Release 23 April 2026 (alongside GPT-5.5); knowledge cutoff early 2026.
- **IDs:** `openai/gpt-5.5-pro`; no free ID.
- **Context window:** 1,050,000 total; 128,000 max output. Reported by OpenAI and OrcaRouter.
- **Modalities:** Text, image, file in; text out. Reasoning: yes (high effort). Tool calls: yes. JSON mode: yes.
- **Pricing (as of 2026-10-13):** Pro tier $30 input / $180 output per 1M; batch $10 / $45 (50%+ discount on output). 2× GPT-5.4 Pro pricing. In-memory caching not supported (extended prompt caching on GPU-local storage).
- **Architecture:** Proprietary. New base architecture, new training data — first fully retrained base model since GPT-4.5. p50 latency 1,000ms (10× faster than GPT-5.4 Pro's 10,000ms); throughput 49 tok/s (741% faster than GPT-5.4 Pro's 6 tok/s).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (LEADS GPT-5.4 75.1, Opus 4.7 69.4) (Kilo blog, 25 Apr 2026).
- Expert-SWE (long-horizon coding ~20 hrs): **73.1%** (LEADS GPT-5.4 68.5).
- GDPval (knowledge work across 44 occupations): **84.9%** (LEADS GPT-5.4 83.0, Opus 4.7 80.3).
- OSWorld-Verified: **78.7%** (LEADS GPT-5.4 75.0, Opus 4.7 78.0).
- BrowseComp: GPT-5.5 Pro scores **90.1%** — top launch score on BrowseComp.
- MCP Atlas: **75.3%** (Opus 4.7 77.3, GPT-5.4 67.2).
- Codex agentic platform: multi-agent spin-up, 400K context per agent, full environment access, GitHub integration, automatic PR creation.
- Tau3-Banking / Tau2-Bench / Toolathlon: no verified public score found for this exact model/ID.

Reasoning / knowledge:

- AA Intelligence Index: **60.7** (#2 of 147) — broke 3-way tie with Anthropic and Google (Kilo, 25 Apr 2026).
- ARC-AGI-2: **85.0%** (vs GPT-5.4 73.3, Opus 4.7 N/A).
- AA Math: **62.7** (#41 of 82) (OrcaRouter, Oct 2026).
- Hallucination rate (SimpleQA, lower=better): **86%** — significant concern vs Opus 4.7's 36%.
- MMMLU multilingual: **83.2%** (Opus 4.7 91.5) — 8-point gap on multilingual.
- LCR / MLCR / CritPt: no verified public score found for this exact model/ID.
- Omniscience Accuracy: no verified public score found for this exact model/ID.

Coding:

- Terminal-Bench 2.0: 82.7% — current sandboxed-coding leader.
- Expert-SWE: 73.1% — long-horizon internal coding tasks.
- SWE-Bench Pro: **58.6%** (Opus 4.7 64.3) — real-world software engineering, **trails Opus by 5.7**.
- AA Coding Index: **58.7** (#45 of 138) (OrcaRouter).
- OSWorld-Verified: 78.7% — operating real computer environments.
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found for this exact model/ID.

Long context:

- 1.05M / 128K — full 1M production context.
- Strong long-context retention per Kilo pre-release testing.
- MRCR / RULER / GraphWalks at window length: no long-context retrieval reported for extreme lengths.

### Normalized scores (1–100)

- **Tool use: 92/100.** #1 Terminal-Bench 2.0 (82.7%). #1 Expert-SWE (73.1%). #1 OSWorld (78.7%). BrowseComp 90.1% on Pro tier. Codex platform is purpose-built for agentic coding. Capped because Toolathlon not published.
- **Reasoning: 94/100.** #2 AA Intelligence Index 60.7 (#2/147), broke 3-way tie. #1 ARC-AGI-2 85.0%. #1 GDPval 84.9%. But hallucination rate 86% (SimpleQA) is a major caveat — heavy verification needed for legal/medical/financial. Capped because the 86% hallucination rate drags the practical score.
- **Context window: 95/100.** 1.05M / 128K — full 1M production context. Strong long-context retention per Kilo pre-release testing. Capped at 95 because no public MRCR/RULER numbers at 500K-1M.
- **Multimodal: 80/100.** Text+image+file in, native (no video/audio per meta). OSWorld 78.7% (spatial UI). Solid but not class-leading. Capped at 80 because no published MMMU-Pro score.
- **Coding: 89/100.** Terminal-Bench 82.7% LEADS, Expert-SWE 73.1% LEADS, AA Coding 58.7. SWE-Bench Pro 58.6 trails Opus 4.7 by 5.7 — meaningful gap on real-world bug fixing. Capped because LiveCodeBench / SciCode not published.
- **Cost efficiency: 30/100.** $30/$180 is 6× GPT-5.5 standard ($5/$30), 6× Opus 4.7 ($5/$25), 6× Sonnet 4.6 ($3/$15). Batch 50% helps but Pro tier is a premium math/research tool, not a daily driver. Capped at 30 because the premium is 6× the standard tier.
- **Overall Score: 90/100** Half-up mean of Tool 92, Reasoning 94, Context 95, Multimodal 80, Coding 89 = 450/5 = 90.0. GPT-5.5 Pro is the agentic-coding leader on Terminal-Bench 2.0, OSWorld, and GDPval, but the 86% SimpleQA hallucination rate and the SWE-Bench Pro gap to Opus 4.7 keep it from being a clean sweep.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-13
- Method: public internet research (OpenAI launch, Kilo blog, JQ AI Systems, AI Catch Up, Verdent.ai, OrcaRouter, CodingFleet, ROO3). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.5_Pro_OpenAI.md`, using the same headings.

