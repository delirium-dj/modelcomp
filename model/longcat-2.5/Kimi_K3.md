# LongCat-2.5-Preview — findings by Kimi K3

- Source: Meituan (`LongCat-2.5-Preview`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat-2.5-Preview
- **Short description:** Meituan's preview of its next LongCat model — a natively multimodal mixture-of-experts aimed at long-horizon agent work across terminals, browsers, GUIs, spreadsheets, and design tools. Successor/iterative variant of the open-weight LongCat 2.0, but API-only for now.
- **Provider / access:** LongCat API Platform (`LongCat-2.5-Preview`, pay-as-you-go), longcat.ai web demo; third-party gateways (ZenMux `meituan/longcat-2.5-preview`); works with Claude Code–style agent harnesses and OpenCode. Chat Completions-style API.
- **Release / knowledge:** Released 2026-09-25 (benchmarklist.com citing x.com/Meituan_LongCat announcement). Knowledge cutoff not disclosed.
- **IDs:** `meituan/longcat-2.5-preview` (gateways); `LongCat-2.5-Preview` (LongCat API Platform). No Zen Free ID verified.
- **Context window:** 1.0M tokens (longcat.ai platform docs, cloudprice.net, benchmarklist.com).
- **Modalities:** Natively multimodal — image understanding for cross-modal QA, content summarization, and visual reasoning (zenmux.ai, longcat.ai); text output; interleaved reasoning ("thinking") traces; tool calling built for agent harnesses.
- **Pricing (as of 2026-10-13):** Limited-time promotional: $0.30/1M input, $0.006/1M cached input, $1.20/1M output (longcat.ai platform pricing via benchmarklist.com); cloudprice.net confirms from $0.30/1M input.
- **Architecture:** Sparse MoE, ~1.6T total / ~48B active parameters (benchmarklist.com summary). Weights not published for the 2.5 preview (LongCat-2.0 was open; 2.5 license unconfirmed).

### Raw benchmarks found

Agent / tool use:

- AI Coding Daily LLM Coding Leaderboard (OpenCode harness, evaluated 2026-10-02, methodology on aicodingdaily.com): completed the full 7-project agentic suite — Laravel Code Quality 16.98/20, React-TS Code Quality 16.67/20, CSV Import (PHP) 3, Offline Sync (PHP) 2.7, Bank Feed (Dart/Flutter) 4, Shipping Quotes (Go) 0.9; avg 16:50 per prompt at rank #38 overall.
- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: **no verified public score found** for this exact model/ID.

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / MLCR / CritPt / Artificial Analysis Intelligence Index / Omniscience: **no verified public score found**. benchmarklist.com (imported 2026-10): "Meituan published no benchmarks for this preview... No independent evaluation had been confirmed when it was imported."

Coding:

- AI Coding Daily LLM Coding Leaderboard (aicodingdaily.com, eval 2026-10-02, OpenCode harness): **Total 46.65/80 points, rank #38 of 41 tested models**; Bug Finding Test 2.4/20. Neighbors: GLM-5.3-Flash (Max) 47.51 (#36), Gemini-3.8-Flash (High) 47.09 (#37), GPT-6-Luna (Medium) 43.74 (#39), Gemini-3.1-Pro 42.36 (#40); board leader GPT-6.1-Sol (High) 68.1.
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / SciCode: **no verified public score found**.

Long context:

- No MRCR / RULER / GraphWalks retrieval numbers published — no long-context retrieval reported (1M window is documented, unmeasured).

### Normalized scores (1–100)

- **Tool use: 70/100.** Agent-positioned model (terminals, browsers, GUIs, spreadsheets) that completed a full 7-project agentic coding suite inside the OpenCode harness — including multi-step deliverables like a working offline-sync PHP app and a Dart bank-feed feature. Capped by the absence of any dedicated agent benchmark (Terminal-Bench, Tau) and one outright failed project (Shipping Quotes, 0.9).
- **Reasoning: 62/100.** Interleaved thinking traces are documented, but no GPQA/HLE-class reasoning measurement exists for this ID; score is a conservative provisional mid-low band pending any published reasoning number.
- **Context window: 88/100.** 1M-token window verified across longcat.ai docs, cloudprice.net, and benchmarklist.com — top-tier size tier; capped below the maximum because no retrieval benchmark (RULER/MRCR) confirms effective use of the full window.
- **Multimodal: 65/100.** Native image understanding (cross-modal QA, visual reasoning, summarization — zenmux.ai/longcat.ai), new vs the text-only LongCat-2.0; text-out with no demonstrated audio/video input or image generation keeps it mid-band.
- **Coding: 72/100.** 46.65/80 (58%) at rank #38 of 41 on a live measured coding leaderboard — strong code-quality subtests (17/20 Laravel, 16.7/20 React-TS) dragged down by near-zero bug-finding (2.4/20) and a failed Go project. Capped by the below-median overall placement.
- **Cost efficiency: 88/100.** $0.30/1M in, $1.20/1M out promotional pricing is very cheap for a 1.6T MoE with a 1M window; scoring assumes promo rates persist (list rates are higher).
- **Overall Score: 71/100.** Half-up mean of Tool 70, Reasoning 62, Context 88, Multimodal 65, Coding 72 = 71.4 → 71. Best fit: budget long-horizon coding agents that need a 1M window and can tolerate unproven reasoning and weak autonomous bug-finding.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-13
- Method: public internet research (aicodingdaily.com LLM Coding Leaderboard, benchmarklist.com, cloudprice.net, zenmux.ai, longcat.ai, eneralabs.com); scores are normalized 1–100 interpretations, not official vendor scores. This report replaces an earlier self-excluded note after the first independent benchmark (AI Coding Daily, evaluated 2026-10-02) was published.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
