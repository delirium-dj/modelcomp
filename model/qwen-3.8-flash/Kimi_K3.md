# Qwen3.8 Flash — findings by Kimi K3

- Source: Alibaba/Qwen / Qwen3.8 Flash (`qwen3.8-flash`; open checkpoint `Qwen/Qwen3.8-Flash-Next`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Flash
- **Short description:** Qwen's fast/cheap production tier of the 3.8 family — the managed Alibaba Cloud/OpenRouter API model (1M context + built-in tools) built on the open-weight Qwen3.8-Flash-Next checkpoint. Released August 26, 2026. **Attribution fix:** all independent AA/LiveBench rows below were measured on the **open Flash-Next checkpoint** (artificialanalysis.ai/models/qwen3-8-flash-next) — the hosted Flash ID itself was still unranked on BenchLeader at research date.
- **Provider / access:** Alibaba Cloud International (benchleader.com live provider row), QwenCloud (docs.qwencloud.com), OpenRouter, Novita (`qwen3.8-flash`, OpenAI-compatible); open weights on Hugging Face (`Qwen/Qwen3.8-Flash-Next`, qwen-community-1.0 license per respan.ai).
- **Release / knowledge:** Released 2026-08-26 (llm-stats.com, benchleader.com); knowledge cutoff not verified.
- **IDs:** `qwen/qwen3.8-flash`; HF `Qwen/Qwen3.8-Flash-Next` (no Free ID on OpenCode Zen verified).
- **Context window:** 1M tokens in / 131K out for the managed API (llm-stats.com, benchleader.com; respan.ai confirms hosted Flash adds 1M default + built-in tools); the open Flash-Next checkpoint is measured at 256K context (benchleader.com) — treat 1M as managed-service config.
- **Modalities:** text/image/video in; text out; reasoning yes (xhigh default); tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** $0.15/M input, $0.016/M cached, $0.47/M output (Alibaba Cloud Int. via benchleader.com; llm-stats.com); blended $0.23/M (benchleader.com).
- **Architecture:** 125B total / ~6B active MoE + 51B n-gram table (respan.ai); open weights for Flash-Next (early Qwen4-architecture preview); managed API proprietary.

### Raw benchmarks found

> All "(AA)" and LiveBench rows were measured on the open **Qwen3.8-Flash-Next** checkpoint (benchleader.com, last measured 28 Sept 2026) — the hosted `qwen3.8-flash` had only GDP.pdf: **16.6%** (#30, Epoch AI) as of 29 Sept 2026. Flash is built on Flash-Next, so the rows are the best available proxy.

Agent / tool use (Flash-Next):

- Terminal-Bench 2.1 (AA): **86.1%** (#21) — Terminal-Bench 4.0 (AA): **25.3%** (#40) (benchleader.com / Artificial Analysis)
- GDPval (AA): **55.6%** (#20) (benchleader.com)
- τ²-Bench Banking (AA): **45.4%** (#14) (benchleader.com)
- LiveBench Agentic Coding: **61.6%** (#11); LMArena Agent: **−0.9** (#28) (benchleader.com)

Reasoning / knowledge (Flash-Next):

- LiveBench overall: **76.2%** (#28); Reasoning: **87.4%** (#24); Mathematics: **85.8%**; Instruction Following: **77.1%** (#5) (benchleader.com)
- GPQA Diamond (AA): **92.3%** (#36) (benchleader.com)
- HLE (AA): **38.0%** (#85) (benchleader.com)
- CritPt: **11.1%** (#92) (benchleader.com)
- AA Intelligence Index: **39.8** (#49); BenchLeader category scores: Reasoning 61 / Coding 69 / Agents & tools 65 / Knowledge 58 (Index 60.4 ±6.1, #102 of 740) (benchleader.com)
- AA-Omniscience: **−9.7 index** (#165) — accuracy 24.5% (#215), non-hallucination 54.7% (benchleader.com)

Coding (Flash-Next):

- LMArena WebDev: **1636** (#11) (benchleader.com)
- LiveBench Coding: **72.5%** (#50) (benchleader.com)
- SciCode (AA): **50.6%** (#84) (benchleader.com)
- SWE-bench Verified / LiveCodeBench: no verified public score found

Long context (Flash-Next):

- AA-LCR: **79.7%** (#74) (benchleader.com; measured within the checkpoint's 256K window); no MRCR/RULER public score found.

Multimodal (Flash-Next):

- MMMU-Pro: **79.8%** (#48) (benchleader.com); RealWorldQA: **88.5%**; AndroidWorld: **84.5%** (Vendor Flash-Next card via respan.ai)

### Normalized scores (1–100)

- **Tool use: 80/100.** TB 2.1 86.1% and GDPval 55.6% are strong for the price, LiveBench Agentic #11; capped by TB 4.0 25.3% and LMArena Agent rank #28.
- **Reasoning: 78/100.** LiveBench Reasoning 87.4%, GPQA 92.3%, AA Index 39.8 (band ~40 → 78–82); held at band floor by Omniscience accuracy 24.5% and CritPt 11.1%.
- **Context window: 78/100.** Managed 1M window (open checkpoint 256K) with AA-LCR 79.7%; capped by the open/managed context discrepancy.
- **Multimodal: 72/100.** Image/video in with MMMU-Pro 79.8% + RealWorldQA 88.5%; text-only output and few independent bench rows cap it.
- **Coding: 78/100.** LMArena WebDev #11 (1636), LiveBench Coding 72.5%, BenchLeader coding category 69; capped by SciCode 50.6%.
- **Cost efficiency: 95/100.** $0.15/$0.47 per 1M with 90% cache discount and open weights — among the cheapest competent models available.
- **Overall Score: 77.2/100.** Mean of the five quality dims (80+78+78+72+78)/5 = 77.2. Best fit: high-throughput cost-sensitive coding/agent workloads with open-weights fallback.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (benchleader.com / Artificial Analysis measurements on the Flash-Next checkpoint, llm-stats.com specs/pricing, respan.ai family comparison, Alibaba Cloud launch blog); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: corrected attribution — all AA/LiveBench rows belong to open **Qwen3.8-Flash-Next**; hosted `qwen3.8-flash` is unranked on BenchLeader (only GDP.pdf 16.6% #30, Epoch AI, new row) as of 29 Sept; ranks refreshed (AA Index 39.8 #49, Omniscience −9.7 #165, LMArena Agent −0.9 #28, TB 4.0 25.3% #40, etc.); price/context re-confirmed ($0.15/$0.47, blended $0.23, 1M managed vs 256K checkpoint); reasoning recalibrated 76 → 78 per AA ~40 → 78–82 band; overall 76.8 → 77.2.
- Future sources: add a new file next to this one using the same headings.
