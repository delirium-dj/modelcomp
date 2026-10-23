# Gemma 4 31B IT — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind (`gemma-4-31b`) — instruction-tuned (IT) release; public sources label it simply "Gemma 4 31B"
- Date: 2026-10-16 (UTC) — third pass (previous Signature 2026-09-20); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM (`gemma-4-31b`, 11 rows) computes an overall **39.8/100 (#143 of 228)** and re-confirms the prior pass. **No score change.**

> **Third-pass refresh — 2026-10-16** (≥3 independent sources: official Hugging Face model card `google/gemma-4-31B-it` + Gemma 4 Technical Report arXiv:2607.02770, Artificial Analysis, BenchLM, Vals AI).
> **Newly found rows:** LiveCodeBench v6 80.0%, MRCR v2 (8-needle, 128K) 66.4%, Codeforces ELO 2150, BigBench Extra Hard 74.4%, MMMLU 88.4%, AIME 2026 (no tools) 89.2%, Tau2 (average over 3) 76.9% and MMMU-Pro 76.9% (official HF model card); MATH-Vision 85.6%, MedXPertQA-MM 61.3% and OmniDocBench 1.5 0.131 (edit distance) (HF card); AA-IFBench 75.6% and AA-Omniscience Index -47.9 (Artificial Analysis via BenchLM); Vals AI Terminal-Bench 2.0 39.33% (#35/67), SAGE 55.03% (#2/91), MortgageTax 61.37%, Case Law v2 52.63%, Finance Agent v1.1 50.79%, Vals Index 38.94% and Vals Multimodal Index 45.12%.
> **Factual corrections:** (1) Video input **is** supported — the model processes video as frame sequences and supports interleaved multimodal input, so the earlier "no audio or video" line is wrong (audio remains unsupported on the 31B; only E2B/E4B/12B add audio). (2) Knowledge cutoff is **January 2025** (HF model card), previously recorded as unknown. (3) Max output is ~32,768–33K tokens (Vals AI), previously unknown. (4) Architecture detail: 31B dense, 60 layers, 1024-token sliding window, ~550M vision encoder, no audio encoder.
> **Conflicts:** (1) Context window reported as 256K (HF card, Artificial Analysis, BenchLM) vs 262,144 / "262k" (Vals AI; older pass). (2) Tau2-Bench: the HF model card reports **76.9%** ("average over 3"), while Artificial Analysis/BenchLM report **59.9%** — a large harness/aggregation gap (the earlier pass only carried 59.9%). (3) Video modality: Artificial Analysis and the HF card list video input; Vals AI lists video as not supported (it counts image+file input only). (4) GPQA Diamond upstream reads 84.3% (HF card/BenchLM) while AA-GPQA Diamond reads 85.7%.
> Sources: https://huggingface.co/google/gemma-4-31B-it · https://artificialanalysis.ai/models/gemma-4-31b · https://benchlm.ai/models/gemma-4-31b · https://www.vals.ai/models/google_gemma-4-31b-it

## Model card

- **Name:** Gemma 4 31B (instruction-tuned release) — Google DeepMind's open-weight Gemma 4 generation; the repo folder carries the `-it` suffix. Not an alias of any Gemini model: it is DeepMind's self-hostable counterpart, not a Gemini API tier.
- **Short description:** A 30.7B-parameter dense open-weight multimodal transformer released 2026-04-02 for self-hosted document analysis, research and high-volume inference where per-token API pricing does not fit; text, image and video (frame) input, strong on core reasoning, weaker on autonomous agentic/terminal work.
- **Provider / access:** Apache-2.0 open weights on Hugging Face (self-host, commercial use allowed) plus third-party hosts — OpenRouter is the main one ($0.09 in / $0.34 out per 1M, $0.05 cached, plus a separate rate-limited free tier); Artificial Analysis tracks 12 API providers. Native function calling and structured output are built in; the model is not served by a first-party Google API, and no OpenCode Zen ID exists for this model family.
- **Release / knowledge:** Released 2026-04-02 (vendor page, Artificial Analysis and Vals AI agree). Knowledge cutoff: **January 2025** (Gemma 4 model card training-data section, previously unknown).
- **IDs:** `gemma-4-31b` (open weights); host IDs vary by provider (e.g. OpenRouter). No Zen Free ID, so cost is scored on the open-weight/self-host position plus the cheapest paid host.
- **Context window:** 256K tokens (the HF card documents 256K; Vals AI reports the same window as 262,144 / "262k"). Max output: ~32,768–33K tokens (Vals AI, previously unrecorded). Hybrid attention interleaves 1024-token local sliding-window layers with periodic full global attention.
- **Modalities:** text, image and video (frame sequences) in; text out (including tool calls and structured formats); native multimodal input with MMMU-Pro 76.9%. Interleaved multimodal input and variable image resolution (70–1120 visual-token budgets) are supported. No audio in the 31B (audio is E2B/E4B/12B only, max 30s). Fluency claimed across 140+ languages; a configurable thinking mode trades latency for multi-step reasoning per request.
- **Pricing (as of 2026-10-16):** self-hosting the open weights costs only hardware/electricity (effectively $0 per token, and Artificial Analysis prices the Intelligence Index run at $0.00/task); OpenRouter $0.09 in / $0.34 out per 1M with $0.05 cached input; a rate-limited free host tier also exists. No per-token vendor API.
- **Architecture:** 30.7B-parameter dense transformer (not MoE), 60 layers, 1024-token sliding window, ~550M vision encoder, no audio encoder, open weights under Apache 2.0, 140+ languages, thinking mode toggled per request.

### Raw benchmarks found

Agent / tool use (the model's weakest area):

- MCP-Atlas: **54.2%** (from Meta's own published comparison for rival Muse Glimmer, which scored 75.5)
- DeepSearch QA: **61.7** (same comparison; Muse Glimmer 74.6)
- Tau2-Bench / τ²-bench: **59.9%** (Artificial Analysis / BenchLM) vs **76.9%** (official HF model card, "average over 3") — a large harness/aggregation gap
- Terminal-Bench Hard: **36.4** (vendor-reported — reported as "modest" by independent reviewers, better suited to supervised automation than autonomous computer use); Terminal-Bench 2.0: **39.33%** (Vals AI, #35 of 67)
- GDPval-AA: **6.0%** normalized / **755 Elo** (Artificial Analysis, via BenchLM) — well below the 900–1200 Elo mid band
- AA Agentic Index: **6.7%** (Artificial Analysis); Gert Labs: **35.26%**
- Claw-Eval / ClawProBench / Toolathon / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **84.3%** (HF model card; upstream/BenchLM row) / **85.7%** (AA-GPQA Diamond) — rank #26 of 44 peers, median 88.3%
- AIME 2026 (no tools): **89.2%**; MMLU-Pro: **85.2%** (vendor/HF model card)
- HLE: **26.5%** with search / **19.5%** without (model card); AA-HLE **23.6%** — below the 40%+ frontier reference
- AA-LCR: **69.7%** (Artificial Analysis long-context reasoning); CritPt: **1.4%**; AA-IFBench (instruction following): **75.6%**
- BigBench Extra Hard: **74.4%**; MMMLU: **88.4%** (HF model card)
- AA-Omniscience Accuracy: **20.0%**; Hallucination Rate: **85.0%**; AA-Omniscience Index: **-47.9** (Artificial Analysis)
- LMArena rank: **#3** among evaluated models at launch (vendor-reported)
- Artificial Analysis Intelligence Index: **14.7** (BenchLM citing AA) / **15** on v4.3.2 (Artificial Analysis, #19 of 141) — corroborates the earlier low reading
- MLCR / CritPt detail beyond the rows above: no further verified public score found

Coding:

- SWE-Rebench: **41.6%** (SWE-Rebench leaderboard); React Native Evals: **75.2%**
- LiveCodeBench v6: **80.0%** and Codeforces ELO: **2150** (HF model card)
- AA-SciCode: **45.5%**; AA Coding Index: **43.4%** (Artificial Analysis)
- SWE-bench Verified / DeepSWE / Vibe Code Bench / SWE-Atlas: no verified public score found (Vals AI reports a SWE-bench Verified subset of 53.92% inside its Vals Index, which is a partial split, not the full benchmark)

Multimodal:

- MMMU-Pro: **76.9%** (Gemma 4 31B model card); AA-MMMU-Pro: **73.4%** (Artificial Analysis); MATH-Vision: **85.6%**; MedXPertQA-MM: **61.3%**; OmniDocBench 1.5: **0.131** (average edit distance, lower better) (HF card). Image and video (frame) in, text out; no audio.

Long context:

- MRCR v2 (8-needle, 128K average): **66.4%** (HF model card) — the first depth-retrieval signal at this window; the 256K/262K window itself is documented on the model card, but no retrieval score beyond 128K is verified.

Composite panels:

- BenchLM: **39.88/100, #140 of 954** tracked models (partial coverage — 26 of 638 benchmarks), so its overall is explicitly conservative.
- Vals AI: Gemma 4 31B IT — SAGE **55.03%** (#2 of 91), Vals Index **38.94%**, Vals Multimodal Index **45.12%**; the strongest results are exam/education-style reasoning, not broad frontier dominance.

### Normalized scores (1–100)

- **Tool use: 74/100.** MCP-Atlas 54.2%, Tau2-Bench 59.9–76.9% and Terminal-Bench Hard 36.4% plus Vals Terminal-Bench 2.0 39.33%, with AA Agentic Index 6.7%, GDPval-AA 755 (below the 900–1200 mid band) and Gert Labs 35.26%, cap it at mid-band-low.
- **Reasoning: 84/100.** GPQA Diamond 84.3–85.7%, AIME 2026 89.2%, MMLU-Pro 85.2% and MRCR v2 66.4% demonstrate strong core reasoning; HLE 19.5–26.5% and AA Intelligence Index 14.7–15 keep it below the frontier cohort.
- **Context window: 82/100.** 256K (reported as 262,144 by Vals) hybrid sliding-window/global-attention window; MRCR v2 66.4% at 128K is the only measured retrieval depth.
- **Multimodal: 77/100.** Text, image and video (frame) input with MMMU-Pro 76.9%, AA-MMMU-Pro 73.4% and document/OCR support (OmniDocBench, MATH-Vision); no audio input on the 31B caps it below the video+audio band.
- **Coding: 76/100.** LiveCodeBench v6 80.0% and Codeforces ELO 2150 are strong, but SWE-Rebench 41.6%, AA-SciCode 45.5% and AA Coding Index 43.4% show a repo-scale gap.
- **Cost efficiency: 95/100.** Apache 2.0 open weights for self-hosting at $0/token plus cheap third-party hosting (OpenRouter $0.09/$0.34).
- **Overall Score: 79/100.** (74+84+82+77+76)/5 = 78.6 → **79** (Cost efficiency never enters Overall). Best fit: self-hosted multimodal document analysis and reasoning where per-token API cost must go to zero.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research; third-pass re-verification on 2026-10-16 against the official Hugging Face model card (`google/gemma-4-31B-it`) and the Gemma 4 Technical Report (arXiv:2607.02770), Artificial Analysis, BenchLM and Vals AI — correcting the modality (video supported) and knowledge-cutoff facts and adding the first LiveCodeBench, MRCR v2, Codeforces, Vals and AA-IFBench rows over the 2026-09-20 pass; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
