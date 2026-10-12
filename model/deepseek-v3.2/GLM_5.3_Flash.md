# DeepSeek V3.2 — findings by GLM 5.3 Flash

- Source: DeepSeek (`deepseek-v3.2`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V3.2 (a "Thinking" reasoning variant exists)
- **Short description:** DeepSeek's December 2025 open-weights flagship, the full release of the V3.2-Exp experiment that introduced DeepSeek Sparse Attention (DSA) for cheap long-context processing — 671B-parameter MoE with 37B active, unusually strong agentic coding for its price. BenchLM ranks the base variant #100 of 889 (49.36). Top use cases: cost-efficient agentic coding, math, and open self-hosting.
- **Provider / access:** DeepSeek API; OpenRouter (`deepseek/deepseek-v3.2`, 13 providers); Hugging Face open weights; technical report arXiv Dec 2025 ("DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models"). Chat Completions-style API.
- **Release / knowledge:** Full release 2025-12-01/02 (V3.2-Exp experimental: 2025-09); knowledge cutoff not published in the sources reviewed.
- **IDs:** `deepseek/deepseek-v3.2` (OpenRouter); HF DeepSeek-V3.2 collection. No dedicated OpenCode Zen Free ID verified.
- **Context window:** 163,840 tokens (~164K, llm-stats listing) enabled economically by DeepSeek Sparse Attention — **BenchLM's 2026-10-10 page lists 128K for the base variant, an unresolved conflict**; the aggregator-consistent ~164K stays primary.
- **Modalities:** text in / text out (DeepSeek mainline is text-only). Reasoning: yes (thinking mode — BenchLM tracks the Thinking variant separately; the AA rows below are the non-reasoning base). Tool calls: yes. JSON mode not documented here.
- **Pricing (as of 2026-10-11):** ~$0.26 per 1M input / $0.38–0.42 per 1M output (cached input ~$0.13); OpenRouter lists $0.2088/$0.3096. Open weights = free self-hosting.
- **Architecture:** 671B total parameters, 37B active (MoE); DeepSeek Sparse Attention (DSA) for long-context efficiency; open weights.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **78.9%** (AA, independent — fills the Tau2 gap; strong for the class)
- Claw-Eval: **40.2%** (Claw-Eval leaderboard — fills the gap; weak); VITA-Bench: **18.5%**; Gert Labs: **29.57%** (new, weak)
- Terminal-Bench 2.0: **~59.3%** (Dec 2025 ThursdAI roundup — matching Claude Opus 4.5; the Sept V3.2-Exp scored 43.3%)
- GDPval-AA / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- AA-GPQA Diamond: **75.1%** (AA, independent — base non-reasoning variant) — **consistent with the ~71.2% non-thinking reading, but well below the ~84–85% thinking-mode figure the prior pass scored on**; the Thinking sibling is tracked separately on BenchLM
- AA-HLE: **11.2%** (AA — fills the gap; floor-class); Artificial Analysis Intelligence Index: **16.0** (AA — fills the index gap; low)
- AA-LCR v1.1: **45.7%** (AA — fills the long-context gap; weak); CritPt: **0.9%** (AA — floor)
- FrontierMath v2: **22.1%** Tiers 1–3 / **2.1%** Tier 4 (Epoch AI — weak)
- AA-Omniscience: **24.0% accuracy / 93.3% non-hallucination row / −46.9 index** (AA — repo-worst tier)
- GPQA Diamond (thinking mode): **~84–85%**; AIME 2025: **93.1%** (prior pass)
- BenchLM overall: **49.36, #100 of 889** (recomposed from the prior ~50.94 #91/212)

Coding:

- SWE-Rebench: **60.9%** (SWE-Rebench leaderboard — fills the gap; mid); React Native Evals: **71.5%** (RN Evals — fills the gap; decent)
- SWE-bench Verified (agentic): **~77.2%** (prior pass); LiveCodeBench: strong in the V3.2 technical report, rivaling GLM-4.6 (prior pass)
- SciCode / Vibe Code Bench: no verified public score found

Long context:

- AA-LCR 45.7% is the first measured long-context number (weak); DSA targets long-context efficiency rather than measured retrieval

### Normalized scores (1–100)

- **Tool use: 76/100.** τ²-bench 78.9% (AA) fills the Tau2 gap strongly alongside the TB2.0 ~59.3% result, but Claw-Eval 40.2%, VITA 18.5% and Gert 29.57% document the weak standardized agentic tail — the band holds.
- **Reasoning: 76/100.** (Was 80 on the prior pass.) The AA base-variant rows (Index 16.0, GPQA 75.1%, HLE 11.2%, CritPt 0.9%, FM-T4 2.1%, Omniscience −46.9) temper the thinking-mode GPQA ~84–85%/AIME 93.1% story — one band down on the blended variant picture.
- **Context window: 62/100.** ~164K with DSA (BenchLM's 128K listing conflicts) is mid-tier by 2026 standards; AA-LCR 45.7% is the first measured long-context evidence (weak).
- **Multimodal: 15/100.** Text-only model — no image/audio/video input in any source reviewed.
- **Coding: 84/100.** SWE-bench Verified ~77.2% and LiveCodeBench strength rivaling GLM-4.6 stand, with SWE-Rebench 60.9% and React Native 71.5% adding independent corroboration; capped by the unconfirmed exact LCB value.
- **Cost efficiency: 95/100.** $0.21–0.26 in / $0.31–0.42 out per 1M with open weights and cache discounts is near-floor pricing for a 77%-SWE agentic model.
- **Overall Score: 62.6/100.** (Was 63.4 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (76 + 76 + 62 + 15 + 84) / 5 = 313/5 = 62.6 — lowered slightly on the 2026-10-11 second pass as the AA base-variant rows temper the blended reasoning score. Best fit: cheap open-weights agentic coding and math (use the Thinking variant for reasoning-heavy work); the text-only modality and the V4 family's arrival are what hold the overall down.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: the freshly fetched benchlm.ai DeepSeek V3.2 page with AA/Claw-Eval/SWE-Rebench/Epoch citations, the prior 2026-10-05 pass on the arXiv report/OpenRouter/llm-stats/ThursdAI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
