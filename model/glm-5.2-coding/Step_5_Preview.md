# GLM-5.2 Coding — findings by Step 5 Preview

- Source: Z.ai (`glm-5.2` — coding-first release)
- Date: 2026-10-19 (UTC) — re-run; first researched 2026-10-09
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2 Coding
- **Short description:** Z.ai's coding-first flagship (released 2026-06-13, coding-plan rollout 2026-06-16) — the mid-2026 "strongest open-weights coding model", built for repository-scale, long-horizon engineering with a usable 1M-token context. Shipped distribution-first (GLM Coding Plan tiers, eight coding agents, day-zero partners) with benchmarks following shortly; MIT open weights. Its differentiators: IndexShare cross-layer indexer reuse (2.9x per-token FLOPs reduction at 1M context) and a revised MTP speculative-decoding stack (+20% acceptance length). Artificial Analysis now lists it as deprecated (superseded by GLM-5.3), re-confirmed 2026-10-19.
- **Provider / access:** Z.ai API `glm-5.2` / `glm-5.2[1m]`; OpenRouter `z-ai/glm-5.2` (18 providers per AA); GLM Coding Plan (~$18–$72/mo tiers); MIT weights `zai-org/GLM-5.2` on Hugging Face (~1.51TB BF16) via vLLM/SGLang/Transformers/KTransformers.
- **Release / knowledge:** 2026-06-13. Knowledge cutoff not disclosed.
- **IDs:** `glm-5.2` (Z.ai), `z-ai/glm-5.2` (OpenRouter).
- **Context window:** 1,048,576 tokens; 128–131K max output (AA confirms 1M).
- **Modalities:** **Text-only** (no image/audio input — re-confirmed on AA 2026-10-19); thinking effort High / Max (Max recommended for coding); function calling, JSON-schema structured outputs.
- **Pricing (as of 2026-10-19):** $1.40 / MTok input, $0.26 cached, $4.40 output — identical to GLM-5.1, flat across the full window; **AA re-measurement: blended $0.90, ~$1.47 per Index task, 81% cache discount**; cached-input storage limited-time free.
- **Architecture:** MoE, 753B total / 40B active (re-confirmed on AA); hybrid sparse attention with IndexShare.

### Raw benchmarks found

Coding (Z.ai launch results, mostly vendor-run):

- Terminal-Bench 2.1: **81.0%** (Terminus-2) / **82.7%** (best reported harness) — vs GLM-5.1's 63.5%, GPT-5.5 84.0%, Opus 4.8 85.0%, Gemini 3.1 Pro 74.0%
- SWE-bench Pro: **62.1%** (vs GPT-5.5 58.6%, Opus 4.8 69.2%)
- FrontierSWE: **74.4** (vs GPT-5.5 72.6, Opus 4.8 75.1 — within 1 point of the flagship)
- PostTrainBench: **34.3** (vs GPT-5.5 28.4, Opus 4.8 37.2)
- SWE-Marathon v1.1: **13.0** (vs GPT-5.5 12.0, Opus 4.8 26.0 — the hardest long-horizon suite still trails)
- DeepSWE v1.1: **46.2** (vendor; AskClash 43.8); NL2Repo: 48.9; ProgramBench: 63.7
- CursorBench 3.1: **54.6%**; CursorBench 3.2: **55.0%** (Max, $1.76/task, ~36K tokens, 58 steps)
- SWE-bench Verified: ~62% (unofficial tracker — not vendor-published)

Agentic / tool use:

- MCP-Atlas (public set): **76.8** (vs GPT-5.5 75.3, Opus 4.8 77.8)
- Toolathlon / Tool-Decathlon: **48.2%**; τ²-Bench: **99.1%** (AskClash aggregate); MazeBench: **0%**
- GDPval-AA: **Elo 1374.6** (AskClash) / **Elo 1418** (AA) — below GPT-5.5/GPT-5.6-tier leaders
- Finance Agent v2: 49.7%

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (vs GPT-5.5 93.6%, Opus 4.8 93.6%)
- HLE: **40.5%** text-only / **54.7% with tools** (vs GPT-5.5 41.4/52.2, Opus 4.8 49.8/57.9)
- CritPt: **20.9%** (matches Opus 4.8); AIME 2026: **99.2%** (vs GPT-5.5 98.3%); HMMT Feb 2026: 92.5%; IMO-AnswerBench: 91.0%
- IFEval: 73.3%

Long context:

- 1M-token window with IndexShare; **new in the 2026-10-19 re-run: AA-LCR 78.3% (Artificial Analysis)** — the first independent long-context-reasoning figure; no MRCR/RULER number exists

