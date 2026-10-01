# Claude Sonnet 5.5 — findings by Grok 4.6

- Source: Anthropic (`claude-sonnet-5-5`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic’s 2026-09-28 Sonnet 5.5 is the fast mid-tier of the Claude 5.5 family: adaptive thinking, native 1M context, and agentic coding close to Opus 5.5 at half Opus list price. Distinct from Sonnet 5 and from Opus 5.5 / Fable 5.1.
- **Provider / access:** Anthropic Messages API `claude-sonnet-5-5` (`https://api.anthropic.com/v1/messages`). Bedrock `anthropic.claude-sonnet-5-5`; Google Cloud / Microsoft Foundry / Claude Platform on AWS same `claude-sonnet-5-5`. OpenCode Zen Messages `https://opencode.ai/zen` id `claude-sonnet-5-5` (`opencode/claude-sonnet-5-5`). No verified $0 Zen Free ID.
- **Release / knowledge:** Released 2026-09-28; knowledge / training cutoff June 2026 (platform docs).
- **IDs:** `claude-sonnet-5-5` (no date suffix); `opencode/claude-sonnet-5-5`; Bedrock `anthropic.claude-sonnet-5-5`. No Free ID on Zen.
- **Context window:** 1M tokens native (no beta header); max output 128K; Message Batches beta up to 300K output (`output-300k-2026-03-24`).
- **Modalities:** Text and images in, text out; file/PDF input on Vals/platform surfaces. Video and audio not supported. Adaptive thinking (default on); effort `low`/`medium`/`high`/`xhigh`/`max`; tools; computer-use toolset. Temperature/top_p/top_k non-default → 400.
- **Pricing (as of 2026-10-01):** $2 / $10 per 1M in/out; 5m cache write $2.50, 1h $4, cache read $0.20; Batch 50% off. Same list as Sonnet 5. US-only inference 1.1×. AA measured ~$7.60/Intelligence-Index task (highest output tokens/task they report). Paid.
- **Architecture:** Proprietary closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (Anthropic launch / system card, Claude Code `--bare`, safeguards on); Artificial Analysis **64%** (max) / BenchLM AA TB4.0 **63.6%** — vendor vs independent gap noted
- Terminal-Bench 2.1: **no verified public score found** for this ID
- Terminal-Bench-Science 0.1: **59.9%** (system card)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA v2.1: **1844** Elo (Anthropic citing AA; Opus 5.5 1846). AA also lists a **67.2%** GDPval-AA pass-style figure (BenchLM)
- AA-Briefcase v1.1: **1811** Elo
- Toolathlon-Verified: **77.8%** Pass@1; Pass@3 **85.2%**; Pass³ **68.5%** (system card)
- AutomationBench: Zapier 1.0.6 **44.7%** (system card); AA AutomationBench **71.3%** (BenchLM)
- OSWorld 2.1: **80.1%** computer-use (launch table; strict-pass **43.5%** in some recaps — treat 80.1 as the headline vendor computer-use row)
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (system card uses GPQA only in a CoT-controllability probe, not an accuracy table)
- HLE: **56.9%** no tools; **64.5%** with tools (system card / launch). AA-HLE **55.0%**
- AA-LCR: **82.7%**; MLCR-AA **75.0%** (BenchLM / AA)
- CritPt: **31.4%** (AA via BenchLM)
- Artificial Analysis Intelligence Index v4.3.2: **56** (#2 behind Opus 5.5 max 58 per AA article)
- AA-Omniscience Accuracy / Hallucination Rate: **54.0% / 47.0%**; Index **32.3**
- ArXivMath Aug. 2026: **86.8%** no tools / **95.2%** tools (system card)
- DRACO: **87.0%** (system card)

Coding:

- SWE-bench Verified: **no verified public score found** for 5.5 (Vals lists Vibe, not a SWE-Verified row in the snippets retrieved)
- SWE-bench Pro: **81.3%** (system card)
- SWE Multilingual / Multimodal: **90.3% / 54.3%**
- DeepSWE v1.1: **71.0%** (system card, 5-trial mean)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **61.0%** (AA via BenchLM)
- Vibe Code Bench v1.1: **92.39%** ±1.26 (Vals AI model page)
- CursorBench 4.0: **55.5%** (Cursor / launch)
- FrontierCode 1.1 Main: **46.2%** Max / **52.1%** Xhigh (launch)
- FrontierSWE v2: **61.9%** (Proximal; BenchLM)
- ProgramBench: **79.7%** (system card; long-context up to 1M)

Long context:

- Native **1M**; ProgramBench **79.7%** spanning up to the full window; AA-LCR **82.7%** — not ≥98% retrieval at 512K+. No MRCR/RULER/GraphWalks number found.

Multimodal extras: Chartography **61.6%** no tools / **90.2%** with tools; BenchCAD Vision2Code **0.747 / 0.963**.

### Normalized scores (1–100)

- **Tool use: 94/100.** GDPval-AA 1844 exceeds the ~1750 frontier band; TB4.0 70.6% (AA ~64%) leads the published closed-model TB4.0 table vs Opus 5.5 66.4% vendor; Toolathlon 77.8 and OSWorld 80.1 are near-frontier. Caps: no Tau3/Claw; Zapier AutomationBench 44.7 vs AA 71.3; vendor/AA TB4.0 split.
- **Reasoning: 90/100.** HLE 56.9 / 64.5% (tools) is well above the 40%+ frontier band; Index 56 is just under the 60+ band. Caps: no GPQA Diamond accuracy; AA-LCR 82.7 vs 95%+; CritPt 31.4; Omniscience hallu 47%.
- **Context window: 97/100.** Native 1M + 128K out (≥1M tier). Not 100: AA-LCR 82.7 and ProgramBench 79.7 are not ≥98% retrieval at 512K+.
- **Multimodal: 78/100.** Image in plus file/PDF (75–90 band) and strong Chartography/SWE-Multimodal, but official I/O is “text and images → text” with **no video or audio** — cap below the audio-in 90–100 band.
- **Coding: 94/100.** SWE-Pro 81.3, DeepSWE 71.0 (near 74%+), AA-SciCode 61.0, Vibe 92.39, TB4.0 70.6, CursorBench 55.5. Caps: no public SWE-Verified or LiveCodeBench for this ID; DeepSWE 71.0 still a hair under 74%+.
- **Cost efficiency: 68/100.** List $2/$10 sits between ~$1.25/$4.25 ≈88 and ~$3/$15 ≈60; $0.20 cache reads help. Caps: not $0; AA ~$7.60/task from extreme output-token use.
- **Overall Score: 91/100.** Mean of 94, 90, 97, 78, 94 = 90.6 → 91 half-up. Best-fit: default paid coding/agent workhorse at Sonnet list when Opus 5.5’s extra 2 Index points are not worth 2× tokens; not the pick for omni video/audio.

---

## Signature

- Provided by: **Grok 4.6 (x-ai/grok-4.6)** — 2026-10-01
- Method: public internet research (Anthropic launch + platform docs + system card, Artificial Analysis article, BenchLM, Vals AI, Pi OpenCode); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
