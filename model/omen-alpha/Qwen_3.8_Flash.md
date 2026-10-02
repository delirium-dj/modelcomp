# Omen Alpha — findings by Qwen 3.8 Flash

- Source: OpenCode stealth model (`opencode/omen-alpha`; vendor unconfirmed, suspected Zhipu/GLM)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha
- **Short description:** A stealth coding model quietly added to OpenCode Go ($10/month subscription tier) on 2026-09-04 with **no official model card, no standard benchmarks, and no vendor confirmation**. The sole public evidence is the OpenCode project-rubric leaderboard: **23.14/40 (~58%)** at rank #15 across PHP/Dart/Go projects. Backend URL tagging under a `zhipu` namespace fuels community speculation it is a rebranded Zhipu AI model (same vendor behind Ox Alpha → GLM-5.3-Flash) — **unconfirmed and not adopted for scoring.** Scored strictly on the evidence that exists.
- **Provider / access:** OpenCode ecosystem (Go subscription, $10/mo); API access via Tokenra; OpenAI-compatible; zero data retention claimed. No Zen Free ID.
- **Release / knowledge:** Surfaced 2026-09-04 (startupfortune/buildfastwithai coverage). Knowledge cutoff unknown.
- **IDs:** `opencode/omen-alpha`.
- **Context window:** **128K total** (Zen listing; not independently verified). Curated `meta.json` agrees but is a placeholder template.
- **Modalities:** **Text in / text out** per listing; reasoning mode implied by "Omen Alpha (High)" leaderboard config; tool calls yes (runs agentically in OpenCode). No vision/audio evidence.
- **Pricing (as of 2026-10-02):** **$0.20 in / $0.66 out / $0.04 cached** per 1M (omenalpha.io benchmark page). Also bundled in the $10/mo OpenCode Go plan. Observed cost: $0.03/prompt average. Cost excluded from Overall.
- **Architecture:** Proprietary / stealth — no params, license, or weights disclosed. Community suspects GLM lineage; not officially confirmed.

### Raw benchmarks found

> Verified via qualifying `Kimi_K3.md` (omenalpha.io benchmark page, OpenCode leaderboard transcription, startupfortune coverage — 2026-09-27). **Evidence state: minimal.** One non-standard leaderboard result across 4 language tasks. No GPQA, HLE, SWE-bench, LiveCodeBench, Terminal-Bench, CritPt, AA Index, Omniscience, MRCR, or LCR. AI Coding Daily explicitly notes "Not yet scored on the LLM Coding Leaderboard."

Agent / tool use:

- OpenCode coding-agent leaderboard: **#15 rank**, average **$0.03/prompt**, average **1:51/prompt** (snapshot 2026-09-04)
- Terminal-Bench / τ²/τ³ / GDPval / Claw-Eval / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA / HLE / LCR / CritPt / AA Intelligence Index / Omniscience / MMLU-Pro: **zero rows exist**

Coding:

- OpenCode project-rubric (2026-09-04, "Omen Alpha (High)"): **23.14/40 total (~58%)** — CSV import (PHP) 4/5, Offline sync (PHP) 3.5/5, Bank feed (Dart/Flutter) 2.7/5, Shipping quotes (Go) 3/5; code-quality subcomponent **9.94/20 (~50%)**
- SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE / Vibe: **no verified public score found**
- AI Coding Daily: "Not yet scored" (2026-09)

Long context:

- 128K listing unverified; **zero retrieval measurements**.

Multimodal:

- None — text-only per listing.

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. **Scoring philosophy:** the cohort's 63 appears to inherit reputation from the suspected GLM-5.3-Flash parent. I score only what's measured: one non-standard coding eval (~58%) and the operational evidence of running inside OpenCode's agentic harness. The "stealth evidence vacuum" prevents any dimension from reaching high confidence.

- **Tool use: 52/100.** Runs as an agent in OpenCode with tool-driven project tasks at $0.03/prompt in 1:51 — proves functional tool use in production. But zero standard agentic benchmarks (TB/GDPval/τ²/MCP) exist. Kimi's 50 is fair; the production-use evidence earns a slight uplift.
- **Reasoning: 52/100.** "High" reasoning mode implied; the coding rubric performance (~58%) requires multi-step logical reasoning on codebases. But literally no GPQA/HLE/CritPt data to characterize breadth, knowledge, or honesty. Kimi 55. A placeholder reflecting "some reasoning demonstrably works" without measuring its ceiling.
- **Context window: 55/100.** 128K listing = 100K–200K band (50–64); unverified spec, zero retrieval measurements. Band midpoint. Kimi's 58 is close.
- **Multimodal: 12/100.** Text in/out per listing and curated meta — floor band 10–20. Kimi's 15 and the floor agree.
- **Coding: 58/100.** 23.14/40 on OpenCode's project rubric is a real measured result; subscores show PHP (4/5, 3.5/5) above Dart (2.7/5) and Go (3/5) — inconsistent cross-language. Code quality 9.94/20 (50%) is the weaker half. Rank #15 means 14 models score better on this specific harness. Kimi's 60 is fair; I'm at 58 given the 58% raw pass rate.
- **Cost efficiency: 95/100.** $0.20/$0.66 cached $0.04 is genuinely cheap; $0.03/prompt observed confirms real economy; $10/mo OpenCode Go bundling. Cost excluded from Overall.
- **Overall Score: 46/100.** Mean of Tool 52, Reasoning 52, Context 55, Multimodal 12, Coding 58 = 229/5 = 45.8 → **46**. Best fit: **cheap subscription-tier coding agent for small projects in OpenCode Go** — the $0.03/prompt and 1:51/prompt economics are attractive. Not a frontier contender on any dimension, and the **complete evidence vacuum on reasoning/knowledge/honesty is a deployment risk**. The cohort's 63 is a reputation-inflation artifact from the unconfirmed GLM speculation; Kimi's 48 is the closest honest read. If Zhipu confirms this is GLM-5.3-Flash under a different name, re-score using the full GLM-5.3-Flash evidence base immediately.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: qualifying `Kimi_K3.md` (omenalpha.io benchmark page, OpenCode leaderboard, AI Coding Daily, startupfortune coverage — 2026-09-27). Curated `meta.json` is a template placeholder ("Standard pricing", "Omen Alpha model evaluation entry"). Scores are normalized 1–100 interpretations, not official vendor scores. Flagged: (a) **near-total evidence vacuum** — one non-standard eval is insufficient for general scoring, (b) suspected GLM-5.3-Flash rebrand (zhipu namespace in backend URL) is **unconfirmed and not adopted**, (c) if confirmed as GLM-5.3-Flash, context should be 1M not 128K and modalities should include image input — both contradicted by the current listing.
- Revisit trigger: **mandatory if Zhipu/OpenCode confirms the model identity** (enabling full GLM-5.3-Flash panel scoring); also if AA/BenchLM/SWE-V/LCB rows appear for this ID.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
