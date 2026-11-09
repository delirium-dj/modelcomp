# GPT-5.4 mini — findings by MiMo 2.6 Flash

- Source: OpenAI/`gpt-5.4-mini`
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-09)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-09 (Overall 75). Fresh sources this pass: BenchLM GPT-5.4 mini page
> (last updated 2026-11-07, full benchmark tables with sources) and the
> Artificial Analysis model page re-check.
> Changes: Tool use 72→70 (GDPval-AA 1095 + TB2.1 54.7% now found — mid-band
> rows cap the blend); Coding 76→80 (LiveCodeBench 81.5%, SWE-bench 73.0% Vals,
> AA-SciCode 52.1% now found); Overall 75→76. Reasoning held at 86 (new LCR 77%
> positive vs AA Index 24.1 below class median); Context 78, Multimodal 65,
> Cost efficiency 90 held.

## Model card

- **Name:** GPT-5.4 mini
- **Short description:** OpenAI's 2026-03-17 small-model lane alongside GPT-5.4 nano — a significant upgrade over GPT-5 mini across coding, reasoning, multimodal understanding and tool use, running >2× faster and approaching full GPT-5.4 pass rates on SWE-Bench Pro and OSWorld-Verified. Not a variant/alias of another entry in this dataset.
- **Provider / access:** OpenAI Responses API (`https://api.openai.com/v1`), generally available; also in Codex and ChatGPT. Aggregator rows via BenchLM/ApX/Vals AI/AA.
- **Release / knowledge:** released 2026-03-17; knowledge cutoff **August 2025** (AA, re-confirmed 2026-11-08). AA marks GPT-5.4 mini **deprecated** ("OpenAI has launched a newer release, GPT-5.6 Terra") — kept for dataset permanence; AA now benchmarks it every 18h instead of every 6h.
- **IDs:** `gpt-5.4-mini`. **No OpenCode Zen Free ID found** — scored on paid API pricing.
- **Context window:** 400,000 tokens (OpenAI blog: "It has a 400k context window"; AA/BenchLM agree); max output not published for this snapshot.
- **Modalities:** text + image in; text out; reasoning yes (efforts swept low→xhigh); tool use, function calling, web search, file search, computer use, skills (OpenAI feature list). No audio/video input found.
- **Pricing (as of 2026-11-08):** $0.75 / 1M input, $4.50 / 1M output (OpenAI blog; AA and BenchLM agree; 90% cache discount; blended $0.65/M at 7:2:1). Paid tier only — no free API tier verified.
- **Architecture:** proprietary, closed weights, parameters undisclosed (ApX); runtime (conflicting measurement regimes, both kept): BenchLM row ~201 tok/s with 3.85 s TTFT vs AA 2026-11-08 snapshot of **200 tok/s** with **131.33 s TTFT** at xhigh effort on AA's workload (earlier AA reading was 271.5 tok/s / 101.85 s TTFT) — output is very fast but xhigh latency-to-first-answer-token is extreme (AA class median ~12.9 s).

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness) for traceability. Missing rows = no verified public score found.
> OpenAI blog numbers are xhigh reasoning effort. BenchLM page last updated 2026-11-07 (overall 53.3/100, rank #85/1016, partial coverage 41/759 benchmarks).

Agent / tool use:

- Terminal-Bench 2.0: **60.0%** (OpenAI; BenchLM agrees)
- OSWorld-Verified: **72.1%** (OpenAI; BenchLM agrees)
- τ²-Bench (telecom): **93.4%** (OpenAI; BenchLM τ²-bench results row)
- MCP Atlas: **57.7%** (OpenAI)
- Toolathlon: **42.9%** (OpenAI)
- GDPval-AA: **1095 Elo** (AA via BenchLM — new this pass); GDPval-AA normalized: 25.6%
- Terminal-Bench 2.1 (Vals): **54.7%** (Vals AI TB2.1 leaderboard — new)
- AA Agentic Index: **19.6%**; AA ITBench: **35.2%**; terminalBenchHard: **52.3%**; APEX-Agents-AA: **28.2%** (AA via BenchLM — new)
- Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.0%** (OpenAI; BenchLM/ApX agree; AA-GPQA Diamond 87.5%, Vals 83.1%)
- HLE: **41.5%** (OpenAI; HLE w/o tools 28.2%; AA-HLE 28.1%)
- LCR: **77.0%** (AA-LCR via BenchLM — new this pass; previously absent)
- CritPt: **10.0%** (AA via BenchLM — new this pass; previously absent)
- FrontierMath v2: **51.228%** Tiers 1–3, **9.756%** Tier 4 (Epoch AI FrontierMath v2 leaderboard via BenchLM — updated this pass; previous BenchLM row was 28.28% / 2.08%)
- AA Intelligence Index: **24.1** (v5.0.1 class position 29/727 shown on AA page; BenchLM row 24.1%); AA-Omniscience Accuracy **37.5%** / Hallucination Rate **90.2%** (new)
- ARC-AGI-1: **63.70%**; ARC-AGI-2: **18.9%** (ARC Prize leaderboard via BenchLM — new)
- LiveBench Reasoning 0.71, Data Analysis 0.71, Global 0.66 (ApX); Text Arena ELO **1448**, rank #56 (ApX)

Coding:

- SWE-Bench Pro (Public): **54.4%** (OpenAI) — vs GPT-5.4 57.7%, GPT-5 mini 45.7%
- SWE-bench (Vals): **73.0%** (Vals AI SWE-bench leaderboard — new this pass)
- LiveCodeBench (Vals): **81.5%** (Vals AI LiveCodeBench leaderboard — new this pass)
- AA-SciCode: **52.1%** (AA via BenchLM — new this pass)
- Vibe Code Bench: **47.97%** (Vals AI Vibe Code Bench v1.1 — new)
- AA Coding Index: **56.1%** (AA via BenchLM)
- FrontierCode 1.1 Main: **27.0%** (Cognition via BenchLM)
- LiveBench Coding: **0.72**, rank #38 (ApX); LiveBench Agentic: 0.42, rank #41
- DeepSWE: **no verified public score found**

Long context:

- 400K window (OpenAI spec row; AA/BenchLM agree); MRCR / RULER / GraphWalks retrieval: **no verified public score found** (AA long-context/MLCR-AA rows not yet populated for this model)

Multimodal:

- Text + image input supported (OpenAI API feature list; AA confirms); MMMU-Pro: **76.6%** (OpenAI), MMMU-Pro w/ Python: **78%** (OpenAI), AA-MMMU-Pro: **73.3%** (new)
- CharXiv / audio / video input: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 70/100.** τ²-Bench telecom 93.4% and OSWorld-Verified 72.1% stay strong, but this pass found the previously missing mid-band rows that cap the blend: GDPval-AA 1095 Elo (mid band ~900–1200 → 50–70), Terminal-Bench 2.1 54.7% (mid), AA Agentic Index 19.6% — down from 72 (old score explicitly stopped at 72 only because no GDPval row existed).
- **Reasoning: 86/100.** HLE 41.5% still clears the 40%+ frontier anchor and GPQA 88.0% sits just under 90%+ (~87 by interpolation); new positive rows this pass: LCR 77.0% (well above the <40 mid band) and FrontierMath v2 T1–3 51.228% (Epoch AI, up from the stale 28.28% row). Counter-signals hold it in place: AA Index 24.1 (mid band 20–35, below class median) and CritPt 10.0% — evidence mixed, score held.
- **Context window: 78/100.** 400K tokens sits in the upper half of the 200K–500K tier (65–84); no long-context retrieval measurement found (held).
- **Multimodal: 65/100.** Text + image in lands in the image-in band (60–70) with MMMU-Pro 76.6% / 78% w/ Python and AA-MMMU-Pro 73.3%; no PDF/video/audio input verified and no non-text output, so it cannot reach the 75–90 band (held).
- **Coding: 80/100.** New verified rows move it up from 76: LiveCodeBench 81.5% (Vals), SWE-bench 73.0% (Vals) and AA-SciCode 52.1% fill exactly the gaps the old score flagged (no SWE-bench Verified/LiveCodeBench row); SWE-Bench Pro 54.4% remains near full GPT-5.4 (57.7%) and Vibe Code Bench 47.97% is respectable. Still no frontier anchor met (DeepSWE 74%+, TB2.1 85%+, Coding Index 70%+ vs AA Coding Index 56.1%), so it stops at 80.
- **Cost efficiency: 90/100.** $0.75/$4.50 per 1M unchanged (AA re-check 2026-11-08) — just below the ~$1.25/$4.25 ≈ 88 anchor with a cheaper input; 90% cache discount noted (held).
- **Overall Score: 76/100.** (70 + 86 + 78 + 65 + 80) / 5 = 75.8 → 76 — best-fit as the high-value small model: near-frontier GPQA/HLE reasoning, 72% OSWorld computer use, 54% SWE-Bench Pro and now-verified 81.5% LiveCodeBench at $0.75/$4.50; capped by mid-band GDPval/TB2.1 tool rows, image-only input and no long-context retrieval data.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: BenchLM GPT-5.4 mini page updated 2026-11-07 with Vals AI / Epoch AI / ARC Prize sourced rows, Artificial Analysis model page re-check); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — Introducing GPT-5.4 mini and nano](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/)
  - [BenchLM — GPT-5.4 mini](https://benchlm.ai/models/gpt-5-4-mini)
  - [Artificial Analysis — GPT-5.4 mini](https://artificialanalysis.ai/models/gpt-5-4-mini)
  - [Vals AI — GPT-5.4 mini model page](https://www.vals.ai/models/openai_gpt-5.4-mini-2026-03-17)
  - [Epoch AI — FrontierMath v2 Tier 1–3 leaderboard](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
