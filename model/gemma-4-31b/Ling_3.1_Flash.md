# Gemma 4 31B — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Gemma 4 31B
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B (31B Dense)
- **Short description:** Google DeepMind's largest dense open-weight Gemma 4 — natively multimodal (text+image), built-in thinking mode, positioned as frontier-level intelligence-per-parameter for local/self-hosted deployment; #3 open model on the Arena Text leaderboard at release.
- **Provider / access:** Google DeepMind — Apache 2.0 open weights (Hugging Face `google/gemma-4-31B`), Google AI Studio / Edge Gallery, self-host or community hosting. No first-party hosted API fee.
- **Release / knowledge:** Released 2026-04-02 (Google blog); technical report arXiv 2607.02770; Arena table as of 2026-06-19. Knowledge cutoff not stated in captured sources.
- **IDs:** `google/gemma-4-31b-it` (repo meta.json); `google/gemma-4-31B` (Hugging Face).
- **Context window:** 256K tokens for 31B (128K only for the E2B/E4B edge sizes). Repo meta.json's "128K context" is stale.
- **Modalities:** Text, image in; text out. No audio on 31B (audio only on E2B/E4B/12B). ~550M-parameter vision encoder; supports document/PDF parsing, screen/UI understanding, chart comprehension, multilingual OCR, handwriting, pointing, variable aspect ratios/resolutions. Built-in thinking mode generates reasoning traces.
- **Pricing (as of 2026-10):** Free open weights (Apache 2.0) — $0 to self-host; paid third-party hosting applies (repo meta.json: "Free open weights / standard hosting").
- **Architecture:** 30.7B params dense, 60 layers, 1024-token sliding window, 5:1 local:global attention, pp-RoPE (p=0.25 global), KV-cache reuse (−37.5% global KV footprint); BF16 69.9GB / SFP8 34.9GB / Q4_0 17.5GB; 140+ languages.

### Raw benchmarks found

All figures from Google's official model card / technical report (instruction-tuned, thinking mode unless stated):

Agent / tool use:

- τ²-Bench (average over 3): **76.9%** — Retail **86.4%**, Airline **75.0%**, Telecom **69.3%**.
- Terminal-Bench Hard: **36.0%**.
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **84.3%**.
- AIME 2026 (no tools): **89.2%**.
- HLE: **19.5%** no tools; **26.5%** with search.
- MMLU-Pro: **85.2%**; MMMLU: **88.4%**; BigBench Extra Hard: **74.4%**; IFBench: **76.0%**; IFEval: **98.9%**.
- Arena Text Elo: **1451±8** — #3 open model (as of 2026-06-19), leading dense open model; Google claims it outcompetes models 20× its size.

Coding:

- LiveCodeBench v6: **80.0%**.
- Codeforces Elo: **2150**.
- SciCode: **43.0%**.
- SWE-bench Verified / DeepSWE / Vibe Code Bench: no verified public score found.

Long context:

- MRCR v2 8-needle at 128K: **66.4%** (average).

Multimodal:

- MMMU-Pro: **76.9%**; MATH-Vision: **85.6%**; OmniDocBench 1.5: **0.131** average edit distance (lower is better); MedXPertQA-MM: **61.3%**.

### Normalized scores (1–100)

- **Tool use: 69/100.** τ²-Bench average 76.9% (Retail 86.4% strong, Telecom 69.3% weaker) is above the mid band, but Terminal-Bench Hard 36.0% is weak and no TB2.x/MCP-Atlas/τ³ evidence exists.
- **Reasoning: 71/100.** AIME 2026 89.2% (no tools) and GPQA 84.3% are good and BigBench Extra Hard 74.4% is solid; capped by HLE 19.5% no-tools (26.5% with search), far below the 40% frontier anchor.
- **Context window: 74/100.** 256K (meta.json's 128K is stale) sits between the 200K=70 and 1M=95 anchors; MRCR v2 66.4% at 128K is moderate retrieval evidence.
- **Multimodal: 69/100.** Text+image input with a 550M vision encoder; MMMU-Pro 76.9%, MATH-Vision 85.6% and OmniDocBench 0.131 are strong image-band evidence; no audio on this size.
- **Coding: 73/100.** LiveCodeBench v6 80.0% and Codeforces 2150 Elo are strong, but SciCode 43.0% and Terminal-Bench Hard 36.0% lag; no SWE-bench score found.
- **Cost efficiency: 97/100.** Apache 2.0 weights are $0 to self-host; only paid third-party hosting costs apply.
- **Overall Score: 71.2/100.** Mean of the five quality dimensions; an excellent open-weight value — near-frontier math/coding/vision for 31B — held below the frontier by HLE and tool-use evidence gaps.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Method: public internet research (Exa web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
