# Claude Opus 5.5 — findings by Claude Fable 5.1

- Source: Anthropic (`claude-opus-5-5`)
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5 (paid only — no Free-tier variant exists on OpenCode Zen or any verified host)
- **Short description:** Claude Opus 5.5 is the first model in Anthropic's new Claude 5.5 family. It performs at the level of Claude Fable 5.1 on most work and costs 40% less to run than Opus 5. Built for long-running agentic coding and knowledge work; it replaces Opus 5. No alias variants beyond effort levels (low/medium/high/xhigh/max); a `claude-opus-5.5-fast` premium-throughput variant exists on Vercel AI Gateway at 2× price.
- **Provider / access:** Anthropic Claude API (`claude-opus-5-5`, Messages API); OpenCode Zen `opencode/claude-opus-5-5` API: anthropic-messages, Base URL: https://opencode.ai/zen; OpenRouter `anthropic/claude-opus-5.5` (Chat Completions); also available on all platforms, including Amazon Web Services, Google Cloud, and Microsoft Azure. models.dev lists 37 providers.
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff Jun 2026 (Anthropic platform docs comparison table).
- **IDs:** `anthropic/claude-opus-5-5`; `opencode/claude-opus-5-5` (paid $4/$20 on Zen — no Free ID exists on Zen); `openrouter/anthropic/claude-opus-5.5`; Vercel `anthropic/claude-opus-5.5-fast` ($8/$40).
- **Context window:** 1M tokens total; 128K max output — verified via Anthropic platform docs (Context window: 1M tokens, Max output: 128K tokens), models.dev and OpenRouter. On the Message Batches API, Claude Opus 5.5 supports up to 300k output tokens with the output-300k-2026-03-24 beta header. Cursor exposes Context window 300k, Max context 1M. There is no separate long-context multiplier for Opus 5.5. Context windows up to 1M tokens use the same rates.
- **Modalities:** text, image, PDF in; text out (models.dev: input: text, image, pdf; output: text; tool calling, reasoning). No audio/video input. Reasoning: yes — Adaptive thinking is always on and can't be turned off. Control thinking depth with the effort parameter. Tool calls: yes (forced tool use returns an error). Structured output: listed "Yes" on Azure, "-" on OpenCode Zen (models.dev). Temperature not supported.
- **Pricing (as of 2026-09-30):** $4/$20 per 1M input/output tokens (Opus 5: $5/$25) and cache reads from $0.50 to $0.20; cache write $5/1M (Pi/Zen). Paid $ — no free tier, so no free-tier privacy caveat applies. Vendor claims at default settings it will cost 40% less than Opus 5 on typical workloads.
- **Architecture:** Proprietary, closed weights (models.dev: Weights: Closed). Parameter count / MoE status not disclosed. Ships with safety classifiers similar to Claude Fable 5.1 in biology, cyber security, and AI development. Requests will be refused more frequently as compared to previous Opus versions.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found. Terminal-Bench **4.0**: **66.4%** (Anthropic self-report, xhigh effort — 66.4% on Terminal-Bench 4.0, compared with 55.8% for Fable 5.1 and 52.3% for Opus 5; standard error is ±2.6 pts); **63.1%** (Artificial Analysis independent, Claude Code harness, max effort — Terminal-Bench 4.0 … 63.1% vs Opus 5 54.5%, +8.6 points)
- Tau3-Banking / Tau2-Bench: no verified public score found (Anthropic did not report SWE-bench Verified, GPQA Diamond, MMMLU, tau-bench or ARC-AGI results for Opus 5.5 in the announcement or the system card.)
- GDPval-AA: **1846** Elo (v2.1; Artificial Analysis, #1 — leads AA-Briefcase v1.1 at 1,822 Elo (+143 over Fable 5.1) and GDPval-AA v2.1 at 1,846 Elo (+111 over Claude Fable 5.1, +138 over Claude Opus 5))
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: SWE-Atlas-QnA **66.4%** (Artificial Analysis Coding Agent Index, pass@1 avg of 3, 124 tasks — SWE-Atlas-QnA to 66.4%); Toolathon / MCP-Atlas: no verified public score found
- Other agentic: OSWorld 2.0 **81.8%**; AutomationBench **40.0%** (Anthropic self-report table — OSWorld 2.0 | 81.8% | 80.7% | 74.0% … AutomationBench | 40.0% | 31.4% | 26.9% | 41.4%; Zapier ran AutomationBench without fallback models, so safeguard interventions counted as failures.)
  Reasoning / knowledge:
- GPQA Diamond: no verified public score found (not reported by Anthropic; no independent leaderboard entry located for this exact model ID)
- HLE: **61.4%** (Artificial Analysis, max effort with fallback, #1 — Humanity's Last Exam 61.4% (previous best 59.1%, Claude Fable 5.1))
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **58 / #1** (max effort — At max effort it scores 58 on the Artificial Analysis Intelligence Index, the highest score we have measured by several points.; per-effort: xhigh 56, high 54, medium 51, low 42 per AA model pages). BenchLM overall: no verified numeric score found (BenchLM lists Opus 5.5 as best-verified on SWE-bench Pro at 89.9% but no composite located).
- Omniscience Accuracy / Hallucination Rate: AA reports Opus 5.5 leads AA-Omniscience (leading scores on six of the ten Intelligence Index evaluations: Humanity's Last Exam 61.4% …, SciCode 66.9% …, GDPval-AA v2.1, AA-Briefcase v1.1, AA-Omniscience and AutomationBench-AA) — numeric accuracy % / hallucination % : no verified public score found
- Other: Terminal-Bench-Science 0.1 **58.7%** (Anthropic; GPT-6 Astra 64.6% leads); AA-Briefcase v1.1 **1,822 Elo** (AA, #1)
  Coding:
- SWE-bench Verified / SWE-Pro: Verified: no verified public score found (Not from Anthropic. The announcement and system card report SWE-bench Pro (89.9%), SWE-bench Multilingual (93.9%) and SWE-bench Multimodal (61.4%) instead.) / SWE-bench Pro: **89.9%** (Anthropic system card; corroborated by BenchLM "best verified: Claude Opus 5.5 · 89.9%")
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **66.9%** (Artificial Analysis, #1 — SciCode 66.9% (63.1%, Fable 5.1))
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: DeepSWE v1.1 **68.4%** (Artificial Analysis independent, Claude Code max — DeepSWE v1.1 to 68.4%); **74.2%** (Anthropic system card §8 self-report via third-party summary); AA Coding Agent Index **66 / #1** (Claude Opus 5.5 tops the Artificial Analysis Coding Agent Index with a score of 66, the highest ever measured., at $13.04 per task); FrontierCode v1.1 Main **54.4%** xhigh / **54.6%** medium (Anthropic — At default effort (medium), Opus 5.5 scores 54.6%, higher than all other models, beating GPT-6 Astra's top score (53.3%)); CursorBench 4.0 **57.8%** max / **52.5%** medium (Anthropic); Sonar HumanEval+MBPP Java **87.7%** (87.7% pass result across the 544 HumanEval and MBPP tasks with executable tests, against 88.6% for Opus 5)
  Long context:
- No long-context retrieval reported: no MRCR / RULER / GraphWalks score found for Opus 5.5 at any window length. 1M window is vendor-verified but retrieval quality at 512K+ is unmeasured publicly. (Only non-retrieval long-context signal: ProgramBench 91.2% self-report in system card §8 via third-party summary.)

### Normalized scores (1-100)

- **Tool use: 93/100.** GDPval-AA 1846 Elo clears the ≥1750 frontier bar (#1, independent AA); AutomationBench 40.0% is within 1.4 pts of the leader; OSWorld 2.0 81.8% leads. Terminal-Bench is only available as v4.0 (66.4% vendor / 63.1% AA) not the v2.1 harness in the rubric, and Tau3-Banking has no public score — these gaps cap it below 95.
- **Reasoning: 92/100.** HLE 61.4% is far above the 40% frontier threshold and is the highest AA has measured; AA Intelligence Index 58 is #1 overall but sits just under the rubric's 60+ frontier line; GPQA Diamond, LCR/MLCR and CritPt all missing publicly. Held below 95 by the missing GPQA and the 58 (<60) index.
- **Context window: 95/100.** ≥1M tier (95-100) — 1M total / 128K output verified via Anthropic platform docs, models.dev, OpenRouter and OpenCode Zen listing. 100 not awarded because no MRCR/RULER retrieval ≥98% at 512K+ is publicly reported.
- **Multimodal: 80/100.** Text + image + PDF input, text-only output (models.dev, Pi/Zen config). Falls in the 75-90 "+video/PDF in" tier; no video or audio input and no non-text output, so mid-tier 80.
- **Coding: 94/100.** #1 on AA Coding Agent Index (66); SWE-bench Pro 89.9%; SciCode 66.9% (>55% frontier); DeepSWE 68.4% independent (74.2% vendor, at the 74% frontier line); TB 4.0 66.4%; FrontierCode and CursorBench leads. Capped by absence of SWE-bench Verified / LiveCodeBench and the AA DeepSWE (68.4%) landing below 74% independently.
- **Cost efficiency: 55/100.** Paid $4/$20 per 1M (cache read $0.20) — between the rubric's $3/$15 (~60) and $10/$50 (~30) anchors; interpolated ≈55. Note high per-task cost at max effort (about 37% more tokens per task than Opus 5 and raises estimated API cost by 21%, despite lower unit prices), offset by vendor-claimed 40% lower cost at default effort.
- **Overall Score: 90.8/100.** Mean of (93 + 92 + 95 + 80 + 94) / 5 = 90.8; cost excluded. Best fit: long-running autonomous coding agents, repo-scale migrations and professional knowledge-work agents where paying frontier prices is acceptable; run at medium/high effort for the best cost-per-task Pareto position.

---

## Signature

- Provided by: **Claude Fable 5.1 (anthropic/claude-fable-5.1)** — 2026-09-30
- Method: fresh public internet research (Anthropic announcement + platform docs, Artificial Analysis model pages/article, models.dev, OpenCode Zen/Pi config listing, OpenRouter, Cursor docs, AWS blog, BenchLM, and press coverage of the system card); no prior chat memory used; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
