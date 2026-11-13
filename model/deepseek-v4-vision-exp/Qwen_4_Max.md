# DeepSeek-V4-Flash-Vision-Exp — findings by Qwen 4 Max

- Source: Vendor (DeepSeek AI) + independent press/trackers; subject slug `deepseek-v4-vision-exp`
- Date: 2026-11-13 (UTC)
- See also: [../../model-comparison.md](../../model-comparison.md) · [../../model-findings.md](../../model-findings.md)

## Model card

- **Name:** DeepSeek-V4-Flash-Vision-Exp (`deepseek-ai/DeepSeek-V4-Flash-Vision-Exp` on HF)
- **Short description:** DeepSeek's first experimental multimodal model in the V4 family — V4-Flash architecture + added visual modules + continued training; targets visual agent workflows (screenshot/diagram understanding + tool use) while maintaining V4-Flash's text-agent performance.
- **Provider/access:** DeepSeek API Platform (OpenAI Chat Completions + Responses, Anthropic Messages); open weights MIT on HF (~18K downloads per MindStudio); DeepInfra also serves it. DeepSeek Harness 0.1.1 supports it out of the box; vLLM (single 4×GB300 node, fp8 KV) and SGLang recipes with **DSpark speculative decoding** (target = draft, same checkpoint).
- **Release/knowledge:** **August 21 2026** (the-decoder, llm-stats; HF card updated Oct 17). Knowledge cutoff not published. Experimental status — no AA/BenchLM tracking (both 404 under `deepseek-v4-flash-vision-exp` and `deepseek-v4-vision-exp`).
- **IDs:** `deepseek-v4-flash-vision-exp`; distinct from DeepSeek-V4-Flash-0731 (text-only base), DeepSeek-V4.1-Flash (Sept base), DeepSeek-V4.1-Flash-1017, DeepSeek-V4-Pro.
- **Context window:** **1M tokens** (llm-stats); max output **393.2K on DeepSeek**, 1M on DeepInfra. Images: ≤384 tokens each (auto-normalized ~800×800; optional `detail` 512×512), up to **600 images/request**, max edge 8,192px (4,096px at ≥15 images), user messages only; Base64 / URL (32 MiB) / free Files API (64 MiB).
- **Modalities:** **Text + image in; text out** (JPEG/PNG/GIF/WebP, format sniffed from content). No audio/video.
- **Pricing (as of 2026-11-13, per 1M tokens):** DeepSeek **$0.22 in / $0.66 out; cached $0.007** (~97% discount; llm-stats) — follows V4-Flash rates per the-decoder. DeepInfra $0.44/$1.32, cached $0.14.
- **Architecture:** Builds on V4-Flash (0731): MoE + **DFlash attention** + Hyper-Connections + visual encoder/aligner; DSpark forward path for speculative decoding. Parameter count not stated in the card (base V4-Flash-0731 listed as 284B/13B in third-party peer tables — not confirmed for this checkpoint). MIT license.

### Raw benchmarks found

Vendor-reported (HF model card; **DeepSeek Harness minimal mode, max reasoning effort, temp 1.0 / top_p 0.95** — harness-labelled; Opus 4.8 column self-reported by Anthropic):
- Text agent: Terminal-Bench 2.1 **83.9** (Flash-0731 82.7 / Opus 4.8 85.0), NL2Repo **57.7** (54.2 / 69.7), CyberGym **75.3** (76.7 / 78.3), DeepSWE **59.3** (54.4 / 58.0 — beats Opus), Toolathlon-Verified **75.9** (70.3 / 76.2), DSBench-Hard **63.6** (59.6 / 71.7), AutomationBench Public **25.7** (25.1 / 27.2).
- Multimodal agent: ApexBench pass@1 **36.5** (26.2† / 39.4), Agents' Last Exam **27.3** (25.2† / 25.7 — beats Opus), Chartography **64.3** (– / 65.0), ZeroBench pass@5 **35.0** (– / 34.0 — beats Opus).
- † Vendor footnote: the 0731 baseline **ignored multimodal input elements** on ApexBench/ALE — those deltas measure gaining vision, not improving it (transparency signal noted by MindStudio).
- No GPQA/HLE/AIME/MMMU-Pro/CharXiv/SWE-V/LCB rows published; vendor claims text reasoning/world knowledge maintained vs V4-Flash.

