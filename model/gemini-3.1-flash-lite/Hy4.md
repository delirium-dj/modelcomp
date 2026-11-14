- Source: Google/Gemini 3.1 Flash-Lite
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite
- **Short description:** Google's 2026-03-03 lightweight model, billed as the fastest and most cost-efficient Gemini 3 series model. A distinct model; per the project identity roster the bare `gemini-3.1-flash` is a phantom that resolves here (the only 3.1 Flash text SKU), while `gemini-3.5-flash-lite` and `gemini-2.5-flash-lite` are separate.
- **Provider / access:** Gemini API preview in Google AI Studio; Vertex AI for enterprises; Gemini Enterprise Agent Platform (GA, deprecation no earlier than 2027-05-07). Adopted by Latitude, Cartwheel and Whering.
- **Release / knowledge:** 2026-03-03; knowledge cutoff: no verified public score found.
- **IDs:** `gemini-3.1-flash-lite`. No free Zen ID verified.
- **Context window:** **1,000,000 tokens** (secondary CSDN hands-on); the Gemini 3.1 series article states 2M for the family — reported separately, not merged.
- **Modalities:** native multimodal input (text/image, per secondary coverage), text out; standard "thinking level" control (minimal/low/medium/high per secondary). No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** **$0.25 / 1M input, $1.50 / 1M output**.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. First-token latency improved **2.5x** and output speed **+45%** vs the prior generation.

### Raw benchmarks found

Agent / tool use:

- PinchBench (OpenClaw real tasks): **#1 in task success rate** — reported in the Gemini 3.1 Pro article as a comparison row, labelled by harness
- First-token response **2.5x faster**, output speed **+45%** (relative vendor claims)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **86.9%**
- MMMU-Pro: **76.8%**
- Thinking levels standard (qualitative)
- HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found

Coding:

- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M window (secondary) / 2M family figure; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 85/100.** #1 PinchBench task success, 2.5x faster first token, +45% output speed and enterprise GA availability; capped by no scored agent harness beyond PinchBench.
- **Reasoning: 87/100.** GPQA Diamond 86.9% and MMMU-Pro 76.8% at a Flash-Lite price point; capped by no HLE/ARC figure.
- **Context window: 91/100.** 1M context (secondary) with a 2M family ceiling, no long-context surcharge documented; capped by conflicting figures and no retrieval benchmark.
- **Multimodal: 86/100.** Native multimodal input with 76.8% MMMU-Pro; capped by text-only output, no verified audio/video input, and no published video/audio benchmark.
- **Coding: 80/100.** General coding capability of the Gemini 3.1 generation; capped by zero published coding benchmark scores for this exact ID.
- **Cost efficiency: 96/100.** $0.25/$1.50 per 1M with 2.5x faster first token and +45% throughput — exceptional high-volume economics. Excluded from Overall.
- **Overall Score: 86/100.** Half-up mean of 85, 87, 91, 86, 80 = 85.8 → 86. Best fit: very high-volume, latency-sensitive multimodal QA and agent tasks on a budget.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Gemini 3.1 Flash-Lite article retrieved via public web search excerpt (release, $0.25/$1.50 pricing, GPQA Diamond 86.9%, MMMU-Pro 76.8%, 2.5x/45% speed gains, enterprise adopters), the Baidu Baike Gemini 3.1 Pro article (already fetched) for the PinchBench #1 comparison row, and secondary CSDN / Google Cloud docs excerpts for the 1M context and GA deprecation date — labelled secondary. The 2M family context figure is reported separately, not merged. Identity handling follows the project's generated roster: bare `gemini-3.1-flash` is a deleted phantom folder that resolves here and is never recreated; `qwen-3.5-flash-lite` is an unrelated parked phantom. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved/fetched this pass.
  - [Gemini 3.1 Flash-Lite — 百度百科 (retrieved via search excerpt; pricing, benchmarks, speed)](https://baike.baidu.com/item/Gemini%203.1%20Flash-Lite/67450554)
  - [Gemini 3.1 Pro — 百度百科 (PinchBench comparison row, already fetched)](https://baike.baidu.com/item/Gemini%203.1%20Pro/67406132)
