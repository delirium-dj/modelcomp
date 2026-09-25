# Qwen3.8-27B — findings by Muse Spark 1.2

- Source: Alibaba Qwen / Qwen3.8-27B (Qwen/Qwen3.8-27B)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba dense 27.78B vision-language open-weights model — self-hostable frontier-adjacent agent-coder with 262K native context (YaRN to 1M) and native image/video understanding.
- **Provider / access:** Hugging Face `Qwen/Qwen3.8-27B` — open weights Apache 2.0 (BF16 ~51.8 GiB, FP8 ~28.8 GiB); self-host via vLLM/SGLang/llama.cpp/Transformers; third-party API routes via marketplace; no first-party metered API (use qwen3.8-max $2/$6 for API pricing proxy).
- **Release / knowledge:** Released 2026-08-14 (Hugging Face README, HokAI, OrcaRouter) under Apache 2.0; successor to Qwen3.6-27B; knowledge cutoff not disclosed.
- **IDs:** `Qwen/Qwen3.8-27B` (huggingface), `opencode/qwen-3.8-27b` (local track; noFreeId:true)
- **Context window:** 262,144 native, extensible to 1,048,576 via YaRN (verified via Hugging Face README Table, meta.json; recommended response cap 131,072 for agentic workloads; static YaRN note).
- **Modalities:** Text, image, video in; text out; reasoning yes (thinking toggle, MTP speculative decoding); tool calls (function calling, MCP, OSWorld/WebArena GUI); JSON/structured outputs.
- **Pricing (as of 2026-09-25):** Open weights: self-hosting free (GPU rental only). No official Alibaba API; third-party marketplace routes well under Max pricing ($2/$6 per 1M input/output for Max) — estimated <$0.40/$1.60 third-party for 27B (varies). No Zen Free ID; cost efficiency scored as open-weight self-host = free-equivalent with hardware cost noted (meta.json noFreeId:true).
- **Architecture:** Dense 27.78B, 64 layers (48 Gated DeltaNet linear-attention + 16 full-attention), hybrid DeltaNet; open weights (Apache 2.0).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Terminus harness, agentic terminal coding): **73.0%** (Alibaba Hugging Face README table, Dell hub, OrcaRouter, Respan — vs Qwen3.6-27B 63.4, Qwen3.7-Plus 64.0, Opus 4.6 Max 78.2; Claude Code harness note)
- Toolathlon Verified: **67.1%** (Respan article — Qwen3.8-27B 67.1 vs Max 72.5/Flash-Next 73.5)
- OSWorld-Verified (computer use, desktop control): **84.3%** (Regolo, HokAI, OrcaRouter — vs Opus 4.6 Max 72.7, Muse Glimmer-30B 65.9)
- WebArena-Verified: **64.8%** (HokAI)
- CoWorkBench (long-horizon office): **70.7%** (README: 70.7 vs Qwen3.6 61.0, Plus 65.1, Opus max 68.2)
- JobBench (professional tasks): **33.4%** (README)
- Agents' Last Exam (frontier agentic Pass@1 / Score): **20.4% Pass@1 / 42.9 Score** (README: vs Qwen3.6 10.6/27.3, Plus 13.2/33.6)
- Tau3-Banking / Tau2-Bench specific telecom/retail: **no verified public score found** for this ID (not in README table; industry τ² telecom 93% is for Plus, not 27B)
- GDPval-AA: **no verified public score found** for this ID
- MCP Atlas / MCP Mark: **no verified public score found** for this ID (27B table does not include MCP-Atlas; that is Plus)

Reasoning / knowledge:

