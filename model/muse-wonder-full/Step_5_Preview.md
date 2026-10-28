# Muse Wonder Full — findings by Step 5 Preview

- Source: Meta / Muse Wonder Full (`muse-wonder-full-1.0`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta Superintelligence Labs' top-tier frontier model (released 2026-10-12 alongside the smaller Muse Wonder), positioned for long-running professional agents, ultra-long-horizon software engineering and advanced computer use. It is a genuinely distinct model from `muse-wonder-1.0`, not a tier of it: Meta ships a separate model ID, gates it behind Muse Code subscriptions (no API route at all), and its benchmark numbers differ from the base model on every row of Meta's launch table.
- **Provider / access:** Meta Model API developer platform (https://dev.meta.ai) — but Muse Wonder Full is **API-unavailable by design**: served only inside the Muse Code coding tool on the Power Usage ($50/month) and Maximum Usage ($200/month) subscriptions. Not available in South Korea on either surface. No per-token price is published (the $4/$20 rates belong to the API-served base `muse-wonder-1.0`).
- **Release / knowledge:** 2026-10-12 release (model card dated 2026-10-12; card PDF updated 2026-10-23/26). Knowledge cutoff not published.
- **IDs:** `muse-wonder-full-1.0` (Muse Code only). No pay-as-you-go API ID exists.
- **Context window:** 1,048,576 tokens (1M) — stated in the model card and Meta's docs table ("Context 1M"); max output not published. Verified via Meta developer page + models.dev TOML.
- **Modalities:** Input text, image, video, audio; output text. Reasoning model (all launch-table numbers run at max/xhigh reasoning effort). Tool calls supported (tools = true in models.dev). JSON mode not documented.
- **Pricing (as of 2026-10-28):** No per-token API pricing. Subscription-only: Muse Code Power Usage $50/month (20x Everyday usage) or Maximum Usage $200/month (80x Everyday usage); usage caps and resets apply, no metered rate. Caveat: Muse Code subscriptions can default to a data-sharing mode in which Meta may train on prompts/code/files.
- **Architecture:** Proprietary; parameter count not disclosed (Meta has not published weights or size). "Active Memory"/"Active Focus" are Meta's context-persistence features, not disclosed architecture details.

### Raw benchmarks found

> Meta's own launch table (model card, max effort unless noted) is the primary public source; Artificial Analysis provides the independent composite. Meta ran competitor models itself and calls those runs "best-effort".

Agent / tool use:

- AutomationBench-AA: **45.4%** (Meta card, strict pass@1, max effort — leads Claude Opus 5.5's 41.2, GPT-6 Astra 41.6, Fable 5.1 32.1)
- Terminal-Bench 4.0-AA: **57.1%** (Meta card; Opus 5.5 59.6, Astra 59.1 — trails both; base Wonder 52.0)
- Harvey LAB-AA (legal agent, all-pass): **13.1%** (Meta card; Opus 5.5 4.2, Astra 8.6 — leads)
- Vals Finance Agent V2: **59.1%** (Meta card; Opus 5.5 58.6)
- JobBench (professional tool use): **75.3%** (Meta card; Opus 5.5 75.4 — statistical tie)
- OSWorld V2.1 (agentic computer use): **78.4% partial / 39.4% binary** (Meta card)
- GDPval-AA v2.1: **1,857 Elo** (Artificial Analysis via All Things Muse, 2026-10-12 — #2, within confidence interval of Opus 5.5 and Sonnet 5.5; base Spark 1.3 was 1,681)
- AA-Briefcase v1.1 (agentic knowledge work): **1,729 Elo** (AA via All Things Muse — #3)
- MemoryBench: **85.5** (Meta card — Meta's own internal benchmark, methodology undisclosed, not independently reproducible)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **56 (v4.3, max effort)** per AA data cited by All Things Muse (2026-10-12) — #3-4, tied with Claude Sonnet 5.5, behind Opus 5.5 (58), ahead of GPT-6 Astra / Gemini 4 Argon / Fable 5.1 (53); base Wonder 52; Spark 1.3 48.
- **Conflicting current reading:** AA's live page (fetched 2026-10-28, Intelligence Index v5.0) shows **50, rank #14/77** with 110M output tokens per index run (median 67M — notably verbose). The 56-vs-50 gap is an AA methodology change (v4.3 → v5.0 replaced several evals), not a model regression; both readings are cited.
- CritPt v2 (physics, hard subset): **#1** per AA (nearest competitors 31-32% — narrow lead)
- GDP.pdf (professional documents, all-pass): **33.2, #1** per AA
- AA-Omniscience v1.1: **30 accuracy** (AA via All Things Muse; Opus 5.5 46, Astra 43 — a clear weakness) but **low hallucination rate** (abstains rather than invents)
- GPQA Diamond: no verified public score found
- HLE / HLE-Diamond: no verified public score found
- LCR / MLCR: no verified public score found
- AIME/MATH-style: no verified public score found

Coding:

- DeepSWE 1.1: **79.0% pass@1** (Meta card, max effort — field leader; Opus 5.5 74.2, Astra 74.1, Fable 67.4; confirmed independently by BenchLM's coding lane, 79.0%)
- SWE-Marathon (ultra-long-horizon): **57.5%** (Meta card, xhigh effort; Opus 5.5 46.3, Astra 42.5 — leads)
- ProgramBench (from-scratch, mini-swe-agent): **59.0%** (Meta card; Opus 5.5 70.5 — trails from-scratch programming)
- SciCode: **#3** per AA via All Things Muse (no numeric value published)
- BenchLM coding public-lane: **74.3 (Supported, #5/153)** — independent aggregator rank
- CyberGym: **88.4%** / ExploitBench: **58.9%** (model card, Oct-26 PDF revision)
- ExploitGym: **92 flags captured** per the Oct-26 card revision — **conflict:** the Oct-23 card text said "captured 20 intended flags (instead of the 92 total flags and 21 intended flags originally reported)", i.e. an earlier correction note; the two card versions disagree. Cited as vendor-corrected, unverifiable.
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- 1,048,576-token window verified (Meta docs); MRCR / RULER / GraphWalks retrieval-at-length: no verified public score found for this model. Meta's own MemoryBench 85.5 is undisclosed-methodology, provisionally noted only.

### Normalized scores (1–100)

- **Tool use: 88/100.** Leads or ties Opus 5.5 on most agentic rows (AutomationBench 45.4, Harvey LAB 13.1, Finance Agent 59.1, JobBench ~75.3, GDPval-AA 1,857 Elo #2, AA-Briefcase #3); trails on Terminal-Bench 4.0 (57.1 vs 59.6). Capped below 90 because terminal/agentic coding lag and no Tau3/Claw-Eval numbers exist.
- **Reasoning: 85/100.** AA Index 56 (v4.3) sits just under the 90-100 frontier band (which starts at ~60); #1 on CritPt and GDP.pdf offsets AA-Omniscience 30 (weak general knowledge, low hallucination). No public GPQA/HLE caps verification.
- **Context window: 95/100.** Native 1,048,576-token window (Meta docs) = ≥1M tier; scored 95 not 100 because no independent 98%+ retrieval-at-512K evidence was found (Muse Spark 1.3's 100 rests on MRCR 98.5%).
- **Multimodal: 90/100.** Text + image + video + audio input with text output and tool support (Meta model card; models.dev) — audio input puts it in the 90-100 band; no non-text output caps it at 90.
- **Coding: 88/100.** Field-leading long-horizon coding (DeepSWE 1.1 79.0, SWE-Marathon 57.5, BenchLM coding lane #5/153) but trails Opus 5.5 on from-scratch ProgramBench (59.0 vs 70.5) and Terminal-Bench 4.0; no SWE-bench Verified/LiveCodeBench public numbers.
- **Cost efficiency: 60/100.** No metered price at all: $50/$200-per-month Muse Code subscriptions with usage caps (20x/80x of a limited base plan), no free tier, and AA measured the API-served base Wonder at $4.52 per index task (~3x Spark 1.3's $1.60). Comparable paid-API tiers ($3/$15) sit at ~60 on the methodology scale; the subscription is roughly price-neutral for heavy users and poor for light ones.
- **Overall Score: 89/100.** Mean of Tool 88 + Reasoning 85 + Context 95 + Multimodal 90 + Coding 88 = 446/5 = 89.2 → 89. Best fit: frontier-class long-running agent and SWE-Marathon-style coding inside Muse Code subscriptions; choose the API-served `muse-wonder-1.0` (or Opus 5.5, tied on index) when metered API access matters.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-28
- Method: public internet research (Meta model card + developer docs, Artificial Analysis, All Things Muse, TechCrunch/Reuters/CNBC launch coverage, models.dev, BenchLM, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
