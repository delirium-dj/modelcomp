# Gemma 4 26B A4B — findings by GPT 6 Astra

- Source: Google DeepMind / Gemma 4 26B A4B IT
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Description:** Instruction-tuned open-weight multimodal MoE, scored in thinking mode. Pretrained and DiffusionGemma checkpoints are distinct and are not scored here.
- **IDs / access:** `google/gemma-4-26B-A4B-it` weights and DeepInfra Chat Completions API; OpenRouter `google/gemma-4-26b-a4b-it`; Cloudflare `@cf/google/gemma-4-26b-a4b-it`; Google managed `gemma-4-26b-a4b-it-maas`. No distinct Zen Free ID verified.
- **Release / knowledge:** April 2026; AA launch reporting dated April 2, Google managed API release April 3. A July card timestamp is not evidence of a July initial launch. Knowledge cutoff not verified.
- **Architecture:** 25.2B parameters, 3.8B active, 30 layers, eight of 128 routed experts plus one shared, approximately 550M vision encoder; Apache 2.0 as listed by OpenRouter.
- **Context / output:** 262,144 on DeepInfra and Google; Cloudflare advertises 256,000. Output limits are endpoint-specific: OpenRouter page 32,768 versus Google managed 128,000. Do not combine a cheap endpoint's price with another's maximum output.
- **Modalities:** Text/image input and text output; some hosts accept video frames, with OpenRouter describing up to 60 seconds at 1 fps. Google managed endpoint explicitly disables video and thinking, while Cloudflare supports reasoning. No native audio on this size; smaller Gemma variants' audio support does not transfer.
- **Pricing (2026-10-27):** DeepInfra $0.07/$0.34 per million input/output tokens, fp8; Cloudflare $0.10/$0.30; AA reference $0.10/$0.34 with $0.05 cache hit. Lower gateway quotes are provider-dependent, not a universal rate. Open weights do not make hosted or local compute free.

### Raw benchmarks found

[Google card](https://ai.google.dev/gemma/docs/core/model_card_4) and [technical report](https://arxiv.org/html/2607.02770v2), vendor IT-thinking results unless otherwise specified:

- **Tools:** Tau2 three-domain average 68.2%; airline 76.0, retail 85.5, telecom 43.0. Terminal-Bench Hard 14.0%.
- **Reasoning:** GPQA Diamond 82.3%, HLE no tools 8.7%, HLE with search 17.2%, AIME 2026 88.3%, MMLU-Pro 82.6%, BigBench Extra Hard 64.8%, IFEval 98.5%.
- **Coding:** LiveCodeBench v6 77.1%, Codeforces 1718 Elo, SciCode 40.0%. No verified SWE-bench, DeepSWE or Vibe Code Bench score found.
- **Vision:** MMMU-Pro 73.8%, MathVision 82.4%; OmniDocBench 1.5 average edit distance 0.149, **lower is better**, not 14.9% accuracy.
- **Context:** MRCR v2 eight-needle at 128K 44.1%. Separate non-thinking long-context evaluations: RULER 97.3% at 32K and 89.8% at 128K; LOFT retrieval recall 66.3 at 128K; GraphWalks F1 72.6 below 128K. These different tasks do not establish near-perfect full-window retrieval.

**Independent measurements:** [AA comparison table](https://artificialanalysis.ai/models/releases/comparisons/gpt-6-astra-vs-gemma-4-26b-a4b) gives Gemma reasoning HLE 19.3%, SciCode 40.0%, CritPt 0.0%, AA-LCR v1.1 65.7%, GDPval-AA v2.1 565 Elo, AutomationBench 1.9%, AA-Briefcase 315 and AA-Omniscience −51 (index). Its Intelligence Index v4.3.2 17 is explicitly estimated and is not used as a measured composite. [AA's launch evaluation](https://www.linkedin.com/posts/artificial-analysis_google-has-released-gemma-4-a-new-family-activity-7445519816519725062-my6G) independently reports GPQA 79.2%.

[GraySoft's AA-derived capture](https://graysoft.dev/benchmarks/google-gemma-4-26b-a4b.html) reports Tau2 43.6%, Tau banking 12.0%, Terminal-Bench v2.1 39.0%, Hard 13.6%; [BenchLM](https://benchlm.ai/models/gemma-4-26b-a4b) attributes MMMU-Pro 69.2% to AA. These aggregators share AA data and are not independent replications. No verified Claw-Eval, Toolathon or MCP-Atlas result found.

### Cross-source interpretation

The [DeepMind landing page](https://deepmind.google/models/gemma/gemma-4/) shows Tau2 retail 85.5, whereas the full card reports three-domain 68.2; AA's 43.6 telecom-style result is a different evaluation scope. The landing page also labels 82.6 as MMMLU while the detailed card identifies 82.6 as MMLU-Pro and MMMLU as 86.3; the detailed card controls attribution.

Vendor HLE 8.7 versus AA 19.3 remains a material harness/subset/budget discrepancy, not evidence to average into one measurement. Older aggregator GDPval 713 differs from current v2.1 565. Independent coding and automation evidence is much weaker than competitive programming alone suggests.

[DeepInfra](https://deepinfra.com/google/gemma-4-26B-A4B-it/api), [Cloudflare](https://developers.cloudflare.com/ai/models/%40cf/google/gemma-4-26b-a4b-it/), [Google endpoint](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/maas/google/gemma-4-26b-a4b-it) and [OpenRouter](https://openrouter.ai/google/gemma-4-26b-a4b-it) establish materially different serving features. [ModelIndex](https://modelindex.ai/models/google/gemma-4-26b-a4b-it) warns that its cheapest $0.042/$0.22 route has 131K context; it is not the basis of the full-window score.

### Normalized scores (1–100)

- **Tool use: 49/100.** Tau2 average 68.2 contrasts with TB2.1 39, banking 12 and weak independent automation; suitable for constrained workflows.
- **Reasoning: 68/100.** Independent GPQA 79.2 and HLE 19.3 support useful reasoning, capped by CritPt zero and substantial vendor/independent HLE disagreement.
- **Context window: 71/100.** Verified approximately 256K capacity, but MRCR 44.1 at 128K and LCR 65.7 constrain effective retrieval confidence.
- **Multimodal: 76/100.** Strong image/document understanding and provider-supported video frames; absent audio and provider-specific video limitations cap breadth.
- **Coding: 67/100.** LiveCodeBench 77.1 and SciCode 40 support programming; terminal performance and missing repository-repair results cap agentic coding.
- **Cost efficiency: 97/100.** DeepInfra $0.07/$0.34 or Cloudflare $0.10/$0.30 offers excellent paid value; quantization and endpoint features vary.
- **Overall Score: 66/100.** (49 + 68 + 71 + 76 + 67) / 5 = 66.2 → 66; inexpensive multimodal assistance with limited autonomous-agent reliability.

## Signature

- Provided by: **GPT 6 Astra (openai/gpt-6-astra-ultrafast)** — 2026-10-27 UTC
- Method: Three targeted public web searches, primary card/report and provider documentation, independent evaluation and contradictory-source review; normalized scores are interpretations, not vendor scores.
