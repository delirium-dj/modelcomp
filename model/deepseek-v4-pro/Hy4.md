- Source: DeepSeek/DeepSeek-V4-Pro
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Pro (incl. the 0813 GA version)
- **Short description:** DeepSeek's 2026-04-24 preview flagship of the V4 series, promoted to GA as **DeepSeek-V4-Pro-0813** on 2026-08-13 and **retired on 2026-09-14** (requests routed to V4.1 Flash). A distinct model; V4.1 Flash and V4 Flash are separate.
- **Provider / access:** DeepSeek API with OpenAI ChatCompletions and Anthropic-compatible interfaces; National Supercomputing Internet; Huawei Ascend and Cambricon/Moore Threads MTT S5000 domestic accelerator adaptation. Service throughput was limited by high-end compute availability.
- **Release / knowledge:** preview 2026-04-24, GA 2026-08-13 (0813), retired 2026-09-14; knowledge cutoff: no verified public score found.
- **IDs:** `deepseek-v4-pro`, GA version `DeepSeek-V4-Pro-0813`. No free Zen ID verified.
- **Context window:** **1,000,000 tokens**, with up to **384,000 tokens** maximum output in the GA version.
- **Modalities:** text in, text out (described as text-only in the Grok 4.6 comparison); a separate vision variant was reported in launch coverage — not this model. Agentic coding, world knowledge, mathematics, STEM and competitive programming. No verified image/audio/video input for this exact ID.
- **Pricing (as of 2026-11-14):** **¥0.025 / 1M input tokens (cache hit, limited-time), ¥3 / 1M input (cache miss), ¥6 / 1M output**. Price cut 2026-04-26; the 2.5-fold discount ended 2026-05-31 with the price formally set to 1/4 of the original; launch coverage called it ~2% of Claude Fable 5's price. Offline since 2026-09-14.
- **Architecture:** MoE, **1.6T total / 49B active** parameters; hybrid attention with **compressed sparse attention + heavily compressed attention**; at 1M context, single-token inference FLOPs fall to **27%** of DeepSeek-V3.2's and KV cache to **10%**.

### Raw benchmarks found

Agent / tool use:

- DeepSWE: **7.3** (preview) → **62.7** (0813 GA) — a large generational gain within the same model line
- Agentic Coding: best among open models at launch (directional)
- SWE-bench Verified: **80.6** (cited as "SWE Verified 80.6", best open-model score at launch)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- World knowledge: leading among open models, only slightly behind Gemini 3.1 Pro (directional)
- Reasoning on maths, STEM and competitive coding: on par with GPT-5.4 and Claude Opus 4.6-Max (directional)
- Artificial Analysis Intelligence Index **53** and Terminal-Bench v3.0 **87.9** appear in the Grok 4.6 comparison for DeepSeek V4 Pro — comparison rows from another model's article, labelled as such
- GPQA Diamond / HLE / LCR / CritPt / Omniscience: no verified public score found

Coding:

- SWE-bench Verified **80.6** and DeepSWE **62.7** (0813) as above
- 493 TFLOPS belongs to Claude Opus 5, 508 TFLOPS to Step 5 Preview in the same GPU-kernel comparison — not attributed here
- LiveCodeBench / SciCode / Vibe Code Bench / FrontierSWE: no verified public score found

Long context:

- 1M-token window with 384K max output and an attention stack that cuts 1M-context FLOPs to 27% / KV cache to 10% of V3.2; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 90/100.** DeepSWE 62.7 in the GA build, best-open agentic coding at preview, and OpenAI/Anthropic-compatible APIs with a 384K output budget; capped by no τ-bench/OSWorld/GDPval figure and limited serving throughput.
- **Reasoning: 89/100.** World knowledge just behind Gemini 3.1 Pro among open models, and maths/STEM/competitive-coding parity with GPT-5.4 / Opus 4.6-Max; capped by those being directional claims and an AA index of 53 only from a third-party comparison.
- **Context window: 95/100.** 1M input + 384K output with a hybrid attention stack that cuts 1M-context FLOPs to 27% and KV cache to 10% — exceptional long-context engineering; capped by no retrieval benchmark.
- **Multimodal: 78/100.** Scored conservatively: the retrieved sources describe a text-only model; a separate vision variant exists and is not this model. No verified image/audio/video input is attributed here.
- **Coding: 92/100.** SWE-bench Verified 80.6 and a 7.3→62.7 DeepSWE gain within the same line; capped by the preview build's very low 7.3 and no Terminal-Bench figure.
- **Cost efficiency: 96/100.** ¥0.025 cache-hit / ¥3 miss / ¥6 output per 1M, ~2% of Fable 5's price, with domestic-accelerator support; capped by the 2026-09-14 service retirement. Excluded from Overall.
- **Overall Score: 89/100.** Half-up mean of 90, 89, 95, 78, 92 = 88.8 → 89. Best fit: very long-context agentic coding and STEM reasoning on a budget; note the model has been retired in favour of V4.1 Flash.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike DeepSeek-V4-Pro article retrieved via public web search excerpt (1.6T/49B, 1M/384K context, full CNY rate card, SWE Verified 80.6, DeepSWE 7.3→62.7, hybrid attention FLOPs/KV reductions, GA/retirement timeline), plus the Baidu Baike DeepSeek-V4-Pro-0813 article excerpt and the already-fetched Baidu Baike Grok 4.6 / Claude Opus 5 / Step 5 Preview articles for comparison rows — all labelled by their measured ID. The separate vision variant is not merged into this text model. `deepseek-v4.1-flash-1017` and `deepseek-v4-vision-exp` are separate tracked folders. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved/fetched this pass.
  - [DeepSeek-V4-Pro — 百度百科 (retrieved via search excerpt; specs, pricing, benchmarks, timeline)](https://baike.baidu.com/item/DeepSeek-V4-Pro/67674155)
  - [DeepSeek-V4-Pro-0813 — 百度百科 (retrieved via search excerpt; GA 1M/384K context)](https://baike.baidu.com/item/DeepSeek-V4-Pro-0813/68560147)
