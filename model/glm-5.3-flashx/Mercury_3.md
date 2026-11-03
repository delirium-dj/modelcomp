# GLM-5.3-FlashX — findings by Mercury 3

- Source: Z.ai/GLM-5.3-FlashX
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX (canonical API code `glm-5.3-flashx`; the `glm-5.3-flash-x` spelling is a forbidden duplicate merged into this folder)
- **Short description:** Z.ai's FlashX SKU of the GLM-5.3-Flash family — per the identity roster, the same 320B/18B FlashX weights as GLM-5.3-Flash with the same 1M window and price tier, branded FlashX for the API route. Sparse independent benchmark coverage; evidence shared with the Flash launch.
- **Provider / access:** Z.ai API (`glm-5.3-flashx`), OpenRouter `z-ai/glm-5.3-flashx`; open weights on Hugging Face (`zai-org/GLM-5.3-FlashX` family).
- **Release / knowledge:** Released 2026-08 (FlashX variant of the Flash launch); knowledge cutoff not published.
- **IDs:** `glm-5.3-flashx` (Z.ai canonical; `reasoning_effort` low/high/max).
- **Context window:** 1,000,000 tokens (1M) total (family spec); max output not disclosed (131K per models.dev family block).
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls; structured outputs.
- **Pricing (as of 2026-11-03):** $0.37 input / $1.25 output per 1M tokens (OpenRouter Z.ai route).
- **Architecture:** 320B total / 18B active MoE (family spec); MIT license, open weights.

### Raw benchmarks found

Agent / tool use (shared GLM-5.3-Flash family evidence — no separate FlashX-specific rows found):

- Terminal-Bench 2.1: **84.3%** (Z.ai launch; family); GDPval-AA v2: **1773 Elo**; Toolathlon-Verified: **78.4%**; AutomationBench v1.0.6: 48.8%; Agents' Last Exam: 26.3%

Reasoning / knowledge (family evidence):

- HLE: **55.3%** with tools (Z.ai); GPQA Diamond: 86.4% (Vals); II 28 (#8/23 open, AA)

Coding (family evidence):

- Terminal-Bench 2.1 84.3%; DeepSWE: 63.4%; SWE-bench: 92.0% (Vals); NL2Repo: 56.3%

Long context / Multimodal (family evidence):

- 1M window; CharXiv 89.4%; Chartography 78% (tools); MMVU 80.5%; ExtractBench 80.75%.

### Normalized scores (1–100)

Shared weights with GLM-5.3-Flash — scores mirror it, with sparse FlashX-specific verification:

- **Tool use: 86/100.** TB2.1 84.3%, Toolathlon 78.4%, GDPval 1773 (family).
- **Reasoning: 82/100.** HLE 55.3% w/tools; capped by GPQA 86.4%, II 28, no LCR/CritPt rows.
- **Context window: 88/100.** 1M family spec with no verified retrieval figure.
- **Multimodal: 84/100.** Image input with strong chart/document work; no video/audio input.
- **Coding: 87/100.** TB2.1 84.3%, SWE-bench 92%, DeepSWE 63.4%; capped by FrontierSWE v2 18.1% and no FrontierCode figure.
- **Cost efficiency: 95/100.** $0.37/$1.25 + MIT open weights — top-tier value.
- **Overall Score: 85/100.** Mean of (86+82+88+84+87)/5 = 85.4 → 85. Same model as GLM-5.3-Flash; choose the FlashX route when it is cheaper/faster at your provider.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (model-aliases canonical record, OpenRouter API page, Z.ai GLM-5.3-Flash launch for family evidence); scores are normalized 1–100 interpretations, not official vendor scores. Identity note: FlashX = same 320B/18B weights as Flash per the merged-alias record; FlashX-specific benchmark rows are sparse — family evidence flagged as such.
- Reference URLs:
  - [GLM-5.3-FlashX — OpenRouter model page ($0.37/$1.25)](https://openrouter.ai/z-ai/glm-5.3-flashx)
  - [GLM-5.3-Flash model card (Hugging Face, family)](https://huggingface.co/zai-org/GLM-5.3-Flash)
  - [GLM-5.3-Flash launch post (Z.ai, family)](https://z.ai/blog/glm-5.3-flash)
