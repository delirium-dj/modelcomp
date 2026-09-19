# Claude Fable 5.1 — findings by Grok 4.6

- Source: Anthropic / Claude Fable 5.1 (`claude-fable-5-1`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic’s most capable generally available Claude (September 2026), aimed at long-horizon agents, coding, research, and document work. Same list price as Fable 5 with cheaper cache reads; Mythos 5.1 is the Project Glasswing-only twin.
- **Provider / access:** Anthropic Claude API Messages (`claude-fable-5-1`); also Amazon Bedrock (`anthropic.claude-fable-5-1`), Google Cloud, Microsoft Foundry, Claude Platform on AWS. Pro/Max/Team/Enterprise product access. Messages API (not Chat Completions).
- **Release / knowledge:** Released 2026-09-01; reliable knowledge / training-data cutoff June 2026.
- **IDs:** `anthropic/claude-fable-5-1` (API); Bedrock `anthropic.claude-fable-5-1`. No OpenCode Zen Free ID found.
- **Context window:** 1M tokens total; max output 128K (Anthropic model overview, 2026-09).
- **Modalities:** Text and images in; text out. Adaptive thinking always on (default effort `high`). Tool use / computer use; JSON/structured outputs per Claude API. No public audio or video I/O.
- **Pricing (as of 2026-09-19):** $10 / $50 per 1M input / output; cache write $12.50 (5m) / $20 (1h); cache read $0.25; Batch 50% off. Paid only.
- **Architecture:** Proprietary; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (**Artificial Analysis**, max effort, default fallback): **91.4%** (AA Fable 5.1 article, 2026-09-01; AA also notes it as the highest they have measured on this harness)
- Terminal-Bench 4.0 (**Anthropic**, production safeguards): **55.8%** (Mythos 5.1 **60.9%** on the same table; Anthropic launch, 2026-09-01)
- Terminal-Bench-Science 0.1 (**Anthropic**): **52.6%** (±3.5–4.5 pts SE; launch table)
- Tau3-Banking: **no verified public absolute score found** (AA states a **+9 pt** gain vs Fable 5 at max effort, without publishing the 5.1 absolute)
- GDPval-AA v2: **1,853 Elo** (Anthropic + AA; AA: highest measured; CI overlaps Opus 5 at 1,824)
- AA-Briefcase: **1,694 Elo** (AA; effectively tied with Opus 5 at 1,685)
- OSWorld 2.0 (**Anthropic**, Aug 2026 task release): **77.9% partial**; strict **41.7%** cited in third-party recaps of the launch table — treat strict as vendor-adjacent
- AutomationBench: **31.4%** (Anthropic)
- MCP Atlas: **87.2%** (BenchLeader citing Scale AI SEAL; rank 2 of 34)
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond (**Artificial Analysis**, max): **93.7%**
- HLE (**AA** Intelligence Index slice): **59.1%** at max (AA: previous best 55.5% Fable 5); Scale/CAIS **46.5%** at xhigh also listed by aggregators
- HLE with tools (**Anthropic / third-party recaps of launch**): **65.0%** — use AA 59.1% as the independent no-tools/index figure
- Artificial Analysis Intelligence Index: **66 / #1** at max effort (xhigh **65**; low **58**); ~4% of Index output tokens via Opus 4.8/Opus 5 fallback
- AA-Omniscience Accuracy: **67.2%** (highest AA measured); attempt rate **93.4%**; hallucination among incorrect **72.6%**
- LCR / MLCR / CritPt: **no verified public score found** (AA-LCR **85.3%** appears on BenchLeader aggregators; treat as secondary)

Coding:

- SWE-bench Pro (**BenchLM / launch-era leaderboard**): **81.2%** (#1 of 49 as of 2026-09)
- SWE-bench Verified: **no verified public score found** for 5.1 specifically
- LiveCodeBench: **90.52%** (HokAI / BenchLeader aggregators, rank 1 of 138 — treat as aggregator, not a primary lab page)
- SciCode / AA-SciCode: **62.0%** (AA: highest they have measured)
- DeepSWE 1.1: **67.4%** Pass@1 (BenchmarkList aggregator)
- Vibe Code Bench: **no verified public score found**

Long context:

- Official window **1M** / 128K out. **no long-context retrieval reported** (no MRCR / RULER / GraphWalks figure found for Fable 5.1)

### Normalized scores (1–100)

- **Tool use: 96/100.** AA Terminal-Bench 2.1 91.4% and GDPval-AA 1,853 Elo sit at the methodology’s frontier refs (TB2.1 ~88%+, GDPval ~1750+). Caps: TB 4.0 55.8% under production safeguards, no public Tau3 absolute, Claw-Eval missing.
- **Reasoning: 96/100.** AA Intelligence Index 66 (#1), GPQA Diamond 93.7%, HLE 59.1% all exceed frontier refs (GPQA 90%+, HLE 40%+, Index 60+). Caps: fallback on ~4% of Index tokens; Omniscience hallucination rate rises with higher attempt rate.
- **Context window: 97/100.** Official 1M maps to 95–100; no public ≥98% retrieval at 512K+ so not 100.
- **Multimodal: 70/100.** Image + text in / text out (60–70 band) plus Anthropic’s document/spreadsheet/slide agentic claims. Caps: no audio or video I/O.
- **Coding: 96/100.** SWE-bench Pro 81.2% (#1), AA SciCode 62.0% (frontier 55%+), TB 2.1 91.4%. Caps: no verified SWE-bench Verified for 5.1; LiveCodeBench 90.5% is aggregator-sourced.
- **Cost efficiency: 30/100.** List $10/$50 matches the methodology’s ~30 band; cache-read $0.25 helps agents but AA still measures ~$3.76/Index task at max (more than Opus 5).
- **Overall Score: 91.0/100.** Mean of 96, 96, 97, 70, 96. Best fit: hardest long-horizon coding and knowledge-work agents when Opus 5 at high effort is not enough — not a default model given price.

---

## Signature

- Provided by: **Grok 4.6 (xAI/grok-4.6)** — 2026-09-19
- Method: Public internet research (Anthropic launch + docs, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
