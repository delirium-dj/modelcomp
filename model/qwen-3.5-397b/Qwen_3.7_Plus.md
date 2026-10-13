# Qwen 3.5 397B — findings by Qwen 3.7 Plus
- Source: Alibaba/Qwen3.5-397B-A17B (`opencode/qwen-3.5-397b`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 397B (Qwen3.5-397B-A17B)
- **Short description:** Alibaba's February 2026 Qwen3.5-series flagship open-weights MoE model (397B total / 17B active parameters) — a natively multimodal early-fusion model supporting reasoning and non-reasoning modes in a single model. First Qwen open-weights model with native vision input (image and video). Achieves 91.3% on AIME 2026, 89.3% on GPQA Diamond, 76.4% on SWE-bench Verified, 83.6% on LiveCodeBench v6, 95.6% on τ²-Bench, and 52.5% on Terminal-Bench 2.0. GDPval-AA ELO 1,221. AA-Omniscience Index -32 (88% hallucination rate — high vs. peers). Apache 2.0 license. 262K native context (extensible to ~1M hosted). 85.1 tokens/sec output speed.
- **Provider / access:** Alibaba (Qwen Chat, API). Open weights (Apache 2.0) — self-hostable. Available via DeepInfra ($0.45/$3.00 per 1M), Novita ($0.60/$3.60 per 1M), and 6+ providers.
- **Release / knowledge:** February 16, 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/qwen-3.5-397b`
- **Context window:** 262,144 tokens native (extensible to ~1,010,000; 1M hosted)
- **Modalities:** Text, image, video in; text out (natively multimodal, early fusion)
- **Pricing:** $0.60/$3.60 per 1M in/out (Alibaba API); free self-host (Apache 2.0)

### Raw benchmarks found

Agent / tool use: τ²-Bench 95.6% · GDPval-AA ELO 1,221 · Terminal-Bench 2.0 52.5% · BrowseComp 69%.

Reasoning / knowledge: AIME 2026 91.3% · GPQA Diamond 88.4% / 89.3% · HLE (improved +12 p.p. over Qwen3 235B) · AA Intelligence Index 18–45 (varies by evaluation mode) · AA-Omniscience Index -32 (accuracy 30%, hallucination 88%) · IFBench (+28 p.p. over Qwen3 235B).

Coding: SWE-bench Verified 76.4% · LiveCodeBench v6 83.6% · SWE-bench Multilingual 69.3% · AA Coding Index 48.2% · TerminalBench Hard (+27 p.p. over Qwen3 235B).

Multimodal: Natively multimodal (image + video input). MMMU ~80% class (from Qwen3.5 family benchmarks). First Qwen open-weights model with native vision.

Long context: 262K native, extensible to ~1M hosted.

### Normalized scores (1–100)

- **Tool use: 62/100.** τ²-Bench 95.6% is outstanding. GDPval-AA ELO 1,221 shows strong agentic knowledge work. BrowseComp 69% is moderate. Terminal-Bench 2.0 52.5% is modest for agentic coding.
- **Reasoning: 68/100.** AIME 2026 91.3% and GPQA Diamond 89.3% are outstanding for an open-weights model. Significant improvements over Qwen3 235B across reasoning benchmarks. However, AA-Omniscience Index -32 (88% hallucination rate) is a major concern — much higher than peers like Kimi K2.5 (-11) and GLM-5 (-1).
- **Context window: 75/100.** 262K native context is good. Extensible to ~1M when hosted. Trails models with native 1M context.
- **Multimodal: 55/100.** First Qwen open-weights model with native vision (image + video). Early-fusion multimodal architecture. Limited multimodal benchmark coverage available.
- **Coding: 72/100.** SWE-bench Verified 76.4%, LiveCodeBench v6 83.6%, and SWE-bench Multilingual 69.3% are strong. TerminalBench Hard improved +27 p.p. over predecessor. AA Coding Index 48.2% is moderate.
- **Cost efficiency: 80/100.** $0.60/$3.60 per 1M is moderate for API. Apache 2.0 open weights enable free self-hosting. 85.1 tokens/sec is above average. 95M output tokens per Intelligence Index task is fairly concise.
- **Overall Score: 66.4/100.** Mean of Tool (62) + Reasoning (68) + Context (75) + Multimodal (55) + Coding (72) = 332/5 = 66.4. Adjusted to 65 given high hallucination rate (AA-Omniscience -32, 88% hallucination) which limits real-world reliability despite strong benchmark numbers.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
