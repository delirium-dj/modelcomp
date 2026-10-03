# Mistral Medium 3.5 — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Mistral Medium 3.5
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **EVIDENCE NOTE:** Mistral published SWE-bench Verified and τ³-Telecom but **no MMLU, GPQA, AIME, HumanEval, or MATH** at launch ("what's notably absent from Mistral's launch materials" per TechSifted). Reasoning and Multimodal scores below rest on AA's Intelligence Index and documented capability, not on standard suite scores.

## Model card

- **Name:** Mistral Medium 3.5 (HF: `mistralai/Mistral-Medium-3.5-128B`)
- **Short description:** Mistral's April 2026 "first flagship merged model" — a dense 128B with instruction-following, reasoning, and coding in a single set of weights and per-request reasoning-effort control; replaces Mistral Medium 3.1 and Magistral in Le Chat and Devstral 2 in the Vibe coding agent.
- **Provider / access:** Mistral API; Le Chat (Pro, Team, Enterprise); open weights on Hugging Face (Modified MIT — high-revenue enterprises route through Mistral's paid channel); self-hosting realistic on 4 GPUs (unusually low for a 128B dense; EAGLE speculative-decoding model released separately for vLLM/SGLang; vLLM recommended, SGLang day-zero, llama.cpp/LM Studio WIP, NVIDIA NIM containers).
- **Release / knowledge:** 2026-04-29 (blog 2026-04-28). Knowledge cutoff not captured.
- **IDs:** `mistral-medium-3.5` (API alias per DataNorth); repo folder `mistral-medium-3.5`.
- **Context window:** 256,000 tokens.
- **Modalities:** Text and image in; text out.
- **Pricing (as of 2026-10):** $1.50 input / $7.50 output per 1M (Mistral API); blended 7:2:1 ≈ $1.16/M; 90% cache discount (AA); AA: "particularly expensive when comparing to other open weight models of similar size" — ~2.5× Qwen3.5-397B's input rate, ~10× DeepSeek V4 Flash, but ~3× cheaper than GPT-5.5 and ~5× cheaper than Claude Opus 4.7.
- **Architecture:** Dense, 128B parameters (no MoE); 256K context; configurable reasoning effort per request.
- **Performance:** AA: notably fast and fairly concise (100M tokens to complete the Intelligence Index, at the median); $0.50 per task to evaluate.

### Raw benchmarks found

**Vendor-reported (Mistral, April 2026):**
- SWE-bench Verified **77.6%** — vs Devstral 2 ~72% (72.2% per the TowardsAI run), Qwen3.5-397B ~74%; trails Gemini 3.1 Pro Preview (78.8%, the leader) and Claude Sonnet 4.6 (79.6%).
- τ³-Telecom **91.4%** (agentic multi-step tool use).
- LEXam-hard **31.89*** (HF leaderboard).
- 18-task independent run (TowardsAI, 2026-04-30): Medium 3.5 at effort=high **32/36** (algorithm 11/12, systems 10/12, agentic 11/12) vs Devstral 2 26/36, Magistral 24/36, Medium 3.5 at effort=low 26/36; the agentic bucket gap (11/12 vs 7/12) is the merged-model design's target win; the full test cost $2.37 (380K in / 240K out).
- **Artificial Analysis Intelligence Index: 14** ("well above average among comparable models", median 8).
- No MMLU, GPQA, AIME, HumanEval, or MATH scores published (the predecessor Medium 3 scored 92.1% HumanEval and 57.1% GPQA Diamond — not carried over).

## Scores

- **Tool use: 69/100.** τ³-Telecom 91.4% is a strong agentic tool-use result; Vibe CLI integration and the 18-task agentic bucket (11/12) corroborate; no Tau-bench/MCP-Atlas run captured.
- **Reasoning: 56/100.** AA Intelligence Index 14 is the only independent reasoning signal; GPQA/HLE/AIME were not published at launch; per-request effort control is documented behavior, not measurement.
- **Context window: 73/100.** 256K tokens; no MRCR-class long-context benchmark captured.
- **Multimodal: 61/100.** Image input documented (text + image in, text out); no MMMU/MathVista-class score published; scored on documented capability.
- **Coding: 73/100.** SWE-bench Verified 77.6% is frontier-adjacent (beats Qwen3.5-397B's ~74%, trails Sonnet 4.6's 79.6% and Gemini 3.1 Pro's 78.8%); replaces Devstral 2 across all coding benchmarks per Mistral; no LiveCodeBench/Terminal-Bench scores published.
- **Cost efficiency: 56/100.** $1.50/$7.50 per 1M (blended ≈$1.16/M) — expensive for an open-weight 128B per AA, despite the 90% cache discount and 4-GPU self-hosting floor.
- **Overall Score: 66.4/100.** Mean of Tool use 69, Reasoning 56, Context window 73, Multimodal 61, Coding 73 = 66.4 (Cost efficiency excluded per methodology).

> **Gap vs folder average (70.6): −4.2.** Drivers: the absent standard reasoning suites (Reasoning 56 on AA Index 14 alone) and the expensive-for-class pricing. The SWE-bench Verified 77.6% and τ³-Telecom 91.4% are fully credited in Coding and Tool use.

## Notes

- Verification trail: Mistral docs model card (`mistral-medium-3-5-26-04`), HF `mistralai/Mistral-Medium-3.5-128B` (merged-model framing, SWE-bench 77.6, τ³-Telecom 91.4, LEXam-hard 31.89), AA model page (Index 14, $1.50/$7.50, 90% cache discount, fast/concise), i-scoop (4-GPU self-hosting, EAGLE, sovereignty positioning), DataNorth (pricing tiers, release date), Lushbinary (comparison table vs Devstral 2/Qwen3.5-397B), TechSifted (absent benchmarks, Sonnet 4.6 79.6% comparison, Qwen 3.6 27B at 72.4%), TowardsAI (18-task run, $2.37 cost).
- Known conflicts: none major on the headline numbers; SWE-bench Verified 77.6% is consistent across all sources.
- Open questions: standard reasoning suite scores (GPQA/HLE/AIME) if Mistral publishes them; LiveCodeBench/Terminal-Bench runs; the Modified MIT revenue threshold.
- Future sources: Mistral's next release, AA full measurement set, third-party harness runs.

---

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Cross-model signed log: `model-findings.md` — append one line: `2026-10-03 Ling 3.1 Flash Mistral Medium 3.5 Overall=66.4 (Tool=69 Reasoning=56 Context=73 Multimodal=61 Coding=73 Cost=56; dense 128B Modified MIT; SWE-bench 77.6%; no GPQA/HLE published)`
