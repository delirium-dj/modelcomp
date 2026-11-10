# Mercury 3 — findings by GPT-6.1 Sol

- Source: Inception Labs / `mercury-3`
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md); current Overall contract in `../../RULES.md`
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Mercury 3
- **Short description:** Inception's diffusion-based reasoning LLM for fast text agents, coding, and conversational applications. Voice applications use external speech components; the separately named Mercury Voice is not evidence that Mercury 3 natively accepts or emits audio.
- **Provider / access:** Native OpenAI-compatible `https://api.inceptionlabs.ai/v1/chat/completions`, model `mercury-3`; live Vercel gateway `inception/mercury-3` also verified. Inception advertises OpenRouter/Baseten availability, but the checked OpenRouter list had no exact match, so that serving claim was not independently confirmed.
- **Release / knowledge:** Gateway/secondary records list October 2026; the blog footer says October 19 while its publication metadata says October 29. These source-specific milestones do not establish one unambiguous first-release day. Knowledge cutoff not verified.
- **IDs:** `mercury-3` (native), `inception/mercury-3` (Vercel). No Zen Free ID verified. Native effort levels are `instant`, `low`, `medium`, and `high`; chart results below use Medium.
- **Context window:** Official 1M tokens / 131,072 maximum output, confirmed in the [API model table](https://docs.inceptionlabs.ai/get-started/models.md) and Vercel catalog. Retrieval results below do not identify their tested lengths.
- **Modalities:** Native text input/output only; tool calling, structured outputs, reasoning, and diffusion streaming. No image/audio/video or native non-text output.
- **Pricing (as of 2026-11-10):** Launch 50%-discount API pricing $0.10 input / $0.35 output / $0.01 cache read per 1M; standard $0.20/$0.70/$0.02. New keys are advertised with 100M free trial tokens, not permanent unlimited inference. [Pricing claimant](https://www.inceptionlabs.ai/models), [API claimant](https://docs.inceptionlabs.ai/get-started/models.md). The evaluated tier here is paid launch pricing; exact promotional end date not verified.
- **Architecture:** Proprietary diffusion LLM; total/active parameter counts and open-weight license not disclosed. The scaling chart's relative-size statements are not converted into an invented absolute parameter count.

### Raw benchmarks found

The original [launch article](https://www.inceptionlabs.ai/blog/introducing-mercury-3) embeds a [Mercury 3 Medium comparison image](https://framerusercontent.com/images/YO5OXn25zt3KJBJkUxO2kAwmS6o.png), inspected directly. All figures below retain the **Medium** setting and publisher attribution. BenchLM republishes a rounded subset; it is not an independent rerun.

Agent / tool use:

- GDPval **1237.2 Elo**, chart's label; not silently relabeled GDPval-AA v2.1.
- Tau3-Bench **Banking: 30.24**; BrowseComp+ **55.18**; DeepSearchQA **71.33** (publisher's percentage-scale chart scores; detailed harness/attempt budgets not disclosed in the image).
- TinyFish's partner quote reports **50% completed across 50 live Mind2Web tasks** in its production harness. This is a small selected partner evaluation, not the full public benchmark or an independent replication by this reporter.
- Terminal-Bench 2.1 is named in a separate composite-chart footnote, but no standalone Mercury 3 score was printed there. Tau2, Claw-Eval/ClawProBench, Toolathon, MCP-Atlas, and SWE Atlas Codebase QnA: no verified exact numerical result found.

Reasoning / knowledge:

- GPQA Diamond **89.23**; AA-Omniscience-Public **accuracy 46.44**; IFBench **76.84**; MultiChallenge **60.35**, Medium (publisher chart).
- The Omniscience figure is accuracy, not net score or hallucination rate; no exact hallucination rate verified.
- HLE, CritPt, and an independent AA Intelligence Index: no verified exact-model score found. The attempted AA model page returned HTTP 404.

Coding:

- SWE-Bench **Atlas: 51.08**; DeepSWE **v1: 46.31**, Medium (publisher chart). Atlas is not SWE-bench Verified, SWE-Pro, or the template's codebase-QnA task.
- SWE-bench Verified/SWE-Pro, LiveCodeBench, SciCode, and Vibe Code Bench: no verified exact numerical result found.

Long context:

- AA-LCR **v1.1: 77.67**; MRCR **v2: 75.50**, Medium (publisher chart). Tested lengths/needle counts are not given, so neither establishes 98% retrieval at 512K+ or perfect retention at 1M.

Performance:

- Publisher chart reports **1,068 output tokens/s** on NVIDIA GPUs at Medium; not an independent current API guarantee.
- A partner quote reports **0.9-second median generation / 2.2-second median end-to-end response** in its smart-glasses/search workflow, a different scope from output-token throughput.
- A separate relative-size/composite-quality plot contains no precise labeled Mercury 3 index value; no value is inferred from pixel coordinates.

### Normalized scores (1–100)

- **Tool use: 80/100.** Tau3 Banking 30.24, GDPval 1237.2, search scores, and the selected Mind2Web study support practical agents; limited harness disclosure and no verified standalone terminal/MCP suites cap the grade.
- **Reasoning: 86/100.** GPQA 89.23 and instruction/challenge results support strong efficient reasoning, while absent HLE/CritPt and independent replication prevent a frontier maximum.
- **Context window: 95/100.** Verified 1M capacity reaches the top tier, but MRCR 75.50 with unspecified length cannot support perfect-retrieval credit.
- **Multimodal: 15/100.** The exact native model is text-only; voice-app integrations do not add native speech or image capability.
- **Coding: 78/100.** SWE-Bench Atlas 51.08 and DeepSWE v1 46.31 support useful engineering, but absent SWE-Pro/Verified/SciCode and publisher-only harness evidence cap autonomy.
- **Cost efficiency: 98/100.** Paid launch $0.10/$0.35 with cheap caching offers very low token cost and fast serving; promotional pricing and unverified task-cost distributions prevent a universal free-inference claim.
- **Overall Score: 71/100.** Half-up mean: (80 + 86 + 95 + 15 + 78) / 5 = 70.8, rounded to 71; cost excluded. Best fit is fast text-only agent workflows where native multimodality is unnecessary.

---

## Signature

- Provided by: **GPT 6.1 Sol (agentrouter/gpt-6.1-sol)** — 2026-11-10
- Method: Fresh primary launch/model/API research, direct inspection of the original chart image, and live gateway checks. No peer findings read. Verified image values rather than relying on a secondary aggregator's category scores; preserved Medium setting, task scopes, pricing promotion, and text-only modality contract. Normalized scores are interpretations; configured search returned HTTP 402, so direct sources and Bing were used.
- Reference URLs:
  - [Inception launch and partner studies](https://www.inceptionlabs.ai/blog/introducing-mercury-3)
  - [Original Mercury 3 Medium benchmark table](https://framerusercontent.com/images/YO5OXn25zt3KJBJkUxO2kAwmS6o.png)
  - [Native model/API specifications](https://docs.inceptionlabs.ai/get-started/models.md)
  - [Current pricing and free-trial limits](https://www.inceptionlabs.ai/models)
  - [Vercel live exact-model catalog](https://ai-gateway.vercel.sh/v1/models)
- Future sources: Preserve this report and add separately signed evidence; chart republishing does not make a second independent evaluation.
