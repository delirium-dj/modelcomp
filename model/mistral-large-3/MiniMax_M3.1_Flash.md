# Mistral Large 3 — findings by MiniMax M3.1 Flash

- Source: Mistral (mistralai/Mistral-Large-3-675B-Instruct-2512)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 3
- **Short description:** Mistral's Apache-2.0 open-weight flagship MoE (675B total, 41B active) with image input, released 2025-12-02 as the general-purpose multimodal successor to Mistral Large 2. It is already deprecated in favour of Mistral Large 4 and is a distinct checkpoint from every other `mistral-large-*` entry.
- **Provider / access:** Mistral La Plateforme (`mistral-large-2512`, Chat Completions plus `/v1/agents` and `/v1/conversations`), OpenRouter (`mistral-large-2512`), and self-hosted weights on Hugging Face. Not present in the OpenCode Zen catalog checked on 2026-11-12 (Zen lists Mistral Large 4 only from the Mistral family).
- **Release / knowledge:** Released 2025-12-02. Knowledge cutoff not publicly stated by Mistral.
- **IDs:** `mistralai/Mistral-Large-3-675B-Instruct-2512` (weights), `mistral-large-2512` (API), `opencode/mistral-large-3` (comparison catalog id).
- **Context window:** 256K total; Mistral's model page lists "Context 256k" and Artificial Analysis stores `contextWindowTokens: 256000`. BenchLM's mirror instead lists 128K (see the conflict section). No maximum-output figure and no long-context retrieval measurement were published.
- **Modalities:** Text and image in, text out; structured outputs, function calling, document QnA, prefix completion, batching, agents and built-in tools.
- **Pricing (as of 2026-11-12):** $0.50 input / $1.50 output per 1M tokens on Artificial Analysis and La Plateforme, with a 90% cache-read discount. Mistral's own model page no longer lists a price because the model is deprecated.
- **Architecture:** Apache 2.0 open weights; sparse Mixture of Experts, 675B total parameters with 41B active; an NVFP4 checkpoint is published for vLLM on Blackwell NVL72 and single 8×A100 / 8×H100 nodes.

### Raw benchmarks found

#### Agent / tool use

| Benchmark | Value | Source | Notes |
|-----------|-------|--------|-------|
| τ²-bench (agentic tool use) | 24.6% | BenchLM mirror of Artificial Analysis rows | Independent run upstream |
| GDPval-AA (Elo) | 588 | BenchLM mirror of Artificial Analysis rows | Normalized GDPval-AA reads 0.0% |
| GDPval-AA (normalized) | 0.0% | BenchLM mirror of Artificial Analysis rows | Far below the 900–1200 mid band |
| AA Agentic Index | 2.4% | BenchLM mirror of Artificial Analysis rows | Near-floor agentic composite |
| Terminal-Bench 2.1 / Tau3-Banking / Claw-Eval | no verified public score found | — | Not published for this checkpoint |
| LMArena (OSS non-reasoning category) | #2, and #6 among OSS models overall | Mistral announcement | Vendor-reported preference ranking, not a tool-use metric |

#### Reasoning / knowledge

| Benchmark | Value | Source | Notes |
|-----------|-------|--------|-------|
| AA-GPQA Diamond | 68.0% | BenchLM mirror of Artificial Analysis rows | Independent run upstream |
| AA-HLE | 4.2% | BenchLM mirror of Artificial Analysis rows | Very low |
| AA-LCR | 36.0% | BenchLM mirror of Artificial Analysis rows | Independent run upstream |
| CritPt | 0.0% | BenchLM mirror of Artificial Analysis rows | Near-floor |
| Artificial Analysis Intelligence Index | N/A (null) | Artificial Analysis model page | Model is deprecated; Artificial Analysis still benchmarks it every 18 hours but reports no live index |
| AA-Omniscience Accuracy | 25.0% | BenchLM mirror of Artificial Analysis rows | Independent run upstream |
| AA-Omniscience Hallucination Rate | 86.0% | BenchLM mirror of Artificial Analysis rows | Highest hallucination rate among the models profiled here |
| AA-Omniscience Index | −39.6% | BenchLM mirror of Artificial Analysis rows | Negative knowledge composite |
| BenchLM overall | 34.16/100, rank #161 of 1026 | BenchLM, 17 of 815 benchmarks covered | Estimated evidence status; partial coverage |

#### Coding

| Benchmark | Value | Source | Notes |
|-----------|-------|--------|-------|
| AA-SciCode | 36.6% | BenchLM mirror of Artificial Analysis rows | Independent run upstream |
| AA Coding Index | 20.1% | BenchLM mirror of Artificial Analysis rows | Low coding composite |
| SWE-bench Verified / DeepSWE / Terminal-Bench / LiveCodeBench | no verified public score found | — | Not published for this checkpoint |

#### Multimodal

| Benchmark | Value | Source | Notes |
|-----------|-------|--------|-------|
| AA-MMMU-Pro | 55.7% | BenchLM mirror of Artificial Analysis rows | Independent run upstream |

#### Speed / efficiency

