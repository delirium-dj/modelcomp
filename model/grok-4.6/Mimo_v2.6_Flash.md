# Grok 4.6 — findings by Mimo v2.6 Flash

- Source: xAI (SpaceXAI)/`grok-4-6`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** Post-training upgrade on Grok 4.5 (released 2026-08-12) for long-running agents and interactive/visual work — **ties GPT-5.6 Sol at AA Intelligence Index 61**; leads agentic knowledge work (GDPval-AA v2 1753, AA-Briefcase 1577) while trailing Sol/Fable on DeepSWE and Terminal-Bench v3. Same 500K context and $2/$6 base price as 4.5; longer trajectories, 200K price cliff, priority 2×.
- **Provider / access:** xAI API `grok-4.6` (Responses + Chat Completions); Cursor, Grok Build, OpenRouter, Vercel, Cloudflare. First-week 2× included usage promo in Cursor/Grok Build (ended). Closed API — no open weights. Not yet on Bedrock/Azure/Vertex (those still carry Grok 4.3).
- **Release / knowledge:** 2026-08-12; knowledge cutoff **2026-02-01**.
- **IDs:** `grok-4.6`.
- **Context window:** **500,000** tokens (API); **256,000 inside Cursor**; no published text output cap.
- **Modalities:** text + image in (jpg/jpeg/png ≤20MiB); text out; reasoning_effort low/medium/high (default)/xhigh; tool calls yes; web search + X search + code execution + collections (RAG) + remote MCP; context compaction for long loops.
- **Pricing (as of 2026-09-22):** **$2.00 in / $6.00 out per 1M for prompts <200K**; cached $0.50. **≥200K prompt → entire request bills $4 / $12 (cached $1)** — no partial-tier band. Priority/fast: 2× all token types (`service_tier: priority`; Cursor "Fast" same 2×). Tools extra: web/X search, code execution **$5 per 1,000 calls**. AA blended ~$1.35/M. Paid API.
- **Architecture:** proprietary; trackers say same 1.5T V9 base as Grok 4.5 (params not officially disclosed); longer post-training with model-generated reasoning + agentic RL.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found. xAI launch table = Grok 4.6 High vs peers; AA rows independent. **Version discipline:** TB v2.1 ≠ v3.0 — do not mix.

Agent / tool use:

- GDPval-AA v2: **1753 Elo** (xAI/AA; behind Opus 5, ~Fable 5 1741, above Sol 1728)
- AA-Briefcase: **1577** (xAI; ~Fable 5 1574, above Sol 1502)
- CursorBench v3.2: **69.9%** (xAI; vs 4.5 66.7, Sol 67.2, Fable 5 70.5)
- APEX-Agents: **57.5%** (xAI; vs Sol 56.7, Fable 59.2)
- Terminal-Bench **v3.0**: **26.0%** (xAI; vs Sol 34.6, Fable 34.1 — clear loss)
- Terminal-Bench **v2.1**: **88.4%** circulating (Floatboat cites "level with leaders" — **not in xAI launch table**; treat as unverified third-party claim vs xAI's own TB3.0 26%)
- OSWorld / MCP Atlas / Toolathlon / Tau3 / Claw-Eval / Finance Agent: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **61** (AA; ties Sol Max, trails Fable 5 Max 62 / Opus 5 63; independent verification ~60.92 per Floatboat, rank ~4/184–20 depending on tracker window)
- GPQA Diamond / AIME / MMLU-Pro / HLE / FrontierMath: **no verified public score found** (xAI did not publish at launch — same omission pattern as Grok 4.5)
- Harvey LAB (Vals): **15.8%** (xAI — legal reasoning, low absolute)
- AA blended price: **$1.35/M** (3:1 in:out); cost per index task: **$0.84** (AA; vs 4.5 $0.36, Sol $1.23, Opus 5 $2.34)

Coding:

- DeepSWE v1.1: **65.9%** (xAI; vs 4.5 54.0, Sol 73.0, Fable 5 70.0)
- FrontierCode v1.1 (Extended): **61.3%** (xAI; vs Sol 60.6, Fable 63.6)
- APEX-SWE: **56.4%** (xAI; vs Fable 58.8)
- Terminal-Bench v3.0: **26.0%** (see agent row)
- SWE-bench Verified / LiveCodeBench / SWE-Pro: no verified public score found (HokAI shows an ambiguous "% solved SWE-bench" fragment — not used)

Long context:

- 500K window (half of 1M frontier class; Cursor only 256K)
- MRCR / GraphWalks / ∞Bench: no verified public score found
- Context compaction supported for long agent loops (xAI docs)

Multimodal:

- Text + image in; text out only (no video/audio generation; no native video understanding claim)
- MMMU / CharXiv: no verified public score found

Latency / efficiency (AA independent):

- TTFT high-effort: **40.44s** (vs 4.5 14.62s — big regression); output ~68 tok/s; ~20% more output tokens on index vs 4.5

### Normalized scores (1–100)

- **Tool use: 90/100.** GDPval-AA v2 1753 (top-tier), AA-Briefcase 1577, CursorBench 69.9, APEX-Agents 57.5; capped by TB v3.0 26% (if the circulating 88.4% TB2.1 were verified it would lift this, but it is not in xAI's table — hold at 90 with TB3 loss noted).
- **Reasoning: 88/100.** AA Intelligence Index 61 (ties Sol, frontier band); capped hard by **no GPQA/HLE/AIME/MMLU published** — evidence gap on science reasoning keeps it below 92+.
- **Context window: 75/100.** **500K only** (vs 1M+ frontier norm; Cursor 256K); no MRCR row; compaction helps but window is the constraint → 75.
- **Multimodal: 65/100.** Text + image in only → 60–70 band → 65.
- **Coding: 84/100.** DeepSWE 65.9, FrontierCode 61.3 ≥ Sol, APEX-SWE 56.4 solid; capped by **TB v3.0 26% well behind Sol/Fable ~34%** and DeepSWE −7 pts vs Sol; TB2.1 88.4% unverified.
- **Cost efficiency: 72/100.** $2/$6 under 200K excellent vs Sol $5/$30; but **200K cliff doubles whole request**, cache rose to $0.50 (from $0.30 on 4.5), TTFT 40s and +20% output tokens raise **cost-per-task to $0.84** (AA) vs 4.5 $0.36 — sticker good, realized agent cost mid.
- **Overall Score: 80/100.** Mean of five quality dims (90+88+75+65+84)/5 = 80.0 → 80. Best-fit: long-horizon agentic **knowledge work** (GDPval/Briefcase) at Sol-composite intelligence for ~¼ the output price under 200K; not for terminal-SOTA coding (TB3), >500K context, or science-benchmark procurement (GPQA unpublished).

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (xAI Grok 4.6 announcement, llm-stats launch breakdown, DataCamp comparisons, Floatboat reality check, HokAI hub, elsolitario); scores are normalized 1–100 interpretations, not official vendor scores; most raw rows are xAI self-reported (High effort) unless marked AA.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
