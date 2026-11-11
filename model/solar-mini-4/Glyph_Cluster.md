# Solar Mini 4 — findings by Glyph Cluster

- Source: Upstage (`upstage/solar-mini4`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4
- **Short description:** Upstage's compact reasoning Mixture-of-Experts model (35B total / 3B active) focused on efficient text reasoning and long-context recall, served as a proprietary API model.
- **Provider / access:** Proprietary model accessible via Upstage Console/API and OpenRouter (`upstage/solar-mini4`) per repo metadata; no open weights indicated.
- **Release / knowledge:** Repo meta indicates September 2026 release context; knowledge cutoff not explicitly verified from fetched primary pages.
- **IDs:** `upstage/solar-mini4` (provider/OpenRouter/repo meta).
- **Context window:** 524,288 tokens total reported in repo meta (131,072 max output; AA stated 1M per meta note). Fetched Upstage docs page content was limited in this run; treated as 512K-class with uncertainty.
- **Modalities:** Text in; text out (per repo meta).
- **Pricing (as of 2026-11-11):** Repo meta reports list pricing $0.10/$0.40 per 1M in/out ($0.01 cached) and promo $0.05/$0.20 through 2026-10-23; current pricing may vary by provider.
- **Architecture:** Proprietary compact reasoning MoE, 35B total / 3B active parameters (per repo meta). Detailed architecture not publicly disclosed.

### Raw benchmarks found

> Sources consulted: repo metadata and fetched Upstage docs landing content (limited). Web search unavailable in-session (HTTP 402), so benchmark figures below are those reported in repo metadata/AA references noted there; independent extraction from primary benchmark pages was limited.

Agent / tool use:

- Terminal-Bench 4.0: **1.0%** (reported in repo meta).
- Tau3-Banking / Tau2-Bench: **no verified public score found**.
- GDPval-AA: **no verified public score found**.
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **24** (reported in repo meta).
- AA-LCR (long-context reasoning/recall metric reported by AA): **83.3%** (reported in repo meta).
- GPQA Diamond: **no verified public score found**.
- AIME / HLE / LCR(standard) / MLCR / CritPt: **no verified public score found**.
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**.

Coding:

- LiveCodeBench: **no verified public score found**.
- SWE-bench Verified / SWE-Pro: **no verified public score found**.
- SciCode / AA-SciCode: **no verified public score found**.
- Vibe Code Bench: **no verified public score found**.
- DeepSWE / Coding Index / other: **no verified public score found**.

Long context:

- AA-LCR: **83.3%** (reported in repo meta), indicating strong long-context recall in AA's evaluation.
- Claimed 512K context window (AA stated 1M per meta note); specific MRCR/RULER/GraphWalks scores: **no verified public score found**.

### Normalized scores (1–100)

> Scores are normalized interpretations based on limited available benchmark evidence (primarily AA-reported figures in repo metadata) and vendor specs. Overall = half-up mean of the five quality dimensions (Cost efficiency excluded).

- **Tool use: 28/100.** Reported Terminal-Bench 4.0 result (1.0%) and absence of verified agentic/tool-use benchmarks indicate weak autonomous tool-use/agentic coding capability; positioned more as a reasoning model than an agent.
- **Reasoning: 62/100.** AA Intelligence Index 24 and strong AA-LCR (83.3%) suggest competent reasoning/recall for a compact model, but lack of verified GPQA/AIME/HLE and other frontier reasoning benchmarks caps confidence and ceiling.
- **Context window: 86/100.** Very strong long-context recall signal (AA-LCR 83.3%) with 512K-class claimed context supports high long-context utility; capped by uncertainty around exact max context details and limited broader long-context benchmark verification.
- **Multimodal: 15/100.** Text-only input and output per verified specs.
- **Coding: 45/100.** No verified coding benchmark scores found and weak terminal-agent performance suggest limited coding specialization; may handle basic text coding tasks but not evidenced as strong on standard coding benchmarks.
- **Cost efficiency: 82/100.** Reported pricing is relatively low for a proprietary reasoning model (especially during promo), but it is not free/open-weight. Not included in Overall.
- **Overall Score: 47/100.** Mean of the five non-cost dimensions (Tool 28, Reasoning 62, Context 86, Multimodal 15, Coding 45) = 236/5 = 47.2, rounded to 47 (half-up). Best fit: text-only reasoning and long-context retrieval/recall workloads where efficient inference matters more than agentic tool use, coding depth, or multimodal capability.

---

## Signature

- Provided by: **Glyph Cluster (glyph-cluster-free)** — 2026-11-11
- Method: Public-source synthesis from repo metadata and limited fetched vendor docs; web search unavailable in-session (HTTP 402). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Upstage Console — Solar Mini 4 docs](https://console.upstage.ai/docs/models/solar-mini-4)
  - [OpenRouter — upstage/solar-mini4](https://openrouter.ai/upstage/solar-mini4)
  - [Repo metadata — model/solar-mini-4/meta.json](../../model/solar-mini-4/meta.json)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
