- Source: Tencent Hunyuan/Hy3
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 (Tencent Hunyuan Hy3)
- **Short description:** Tencent Hunyuan's 2026-07-06 Apache 2.0 open MoE model — the first model trained after the team's 2026 infrastructure rebuild (led by chief AI scientist Yao Shunyu), with strong agent/long-context/conversation gains. A distinct model; `hy3-preview`, `hy4` (my own model's subject folder) and `hy4-preview` are separate.
- **Provider / access:** Apache 2.0 open weights; TokenHub API, OpenRouter / Hermes / Kilo / Cline, Tencent WorkBuddy / CodeBuddy, 元宝, Marvis, ima; extreme-quantisation build released 2026-07-14; Intel Xeon 6 / Gaudi 2E and domestic chip adaptations.
- **Release / knowledge:** preview 2026-04-23, GA 2026-07-06; knowledge cutoff: no verified public score found.
- **IDs:** `hy3`. No free Zen ID verified.
- **Context window:** **256,000 tokens**.
- **Modalities:** text in, text/code out; multi-turn dialogue with improved coreference resolution, ellipsis recovery and multi-turn constraint inheritance; reasoning, agents, long context. No verified image/audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** **¥1 / 1M input, ¥4 / 1M output, ¥0.25 / 1M cache hit** on TokenHub; a secondary Citi-report excerpt quotes the preview at ¥1.2/¥4 — different phase, reported separately.
- **Architecture:** MoE, **295B total / 21B active** parameters; Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- In WorkBuddy, task success rate rose **72% → 90%** and average task time fell **34%** (product-level A/B, not a public benchmark)
- Total call volume grew **>68x** over the previous generation one week after launch; **#1 on OpenRouter's global call-volume chart**
- >**60%** of WorkBuddy users who choose a model picked Hy3 (adoption)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Significant gains in reasoning, agents and long context over the preview (directional)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 256K with improved multi-turn constraint inheritance; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 87/100.** 72%→90% task success in a production agent product, #1 OpenRouter call volume, 68x growth and broad IDE/product integration; capped by those being product/adoption metrics rather than public benchmarks.
- **Reasoning: 84/100.** Post-rebuild gains in reasoning and multi-turn constraint handling; capped by no published numeric reasoning benchmark for this exact ID.
- **Context window: 87/100.** 256K with explicit multi-turn coreference/constraint engineering; capped by no retrieval benchmark.
- **Multimodal: 72/100.** Scored conservatively: no verified image/audio/video input was documented for this exact ID (vision arrived with Hy4).
- **Coding: 83/100.** CodeBuddy/WorkBuddy coding-agent deployment and 21B-active efficiency; capped by no published coding benchmark score.
- **Cost efficiency: 96/100.** ¥1/¥4 per 1M with ¥0.25 cache hits, free Apache 2.0 weights, 21B active params and extreme-quantisation support. Excluded from Overall.
- **Overall Score: 83/100.** Half-up mean of 87, 84, 87, 72, 83 = 82.6 → 83. Best fit: very high-volume conversational and agent workloads in Tencent's ecosystem at minimal cost; superseded by Hy4.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Hy3 article retrieved via public web search excerpt (release, 295B/21B MoE, 256K context, Apache 2.0, TokenHub ¥1/¥4/¥0.25 pricing, WorkBuddy 72%→90% success and −34% time, 68x call growth, OpenRouter #1, platform integrations), plus the Baidu Baike 腾讯混元 excerpt for the Hy4-preview lineage — explicitly a separate model. A secondary Citi-report excerpt quotes the preview's ¥1.2/¥4 phase pricing, reported separately. `hy3-preview`, `hy4` and `hy4-preview` are separate folders, never merged. Product/adoption metrics are labelled as such, not as benchmarks; rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Hy3 — 百度百科 (retrieved via search excerpt; specs, pricing, WorkBuddy results, adoption)](https://baike.baidu.com/item/Hy3/68175158)
  - [腾讯混元 — 百度百科 (retrieved via search excerpt; generation lineage)](https://baike.baidu.com/item/腾讯混元/67262333)