- GPQA Diamond (scientific reasoning): **89.2%** (README, Dell hub, HokAI, Respan, SearchAgentSky — vs Qwen3.6-27B 87.8, Plus 90.3, Opus 4.6 Max 91.3, Glimmer-30B 83.5)
- HLE (Humanity's Last Exam, GPT-4o judged): **30.8%** (README — vs Qwen3.6 24.0, Plus 34.7, Opus 40.0)
- IFBench (instruction following): **79.5%** (README — vs Qwen3.6 69.1, Plus 79.1, Glimmer 77.0, Opus max 62.5)
- LCR / MRCR / RULER: **no verified public MRCR/RULER point score found** for 27B (1M via YaRN claimed but no retrieval % disclosed)
- CritPt: **no verified public score found**
- MathVision (with code interpreter): **94.6%** (HokAI)
- OmniDocBench 1.5: **91.1%** (Regolo comparison)
- CharXiv RQ: **83.7% (no CI) / 90.2% (with CI)** (Regolo)

Coding:

- SWE-bench Pro (refined benchmark, Claude Code harness temp 1.0/256K, avg): **61.7%** (README — vs Qwen3.6 53.5, Plus 57.6, Glimmer 51.2, Opus Max 53.4; Respan confirms 61.7, Dell hub)
- DeepSWE 1.1 (agentic coding): **42.2%** (README — vs Qwen3.6 13.3, Plus 14.2; Respan 42.2)
- QwenSWEBench (in-house software engineering, avg@3, 8h): **79.0%** (README — vs Qwen3.6 49.3, Plus 59.2, Opus 63.8)
- NL2Repo-Bench (repo-level generation): **42.3%** (README — vs Qwen3.6 36.2, Plus 41.1, Opus 47.6)
- LiveCodeBench v6 (competitive coding): **90.3%** (README, Dell hub, HokAI — vs Qwen3.6 83.9, Plus 89.6, Opus 88.8)
- SciCode: **no verified public SciCode score found for this ID** (not in 27B table)
- Vibe Code Bench: **no verified public score found** for this ID (legal/webdev arenas are proxy: Code Arena WebDev #9 overall, Image-to-WebDev #7/1574 are blind-vote arenas, not Vibe %)

Long context:

- Context extensible to 1M via YaRN, but **no verified MRCR v2/RULER retrieval % at 262K/1M found** for 27B (only window size disclosed)

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.1 73.0% + OSWorld 84.3% + WebArena 64.8% + CoWork 70.7% form elite local-agent suite (frontier TB 78.2 vs 73 cap), Toolathlon 67.1% strong; capped below 90 because TB 73 trails frontier 78.2 and no GDPval/Tau2 elite telecom to lift higher.
- **Reasoning: 84/100.** GPQA 89.2% near frontier 90%+, IFBench 79.5% top-of-class, MathVision 94.6% strong; HLE 30.8% well below frontier 40%+ (Opus 40.0) and no AA Index/LCR caps — strong science but broad hard reasoning not frontier.
- **Context window: 82/100.** Native 262,144 in 200K-500K tier (65-84) → upper tier, plus YaRN extensible to 1M documented but static YaRN quality warning and no MRCR retrieval % prevents 95-100 1M-tier — scored 82 for native 262K with conditional 1M extension.
- **Multimodal: 82/100.** Native text+image+video in (STEM diagrams, scanned docs, hour-scale video), image-to-code via screenshots, OmniDoc 91.1% etc.; no audio in/out, so below 90-100 audio omni — methodology +video =75-90, scored upper for strong vision.
- **Coding: 88/100.** SWE-Pro 61.7% beats Opus Max 53.4, QwenSWEBench 79% elite, LiveCodeBench 90.3% frontier (beats Opus 88.8), DeepSWE 42.2% strong vs 13-14% siblings; capped below 92 because NL2Repo 42.3% trails Opus 47.6 and no Vibe/DeepSWE 74% frontier.
- **Cost efficiency: 95/100.** Open weights Apache 2.0 — self-hosting free (GPU rental ~28-68 GiB), no per-token fee; would be 100 if pure $0 Zen free, but hardware cost noted so 95 (near-free).
- **Overall Score: 84/100.** Mean of five quality dims (86+84+82+82+88)/5=84.4 → 84. Best-fit: self-hostable single-GPU coding agent with vision — choose when 62% SWE-Pro + 90% LiveCode + 84% OSWorld at open-weight cost beats closed frontier pricing.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-25
- Method: public internet research (Qwen/Qwen3.8-27B Hugging Face README & Dell hub, HokAI, OrcaRouter, Regolo, Respan, SearchAgentSky); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

