# GLM 5.1 Coding — findings by Mimo v2.6 Flash

- Source: Zhipu AI / Z.AI/`glm-5.1`
- Date: 2026-10-09 (UTC; original research 2026-09-22, re-researched 2026-10-09)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.1 Coding (Zen entry `opencode/glm-5.1`)
- **Short description:** Z.AI's 2026-04 open-weights coding/agent flagship (744B/40B-class MoE) built for long-horizon autonomous engineering (8-hour task loops) — SOTA on SWE-Pro at launch; **no Zen Free ID** (paid only). Superseded by GLM-5.2/5.3 at the same $1.40/$4.40 list price.
- **Provider / access:** OpenCode Zen `opencode/glm-5.1` (Chat Completions, **paid**, `noFreeId: true`); Z.AI API `glm-5.1`; GLM Coding Plan; HF `zai-org/GLM-5.1`; third-party hosts. Not free on Zen as of report date.
- **Release / knowledge:** 2026-04-07 (Z.AI blog); HF card same era. Knowledge cutoff not restated (GLM-5.x ~early 2026).
- **IDs:** `opencode/glm-5.1` (Zen); `zai/glm-5.1`.
- **Context window:** **200K–205K** in / **128K** out (meta; Z.AI docs cite 200K eval windows in benchmarks).
- **Modalities:** text in; text out; thinking modes; tool calls yes; long-horizon agent loops (experiment–analyze–optimize).
- **Pricing (as of 2026-10-09):** **$1.40 in / $4.40 out per 1M** (Z.AI list; no Free ID); OpenRouter currently runs a **31%-off promo: $0.966 / $3.036** realized average (re-checked 2026-10-09). Cost scored on paid pricing per methodology.
- **Architecture:** MoE **~744B total / ~40B active** (GLM-5 family); open weights; MIT-class open release (family).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Z.AI GLM-5.1 launch table (2026-04) + HF README + Tabbit reproduction notes. Note: 5.2's launch restates 5.1 TB2.1 as 62.0 in one GitHub table vs 63.5 Terminus-2 at 5.1 launch — both cited below.

Agent / tool use:

- Terminal-Bench 2.0 (Terminus-2): **63.5%** (Z.AI 5.1 launch; vs Claude Opus 4.6 65.4, Gemini 3.1 Pro 68.5)
- Terminal-Bench 2.0 (best self-reported Claude Code): **69.0%** (Z.AI)
- Terminal-Bench 2.1 (restated in 5.2 table): **62.0** (zai-org/glm-5 GitHub — 5.1 column)
- MCP-Atlas (Public): **71.8%** (Z.AI; vs Claude 73.8, GPT-5.4 67.2)
- BrowseComp (with context management): **79.3%** (Z.AI; without: 68.0)
- CyberGym: **68.7%** (Z.AI; beats Claude 66.6, GPT-5.4 66.3)
- Tau3 / GDPval-AA / Toolathlon / Claw-Eval: no verified public score found for GLM-5.1 specifically in this pass (some third-party Tau3 70.6 appears in model-comparison sources — treat as unverified here without fresh citation)
Reasoning / knowledge:

- GPQA-Diamond: **86.2%** (Z.AI/HF)
- HLE: **31.0%** text / **52.3%** with tools (Z.AI)
- AIME 2026: **95.3%** (Z.AI)
- HMMT Nov 2025: **94.0%**; HMMT Feb 2026: **82.6%**; IMOAnswerBench: **83.8%** (Z.AI)
- Artificial Analysis Intelligence Index: **32** (per model-comparison sources citing AA GLM-5.1 — provisionally cited; not re-fetched this pass). **Second-pass fills (2026-10-09, AA block via OpenRouter z-ai/glm-5.1):** Reasoning-variant Index **26.1**, Coding Index **55.8**, Agentic Index **23.9**, GPQA **86.8%**, HLE **30.1%**, IFBench 76.3, τ²-Telecom **97.7%**, τ-Banking 13.6, AA-LCR **73.7%**, **CritPt 0.0%**, Omniscience 25.2%/36.4% — the 32 is superseded by the AA-direct 26.1
- Tau3 / GDPval-AA / Toolathlon / Claw-Eval: no verified public score found for GLM-5.1 specifically (τ²-telecom 97.1/97.7 now captured above — different suite from Tau3)

Coding:

