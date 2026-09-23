# Claude Sonnet 5 — findings by Muse Spark 1.2

- Source: Anthropic/claude-sonnet-5 (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's most agentic Sonnet yet (June 2026) — near Opus 4.8 on coding/tool-use at Sonnet price/speed.
- **Provider / access:** Anthropic API `claude-sonnet-5` — via OpenCode Zen `anthropic/claude-sonnet-5`; in Claude Code, Claude.ai (Free/Pro default)
- **Release / knowledge:** 2026-06-30 GA; knowledge cutoff 2026-06
- **IDs:** `anthropic/claude-sonnet-5`
- **Context window:** 1,000,000 total / 128,000 max output — verified via Anthropic system card, BenchmarkList (1M)
- **Modalities:** Text, image in; text out; reasoning yes (extended thinking); tool calls yes; computer use yes; JSON mode yes
- **Pricing (as of 2026-09-23):** Paid $2/$10 per 1M intro through 2026-08-31, then $3/$15 per 1M standard — no Zen Free ID
- **Architecture:** Proprietary

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** vs Sonnet 4.6 67.0% (+13.4) / Opus 4.8 82.7% (-2.3) (source: Anthropic launch chart 2026-06-30, Apidog, LLM-Boss, BenchmarkList 80.5% rank 26/182)
- Terminal-Bench 3.0: **14.6%** pass@1 vs Opus 5 42.7% / Opus 4.8 frontier 42.7% (source: BenchmarkList)
- OSWorld-Verified: **81.2%** vs Sonnet 4.6 78.5% (+2.7) / Opus 4.8 83.4% (-2.2) (source: Anthropic, Apidog, BenchmarkList 85th pct)
- Toolathon: **74.7% pass@1 /84.3% pass@3 /65.7% pass^3** vs Sonnet 4.6 54.3% (source: BenchmarkList Toolathlon)
- Tau3-Banking: **37.3%** (88th pct rank 21/174) (source: BenchmarkList)
- GDPval-AA: **1618 Elo** vs Sonnet 4.6 1395 / Opus 4.8 1615 (+3) (source: Anthropic launch, LLM-Boss)
- GDPval-AA v2: **1609 Elo** (Apidog) — consistent
- AA-Briefcase: **1,383** (85th pct rank 9/56) (source: BenchmarkList)
- BrowseComp: **84.7%** (74th pct) (source: BenchmarkList)

Reasoning / knowledge:

- HLE (no tools): **43.2%** vs Sonnet 4.6 34.6% / Opus 4.8 49.8% (source: LLM-Boss, Apidog, BenchmarkList)
- HLE (with tools): **57.4%** vs Sonnet 4.6 46.8% / Opus 4.8 57.9% (near tie) (source: LLM-Boss)
- LCR / MLCR: **no verified LCR isolated for Sonnet 5** — proxy via ProgramBench 86.0% (29th pct) (source: BenchmarkList)
- CritPt: **no verified CritPt for Sonnet 5 isolated**
- Artificial Analysis Intelligence Index / BenchLM overall: **38** (AA Index v4.3, rank 43/202) vs Fable 5.1 53 / Opus 5 51 (source: o-mega.ai, Apidog note 38)
- Omniscience: **no verified AA-Omniscience for Sonnet 5 isolated**
- GDPval: see 1618 above

Coding:

- SWE-bench Verified: **85.2%** (system card body) / 79.6% (72 #12) (source: BenchmarkList, o-mega.ai)
- SWE-bench Pro: **63.2%** vs Sonnet 4.6 58.1% (+5.1) / Opus 4.8 69.2% (-6.0) / GPT-5.5 58.6% (+4.6) (source: Anthropic launch, Apidog, LLM-Boss, o-mega.ai)
- SWE-bench Multilingual: **78.3%** (82th pct) (source: BenchmarkList)
- SciCode: **53.6%** (96th pct rank 20/458) (source: BenchmarkList)
- LiveCodeBench: **82.4%** (66th pct) (source: BenchmarkList)
- Vibe Code Bench: **81.3% v1.1** (94th pct rank 5/71) (source: BenchmarkList)
- DeepSWE / Coding Index / other: **54.0% DeepSWE 1.1** (rank 2/2) / FrontierCode Main 0.4273 (61th pct) / Terminal-Bench 2.1 Best Harness 74.6%±1.6% (source: BenchmarkList); Convex 73.9% etc

Long context:

- 1M total — ProgramBench (Anthropic harness) 86.0% (29th pct 6/8) across episodes to full 1M (source: BenchmarkList); MRCR not disclosed isolated but long-horizon TB 0.5 mean reward 0.5 (95th pct 2/21) (source: BenchmarkList)

### Normalized scores (1–100)

- **Tool use: 86/100.** TB2.1 80.4% + OSWorld 81.2% + Toolathon 74.7% + Tau3 37.3% + BrowseComp 84.7% + Briefcase 1383 show strong agentic tool-use within 2-3 pts of Opus 4.8; capped by TB 80.4% trailing GPT-5.5 83.4% on some harnesses.
- **Reasoning: 82/100.** HLE 43.2%/57.4% (+8.6 over 4.6) + GDPval 1618 #1 Elo demonstrate solid reasoning near Opus; capped by HLE no-tools gap to Opus 49.8% and AA Index 38 mid-tier.
- **Context window: 96/100.** 1M total verified + ProgramBench 86% to full 1M + long-horizon TB 0.5 top-2; top tier but capped without MRCR 1M pointwise.
- **Multimodal: 62/100.** Text, image in; text out per Anthropic docs — image-only tier 60-70, no video/audio.
- **Coding: 84/100.** SWE-Verified 85.2% + SWE-Pro 63.2% (+5.1) + Multilingual 78.3% + SciCode 53.6% + Vibe 81.3% + LiveCode 82.4% show strong coding within 6 pts of Opus 4.8; capped by SWE-Pro gap to Opus 69.2%/Fable 80.3%.
- **Cost efficiency: 68/100.** Intro $2/$10 → $3/$15 standard vs Opus 4.8 $5/$25 — 40-60% cheaper, Sonnet pricing with near-flagship agentic scores; no Free but efficient vs Opus.
- **Overall Score: 82/100.** Mean of five non-cost dims (86+82+96+62+84)/5=82.0 → 82; best-fit as price-performance coding agent where Opus premium not justified for 2-6 point gains.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-23
- Method: public internet research (Anthropic Sonnet 5 launch 2026-06-30, system card, BenchmarkList, Apidog, LLM-Boss, o-mega.ai, ai-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
