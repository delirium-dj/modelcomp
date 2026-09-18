# HY3 — findings by DeepSeek 4.1 Flash

- Source: Tencent/HY3 (`tencent/Hy3`, served as `hunyuan-hy3` / `hy3`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** HY3 (Tencent Hunyuan 3) — the **official** July 2026 release, not the April `Hy3 Preview`.
- **Short description:** Tencent Hy Team's 295B-A21B MoE reasoning/agent model with hybrid fast-and-slow thinking, Apache 2.0 open weights and a 256K window. It is Tencent's production foundation model for agent + productivity work (WorkBuddy/CodeBuddy, Yuanbao, ima, Marvis, WeGame assistants), positioned to rival 2–5× larger flagships at a fraction of the serving cost.
- **Provider / access:** Tencent Cloud TokenHub as `hunyuan-hy3` (OpenAI-compatible chat completions at `https://api.tencentcloud.com/tokenhub/v1`); self-host via vLLM or SGLang recipes in the official repo; rolling out to OpenRouter, Hermes, Kilo, Cline, OpenClaw, OpenCode and Cherry Studio. **No OpenCode Zen Free ID exists** — access is paid (TokenHub new-account trial aside).
- **Release / knowledge:** Official release **2026-07-06** (preview 2026-04-23). Knowledge cutoff not published.
- **IDs:** `tencent/Hy3` (Hugging Face / ModelScope), `hunyuan-hy3` (TokenHub model string), `--served-model-name hy3` (self-host). No Zen Free ID observed.
- **Context window:** **256,000 tokens (256K)** per the official GitHub model card; Artificial Analysis lists 256k (≈260k). Max output tokens are not published by Tencent — noted as a caveat, not scored separately.
- **Modalities:** **Text in / text out only.** Reasoning yes (`reasoning_effort` = `no_think` / `low` / `high`); tool calls yes with auto-tool-choice (`--tool-call-parser hy_v3`); OpenAI-compatible JSON/structured output and streaming. Tencent's TokenHub marketing page calls HY3 "multimodal-capable", but the official model card, the Hugging Face config and Artificial Analysis all confirm text-only input — the marketing claim is not supported by the technical sources.
- **Pricing (as of 2026-09-18):** TokenHub reference **$0.132 / 1M in, $0.528 / 1M out, $0.033 / 1M cached** (BenchmarkList); Artificial Analysis cross-provider median **$0.14 in / $0.58 out** with a 75% cache discount ($0.07). Blended 7:2:1 rate ≈ **$0.11 / 1M**. Paid only (no $0 tier); new TokenHub accounts get a 1M free-token trial that covers HY3 calls.
- **Architecture:** MoE, **295B total / 21B active** (+3.8B MTP layer, 1 MTP layer), 80 layers, 192 experts with top-8 routing, 64 attention heads (GQA, 8 KV heads, head dim 128), hidden size 4096, intermediate 13312, vocab 120832, BF16, **Apache 2.0 open weights**. Artificial Analysis counts 299B total parameters (rounding of the same model).

### Raw benchmarks found

> Tencent publishes its own benchmark appendix only as an image (`assets/benchmark.png` in the repo), so vendor numbers could not be tabulated. Everything below is from third-party aggregators with the harness noted.

Agent / tool use:

- Terminal-Bench 2.1: **71.7%** (BenchmarkList, 79th percentile, rank 39/182)
- Terminal-Bench Hard: **34.1%** (BenchmarkList, rank 55/326)
- Tau2-Bench Telecom: **92.7%** (BenchmarkList, rank 40/332)
- Tau3-Banking: **22.9%** (BenchmarkList, rank 45/174)
- GDPval-AA: **1,212** (BenchmarkList, rank 56/340; AA GDPval-AA v2 harness)
- MCP Atlas: **79.1%** (BenchmarkList, rank 14/44)
- WildClawBench: **49.7%** (BenchmarkList, rank 15/36)
- BrowseComp: **84.2%** (BenchmarkList, rank 13/44)
- Long-Horizon Terminal-Bench: **0.29** (BenchmarkList, rank 14/21)
- APEX-Agents: **24.4%**; Agents' Last Exam: **17.1%** (BenchmarkList)
- Claw-Eval / ClawProBench: **no verified public score found** (WildClawBench 49.7% is the closest public proxy)
- Vendor blind human eval: **2.67/4** across 270 external experts on their own work tasks, vs GLM-5.1 at 2.51/4 (Tencent self-reported, July 2026 release note)

Reasoning / knowledge:

- GPQA Diamond: **89.7%** (BenchmarkList, rank 39/464)
- HLE: **33.5%** overall; **37.0%** text-only; **53.2%** with tools (BenchmarkList)
- LCR / MLCR: AA-LCR **74.7%** (BenchmarkList, 89th percentile, rank 45/409) — no published MLCR
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **26 / rank 24 of 113** (AA v4.3 page); BenchmarkList reports AAII **42.2** on its own index scale (rank 47/418, 89th percentile) plus ECI **133.97 (rank 62/398; open-weight rank 19/158)**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- Context Arena: 66.1% / 66.8% / 25.4% across three variants (BenchmarkList)

Coding:

- SWE-bench Verified: **78.0%** (BenchmarkList, rank 20/46)
- SWE-bench Pro: **57.9%** (rank 30/49); SWE-bench Multilingual: **75.8%** (rank 16/46)
- LiveCodeBench: **no verified public score found**
- SciCode: **47.6%** (rank 41/458)
- Vibe Code Bench: **no verified public score found**
- Other: NL2Repo **45.6%**, WebDev Arena Elo **1511.17**, SkillsBench **55.3%** (BenchmarkList); no DeepSWE / Coding Index result published

Long context:

- AA-LCR **74.7%** at the 409-model cohort is the only long-context retrieval signal found; **no MRCR / RULER / GraphWalks value is published for HY3 at any window depth**, so the 256K window is structurally verified but retrieval-at-depth is unmeasured.

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `../../model-comparison.md`; Overall = arithmetic mean of the six.

- **Tool use: 78/100.** TB 2.1 71.7% and GDPval-AA 1,212 sit above the mid band (TB 45–60%, GDPval 900–1200) and Tau2 Telecom 92.7% / MCP Atlas 79.1% / BrowseComp 84.2% show broad tool fluency, but Tau3-Banking 22.9% and the near-empty APEX-Agents / Agents' Last Exam rows stop it short of the 90+ frontier band; no Claw-Eval exists.
- **Reasoning: 82/100.** GPQA Diamond 89.7% is essentially at the frontier reference (90%+), AA-LCR 74.7% is a strong retrieval-reasoning signal and the AA Intelligence Index rank (24/113) is top-quintile; capped by HLE 33.5% (below the 40% frontier ref), no CritPt and no Omniscience/hallucination figure.
- **Context window: 72/100.** 256K lands in the 200K–500K tier (200K = 70); the extra 56K lifts it to 72. No ≥512K retrieval evidence exists to push higher, and max output is unpublished.
- **Multimodal: 15/100.** Text-only input and output per the official model card, Hugging Face config and Artificial Analysis — no image/audio/video input, no non-text output, so it takes the text-only band (10–20) rather than the 60+ image-in band.
- **Coding: 76/100.** SWE-bench Verified 78.0%, SWE-bench Pro 57.9%, SciCode 47.6%, TB 2.1 71.7% and WebDev Arena 1511 put it clearly above the mid band (LiveCode 80% + Vibe <10% + SciCode <40% → 65–75), but every frontier reference (DeepSWE 74%+, TB2.1 85%+, SciCode 55%+, Coding Index 70%+) is still unmet and no LiveCodeBench/DeepSWE number exists.
- **Cost efficiency: 95/100.** $0.132 in / $0.528 out with a $0.033 cached rate and 75% cache discount works out to a ≈$0.11 blended rate — cheaper than the ~$0.10/$0.20 = 97–99 band on output and well ahead of MiniMax-class $0.30/$1.20 pricing; capped by being paid-only (no $0 Free ID) and by trial-only free access, so it cannot reach the $0 = 100 slot.
- **Overall Score: 65/100.** (78 + 82 + 72 + 15 + 76 + 95) / 6 = 69.7 → **70**. Best fit: self-hosted or TokenHub-routed agents that need near-flagship reasoning/coding at roughly a tenth of frontier output pricing and have no image/video input requirement.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-18
- Method: Public internet research from zero — Tencent newsroom release note (2026-07-06), `Tencent-Hunyuan/Hy3` GitHub model card, Hugging Face `tencent/Hy3`, Tencent Cloud TokenHub access/pricing docs, Artificial Analysis and BenchmarkList aggregator pages. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6_Astra.md`, using the same headings.
