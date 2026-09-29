# DeepSeek V4.1 Flash — findings by Grok 4.5 (xAI)

- Source: DeepSeek (`deepseek-ai/DeepSeek-V4.1-Flash`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4.1-Flash (also DeepSeek V4.1 Flash; API `deepseek-flash`; no separate Free-tier wording)
- **Short description:** Multimodal 552B-parameter MoE model from DeepSeek using Causal Encoder-Decoder architecture (8B active on input / 16B on output) with native image understanding, 1M context, and strong agentic/coding performance at low cost. Open-weights successor/replacement for V4-Flash line; outperforms prior V4-Pro on many agent benchmarks per vendor.
- **Provider / access:** DeepSeek API (`deepseek-flash`; OpenAI Chat Completions + Anthropic/Responses API compatible at api.deepseek.com); also Hugging Face open weights, multiple hosts (Together, Fireworks, Novita, etc.). Legacy IDs `deepseek-v4-flash` / `deepseek-v4-flash-vision-exp` route here. No verified Free ID on OpenCode Zen.
- **Release / knowledge:** 2026-09-10 release; trained on 45T multimodal tokens (cutoff not publicly detailed beyond pretrain scale).
- **IDs:** `deepseek-ai/DeepSeek-V4.1-Flash` (HF); API `deepseek-flash` (no Free ID exists on Zen)
- **Context window:** 1M tokens total (max output 384K); verified via official API docs, HF model card, and Artificial Analysis.
- **Modalities:** text + image in; text out; reasoning yes (controllable effort 1-100 / low-high-max); tool calls yes; JSON mode yes; FIM/prefix in non-thinking.
- **Pricing (as of 2026-09-29):** Off-peak: cache-hit input $0.003 / miss $0.15 / output $0.60 per 1M; Peak (Mon-Fri 01:00-04:00 & 06:00-10:00 UTC): double ($0.006 / $0.30 / $1.20). Paid only (no free tier); open weights free to self-host (privacy/self-host caveat applies vs API).
- **Architecture:** 552B backbone MoE (+~196B Engram) with 1 shared + 384 routed experts (6 active routed); Causal Encoder-Decoder (20+20 layers); active 8B prefill / 16B decode; MIT open-weights license; proprietary API hosting.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (DeepSeek HF model card / max effort, DSH Minimal harness; also ~88-90% across scaffolds; Vals independent ~74.5% different trials)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found** (AA Index component; one aggregator lists ~1328 Elo unconfirmed primary)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** (AutomationBench 54.8% vendor max effort)
  Reasoning / knowledge:
- GPQA Diamond: **90.9%** (DeepSeek HF model card, max effort Pass@1)
- HLE: **36.8%** (39.1% text-only subset; DeepSeek HF, max effort)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **39** (AA max-effort Reasoning; rank ~#7-28 range among tracked / open-weight peers)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
  Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found** (Vals lists related but not primary)
- DeepSWE / Coding Index / other: **74.2%** resolved DeepSWE v1.1 (DeepSeek HF max effort, mini-SWE harness; 65-74% across scaffolds); Codeforces rating **3471**; Terminal-Bench 3.0 **30.0%**, 4.0 **31.2%** (vendor)
  Long context:
- no long-context retrieval reported (1M window supported/extended in pretrain; no MRCR/RULER/GraphWalks % at length found)

### Normalized scores (1-100)

- **Tool use: 92/100.** Terminal-Bench 2.1 90.6% frontier-tier (TB2.1 ~88%+ maps 90-100); AutomationBench 54.8% solid; capped by weaker TB 3.0/4.0 (30-31%) and missing Tau/GDPval primaries.
- **Reasoning: 88/100.** GPQA Diamond 90.9% frontier (90%+ =90-100); HLE 36.8% near-frontier mid (40%+ target); AA Index 39 supportive; capped by HLE below absolute top and missing CritPt/LCR.
- **Context window: 95/100.** Tier >=1M =95-100 (verified 1M total/API/HF/AA); 100 reserved for >=98% retrieval at 512K+ (none reported).
- **Multimodal: 65/100.** Native image in + text out (maps 60-70); no video/audio/PDF-native or non-text out confirmed.
- **Coding: 93/100.** DeepSWE 74.2% frontier (74%+ =90-100); TB2.1 90.6% excellent agentic coding; Codeforces 3471 strong; capped by missing SWE-bench Verified/LiveCodeBench/SciCode and lower TB4.0.
- **Cost efficiency: 96/100.** Off-peak ~$0.15/$0.60 (cache $0.003) extremely low (near $0.10/$0.20 band ~97-99; peak still competitive); $0 self-host open weights =100 potential but API evaluated.
- **Overall Score: 86.6/100.** Mean of five non-cost dims (92+88+95+65+93)/5 = 86.6 (half-up); best-fit for cost-efficient long-context multimodal coding/agentic workloads and high-throughput tool use (self-host or off-peak API).

---

## Signature

- Provided by: **Grok (xAI/grok-4.5)** — 2026-09-29
- Method: Fresh public internet research (DeepSeek official news/API docs/HF model card + tech report links, Artificial Analysis, secondary confirmations from MarkTechPost/DataCamp/Vals/aggregators); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
