# Kimi K2.6 — findings by DeepSeek 4.1 Flash

- Source: Moonshot AI (`kimi-k2.6`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-09-29); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM (`kimi-2-6`, 55 rows) computes an overall **58.38/100 (#60 of 972)** and confirms the deep pass: Terminal-Bench 2.0 66.7%, BrowseComp 83.2%, τ² 95.9%, OSWorld-Verified 73.1%, SWE-bench Verified 80.2%, SWE-bench Pro 58.6%, LiveCodeBench 89.6%, GPQA 90.5% (AA 91.1%), HLE 34.7%, AA-LCR 81.0%, MMMU-Pro 79.4%, CharXiv 80.4%, FrontierMath v2 57.19%/25.64%. **No score change**.

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources).
> Newly confirmed from the Hugging Face card + Kimi blog: **Terminal-Bench 2.0 66.7%**, **SWE-bench Verified 80.2%**, SWE-bench Pro 58.6%, SWE Multilingual 76.7%, SciCode 52.2%, **LiveCodeBench v6 89.6%**, OJBench-py 60.6%; **GPQA Diamond 90.5%**, HLE 34.7% (no tools) / **54.0% with tools**, AIME 2026 96.4%, HMMT 92.7%, IMO-AnswerBench 86.0%; **Toolathlon 50.0%**, MCPMark 55.9%, OSWorld-Verified 73.1%, **BrowseComp 83.2%** (86.3% agent-swarm), DeepSearchQA-F1 92.5%, WideSearch 80.8%, APEX-Agents 27.9%, Claw-Eval 62.3%; MMMU-Pro 79.4%, CharXiv-RQ 80.4%, MathVision 87.4%, **V\* 96.9%**. Independent: **Vals Index 63.9% (#7 overall, #1 open-weight)**, TB 2.1 53.56%, SWE-bench 76.20%, LiveCodeBench 86.77%, MMMU-Pro 86.30%; AA Intelligence Index **27 (#21/117)**, AA-LCR 81.0%, τ²-bench 95.9%, GDPval-AA 1115 Elo; BenchLM overall 58.26 (#56/891).
> **Conflicts surfaced:** (1) **SWE-bench Verified** — 80.2% (HF card) vs 76.20% (Vals). (2) **Terminal-Bench** — 66.7% on TB 2.0 (HF card) vs 57.3% TB 2.0 / 53.56% TB 2.1 (Vals). (3) **LiveCodeBench v6** — 89.6% (HF) vs 86.77% (Vals). (4) **MMMU-Pro** — 79.4% (HF) vs 86.30% (Vals). (5) **Context** — 256K/262,144 (HF/Vals) vs AA's "256k" spec but "260k" FAQ. (6) Composite indices differ by method (BenchLM 58.26 vs AA 27 vs Vals 63.9%).
> **No dimension change:** the new independent suite confirms the prior profile; Overall stays **83**.
> Sources: https://huggingface.co/moonshotai/Kimi-K2.6 · https://www.kimi.com/blog/kimi-k2-6.html · https://www.vals.ai/models/kimi_kimi-k2.6 · https://benchlm.ai/models/kimi-2-6 · https://artificialanalysis.ai/models/kimi-k2-6

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's open-weight agentic flagship — "state-of-the-art coding, long-horizon execution, and agent swarm capabilities." It scales horizontally to **300 sub-agents executing 4,000 coordinated steps**.
- **Provider / access:** Kimi.ai, Kimi App, Kimi API (`platform.kimi.ai`), Kimi Code; OpenCode Zen `kimi-k2.6`; third-party hosts DeepInfra, Fireworks, Novita, Together, OpenRouter. Open weights (Modified MIT).
- **Release / knowledge:** Released **2026-04-20**. Knowledge cutoff not stated.
- **IDs:** `kimi-k2.6` (Moonshot/Zen), `moonshotai/Kimi-K2.6` (Together), `moonshotai/kimi-k2.6` (OpenRouter). No `kimi-k2.6-free` exists.
- **Context window:** **262,144 (262.1K) input tokens**; max output varies by host — 262.1K (Moonshot/Fireworks/Novita), 131.1K (DeepInfra/Together).
- **Modalities:** text, image and video input; text output. Reasoning yes (thinking mode, preserve-thinking); tool use yes.
- **Pricing (as of 2026-10-11):** Moonshot **$0.95 in / $0.16 cached / $4.00 out** per 1M; DeepInfra $0.75/$3.50 (cheapest); Together $1.20/$4.50; OpenRouter promo $0.43/$1.82.
- **Architecture:** open-weight MoE, **1T total parameters / 32B active** (384 experts + 1 shared, 8 selected/token; MLA attention; MoonViT 400M vision encoder; native INT4), Modified MIT licence.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **66.7%** (HF blog; Vals TB 2.0 57.3% / TB 2.1 53.56%); Agent Swarm up to 300 sub-agents / 4,000 steps
- Toolathlon 50.0%; MCPMark 55.9%; OSWorld-Verified 73.1%; Claw-Eval (pass^3) 62.3%; APEX-Agents 27.9%
- BrowseComp 83.2% (86.3% agent-swarm); DeepSearchQA 92.5% F1 / 83.0% acc; WideSearch 80.8%
- τ²-bench 95.9% (AA); GDPval-AA 1115 Elo / 26.9%; AA Agentic Index 22.1%

Reasoning / knowledge:

- GPQA Diamond: **90.5%** (HF) / 89.14% (Vals); HLE 34.7% no tools / **54.0% with tools**; AIME 2026 96.4%
- HMMT Feb 2026 92.7%; IMO-AnswerBench 86.0%; MMLU-Pro 87.57% (Vals)
- AA Intelligence Index **27** (#21/117); AA-HLE 37.5%; AA-Omniscience index 5.3%; CritPt 8.0%; AA-LCR 81.0%

Coding:

- SWE-bench Verified: **80.2%** (HF) / 76.20% (Vals); SWE-bench Pro 58.6%; SWE Multilingual 76.7%; SciCode 52.2%
- LiveCodeBench v6 **89.6%** (HF) / 86.77% (Vals); OJBench-py 60.6%; AA Coding Index 61.8%; Vibe Code Bench 37.89%

Long context:

- 262,144-token window; AA-LCR 81.0%; no vendor MRCR/RULER number. p95 TTFT 2.17 s (DeepInfra).

Multimodal:

- MMMU-Pro 79.4% (HF) / 86.30% (Vals); CharXiv-RQ 80.4%; MathVision 87.4%; V\* 96.9%.

### Normalized scores (1–100)

- **Tool use: 85/100.** TB 2.0 66.7%, Toolathlon 50.0%, OSWorld 73.1%, MCPMark 55.9%, BrowseComp 83.2% and the production-scale agent-swarm evidence are competitive with Opus 4.6/GPT-5.4; capped by 66.7% sitting under the ~88% TB2.1 frontier reference.
- **Reasoning: 88/100.** GPQA 90.5%, HLE 54.0% with tools and AIME 96.4% are frontier-class; capped by the absence of a top Intelligence Index and the rebase caveat.
- **Context window: 78/100.** 262,144 tokens is the 200K–500K tier (65–84), earning the upper half from a genuinely large max output and a solid AA-LCR 81.0%; no retrieval-at-length proof.
- **Multimodal: 78/100.** Text + image + video input with text output is the 75–90 `+video/PDF in` band; no audio, no non-text output, and the HF/Vals MMMU spread keeps it below 90.
- **Coding: 88/100.** SWE-bench Verified 80.2%, SWE-bench Pro 58.6%, LiveCodeBench 89.6% and the long-horizon runs are the strongest published evidence of sustained repository-level work; the Vals figures (76.2 / 86.8) and the in-house SWE-agent harness keep it out of the mid-90s.
- **Cost efficiency: 88/100.** $0.95/$0.16/$4.00 on Moonshot and $0.75/$3.50 on DeepInfra sit at the ~$1.25/$4.25 ≈ 88 anchor with a deep cache discount; paid-only.
- **Overall Score: 83/100.** (85 + 88 + 78 + 78 + 88) / 5 = 83.4 → 83. Best fit: long-horizon open-weight agentic coding and multi-agent orchestration where downloadable weights matter and a 262K window is acceptable.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: deep second-pass public internet research (Moonshot Kimi K2.6 blog + Hugging Face card, Vals AI, BenchLM, Artificial Analysis, Together AI, OpenRouter). Independent Vals/AA rows were added to the vendor table; the SWE/Terminal-Bench/MMMU spreads and the composite-index method differences are surfaced rather than hidden. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
