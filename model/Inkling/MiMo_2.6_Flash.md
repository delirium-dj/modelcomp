# Inkling — findings by MiMo 2.6 Flash

- Source: Thinking Machines Lab launch post (`thinkingmachines.ai/news/introducing-inkling/`), Artificial Analysis, BenchLM, Vals AI, Collinear CWE-bench, Design Arena, repo meta
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling — **Thinking Machines Lab's first open-weights release** (2026-07-15 per AA): **975B total / 41B active MoE**, **Apache 2.0**, **1M context**, hybrid reasoning (BenchLM). Sibling: Inkling-Small.
- **Short description:** Meta positioning: strong reasoning and coding, weak agentics — best self-hosted or via cheap third-party hosts. AA's verdict: "amongst the leading models in intelligence" within its open-weights class (Index 25, #28/117 vs median 18), notably fast (151.5 t/s, TTFT 1.93 s), but *expensive for open weights* on the first-party tariff.
- **Provider / access:** Thinking Machines API (7 providers per AA), OpenRouter `thinkingmachines/inkling` (+ **`inkling:free` route**), NVIDIA build, free Apache-2.0 self-host. Weights on Hugging Face.
- **Release / knowledge:** 2026-07-15; cutoff not stated on fetched pages.
- **Context window:** **1,000,000 total** (weights; hosts serve 64K–1M — meta; AA confirms 1M on first-party API).
- **Modalities:** **text, image, speech in; text out** (AA spec + meta — native audio input).
- **Pricing:** hosted **~$1.00 in / $4.05 out per 1M** (AA; **83% cache discount**, blended $0.72), third-party/free: OpenRouter `inkling:free`, NVIDIA build, $0 self-host (meta). "Expensive vs open-weights median ($0.44/$1.68)" per AA.

### Raw benchmarks found

> Primary: Thinking Machines launch post (vendor-run rows) + AA (independent rows) +
> BenchLM aggregate (per-row provenance, updated 2026-10-07). Harness spread on
> Terminal-Bench 2.1 (vendor 63.8 / AA 55.1 / Vals 47.6) flagged.

Reasoning & knowledge:

- **HLE: 46% with tools / 30% without** (launch) — clears the 40+ reference only in the with-tools setting; **AA-HLE: 31.9** (independent) — under 40, flagged.
- **GPQA Diamond: 87.9** (launch), **87.2** (AA), 87.1 (Vals) — just under the 90 reference.
- **AIME 2026: 97.1** (launch) — elite math. MMLU-Pro 86.3 (Vals); IFBench 79.8.
- **AA Intelligence Index (v4.3.2): 25** — well above the open-weights-class median (18), though equal to GPT-5.1's absolute value.
- AA-Omniscience Index 2.0 (accuracy 41.6, hallucination 67.7 — poor knowledge reliability); CritPt 5.4; MLCR-AA 12.2.

Agentic / tool use (meta's "weak agentics" confirmed):

- **BrowseComp: 77.1** and **MCP Atlas: 74.1** (launch) — actually strong browsing/tool rows.
- Weak workflow rows: **AA Agentic Index 24.3**, GDPval-AA **Elo 1079 / 28.9%**, AA AutomationBench **5.0**, Tau3-Banking 29.1, AnalystAgent 23.8, Briefcase Elo 832, EnterpriseOps 38.0, GDP.pdf 12.8, TB4.0 1.0.
- **Terminal-Bench 2.1: 63.8 (launch) / 55.1 (AA) / 47.6 (Vals)** — harness-dependent.
- Design Arena Agentic Web Dev: 1257; CWE-bench v1: 37.0 (Collinear).

Coding:

- **SWE-bench Verified: 77.6** (launch; Vals 77.6) — solid. **SWE-bench Pro: 54.3** — weak.
- LiveCodeBench (Vals) 85.5; **AA Coding Index 52.1** (under 70); **AA-SciCode 47.0** (under 55); FrontierSWE v2 4.1 (frontier-new, low everywhere).

Multimodal:

- **MMMU-Pro: 73.5** (launch + AA); **CharXiv: 82 / 78.1 without tools** (launch); Design Arena Website 1228. Speech input is spec'd but no audio benchmark row found (flagged).

Long context:

- 1M weights / host variance 64K–1M; **AA-LCR: 77.3**; no retrieval row.

### Normalized scores (1–100)

- **Tool use: 76/100.** BrowseComp 77.1 and MCP Atlas 74.1 show real browsing/tool chops, but the entire workflow side is weak (AA Agentic 24.3, AutomationBench 5.0, GDPval 1079, TB2.1 down to 47.6 on independent harnesses) — matching the meta's "weak agentics."
- **Reasoning: 84/100.** AIME26 97.1 is elite and HLE-46 (with tools) clears the reference; GPQA 87.9/87.2 sits just below 90, AA-HLE 31.9 disagrees with the vendor row, and Omniscience is poor.
- **Context window: 93/100.** 1M on weights/first-party (qualifies for the tier) but host caps as low as 64K and LCR 77.3 with no retrieval row keep it below the 95 floor.
- **Multimodal: 89/100.** Text + image + **speech** input — the audio-capable band — with MMMU-Pro 73.5 and CharXiv 82 as image-side evidence; no audio benchmark row found, so it stays under 90.
- **Coding: 82/100.** SWE-V 77.6 and LCB 85.5 are respectable; SWE Pro 54.3, Coding Index 52.1 and SciCode 47.0 are all well under references.
- **Cost efficiency: 90/100** (excluded from Overall). $1.00/$4.05 beats the $1.25/$4.25 ≈ 88 anchor outright, 83% cache discount, plus **free routes** (OpenRouter `inkling:free`, NVIDIA) and $0 Apache self-host; first-party tariff is expensive *for open weights* (AA) — that's the only ding.
- **Overall Score: 85/100.** (76+84+93+89+82)/5 = 84.8 → 85 — Thinking Machines' open-weights flagship: elite math (AIME26 97.1), near-reference GPQA, native speech input, 1M weights and free hosting paths — held back by genuinely weak agentic workflows and under-reference coding depth.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research — TML launch post rows (via BenchLM provenance links), AA model page (spec/params/license/index/speed/cost + independent GPQA/HLE/LCR/MMMU-Pro/agentic rows), BenchLM aggregate (47 rows with per-row sources, updated 2026-10-07), Vals/Collinear/Design Arena/ARC-class leaderboards as cited, repo meta (host-cap variance, free routes). Scores are normalized 1–100 interpretations, not official vendor scores; vendor vs independent disagreements flagged (HLE, TB2.1).
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
