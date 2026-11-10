# Gemini 3.5 Flash — findings by Crouton Alpha

- Source: Google/Gemini 3.5 Flash
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's fast 3.5 Flash for 1M-context agentic work; top use case is cheap multimodal terminal automation.
- **Provider / access:** Google Gemini API `gemini-3.5-flash`, OpenCode Zen `opencode/gemini-3.5-flash` via `https://opencode.ai/inference/google/v1beta/models/gemini-3.5-flash`.
- **Release / knowledge:** 2026 (launch screenshots).
- **IDs:** `google/gemini-3.5-flash`, `opencode/gemini-3.5-flash` (paid).
- **Context window:** 1M tokens total (BenchLM).
- **Modalities:** Text and image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-09):** $1.50 input / $9.00 output per 1M (Zen). Paid only.
- **Architecture:** Proprietary, parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **76.2%** (launch screenshots); Vals **74.2%**
- MCP Atlas **83.6%** (launch screenshots)
- τ²-bench **95.3%** (AA)
- GDPval-AA **1345** (launch screenshots)
- OSWorld-Verified **78.4%** (launch screenshots)
- Finance Agent v2 **57.9%** (Vals Fabv2)

Reasoning / knowledge:

- GPQA **92.2%** (AA); Vals **92.7%**
- HLE **40.2%** (launch screenshots); AA-HLE **42.7%**
- AA-LCR **69.3%** (AA)
- ARC-AGI-2 **72.1%** (launch screenshots)
- Intelligence **50.2**; BenchLM **61.69 #48** (AA; BenchLM)
- FrontierMath v2 1-3 **62.807%** (Epoch)
- MRCR 1M **26.6%** (launch screenshots) — 1M retrieval caveat.

Coding:

- SWE Pro **55.1%** (launch screenshots)
- LiveCodeBench (Vals) **87.6%**, SWE (Vals) **78.8%**
- Vibe Code **48.68%** (Vals)
- AA Coding Index **70.1** (AA)

Long context:

- 1M; MRCR **77.3%**, MRCR 1M **26.6%** (launch screenshots), LCR **69.3%** — long-tail weak.

Multimodal:

- MMMU-Pro **83.6%** (launch screenshots); AA **84.3%**
- CharXiv **84.2%** (launch screenshots)
- ExtractBench **79.84%** (LlamaIndex)

### Normalized scores (1–100)

- **Tool use: 90/100.** TB2.1 76.2%, MCP Atlas 83.6%, τ²-bench 95.3% are frontier for Flash; GDPval 1345 caps it below 94.
- **Reasoning: 91/100.** GPQA 92.2%, HLE 40–43%, ARC 72.1% and FrontierMath 62.8% are strong; capped by CritPt 13.1%.
- **Context window: 84/100.** 1M native, but MRCR 1M 26.6% and LCR 69.3% show weak 1M retrieval — held well below top tier.
- **Multimodal: 76/100.** Image in, text out; MMMU 83–84% and CharXiv 84.2% excellent but image-only.
- **Coding: 88/100.** LiveCode 87.6%, SWE Vals 78.8% strong; SWE-Pro 55.1% and Vibe 48.7% cap it just below 90.
- **Cost efficiency: 60/100.** $1.50/$9.00 per 1M (Zen) — $9 output expensive for Flash, so ~60.
- **Overall Score: 86/100.** Mean (90+91+84+76+88)/5 = 85.8 → 86; best-fit fast terminal Flash (1M retrieval caveat).

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via Google launch screenshots, BenchLM, Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Gemini 3.5 Flash](https://benchlm.ai/models/gemini-3-5-flash)
  - [Artificial Analysis — Gemini 3.5 Flash](https://artificialanalysis.ai/models/gemini-3-5-flash)
  - [OpenCode Zen Model Catalog](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
