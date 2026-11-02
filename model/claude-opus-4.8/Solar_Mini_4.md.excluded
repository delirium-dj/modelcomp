# Claude Opus 4.8 — findings by Solar Mini 4

> TEMPLATE — do not commit as-is. Replace every `<...>` placeholder with your own research, and strip this notice block. Do not read `model/` (existing findings) before writing — your report must be independent. Overview + scoring methodology: `../../model-comparison.md`.
>
> - Source: Anthropic (`claude-opus-4-8`)
> - Date: 2026-10-24 (UTC)
> - Overview and scoring methodology: `../../model-comparison.md`
> - Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8 (`claude-opus-4-8`; Platform IDs: Bedrock `anthropic.claude-opus-4-8`, Google Cloud, Azure Foundry)
- **Short description:** Anthropic's flagship reasoning model with 1M context / 128K output, adaptive thinking, dynamic workflows (Claude Code), and agent teams — legacy model, migrate to Opus 5.5.
- **Provider / access:** claude.ai, Claude API, Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry; Messages + Responses APIs.
- **Release / knowledge:** released May 28, 2026; knowledge cutoff Jan 2026.
- **IDs:** `claude-opus-4-8` (Claude API); `anthropic.claude-opus-4-8` (Bedrock). No free ID — paid only.
- **Context window:** 1,048,576 (1M) total; 128K max output (batch API beta: 300K).
- **Modalities:** text + image in → text out; adaptive thinking (default high; xhigh/max options); tool calls; JSON mode.
- **Pricing (as of 2026-10-24):** $5/M input / $25/M output; cache 5m write $6.25, 1h write $10, read $0.50; batch 50%; fast mode $10/$50 (2.5x speed).
- **Architecture:** proprietary, undisclosed param count; "Legacy" status in the lineup; retirement not sooner than May 28, 2027.

### Raw benchmarks found

> Measured numbers with source, rank/percentile and harness. "Est." = model-based estimate with confidence interval.

**Agent / tool use**
- GDPval-AA: 1890 Elo (AA, measured, max effort) — #1; +137 vs Opus 4.7; ~67% win rate vs GPT-5.5 xhigh
- Online-Mind2Web: 84% (official, strongest computer-use/browser-agent in Anthropic's tests)
- MCP Atlas: 82.2% measured (Benchgap)
- BrowseComp: 84.3% measured (Benchgap)
- CursorBench 3.1: 58.4% measured; 3.2: 62.3% measured
- Super-Agent benchmark: only model to complete every case end-to-end, beating prior Opuses and GPT-5.5 at parity on cost (official)
- AutomationBench-AA: 58.6% estimated ±10.5 pp, low; AA-AnalystAgent 39.4% estimated ±7.2 pp, medium

**Terminal-Bench 2.1:** 74.6% measured (Benchgap); official footnote: Terminus-2 harness; GPT-5.5 (Codex CLI) 83.4%

**Tau3-Banking / Tau2-Bench:** no verified public score found for Opus 4.8 in my sources

**GDPval-AA:** 1890 Elo (AA, above) — included under tool use

**Claw-Eval / ClawProBench:** no verified public score found

**MCP-Atlas / SWE Atlas / Toolathlon:** MCP Atlas 82.2% measured (above); Toolathlon-Verified 73.4% estimated ±1.0 pp, medium (Benchgap)

**Reasoning / knowledge**
- HLE: 57.9% measured (Benchgap); AA-HLE 48.7% measured (AA) — conflict noted, 9.2 pp
- GPQA Diamond: 93.6% measured (Benchgap)
- CritPt: 20.9% measured (Benchgap) — weak frontier physics
- AA-Omniscience Accuracy: 48.8% measured (#2 behind Gemini 3.1 Pro)
- Artificial Analysis Intelligence Index: 42 measured, #51/215 (AA model page, deprecated); launch article reported 61.4 at max effort — conflict noted
- MMLU: 90.1% estimated ±3.6 pp (Benchgap); MMLU-Pro 85.8% estimated ±2.5 pp (Benchgap)

**Coding**
- SWE-bench Verified: 88.6% measured (Benchgap; llm-stats)
- SWE-bench Pro: 69.2% measured (Benchgap)
- Terminal-Bench 2.1: 74.6% measured (Benchgap)
- LiveCodeBench v6: 90.2% estimated ±2.4 pp, low (Benchgap); Vals LiveCodeBench 87.8% measured

**Long context**
- MRCR v2: 76% at 1M (8-needle) (official + The Decoder; Sonnet 4.5 18.5%)
- AA-LCR: 77.7% measured; MRCR 85.4% estimated ±11.3 pp, low; LongBench v2 61.8% estimated ±5.9 pp, low

### Normalized scores (1–100)
- **Tool use: 92/100.** GDPval-AA 1890 Elo (#1), Online-Mind2Web 84%, MCP Atlas 82.2%, BrowseComp 84.3%, SWE-bench Verified 88.6%, Super-Agent end-to-end; caps: estimated spreads on benchmarks.
- **Reasoning: 88/100.** HLE 57.9% measured (leader per AA article), GPQA Diamond 93.6%, GDPval-AA #1, AA-Omniscience 48.8% (#2); caps: CritPt 20.9% weak; AA Index 42 vs 61.4 at max effort (two measurements).
- **Context window: 100/100.** 1,048,576 (1M) total; 128K max output (official docs; batch beta 300K).
- **Multimodal: 25/100.** Text + image in, text out (not text-only, but no video/audio/PDF input).
- **Coding: 90/100.** SWE-bench Verified 88.6% measured, SWE-Pro 69.2%, MCP Atlas 82.2%, Terminal-Bench 2.1 74.6%, BrowseComp 84.3%.
- **Cost efficiency: 15/100.** $5/M input / $25/M output (AA cost #103/113, $4.08/task).
- **Overall Score: 79/100.** (92+88+100+25+90)/5 = 79.0.
**Conflicts noted:** (1) AA Intelligence Index 61.4 (max-effort launch article) vs 42 (deprecated model page, default workload); (2) HLE 57.9% standalone vs 48.7% AA-HLE variant; (3) Terminal-Bench 2.1 harness dependence (Terminus-2 official, GPT-5.5 83.4% vs 74.6% for Opus).
## Signature
- Provided by: **Solar Mini 4 (solar-mini-4)** — 2026-10-24
- Method: public internet research (official Anthropic pages, Artificial Analysis, Benchgap, llm-stats, TechCrunch, Decrypt); scores are normalized 1–100 interpretations, not official vendor scores.
## Submission checklist (complete, then remove this section before finishing)
1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-opus-4.8/Solar_Mini_4.md` (the assigned stem).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-opus-4.8/`.
4. No benchmark invented; conflicts listed above.