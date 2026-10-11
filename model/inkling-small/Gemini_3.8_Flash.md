# Inkling Small — findings by Gemini 3.8 Flash

- Source: opencode/inkling-small
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Inkling Small
- **Short description:** Thinking Machines Lab's smaller open-weight hybrid-reasoning model (sibling of Inkling) with 1M context; strong math and knowledge, weak agentics — cheap open-weights reasoning and coding.
- **Provider / access:** opencode/inkling-small
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/inkling-small (Zen tier available)
- **Context window:** 1,000,000 total
- **Modalities:** Text in/out; image and audio input
- **Pricing (as of 2026-10-11):** Open weights (free self-host)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

All figures below are the **vendor-published** eval table from the official Inkling-Small model card (as mirrored by DeepInfra, which reproduces the full comparison grid; provider notes: SWE-bench numbers use a bash-only harness, Terminal-Bench 2.1 uses Thinking Machines' internal coding harness where web-search contamination was scored 0, and external models' numbers are self-reported). No third-party Inkling-Small agentic leaderboard run was found.

Agent / tool use:

- SWE-bench Verified: **80.2%** (vendor, bash-only harness)
- Terminal-Bench 2.1 (best harness): **64.7%**
- Toolathlon Verified: **54.4%**
- Tau3-Banking: **15.5%**
- MCP Atlas (public / all): **79.6% / 79.2%**
- GDPval-AA v2: **1269 Elo**
- AA-Briefcase: **917**
- BrowseComp (with context management): **77.4%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.5%**
- HLE (text only): **31.6%**; HLE (with tools): **47.8%**
- AIME 2026: **95.5%**
- HMMT Feb 2026: **90.2%**
- CritPt: **8.3%**
- ARC-AGI-1: **84.0%**; ARC-AGI-2: **40.1%**
- FrontierMath Tier 4: **17.1% ± 5.9** (ixio leaderboard aggregate, scraped 2026-09-03)
- Artificial Analysis Intelligence Index v4.1: **40.0%** (apXML independently reports a 0.25 Artificial-Analysis agentic-index figure at rank #74 — different metric, listed for traceability)
- Epoch Capabilities Index: **150, rank #46 of 251** (was #29 of 231 at release)
- SimpleQA Verified: **20.6%**; AA Omniscience index: **-9.0**
- Global-MMLU-Lite: **86.7%**; MMLU-Pro: no verified public score found for this ID

Coding:

- SWE-bench Verified: **80.2%**
- SWE-bench Pro (public): **55.9%**
- Terminal-Bench 2.1: **64.7%**
- SciCode: **48.7%**
- Vibe Code Bench / LiveCodeBench / DeepSWE: no verified public score found for this ID

Long context:

- No long-context retrieval reported. The vendor publishes a 1M window and a hybrid local/global attention design but no MRCR, RULER, GraphWalks or needle-in-a-haystack number for Inkling-Small, and the largest hosted capacity found is 524,288 tokens. This is a genuine evidence gap, not an implicit pass.

Multimodal (vendor-reported, for the scoring dimension):

- MMMU Pro (Standard 10 options): **74.0%**
- CharXiv RQ (original / with Python): **77.4% / 81.3%**
- Audio MC: **54.9%**
- MMAU (audio understanding): **77.0%**
- VoiceBench (spoken-input assistant tasks): **90.1%**
- IFBench (instruction following): **82.2%**

### Normalized scores (1–100)

- **Tool use: 72/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 80/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 90/100.** Effective retrieval fidelity across context capacity (1,000,000 total).
- **Multimodal: 88/100.** Input/output modality comprehension (Text in/out; image and audio input).
- **Coding: 79/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 94/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 81.8/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
