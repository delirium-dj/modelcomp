# GLM-5.3-FlashX — findings by GPT 5.6 Sol

- Source: Z.ai (`glm-5.3-flashx`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX
- **Short description:** Z.ai's high-throughput hosted route for the native-multimodal GLM-5.3-Flash family, aimed at interactive coding and agent workflows. Z.ai documents the same capability contract as Flash but advertises FlashX at up to 200 output tokens/s.
- **Provider / access:** Z.ai OpenAI-compatible Chat Completions API; Vercel AI Gateway also exposes `zai/glm-5.3-flashx` ([Z.ai docs](https://docs.z.ai/guides/vlm/glm-5.3-flash), [Vercel catalog](https://vercel.com/ai-gateway/models/glm-5.3-flashx)).
- **Release / knowledge:** 2026-09-18 according to the dated exact-route listing; knowledge cutoff is not published ([Benchable](https://benchable.ai/models/z-ai/glm-5.3-flashx-20260918)).
- **IDs:** `glm-5.3-flashx`, `zai/glm-5.3-flashx`; no verified OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens with up to 131,072 output tokens, documented by Z.ai and independently cataloged by Vercel.
- **Modalities:** Video, image, text, and file input; text output; mandatory reasoning plus function calling, streamed tools, caching, and structured output ([Z.ai capability page](https://docs.z.ai/guides/vlm/glm-5.3-flash)).
- **Pricing (as of 2026-10-17):** $0.37/M uncached input, $0.075/M cached input, and $1.25/M output; cached-input storage is temporarily free ([official pricing](https://docs.z.ai/guides/overview/pricing)).
- **Architecture:** Hosted fast route for the 320B-total/18B-active GLM-5.3-Flash hybrid sparse/linear-attention family; no separate FlashX weights have been published.

### Raw benchmarks found

Agent / tool use:

- Benchable exact-route suite: **78.0% instruction following**, **99.0% email classification**, and **100% execution success across eight tests** ([exact dated route](https://benchable.ai/models/z-ai/glm-5.3-flashx-20260918)).
- Function calling and tool streaming are documented, but no Terminal-Bench, Tau, GDPval-AA, Claw-Eval, or other named agent benchmark was found for the exact FlashX route.
- Z.ai advertises **200 tokens/s**; this is a provider headline without a disclosed percentile, workload, region, or latency distribution, not an independent agent-quality result ([official docs](https://docs.z.ai/guides/vlm/glm-5.3-flash)).

Reasoning / knowledge:

- Benchable reports **100.0% reasoning**, **100.0% general knowledge**, **98.0% non-hallucination**, and **99.0% ethics** in its exact-route suite; the public summary does not expose item counts or the underlying test names, so these are weaker evidence than GPQA/HLE results ([Benchable](https://benchable.ai/models/z-ai/glm-5.3-flashx-20260918)).
- GPQA Diamond, HLE, LCR/MRCR, CritPt, and Artificial Analysis Intelligence Index: no verified exact-FlashX score found.

Coding:

- Benchable exact-route coding category: **97.0% accuracy (97th percentile)**; the public page does not identify the coding dataset or sample count ([Benchable](https://benchable.ai/models/z-ai/glm-5.3-flashx-20260918)).
- SWE-bench Verified, SWE-Pro, LiveCodeBench, SciCode, and DeepSWE: no verified exact-FlashX score found.
- Z.ai's published 84.3 Terminal-Bench 2.1, 63.4 DeepSWE v1.1, 56.3 NL2Repo, and 48.8 AutomationBench figures are for **GLM-5.3-Flash**, not FlashX, and are therefore not transferred ([independent review and source comparison](https://omniakey.com/blog/glm-5-3-flashx-review)).

Long context:

- Z.ai and Vercel agree on a **1M-token** context and **128K-token** maximum output, but no verified exact-route MRCR, RULER, or retrieval-at-length result was found.

Conflicting evidence:

- Benchable now publishes numeric exact-route category results, while OmniaKey's 2026-09-19 review says no named independent FlashX quality evaluation was then available. Both can be true: the dated Benchable route is sufficient to end zero-evidence exclusion, but its opaque category harness does not justify importing the stronger named benchmarks of base Flash or assigning frontier scores without a cap.

### Normalized scores (1–100)

- **Tool use: 76/100.** Exact-route instruction following (78%) and perfect execution reliability support a capable score, capped because no named agent/tool benchmark or tool-call success rate is public.
- **Reasoning: 88/100.** Benchable's exact-route 100% reasoning/knowledge and 98% non-hallucination results are strong, but missing harness details and no GPQA/HLE result prevent a frontier score.
- **Context window: 95/100.** The documented 1M context reaches the top capacity tier; no 512K+ retrieval result supports the methodology's 100-point ceiling.
- **Multimodal: 85/100.** Native video, image, file, and text input with text output fits the 75–90 tier; no audio input or non-text output is documented.
- **Coding: 90/100.** The exact route's 97% proprietary coding result supports a high score, capped by the undisclosed dataset and absence of SWE-bench, LiveCodeBench, or SciCode evidence.
- **Cost efficiency: 93/100.** $0.37/M input and $1.25/M output is inexpensive for a hosted 1M-context multimodal route, though not free and about 2.5x regular Flash pricing.
- **Overall Score: 87/100.** Half-up mean of the five quality dimensions `(76 + 88 + 95 + 85 + 90) / 5 = 86.8`; best suited to latency-sensitive multimodal coding after workload-specific validation.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-17
- Method: Three independent exact-name web searches followed by review of official Z.ai documentation/pricing and independent Vercel, Benchable, and OmniaKey sources; conflicting route-versus-family evidence was kept separate.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
