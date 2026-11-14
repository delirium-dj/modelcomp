- Source: OpenAI/GPT-5.4 nano
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 nano
- **Short description:** OpenAI's 2026-03-17 smallest GPT-5.4 tier, distilled and architecturally compressed for high-throughput, low-latency tasks — text classification, extraction, ranking and simple coding sub-agents. A distinct SKU; `gpt-5.4-mini`, `gpt-5.4` and `gpt-5-nano` are separate.
- **Provider / access:** API only.
- **Release / knowledge:** 2026-03-17; knowledge cutoff: no verified public score found.
- **IDs:** `gpt-5.4-nano`. No free Zen ID verified.
- **Context window:** **400,000 tokens** per a third-party BenchGecko GPT-5.4 family table; no vendor-verified figure in the retrieved Baike excerpt — reported with provenance.
- **Modalities:** text and image in, text out (OSWorld-Verified visual tasks were evaluated); classification, extraction, ranking, coding sub-agents. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** **$0.20 / 1M input, $1.25 / 1M output** (secondary 智源社区 / 雪球 launch coverage) — labelled secondary, no vendor rate card fetched.
- **Architecture:** Proprietary, closed weights; knowledge distillation and architectural compression from GPT-5.4. Parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified (visual computer tasks): **39.0%**
- Designed as the "outpost / limbs" latency-sensitive executor in agent architectures (qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **82.8%**
- HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found

Coding:

- SWE-Bench Pro: **52.4%**
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 400K window (third-party); no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 80/100.** 39.0% OSWorld-Verified and a deliberate low-latency executor role in agent hierarchies; capped by that modest absolute computer-use score.
- **Reasoning: 84/100.** GPQA Diamond 82.8% at nano pricing — unusually strong for its tier; capped by no HLE/ARC figure.
- **Context window: 84/100.** 400K (third-party) at nano pricing; capped by no vendor-verified figure and no retrieval benchmark.
- **Multimodal: 79/100.** Image input with visual computer-use evaluation; capped by text-only output, no verified audio/video input, and no multimodal benchmark beyond OSWorld.
- **Coding: 83/100.** SWE-Bench Pro 52.4% at nano pricing; capped by no SWE-bench Verified / Terminal-Bench figure.
- **Cost efficiency: 97/100.** $0.20/$1.25 per 1M (secondary) — ~1/4 of mini's price — with high throughput and low latency. Excluded from Overall.
- **Overall Score: 82/100.** Half-up mean of 80, 84, 84, 79, 83 = 82.0 → 82. Best fit: massive-scale classification, extraction, ranking and simple coding sub-agent steps where cost dominates.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike GPT-5.4 nano article retrieved via public web search excerpt (release, distillation, SWE-Bench Pro 52.4%, GPQA Diamond 82.8%, OSWorld-Verified 39.0%, use cases, API-only), plus secondary 智源社区 / 雪球 launch coverage for the $0.20/$1.25 rate card and a third-party BenchGecko family table for the 400K context — all labelled secondary/third-party. GPT-5.4 mini's Terminal-Bench 60.0% and GPT-5.4's 1M context belong to other SKUs and are NOT attributed here. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved/fetched this pass.
  - [GPT-5.4 nano — 百度百科 (retrieved via search excerpt; benchmarks, positioning)](https://baike.baidu.com/item/GPT-5.4%20nano/67499679)
  - [GPT-5.4 mini + nano 突袭 — 智源社区 (retrieved via search excerpt; nano pricing)](https://hub.baai.ac.cn/view/53234)
