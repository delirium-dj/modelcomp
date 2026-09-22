# Claude Opus 4.6 — findings by Mimo v2.6 Flash

- Source: Anthropic/`claude-opus-4-6`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic flagship Feb–Apr 2026 (released 2026-02-05): first Opus with **1M context (beta)**; launch SOTA on Terminal-Bench 2.0 (65.4%), HLE, BrowseComp, GDPval-AA (+144 Elo over GPT-5.2); topped LMArena text/code/search at launch. Superseded by Opus 4.7 (2026-04-16) and 4.8 but still GA.
- **Provider / access:** Claude API `claude-opus-4-6`; claude.ai, Amazon Bedrock, Google Vertex AI, Microsoft Foundry. 1M context initially beta (Tier 4 / custom limits on Claude Platform; Vertex preview). US-only inference 1.1×. Paid — not free.
- **Release / knowledge:** 2026-02-05; knowledge cutoff **May 2025 reliable / August 2025 training data** (The AI Rankings).
- **IDs:** `claude-opus-4-6`.
- **Context window:** **200K standard / 1M beta** (all tokens billed at long-context rates above 200K); 128K max output (300K Batch API beta).
- **Modalities:** text + image in; text out; adaptive thinking (low/medium/high/max effort); tool calls yes; prompt caching; Batch API; context compaction beta; **prefilling removed** (400 error vs 4.5).
- **Pricing (as of 2026-09-22):** **$5.00 in / $25.00 out per 1M ≤200K**; **$10.00 / $37.50 for >200K input** (1M beta — whole request repriced); cache read $0.50 (90% off); batch $2.50/$12.50 (50% off). Paid API.
- **Architecture:** proprietary hybrid-reasoning (Claude Opus 4.6).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 2.0 (Terminus-2): **65.4%** (Anthropic; **SOTA at launch** — first model >65; vs Opus 4.5 59.8, GPT-5.2 Codex-CLI 64.7, Gemini 3 Pro 56.2). TB2.1: no verified public score found (4.6 predates 2.1 tables in sources read).
- OSWorld: **72.7%** (Anthropic/Digital Applied; +6.4 vs 4.5 — best computer-use at launch)
- GDPval-AA: **1606 Elo** (Anthropic; +144 over GPT-5.2 1462, +190 over Opus 4.5)
- BrowseComp: **84.0%** single-agent / **86.57%** multi-agent harness (Anthropic; SOTA at launch)
- Finance Agent: **60.7%** (Anthropic; SOTA at launch)
- MCP Atlas (high effort): **62.7%** (Anthropic)
- τ²-Bench Telecom: **99.3%** (Anthropic; vs GPT-5.2 98.7)
- OpenRCA: **34.9%** (Anthropic)
- Toolathlon / Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam with tools: **53.0–53.1%** (Anthropic; leads frontier at launch vs GPT-5.2 Pro 50.0, Gemini 3 Pro 45.8)
- GPQA Diamond: **91.3%** (Digital Applied comparison)
- ARC-AGI-2: **68.8%** (The AI Rankings; ~2× Opus 4.5 37.6, vs GPT-5.2 54.2 — largest single-gen jump cited)
- Artificial Analysis Intelligence Index: no verified public score found for 4.6 specifically
- FrontierMath / CritPt: no verified public score found

Coding:

- SWE-bench Verified: **80.8%** (25-trial avg Anthropic; **81.42% with prompt modification**; flat vs Opus 4.5 80.9; Digital Applied cites 80.8)
- Terminal-Bench 2.0: **65.4%** (SOTA at launch; see agent row)
- DeepSWE / LiveCodeBench / SWE-Pro: no verified public score found for 4.6 in sources read

Long context:

- MRCR v2 8-needle **1M: 76.0%** (Anthropic qualitative shift vs Sonnet 4.5 18.5%, ~3× Gemini 3 Pro ~26%)
- MRCR v2 8-needle **256K: 93.0%** (Anthropic)
- Community caveat: "context rot" reports beyond ~40% window utilization → practical ~400K for some production loads (The AI Rankings / HN)

Multimodal:

- Text + image in (vision); no video/audio, no non-text out. Vision noted as trailing GPT-5.2 / Gemini 3 Pro at launch (The AI Rankings). MMMU/CharXiv: no verified public score found for 4.6.

### Normalized scores (1–100)

- **Tool use: 89/100.** TB2.0 65.4% SOTA-at-launch, GDPval 1606, BrowseComp 84/86.6, Finance 60.7, OSWorld 72.7, τ²-Telecom 99.3; capped by MCP 62.7 mid, no TB2.1/Tau3/Claw, and launch-era scores now behind 4.7/4.8/Opus 5.
- **Reasoning: 91/100.** HLE-tools 53.0 (launch-leading), GPQA 91.3, ARC-AGI-2 68.8 (gen-doubling); capped by no AA Index/FrontierMath row and HLE-without-tools figure not isolated.
- **Context window: 91/100.** 1M beta with **MRCR 76% @1M / 93% @256K** — qualitatively strong retrieval (well above Gemini-class 26%); minus points for beta gating (Tier 4), >200K **$10/$37.50 premium**, and community rot reports past ~40% utilization → 91 not 95.
- **Multimodal: 65/100.** Text + image in only; vision trails GPT-5.2/Gemini at launch → 60–70 band → 65.
- **Coding: 88/100.** SWE-V 80.8/81.42 solid, TB2.0 65.4 launch-SOTA; capped by no DeepSWE/SWE-Pro/LCB rows and TB2.0 now well behind TB2.1-era 80–90% class (version skew).
- **Cost efficiency: 40/100.** $5/$25 standard is premium; **$10/$37.50 above 200K** is among the harshest long-context cliffs in the queue; cache 90% off and batch 50% off help but list+cliff dominate → 40.
- **Overall Score: 85/100.** Mean of five quality dims (89+91+91+65+88)/5 = 84.8 → 85. Best-fit: long-context agentic retrieval and knowledge-work where 1M MRCR 76% and GDPval/BrowseComp matter — but budget the >200K premium carefully; prefer 4.7/4.8 for new builds unless locked to 4.6 behavior.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (Anthropic Opus 4.6 research + announcement pages, Benchgen, Digital Applied, Code Velocity, The AI Rankings); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
