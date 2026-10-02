# LongCat 2.5 Preview — findings by GLM 5.3 Flash

- Source: Meituan (`meituan/longcat-2.5-preview`; Zen free entry `opencode/longcat-2.5-preview-free`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5 Preview
- **Short description:** Meituan's multimodal reasoning model for coding and agentic workflows — ~1.6T-parameter MoE (~48B active) retooled around autonomous agents (long-horizon execution, tool use, multi-step planning). Flag: second-generation release built on the LongCat 2.0 family (1.6T/48B MoE, ASIC-trained).
- **Provider / access:** OpenCode Zen `opencode/longcat-2.5-preview-free` (free tier, unlimited, zero retention); Meituan LongCat API Platform direct (Chat Completions); Vercel AI Gateway `meituan/longcat-2.5-preview`; Blackbox Router `blackboxai/meituan/longcat-2.5-preview`. Works with Claude Code, Hermes, OpenClaw, OpenCode, and Kilo Code per Meituan's changelog.
- **Release / knowledge:** Released 2026-09-25 (Meituan changelog "Version: 2026-09-25 — LongCat-2.5-Preview Now Available"; models.dev/openCode catalogue date 25 September 2026); free on OpenCode effective 2026-09-26. Knowledge cutoff: no verified public data found.
- **IDs:** `meituan/longcat-2.5-preview` (paid); `opencode/longcat-2.5-preview-free` (Zen/Go free tier)
- **Context window:** 1,048,576 tokens total, max output 131,072 — verified via Blackbox model page/CloudPrice (retrieved 2026-10-01) and OrcaRouter's models.dev catalogue readout (1,000,000/131,072).
- **Modalities:** text + image in (attachment support true in models.dev; vendor changelog claims image understanding for cross-modal QA, summarisation, visual reasoning); text out; reasoning toggle with interleaved `reasoning_content` trace; tool calling true. Caveat: Meituan's own "Retrieve Model" doc sample still shows `input_modalities: ["text"]` — treat image input as vendor-claimed until tested. Structured outputs: conflicting evidence (`structured-output` tag vs `native_structured_output: false`).
- **Pricing (as of 2026-10-02):** Free on OpenCode Zen — $0 input/output/cached read, unlimited monthly usage, zero data retention (model training "Not used", retention "0 days" per Zen privacy table); free-window end date published nowhere ("two weeks" circulates in aggregators but OpenCode says only "limited time" — budget for an unannounced cliff). Paid fallback: $0.30 / $1.20 per 1M (cached $0.006) — a limited-time discounted rate; list rates $0.75 / $0.015 / $2.95 (explainx update citing Meituan's pricing page).
- **Architecture:** ~1.6T total / ~48B active MoE (Meituan site metadata + Chinese trade coverage; no technical report yet); open weights false for the Preview API tier (LongCat 2.0 was MIT; 2.5 expected to follow but unconfirmed).

### Raw benchmarks found

Agent / tool use:

- AI Coding Daily LLM Coding Leaderboard (independent, evaluated 2026-09-28 with OpenCode): **#34, 44.25/60 total points**, avg cost N/A (free), avg time 16:50 — per-project: Laravel Code Quality **16.98/20**, React-TS Code Quality **16.67/20**, CSV Import (PHP) **3/5**, Offline Sync (PHP) **2.7/5**, Bank Feed (Dart/Flutter) **4/5**, Shipping Quotes (Go) **0.9/5**
- Terminal-Bench 2.1: no verified public score found
- Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (OrcaRouter, 2026-09-26: "Meituan has published none for this model: no vendor chart, no independent score, no leaderboard entry")

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found for this exact ID
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- no long-context retrieval reported (1M window advertised by three sources; no MRCR/RULER/GraphWalks numbers published)

### Normalized scores (1–100)

- **Tool use: 65/100.** 44.25/60 (~74% relative) on AI Coding Daily's coding-agent harness with strong Laravel/React-TS quality (16.98 and 16.67 of 20), but weak Go (0.9/5), no agentic-harness benchmarks (TB2.1/Tau3/GDPval all absent), and a mid-low leaderboard rank cap it in the upper-mid band.
- **Reasoning: 55/100.** No verified raw reasoning benchmark exists (GPQA/HLE/LCR absent; no vendor chart per OrcaRouter) — the reasoning toggle and vendor-claimed visual reasoning are unmeasured, so the score stays mid-band on spec-level evidence only.
- **Context window: 95/100.** 1,048,576-token context window verified across Blackbox/CloudPrice and models.dev (≥1M tier = 95–100); no measured ≥98% retrieval at 512K+ to justify 100. Max output 131,072 is generous, not a caveat.
- **Multimodal: 62/100.** Text + image input claimed (models.dev attachment flag + vendor changelog), but Meituan's own Retrieve Model doc sample still shows text-only input and no vision benchmark exists — the +image-in band (60–70) reduced for the conflicting vendor contract.
- **Coding: 70/100.** AI Coding Daily coding leaderboard 44.25/60 (rank #34) with solid web-stack quality but weak Go/shipping performance; no SWE-bench/LiveCodeBench/SciCode numbers for this exact ID — mid band on the one independent harness available.
- **Cost efficiency: 100/100.** $0 input/output/cached read on the OpenCode Zen free tier with unlimited monthly usage and zero data retention (the ideal free-tier profile); flagged as time-limited — the free window's end date is published nowhere, so budget for a price to appear overnight ($0.30/$1.20 discounted, $0.75/$2.95 list).
- **Overall Score: 69/100.** Mean of the five quality dims (65+55+95+62+70)/5 = 69.4 → 69. Best fit: zero-cost evaluation of long-context, image-input, and multi-harness compatibility workloads (the free window is ideal for exactly that); not yet a pick for production agentic or vision-heavy work until vendor-claimed capabilities are independently reproduced.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-02
- Method: public internet research (OrcaRouter analysis, AI Coding Daily leaderboard, explainx.ai, Meituan changelog coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
