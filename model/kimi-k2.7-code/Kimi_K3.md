# Kimi K2.7 Code — findings by Kimi K3

- Source: Moonshot AI / Kimi K2.7 Code (`kimi-k2.7-code`; HF `moonshotai/Kimi-K2.7-Code`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot's coding-specialized K2.7 variant (open weights, June 2026) — strong MCP tool use (MCP Atlas 76%, MCP Mark 81.1%) and LiveCodeBench 82.1% in a 256K window; live on OpenCode Zen (~#23 weekly).
- **Provider / access:** Moonshot/Kimi API; open weights `moonshotai/Kimi-K2.7-Code` (HF — link confirmed live via OpenCode Data); OpenRouter; OpenCode Zen route.
- **Release / knowledge:** Released 2026-06-12 (OpenCode Data; HF createdAt 2026-06-11 — consistent); catalog cutoff listed 2025-01 (implausibly early for the generation — catalog noise, flagged).
- **IDs:** `moonshotai/kimi-k2.7-code`, `moonshotai/Kimi-K2.7-Code` (HF). No separate Zen Free ID verified.
- **Context window:** 262K tokens; max output up to 262K (OpenCode Data — previously unverified).
- **Modalities:** text/image/**video** in (OpenCode Data — video input now catalog-confirmed vs my first-pass text/image-only note); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-11):** $0.95/M input, $4.00/M output, $0.19/M cached (OpenCode Data catalog — verified now; matches Moonshot-direct rates from the K2.6 line).
- **Architecture:** open weights (confirmed); params undisclosed on the card.

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2-Bench): **90.1%** (benchlm.ai)
- MCP Atlas: **76.0%** (official HF card via OpenCode Data; matches); MCP Mark Verified: **81.1%** (official; matches)
- Kimi Claw 24/7: **46.9%** (official HF card; matches benchlm.ai)
- Economic agentic: GDPval-AA **1114 Elo** (26.3% normalized); AA Agentic Index: **22.5%** (benchlm.ai)
- Terminal-Bench 2.1 (Vals): **67.0%** (benchlm.ai)
- TB 2.1 primary / Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (AA): **89.6%** (benchlm.ai)
- HLE (AA-HLE): **35.0%** (benchlm.ai)
- AA-LCR: **79.3%**; CritPt: **10.0%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **25.8**; BenchLM overall **50.44/100, #72 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **39.6% / 82.4%** (benchlm.ai)
- AA-IFBench: **63.1%** (benchlm.ai)

Coding:

- LiveCodeBench (Vals): **82.1%**; SWE-bench (Vals): **78.2%** (benchlm.ai)
- Kimi Code Bench v2: **62.0%** (official HF card; matches benchlm.ai)
- ProgramBench: **53.6%** (official HF card; matches); CursorBench 3.2: **49.7%**; MLS-Bench Lite: **35.1%** (official; matches); OpenHarmony Bench: **52.1%** (benchlm.ai)
- AA-SciCode: **47.8%**; AA Coding Index: **60.8** (benchlm.ai)

Long context:

- AA-LCR 79.3% within 256K (benchlm.ai); 262K max output catalog-verified; no MRCR/RULER rows.

Multimodal:

- Design Arena Website: **1277 Elo** (benchlm.ai); image+video input catalog-confirmed this pass.

### Normalized scores (1–100)

- **Tool use: 76/100.** Unchanged: τ² 90.1%, MCP Atlas 76.0%, MCP Mark 81.1% (official-confirmed); capped by GDPval 1114 and Agentic Index 22.5%.
- **Reasoning: 72/100.** Unchanged: GPQA 89.6%, LCR 79.3%; capped by HLE 35%, CritPt 10%, hallucination 82.4%.
- **Context window: 72/100.** Unchanged: 256K window (full-window output now verified); below the 1M tier.
- **Multimodal: 65/100.** Raised from 62: video input now catalog-confirmed alongside image; still thin verified in-house rows (Design Arena only) and text-only output.
- **Coding: 74/100.** Unchanged: LiveCodeBench 82.1%, SWE-bench 78.2% solid for a code specialist; capped by Coding Index 60.8.
- **Cost efficiency: 85/100.** Verified now: $0.95/$4.00 catalog price plus open weights.
- **Overall Score: 72/100.** Half-up mean of the five quality dims (76+72+72+65+74)/5 = 71.8 → 72 (from 71.2 on the video-input confirmation). Best fit: open-weight coding assistants with MCP tool stacks; superseded by Kimi K3 for serious reasoning.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (official HF model card `moonshotai/Kimi-K2.7-Code` tables transcribed by OpenCode Data `moonshotai/kimi-k2-7-code` incl. verified release/pricing/Zen usage; benchlm.ai scorecard + HF hub metadata from first pass). Scores are normalized 1–100 interpretations, not official vendor scores. Reporting on a Moonshot-family model — all numbers cited from public sources, not internal knowledge.
- Future sources: add a new file next to this one using the same headings.
