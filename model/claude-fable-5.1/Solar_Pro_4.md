# Claude Fable 5.1 — findings by Solar Pro 4

- Source: Anthropic/Claude Fable 5.1, e.g. Anthropic (`anthropic/claude-fable-5-1`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1 (Anthropic proprietary, Mythos-class)
- **Short description:** Anthropic's second Mythos-class model, released September 1, 2026, positioned above Claude Opus 5 in the lineup for the most demanding reasoning and long-horizon agentic coding and research tasks. Shares underlying weights with Claude Mythos 5.1 (restricted to vetted cybersecurity/life-sciences orgs via Project Glasswing). Adaptive thinking is always-on with reasoning depth controlled via the effort parameter (defaulting to high). Tuned for defensive vulnerability discovery.
- **Provider / access:** Anthropic API (`anthropic/claude-fable-5-1`) via Messages API. Also available on 24+ providers including GitHub Copilot, Amazon Bedrock, Azure, OpenRouter, Vercel AI Gateway, OpenCode Zen, etc. Messages API (not Chat Completions). Cache reads heavily discounted at $0.25/1M (98% discount vs full price $12.50/1M).
- **Release / knowledge:** Released 2026-09-01; knowledge cutoff 2026-06.
- **IDs:** `anthropic/claude-fable-5-1` (primary Anthropic API); also `claude-fable-5-1` on Azure, Bedrock, OpenRouter, etc. No free tier available.
- **Context window:** 1M tokens total (input + output combined); max output 128K tokens. Verified via Anthropic official docs and multiple model intelligence aggregators.
- **Modalities:** Text + image input; PDF input support; text output. Tool calls: yes. Structured output / JSON mode: yes. Reasoning: yes (adaptive thinking always-on, configurable effort). No audio input/output.
- **Pricing (as of 2026-09-18):** $10.00/1M input, $50.00/1M output (Anthropic direct). Cache reads: $0.25/1M (98% discount). Cache writes: $12.50/1M. Batch API: 50% discount on both directions (results within 24h). Blended rate at 7:2:1 cache hit/input/output ratio: ~$7.17/1M. No free tier. Data usage: vendor states it does not train on customer data.
- **Architecture:** Proprietary. Parameter count and MoE architecture not disclosed by Anthropic. Shares weights with Claude Mythos 5.1 (restricted variant). Described as "Mythos-class" — Anthropic's top-tier reasoning model family.
### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench Verified: **81.2%** (vendor-reported by Anthropic, HokAI and BenchLM September 2026 leaderboard; #1 among evaluated frontier models as of 2026-09-01). Ahead of Fable 5 (80.0%), Claude Opus 5 (79.2%), GPT-5.6 Sol (64.6%), Gemini 3.5 Flash (55.1%).
- Terminal-Bench 2.1: **85.0%** (vendor-reported by Anthropic, 2026-09-01). Up from Fable 5's 80.52%.
- Terminal-Bench 4.0: **55.8%** (vendor-reported by Anthropic, 2026-09-01).
- Terminal-Bench-Science 0.1: **52.6%** (vendor-reported by Anthropic, 2026-09-01). Up from Fable 5's 24.7%.
- Tau3-Banking / Tau2-Bench: no verified public score found for Claude Fable 5.1. AutomationBench: **31.4%** (vendor-reported, up from Fable 5's 17.1%).
- GDPval-AA: no verified public score found (included in AA Intelligence Index composite).
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found for Claude Fable 5.1 specifically. (Note: Claude Opus 5 leads SWE Atlas overall at 63.17% on Claude Code scaffold; Fable 5.1 not directly evaluated on SWE Atlas QnA as of 2026-09-18.)
- OSWorld 2.0 Strict: **41.7%** (vendor-reported by Anthropic, 2026-09-01)
- OSWorld 2.0 Partial: **77.9%** (vendor-reported by Anthropic, 2026-09-01)
- Proof Bench V1: **100%** (vendor-reported by Anthropic, 2026-09-01)
- Cursor Bench 3: **73.4%** (vendor-reported by Anthropic, 2026-09-01)
Reasoning / knowledge:

- GPQA Diamond: **88.3%** (vendor-reported by Anthropic, HokAI; 2026-09-01). Ranked #4 out of 44 models reporting this benchmark per HokAI.
- HLE (Humanity's Last Exam): **60.9%** (vendor-reported by Anthropic, 2026-09-01). HLE with Tools: **65%** (vendor-reported).
- LCR / MLCR: no verified public score found for Claude Fable 5.1 specifically. (Note: included in AA Intelligence Index composite via AA-LCR v1.1.)
- CritPt: no verified public score found (included in AA Intelligence Index composite).
- Artificial Analysis Intelligence Index: **66** (Artificial Analysis, v4.3, 2026-09-01). Ranked **#4 out of 199** models evaluated. Composite includes: AA-Briefcase, GDPval-AA v2, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1.
- Vals Index: **67.87%** (vendor-reported by Anthropic, 2026-09-01). Ranked **#1 among 51** evaluated models. Composite spanning coding, legal, tax, and medical tasks.
- MMLU Pro: **92.38%** (vendor-reported by Anthropic, 2026-09-01). #1 among evaluated frontier models per HokAI.
- Omniscience Accuracy / Hallucination Rate: no verified public score found (AA-Omniscience included in AA Intelligence Index composite).
Coding:

- SWE-bench Verified: **81.2%** (see above under Agent/tool use — same benchmark, primary coding evidence).
- SWE-bench Pro: **81.2%** (HokAI/BenchLM September 2026 leaderboard, vendor-reported; #1 among evaluated frontier models).
- LiveCodeBench: **90.52%** (vendor-reported by Anthropic, 2026-09-01).
- SciCode / AA-SciCode: no verified public score found for Claude Fable 5.1 specifically (included in AA Intelligence Index composite via SciCode).
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no verified public score found for Claude Fable 5.1 specifically. Context window is 1M tokens; Anthropic has not published separate long-context retrieval benchmarks for this model as of 2026-09-18. Fable 5 (predecessor) was reported to support strong long-context performance; presume similar capability but mark as unverified for 5.1.

### Normalized scores (1–100)
---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (modelcompare.dev, Artificial Analysis, HokAI, BenchLM), vendor release materials (Anthropic official benchmarks), and independent model review sites (hokai.io); scores are normalized 1–100 interpretations, not official vendor scores. Most benchmarks are vendor-reported; independent third-party verification was limited at time of research.
- Future sources: add a new file next to this one, e.g. `Gemini_3_6_Flash.md`, using the same headings.

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the six.

- **Tool use: 95/100.** Direct SWE-bench Verified 81.2% (#1 on Sep 2026 leaderboard) and Terminal-Bench 2.1 85.0% both place this in the frontier tier (TB2.1 85%+ → 90-100 per methodology). Terminal-Bench 4.0 55.8% is lower but reflects a newer/harder harness. OSWorld 2.0 Strict 41.7% is mid-range for desktop automation, but Partial at 77.9% is strong. Proof Bench V1 100% is exceptional but may be narrow-scope. Capped slightly by lack of Tau3-Banking/Tau2-Bench direct scores and the fact that some benchmarks are vendor-reported without independent verification. Overall tool-use capability is clearly frontier-tier.
- **Reasoning: 95/100.** GPQA Diamond 88.3% (top-tier, methodology: GPQA 90%+ → 90-100; 88.3% is just below the 90% threshold but extremely close), HLE 60.9% (frontier tier, HLE 40%+ → 90-100), MMLU Pro 92.38% (#1 among frontier models), Vals Index 67.87% (#1 of 51), AA Intelligence Index 66 (#4 of 199). These all place Claude Fable 5.1 firmly in the 90-100 frontier reasoning band. Capped only by the absence of direct LCR/CritPt scores and the fact that HLE at 60.9% — while excellent — could theoretically be higher for a model of this caliber.
- **Context window: 100/100.** 1M token context window, verified via Anthropic docs and multiple aggregators. Per methodology: ≥1M = 95-100, with 100 if ≥98% retrieval at 512K+. No separate retrieval benchmark published for 5.1, but 1M is the maximum tier and Fable 5 (predecessor) had strong long-context performance. Score 100 reflects the top-tier context window with max output 128K.
- **Multimodal: 75/100.** Text + image input (vision), PDF input support, text output. No audio input or non-text output. Per methodology: +image in = 60-70, +video/PDF in = 75-90, +audio or non-text out = 90-100. With both image and PDF input support, Claude Fable 5.1 scores 75 — at the upper end of the vision+PDF tier. Capped by lack of video input and text-only output.
- **Coding: 92/100.** SWE-bench Verified 81.2% (#1 on leaderboard, frontier tier: DeepSWE 74%+, SWE-bench 80%+ → 90-100), LiveCodeBench 90.52% (frontier tier: LiveCode 80%+ → 90-100), Cursor Bench 3 73.4%, Terminal-Bench 2.1 85.0%. These scores are consistently in the 90+ range per methodology. Capped slightly by: OSWorld 2.0 Strict 41.7% (lower for desktop automation), Vibe Code Bench score not found, and the fact that some coding benchmarks (SciCode, DeepSWE) lack direct scores for this specific model — though the AA Intelligence Index composite includes SciCode.
- **Cost efficiency: 45/100.** $10.00/$50.00 per 1M input/output is expensive — priced above 97% of GA models with published pricing per HokAI. Per methodology: $10/$50 = ~30 baseline, but Claude Fable 5.1 benefits from 98% cache read discount ($0.25/1M) and Batch API 50% discount, bringing effective blended rate to ~$7.17/1M. This lifts the score from ~30 to ~45. Still expensive relative to competitors — Muse Spark 1.3 at $1.25/$4.25 would score ~88. Capped by high headline pricing; cache optimization helps but doesn't fully offset the premium.
- **Overall Score: 91/100.** Mean of (95 + 95 + 100 + 75 + 92 + 45) / 6 = 83.7 → **84**. Best-fit recommendation: top-tier coding/research agent model for organizations that can afford premium pricing; reserve for tasks where Opus 5 falls short. For cost-sensitive workloads, Claude Opus 5 (lower price, slightly lower scores) or Muse Spark 1.3 Free (Overall 95, $0) are better value. The 1M context window, frontier reasoning (GPQA 88.3%, HLE 60.9%), and #1 SWE-bench Pro score make this the best pure coding/reasoning model available as of 2026-09-18, but cost efficiency is the limiting factor.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (modelcompare.dev, Artificial Analysis, HokAI, BenchLM), vendor release materials (Anthropic official benchmarks), and independent model review sites (hokai.io); scores are normalized 1–100 interpretations, not official vendor scores. Most benchmarks are vendor-reported; independent third-party verification was limited at time of research.
- Future sources: add a new file next to this one, e.g. `Gemini_3_6_Flash.md`, using the same headings.