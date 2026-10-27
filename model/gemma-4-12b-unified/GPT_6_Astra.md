# Gemma 4 12B Unified — findings by GPT 6 Astra

- Source: Google DeepMind / Gemma 4 12B IT
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Description:** Encoder-free dense multimodal instruction model, evaluated in thinking mode; Unified describes its architecture, not a separate checkpoint from Gemma 4 12B IT.
- **Release:** June 3, 2026, established by [Google's announcement](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemma-4-12b/). Gateway April dates refer to the broader family and do not override this exact-model announcement. Official knowledge cutoff not verified.
- **Architecture / license:** 11.95B parameters, 48 decoder layers, direct image/audio projections rather than separate encoders, Apache 2.0. [Developer guide](https://developers.googleblog.com/gemma-4-12b-the-developer-guide/) describes a 35M vision embedder and 40ms frames of 16kHz raw audio.
- **IDs / access:** `google/gemma-4-12B-it` weights, local vLLM OpenAI-compatible serving; SiliconFlow hosting measured by AA; gateway `gemma-4-12b-it` on Oxyy/UplinkSwitch. No distinct Zen Free ID verified.
- **Context / output:** 256K native, 262,144 in AA/provider specifications. Universal maximum output not established; host limits vary. LiteLLM's Sail route lists 16,384 context/output and does not redefine the checkpoint's native capacity.
- **Modalities:** Text/image/audio/video-frame input, text output, thinking and function calling. Official input limits: 30 seconds audio; 60 seconds video at one frame per second. No audio generation.
- **Pricing (2026-10-27):** AA reference $0.10 input/$0.30 output per million tokens; Oxyy advertises promotional $0.04/$0.12 versus standard $0.10/$0.30; UplinkSwitch $0.40/$1.20. Local open weights incur hardware costs. Cache discounts and modality support are host-specific.

### Raw benchmarks found

[Official card](https://ai.google.dev/gemma/docs/core/model_card_4) and [exact IT checkpoint](https://huggingface.co/google/gemma-4-12B-it):

- **Tools:** Tau2 three-domain average 69.0%. The [technical report](https://arxiv.org/html/2607.02770v2) supplies airline 75.0%, retail 77.6%, telecom 54.4%, plus Terminal-Bench Hard 18.0%.
- **Reasoning:** GPQA Diamond 78.8%, HLE no tools 5.2%, MMLU-Pro 77.2%, AIME 2026 77.5%, BigBench Extra Hard 53.0%, MMMLU 83.4%. Tool-assisted HLE not published for this size.
- **Coding:** LiveCodeBench v6 72.0%, Codeforces 1659 Elo; technical report SciCode 38.0%, IFBench 74.0%, IFEval 97.2%. No verified SWE-bench, DeepSWE or Vibe Code Bench result found.
- **Multimodal:** MMMU-Pro 69.1%, MathVision 79.7%, OmniDocBench 1.5 average edit distance 0.164 (lower is better). Audio CoVoST 38.5 and FLEURS 0.069 (lower is better), both excluding Chinese as footnoted; these are different metrics, not interchangeable percentages.
- **Context:** MRCR v2 eight-needle at 128K 43.4%; non-thinking technical-report RULER 96.4% at 32K and 91.2% at 128K, LOFT recall 66.4 at 128K and GraphWalks F1 71.0 below 128K.

[Independent AA comparison](https://artificialanalysis.ai/models/releases/comparisons/gemma-4-12b-vs-mistral-small-4): reasoning HLE 15.7%, CritPt 0.0%, AA-Omniscience −53 (index), AA-LCR v1.1 63.7%, GDPval-AA v2.1 427 Elo. Non-reasoning HLE 6.3 and LCR 35.0 are a distinct mode, not the scored profile. AA Intelligence Index v4.3.2 **14 is estimated** and excluded as a measured composite. No independent SciCode figure is available in that comparison; vendor 38 remains vendor evidence.

[AA hosting comparison](https://artificialanalysis.ai/models/gemma-4-12b/providers) measures SiliconFlow at 111.5 output tokens/s and approximately 20.15 seconds to first answer token. These are endpoint/workload measurements. No verified Claw-Eval, Toolathon or MCP-Atlas score found.

### Conflicting sources and limitations

Vendor HLE 5.2 versus independent 15.7 is substantial; exact subset/budget alignment was not established, so both remain attributed rather than averaged. Strong competition coding and Tau2 do not establish repository engineering, especially with low GDPval and Terminal-Bench Hard results.

[Oxyy](https://oxyy.ai/models/gemma-4-12b-it) says April 2 release, [UplinkSwitch](https://uplinkswitch.ai/models/gemma-4-12b-it) cites May 23 publication, and HF search metadata shows July. Google's June 3 exact-model introduction is the authoritative public launch. Oxyy's claimed January 2025 cutoff is not independently verified. [LiteLLM Sail specifications](https://models.litellm.ai/models/gemma-4-12b-it) are a narrower deployment. [vLLM recipe](https://recipes.vllm.ai/Google/gemma-4-12B-it) explicitly enables multimodal serving; its example 8K configuration is not the model's maximum.

### Normalized scores (1–100)

- **Tool use: 48/100.** Tau2 69 supports structured agents, but TB Hard 18 and independent GDPval 427 constrain autonomy.
- **Reasoning: 64/100.** GPQA 78.8 and AA HLE 15.7 show useful reasoning; vendor HLE 5.2, CritPt zero and Omniscience −53 limit confidence.
- **Context window: 70/100.** Native 256K capacity with MRCR 43.4 at 128K and AA-LCR 63.7; effective recall is far from perfect.
- **Multimodal: 90/100.** Verified native audio, images and video frames with measured audio/vision results; short input durations and text-only output cap breadth.
- **Coding: 64/100.** LiveCodeBench 72 and vendor SciCode 38 support programming assistance; weak terminal evidence and missing repository scores cap autonomy.
- **Cost efficiency: 97/100.** AA reference $0.10/$0.30 is excellent paid value; promotional discounts and host restrictions should be evaluated separately.
- **Overall Score: 67/100.** (48 + 64 + 70 + 90 + 64) / 5 = 67.2 → 67; compact multimodal understanding with limited independent-agent strength.

## Signature

- Provided by: **GPT 6 Astra (openai/gpt-6-astra-ultrafast)** — 2026-10-27 UTC
- Method: Three targeted public web searches, official release/card/report, independent evaluation and cross-provider discrepancy review; normalized scores are interpretations, not vendor scores.
