# Qwen 3.7 Max — findings by Nemotron 3 Ultra 550B A55B

- Source: Alibaba (`qwen-3.7-max`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Max (snapshot `qwen3.7-max-2026-05-20`)
- **Short description:** Alibaba's "agent-era" flagship closed-weights model with 1M context, 35-hour autonomous kernel-optimization demo (1,000+ tool calls), strong coding (SWE-bench Verified 80.4%), at $2.50/$7.50 pricing (50% launch promo). Text-only at May-20 snapshot; vision added in June-08 snapshot.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.7-max`), OpenRouter, Together AI; OpenAI- and Anthropic-compatible APIs; drivable from Claude Code.
- **Release / knowledge:** Preview 2026-05-17; GA 2026-05-20 (Alibaba Cloud Summit); knowledge cutoff not publicly disclosed.
- **IDs:** `qwen3.7-max` (Alibaba Cloud Model Studio), `qwen3.7-max-2026-05-20` (dated snapshot). No Free tier on any platform.
- **Context window:** 1,000,000 tokens total (984K; 983K in thinking mode); max output 65,536–131,072.
- **Modalities:** Text in → text out (May-20 snapshot); June-08 snapshot added visual understanding. Reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** List $2.50/M in, $7.50/M out, $0.25-0.50/M cache; 50% launch promo $1.25/$3.75; cheapest routes ~$1.475/$4.425; free on Alibaba Token Plans.
- **Architecture:** Closed weights (Alibaba); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- MCP-Atlas: **76.4%** (Alibaba launch)
- Tau2-bench: **94.7%** (#15 of 321) (Sophon/AA aggregation)
- Terminal-Bench 2.0: **69.7%** (Alibaba launch, Terminus) / **59.2%** (Vals AI)
- IFBench: **80.5%** (Sophon/AA aggregation)
- AA Intelligence Index: **56.6** (#5 overall at launch; highest Chinese model at launch)
- 35-hour autonomous kernel-optimization: 1,000+ tool calls (Alibaba launch)

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (Alibaba launch) / **90.9%** (Epoch AI) / **92.4%** (Sophon/AA)
- HLE: **41.4%** (Alibaba launch) / **40.5%** (Sophon/AA)
- OTIS Mock AIME: **95.6%** (Epoch AI)
- FrontierMath v2 Tiers 1-3: **64.6%** / Tier 4: **34.1%** (Epoch AI)
- Chess: **19%**; Mystery Game: **29%** (Epoch AI)
- EBR-bench: **9.5%** (Epoch AI)
- LiveBench composite: **74.1** (Sophon/AA)
- ECI: **154** (#40/257) (Epoch AI)
- Vals Index: **57.29%** (#5) (Vals AI)
- τ²-bench: **94.7%** (#15 of 321) (Sophon/AA)
- IFBench: **80.5%** (Sophon/AA)
- TB Hard: **50.8%** (Sophon/AA)
- SciCode: **48.8%** (Sophon/AA)
- HLE: **40.5%** (Sophon/AA)
- Vibe Code Bench: **47.7%** (Sophon/AA)
- ProofBench: **26.0%** (Sophon/AA)
- TaxEval: **75.3%** (Sophon/AA)
- CorpFin v2: **63.7%** (Sophon/AA)
- Finance Agent v2: **47.8%** (Sophon/AA)
- LiveBench coding: **74.2** / reasoning: **83.3** / math: **85.2** / data: **71.8** / lang: **79.7** (Sophon/AA)
- τ²-bench: **94.7%** (#15 of 321) (Sophon/AA)
- AA Intelligence Index: **56.6** (Alibaba launch, AA v4.0)

Coding:

- SWE-bench Verified: **80.4%** (Alibaba launch) / **77.3%** (Epoch AI) / **68.8%** (Vals AI)
- SWE-bench Pro: **60.6%** (Alibaba launch)
- Terminal-Bench 2.0: **69.7%** (Alibaba launch, Terminus) / **59.2%** (Vals AI)
- Terminal-Bench Hard: **50.8%** (Sophon/AA)
- Vibe Code Bench: **47.7%** (Sophon/AA)
- ProofBench: **26.0%** (Sophon/AA)
- Vals SWE-bench Verified: **68.8%** (Vals AI)

Multimodal:

- Text-only at May-20 snapshot (vision added in June-08 snapshot, never benchmarked publicly)

Long context:

- 1M token window (984K; 983K in thinking mode)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 78/100.** MCP-Atlas 76.4%, τ²-bench 94.7% (#15/321), TB 2.0 69.7%, IFBench 80.5%, 35-hour/1,000-tool-call demo. Capped by no GDPval/Toolathlon data, Vals/AA harness gap (TB 2.0 69.7% vs 59.2%).
- **Reasoning: 82/100.** GPQA Diamond 90.9-92.4%, HLE 40.5-41.4%, OTIS AIME 95.6%, FrontierMath T1-3 64.6%, AA Index 56.6 at launch. Capped by CritPt-class physics (Chess 19%), AA Index now mid-table post GPT-5.6/Claude-5 generation.
- **Context window: 88/100.** 1M token window (984K) in ≥1M band (95-100); docked for no published MRCR/RULER/AA-LCR retrieval curve; 35-hour demo is existence proof, not systematic measurement.
- **Multimodal: 12/100.** May-20 snapshot is text-only (methodology text-only band 10-20); vision arrived in June-08 snapshot, never benchmarked publicly.
- **Coding: 82/100.** SWE-bench Verified 80.4% (77.3% Epoch / 68.8% Vals), SWE-Pro 60.6%, TB 2.0 69.7%, TB Hard 50.8% — strong frontier-adjacent for closed-weight. Capped by Vibe Code 47.7%, ProofBench 26.0%.
- **Cost efficiency: 85/100.** $2.50/$7.50 list (50% promo $1.25/$3.75), cheapest ~$1.475/$4.425, free on Token Plans; maps to ~$1.25/$4.25 ≈ 88 tier with 50% batch off and 80% cache discount.
- **Overall Score: 68/100.** Half-up mean of (78 + 82 + 88 + 12 + 82) / 5 = 68.4 → 68. Best-fit: May 2026 closed-weight Chinese flagship — #5 world on AA at launch with 1M context and 35-hour autonomy demo at $2.50/$7.50; text-only at shipped snapshot, superseded by Qwen3.8-Max within ten weeks.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official launch materials (Alibaba Cloud Model Studio, AI/TLDR launch summary), independent aggregators (Epoch AI, Vals AI, Sophon/AA), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores. Text-only snapshot confirmed.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.