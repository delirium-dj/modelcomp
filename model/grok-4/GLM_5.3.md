# Grok 4 — findings by GLM 5.3

- Source: xAI (`grok-4`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's July-2025 frontier model (released **2025-07-09**), the foundation of the Grok 4 line — "always-on reasoning" that **cannot be disabled** (modelsatlas — correcting the first pass's "non-reasoning base"), with native tool calling and live search. Second pass corrects the context window (**256K API, not 128K** — the 128K figure is the Grok consumer app's cap) and confirms pricing ($3/$15, rising above 128K per request). Still elite at its era's niches (**Fiction.LiveBench 96.9% #2, IFEval HELM 94.9% #2, Cybench 43% #4, Aider Polyglot 79.6% #5, MATH 500 96.2% #2**), now a legacy tier. Superseded by 4.1 → 4.7; a Grok 4 Heavy multi-agent config exists separately.
- **Provider / access:** xAI API (docs.x.ai, `grok-4-0709`); OpenRouter; **no OpenCode Zen ID** (Zen carries Grok 4.5/4.6/4.7 only).
- **Release / knowledge:** **2025-07-09** (confirmed); knowledge cutoff not publicly disclosed.
- **IDs:** `grok-4` (xAI API; no Zen ID, no Free ID).
- **Context window:** **256K tokens** (API — confirmed by BenchLeader + OpenRouter + multiple spec pages; the consumer app caps at 128K, which explains the first pass's BenchLM read); requests >128K price higher.
- **Modalities:** text/image in; text out; **always-on reasoning (not disable-able, effort not steerable)** — the "non-thinking base" framing was wrong; tool calls (parallel), structured outputs, native web search; JSON mode.
- **Pricing (as of 2026-10-13):** **$3.00 in / $15.00 out per 1M** (confirmed — the first pass's provisional guess was exact), higher above 128K per request; blended $6.00/M — "among the most expensive ranked"; 73 tok/s, 13 s first answer; $0.240 per agentic session.
- **Architecture:** proprietary; parameter count undisclosed; RL at very large scale.

### Raw benchmarks found

> Second pass adds the BenchLeader ladder (best = not-stated **58.1 #149/760**, trend 54→58→62 stable, last measured 2026-10-09). Category scores: **Long context 68 (best)**, Coding 61, IF 63, Maths 59, Knowledge 58, Human preference 59, Agents & tools 58, Reasoning 55, Composite 55, **Multimodal 52 (worst)**.

Agent / tool use:

- **Cybench: 43.0% #4** (era-elite security); **BFCL Overall: 63.0% #8**; **METR Time Horizons: 66.6% #14**; τ²-Bench 74.8% #138; BALROG 43.6% #9; DeepResearch 47.3% #25
- GDPval (original) 21.1% #10; Terminal-Bench public **27.2% #61**; TB 2.0 (Vals) 28.1% #46; TB Hard 37.9% #63 — the 2025-era terminal numbers are the drag; Claw-Eval / MCP-Atlas / τ³: still unmeasured

Reasoning / knowledge:

- GPQA Diamond: Epoch 87.0% #72 / AA 87.7% #92 / **Vals 88.1% #34** — near-bar, below on every harness (confirmed)
- HLE: AA **26.7% #169** (44.4% with tools — vendor era claim retained); **CritPt 2.0% #190** (very weak); ARC-AGI-2 16-29.4% #120-133; ARC-AGI-1 79.6% #108; SimpleBench 60.5% #30; **Kagi 73.6% #17** (good)
- Math: **MATH 500 96.2% #2**; AIME (Vals) 90.6% #27; MGSM 90.9% #30; OTIS 84.0% #99; **IMO 2025 21.4% #3** (MathArena, its era); FrontierMath T4 2.1% (weak, retained); Apex 2.1% #29; ForecastBench 60.9% #21
- **HELM era-elites: GPQA 72.6% #7, MMLU-Pro 85.1% #8, IFEval 94.9% #2, Omni-MATH 60.3% #9, HELM mean 78.5% #7**
- Honesty weak-mid: **non-hallucination 35.5% #180**; accuracy 40.5% #117; Omniscience 2.1 #117; MMLU-Pro (Vals) 85.3% #57; **MedQA 92.5% #31**; LegalBench 83.2% #54; **CorpFin 66.0% #23; CaseLaw 65.8% #9**; TaxEval 65.1% #111; MedCode 38.1% #67; MedScribe 78.2% #61
- AA II 22.5 #192 (confirmed); ECI 146.4 #72; IFBench 53.7% #153 (weak — vs the era-elite HELM IFEval #2: a harness-era split)

Coding:

- **Aider Polyglot: 79.6% #5 of 46** (era-elite edit-format coding); LiveCodeBench (Vals) **83.3% #48**; Coding 61 category
- SWE-bench (Vals) **57.8% #76** (weak — gap filled); WeirdML 45.7% #83; LMArena Coding 1435 #159 (weak preference — the field moved); React Native Evals 72.6% (retained); SWE-bench Verified / DeepSWE / Vibe: still unmeasured

Long context:

- **256K window (corrected from 128K)**; **Fiction.LiveBench 120k: 96.9% #2 of 35** — elite long-fiction coherence; **AA-LCR 68.0% #229** (mid-weak); Long context 68 is its best category.

Multimodal:

- **Category 52 — its worst.** MMMU-Pro: Vals 76.3% #52 / AA 68.8% #156; LMArena Vision 1210 #86; **SAGE 25.1% #84** (weak grounding); MortgageTax 44.5% #83; GeoBench 45.0% #24. Text+image in, text out.

Preference:

- LMArena ranks have fallen to #111-159 across the board (Text 1411 #135, Multi-turn 1413 #135, Creative 1395 #111, Maths 1425 #111, Hard 1421 #142) — the arena field moved past it; **Lech Mazur Creative Writing 76.9% #21** retains value.

### Normalized scores (1–100)

- **Tool use: 58/100.** Lowered from 60: era-elite Cybench #4, BFCL #8, METR #14, BALROG #9, and τ² 74.8% — against GDPval 21.1% #10, TB public 27.2% #61, TB 2.0 28.1% #46, and the unmeasured τ³/MCP rows; the 2026 terminal suites have left it behind.
- **Reasoning: 62/100.** Raised from 58: GPQA 87.0-88.1% is near-bar, Kagi #17, SimpleBench #30, ForecastBench #21, MATH 500 #2, AIME 90.6% #27, IMO 2025 #3, and HELM era-elites — capped by HLE 26.7%, CritPt 2.0%, ARC-AGI-2 ~29%, AA II 22.5 #192, and weak honesty (35.5% #180).
- **Context window: 70/100.** Raised from 60: **256K confirmed** (the 128K read was the consumer-app cap), Long context 68 is its best category, and Fiction.LiveBench #2 is elite — offset by mid-weak AA-LCR 68.0% #229.
- **Multimodal: 58/100.** Lowered from 65: category 52 is its worst — SAGE 25.1% #84, Vision 1210 #86, MMMU-Pro 68.8% #156 (AA) — with the Vals 76.3% #52 read the only solid row.
- **Coding: 64/100.** Raised from 55: the gaps filled decent — Aider #5 (era-elite), LCB 83.3% #48, Coding 61 — against SWE-V 57.8% #76 (weak), WeirdML 45.7%, and weak arena preference.
- **Cost efficiency: 60/100.** Held: $3/$15 confirmed exactly (the first pass's provisional anchor was right); blended $6/M "among the most expensive"; every successor (4.1 → 4.7) beats it at lower price.
- **Overall Score: 62/100.** (58 + 62 + 70 + 58 + 64) / 5 = 62.4 → 62, up from 59.6. Best-fit: a retired-tier workhorse with era-elite long-context fiction coherence, instruction following, security (Cybench #4), and edit-format coding — its 2026 agent suites, multimodal grounding, and arena standing have all been passed; keep it only for legacy xAI-API pipelines and long-form writing.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-24 report (BenchLeader ladder as of 2026-10-09 aggregating Epoch AI Benchmarking Hub, Artificial Analysis, Vals AI, HELM Capabilities, MathArena, Aider leaderboard, Fiction.live, METR, Cybench, BFCL, BALROG, ForecastBench; DDG-lite searches surfacing nine corroborating spec pages — theairankings/benchgen/ai-tldr/llmcloudhub/modelsatlas/opper/llm-stats/llmlearner/OpenRouter — fixing the 256K context, $3/$15 pricing, 2025-07-09 date, the consumer-app 128K cap, the always-on-reasoning fact, and the >128K price step; first-pass rows retained where not contradicted); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
