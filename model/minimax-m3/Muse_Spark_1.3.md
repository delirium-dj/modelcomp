# MiniMax M3 — findings by Muse Spark 1.3 Contributor

- Source: MiniMax/M3, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-07 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: vendor table added, scores recomputed 83 → 86); re-research pass 2026-10-07 adds AA/Vals/Independent gap-fills, scores recomputed 86 → 87
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3 (flagship open-weight MoE)
- **Short description:** MiniMax flagship open-weight MoE (~230B total / 9.8B active) with 1M context and sparse attention; strong SWE-Bench Pro and Terminal-Bench profile.
- **Provider / access:** MiniMax via API + HF weights; no Zen Free ID under minimax-ai/ namespace (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-06-01 release (MiniMax blog); knowledge cutoff undisclosed (amended 2026-09-27).
- **IDs:** `minimax-ai/minimax-m3` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1,048,576 (1M) / 512K out — verified via curated repo metadata
- **Modalities:** text, image, video in; text out; reasoning yes; tool calls yes
- **Pricing (as of 2026-09-18):** Paid $0.30/$1.20 per 1M (curated metadata; no Zen Free ID)
- **Architecture:** open-weights MoE (sparse MSA attention); ~230B/9.8B per Codex KB vs ~428B/23B per InferenceX/HF — vendor-undisclosed exact (amended 2026-09-27).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66%** (curated short); **53.6% Vals lane** (BenchLM mirror — harness differs); **65.2% AA lane** (OpenRouter AA summary — all listed); **2.0% AA TB4.0 / 1.0% Vals TB4.0** (third-party — new, weak next-gen rows); **42.4% Terminal Bench Hard** (LLMLearner, 28/149 — new)
- Terminal-Bench 2.0: **66.0%** (vendor table)
- BrowseComp: **83.5%** (vendor table)
- OSWorld-Verified: **70.1%** (BenchLM); **75.2%** (vendor table — harness differs)
- MCP Atlas: **74.2%** (vendor table)
- Claw-Eval: **74.5%** (BenchLM mirror); **BankerToolBench 76.1%** (BenchLM mirror); **ResearchClawBench 19.8%** (BenchLM mirror — weak tail)
- Apex-Agents: **27.7%** (vendor table — weak tail)
- Tau3-Banking / Tau2-Bench: **no Tau3 verified**; **88.9% τ²-bench Telecom (AA)** (BenchLM — fills Tau-family gap); **15.3% τ-Bench Banking (AA)** (OpenRouter summary — weak tail, new)
- GDPval-AA: **37.3% AA lane** (BenchLM); **74.7% GDPval rubrics** (vendor model card — both listed)
- Toolathon / SWE Atlas Codebase QnA: **37.9% SWE-Atlas-QnA** (LLMLearner, 7/7 — fills prior gap, weak tail; MCP Atlas 74.2% row above)

Reasoning / knowledge:

- GPQA Diamond: **92.9% AA / 92.7% Vals** (third-party rows — fills prior gap); **81.3% no-tools lane** (LLMLearner, 89/189 — lane differs, all listed)
- HLE: **39.0% AA-HLE** (third-party row — fills prior gap)
- MMMU-Pro: **78.1%** (vendor table); **81.2% Vals / 78.6% AA** (third-party — corroborate); **1443 LMArena Elo** (ModelIndex, rank 76); **84.2% MMLU-Pro Vals** (new); **82.9% IFBench AA** (new)
- LCR / MLCR: **83.0% AA-LCR** (third-party row — fills prior gap)
- CritPt: **3.7** (LLMLearner, 67/124 — fills prior gap, weak tail)
- Artificial Analysis Intelligence Index / BenchLM overall: **29.2 AA Index, 58.6 Coding Index, 29.5 Agentic Index** (AA rows — fills prior gap); **67.3 LiveBench, 51.1 Context Arena, 9.8 GDP.pdf** (LLMLearner — new)
- Omniscience Accuracy / Hallucination Rate: **16.7% accuracy / 81.6% non-hallucination / 1.4% index** (AA-Omniscience rows — new)

Coding:

- SWE-bench Verified / SWE-Pro: **59% SWE-Bench Pro** (curated short); **80.5% SWE-bench Verified** (vendor table); **75.0% SWE Vals** (BenchLM mirror)
- LiveCodeBench (Vals): **82.2%** (BenchLM mirror)
- SciCode / AA-SciCode: **47.1% AA-SciCode** (third-party; 45.4 LLMLearner variant — fills prior gap)
- Vibe Code Bench: **50.1% VIBE V2** (BenchLM mirror); **47.6% Vibe v1.1 Vals** (OpenRouter summary — both listed)
- DeepSWE / Coding Index / other: **13.3% DeepSWE strict independent** (mini-swe-agent, 15/113, Jun 2026 — fills prior gap; far below the ~74 frontier bar, see score cap); **58.6% AA Coding Index** (third-party — new); **42.1% NL2Repo**, **63.7% SVG-Bench** (beats Opus 4.7), **28.8% KernelBench Hard**, **48.4% OpenHarmony Bench**, **37.1 PostTrainBench (#3)** (vendor/BenchLM rows); **29.3% SWE-Lite** (pricepertoken board — weak tail)

Long context:

- **1M window with 512K output verified; no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 ~54–66 plus τ²-Telecom 88.9%, MCP Atlas 74.2%, Claw-Eval 74.5%, BrowseComp 83.5% and BankerToolBench 76.1% show broad orchestration; capped by TB4.0 ~1–2 and no Tau3/GDPval-Elo numbers.
- **Reasoning: 83/100.** GPQA ~92 plus HLE 39.0, AA-LCR 83.0, IFBench 82.9 and MMLU-Pro 84.2 fill the profile; capped by CritPt 3.7 and a low AA Index 29.2.
- **Context window: 100/100.** 1M / 512K out verified; top tier.
- **Multimodal: 75/100.** Text/image/video in, text out; capped below audio/PDF omni models.
- **Coding: 87/100.** SWE-V 80.5% plus SWE-Pro 59%, LiveCode 82.2%, SciCode 47.1% and Coding Index 58.6 show strong full-spectrum coding; capped by the independent DeepSWE 13.3% and SWE-Lite 29.3% tails.
- **Cost efficiency: 85/100.** Paid $0.30/$1.20 is cheap paid value; no $0 tier caps below 100.
- **Overall Score: 87/100.** Mean of the five non-cost dims (88+83+100+75+87)/5 = 86.6 → 87; best-fit cheap paid flagship open MoE coding pick — third-party rows now fill the profile.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-10-07
- Method: public internet research (curated metadata: 59% SWE-Pro, 66% TB2.1, 230B/9.8B sparse attention) + 2026-10-07 re-research pass (MiniMax M3 launch blog, BenchLM/BenchmarkList rows, OpenRouter AA/Vals summary, LLMLearner/ShawnHack compilations, entrpi independent DeepSWE run); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
