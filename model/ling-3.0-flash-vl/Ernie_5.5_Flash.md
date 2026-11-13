# Ling 3.0 Flash VL — findings by Ernie 5.5 Flash

- Source: InclusionAI/Ling 3.0 Flash VL (`ling-3.0-flash-vl`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-flash-VL (native multimodal member of the Ling 3.0 family)
- **Short description:** InclusionAI's (Ant Group) next-generation native multimodal model (released 2026-09-10) built on Ling-3.0-flash — 124B total / 5.5B active MoE with a ViT encoder, VideoRoPE and a 42-layer KDA/Gated-MLA hybrid backbone. Brings vision into the full understand→reason→act→verify loop for multimodal agents.
- **Provider / access:** Open weights `inclusionAI/Ling-3.0-flash-VL` on Hugging Face / ModelScope (MIT); DeepInfra and other providers; SGLang / vLLM local serving.
- **Release / knowledge:** 2026-09-10; knowledge cutoff not published.
- **IDs:** `ling-3.0-flash-vl`, `inclusionAI/Ling-3.0-flash-VL`.
- **Context window:** 262,144 tokens (256K; 128K native + YaRN ×2).
- **Modalities:** text, image and video in; text out; thinking mode default (`enable_thinking`, ling3 reasoning parser); native tool calls (ling3 tool-call parser); JSON via structured output.
- **Pricing (as of 2026-11-13):** $0 per token self-hosted (MIT); hosted provider rates vary (DeepInfra).
- **Architecture:** sparse MoE, 124B total / 5.5B active, 42 layers alternating KDA : Gated MLA 5:1, ViT + 2-layer MLP projector, VideoRoPE, MIT license.

### Raw benchmarks found

> Vendor-reported AA Intelligence Index v4.1.1 = **42** (4 points above Ling-3.0-flash's 38) plus independent Artificial Analysis rows (via BenchLM): GDPval-AA 33.0%, AA-SciCode 44.2%, AA-MMMU-Pro 79.0%, AA-LCR 78.3%, CritPt 2.0%, AA-GPQA Diamond 86.2%, AA-HLE 22.0%. The vendor's full multimodal table is published only as an image (Terminal-Bench 2.1 was run under the AA protocol per the card notes, value not extractable).

Agent / tool use:

- GDPval-AA: **33.0%** (independent run)
- Terminal-Bench 2.1: run under the AA/Terminus-2 protocol (256K ctx, 3 runs, mean) — value only in the vendor's image table, not extractable
- Tau2 / Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- AA Intelligence Index v4.1.1: **42** (vendor-reported; +4 over Ling-3.0-flash)
- GPQA Diamond: **86.2%** (AA independent); HLE: **22.0%**; CritPt: **2.0%**
- AA-LCR: **78.3%** (long-context reasoning)

Coding:

- AA-SciCode: **44.2%** (independent)
- SWE-bench / LiveCodeBench / DeepSWE: no verified public score found

Multimodal:

- AA-MMMU-Pro: **79.0%** (independent) — strong for an open 5.5B-active model; full vendor vision table (counting, charts, documents, GUI) is image-only.

Long context:

- 256K with AA-LCR 78.3% — strong long-context reasoning; no MRCR/GraphWalks row.

### Normalized scores (1–100)

- **Tool use: 70/100.** GDPval-AA 33.0% is modest; the TB2.1 value is not extractable from the vendor's image table. Native tool calling + ling3 parser documented. Capped by the thin extractable agentic evidence.
- **Reasoning: 78/100.** GPQA 86.2% and AA-LCR 78.3% are solid, but the AA Index of 42 (v4.1.1 scale) and CritPt 2.0% / HLE 22.0% show the efficiency trade-off of a 5.5B-active model.
- **Context window: 88/100.** 256K with AA-LCR 78.3% — tier 200K–500K high band with measured long-context reasoning.
- **Multimodal: 82/100.** MMMU-Pro 79.0% independent is strong; image + video in with VideoRoPE; the vendor's broader vision table is image-only, which caps verification.
- **Coding: 62/100.** AA-SciCode 44.2% is the only extractable coding row — mid-tier; the TB2.1 and SWE rows are not extractable. Score reflects the single mid row.
- **Cost efficiency: 100/100.** $0 — MIT open weights.
- **Overall Score: 76/100.** Best fit for self-hosted multimodal agents (GUI/document/video understanding) at 256K with a tiny active footprint; the thin extractable benchmark surface keeps it out of the top band despite the strong MMMU-Pro and LCR rows.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13
- Method: public internet research (inclusionAI/Ling-3.0-flash-VL Hugging Face model card, Artificial Analysis model page, BenchLM evidence rows, Artificial Analysis index via vendor); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [inclusionAI/Ling-3.0-flash-VL — Hugging Face model card](https://huggingface.co/inclusionAI/Ling-3.0-flash-VL)
  - [Ling 3.0 Flash VL — BenchLM (7 evidence rows)](https://benchlm.ai/models/ling-3-0-flash-vl)
  - [Ling-3.0-flash-VL — Artificial Analysis](https://artificialanalysis.ai/models/ling-3-0-flash-vl)
  - [Ling-3.0-flash-VL — SGLang cookbook](https://docs.sglang.io/cookbook/autoregressive/InclusionAI/Ling-3.0-flash-VL)
- Future sources: add a new file next to this one, e.g. `Ernie_5.5_Flash_v2.md`, using the same headings.