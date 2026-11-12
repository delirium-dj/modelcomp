# Mistral Small 4 — findings by MiniMax M3.1 Flash

- Source: Mistral (mistralai/Mistral-Small-4-119B-2603)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Small 4
- **Short description:** Mistral's compact hybrid MoE that merges instruct chat, Magistral-style reasoning and Devstral-style agentic coding in one checkpoint, with native image input. It is the open-weight, GA successor to the Mistral Small 3.x line and is not a renamed variant of any other folder entry.
- **Provider / access:** Mistral La Plateforme (`mistral-small-2603`, Chat Completions, plus `/v1/agents` and `/v1/conversations` endpoints), OpenRouter (`mistralai/mistral-small-2603`), and self-hosted weights on Hugging Face. Not present in the OpenCode Zen catalog checked on 2026-11-12 (Zen lists Mistral Large 4 only from the Mistral family).
- **Release / knowledge:** Released 2026-03-16 (GA). Knowledge cutoff not publicly stated by Mistral.
- **IDs:** `mistralai/Mistral-Small-4-119B-2603` (weights), `mistral-small-2603` (API), `opencode/mistral-small-4` (comparison catalog id).
- **Context window:** 262,144 tokens (256K) total; Mistral's model page lists "Context 256k" and Artificial Analysis stores `contextWindowTokens: 256000`. No published maximum-output figure and no long-context retrieval measurement was found.
- **Modalities:** Text and image in, text and code out; reasoning effort configurable per request; function calling, structured outputs, predicted outputs, document QnA, built-in tools, batching.
- **Pricing (as of 2026-11-12):** $0.15 input / $0.60 output per 1M tokens on La Plateforme, 90% cache-read discount (Artificial Analysis). Artificial Analysis reports $0.04 cost per Intelligence Index task.
- **Architecture:** Apache 2.0 open weights; Mixture of Experts with 128 experts and 4 active per token, 119B total parameters and 6.5B activated per token (vendor model card says 6B active, 8B including embedding and output layers); NVFP4 and speculative-decoding Eagle head checkpoints published.

### Raw benchmarks found

#### Agent / tool use

| Benchmark | Value | Source | Notes |
|-----------|-------|--------|-------|
| τ²-bench (agentic tool use) | 41.2% | BenchLM mirror of Artificial Analysis rows | Independent run upstream |
| GDPval-AA (Elo) | 537 | BenchLM mirror of Artificial Analysis rows | Normalized GDPval-AA reads 0.0% |
| GDPval-AA (normalized) | 0.0% | BenchLM mirror of Artificial Analysis rows | Bottom of the professional-task distribution |
| AA Agentic Index | 1.4% | BenchLM mirror of Artificial Analysis rows | Very low agentic composite |
| Terminal-Bench 2.1 / Tau3-Banking / Claw-Eval | no verified public score found | — | Not published by Mistral or Artificial Analysis |
| BenchLM overall | 26.98/100, rank #194 of 1026 | BenchLM, 16 of 815 benchmarks covered | Coverage is partial, so the composite is conservative |

#### Reasoning / knowledge

| Benchmark | Value | Source | Notes |
|-----------|-------|--------|-------|
| AA-GPQA Diamond | 76.9% | BenchLM mirror of Artificial Analysis rows | Independent run upstream |
| AA-HLE | 9.9% | BenchLM mirror of Artificial Analysis rows | Frontier models reach 40%+ |
| AA-LCR | 49.7% | BenchLM mirror of Artificial Analysis rows | Independent run upstream |
| CritPt | 0.3% | BenchLM mirror of Artificial Analysis rows | Near-floor |
| Artificial Analysis Intelligence Index | 4.3% | Artificial Analysis model page (`intelligenceIndex` 4.297) | Far below the 20–35 mid band |
| AA-Omniscience Accuracy | 21.4% | BenchLM mirror of Artificial Analysis rows | Independent run upstream |
| AA-Omniscience Hallucination Rate | 66.6% | BenchLM mirror of Artificial Analysis rows | High hallucination rate |
| AA-Omniscience Index | −31.0% | BenchLM mirror of Artificial Analysis rows | Negative knowledge composite |

#### Coding

| Benchmark | Value | Source | Notes |
|-----------|-------|--------|-------|
| AA-SciCode | 38.8% | BenchLM mirror of Artificial Analysis rows | Independent run upstream |
| AA Coding Index | 26.6% | BenchLM mirror of Artificial Analysis rows | Low coding composite |
| LiveCodeBench | no verified public score found (absolute) | Mistral announcement | Vendor states only that Mistral Small 4 "outperforms GPT-OSS 120B while producing 20% less output" |
| SWE-bench Verified / DeepSWE / Terminal-Bench | no verified public score found | — | Not published for this checkpoint |

#### Multimodal

| Benchmark | Value | Source | Notes |
|-----------|-------|--------|-------|
| AA-MMMU-Pro | 56.8% | BenchLM mirror of Artificial Analysis rows | Independent run upstream |
| AA LCR (Mistral variant) | 0.72 at 1.6K characters of output | Mistral announcement | Efficiency claim vs Qwen models at 5.8–6.1K characters |

#### Speed / efficiency

| Metric | Value | Source | Notes |
|--------|-------|--------|-------|
| Output speed | 143 tok/s | Artificial Analysis | 5-day endpoint average |
| Time to first answer token | 11.54s | Artificial Analysis | Reasoning variant profile |
| Time per Intelligence Index task | 1.7 minutes | Artificial Analysis | — |
| End-to-end completion time | 40% lower than Mistral Small 3 (latency-optimized setup) | Mistral announcement and model card | Vendor claim |
| Throughput | 3x more requests per second than Mistral Small 3 (throughput-optimized setup) | Mistral announcement and model card | Vendor claim |

