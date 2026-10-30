# Kimi K3.1 Pro — findings by GLM 5.3 Flash

- Source: Moonshot AI (`moonshotai/kimi-k3.1-pro`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's flagship reasoning model and first major upgrade since Kimi K3 (July 2026): a ~2.8T-parameter open-weight-class MoE aimed at coding, financial research, and 3D/game modelling, with deliberately restricted cyber-offense capability. Launches at #4 on the Artificial Analysis Intelligence Index and becomes the leading open-weights model once its weights land.
- **Provider / access:** Moonshot first-party API and app; OpenRouter `moonshotai/kimi-k3.1-pro`. Weights were **not yet published** at the research date — Moonshot is expected to release them on **2026-11-04** (Mint), after which it becomes the highest-scoring open-weights model on AA's index (gap to proprietary leaders narrows from 12 to 3 points).
- **Release / knowledge:** announced 2026-10-23/24 (AA article dated Oct 23; Mint reports the Oct 24 announcement); knowledge cutoff not stated.
- **IDs:** `moonshotai/kimi-k3.1-pro` (OpenRouter, verified); first-party API id expected `kimi-k3.1-pro` (not independently confirmed) — no Free ID exists on Zen
- **Context window:** 1M tokens (Artificial Analysis launch article). Max output not published.
- **Modalities:** text + image input, text output; reasoning model (AA). Agentic tool use demonstrated in Terminal-Bench/AutomationBench harnesses; JSON mode: not verified.
- **Pricing (as of 2026-10-30):** $2.00/Mtok input, $10.00/Mtok output, $0.20/Mtok cache hit (AA; 33% lower than Kimi K3 on all three rates). AA cost per Intelligence Index task: $1.98.
- **Architecture:** Mixture-of-Experts, **2.8T total / 104B active** parameters (AA; Mint rounds to "3-trillion-parameter"). Weights pending (expected 2026-11-04); license expected to follow the K3 lineage's custom "Kimi K3 License" rather than MIT/Apache (K3 model card via InferenceX — lineage data, labeled).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **67.2%** (AA lane via OpenRouter; +54 points over Kimi K3's 13%; ahead of Claude Sonnet 5.5's 64% per AA; community coverage: beats GPT-6 Astra on Terminal-Bench)
- AutomationBench-AA: **73%** (AA; up from K3's 58%; Gemini 4 Argon leads the visible set at 77.5%)
- GDPval-AA: **67.3% normalized** (AA lane via OpenRouter — near the visible-set leader Opus 5.5 at 68.3%)
- AA-LCR v1.1: **86.3%** (long-context agentic reasoning; among the strongest published LCR figures found)
- Design Arena Elo: 3D **1451**, Game Development **1410**, Code Categories **1354**, Data Visualization **1300** (Design Arena via OpenRouter — matches Moonshot's 3D/game-dev positioning)
- Tau3-Banking: no verified public score found for K3.1 Pro (K3 reported τ³-Banking — lineage)
- Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **55** at launch (AA article, 2026-10-23; #4 — trails only Opus 5.5 (58), Sonnet 5.5 (56), Muse Wonder Full (56); +11 over K3's 44). Note: OpenRouter's benchmark table prints **46.0** for "Kimi K3.1 Pro Intelligence Index" — lane/effort-version discrepancy on the aggregator, both cited; the AA launch article (55, max) is primary.
- HLE: **52.5%** (AA lane via OpenRouter and Wikipedia HLE table; up from K3's 47% AA-lane. Moonshot's own K3 model card reported HLE w/tools 58.7% — different lane/harness, lineage)
- CritPt: **24.6%** (AA; K3 23%)
- SciCode: **60.8%** (AA; K3 59%)
- AA-Omniscience: Index **30** (from K3's 20); accuracy 48.9% (OpenRouter) / 51% (AA X post — lane variance, both cited); hallucination rate 44% per AA X (OpenRouter's "non-hallucination 62.7%" is inconsistent with that pair — cited per source, unresolved)
- GPQA Diamond: no verified public score found for K3.1 Pro (K3: 91.2% — lineage)
- GDP.pdf: no individual public value found

Coding:

- Terminal-Bench 4.0: **67.2%** (the launch's headline coding-agent result)
- SWE-bench Verified / SWE-Bench Pro / DeepSWE / LiveCodeBench: no verified public score found for K3.1 Pro as of 2026-10-30 (weights not yet out; predecessor K3 lineage: SWE-Bench Pro 63.4%, SWE-bench Verified 70.7%, LiveCodeBench v6 89.0%)
- Design Arena Code Categories Elo: **1354**
- Vibe Code Bench / SciCode-coding rows: SciCode 60.8% (see reasoning)
- Moonshot in-house: Kimi Code Bench 2.0 exists in the K3 lineage (K3.1 Pro figure not published)

Long context:

- 1M window; AA-LCR 86.3% is the strongest published long-context signal for this model

### Normalized scores (1–100)

- **Tool use: 90/100.** TB4.0-AA 67.2% tops the visible AA set, AutomationBench-AA 73% and GDPval-AA 67.3% normalized sit at the frontier-agentic line, AA-LCR 86.3% adds long-horizon reach; capped only by the missing Tau3/Claw rows and a slightly below-Argon AutomationBench.
- **Reasoning: 85/100.** AA Index 55 (#4 overall) maps to the high-80s band; HLE 52.5%, SciCode 60.8%, CritPt 24.6% support it; a 44% hallucination rate (AA X) and the unresolved Omniscience lane keep it under 90.
- **Context window: 96/100.** Verified 1M window with a measured 86.3% AA-LCR — strong, but short of the ≥98% retrieval needed for 100.
- **Multimodal: 68/100.** Text + image input with text output only; no video/audio/PDF input documented.
- **Coding: 88/100.** TB4.0 67.2% and Design Arena Code 1354 / GameDev 1410 / 3D 1451 evidence frontier agentic coding with a distinctive 3D/game-dev strength; no published SWE-bench/DeepSWE rows for the exact ID cap it below the Wonder/Opus tier.
- **Cost efficiency: 66/100.** $2/$10/$0.20 is meaningfully under the $3/$15 ≈ 60 band, but 55K output tokens per index task (14% more than K3) hold cost per task at $1.98 — mid-premium value, not a bargain tier.
- **Overall Score: 85/100.** Mean of the five quality dims (90+85+96+68+88)/5 = 85.4 → 85. Best fit: long-horizon agentic coding, financial research, and 3D/game development at a sub-Opus price; weak fit until weights ship for self-hosters, and for hallucination-sensitive knowledge work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-30
- Method: public internet research — Artificial Analysis launch article + X posts, OpenRouter benchmark/pricing page, Mint launch coverage, Kimi/InferenceX K3-lineage model-card data (labeled as predecessor), llm-stats, Design Arena rows; AA 55-vs-46 and Omniscience lane conflicts cited per source. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
