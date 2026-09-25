# Qwen 3.7 Plus — findings by Muse Spark 1.2

- Source: Alibaba Qwen / Qwen 3.7 Plus (qwen/qwen3.7-plus, opencode/qwen-3.7-plus)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba Qwen 3.7 series cost-effective Plus-tier multimodal hybrid-agent model — upgrade to vision-language with full-stack coding, tool-use and productivity agent intelligence.
- **Provider / access:** Alibaba Cloud Model Studio / QwenCloud / OpenRouter `qwen/qwen3.7-plus` — API IDs `qwen3.7-plus` and snapshot `qwen3.7-plus-2026-05-26` (Chat Completions / Responses via Alibaba DashScope). OpenCode Zen ID `opencode/qwen-3.7-plus` (standard pricing).
- **Release / knowledge:** Released 2026-06-03 (Alibaba Cloud blog, TPS Report, TheModelBeat; snapshot 2026-05-26) ; knowledge cutoff not disclosed, approx. mid-2026.
- **IDs:** `qwen/qwen3.7-plus` (OpenRouter), `qwen3.7-plus-2026-05-26` (Alibaba snapshot); `opencode/qwen-3.7-plus`
- **Context window:** 1,000,000 tokens total (991,808 max input / 131,072 max output; thinking mode 983,616 in / 131K out, CoT 262,144) — verified via alibabacloud.com Model Studio docs and qwencloud.com.
- **Modalities:** Text + image (+ video per Phaseo/qwencloud) in; text out; reasoning yes (extended thinking, temp 1.0/top_p 0.95/top_k 20); tool calls (function calling, MCP, Code, GUI/app navigation); JSON/structured outputs, prefix completion.
- **Pricing (as of 2026-09-25):** Alibaba direct: $0.276 / $1.101 per 1M input/output for ≤256K context; $0.826 / $3.301 per 1M for >256K–1M (implicit cache $0.056/$0.166). OpenRouter blended: $0.40 / $1.60 per 1M (TPSReport, Phaseo), Together $0.32/$1.28 per 1M. Paid tier; no free tier. Source: alibabacloud Model Studio pricing, TPSReport, TheModelBeat, Phaseo.
- **Architecture:** Proprietary hybrid linear-attention + sparse MoE; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom (Artificial Analysis, Epoch AI): **93.0%** (OpenRouter AA benchmarks, TheModelBeat 93.0% τ²-bench)
- MCP Atlas (public set, gemini-2.5-pro judger): **73%** (allthemodels.ai, alibabacloud methodology note: public set score)
- MCP-Mark (GitHub MCP v0.30.3): **no verified public single-point score extracted** (methodology listed, score pending; not in AA table)
- Terminal-Bench 2.0 (Harbor/Terminus-2, 5h, temp 1.0): **70%** (allthemodels.ai: Terminal-Bench 2.0 0.70) ; AA Terminal-Bench Hard: **47.0%** (OpenRouter AA table)
- OSWorld-Verified: **73%** (allthemodels.ai)
- AndroidWorld: **81%** (allthemodels.ai)
- GDPval-AA: **12.8%** (OpenRouter AA GDPval-AA — anomalously low vs other suites, methodology unclear)
- CritPt: **9.1%** (OpenRouter AA CritPt)
- BFCL-V4: **73%** (allthemodels.ai)
- VITA-Bench / CoWorkBench / Deep-Planning / Kernel Bench L3: described in methodology but per-model numeric not extracted here — no verified single-point score found for this ID in search snapshot

Reasoning / knowledge:

