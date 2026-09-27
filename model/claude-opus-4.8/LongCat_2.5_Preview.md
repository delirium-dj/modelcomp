# Claude Opus 4.8 — findings by LongCat 2.5 Preview

- Source: Anthropic (`claude-opus-4-8`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's Opus-class flagship of mid-2026 — improved agentic coding, computer use, and collaboration over Opus 4.7, with the strongest computer-use/browser-agent results Anthropic had tested at release. Now the pinned legacy option behind Opus 5.
- **Provider / access:** Anthropic Claude API — `claude-opus-4-8` (Chat Completions-style messages API; adaptive thinking, default effort high; dynamic workflows in Claude Code). Also AWS Bedrock, Google Vertex, Azure Foundry. Released 2026-05-28.
- **Release / knowledge:** Released 2026-05-28; knowledge cutoff January 2026.
- **IDs:** `anthropic/claude-opus-4-8` (Bedrock/Vertex/Foundry), `claude-opus-4-8` (Claude API). No Zen Free ID — paid only.
- **Context window:** 1M tokens; 128K max output (verified via Anthropic docs + Bedrock card).
- **Modalities:** Text, image, file in; text out; reasoning yes (adaptive); tool calls yes (function calling, computer use, code execution); structured outputs; prompt caching.
- **Pricing (as of 2026-09-27):** $5.00/M in, $25.00/M out; cache read $0.50/M; cache write $6.25/M; Fast mode $10/$50 (2.5x speed). Paid only.
- **Architecture:** Proprietary; no public parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **74.6%**; Terminal-Bench 2.1 (Vals): **71.9%**; Terminal-Bench 3.0: **21.1%**
- BrowseComp: **84.3%**; DeepSearchQA: **93.1%**
- MCP Atlas: **82.2%**; OSWorld-Verified: **83.4%**; Toolathlon: **59.9%**
- GDPval-AA: **1593 Elo**; Online-Mind2Web: **84%**; SWE-Marathon: **26.0%**

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (Vals 92.42%, rank 4)
- HLE: **49.8%** no tools / **57.9%** with tools
- ARC-AGI-2: **72.1%**; ARC-AGI-3: **1.5%**
- Artificial Analysis Intelligence Index: **57.3**
- USAMO 2026: **96.7%**; LCR: **73.0%**

Coding:

- SWE-bench Verified: **88.6%** (rank 1 at release)
- SWE-bench Pro: **69.2%** (rank 6)
- Vibe Code Bench: **82.72%** (rank 1 at release)
- LiveCodeBench (Vals): **87.8%**
- FrontierCode 1.1 Main: **46.5%**; cursorBench32: **62.3%**
- AA Coding Agent Index: **74.3%**

Long context:

- LCR 73.0% (Kilo Code); no MRCR/RULER absolute published for this exact model ID.

### Normalized scores (1–100)

- **Tool use: 82/100.** BrowseComp 84.3%, MCP Atlas 82.2% and OSWorld 83.4% are strong; TB2.0 74.6% and GDPval 1593 Elo sit a notch under the frontier marks.
- **Reasoning: 88/100.** GPQA 93.6%, HLE 57.9% with tools and AA Index 57.3 are all frontier-tier; ARC-AGI-2 72.1% is good but not top-band.
- **Context window: 95/100.** 1M tokens with 128K output earns the ≥1M tier; LCR 73.0% is solid but no 512K+ retrieval result confirms the top of the band.
- **Multimodal: 80/100.** Text/image/file input plus computer use reaches the 75–90 band; no audio/video input and text-only output cap it there.
- **Coding: 85/100.** SWE-bench Verified 88.6% (rank 1 at release), Vibe Code Bench 82.72% and SWE-bench Pro 69.2% are strong; FrontierCode 46.5% keeps it just under 90.
- **Cost efficiency: 50/100.** $5/$25 pricing sits between the $3/$15 (≈60) and $10/$50 (≈30) reference points.
- **Overall Score: 86/100.** Mean of the five quality dims (82+88+95+80+85)/5 = 86. Best-fit: pinned legacy Opus for Claude Code/agent workflows where Opus 5 is not required — superseded but still highly capable.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (Anthropic announcement + system card, Vals.ai, BenchLM, Kilo Code, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
