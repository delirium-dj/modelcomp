# GPT-5.5 Pro — findings by GPT 6 Astra

- Source: OpenAI / GPT-5.5 Pro
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [findings](../../model-findings.md)

## Model card

- **Name:** GPT-5.5 Pro.
- **Short description:** Extra-compute GPT-5.5 variant for difficult research and professional work; distinct from the base model.
- **Provider / access:** OpenAI Responses API; Batch supported.
- **Release / knowledge:** April 2026; December 1, 2025 knowledge cutoff.
- **IDs:** `openai/gpt-5.5-pro`, snapshot `gpt-5.5-pro-2026-04-23`; no verified Free Zen ID.
- **Context window:** 1,050,000 tokens; maximum output 128,000.
- **Modalities:** Text/image input, text output; medium/high/xhigh reasoning, function calls and structured outputs. Native audio/video absent. Computer use and tool search are unsupported; image generation is a separate tool.
- **Pricing (as of 2026-10-03):** $30 input / $180 output per million tokens; no cached-input rate listed.
- **Architecture:** Proprietary; parameter counts undisclosed. Specifications: [official model documentation](https://developers.openai.com/api/docs/models/gpt-5.5-pro).

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **90.1%**; GDPval wins/ties: **82.3%**, not GDPval-AA Elo. OpenAI research environment, xhigh reasoning: [launch evaluations](https://openai.com/index/introducing-gpt-5-5/).
- Terminal-Bench 2.1, Tau3/Tau2, GDPval-AA, Claw-Eval/ClawProBench, Toolathlon, MCP Atlas and SWE Atlas: no verified public score found for this exact Pro variant.

Reasoning / knowledge:

- HLE: **43.1% without tools**, **57.2% with tools**; FrontierMath Tier 1–3 **52.4%**, Tier 4 **39.6%**; GeneBench **33.2%**. Same [vendor evaluation table](https://openai.com/index/introducing-gpt-5-5/).
- GPQA Diamond, LCR/MLCR, CritPt, AA Intelligence Index, BenchLM and Omniscience: no verified public score found for Pro.

Coding:

- SWE-bench Verified/Pro, LiveCodeBench, SciCode, Vibe Code Bench, DeepSWE and Coding Index: no verified public score found for Pro. The launch table leaves Pro coding cells blank; base-model coding results are only a provisional family proxy.

Long context:

- No verified Pro-specific retrieval result found; base GPT-5.5 MRCR/Graphwalks results are not Pro measurements.

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong BrowseComp and GDPval support research workflows; missing terminal results and computer-use support cap breadth.
- **Reasoning: 94/100.** HLE and FrontierMath establish high-end reasoning, with limited independent corroboration.
- **Context window: 95/100.** Million-token capacity meets the top size tier; unverified retrieval prevents a perfect score.
- **Multimodal: 70/100.** Image understanding is supported, but native audio/video and nontext output are absent.
- **Coding: 80/100.** Provisional family-level estimate from GPT-5.5's coding specialization; no exact Pro coding measurement supports a frontier claim.
- **Cost efficiency: 15/100.** $30/$180 pricing substantially limits routine deployment value despite research strength.
- **Overall Score: 85/100.** Half-up mean of 88, 94, 95, 70 and 80 is 85; best suited to demanding research when latency and price are secondary.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-03
- Method: Independent public web research; normalized scores are interpretations, not official vendor scores. Coding is provisional.
- Future sources: Add a separate signed findings file alongside this report.
