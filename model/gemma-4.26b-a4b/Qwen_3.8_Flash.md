# Gemma 4 26B A4B — findings by Qwen 3.8 Flash

- Source: Google DeepMind / Gemma (curated id `opencode/gemma-4.26b-a4b`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B (instruction-tuned: `google/gemma-4-26B-A4B-it`)
- **Short description:** The MoE member of the Gemma 4 family — 25.2 B total but only 3.8 B active per token (8 of 128 experts + 1 shared), so it runs at roughly 4 B cost with a 26 B knowledge base. The best price/speed point in the family for image+text agents; **its ceiling is agentic reliability and knowledge calibration, not knowledge breadth.** Variant flag: distinct weights from the dense `model/gemma-4-31b/` and from the encoder-free `12B Unified`.
- **Provider / access:** open weights on Hugging Face (`google/gemma-4-26B-A4B`, pre-trained + instruction-tuned), Apache 2.0; served on Google Gemini API / Vertex AI / Gemini Enterprise Agent Platform, plus OpenRouter, DeepInfra, Bedrock, Snowflake. Chat Completions; native function calling; configurable thinking modes.
- **Release / knowledge:** released 2026-04-02/04-03 (card and aggregators agree on early April 2026); multilingual, pretrained on 140+ languages, 35+ supported out of the box. No knowledge-cutoff figure on the card.
- **IDs:** `google/gemma-4-26B-A4B-it` (HF), `google/gemma-4-26b-a4b-it` (OpenRouter), `gemma-4-26b-a4b` (Vertex/enterprise docs), curated id `opencode/gemma-4.26b-a4b`.
- **Context window:** 262,144 tokens (256 K) — card MoE spec table plus Artificial Analysis agree; 262 K vocabulary. **Max output is not disclosed on the card I read**, and I did not substitute an unverified figure.
- **Modalities:** text + image in, text out. **No audio on this variant** — the card lists audio natively only on E2B, E4B and 12B, and the MoE spec table's modality cell is "Text, Image". **Ambiguity flag:** the family overview also claims video understanding via sampled frames for Gemma 4 models generally, so a frame-based video path may exist on this checkpoint; Google Cloud's own model page describes it as text and image only, and I scored the documented text+image set.
- **Pricing (as of 2026-10-07):** Artificial Analysis lists $0.10 in / $0.37 out per 1M with a 40 % cache discount; llm-stats $0.070 / $0.340; OpenRouter (per curated `meta.json`) ~$0.09 / $0.30 and Bedrock/Snowflake $0.13 / $0.40. Self-hosting is $0 under Apache 2.0. Sub-dollar-tier pricing across every route.
- **Architecture:** MoE, 25.2 B total / 3.8 B active, 30 layers, 1024-token sliding window, 128 experts (8 active) + 1 shared, ~550 M vision encoder, hybrid local-global attention (last layer always global) with unified K/V on global layers and Proportional RoPE. "A" = active parameters.

### Raw benchmarks found

Vendor rows from the `google/gemma-4-26B-A4B-it` model card (instruction-tuned, thinking enabled); independent rows from Artificial Analysis and BenchLM `gemma-4-26b-a4b` (overall **46/100, #115 of 887**, 19 of 623 benchmarks covered, coverage flagged partial/conservative; AA Intelligence Index **17**, "well above average" against a median of 8 in its size class).

Agent / tool use:

- τ²-bench (average over 3 domains): **68.2 %** (vendor) vs **43.6 %** (Artificial Analysis, standardized harness) — a 24-point harness gap, the single most important caveat on this card
- GDPval-AA: **713 Elo** (normalized 3.4 %) — bottom band, real-world cowork collapses outside the vendor loop
- Terminal-Bench 2.1 / 4.0, Toolathlon, AutomationBench, Claw-Eval: **no verified public score found for this ID**
- AA-IFBench: **72.4 %** (instruction following, the tool-plumbing proxy)

Reasoning / knowledge:

- GPQA Diamond: **82.3 %** (vendor) / **79.2 %** (AA)
- HLE: **8.7 %** no tools (vendor), **17.2 %** with search (vendor) / **19.3 %** (AA)
- AIME 2026 (no tools): **88.3 %**; MMLU-Pro **82.6 %**; MMMLU **86.3 %**; BigBench Extra Hard **64.8 %**
- CritPt: **0.0 %** (AA) — no research-level physics/math output at all
- AA Intelligence Index: **17**; AA-LCR (long-context reasoning) **65.7 %**
- AA-Omniscience: accuracy **19.1 %**, hallucination rate **86.4 %**, index **−50.8** — the worst knowledge calibration in this scan; a 3.8 B-active model that sounds confident while being wrong

Coding:

- LiveCodeBench v6: **77.1 %**; Codeforces ELO **1718**
- AA-SciCode: **40.0 %**; AA Coding Index: **39.3 %**
- SWE-bench Verified, DeepSWE, SWE-Atlas, Vibe Code, NL2Repo: **no verified public score found for this ID**

Multimodal / long context:

- MMMU-Pro: **73.8 %** (vendor) / **69.2 %** (AA); MATH-Vision **82.4 %**; MedXPertQA MM **58.1 %**; OmniDocBench 1.5 average edit distance **0.149** (lower is better, 2nd best in family)
- Audio: **not applicable** on this variant (card marks the audio rows "−" for 26B A4B)
- MRCR v2 (8 needles, 128 K, average): **44.1 %** — vs 66.4 % for the dense 31B; long-context retrieval is the family's disclosed weak spot at scale

### Normalized scores (1–100)

- **Tool use: 56/100.** Function calling is native and IFBench 72.4 % is solid, but the only two agentic measurements disagree violently (τ² 68.2 % vendor vs 43.6 % independent) and GDPval-AA 713 is in the methodology's bottom band (~900–1200 is already only 50–70). No Terminal-Bench, Toolathlon or Claw-Eval row exists for the ID. Scored from the independent harness number, per methodology.
- **Reasoning: 66/100.** GPQA ~80–82 % and AIME 88.3 % are genuinely strong for 3.8 B active, and AA-LCR 65.7 % is respectable; but HLE 8.7 % without tools is the methodology's mid-band value, CritPt is 0.0 %, the Index is 17, and an 86.4 % Omniscience hallucination rate with a −50.8 index is a serious trust defect for a model that will be used for answers, not drafts.
- **Context window: 72/100.** 262,144 tokens lands squarely in the 200 K–500 K tier (65–84, with 200 K ≈ 70); it holds the middle of that tier on AA-LCR 65.7 % but is dragged by the disclosed MRCR 8-needle 128 K score of 44.1 %, and max output is undisclosed (caveat, not a separate deduction).
- **Multimodal: 70/100.** Text + image in with strong measured document/math/medical vision (MMMU-Pro 73.8 %, MATH-Vision 82.4 %, OmniDocBench 0.149) tops the methodology's "+image in" band (60–70); it cannot reach the 75–90 video/PDF band on documented evidence — audio is explicitly absent on this variant and video is only claimed at family level — and output is text-only.
- **Coding: 68/100.** LiveCodeBench v6 77.1 % and Codeforces 1718 are strong synthetic-competitive results, exactly the methodology's mid band ("LiveCode ~80 but SciCode <40 → 65–75"), with SciCode 40.0 % and Coding Index 39.3 % at the bottom of it and no repository-level SWE-bench/DeepSWE/Terminal-Bench row for the ID to justify more.
- **Cost efficiency: 96/100.** ~$0.07–0.13 in / $0.30–0.40 out across routes with a 40 % cache discount is just above the $0.10/$0.20 ≈ 97–99 anchor, and Apache 2.0 open weights make sustained volume effectively free on own hardware — the 3.8 B-active decode cost is the real efficiency story here.
- **Overall Score: 66/100.** Mean of the five quality dimensions (56 + 66 + 72 + 70 + 68) / 5 = 66.4 → 66; Cost excluded per `RULES.md`. Best fit: very high-volume image+text pipelines (document/chart/VQA parsing, extraction, captioning, code-completion assists) where 4 B-class throughput and open weights matter more than agentic endurance. Avoid it as an unattended research or facts source — the calibration numbers say it will invent answers.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-07
- Method: fresh public internet research (Hugging Face `google/gemma-4-26B-A4B-it` model card README, Artificial Analysis model page, BenchLM `gemma-4-26b-a4b`, OpenRouter/llm-stats/DeepInfra/GCP listings for pricing and release date); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