Independent runs:
- **None found** — no Artificial Analysis page, no BenchLM page (404 both slug variants), no Vals/Epoch rows located. All benchmark evidence is vendor-run; press coverage (the-decoder, MindStudio) analyzes the same table.
- MindStudio curation check: Opus 4.8 wins 5/7 text benchmarks and ApexBench; DeepSeek wins DeepSWE, ZeroBench, ALE — table judged reasonably complete, not cherry-picked.
- llm-stats: 2 providers tracked; no independent eval scores ("Score pending" comparisons).

### Normalized scores (1–100)

- **Tool use: 84/100.** Toolathlon-V **75.9** (Opus 4.8 76.2 — near parity), TB2.1 83.9, ALE 27.3 (beats Opus 25.7), ApexBench 36.5 (Opus 39.4), AutomationBench 25.7 (Opus 27.2); strong visual-agent tool use at Flash pricing; capped by DSBench-Hard 63.6 (Opus 71.7), no GDPval/BrowseComp/τ-bench evidence, and vendor-harness-only provenance.
- **Reasoning: 78/100.** No direct reasoning evals published for this checkpoint — scored on vendor's maintained-text-performance claim, corroborated by text-agent gains (TB2.1 +1.2, DeepSWE +4.9, NL2Repo +3.5 vs 0731) and ZeroBench pass@5 35.0 beating Opus 4.8; base V4-Flash's GPQA ~89 / AIME26 ~96 tier is third-party-reported, not re-verified here; deducted for the evidence gap and experimental status.
- **Context window: 82/100.** 1M input with an unusually large **393.2K output** budget (DeepSeek; 1M on DeepInfra); 600-image requests at ≤384 tokens/image make long visual contexts cheap; deducted for **no LCR/MRCR retrieval evals** and no native-context/extensibility documentation.
- **Multimodal: 78/100.** Image-in only (no audio/video): agentic-MM near Opus 4.8 — ZeroBench 35.0 > 34.0, ALE 27.3 > 25.7, Chartography 64.3 ≈ 65.0, ApexBench 36.5 < 39.4; deducted for zero static-vision evals (no MMMU-Pro/CharXiv/OCR/MathVision rows) and the narrow modality scope.
- **Coding: 82/100.** TB2.1 **83.9** (Opus 85.0), DeepSWE **59.3** (beats Opus 58.0), NL2Repo 57.7, CyberGym 75.3; no SWE-V/SWE-Pro/LCB rows; strong terminal/agentic coding, unverified on classic SWE harnesses.
- **Cost efficiency: 95/100.** **$0.22/$0.66 with $0.007 cached input (~97% off)** — frontier-adjacent visual-agent capability at budget pricing; MIT weights + DSpark speculative decoding + 384-token image cap compound the savings; no independent $/task or throughput data (deducted from 97+).
- **Overall Score: 80.8/100.** Mean of the five quality dimensions (Cost excluded): (84+78+82+78+82)/5 = 80.8. An experimental vision add-on that punches far above its price on visual-agent tasks (two wins over Opus 4.8) — below DeepSeek-V4.1-Flash (85.0) on verified reasoning/coding breadth, roughly at Grok 4.6 (80.6) / Muse Ember (80.8) level overall, with the caveat that every benchmark row is vendor-run.

---

## Signature
- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-13
- Method: public internet research (DeepSeek HF model card raw README, the-decoder launch coverage, llm-stats provider/pricing tracker, MindStudio benchmark analysis); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: release date (Aug 21 press vs Oct 17 HF card update); context/output (1M/393.2K DeepSeek vs 1M/1M DeepInfra — provider tiers); pricing ($0.22/$0.66 DeepSeek vs $0.44/$1.32 DeepInfra); 0731 baseline footnote (ApexBench/ALE deltas partly artifact of text-only baseline); all benchmarks vendor-run in DeepSeek Harness minimal mode max effort — no independent verification exists (AA/BenchLM 404); parameters unstated (284B/13B base figure is third-party, not applied to this checkpoint).
- Reference URLs:
  - [DeepSeek-V4-Flash-Vision-Exp — Hugging Face model card](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)
  - [Deepseek releases experimental Flash vision model — The Decoder](https://the-decoder.com/deepseek-releases-experimental-flash-vision-model-that-rivals-opus-4-8-on-agent-benchmarks/)
  - [DeepSeek-V4-Flash-Vision-Exp — LLM Stats](https://llm-stats.com/models/deepseek-v4-flash-vision-exp)
  - [DeepSeek-V4-Flash-Vision-Exp benchmarks vs Opus 4.8 — MindStudio](https://www.mindstudio.ai/blog/deepseek-v4-flash-vision-benchmarks)
  - [DeepSeek API updates](https://api-docs.deepseek.com/updates/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.