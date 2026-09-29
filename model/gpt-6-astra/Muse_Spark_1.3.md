# GPT-6 Astra — findings by Muse Spark 1.3 Contributor

- Source: OpenAI/GPT-6 Astra, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: launch absolutes added, scores recomputed 89 → 90); re-verified 2026-09-29 (UTC, user-signed-off re-research: Index scale-disambiguated + BrowseComp 91.5 + SEC-Bench 85.4 + SciCode 54.1 + LCR 74.3 + Coding Index 76.9 + ScreenSpot 92.7 + fast-mode added; Tool 93 → 94, Reasoning 97 → 98 — Overall holds 90)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra (OpenAI flagship above GPT-5.6 Sol)
- **Short description:** OpenAI's flagship above GPT-5.6 Sol with 1.05M context, staged rollout from Trusted Access programs, built for frontier reasoning and agents with best-in-class token efficiency.
- **Provider / access:** OpenAI via API + Codex (`openai/gpt-6-astra`); Trusted Access staged rollout, no Zen Free ID (Responses API, tool calling + MCP).
- **Release / knowledge:** 2026-09-03 limited preview, stable 2026-09-04 (OpenAI; Bedrock launch 2026-09-08); knowledge cutoff 2026-04-30 (API docs, amended 2026-09-27).
- **IDs:** `openai/gpt-6-astra` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1,050,000 (1M) / 128K out — verified via curated repo metadata + AA article
- **Modalities:** text, image in; text out; reasoning yes (low→max efforts); tool calls yes
- **Pricing (as of 2026-09-18):** Paid $10 in / $50 out per 1M ($1 cached, $12.50 writes); Fast mode 2x speed at 2x price; >272K-token requests long-context rates (re-verified 2026-09-29; 2.5x GPT-5.6 Sol)
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **59% Index-config / 56% Codex** (AA Astra article); **57.7%** (OpenAI launch table, #1 lane) — consistent band
- AutomationBench: **69% AA lane** (AA Astra article); **41.4% launch-table lane** (OpenAI announcement, vs Fable 5.1 31.4%) — different harnesses, both lead their lane
- GDP.pdf: **31% all-pass** (AA Astra article: leads GPT-5.6 Sol 27%)
- OSWorld 2.0: **72.6%** (OpenAI launch table, vs GPT-5.6 Sol 65.7%, ~47% faster per task)
- Agents' Last Exam: **59.3%** (OpenAI launch table, vs Sol 53.6%)
- BrowseComp: **91.5%** (OpenAI launch table — re-verified 2026-09-29)
- ScreenSpot-Pro: **92.7%** no-tools; BenchCAD: **95.9%** with Python (launch table — re-verified 2026-09-29)
- Terminal-Bench Science 0.1: **64.6%** (OpenAI launch table)
- GDPval-AA v2: **-45 Elo vs GPT-5.6 Sol** (AA Astra article: fewer turns 24/task vs 45–60 for peers)
- AA-Briefcase: **+90 Elo vs GPT-5.6 Sol** (AA Astra article: analytical quality up, presentation quality trails Sol)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- SWE Atlas QnA: **62%** (AA Astra article: vs GPT-5.6 Sol 54%)

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (OpenAI launch table; llm-stats leaderboard #1 of 247)
- HLE: **57.2% with tools** (OpenAI launch table)
- ARC-AGI-3: **99.9%** (provider-adapter harness, high reasoning; 62.7% standard-harness max — ARC Prize verified); **ARC-AGI-2 95.0% / ARC-AGI-1 98.5%** (launch table)
- FrontierMath Tier 4 (v2): **97.6%** (OpenAI launch table; saturating per announcement)
- HealthBench Professional: **63.4% length-adjusted** (OpenAI launch table)
- LCR: **74.3%** (Dataconomy/AA — re-verified 2026-09-29); MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **53** (v4.3.2 max scale); **55** (AA max page); **61.2** (v4.1.1-era composite per Dataconomy — scale disambiguation, re-verified 2026-09-29); BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **51% hallucination (halved from 92%), accuracy +4** (AA Astra article, max effort)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode: **54.1%** (Dataconomy/AA — re-verified 2026-09-29)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **74.1% DeepSWE v1.1** (OpenAI launch table, vs Sol 72.7%; AA lane read 68% — different harness); **62 Coding Agent Index, tied #1 with Fable** (AA Astra article); **76.9 Coding Index** (Dataconomy/AA — re-verified 2026-09-29); **88.0% SRE-Bench** and **100% ExploitBench** (launch table, security-coding lane); **85.4% SEC-Bench Pro** / ExploitGym 42.4 (launch table — re-verified 2026-09-29); **FrontierCode 1.1 Extended 64.5 / Main 53.3** (launch table)

Long context:

- **1.05M window verified; MRCR v2 8-needle 100.0% (256K–512K) / 96.3% (512K–1M)** (OpenAI launch table); token efficiency frontier (27k out/task vs 78k Fable)

### Normalized scores (1–100)

- **Tool use: 94/100.** TB4.0 ~58% (#1 lane) plus BrowseComp 91.5%, ScreenSpot-Pro 92.7%, OSWorld 72.6%, ALE 59.3% and TB-Science 64.6% lead the field; capped below 95 by the GDPval-v2 regression (-45 Elo) and no TB2.1/Tau3 number.
- **Reasoning: 98/100.** GPQA 96.0% (#1 of 247) plus ARC-AGI-3 99.9%, FrontierMath Tier-4 97.6%, HLE 57.2% and LCR 74.3% saturate the frontier set; capped below 99 with no CritPt absolute.
- **Context window: 100/100.** 1.05M / 128K out verified; top tier.
- **Multimodal: 65/100.** Text+image in, text out; capped below video/audio/PDF omni models.
- **Coding: 94/100.** DeepSWE 74.1% (launch lane) plus SRE-Bench 88.0%, FrontierCode 64.5/53.3 and Coding Index 62 (tied #1) with best token efficiency; capped below 96 with no SWE-Verified/Pro absolute.
- **Cost efficiency: 35/100.** Paid $10/$50 premium (2.5x Sol); value only via token efficiency at frontier.
- **Overall Score: 90/100.** Mean of the five non-cost dims (94+98+100+65+94)/5 = 90.2 → 90; best-fit frontier token-efficient agent pick at premium price — now evidence-backed.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (Artificial Analysis Astra benchmarking article); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