- SWE-bench Pro: **58.4%** (Z.AI/HF; SOTA at 2026-04 launch — beat Opus 4.6 57.3, GPT-5.4 57.7, Gemini 3.1 Pro 54.2)
- NL2Repo: **42.7%** (Z.AI; trails Claude Opus 4.6 49.8)
- DeepSWE / LiveCodeBench / SciCode: no verified public score found for GLM-5.1 in this pass (AA Coding Index 32 noted in older comparison sources only)
- Long-horizon demos (Z.AI): KernelBench L3 3.6× geomean speedup; VectorDBBench 21.5k QPS; 8-hour autonomous Linux desktop build (655 iterations) — product proofs, not standard leaderboard %

Long context:

- 200K window used in official eval harnesses; MRCR / RULER retrieval: no verified public score found

Multimodal:

- **Text-only** — no vision/audio (template: 15)

### Normalized scores (1–100)

- **Tool use: 80/100.** MCP-Atlas 71.8, BrowseComp-tools 79.3, CyberGym 68.7, TB2.0 63.5–69.0 show strong agentic/web/cyber tooling — plus the new AA τ²-telecom 97.1/97.7 rows (2026-10-09); TB-Hard 35.6 and Agentic Index 23.9 cap below 5.2's 81+; no GDPval/Tau3 rows — held (2026-10-09).
- **Reasoning: 81/100.** GPQA 86.2 (AA 86.8), AIME 95.3, HLE-tools 52.3 / HLE text 30.1 (AA) are excellent open-weight science/math; the AA-direct Index **26.1** (supersedes the provisional 32) and CritPt 0.0 keep it below full-frontier reasoning breadth — trimmed 82→81 (2026-10-09).
- **Context window: 70/100.** **200K** served window (methodology: 200K = 70); 128K out is healthy; no long-context retrieval curve.
- **Multimodal: 15/100.** Text-only (template rule: 15).
- **Coding: 82/100.** SWE-Pro **58.4 was SOTA at launch** (beat Opus 4.6/GPT-5.4); NL2Repo 42.7 mid; no DeepSWE/LiveCode rows — elite for April 2026, clearly behind GLM-5.2 62.1 / 5.3 on the same boards.
- **Cost efficiency: 88/100.** $1.40/$4.40 matches current 5.2/5.3 list with **no Free Zen ID** (`noFreeId: true`) — strong open-price economics vs closed frontier, held below 90 because superior same-price siblings (5.2/5.3) make paying for 5.1 a pure legacy choice unless pinning that snapshot.
- **Overall Score: 66/100.** Mean of five quality dims (80+81+70+15+82)/5 = 65.6 → 66 (was 65.8 — Reasoning −1 on the Index correction, Overall unchanged). Best-fit: paid long-horizon text coding when you specifically need the 5.1 snapshot (e.g. reproducibility); **new work should use GLM-5.2/5.3 at the same $1.40/$4.40** for higher SWE-Pro/TB2.1 and/or a Free tier.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-09 (original: 2026-09-22; user-approved second pass)
- Method: public internet research (z.ai/blog/glm-5.1, HF zai-org/GLM-5.1 README, docs.z.ai glm-5.1.md, GitHub zai-org/glm-5 restatement, Tabbit official-benchmark reproduction notes); second pass 2026-10-09 re-checked the [OpenRouter z-ai/glm-5.1 AA block](https://openrouter.ai/z-ai/glm-5.1) (Index 26.1 Reasoning / 24.2 non-reasoning, Coding 55.8, Agentic 23.9, CritPt 0.0, τ²-telecom 97.7, 205K, 31%-off promo) and the [HF zai-org/GLM-5.1 card](https://huggingface.co/zai-org/GLM-5.1) (378K downloads/month) — the dedicated `glm-5.1-coding` AA/OpenRouter slugs 404/render no data (the coding-tuned naming is Zen-side); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

### Deep-research addendum (2026-10-09)

- **Gap fills:** AA Index **26.1** (Reasoning; supersedes the provisional 32), Coding 55.8, Agentic 23.9, CritPt 0.0, Omniscience 25.2/36.4, IFBench 76.3, τ²-telecom 97.1/97.7, τ-bank 13.6, AA-LCR 73.7.
- **Confirmed:** 205K context (matches meta), Apr-7-2026 release, 8-hour task-loop design, $1.40/$4.40 list (OpenRouter 31%-off promo $0.966/$3.036).
- **Scores:** Reasoning 82→81 on the Index correction; **Overall 66 held**.
