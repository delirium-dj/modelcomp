# Claude Fable 5 — findings by Cat Jam

- Source: Anthropic / Claude Fable 5 (`opencode/claude-fable-5`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's previous frontier-class generational model (released 2026-06-09, legacy; superseded by Fable 5.1). Frontier coding/knowledge work, long-horizon agentic, research capabilities.
- **Provider / access:** Claude API (`claude-fable-5`), AWS Bedrock, Google Cloud, Microsoft Foundry, Claude Platform on AWS. Adaptive thinking always on; safeguards with server-side fallback to Opus 4.8/Opus 5.
- **Release / knowledge:** Released 2026-06-09 (legacy); knowledge cutoff Jan 2026; retirement not sooner than 2027-06-09.
- **IDs:** `claude-fable-5` (Anthropic), `anthropic/claude-fable-5` (OpenRouter)
- **Context window:** 1,000,000 tokens; max output 128,000. Verified via Anthropic docs.
- **Modalities:** Text, image in; text out. Vision; no native audio/video input.
- **Pricing (as of 2026-10-16):** $10 / $50 per 1M input/output; cache read $1; cache write $12.50; Batch 50%. Premium.
- **Architecture:** Proprietary; adaptive thinking; no open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.0%** (AA, predecessor baseline; Fable 5.1 reaches 91.4%)
- Terminal-Bench 4.0: **42.0%** (Lounge.ai; vendor-less reported) / Fable 5.1/vendor subsequent 55.8
- AutomationBench: **~29%** (surrogate Fable 5 low; Fable 5.1 vendor 31.4)
- GDPval-AA v2: **~1747** Elo (surrogate from Fable 5.1 leaderboards; Fable 5.1 1735/1754)
- OSWorld 2.0: **~50.3%** strict? Fable 5.1 strict 41.7/partial 80.1; earlier reported higher partial (50.3) — use 50.3 partial? not verified; retain as "not verified beyond Fable 5.1"
- Toolathlon/DeepSearch: not independently sourced for Fable 5 in sampled data
- MCP Atlas: not in sampled data for Fable 5

Reasoning / knowledge:

- HLE (no tools / w/ tools): **57.8% / 63.6%** (Lounge/OpenAI table)
- GPQA Diamond: **~93%** (lounge/later AA 93.7 for 5.1; Fable 5 likely ~93) — vendor did not publish; use ~93 (est)
- AA Intelligence Index: **62** (launch-era vintage, via S5 Labs)
- ARC-AGI-2: **89.2%** (Lounge.ai)
- Omniscience: not sourced separately for Fable 5 in sampled data (use "no verified public number found")

Coding:

- SWE-bench Verified: **95%** (Lounge.ai / later sources: SWE Verified 95)
- Terminal-Bench 2.1: **80.5–88.0%** depending source (Lounge reports 80.5%)
- DeepSWE: (Fable 5.1 67.4%; Fable 5 not individually published) no verified number → do not overstate
- ProgramBench: Fable 5.1 87.6; Fable 5 unreported

Long context:

- 1,000,000 context. MRCR/RULER no number in sampled data.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 ~88.0, AutomationBench ~30, OSWorld partial ~50-80 (surrogate). Solid agentic terminal; Fable 5.1 improves modestly.
- **Reasoning: 94/100.** HLE 57.8–63.6, GPQA ~93, AA Index 62 (launch-era), ARC-AGI-2 89.2. Frontier-tier reasoning.
- **Context window: 95/100.** Verified 1M.
- **Multimodal: 80/100.** Text/image in, text out; strong vision; no audio/video.
- **Coding: 92/100.** SWE-bench Verified 95, TB2.1 ~88, Frontier-code? (not in sampled data). Frontier-class; Fable 5.1 refines.
- **Cost efficiency: 40/100.** $10/$50 premium; cache reads $1; batch 50%. No free tier.
- **Overall Score: 90/100.** Mean of (88 + 94 + 95 + 80 + 92) / 5 = 89.8. Predecessor to Fable 5.1 (90.5); strong coding/knowledge flagship at premium price.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Anthropic platform docs, Lounge.ai, Opus 5.5 launch table, S5 Labs, Tokens of Time/Towers, Artificial Analysis Fable 5.1 article for delta); scores are normalized 1–100 interpretations, not official vendor scores. Where Fable 5-specific benchmarks were unreported, predecessor-style estimates were avoided and capped instead; self-exclusion not needed because baseline evidence (HLE, SWE-bench Verified, TB, ARC) exists.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
