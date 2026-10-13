# Qwen 3.5 — findings by Qwen 3.7 Plus
- Source: Alibaba/Qwen 3.5 (`opencode/qwen-3.5`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5
- **Short description:** Alibaba's Qwen 3.5 flagship generation (February 2026) for general and agentic work. The full family spans 8 tiers from 0.8B to 397B-A17B under Apache 2.0, plus hosted Plus/Max tiers. The 397B-A17B flagship (397B total / 17B active MoE with hybrid Gated DeltaNet architecture) achieves 88.4 GPQA Diamond, 91.3 AIME 2026, 83.6 LiveCodeBench v6, 76.4% SWE-bench Verified, 95.6% τ²-bench, and GDPval-AA ELO 1,221. First Qwen open-weights model with native vision input. Natively multimodal (image + video). 256K native context (extensible to ~1M hosted). AA-Omniscience Index -32 (88% hallucination rate). Now superseded by Qwen 3.6 and 3.8 generations.
- **Provider / access:** Alibaba (Qwen Chat, DashScope API). Open weights (Apache 2.0) for most tiers — self-hostable. Hosted Plus/Max tiers are closed-weight.
- **Release / knowledge:** February 16 – March 2, 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/qwen-3.5`
- **Context window:** 256K native (extensible to ~1M hosted); tracked tier unconfirmed, family range 128K–1M
- **Modalities:** Text in/out (multimodal coverage unverified for tracked tier); natively multimodal for 397B flagship (text, image, video)
- **Pricing:** Low-cost Qwen tier; ~$0.54/$3.40 per 1M for 397B on DeepInfra; free self-host (Apache 2.0)

### Raw benchmarks found

Agent / tool use: τ²-bench 86.7–95.6% · GDPval-AA ELO 1,221 · Terminal-Bench 2.0 52.5% · BrowseComp 69%.

Reasoning / knowledge: AIME 2026 91.3% · GPQA Diamond 88.4% · HLE (+12 p.p. over Qwen3 235B) · AA Intelligence Index 18–45 · AA-Omniscience Index -32 (accuracy 30%, hallucination 88%) · IFBench (+28 p.p. over Qwen3 235B).

Coding: SWE-bench Verified 76.4% · LiveCodeBench v6 83.6% · SWE-bench Multilingual 69.3% · AA Coding Index 48.2% · TerminalBench Hard (+27 p.p. over Qwen3 235B).

Multimodal: Native vision (image + video) for 397B flagship. Early-fusion unified architecture. MMMU ~80% class.

Long context: 256K native, extensible to ~1M hosted. Hybrid Gated DeltaNet architecture (75% linear attention, 25% full softmax) enables efficient KV cache.

### Normalized scores (1–100)

- **Tool use: 62/100.** τ²-bench 86.7–95.6% is outstanding. GDPval-AA ELO 1,221 shows strong agentic knowledge work. BrowseComp 69% is moderate. Terminal-Bench 2.0 52.5% is modest.
- **Reasoning: 68/100.** AIME 2026 91.3% and GPQA Diamond 88.4% are outstanding for an open-weights model. Significant improvements over Qwen3 235B. However, AA-Omniscience -32 (88% hallucination) is a major concern.
- **Context window: 75/100.** 256K native context is good. Extensible to ~1M when hosted. Hybrid DeltaNet architecture enables efficient long context.
- **Multimodal: 55/100.** First Qwen open-weights model with native vision (image + video). Early-fusion multimodal architecture. Tracked tier multimodal coverage unverified.
- **Coding: 72/100.** SWE-bench Verified 76.4%, LiveCodeBench v6 83.6%, and SWE-bench Multilingual 69.3% are strong. TerminalBench Hard +27 p.p. over predecessor. AA Coding Index 48.2% is moderate.
- **Cost efficiency: 85/100.** Very competitive pricing. Apache 2.0 open weights enable free self-hosting. 8-tier family from edge (0.8B) to flagship (397B). Best cost-per-quality in class.
- **Overall Score: 66/100.** Mean of Tool (62) + Reasoning (68) + Context (75) + Multimodal (55) + Coding (72) = 332/5 = 66.4. Consistent with Qwen 3.5 397B flagship assessment.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
