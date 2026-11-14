- Source: Google/Gemini 1.5 Pro
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's 2024 multimodal model whose headline breakthrough was a 1M-token long-context window (with 10M-token experiments), capable of processing hour-long video, 11-hour audio and large codebases/PDFs. A distinct, legacy model; Gemini 1.5 Flash, 2.0/2.5/3.x generations are separate.
- **Provider / access:** Google AI Studio and Vertex AI.
- **Release / knowledge:** 2024; knowledge cutoff: no verified public score found.
- **IDs:** `gemini-1.5-pro`. No free Zen ID verified.
- **Context window:** **1,000,000 tokens** standard; **10,000,000 tokens** demonstrated experimentally (secondary Tencent Cloud coverage).
- **Modalities:** text, code, image, audio and video in, text out; PDF parsing, image captioning, video content analysis (up to 1 hour video / 11 hours audio / ~30,000 lines of code). No verified non-text output.
- **Pricing (as of 2026-11-14):** no rate card in the retrieved pages — no verified public price found.
- **Architecture:** Proprietary, closed weights; Mixture-of-Experts design documented for the 1.5 generation (secondary). Parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Long-context "needle-in-a-haystack" style retrieval across 1M tokens was the launch demonstration (qualitative; no exact figures in the retrieved excerpts)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- ~30,000-line codebase processing (qualitative)
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M standard / 10M experimental (secondary); no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 72/100.** Broad multimodal document/code analysis but no documented native tool-calling agent stack; capped at a conservative level.
- **Reasoning: 76/100.** Capable 2024-generation reasoning; capped by zero published numeric reasoning benchmarks in the retrieved sources.
- **Context window: 94/100.** A verified 1M-token window (10M experimental) with hour-long video and 11-hour audio processing — a genuine generational breakthrough; capped by no standard retrieval benchmark score.
- **Multimodal: 90/100.** Text, code, image, audio and video input with PDF parsing and video analysis; capped by text-only output and no published multimodal benchmark.
- **Coding: 74/100.** Large-codebase processing; capped by no published coding benchmark for this exact ID.
- **Cost efficiency: 74/100.** No verifiable rate card; scored at a neutral level given 1M-context utility. Excluded from Overall.
- **Overall Score: 81/100.** Half-up mean of 72, 76, 94, 90, 74 = 81.2 → 81. Best fit: historical/legacy long-document and long-video analysis; superseded by the Gemini 2.5/3.x generations.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Gemini 1.5 Pro article retrieved via public web search excerpt (2024 release, 1M context, five input modalities, 1-hour video / 11-hour audio / ~30,000-line code handling, PDF parsing, image captioning), plus a secondary Tencent Cloud article for the 10M-token experimental context — labelled secondary. No numeric benchmark scores were published in the retrieved excerpts, so every raw benchmark row is honestly marked "no verified public score found". Gemini 1.5 Flash and the 2.x/3.x generations are separate models, never merged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Gemini 1.5 Pro — 百度百科 (retrieved via search excerpt; 1M context, modalities, capabilities)](https://baike.baidu.com/item/Gemini%201.5%20Pro/64418820)
  - [Gemini Pro 1.5 对外开放使用 — 腾讯云开发者社区 (retrieved via search excerpt; secondary 10M context)](https://cloud.tencent.com/developer/article/2402942)
