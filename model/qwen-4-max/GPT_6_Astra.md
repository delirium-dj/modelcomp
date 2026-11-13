# Qwen4-Max-Preview — findings by GPT 6 Astra

- Source: Alibaba / `qwen4-max-preview`
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen4-Max-Preview
- **Short description:** Alibaba's preview multimodal model for coding, document work and agents. The existing `qwen-4-max` subject is researched using the actual `qwen4-max-preview` ID; no separate generally available bare `qwen4-max` endpoint was verified.
- **Provider / access:** Alibaba Token Plan, supporting OpenAI Chat Completions/Responses and Anthropic Messages protocols. Dedicated base host `https://token-plan.ap-southeast-1.maas.aliyuncs.com`. [Official documentation](https://www.alibabacloud.com/help/en/model-studio/qwen4-max-preview).
- **Release / knowledge:** Preview runs from **2026-11-11 10:00 through 2026-11-25 24:00 UTC+8**, after which this preview is scheduled to retire. Knowledge cutoff not disclosed in the consulted sources.
- **IDs:** `qwen4-max-preview`; independent evaluator labels it `qwen/qwen4-max-preview`. No Zen Free ID verified; no preview-to-final equivalence is assumed.
- **Context window:** **1M tokens / 393,216 maximum output tokens**, with thinking and final answer sharing the output budget, verified by Alibaba.
- **Modalities:** Text, image and video input; text output. Function calling, web search, JSON Object/Schema; thinking defaults to Xhigh, with Low and Medium also supported.
- **Pricing (as of 2026-11-13):** **Token Plan subscription only; no pay-as-you-go API tariff**, per Alibaba. Offloop reports international Lite at $6/month with a temporary $3 new-user offer; per-token equivalence and workload limits are not inferred from that subscription. [Pricing coverage](https://offloop.org/learn/qwen-4-max-preview-test).
- **Architecture:** Proprietary preview; parameter count and downloadable weights not verified.

### Raw benchmarks found

Primary measurement source: [Stealth Models' exact-preview evaluation](https://stealthmodels.com/benchmarks/models/qwen4-max-preview), dated 2026-11-11. This is a small bespoke planning/SVG suite, not a substitute for major benchmark coverage; its composites are not ModelComp scores.

Agent / tool use:

- Foresight: **57.5/100**, **#14/54**, survived **1/3** levels; sequential threat anticipation and planning.
- Latch: **67.3/100**, **#21/55**, cleared **5/5** levels; sequential cooperative-planning game.
- Terminal-Bench 2.1, Tau3-Banking/Tau2-Bench, GDPval-AA, Claw-Eval/ClawProBench and Toolathon/MCP-Atlas/SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- StealthMark: **58.8/100**, **#12/58**; General Intelligence subscore **54.6/100**, from the evaluator's nine-result suite.
- Newton's Mirror: **48.8/100**, physical/spatial SVG task.
- GPQA Diamond, HLE, LCR/MLCR, CritPt, Artificial Analysis Intelligence Index and Omniscience accuracy/hallucination rate: no verified public score found. Forecasts for unreleased Qwen4 variants are not measurements.

Coding:

- SVG construction results: Selfie **75.9/100**, Beach **78.4/100**, Pelican **77.3/100**; generated artifacts are linked by the evaluator. These are narrow visual-code outputs, not repository engineering success rates.
- GameFeel RE: **10.3/100**, reported with the original result links by [Offloop](https://offloop.org/learn/qwen-4-max-preview-test); this tests judgments about proposed game changes, not code-generation pass rate.
- SWE-bench Verified/SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench and DeepSWE: no verified public score found.

Long context:

- Official **1M-token** limit; no verified full-window retrieval or MRCR/RULER/GraphWalks result found.

Multimodal:

- Stealth Models Visual Intelligence: **66.3/100**, construction-focused rather than an image/video comprehension benchmark. Input modalities are independently confirmed by Alibaba.

### Normalized scores (1–100)

- **Tool use: 67/100.** Measured multistep planning and documented tools support a provisional mid-tier rating; no API-tool or long-horizon engineering suite was verified.
- **Reasoning: 62/100.** StealthMark general reasoning 54.6 and mixed planning results provide narrow direct evidence; broad knowledge benchmarks are absent.
- **Context window: 95/100.** Official 1M capacity reaches the top capacity tier; no retrieval measurement supports 100.
- **Multimodal: 80/100.** Official image/video input reaches the video-input tier, capped by little direct perception evidence and text-only output.
- **Coding: 68/100.** Scored SVG artifacts establish some visual-code capability, but the small suite and absent repository tests make this provisional.
- **Cost efficiency: 80/100.** Provisional subscription-value judgment; low advertised entry pricing is offset by credit quotas, preview expiry and no comparable per-token tariff.
- **Overall Score: 74/100.** Half-up mean: (67 + 62 + 95 + 80 + 68) / 5 = 74.4 → 74. Evidence supports trying the preview for visual prototypes; the broad-quality rating remains provisional and cost is excluded.

---

## Signature

- Provided by: **GPT 6 Astra (agentrouter/gpt-6-astra)** — 2026-11-13
- Method: Fresh public search, exact-ID Alibaba specifications, primary Stealth Models measurements and source-linked launch testing. Preview results were not attributed to an unreleased final model. No peer findings were used. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Alibaba Cloud: Qwen4-Max-Preview](https://www.alibabacloud.com/help/en/model-studio/qwen4-max-preview)
  - [Stealth Models: exact-preview benchmark results and artifacts](https://stealthmodels.com/benchmarks/models/qwen4-max-preview)
  - [Offloop: preview tests, GameFeel source links and subscription pricing](https://offloop.org/learn/qwen-4-max-preview-test)
- Future sources: add a separate signed findings file using the same headings.