| Metric | Value | Source | Notes |
|--------|-------|--------|-------|
| Output speed | 77 tok/s | Artificial Analysis | 5-day endpoint average |
| Time to first answer token | 2.48s | Artificial Analysis | Faster than Mistral Small 4 |
| Time per Intelligence Index task | N/A | Artificial Analysis | Not computed for deprecated models |
| Cost per Intelligence Index task | N/A | Artificial Analysis | Not computed for deprecated models |

#### Long context

- No long-context retrieval measurement (MRCR, RULER, GraphWalks) at 256K was published for Mistral Large 3.

### Conflicting evidence (vendor vs independent) and how it was resolved

- **Context window.** Mistral's model page and Artificial Analysis both state 256K, while BenchLM's model mirror lists 128K for the same slug. Resolved in favour of the vendor specification plus the Artificial Analysis field (`contextWindowTokens: 256000`), because two independent registries agree and BenchLM gives no per-model source for its smaller figure. The score uses 256K.
- **Intelligence Index.** Artificial Analysis reports the index as N/A because the model is deprecated, while BenchLM carries a value of 9.3 for the same model through its archived Artificial Analysis rows. Resolved by treating 9.3 as a provisional, de-frozen value: it is used as a floor indicator rather than as a live score, and the reasoning score is capped by the 86% hallucination rate and 4.2% HLE instead.
- **Perceived quality versus measured quality.** Mistral's announcement highlights a #2 LMArena placement among OSS non-reasoning models, whereas every independent agentic, reasoning and coding metric in the Artificial Analysis rows is near the floor of its scale. Resolved by scoring the independent measurements and noting the Arena placement as a chat-preference signal only.
- **Deprecation status.** Mistral's lifecycle table marks Mistral Large 3 deprecated with a deprecation date of 2026-10-31 and replacement by Mistral Large 4 (retirement 2027-04-30); Artificial Analysis independently flags the model as deprecated and benchmarks it every 18 hours. Both agree, so the model is scored on its measured 2025-12 release with a lifecycle caveat.

### Notes on identity

- `mistral-large-3` is the `mistral-large-2512` checkpoint (December 2025), weights `mistralai/Mistral-Large-3-675B-Instruct-2512`. It is not Mistral Large 4, not Mistral Large 2.1 (`mistral-large-2411`), and not a re-badge of Mistral Medium 3.5.
- Mistral's announcement (Mistral 3 release) also covers the dense Ministral 3 14B / 8B / 3B models; those are separate entries and are not scored here.
- The base (non instruction-tuned) checkpoint of the same release exists on Hugging Face; the API id `mistral-large-2512` and the BenchLM row set both refer to the instruction-tuned 675B model profiled here.

### Normalized scores (1–100)

- **Tool use: 37/100.** τ²-bench 24.6% sits at the bottom of the mid band (Tau3 10–25% maps to 50–70 only when GDPval and Terminal-Bench are also in band), and GDPval-AA 588 Elo with a 2.4% Agentic Index keeps the dimension below 40 despite first-class function calling and an agents endpoint.
- **Reasoning: 46/100.** GPQA Diamond 68.0% is mid-band, but HLE 4.2%, CritPt 0.0%, an unavailable live Intelligence Index, a 25.0% Omniscience accuracy and an 86.0% hallucination rate put the model well below the 55–65 mid band.
- **Context window: 75/100.** A documented 256K total window places it in the 200K–500K tier (65–84, 200K anchored at 70); no long-context retrieval evidence was published, so it stays mid-tier.
- **Multimodal: 63/100.** Text-plus-image input with text output is the 60–70 band, corroborated by AA-MMMU-Pro 55.7%.
- **Coding: 40/100.** AA-SciCode 36.6% and an AA Coding Index of 20.1% are the weakest of the coding anchors, with no SWE-bench, DeepSWE or LiveCodeBench figure published to offset them.
- **Cost efficiency: 92/100.** $0.50 input / $1.50 output per 1M with a 90% cache discount lands at the ~$0.60/$2.20 anchor (~92), and Apache-2.0 self-hosting is free.
- **Overall Score: 52.2/100.** Mean of the five quality dimensions (37 + 46 + 75 + 63 + 40 = 261 / 5). Best fit: a large open-weight multimodal generalist whose published measurements trail its reputation, and which is scheduled for retirement in favour of Mistral Large 4.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: Public internet research (Mistral model page, model lifecycle table and announcement, Artificial Analysis model profile, BenchLM benchmark mirror, Hugging Face model card); every number carries its source, and scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral Large 3 model page (Mistral Docs)](https://docs.mistral.ai/models/mistral-large-3-25-12)
  - [Mistral 3 announcement (Mistral AI)](https://mistral.ai/news/mistral-3)
  - [Mistral Large 3 profile (Artificial Analysis)](https://artificialanalysis.ai/models/mistral-large-3)
  - [Mistral Large 3 benchmark mirror (BenchLM, markdown)](https://benchlm.ai/md/models/mistral-large-3.md)
  - [Mistral-Large-3-675B-Instruct-2512 model card (Hugging Face)](https://huggingface.co/mistralai/Mistral-Large-3-675B-Instruct-2512)
- Future sources: add a new file next to this one, e.g. `MiniMax_M3.1_Flash_R2.md`, using the same headings.
