# Claude Sonnet 4 — findings by MiniMax M3.1 Flash

- Source: Anthropic (Claude Sonnet 4), `claude-sonnet-4-20250514`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's May 2025 hybrid-reasoning Sonnet, the model that reset the coding-agent market (SWE-bench Verified 72.7%) and led OSWorld at launch. It is now a **retired** model — deprecated 2026-04-14 and retired from the Claude API on 2026-06-15 — kept here as a historical reference; it still runs on Amazon Bedrock and Google Cloud.
- **Provider / access:** Anthropic Messages API (`claude-sonnet-4-20250514`), Amazon Bedrock (`us/global/eu/apac.anthropic.claude-sonnet-4-20250514-v1:0`), Google Vertex AI. **Not on OpenCode Zen** — Zen's Anthropic catalogue now lists only Sonnet 4.5/4.6/5/5.5 (the Zen docs' deprecation table records "Claude Sonnet 4 — June 15, 2026"), so the `opencode/claude-sonnet-4` id in this folder has no live Zen route.
- **Release / knowledge:** **2025-05-22** (Anthropic "Claude 4" launch post). Knowledge cutoff **2025-03-01** (AA).
- **IDs:** `claude-sonnet-4-20250514` (Anthropic), `claude-sonnet-4` (OpenRouter / models.dev), `anthropic/claude-sonnet-4` (OpenRouter).
- **Context window:** **200,000** tokens with **64,000** max output (Anthropic context-window docs, models.dev provider entries). Conflict: Artificial Analysis and models.dev's opencode entry list **1,000,000** (the historical 1M beta configuration) — Anthropic's current docs grant 1M by default only to Sonnet 4.6 and later.
- **Modalities:** text and image input, text output; vision, tool use, structured outputs, extended thinking; multilingual.
- **Pricing (as of 2026-10-20):** **$3/M input, $15/M output**, cache read **$0.30/M**, 5-minute cache write **$3.75/M**, 1-hour cache write **$6.00/M**; Batch $1.50/$7.50. Note: the "$6/$22.50 above 200K" tier in some trackers matches later Sonnet tiers, not Sonnet 4's own Anthropic price row.
- **Architecture:** proprietary.

### Raw benchmarks found

> Anthropic's launch post publishes most tables as chart images, so only text-stated figures are listed; Artificial Analysis supplies the machine-readable Terminal-Bench and composite numbers.

Agent / tool use:

- OSWorld: **42.2%** at launch — "Sonnet 4 held the lead at 42.2%" (Anthropic, quoted in the Sonnet 4.5 post)
- Terminal-Bench 2.1: **36.33%** (AA, thinking) · Terminal-Bench Hard: **31.06%** (thinking) / **27.27%** (non-reasoning)
- Tau2-bench: **64.62%** (AA, thinking) vs **52.34%** (non-reasoning)
- GDPval-AA / AutomationBench / Toolathlon / MCP-Atlas / Claw-Eval: no verified public score found for Sonnet 4

Reasoning / knowledge:

- GPQA Diamond: **70.0%** (Anthropic, without extended thinking) vs **77.68%** (AA, thinking) vs **68.28%** (non-reasoning)
- HLE: **10.70%** (AA) · Artificial Analysis Intelligence Index: **18.92** (thinking) vs **16.61** (non-reasoning)
- MMMU: **72.6%** (Anthropic, no thinking) · MMMU-Pro: **61.79%** (AA) · MMMLU: **85.4%** (Anthropic, no thinking)
- AIME 2025: **33.1%** (Anthropic, no thinking) vs **74.33%** (AA thinking) — large thinking-mode gap
- LiveCodeBench: **65.50%** (AA) · AA-LCR: not published for this model

Coding:

- SWE-bench Verified: **72.7%** (Anthropic launch post, single attempt over all 500 problems) and **80.2%** at high compute — the widely quoted **74.8%** figure could not be verified in any machine-readable source
- Terminal-Bench 2.1: 36.33% (AA) · SWE-bench Pro: no verified public score found for Sonnet 4

Long context:

- No MRCR / RULER retrieval measurement published for Sonnet 4.

### Normalized scores (1–100)

- **Tool use: 50/100.** OSWorld 42.2% and Terminal-Bench 2.1 36.3% are the mid band, τ²-bench 64.6% is decent, but no GDPval, AutomationBench or MCP-Atlas number exists for Sonnet 4, so the score cannot climb further.
- **Reasoning: 60/100.** GPQA 70–78%, MMLU-Pro 61.8% and MMMLU 85.4% sit at the mid band, while HLE 10.7%, an AA Intelligence Index of 18.9 and AIME 33.1% without thinking (74.3% with) show how dependent the model is on extended thinking.
- **Context window: 72/100.** Anthropic documents 200,000 tokens with 64,000 max output — the 200K–500K tier — despite AA and some trackers quoting the old 1M beta window; no long-context retrieval test is published, so the tier score stays mid.
- **Multimodal: 65/100.** Text and image input with text output (MMMU 72.6%, MMMU-Pro 61.8%) — the "+image in" band, with no audio, video or PDF claim.
- **Coding: 68/100.** SWE-bench Verified 72.7% (80.2% at high compute) and LiveCodeBench 65.5% are solid mid-band coding numbers, capped by Terminal-Bench 2.1 at 36.3% and the absence of any SWE-bench Pro figure.
- **Cost efficiency: 60/100.** $3/M in and $15/M out is the classic premium tier price band (≈$3/$15 → ~60), partly offset by the $0.30/M cache read.
- **Overall Score: 63/100.** Mean of the five quality dims = (50 + 60 + 72 + 65 + 68) / 5 = 63.0 → **63**. Best fit: historical reference only — Anthropic's own replacement path leads to Sonnet 5.5, and the live Sonnet 4.5/4.6 line is the same price with better numbers.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (Anthropic launch post, pricing and deprecation docs, context-window docs, Artificial Analysis, OpenRouter API, models.dev, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.5.md`, using the same headings.