#### Long context

- No long-context retrieval measurement (MRCR, RULER, GraphWalks) at 256K was published for Mistral Small 4; the 256K figure is a documented specification only.

### Conflicting evidence (vendor vs independent) and how it was resolved

- **AA LCR.** Mistral's announcement quotes "AA LCR 0.72 with just 1.6K characters"; the Artificial Analysis rows mirrored by BenchLM report AA-LCR 49.7% and a negative Omniscience Index. These are different renderings of the same long-context reasoning family (Mistral quotes a length-normalised efficiency score, Artificial Analysis reports the graded score). Resolved by keeping the independent 49.7% for scoring and treating the 0.72 figure as a vendor efficiency claim only.
- **LiveCodeBench.** Mistral claims Mistral Small 4 beats GPT-OSS 120B with 20% less output; no absolute LiveCodeBench score exists publicly, and the independent AA Coding Index (26.6%) and AA-SciCode (38.8%) point to a much weaker absolute coding position than the comparison implies. Resolved by scoring against the independent numbers and not crediting the relative claim.
- **BenchLM page rendering.** BenchLM's rendered HTML profile for this slug states the model "has no source-displayable benchmark rows yet", while BenchLM's own markdown mirror for the same slug (last updated 2026-11-11) reports 26.98/100 from 16 of 815 benchmarks. Resolved by using the markdown mirror (which carries the Artificial Analysis rows and per-row provenance) and marking the composite as provisional.
- **Active parameters.** The vendor model card states 6.5B activated per token while Mistral's announcement states 6B active (8B including embedding and output layers). Immaterial to scoring; recorded as a documentation difference.

### Notes on identity

- `mistral-small-4` is the March 2026 GA checkpoint `mistral-small-2603` (weights `mistralai/Mistral-Small-4-119B-2603`). It is not the retired `mistral-small-2506` (Mistral Small 3.2) and not a re-badge of Mistral Medium 3.5.
- Artificial Analysis's profile page for this slug is titled "Mistral Small 4 (Reasoning)", and BenchLM lists a separate sibling entry "Mistral Small 4 (Reasoning)" with no score computed. The Artificial Analysis rows mirrored onto the base slug therefore describe the reasoning-capable profile of the same 119B-A6B checkpoint family, which ships with configurable reasoning effort rather than a separate checkpoint. Scores in this report are treated as covering the Small 4 release.
- Mistral lists a sibling profile "Mistral Small 4 (Reasoning)" as a distinct BenchLM variant; no separate weights repository was found for it, so it is not scored as a separate model here.

### Normalized scores (1–100)

- **Tool use: 38/100.** τ²-bench 41.2% is a usable agentic number, but GDPval-AA 537 Elo (0.0% normalized) and an AA Agentic Index of 1.4% sit far below the mid band (GDPval 900–1200), so the composite is capped well under 50 despite native function calling and an agents endpoint.
- **Reasoning: 50/100.** GPQA Diamond 76.9% and AA-LCR 49.7% are respectable, but HLE 9.9%, CritPt 0.3%, an Intelligence Index of 4.3% and a 66.6% hallucination rate pull the dimension below the 55–65 mid band defined by GPQA 60–80% with HLE under 10%.
- **Context window: 75/100.** A documented 256K total window sits in the 200K–500K tier (65–84, with 200K anchored at 70); no long-context retrieval measurement at 256K was published, so the score stays below the tier ceiling.
- **Multimodal: 64/100.** Native text-plus-image input with text output places it in the 60–70 band, supported by AA-MMMU-Pro 56.8%.
- **Coding: 44/100.** AA-SciCode 38.8% and an AA Coding Index of 26.6% are below the mid band (SciCode under 40% caps coding at roughly 65–75 when other anchors are strong), and no SWE-bench, DeepSWE or Terminal-Bench number exists for this checkpoint.
- **Cost efficiency: 96/100.** $0.15 input / $0.60 output per 1M with a 90% cache discount and $0.04 per Intelligence Index task is near the $0.10/$0.20 anchor band (97–99), just below it on output price.
- **Overall Score: 54.2/100.** Mean of the five quality dimensions (38 + 50 + 75 + 64 + 44 = 271 / 5). Best fit: an inexpensive, multimodal, open-weight hybrid for chat and light agentic work, not a frontier reasoning or coding engine.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: Public internet research (vendor model pages and announcements, Artificial Analysis model profile, BenchLM benchmark mirror, Hugging Face model card); every number carries its source, and scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral Small 4 model page (Mistral Docs)](https://docs.mistral.ai/models/mistral-small-4-0-26-03)
  - [Mistral Small 4 announcement (Mistral AI)](https://mistral.ai/news/mistral-small-4)
  - [Mistral-Small-4-119B-2603 model card (Hugging Face)](https://huggingface.co/mistralai/Mistral-Small-4-119B-2603)
  - [Mistral Small 4 profile (Artificial Analysis)](https://artificialanalysis.ai/models/mistral-small-4)
  - [Mistral Small 4 benchmark mirror (BenchLM, markdown)](https://benchlm.ai/md/models/mistral-small-4.md)
- Future sources: add a new file next to this one, e.g. `MiniMax_M3.1_Flash_R2.md`, using the same headings.
