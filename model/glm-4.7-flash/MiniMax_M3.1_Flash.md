# GLM 4.7 Flash — findings by MiniMax M3.1 Flash

- Source: Z.ai (zai-org/GLM-4.7-Flash, model code `glm-4.7-flash`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-4.7-Flash
- **Short description:** Z.ai's MIT-licensed 30B-A3B mixture-of-experts model for lightweight, agentic deployment — the "Flash" member of the GLM-4.7 generation, with a 200K context window, 128K maximum output and hybrid reasoning. It is a distinct checkpoint from the 355B-class GLM-4.7 flagship and from the retired GLM-4.5-Flash.
- **Provider / access:** Z.ai API (`glm-4.7-flash`, Chat Completions with thinking controls and tool calling), OpenRouter (`z-ai/glm-4.7-flash`), and self-hosted weights from `zai-org/GLM-4.7-Flash` via vLLM, SGLang or Transformers. Not listed in the OpenCode Zen catalog checked on 2026-11-12 (Zen lists GLM 4.7, deprecated 2026-03-15, but no GLM 4.7 Flash entry).
- **Release / knowledge:** Released with the GLM-4.7 generation in December 2025. Knowledge cutoff not publicly stated by Z.ai.
- **IDs:** `zai-org/GLM-4.7-Flash` (weights), `glm-4.7-flash` (Z.ai API), `z-ai/glm-4.7-flash` (OpenRouter), `opencode/glm-4.7-flash` (comparison catalog id).
- **Context window:** 200K total with 128K maximum output tokens; Z.ai's model page states "Context Length 200K" and "Maximum Output Tokens 128K", and OpenRouter's model entry lists a 200,000-token context. This repository's model card instead claims 1M (see the conflict section).
- **Modalities:** Text in, text out; thinking mode plus Preserved Thinking for multi-turn agentic tasks; tool calling with the `glm47` tool-call parser and automatic tool choice enabled in vLLM-style deployments; structured output supported by some inference providers.
- **Pricing (as of 2026-11-12):** Free on the Z.ai platform (Free / Free / Free across input, output and cached reads). OpenRouter lists a nominal $0.0605 per 1M input tokens and $0.40 per 1M output tokens.
- **Architecture:** Open weights under the MIT license; Mixture-of-Experts with 30B total parameters and 3B active per token.

### Raw benchmarks found

#### Agent / tool use

| Benchmark | Value | Source | Notes |
|-----------|-------|--------|-------|
| τ²-Bench | 79.5% | GLM-4.7-Flash model card (Z.AI reported) | Compared with Qwen3-30B-A3B-Thinking-2507 at 49.0 and GPT-OSS-20B at 47.7 |
| BrowseComp | 42.8% | GLM-4.7-Flash model card (Z.AI reported) | Compared with Qwen3-30B-A3B-Thinking-2507 at 2.29 and GPT-OSS-20B at 28.3 |
| Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / Claw-Eval | no verified public score found | — | The model card names Terminal Bench 2 as a setting (Preserved Thinking on) but publishes no score |
| Z.ai claim | open-source state of the art among comparable-size models on SWE-bench Verified and τ²-Bench | Z.ai GLM-4.7 documentation | Vendor claim consistent with the published τ²-Bench row |

#### Reasoning / knowledge

| Benchmark | Value | Source | Notes |
|-----------|-------|--------|-------|
| AIME 2025 | 91.6% | GLM-4.7-Flash model card (Z.AI reported) | Compared with Qwen3-30B-A3B-Thinking-2507 at 85.0 and GPT-OSS-20B at 91.7 |
| GPQA Diamond | 75.2% | GLM-4.7-Flash model card (Z.AI reported) | Compared with Qwen3-30B-A3B-Thinking-2507 at 73.4 and GPT-OSS-20B at 71.5 |
| HLE | 14.4% | GLM-4.7-Flash model card (Z.AI reported) | Compared with Qwen3-30B-A3B-Thinking-2507 at 9.8 and GPT-OSS-20B at 10.9 |
| Artificial Analysis Intelligence Index / BenchLM overall | 38.94/100, rank #145 of 1026 | BenchLM, 4 of 815 benchmarks covered | Evidence status Estimated; all four rows are Z.AI-reported, so the composite is a vendor-data mirror |
| LCR / MRCR / CritPt | no verified public score found | — | Not published for this checkpoint |

#### Coding

| Benchmark | Value | Source | Notes |
|-----------|-------|--------|-------|
| SWE-bench Verified | 59.2% | GLM-4.7-Flash model card (Z.AI reported) | Compared with Qwen3-30B-A3B-Thinking-2507 at 22.0 and GPT-OSS-20B at 34.0 |
| LiveCodeBench v6 | 64.0% | GLM-4.7-Flash model card (Z.AI reported) | Compared with Qwen3-30B-A3B-Thinking-2507 at 66.0 and GPT-OSS-20B at 61.0 |
| DeepSWE / Terminal-Bench / SciCode / Vibe Code Bench | no verified public score found | — | Not published for this checkpoint |
| Evaluation protocol | default temperature 1.0, top-p 0.95, max new tokens 131072; SWE-bench Verified at temperature 0.7, top-p 1.0, max new tokens 16384; τ²-Bench at temperature 0 with 16384 max new tokens and additional Retail/Telecom prompts plus Airline domain fixes | GLM-4.7-Flash model card | Vendor-reported harness settings, so the rows are not independently reproduced |

#### Multimodal

| Benchmark | Value | Source | Notes |
|-----------|-------|--------|-------|
| Image / audio / video input | not supported — text in, text out | Z.ai model documentation and model card | No multimodal score exists |

#### Long context

- No long-context retrieval measurement (MRCR, RULER, GraphWalks) at 200K was published; the 200K / 128K figures are documented specifications.

### Conflicting evidence (vendor vs independent) and how it was resolved

- **Context window.** This repository's model card claims a 1M-token context, while Z.ai's model page states 200K with 128K maximum output, and OpenRouter's live model entry lists 200,000 tokens. Resolved in favour of the vendor figure (200K) because the platform documentation and the independent hosting provider agree; the 1M claim likely comes from Z.ai's other GLM variants (for example the 1M-context models listed in Mistral's and Z.ai's surrounding documentation) rather than from this checkpoint.
- **Vendor-reported versus independent benchmarks.** Every published number (τ²-Bench 79.5, BrowseComp 42.8, SWE-bench Verified 59.2, LiveCodeBench v6 64.0, GPQA 75.2, AIME 25 91.6, HLE 14.4) comes from Z.ai's own model card, and BenchLM explicitly labels all four rows it carries as "Reported by Z.AI". Resolved by scoring with the vendor rows, capping the dimensions where independent confirmation is missing, and flagging the BenchLM composite as a mirror of vendor data rather than an independent run.
- **Harness sensitivity.** The model card shows the same checkpoint scoring differently by setting (for example LiveCodeBench v6 at 64.0 versus 66.0 for the Qwen3 comparator under identical vendor conditions), and it documents that τ²-Bench prompts were modified and the Airline domain was patched following the Claude Opus 4.5 report. Resolved by noting the protocol in the raw benchmark rows and by not pushing the tool-use dimension into the frontier band, since τ²-Bench under a modified harness is not directly comparable to unmodified runs.
- **Zen availability.** This repository's model card says "Free on Zen", but the OpenCode Zen model list checked on 2026-11-12 contains no GLM 4.7 Flash entry (only GLM 4.7, deprecated 2026-03-15, and a GLM-5.3-Flash Free id). Resolved by pricing the model on the documented Z.ai free tier and describing OpenRouter as the only paid aggregator entry.

### Notes on identity

- `glm-4.7-flash` is the 30B-A3B MoE checkpoint published as `zai-org/GLM-4.7-Flash` with MIT weights, distinct from the GLM-4.7 flagship. Z.ai's GLM-4.7 page also lists GLM-4.7-FlashX and the full-size GLM-4.7 with its own 200K / 128K card and much higher flagship scores (SWE-bench Verified 73.8%, LiveCodeBench V6 84.9, τ²-Bench 84.7); those numbers belong to the flagship and are not credited to this checkpoint.
- After 2026-01-30, calls addressed to the retired `glm-4.5-flash` model code are automatically routed to GLM-4.7-Flash, which makes this checkpoint the de facto successor of the free GLM-4.5 tier and the reason any post-2026 measurements of the old code describe this model rather than the old one.
- The GLM-4.7 generation is deprecated on OpenCode Zen as of 2026-03-15, but the checkpoint remains available on the Z.ai platform, on OpenRouter and as open weights.

### Normalized scores (1–100)

- **Tool use: 70/100.** τ²-Bench 79.5% and BrowseComp 42.8% are strong agentic numbers for a 30B-class model, and the 200K window plus tool calling support are documented; the score stops at the top of the mid band because Terminal-Bench 2.1, GDPval-AA and Claw-Eval are absent, the τ²-Bench run used modified prompts, and all rows are vendor-reported.
- **Reasoning: 64/100.** AIME 2025 at 91.6% and GPQA Diamond at 75.2% sit in the mid-to-strong band while HLE at 14.4% is only slightly above the sub-10% zone; the absence of an independent Intelligence Index, LCR or CritPt reading and the estimated BenchLM composite of 38.94 keep the dimension below the frontier band.
- **Context window: 70/100.** A documented 200K total window with 128K maximum output maps to the 200K–500K tier where 200K is anchored at 70; no retrieval measurement at 200K was published to justify going higher.
- **Multimodal: 15/100.** Text in, text out only.
- **Coding: 62/100.** SWE-bench Verified at 59.2% and LiveCodeBench v6 at 64.0% are solid for the class and well clear of the 22.0 / 34.0 comparators, but they are vendor-reported, Terminal-Bench, DeepSWE and SciCode rows are missing, and the headline coding numbers come from the same published card.
- **Cost efficiency: 100/100.** The Z.ai pricing page lists GLM-4.7-Flash as free for input, output and cached reads, and MIT-licensed weights allow free local deployment; OpenRouter's nominal per-token charge is the only paid route.
- **Overall Score: 56.2/100.** Mean of the five quality dimensions (70 + 64 + 70 + 15 + 62 = 281 / 5). Best fit: a free, MIT-licensed 30B-A3B model for agentic coding and tool-heavy workflows with a generous 200K window, provided one accepts vendor-reported evaluation data.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: Public internet research (Z.ai model documentation and pricing pages, the GLM-4.7-Flash Hugging Face model card, BenchLM benchmark mirror, OpenRouter model entry, OpenCode Zen model list); every number carries its source, and scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GLM-4.7-Flash model card (Hugging Face)](https://huggingface.co/zai-org/GLM-4.7-Flash)
  - [GLM-4.7 model documentation (Z.ai docs)](https://docs.z.ai/guides/llm/glm-4.7)
  - [Z.ai pricing overview (Z.ai docs)](https://docs.z.ai/guides/overview/pricing)
  - [GLM-4.7-Flash benchmark mirror (BenchLM, markdown)](https://benchlm.ai/md/models/glm-4-7-flash.md)
  - [z-ai/glm-4.7-flash model entry (OpenRouter API)](https://openrouter.ai/api/v1/models)
- Future sources: add a new file next to this one, e.g. `MiniMax_M3.1_Flash_R2.md`, using the same headings.
