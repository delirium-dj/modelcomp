# Muse Glimmer 30B — findings by GPT 6 Sol

- Source: Meta (`meta-models/Muse-Glimmer-30B`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Identity / access:** Separate 29.6B dense, locally deployable **Apache-2.0** Meta checkpoint released August 2026, distilled from Muse Spark; its `high`/`xhigh` reasoning settings, GGUFs, and bundled DFlash drafter are not separate model identities ([Meta weights/card](https://huggingface.co/meta-models/Muse-Glimmer-30B), [Meta research announcement](https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model)).
- **Context / modalities:** **131,072+** stated context, text and image input, text output; video can be passed as separate image frames but is not a native video model, and audio is unsupported. January 4, 2026 knowledge cutoff ([Meta model card](https://huggingface.co/meta-models/Muse-Glimmer-30B)).
- **Cost:** Weights free under Apache-2.0, local GPU/energy costs remain. Meta offers quantization intended for 24–32 GB VRAM; independent [Artificial Analysis](https://artificialanalysis.ai/models/muse-glimmer) observes a **provider median $0.30 input / $1.20 output per million** and 106.3 tokens/s, *not* a Meta first-party API tariff. Full BF16 needs significantly more memory.

### Raw benchmarks found

- **Tools / agency:** Meta reports [MCP Atlas Public **75.5%**, DeepSearch QA **74.6%**, τ³-Banking **23.5%**, OSWorld-Verified **65.9%**, SkillsBench with skills **44.3%**](https://huggingface.co/meta-models/Muse-Glimmer-30B). The independent [AA Agentic Index **10.5** and GDPval-AA **893 Elo**](https://artificialanalysis.ai/models/muse-glimmer) appear in the [source-linked benchmark archive](https://benchlm.ai/models/muse-glimmer-30b), but are *different metrics*, not percentages directly comparable to Meta's tasks. Vendor [Siren AgentDojo **28.4% attack success**](https://huggingface.co/meta-models/Muse-Glimmer-30B) measures a security failure mode, not productive tool-use success.
- **Reasoning:** Meta [AIME 2026 **94.7%**, GPQA Diamond (AA) **83.5%**, HLE Text (AA) **22.0%**](https://huggingface.co/meta-models/Muse-Glimmer-30B). The latter two are attributed by Meta to AA; avoid claiming an independent *rerun* merely because Meta repeats their numbers. [AA's current Intelligence Index v5 **6**](https://artificialanalysis.ai/models/muse-glimmer) is an index with a newer nine-task mix, **not** 6% accuracy or evidence that historical AIME was wrong. [AA-Omniscience accuracy **28.0%** and hallucination **83.6%**](https://benchlm.ai/models/muse-glimmer-30b) constrain factual reliability on that different dataset.
- **Coding:** Vendor [SWE-bench Pro **51.2%**, SWE-bench Verified **76.0%**, Terminal-Bench 2.1 **51.7%**, SciCode **43.6%**](https://huggingface.co/meta-models/Muse-Glimmer-30B). Independent [AA Coding Index **49.0**, AA-SciCode **44.9%**](https://benchlm.ai/models/muse-glimmer-30b) corroborate a moderate coding capability, but the vendor's SWE Pro versus Verified results are different sets/harnesses and should not be blended.
- **Long context / vision:** Vendor [AA-LCR **80.0%**, Beam128K **65.1%**, MMMU Pro **74%**, ScreenSpot Pro **75.4%**](https://huggingface.co/meta-models/Muse-Glimmer-30B); independently sourced [AA-LCR **83.3%** and AA-MMMU-Pro **74.3%**](https://benchlm.ai/models/muse-glimmer-30b) are close but not identical, likely evaluation setup or snapshot differences. Neither is a verified retrieval test past the 131K native region. No verified native audio or video-generation benchmark applies.

### Normalized scores (1–100)

- **Tool use: 68/100.** Strong vendor MCP/OSWorld, independent lower general agent index and uneven banking/safety.
- **Reasoning: 72/100.** GPQA/AIME strength balanced against current AA v5 and poor omniscience reliability; metric versions distinguished.
- **Context window: 75/100.** 131K native and AA-LCR in the low 80s; 128K boundary caution.
- **Multimodal: 72/100.** Solid image/document/screenshot evaluation, text output only, no native audio/video.
- **Coding: 70/100.** Vendor SWE Pro 51.2/Verified 76 and independent SciCode 44.9; modest harder-task result.
- **Cost efficiency: 88/100.** Permissively licensed on-device weights and quantization; provider median tariff and hardware are not zero.
- **Overall Score: 71/100.** Half-up mean (68 + 72 + 75 + 72 + 70) / 5 = 71.4; cost excluded.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Separate model/dataset/space searches and direct Meta model-card review; contrasted source-linked Artificial Analysis and BenchLM independent observations. Kept Meta vendor submissions, AA-credited historical rows and AA's newer index separate.
- Reference URLs:
  - [Meta Muse Glimmer weights, specifications and evaluations](https://huggingface.co/meta-models/Muse-Glimmer-30B)
  - [Meta research launch](https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model)
  - [Artificial Analysis independent high-effort profile](https://artificialanalysis.ai/models/muse-glimmer)
  - [BenchLM source-linked benchmark archive](https://benchlm.ai/models/muse-glimmer-30b)
- Future sources: add a new file next to this one using the same headings.