- GPQA Diamond (graduate-level science, 448Qs): **90.0% (Artificial Analysis) / 90.3% (Neura verified)** (OpenRouter AA 90.0%, Neura 90.3%, LMSpeed #35 90.0%)
- HLE (Humanity's Last Exam): **35.6% (AA) / 34.7% (Neura verified) / 35% (allthemodels)** (OpenRouter 35.6%, Neura 34.7, allthemodels 0.35)
- AIME 2024/2025 (competition math): **93.3%** (TheModelBeat: 93.3% on AIME 2024/2025, Epoch AI)
- HMMT Feb 26: **93%** (allthemodels 0.93)
- MMLU-Pro: **89%** (allthemodels 0.89; LMSpeed MMLU-Pro 88.5% #5/129)
- MMLU-Redux: **94%** (allthemodels 0.94)
- IFBench (instruction following): **78.0%** (OpenRouter AA IFBench)
- AA Intelligence Index: **25.2** (OpenRouter AA) ; AA Omniscience Accuracy 22.5% / Non-Hallucination 72.3% (AA table — low accuracy suggests harness mismatch)
- AA-LCR (long-context reasoning): **73.0%** (OpenRouter AA)

Coding:

- SWE-bench Verified: **77.7% (Neura verified) / 78% (allthemodels) / 78.8% (OpenRouter note re Qwen 3.6 Plus)** (Neura 77.7, allthemodels 0.78; methodology: internal agent scaffold bash+file-edit, temp1.0/200K)
- SWE-bench Pro: **57.6%** (Neura verified Pro)
- SWE-bench Multilingual: **76%** (allthemodels 0.76)
- SciCode (scientific programming): **46.1% AA / 51.3% Neura verified** (OpenRouter 46.1%, Neura 51.3, alibabacloud claims strong but numeric 46-51)
- Vibe / other: no verified Vibe Code Bench score found for this ID
- Artificial Analysis Coding Index: **55.9** (OpenRouter AA)
- Terminal-Bench Hard already above

Long context:

- AA-LCR 73.0% is primary long-context proxy (OpenRouter); MRCR / RULER / GraphWalks: **no direct MRCR v2/RULER point score found** beyond 1M window claim; AA-LCR 73% at likely 128K+ indicates strong but not 98%+ retrieval at 512K+.

### Normalized scores (1–100)

- **Tool use: 82/100.** τ² Telecom 93% elite, MCP Atlas 73% and Terminal-Bench 2.0 70% (Hard 47% lower) show strong hybrid-agent tool-use; OSWorld 73%/BFCL 73% reinforce; GDPval 12.8% anomalously low vs others suggests harness-specific, not capping — score reflects median of strong suites, capped by Hard 47% trailing frontier 88%+ TB.
- **Reasoning: 84/100.** GPQA 90-90.3% frontier, HMMT 93%, MMLU-Pro ~89%, IFBench 78% strong; HLE 35.6% near frontier 40% threshold and AIME 93.3% reinforce; AA Index 25.2 and AA-LCR 73% lower but core science/math justify high — capped by HLE not clearing 40% and AA-LCR 73% <95% retrieval.
- **Context window: 96/100.** 1M total (991K in /131K out, CoT 262K) in ≥1M tier (95-100); AA-LCR 73% and no 98%+ retrieval evidence at 512K+ prevents 100, but 1M window verified across providers earns high.
- **Multimodal: 78/100.** Text+image (+video) in, text out; no audio in; methodology +image+video/PDF =75-90 — scored mid-upper for image+video capability but no audio out/pure omni, capped below 90.
- **Coding: 81/100.** SWE Verified 77.7-78% and Pro 57.6% strong (Pro near top 10), SciCode 46-51% moderate, Terminal 70%/Hard 47% mid-high, AA Coding 55.9 mid; capped below 90 because not reaching 80%+ Verified + 55%+ SciCode + 85%+ TB frontier simultaneously.
- **Cost efficiency: 91/100.** ~$0.40/$1.60 (OpenRouter) or $0.276/$1.101 at ≤256K (Alibaba) is very cheap vs $1.25/$4.25 ~88 and $0.60/$2.20 ~92 tiers; >256K premium $0.826/$3.30 still cheap vs $3/$15 ~60; near-free-tier value at paid price.
- **Overall Score: 84/100.** Mean of five quality dims (82+84+96+78+81)/5=84.2 → 84. Best-fit: cost-effective 1M multimodal agent-coder — choose when SWE-Pro + GPQA + GUI/app hybrid tool-use needed at ~$0.40/$1.60.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-25
- Method: public internet research (Alibaba Cloud Model Studio docs, OpenRouter/TheModelBeat/Phaseo pricing, Artificial Analysis AA table, Neura/LMSpeed/allthemodels benchmarks, alibabacloud methodology notes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

