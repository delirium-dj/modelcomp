# Qwen 3.8 — findings by Pixel Canary

- Source: Alibaba / Qwen (`opencode/qwen-3.8`), hosted flagship of the Qwen3.8 generation
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 (Qwen3.8 Max generation; the OpenCode catalog stub `opencode/qwen-3.8`)
- **ID reconciliation (important):** this folder's `meta.json` is a placeholder stub ("Qwen 3.8 model evaluation entry", "128K total", "Standard pricing"). Three Qwen3.8 artifacts exist in the wild and in this repo: the hosted flagship `alibaba/qwen3.8-max` (covered by the separate `model/qwen3.8-max/` folder), the open-weights dense `Qwen3.8-27B` (separate `model/qwen-3.8-27b/` folder), and the `qwen3.8-max-preview` pre-release. This report scores the **hosted Qwen 3.8 flagship** (BenchLM profile `qwen3-8-max`, GA 2026-08-03), because that is what the paid `opencode/qwen-3.8` entry serves; the 27B and preview variants are cited separately where their numbers differ.
- **Short description:** Alibaba's August 2026 flagship: a 1M-context, omnimodal (text/image/video/PDF) reasoning model with very strong agentic-coding and long-context results at flat, mid-market pricing. BenchLM ranks it #14 of 512.
- **Provider / access:** Alibaba Model Studio / DashScope (`alibaba/qwen3.8-max`), Alibaba Cloud China (`alibaba-cn`), token-plan bundles (`alibaba-token-plan`, $0 inside the subscription), Empiriolabs / Crossmodel / DigitalOcean / Cerebras-style resellers, OpenRouter (`qwen/qwen3.8-max-0902`, `qwen/qwen3.8-max-prime`) and OpenCode (`opencode/qwen3.8-max`, `opencode/qwen-3.8` stub). OpenAI-compatible Chat Completions + Responses style API with tool calling.
- **Release / knowledge:** GA 2026-08-03 (preview 2026-07-19, `qwen3.8-max-preview`); a refreshed snapshot `qwen3.8-max-0902` shipped 2026-09-02. Knowledge cutoff not published.
- **Context window:** 1,000,000 input tokens with 131,072 max output on the Alibaba international endpoint (models.dev, verified); the OpenCode-hosted `opencode/qwen3.8-max` entry is capped at 262,144. BenchLM lists 1M.
- **Modalities:** Text + image + video + PDF in; text out. Reasoning: yes (thinking on by default, `reasoning_effort` controllable). Tool calling and structured/JSON output supported.
- **Pricing (as of 2026-09-29):** $2.00 / 1M input, $6.00 / 1M output, $0.25 cache reads (Alibaba international); $1.78 / $5.33 on the CN endpoint; $0 inside the Alibaba Token Plan. OpenCode lists the same $2/$6. A one-time 1M-token free quota exists on new Model Studio accounts; **no OpenCode Zen Free ID**.
- **Architecture:** BenchLM classifies Qwen3.8 Max as **open weight** in its profile; Alibaba's public material describes a ~2.4T-parameter sparse MoE lineage for the Max tier (reseller listings show `Qwen3.8-2.4T-A95B`), while the dense Apache-2.0 `Qwen3.8-27B` is a separate checkpoint. Treat "open weight" as BenchLM's label, not an Alibaba download link for the Max weights.

### Raw benchmarks found

BenchLM profile `qwen3-8-max` (updated 2026-09-28); composite **71.69/100, rank #14 / 512**.

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (Vals harness: 67.4%)
- OSWorld-Verified (computer use): **86.1%**; OSWorld 2.0: **19.4%**
- HLE with tools: **56.2%**
- Preview-stage agentic read-across (`qwen3-8-max-preview`, 15 rows, unranked): AA Agentic Index **49.6**, GDPval-AA **58.4%** / Elo **1630**

Coding:

- SWE-bench (Vals): **85.6%**; SWE-bench Pro: **67.7%**
- DeepSWE: **56.6%**; LiveCodeBench (Vals): **87.9%**
- Preview AA Coding Index: **71.8**; AA-SciCode **52.1**

Reasoning / knowledge:

