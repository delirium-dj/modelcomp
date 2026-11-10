# Gemma 4 26B A4B IT — findings by GPT-6.1 Sol

- Source: Google DeepMind / `google/gemma-4-26B-A4B-it`
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md); current Overall contract in `../../RULES.md`
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Gemma 4 26B A4B IT
- **Short description:** Google's instruction-tuned multimodal MoE for economical local/hosted reasoning, vision, and tool use. `26B` and `A4B` are rounded total/active parameter counts, not a decimal version number; the vendor checkpoint is spelled `gemma-4-26B-A4B-it`.
- **Provider / access:** Downloadable Google weights and OpenRouter OpenAI-compatible inference (`https://openrouter.ai/api/v1/chat/completions`); exact IDs/limits verified in the [official card](https://huggingface.co/google/gemma-4-26B-A4B-it/raw/main/README.md) and [live gateway catalog](https://openrouter.ai/api/v1/models). Self-host API transport depends on the runtime.
- **Release / knowledge:** Artificial Analysis lists April 2026 release; exact release day not independently verified. Google's card states pretraining-data cutoff January 2025, which is not a guarantee of knowledge of every event before then.
- **IDs:** `google/gemma-4-26B-A4B-it` (weights); `google/gemma-4-26b-a4b-it` and `google/gemma-4-26b-a4b-it:free` (OpenRouter). No Zen Free ID verified. Free is an access tier, not different weights.
- **Context window:** Official 256K, gateway global 262,144; free top-provider entry 262,144 context / 32,768 maximum completion; paid top-provider entry 256,000 / 128,000. These are distinct serving configurations, not new models.
- **Modalities:** Text/image inputs with document/PDF parsing and video-as-frame-sequences; text output. Native audio is **not** supported on 26B A4B (it belongs to other Gemma sizes). Thinking, system prompts, and native structured function calls are documented.
- **Pricing (as of 2026-11-10):** OpenRouter `:free` lists $0 input/output. Paid catalog lists $0.08 input / $0.10 output / $0.046 cache read per 1M ([claimant](https://openrouter.ai/api/v1/models)); Artificial Analysis quotes a different provider's $0.10/$0.34. Free usage remains provider-limited, not verified unlimited service, and free data-use terms were not independently audited. Self-hosting has compute costs.
- **Architecture:** Official sparse MoE: 25.2B total / 3.8B active, 30 layers, 128 routed experts with 8 active plus one shared; approximately 550M vision encoder. Apache 2.0, per Google's current model card.

### Raw benchmarks found

All quality results below are the **Gemma 4 26B A4B instruction-tuned column** in the [Google family card](https://ai.google.dev/gemma/docs/core/model_card_4) and its [official weights README](https://huggingface.co/google/gemma-4-26B-A4B-it/raw/main/README.md). Those mirrors are one publisher evaluation, not independent replications.

Agent / tool use:

- Tau2: **68.2%**, average over three (Google's label; no domain-specific Telecom/Banking value inferred).
- Terminal-Bench 2.1, Tau3-Banking, GDPval-AA, Claw-Eval/ClawProBench, Toolathon, MCP-Atlas, and SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **82.3%**; HLE: **8.7% without tools / 17.2% with search**.
- AIME **2026: 88.3%**, no tools; MMLU Pro: **82.6%**; BigBench Extra Hard: **64.8%**; MMMLU: **86.3%**.
- Artificial Analysis Intelligence Index: **N/A** in the live exact-model profile, not a zero or an invented historical value ([independent profile](https://artificialanalysis.ai/models/gemma-4-26b-a4b)). LCR/MLCR, CritPt, and Omniscience accuracy/hallucination rate: no verified score found.

Coding:

- LiveCodeBench **v6: 77.1%**; Codeforces **1718 Elo** (Google).
- SWE-bench Verified/SWE-Pro, SciCode/AA-SciCode, Vibe Code Bench, and DeepSWE: no verified public score found.

Long context:

- MRCR **v2, eight needles, 128K average: 44.1%** (Google). This is not a 256K measurement or evidence of lossless retrieval at the advertised maximum.

Multimodal evidence:

- MMMU Pro: **73.8%**; MATH-Vision: **82.4%**; MedXPertQA MM: **58.1%**.
- OmniDocBench **1.5: 0.149 average edit distance**, **lower is better**, not 14.9% accuracy.
- Google documents video-frame processing up to 60 seconds at one frame/second; no audio results apply to this size.

### Normalized scores (1–100)

- **Tool use: 78/100.** Exact Tau2 68.2% supports practical structured agents; missing terminal/MCP/long-horizon agent benchmarks cap confidence.
- **Reasoning: 80/100.** GPQA 82.3% and AIME 88.3% support strong size-efficient reasoning, while HLE 8.7% unaided limits frontier-level claims.
- **Context window: 72/100.** Documented 256K reaches the 200K–500K tier, but MRCR 44.1% at 128K and provider/output differences cap effective-context confidence.
- **Multimodal: 83/100.** Image/PDF understanding, frame-based video, and MMMU Pro 73.8% support visual-document breadth; no native audio or non-text output caps the tier.
- **Coding: 75/100.** LiveCodeBench v6 77.1% and Codeforces 1718 establish code-generation competence; no verified repository-repair/SciCode suite supports a frontier agentic-coding grade.
- **Cost efficiency: 100/100.** Evaluated access tier is the currently cataloged $0 OpenRouter route; rate/privacy limits and lower free output cap remain caveats, and self-hosting is not costless.
- **Overall Score: 78/100.** Half-up mean: (78 + 80 + 72 + 83 + 75) / 5 = 77.6, rounded to 78; cost excluded. A fit for economical visual agents and local coding assistance, not reliable lossless long-context work.

---

## Signature

- Provided by: **GPT 6.1 Sol (agentrouter/gpt-6.1-sol)** — 2026-11-10
- Method: Fresh public-source research, exact instruction-tuned-column extraction from Google's primary cards, gateway configuration/pricing verification, and independent profile comparison. No peer files read. Different Gemma sizes, hosted configurations, and lower-is-better metrics are not conflated; scores are independent interpretations. Configured search returned HTTP 402; Bing/direct primary sources were used.
- Reference URLs:
  - [Google Gemma 4 card and size-specific benchmark table](https://ai.google.dev/gemma/docs/core/model_card_4)
  - [Exact 26B A4B IT checkpoint card](https://huggingface.co/google/gemma-4-26B-A4B-it/raw/main/README.md)
  - [OpenRouter exact paid/free routes and prices](https://openrouter.ai/api/v1/models)
  - [Artificial Analysis exact reasoning-model profile](https://artificialanalysis.ai/models/gemma-4-26b-a4b)
- Future sources: Add a separately signed file and preserve this report.
