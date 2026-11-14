- Source: Xiaomi/Xiaomi MiMo-V2.5 (Free tier)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xiaomi MiMo-V2.5 (Free access tier)
- **Short description:** The free serving tier of Xiaomi's 2026-04-23 open MiMo-V2.5 base model, an agent-first 1M-context omni-modal MoE released under an open licence (the Pro variant uses MIT). Per the project identity roster, `mimo-v2.5-free` "also covers the Xiaomi MiMo-V2.5 Free name — do not scaffold a second folder for it", so this is the canonical tracked folder for that tier name. A distinct model generation from MiMo-V2.6.
- **Provider / access:** Xiaomi MiMo Open Platform / API (free tier), MiMo Desktop, full-series open weights; the V2.5 family saw >10T weekly OpenRouter calls in July 2026 and 31.20T monthly.
- **Release / knowledge:** public beta 2026-04-23 (Pro open-sourced 2026-04-28); knowledge cutoff: no verified public score found.
- **IDs:** `mimo-v2.5-free` (tier slug); family ID `mimo-v2.5`. No free Zen ID verified.
- **Context window:** **1,000,000 tokens**.
- **Modalities:** **text, image, video and audio in; text out** (1M-context omni-modal understanding); agent applications. No verified non-text output. The V2.5-TTS Series and V2.5-ASR are separate SKUs.
- **Pricing (as of 2026-11-14):** **free tier**; secondary developer coverage lists the standard V2.5 at **$1 / 1M input, $2 / 1M output** with cache hits as low as **$0.02 / 1M** — labelled secondary, not the free tier's own rate. Open weights allow free self-hosting.
- **Architecture:** MoE, **trillion-parameter class** total (Baike), with the full V2.5 series open-sourced. Activation count not disclosed. V2.5-Pro UltraSpeed reached ~**1,000 tokens/s** on general GPUs (a separate Pro serving profile, lineage only).

### Raw benchmarks found

Agent / tool use:

- OpenRouter weekly call volume: **>10 trillion tokens** (July 2026); monthly **~31.20T**; **5.39T** in 2026-08-03→09 — real-world adoption, not a benchmark
- Agent-first design with 1M context and omni-modal understanding (qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 1M-token window; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 84/100.** >10T weekly tokens of real production traffic, an agent-first design, 1M context and a MiMo Desktop/Harness ecosystem; capped by no scored agent benchmark for this exact tier.
- **Reasoning: 82/100.** Trillion-parameter-class MoE with omni-modal pretraining; capped by zero published numeric reasoning benchmarks for this ID.
- **Context window: 92/100.** A verified 1M-token window at a free tier — exceptional accessibility; capped by no long-context retrieval measurement.
- **Multimodal: 92/100.** Text, image, video and audio input natively at 1M context; capped by text-only output and no published multimodal benchmark score.
- **Coding: 80/100.** General agent/coding capability of the V2.5 base; capped by no published coding benchmark scores for this exact tier.
- **Cost efficiency: 98/100.** A genuinely free API tier, open weights for self-hosting, $0.02 cache hits (secondary) and 1M context. Excluded from Overall.
- **Overall Score: 86/100.** Half-up mean of 84, 82, 92, 92, 80 = 86.0 → 86. Best fit: very high-volume, cost-zero omni-modal agent workloads; note the newer V2.6 generation and the Pro/UltraSpeed serving profiles.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike 小米MiMo-V2.5 article retrieved via public web search excerpt (public beta, 1M context, four input modalities, trillion-class MoE, full-series open source, OpenRouter call volumes, price adjustment), the Baidu Baike Xiaomi MiMo-V2.5-Pro excerpt for the MIT licence and UltraSpeed lineage (explicitly a separate Pro SKU), and a secondary CSDN article for the $1/$2/$0.02 rate — labelled secondary. The free-tier identity follows the project's generated roster entry for `mimo-v2.5-free` ("do not scaffold a second folder for it"), so no variant folder is created. Pro/TTS/ASR/UltraSpeed figures are labelled lineage, never merged into this tier's rows. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [小米MiMo-V2.5 — 百度百科 (retrieved via search excerpt; specs, 1M context, call volumes)](https://baike.baidu.com/item/%E5%B0%8F%E7%B1%B3MiMo-V2.5/68631931)
  - [Xiaomi MiMo-V2.5-Pro — 百度百科 (retrieved via search excerpt; separate Pro SKU, MIT)](https://baike.baidu.com/item/Xiaomi%20MiMo-V2.5-Pro/67677558)
