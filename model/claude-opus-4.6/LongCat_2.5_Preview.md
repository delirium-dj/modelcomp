# Claude Opus 4.6 — findings by LongCat 2.5 Preview

- Source: Anthropic (`claude-opus-4-6`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's first Opus-class model with a 1M-token context window — strong coding, computer use, and long-running professional work; the pinned legacy flagship behind the 4.7/4.8/5 generations.
- **Provider / access:** Anthropic Claude API — `claude-opus-4-6` (Chat Completions-style messages API; context compaction, Agent Teams). Also AWS Bedrock, Google Vertex, Azure Foundry, Cursor. Released 2026-02-05.
- **Release / knowledge:** Released 2026-02-05; knowledge cutoff not formally published (predecessor-generation ~Aug 2025 per family pattern).
- **IDs:** `anthropic/claude-opus-4-6` (Bedrock/Vertex/Foundry), `claude-opus-4-6` (Claude API). No Zen Free ID — paid only.
- **Context window:** 1M tokens (GA from 2026-03-13 at standard pricing across the full window); 128K max output.
- **Modalities:** Text, image, file in; text out; reasoning yes (extended thinking); tool calls yes (function calling, computer use, code execution); structured outputs; prompt caching.
- **Pricing (as of 2026-09-27):** $5.00/M in, $25.00/M out; cache read $0.50/M; cache write $6.25/M. Paid only.
- **Architecture:** Proprietary; no public parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **65.4%**
- BrowseComp: **83.7%**; OSWorld-Verified: **72.7%**
- Claw-Eval: **70.4%**
- Tau3-Banking / GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.3%** (GPQA-D 89.2%)
- HLE: **40%** no tools / **53%** with tools
- MMLU-Pro: **82%**

Coding:

- SWE-bench Verified: **80.8%**
- SWE-bench Pro: **53.4%**
- LiveCodeBench Pro: **70.7%**; Vibe Code Bench: **57.57%**
- SWE-Rebench: **65.3%**; React Native Evals: **84.1%**
- FrontierCode 1.1 Main: **26.9%**

Long context:

- MRCR v2: **78.3%** — highest among frontier models at that context length (Anthropic, 1M-context GA announcement)

Multimodal extras:

- MMMU-Pro: **77.3%**; ScreenSpot Pro: **83.1%**

### Normalized scores (1–100)

- **Tool use: 72/100.** BrowseComp 83.7% and Claw-Eval 70.4% are solid; TB2.0 65.4% sits mid-band (45–60% → 50–70) and OSWorld 72.7% is decent — no frontier agentic number.
- **Reasoning: 85/100.** GPQA 91.3% is frontier-tier; HLE 53% with tools clears the 40% bar but the 40% no-tools figure is only at the frontier line.
- **Context window: 95/100.** 1M tokens with 128K output and flat pricing across the window earns the ≥1M tier; MRCR v2 78.3% (best-in-class at release) supports but does not specifically confirm 512K+ retrieval.
- **Multimodal: 70/100.** Text/image/file input lands in the +image-in 60–70 band; no audio/video input and text-only output cap it there.
- **Coding: 68/100.** SWE-bench Verified 80.8% and Vibe Code Bench 57.57% are mid-band; SWE-bench Pro 53.4% and FrontierCode 26.9% lag the field.
- **Cost efficiency: 50/100.** $5/$25 pricing sits between the $3/$15 (≈60) and $10/$50 (≈30) reference points.
- **Overall Score: 78/100.** Mean of the five quality dims (72+85+95+70+68)/5 = 78. Best-fit: legacy Opus for Claude Code/agent workflows on a budget — superseded by 4.7/4.8/5 on every axis but still a capable 1M-context generalist.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (Anthropic announcement + 1M-context GA post, BenchLM, Kilo Code, claudefa.st timeline); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