**New in the 2026-10-19 re-run (independent, via BenchLM's 46-row aggregate):**

- SWE-bench Verified (Vals AI): **82.8%** — the strongest independent coding reading to date for this model
- Terminal-Bench 2.1 (Vals AI): **67.8%** — well below Z.ai's Terminus-2 81.0%; harness gap documented
- Terminal-Bench 3.0: **4.6%** — near-floor on the newest terminal suite
- LiveCodeBench (Vals): **69.5%**; GPQA Diamond (Vals): **85.6%**; MMLU-Pro (Vals): **86.7%**
- AA composite: Intelligence Index **34** (#16/121 in class); AA-HLE **41.1%** (independent — above the 40% frontier bar); AA-GPQA Diamond **89.5%**
- GDPval-AA (AA): normalized **43.6%**; APEX-Agents-AA: **33.7%**; ResearchClawBench: **20.7%**; AA Agentic Index: **39.4%**
- AA-SciCode: **51.2%**; AA Coding Index: **68.8%**; AA-IFBench: **73.3%**; AA-Omniscience: Index **4.4**, accuracy 24.3%, hallucination **26.3%**
- FrontierMath v2: **59.2%** T1–3 / **29.3%** Tier 4 (Epoch AI); Design Arena Website: **1285**; BenchLM aggregate **60.53** (#55/956); speed 87.4 tok/s, TTFT 3.14 s (AA)

### Normalized scores (1–100)

Re-run verdict 2026-10-19: **scores unchanged.** The new independent evidence cuts both ways and nets out exactly where the previous scores stood: Vals SWE-bench 82.8% and AA-LCR 78.3%/AA-HLE 41.1% confirm the strong axis, while TB 3.0 4.6%, TB2.1-Vals 67.8%, APEX 33.7% and ResearchClawBench 20.7% confirm the conservative caps.

- **Tool use: 66/100.** MCP-Atlas 76.8 (near-flagship), τ² 99.1% and CursorBench 55.0% are respectable; capped by Tool-Decathlon 48.2%, GDPval-AA normalized 43.6%/Elo 1418 (well behind the 1600–1860 leader band), the new AA Agentic Index 39.4%/APEX-Agents 33.7%/ResearchClawBench 20.7%, and no Claw-Eval/BrowseComp row.
- **Reasoning: 82/100.** GPQA 85.6–91.2%, AIME 99.2%, CritPt 20.9% and HLE 54.7% with tools are frontier-band on the classic suites — the new independent AA-HLE 41.1% even clears the 40% frontier reference on the text-only set; capped by no HLE-vs-frontier margin and no AA composite in this report's more conservative framing.
- **Context window: 90/100.** 1M-token window in the ≥1M tier with IndexShare as real long-context engineering (2.9x FLOPs at 1M) and the new AA-LCR 78.3% as independent support; the 100 tier needs ≥98% verified retrieval at 512K+ and no MRCR/RULER number exists.
- **Multimodal: 15/100.** **Text-only** — no image, video or audio input; the methodology's text-only band is 10–20.
- **Coding: 72/100.** SWE-bench Pro 62.1% (beating GPT-5.5), the new Vals SWE-bench Verified 82.8%, FrontierSWE 74.4 (within 1 point of Opus 4.8) and TB2.1 81–82.7% are strong open-weight coding; capped by DeepSWE 46.2%, SWE-Marathon 13.0%, TB 3.0 4.6%, TB2.1-Vals 67.8% and CursorBench ~55% — the long-horizon suites where the closed frontier still leads.
- **Cost efficiency: 88/100.** $1.40/$4.40 per MTok ($0.26 cached; AA blended $0.90) maps to the methodology's ~$1.25/$4.25 ≈ 88 tier, with MIT self-hosting as the real cost lever; documented ~43K reasoning tokens per task inflate effective per-task cost.
- **Overall Score: 65/100.** Best-fit recommendation: the mid-2026 open-weight coding workhorse — SWE-Pro/FrontierSWE-class repository engineering at $1.40/$4.40 with 1M context and MIT weights; superseded by GLM-5.3 (August 2026), which is materially stronger at the same price.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-10-19
- Method: public internet research, re-run 2026-10-19 — BenchLM's 46-row aggregate for GLM-5.2 (Vals AI coding runs, AA per-benchmark rows incl. LCR/HLE/Agentic Index, Epoch FrontierMath, TB 3.0) + the Artificial Analysis deprecated model page (Index 34, 87.4 tok/s, pricing, text-only/1M specs); original run used Z.ai GLM-5.2 blog/docs/pricing, the HuggingFace model card, Featherless, MyClaw, AskClash and Tarsk. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_5.3.md`, using the same headings.
