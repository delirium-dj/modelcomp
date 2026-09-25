# Qwen3.8 Flash — findings by Kimi K3

- Source: Alibaba/Qwen / Qwen3.8 Flash (`qwen3.8-flash`; open checkpoint `Qwen/Qwen3.8-Flash-Next`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Flash
- **Short description:** Qwen's fast/cheap production tier of the 3.8 family — the managed QwenCloud/OpenRouter API model based on the open-weight Qwen3.8-Flash-Next checkpoint (125B params). Released August 26, 2026; independently benchmarked by Artificial Analysis.
- **Provider / access:** QwenCloud (docs.qwencloud.com), OpenRouter, Novita (`qwen3.8-flash`, OpenAI-compatible); open weights on Hugging Face (`Qwen/Qwen3.8-Flash-Next`).
- **Release / knowledge:** Released 2026-08-26 (llm-stats.com, benchleader.com); knowledge cutoff not verified.
- **IDs:** `qwen/qwen3.8-flash`; HF `Qwen/Qwen3.8-Flash-Next` (no Free ID on OpenCode Zen verified).
- **Context window:** 1M tokens in / 131K out for the managed API (llm-stats.com); the open Flash-Next checkpoint is measured at 256K context (benchleader.com) — treat 1M as managed-service config.
- **Modalities:** text/image/video in; text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** $0.15/M input, $0.016/M cached, $0.47/M output (Novita via llm-stats.com); blended $0.23/M (benchleader.com).
- **Architecture:** 125B parameters (llm-stats.com); open weights for Flash-Next; managed API proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (AA): **86.1%** (#21) — Terminal-Bench 4.0 (AA): 25.3% (#35) (benchleader.com / Artificial Analysis)
- GDPval (AA): **55.6%** (#18) (benchleader.com)
- Tau2/Tau3-Banking (AA): **45.4%** (#14) (benchleader.com)
- LiveBench Agentic Coding: **61.6%** (#11); LMArena Agent: −0.1 (#25) (benchleader.com)

Reasoning / knowledge:

- LiveBench Reasoning: **87.4%** (#23); LiveBench overall: **76.2%** (#27) (benchleader.com)
- GPQA Diamond (AA): **92.3%** (#36) (benchleader.com)
- HLE (AA): **38.0%** (#81) (benchleader.com)
- CritPt: **11.1%** (#85) (benchleader.com)
- AA Intelligence Index: **39.8** (#45) (benchleader.com)
- AA-Omniscience: **−9.7 index** (#159) — accuracy 24.5% (#207), non-hallucination 54.7% (benchleader.com)
- LiveBench Mathematics: **85.8%**; LiveBench Instruction Following: **77.1%** (#5) (benchleader.com)

Coding:

- LMArena WebDev: **1636** (#11) (benchleader.com)
- LiveBench Coding: **72.5%** (#49) (benchleader.com)
- SciCode (AA): **50.6%** (#79) (benchleader.com)
- SWE-bench Verified / LiveCodeBench: no verified public score found

Long context:

- AA-LCR: **79.7%** (#73) (benchleader.com); no MRCR/RULER public score found.

Multimodal:

- MMMU-Pro: **79.8%** (#48) (benchleader.com)

### Normalized scores (1–100)

- **Tool use: 80/100.** TB 2.1 86.1% and GDPval 55.6% are strong for the price, LiveBench Agentic #11; capped by TB 4.0 25.3% and LMArena Agent rank #25.
- **Reasoning: 76/100.** LiveBench Reasoning 87.4%, GPQA 92.3%, AA Index 39.8; capped hard by Omniscience accuracy 24.5% and CritPt 11.1%.
- **Context window: 78/100.** Managed 1M window (open checkpoint 256K) with AA-LCR 79.7%; capped by the open/managed context discrepancy.
- **Multimodal: 72/100.** Image/video in with MMMU-Pro 79.8%; text-only output and single bench row cap it.
- **Coding: 78/100.** LMArena WebDev #11 (1636), LiveBench Coding 72.5%; capped by SciCode 50.6%.
- **Cost efficiency: 95/100.** $0.15/$0.47 per 1M with 90% cache discount and open weights — among the cheapest competent models available.
- **Overall Score: 77/100.** Mean of the five quality dims (80+76+78+72+78)/5 = 76.8 → 77. Best fit: high-throughput cost-sensitive coding/agent workloads with open-weights fallback.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchleader.com / Artificial Analysis measurements, llm-stats.com specs/pricing, Alibaba Cloud launch blog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
