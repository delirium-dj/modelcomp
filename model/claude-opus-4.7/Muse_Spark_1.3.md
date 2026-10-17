# Claude Opus 4.7 — findings by Muse Spark 1.3

- Source: Anthropic/Claude Opus 4.7, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's Opus-class flagship (April 2026) for autonomous coding and long-horizon agents, with 1M context and upgraded high-resolution vision.
- **Provider / access:** Anthropic API + Claude products, Amazon Bedrock, Google Vertex AI, Microsoft Foundry; OpenCode Zen `opencode/claude-opus-4.7` (tool calling / MCP).
- **Release / knowledge:** 2026-04-16 GA (Anthropic newsroom); knowledge cutoff not disclosed
- **IDs:** `opencode/claude-opus-4.7` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1,000,000 total / 128,000 max output — verified via AA Opus 4.7 explainer + repo metadata
- **Modalities:** text, image, PDF in; text out; adaptive reasoning yes; tool calls yes; higher-fidelity images
- **Pricing (as of 2026-10-17):** Paid $5.00 in / $25.00 out per 1M; cached $0.50; batch $2.50/$12.50; no free tier
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

Agent / tool use:

- GDPval-AA (Stirrup harness): **1753 Elo** (AA article — #1, +79 over Sonnet 4.6/GPT-5.4, +134 over Opus 4.6)
- MCP-Atlas: **78.3%** (RankedAGI — #3)
- Finance Agent v1.1: **64.4%** (RankedAGI — #1)
- OSWorld-Verified: **78.0%** (RankedAGI — #8)
- Toolathon Pass@1: **52.8%** (RankedAGI — #7)
- Terminal-Bench 2.1: **69.7%** (RankedAGI — #11); TB 2.0: **69.4%** (RankedAGI — #6)
- TerminalBench Hard: **+5.3 p.p. vs Opus 4.6** (AA article, max effort)
- Tau2-Bench: **-3.5 p.p. vs Opus 4.6** (AA article; absolute not quoted, provisional)
- BrowseComp: **79.3%** (RankedAGI — #14; down from 83.7% per Tabbit/Anthropic synthesis)
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (RankedAGI — #3; AA +1.8 p.p. vs Opus 4.6)
- HLE: **46.9%** (RankedAGI — #7); HLE with tools: **54.7%** (RankedAGI — #8)
- LCR / MLCR: **at parity with Opus 4.6** (AA article, no absolute quoted)
- CritPt: **at parity with Opus 4.6** (AA article, no absolute quoted)
- AA Intelligence Index: **57 (57.3 exact, max effort)** (AA — tied #1 with Gemini 3.1 Pro / GPT-5.4; +4 over Opus 4.6)
- Omniscience: **Index 26 (#2)**; hallucination 36% (down from 61%), accuracy flat, attempt rate 70% (AA)
- MMMLU: **91.5%** (RankedAGI — #2)
- Vending Bench 2: **$10,936.76** (RankedAGI — #1)

Coding:

- SWE-bench Verified: **87.6%** (RankedAGI — #2; Anthropic headliner)
- SWE-bench Pro: **64.3%** (RankedAGI — #5; Anthropic headliner)
- SWE-bench Multilingual: **79.5%** (RankedAGI — #3)
- Code LiveBench: **83.1%** (RankedAGI — #3); AgenticCode LiveBench: **61.7%** (#5)
- SciCode / AA-SciCode: **+2.6 p.p. vs Opus 4.6** (AA; absolute not quoted, provisional)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **DeepSWE 54.0%** (#5); Code Arena 1566 (#3); Svelte 100.0% (#1); Cursor Bench 64.8% (#1); CharXiv 82.1% / 91.0% tools

Long context:

- **1M window verified (128K out); no standalone MRCR/RULER absolute found — GDPval long-task lead used as proxy**

### Normalized scores (1–100)

- **Tool use: 93/100.** GDPval-AA 1753 (#1, +79 Elo gap) plus MCP-Atlas 78.3% (#3), Finance Agent #1 and OSWorld 78.0%; capped below 95 by BrowseComp 79.3% regression and Tau2 dip.
- **Reasoning: 94/100.** AA Index 57 tied #1 plus GPQA 94.2% (#3), HLE 46.9%/54.7% tools, MMMLU 91.5% (#2), Omniscience #2 on lower hallucination; capped with LCR/CritPt at parity.
- **Context window: 100/100.** 1M / 128K out verified; top tier.
- **Multimodal: 72/100.** Text+image+PDF in with higher-fidelity vision, CharXiv 82.1%/91.0% tools; text-only output caps it.
- **Coding: 95/100.** SWE-Verified 87.6% (#2), SWE-Pro 64.3%, Multilingual 79.5%, LiveCode 83.1%, Svelte 100%, Cursor Bench #1, TB2.1 69.7%; DeepSWE 54.0% caps below 97.
- **Cost efficiency: 40/100.** Paid $5/$25, no free tier; ~11% cheaper per AA Index run than Opus 4.6 but flagship-priced.
- **Overall Score: 91/100.** Mean of five non-cost dims (93+94+100+72+95)/5 = 90.8 → 91; best-fit long-horizon autonomous coding agent pick.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-10-17
- Method: public internet research (Anthropic newsroom 2026-04-16, AA Opus 4.7 explainer, RankedAGI page + Tabbit synthesis); normalized 1–100 interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