- GPQA Diamond: **92.6%**; HLE (no tools): **43.6%**
- Preview AA profile: AA Intelligence Index **45.4**, AA-GPQA Diamond 92.8, AA-HLE 43.1, CritPt 17.7
- Preview AA-Omniscience: Accuracy **31.7%**, Hallucination Rate **28.8%**, Omniscience Index 12.0
- Instruction following (GA): IFBench **82.8%**

Long context:

- MRCRv2: **92.9%**

Multimodal:

- MathVision: **95.2%** (97.7% with Python); CharXiv **93.5%** (88.4% without tools)
- OmniDocBench 1.5: **92.1%**; RealWorldQA **88.0%**; ScreenSpot Pro **84.5%**
- Video-MME (with subtitle): **90.4%**; AA-MMMU-Pro **82.3%**; SimpleVQA **75.0%**
- Design Arena (website generation, read-across from same-family listings): no verified score for this exact ID

Open-weights sibling for context (`Qwen3.8-27B`, BenchLM 55.26/100, #58/512): Terminal-Bench 2.1 73.0%, OSWorld-Verified 84.3%, SWE-bench Pro 61.7%, AA Tau3 Banking 48.0%, GDPval-AA Elo 1409, AA Intelligence Index 33.7, Omniscience accuracy 15.6% / hallucination 30.3% — i.e. the folder id `opencode/qwen-3.8` must not be scored as the 27B.

- Terminal-Bench 4.0 / Toolathon / SWE Atlas / GraphWalks at 1M: no verified public score found for this exact ID

- **Tool use: 84/100.** Terminal-Bench 2.1 86.6% and OSWorld-Verified 86.1% are top-decile agentic/computer-use results, and HLE-with-tools 56.2% shows it uses tools productively; capped because independent indices stay mid-pack (AA Agentic Index 49.6, GDPval-AA Elo 1630 vs 1844–1846 for the Claude 5.5 leaders) and OSWorld 2.0 is only 19.4%.
- **Reasoning: 76/100.** GPQA Diamond 92.6% and AA Intelligence Index 45.4 place it just behind the frontier tier, but HLE 43.6%, CritPt 17.7% and an AA-Omniscience accuracy of 31.7% against a 28.8% hallucination rate are the hard caps — it is strong inside known distributions, weak at the frontier of unknown questions.
- **Context window: 85/100.** 1M input tokens with MRCRv2 92.9% is near-frontier retrieval evidence and 131K output is generous; capped because the OpenCode-hosted entry (`opencode/qwen3.8-max`) is capped at 262,144 and no GraphWalks/RULER curve at 1M exists.
- **Multimodal: 86/100.** Text/image/video/PDF input with elite measured results — MathVision 95.2% (97.7% with Python), CharXiv 93.5%, OmniDocBench 1.5 92.1%, Video-MME 90.4%; capped because output is text-only (no image/audio generation) and SimpleVQA 75.0% shows open-world visual QA still lags.
- **Coding: 82/100.** SWE-bench (Vals) 85.6%, SWE-bench Pro 67.7% and LiveCodeBench (Vals) 87.9% are strong and Terminal-Bench 2.1 86.6% is excellent, but DeepSWE 56.6% and AA Coding Index 71.8 trail the GPT-6/Claude 5.5 tier (Grok 4.6 posts 76.8 on the same index).
- **Cost efficiency: 80/100.** Flat $2/$6 per 1M with $0.25 cache reads for a #14-ranked frontier model, plus $0 access inside the Alibaba Token Plan and a one-time 1M-token free quota; capped because there is no OpenCode Zen Free ID ($0 tier would be 100) and the entry-level free quota is one-time only.
- **Overall Score: 82.6/100.** (84 + 76 + 85 + 86 + 82) / 5 = 82.6 — best fit as a low-cost frontier alternative for long-context, multimodal, tool-heavy agent work where maximum raw reasoning is not the bottleneck.

---

## Signature

- Provided by: **Pixel Canary (pixel-canary, early access via Vercel AI Gateway — underlying model not yet announced)** — 2026-09-29
- Method: Public internet research (BenchLM model profiles `qwen3-8-max` and `qwen3-8-max-preview` / `qwen3-8-27B`, models.dev provider + pricing index, OpenRouter listing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
