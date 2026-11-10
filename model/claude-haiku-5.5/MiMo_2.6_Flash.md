# Claude Haiku 5.5 — findings by MiMo 2.6 Flash

- Source: Anthropic (`claude-haiku-5-5`)
- Date: 2026-11-10 (UTC) — second-pass enrichment re-research (previous 2026-10-13)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-10** (user-approved). Previous Signature
> 2026-10-13 (Overall 81). Fresh sources this pass: BenchLM model page
> (snapshot 2026-11-10, overall 66.12, rank #27/1020, 51/804 rows) with its
> cited leaderboards (AA, ARC Prize, Epoch AI, Proximal, Cognition, Nous
> Research, LlamaIndex ParseBench) and rows from the Fable/Mythos 5.2 system
> card comparison tables. Changes: Tool use 82→83 (new AA Harvey LAB
> **89.9%** — near Opus 5.5's 91.2 — plus AA-AnalystAgent 53.8%, Hermes
> Bench 71.0%, Agents' Last Exam Linux 57.0%); Reasoning 80→81 (new
> FrontierMath v2 T1–3 **75.088%**, ARC-AGI-1 **89.00**/ARC-AGI-2 61.3, and
> AA-LCR **82.7** — previously unpublished); Coding 78→79 (AA-SciCode
> **55.0** now clears the 55% ref). Held: Context 95 (AA-LCR is reasoning,
> still no window-length retrieval %), Multimodal 72 (ParseBench 56.02 and
> PerceptionBench 78.6 are mid; text-only out/no video caps stand), Cost 95;
> Overall 81→82 (mean exactly 82.0).

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's fastest and most cost-efficient Claude 5.5-family model, launched 2026-10-07 for high-volume, cost-sensitive work (extraction, classification, summaries, short agent steps). Massive generational leap over Haiku 4.5 with a 1M context window and adaptive thinking.
- **Provider / access:** Claude API (Messages API, `claude-haiku-5-5`), Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry, Claude Platform on AWS. Chat Completions-style Messages API.
- **Release / knowledge:** Released 2026-10-07; earliest retirement commitment 2027-10-07; knowledge/training-data cutoff June 2026.
- **IDs:** `anthropic/claude-haiku-5-5` (Claude API); no OpenCode Zen Free ID verified.
- **Context window:** 1,000,000 tokens; max output 128,000 tokens (batch beta up to 300K with `output-300k-2026-03-24`).
- **Modalities:** text + image in; text out; adaptive thinking (effort levels low/medium/high/xhigh/max, default medium); tool calls; JSON mode.
- **Pricing (as of 2026-10-13):** prompts ≤100K tokens: $0.10 / 1M input, $0.50 / 1M output, $0.01 cache read; prompts >100K: $0.50 / $2.50 / $0.05. 5-min cache write $0.125/$0.625; 1-hr $0.20/$1.00. Batch API 50% off. 90% cheaper than Haiku 4.5 on short prompts.
- **Architecture:** proprietary; parameters/layers not disclosed.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2.1: **1,620 Elo** max effort (Anthropic launch; Haiku 4.5: 735; GPT-6 Luna: 1,437); normalized 56.0% (AA)
- AA-Briefcase v1.1: **1,578 Elo** max effort (Anthropic launch; Haiku 4.5: 614; GPT-6 Luna: 1,336)
- OSWorld 2.1 offline: **72.4% partial / 37.1% strict** (system card Fig 8.9.3.A; GPT-6 Luna 48.9%/17.1%; Sonnet 5.5 83.9%/48.8%)
- CyberBench v1.1: **75.48%** (Vals AI; #5 of 47; ahead of Sonnet 5.5's 59.58%)
- AA Harvey LAB v1.0: **89.9%** (AA leaderboard, via BenchLM 2026-11-10 — new; near Opus 5.5's 91.2)
- AA AutomationBench: **35.4%** / strict **13.9%**; AA-AnalystAgent **53.8%**; GDP.pdf **20.8%**; AA Terminal-Bench 4.0 **32.8%** (AA — new)
- Agents' Last Exam (Linux): **57.0%** (Meta Muse Ember launch comparison, 2026-11-09 — new); Hermes Index **37.0%** / Hermes Bench **71.0%** (Nous Research — new); MazeBench 1% (new)
- Gray Swan indirect-injection attack success: **7.1%** at 15 attacker attempts (system card; Haiku 4.5 was 83.2%)

Reasoning / knowledge:

- HLE no tools: **45.9%** (Anthropic launch; Haiku 4.5: 10.2%) / **44.4%** (AA independent — new)
- HLE with tools: **57.4%** (Anthropic launch; Sonnet 5.5: 64.5%)
- Artificial Analysis Intelligence Index: **36.5** (current AA leaderboard via BenchLM — new); previous effort-level readings 43 max / 41 xhigh / 38 high / 34 medium / 29 low (v4.3.2, checked 2026-10-08) — index version noted
- **FrontierMath v2: 75.088% (Tiers 1–3) / 46.341% (Tier 4)** — Epoch AI leaderboard (new this pass — first math rows)
- **ARC-AGI-1: 89.00% / ARC-AGI-2: 61.3% / ARC-AGI-3: 0.5% (2.82% adapter)** — ARC Prize published results (new this pass)
- AA-LCR: **82.7%** (AA leaderboard — new, previously unpublished); MLCR-AA **35.0%**; CritPt **18.9%** (AA — new)
- AA-Omniscience: index **12.3**, accuracy **34.7%**, hallucination rate **34.2%** (AA — new)
- HealthBench raw **61.2%** / length-adjusted 58.5%; HealthBench Professional raw **64.8%** / 58.4% (Fable/Mythos 5.2 system card comparison table — new)
- Vals Index: **54.31%** (#18 of 47; ±1.41); ProofBench v1.1: **89.00%** (Vals AI; #10 of 50)
- MedScribe: **89.54%** (Vals AI; #6 of 108); BioMysteryBench: **70.37%** (Vals AI; #12 of 27)

Coding:

- Terminal-Bench 4.0: **39.2%** launch max (Anthropic); **35.35%** Vals AI independent (max effort); **32.8%** AA independent (new); GPT-6 Luna 16.4%
- FrontierCode 1.1 Main: **46.4%** max (Cognition public data; Sonnet 5.5 max 46.2%, xhigh 52.1%; GPT-6 Luna max 42.4%)
- **FrontierCode 2.0: 27.7%** (Cognition) / **34.9%** (AA) — new, harder v2 harness
- **FrontierSWE v2: 43.8%** (Proximal leaderboard — new); **AA-SciCode: 55.0%** (AA leaderboard — new, **clears the 55% ref**); Bug Hunt Bench 21.5 fixes (new)
- Vibe Code Bench v1.1: **90.44%** (Vals AI; #3 of 112; behind Sonnet 5.5 92.39%, Gemini 4 Argon 91.91%)
- SWE-bench Multimodal: **43.96%** (Vals AI; #7 of 15)
- Code Migration: **44.57%** (Vals AI; up from Haiku 4.5 Thinking's 7.55%)

Long context:

- AA-LCR: **82.7%** (AA leaderboard, via BenchLM 2026-11-10 — new; long-context *reasoning*, not a window-length retrieval %); 1M window is 5× Haiku 4.5's 200K. No MRCR/RULER retrieval figure found.

Multimodal:

- Chartography (no tools): **46.4%** (Anthropic launch; beats Luna 29.1%, below Sonnet 61.6%)
- **ParseBench: 56.02%** (LlamaIndex leaderboard, 2026-11-09 snapshot — new); **PerceptionBench (tools): 78.6%** (Meta Muse Ember comparison — new); Design Arena Website 1258 (OpenRouter — new)
- SWE-bench Multimodal 43.96% (Vals, see Coding). No video/audio input; text-only output.

### Normalized scores (1–100)

- **Tool use: 83/100.** GDPval-AA 1,620 and AA-Briefcase 1,578 Elo crush Haiku 4.5 and beat GPT-6 Luna; OSWorld strict 37.1% is a serious computer-use result for the price tier; CyberBench 75.48% #5; the new AA Harvey LAB 89.9% (near Opus 5.5's 91.2), AnalystAgent 53.8%, Hermes Bench 71.0% and Agents' Last Exam Linux 57.0% round out the profile → 83 (was 82). Capped by OSWorld still trailing Sonnet/Opus (48.8%/53.2% strict), AutomationBench strict 13.9%, and GDP.pdf 20.8%.
- **Reasoning: 81/100.** HLE 45.9% closed-book (57.4% with tools; AA independent 44.4) clears the 40% ref and is remarkable for a Haiku-class model; new FrontierMath v2 75.088% (T1–3) and ARC-AGI-1 89.00 are first-class math/pattern rows, with AA-LCR 82.7 now published → 81 (was 80). Capped by the AA Index (36.5 current leaderboard; 43 at max effort on v4.3.2) still well below the 60+ ref and CritPt 18.9.
- **Context window: 95/100.** Full 1M-token window (5× Haiku 4.5), 128K output (2× Haiku 4.5), 300K batch beta; the new AA-LCR 82.7 is long-context reasoning, not a window-length retrieval score — MRCR/RULER still absent (the standing cap), plus the 100K pricing-band boundary makes >100K prompts 5× more expensive.
- **Multimodal: 72/100.** Text+image input; Chartography 46.4% (beats Luna 29.1%, below Sonnet 61.6%); SWE-bench Multimodal 43.96% #7/15; new ParseBench 56.02 and PerceptionBench (tools) 78.6 are mid-tier confirmations. Capped by text-only output, no video/audio, and chart-reading errors still substantial.
- **Coding: 79/100.** TB4.0 39.2% crushes Luna (16.4%); FrontierCode 46.4% max ties Sonnet 5.5 at max effort; Vibe Code Bench 90.44% #3/112; the new AA-SciCode 55.0% **clears the 55% ref** → 79 (was 78). Capped by TB4 still far below Sonnet launch 70.6%, FrontierCode 2.0 at 27.7–34.9 on the harder harness, and ProgramBench 2.50% / Harvey Legal Agent 1.25% showing weak spots on specialized agent coding.
- **Cost efficiency: 95/100.** $0.10/$0.50 for prompts ≤100K matches GPT-6 Luna's base rate — essentially free for a 1M-context frontier-adjacent model; 90% cheaper than Haiku 4.5. Capped slightly by the 100K pricing cliff ($0.50/$2.50 above) and new tokenizer counting ~30% more tokens than Haiku 4.5.
- **Overall Score: 82/100.** Mean of (83 + 81 + 95 + 72 + 79) / 5 = 410/5 = 82.0 → **82**. Best-fit recommendation: the new default for high-volume cheap work (extraction, routing, summaries, short agent loops) — Haiku 4.5's replacement with 1M context and near-Sonnet coding at max effort; for long prompts (>100K) price-check against GPT-6 Luna which stays in its cheaper band longer.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-11-10
- Method: second-pass enrichment re-research (public internet research: BenchLM model page snapshot 2026-11-10 with its cited sources — AA leaderboards, ARC Prize published results, Epoch AI FrontierMath v2, Proximal FrontierSWE, Cognition FrontierCode 2.0, Nous Research Hermes, LlamaIndex ParseBench, Meta Muse Ember comparison — plus Anthropic launch/system-card rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Haiku 5.5 (BenchLM, snapshot 2026-11-10)](https://benchlm.ai/models/claude-haiku-5-5)
  - [Introducing Claude Haiku 5.5 (Anthropic)](https://www.anthropic.com/claude-haiku-5-5)
  - [Claude Haiku 5.5 system card (Anthropic)](https://www-cdn.anthropic.com/e1080d6bf5ae2018ea3c2f414064be03232f5be5/Claude%20Haiku%205.5%20System%20Card.pdf)
  - [ARC Prize published results — Claude Haiku 5.5](https://arcprize.org/results/anthropic-claude-haiku-5-5)
  - [FrontierMath v2 leaderboard (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
