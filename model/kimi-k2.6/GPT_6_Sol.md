# Kimi K2.6 — findings by GPT 6 Sol

- Source: Moonshot AI (`kimi-k2.6`)
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's open-weight multimodal K2-series model optimized for coding agents and long-running tool workflows. Its API supports both thinking and instant modes; these are settings on one model, not separate scored checkpoints ([official guide](https://platform.kimi.ai/docs/guide/kimi-k2-6-quickstart.md), [weights](https://huggingface.co/moonshotai/Kimi-K2.6)).
- **Provider / access:** Moonshot `kimi-k2.6` at `https://api.moonshot.ai/v1/chat/completions` (OpenAI-compatible Chat Completions); also `moonshotai/kimi-k2.6` via [OpenRouter](https://openrouter.ai/moonshotai/kimi-k2.6/llms.txt). The [first-party pricing notice](https://platform.kimi.ai/docs/pricing/chat.md) says **newly registered users cannot access K2-series models from October 31, 2026**; existing users retain access, with series retirement planned by December 2026.
- **Release / knowledge:** April 20, 2026 ([Moonshot launch](https://www.kimi.com/blog/kimi-k2-6), [Vals](https://www.vals.ai/models/kimi_kimi-k2.6)); knowledge cutoff not verified publicly.
- **IDs:** First-party `kimi-k2.6`, third-party `moonshotai/kimi-k2.6`; no verified separate Zen Free endpoint for this checkpoint.
- **Context window:** **262,144 combined tokens** on the [API pricing page](https://platform.kimi.ai/docs/pricing/chat.md); Moonshot's [model card](https://huggingface.co/moonshotai/Kimi-K2.6) calls it 256K, and the [API guide](https://platform.kimi.ai/docs/guide/kimi-k2-6-quickstart.md) defaults `max_tokens` to 32,768. Do not confuse the generation limit with demonstrated retrieval at 256K.
- **Modalities:** Text, image and video input, text output; video support in the [official API guide](https://platform.kimi.ai/docs/guide/kimi-k2-6-quickstart.md) is not automatically available on self-hosted serving engines. Thinking on/off, multi-step function calling and optional preserved reasoning. No verified native audio input or generated media output.
- **Pricing (as of 2026-10-31):** First-party **$0.95 input / $4.00 output / $0.16 cached input per million tokens**, pay-as-you-go, from [Moonshot's model pricing](https://platform.kimi.ai/docs/pricing/chat). No first-party free API tier verified; third-party rates vary. Access/retirement constraints matter more than the nominal low price for new users.
- **Architecture:** Open-weight **1T total / 32B active MoE**, MLA attention and MoonViT image encoder; [official checkpoint](https://huggingface.co/moonshotai/Kimi-K2.6) carries a **Modified MIT** license, not unrestricted MIT. Self-hosted vision/video capabilities can depend on runtime.

### Raw benchmarks found

Agent / tool use:

- [Vals AI's current independent suite](https://www.vals.ai/models/kimi_kimi-k2.6): **Terminal-Bench 2.1 53.56% ±2.08** (#53/75), **Finance Agent v2 44.90% ±0.73**, **Legal Research 15.87% ±2.54** and **Tax Agent 12.40% ±2.38**. This agentic spread limits how far coding success generalizes.
- [Moonshot's official model-card tests](https://huggingface.co/moonshotai/Kimi-K2.6): **Toolathlon 50.0**, **MCPMark 55.9**, **Claw Eval v1.1 pass^3 62.3 / pass@3 80.9**, **OSWorld-Verified 73.1** and **APEX-Agents 27.9**. These are vendor-reported and use different tool/harness configurations; the claimed 300-subagent swarm is a product orchestration capacity, not an independent single-model benchmark ([launch notes](https://www.kimi.com/blog/kimi-k2-6)).
- [Vals' launch-era update](https://www.vals.ai/models/kimi_kimi-k2.6) reported **Terminal-Bench 2.0 57.3%** and Vals Index **63.9%** on its then-current set. Neither number can substitute for the different TB2.1/current suite above.

Reasoning / knowledge:

- [Vals independently reports](https://www.vals.ai/models/kimi_kimi-k2.6) **GPQA Diamond 89.14% ±2.00** (#31/138), **MMLU Pro 87.57% ±0.33** and **LegalBench 84.74% ±0.45**; good general knowledge does not erase its weak legal *agent* score.
- [Moonshot model card](https://huggingface.co/moonshotai/Kimi-K2.6): **GPQA-Diamond 90.5**, **HLE-Full 34.7 without tools / 54.0 with tools**, **AIME 2026 96.4**. The GPQA figures differ modestly between independent and vendor evaluation; HLE tool access and different protocols should not be conflated. [Artificial Analysis](https://artificialanalysis.ai/models/kimi-k2-6) has deprecated this profile and currently supplies **no Intelligence Index score**; do not present an obsolete index as current.

Coding:

- [Vals' current evaluation](https://www.vals.ai/models/kimi_kimi-k2.6): **SWE-bench 76.20% ±1.91** (#42/88), **LiveCodeBench 86.77% ±0.97** (#20/143), **Vibe Code Bench v1.1 37.89% ±4.91**, **Code Migration 27.77% ±4.14** and **ProgramBench 0%**. Different tasks expose weaker project-scale and artifact-building performance than coding quiz scores suggest.
- [Moonshot's benchmark card](https://huggingface.co/moonshotai/Kimi-K2.6): **SWE-bench Verified 80.2**, **SWE-bench Pro 58.6**, **Terminal-Bench 2.0 66.7**, **LiveCodeBench v6 89.6** and **SciCode 52.2**. Moonshot used its own SWE-agent-derived harness and averaged coding results across 10 runs ([methodology](https://www.kimi.com/blog/kimi-k2-6)); Vals' lower/changed results are separately configured, not a contradiction within one test protocol.

Long context / vision:

- [Vals AI](https://www.vals.ai/models/kimi_kimi-k2.6) scores **MMMU Pro 86.30% ±0.83**, while [Moonshot](https://huggingface.co/moonshotai/Kimi-K2.6) reports **79.4** on its own MMMU-Pro setting; protocols and dates differ. No verified public near-limit MRCR/retrieval score for this exact model was found in these sources. The 256K window is capacity rather than evidence of reliable retrieval to the limit.

### Normalized scores (1–100)

- **Tool use: 86/100.** Vals' TB2.1 53.56 and vendor Claw/OSWorld support capable agents; Vals legal/tax and APEX results constrain general-purpose reliability.
- **Reasoning: 88/100.** Independent GPQA 89.14 and vendor HLE 34.7 are strong, but a maintained AA index and hard independent science suite are missing.
- **Context window: 75/100.** 262K falls in the 200K–500K tier; no verified long-range retrieval justifies a higher tier.
- **Multimodal: 84/100.** Text/image/video input with a strong independently measured MMMU score, but text-only output, no audio and first-party-only video caveats.
- **Coding: 85/100.** Independent SWE-bench 76.2 and LiveCodeBench 86.77 are good, tempered by TB2.1 53.56, Vibe 37.89 and ProgramBench 0.
- **Cost efficiency: 85/100.** $0.95/$4 is comparatively economical, but K2 access restrictions and planned retirement reduce practical value.
- **Overall Score: 84/100.** Half-up mean (86 + 88 + 75 + 84 + 85) / 5 = 83.6; best for existing-access users seeking open-weight, multimodal coding rather than a future-proof first-party K2 deployment.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-31
- Method: Independent web research comparing first-party checkpoint/API documentation with Vals measurements and Artificial Analysis's current status; scores are normalized interpretations, not vendor benchmark scores.
- Reference URLs:
  - [Moonshot Kimi K2.6 API guide](https://platform.kimi.ai/docs/guide/kimi-k2-6-quickstart.md)
  - [Moonshot pricing, context and retirement notice](https://platform.kimi.ai/docs/pricing/chat.md)
  - [Moonshot Kimi K2.6 open-weight model card and benchmarks](https://huggingface.co/moonshotai/Kimi-K2.6)
  - [Moonshot launch methodology](https://www.kimi.com/blog/kimi-k2-6)
  - [Vals AI independent Kimi K2.6 results and launch update](https://www.vals.ai/models/kimi_kimi-k2.6)
  - [Artificial Analysis Kimi K2.6 profile](https://artificialanalysis.ai/models/kimi-k2-6)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
