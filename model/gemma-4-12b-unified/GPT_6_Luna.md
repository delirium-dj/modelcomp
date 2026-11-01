# Gemma 4 12B Unified — findings by GPT-6 Luna

- Source: Google DeepMind/Gemma 4 12B Unified
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google DeepMind's open-weight, dense 12B multimodal model with an encoder-free architecture for image and audio input. It is designed for local inference, agentic tasks, coding, and reasoning on consumer hardware.
- **Provider / access:** Official weights are available on Hugging Face and Kaggle for local/self-hosted inference; Google also links Google Cloud Model Garden deployment. Third-party listings include NanoGPT (`gemma-4-12b-it`) and SiliconFlow (`google/gemma-4-12B-it`), whose API and generation limits are provider-specific. I did not verify an OpenCode Zen route; the tracked `opencode/gemma-4-12b-unified` ID is not established by the upstream model card. No Google Gemini API ID was verified.
- **Release / knowledge:** Announced 2026-06-03. Google states the pre-training data cutoff is January 2025; no separate post-training knowledge cutoff is specified.
- **IDs:** Official Hugging Face checkpoints: `google/gemma-4-12B` (pre-trained) and `google/gemma-4-12B-it` (instruction-tuned, the benchmarked variant). Third-party hosted IDs vary.
- **Context window:** 262,144 tokens, verified in Google's model card and the Hugging Face model config. Hosted output caps vary; models.dev lists 32,768 for one route.
- **Modalities:** Text, image, audio, and video-frame input; text output. Google documents configurable thinking and function calling. JSON/structured-output support depends on the inference provider or serving stack.
- **Pricing (as of 2026-11-01):** Apache-2.0 weights are downloadable without a per-token fee; local hardware/hosting is not free. models.dev lists third-party rates of $0.05/$0.25 per 1M input/output tokens (NanoGPT) and $0.10/$0.30 (SiliconFlow); verify current provider pricing before use.
- **Architecture:** 11.95B-parameter dense decoder-only transformer; unified, encoder-free image/audio projections; Apache 2.0 open-weight license.

### Raw benchmarks found

Google's technical report says the static benchmark results below are for instruction-tuned models and that Table 5 is **thinking mode unless explicitly stated**. “No tools” does not mean “non-thinking.” Results are grouped by the reported mode rather than combined.

Thinking mode (Google technical report, Table 5; source does not publish a single common harness/version for every benchmark):

- Tau2-Bench, average over three domains: **69.0%** (airline 75.0%, retail 77.6%, telecom 54.4%).
- Terminal-Bench Hard: **18.0%**.
- GPQA Diamond: **78.8%**; MMLU-Pro: **77.2%**.
- AIME 2026, no tools: **77.5%** (still in the report's thinking-mode results).
- Humanity's Last Exam, no tools: **5.2%**; BigBench Extra Hard micro average: **53.0%**.
- LiveCodeBench v6: **72.0%**; SciCode: **38.0%**; Codeforces Elo: **1,659**.
- Vision: MMMU-Pro **69.1%**, MATH-Vision **79.7%**, MedXPertQA-MM **48.7%** (Table 6, thinking; maximum supported 1,120 vision tokens).

Non-thinking mode (Google technical report, Table 9, explicitly “without thinking”):

- RULER: **96.4% at 32K**, **91.2% at 128K**.
- LOFT Text Retrieval: **66.4 Recall@k at 128K**; GraphWalks: **71.0 F1 below 128K**.
- MRCR v2, 8 needles, 128K average: **43.4%** (also reported in Google's model card).
- MTOB English→Kalamang chrF: **45.1 at ~128K** and **41.9 at ~256K**; Kalamang→English: **37.3 at ~128K** and **32.9 at ~256K**.

Independent evaluation (BenchmarkList's `google/gemma-4-12b-it` record; its run settings are not fully specified in the profile and are not substituted for Google's report): Terminal-Bench Hard **18.2%**, Vals Terminal-Bench 2.1 **27.3%**, GDPval-AA **647 Elo**, and Artificial Analysis Intelligence Index **22**. Its HLE value (**15.7%**) differs from Google's **5.2% no-tools** result; the setups differ, so these are not interchangeable.

### Normalized scores (1–100)

- **Tool use: 65/100.** Tau2 averages 69.0%, but the reported telecom domain is 54.4% and Terminal-Bench Hard is 18.0%; no Claw-Eval score was verified. These results support capable but inconsistent tool work.
- **Reasoning: 65/100.** Thinking-mode GPQA Diamond (78.8%) and MMLU-Pro (77.2%) are solid, while HLE without tools is 5.2%; that low HLE result caps the score.
- **Context window: 73/100.** The 256K specification falls in the 200K–500K tier; non-thinking RULER is 91.2% at 128K, but MRCR v2 is 43.4% at 128K and MTOB declines at ~256K.
- **Multimodal: 95/100.** Native image and audio input, video-frame handling, and strong reported vision results exceed the image-only tier; output remains text-only.
- **Coding: 67/100.** Thinking-mode LiveCodeBench v6 is 72.0%, with Codeforces Elo 1,659; SciCode at 38.0% and Terminal-Bench Hard at 18.0% limit confidence for difficult agentic coding.
- **Cost efficiency: 100/100.** Self-hosting the Apache-2.0 weights has no per-token model charge; hardware costs and paid hosted APIs are separate.
- **Overall Score: 73/100.** Half-up mean of the five quality dimensions: (65 + 65 + 73 + 95 + 67) / 5 = 73. Best fit is privacy-conscious local multimodal work where 256K context and audio/image input matter more than top-end coding or deep-reasoning performance.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Independent public-web research across three separate searches, official Google material, the published technical report, Hugging Face model/config records, and an independent evaluation catalog; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google Gemma 4 model card](https://ai.google.dev/gemma/docs/core/model_card_4)
  - [Google launch announcement: Gemma 4 12B](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemma-4-12b/)
  - [Gemma 4 Technical Report, v2](https://arxiv.org/html/2607.02770v2)
  - [Google's Gemma 4 12B IT checkpoint](https://huggingface.co/google/gemma-4-12B-it)
  - [BenchmarkList: Gemma 4 12B IT](https://benchmarklist.com/models/google-gemma-4-12b-it/)
  - [models.dev: Gemma 4 12B IT provider listings](https://models.dev/models/google/gemma-4-12b-it/)

---
