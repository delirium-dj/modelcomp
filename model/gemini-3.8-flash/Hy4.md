- Source: Google DeepMind/Gemini 3.8 Flash
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's September 2026 Flash-tier model (internal codename "Skimaki"), the third Flash release in six weeks, targeting long-horizon software engineering, autonomous agents and complex enterprise workflows. An iteration on Gemini 3.7 Flash, not a base-model generational change. A distinct SKU; the restricted `gemini-3.8-flash-cyber` variant is a separate Fairwind-programme release, not this model.
- **Provider / access:** Google AI Studio, Android Studio, Gemini API; Gemini Enterprise for business; Gemini app / Search AI Mode / Google Sheets for AI Pro and Ultra subscribers. Chat Completions-style Gemini API. No free Zen ID verified.
- **Release / knowledge:** Listed on the Google DeepMind site 2026-09-02 (internal preview from 2026-08); knowledge cutoff **2026-03** per a launch analysis.
- **IDs:** `gemini-3.8-flash` (vendor-family ID as cited). Cyber sibling: `gemini-3.8-flash-cyber` (Fairwind only).
- **Context window:** 1,000,000 tokens; maximum output 64,000 tokens; adjustable thinking levels; same tool suite as the previous generation (Baidu Baike citing Google's specs). A third-party page lists 1.05M context.
- **Modalities:** text, image, chart and long-video in, text out; native tool use; adjustable reasoning depth; long-running agentic loops with iterative tool calls and self-checking. No verified audio input or non-text output.
- **Pricing (as of 2026-11-14):** **$0.75 / 1M input, $3.75 / 1M output** per two third-party model guides (a 3:1 blended ~$1.50); one evaluation page reports a Datacurve-verified DeepSWE cost of **$2.36 per problem**. No vendor price page was fetched this pass.
- **Architecture:** Proprietary, closed weights; built on Gemini 3.7 Flash with intensified RL/post-training (partly from cyber-domain training). Parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (above Claude Opus 5's 89.1%)
- Terminal-Bench 4.0: **19.1%** (far below Opus 5's 51.8%) — a major generational-harness weakness
- OSWorld 2.0: **59.0%** (Opus 5 75.4%)
- Vals Finance Agent v2: **61.4%**; Harvey legal agent full-task pass rate **10.0%** — both above Claude Opus 5
- Vals Index / RSI: Gemini 4 Argon's 68.90% Vals Index is noted as an improvement over Gemini 3.8 Flash (no exact 3.8 Flash figure)
- High-reasoning output speed: **304.6 tokens/s** — **#1 of 195 models** in Artificial Analysis's comparison group
- Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found (a noted gap vs Opus 5 on GDPval-AA)

Reasoning / knowledge:

- HLE-Verified: **54.9%** (Opus 5 54.4%, GPT-5.6 Sol 54.5%)
- GPQA: **95.4%** per a third-party evaluation page (tied with GPT-6.1 Sol)
- Artificial Analysis Intelligence Index v5: **31.0**, overall rank **#18** per a third-party evaluation page
- LCR / MLCR / CritPt / Omniscience: no verified public score found

Coding:

- DeepSWE v1.1: **73.7%** (Gemini 3.7 Flash 65.3%, Claude Opus 5 74.0%); independently verified by Datacurve at **74%** pass rate, ~$2.36 per problem
- Terminal-Bench 2.1 89.4% and Terminal-Bench 4.0 19.1% as above
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / FrontierSWE: no verified public score found

Long context:

- CharXiv Reasoning (chart understanding): **86.2%** — above Claude Opus 5
- LVBench long-video understanding: **87.8%** — above Claude Opus 5
- CyberGym real-world vulnerability discovery across 20+ languages: the **Cyber** sibling scored **71%** (Gemini 3.7 Flash 58.9%, Gemini 3.5 Flash Cyber 46.6%) and produced 2.6x more correct Chrome patches than the best much-larger commercial model — measured under the Cyber variant ID, cited as lineage, not this model's score
- MRCR / RULER / GraphWalks: no verified public score found

### Normalized scores (1–100)

- **Tool use: 91/100.** 89.4% Terminal-Bench 2.1, strong Vals Finance Agent and legal-agent results, and a #1-of-195 output speed; capped by a severe 19.1% Terminal-Bench 4.0 and 59.0% OSWorld 2.0, plus documented instability on complex long tasks.
- **Reasoning: 89/100.** HLE-Verified 54.9% and GPQA 95.4% at Flash-tier cost; capped by a low AA Intelligence Index v5 (31.0, rank #18) and by higher reasoning-token consumption than 3.7 Flash.
- **Context window: 92/100.** A verified 1M-token window with 64K output, adjustable thinking and long-running agentic loops; capped by no published MRCR/RULER/GraphWalks retrieval figure.
- **Multimodal: 93/100.** Excellent chart (CharXiv 86.2%) and long-video (LVBench 87.8%) comprehension, both above Opus 5; capped by text-only output and no verified audio input/output.
- **Coding: 89/100.** DeepSWE v1.1 73.7% (Datacurve-verified 74%) close to Opus 5, plus 89.4% Terminal-Bench 2.1; capped by the 19.1% Terminal-Bench 4.0 collapse and no SWE-bench Verified figure.
- **Cost efficiency: 94/100.** $0.75/$3.75 per 1M is a fraction of flagship pricing, with 304.6 tok/s throughput and a $2.36/problem DeepSWE cost — exceptional value. Excluded from Overall.
- **Overall Score: 91/100.** Half-up mean of 91, 89, 92, 93, 89 = 90.8 → 91. Best fit: cost-sensitive high-throughput software engineering, chart/long-video analysis and enterprise agent workflows — but verify on Terminal-Bench 4.0-class hard agent tasks before production use.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Gemini 3.8 Flash article (official benchmark table, context window, modalities, cyber-variant lineage) plus third-party model guides/evaluation pages for pricing, GPQA, AA index and speed. CyberGym numbers are measured under the `gemini-3.8-flash-cyber` ID and are labelled as lineage, never merged into this model's rows. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Gemini 3.8 Flash — 百度百科 (official benchmarks, context window, modalities, Cyber variant)](https://baike.baidu.com/item/Gemini%203.8%20Flash/68788174)
  - [Gemini 3.8 Flash 价格、参数与上下文 — Model Field Guide](https://www.airedirector.com/model/gemini-3.8-flash)
