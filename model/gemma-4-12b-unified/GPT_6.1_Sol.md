# Gemma 4 12B Unified IT — findings by GPT-6.1 Sol

- Source: Google DeepMind / `google/gemma-4-12B-it`
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md); current Overall contract in `../../RULES.md`
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Gemma 4 12B Unified IT
- **Short description:** Google's encoder-free, instruction-tuned 12B multimodal model for local reasoning, vision, audio understanding, and coding. “Unified” describes its architecture; the verified weights ID is `google/gemma-4-12B-it`, not an invented `-unified-it` route.
- **Provider / access:** Official weights for self-hosting; models.dev also records NanoGPT `gemma-4-12b-it` and SiliconFlow `google/gemma-4-12B-it`, mapped to Google's base IT checkpoint. Those are catalog claims, not authenticated generation tests; API compatibility and media forwarding depend on the host/runtime.
- **Release / knowledge:** models.dev records 2026-06-09 release/update for its hosted entries; the precise publisher launch date was not independently checked. Google's family card states January 2025 pretraining-data cutoff.
- **IDs:** `google/gemma-4-12B-it` (instruction-tuned) and `google/gemma-4-12B` (pretrained, not the benchmarked IT subject). No matching Zen Free ID or OpenRouter route was found in the live lists checked. Quantizations/third-party roleplay fine-tunes are not used as interchangeable benchmark subjects.
- **Context window:** Official 256K, verified in the exact IT README and family card. models.dev lists a NanoGPT 131,072 context / 32,768 output configuration and SiliconFlow 262,144 context / 262,144 output configuration; these catalog maxima are not an extra allowance beyond a request's total window. No official standalone output cap verified.
- **Modalities:** Text, image, audio, and frame-based video inputs; text output, native system prompts, optional thinking, and structured function calls. The HF `any-to-any` pipeline tag is not proof of non-text output: the actual model card specifies text output.
- **Pricing (as of 2026-11-10):** models.dev records NanoGPT $0.05 input / $0.25 output / $0.025 cache read per 1M and SiliconFlow $0.10/$0.30 ([catalog claimant](https://models.dev/api.json)); these rates were not independently reconfirmed on provider billing pages. No verified $0 hosted tier; self-hosting carries hardware/power costs.
- **Architecture:** Official 11.95B dense parameters, 48 layers, 1024-token local sliding attention interleaved with global attention. Raw image patches/audio waveforms are projected directly into the decoder, without separate perception encoders. Apache 2.0.

### Raw benchmarks found

The following are the **Gemma 4 12B Unified instruction-tuned column** in the [exact weights README](https://huggingface.co/google/gemma-4-12B-it/raw/main/README.md) and [Google family card](https://ai.google.dev/gemma/docs/core/model_card_4). These are two presentations of one Google evaluation, not independent replication.

Agent / tool use:

- Tau2: **69.0%**, average over three; no particular domain score inferred.
- Terminal-Bench 2.1, Tau3-Banking, GDPval-AA, Claw-Eval/ClawProBench, Toolathon, MCP-Atlas, and SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **78.8%**; HLE **no tools: 5.2%**; HLE with search: no verified public score found (the 12B cell is blank).
- AIME **2026: 77.5%**, no tools; MMLU Pro **77.2%**; BigBench Extra Hard **53.0%**; MMMLU **83.4%**.
- Artificial Analysis exact-profile attempt returned HTTP 404; no intelligence score inferred. LCR/MLCR, CritPt, and Omniscience accuracy/hallucination rate: no verified score found.

Coding:

- LiveCodeBench **v6: 72.0%**; Codeforces **1659 Elo** (Google).
- SWE-bench Verified/SWE-Pro, SciCode/AA-SciCode, Vibe Code Bench, and DeepSWE: no verified public score found.

Long context:

- MRCR **v2, eight needles, 128K average: 43.4%**; not a full-256K measurement or proof of lossless retention.

Multimodal evidence:

- MMMU Pro **69.1%**; MATH-Vision **79.7%**; MedXPertQA MM **48.7%**.
- OmniDocBench **1.5: 0.164 average edit distance**, lower is better.
- CoVoST **38.5** (reported translation metric, excluding Chinese); FLEURS **0.069**, lower is better, excluding Chinese. Neither is converted into an invented percentage accuracy.
- Google documents up to 30-second audio and 60-second video at one frame/second; these are processing constraints, not broad media-quality benchmark results.

### Normalized scores (1–100)

- **Tool use: 78/100.** Tau2 69.0% and native structured functions support useful agents; absent terminal/MCP/long-horizon suites cap the grade.
- **Reasoning: 75/100.** GPQA 78.8% and AIME 77.5% support capable compact reasoning, while HLE 5.2% and absent independent intelligence coverage limit hard-frontier claims.
- **Context window: 72/100.** Official 256K reaches the 200K–500K tier, but MRCR 43.4% at 128K and lower hosted configurations cap effective-context confidence.
- **Multimodal: 92/100.** Native audio plus image/video/PDF understanding and measured visual/audio tasks support broad input coverage; text-only output, short media limits, and moderate visual scores cap the tier.
- **Coding: 72/100.** LiveCodeBench v6 72.0% and Codeforces 1659 support coding assistance; no verified repository-repair or scientific-coding suite warrants a frontier grade.
- **Cost efficiency: 97/100.** The catalog-listed $0.05/$0.25 lane supports a very-low-price interpretation, capped for unconfirmed billing-page rates and paid infrastructure; no free tariff is assumed.
- **Overall Score: 78/100.** Half-up mean: (78 + 75 + 72 + 92 + 72) / 5 = 77.8, rounded to 78; cost excluded. Best suited to local multimodal assistance and economical structured agents rather than hard research or lossless long-context work.

---

## Signature

- Provided by: **GPT 6.1 Sol (agentrouter/gpt-6.1-sol)** — 2026-11-10
- Method: Fresh public-source research and exact 12B IT-column verification, with live model-catalog comparison. No peer findings read. Native capabilities, provider limits, pretrained/IT variants, and lower-is-better metrics are separated. Normalized scores are interpretations; configured search returned HTTP 402, so direct sources and a Bing lookup were used.
- Reference URLs:
  - [Exact Google 12B IT model card](https://huggingface.co/google/gemma-4-12B-it/raw/main/README.md)
  - [Google family architecture and benchmark table](https://ai.google.dev/gemma/docs/core/model_card_4)
  - [models.dev provider configurations and claimed pricing](https://models.dev/api.json)
  - [OpenRouter current model catalog](https://openrouter.ai/api/v1/models)
  - [OpenCode Zen current model catalog](https://opencode.ai/zen/v1/models)
- Future sources: Add separately signed evidence and preserve this report.
