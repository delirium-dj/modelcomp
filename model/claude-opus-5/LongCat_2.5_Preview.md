# Claude Opus 5 — findings by LongCat 2.5 Preview

- Source: Anthropic (`claude-opus-5`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's Opus-class flagship — near-Fable-5 frontier intelligence at half the price, with gains in agentic coding, computer use, and long-horizon knowledge work over Opus 4.8. Default on Claude Max; strongest model on Claude Pro.
- **Provider / access:** Anthropic Claude API — `claude-opus-5` (Chat Completions-style messages API; adaptive thinking on by default, `effort` steers depth). Also AWS Bedrock, Google Vertex, Azure Foundry. Released 2026-07-24.
- **Release / knowledge:** Released 2026-07-24; reliable knowledge cutoff May 2026 (per Anthropic models overview).
- **IDs:** `anthropic/claude-opus-5` (Bedrock/Vertex/Foundry), `claude-opus-5` (Claude API). No Zen Free ID — paid only.
- **Context window:** 1M tokens (default and maximum); 128K max output (verified via Claude platform docs).
- **Modalities:** Text, image, file in; text out; reasoning yes (adaptive, always on); tool calls yes (function calling, computer use, code execution); structured outputs; prompt caching; automatic fallbacks (beta).
- **Pricing (as of 2026-09-27):** $5.00/M in, $25.00/M out; cache read $0.50/M; Fast mode $10/$50 (2.5x speed); Batch API 50% off. Paid only.
- **Architecture:** Proprietary; no public parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **84.6%**; Terminal-Bench 4.0: **53.9%** resolution (tbench.ai, rank 3)
- BrowseComp: **90.8%**; DeepSearchQA: **95.0%**
- MCP Atlas: **85.8%**; OSWorld 2.0: **70.6%**
- Toolathlon Verified: **80.6%** pass@1 (87.0% pass@3)
- GDPval-AA: **1852 Elo** (AA, max effort)
- AutomationBench (Zapier): **26.0%**

Reasoning / knowledge:

- GPQA Diamond (Vals): **93.4%**
- HLE (with tools): **64.7%** (rank 1, BenchLM)
- ARC-AGI-2: **90.4%** (BenchLM)
- Artificial Analysis Intelligence Index: **61** (max)

Coding:

- SWE-bench Verified: **96%** (rank 1, Vals)
- SWE-bench Pro: **79.2%** (rank 4)
- SWE Multilingual: **89.5%**; SWE Multimodal: **59.4%**
- DeepSWE: **68.8%**
- AA Coding Agent Index: **78%** (Kilo Code)
- FrontierCode 1.1 Main: **53.4%**; DRACO: **88.6%**

Long context:

- LCR (long-context reasoning): **75.7%** (Kilo Code); no MRCR/RULER absolute published for this exact model ID.

### Normalized scores (1–100)

- **Tool use: 90/100.** GDPval-AA 1852 Elo (leads all but Opus 5.5), BrowseComp 90.8%, MCP Atlas 85.8% and TB4.0 53.9% form a frontier-tier agentic profile; AutomationBench 26% is the soft spot.
- **Reasoning: 92/100.** GPQA 93.4%, HLE 64.7% (rank 1), AA Index 61 and ARC-AGI-2 90.4% all clear the frontier reference points.
- **Context window: 95/100.** 1M tokens with 128K output earns the ≥1M tier; LCR 75.7% is solid but no 512K+ retrieval result confirms the top of the band.
- **Multimodal: 80/100.** Text/image/file input plus computer use reaches the 75–90 band; no audio/video input and text-only output cap it there.
- **Coding: 92/100.** SWE-bench Verified 96% (rank 1) and SWE-bench Pro 79.2% (rank 4) are frontier-leading; DeepSWE 68.8% is a notch under the very top.
- **Cost efficiency: 50/100.** $5/$25 pricing sits between the $3/$15 (≈60) and $10/$50 (≈30) reference points — roughly half the cost of the Fable tier for near-frontier capability.
- **Overall Score: 90/100.** Mean of the five quality dims (90+92+95+80+92)/5 = 89.8 → 90. Best-fit: daily-driver frontier for agentic coding and long-horizon knowledge work at Anthropic — the price/performance sweet spot of the Claude lineup.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (Anthropic system card + launch post, Vals.ai, tbench.ai, BenchLM, Kilo Code); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
