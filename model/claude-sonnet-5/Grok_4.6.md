# Claude Sonnet 5 — findings by Grok 4.6

- Source: Anthropic / Claude Sonnet 5 (`claude-sonnet-5`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic’s June 2026 Sonnet generation: drop-in successor to Sonnet 4.6 with adaptive thinking on by default, a new tokenizer (~30% more tokens for the same text), and 1M context. Positioned as the speed/intelligence default versus Opus/Fable.
- **Provider / access:** Anthropic Claude API Messages (`claude-sonnet-5`); Bedrock `anthropic.claude-sonnet-5`; Google Cloud / Microsoft Foundry / Claude Platform on AWS. Messages API.
- **Release / knowledge:** Released 2026-06-30; reliable knowledge cutoff January 2026.
- **IDs:** `anthropic/claude-sonnet-5`. No OpenCode Zen Free ID found.
- **Context window:** 1M tokens default and max; max output 128K (Anthropic overview). Full 1M billed at standard per-token rates.
- **Modalities:** Text and images in; text out. Adaptive thinking (default effort `high`; `xhigh`/`max` available). Computer use (`computer_toolset_20260801`) and browser use on Claude API / Google Cloud. Tool calls. Sampling params other than defaults return 400.
- **Pricing (as of 2026-09-19):** $2 / $10 per 1M in / out (intro $2/$10 made permanent; scheduled $3/$15 hike on 2026-09-01 did not occur). Cache write $2.50 (5m) / $4 (1h); cache read $0.20; Batch 50% off. Paid only.
- **Architecture:** Proprietary; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (**Anthropic system card**, mini-SWE-agent, xhigh, 5 trials × 89 tasks): **80.4%**
- Terminal-Bench 2.1 (**AA launch article**): **+9 points vs Sonnet 4.6** (absolute AA figure not restated in the article body)
- Terminal-Bench 4.0: **no verified public Anthropic score found** (AA Intelligence Index v4.3 includes TB 4.0; Sonnet 5 Index **38** on that later mix)
- Tau3-Banking: **no verified public score found**
- GDPval-AA v2: **1,618 Elo** (independent AA; Anthropic system card: 2nd, tied with Opus 4.8 at 1,615; Fable 5 at 1,783 in that snapshot)
- AA-Briefcase: **1,393 Elo** (system card / AA; 2nd, tied with Opus 4.8 1,352)
- OSWorld-Verified: **81.2%** pass@1, 5-run mean (Anthropic; 361 tasks, 100 steps, max effort)
- AutomationBench: **no verified public numeric score found** in the system-card excerpt retrieved
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathlon: listed in the system card table of contents; **no verified public numeric score extracted**

Reasoning / knowledge:

- GPQA Diamond (**Artificial Analysis**, max): **91.1%** (BenchLeader AA leaderboard)
- HLE no tools (**Anthropic launch / system-card recaps**): **43.2%**
- HLE with tools: **57.4%** (Anthropic; BrowseComp blocklist + Opus 4.6 transcript review)
- AA-HLE: **41.3%** (BenchLM aggregator)
- CritPt: **17%** (AA launch article)
- Artificial Analysis Intelligence Index: **53 / ~#5** at max on the **launch-era** Index (2026-06-30 article); later **38** on **Index v4.3** (harder mix incl. TB 4.0, CritPt, Omniscience — AA model page)
- AA-Omniscience Accuracy: **40.1%**; hallucination rate **39.4%**; Index **16.5** (BenchLM aggregator of AA)
- LCR / MLCR: **no verified primary score found** (AA-LCR is in Index v4.3; no standalone number retrieved)

Coding:

- SWE-bench Verified (**Anthropic**, 5-trial mean): **85.2%**
- SWE-bench Pro: **63.2%**
- SWE-bench Multilingual: **78.3%**
- SWE-bench Multimodal: **28.1%**
- LiveCodeBench (Vals): **82.4%** (BenchLM aggregator — not a primary lab page)
- AA-SciCode: **54.3%** (BenchLM); AA launch: **+7 points vs Sonnet 4.6**
- Vibe Code Bench: **no verified public score found**

Long context:

- Official **1M** / 128K out. **no long-context retrieval reported** (no MRCR / RULER / GraphWalks figure found)

### Normalized scores (1–100)

- **Tool use: 86/100.** TB 2.1 80.4% is below the ~88% frontier ref but well above mid (45–60%); GDPval-AA 1,618 sits between mid (~900–1200) and frontier (~1750+); OSWorld-Verified 81.2% is strong computer use. Caps: no Tau3/Claw; TB 4.0 not published by Anthropic.
- **Reasoning: 88/100.** GPQA Diamond 91.1% is frontier; HLE 43.2% no-tools clears the 40% frontier ref; launch Index 53 is short of 60+. Caps: CritPt 17%; later AA Index v4.3 at 38; Omniscience accuracy ~40%.
- **Context window: 97/100.** Official 1M maps to 95–100; no public ≥98% retrieval at 512K+ so not 100.
- **Multimodal: 70/100.** Image in / text out plus computer-use and document (GDP.pdf / OSWorld) evals. Caps: no audio/video I/O; SWE-bench Multimodal only 28.1%.
- **Coding: 88/100.** SWE-Verified 85.2% and TB 2.1 80.4% are high; Pro 63.2% is solid but not Fable-class. Caps: SciCode ~54% (frontier ref 55%+); multimodal SWE weak.
- **Cost efficiency: 75/100.** Permanent $2/$10 sits between the methodology’s ~$1.25/$4.25 (~88) and $3/$15 (~60) bands. AA’s launch cost used $3/$15 (~$2.29/Index task); list price is now the cheaper $2/$10.
- **Overall Score: 85.8/100.** Mean of 86, 88, 97, 70, 88. Best fit: default production coding/agents on Anthropic when Fable/Opus 5 cost is not justified.

---

## Signature

- Provided by: **Grok 4.6 (xAI/grok-4.6)** — 2026-09-19
- Method: Public internet research (Anthropic docs, system card, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
