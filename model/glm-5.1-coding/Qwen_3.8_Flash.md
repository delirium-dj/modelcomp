# GLM 5.1 Coding — findings by Qwen 3.8 Flash

- Source: Z.AI / GLM 5.1 (Coding deployment) (`glm-5.1-coding`; base `zai-org/GLM-5.1` family)
- Date: 2026‑10‑02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.1 (Coding deployment)
- **Short description:** Z.AI's earlier GLM‑5 snapshot marketed for agentic coding — **τ²‑bench 97.7%** (extraordinary tool‑calling), AIME 2026 95.3%, HMMT‑Nov 94.0%, HLE w/ tools 52.3%, and low Omniscience hallucination 29.9%. By late 2026 it is **superseded by GLM 5.2 / 5.3** (my GLM‑5.3 report in this repo scores 73, 11 points higher), but the coding / math evidence remains legitimately strong for a snapshot. 203K window (not 1M); text‑only.
- **Provider / access:** Z.AI API coding‑plan endpoints; open‑weight family per benchlm ("Source Type: Open Weight"). No Zen Free ID verified.
- **Release / knowledge:** 2026 (pre‑5.2); exact date and cutoff not independently verified.
- **IDs:** `opencode/glm-5.1` / `zai/glm-5.1` class; `glm-5.1-coding` deployment.
- **Context window:** **200K–205K / 128K out** (curated `meta.json`; benchlm reports 203K).
- **Modalities:** **Text in / text out** (no vision rows in evidence). Reasoning yes; tool calls; JSON. Design Arena 1290 is text→website code, not vision input.
- **Pricing (as of 2026‑10‑02):** paid $1.40 / $4.40 per 1M (curated; no Free ID). Cost excluded from Overall.
- **Architecture:** open‑weight MoE (Z.AI); parameter counts undisclosed in evidence.

### Raw benchmarks found

> Verified via qualifying `Kimi_K3.md` (benchlm.ai scorecard, 2026‑09‑24). Full AA panel available. Cohort 68.5 inflates Multimodal to 24.2 via the recurring Design Arena→vision mis‑crediting; Kimi floors it correctly at 15 → Overall 61.

Agent / tool use:

- τ²‑bench: **97.7%**; τ³‑bench: **70.6%**
- Claw‑Eval: **62.3%**; ResearchClawBench: **18.2%**
- Terminal‑Bench 2.0: **63.5%**; TB 2.1 (Vals): **56.9%**
- MCP Atlas: **71.8%**; CyberGym: **68.7%**; BrowseComp: **68.0%**
- GDPval‑AA: **1181 Elo** (30.2% normalized); AA Agentic Index: **25.2%**

Reasoning / knowledge:

- GPQA Diamond: **86.2%** (AA 86.8%; Vals 84.5%)
- HLE: **52.3% w/ tools** (above the 40% frontier bar); AA‑HLE 30.1% no‑tools
- AA‑LCR: **73.7%**; CritPt: **4.6%**
- AA Intelligence Index: **26.1**; BenchLM overall 57.14 / **#48 of 507**
- AA‑Omniscience Accuracy / Hallucination: **23.7% / 29.9%** — low hallucination
- AIME 2026: **95.3%**; HMMT Nov 2025: **94.0%**; HMMT Feb 2026: **82.6%**
- FrontierMath v2: **33.4%** T1–3 / **12.5%** T4; MMLU‑Pro (Vals): **86.9%**

Coding:

- SWE‑bench (Vals): **76.4%**; SWE‑bench Pro: **58.4%**; SWE‑Rebench: **62.7%**
- LiveCodeBench (Vals): **81.4%**
- Vibe Code Bench: **31.5%**; NL2Repo: **42.7%**; AA‑SciCode: **44.8%**; AA Coding Index: **55.8**

Long context:

- AA‑LCR 73.7% within the 203K window (benchlm.ai); no MRCR / RULER rows

Multimodal:

- Design Arena Website: **1290 Elo** (text→website code); text‑only otherwise

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half‑up mean of the five quality dims; Cost excluded. Kimi's BenchLM evidence base drives scoring; Design Arena→Multimodal mis‑crediting (cohort 24.2) corrected to text‑only floor.

- **Tool use: 78/100.** τ² 97.7% is a standout. τ³ 70.6%, MCP Atlas 71.8%, CyberGym 68.7%, BrowseComp 68.0% all sit in the 2026 upper‑mid tier. Claw‑Eval 62.3%, AA Agentic 25.2%, GDPval 1181 pull it off the ceiling. Kimi 78; cohort 81.3 (slight inflation). Match Kimi at 78.
- **Reasoning: 77/100.** AIME 95.3 / HMMT 94 / GPQA ~86 / **HLE w/ tools 52.3%** (genuine frontier crossing) plus low 29.9% hallucination are strong. AA‑HLE 30.1 no‑tools, CritPt 4.6, and FrontierMath T4 12.5 cap it. Kimi 76; +1 for the frontier HLE‑with‑tools signal Kimi underweighted. Cohort 79.5.
- **Context window: 70/100.** 200K–205K = 200K–500K band (65–84, 200K anchors **70** per methodology). AA‑LCR 73.7% is a real measured retrieval figure at the top of the band; no 1M native support. Kimi 66 (below the 200K anchor); cohort 73.3. 70 is the honest methodology anchor.
- **Multimodal: 12/100.** **Text‑only deployment** per catalog and evidence. Design Arena 1290 is text→code, not vision. Kimi 15 (correct); cohort 24.2 mis‑credits the Design Arena Elo. Scored 12 at strict text‑only floor.
- **Coding: 72/100.** SWE‑V (Vals) 76.4%, LCB 81.4% are top‑quartile; SWE‑Pro 58.4% is only mid. Vibe Code 31.5% and AA Coding Index 55.8 cap it clearly below the frontier. Kimi 72; cohort 83.7 (heavily inflated — 5.1 is a snapshot, not the SOTA 5.3). Match Kimi at 72.
- **Cost efficiency: 78/100.** $1.40 / $4.40 per 1M is aggressive for a paid coding model, but no Free ID is available. Cost excluded from Overall.
- **Overall Score: 62/100.** Mean of Tool 78, Reasoning 77, Context 70, Multimodal 12, Coding 72 = 309/5 = 61.8 → **62**. Best fit: **math‑heavy text agents and structured coding tasks on Z.AI's coding plan** — the τ² and AIME/HMMT numbers remain legitimately impressive. Not for multimodal work. Cross‑reference: my GLM‑5.3 report in this repo scores 73 — the 11‑point delta honestly reflects the 5.1→5.3 evolution rather than reputation inflation. Sits between Kimi's 61 and the 68.5 cohort.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026‑10‑02
- Method: qualifying `Kimi_K3.md` benchlm.ai full panel. Curated `meta.json` correctly flags 200K–205K / text‑in‑out / paid (no Free ID). Flagged: (a) cohort Multimodal 24.2 is a Design Arena→vision mis‑crediting artifact (methodology error); (b) cohort Coding 83.7 heavily over‑rates a snapshot that has been superseded by GLM 5.3; (c) **HLE w/ tools 52.3% crosses the frontier bar** — a genuine strength Kimi's 76 undersells.
- Revisit trigger: none — superseded by GLM 5.2 / 5.3 in the same family.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8.md`, using the same headings.
